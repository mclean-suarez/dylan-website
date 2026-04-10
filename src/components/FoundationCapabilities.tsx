import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

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
    <section ref={ref} className="bg-navy-950 section-padding">
      <div className="section-container">
        {/* Header */}
        <div
          className={`mb-10 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="font-mono text-xs text-brand-400 uppercase tracking-[0.15em] mb-4">
            After the Program
          </p>
          <div className="w-10 h-0.5 bg-brand-400 mb-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
            What Your Person Can Do After the General Program
          </h2>
        </div>

        {/* Capability system — 3×2 grid with visual numbering */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <div
                key={cap.number}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-navy-950 p-5 md:p-6 relative transition-all duration-500 border rounded-[20px] shadow-[0_4px_4px_0_rgba(66,99,235,0.5)] ${
                  hoveredIndex === i ? 'border-brand-500' : 'border-white/10'
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
                    hoveredIndex === i ? 'text-brand-500' : 'text-white/8'
                  }`}
                >
                  {cap.number}
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">{cap.title}</h3>
              </div>

              {/* Capability signal */}
              <div className="mt-4 relative h-2">
                {/* Line */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 transform -translate-y-1/2" />

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

        {/* Closing line */}
        <div
          className={`mt-6 flex items-center gap-3 transition-all duration-500 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="h-px flex-1 bg-white/15" />
          <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.12em] flex-shrink-0">
            Ready to progress into role-specific training
          </span>
          <div className="h-px flex-1 bg-white/15" />
        </div>
      </div>
    </section>
  )
}