import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import EnablementCycleDiagram from './EnablementCycleDiagram'

const loopSteps = [
  {
    label: 'Learn',
    title: 'Live Call + Weekly Self-Paced Sessions',
    description: 'A one-hour monthly live call plus three one-hour weekly sessions of structured self-paced content.',
  },
  {
    label: 'Prove',
    title: 'Knowledge Check',
    description: 'Participants explain what they learned and how they applied AI in their work.',
  },
  {
    label: 'Apply',
    title: 'Workflow Application',
    description: 'Participants demonstrate real AI application in their day-to-day workflows.',
  },
  {
    label: 'Support',
    title: 'Hands-On Assistance',
    description: 'When participants are struggling, the Ad On AI team steps in with practical help.',
  },
  {
    label: 'Report',
    title: 'Progress Report',
    description: 'A clear monthly report showing learning, application, and participant progress.',
  },
]

export default function WhatsIncluded() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding border-t border-stone-200">
      <div className="section-container">
        {/* Diagram + heading composition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Left — Copy */}
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
              Core Differentiator
            </p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight mb-6">
              The Accountability Loop
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed mb-4">
              Most AI training stops at education. Ad On AI closes the loop with structured accountability every month.
            </p>
            <p className="text-sm text-stone-900 font-medium leading-relaxed">
              Learn, prove, apply, get support, and report. Every month.
            </p>
          </div>

          {/* Right — Cycle Diagram */}
          <div className={`flex items-center justify-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <EnablementCycleDiagram className="w-full max-w-[360px]" />
          </div>
        </div>

        {/* Timeline detail — below */}
        <div className={`border-t border-stone-200 pt-10 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] mb-6">
            Each month includes
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-stone-200">
            {loopSteps.map((step) => (
              <div key={step.label} className="bg-stone-50 p-5">
                <span className="font-mono text-[10px] font-bold text-brand-700 uppercase tracking-[0.15em]">{step.label}</span>
                <h4 className="text-sm font-semibold text-stone-900 mt-1.5 mb-1">{step.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
