import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Global smooth-scroll (the "glide" — the single biggest lever on how the
// page *moves*). Lenis drives an eased scroll position that framer-motion's
// useScroll reads, so reveals + parallax stay in sync. Disabled entirely when
// the visitor prefers reduced motion.
let lenisInstance: Lenis | null = null

export function SmoothScroll() {
  const location = useLocation()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })
    lenisInstance = lenis

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])

  // Jump to top instantly on route change (Lenis otherwise keeps position).
  useEffect(() => {
    if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}
