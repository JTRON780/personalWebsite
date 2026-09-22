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
  // Custom cursor disabled for now
  return null;
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionIds = ['home', 'internships', 'projects', 'skills', 'resume', 'contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Show/hide back to top button
      setShowBackToTop(scrollTop > 500);

      // Update active section
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

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 p-3 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full hover:bg-neon-cyan/20 transition-colors group"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6 text-neon-cyan group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

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