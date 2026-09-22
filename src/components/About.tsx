import { motion } from 'framer-motion'
import { Download, Linkedin, Github, Award } from 'react-feather'
import { contact } from '../data/profile'

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
            <div className="w-64 h-64 rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-7xl font-bold text-white/90 font-orbitron select-none">JL</span>
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
            I'm a software engineer specializing in GPU infrastructure, distributed systems, and quantitative engineering.
            From bare-metal GPU provisioning at Roblox to building ML-driven trade routers at Fidelity, I focus on
            designing resilient systems that operate at scale.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            I hold a B.S. in Computer Science from UMass Amherst and enjoy working across the stack—from
            low-level embedded systems to cloud-native infrastructure and AI/ML pipelines.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/resume.pdf" className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <Download className="w-4 h-4 mr-2" /> Download CV
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener" className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener" className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
