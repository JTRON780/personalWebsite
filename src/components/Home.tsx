import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import viteLogo from '/vite.svg'

interface HomeProps {
  scrollToSection: (id: string) => void;
}

const Home = ({ scrollToSection }: HomeProps) => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-[70vh] gap-4 px-2 md:px-8">
    <div className="md:w-7/12 w-full text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        Hi There!{' '}
        <span className="wave inline-block" role="img" aria-label="wave">
          👋🏻
        </span>
      </h1>
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        I'm
        <strong className="main-name text-indigo-600 ml-2">Johan Lakshmanan</strong>
      </h1>
      <div className="py-4">
        <span className="text-xl text-gray-700 dark:text-gray-200">
          <Typewriter
            words={['Developer', 'Student', 'Tech Enthusiast']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
      <div className="flex gap-4 mt-6">
        <button 
          onClick={() => scrollToSection('internships')} 
          className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full hover:opacity-90 transition-opacity animate-glow"
        >
          View Experience
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
        >
          Contact Me
        </button>
      </div>
    </div>
    <div className="md:w-5/12 w-full flex justify-center md:justify-end py-6 md:py-0">
      <img
        src={viteLogo}
        alt="home pic"
        className="max-h-[450px] w-auto"
      />
    </div>
  </div>
)

export default Home