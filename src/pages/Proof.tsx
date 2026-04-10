import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const metrics = [
  { stat: '4 Years', label: 'Building and using AI inside a real business' },
  { stat: '50+ Staff', label: 'Trained on AI inside Ad On Group before offering it externally' },
  { stat: 'Real Business', label: 'Built inside Ad On Group operations, not by some online \u2018guru\u2019' },
  { stat: 'Over $300,000', label: 'Annualised savings from AI workflow automation, time saved, and software unsubscribed from' },
]

const principles = [
  {
    title: 'Your Person Actually Uses AI After the Training',
    description: 'Most AI training gets forgotten. Ours includes monthly skills checks and hands-on support so your person keeps applying what they learned \u2014 not just during the program, but after.',
  },
  {
    title: 'You See What Changed Every Month',
    description: 'You get a monthly progress report showing what your person learned, what they applied, and how their output is improving. No guesswork.',
  },
  {
    title: 'Matched to Their Actual Role',
    description: 'We don\u2019t teach generic AI. Your person learns to use AI on the tasks they already do every day \u2014 whether that\u2019s marketing, accounts, or admin.',
  },
  {
    title: 'We Trained Our Own People First',
    description: 'This program was built inside Ad On Group over four years. We used it on our own staff across marketing, accounts, and admin before offering it to anyone else.',
  },
  {
    title: 'Hands-On Help, Not Just Content',
    description: 'When your person gets stuck trying to use AI in their work, we step in and help them. This isn\u2019t a course you watch \u2014 it\u2019s a program with real support.',
  },
  {
    title: 'Your People Get More Done in the Same Hours',
    description: 'AI speeds up the work your person is already doing. The same tasks, done faster and to a higher standard \u2014 so every hour you\u2019re paying for goes further.',
  },
]

const inPractice = [
  'Reporting that used to take days was done in under an hour',
  'Marketing output increased significantly without adding headcount',
  'Accounts processing and follow-up became faster and more consistent',
  'Admin staff started handling more work in fewer hours',
]

export default function Proof() {
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation()
  const { ref: practiceRef, isVisible: practiceVisible } = useScrollAnimation()
  const { ref: principlesRef, isVisible: principlesVisible } = useScrollAnimation()


  return (
    <>
      <PageHeader
        label="Proof & Credibility"
        title="Built on Real Operational Experience"
        subtitle="Four years of AI implementation inside a live business environment. We trained our own people first. Now we train yours."
      />

      {/* Metrics */}
      <section ref={metricsRef} className="bg-navy-950 section-padding">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`border-t-2 border-white/20 pt-4 pb-6 ${
                  i < metrics.length - 1 ? 'pr-6 lg:pr-8' : ''
                } transition-all duration-500 ${metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-white mb-2">{metric.stat}</div>
                <p className="text-xs text-white/50 leading-snug">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In practice */}
      <section ref={practiceRef} className="section-padding bg-stone-100/50">
        <div className="section-container">
          <div className={`max-w-3xl transition-all duration-500 ${practiceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">In Practice</p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
              What This Looked Like Inside Ad On Group
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed mb-8 max-w-xl">
              We didn't start by selling AI training. We started by training our own
              staff. Over four years, we built and tested the program inside Ad On Group
              — across marketing, accounts, and admin teams. Here's what changed.
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
      <section ref={principlesRef} className="bg-navy-950 section-padding">
        <div className="section-container">
          <div className={`max-w-3xl mb-12 transition-all duration-500 ${principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-400 uppercase tracking-[0.15em] mb-4">Our Approach</p>
            <div className="w-10 h-0.5 bg-brand-400 mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              What Makes Ad On AI Different
            </h2>
          </div>

          <div>
            {principles.map((principle, i) => (
              <div
                key={principle.title}
                className={`grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-8 py-7 transition-all duration-500 ${
                  i < principles.length - 1 ? 'border-b border-white/10' : ''
                } ${principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <h3 className="text-base font-semibold text-white">{principle.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
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
