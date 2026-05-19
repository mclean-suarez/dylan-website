import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import adOnAiLogo from '../images/adonailogo.webp'
import watermarkImage from '../images/watermark.webp'
import beauRobardsImage from '../images/team/beau-robards.png'
import benRaglessImage from '../images/team/ben-ragless.jpg'
import dylanBaileyImage from '../images/team/dylan-bailey.png'
import leahBarnesImage from '../images/team/leah-barnes.jpg'
import tarynBoxerImage from '../images/team/taryn-boxer.jpg'
import tracyMaloneImage from '../images/team/tracy-malone.jpg'

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
      <PageHeader
        label="About"
        title="The Team Behind the Program"
        subtitle="Ad On AI is a specialist division of Ad On Group, an Australian business services provider operating since 2008. We built the enablement program inside Ad On Group to train and enable our internal staff in AI before offering it externally as a result of the success the internal version of the program saw."
      />

      {/* Our Team */}
      <section ref={teamRef} className="section-padding border-b border-stone-200 bg-[#0A0C1A] relative overflow-hidden">
        <div className="absolute inset-0 items-center justify-end pointer-events-none hidden md:flex">
            <img
              src={adOnAiLogo}
              alt="Hero"
              className="
                w-[400px] h-auto opacity-100
                md:w-[400px] md:opacity-100
                lg:w-[400px] lg:opacity-100
                xl:w-[400px]
                translate-x-8 md:translate-x-0
                lg:-translate-x-[13rem]
                translate-y-[7rem]
                select-none
              "
            />
        </div>
        <div className="section-container">
          <div className={`max-w-3xl mb-12 transition-all duration-500 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
              Our Team
            </p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-900 tracking-tight leading-tight mb-4">
              Operations People.{' '}
              <span className="text-white">Not Consultants.</span>
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed max-w-xl">
              The Ad On AI team comes from inside Ad On Group. People who
              built and ran AI workflows in live business operations before
              teaching others to do the same. Our two main facilitators hold
              multiple official Claude certifications between them, in
              addition to their own multi-year experiences deploying AI into
              their own work.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-500 delay-100 ${
              teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            {/* Dylan Bailey */}
            <div
              className={`bg-white p-6 sm:p-8 relative border border-white/10 rounded-[20px] shadow-[0_8px_8px_0_rgba(66,99,235,0.5)] transition-transform duration-300 hover:scale-105 `}
              style={{ transitionDelay: '160ms' }}
            >
              <div className="border-t-2 border-stone-900 pt-5 mb-5 hover:border-brand-500 transition-colors duration-300">
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full border-[8px] border-[#2EA3F2] bg-white overflow-hidden shadow-[0_6px_18px_rgba(46,163,242,0.2)]">
                    <img
                      src={dylanBaileyImage}
                      alt="Dylan Bailey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-base font-bold text-stone-900 leading-snug mb-1">Dylan Bailey</h3>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em]">Facilitator</p>
              </div>
            </div>

            {/* Beau Robards */}
            <div
              className={`bg-white p-6 sm:p-8 relative border border-white/10 rounded-[20px] shadow-[0_8px_8px_0_rgba(66,99,235,0.5)] transition-transform duration-300 hover:scale-105`}
              style={{ transitionDelay: '240ms' }}
            >
              <div className="border-t-2 border-stone-900 pt-5 mb-5 hover:border-brand-500 transition-colors duration-300">
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full border-[8px] border-[#2EA3F2] bg-white overflow-hidden shadow-[0_6px_18px_rgba(46,163,242,0.2)]">
                    <img
                      src={beauRobardsImage}
                      alt="Beau Robards"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-base font-bold text-stone-900 leading-snug mb-1">Beau Robards</h3>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em]">Facilitator</p>
              </div>
            </div>

            {/* Taryn Boxer */}
            <div
              className={`bg-white p-6 sm:p-8 relative border border-white/10 rounded-[20px] shadow-[0_8px_8px_0_rgba(66,99,235,0.5)] transition-transform duration-300 hover:scale-105`}
              style={{ transitionDelay: '320ms' }}
            >
              <div className="border-t-2 border-stone-900 pt-5 mb-5 hover:border-brand-500 transition-colors duration-300">
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full border-[8px] border-[#2EA3F2] bg-white overflow-hidden shadow-[0_6px_18px_rgba(46,163,242,0.2)]">
                    <img
                      src={tarynBoxerImage}
                      alt="Taryn Boxer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-base font-bold text-stone-900 leading-snug mb-1">Taryn Boxer</h3>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em]">Operations Manager</p>
              </div>
            </div>

            {/* Ben Ragless */}
            <div
              className={`bg-white p-6 sm:p-8 relative border border-white/10 rounded-[20px] shadow-[0_8px_8px_0_rgba(66,99,235,0.5)] transition-transform duration-300 hover:scale-105`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="border-t-2 border-stone-900 pt-5 mb-5 hover:border-brand-500 transition-colors duration-300">
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full border-[8px] border-[#2EA3F2] bg-white overflow-hidden shadow-[0_6px_18px_rgba(46,163,242,0.2)]">
                    <img
                      src={benRaglessImage}
                      alt="Ben Ragless"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-base font-bold text-stone-900 leading-snug mb-1">Ben Ragless</h3>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em]">Business Development Representative</p>
              </div>
            </div>

            {/* Leah Barnes */}
            <div
              className={`bg-white p-6 sm:p-8 relative border border-white/10 rounded-[20px] shadow-[0_8px_8px_0_rgba(66,99,235,0.5)] transition-transform duration-300 hover:scale-105`}
              style={{ transitionDelay: '480ms' }}
            >
              <div className="border-t-2 border-stone-900 pt-5 mb-5 hover:border-brand-500 transition-colors duration-300">
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full border-[8px] border-[#2EA3F2] bg-white overflow-hidden shadow-[0_6px_18px_rgba(46,163,242,0.2)]">
                    <img
                      src={leahBarnesImage}
                      alt="Leah Barnes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-base font-bold text-stone-900 leading-snug mb-1">Leah Barnes</h3>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em]">Training Coordinator</p>
              </div>
            </div>

            {/* Tracy Malone */}
            <div
              className={`bg-white p-6 sm:p-8 relative border border-white/10 rounded-[20px] shadow-[0_8px_8px_0_rgba(66,99,235,0.5)] transition-transform duration-300 hover:scale-105`}
              style={{ transitionDelay: '560ms' }}
            >
              <div className="border-t-2 border-stone-900 pt-5 mb-5 hover:border-brand-500 transition-colors duration-300">
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full border-[8px] border-[#2EA3F2] bg-white overflow-hidden shadow-[0_6px_18px_rgba(46,163,242,0.2)]">
                    <img
                      src={tracyMaloneImage}
                      alt="Tracy Malone"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-base font-bold text-stone-900 leading-snug mb-1">Tracy Malone</h3>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em]">Training Coordinator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Why */}
      <section ref={whyRef} className="section-padding border-b border-stone-200 bg-white">
        <div className="section-container">
          <div className={`max-w-3xl transition-all duration-500 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
              Our Why
            </p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight mb-6">
              AI Works When People Know How to Use It
            </h2>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 transition-all duration-500 delay-100 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className="bg-[#0A0C1A] rounded-[20px] shadow-[0_8px_8px_0_rgba(66,99,235,0.5)] p-6 sm:p-8 transition-transform duration-300 hover:scale-105">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 mb-5">
                The Problem
              </h3>
              <p className="text-sm text-white leading-relaxed">
                Most businesses know AI can help. Far fewer have a practical
                way to get their people using it properly in day-to-day work.
                The issue is not access to tools. It is training, support,
                and follow-through.
              </p>
            </div>
            <div className="bg-[#0A0C1A] rounded-[20px] shadow-[0_8px_8px_0_rgba(66,99,235,0.5)] p-6 sm:p-8 transition-transform duration-300 hover:scale-105">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 mb-5">
                Our Response
              </h3>
              <p className="text-sm text-white leading-relaxed">
                We help your people use AI properly in their real work, not
                just learn about it. They build practical AI skills, apply
                them in the job they already do, and get support when they hit
                a roadblock. You'll see the difference in their productivity
                before you even read our report.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="section-padding bg-stone-100/50 relative">
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
            <img
              src={watermarkImage}
              alt="Hero"
              className="
                w-[100%] h-auto opacity-100
                md:w-[100%] md:opacity-100
                lg:w-[100% lg:opacity-100
                xl:w-[100%]
                translate-x-8 md:translate-x-0
                lg:-translate-x-[10rem]
                translate-y-[9rem]
                select-none
              "
            />
        </div>
        <div className="section-container">
          <div className={`max-w-3xl mb-12 transition-all duration-500 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
              Our Story
            </p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
              Built From Operational Experience.{' '}
              <span className="text-stone-400">Not By an Online "Guru".</span>
            </h2>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 transition-all duration-500 delay-100 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            {[
              {
                year: '2008',
                label: 'Foundation',
              },
              {
                year: '2022',
                label: 'AI Deployed',
              },
              {
                year: '2026',
                label: 'Ad On AI',
              },
            ].map((milestone, i) => (
              <div
                key={milestone.year}
                className={`bg-white rounded-[20px] shadow-[0_8px_8px_0_rgba(66,99,235,0.5)] p-6 sm:p-8 min-h-[220px] flex flex-col justify-between transition-transform duration-300 hover:scale-105 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${(i + 2) * 80}ms` }}
              >
                <div className={`border-t-2 ${i === 0 ? 'border-brand-700' : 'border-stone-900'} pt-5`}>
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">{milestone.year}</span>
                </div>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-stone-400 pt-10">
                  {milestone.label}
                </h3>
              </div>
            ))}
          </div>

          {/* Operational image panel */}
          <div className={`mt-10 overflow-hidden transition-all duration-500 delay-300 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className="relative overflow-auto border-[3px] border-[#4263EB] rounded-[15px]">
              <img
                src="/images/offices/ops2.jpg"
                alt="Ad On Group delivery office — Cagayan De Oro, Philippines"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-[10px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 to-transparent p-6 ">
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-[0.15em]">
                  Delivery Office — Philippines
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
