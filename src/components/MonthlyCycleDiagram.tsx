import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * MonthlyCycleDiagram — Swiss Modernism 2.0 Sequential Grid
 *
 * A stepped card layout communicating the recurring monthly cycle.
 * Six stages in a 6-column grid (desktop) or 2-column grid (mobile).
 * Sequential numbering and a closing attribution line
 * communicate recurrence without requiring an orbital SVG diagram.
 */

const stages = [
  { number: '01', title: 'Live Call', time: '1 hr' },
  { number: '02', title: 'Modules', time: '3 hrs' },
  { number: '03', title: 'Knowledge Check', time: 'End of month' },
  { number: '04', title: 'Application', time: 'In workflow' },
  { number: '05', title: 'Report', time: 'To you' },
  { number: '06', title: 'Support', time: 'As needed' },
]

export default function MonthlyCycleDiagram() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding border-b border-stone-200">
      <div className="section-container">
        <div className={`mb-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">Monthly Cycle</p>
          <div className="w-10 h-0.5 bg-brand-700 mb-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-tight">
            How Each Month Works
          </h2>
        </div>

        {/* Progression indicator — desktop only */}
        <div className={`hidden lg:block mb-8 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="relative">
            <div className="absolute top-3 left-[8%] right-[8%] h-px bg-stone-300" />
            <div className="grid grid-cols-6 gap-0">
              {stages.map((stage, i) => (
                <div key={stage.number} className="flex justify-center">
                  <div className={`w-6 h-6 flex items-center justify-center relative z-10 ${
                    i === 0 ? 'bg-brand-700' : 'bg-stone-900'
                  }`}>
                    <span className="font-mono text-[9px] font-bold text-white">{stage.number}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step cards */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-stone-200 border border-stone-200 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          {stages.map((stage, i) => (
            <div
              key={stage.number}
              className={`bg-white p-5 lg:p-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
              style={{ transitionDelay: `${(i + 1) * 60}ms` }}
            >
              <div className={`border-t-2 ${i === 0 ? 'border-brand-700' : 'border-stone-900'} pt-4 mb-3`}>
                <span className="font-mono text-2xl font-bold text-stone-200 tracking-tight">{stage.number}</span>
              </div>
              <h3 className="text-xs font-bold text-stone-900 leading-snug mb-1">{stage.title}</h3>
              <span className="font-mono text-[8px] text-brand-700 uppercase tracking-[0.08em]">
                {stage.time}
              </span>
            </div>
          ))}
        </div>

        {/* Recurrence indicator */}
        <div className={`mt-6 flex items-center gap-3 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="h-px flex-1 bg-stone-200" />
          <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em]">
            01 → 06 → Repeats monthly
          </span>
          <div className="h-px flex-1 bg-stone-200" />
        </div>
      </div>
    </section>
  )
}
