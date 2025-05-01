import { motion } from 'framer-motion'
import { useEffect, useState, Suspense, lazy } from 'react'

// Lazy load components
const Home = lazy(() => import('./components/Home'))
const Internships = lazy(() => import('./components/Internships'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Resume = lazy(() => import('./components/Resume'))
const Contact = lazy(() => import('./components/Contact'))

const LoadingSpinner = () => (
  <div className="flex items-center justify-center w-full h-[90vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
  </div>
)

const MobileMenuButton = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => (
  <button
    onClick={toggleMenu}
    className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    <div className="w-6 h-6 relative">
      <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
      <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'top-3'}`}></span>
      <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
    </div>
  </button>
)

const CustomCursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    if (!isTouchDevice) {
      // Create the ring cursor
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor-ring';
      cursor.style.cssText = `
        position: fixed;
        width: 32px;
        height: 32px;
        border: 2px solid #4f46e5;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
      `;

      // Create the dot cursor
      const dot = document.createElement('div');
      dot.className = 'custom-cursor-dot';
      dot.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background-color: white;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      `;

      document.body.appendChild(cursor);
      document.body.appendChild(dot);

      let cursorX = 0;
      let cursorY = 0;
      let targetX = 0;
      let targetY = 0;
      let requestAnimationId: number;

      const moveCursor = (e: MouseEvent) => {
        targetX = e.clientX;
        targetY = e.clientY;
        // Update dot position immediately
        dot.style.transform = `translate(${targetX}px, ${targetY}px)`;
      };

      const handleMouseOver = () => {
        cursor.style.width = '48px';
        cursor.style.height = '48px';
        cursor.style.borderColor = '#6366f1';
      };

      const handleMouseOut = () => {
        cursor.style.width = '32px';
        cursor.style.height = '32px';
        cursor.style.borderColor = '#4f46e5';
      };

      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      const render = () => {
        // Smoothly interpolate the ring position to the target (dot) position
        cursorX = lerp(cursorX, targetX - 14, 0.15);
        cursorY = lerp(cursorY, targetY - 14, 0.15);
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        requestAnimationId = requestAnimationFrame(render);
      };
      requestAnimationId = requestAnimationFrame(render);

      // Add hover effect to all clickable elements
      const clickableElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
      clickableElements.forEach(element => {
        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseout', handleMouseOut);
      });

      document.addEventListener('mousemove', moveCursor);
      
      return () => {
        cancelAnimationFrame(requestAnimationId);
        document.removeEventListener('mousemove', moveCursor);
        clickableElements.forEach(element => {
          element.removeEventListener('mouseover', handleMouseOver);
          element.removeEventListener('mouseout', handleMouseOut);
        });
        document.body.removeChild(cursor);
        document.body.removeChild(dot);
      };
    }
  }, [isTouchDevice]);

  return null;
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const sectionIds = ['home', 'internships', 'projects', 'skills', 'resume', 'contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = sectionIds[0];
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          const offsetTop = window.scrollY + top;
          if (scrollPosition >= offsetTop) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <CustomCursor />
      <nav className="fixed w-full left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg z-40">
        <div className="flex justify-center items-center h-16 w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-between w-full max-w-none">
            <div className="flex-shrink-0 flex items-center">
              <button onClick={() => scrollToSection('home')} className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">Johan Lakshmanan</button>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-8 justify-center flex-1">
              {sectionIds.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors capitalize ${activeSection === section ? 'font-bold text-indigo-600 dark:text-indigo-400 underline underline-offset-4' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>
            <MobileMenuButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div 
          className="md:hidden"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg">
            {sectionIds.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors capitalize ${activeSection === section ? 'font-bold text-indigo-600 dark:text-indigo-400 underline underline-offset-4' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>

      <main className="w-full">
        <Suspense fallback={<LoadingSpinner />}>
          <section id="home" className="min-h-[90vh] w-full pt-16 flex items-center justify-center">
            <div className="max-w-6xl mx-auto w-full">
              <Home scrollToSection={scrollToSection} />
            </div>
          </section>

          <section id="internships" className="min-h-[90vh] w-full pt-8 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto w-full"
            >
              <Internships />
            </motion.div>
          </section>
          
          <section id="projects" className="min-h-[90vh] w-full pt-8 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto w-full"
            >
              <Projects />
            </motion.div>
          </section>
          
          <section id="skills" className="min-h-[90vh] w-full pt-8 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto w-full"
            >
              <Skills />
            </motion.div>
          </section>
          
          <section id="resume" className="min-h-[90vh] w-full pt-8 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto w-full"
            >
              <Resume />
            </motion.div>
          </section>

          <section id="contact" className="min-h-[90vh] w-full pt-8 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto w-full"
            >
              <Contact />
            </motion.div>
          </section>
        </Suspense>
      </main>
    </div>
  )
}

export default App