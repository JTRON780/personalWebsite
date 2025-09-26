import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Lightweight PDF embed component. Place an up-to-date resume.pdf in /public.
// If the file is missing, a helpful message is shown.
const ResumeEmbed = () => {
  const [available, setAvailable] = useState<boolean | null>(null)

  useEffect(() => {
    let aborted = false
    // Try a HEAD request to see if resume exists
    fetch('/resume.pdf', { method: 'HEAD' }).then(res => {
      if (!aborted) setAvailable(res.ok)
    }).catch(() => { if (!aborted) setAvailable(false) })
    return () => { aborted = true }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-4 py-16"
    >
      <div className="max-w-5xl mx-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-10 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">Resume</h2>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 active:bg-indigo-700 transition-colors"
            >Download PDF</a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-indigo-300 text-indigo-700 dark:text-indigo-300 dark:border-indigo-500/40 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 font-medium transition-colors"
            >Open in new tab</a>
            <button
              onClick={() => { window.open('/resume.pdf', '_blank', 'noopener'); setTimeout(() => window.print(), 400) }}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium transition-colors"
            >Print</button>
          </div>
        </div>

        {available === null && (
          <p className="text-sm text-gray-500 dark:text-gray-400">Checking for latest resume...</p>
        )}

        {available === false && (
          <div className="p-4 rounded-md bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200 text-sm">
            <p className="font-semibold mb-1">Resume not found</p>
            <p>Place an up-to-date <code>resume.pdf</code> file in the <code>public/</code> directory (path: <code>public/resume.pdf</code>) and rebuild. This section will automatically load it.</p>
          </div>
        )}

        {available && (
          <div className="relative w-full rounded-lg overflow-hidden ring-1 ring-indigo-200/60 dark:ring-indigo-500/30 shadow-md">
            <iframe
              title="Resume PDF"
              src="/resume.pdf#view=FitH&toolbar=0&navpanes=0"
              className="w-full h-[70vh] bg-gray-600"
              style={{ 
                filter: 'invert(0.85) hue-rotate(180deg) brightness(1.1) contrast(0.9)',
                background: '#4b5563'
              }}
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ResumeEmbed
