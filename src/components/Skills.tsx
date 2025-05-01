import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
  >
    <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">{title}</h3>
    <ul className="space-y-3">
      {skills.map((skill, index) => (
        <motion.li 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          key={skill} 
          className="flex items-center"
        >
          <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">{skill}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
)

const Skills = () => {
  const skillCategories = useMemo(() => [
    {
      title: "Languages",
      skills: ["Java", "Python", "C/C++", "SQL", "JavaScript", "TypeScript", "HTML/CSS", "Powershell"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["React", "Node.js", "Django", "RESTful APIs", "Material-UI", "FastAPI", "Pandas", "Docker", "Git"]
    },
    {
      title: "Platforms & Skills",
      skills: ["Google Cloud", "Linux", "VMware", "AI/ML", "Embedded Systems", "Agile/Scrum"]
    }
  ], []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-4 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills