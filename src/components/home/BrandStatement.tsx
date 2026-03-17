import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function BrandStatement() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-14 sm:py-20 border-b border-stone-200">
      <div className="section-container">
        <p
          className={`text-xl sm:text-2xl lg:text-[1.75rem] font-semibold text-stone-900 tracking-tight leading-snug max-w-2xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          Structured enablement for stronger, more capable teams.
        </p>
      </div>
    </section>
  )
}
