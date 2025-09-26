import { motion } from 'framer-motion'
import { useState } from 'react'
import { experience } from '../data/profile'

const DynamicLogo = ({ src, alt }: { src: string; alt: string }) => {
  const [isRect, setIsRect] = useState<boolean | null>(null)

  return (
    <img
      src={src}
      alt={alt}
      className={
        isRect === null
          ? 'h-12 w-12 object-contain rounded transition-all duration-200'
          : isRect
          ? 'h-12 w-20 object-contain rounded transition-all duration-200'
          : 'h-16 w-16 object-contain rounded transition-all duration-200'
      }
      onLoad={e => {
        const img = e.currentTarget
        setIsRect(img.naturalWidth > img.naturalHeight + 10)
      }}
      style={{ background: '#fff' }}
    />
  )
}

const InternshipCard = ({ title, role, date, description, location, logo }: {
  title: string;
  role: string;
  date: string;
  description: React.ReactNode;
  location: string;
  logo: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-4">
        {logo && (
          <DynamicLogo src={logo} alt={title + ' logo'} />
        )}
        <div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">{title}</h3>
          <div className="flex flex-col text-gray-600 dark:text-gray-400 text-sm">
            <span>{role}</span>
            <span className="flex items-center gap-2">
              <span>{date}</span>
              <span className="mx-1">•</span>
              <span>{location}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    {description}
  </motion.div>
)

const Internships = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-4"
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">Professional Experience</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-screen-2xl mx-auto">
        {experience.map(exp => (
          <InternshipCard
            key={exp.company + exp.start}
            title={exp.company}
            role={exp.role}
            date={`${exp.start} - ${exp.end}`}
            location={exp.location}
            logo={exp.logo || ''}
            description={
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm sm:text-base">
                {exp.bullets.map((b, i) => (
                  <li key={i}>
                    {b.highlights ? b.highlights.reduce((acc, h) => acc.replace(h, `__HL__${h}__HL__`), b.text).split('__HL__').map((segment, idx) => (
                      b.highlights!.includes(segment) ? <strong key={idx}>{segment}</strong> : <span key={idx}>{segment}</span>
                    )) : b.text}
                  </li>
                ))}
              </ul>
            }
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Internships