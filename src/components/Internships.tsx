import { motion } from 'framer-motion'
import { useState, useRef, useEffect, useCallback } from 'react'
import { experience } from '../data/profile'


const Internships = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  // centers: pixel offsets of each card's vertical center relative to timeline top
  const [centers, setCenters] = useState<number[]>([])
  // Track which cards are expanded (show all bullets)
  const [expanded, setExpanded] = useState<Set<number>>(new Set())
  const cardRefs = useRef<HTMLDivElement[]>([])
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const timelineRef = useRef<HTMLDivElement | null>(null)

  // Smooth center-based active card detection to avoid jitter
  useEffect(() => {
    let ticking = false
    const updateActive = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2
      let bestIdx = 0
      let bestDist = Number.POSITIVE_INFINITY
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const center = rect.top + window.scrollY + rect.height / 2
        const dist = Math.abs(center - viewportCenter)
        if (dist < bestDist) { bestDist = dist; bestIdx = i }
      })
      setActiveIndex(prev => prev === bestIdx ? prev : bestIdx)
    }
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    // Initial run
    updateActive()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Measure card centers for timeline alignment
  const measureCenters = useCallback(() => {
    if (!timelineRef.current) return
    const topBase = timelineRef.current.getBoundingClientRect().top + window.scrollY
    const newCenters: number[] = []
    cardRefs.current.forEach(el => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const center = rect.top + window.scrollY + rect.height / 2 - topBase
      newCenters.push(center)
    })
    setCenters(newCenters)
  }, [])

  useEffect(() => {
    // initial + delayed re-measure to account for fonts/layout shifts
    measureCenters()
    const t = setTimeout(measureCenters, 120)
    window.addEventListener('resize', measureCenters)
    return () => { clearTimeout(t); window.removeEventListener('resize', measureCenters) }
  }, [measureCenters])

  // Keyboard navigation (ArrowDown / ArrowUp)
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(prev => {
        const next = Math.min(prev + 1, experience.length - 1)
        const el = cardRefs.current[next]
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        return next
      })
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(prev => {
        const next = Math.max(prev - 1, 0)
        const el = cardRefs.current[next]
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        return next
      })
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,0.68,0.32,0.98] } },
    inactive: { opacity: 0.75, transition: { duration: 0.4 } }
  }

  // Brand-specific colors per user request
  const companyBrandColors: Record<string, { accent: string; logoBg: string; tagBg: string }> = {
    'fidelity investments': { accent: '#007A33', logoBg: '#f3fbf7', tagBg: '#e1f3eb' }, // Green
    'waters corporation': { accent: '#4F6F7F', logoBg: '#f3f6f8', tagBg: '#e4edf2' },      // Grey/Blue
    'build umass': { accent: '#C8102E', logoBg: '#fff5f5', tagBg: '#fbe4e7' },             // Red
    'mit lincoln laboratory': { accent: '#003057', logoBg: '#f4f8fb', tagBg: '#e3ebf2' }   // Navy
  }
  const defaultColors = { accent: '#6366F1', logoBg: '#f5f6ff', tagBg: '#e3e7ff' }
  const getColorsForIndex = (i: number) => {
    const name = experience[i]?.company.toLowerCase()
    return (name && companyBrandColors[name]) || defaultColors
  }

  // Simple keyword-based technology inference from bullet text
  const techKeywords = [
    'Python','SQL','Kdb+/Q','Docker','Kubernetes','Linux','Jenkins','C','Assembly','AES-GCM','UI Path','C#','Microsoft Graph','REST','APIs','JavaScript','Intune','SharePoint','React','MongoDB'
  ]

  const inferTech = (bullets: string[]): string[] => {
    const found: string[] = []
    const allText = bullets.join(' \n ')
    techKeywords.forEach(k => {
      const regex = new RegExp(`\\b${k.replace(/\+/g,'\\+')}(?:(?:\\b)|$)`) // escape +
      if (regex.test(allText) && !found.includes(k)) found.push(k)
    })
    return found.slice(0, 6)
  }

  return (
    <div className="w-full px-4" ref={wrapperRef}>
      <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
        Professional Experience
      </h2>
      <div className="relative max-w-3xl mx-auto" ref={timelineRef}>
        {/* Progress rail */}
        <div className="hidden md:block absolute left-0 -ml-12 top-0 bottom-0">
          {/* Rail */}
          <div className="w-px h-full bg-gradient-to-b from-indigo-300 via-indigo-500/40 to-violet-400/70 opacity-60" />
          {/* Fill */}
          {centers.length > 0 && (
            <motion.div
              className="absolute left-0 top-0 w-px"
              aria-hidden="true"
              initial={false}
              animate={{ height: centers[activeIndex], backgroundColor: getColorsForIndex(activeIndex).accent }}
              transition={{ type: 'spring', stiffness: 160, damping: 28 }}
              style={{ height: centers[activeIndex] || 0, backgroundColor: getColorsForIndex(activeIndex).accent }}
            />
          )}
          {/* Dots aligned to measured centers with brand colors */}
          {centers.map((c, i) => {
            const col = getColorsForIndex(i)
            const isActiveDot = i === activeIndex
            return (
              <div
                key={i}
                className="absolute -ml-[7px] w-4 h-4 rounded-full border-2 bg-white dark:bg-gray-900 transition-colors duration-300"
                style={{
                  top: c - 8,
                  borderColor: col.accent,
                  boxShadow: isActiveDot ? `0 0 0 4px ${col.accent}40` : 'none'
                }}
              />
            )
          })}
        </div>

        <p className="sr-only" aria-live="polite">Currently viewing experience {activeIndex + 1} of {experience.length}</p>

  <div className="space-y-28">
          {experience.map((exp, i) => {
            const isActive = i === activeIndex
            const colors = getColorsForIndex(i)
            const bullets = exp.bullets.map(b => b.text)
            const techs = inferTech(bullets)
            const isCurrent = /present/i.test(exp.end)
            const isExpanded = expanded.has(i)
            const MIN_BULLETS = 2
            const visibleBullets = isExpanded ? exp.bullets : exp.bullets.slice(0, MIN_BULLETS)
            return (
              <motion.div
                key={exp.company + exp.start}
                ref={el => { if (el) cardRefs.current[i] = el }}
                variants={variants}
                initial="hidden"
                animate={isActive ? 'visible' : 'inactive'}
                whileInView="visible"
                viewport={{ amount: 0.55, once: false }}
                tabIndex={0}
                aria-current={isActive}
                className={`relative rounded-2xl border backdrop-blur-sm transition-all duration-500 px-0 pt-0 pb-8 shadow-lg scroll-mt-32 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 overflow-hidden
                  ${isActive
                    ? 'bg-white/75 dark:bg-gray-800/70 border-transparent'
                    : 'bg-white/45 dark:bg-gray-800/40 border-transparent'}
                `}
                style={isActive ? { boxShadow: `0 4px 28px -4px ${colors.accent}33, 0 0 0 1px ${colors.accent}40` } : undefined}
              >
                {/* Header */}
                <div
                  className="experience-header flex items-stretch gap-5 px-6 sm:px-10 py-6 border-l-[5px]"
                  style={{ borderLeftColor: colors.accent }}
                >
                  <div
                    className="company-logo rounded-lg flex items-center justify-center shrink-0 shadow-inner"
                    style={{ backgroundColor: colors.logoBg, width: '70px', height: '70px' }}
                  >
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company + ' logo'}
                        className="w-12 h-12 object-contain"
                        loading="lazy"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0.3' }}
                      />
                    )}
                  </div>
                  <div className="experience-title flex flex-col justify-center min-w-0">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">{exp.company}</h3>
                    <h4 className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-1">{exp.role}</h4>
                    <div className="experience-subtitle flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      <span className="dates font-medium">{exp.start} – {exp.end}</span>
                      <span className="location">{exp.location}</span>
                      {isCurrent && (
                        <span
                          className="current-badge text-[10px] sm:text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: colors.tagBg, color: colors.accent }}
                        >Current</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="experience-body px-6 sm:px-10 mt-4">
                  <ul className="experience-details space-y-2 text-sm sm:text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                    {visibleBullets.map((b, bi) => (
                      <li key={bi} className="pl-1">
                        {b.highlights ? b.highlights.reduce((acc, h) => acc.replace(h, `__HL__${h}__HL__`), b.text).split('__HL__').map((segment, si) => (
                          b.highlights!.includes(segment) ? <strong key={si}>{segment}</strong> : <span key={si}>{segment}</span>
                        )) : b.text}
                      </li>
                    ))}
                  </ul>
                  {exp.bullets.length > MIN_BULLETS && (
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() => {
                        setExpanded(prev => {
                          const next = new Set(prev)
                          if (next.has(i)) next.delete(i); else next.add(i)
                          return next
                        })
                        // re-measure after layout change
                        requestAnimationFrame(() => measureCenters())
                      }}
                      className="mt-3 text-xs font-medium tracking-wide inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 rounded"
                      style={{ color: colors.accent }}
                    >
                      {isExpanded ? 'Show fewer' : 'Show more'}
                      <span aria-hidden="true" className="transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
                    </button>
                  )}

                  {techs.length > 0 && (
                    <div className="technologies flex flex-wrap gap-2 mt-5">
                      {techs.map(t => (
                        <span
                          key={t}
                          className="tech-tag text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full border"
                          style={{ backgroundColor: colors.tagBg, color: colors.accent, borderColor: colors.accent + '33' }}
                        >{t}</span>
                      ))}
                    </div>
                  )}
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="pointer-events-none absolute -inset-px rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      background: `radial-gradient(circle at 30% 20%, ${colors.accent}2A, transparent 70%)`
                    }}
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Internships