import { useScrollAnimation } from '../hooks/useScrollAnimation'

const capabilities = [
  { number: '01', title: 'Understand where AI is useful' },
  { number: '02', title: 'Use approved tools appropriately' },
  { number: '03', title: 'Produce usable day-to-day outputs' },
  { number: '04', title: 'Prompt with more control and consistency' },
  { number: '05', title: 'Apply AI inside real workflows' },
  { number: '06', title: 'Show practical operational benefit' },
]

export default function FoundationCapabilities() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding border-b border-stone-200">
      <div className="section-container">
        {/* Header */}
        <div
          className={`mb-10 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
            Foundation Capabilities
          </p>
          <div className="w-10 h-0.5 bg-brand-700 mb-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-tight">
            What Participants Can Do After the General Program
          </h2>
        </div>

        {/* Capability system — 3×2 grid with visual numbering */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
          {capabilities.map((cap, i) => (
            <div
              key={cap.number}
              className={`bg-white p-5 md:p-6 relative transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <div className={`border-t-2 ${i === 0 ? 'border-brand-700' : 'border-stone-200'} pt-4`}>
                <span className="font-mono text-3xl font-bold text-stone-100 tracking-tight block mb-2">
                  {cap.number}
                </span>
                <h3 className="text-sm font-bold text-stone-900 leading-snug">
                  {cap.title}
                </h3>
              </div>
              {/* Capability signal */}
              <div className="mt-4 flex items-center gap-1.5">
                <div className="w-2 h-2 bg-brand-700" />
                <div className="h-px flex-1 bg-stone-100" />
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
          <div className="h-px flex-1 bg-stone-200" />
          <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em] flex-shrink-0">
            Ready to progress into a role stream
          </span>
          <div className="h-px flex-1 bg-stone-200" />
        </div>
      </div>
    </section>
  )
}
