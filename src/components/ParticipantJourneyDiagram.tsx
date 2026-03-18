import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * ParticipantJourneyDiagram — Swiss Modernism 2.0 Dual-Track Diagram
 *
 * Two parallel tracks:
 * 1. Primary track: staged progression (Fit & Setup → General Program → Readiness Check → Role-Specific Training)
 * 2. Secondary track: spanning band showing that application and measurement
 *    run continuously from the General Program onwards.
 *
 * This communicates that capability is built in stages while real-work
 * application begins early and compounds throughout.
 */

const stages = [
  { number: '01', label: 'Fit & Setup' },
  { number: '02', label: 'General Program' },
  { number: '03', label: 'Readiness Check' },
  { number: '04', label: 'Role-Specific Training' },
  { number: '05', label: 'Ongoing Enablement' },
]

export default function ParticipantJourneyDiagram() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding border-b border-stone-200 bg-stone-100/50">
      <div className="section-container">
        {/* Section header */}
        <div
          className={`max-w-3xl mb-10 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
            How the Program Works
          </p>
          <div className="w-10 h-0.5 bg-brand-700 mb-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-tight">
            How the Process of Making Your Person More Productive Works
          </h2>
        </div>

        {/* Desktop: dual-track diagram */}
        <div
          className={`hidden lg:block transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {/* Track label */}
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em]">
              Program Progression
            </span>
            <div className="h-px flex-1 bg-stone-200" />
          </div>

          {/* Primary track: staged progression nodes */}
          <div className="relative mb-2">
            {/* Connector line */}
            <div className="absolute top-6 left-[10%] right-[10%] h-px bg-stone-300" />

            {/* Directional arrows */}
            <div className="absolute top-[18px] left-[28%] w-3 h-3 border-t border-r border-stone-400 rotate-45" />
            <div className="absolute top-[18px] left-[48%] w-3 h-3 border-t border-r border-stone-400 rotate-45" />
            <div className="absolute top-[18px] left-[68%] w-3 h-3 border-t border-r border-stone-400 rotate-45" />

            <div className="grid grid-cols-5 gap-0">
              {stages.map((stage, i) => (
                <div
                  key={stage.number}
                  className={`relative text-center transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 80}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 flex items-center justify-center relative z-10 ${
                      i === 0 ? 'bg-brand-700' : 'bg-stone-900'
                    }`}>
                      <span className="font-mono text-sm font-bold text-white">{stage.number}</span>
                    </div>
                  </div>
                  <h3 className="text-xs font-semibold text-stone-900">{stage.label}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary track: application & measurement spanning band */}
          <div
            className={`mt-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <div className="grid grid-cols-5 gap-0">
              {/* Empty cell under Fit & Setup */}
              <div />
              {/* Spanning band across stages 02–05 */}
              <div className="col-span-4 relative">
                <div className="border border-stone-300 bg-stone-50 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-brand-700" />
                      <span className="font-mono text-[10px] text-stone-600 uppercase tracking-[0.12em]">
                        Application in real work
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-4">
                      <span className="font-mono text-[9px] text-stone-400 uppercase tracking-[0.1em]">
                        Shown each month
                      </span>
                      <div className="w-px h-3 bg-stone-200" />
                      <span className="font-mono text-[9px] text-stone-400 uppercase tracking-[0.1em]">
                        Reported to you
                      </span>
                      <div className="w-px h-3 bg-stone-200" />
                      <span className="font-mono text-[9px] text-stone-400 uppercase tracking-[0.1em]">
                        Output improves over time
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-stone-600 uppercase tracking-[0.12em]">
                        Ongoing
                      </span>
                      <div className="w-1.5 h-1.5 bg-brand-700" />
                    </div>
                  </div>
                </div>
                {/* Vertical ties connecting band to stages above */}
                <div className="absolute -top-6 left-[12.5%] w-px h-6 bg-stone-300" />
                <div className="absolute -top-6 left-[37.5%] w-px h-6 bg-stone-300" />
                <div className="absolute -top-6 left-[62.5%] w-px h-6 bg-stone-300" />
                <div className="absolute -top-6 left-[87.5%] w-px h-6 bg-stone-300" />
              </div>
            </div>
          </div>

          {/* Summary line */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-stone-300" />
            <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em] flex-shrink-0">
              Capability built in stages. Applied throughout. Measured every month.
            </span>
            <div className="h-px flex-1 bg-stone-300" />
          </div>
        </div>

        {/* Mobile/tablet: vertical flow with application band */}
        <div
          className={`lg:hidden transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {stages.map((stage, i) => (
            <div key={stage.number} className="flex gap-4 mb-1">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                  i === 0 ? 'bg-brand-700' : 'bg-stone-900'
                }`}>
                  <span className="font-mono text-xs font-bold text-white">{stage.number}</span>
                </div>
                {i < stages.length - 1 && (
                  <div className="w-px flex-1 bg-stone-200 my-1" />
                )}
              </div>
              <div className="pb-5 flex-1">
                <h3 className="text-sm font-semibold text-stone-900 mb-1">{stage.label}</h3>
                {/* Application indicator from stage 02 onwards */}
                {i >= 1 && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-brand-700" />
                    <span className="font-mono text-[9px] text-stone-400 uppercase tracking-[0.1em]">
                      Applied in real work
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Summary line */}
          <div className="mt-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-stone-300" />
            <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em] flex-shrink-0">
              Built in stages. Applied throughout.
            </span>
            <div className="h-px flex-1 bg-stone-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
