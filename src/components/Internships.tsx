import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { experience } from '../data/profile'
import {
  PresentationChartLineIcon,
  BeakerIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  CubeIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const getCompanyIcon = (company: string) => {
  if (company.includes('Fidelity')) return PresentationChartLineIcon;
  if (company.includes('Waters')) return BeakerIcon;
  if (company.includes('Build UMass')) return BuildingLibraryIcon;
  if (company.includes('Lincoln')) return ShieldCheckIcon;
  if (company.includes('Roblox')) return CubeIcon;
  return BriefcaseIcon;
}

const ExperienceCard = ({ exp, index, onClick }: { exp: typeof experience[0], index: number, onClick: () => void }) => {
  const isEven = index % 2 === 0;
  const Icon = getCompanyIcon(exp.company);

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-center justify-between w-full mb-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content Side */}
      <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <motion.div 
          layoutId={`card-${exp.company}`}
          onClick={onClick}
          className="group cursor-pointer relative p-6 bg-dark-800/60 backdrop-blur-md border border-white/5 rounded-xl hover:border-neon-cyan/50 transition-colors duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none" />

          {/* Expand Hint */}
          <div className={`absolute top-4 ${isEven ? 'left-4' : 'right-4'} opacity-0 group-hover:opacity-100 transition-opacity z-20`}>
            <span className="text-[10px] uppercase tracking-wider text-neon-cyan/80 font-space border border-neon-cyan/30 rounded-full px-2 py-1 bg-neon-cyan/10">Expand</span>
          </div>

          {/* Thematic Icon Watermark */}
          <div className={`absolute -bottom-4 ${isEven ? '-left-4' : '-right-4'} transition-colors duration-300 pointer-events-none transform rotate-12 ${exp.logo ? 'opacity-[0.03] group-hover:opacity-10 grayscale group-hover:grayscale-0' : 'text-white/5 group-hover:text-neon-cyan/10'}`}>
            {exp.logo ? (
              <img src={exp.logo} alt="" className="w-32 h-32 object-contain" />
            ) : (
              <Icon className="w-32 h-32" />
            )}
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-neon-cyan transition-colors">
              {exp.company}
            </h3>
            <h4 className="text-neon-purple font-space font-medium mb-2">{exp.role}</h4>
            <p className="text-sm text-gray-400 font-space mb-4">{exp.start} – {exp.end}</p>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3">
              {exp.description}
            </p>

            {/* Tech stack mini-tags */}
            <div className={`flex flex-wrap gap-2 mt-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
              <div className="flex space-x-1.5 items-center bg-white/5 rounded-full px-3 py-1 border border-white/10 group-hover:border-neon-cyan/30 transition-colors">
                 <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/50 group-hover:bg-neon-cyan animate-pulse" />
                 <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/50 group-hover:bg-neon-cyan animate-pulse delay-75" />
                 <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/50 group-hover:bg-neon-cyan animate-pulse delay-150" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Center Line Node */}
      <div className="relative w-2/12 flex justify-center">
        <div className="w-4 h-4 rounded-full bg-dark-900 border-2 border-neon-cyan shadow-neon-cyan z-10 relative">
          <div className="absolute inset-0 bg-neon-cyan rounded-full animate-ping opacity-20" />
        </div>
        {/* Connector Line to Card */}
        <div className={`absolute top-1/2 w-full h-[2px] bg-neon-cyan/20 -z-0 ${isEven ? 'right-1/2 bg-gradient-to-r from-transparent to-neon-cyan/50' : 'left-1/2 bg-gradient-to-l from-transparent to-neon-cyan/50'}`} style={{ width: '50%' }} />
      </div>

      {/* Empty Side for Balance */}
      <div className="w-5/12" />
    </motion.div>
  )
}

const Internships = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    if (selectedId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedId]);

  return (
    <div className="w-full px-4" ref={containerRef}>
      <div className="relative mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan inline-block">
          EXPERIENCE LOG
        </h2>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Central Timeline Bar */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-white/5 top-0 overflow-visible">
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute top-0 left-0 w-full h-full bg-neon-cyan shadow-neon-cyan"
          />
        </div>

        <div className="py-10">
          {experience.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              exp={exp} 
              index={index} 
              onClick={() => setSelectedId(exp.company)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence onExitComplete={() => { document.body.style.overflow = 'unset'; }}>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedId(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              {(() => {
                const exp = experience.find(e => e.company === selectedId);
                if (!exp) return null;
                const Icon = getCompanyIcon(exp.company);
                return (
                  <motion.div
                    layoutId={`card-${exp.company}`}
                    className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-dark-900 border border-neon-cyan/40 rounded-2xl p-6 md:p-10 shadow-2xl shadow-neon-cyan/20 pointer-events-auto"
                  >
                    <button 
                      onClick={() => setSelectedId(null)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors z-10"
                    >
                       <XMarkIcon className="w-6 h-6" />
                    </button>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 mt-2">
                      <div className="p-4 bg-neon-cyan/10 rounded-2xl border border-neon-cyan/20 shadow-inner flex items-center justify-center w-20 h-20">
                        {exp.logo ? (
                          <img src={exp.logo} alt={`${exp.company} logo`} className="w-12 h-12 object-contain rounded-md" />
                        ) : (
                          <Icon className="w-12 h-12 text-neon-cyan" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold font-orbitron text-white tracking-wide">
                          {exp.company}
                        </h3>
                        <h4 className="text-neon-purple font-space font-medium text-xl mt-1">{exp.role}</h4>
                        <p className="text-sm text-gray-400 font-space mt-2 flex items-center border border-white/10 rounded-full px-3 py-1 w-fit bg-white/5">
                          {exp.start} – {exp.end}
                        </p>
                      </div>
                    </div>

                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 mb-8 leading-relaxed text-lg bg-white/5 p-4 rounded-xl border border-white/5 shadow-inner">
                        {exp.description}
                      </p>
                      
                      <h4 className="text-neon-cyan font-bold font-orbitron uppercase tracking-widest text-sm mb-4">Key Achievements & Impact</h4>
                      <ul className="space-y-4">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start text-gray-300 group">
                            <div className="flex-shrink-0 mt-2 mr-4">
                              <div className="w-2 h-2 rounded-full bg-neon-purple group-hover:bg-neon-cyan transition-colors group-hover:shadow-neon-cyan duration-300" />
                            </div>
                            <span className="leading-relaxed group-hover:text-white transition-colors">{bullet.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })()}
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Internships