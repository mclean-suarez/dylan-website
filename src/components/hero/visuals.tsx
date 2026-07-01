import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

// ---------------------------------------------------------------------------
// Shared "Blueprint × Liquid Chrome" visual system.
// Premium dark theme primitives: the glass star, atmosphere layers (aurora,
// grain, vignette, blueprint grid), and the magnetic button. Used by the
// homepage hero/sections; presentational only (interactivity lives in pages).
// ---------------------------------------------------------------------------

// Huracán: ONE accent. All former accents collapse to the single periwinkle.
export const CYAN = '#6F9BFF'
export const ICY = '#d5e0ff'
export const ELEC = '#6F9BFF'
export const WARM = '#6F9BFF'
export const INK = '#04060C'
const STAR = '/images/brand/aistar.png'

export const KEYS = `
@keyframes hfSpin { to { transform: rotate(360deg) } }
@keyframes hfFloat { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-16px) } }
@keyframes hfGlow { 0%,100%{ opacity:.55; transform:scale(1) } 50%{ opacity:1; transform:scale(1.05) } }
@keyframes hfFlare { 0%{ transform:rotate(0deg); opacity:.25 } 50%{ opacity:.5 } 100%{ transform:rotate(360deg); opacity:.25 } }
@keyframes hfGlint { 0%{ transform:translateX(-160%) rotate(18deg) } 100%{ transform:translateX(160%) rotate(18deg) } }
@keyframes hfDraw { to { stroke-dashoffset:0 } }
@keyframes hfRise { from { opacity:0; transform:translateY(10px) } to { opacity:1; transform:translateY(0) } }
@keyframes hfWipe { from { transform:translateY(115%) } to { transform:translateY(0) } }
@keyframes hfAuroraA { 0%,100%{ transform:translate(0,0) scale(1) } 50%{ transform:translate(8%,6%) scale(1.15) } }
@keyframes hfAuroraB { 0%,100%{ transform:translate(0,0) scale(1.1) } 50%{ transform:translate(-7%,-5%) scale(1) } }
@keyframes hfDust { 0%{ transform:translateY(0); opacity:0 } 12%{ opacity:.9 } 88%{ opacity:.7 } 100%{ transform:translateY(-260px); opacity:0 } }
@keyframes hfScan { 0%{ transform:translateY(-40%); opacity:0 } 8%{ opacity:1 } 92%{ opacity:1 } 100%{ transform:translateY(360px); opacity:0 } }
@keyframes hfMarquee { to { transform:translateX(-50%) } }
.hf-draw{ stroke-dasharray:600; stroke-dashoffset:600; animation:hfDraw 1.3s ease forwards }
.hf-rise{ opacity:0; animation:hfRise .7s ease forwards }
.hf-wipe{ display:block; transform:translateY(115%); animation:hfWipe 1s cubic-bezier(.2,.8,.15,1) forwards }
.hf-reveal{ opacity:0; transform:translateY(16px); transition:opacity .7s ease, transform .7s cubic-bezier(.2,.8,.2,1) }
.hf-reveal.is-in{ opacity:1; transform:translateY(0) }
@media (prefers-reduced-motion: reduce){ .hf-wipe{ animation-duration:.01ms } }
`

// Huracán: the grid is now a faint instrument texture, not a loud blueprint.
export const blueprintGrid = {
  backgroundImage:
    'linear-gradient(rgba(111,155,255,0.035) 1px,transparent 1px), linear-gradient(90deg, rgba(111,155,255,0.035) 1px, transparent 1px)',
  backgroundSize: '64px 64px',
}
export const blueprintGridLg = {
  backgroundImage:
    'linear-gradient(rgba(111,155,255,0.05) 1px,transparent 1px), linear-gradient(90deg, rgba(111,155,255,0.05) 1px, transparent 1px)',
  backgroundSize: '180px 180px',
}

export const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")"

const DUST = [
  { l: '8%', s: 2, d: 0, dur: 14, o: 0.5 },
  { l: '16%', s: 1.5, d: 6, dur: 18, o: 0.4 },
  { l: '24%', s: 2.5, d: 2, dur: 12, o: 0.6 },
  { l: '33%', s: 1.5, d: 9, dur: 16, o: 0.35 },
  { l: '41%', s: 2, d: 4, dur: 20, o: 0.5 },
  { l: '52%', s: 1.5, d: 11, dur: 15, o: 0.4 },
  { l: '61%', s: 2.5, d: 1, dur: 13, o: 0.55 },
  { l: '69%', s: 2, d: 7, dur: 19, o: 0.45 },
  { l: '77%', s: 1.5, d: 3, dur: 17, o: 0.35 },
  { l: '85%', s: 2, d: 10, dur: 14, o: 0.5 },
  { l: '92%', s: 1.5, d: 5, dur: 21, o: 0.4 },
  { l: '47%', s: 1.5, d: 13, dur: 18, o: 0.3 },
]

// Reveal sized to clear all four points of the big star while fading out before
// the small corner star. Mask + spin share the plate so they stay locked.
const STAR_MASK =
  'radial-gradient(ellipse 61% 61% at 35.8% 61.2%, #000 90%, transparent 100%)'

export function GlassStar({ size, spin = true }: { size: number; spin?: boolean }) {
  const W = size * 1.18
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div style={{ position: 'absolute', inset: '-18%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(111,155,255,0.30), transparent 62%)', filter: 'blur(46px)', animation: 'hfGlow 5s ease-in-out infinite' }} />
      <div style={{ width: size, height: size, position: 'relative', animation: 'hfFloat 7s ease-in-out infinite' }}>
        <div style={{ position: 'absolute', width: W, height: W, left: size * 0.078, top: -size * 0.222, maskImage: STAR_MASK, WebkitMaskImage: STAR_MASK, transformOrigin: '35.8% 61.2%', animation: spin ? 'hfSpin 90s linear infinite' : undefined }}>
          <img src={STAR} alt="Glass star" style={{ display: 'block', width: '100%', mixBlendMode: 'screen' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(40% 40% at 38% 40%, rgba(255,255,255,0.28), transparent 60%)', mixBlendMode: 'screen', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '40%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)', mixBlendMode: 'screen', animation: 'hfGlint 6.5s ease-in-out infinite' }} />
        </div>
      </div>
    </div>
  )
}

// Full atmospheric backdrop for a dark section: aurora + blueprint grid +
// optional dust/scan. Drop inside a `relative` dark section, before content.
export function Aurora(_props: { warm?: boolean } = {}) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div style={{ position: 'absolute', width: '60%', height: '70%', left: '8%', top: '-10%', background: 'radial-gradient(circle, rgba(111,155,255,0.16), transparent 65%)', filter: 'blur(80px)', animation: 'hfAuroraA 22s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', width: '55%', height: '60%', right: '2%', bottom: '-12%', background: 'radial-gradient(circle, rgba(111,155,255,0.12), transparent 65%)', filter: 'blur(90px)', animation: 'hfAuroraB 26s ease-in-out infinite' }} />
    </div>
  )
}

export function BlueprintGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0" style={blueprintGrid} />
      <div className="absolute inset-0" style={blueprintGridLg} />
    </div>
  )
}

export function DustField() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {DUST.map((p, i) => (
        <span key={i} style={{ position: 'absolute', left: p.l, bottom: '12%', width: p.s, height: p.s, borderRadius: '50%', background: ICY, opacity: p.o, boxShadow: `0 0 6px ${CYAN}`, animation: `hfDust ${p.dur}s linear ${p.d}s infinite` }} />
      ))}
    </div>
  )
}

export function Grain({ opacity = 0.12 }: { opacity?: number }) {
  return <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: GRAIN, backgroundSize: '200px 200px', opacity, mixBlendMode: 'soft-light' }} />
}

export function Vignette() {
  return <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(125% 125% at 50% 42%, transparent 52%, rgba(0,0,0,0.55))' }} />
}

// Compact dark page header for interior pages — blueprint atmosphere, navbar
// clearance, eyebrow + title + subtitle. No star (the star lives on the home
// hero only). Drop at the top of a themed page.
export function DarkPageHeader({
  label,
  title,
  subtitle,
  children,
}: {
  label: string
  title: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: INK }}>
      <Aurora />
      <BlueprintGrid />
      <div className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: 140, background: `linear-gradient(180deg, transparent, ${CYAN}22, transparent)`, animation: 'hfScan 13s linear infinite', mixBlendMode: 'screen' }} />
      <div className="absolute" style={{ top: 14, left: 16, color: 'rgba(111,155,255,0.55)' }}>+</div>
      <div className="absolute" style={{ top: 14, right: 16, color: WARM, textShadow: `0 0 10px ${WARM}99` }}>+</div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 pt-36 pb-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4 hf-rise" style={{ color: CYAN, animationDelay: '.05s' }}>{label}</p>
        <div className="w-10 h-0.5 mb-6 hf-rise" style={{ background: CYAN, animationDelay: '.1s' }} />
        <h1 className="text-white font-bold max-w-3xl hf-rise" style={{ fontSize: 'clamp(2.2rem,4.4vw,3.6rem)', lineHeight: 1.0, letterSpacing: '-0.02em', animationDelay: '.15s' }}>{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed hf-rise" style={{ color: 'rgba(213,224,255,0.62)', animationDelay: '.25s' }}>{subtitle}</p>
        )}
        {children}
      </div>
      <Grain opacity={0.1} />
    </section>
  )
}

// Animated count-up that fires when scrolled into view.
export function CountUp({ to, suffix = '', prefix = '', duration = 1500 }: { to: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration)
          setVal(Math.round((1 - Math.pow(1 - p, 3)) * to))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])
  return <span ref={ref}>{prefix}{val}{suffix}</span>
}

// Card with a cursor-following radial spotlight. Pass card styling via
// className (include rounded + overflow-hidden so the glow is clipped).
export function SpotlightCard({
  children,
  className = '',
  as = 'div',
  ...rest
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'a' | typeof import('react-router-dom').Link
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null)
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--sx', `${e.clientX - r.left}px`)
    el.style.setProperty('--sy', `${e.clientY - r.top}px`)
  }
  const Comp = as as React.ElementType
  return (
    <Comp ref={ref} onMouseMove={onMove} className={`group/spot relative ${className}`} {...rest}>
      <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100" style={{ background: 'radial-gradient(340px circle at var(--sx, 50%) var(--sy, 0%), rgba(111,155,255,0.13), transparent 60%)' }} />
      {children}
    </Comp>
  )
}

// Edge-faded auto-scrolling marquee of short text items.
export function Marquee({ items, durationS = 38 }: { items: string[]; durationS?: number }) {
  const row = [...items, ...items]
  return (
    <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)' }}>
      <div className="flex w-max items-center gap-3 py-1" style={{ animation: `hfMarquee ${durationS}s linear infinite` }}>
        {row.map((it, i) => (
          <span key={i} className="flex-shrink-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] text-white/70 whitespace-nowrap">
            <span className="w-1 h-1 rounded-full" style={{ background: CYAN }} />
            {it}
          </span>
        ))}
      </div>
    </div>
  )
}

// Browser-chrome frame for real product screenshots.
export function BrowserFrame({ src, alt, label }: { src: string; alt: string; label?: string }) {
  return (
    <div className="relative w-full rounded-[14px] border border-white/12 overflow-hidden bg-[#0b1120] shadow-[0_40px_90px_-25px_rgba(111,155,255,0.45)]">
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-white/10 bg-white/[0.03]">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        {label && <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">{label}</span>}
      </div>
      <img src={src} alt={alt} className="block w-full" loading="lazy" />
    </div>
  )
}

export function MagneticButton({
  children,
  variant,
  as = 'button',
  ...rest
}: {
  children: ReactNode
  variant: 'solid' | 'ghost' | 'accent'
  as?: 'button' | 'a' | typeof import('react-router-dom').Link
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null)
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.25}px, ${(e.clientY - (r.top + r.height / 2)) * 0.4}px)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }
  const look =
    variant === 'solid'
      ? 'text-black bg-white'
      : variant === 'accent'
        ? 'text-black'
        : 'text-white'
  const Comp = as as React.ElementType
  return (
    <Comp
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2 ${look}`}
      style={{
        transition: 'transform .3s cubic-bezier(.2,.8,.2,1)',
        border: variant === 'ghost' ? '1px solid rgba(255,255,255,0.22)' : undefined,
        background: variant === 'accent' ? WARM : undefined,
        willChange: 'transform',
      }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
