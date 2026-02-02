/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#050510', // Deep Void
          800: '#0a0a1f', // Midnight
          700: '#12122a',
        },
        neon: {
          cyan: '#00f3ff',
          purple: '#bc13fe',
          blue: '#4d4dff',
        },
        holo: {
          white: '#e0e0ff',
        }
      },
      fontFamily: {
        orbitron: ['"Orbitron"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        rajdhani: ['"Rajdhani"', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 5px theme("colors.neon.cyan"), 0 0 20px theme("colors.neon.cyan")',
        'neon-purple': '0 0 5px theme("colors.neon.purple"), 0 0 20px theme("colors.neon.purple")',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 243, 255, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 243, 255, 0.6)' },
        },
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'cyber-grid': "radial-gradient(circle at 50% 50%, rgba(77, 77, 255, 0.1) 1px, transparent 1px)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class', // Changed to class for manual control if needed, usually 'media' is fine but 'class' is safer for specific themes
}