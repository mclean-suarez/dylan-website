import PageHeader from '../components/PageHeader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation()
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation()
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation()

  return (
    <>
      <PageHeader
        label="About"
        title="The Company Behind the Program"
        subtitle="Ad On AI is a specialist division of Ad On Group, an Australian business ecosystem operating since 2008. We built the enablement program inside live operations before offering it externally."
      />

      {/* Our Why */}
      <section ref={whyRef} className="section-padding border-b border-stone-200">
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

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200 max-w-4xl transition-all duration-500 delay-100 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className="bg-white p-6 sm:p-8">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 mb-5">
                The Problem
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Most businesses know AI matters. Few have a practical way to
                make it work inside their teams. The gap is not access to
                tools. It is structured enablement, accountability, and
                follow-through.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 mb-5">
                Our Response
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                We built a managed enablement program that teaches people to
                use AI in their actual work, checks that they understood it,
                and reports progress back to the business. Practical.
                Measurable. Ongoing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="section-padding border-b border-stone-200 bg-stone-100/50">
        <div className="section-container">
          <div className={`max-w-3xl mb-12 transition-all duration-500 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
              Our Story
            </p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
              Built Inside a Business.{' '}
              <span className="text-stone-400">Not a Lab.</span>
            </h2>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200 mb-10 transition-all duration-500 delay-100 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            {[
              {
                year: '2008',
                label: 'Foundation',
                text: 'Ad On Group established on the Gold Coast. Workforce, operations, and client services across Australia, Philippines, and South Africa.',
              },
              {
                year: '2022',
                label: 'AI Deployed',
                text: 'AI workflows introduced across Ad On Group operations. Content, SEO, admin, and client services. Real teams, real adoption, real results.',
              },
              {
                year: '2025',
                label: 'Ad On AI',
                text: 'The enablement program that emerged from three years of internal deployment is offered externally. Structured, accountable, and built to scale.',
              },
            ].map((milestone, i) => (
              <div
                key={milestone.year}
                className={`bg-white p-6 sm:p-8 transition-all duration-500 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${(i + 2) * 80}ms` }}
              >
                <div className={`border-t-2 ${i === 0 ? 'border-brand-700' : 'border-stone-900'} pt-5 mb-4`}>
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">{milestone.year}</span>
                </div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 mb-3">
                  {milestone.label}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {milestone.text}
                </p>
              </div>
            ))}
          </div>

          {/* Operational image panel */}
          <div className={`mt-10 border border-stone-200 overflow-hidden transition-all duration-500 delay-300 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className="relative">
              <img
                src="/images/offices/ops2.jpg"
                alt="Ad On Group delivery office — Cagayan De Oro, Philippines"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 to-transparent p-6">
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-[0.15em]">
                  Delivery Office — Cagayan De Oro, Philippines
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Team */}
      <section ref={teamRef} className="section-padding">
        <div className="section-container">
          <div className={`max-w-3xl mb-12 transition-all duration-500 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
              Our Team
            </p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
              Operations People.{' '}
              <span className="text-stone-400">Not Consultants.</span>
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed max-w-xl">
              The Ad On AI team comes from inside Ad On Group. People who
              built and ran AI workflows in live business operations before
              teaching others to do the same.
            </p>
          </div>

          <div className={`border border-stone-200 p-6 sm:p-8 max-w-2xl transition-all duration-500 delay-100 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className="flex items-center gap-4 mb-5">
              <span className="w-1.5 h-1.5 bg-brand-700 rounded-full" />
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em]">
                Team profiles coming soon
              </span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Detailed team profiles are being prepared and will be published
              here when available. In the meantime, the best way to learn about
              the people behind the program is to book a strategy call.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
