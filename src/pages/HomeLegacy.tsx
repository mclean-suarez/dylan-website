// ---------------------------------------------------------------------------
// Legacy home page — preserved, not deleted.
// This is the original homepage built around the initial BPO training offer.
// It has been retired from "/" to give a clean slate for the new mass-market
// homepage. Kept here (and routed at the unlisted "/home-legacy") so its
// content can be referenced and selectively moved — likely into the BPO AI
// Learning Program page ("/bpo-ai-program"). Safe to delete once migrated.
// ---------------------------------------------------------------------------
import Hero from '../components/home/Hero'
import TrustStrip from '../components/home/TrustStrip'
import OfferSection from '../components/home/OfferSection'
import SamePeopleMoreOutput from '../components/home/SamePeopleMoreOutput'
import HowItWorks from '../components/home/HowItWorks'
import DualOutcomesDiagram from '../components/DualOutcomesDiagram'
import OperationalCredibility from '../components/home/OperationalCredibility'
import BestFitWorkflows from '../components/home/BestFitWorkflows'
import ToolsStrip from '../components/home/ToolsStrip'
import CTASection from '../components/home/CTASection'
import Seo from '../components/Seo'

export default function HomeLegacy() {
  return (
    <>
      <Seo
        title="Ad On AI | Structured AI Enablement for Your People"
        description="Structured AI training and enablement for Australian businesses, with guided sessions, self-paced modules, implementation support, and monthly progress reporting."
        path="/home-legacy"
      />
      <Hero />
      <TrustStrip />

      <OfferSection />
      <SamePeopleMoreOutput />
      <HowItWorks />
      <DualOutcomesDiagram />
      <BestFitWorkflows />
      <OperationalCredibility />
      <ToolsStrip />
      <CTASection />
    </>
  )
}
