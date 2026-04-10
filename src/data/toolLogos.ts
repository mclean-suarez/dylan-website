/* ------------------------------------------------------------------ */
/*  Shared logo map: tool display name → logo URL                      */
/*  Uses Google's favicon service for consistent, up-to-date logos.    */
/*  Imported by both ToolboxSection (Program page) and ToolsStrip      */
/*  (landing page) so logos stay in sync across the site.              */
/* ------------------------------------------------------------------ */

import type { LogoMap } from './toolbox'

/** Google favicon service helper — returns a 64px favicon URL */
const fav = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=64`

export const toolLogoMap: LogoMap = {
  // AI Assistants
  'ChatGPT': fav('chatgpt.com'),
  'Claude': fav('claude.ai'),
  'Google Gemini for Workspace': fav('gemini.google.com'),
  'Microsoft 365 Copilot': fav('copilot.microsoft.com'),
  'Perplexity': fav('perplexity.ai'),
  'NotebookLM': fav('notebooklm.google.com'),
  'Poe': fav('poe.com'),
  'Grok': fav('grok.com'),
  'Glean': fav('glean.com'),
  'You.com': fav('you.com'),
  'Pi': fav('pi.ai'),
  'Google AI Studio': fav('aistudio.google.com'),

  // Meetings & Notes
  'Otter.ai': fav('otter.ai'),
  'Fireflies.ai': fav('fireflies.ai'),
  'Fathom': fav('fathom.video'),
  'Read AI': fav('read.ai'),
  'Granola': fav('granola.ai'),
  'Sembly AI': fav('sembly.ai'),
  'Zoom AI Companion': fav('zoom.us'),
  'Motion': fav('usemotion.com'),
  'Loom AI': fav('loom.com'),
  'Scribe': fav('scribehow.com'),
  'Reclaim.ai': fav('reclaim.ai'),

  // Writing & Communication
  'Notion AI': fav('notion.so'),
  'Grammarly': fav('grammarly.com'),
  'Wordtune': fav('wordtune.com'),
  'QuillBot': fav('quillbot.com'),
  'Writer.com': fav('writer.com'),
  'Sudowrite': fav('sudowrite.com'),
  'Superhuman': fav('superhuman.com'),

  // Marketing & SEO
  'Jasper': fav('jasper.ai'),
  'Copy.ai': fav('copy.ai'),
  'Gamma': fav('gamma.app'),
  'Beautiful.ai': fav('beautiful.ai'),
  'Tome': fav('tome.app'),
  'Surfer': fav('surferseo.com'),
  'Frase': fav('frase.io'),
  'Clearscope': fav('clearscope.io'),
  'Anyword': fav('anyword.com'),
  'Semrush ContentShake AI': fav('semrush.com'),
  'Ahrefs AI Content': fav('ahrefs.com'),
  'Typeface': fav('typeface.ai'),

  // Sales & CRM
  'HubSpot AI': fav('hubspot.com'),
  'Salesforce Einstein': fav('salesforce.com'),
  'Clay': fav('clay.com'),
  'Apollo AI': fav('apollo.io'),
  'Gong': fav('gong.io'),
  'Intercom Fin': fav('intercom.com'),
  'Zendesk AI': fav('zendesk.com'),

  // Automation
  'Zapier': fav('zapier.com'),
  'Make': fav('make.com'),
  'n8n': fav('n8n.io'),
  'Relay.app': fav('relay.app'),
  'Bardeen': fav('bardeen.ai'),
  'Lindy': fav('lindy.ai'),
  'Gumloop': fav('gumloop.com'),
  'Pipedream': fav('pipedream.com'),
  'Relevance AI': fav('relevanceai.com'),
  'Airtable AI': fav('airtable.com'),
  'Coda AI': fav('coda.io'),
  'ClickUp Brain': fav('clickup.com'),

  // Design & Creative
  'Canva': fav('canva.com'),
  'Microsoft Designer': fav('designer.microsoft.com'),
  'Adobe Firefly': fav('firefly.adobe.com'),
  'Midjourney': fav('midjourney.com'),
  'DALL\u00B7E': fav('openai.com'),
  'Figma AI': fav('figma.com'),
  'Framer': fav('framer.com'),
  'Stitch': fav('stitch.withgoogle.com'),
  'Piktochart': fav('piktochart.com'),
  'Leonardo AI': fav('leonardo.ai'),
  'Ideogram': fav('ideogram.ai'),

  // Video & Audio
  'Runway': fav('runwayml.com'),
  'HeyGen': fav('heygen.com'),
  'Synthesia': fav('synthesia.io'),
  'ElevenLabs': fav('elevenlabs.io'),
  'Descript': fav('descript.com'),
  'Riverside': fav('riverside.fm'),
  'OpusClip': fav('opus.pro'),
  'Captions': fav('captions.ai'),
  'Pictory': fav('pictory.ai'),

  // Coding & Development
  'Claude Code': fav('claude.ai'),
  'Cursor': fav('cursor.com'),
  'GitHub Copilot': fav('github.com'),
  'OpenAI Codex': fav('openai.com'),
  'Jules': fav('jules.google.com'),
  'Windsurf': fav('windsurf.com'),
  'v0': fav('v0.dev'),
  'Firebase Studio': fav('firebase.google.com'),
  'Retool AI': fav('retool.com'),
  'Bolt': fav('bolt.new'),
  'Lovable': fav('lovable.dev'),
  'Replit': fav('replit.com'),
  'Base44': fav('base44.com'),
  'Manus': fav('manus.im'),
  'Opal': fav('opal.dev'),

  // Finance Systems
  'QuickBooks (Intuit Assist)': fav('quickbooks.intuit.com'),
  'Xero': fav('xero.com'),
  'MYOB': fav('myob.com'),
  'Bill.com': fav('bill.com'),
  'Ramp': fav('ramp.com'),
  'Brex': fav('brex.com'),
  'Expensify': fav('expensify.com'),
  'Dext': fav('dext.com'),
  'TrueWind': fav('truewind.ai'),
  'ChatFin': fav('chatfin.ai'),
  'Vena': fav('vena.io'),
  'Etani.ai': fav('etani.ai'),
  'Airwallex': fav('airwallex.com'),
  'Vic.ai': fav('vic.ai'),
  'FloQast': fav('floqast.com'),
  'Numeric': fav('numeric.io'),
  'Cube': fav('cube.dev'),
  'Pigment AI': fav('pigment.com'),
  'Puzzle': fav('puzzle.io'),
  'Pennylane': fav('pennylane.com'),

  // Document Processing
  'Rossum': fav('rossum.ai'),
  'Affinda': fav('affinda.com'),
  'Airparser': fav('airparser.com'),
  'Veryfi OCR': fav('veryfi.com'),
  'DigiParser': fav('digiparser.com'),
  'Parsio': fav('parsio.io'),
  'Email Parser by Zapier': fav('zapier.com'),
  'Nanonets OCR': fav('nanonets.com'),
  'Google Cloud Document AI': fav('cloud.google.com'),
  'Amazon Textract': fav('aws.amazon.com'),
  'UiPath': fav('uipath.com'),
  'ABBYY Vantage': fav('abbyy.com'),
  'Hyperscience': fav('hyperscience.com'),
  'Kofax': fav('kofax.com'),
}
