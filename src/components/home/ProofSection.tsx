import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const proofCards = [
  { stat: 'Over $300,000', label: 'Annualised savings from AI workflow automation and software rationalisation' },
  { stat: 'Up to 8x', label: 'Output increases observed across enabled teams' },
  { stat: '3 Years', label: 'Applied AI inside Ad On Group operations' },
  { stat: 'Real Ops', label: 'Built inside live business operations. Real process, real scale.' },
]

export default function ProofSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding border-t border-stone-200">
      <div className="section-container">
        <div className={`max-w-3xl mb-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
            Proof & Credibility
          </p>
          <div className="w-10 h-0.5 bg-brand-700 mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight">
            Built Inside Real Operations.{' '}
            <span className="text-stone-400">Designed to Work Every Day.</span>
          </h2>
        </div>

        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 mb-8 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          {proofCards.map((point, i) => (
            <div
              key={point.label}
              className={`bg-stone-50 p-5 sm:p-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
              style={{ transitionDelay: `${(i + 2) * 80}ms` }}
            >
              <div className={`border-t-2 ${i === 0 ? 'border-brand-700' : 'border-stone-900'} pt-5`}>
                <div className="font-mono text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-3">{point.stat}</div>
                <p className="text-[11px] text-stone-500 leading-snug">{point.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <Link
            to="/proof"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800 transition-colors group"
          >
            See detailed proof and approach
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
