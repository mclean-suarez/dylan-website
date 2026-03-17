import { useMemo } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { type ToolEntry, buildToolGroups } from '../../data/toolbox'
import { toolLogoMap } from '../../data/toolLogos'
import ToolChip from '../ToolChip'

/** Flatten all groups into a single de-duplicated tool list with logos. */
function useAllTools(): ToolEntry[] {
  return useMemo(() => {
    const groups = buildToolGroups(toolLogoMap)
    const seen = new Set<string>()
    const tools: ToolEntry[] = []
    for (const group of groups) {
      for (const tool of group.tools) {
        if (!seen.has(tool.displayName)) {
          seen.add(tool.displayName)
          tools.push(tool)
        }
      }
    }
    return tools
  }, [])
}

export default function ToolsStrip() {
  const { ref, isVisible } = useScrollAnimation()
  const tools = useAllTools()

  return (
    <section ref={ref} className="py-12 border-t border-stone-200">
      <div className="section-container">
        <div
          className={`transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] text-center mb-6">
            AI we work within
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2" role="list">
            {tools.map((tool) => (
              <ToolChip key={tool.displayName} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
