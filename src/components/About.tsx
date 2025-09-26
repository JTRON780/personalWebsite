import { motion } from 'framer-motion'
import { Download, Linkedin, Github, Award } from 'react-feather'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 w-full mb-8 md:mb-0">
          <div className="relative">
            <div className="w-64 h-64 rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
              <img
                src="https://static.photos/office/640x360/10"
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Award className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-sm font-medium">5+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 w-full md:pl-4 lg:pl-12">
          <h2 className="section-title text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I'm a passionate developer focused on building beautiful, performant, and accessible digital experiences.
            I enjoy working across the stack—crafting intuitive interfaces, designing resilient systems, and experimenting
            with emerging technologies in AI/ML and distributed computing.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Outside of coding, I love exploring design systems, contributing to open source, and learning about quantitative
            finance and trading infrastructure.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/resume.pdf" className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <Download className="w-4 h-4 mr-2" /> Download CV
            </a>
            <a href="https://linkedin.com/in/JLakshmanan" target="_blank" rel="noopener" className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener" className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
