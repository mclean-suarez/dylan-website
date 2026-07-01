import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { CYAN, Aurora, BlueprintGrid, Grain } from './hero/visuals'

const capabilities = [
  { number: '01', title: 'Understand where AI is useful' },
  { number: '02', title: 'Competent in a range of AI tools' },
  { number: '03', title: 'Get useful results from AI in their daily tasks' },
  { number: '04', title: 'Prompt with more control and consistency' },
  { number: '05', title: 'Apply AI inside their own workflow' },
  { number: '06', title: 'Demonstrate measurable productivity improvement' },
]

export default function FoundationCapabilities() {
  const { ref, isVisible } = useScrollAnimation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative overflow-hidden section-padding" style={{ background: '#04060C' }}>
      <BlueprintGrid />
      <Aurora warm={false} />
      <div className="section-container relative z-10">
        {/* Header */}
        <div
          className={`mb-10 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: CYAN }}>
            Program Outcomes
          </p>
          <div className="w-10 h-0.5 mb-6" style={{ background: CYAN }} />
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
            Skills Your Person Will Gain
          </h2>
        </div>

        {/* Capability system — 3×2 grid with visual numbering */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <div
                key={cap.number}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-white/[0.03] p-5 md:p-6 relative transition-all duration-500 border rounded-[20px] shadow-[0_4px_4px_0_rgba(66,99,235,0.35)] ${
                  hoveredIndex === i ? 'border-brand-500/50' : 'border-white/10'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'} ${
                  hoveredIndex === i ? 'scale-105' : ''
                }`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
              <div
                className={`border-t-2 pt-4 mb-3 ${
                  hoveredIndex === i ? 'border-brand-500' : 'border-white/15'
                }`}
              >
                <span
                  className={`font-mono text-3xl font-bold tracking-tight block mb-2 transition-colors duration-300 ${
                    hoveredIndex === i ? 'text-[#6F9BFF]' : 'text-white/15'
                  }`}
                >
                  {cap.number}
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">{cap.title}</h3>
              </div>

              {/* Capability signal */}
              <div className="mt-4 relative h-2">
                {/* Line */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-white/15 transform -translate-y-1/2" />

                {/* Small box */}
                <div
                  className={`w-2 h-2 bg-brand-700 absolute top-1/2 left-0 transform -translate-y-1/2 transition-all duration-300 ${
                    hoveredIndex === i ? 'left-full -translate-x-full' : ''
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Grain opacity={0.1} />
    </section>
  )
}
