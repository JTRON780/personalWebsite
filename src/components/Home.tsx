import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import viteLogo from '/vite.svg'
import skyline from '../../bostonSkyline.png'

interface HomeProps {
  scrollToSection: (id: string) => void;
}

const Home = ({ scrollToSection }: HomeProps) => (
  <div
    className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-[70vh] gap-2 xs:gap-3 sm:gap-4 px-1 xs:px-2 sm:px-4 md:px-8 overflow-x-hidden"
    style={{}}
  >
    {/* Skyline background */}
    <img
      src={skyline}
      alt="Boston Skyline"
      className="absolute left-0 bottom-0 w-full max-h-[100px] xs:max-h-[140px] sm:max-h-[180px] md:max-h-[220px] lg:max-h-[300px] object-cover opacity-60 pointer-events-none select-none z-0"
      aria-hidden="true"
    />
    <div className="relative z-10 md:w-7/12 w-full text-left min-w-0">
      <h1 className="text-base xs:text-lg sm:text-2xl md:text-4xl font-bold mb-1 xs:mb-2 break-words">
        Hi There!{' '}
        <span className="wave inline-block" role="img" aria-label="wave">
          👋🏻
        </span>
      </h1>
      <h1 className="text-sm xs:text-base sm:text-xl md:text-3xl font-semibold mb-2 xs:mb-4 break-words">
        I'm
        <strong className="main-name text-indigo-600 ml-1 xs:ml-2">Johan Lakshmanan</strong>
      </h1>
      <div className="py-1 xs:py-2 sm:py-4">
        <span className="text-xs xs:text-sm sm:text-base md:text-xl text-gray-700 dark:text-gray-200 break-words">
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
      <div className="flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4 mt-2 xs:mt-4 sm:mt-6 w-full max-w-full">
        <button 
          onClick={() => scrollToSection('internships')} 
          className="w-full sm:w-auto px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full hover:opacity-90 transition-opacity animate-glow text-xs xs:text-sm sm:text-base md:text-lg break-words"
        >
          View Experience
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="w-full sm:w-auto px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors text-xs xs:text-sm sm:text-base md:text-lg break-words"
        >
          Contact Me
        </button>
      </div>
    </div>
    <div className="relative z-10 md:w-5/12 w-full flex justify-center md:justify-end py-2 xs:py-4 sm:py-6 md:py-0 min-w-0">
      <img
        src={viteLogo}
        alt="home pic"
        className="max-h-[60px] xs:max-h-[100px] sm:max-h-[180px] md:max-h-[300px] lg:max-h-[450px] w-auto max-w-full"
        style={{minWidth:0}}
      />
    </div>
  </div>
)

export default Home