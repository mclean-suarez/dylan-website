import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import FoundationCapabilities from '../components/FoundationCapabilities'
import MonthlyCycleDiagram from '../components/MonthlyCycleDiagram'
import adOnAiLogo from '../images/adonailogo.webp'
import watermarkImage from '../images/watermark.webp'
import adminIcon from '../images/admin.png'
import marketingIcon from '../images/marketing.png'
import financeIcon from '../images/finance.png'
import allRounderIcon from '../images/all-rounder.png'

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
    label: 'Role-Specific Training',
    title: 'Mastering the Latest AI Tools for Their Role',
    body: 'After month 3, your person progresses beyond foundational skills and into mastering the latest and greatest AI tools released for their role.',
  },
]

const productScreens = [
  {
    src: '/images/program/content-example.png',
    alt: 'Ad On AI Academy Terminal module content example',
    label: 'Module Content',
    title: 'Engaging lessons that apply to their real tasks',
    body: "We use a range of learning methods within the Academy terminal to keep learning fun, informative and grounded in your person's role, including case studies, tutorials & demonstrations, videos, diagrams, Padlets and guided practical tasks.",
  },
  {
    src: '/images/program/learning-library2.png',
    alt: 'Ad On AI Academy Terminal learning library',
    label: 'Learning Library',
    title: "Staggered monthly content to ensure your person doesn't get left behind",
    body: "Every month aims to upgrade your person's AI skills, building on the progress they made in the last. We support them through a mix of live sessions, academy modules, and guided resources, helping them progress from basic to advanced use.",
  },
  {
    src: '/images/program/ai-tools-library.png',
    alt: 'Ad On AI Academy Terminal AI tools library',
    label: 'AI Tools Library',
    title: 'AI tools carefully curated by our team to match their real tasks',
    body: 'Our team filters out all the overhyped and less useful AI tools, ensuring your person spends their time mastering only the most innovative, impressive & appropriate to their role AI tools.',
  },
  {
    src: '/images/program/implementation-lab-example.png',
    alt: 'Ad On AI Academy Terminal implementation lab example',
    label: 'Implementation Lab',
    title: 'Assistance that steps out their new AI-powered tasks for them',
    body: "The lab is an AI feature which steps in to give your person a detailed & appropriate 'How to' guide with exact steps to enable them to implement AI into a specific task of theirs when they get stuck.",
    imageClassName: 'object-top',
  },
]

const learningRoadmap = [
  {
    number: '01',
    label: 'Month 1',
    title: 'Foundations',
    subtitle: 'Getting comfortable with AI and producing real outputs.',
    weeks: [
      {
        label: 'Week 1',
        title: 'What AI Is and How It Actually Works',
        body: 'Understand how AI and large language models work, where they are useful, and how they apply to the participant\'s real role and daily tasks.',
      },
      {
        label: 'Week 2',
        title: 'Getting Started With AI and Getting Better Results',
        body: 'Learn how to structure prompts, use real work materials for context, and improve outputs through follow-up and review.',
      },
      {
        label: 'Week 3',
        title: 'What Else AI Can Do and How to Apply It Across Your Work',
        body: 'Explore AI beyond basic chat, including structured reasoning, connected tools, and role-relevant workplace applications.',
      },
      {
        label: 'Week 4',
        title: 'Building and Finding AI Workflows',
        body: 'Start building simple AI workflows for repeatable tasks and identify where AI can replace slower manual work.',
      },
    ],
  },
  {
    number: '02',
    label: 'Month 2',
    title: 'Expanding the Toolkit',
    subtitle: 'Advanced techniques and connecting multiple AI tools.',
    weeks: [
      {
        label: 'Week 5',
        title: 'Advanced Prompting Techniques for Better Results',
        body: 'Improve output quality with stronger prompting, better instructions, and multi-step prompt sequences for more complex work.',
      },
      {
        label: 'Week 6',
        title: 'Expanding Your Toolkit: Connectors, Outputs and Skills',
        body: 'Use connectors, outputs, and reusable skills to help AI work across real data sources and produce more finished artefacts.',
      },
      {
        label: 'Week 7',
        title: 'The AI Tools Worth Knowing',
        body: 'Expand beyond a single tool and begin using role-relevant AI tools that reduce time spent on high-volume or technical work.',
      },
      {
        label: 'Week 8',
        title: 'Building a Connected AI Toolkit',
        body: 'Connect multiple AI tools into a practical system where the output of one supports the next.',
      },
    ],
  },
  {
    number: '03',
    label: 'Month 3',
    title: 'Automation',
    subtitle: 'Building real automations that run reliably without you.',
    weeks: [
      {
        label: 'Week 9',
        title: 'Understanding Automation and Identifying What to Build',
        body: 'Identify which tasks are worth automating, which are not, and where automation can create the biggest value in the participant\'s role.',
      },
      {
        label: 'Week 10',
        title: 'Building and Testing Your First Automation Workflow',
        body: 'Build and test a first automation workflow using real role-based data, with clear checkpoints for human review where needed.',
      },
      {
        label: 'Week 11',
        title: 'Finishing, Refining and Submitting Your Workflow',
        body: 'Refine, document, and complete an end-to-end workflow that runs reliably and can be repeated or handed off.',
      },
      {
        label: 'Week 12',
        title: 'Developing the Automation Habit and Thinking With AI',
        body: 'Build the habit of spotting automation opportunities and using AI as a thinking partner to test ideas, challenge assumptions, and define the next workflow to build.',
      },
    ],
  },
]

const programProofPoints = [
  {
    label: 'Staged Progression from Novice to Advanced AI User',
    body: "Designed to deliver progressive improvements to your staff member's AI skills every month, emulating the learning process our team went through ourselves.",
    accentClassName: 'border-l-brand-700',
  },
  {
    label: 'Built Around Their Tasks',
    body: 'All content is curated to help participants supercharge their own tasks with AI, not generic tips & tricks that won\'t apply to your staff like most "AI Experts" offer',
    accentClassName: 'border-l-stone-900',
  },
  {
    label: "Progress You'll Notice Before Seeing the Report",
    body: "Every month participants are supported to implement AI into a new task, meaning you'll notice their productivity before you even see our monthly progress report.",
    accentClassName: 'border-l-brand-700',
  },
]

const streams = [
  { name: 'Admin', icon: adminIcon },
  { name: 'Marketing', icon: marketingIcon },
  { name: 'Finance', icon: financeIcon },
  { name: 'EA/VA', icon: allRounderIcon },
]

const scopeIn = [
  'Using AI to speed up the tasks they already do every day',
  'Getting unstuck when AI isn\u2019t giving them the right results',
  'Building AI into their actual role, not just learning about it',
]

export default function Program() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref: modulesRef, isVisible: modulesVisible } = useScrollAnimation()
  const { ref: roadmapRef, isVisible: roadmapVisible } = useScrollAnimation()
  const { ref: scopeRef, isVisible: scopeVisible } = useScrollAnimation()
  const { ref: streamsRef, isVisible: streamsVisible } = useScrollAnimation()
  
  return (
    <>
      <PageHeader
        label="The Program"
        title="Structured AI Enablement for Your People"
        subtitle="A structured AI enablement program starting with a General Introduction to AI. Monthly knowledge &amp; skills checks, progress reporting, and hands-on implementation support when participants need it."
        artSrc="/images/brand/aistar.png"
        artAlt="Ad On AI star mark"
        artClassName="max-h-[280px] w-auto ml-auto"
      />

      {/* Monthly cycle — orbital loop diagram */}
      <MonthlyCycleDiagram />

      {/* Enablement modules — with pathway progression */}
      {/* Enablement modules — with cumulative hover */}
      <section ref={modulesRef} className="section-padding bg-stone-100/50 relative">
          <div className="absolute inset-0 items-center justify-end pointer-events-none hidden md:flex">
            <img
              src={adOnAiLogo}
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

          <div className={`grid grid-cols-1 xl:grid-cols-[0.88fr_1.12fr] gap-5 mb-10 transition-all duration-500 delay-75 ${modulesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className="bg-white p-6 sm:p-8 border border-stone-200 rounded-[20px] shadow-[0_8px_8px_0_rgba(66,99,235,0.5)]">
              <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] mb-4">
                Inside The Program
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
                A custom-built learning app with guided support
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-6">
                Ad On AI combines a custom built app called the Academy Terminal with guided modules & extensive resources, a comprehensive learning library updated to stay relevant to the always-changing AI landscape, curated AI tools, and an Implementation Lab built to help participants customise their AI usage to their work. Depending on the participant and the stage of the program, support can include live calls, guided sessions, and practical help implementing AI into daily tasks.
              </p>
              <div className={`border border-stone-200 border-l-2 ${programProofPoints[1].accentClassName} rounded-[12px] bg-stone-50/80 p-4`}>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] mb-2">{programProofPoints[1].label}</p>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {programProofPoints[1].body}
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-5 border border-stone-200 rounded-[20px] shadow-[0_8px_8px_0_rgba(66,99,235,0.5)]">
              <div className="relative overflow-hidden border-[3px] border-[#4263EB] rounded-[15px] h-[250px] sm:h-[320px] xl:h-[340px] bg-white mb-4">
                <img
                  src="/images/program/learning-library2.png"
                  alt="Ad On AI Academy Terminal landing page"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 to-transparent px-6 py-5">
                  <p className="font-mono text-[10px] text-white/50 uppercase tracking-[0.15em] mb-1">
                    Academy Terminal
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[programProofPoints[0], programProofPoints[2]].map((point) => (
                  <div
                    key={point.label}
                    className={`border border-stone-200 border-l-2 ${point.accentClassName} rounded-[12px] bg-stone-50/80 p-4`}
                  >
                    <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] mb-2">{point.label}</p>
                    <p className="text-sm text-stone-700 leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 transition-all duration-500 delay-150 ${modulesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            {productScreens.map((screen, i) => (
              <div
                key={screen.src}
                className={`bg-white p-4 sm:p-5 border border-stone-200 rounded-[20px] shadow-[0_8px_8px_0_rgba(66,99,235,0.5)] transition-transform duration-300 hover:scale-[1.02] ${
                  modulesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <div className="relative overflow-hidden border-[3px] border-[#4263EB] rounded-[15px] mb-5">
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    className={`w-full h-64 sm:h-72 object-cover ${screen.imageClassName ?? 'object-center'}`}
                  />
                </div>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] mb-2">
                  {screen.label}
                </p>
                <h3 className="text-base font-bold text-stone-900 leading-snug mb-2">
                  {screen.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {screen.body}
                </p>
              </div>
            ))}
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

                <h3
                  className={`text-sm font-bold leading-snug mb-2 transition-colors duration-300 ${
                    hoveredIndex !== null && i <= hoveredIndex ? 'text-brand-700' : 'text-stone-900'
                  }`}
                >
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
              Start Strong → Apply In Role → Master Role-Specific AI
            </span>
            <div className="h-px flex-1 bg-stone-300" />
          </div>
        </div>
      </section>

      {/* What they learn roadmap */}
      <section ref={roadmapRef} className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
          <img
            src={watermarkImage}
            alt="Hero"
            className="
              w-[100%] h-auto opacity-100
              md:w-[100%] md:opacity-100
              lg:w-[100% lg:opacity-100
              xl:w-[100%]
              translate-x-8 md:translate-x-0
              lg:-translate-x-[8rem]
              translate-y-[7rem]
              select-none
            "
          />
        </div>
        <div className="section-container relative z-10">
          <div className={`max-w-3xl mb-10 transition-all duration-500 ${roadmapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-400 uppercase tracking-[0.15em] mb-4">What They Learn</p>
            <div className="w-10 h-0.5 bg-brand-400 mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mb-4">
              The First 3 Months of Learning
            </h2>
            <p className="text-sm text-white/50 leading-relaxed max-w-2xl">
              The first 12 weeks are structured to build practical AI capability through real work, not abstract theory. Each week builds on the last and ends with applied output, so participants are learning skills they can actually use in their role.
            </p>
          </div>

          <div className={`grid grid-cols-1 xl:grid-cols-3 gap-5 mb-8 transition-all duration-500 delay-100 ${roadmapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            {learningRoadmap.map((month, monthIndex) => (
              <div
                key={month.label}
                className={`bg-white/5 border border-white/10 rounded-[24px] p-6 sm:p-7 shadow-[0_8px_20px_rgba(9,12,26,0.18)] backdrop-blur-sm transition-all duration-500 ${
                  roadmapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: `${(monthIndex + 1) * 90}ms` }}
              >
                <div className="border-t-2 border-brand-500 pt-4 mb-5">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-mono text-[10px] text-brand-400 uppercase tracking-[0.15em]">
                      {month.label}
                    </span>
                    <span className="font-mono text-xl font-bold text-white/10 tracking-tight">
                      {month.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight mb-2">
                    {month.title}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed">
                    {month.subtitle}
                  </p>
                </div>

                <div className="space-y-0">
                  {month.weeks.map((week, weekIndex) => (
                    <div
                      key={week.label}
                      className={`py-4 ${weekIndex < month.weeks.length - 1 ? 'border-b border-white/10' : ''}`}
                    >
                      <p className="font-mono text-[10px] text-brand-400 uppercase tracking-[0.14em] mb-2">
                        {week.label}
                      </p>
                      <h4 className="text-sm font-semibold text-white leading-snug mb-2">
                        {week.title}
                      </h4>
                      <p className="text-xs text-white/55 leading-relaxed">
                        {week.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-6 flex items-center gap-3 transition-all duration-500 delay-200 ${roadmapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className="h-px flex-1 bg-white/15" />
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.12em] flex-shrink-0">
              Month 1 → Month 2 → Month 3 → Role-Specific Training
            </span>
            <div className="h-px flex-1 bg-white/15" />
          </div>

          <div className={`mt-8 border border-white/10 border-l-2 border-l-brand-500 bg-white/5 rounded-[16px] p-5 sm:p-6 backdrop-blur-sm transition-all duration-500 delay-300 ${roadmapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-[10px] text-brand-400 uppercase tracking-[0.15em] mb-2">
              Further Content
            </p>
            <p className="text-sm text-white/80 leading-relaxed">
              We do not develop modules more than 3 months in advance. This keeps participants up to date with changes in AI, so we do not risk teaching outdated skills and tools. A roadmap for Weeks 13 and beyond is available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Foundation capabilities */}
      <FoundationCapabilities />

      {/* Role streams */}
      <section ref={streamsRef} className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
            <img
              src={watermarkImage}
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
        <div className="section-container relative z-10">
          <div className={`mb-10 transition-all duration-500 ${streamsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-400 uppercase tracking-[0.15em] mb-4">Training by Role</p>
            <div className="w-10 h-0.5 bg-brand-400 mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mb-4">
              Role-Specific Training
            </h2>
            <p className="text-sm text-white/50 leading-relaxed max-w-2xl">
              From month 4 onwards, training becomes role-specific and continues to evolve around the tasks, tools, and workflows each participant actually uses at work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {streams.map((stream, i) => (
              <div
                key={stream.name}
                className={`bg-white/5 p-6 transition-all duration-500 border border-white/10 rounded-[20px] shadow-[0_4px_4px_0_rgba(66,99,235,0.5)] backdrop-blur-sm ${
                  streamsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                } hover:scale-105 hover:border-brand-500 hover:shadow-[0_8px_8px_0_rgba(66,99,235,0.5)]`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <div>
                  <div className="w-20 h-20 flex items-center justify-center mb-3">
                    <img src={stream.icon} alt={stream.name} className="w-20 h-20 object-contain" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">{stream.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope — support types with system diagram */}
      <section ref={scopeRef} className="section-padding bg-stone-100/50 relative overflow-hidden">
        <div className="absolute inset-0 items-center justify-end pointer-events-none hidden md:flex">
            <img
              src={adOnAiLogo}
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
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">Scope</p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-tight">
              What Is Included
            </h2>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 transition-all duration-500 delay-100 ${scopeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            {/* Left: support types */}
            <div className="border border-stone-200 border-l-2 border-l-brand-700 p-6 md:p-8 bg-white rounded-[10px] shadow-[0_4px_4px_0_rgba(66,99,235,0.3)]">
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
              <div className="w-full border border-stone-200 border-l-2 border-l-stone-900 p-6 md:p-8 bg-white rounded-[10px] shadow-[0_4px_4px_0_rgba(66,99,235,0.3)]">
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
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
