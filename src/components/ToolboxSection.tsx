import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { type ToolGroup, buildToolGroups } from '../data/toolbox'
import { toolLogoMap } from '../data/toolLogos'
import type { ToolEntry } from '../data/toolbox'

const toolGroups = buildToolGroups(toolLogoMap)

const DARK_CHIP =
  'inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 text-xs text-white/60 transition-colors duration-150 hover:text-white/80 hover:border-white/25 cursor-default select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400/60 focus-visible:outline-offset-2'

function DarkToolChip({ tool }: { tool: ToolEntry }) {
  if (tool.logo) {
    return (
      <span className={DARK_CHIP} role="listitem">
        <img
          src={tool.logo}
          alt=""
          aria-hidden="true"
          className="h-[18px] w-auto flex-shrink-0 brightness-0 invert opacity-60"
          loading="lazy"
        />
        <span aria-label={tool.displayName}>{tool.displayName}</span>
      </span>
    )
  }
  return (
    <span className={DARK_CHIP} role="listitem">
      {tool.displayName}
    </span>
  )
}

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
      <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 mb-4">
        {group.heading}
      </h3>
      <div className="flex flex-wrap gap-2" role="list">
        {group.tools.map((tool) => (
          <DarkToolChip key={tool.displayName} tool={tool} />
        ))}
      </div>
    </div>
  )
}

export default function ToolboxSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="bg-navy-950 section-padding">
      <div className="section-container">
        <div
          className={`mb-8 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="font-mono text-xs text-brand-400 uppercase tracking-[0.15em] mb-4">Toolbox</p>
          <div className="w-10 h-0.5 bg-brand-400 mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
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
