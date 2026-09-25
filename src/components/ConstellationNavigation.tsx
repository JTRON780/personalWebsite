import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ConstellationDot {
  id: string;
  x: number;
  y: number;
  label: string;
}

interface ConstellationNavigationProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const ConstellationNavigation = ({ activeSection, scrollToSection }: ConstellationNavigationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dots, setDots] = useState<ConstellationDot[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      updateDotsPosition();
    };

    const updateDotsPosition = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'resume', 'contact'];
      const newDots: ConstellationDot[] = sections.map((section, index) => {
        // Position dots in a curved pattern across the screen
        const progress = index / (sections.length - 1);
        const x = canvas.width * 0.1 + (canvas.width * 0.8 * progress);
        const y = canvas.height * 0.15 + Math.sin(progress * Math.PI) * 50;

        return {
          id: section,
          x,
          y,
          label: section.charAt(0).toUpperCase() + section.slice(1)
        };
      });
      setDots(newDots);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between dots
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
      ctx.lineWidth = 1;

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dot1 = dots[i];
          const dot2 = dots[j];
          const distance = Math.hypot(dot1.x - dot2.x, dot1.y - dot2.y);

          // Connect dots if they're close enough
          if (distance < 200) {
            const opacity = 1 - distance / 200;
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke();
          }
        }

        // Connect to mouse if close
        const mouseDistance = Math.hypot(dots[i].x - mousePos.x, dots[i].y - mousePos.y);
        if (mouseDistance < 150) {
          const opacity = 1 - mouseDistance / 150;
          ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(mousePos.x, mousePos.y);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dots, mousePos]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0">
        {dots.map((dot) => (
          <motion.button
            key={dot.id}
            onClick={() => scrollToSection(dot.id)}
            className="absolute pointer-events-auto cursor-pointer group"
            style={{
              left: dot.x - 20,
              top: dot.y - 20,
              width: 40,
              height: 40
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Outer glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-neon-cyan/20"
              animate={{
                scale: activeSection === dot.id ? [1, 1.5, 1] : 1,
                opacity: activeSection === dot.id ? 0.6 : 0.3
              }}
              transition={{
                duration: 2,
                repeat: activeSection === dot.id ? Infinity : 0,
                ease: "easeInOut"
              }}
            />
            {/* Inner dot */}
            <motion.div
              className="absolute inset-2 rounded-full bg-neon-cyan"
              animate={{
                scale: activeSection === dot.id ? 1.2 : 1,
                boxShadow: activeSection === dot.id
                  ? '0 0 20px rgba(0, 255, 255, 0.8)'
                  : '0 0 10px rgba(0, 255, 255, 0.4)'
              }}
            />
            {/* Label */}
            <motion.span
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs font-orbitron text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {dot.label}
            </motion.span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ConstellationNavigation;