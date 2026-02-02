import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    activeSection: string;
    scrollToSection: (id: string) => void;
}

const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const sectionIds = ['home', 'internships', 'projects', 'skills', 'resume', 'contact'];

    // Handle scroll effect for navbar background depth
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? 'bg-dark-900/80 backdrop-blur-md border-b border-white/5 shadow-neon-blue/20'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo / Name */}
                        <div className="flex-shrink-0 group cursor-pointer" onClick={() => scrollToSection('home')}>
                            <h1 className="text-2xl font-bold font-orbitron tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple group-hover:text-glow transition-all duration-300">
                                JOHAN<span className="text-white">.DEV</span>
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {sectionIds.map((section) => (
                                    <button
                                        key={section}
                                        onClick={() => scrollToSection(section)}
                                        className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 uppercase tracking-widest ${activeSection === section
                                                ? 'text-neon-cyan text-glow'
                                                : 'text-gray-400 hover:text-white hover:text-glow'
                                            }`}
                                    >
                                        <span className="relative z-10">{section}</span>
                                        {activeSection === section && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute inset-0 border border-neon-cyan/30 bg-neon-cyan/5 rounded-md box-glow"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                            >
                                <div className="space-y-1.5 w-6">
                                    <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                    <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                                    <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-xl md:hidden border-l border-white/10"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8">
                            {sectionIds.map((section) => (
                                <button
                                    key={section}
                                    onClick={() => {
                                        scrollToSection(section);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`text-2xl font-orbitron uppercase tracking-widest transition-all duration-300 ${activeSection === section
                                            ? 'text-neon-cyan text-glow'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {section}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
