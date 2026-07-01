import type { ReactNode } from 'react'
import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'

// ---------------------------------------------------------------------------
// Shared scroll-motion primitives (the kinso-style "render as you scroll").
// Reveal      — one element fades + slides (+ optional blur/scale) into view.
// Stagger     — a container whose direct <Stagger.Item> children cascade in.
// Parallax    — an element that drifts at a scroll-linked rate.
// All respect prefers-reduced-motion via framer-motion's reducedMotion config.
// ---------------------------------------------------------------------------

const EASE = [0.22, 0.8, 0.2, 1] as const

type Dir = 'up' | 'down' | 'left' | 'right' | 'none'

function offsetFor(dir: Dir, distance: number) {
  switch (dir) {
    case 'up': return { y: distance }
    case 'down': return { y: -distance }
    case 'left': return { x: distance }
    case 'right': return { x: -distance }
    default: return {}
  }
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  dir = 'up',
  distance = 22,
  blur = false,
  scale = false,
  duration = 0.7,
  once = true,
}: {
  children: ReactNode
  className?: string
  /** ms — kept as ms to match existing call sites */
  delay?: number
  dir?: Dir
  distance?: number
  blur?: boolean
  scale?: boolean
  duration?: number
  once?: boolean
}) {
  const off = offsetFor(dir, distance)
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...off, filter: blur ? 'blur(8px)' : 'blur(0px)', scale: scale ? 0.96 : 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once, margin: '0px 0px -12% 0px' }}
      transition={{ duration, ease: EASE, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  )
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const staggerChild: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

export function Stagger({
  children,
  className = '',
  amount = 0.2,
  once = true,
}: {
  children: ReactNode
  className?: string
  amount?: number
  once?: boolean
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  )
}

function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  )
}
Stagger.Item = StaggerItem

export function Parallax({
  children,
  className = '',
  /** px of total drift across the element's scroll travel; negative = opposite */
  amount = 60,
}: {
  children: ReactNode
  className?: string
  amount?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount])
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}
