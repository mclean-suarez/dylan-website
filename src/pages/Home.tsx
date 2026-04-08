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
          <div className="relative overflow-auto border-[3px] border-[#4263EB] rounded-[15px]">
            <img
              src="/images/offices/training1.jpg"
              alt="Ad On Group team in a collaborative enablement session"
              className="w-full h-72 sm:h-96 lg:h-[480px] object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/70 to-transparent px-6 py-5">
              <span className="font-mono text-[10px] text-white/50 uppercase tracking-[0.15em]">
                Collaborative Enablement — Real Teams, Real Process
              </span>
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
