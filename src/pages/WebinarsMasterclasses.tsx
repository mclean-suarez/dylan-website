import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Seo from '../components/Seo'
import {
  KEYS, CYAN, WARM,
  DarkPageHeader, Aurora, BlueprintGrid, Grain, MagneticButton, SpotlightCard,
} from '../components/hero/visuals'

// Ongoing Support — Webinars & Masterclasses. Part of the post-program support
// tier that keeps a team current after the 3-month program. Brief, real content.

const sessions = [
  { tag: 'Monthly', title: 'AI trends webinar', body: 'One hour each month on what’s actually changed — new models, product releases and the skills worth adopting, in plain English.' },
  { tag: 'Per tool', title: 'Tool masterclasses', body: 'Focused workshops on each major new tool worth your team’s time, built around real business use-cases — not demos.' },
  { tag: 'Anytime', title: 'Recorded & kept', body: 'Every session is recorded and stays in the academy for life, so your team can catch up or revisit whenever they need to.' },
]

const included = [
  'A live monthly session on the latest AI trends, releases and skills',
  'Deep-dive masterclasses on each major new tool',
  'A practical, business-application focus built for non-technical staff',
  'Recordings kept in the academy for life',
]

export default function WebinarsMasterclasses() {
  return (
    <>
      <Seo
        title="Webinars & Masterclasses | Ad On AI"
        description="Live webinars and in-depth masterclasses from Ad On AI keep your team current as AI moves — a monthly trends session plus workshops on each new tool, recorded and kept for life."
        path="/webinars-and-masterclasses"
      />
      <style>{KEYS}</style>

      <div className="bg-black">
        <DarkPageHeader
          label="Ongoing Support"
          title="Webinars & masterclasses"
          subtitle="The tools change every month. These sessions keep your team current — a monthly trends webinar plus focused masterclasses on each new tool, all in plain English and built around real work."
        />

        {/* ===== WHAT YOU GET ===== */}
        <section className="relative overflow-hidden" style={{ background: '#05070D' }}>
          <Aurora warm={false} />
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: CYAN }}>What you get</p>
                <div className="w-10 h-0.5 mb-6" style={{ background: CYAN }} />
                <h2 className="text-white font-bold" style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', lineHeight: 1.04, letterSpacing: '-0.02em' }}>
                  Stay sharp as AI keeps moving
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.62)' }}>
                  Part of ongoing support after the program, the webinars and masterclasses make sure the skills your team built only get more valuable as the tools evolve.
                </p>
                <div className="mt-8 space-y-3 max-w-md">
                  {included.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: CYAN }} />
                      <span className="text-sm leading-snug" style={{ color: 'rgba(213,224,255,0.8)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {sessions.map((s) => (
                  <SpotlightCard key={s.title} className="rounded-[18px] border border-white/10 bg-white/[0.03] p-6 overflow-hidden">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] mb-3" style={{ color: WARM }}>{s.tag}</p>
                    <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(213,224,255,0.58)' }}>{s.body}</p>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== CTA ===== */}
        <section className="relative overflow-hidden" style={{ background: '#04060C' }}>
          <Aurora />
          <BlueprintGrid />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(111,155,255,0.18), transparent 70%)' }} />
          <div className="relative z-10 max-w-[920px] mx-auto px-6 sm:px-10 py-24 text-center">
            <h2 className="text-white font-bold mx-auto" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
              Keep your team current.
            </h2>
            <p className="mt-5 max-w-lg mx-auto text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.62)' }}>
              Ongoing support is included for teams on the program. Book a call and we&rsquo;ll show you how it keeps your staff ahead as AI moves.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <MagneticButton variant="solid" as={Link} to="/contact">BOOK A CALL <ArrowRight className="w-4 h-4" /></MagneticButton>
              <MagneticButton variant="ghost" as={Link} to="/community">JOIN THE COMMUNITY</MagneticButton>
            </div>
          </div>
          <Grain opacity={0.1} />
        </section>
      </div>
    </>
  )
}
