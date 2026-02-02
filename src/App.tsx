import { motion } from 'framer-motion'
import { useEffect, useState, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'

// Lazy load components
const Home = lazy(() => import('./components/Home'))
const Internships = lazy(() => import('./components/Internships'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))

const Contact = lazy(() => import('./components/Contact'))

const LoadingSpinner = () => (
  <div className="flex items-center justify-center w-full h-[90vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-cyan shadow-neon-cyan"></div>
  </div>
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
        border: 2px solid #00f3ff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
        display: none;
        box-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
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
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
        display: none;
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
        // Update dot position immediately via left/top to preserve CSS transform (-50%)
        dot.style.left = `${targetX}px`;
        dot.style.top = `${targetY}px`;
      };

      const handleMouseOver = () => {
        cursor.style.borderWidth = '2px';
        cursor.style.borderColor = '#bc13fe'; // Neon Purple on hover
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.backgroundColor = 'rgba(188, 19, 254, 0.1)';
      };

      const handleMouseOut = () => {
        cursor.style.borderWidth = '2px';
        cursor.style.borderColor = '#00f3ff'; // Back to Neon Cyan
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'transparent';
      };

      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      const render = () => {
        // Smoothly interpolate the ring position to the target (dot) position
        cursorX = lerp(cursorX, targetX, 0.15); // Removed the -14 offset as we want center alignment
        cursorY = lerp(cursorY, targetY, 0.15);
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        // We use left/top for position and transform for scale now

        requestAnimationId = requestAnimationFrame(render);
      };
      requestAnimationId = requestAnimationFrame(render);

      // Use event delegation for hover effect on all future and current clickable elements
      const getClickable = (target: EventTarget | null): Element | null => {
        if (!target || !(target instanceof Element)) return null;
        return target.closest('button, a, input, textarea, [role="button"], [tabindex]:not([tabindex="-1"])');
      };

      const delegatedMouseOver = (e: MouseEvent) => {
        const clickable = getClickable(e.target);
        if (clickable) {
          handleMouseOver();
        }
      };

      const delegatedMouseOut = (e: MouseEvent) => {
        const clickable = getClickable(e.target);
        if (clickable) {
          // Only shrink if we are actually leaving the clickable element (not entering a child)
          if (!clickable.contains(e.relatedTarget as Node)) {
            handleMouseOut();
          }
        }
      };

      document.addEventListener('mouseover', delegatedMouseOver);
      document.addEventListener('mouseout', delegatedMouseOut);

      document.addEventListener('mousemove', moveCursor);

      // Show/hide cursor on mouse enter/leave
      const showCursor = (e?: MouseEvent) => {
        cursor.style.display = 'block';
        dot.style.display = 'block';
        if (e) {
          targetX = e.clientX;
          targetY = e.clientY;
          dot.style.left = `${targetX}px`;
          dot.style.top = `${targetY}px`;
          cursorX = targetX;
          cursorY = targetY;
        }
        document.documentElement.style.cursor = 'none';
        document.body.style.cursor = 'none';
      };
      const hideCursor = () => {
        cursor.style.display = 'none';
        dot.style.display = 'none';
      };
      document.addEventListener('mouseenter', showCursor);
      document.addEventListener('mouseleave', hideCursor);

      const showOnFirstMove = (e: MouseEvent) => {
        targetX = e.clientX;
        targetY = e.clientY;
        showCursor(e);
        document.removeEventListener('mousemove', showOnFirstMove);
      };
      document.addEventListener('mousemove', showOnFirstMove);

      // Hide cursor initially
      cursor.style.display = 'none';
      dot.style.display = 'none';

      return () => {
        cancelAnimationFrame(requestAnimationId);
        document.removeEventListener('mousemove', moveCursor);
        document.removeEventListener('mouseenter', showCursor);
        document.removeEventListener('mouseleave', hideCursor);
        document.removeEventListener('mouseover', delegatedMouseOver);
        document.removeEventListener('mouseout', delegatedMouseOut);
        document.body.removeChild(cursor);
        document.body.removeChild(dot);
        document.removeEventListener('mousemove', showOnFirstMove);
      };
    }
  }, [isTouchDevice]);

  return null;
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionIds = ['home', 'internships', 'projects', 'skills', 'resume', 'contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
    <div className="min-h-screen w-full bg-dark-900 bg-cyber-grid text-white relative">
      {/* Background Overlay for depth */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900 pointer-events-none z-0" />

      <CustomCursor />

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="w-full relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <section id="home" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-12">
            <div className="max-w-screen-2xl mx-auto w-full">
              <Home scrollToSection={scrollToSection} />
            </div>
          </section>

          <section id="internships" className="min-h-screen w-full py-20 flex items-center justify-center px-4 sm:px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-screen-2xl mx-auto w-full"
            >
              <Internships />
            </motion.div>
          </section>

          <section id="projects" className="min-h-screen w-full py-20 flex items-center justify-center px-4 sm:px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-screen-2xl mx-auto w-full"
            >
              <Projects />
            </motion.div>
          </section>

          <section id="skills" className="min-h-screen w-full py-20 flex items-center justify-center px-4 sm:px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-screen-2xl mx-auto w-full"
            >
              <Skills />
            </motion.div>
          </section>

          <section id="resume" className="min-h-screen w-full py-20 flex items-center justify-center px-4 sm:px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-screen-2xl mx-auto w-full"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white mb-8">
                  RESUME
                </h2>
                <p className="text-gray-400 font-space mb-8 max-w-xl text-lg">
                  Access my full credentials and career history securely.
                </p>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-8 py-4 bg-dark-900 ring-1 ring-white/10 rounded-lg leading-none flex items-center divide-x divide-gray-600"
                  >
                    <span className="flex items-center space-x-5">
                      <span className="pr-6 text-gray-100 font-orbitron tracking-widest text-lg group-hover:text-neon-cyan transition duration-200">VIEW FULL RESUME</span>
                    </span>
                    <span className="pl-6 text-neon-purple group-hover:text-gray-100 transition duration-200">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="contact" className="min-h-[80vh] w-full py-20 flex items-center justify-center px-4 sm:px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-screen-2xl mx-auto w-full"
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