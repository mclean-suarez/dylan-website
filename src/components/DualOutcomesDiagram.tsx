import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * DualOutcomesDiagram — Swiss Modernism 2.0 Dual-Track Framework
 *
 * A high-salience structural visual showing how one program produces
 * value across two parallel tracks: the business and the participant.
 * Central spine with diverging tracks, large track markers, and
 * accent-bordered outcome rows.
 */

const businessOutcomes = [
  { label: 'Productivity', desc: 'Your person gets more done in the same hours' },
  { label: 'Quality', desc: 'Higher standard of work with fewer mistakes' },
  { label: 'Progress Report', desc: 'Monthly report showing what they learned and applied' },
  { label: 'Staying Current', desc: 'Your business keeps up with new AI tools and methods as they emerge' },
]

const personOutcomes = [
  { label: 'Enablement', desc: 'Structured learning matched to their role' },
  { label: 'Practical Skill', desc: 'AI usage that applies to real daily tasks' },
  { label: 'Confidence', desc: 'Support when they need it, not left to figure it out' },
  { label: 'Real Tools', desc: 'Hands-on experience with the AI tools used in their actual work' },
]

export default function DualOutcomesDiagram() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding border-b border-stone-200 relative">
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
        <img
          src="/src/images/watermark.webp" // adjust path
          alt="Hero"
          className="
            w-[100%] h-auto opacity-100
            md:w-[100%] md:opacity-100
            lg:w-[100% lg:opacity-100
            xl:w-[100%]
            translate-x-8 md:translate-x-0
            lg:-translate-x-4
            translate-y-[5rem]
            select-none
          "
        />
    </div>
      <div className="section-container">
        {/* Section header */}
        <div
          className={`max-w-3xl mb-10 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
            Dual Value
          </p>
          <div className="w-10 h-0.5 bg-brand-700 mb-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-tight">
            What Your Business Gets.{' '}
            <span className="text-stone-400">What Your Person Gets.</span>
          </h2>
        </div>

        {/* Diagram */}
        <div
          className={`transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {/* Central program core — high-salience spine */}
          <div className="relative border border-stone-200 bg-stone-900 px-6 py-5 mb-0 rounded-t-[20px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-brand-700" />
                <span className="font-mono text-[11px] text-white uppercase tracking-[0.15em] font-bold">
                  Program Core
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-6">
                {['Live Call', 'Modules', 'Knowledge Check', 'Support', 'Report'].map((item, i) => (
                  <span key={item} className="flex items-center gap-2">
                    {i > 0 && <div className="w-px h-3 " />}
                    <span className="font-mono text-[8px] text-stone-400 uppercase tracking-[0.1em]">
                      {item}
                    </span>
                  </span>
                ))}
              </div>
            </div>
            {/* Diverging lines — desktop only */}
            <div className="hidden md:block absolute -bottom-6 left-[25%] w-px h-6 bg-white" />
            <div className="hidden md:block absolute -bottom-6 right-[25%] w-px h-6 bg-white" />
          </div>

          {/* Two-branch grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-x border-b border-stone-200 shadow-[0_4px_4px_0_rgba(66,99,235,0.5)] rounded-b-[20px]">
            {/* Business side */}
            <div
              className={`bg-white transition-all duration-500 rounded-b-[20px] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {/* Track header */}
              <div className="px-6 pt-6 pb-5 border-b border-stone-100">
                <h3 className="text-base font-bold text-stone-900">
                  Your Business
                </h3>
              </div>

              {/* Outcome rows */}
              <div>
                {businessOutcomes.map((item, i) => (
                  <div
                    key={item.label}
                    className={`px-6 py-4 flex items-start gap-3 ${
                      i < businessOutcomes.length - 1 ? 'border-b border-b-stone-100' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-brand-700" />
                      <span className="font-mono text-[10px] text-stone-900 uppercase tracking-[0.12em] font-semibold w-20">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Person side */}
            <div
              className={`bg-white transition-all duration-500 rounded-b-[20px] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              {/* Track header */}
              <div className="px-6 pt-6 pb-5 border-b border-stone-100">
                <h3 className="text-base font-bold text-stone-900">
                  Your Person
                </h3>
              </div>

              {/* Outcome rows */}
              <div>
                {personOutcomes.map((item, i) => (
                  <div
                    key={item.label}
                    className={`px-6 py-4 flex items-start gap-3  ${
                      i < personOutcomes.length - 1 ? 'border-b border-b-stone-100' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-stone-900" />
                      <span className="font-mono text-[10px] text-stone-900 uppercase tracking-[0.12em] font-semibold w-20">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom attribution line */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-stone-300" />
            <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] flex-shrink-0">
              Same program. Measured from both sides.
            </span>
            <div className="h-px flex-1 bg-stone-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
