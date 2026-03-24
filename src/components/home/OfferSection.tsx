import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const pillars = [
  {
    number: '01',
    title: 'AI Training Matched to Their Role',
    subtitle: 'Your person learns AI skills & tools specific to what they actually do every day',
  },
  {
    number: '02',
    title: 'Monthly Modules with Monitored Outcomes',
    subtitle: 'Live call, customised modules, skills check, implementation to their daily work, progress report sent to you',
  },
  {
    number: '03',
    title: 'Supporting Your Person Implementing AI',
    subtitle: 'We help your staff implement AI into their daily tasks',
  },
]

export default function OfferSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding">
      <div className="section-container">
        <div className={`max-w-3xl mb-12 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">The Program</p>
          <div className="w-10 h-0.5 bg-brand-700 mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
            What Is Ad On AI
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed max-w-xl font-medium">
            We teach your people how to use AI to boost their productivity. They learn it, apply it in their actual work, and you get a monthly report showing what changed.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`bg-white p-6 md:p-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className={`border-t-2 ${i === 0 ? 'border-brand-700' : 'border-stone-900'} pt-5 mb-4`}>
                <span className="font-mono text-2xl font-bold text-stone-900 tracking-tight">{pillar.number}</span>
              </div>
              <h3 className="text-sm font-bold text-stone-900 leading-snug mb-1.5">{pillar.title}</h3>
              <p className="text-xs text-stone-400">{pillar.subtitle}</p>
            </div>
          ))}
        </div>

        <div className={`mt-8 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <Link to="/program" className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800 transition-colors group">
            See full program details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
