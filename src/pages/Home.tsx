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

export default function Home() {
  return (
    <>
      <Seo
        title="Ad On AI | Structured AI Enablement for Your People"
        description="Structured AI training and enablement for Australian businesses, with guided sessions, self-paced modules, implementation support, and monthly progress reporting."
        path="/"
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
