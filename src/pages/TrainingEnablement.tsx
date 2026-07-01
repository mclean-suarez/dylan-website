import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, ChevronDown } from 'lucide-react'
import Seo from '../components/Seo'
import { scorecard, programFaqs } from '../data/program'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import {
  KEYS, CYAN, WARM,
  Aurora, BlueprintGrid, DustField, Grain, Vignette,
  MagneticButton, SpotlightCard, CountUp, BrowserFrame,
} from '../components/hero/visuals'

// ---------------------------------------------------------------------------
// AI Training & Enablement Program — full program page (first pass).
// Speaks to the boss buying for their team. Includes the complete 24-module
// curriculum and the learner scorecard. Dark "Blueprint × Liquid Chrome" theme.
// ---------------------------------------------------------------------------

const glanceChips = ['3-month core program', '24 hands-on modules', 'Two modules a week', '20+ builds per person', 'Role-specific', 'Lifetime academy access']

const glanceStats: Array<{ to?: number; suffix?: string; static?: string; label: string }> = [
  { to: 3, label: 'Months, core program' },
  { to: 24, label: 'Hands-on modules' },
  { to: 2, label: 'Hours a week' },
  { static: '∞', label: 'Lifetime academy access' },
]

const format = [
  { title: 'Live build sessions', body: 'Supervised, hands-on sessions where staff ship real work with a trainer in the room to float, unblock and pressure-test.' },
  { title: 'Self-paced modules', body: 'Structured modules in the Academy Terminal they work through around their normal workload.' },
  { title: 'Applied to their role', body: 'Every module ends in a real deliverable built on the tasks they actually do — not a quiz.' },
  { title: 'Hands-on support', body: 'When someone gets stuck, we step in and build the fix with them.' },
  { title: 'Monthly progress report', body: 'A clear read for leadership on what each person learned and actually applied.' },
  { title: 'Stays current after the program', body: 'Lifetime academy access, a monthly trends webinar, and a community of podcasts and a newsletter keep skills sharp as AI moves.' },
]

const journey = [
  { tag: 'Month 1', title: 'Foundations — get fluent', body: 'How AI really works and how to drive it with confidence — from their first prompt to their first working, verified workflow.', outcome: 'A working end-to-end workflow for a real recurring task.' },
  { tag: 'Month 2', title: 'Automating your tasks — get your time back', body: 'Reusable skills, connected tools and a Claude automation that runs real tasks alongside them — on a schedule.', outcome: 'A Cowork automation and a scheduled task running on a clock.' },
  { tag: 'Month 3', title: 'Agentic AI — go autonomous', body: 'Design, build and run agents that pursue a goal across many steps — assembled into one coherent system.', outcome: 'Orchestrated agents working as one agentic operating system.' },
]

// Module titles & descriptions per the official Curriculum Brochure (24 modules,
// two a week). Descriptions condensed for the cards but kept true to the brochure.
const curriculum = [
  {
    month: 'Month 1',
    theme: 'Foundations — get fluent',
    summary: 'How AI really works and how to drive it with confidence — from their first prompt to their first working, verified AI-powered workflow.',
    outcome: 'A reusable, engineered master prompt, a live Project for their main workstream, and a working end-to-end workflow for a real recurring task.',
    modules: [
      { n: '01', title: 'What AI Is & the Rules of Engagement', body: 'How models really work, why we run on Claude, what a prompt actually is — and the client data that never goes in a chat.' },
      { n: '02', title: 'Context Engineering', body: 'Treat the context window as a finite budget: keep it clean, one job per chat, and a prompt that works every time.' },
      { n: '03', title: 'Metaprompting & Hallucination Detection', body: 'Get AI to write its own prompts, use examples as your strongest quality lever, and catch it when it bluffs.' },
      { n: '04', title: 'Persistent Context Infrastructure', body: 'Set context once and reuse it forever — Memory, custom instructions, Projects and clean reference files.' },
      { n: '05', title: 'Multimodal Capability & Verification', body: 'Put screenshots, images and long documents in; get real files out — and check the output against the real thing.' },
      { n: '06', title: 'MCP & the Connected Second Brain', body: 'Connect Claude to Gmail, Outlook and Drive so it works inside your tools instead of waiting on copy-paste.' },
      { n: '07', title: 'Build the AI-Powered Workflow', body: 'A supervised build session where they assemble their first real, end-to-end workflow with a trainer beside them.' },
      { n: '08', title: 'Evals & the Audit Loop', body: 'Check, repeat and trust a workflow so it holds up every single time it runs — then present it.' },
    ],
  },
  {
    month: 'Month 2',
    theme: 'Automating Your Tasks — get your time back',
    summary: 'Turn what they’ve learned into reusable skills, connected tools and a Claude automation that runs real tasks alongside them — on a schedule.',
    outcome: 'Their own starter library of role skills, a configured and tested Claude Cowork automation, and a scheduled task running on a clock.',
    modules: [
      { n: '09', title: 'Training Your Claude — Intro to Skills', body: 'A skill is a recipe you reuse instead of re-prompting. Find, install and run the skills built for their role.' },
      { n: '10', title: 'Making Your Own Skills', body: 'Capture how they already do a job into a skill Claude invokes automatically — then spin up a small library.' },
      { n: '11', title: 'Inter-tool Cooperation', body: 'Hand work cleanly from one tool to the next, so one tool’s output becomes a clean input to another — no breakage.' },
      { n: '12', title: 'How Automated Work Actually Works', body: 'Crossing from AI helping you to the task running on its own: rule- vs AI-based automation, triggers, and what’s worth automating.' },
      { n: '13', title: 'Why Automations Break — & What Makes One Trustworthy', body: 'How automations degrade through brittleness or drift, why errors compound, and the autonomy dial — in, on, or out of the loop.' },
      { n: '14', title: 'Claude Cowork I — Your First Major Automation', body: 'Set up a dedicated workspace, load their toolkit, wire persistent connections and run their first real task.' },
      { n: '15', title: 'Claude Cowork II — Expand & Build', body: 'Point the automation at new use cases, put it on a schedule, and widen its scope to its useful limit.' },
      { n: '16', title: 'Scheduled Tasks + Claude in Chrome', body: 'Put a recurring job on a clock and let Claude act on live web pages — then watch it run without you.' },
    ],
  },
  {
    month: 'Month 3',
    theme: 'Agentic AI — go autonomous',
    summary: 'Design, build, deploy and orchestrate agents that pursue a goal across many steps and tool calls — then assemble them into one coherent system.',
    outcome: 'Hardened, orchestrated agents working as one agentic operating system, a documented system map, and an impact record of time reclaimed.',
    modules: [
      { n: '17', title: 'Intro to Agentic AI', body: 'What makes an agent an agent, the ladder from automation to true agent, and when one is worth it — or overkill.' },
      { n: '18', title: 'Agent Design', body: 'Scope, execution spec, autonomy, observability and verification — plus splitting a job across a lead agent and specialists.' },
      { n: '19', title: 'Agentic Infrastructure', body: 'Use Claude Code to build and Claude Console to deploy, with credential vaults, environments and the APIs the agent needs.' },
      { n: '20', title: 'Agentic Building & Deployment', body: 'Six stages from writing the code to a successful first live run — with webhook alerts and run logs in place.' },
      { n: '21', title: 'Autonomous Iteration', body: 'Instrument, observe, diagnose, fix and redeploy — the loop that makes an agent measurably better over time.' },
      { n: '22', title: 'Hardening & Agent Supervision', body: 'Build an eval set and run production safely: cost control, monitoring, alerting, least-privilege permissions and an audit trail.' },
      { n: '23', title: 'Multi-Agent Orchestration', body: 'Coordinate specialists with an orchestrator agent using chain, command-and-control and fan-out / fan-in patterns.' },
      { n: '24', title: 'Your Agentic Operating System', body: 'Bring every agent, connector and schedule into one coherent system — and measure the hours and volume it gives back.' },
    ],
  },
]

const platformFeatures = [
  { title: 'Guided modules', body: '24 structured modules, grounded in your team’s real tasks.' },
  { title: 'Curated tool library', body: 'We filter the hype — they master only what’s useful for their role.' },
  { title: 'Implementation Lab', body: 'Stuck? It walks them through applying AI to their exact task.' },
  { title: 'Knowledge checks', body: 'Each month they show what they learned and how they applied it.' },
  { title: 'Progress reporting', body: 'A clear monthly read on what’s been learned and applied.' },
  { title: 'Permanent access', body: 'They keep the academy for good, and stay current as tools change.' },
]

const roles = ['Admin & operations', 'Marketing', 'Finance & accounts', 'EA / VA support', 'Customer service', 'Sales']

const faqs = [
  { q: 'Do our staff need to be technical?', a: 'No. The program starts from first principles and is built around the everyday tasks your people already do. They learn by applying AI to their real work, with a trainer on hand when they get stuck.' },
  { q: 'How much time does it take each week?', a: 'About two hours a week — two short modules that pair a concept with a hands-on build, applied inside the work they’re already doing, so it rarely feels like “extra”.' },
  { q: 'What do we get as the business?', a: 'A monthly progress report on what each person learned and applied, the working builds they create, and a documented record of the hours reclaimed and work now handled automatically.' },
  ...programFaqs,
]

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation(0.12)
  return (
    <div ref={ref} className={`hf-reveal ${isVisible ? 'is-in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function SectionLabel({ children, color = CYAN }: { children: React.ReactNode; color?: string }) {
  return (
    <>
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color }}>{children}</p>
      <div className="w-10 h-0.5 mb-6" style={{ background: color }} />
    </>
  )
}

export default function TrainingEnablement() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      <Seo
        title="AI Training & Enablement Program | Ad On AI"
        description="An ongoing, guided AI training & enablement program for the staff of Australian SMEs. 24 hands-on modules across three months — from AI foundations to deploying their own AI agents, all built around their real role."
        path="/training-and-enablement"
      />
      <style>{KEYS}</style>

      <div className="bg-black">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden" style={{ background: '#04060C' }}>
          <Aurora />
          <BlueprintGrid />
          <DustField />
          <div className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: 140, background: `linear-gradient(180deg, transparent, ${CYAN}22, transparent)`, animation: 'hfScan 12s linear infinite', mixBlendMode: 'screen' }} />
          <div className="absolute" style={{ top: 14, left: 16, color: 'rgba(111,155,255,0.55)' }}>+</div>
          <div className="absolute" style={{ top: 14, right: 16, color: WARM, textShadow: `0 0 10px ${WARM}99` }}>+</div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 pt-36 pb-20">
            <Reveal>
              <SectionLabel>AI Training &amp; Enablement</SectionLabel>
              <h1 className="text-white font-bold max-w-4xl" style={{ fontSize: 'clamp(2.4rem,4.6vw,4rem)', lineHeight: 0.98, letterSpacing: '-0.02em' }}>
                Turn your team into confident, capable AI users.
              </h1>
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.65)' }}>
                An ongoing, guided program that gets your staff genuinely good at AI — using it in the work they already do, building automations that save hours, and deploying agents that run the repetitive jobs for them. Built around their real role, with the results reported to you every month.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton variant="solid" as={Link} to="/contact">BOOK A CALL <ArrowRight className="w-4 h-4" /></MagneticButton>
                <MagneticButton variant="ghost" as="a" href="#curriculum">SEE THE CURRICULUM <ArrowUpRight className="w-4 h-4" /></MagneticButton>
              </div>
              <div className="mt-10 flex flex-wrap gap-2.5">
                {glanceChips.map((c) => (
                  <span key={c} className="rounded-full border border-white/12 bg-white/[0.03] px-3.5 py-1.5 text-[12px]" style={{ color: 'rgba(213,224,255,0.7)' }}>{c}</span>
                ))}
              </div>
            </Reveal>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== AT A GLANCE (stat band) ===== */}
        <section className="relative overflow-hidden border-y border-white/[0.06]" style={{ background: '#04060c' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(70% 120% at 50% 0%, rgba(111,155,255,0.12), transparent 70%)' }} />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-14 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
            {glanceStats.map((s) => (
              <div key={s.label} className="text-center lg:text-left lg:px-6 lg:border-l first:border-l-0" style={{ borderColor: 'rgba(111,155,255,0.14)' }}>
                <div className="text-white font-bold tracking-tight" style={{ fontSize: 'clamp(2.2rem,3.6vw,3.2rem)', lineHeight: 1 }}>
                  {s.static ? s.static : <CountUp to={s.to!} suffix={s.suffix} />}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] mt-3" style={{ color: 'rgba(111,155,255,0.7)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY / THE PROBLEM ===== */}
        <section className="relative overflow-hidden" style={{ background: '#05070D' }}>
          <Aurora warm={false} />
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <SectionLabel>The difference</SectionLabel>
              <h2 className="text-white font-bold" style={{ fontSize: 'clamp(1.9rem,3.4vw,3rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
                Most AI training gets watched once and forgotten.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed max-w-md" style={{ color: 'rgba(213,224,255,0.62)' }}>
                A one-off course or a folder of videos doesn&rsquo;t change how anyone works. People watch it, nod along, and go back to doing things the way they always have.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed max-w-md" style={{ color: 'rgba(213,224,255,0.62)' }}>
                Ours is different. It&rsquo;s ongoing, it&rsquo;s hands-on, and it&rsquo;s built around the actual work your people do — so they don&rsquo;t just learn about AI, they use it every day. You&rsquo;ll see it in their output before you see it in a report.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  ['Generic AI course', 'Watched once, forgotten by Friday. Generic examples that don’t fit your business.', 'rgba(255,255,255,0.12)'],
                  ['The Ad On AI program', 'Ongoing, applied to their real role, with hands-on support and monthly proof of progress.', CYAN],
                ].map(([title, body, accent]) => (
                  <div key={title} className="rounded-[18px] border border-white/10 bg-white/[0.03] p-6" style={{ borderTop: `2px solid ${accent}` }}>
                    <h3 className="text-white font-bold text-sm mb-3">{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(213,224,255,0.65)' }}>{body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== HOW IT WORKS / FORMAT ===== */}
        <section className="relative overflow-hidden" style={{ background: '#04060C' }}>
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <Reveal>
              <SectionLabel>How it works</SectionLabel>
              <h2 className="text-white font-bold max-w-2xl" style={{ fontSize: 'clamp(1.9rem,3.4vw,3rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
                A managed program, not a video library
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.6)' }}>
                Every month runs on the same rhythm — guided learning, real application, and a clear read on progress.
              </p>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {format.map((f, i) => (
                <Reveal key={f.title} delay={i * 60}>
                  <SpotlightCard className="block h-full rounded-[18px] border border-white/10 bg-white/[0.03] p-6 overflow-hidden">
                    <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(213,224,255,0.58)' }}>{f.body}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== JOURNEY ===== */}
        <section className="relative overflow-hidden" style={{ background: '#05070D' }}>
          <Aurora warm={false} />
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <Reveal>
              <SectionLabel>The arc</SectionLabel>
              <h2 className="text-white font-bold max-w-3xl" style={{ fontSize: 'clamp(1.9rem,3.4vw,3rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
                Three months. From using AI well to building their own agents.
              </h2>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {journey.map((m, i) => (
                <Reveal key={m.tag} delay={i * 80}>
                  <div className="relative h-full rounded-[20px] border border-white/10 bg-white/[0.03] p-7">
                    <div className="font-mono text-5xl font-bold tracking-tight mb-5" style={{ color: 'rgba(111,155,255,0.18)' }}>{String(i + 1).padStart(2, '0')}</div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] mb-2" style={{ color: WARM }}>{m.tag}</p>
                    <h3 className="text-white font-bold text-lg mb-2">{m.title}</h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(213,224,255,0.6)' }}>{m.body}</p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] mb-1.5" style={{ color: 'rgba(111,155,255,0.6)' }}>By the end</p>
                      <p className="text-sm leading-snug" style={{ color: 'rgba(213,224,255,0.78)' }}>{m.outcome}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== FULL CURRICULUM ===== */}
        <section id="curriculum" className="relative overflow-hidden scroll-mt-24" style={{ background: '#04060C' }}>
          <BlueprintGrid />
          <Aurora />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <Reveal>
              <SectionLabel>The full curriculum</SectionLabel>
              <h2 className="text-white font-bold max-w-3xl" style={{ fontSize: 'clamp(1.9rem,3.4vw,3rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
                24 modules, every one ending in something that works
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.6)' }}>
                Two modules a week — each pairs a concept with a hands-on build, so it lands the same week it&rsquo;s taught. Built and refreshed continuously so it never teaches outdated tools.
              </p>
            </Reveal>

            <div className="mt-12 space-y-12">
              {curriculum.map((month, mi) => (
                <Reveal key={month.month} delay={mi * 60}>
                  <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-8 lg:gap-12">
                    {/* month header */}
                    <div className="lg:sticky lg:top-28 self-start">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] mb-3" style={{ color: WARM }}>{month.month}</p>
                      <h3 className="text-white font-bold text-xl mb-3 leading-snug">{month.theme}</h3>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(213,224,255,0.55)' }}>{month.summary}</p>
                      <div className="rounded-[14px] border border-white/10 p-4" style={{ background: 'rgba(111,155,255,0.06)', borderLeft: `2px solid ${CYAN}` }}>
                        <p className="font-mono text-[9px] uppercase tracking-[0.16em] mb-1.5" style={{ color: 'rgba(111,155,255,0.7)' }}>Outcome</p>
                        <p className="text-sm leading-snug" style={{ color: 'rgba(213,224,255,0.85)' }}>{month.outcome}</p>
                      </div>
                    </div>
                    {/* modules */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {month.modules.map((m) => (
                        <SpotlightCard key={m.n} className="rounded-[16px] border border-white/10 bg-white/[0.03] p-5 overflow-hidden">
                          <div className="flex items-baseline gap-3 mb-2">
                            <span className="font-mono text-sm font-bold" style={{ color: CYAN }}>{m.n}</span>
                            <h4 className="text-white font-semibold text-[15px] leading-snug">{m.title}</h4>
                          </div>
                          <p className="text-[13px] leading-relaxed pl-8" style={{ color: 'rgba(213,224,255,0.55)' }}>{m.body}</p>
                        </SpotlightCard>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={100}>
              <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.14em] flex items-center gap-3" style={{ color: 'rgba(111,155,255,0.55)' }}>
                <span className="w-8 h-px" style={{ background: 'rgba(111,155,255,0.3)' }} />
                We don&rsquo;t build modules more than three months ahead — so we never teach outdated AI.
              </p>
            </Reveal>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== PLATFORM ===== */}
        <section className="relative overflow-hidden" style={{ background: '#05070D' }}>
          <Aurora warm={false} />
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <SectionLabel>The platform</SectionLabel>
              <h2 className="text-white font-bold" style={{ fontSize: 'clamp(1.9rem,3.4vw,3rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
                The Academy Terminal
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.62)' }}>
                Everything runs through our own custom learning app — built to keep your staff learning, applying, and improving, with you across their progress the whole way.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {platformFeatures.map((f) => (
                  <div key={f.title}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      <h3 className="text-white font-semibold text-sm">{f.title}</h3>
                    </div>
                    <p className="text-[13px] leading-relaxed pl-6" style={{ color: 'rgba(213,224,255,0.55)' }}>{f.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative">
                <div className="absolute -inset-6 pointer-events-none" style={{ background: 'radial-gradient(60% 60% at 50% 40%, rgba(111,155,255,0.22), transparent 70%)', filter: 'blur(20px)' }} />
                <div className="relative" style={{ transform: 'perspective(1400px) rotateY(6deg) rotateX(2deg)' }}>
                  <BrowserFrame src="/images/program/learning-library2.png" alt="The Ad On AI Academy Terminal — learning library" label="Academy Terminal" />
                </div>
              </div>
            </Reveal>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== BUILT AROUND EVERY ROLE ===== */}
        <section className="relative overflow-hidden" style={{ background: '#04060C' }}>
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <Reveal>
              <SectionLabel>Built around every role</SectionLabel>
              <h2 className="text-white font-bold max-w-2xl" style={{ fontSize: 'clamp(1.9rem,3.4vw,3rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
                Trained for the job they actually do
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.6)' }}>
                The same strong foundation, applied to each person&rsquo;s real responsibilities. Everything they build is for their own role — not a generic demo.
              </p>
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              {roles.map((r, i) => (
                <Reveal key={r} delay={i * 40}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-sm" style={{ color: 'rgba(213,224,255,0.78)' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: CYAN }} />{r}
                  </span>
                </Reveal>
              ))}
              <Reveal delay={roles.length * 40}>
                <span className="inline-flex items-center rounded-full px-4 py-2.5 text-sm font-mono uppercase tracking-[0.12em] text-[11px]" style={{ color: WARM }}>+ mapped to your team</span>
              </Reveal>
            </div>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== SCORECARD ===== */}
        <section className="relative overflow-hidden" style={{ background: '#05070D' }}>
          <Aurora />
          <BlueprintGrid />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(70% 90% at 50% 0%, rgba(111,155,255,0.14), transparent 70%)' }} />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <Reveal className="text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: CYAN }}>What they walk away with</p>
              <h2 className="text-white font-bold mx-auto max-w-3xl" style={{ fontSize: 'clamp(2rem,3.8vw,3.3rem)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                Every staff member finishes with <span style={{ color: CYAN }}>20+ working AI builds</span> — for their own job.
              </h2>
              <p className="mt-5 max-w-2xl mx-auto text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.62)' }}>
                At a minimum, each person you enrol walks away having personally built and deployed:
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-12 grid sm:grid-cols-2 gap-x-6 gap-y-px rounded-[20px] overflow-hidden border border-white/10 bg-white/[0.02]">
                {scorecard.map(([n, label]) => (
                  <div key={label} className="flex items-center gap-5 p-5 sm:p-6" style={{ background: '#05070D' }}>
                    <span className="font-mono font-bold tracking-tight flex-shrink-0 w-20 text-right" style={{ color: CYAN, fontSize: 'clamp(1.8rem,3vw,2.4rem)', lineHeight: 1 }}>{n}</span>
                    <span className="w-px self-stretch" style={{ background: 'rgba(111,155,255,0.15)' }} />
                    <span className="text-sm leading-snug" style={{ color: 'rgba(213,224,255,0.85)' }}>{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150} className="text-center">
              <p className="mt-8 text-sm max-w-2xl mx-auto" style={{ color: 'rgba(213,224,255,0.55)' }}>
                All tied to their real role — plus a documented record of the hours reclaimed and the work now handled automatically.
              </p>
            </Reveal>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== ONGOING SUPPORT ===== */}
        <section className="relative overflow-hidden" style={{ background: '#04060C' }}>
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <Reveal>
              <SectionLabel>After the program</SectionLabel>
              <h2 className="text-white font-bold max-w-3xl" style={{ fontSize: 'clamp(1.9rem,3.4vw,3rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
                Your staff finish with tools they use every day — and stay current
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.6)' }}>
                The three months end, but AI keeps moving. Ongoing support keeps your team sharp long after they finish — so the skills they built only get more valuable.
              </p>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: 'A monthly support hour', body: 'Direct time with our AI specialists each month, for queries and the trickier workflows your team takes on.' },
                { title: 'Monthly trends webinar', body: 'A session on the latest AI trends, product releases and skills — plus a community of business-application podcasts and a newsletter.' },
                { title: 'Lifetime academy access', body: 'Keep every module, template and skill. Your team revisits the learning academy whenever they need it — for good.' },
              ].map((f, i) => (
                <Reveal key={f.title} delay={i * 60}>
                  <SpotlightCard className="block h-full rounded-[18px] border border-white/10 bg-white/[0.03] p-6 overflow-hidden">
                    <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(213,224,255,0.58)' }}>{f.body}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <Link to="/webinars-and-masterclasses" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: CYAN }}>
                Explore ongoing support <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== FAQ ===== */}
        <section className="relative overflow-hidden" style={{ background: '#04060C' }}>
          <BlueprintGrid />
          <div className="relative z-10 max-w-[820px] mx-auto px-6 sm:px-10 py-24">
            <Reveal>
              <SectionLabel>Questions</SectionLabel>
              <h2 className="text-white font-bold" style={{ fontSize: 'clamp(1.9rem,3.4vw,3rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
                The practical stuff
              </h2>
            </Reveal>
            <div className="mt-10">
              {faqs.map((f, i) => (
                <div key={f.q} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-start justify-between gap-4 py-6 text-left group">
                    <span className="text-base font-semibold text-white transition-colors group-hover:text-[#6F9BFF]">{f.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} style={{ color: CYAN }} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-sm leading-relaxed pr-8" style={{ color: 'rgba(213,224,255,0.7)' }}>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Grain opacity={0.1} />
        </section>

        {/* ===== CTA ===== */}
        <section className="relative overflow-hidden" style={{ background: '#04060C' }}>
          <Aurora />
          <BlueprintGrid />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(111,155,255,0.20), transparent 70%)' }} />
          <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-10 py-28 text-center">
            <Reveal>
              <h2 className="text-white font-bold mx-auto" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', lineHeight: 0.98, letterSpacing: '-0.02em' }}>
                Get your team started.
              </h2>
              <p className="mt-6 max-w-lg mx-auto text-[15px] leading-relaxed" style={{ color: 'rgba(213,224,255,0.62)' }}>
                Tell us about your business and the roles you&rsquo;d enrol, and we&rsquo;ll show you exactly how the program would work for your team.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <MagneticButton variant="solid" as={Link} to="/contact">BOOK A CALL <ArrowRight className="w-4 h-4" /></MagneticButton>
              </div>
            </Reveal>
          </div>
          <Vignette />
          <Grain opacity={0.1} />
        </section>
      </div>
    </>
  )
}
