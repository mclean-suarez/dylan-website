/* ------------------------------------------------------------------ */
/*  Single source of truth for all AI tools shown on the site          */
/* ------------------------------------------------------------------ */

/** A tool entry that may optionally carry a logo. */
export interface ToolEntry {
  displayName: string
  /** Imported SVG path. When undefined the chip renders as text-only. */
  logo?: string
}

export interface ToolGroup {
  heading: string
  tools: ToolEntry[]
}

/** Logo map: displayName → imported SVG asset path */
export type LogoMap = Record<string, string>

/** Raw tool-group definitions (display names only). */
const RAW_GROUPS: { heading: string; names: string[] }[] = [
  {
    heading: 'General Productivity and AI Assistance',
    names: [
      'Google Gemini for Workspace',
      'Microsoft 365 Copilot',
      'Claude',
      'ChatGPT',
      'Otter.ai',
      'Poe',
    ],
  },
  {
    heading: 'Writing, Editing, and Communicating',
    names: [
      'Grammarly',
      'Wordtune',
      'QuillBot',
      'Jasper',
      'Copy.ai',
      'Writer.com',
      'Notion AI',
      'Sudowrite',
    ],
  },
  {
    heading: 'Design and Creative Assets',
    names: [
      'Canva',
      'Microsoft Designer',
      'Adobe Firefly',
      'Midjourney',
      'DALL\u00B7E',
      'Figma (AI/plugins)',
      'Framer',
      'Google AI Studio',
      'Google DeepMind',
      'Stitch',
      'Piktochart',
    ],
  },
  {
    heading: 'Coding, Development and Autonomous Operations',
    names: [
      'Claude Code',
      'Cursor',
      'Jules',
      'Base44',
      'Manus',
      'Opal',
      'Grok',
      'Windsurf',
      'Bolt',
      'Loveable',
      'Replit',
    ],
  },
  {
    heading: 'Finance / Accounting / Spend',
    names: [
      'QuickBooks (Intuit Assist)',
      'Bill.com',
      'Ramp',
      'Brex',
      'Expensify',
      'Dext',
      'TrueWind',
      'ChatFin',
      'Vena',
      'Etani.ai',
    ],
  },
  {
    heading: 'Admin and Data Entry',
    names: [
      'Rossum',
      'Affinda',
      'Airparser',
      'Veryfi OCR (Zapier app)',
      'DigiParser',
      'Parsio',
      'Email Parser by Zapier',
      'Nanonets OCR',
      'Google Cloud Document AI',
      'Amazon Textract',
      'UiPath (Integration Service + RPA)',
      'Microsoft Power Automate + AI Builder',
      'ABBYY Vantage',
      'Hyperscience',
      'Kofax (IDP / RPA)',
    ],
  },
]

/**
 * Build the full ordered tool-group list.
 * Pass a logoMap to attach logos: keys are display names (or partial matches).
 */
export function buildToolGroups(logoMap: LogoMap = {}): ToolGroup[] {
  return RAW_GROUPS.map((raw) => ({
    heading: raw.heading,
    tools: raw.names.map((name) => ({
      displayName: name,
      logo: logoMap[name],
    })),
  }))
}

/** Flatten every group into a single de-duplicated display-name list. */
export function flattenToolNames(groups: ToolGroup[]): string[] {
  const seen = new Set<string>()
  const names: string[] = []
  for (const group of groups) {
    for (const tool of group.tools) {
      const name = tool.displayName
      if (!seen.has(name)) {
        seen.add(name)
        names.push(name)
      }
    }
  }
  return names
}
