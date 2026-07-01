import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Seo from '../components/Seo'
import {
  KEYS, CYAN, WARM,
  DarkPageHeader, Aurora, BlueprintGrid, Grain, MagneticButton, SpotlightCard,
} from '../components/hero/visuals'

// Ongoing Support — Community. The membership side of the post-program support
// tier: podcasts, newsletter, a monthly support hour and a peer network.

const pillars = [
  { tag: 'Weekly', title: 'Business-application podcasts', body: 'Short, practical episodes on how real businesses are putting AI to work — the use-cases, not the hype.' },
  { tag: 'Monthly', title: 'The newsletter', body: 'A monthly round-up of what changed and what’s worth your team’s attention, distilled into plain English.' },
  { tag: 'Monthly', title: 'A support hour', body: 'Direct time with our AI specialists each month for queries and the trickier workflows your team takes on.' },
  { tag: 'Always on', title: 'A peer network', body: 'A community of other Australian SME teams learning and applying AI — compare notes and swap what works.' },
]

const included = [
  'Weekly business-application podcasts',
  'A monthly newsletter on what’s new and worth using',
  'A monthly support hour with our AI specialists',
  'A network of other Australian SME teams using AI',
]

export default function Community() {
  return (
    <>
      <Seo
        title="Join our Community | Ad On AI"
        description="The Ad On AI community keeps your team current after the program — weekly business-application podcasts, a monthly newsletter, a monthly support hour and a network of Australian SME teams using AI."
        path="/community"
      />
      <style>{KEYS}</style>

      <div className="bg-black">
        <DarkPageHeader
          label="Ongoing Support"
          title="Join our community"
          subtitle="Part of ongoing support after the program — a steady drip of what’s new and useful, direct help when your team needs it, and a network of other Australian SME teams putting AI to work."
        />

        {/* ===== WHAT'S INSIDE ===== */}
        <section className="relative overflow-hidden" style={{ background: '#05070D' }}>
          <Aurora warm={false} />
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: CYAN }}>What&rsquo;s inside</p>
                <div className="w-10 h-0.5 mb-6" style={{ background: CYAN }} />
                <h2 className="text-white font-bold" style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', lineHeight: 1.04, letterSpacing: '-0.02em' }}>
                  Help and momentum, every week
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.62)' }}>
                  The program gets your team fluent; the community keeps them there. It&rsquo;s where the learning stays current and the wins keep coming after the three months are done.
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
                {pillars.map((p) => (
                  <SpotlightCard key={p.title} className="rounded-[18px] border border-white/10 bg-white/[0.03] p-6 overflow-hidden">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] mb-3" style={{ color: WARM }}>{p.tag}</p>
                    <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(213,224,255,0.58)' }}>{p.body}</p>
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
              Stay in the loop.
            </h2>
            <p className="mt-5 max-w-lg mx-auto text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.62)' }}>
              Community membership is included for teams on the program. Book a call and we&rsquo;ll walk you through how it keeps your staff sharp.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <MagneticButton variant="solid" as={Link} to="/contact">BOOK A CALL <ArrowRight className="w-4 h-4" /></MagneticButton>
              <MagneticButton variant="ghost" as={Link} to="/webinars-and-masterclasses">SEE THE WEBINARS</MagneticButton>
            </div>
          </div>
          <Grain opacity={0.1} />
        </section>
      </div>
    </>
  )
}
