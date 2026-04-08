import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const workflowColumns = [
  {
    title: 'Marketing',
    items: [
      'Producing more content without adding hours',
      'Faster campaign setup and execution',
      'Creating high quality design assets at speed',
    ],
  },
  {
    title: 'Finance',
    items: [
      'Faster accounts payable and receivable processing',
      'Automated debtor follow-up and payment chasing',
      'Reconciling accounts and catching errors faster',
    ],
  },
  {
    title: 'General Admin',
    items: [
      'Processing and responding to client emails faster',
      'Automating repetitive data entry and record-keeping',
      'Automating scheduling and diary coordination',
    ],
  },
]

export default function BestFitWorkflows() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="bg-navy-950 section-padding">
      <div className="section-container">
        <div className={`mb-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <p className="font-mono text-xs text-brand-400 uppercase tracking-[0.15em] mb-4">Where AI Makes a Difference</p>
          <div className="w-10 h-0.5 bg-brand-400 mb-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
            The Daily Tasks Where AI Has the Most Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {workflowColumns.map((col, i) => (
            <div
              key={col.title}
              className={`group bg-navy-950 p-6 transition-all duration-500 border border-white/10 rounded-[20px] transform hover:scale-105 hover:border-brand-700
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              {/* Top border line reacts to box hover using group-hover */}
              <div className="border-t-2 pt-4 mb-5 border-white/20 group-hover:border-brand-700">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
                  {col.title}
                </h3>
              </div>

              <div className="space-y-3">
                {col.items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-brand-700 flex-shrink-0 mt-1.5" />
                    <span className="text-sm text-white/60 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors group"
          >
            Book a Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
