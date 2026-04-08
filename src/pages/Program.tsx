import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
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
  { name: 'Admin', icon: 'src/images/admin.png' },
  { name: 'Marketing', icon: 'src/images/marketing.png' },
  { name: 'Finance', icon: 'src/images/finance.png' },
  { name: 'All-Rounder', icon: 'src/images/all-rounder.png' },
]

const scopeIn = [
  'Using AI to speed up the tasks they already do every day',
  'Getting unstuck when AI isn\u2019t giving them the right results',
  'Building AI into their actual role, not just learning about it',
]

export default function Program() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
      {/* Enablement modules — with cumulative hover */}
      <section ref={modulesRef} className="section-padding bg-stone-100/50 relative">
          <div className="absolute inset-0 items-center justify-end pointer-events-none hidden md:flex">
            <img
              src="/src/images/adonailogo.webp" // adjust path
              alt="Hero"
              className="
                w-[400px] h-auto opacity-100
                md:w-[400px] md:opacity-100
                lg:w-[400px] lg:opacity-100
                xl:w-[400px]
                translate-x-8 md:translate-x-0
                lg:-translate-x-[13rem]
                translate-y-[7rem]
                select-none
              "
            />
        </div>
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
              <div className="absolute top-3 left-[12%] right-[12%] h-px transition-colors duration-300 bg-stone-300" />
              <div className="grid grid-cols-4 gap-0">
                {enablementModules.map((mod, i) => (
                  <div key={mod.title} className="flex justify-center">
                    <div
                      className={`w-6 h-6 flex items-center justify-center relative z-10 rounded-full transition-all duration-300
                        ${hoveredIndex !== null && i <= hoveredIndex ? 'bg-brand-700 scale-110' : 'bg-stone-900'}
                      `}
                    >
                      <span className={`font-mono text-[9px] font-bold transition-colors duration-300 ${
                        hoveredIndex !== null && i <= hoveredIndex ? 'text-white' : 'text-white/50'
                      }`}>
                        {mod.number}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Module cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {enablementModules.map((mod, i) => (
              <div
                key={mod.title}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-white p-6 border border-stone-200 transition-all duration-300 rounded-[20px] shadow-[0_4px_4px_0_rgba(66,99,235,0.5)]
                  transform ${hoveredIndex !== null && i <= hoveredIndex ? 'scale-105 shadow-[0_8px_8px_0_rgba(66,99,235,0.5)]' : ''}
                  ${modulesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
                `}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                {/* Top line */}
                <div className={`border-t-2 pt-4 mb-3 transition-colors duration-300 ${
                  hoveredIndex !== null && i <= hoveredIndex ? 'border-brand-700' : 'border-stone-900'
                }`}>
                  <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                    hoveredIndex !== null && i <= hoveredIndex ? 'text-brand-700' : 'text-stone-400'
                  }`}>
                    {mod.label}
                  </span>
                </div>

                <h3 className="text-sm font-bold leading-snug mb-2 transition-colors duration-300 ${
                  hoveredIndex !== null && i <= hoveredIndex ? 'text-brand-700' : 'text-stone-900'
                }">
                  {mod.title}
                </h3>
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
      <section ref={streamsRef} className="section-padding bg-stone-100/50 relative">
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
            <img
              src="/src/images/watermark.webp" // adjust path
              alt="Hero"
              className="
                w-[100%] h-auto opacity-100
                md:w-[100%] md:opacity-100
                lg:w-[100% lg:opacity-100
                xl:w-[100%]
                translate-x-8 md:translate-x-0
                lg:-translate-x-[10rem]
                translate-y-[9rem]
                select-none
              "
            />
        </div>
        <div className="section-container">
          <div className={`mb-10 transition-all duration-500 ${streamsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">Training by Role</p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-tight">
              Role-Specific Training
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {streams.map((stream, i) => (
              <div
                key={stream.name}
                className={`bg-white p-6 transition-all duration-500 border border-stone-200 rounded-[20px] shadow-[0_4px_4px_0_rgba(66,99,235,0.5)] ${
                  streamsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                } hover:scale-105 hover:shadow-[0_8px_8px_0_rgba(66,99,235,0.5)]`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <div>
                  <div className="w-20 h-20 flex items-center justify-center mb-3">
                    <img src={stream.icon} alt={stream.name} className="w-20 h-20 object-contain" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-stone-900">{stream.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope — support types with system diagram */}
      <section ref={scopeRef} className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 items-center justify-end pointer-events-none hidden md:flex">
            <img
              src="/src/images/adonailogo.webp" // adjust path
              alt="Hero"
              className="
                w-[400px] h-auto opacity-100
                md:w-[400px] md:opacity-100
                lg:w-[400px] lg:opacity-100
                xl:w-[400px]
                translate-x-8 md:translate-x-0
                lg:-translate-x-[13rem]
                translate-y-[7rem]
                select-none
              "
            />
        </div>
        <div className="section-container">
          <div className={`mb-10 transition-all duration-500 ${scopeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-400 uppercase tracking-[0.15em] mb-4">Scope</p>
            <div className="w-10 h-0.5 bg-brand-400 mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
              What Is Included
            </h2>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 transition-all duration-500 delay-100 ${scopeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            {/* Left: support types */}
<<<<<<< Updated upstream
            <div className="border border-stone-200 border-l-2 border-l-brand-700 p-6 md:p-8">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 mb-5">
=======
            <div className="border border-white/10 border-l-2 border-l-brand-500 p-6 md:p-8 bg-white/5 rounded-[10px] backdrop-blur-sm">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 mb-5">
>>>>>>> Stashed changes
                What your person gets help with
              </h3>
              <div className="space-y-4">
                {scopeIn.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: how support works */}
            <div className="flex items-center">
<<<<<<< Updated upstream
              <div className="w-full border border-stone-200 border-l-2 border-l-stone-900 p-6 md:p-8">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 mb-5">
                  How it works
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
=======
              <div className="w-full border border-white/10 border-l-2 border-l-white/30 p-6 md:p-8 bg-white/5 rounded-[10px] backdrop-blur-sm">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 mb-5">
                  How it works
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
>>>>>>> Stashed changes
                  When your person needs help using AI in their work, we step in directly with real, hands-on support from someone who knows the tools.
                </p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-500 delay-300 ${scopeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <Link to="/contact" className="btn-primary-on-dark text-sm">
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
