import { Link } from 'react-router-dom'
<<<<<<< Updated upstream
import { ArrowRight, Users, Layers, TrendingUp, Shield, Wrench, Clock, BarChart3 } from 'lucide-react'
=======
import { ArrowRight, Users, Layers, TrendingUp, Wrench, Clock, BarChart3 } from 'lucide-react'
>>>>>>> Stashed changes
import PageHeader from '../components/PageHeader'
import ProductivityLiftCalculator from '../components/home/ProductivityLiftCalculator'
import ProblemsSection from '../components/home/ProblemsSection'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const benefits = [
  {
    icon: TrendingUp,
    title: 'More Output Per Person',
    description: 'Your Ad On Workforce team members learn AI techniques matched to their role, producing more work in the same hours.',
  },
  {
    icon: Layers,
    title: 'Higher Quality Work, Done Faster',
    description: 'Your person learns to use AI to produce cleaner, more consistent output in less time \u2014 better results without working longer hours.',
  },
  {
    icon: Wrench,
    title: 'AI Applied to Their Actual Work',
    description: 'Your person doesn\u2019t just learn about AI \u2014 they implement it into the tasks they do every day, with hands-on help when they need it.',
  },
  {
    icon: BarChart3,
    title: 'Monthly Progress Report',
    description: 'Each month you receive a clear report showing what was learned, what was applied, and how your person is progressing.',
  },
  {
    icon: Clock,
    title: 'Less Time Lost to Low-Value Tasks',
    description: 'AI handles the grunt work so your person spends more of their hours on the tasks that actually move your business forward.',
  },
  {
    icon: Users,
    title: 'Your Team Keeps Up as AI Changes',
    description: 'AI tools evolve fast. Your person stays current through ongoing training instead of falling behind after a one-off course.',
  },
]

const workflowColumns = [
  {
    title: 'General Admin',
    items: [
      'Processing and responding to client emails faster',
      'Automating repetitive data entry and record-keeping',
      'Automating scheduling and diary coordination',
    ],
  },
  {
    title: 'Finance',
    items: [
      'Faster accounts payable and receivable processing',
      'Automated debtor follow-up and payment chasing',
      'Reconciling accounts and catching errors faster',
    ],
  },
  {
    title: 'Marketing',
    items: [
      'Producing more content without adding hours',
      'Faster campaign setup and scheduling',
      'Creating high quality design assets at speed',
    ],
  },
]

const attachSteps = [
  { number: '01', title: 'Your Ad On Workforce Person', accent: false },
  { number: '+', title: 'New AI Skills', accent: true },
  { number: '=', title: 'More Work Gets Done For Your Business', accent: false },
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
        subtitle="Already using Ad On Workforce? Ad On AI gives your person hands-on support to implement AI into their daily tasks to make them more productive for you."
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
      <section ref={benefitsRef} className="bg-navy-950 section-padding">
        <div className="section-container">
          <div className={`mb-12 transition-all duration-500 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-400 uppercase tracking-[0.15em] mb-4">Why Add AI Enablement</p>
            <div className="w-10 h-0.5 bg-brand-400 mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Why This Makes Your Ad On Workforce Team More Valuable
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`bg-navy-950 p-6 flex items-start gap-4 transition-all duration-500 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <benefit.icon className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{benefit.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it attaches — visual system map */}
      <section ref={howRef} className="section-padding">
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
                Same person. New skills. More work gets done.
              </span>
              <div className="h-px flex-1 bg-stone-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Best-fit workflows */}
      <section ref={rolesRef} className="bg-navy-950 section-padding">
        <div className="section-container">
          <div className={`mb-10 transition-all duration-500 ${rolesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-400 uppercase tracking-[0.15em] mb-4">Where AI Makes a Difference</p>
            <div className="w-10 h-0.5 bg-brand-400 mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
              The Daily Tasks Where AI Has the Most Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-8">
            {workflowColumns.map((col, i) => (
              <div
                key={col.title}
                className={`bg-navy-950 p-6 transition-all duration-500 ${rolesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <div className={`border-t-2 ${i === 0 ? 'border-brand-700' : 'border-white/20'} pt-4 mb-5`}>
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">{col.title}</h3>
                </div>
                <div className="space-y-3">
                  {col.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-brand-700 flex-shrink-0 mt-1.5" />
                      <span className="text-sm text-white/60 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`transition-all duration-500 delay-300 ${rolesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors group"
            >
              Book a Strategy Call
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
