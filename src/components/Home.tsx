import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import skyline from '../../bostonSkyline.png'

interface HomeProps {
  scrollToSection: (id: string) => void;
}

const Home = ({ scrollToSection }: HomeProps) => (
  <div
    className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-[70vh] gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden"
  >
    {/* Skyline background */}
    <img
      src={skyline}
      alt="Boston Skyline"
      className="absolute left-0 bottom-0 w-full max-h-[150px] sm:max-h-[200px] md:max-h-[250px] lg:max-h-[300px] object-cover opacity-30 mix-blend-screen pointer-events-none select-none z-0"
      aria-hidden="true"
    />
    <div className="relative z-10 md:w-7/12 w-full text-left">
      <h1 className="font-bold mb-1 sm:mb-2 leading-tight text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl break-words text-white font-orbitron">
        Hi There!{' '}
        <span className="wave inline-block animate-pulse-fast text-neon-cyan" role="img" aria-label="wave">
          👋🏻
        </span>
      </h1>
      <h2 className="group relative font-semibold mb-2 sm:mb-4 leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words text-gray-300">
        I'm
        <strong className="relative inline-block ml-1 sm:ml-2 text-neon-cyan font-orbitron tracking-wide">
          <span className="relative z-10 group-hover:animate-glitch block">Johan Lakshmanan</span>
          <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-purple opacity-0 group-hover:opacity-70 group-hover:animate-glitch translate-x-[2px]">Johan Lakshmanan</span>
          <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-blue opacity-0 group-hover:opacity-70 group-hover:animate-glitch -translate-x-[2px]">Johan Lakshmanan</span>
        </strong>
      </h2>
      <div className="py-2 sm:py-3">
        <span className="block text-base sm:text-lg md:text-xl text-holo-white min-h-[32px] font-space tracking-wide">
          <span className="text-neon-purple mr-2">&gt;</span>
          <Typewriter
            words={['Developer', 'Student', 'Tech Enthusiast', 'Innovator', 'Artist', 'Software Engineer', 'Leader']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6 w-full">
        <button
          onClick={() => scrollToSection('internships')}
          className="relative overflow-hidden text-sm sm:text-base px-6 sm:px-8 py-3 rounded-none border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 group"
        >
          <span className="absolute inset-0 w-0 bg-neon-cyan/20 transition-all duration-[250ms] ease-out group-hover:w-full"></span>
          <span className="relative">View Experience</span>
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="relative text-sm sm:text-base px-6 sm:px-8 py-3 rounded-none border border-neon-purple text-neon-purple hover:bg-neon-purple/10 transition-all duration-300 group"
        >
          <span className="absolute inset-0 w-0 bg-neon-purple/20 transition-all duration-[250ms] ease-out group-hover:w-full"></span>
          <span className="relative">Contact Me</span>
        </button>
      </div>
    </div>
  </div>
)

export default Home