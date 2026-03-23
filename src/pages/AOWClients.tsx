import { Link } from 'react-router-dom'
import { ArrowRight, Users, Layers, TrendingUp, Shield, Eye, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ProductivityLiftCalculator from '../components/home/ProductivityLiftCalculator'
import ProblemsSection from '../components/home/ProblemsSection'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const benefits = [
  {
    icon: TrendingUp,
    title: 'More Output Per Person',
    description: 'Your Ad On Workforce team members learn AI techniques specific to their role, producing more work in the same hours without adding headcount.',
  },
  {
    icon: Layers,
    title: 'Better Quality, Less Rework',
    description: 'Structured prompts, templates, and workflow improvements reduce errors, improve consistency, and cut the rework that eats your margin.',
  },
  {
    icon: Eye,
    title: 'Full Visibility via Progress Report',
    description: 'Each month you receive a clear Progress Report showing what was learned, what was applied, and how participants are progressing. No guesswork about value.',
  },
  {
    icon: Shield,
    title: 'Built-In Accountability',
    description: 'Monthly knowledge checks and demonstrated workflow application mean learning is verified and applied, not just consumed.',
  },
  {
    icon: Users,
    title: 'Optional Call Attendance',
    description: 'Your representative can attend the monthly live enablement call to stay across the process and see how participants are progressing.',
  },
  {
    icon: Clock,
    title: 'Seamless Integration',
    description: 'We\u2019re part of the same ecosystem. Ad On AI layers directly onto your existing Ad On Workforce arrangement with no separate vendor management.',
  },
]

const workflowColumns = [
  {
    title: 'General Admin',
    items: [
      'Inbox handling and email follow-up',
      'Scheduling and diary coordination',
      'Document and file management',
    ],
  },
  {
    title: 'Finance',
    items: [
      'Accounts payable and receivable processing',
      'Debtor follow-up and credit control',
      'Financial reporting packs',
    ],
  },
  {
    title: 'Marketing',
    items: [
      'Email funnel management',
      'Social media scheduling and content ops',
      'Design collateral and asset generation',
    ],
  },
]

const attachSteps = [
  { number: '01', title: 'Your Ad On Workforce Team', accent: false },
  { number: '+', title: 'Ad On AI Enablement', accent: true },
  { number: '=', title: 'Higher Output, Measured', accent: false },
]

export default function AOWClients() {
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation()
  const { ref: howRef, isVisible: howVisible } = useScrollAnimation()
  const { ref: rolesRef, isVisible: rolesVisible } = useScrollAnimation()

  return (
    <>
      <PageHeader
        label="For Ad On Workforce Clients"
        title="AI Training and Enablement for Your Ad On Workforce Staff"
        subtitle="Already using Ad On Workforce? Ad On AI adds structured AI enablement, accountability, and hands-on support to your existing arrangement."
      />

      {/* Enablement image strip */}
      <section className="border-b border-stone-200">
        <div className="section-container py-0">
          <div className="relative overflow-hidden border-x border-stone-200">
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

      {/* Built for Both Sides — moved from homepage */}
      <ProblemsSection />

      {/* Benefits */}
      <section ref={benefitsRef} className="section-padding border-b border-stone-200">
        <div className="section-container">
          <div className={`mb-12 transition-all duration-500 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">Why Add AI Enablement</p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight">
              Why This Makes Your Ad On Workforce Team More Valuable
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`bg-white p-6 flex items-start gap-4 transition-all duration-500 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <benefit.icon className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-stone-900 mb-1.5">{benefit.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it attaches — visual system map */}
      <section ref={howRef} className="section-padding border-b border-stone-200">
        <div className="section-container">
          <div className={`mb-10 transition-all duration-500 ${howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">How It Fits</p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-tight">
              A Simple Add-On to Your Existing Arrangement
            </h2>
          </div>

          {/* Attach model — visual system diagram */}
          <div
            className={`transition-all duration-500 delay-100 ${howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
          >
            {/* Desktop: horizontal attach flow */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Connector line */}
                <div className="absolute top-[52px] left-[16%] right-[16%] h-px bg-stone-300" />

                <div className="grid grid-cols-3 gap-0">
                  {attachSteps.map((step, i) => (
                    <div
                      key={step.number}
                      className="relative text-center"
                      style={{ transitionDelay: `${(i + 1) * 120}ms` }}
                    >
                      <div className="flex justify-center mb-5">
                        <div className={`w-[104px] h-[104px] flex flex-col items-center justify-center relative z-10 border ${
                          step.accent
                            ? 'bg-brand-700 border-brand-700'
                            : 'bg-stone-900 border-stone-900'
                        }`}>
                          <span className={`font-mono text-2xl font-bold ${
                            step.accent ? 'text-white' : 'text-white'
                          }`}>
                            {step.number}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-sm font-semibold text-stone-900">{step.title}</h3>
                    </div>
                  ))}
                </div>

                {/* Directional arrows */}
                <div className="absolute top-[46px] left-[33%] w-3 h-3 border-t border-r border-stone-400 rotate-45" />
                <div className="absolute top-[46px] left-[63%] w-3 h-3 border-t border-r border-stone-400 rotate-45" />
              </div>
            </div>

            {/* Mobile: vertical attach flow */}
            <div className="lg:hidden">
              {attachSteps.map((step, i) => (
                <div key={step.number} className="flex gap-4 mb-1">
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-14 flex items-center justify-center flex-shrink-0 ${
                      step.accent ? 'bg-brand-700' : 'bg-stone-900'
                    }`}>
                      <span className="font-mono text-lg font-bold text-white">{step.number}</span>
                    </div>
                    {i < attachSteps.length - 1 && (
                      <div className="w-px flex-1 bg-stone-200 my-1" />
                    )}
                  </div>
                  <div className="pb-5 flex items-center">
                    <h3 className="text-sm font-semibold text-stone-900">{step.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary line */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-stone-300" />
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em] flex-shrink-0">
                Same team. Same structure. Meaningfully more output.
              </span>
              <div className="h-px flex-1 bg-stone-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Best-fit workflows */}
      <section ref={rolesRef} className="section-padding">
        <div className="section-container">
          <div className={`mb-10 transition-all duration-500 ${rolesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">Best-Fit Workflows</p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-tight">
              Where Embedded Support Sees the Biggest Lift
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200 mb-8">
            {workflowColumns.map((col, i) => (
              <div
                key={col.title}
                className={`bg-white p-6 transition-all duration-500 ${rolesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <div className={`border-t-2 ${i === 0 ? 'border-brand-700' : 'border-stone-900'} pt-4 mb-5`}>
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400">{col.title}</h3>
                </div>
                <div className="space-y-3">
                  {col.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-brand-700 flex-shrink-0 mt-1.5" />
                      <span className="text-sm text-stone-700 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`transition-all duration-500 delay-300 ${rolesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800 transition-colors group"
            >
              Map your embedded workflows
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Productivity calculator */}
      <ProductivityLiftCalculator />
    </>
  )
}
