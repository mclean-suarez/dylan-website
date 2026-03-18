import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const blocks = [
  {
    anchor: '01',
    headline: 'Same person, more productive',
    detail: 'No new software, just new AI skills',
  },
  {
    anchor: '02',
    headline: 'AI incorporated into every role',
    detail: 'Prompts, AI-assisted tasks, automation',
  },
  {
    anchor: '03',
    headline: 'Real output gains',
    detail: 'Your people using AI to save you money and create more value',
  },
]

export default function SamePeopleMoreOutput() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="relative border-t border-b border-stone-200 bg-stone-50">
      {/* Left-edge brand accent — desktop */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-brand-700" />
      {/* Top-edge brand accent — mobile */}
      <div className="md:hidden absolute left-0 right-0 top-0 h-1 bg-brand-700" />

      <div className="section-container py-16 sm:py-20">
        {/* Heading */}
        <div
          className={`mb-12 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
            Business Impact
          </p>
          <div className="w-10 h-0.5 bg-brand-700 mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight">
            Same People. More Output.
          </h2>
          <p className="text-sm text-stone-500 mt-3">
            The team doesn't change. The way they work does.
          </p>
        </div>

        {/* Three-block metric strip */}
        <div
          className={`transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {/* Desktop: horizontal row */}
          <div className="hidden md:grid grid-cols-3 gap-px bg-stone-200 border border-stone-200">
            {blocks.map((block, i) => (
              <div
                key={block.anchor}
                className={`bg-white px-6 py-8 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: `${(i + 1) * 120}ms` }}
              >
                <span className="block text-4xl sm:text-5xl font-bold text-stone-200 leading-none select-none mb-3">
                  {block.anchor}
                </span>
                <h3 className="text-sm font-semibold text-stone-900 mb-2">
                  {block.headline}
                </h3>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] leading-relaxed">
                  {block.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical stack */}
          <div className="md:hidden">
            {blocks.map((block, i) => (
              <div
                key={block.anchor}
                className={`py-8 ${
                  i < blocks.length - 1 ? 'border-b border-stone-200' : ''
                } transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: `${(i + 1) * 120}ms` }}
              >
                <span className="block text-4xl font-bold text-stone-200 leading-none select-none mb-3">
                  {block.anchor}
                </span>
                <h3 className="text-sm font-semibold text-stone-900 mb-2">
                  {block.headline}
                </h3>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] leading-relaxed">
                  {block.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom attribution line */}
        <div
          className={`mt-10 flex items-center gap-3 transition-all duration-500 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="h-px flex-1 bg-stone-300" />
          <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em] flex-shrink-0">
            The program works inside your existing team
          </span>
          <div className="h-px flex-1 bg-stone-300" />
        </div>
      </div>
    </section>
  )
}
