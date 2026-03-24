import { Link } from 'react-router-dom'
import { ArrowRight, Check, ClipboardList, Megaphone, Calculator, Layers } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ToolboxSection from '../components/ToolboxSection'

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
  { name: 'Admin', icon: ClipboardList },
  { name: 'Marketing', icon: Megaphone },
  { name: 'Finance', icon: Calculator },
  { name: 'All-Rounder', icon: Layers },
]

const scopeIn = [
  'Using AI to speed up the tasks they already do every day',
  'Getting unstuck when AI isn\u2019t giving them the right results',
  'Building AI into their actual role, not just learning about it',
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
        subtitle="A structured AI enablement program starting with a General Introduction to AI. Monthly knowledge &amp; skills checks, progress reporting, and hands-on implementation support when participants need it."
      />

      {/* Monthly cycle — orbital loop diagram */}
      <MonthlyCycleDiagram />

      {/* Enablement modules — with pathway progression */}
      <section ref={modulesRef} className="section-padding bg-stone-100/50">
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
      <section ref={streamsRef} className="section-padding">
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
                <h3 className="text-lg font-bold text-stone-900">{stream.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Toolbox */}
      <ToolboxSection />

      {/* Scope — support types with system diagram */}
      <section ref={scopeRef} className="section-padding">
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
                What your person gets help with
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

            {/* Right: how support works */}
            <div className="flex items-center">
              <div className="w-full border border-stone-200 border-l-2 border-l-stone-900 p-6 md:p-8">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 mb-5">
                  How it works
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  When your person needs help using AI in their work, we step in directly with real, hands-on support from someone who knows the tools.
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
