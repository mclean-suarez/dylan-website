import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import AdOnAILogo from './AdOnAILogo'

// Huracán global nav — a near-invisible top bar (wordmark + Book a call + MENU)
// that opens a full-screen overlay. One accent, micro-labels, weighted motion.

const BLUE = '#6F9BFF'

type Group = { num: string; label: string; href: string; subs: [string, string][] }
const groups: Group[] = [
  {
    num: '01', label: 'Training & Enablement', href: '/training-and-enablement',
    subs: [
      ['AI Training & Enablement Program', '/training-and-enablement'],
      ['BPO AI Learning Program', '/bpo-ai-program'],
    ],
  },
  {
    num: '02', label: 'Ongoing Support', href: '/webinars-and-masterclasses',
    subs: [
      ['Webinars & Masterclasses', '/webinars-and-masterclasses'],
      ['Join our Community', '/community'],
    ],
  },
  { num: '03', label: 'Meet The Team', href: '/about', subs: [] },
]

const microCls = 'uppercase font-semibold'
const microStyle: React.CSSProperties = { fontSize: 10, letterSpacing: '0.16em', fontFamily: 'Inter, sans-serif' }

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // The Huracán theme test page ships its own nav.
  if (location.pathname === '/huracan') return null

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-colors duration-300"
        style={scrolled ? { background: 'rgba(4,6,12,0.72)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(255,255,255,0.07)' } : { background: 'transparent' }}
      >
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 text-white hover:opacity-80 transition-opacity">
            <AdOnAILogo showExpertTagline />
          </Link>
          <div className="flex items-center gap-5 sm:gap-7">
            <Link to="/contact" className="hidden sm:inline-flex items-center rounded-full px-5 py-2.5 text-[13px] font-medium" style={{ background: 'rgba(255,255,255,0.95)', color: '#04060C' }}>
              Book a call
            </Link>
            <button onClick={() => setOpen(true)} className="flex items-center gap-3 group" aria-label="Open menu">
              <span className={`${microCls} transition-colors`} style={{ ...microStyle, color: 'rgba(255,255,255,0.65)' }}>Menu</span>
              <span className="flex flex-col gap-[5px] items-end">
                <span className="block h-px w-6 transition-all group-hover:w-4" style={{ background: 'rgba(255,255,255,0.7)' }} />
                <span className="block h-px w-4 transition-all group-hover:w-6" style={{ background: BLUE }} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* full-screen overlay */}
      <div
        className="fixed inset-0 z-[60] transition-opacity duration-500 overflow-y-auto"
        style={{ background: 'rgba(4,6,12,0.94)', backdropFilter: 'blur(16px)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
      >
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          <Link to="/" onClick={() => setOpen(false)} className="text-white hover:opacity-80 transition-opacity"><AdOnAILogo showExpertTagline /></Link>
          <button onClick={() => setOpen(false)} className="flex items-center gap-3 group" aria-label="Close menu">
            <span className={microCls} style={{ ...microStyle, color: 'rgba(255,255,255,0.6)' }}>Close</span>
            <span className="relative w-5 h-5">
              <span className="absolute top-1/2 left-0 h-px w-5 rotate-45" style={{ background: 'rgba(255,255,255,0.8)' }} />
              <span className="absolute top-1/2 left-0 h-px w-5 -rotate-45" style={{ background: BLUE }} />
            </span>
          </button>
        </div>

        <nav className="max-w-[1320px] mx-auto px-6 sm:px-10 pb-20 pt-[4vh]">
          {groups.map((g, i) => (
            <div
              key={g.href}
              className="py-6 border-t"
              style={{ borderColor: 'rgba(255,255,255,0.08)', transform: open ? 'none' : 'translateY(20px)', opacity: open ? 1 : 0, transition: `opacity .5s ease ${0.08 + i * 0.06}s, transform .5s cubic-bezier(.2,.7,.2,1) ${0.08 + i * 0.06}s` }}
            >
              <Link to={g.href} className="group inline-flex items-baseline gap-5">
                <span style={{ color: BLUE, fontFamily: '"Space Mono", monospace', fontSize: 13 }}>{g.num}</span>
                <span className="font-bold tracking-tight transition-colors group-hover:text-white" style={{ fontSize: 'clamp(1.6rem,3.6vw,2.6rem)', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.75)', fontFamily: 'Geist, Inter, sans-serif' }}>{g.label}</span>
                <ArrowUpRight className="w-5 h-5 self-center opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" style={{ color: BLUE }} />
              </Link>
              {g.subs.length > 0 && (
                <div className="mt-4 pl-9 flex flex-wrap gap-x-8 gap-y-2.5">
                  {g.subs.map(([label, href]) => (
                    <Link key={href} to={href} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link to="/contact" className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium" style={{ background: 'rgba(255,255,255,0.95)', color: '#04060C' }}>Book a call</Link>
            <a href="https://terminal-v4-production.up.railway.app" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>Launch Academy</a>
            <Link to="/faq" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>FAQ</Link>
          </div>
        </nav>
      </div>
    </>
  )
}
