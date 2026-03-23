import { useScrollAnimation } from '../../hooks/useScrollAnimation'

/* Watermark-style SVG icons — geometric, muted, large-scale backdrops */
const PersonIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-[#4665EB]" aria-hidden="true">
    <circle cx="32" cy="18" r="10" stroke="currentColor" strokeWidth="4" />
    <path d="M12 56c0-11.046 8.954-20 20-20s20 8.954 20 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
)

const AiIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-[#4665EB]" aria-hidden="true">
    <rect x="14" y="14" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="4" />
    <circle cx="26" cy="30" r="3" fill="currentColor" />
    <circle cx="38" cy="30" r="3" fill="currentColor" />
    <path d="M24 40c2 3 6 5 8 5s6-2 8-5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="20" y1="8" x2="22" y2="14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="44" y1="8" x2="42" y2="14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-[#4665EB]" aria-hidden="true">
    <polyline points="8,52 24,36 36,42 56,16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="44,16 56,16 56,28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="8" y1="56" x2="56" y2="56" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
)

const icons = [PersonIcon, AiIcon, ChartIcon]

const blocks = [
  {
    headline: 'Same person, more productive',
    detail: 'No new software, just new AI skills',
  },
  {
    headline: 'AI incorporated into every role',
    detail: 'Prompts, AI-assisted tasks, automation',
  },
  {
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
            {blocks.map((block, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={`d-${i}`}
                  className={`bg-white px-6 py-8 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 120}ms` }}
                >
                  <div className="mb-3 select-none">
                    <Icon />
                  </div>
                  <h3 className="text-sm font-semibold text-stone-900 mb-2">
                    {block.headline}
                  </h3>
                  <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] leading-relaxed">
                    {block.detail}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Mobile: vertical stack */}
          <div className="md:hidden">
            {blocks.map((block, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={`m-${i}`}
                  className={`py-8 ${
                    i < blocks.length - 1 ? 'border-b border-stone-200' : ''
                  } transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 120}ms` }}
                >
                  <div className="mb-3 select-none">
                    <Icon />
                  </div>
                  <h3 className="text-sm font-semibold text-stone-900 mb-2">
                    {block.headline}
                  </h3>
                  <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] leading-relaxed">
                    {block.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
