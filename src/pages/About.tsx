import Seo from '../components/Seo'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { KEYS, CYAN, WARM, DarkPageHeader, Aurora, BlueprintGrid, Grain } from '../components/hero/visuals'
import beauRobardsImage from '../images/team/beau-robards.png'
import benRaglessImage from '../images/team/ben-ragless.jpg'
import dylanBaileyImage from '../images/team/dylan-bailey.png'
import leahBarnesImage from '../images/team/leah-barnes.jpg'
import tarynBoxerImage from '../images/team/taryn-boxer.jpg'
import tracyMaloneImage from '../images/team/tracy-malone.jpg'

const team = [
  { name: 'Dylan Bailey', role: 'Facilitator', image: dylanBaileyImage },
  { name: 'Beau Robards', role: 'Facilitator', image: beauRobardsImage },
  { name: 'Taryn Boxer', role: 'Operations Manager', image: tarynBoxerImage },
  { name: 'Ben Ragless', role: 'Business Development Representative', image: benRaglessImage },
  { name: 'Leah Barnes', role: 'Training Coordinator', image: leahBarnesImage },
  { name: 'Tracy Malone', role: 'Training Coordinator', image: tracyMaloneImage },
]

const milestones = [
  { year: '2008', label: 'Foundation' },
  { year: '2022', label: 'AI Deployed' },
  { year: '2026', label: 'Ad On AI' },
]

export default function About() {
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation()
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation()
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation()

  return (
    <>
      <Seo
        title="Meet the Team | Ad On AI"
        description="Meet the Ad On AI team behind the program, including the facilitators and operational staff delivering practical AI enablement inside real business workflows."
        path="/about"
      />
      <style>{KEYS}</style>

      <div className="bg-black">
        <DarkPageHeader
          label="About"
          title="The Team Behind the Program"
          subtitle="Ad On AI is a specialist division of Ad On Group, an Australian business services provider operating since 2008. We built the enablement program inside Ad On Group to train our own staff in AI before offering it externally — after seeing how well the internal version worked."
        />

        {/* Our Team */}
        <section ref={teamRef} className="relative overflow-hidden" style={{ background: '#05070D' }}>
          <Aurora warm={false} />
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <div className={`max-w-3xl mb-12 transition-all duration-500 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: CYAN }}>Our Team</p>
              <div className="w-10 h-0.5 mb-6" style={{ background: CYAN }} />
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-4">
                Operations People. <span style={{ color: 'rgba(111,155,255,0.7)' }}>Not Consultants.</span>
              </h2>
              <p className="text-sm leading-relaxed max-w-xl" style={{ color: 'rgba(213,224,255,0.6)' }}>
                The Ad On AI team comes from inside Ad On Group — people who built and ran AI workflows in live business operations before teaching others to do the same. Our two main facilitators hold multiple official Claude certifications between them, on top of years of deploying AI into their own work.
              </p>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-500 delay-100 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40"
                  style={{ transitionDelay: `${(i + 1) * 70}ms` }}
                >
                  <div className="flex justify-center mb-5">
                    <div className="w-32 h-32 rounded-full overflow-hidden" style={{ border: `4px solid ${CYAN}`, boxShadow: '0 8px 30px rgba(111,155,255,0.25)' }}>
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-base font-bold text-white leading-snug mb-1">{member.name}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: 'rgba(111,155,255,0.7)' }}>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* Our Why */}
        <section ref={whyRef} className="relative overflow-hidden" style={{ background: '#04060C' }}>
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <div className={`max-w-3xl mb-10 transition-all duration-500 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: CYAN }}>Our Why</p>
              <div className="w-10 h-0.5 mb-6" style={{ background: CYAN }} />
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                AI Works When People Know How to Use It
              </h2>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 transition-all duration-500 delay-100 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              {[
                { tag: 'The Problem', body: 'Most businesses know AI can help. Far fewer have a practical way to get their people using it properly in day-to-day work. The issue is not access to tools. It is training, support, and follow-through.', accent: WARM },
                { tag: 'Our Response', body: "We help your people use AI properly in their real work, not just learn about it. They build practical AI skills, apply them in the job they already do, and get support when they hit a roadblock. You'll see the difference in their productivity before you even read our report.", accent: CYAN },
              ].map((card) => (
                <div key={card.tag} className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6 sm:p-8" style={{ borderLeft: `2px solid ${card.accent}` }}>
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] mb-5" style={{ color: 'rgba(111,155,255,0.7)' }}>{card.tag}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(213,224,255,0.8)' }}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* Our Story */}
        <section ref={storyRef} className="relative overflow-hidden" style={{ background: '#05070D' }}>
          <Aurora warm={false} />
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <div className={`max-w-3xl mb-12 transition-all duration-500 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: CYAN }}>Our Story</p>
              <div className="w-10 h-0.5 mb-6" style={{ background: CYAN }} />
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Built From Operational Experience. <span style={{ color: 'rgba(111,155,255,0.6)' }}>Not By an Online &ldquo;Guru&rdquo;.</span>
              </h2>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 transition-all duration-500 delay-100 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              {milestones.map((milestone, i) => (
                <div
                  key={milestone.year}
                  className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 min-h-[200px] flex flex-col justify-between"
                  style={{ transitionDelay: `${(i + 2) * 80}ms` }}
                >
                  <div className="pt-5" style={{ borderTop: `2px solid ${i === 0 ? WARM : 'rgba(111,155,255,0.4)'}` }}>
                    <span className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">{milestone.year}</span>
                  </div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.18em] pt-10" style={{ color: 'rgba(111,155,255,0.7)' }}>
                    {milestone.label}
                  </h3>
                </div>
              ))}
            </div>

            {/* Operational image panel */}
            <div className={`mt-10 transition-all duration-500 delay-300 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <div className="relative overflow-hidden rounded-[18px] border border-white/10">
                <img
                  src="/images/offices/ops2.jpg"
                  alt="Ad On Group delivery office — Cagayan De Oro, Philippines"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#04060C] via-[#04060C]/40 to-transparent p-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: 'rgba(213,224,255,0.7)' }}>
                    Delivery Office — Philippines
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Grain opacity={0.1} />
        </section>
      </div>
    </>
  )
}
