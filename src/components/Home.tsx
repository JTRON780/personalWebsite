import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import viteLogo from '/vite.svg'
import skyline from '../../bostonSkyline.png'

interface HomeProps {
  scrollToSection: (id: string) => void;
}

const Home = ({ scrollToSection }: HomeProps) => (
  <div
    className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-[70vh] gap-2 xs:gap-4 sm:gap-4 px-2 md:px-6 lg:px-8 overflow-hidden"
    style={{}}
  >
    {/* Skyline background */}
    <img
      src={skyline}
      alt="Boston Skyline"
      className="absolute left-0 bottom-0 w-full max-h-[150px] sm:max-h-[200px] md:max-h-[250px] lg:max-h-[300px] object-cover opacity-60 pointer-events-none select-none z-0"
      aria-hidden="true"
    />
    <div className="relative z-10 md:w-7/12 w-full text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 break-words">
        Hi There!{' '}
        <span className="wave inline-block" role="img" aria-label="wave">
          👋🏻
        </span>
      </h1>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-4 break-words">
        I'm
        <strong className="main-name text-indigo-600 ml-1 sm:ml-2">Johan Lakshmanan</strong>
      </h1>
      <div className="py-2 sm:py-4">
        <span className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200">
          <Typewriter
            words={['Developer', 'Student', 'Tech Enthusiast', 'Innovator', 'Artist', 'Software Engineer', 'Leader']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6">
        <button 
          onClick={() => scrollToSection('internships')} 
          className="text-sm sm:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full hover:opacity-90 transition-opacity animate-glow w-full sm:w-auto"
        >
          View Experience
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="text-sm sm:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors w-full sm:w-auto"
        >
          Contact Me
        </button>
      </div>
    </div>
    <div className="relative z-10 md:w-5/12 w-full flex justify-center md:justify-end py-4 sm:py-6 md:py-0">
      <img
        src={viteLogo}
        alt="home pic"
        className="max-h-[150px] sm:max-h-[250px] md:max-h-[350px] lg:max-h-[450px] w-auto"
      />
    </div>
  </div>
)

export default Home