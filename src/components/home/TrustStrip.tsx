import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const credentials = [
  'Australian-Owned',
  'Est. 2008',
  'Real Operations Background',
  'Accountability Built In',
  'Measured by Outcomes',
]

export default function TrustStrip() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-6 border-b border-stone-200">
      <div className="section-container">
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="flex items-center gap-2 sm:mr-4">
            <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em]">Ad On Group</span>
            <span className="text-stone-300">/</span>
            <span className="font-mono text-[10px] text-brand-700 uppercase tracking-[0.15em]">Ad On AI</span>
          </div>
          <span className="hidden sm:block w-px h-3 bg-stone-300 mx-2" />
          <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
            {credentials.map((item, i) => (
              <span key={item} className="text-xs text-stone-400">
                {item}{i < credentials.length - 1 && <span className="text-stone-300 mx-2">&middot;</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
