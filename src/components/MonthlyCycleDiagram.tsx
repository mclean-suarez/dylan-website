import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const stages = [
  { number: '01', title: 'Live Face-To-Face Training', time: '2 hrs / month' },
  { number: '02', title: 'Self-Paced Modules', time: '2 hrs / month' },
  { number: '03', title: 'Skills and Knowledge Check', time: 'End of month' },
  { number: '04', title: 'Application', time: 'In workflow' },
  { number: '05', title: 'Progress Report', time: 'Delivered to you' },
  { number: '06', title: 'Hands-On Support & Implementation', time: 'As needed' },
]

export default function MonthlyCycleDiagram() {
  const { ref, isVisible } = useScrollAnimation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="bg-navy-950 section-padding">
      <div className="section-container">

        {/* Header */}
        <div className={`mb-10 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}>
          <p className="font-mono text-xs text-brand-400 uppercase tracking-[0.15em] mb-4">
            Monthly Cycle
          </p>
          <div className="w-10 h-0.5 bg-brand-400 mb-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
            How Each Month Works
          </h2>
        </div>

        {/* Wrap BOTH sections */}
        <div className="group">

          {/* Progression indicator */}
          <div className={`hidden lg:block mb-8 transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}>
            <div className="relative">
              <div className="absolute top-3 left-[8%] right-[8%] h-px bg-white/15" />

              <div className="grid grid-cols-6 gap-0">
                {stages.map((stage, i) => (
                  <div key={stage.number} className="flex justify-center">
                    <div
                      className={`w-6 h-6 flex items-center justify-center relative z-10 transition-all duration-300
                        ${
                          hoveredIndex !== null && hoveredIndex >= i
                            ? 'bg-brand-700 shadow-[0_0_10px_rgba(66,99,235,0.6)]'
                            : 'bg-white/10 border border-white/15'
                        }`}
                    >
                      <span className="font-mono text-[9px] font-bold text-white">
                        {stage.number}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step cards */}
          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}>
           {stages.map((stage, i) => (
              <div
                key={stage.number}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-navy-950 p-5 lg:p-4 transition-all duration-500 border border-white/10 rounded-[15px] shadow-[0_4px_4px_0_rgba(66,99,235,0.5)]
                            transform ${hoveredIndex !== null && i <= hoveredIndex ? 'scale-105 shadow-[0_6px_20px_rgba(66,99,235,0.3)]' : ''}
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${(i + 1) * 60}ms` }}
              >
                {/* Top line */}
                <div className={`border-t-2 pt-4 mb-3 transition-colors duration-300 ${
                  hoveredIndex !== null && i <= hoveredIndex ? 'border-brand-700' : 'border-white/20'
                }`}>
                  
                  {/* Number */}
                  <span className={`font-mono text-2xl font-bold tracking-tight transition-colors duration-300 ${
                    hoveredIndex !== null && i <= hoveredIndex ? 'text-brand-700' : 'text-white/10'
                  }`}>
                    {stage.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xs font-bold text-white leading-snug mb-1">{stage.title}</h3>

                {/* Time */}
                <span className="font-mono text-[8px] text-brand-400 uppercase tracking-[0.08em]">
                  {stage.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recurrence indicator */}
        <div className={`mt-6 flex items-center gap-3 transition-all duration-500 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}>
          <div className="h-px flex-1 bg-white/15" />
          <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.12em]">
            01 → 06 → Repeats monthly
          </span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

      </div>
    </section>
  )
}
