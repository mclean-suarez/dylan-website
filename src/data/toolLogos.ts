/* ------------------------------------------------------------------ */
/*  Shared logo map: tool display name → imported SVG asset path       */
/*  Imported by both ToolboxSection (Program page) and ToolsStrip      */
/*  (landing page) so logos stay in sync across the site.              */
/* ------------------------------------------------------------------ */

import type { LogoMap } from './toolbox'

import claudeLogo from '../assets/tool-logos/claude.svg'
import chatgptLogo from '../assets/tool-logos/chatgpt.svg'
import copilotLogo from '../assets/tool-logos/copilot.svg'
import geminiLogo from '../assets/tool-logos/gemini.svg'
import poeLogo from '../assets/tool-logos/poe.svg'
import grammarlyLogo from '../assets/tool-logos/grammarly.svg'
import notionLogo from '../assets/tool-logos/notion.svg'
import canvaLogo from '../assets/tool-logos/canva.svg'
import adobeFireflyLogo from '../assets/tool-logos/adobe-firefly.svg'
import dalleLogo from '../assets/tool-logos/dall-e.svg'
import figmaLogo from '../assets/tool-logos/figma.svg'
import framerLogo from '../assets/tool-logos/framer.svg'
import cursorLogo from '../assets/tool-logos/cursor.svg'
import windsurfLogo from '../assets/tool-logos/windsurf.svg'
import replitLogo from '../assets/tool-logos/replit.svg'
import quickbooksLogo from '../assets/tool-logos/quickbooks.svg'
import expensifyLogo from '../assets/tool-logos/expensify.svg'
import googleCloudLogo from '../assets/tool-logos/google-cloud.svg'
import amazonAwsLogo from '../assets/tool-logos/amazon-aws.svg'
import powerAutomateLogo from '../assets/tool-logos/power-automate.svg'

export const toolLogoMap: LogoMap = {
  'Google Gemini for Workspace': geminiLogo,
  'Microsoft 365 Copilot': copilotLogo,
  'Claude': claudeLogo,
  'ChatGPT': chatgptLogo,
  'Poe': poeLogo,
  'Grammarly': grammarlyLogo,
  'Notion AI': notionLogo,
  'Canva': canvaLogo,
  'Adobe Firefly': adobeFireflyLogo,
  'DALL\u00B7E': dalleLogo,
  'Figma (AI/plugins)': figmaLogo,
  'Framer': framerLogo,
  'Claude Code': claudeLogo,
  'Cursor': cursorLogo,
  'Windsurf': windsurfLogo,
  'Replit': replitLogo,
  'QuickBooks (Intuit Assist)': quickbooksLogo,
  'Expensify': expensifyLogo,
  'Google Cloud Document AI': googleCloudLogo,
  'Amazon Textract': amazonAwsLogo,
  'Microsoft Power Automate + AI Builder': powerAutomateLogo,
}
