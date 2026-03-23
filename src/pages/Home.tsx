import Hero from '../components/home/Hero'
import TrustStrip from '../components/home/TrustStrip'
import BrandStatement from '../components/home/BrandStatement'
import OfferSection from '../components/home/OfferSection'
import SamePeopleMoreOutput from '../components/home/SamePeopleMoreOutput'
import HowItWorks from '../components/home/HowItWorks'
import DualOutcomesDiagram from '../components/DualOutcomesDiagram'
import OperationalCredibility from '../components/home/OperationalCredibility'
import ToolsStrip from '../components/home/ToolsStrip'
import FitSection from '../components/home/FitSection'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <BrandStatement />
      <OfferSection />
      <SamePeopleMoreOutput />
      <HowItWorks />
      <DualOutcomesDiagram />
      <OperationalCredibility />
      <ToolsStrip />
      <FitSection />
      <CTASection />
    </>
  )
}
