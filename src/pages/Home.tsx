import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react'
import Seo from '../components/Seo'
import { Reveal, Stagger, Parallax } from '../components/motion'
import { LiveDemo } from '../components/motion/LiveDemo'
import { scorecard, valueProps } from '../data/program'
import {
  KEYS, CYAN, ICY, WARM,
  GlassStar, Aurora, BlueprintGrid, DustField, Grain, Vignette,
  MagneticButton, SpotlightCard, CountUp, BrowserFrame,
} from '../components/hero/visuals'

// ---------------------------------------------------------------------------
// Homepage — "Blueprint × Liquid Chrome" premium dark theme.
// Business-first, speaks to the boss buying for their team. Real copy.
// NOTE: client logos (#trust) are PLACEHOLDERS — swap for signed-off real ones
// pre-launch. Stats marked ★ are placeholders pending finalized BPO results.
// ---------------------------------------------------------------------------

const heroStats = [
  ['80+', 'staff trained in AI'],
  ['2008', 'Ad On Group operating since'],
  ['3', 'countries of operation'],
]

// PLACEHOLDER client wordmarks — replace with real signed-off logos pre-launch.
const clientLogos = [
  'Brightwater Group', 'Meridian Partners', 'Northbridge Co', 'Coastline Services',
  'Vantage Build', 'Harlow & Pike', 'Summit Advisory', 'Ironbark Civil',
  'Bluestone Logistics', 'Fenwick & Co', 'Redleaf Studios', 'Clearwater Finance',
]

const programIncludes = [
  'A guided monthly program — live build sessions, self-paced modules, and real application in their role',
  'The Academy Terminal: a custom learning app with curated, role-specific AI tools',
  'Hands-on help when someone gets stuck — we step in and build the fix with them',
  'A monthly progress report, so you see exactly what’s changing',
]

const journey = [
  { tag: 'Month 1', title: 'Foundations', body: 'Getting genuinely good at AI — accurate, safe, on-the-job use, and their first real working AI workflow.' },
  { tag: 'Month 2', title: 'Automation', body: 'Turning repeatable tasks into AI workflows and automations that run on a schedule, even in the background.' },
  { tag: 'Month 3', title: 'AI agents', body: 'Designing and deploying AI agents that handle whole jobs on their own — including a “manager” agent that runs the rest.' },
  { tag: 'Ongoing', title: 'Stay sharp', body: 'Monthly sessions on new tools and permanent academy access keep their skills current as AI moves.' },
]

const platformFeatures = [
  { title: 'Guided modules', body: '24 structured modules, grounded in your team’s real tasks.' },
  { title: 'Curated tool library', body: 'We filter the hype — they master only what’s useful for their role.' },
  { title: 'Supervised build sessions', body: 'They ship real work with a trainer in the room to float, unblock and pressure-test.' },
  { title: 'Implementation Lab', body: 'Stuck? It walks them through applying AI to their exact task.' },
  { title: 'Progress reporting', body: 'A clear monthly read on what’s been learned and applied.' },
  { title: 'Permanent access', body: 'They keep the academy for good, and stay current as the tools change.' },
]

const fav = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
const teachTools = [
  ['ChatGPT', 'chatgpt.com'], ['Claude', 'claude.ai'], ['Gemini', 'gemini.google.com'],
  ['Copilot', 'copilot.microsoft.com'], ['Perplexity', 'perplexity.ai'], ['NotebookLM', 'notebooklm.google.com'],
  ['Canva', 'canva.com'], ['Notion', 'notion.so'], ['Otter.ai', 'otter.ai'],
  ['Zapier', 'zapier.com'], ['Make', 'make.com'], ['Descript', 'descript.com'],
  ['Grammarly', 'grammarly.com'], ['ElevenLabs', 'elevenlabs.io'], ['Midjourney', 'midjourney.com'],
].map(([name, domain]) => ({ name, src: fav(domain) }))

const platformShots = [
  { src: '/images/program/landing-page-of-terminal.png', label: 'Module Library', caption: '24 modules across three months', alt: 'Academy Terminal — the Month 1 learning library' },
  { src: '/images/program/ai-tools-library.png', label: 'AI Tools Library', caption: 'A curated, role-filtered toolset', alt: 'Academy Terminal — the curated AI tools library' },
  { src: '/images/program/implementation-lab-example.png', label: 'Implementation Lab', caption: 'Applies AI to their exact task', alt: 'Academy Terminal — the Implementation Lab walking through a real task' },
]

const whyPoints = [
  { title: 'Claude Certified Experts', body: 'Current, official certifications — not yesterday’s prompt tricks.' },
  { title: 'Built around real work', body: 'Everything ties to the tasks your staff actually do for you.' },
  { title: 'Proof, not promises', body: 'Measured productivity and time saved, reported every month.' },
  { title: 'Since 2008, across 3 countries', body: 'Part of Ad On Group — we understand how Australian SMEs really run.' },
]

const ongoingSupport = [
  { title: 'A monthly support hour', body: 'Direct time with our AI specialists each month, for queries and the trickier workflows.' },
  { title: 'Webinars & masterclasses', body: 'A monthly session on the latest AI trends, releases and skills — plus a workshop on each new tool.' },
  { title: 'Community membership', body: 'Weekly business-application podcasts and a monthly newsletter to keep the team current.' },
]

const bandStats: Array<{ to?: number; suffix?: string; static?: string; label: string }> = [
  { to: 80, suffix: '+', label: 'Staff already trained in AI' },
  { to: 20, suffix: '+', label: 'Working AI builds per learner' },
  { to: 12, suffix: '', label: 'Hours/week saved per person ★' },
  { static: '3 mo', label: 'To deployed AI agents' },
]

// --- Interactive hero -------------------------------------------------------
function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const tiltRef = useRef<HTMLDivElement>(null)
  const spotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        if (gridRef.current) gridRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return
    let raf = 0
    const onMove = (e: MouseEvent) => {
      const r = sec.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        if (spotRef.current) {
          spotRef.current.style.setProperty('--mx', `${px * 100}%`)
          spotRef.current.style.setProperty('--my', `${py * 100}%`)
        }
        if (tiltRef.current) {
          tiltRef.current.style.transform = `perspective(1100px) rotateX(${(0.5 - py) * 12}deg) rotateY(${(px - 0.5) * 14}deg)`
        }
      })
    }
    const onLeave = () => {
      if (tiltRef.current) tiltRef.current.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg)'
    }
    sec.addEventListener('mousemove', onMove)
    sec.addEventListener('mouseleave', onLeave)
    return () => {
      sec.removeEventListener('mousemove', onMove)
      sec.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden flex flex-col" style={{ minHeight: '100vh', background: '#04060C' }}>
      <Aurora />
      <div ref={gridRef} className="absolute pointer-events-none" style={{ inset: '-80px 0', willChange: 'transform' }}>
        <BlueprintGrid />
      </div>
      <div className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: 140, background: `linear-gradient(180deg, transparent, ${CYAN}22, transparent)`, animation: 'hfScan 11s linear infinite', mixBlendMode: 'screen' }} />
      <DustField />
      <div ref={spotRef} className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle 420px at var(--mx,70%) var(--my,40%), rgba(111,155,255,0.10), transparent 60%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(50% 50% at 70% 50%, rgba(111,155,255,0.18), transparent 70%)' }} />

      <div className="absolute" style={{ top: 16, left: 16, color: 'rgba(111,155,255,0.6)' }}>+</div>
      <div className="absolute" style={{ top: 16, right: 16, color: WARM, textShadow: `0 0 10px ${WARM}99` }}>+</div>
      <div className="absolute" style={{ bottom: 16, left: 16, color: 'rgba(111,155,255,0.6)' }}>+</div>
      <div className="absolute" style={{ bottom: 16, right: 16, color: 'rgba(111,155,255,0.6)' }}>+</div>

      <div className="relative z-10 flex-1 max-w-[1280px] w-full mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-10 items-center pt-32 pb-10">
        <div className="order-2 lg:order-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-5 hf-rise" style={{ color: ICY, animationDelay: '.2s' }}>Certified Claude Experts</p>
          <h1 className="text-white font-bold" style={{ fontSize: 'clamp(2.6rem,5vw,4.6rem)', lineHeight: 0.92, letterSpacing: '-0.02em' }}>
            <span className="block overflow-hidden"><span className="hf-wipe" style={{ animationDelay: '.25s' }}>GET YOUR TEAM</span></span>
            <span className="block overflow-hidden"><span className="hf-wipe" style={{ animationDelay: '.37s' }}>DOING MORE WITH AI.</span></span>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed hf-rise" style={{ color: 'rgba(213,224,255,0.65)', animationDelay: '.6s' }}>
            We train your staff to use AI in the work they already do — and to build the automations and agents that handle the rest — so more gets done, hours come back, and your team grows what it can handle without growing payroll.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 hf-rise" style={{ animationDelay: '.7s' }}>
            <MagneticButton variant="solid" as={Link} to="/contact">BOOK A CALL</MagneticButton>
            <MagneticButton variant="ghost" as={Link} to="/training-and-enablement">
              SEE WHAT WE DO <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 hf-rise" style={{ animationDelay: '.85s' }}>
            {heroStats.map(([v, k], i) => (
              <div key={k} className="flex items-center gap-8">
                {i > 0 && <span className="w-px h-8" style={{ background: 'rgba(111,155,255,0.18)' }} />}
                <div>
                  <div className="text-white font-bold text-xl leading-none">{v}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] mt-1.5" style={{ color: 'rgba(111,155,255,0.7)' }}>{k}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex items-center justify-center" style={{ minHeight: 460 }}>
          <Parallax amount={70}>
            <div ref={tiltRef} style={{ transition: 'transform .4s cubic-bezier(.2,.8,.2,1)', willChange: 'transform' }}>
              <GlassStar size={400} />
            </div>
          </Parallax>
        </div>
      </div>

      <Vignette />
      <Grain opacity={0.12} />
    </section>
  )
}

// --- helpers ----------------------------------------------------------------
function SectionLabel({ children, color = CYAN }: { children: React.ReactNode; color?: string }) {
  return (
    <>
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color }}>{children}</p>
      <div className="w-10 h-0.5 mb-6" style={{ background: color }} />
    </>
  )
}

export default function Home() {
  return (
    <>
      <Seo
        title="Ad On AI | AI Training & Enablement for Australian Business"
        description="Ad On AI gets your team doing more with AI — an ongoing AI training & enablement program built around the real work your staff already do."
        path="/"
      />
      <style>{KEYS}</style>

      <div className="bg-black">
        <HomeHero />

        {/* ===== TRUST STRIP (placeholder client logos) ===== */}
        <section className="relative overflow-hidden border-y border-white/[0.06]" style={{ background: '#04060c' }}>
          <div className="relative z-10 py-9">
            <p className="text-center font-mono text-[10px] uppercase tracking-[0.22em] mb-6" style={{ color: 'rgba(111,155,255,0.55)' }}>
              Trusted by teams across Australian business
            </p>
            {/* marquee carousel */}
            <div className="relative overflow-hidden">
              {/* fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" style={{ background: 'linear-gradient(to right, #04060c, transparent)' }} />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" style={{ background: 'linear-gradient(to left, #04060c, transparent)' }} />
              <div
                className="flex items-center gap-x-14 w-max"
                style={{
                  animation: 'marquee 28s linear infinite',
                }}
              >
                {[...clientLogos, ...clientLogos].map((name, i) => (
                  <span
                    key={i}
                    className="text-base sm:text-lg font-bold tracking-tight text-white/30 hover:text-white/55 transition-colors select-none whitespace-nowrap"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}</style>
        </section>

        {/* ===== SPOTLIGHT — AI TRAINING & ENABLEMENT ===== */}
        <section className="relative overflow-hidden" style={{ background: '#04060C' }}>
          <BlueprintGrid />
          <Aurora />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <SectionLabel>AI Training &amp; Enablement</SectionLabel>
              <h2 className="text-white font-bold" style={{ fontSize: 'clamp(2rem,3.6vw,3.2rem)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                Your staff, getting more done with AI — every month.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.62)' }}>
                Most AI training gets watched once and forgotten. Ours is an ongoing program built around the real work your people do, so they actually use AI day-to-day — and you see it in their output before you see it in a report.
              </p>
              <div className="mt-8 space-y-3 max-w-md">
                {programIncludes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: CYAN }} />
                    <span className="text-sm leading-snug" style={{ color: 'rgba(213,224,255,0.8)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <MagneticButton variant="accent" as={Link} to="/contact">
                  BOOK A CALL <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton variant="ghost" as={Link} to="/training-and-enablement">HOW IT WORKS</MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={120} dir="left" distance={36}>
              <Parallax amount={44}>
                <LiveDemo />
              </Parallax>
            </Reveal>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== VALUE PROPS — "Not another workshop" ===== */}
        <section className="relative overflow-hidden" style={{ background: '#060a12' }}>
          <Aurora warm={false} />
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <Reveal>
              <SectionLabel>Not another workshop</SectionLabel>
              <h2 className="text-white font-bold max-w-3xl" style={{ fontSize: 'clamp(1.9rem,3.4vw,3rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
                They forget a course by Friday. They don&rsquo;t forget this.
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.6)' }}>
                Every month, your staff take a job they do by hand and teach AI to do it. Those jobs don&rsquo;t come back.
              </p>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-2 gap-5">
              {valueProps.map((v, i) => (
                <Reveal key={v.title} delay={i * 70}>
                  <SpotlightCard className="block h-full rounded-[18px] border border-white/10 bg-white/[0.03] p-7 overflow-hidden">
                    <h3 className="text-white font-bold text-lg mb-2.5">{v.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(213,224,255,0.6)' }}>{v.body}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== THE JOURNEY ===== */}
        <section className="relative overflow-hidden" style={{ background: '#05070D' }}>
          <Aurora warm={false} />
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24 grid lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-16">
            {/* Pinned intro — stays put while the month-cards scroll past it */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <SectionLabel>The program</SectionLabel>
                <h2 className="text-white font-bold" style={{ fontSize: 'clamp(1.9rem,3.4vw,3rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
                  From AI-curious to building their own AI agents — in three months.
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.6)' }}>
                  Your staff don&rsquo;t need to become engineers. Across three months and 24 hands-on modules, they go from using AI well, to automating their repetitive work, to deploying agents that run it for them — every step built on the real tasks they do for you.
                </p>
                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] flex items-center gap-3" style={{ color: 'rgba(111,155,255,0.55)' }}>
                  <span className="w-8 h-px" style={{ background: 'rgba(111,155,255,0.3)' }} />
                  Hands-on supervised builds — not passive videos.
                </p>
              </Reveal>
            </div>

            {/* Scrolling step stack */}
            <div className="space-y-5">
              {journey.map((m, i) => (
                <Reveal key={m.tag} delay={i * 40} dir="up" distance={28}>
                  <div className="relative rounded-[20px] border border-white/10 bg-white/[0.03] p-7 sm:p-8 flex gap-6 items-start">
                    <div className="font-mono text-5xl sm:text-6xl font-bold tracking-tight leading-none flex-shrink-0" style={{ color: 'rgba(111,155,255,0.18)' }}>{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] mb-2" style={{ color: WARM }}>{m.tag}</p>
                      <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{m.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(213,224,255,0.6)' }}>{m.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== TOOLS WE TEACH (logo marquee) ===== */}
        <section className="relative overflow-hidden border-y border-white/[0.06]" style={{ background: '#05070D' }}>
          <div className="relative z-10 py-12">
            <Reveal>
              <p className="text-center font-mono text-[10px] uppercase tracking-[0.22em] mb-8" style={{ color: 'rgba(111,155,255,0.55)' }}>
                Tool-agnostic by design — your team masters the tools that fit their role
              </p>
            </Reveal>
            <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' }}>
              <div className="flex w-max items-center gap-3" style={{ animation: 'adonMarquee 42s linear infinite' }}>
                {[...teachTools, ...teachTools].map((t, i) => (
                  <span key={i} className="flex-shrink-0 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] pl-2.5 pr-4 py-2">
                    <img src={t.src} alt="" aria-hidden="true" className="w-5 h-5 rounded-[5px]" loading="lazy" />
                    <span className="text-[13px] font-medium whitespace-nowrap text-white/70">{t.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== THE PLATFORM ===== */}
        <section className="relative overflow-hidden" style={{ background: '#04060C' }}>
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <Reveal>
              <SectionLabel>The platform</SectionLabel>
              <h2 className="text-white font-bold max-w-2xl" style={{ fontSize: 'clamp(1.9rem,3.4vw,3rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
                Built on our own learning app — not a folder of PDFs
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.6)' }}>
                Everything runs through the Academy Terminal, the custom app we built to keep your staff learning, applying, and improving.
              </p>
            </Reveal>

            {/* Real product screenshots — the actual Academy Terminal */}
            <div className="mt-12 grid lg:grid-cols-3 gap-6">
              {platformShots.map((s, i) => (
                <Reveal key={s.src} delay={i * 90} dir="up" distance={26}>
                  <div style={{ animation: `adonFloat${['A', 'B', 'C'][i]} ${10 + i}s ease-in-out infinite` }}>
                    <BrowserFrame src={s.src} alt={s.alt} label={s.label} />
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: 'rgba(111,155,255,0.6)' }}>{s.caption}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {platformFeatures.map((f) => (
                <Stagger.Item key={f.title} className="h-full">
                  <SpotlightCard className="block h-full rounded-[18px] border border-white/10 bg-white/[0.03] p-6 overflow-hidden">
                    <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(213,224,255,0.58)' }}>{f.body}</p>
                  </SpotlightCard>
                </Stagger.Item>
              ))}
            </Stagger>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== THE SCORECARD ===== */}
        <section className="relative overflow-hidden" style={{ background: '#05070D' }}>
          <Aurora />
          <BlueprintGrid />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(70% 90% at 50% 0%, rgba(111,155,255,0.14), transparent 70%)' }} />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <Reveal className="text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: CYAN }}>What they walk away with</p>
              <h2 className="text-white font-bold mx-auto max-w-3xl" style={{ fontSize: 'clamp(2rem,3.8vw,3.3rem)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                Every staff member finishes with <span style={{ color: CYAN }}>20+ working AI builds</span> — for their own job.
              </h2>
              <p className="mt-5 max-w-2xl mx-auto text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.62)' }}>
                This isn&rsquo;t theory they forget by Friday. At a minimum, each person you enrol walks away having personally built and deployed:
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-12 grid sm:grid-cols-2 gap-x-6 gap-y-px rounded-[20px] overflow-hidden border border-white/10 bg-white/[0.02]">
                {scorecard.map(([n, label]) => (
                  <div key={label} className="flex items-center gap-5 p-5 sm:p-6" style={{ background: '#05070D' }}>
                    <span className="font-mono font-bold tracking-tight flex-shrink-0 w-20 text-right" style={{ color: CYAN, fontSize: 'clamp(1.8rem,3vw,2.4rem)', lineHeight: 1 }}>{n}</span>
                    <span className="w-px self-stretch" style={{ background: 'rgba(111,155,255,0.15)' }} />
                    <span className="text-sm leading-snug" style={{ color: 'rgba(213,224,255,0.85)' }}>{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150} className="text-center">
              <p className="mt-8 text-sm max-w-2xl mx-auto" style={{ color: 'rgba(213,224,255,0.55)' }}>
                All tied to their real role — plus a documented record of the hours reclaimed and the work now handled automatically.
              </p>
              <div className="mt-8 flex justify-center">
                <MagneticButton variant="solid" as={Link} to="/contact">BOOK A CALL <ArrowRight className="w-4 h-4" /></MagneticButton>
              </div>
            </Reveal>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== STAT BAND ===== */}
        <section className="relative overflow-hidden border-y border-white/[0.06]" style={{ background: '#04060c' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(70% 120% at 50% 0%, rgba(111,155,255,0.12), transparent 70%)' }} />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-16 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
            {bandStats.map((s) => (
              <div key={s.label} className="text-center lg:text-left lg:px-6 lg:border-l first:border-l-0" style={{ borderColor: 'rgba(111,155,255,0.14)' }}>
                <div className="text-white font-bold tracking-tight" style={{ fontSize: 'clamp(2.4rem,4vw,3.4rem)', lineHeight: 1 }}>
                  {s.static ? s.static : <CountUp to={s.to!} suffix={s.suffix} />}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] mt-3" style={{ color: 'rgba(111,155,255,0.7)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY AD ON AI ===== */}
        <section className="relative overflow-hidden" style={{ background: '#04060C' }}>
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
            <Reveal>
              <SectionLabel>Why Ad On AI</SectionLabel>
              <h2 className="text-white font-bold" style={{ fontSize: 'clamp(2rem,3.6vw,3.2rem)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                Operators, not influencers.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.62)' }}>
                We&rsquo;re not an online guru selling a course. We built this inside a real, multi-country business — then trained 80+ of our own staff to use AI in their roles, with the numbers to back it.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid sm:grid-cols-2 gap-5">
                {whyPoints.map((w) => (
                  <SpotlightCard key={w.title} className="rounded-[18px] border border-white/10 bg-white/[0.03] p-6 overflow-hidden">
                    <h3 className="text-white font-bold text-base mb-2">{w.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(213,224,255,0.6)' }}>{w.body}</p>
                  </SpotlightCard>
                ))}
              </div>
            </Reveal>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== ONGOING SUPPORT (small) ===== */}
        <section className="relative overflow-hidden" style={{ background: '#04060C' }}>
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-20">
            <div className="rounded-[22px] border border-white/10 bg-white/[0.02] p-8 sm:p-10 grid lg:grid-cols-[1fr_1.4fr] gap-8 items-center">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: WARM }}>Ongoing support</p>
                <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-tight">The program ends. The support doesn&rsquo;t.</h2>
                <p className="mt-4 text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(213,224,255,0.6)' }}>
                  AI keeps moving, so we keep your team current after the three months — a monthly support hour, fresh webinars and an active community.
                </p>
                <Link to="/webinars-and-masterclasses" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: CYAN }}>
                  Explore ongoing support <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
              <Reveal delay={80}>
                <div className="grid sm:grid-cols-3 gap-4">
                  {ongoingSupport.map((it) => (
                    <div key={it.title} className="rounded-[14px] border border-white/10 bg-white/[0.03] p-5">
                      <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{it.title}</h3>
                      <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.55)' }}>{it.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="relative overflow-hidden" style={{ background: '#04060C' }}>
          <Aurora />
          <BlueprintGrid />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(111,155,255,0.20), transparent 70%)' }} />
          <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-10 py-28 text-center">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-6" style={{ color: ICY }}>Let&rsquo;s get started</p>
              <h2 className="text-white font-bold mx-auto" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.8rem)', lineHeight: 0.98, letterSpacing: '-0.02em' }}>
                Ready to get your team<br />doing more with AI?
              </h2>
              <p className="mt-6 max-w-lg mx-auto text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.62)' }}>
                Tell us about your business and we&rsquo;ll map the training that would make the biggest difference to your team — no pressure, no jargon.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <MagneticButton variant="solid" as={Link} to="/contact">BOOK A CALL <ArrowRight className="w-4 h-4" /></MagneticButton>
                <MagneticButton variant="ghost" as={Link} to="/training-and-enablement">EXPLORE THE PROGRAM</MagneticButton>
              </div>
            </Reveal>
          </div>
          <Vignette />
          <Grain opacity={0.1} />
        </section>
      </div>
    </>
  )
}
