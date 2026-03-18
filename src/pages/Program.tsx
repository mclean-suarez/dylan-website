import { Link } from 'react-router-dom'
import { ArrowRight, Check, ClipboardList, Megaphone, Calculator, Layers } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ToolboxSection from '../components/ToolboxSection'
import ParticipantJourneyDiagram from '../components/ParticipantJourneyDiagram'
import FoundationCapabilities from '../components/FoundationCapabilities'
import MonthlyCycleDiagram from '../components/MonthlyCycleDiagram'

const enablementModules = [
  {
    number: '01',
    label: 'Month 1',
    title: 'Orientation and Grasping Your Possibilities with AI',
    body: 'Set up tools, learn safe AI usage, and identify where AI supports the participant\'s specific responsibilities.',
  },
  {
    number: '02',
    label: 'Month 2',
    title: 'Prompt Mastery',
    body: 'Build repeatable prompting methods, create templates for frequent tasks, and reduce rework through clearer instructions.',
  },
  {
    number: '03',
    label: 'Month 3',
    title: 'Applying AI to Your Workflow',
    body: 'Convert learning into practical, repeatable workflows. Integrate AI into real process steps and demonstrate application in-role.',
  },
  {
    number: 'E',
    label: 'Assessment',
    title: 'Readiness Check',
    body: 'Confirms your person can apply AI competently. Required before progressing into role-specific training.',
  },
]

const streams = [
  {
    name: 'Admin',
    icon: ClipboardList,
    bullets: ['Quicker turnaround on routine operational work', 'Better process consistency across daily execution'],
  },
  {
    name: 'Marketing',
    icon: Megaphone,
    bullets: ['Quicker drafting across recurring marketing tasks', 'More consistent quality across customer-facing output'],
  },
  {
    name: 'Finance',
    icon: Calculator,
    bullets: ['Faster processing across repetitive finance tasks', 'Greater accuracy and consistency in day-to-day support'],
  },
  {
    name: 'All-Rounder',
    icon: Layers,
    bullets: ['Greater versatility across admin, marketing, and finance work', 'Consistent execution as priorities shift week to week'],
  },
]

const scopeIn = [
  'Faster ways to handle repetitive work',
  'Hands-on help applying AI to real tasks your people do',
  'Repeatable AI workflows your team can actually use',
]

const supportSystem = [
  { number: '01', label: 'Identify' },
  { number: '02', label: 'Assist' },
  { number: '03', label: 'Apply' },
]

export default function Program() {
  const { ref: modulesRef, isVisible: modulesVisible } = useScrollAnimation()
  const { ref: scopeRef, isVisible: scopeVisible } = useScrollAnimation()
  const { ref: streamsRef, isVisible: streamsVisible } = useScrollAnimation()

  return (
    <>
      <PageHeader
        label="The Program"
        title="Structured AI Enablement for Your People"
        subtitle="A structured AI enablement program starting with a 3-month General Introductory Program. Monthly knowledge checks, progress reporting, and hands-on support when participants need it."
      />

      {/* Participant journey diagram */}
      <ParticipantJourneyDiagram />

      {/* Monthly cycle — orbital loop diagram */}
      <MonthlyCycleDiagram />

      {/* Enablement modules — with pathway progression */}
      <section ref={modulesRef} className="section-padding border-b border-stone-200 bg-stone-100/50">
        <div className="section-container">
          <div className={`mb-10 transition-all duration-500 ${modulesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">Enablement Modules</p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-tight">
              General Introductory Program
            </h2>
          </div>

          {/* Pathway progression indicator — desktop */}
          <div className={`hidden lg:block mb-8 transition-all duration-500 delay-100 ${modulesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className="relative">
              <div className="absolute top-3 left-[12%] right-[12%] h-px bg-stone-300" />
              <div className="grid grid-cols-4 gap-0">
                {enablementModules.map((mod, i) => (
                  <div key={mod.title} className="flex justify-center">
                    <div className={`w-6 h-6 flex items-center justify-center relative z-10 ${
                      i === enablementModules.length - 1 ? 'bg-brand-700' : 'bg-stone-900'
                    }`}>
                      <span className="font-mono text-[9px] font-bold text-white">{mod.number}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Module cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
            {enablementModules.map((mod, i) => (
              <div
                key={mod.title}
                className={`bg-white p-6 transition-all duration-500 ${modulesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className={`border-t-2 ${i === enablementModules.length - 1 ? 'border-brand-700' : 'border-stone-900'} pt-4 mb-3`}>
                  <span className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-[0.15em]">
                    {mod.label}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-stone-900 leading-snug mb-2">{mod.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{mod.body}</p>
              </div>
            ))}
          </div>

          {/* Pathway closing line */}
          <div className={`mt-6 flex items-center gap-3 transition-all duration-500 delay-400 ${modulesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className="h-px flex-1 bg-stone-300" />
            <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em] flex-shrink-0">
              Foundation → Readiness Check → Role-Specific Training
            </span>
            <div className="h-px flex-1 bg-stone-300" />
          </div>
        </div>
      </section>

      {/* Foundation capabilities */}
      <FoundationCapabilities />

      {/* Role streams */}
      <section ref={streamsRef} className="section-padding border-b border-stone-200">
        <div className="section-container">
          <div className={`mb-10 transition-all duration-500 ${streamsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">Training by Role</p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-tight">
              Role-Specific Training
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
            {streams.map((stream, i) => (
              <div
                key={stream.name}
                className={`bg-white p-6 transition-all duration-500 ${
                  streamsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <div className={`border-t-2 ${i === 0 ? 'border-brand-700' : 'border-stone-900'} pt-4 mb-4`}>
                  <div className="w-10 h-10 flex items-center justify-center border border-stone-200 mb-3">
                    <stream.icon className="w-4 h-4 text-brand-700" />
                  </div>
                </div>
                <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] mb-1 block">Role</span>
                <h3 className="text-lg font-bold text-stone-900 mb-4">{stream.name}</h3>
                <ul className="space-y-2">
                  {stream.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-700 flex-shrink-0 mt-1.5" />
                      <span className="text-xs text-stone-600 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Toolbox */}
      <ToolboxSection />

      {/* Scope — support types with system diagram */}
      <section ref={scopeRef} className="section-padding border-t border-stone-200">
        <div className="section-container">
          <div className={`mb-10 transition-all duration-500 ${scopeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">Scope</p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-tight">
              What Is Included
            </h2>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 transition-all duration-500 delay-100 ${scopeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            {/* Left: support types */}
            <div className="border border-stone-200 border-l-2 border-l-brand-700 p-6 md:p-8">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 mb-5">
                Types of hands-on support provided
              </h3>
              <div className="space-y-4">
                {scopeIn.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-700 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-700 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: support system diagram */}
            <div className="flex items-center">
              <div className="w-full">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 mb-5">
                  How support works
                </h3>
                <div className="relative">
                  {/* Connector line */}
                  <div className="hidden sm:block absolute top-5 left-[16%] right-[16%] h-px bg-stone-200" />
                  <div className="grid grid-cols-3 gap-4 sm:gap-0">
                    {supportSystem.map((step, i) => (
                      <div key={step.number} className="text-center">
                        <div className="flex justify-center mb-3">
                          <div className={`w-10 h-10 flex items-center justify-center relative z-10 ${
                            i === supportSystem.length - 1 ? 'bg-brand-700' : 'bg-stone-900'
                          }`}>
                            <span className="font-mono text-[10px] font-bold text-white">{step.number}</span>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] text-stone-600 uppercase tracking-[0.12em]">
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[10px] text-stone-400 mt-5 text-center">
                  Participant needs help → Ad On AI steps in → Applied in workflow
                </p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-500 delay-300 ${scopeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <Link to="/contact" className="btn-primary text-sm">
              Book a Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
