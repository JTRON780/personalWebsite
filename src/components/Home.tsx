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
            words={['Software Engineer', 'GenAI Infrastructure', 'Distributed Systems', 'Cloud Native', 'Kubernetes', 'Full-Stack Developer']}
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

      {/* Social Media Links */}
      <div className="flex gap-4 mt-6 sm:mt-8">
        <a
          href="https://linkedin.com/in/JLakshmanan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 group"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href="https://github.com/JTRON780"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-neon-purple transition-colors duration-300 group"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a
          href="mailto:jlakshmanan@umass.edu"
          className="text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
          aria-label="Email"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
)

export default Home