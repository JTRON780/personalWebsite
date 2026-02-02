import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mbdkyvzg', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-2 xs:px-3 sm:px-4"
    >
      <div className="relative mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan inline-block">
          INITIATE CONTACT
        </h2>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan"></div>
      </div>

      <div className="max-w-2xl mx-auto bg-dark-800/60 backdrop-blur-md rounded-xl shadow-lg p-3 xs:p-4 sm:p-6 md:p-8 border border-white/5 relative overflow-hidden">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-purple rounded-br-xl" />

        <div className="mb-8 text-center text-base sm:text-lg text-gray-300 space-y-2 font-space">
          <div>
            <span className="font-semibold text-neon-cyan">EML:</span> <a href="mailto:johan.lakshmanan@gmail.com" className="text-white hover:text-neon-cyan transition-colors break-all">johan.lakshmanan@gmail.com</a>
          </div>
          <div>
            <span className="font-semibold text-neon-purple">PHN:</span> <a href="tel:3392061334" className="text-white hover:text-neon-purple transition-colors">339-206-1334</a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-neon-cyan font-orbitron uppercase tracking-wider">
              Identity
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-dark-900/50 border border-dark-700 text-white focus:outline-none focus:border-neon-cyan focus:shadow-neon-cyan transition-all text-sm sm:text-base font-space"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-neon-purple font-orbitron uppercase tracking-wider">
              Coordinates
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-dark-900/50 border border-dark-700 text-white focus:outline-none focus:border-neon-purple focus:shadow-neon-purple transition-all text-sm sm:text-base font-space"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-white font-orbitron uppercase tracking-wider">
              Transmission
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-dark-900/50 border border-dark-700 text-white focus:outline-none focus:border-white focus:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all text-sm sm:text-base font-space"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-900 font-bold font-orbitron uppercase tracking-widest px-8 py-4 rounded-none h-[64px] transition-all relative overflow-hidden group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
              }`}
          >
            <span className="relative z-10">{isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>

          {submitStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-neon-cyan text-center mt-4 font-space"
            >
              Transmission received. Stand by for response.
            </motion.p>
          )}

          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-center mt-4 font-space"
            >
              Transmission failed. Retry sequence initiated.
            </motion.p>
          )}
        </form>
      </div>
    </motion.div>
  )
}

export default Contact