import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    VANTA: any;
  }
}

// Lightweight wrapper to initialize / destroy Vanta.js Globe effect
const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null)
  const effectRef = useRef<any>(null)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const threeMod = await import('three')
        // @ts-ignore - no types for dist file
        const vantaMod = await import('vanta/dist/vanta.globe.min')
        if (cancelled) return
        if (!effectRef.current && vantaMod && typeof vantaMod.default === 'function') {
          effectRef.current = vantaMod.default({
            THREE: threeMod,
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x6366f1,
            color2: 0x8b5cf6,
            backgroundColor: 0xffffff,
            size: 1.2,
          })
        }
      } catch (e) {
        console.warn('Vanta load failed', e)
      }
    }
    load()
    return () => {
      cancelled = true
      if (effectRef.current) {
        try { effectRef.current.destroy() } catch {}
      }
    }
  }, [])

  return <div ref={vantaRef} className="absolute inset-0 opacity-30 pointer-events-none" />
}

export default VantaBackground
