/* ------------------------------------------------------------------ */
/*  Shared tool chip: logo + label when a logo exists, text-only       */
/*  fallback otherwise. Used by ToolboxSection and ToolsStrip.         */
/* ------------------------------------------------------------------ */

import type { ToolEntry } from '../data/toolbox'

export const CHIP_BASE =
  'inline-flex items-center gap-2 px-3 py-1.5 border border-stone-200 text-xs text-stone-600 transition-colors duration-150 hover:text-stone-800 hover:border-stone-300 cursor-default select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-700/60 focus-visible:outline-offset-2'

export default function ToolChip({ tool }: { tool: ToolEntry }) {
  if (tool.logo) {
    return (
      <span className={CHIP_BASE} role="listitem">
        <img
          src={tool.logo}
          alt=""
          aria-hidden="true"
          className="h-[18px] w-auto flex-shrink-0"
          loading="lazy"
        />
        <span aria-label={tool.displayName}>{tool.displayName}</span>
      </span>
    )
  }
  return (
    <span className={CHIP_BASE} role="listitem">
      {tool.displayName}
    </span>
  )
}
