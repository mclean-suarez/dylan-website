import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { type ToolGroup, buildToolGroups } from '../data/toolbox'
import { toolLogoMap } from '../data/toolLogos'
import ToolChip from './ToolChip'

const toolGroups = buildToolGroups(toolLogoMap)

function ToolGroupBlock({
  group,
  index,
  isVisible,
}: {
  group: ToolGroup
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
      style={{ transitionDelay: `${(index + 1) * 80}ms` }}
    >
      <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 mb-4">
        {group.heading}
      </h3>
      <div className="flex flex-wrap gap-2" role="list">
        {group.tools.map((tool) => (
          <ToolChip key={tool.displayName} tool={tool} />
        ))}
      </div>
    </div>
  )
}

export default function ToolboxSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding border-t border-b border-stone-200">
      <div className="section-container">
        <div
          className={`mb-8 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">Toolbox</p>
          <div className="w-10 h-0.5 bg-brand-700 mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight">
            AI We Add to Your Toolbox
          </h2>
        </div>

        <div className="space-y-8">
          {toolGroups.map((group, i) => (
            <ToolGroupBlock
              key={group.heading}
              group={group}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
