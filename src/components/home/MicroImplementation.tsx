import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Check } from 'lucide-react'

const examples = [
  'Prompt templates and AI-assisted drafting workflows',
  'Light automations for reporting, admin, or data processing',
  'AI playbooks tailored to specific roles and tasks',
  'Process tools, checklists, and standard operating procedures',
  'Communication templates for client-facing or internal workflows',
  'CRM hygiene workflows and pipeline accuracy improvements',
]

export default function MicroImplementation() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 glass-divider" />
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">
              Applied Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Practical Help When<br />
              Participants Need It
            </h2>
            <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
              <p>
                When a participant is struggling to apply what they have learned,
                the Ad On AI team steps in with practical, hands-on assistance.
                This could be workflow guidance, help selecting the right AI
                approach, or a small workflow improvement deployed directly
                into their day-to-day work.
              </p>
              <p>
                The scope is deliberately kept small to ensure quality, fast
                deployment, and real adoption. Anything larger becomes a
                separate project, scoped and delivered independently.
              </p>
            </div>
            <div className="mt-6 glass-panel rounded-xl p-5">
              <p className="text-sm text-gray-500 leading-relaxed">
                <span className="text-white font-medium">Scope note:</span> Hands-on support
                covers small, high-leverage assistance. Custom integrations, full system architecture,
                or bespoke software are scoped separately. This keeps the program
                focused and predictable.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="card">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Examples of support that may be provided
              </h3>
              <div className="space-y-3.5">
                {examples.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
