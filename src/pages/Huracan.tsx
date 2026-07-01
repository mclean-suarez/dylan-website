import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Seo from '../components/Seo'

// ---------------------------------------------------------------------------
// "Huracán" theme test page — dialled to the max. Standalone. Route: /huracan.
// Black Huracán × Bloomberg terminal × Apple product page.
// Near-black canvas, ONE accent (#6F9BFF), frosted glass, instrument cluster,
// glass-star jewel, HUD-framed cinematic hero, an interactive configurator
// (values recalculate with weighted motion), filmic grain + vignette.
// Custom minimal nav + full-screen overlay (global navbar is hidden here).
// ---------------------------------------------------------------------------

const INK = '#04060C'
const INK2 = '#05070D'
const BLUE = '#6F9BFF'
const STAR = '/images/brand/aistar.png'
const STAR_MASK = 'radial-gradient(ellipse 61% 61% at 35.8% 61.2%, #000 90%, transparent 100%)'
const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")"

const CSS = `
@keyframes hFloat { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-12px) } }
@keyframes hSpin { to { transform:rotate(360deg) } }
@keyframes hBlink { 0%,100%{ opacity:1 } 50%{ opacity:.3 } }
@keyframes hCalib { from { transform:scaleX(0) } to { transform:scaleX(1) } }
.h-reveal{ opacity:0; transform:translateY(18px); transition:opacity .7s ease-out, transform .7s cubic-bezier(.2,.7,.2,1) }
.h-reveal.in{ opacity:1; transform:none }
.h-micro{ font-family:Inter,system-ui,sans-serif; text-transform:uppercase; font-size:10px; line-height:1; letter-spacing:0.16em; font-weight:600 }
.h-display{ font-family:"Geist",Inter,system-ui,sans-serif }
.h-mono{ font-family:"Space Mono",ui-monospace,monospace }
.h-link{ position:relative }
.h-link::after{ content:''; position:absolute; left:0; right:100%; bottom:-6px; height:1px; background:${BLUE}; transition:right .35s cubic-bezier(.2,.7,.2,1) }
.h-link:hover::after{ right:0 }
@media (prefers-reduced-motion: reduce){
  .h-reveal{ transition:none; opacity:1; transform:none }
  [data-anim]{ animation:none !important }
}
`

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setInView(true); io.disconnect() } }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return { ref, inView }
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.18)
  return <div ref={ref} className={`h-reveal ${inView ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

function Micro({ children, color = 'rgba(255,255,255,0.4)', className = '' }: { children: React.ReactNode; color?: string; className?: string }) {
  return <span className={`h-micro ${className}`} style={{ color }}>{children}</span>
}

// Tween to target whenever `value` changes (weighted recalculation).
function AnimatedNumber({ value, duration = 700 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(value)
  const fromRef = useRef(value)
  useEffect(() => {
    const from = fromRef.current
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      setDisplay(Math.round(from + (value - from) * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
      else fromRef.current = value
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value, duration])
  return <>{display.toLocaleString()}</>
}

const STATUS_DOT = (
  <span data-anim className="inline-block w-1.5 h-1.5 rounded-full align-middle" style={{ background: BLUE, boxShadow: `0 0 8px ${BLUE}`, animation: 'hBlink 2.6s ease-in-out infinite' }} />
)

// --- Minimal nav + full-screen overlay -------------------------------------
const navItems = [
  ['01', 'Training & Enablement', '/training-and-enablement'],
  ['02', 'For Individuals', '/community'],
  ['03', 'Meet The Team', '/about'],
]

function HuracanNav() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-[1320px] mx-auto px-8 sm:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-3 group">
            <span className="font-bold tracking-tight text-[15px]" style={{ color: 'rgba(255,255,255,0.95)' }}>AD ON AI</span>
            <Micro color="rgba(255,255,255,0.35)" className="hidden sm:inline">Certified Claude Experts</Micro>
          </Link>
          <button onClick={() => setOpen(true)} className="flex items-center gap-3 group">
            <Micro color="rgba(255,255,255,0.6)" className="group-hover:text-white transition-colors">Menu</Micro>
            <span className="flex flex-col gap-[5px] items-end">
              <span className="block h-px w-6 transition-all group-hover:w-4" style={{ background: 'rgba(255,255,255,0.7)' }} />
              <span className="block h-px w-4 transition-all group-hover:w-6" style={{ background: BLUE }} />
            </span>
          </button>
        </div>
      </header>

      {/* overlay */}
      <div
        className="fixed inset-0 z-[60] transition-all duration-500"
        style={{ background: 'rgba(4,6,12,0.92)', backdropFilter: 'blur(14px)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
      >
        <div className="max-w-[1320px] mx-auto px-8 sm:px-12 h-20 flex items-center justify-between">
          <span className="font-bold tracking-tight text-[15px]" style={{ color: 'rgba(255,255,255,0.95)' }}>AD ON AI</span>
          <button onClick={() => setOpen(false)} className="flex items-center gap-3 group">
            <Micro color="rgba(255,255,255,0.6)" className="group-hover:text-white transition-colors">Close</Micro>
            <span className="relative w-5 h-5">
              <span className="absolute top-1/2 left-0 h-px w-5 rotate-45" style={{ background: 'rgba(255,255,255,0.8)' }} />
              <span className="absolute top-1/2 left-0 h-px w-5 -rotate-45" style={{ background: BLUE }} />
            </span>
          </button>
        </div>

        <nav className="max-w-[1320px] mx-auto px-8 sm:px-12 mt-[8vh]">
          {navItems.map(([n, label, href], i) => (
            <Link
              key={href}
              to={href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-6 py-5 border-t"
              style={{ borderColor: 'rgba(255,255,255,0.08)', transform: open ? 'none' : 'translateY(20px)', opacity: open ? 1 : 0, transition: `opacity .5s ease ${0.1 + i * 0.06}s, transform .5s cubic-bezier(.2,.7,.2,1) ${0.1 + i * 0.06}s` }}
            >
              <span className="h-mono text-sm" style={{ color: BLUE }}>{n}</span>
              <span className="h-display font-bold tracking-tight transition-colors group-hover:text-white" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.7)' }}>{label}</span>
              <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 self-center" style={{ color: BLUE }} />
            </Link>
          ))}
          <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
          <div className="mt-10 flex items-center gap-6">
            <Link to="/contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium" style={{ background: 'rgba(255,255,255,0.95)', color: INK }}>Book a call</Link>
            <a href="https://terminal-v4-production.up.railway.app" target="_blank" rel="noopener noreferrer" className="h-link text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Launch Academy</a>
          </div>
        </nav>
      </div>
    </>
  )
}

// The single brand jewel — glass star, one soft blue glow, cursor tilt.
function Jewel({ size, tiltRef }: { size: number; tiltRef: React.RefObject<HTMLDivElement | null> }) {
  const W = size * 1.18
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div style={{ position: 'absolute', inset: '-20%', borderRadius: '50%', background: `radial-gradient(circle, rgba(111,155,255,0.32), transparent 62%)`, filter: 'blur(50px)' }} />
      <div ref={tiltRef} style={{ width: size, height: size, position: 'relative', transition: 'transform .4s cubic-bezier(.2,.7,.2,1)', willChange: 'transform' }}>
        <div data-anim style={{ width: size, height: size, position: 'relative', animation: 'hFloat 8s ease-in-out infinite' }}>
          <div data-anim style={{ position: 'absolute', width: W, height: W, left: size * 0.078, top: -size * 0.222, maskImage: STAR_MASK, WebkitMaskImage: STAR_MASK, transformOrigin: '35.8% 61.2%', animation: 'hSpin 160s linear infinite' }}>
            <img src={STAR} alt="" style={{ display: 'block', width: '100%', mixBlendMode: 'screen' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Reactive 270° gauge — arc + center number follow a live value.
function Gauge({ value, max, unit, caption }: { value: number; max: number; unit?: string; caption: string }) {
  const r = 82
  const C = 2 * Math.PI * r
  const arc = 0.75 * C
  const offset = arc * (1 - Math.min(1, value / max))
  const ticks = Array.from({ length: 37 })
  return (
    <div className="relative" style={{ width: 250, height: 250 }}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {ticks.map((_, i) => {
          const ang = -135 + (270 * i) / 36
          const major = i % 6 === 0
          return <line key={i} x1="100" y1="9" x2="100" y2={major ? 17 : 13} stroke="rgba(255,255,255,0.18)" strokeWidth={major ? 1.4 : 0.8} transform={`rotate(${ang} 100 100)`} />
        })}
        <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" strokeLinecap="round" strokeDasharray={`${arc} ${C}`} transform="rotate(135 100 100)" />
        <circle cx="100" cy="100" r={r} fill="none" stroke={BLUE} strokeWidth="6" strokeLinecap="round" strokeDasharray={`${arc} ${C}`} strokeDashoffset={offset} transform="rotate(135 100 100)" style={{ transition: 'stroke-dashoffset .7s cubic-bezier(.2,.7,.2,1)', filter: `drop-shadow(0 0 6px rgba(111,155,255,0.55))` }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex items-baseline gap-1 h-mono">
          <span className="font-bold tracking-tight" style={{ color: 'rgba(255,255,255,0.95)', fontSize: 44, lineHeight: 1 }}><AnimatedNumber value={value} /></span>
          {unit && <span style={{ color: BLUE, fontSize: 18 }}>{unit}</span>}
        </div>
        <Micro className="mt-2" color="rgba(255,255,255,0.4)">{caption}</Micro>
      </div>
    </div>
  )
}

function Panel({ children, live = false, className = '' }: { children: React.ReactNode; live?: boolean; className?: string }) {
  return (
    <div
      className={`relative rounded-[20px] ${className}`}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: `1px solid ${live ? 'rgba(111,155,255,0.45)' : 'rgba(255,255,255,0.10)'}`,
        boxShadow: live ? `0 0 0 1px rgba(111,155,255,0.10), 0 30px 80px -40px rgba(111,155,255,0.45), inset 0 1px 0 rgba(255,255,255,0.04)` : 'inset 0 1px 0 rgba(255,255,255,0.03)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {children}
    </div>
  )
}

export default function Huracan() {
  const heroRef = useRef<HTMLElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)
  const tiltRef = useRef<HTMLDivElement>(null)
  const [seats, setSeats] = useState(10)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    let raf = 0
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        if (lightRef.current) {
          lightRef.current.style.left = `${px * 100}%`
          lightRef.current.style.top = `${py * 100}%`
        }
        if (tiltRef.current) tiltRef.current.style.transform = `perspective(1200px) rotateX(${(0.5 - py) * 10}deg) rotateY(${(px - 0.5) * 12}deg)`
      })
    }
    const onLeave = () => { if (tiltRef.current) tiltRef.current.style.transform = 'perspective(1200px) rotateX(0) rotateY(0)' }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [])

  const builds = seats * 20
  const hoursWk = seats * 12
  const hoursYr = seats * 12 * 48
  const presets = [5, 10, 25, 50]

  const capabilities = [
    { tag: 'System 01', title: 'Training & Enablement', body: 'An ongoing program that gets your staff using AI in the work they already do.', live: true },
  ]
  const spec = [
    ['Program', 'AI Training & Enablement'],
    ['Duration', '3 months · ongoing'],
    ['Structure', '24 modules'],
    ['Format', 'Live + self-paced'],
    ['Applied to', 'Every role'],
    ['Reporting', 'Monthly'],
    ['Status', 'Enrolling'],
  ]

  return (
    <>
      <Seo title="Huracán — theme test | Ad On AI" description="Theme exploration." path="/huracan" />
      <style>{CSS}</style>
      <HuracanNav />

      <div style={{ background: INK, color: 'rgba(255,255,255,0.92)' }}>
        {/* ===== HERO ===== */}
        <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: '100vh', background: `radial-gradient(120% 80% at 50% -10%, ${INK2}, ${INK} 60%)` }}>
          {/* cursor-follow light */}
          <div ref={lightRef} className="absolute pointer-events-none" style={{ top: '30%', left: '50%', width: 700, height: 700, transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(111,155,255,0.10), transparent 60%)', filter: 'blur(30px)' }} />

          {/* HUD frame */}
          <div className="absolute pointer-events-none hidden md:block" style={{ inset: 24, border: '1px solid rgba(255,255,255,0.07)' }} />
          {[['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].map(([v, h], i) => (
            <div key={i} className="absolute pointer-events-none hidden md:block" style={{ [v]: 24, [h]: 24, width: 14, height: 14, [`border${v[0].toUpperCase()}${v.slice(1)}`]: `1px solid ${i === 1 ? BLUE : 'rgba(255,255,255,0.25)'}`, [`border${h[0].toUpperCase()}${h.slice(1)}`]: `1px solid ${i === 1 ? BLUE : 'rgba(255,255,255,0.25)'}` } as React.CSSProperties} />
          ))}
          <div className="absolute hidden md:block h-mono" style={{ top: 34, left: 46, fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)' }}>AON · ENABLEMENT SYSTEM</div>
          <div className="absolute hidden md:flex items-center gap-2 h-mono" style={{ bottom: 34, right: 46, fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)' }}>{STATUS_DOT} LIVE</div>

          <div className="relative max-w-[1180px] mx-auto px-8 sm:px-12 pt-40 pb-28 flex flex-col items-center text-center">
            <Reveal><Micro color="rgba(111,155,255,0.85)">Black Huracán · Theme Test</Micro></Reveal>

            <div className="my-10">
              <Reveal delay={80}><Jewel size={320} tiltRef={tiltRef} /></Reveal>
            </div>

            <Reveal delay={160}>
              <h1 className="h-display font-bold mx-auto" style={{ fontSize: 'clamp(2.8rem,6.5vw,5.5rem)', lineHeight: 0.95, letterSpacing: '-0.04em', maxWidth: '15ch', color: 'rgba(255,255,255,0.97)' }}>
                Precision AI for businesses that mean it.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 mx-auto text-[16px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '32rem' }}>
                We train your team to use AI in their real work — and to build the automations and agents that handle the rest. Engineered around how your business runs — measured, reported, built to last.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-11 flex items-center gap-6">
                <Link to="/contact" className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium" style={{ background: 'rgba(255,255,255,0.95)', color: INK }}>Book a call</Link>
                <a href="#configure" className="h-link inline-flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Run the numbers <ArrowUpRight className="w-4 h-4" /></a>
              </div>
            </Reveal>
          </div>

          {/* calibration line */}
          <div data-anim className="absolute bottom-0 left-0 right-0 h-px origin-left" style={{ background: `linear-gradient(90deg, transparent, ${BLUE}, transparent)`, animation: 'hCalib 1.6s cubic-bezier(.2,.7,.2,1) .3s both' }} />
        </section>

        {/* ===== CONFIGURATOR ===== */}
        <section id="configure" className="relative scroll-mt-24" style={{ background: INK }}>
          <div className="max-w-[1180px] mx-auto px-8 sm:px-12 py-36">
            <Reveal><Micro color="rgba(255,255,255,0.4)">Configure</Micro></Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 font-bold h-display" style={{ fontSize: 'clamp(2rem,4.5vw,3.6rem)', letterSpacing: '-0.035em', lineHeight: 0.98, color: 'rgba(255,255,255,0.96)', maxWidth: '15ch' }}>
                Measured, not promised.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '36ch' }}>
                Set your team size and watch the output recalculate. Figures are program minimums, applied per seat.
              </p>
            </Reveal>

            <div className="mt-16 grid lg:grid-cols-[auto_1fr] gap-16 lg:gap-24 items-center">
              <Reveal delay={120} className="flex flex-col items-center gap-10">
                <Gauge value={hoursWk} max={600} unit="h" caption="Hours / week reclaimed" />
                {/* seat selector */}
                <div className="w-full">
                  <Micro color="rgba(255,255,255,0.4)">Staff enrolled</Micro>
                  <div className="mt-3 flex items-center gap-2">
                    {presets.map((p) => (
                      <button
                        key={p}
                        onClick={() => setSeats(p)}
                        className="h-mono flex-1 py-3 rounded-[12px] text-sm transition-all"
                        style={{
                          border: `1px solid ${seats === p ? 'rgba(111,155,255,0.6)' : 'rgba(255,255,255,0.1)'}`,
                          background: seats === p ? 'rgba(111,155,255,0.08)' : 'rgba(255,255,255,0.02)',
                          color: seats === p ? BLUE : 'rgba(255,255,255,0.6)',
                          boxShadow: seats === p ? `0 0 24px -8px ${BLUE}` : 'none',
                        }}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="rounded-[20px] overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  {[
                    ['Working AI builds produced', builds, '', builds, 50 * 20],
                    ['Hours saved per week', hoursWk, 'h', hoursWk, 600],
                    ['Hours saved per year', hoursYr, 'h', hoursYr, 50 * 12 * 48],
                  ].map(([label, val, unit, bar, barMax]) => (
                    <div key={label as string} className="px-7 py-7" style={{ background: INK, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="flex items-baseline justify-between">
                        <Micro color="rgba(255,255,255,0.4)">{label as string}</Micro>
                        <span className="h-mono font-bold flex items-baseline gap-1" style={{ color: 'rgba(255,255,255,0.96)', fontSize: 30 }}>
                          <AnimatedNumber value={val as number} />{unit ? <span style={{ color: BLUE, fontSize: 16 }}>{unit as string}</span> : null}
                        </span>
                      </div>
                      <div className="mt-4 h-px w-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                        <div className="h-px" style={{ width: `${Math.min(100, ((bar as number) / (barMax as number)) * 100)}%`, background: BLUE, boxShadow: `0 0 8px ${BLUE}`, transition: 'width .7s cubic-bezier(.2,.7,.2,1)' }} />
                      </div>
                    </div>
                  ))}
                  <div className="px-7 py-4 flex items-center gap-2" style={{ background: INK2, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    {STATUS_DOT}<Micro color="rgba(255,255,255,0.4)">Indicative — based on program minimums</Micro>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===== CAPABILITIES (frosted glass) ===== */}
        <section className="relative" style={{ background: `radial-gradient(100% 60% at 50% 0%, ${INK2}, ${INK} 70%)` }}>
          <div className="max-w-[1180px] mx-auto px-8 sm:px-12 py-36">
            <Reveal><Micro color="rgba(255,255,255,0.4)">Capabilities</Micro></Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 font-bold h-display" style={{ fontSize: 'clamp(2rem,4.5vw,3.6rem)', letterSpacing: '-0.035em', lineHeight: 0.98, color: 'rgba(255,255,255,0.96)', maxWidth: '13ch' }}>
                Two systems. One outcome.
              </h2>
            </Reveal>
            <div className="mt-16 grid md:grid-cols-2 gap-6">
              {capabilities.map((c, i) => (
                <Reveal key={c.title} delay={120 + i * 80}>
                  <Panel live={c.live} className="h-full p-9 sm:p-12">
                    <div className="flex items-center justify-between mb-10">
                      <Micro color={c.live ? 'rgba(111,155,255,0.9)' : 'rgba(255,255,255,0.4)'}>{c.tag}</Micro>
                      {c.live && STATUS_DOT}
                    </div>
                    <h3 className="font-bold mb-3 h-display" style={{ fontSize: 28, letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.96)' }}>{c.title}</h3>
                    <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '32ch' }}>{c.body}</p>
                    <div className="mt-12 inline-flex items-center gap-2 text-sm h-link" style={{ color: c.live ? BLUE : 'rgba(255,255,255,0.6)' }}>Learn more <ArrowUpRight className="w-4 h-4" /></div>
                  </Panel>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SPEC SHEET ===== */}
        <section className="relative" style={{ background: INK }}>
          <div className="max-w-[1180px] mx-auto px-8 sm:px-12 py-36 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal>
              <Micro color="rgba(255,255,255,0.4)">Specification</Micro>
              <h2 className="mt-5 font-bold h-display" style={{ fontSize: 'clamp(2rem,4.5vw,3.4rem)', letterSpacing: '-0.035em', lineHeight: 0.98, color: 'rgba(255,255,255,0.96)' }}>
                The program, at instrument level.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '34ch' }}>
                Three months, twenty-four modules, every one ending in something that works — applied to the real role of every person you enrol.
              </p>
              <Link to="/contact" className="mt-9 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium" style={{ background: 'rgba(255,255,255,0.95)', color: INK }}>Book a call</Link>
            </Reveal>
            <Reveal delay={120}>
              <Panel className="overflow-hidden">
                {spec.map(([k, v], i) => (
                  <div key={k} className="flex items-center justify-between px-7 py-5" style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.07)' }}>
                    <Micro color="rgba(255,255,255,0.4)">{k}</Micro>
                    <span className="h-mono flex items-center gap-2.5" style={{ fontSize: 14, color: 'rgba(255,255,255,0.92)' }}>
                      {v === 'Enrolling' && STATUS_DOT}{v}
                    </span>
                  </div>
                ))}
              </Panel>
            </Reveal>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="relative overflow-hidden" style={{ background: `radial-gradient(90% 70% at 50% 120%, ${INK2}, ${INK} 60%)` }}>
          <div className="absolute pointer-events-none" style={{ bottom: '-30%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 600, background: 'radial-gradient(circle, rgba(111,155,255,0.12), transparent 60%)', filter: 'blur(50px)' }} />
          <div className="relative max-w-[900px] mx-auto px-8 sm:px-12 py-44 text-center">
            <Reveal><Micro color="rgba(111,155,255,0.85)">Get started</Micro></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-bold mx-auto h-display" style={{ fontSize: 'clamp(2.6rem,6vw,4.6rem)', letterSpacing: '-0.04em', lineHeight: 0.95, color: 'rgba(255,255,255,0.97)' }}>
                Built to perform.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 mx-auto text-[16px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '30rem' }}>
                Tell us about your business, and we&rsquo;ll show you exactly how it would work for your team.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Link to="/contact" className="mt-11 inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium" style={{ background: 'rgba(255,255,255,0.95)', color: INK }}>Book a call <ArrowUpRight className="w-4 h-4" /></Link>
            </Reveal>
          </div>
        </section>
      </div>

      {/* filmic finish — vignette + grain (fixed, above content, below nav) */}
      <div className="fixed inset-0 pointer-events-none z-40" style={{ background: 'radial-gradient(130% 130% at 50% 45%, transparent 55%, rgba(0,0,0,0.6))' }} />
      <div className="fixed inset-0 pointer-events-none z-40" style={{ backgroundImage: GRAIN, backgroundSize: '200px 200px', opacity: 0.06, mixBlendMode: 'soft-light' }} />
    </>
  )
}
