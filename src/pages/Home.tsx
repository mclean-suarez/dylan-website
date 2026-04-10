import Hero from '../components/home/Hero'
import TrustStrip from '../components/home/TrustStrip'
import BrandStatement from '../components/home/BrandStatement'
import OfferSection from '../components/home/OfferSection'
import SamePeopleMoreOutput from '../components/home/SamePeopleMoreOutput'
import HowItWorks from '../components/home/HowItWorks'
import DualOutcomesDiagram from '../components/DualOutcomesDiagram'
import OperationalCredibility from '../components/home/OperationalCredibility'
import BestFitWorkflows from '../components/home/BestFitWorkflows'
import ToolsStrip from '../components/home/ToolsStrip'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <BrandStatement />

      {/* Enablement image strip */}
      <section className="border-b border-stone-200 pb-14">
        <div className="section-container py-0">
          <div className="mx-auto w-full max-w-[612px]">
            <div className="relative aspect-square overflow-hidden rounded-full border-[4px] border-[#4263EB] bg-white">
              <img
                src="/images/offices/training1.jpg"
                alt="Ad On Group team in a collaborative enablement session"
                className="h-full w-full object-cover object-[62%_42%] scale-[1.08]"
              />
            </div>
          </div>
        </div>
      </section>

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
