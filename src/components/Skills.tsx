import { motion } from 'framer-motion'
import { skillCategories } from '../data/profile'

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
    className="bg-dark-800/40 backdrop-blur-md rounded-xl p-6 border border-white/5 hover:border-neon-purple/50 transition-colors duration-300"
  >
    <h3 className="text-xl font-bold mb-6 font-orbitron text-neon-cyan/90 border-b border-white/5 pb-2">{title}</h3>
    <ul className="space-y-3">
      {skills.map((skill, index) => (
        <motion.li
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          key={skill}
          className="flex items-center group"
        >
          <span className="text-neon-purple mr-3 transform group-hover:scale-125 transition-transform duration-300">▹</span>
          <span className="text-gray-300 group-hover:text-white transition-colors font-space">{skill}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
)

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-4 flex flex-col items-center"
    >
      <div className="relative mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple inline-block">
          SKILL MATRIX
        </h2>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple"></div>
        <p className="mt-4 text-gray-400 font-space max-w-2xl text-center">
          Arsenal of technologies and tools I've mastered
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-2xl w-full">
        {skillCategories.slice(0, 3).map(category => (
          <SkillCategory key={category.title} title={category.title} skills={category.items} />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills