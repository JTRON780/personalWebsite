import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
}

const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars with different depths (z values)
    const initStars = () => {
      const stars: Star[] = [];
      const numStars = 200;

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 2 + 0.5, // Depth factor (0.5 to 2.5)
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1
        });
      }
      starsRef.current = stars;
    };

    initStars();

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)'; // Trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Move star based on depth (parallax effect)
        star.y += star.speed * star.z;

        // Reset star when it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // Draw star with brightness based on depth
        const brightness = (1 / star.z) * 0.8;
        const size = star.size * (1 / star.z);

        ctx.beginPath();
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${brightness})`;
        ctx.fill();

        // Add glow effect for closer stars
        if (star.z < 1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100, 200, 255, ${brightness * 0.3})`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default StarfieldBackground;