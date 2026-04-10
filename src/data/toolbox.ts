/* ------------------------------------------------------------------ */
/*  Single source of truth for all AI tools shown on the site          */
/* ------------------------------------------------------------------ */

/** A tool entry that may optionally carry a logo. */
export interface ToolEntry {
  displayName: string
  /** Logo path — imported SVG or external URL. When undefined the chip renders as text-only. */
  logo?: string
}

export interface ToolGroup {
  heading: string
  tools: ToolEntry[]
}

/** Logo map: displayName → logo path or URL */
export type LogoMap = Record<string, string>

/** Raw tool-group definitions (display names only). */
const RAW_GROUPS: { heading: string; names: string[] }[] = [
  {
    heading: 'AI Assistants',
    names: [
      'ChatGPT',
      'Claude',
      'Google Gemini for Workspace',
      'Microsoft 365 Copilot',
      'Perplexity',
      'NotebookLM',
      'Poe',
      'Grok',
      'Glean',
      'You.com',
      'Pi',
      'Google AI Studio',
    ],
  },
  {
    heading: 'Meetings & Notes',
    names: [
      'Otter.ai',
      'Fireflies.ai',
      'Fathom',
      'Read AI',
      'Granola',
      'Sembly AI',
      'Zoom AI Companion',
      'Motion',
      'Loom AI',
      'Scribe',
      'Reclaim.ai',
    ],
  },
  {
    heading: 'Writing & Communication',
    names: [
      'Notion AI',
      'Grammarly',
      'Wordtune',
      'QuillBot',
      'Writer.com',
      'Sudowrite',
      'Superhuman',
    ],
  },
  {
    heading: 'Marketing & SEO',
    names: [
      'Jasper',
      'Copy.ai',
      'Gamma',
      'Beautiful.ai',
      'Tome',
      'Surfer',
      'Frase',
      'Clearscope',
      'Anyword',
      'Semrush ContentShake AI',
      'Ahrefs AI Content',
      'Typeface',
    ],
  },
  {
    heading: 'Sales & CRM',
    names: [
      'HubSpot AI',
      'Salesforce Einstein',
      'Clay',
      'Apollo AI',
      'Gong',
      'Intercom Fin',
      'Zendesk AI',
    ],
  },
  {
    heading: 'Automation',
    names: [
      'Zapier',
      'Make',
      'n8n',
      'Relay.app',
      'Bardeen',
      'Lindy',
      'Gumloop',
      'Pipedream',
      'Relevance AI',
      'Airtable AI',
      'Coda AI',
      'ClickUp Brain',
    ],
  },
  {
    heading: 'Design & Creative',
    names: [
      'Canva',
      'Microsoft Designer',
      'Adobe Firefly',
      'Midjourney',
      'DALL\u00B7E',
      'Figma AI',
      'Framer',
      'Stitch',
      'Piktochart',
      'Leonardo AI',
      'Ideogram',
    ],
  },
  {
    heading: 'Video & Audio',
    names: [
      'Runway',
      'HeyGen',
      'Synthesia',
      'ElevenLabs',
      'Descript',
      'Riverside',
      'OpusClip',
      'Captions',
      'Pictory',
    ],
  },
  {
    heading: 'Coding & Development',
    names: [
      'Claude Code',
      'Cursor',
      'GitHub Copilot',
      'OpenAI Codex',
      'Jules',
      'Windsurf',
      'v0',
      'Firebase Studio',
      'Retool AI',
      'Bolt',
      'Lovable',
      'Replit',
      'Base44',
      'Manus',
      'Opal',
    ],
  },
  {
    heading: 'Finance Systems',
    names: [
      'QuickBooks (Intuit Assist)',
      'Xero',
      'MYOB',
      'Bill.com',
      'Ramp',
      'Brex',
      'Expensify',
      'Dext',
      'TrueWind',
      'ChatFin',
      'Vena',
      'Etani.ai',
      'Airwallex',
      'Vic.ai',
      'FloQast',
      'Numeric',
      'Cube',
      'Pigment AI',
      'Puzzle',
      'Pennylane',
    ],
  },
  {
    heading: 'Document Processing',
    names: [
      'Rossum',
      'Affinda',
      'Airparser',
      'Veryfi OCR',
      'DigiParser',
      'Parsio',
      'Email Parser by Zapier',
      'Nanonets OCR',
      'Google Cloud Document AI',
      'Amazon Textract',
      'UiPath',
      'ABBYY Vantage',
      'Hyperscience',
      'Kofax',
    ],
  },
]

/**
 * Build the full ordered tool-group list.
 * Pass a logoMap to attach logos: keys are display names.
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
