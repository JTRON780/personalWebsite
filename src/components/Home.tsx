import { motion } from 'framer-motion'

interface HomeProps {
  scrollToSection: (id: string) => void;
}

const Home = ({ scrollToSection }: HomeProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-full px-4"
  >
    <div className="text-center space-y-8">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text"
      >
        Johan Lakshmanan
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
      >
        Computer Science Junior at UMass Amherst
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <button 
          onClick={() => scrollToSection('internships')} 
          className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full hover:opacity-90 transition-opacity animate-glow"
        >
          View Experience
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
        >
          Contact Me
        </button>
      </motion.div>
    </div>
  </motion.div>
)

export default Home