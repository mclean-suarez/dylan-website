import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const metrics = [
  { stat: 'Over $300,000', label: 'Annualised savings from AI workflow automation and software rationalisation' },
  { stat: 'Up to 8x', label: 'Output increases observed across enabled teams' },
  { stat: '3 Years', label: 'Applied AI inside Ad On Group operations' },
  { stat: 'Anti-Hype', label: 'We focus on reliable, simple systems that work every day' },
]

const principles = [
  {
    title: 'Accountability Is the Differentiator',
    description: 'Most AI training ends at the session. Ours includes monthly knowledge checks, demonstrated workflow application, and progress reports. Learning is verified, applied, and reported.',
  },
  {
    title: 'We Focus on Bottom-Line Outcomes',
    description: 'Every engagement is measured by its commercial impact: productivity gained, time saved, costs reduced. Not features shipped or demos delivered.',
  },
  {
    title: 'We Don\u2019t Overpromise AI',
    description: 'We\u2019re anti-hype and reality-based. AI is a tool, not magic. We use it where it works and we\u2019re honest about where it doesn\u2019t.',
  },
  {
    title: 'Simple, Reliable Systems',
    description: 'We design implementations that are reliable, simple, and fit how businesses actually operate. Not impressive demos that break in production.',
  },
  {
    title: 'Real Operational Experience',
    description: 'Our methods come from building and running AI solutions inside a live operational environment. Not from theory, labs, or conference talks.',
  },
  {
    title: 'Part of the Ad On Ecosystem',
    description: 'We understand business operations from the inside because we\u2019re part of the same business group that delivers them through Ad On Workforce.',
  },
]

const inPractice = [
  'Reporting workflows compressed from multiple days to under one hour through templated, AI-assisted processes',
  'Content production scaled output significantly while maintaining quality controls through human-in-the-loop workflows',
  'CRM rebuilt on a lower-cost platform without losing operational capability, reducing software costs and improving adoption',
  'Admin and data processing tasks automated to reduce manual handling, freeing staff for higher-value work',
]

export default function Proof() {
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation()
  const { ref: practiceRef, isVisible: practiceVisible } = useScrollAnimation()
  const { ref: principlesRef, isVisible: principlesVisible } = useScrollAnimation()
  const { ref: casesRef, isVisible: casesVisible } = useScrollAnimation()

  return (
    <>
      <PageHeader
        label="Proof & Credibility"
        title="Built on Real Operational Experience"
        subtitle="Three years of AI implementation inside a live business environment. Measurable results. No hype."
      />

      {/* Metrics */}
      <section ref={metricsRef} className="section-padding border-b border-stone-200">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`border-t-2 border-stone-900 pt-4 pb-6 ${
                  i < metrics.length - 1 ? 'pr-6 lg:pr-8' : ''
                } transition-all duration-500 ${metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-stone-900 mb-2">{metric.stat}</div>
                <p className="text-xs text-stone-500 leading-snug">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In practice */}
      <section ref={practiceRef} className="section-padding border-b border-stone-200 bg-stone-100/50">
        <div className="section-container">
          <div className={`max-w-3xl transition-all duration-500 ${practiceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">In Practice</p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
              What This Looked Like Inside Ad On Group
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed mb-8 max-w-xl">
              Ad On AI grew out of three years building and deploying AI workflows inside
              Ad On Group. Not experiments. Reliable, simple systems adopted by real teams:
              content, SEO, admin, and client operations. The savings come from time
              recovered and software costs eliminated.
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-px bg-stone-200 border border-stone-200 transition-all duration-500 delay-200 ${practiceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className="bg-white p-6 sm:p-8">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 mb-5">
                Real examples from operations
              </h3>
              <div className="space-y-4">
                {inPractice.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-700 rounded-full flex-shrink-0 mt-[7px]" />
                    <p className="text-sm text-stone-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white hidden lg:block">
              <img
                src="/images/offices/ops1.jpg"
                alt="Ad On Group team at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section ref={principlesRef} className="section-padding border-b border-stone-200">
        <div className="section-container">
          <div className={`max-w-3xl mb-12 transition-all duration-500 ${principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">Our Approach</p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight">
              What Makes Ad On AI Different
            </h2>
          </div>

          <div>
            {principles.map((principle, i) => (
              <div
                key={principle.title}
                className={`grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-8 py-7 transition-all duration-500 ${
                  i < principles.length - 1 ? 'border-b border-stone-200' : ''
                } ${principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <h3 className="text-base font-semibold text-stone-900">{principle.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies placeholder */}
      <section ref={casesRef} className="section-padding">
        <div className="section-container">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-500 ${casesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">Coming Soon</p>
            <div className="w-10 h-0.5 bg-brand-700 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
              Client Case Studies
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed mb-8 max-w-xl mx-auto">
              We&apos;re currently documenting detailed case studies from our first
              wave of enrolled clients. In the meantime, book a call and we&apos;ll
              walk you through real examples and results.
            </p>
            <Link to="/contact" className="btn-primary text-sm">
              Book a Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
