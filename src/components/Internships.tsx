import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '../data/profile'

const ExperienceCard = ({ exp, index }: { exp: typeof experience[0], index: number }) => {
  const isEven = index % 2 === 0;

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
        <div className="group relative p-6 bg-dark-800/60 backdrop-blur-md border border-white/5 rounded-xl hover:border-neon-cyan/50 transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

          <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-neon-cyan transition-colors">
            {exp.company}
          </h3>
          <h4 className="text-neon-purple font-space font-medium mb-2">{exp.role}</h4>
          <p className="text-sm text-gray-400 font-space mb-4">{exp.start} – {exp.end}</p>
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            {exp.description}
          </p>

          {/* Tech stack mini-tags */}
          <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
            {exp.bullets.slice(0, 3).map((b, i) => (
              // Quick hack to extract key terms or just show dots if too long, 
              // actually let's just use a generic "Tech" tag or similar if we can't parse easily.
              // Better: just render a few keywords if we had them. 
              // For now, let's skip the bullets details to keep the card clean or just show a "View Details" if expanded.
              <span key={i} className="w-1 h-1 rounded-full bg-neon-cyan/50" />
            ))}
          </div>
        </div>
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Internships