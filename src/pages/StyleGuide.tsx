import { ArrowRight, Bot, Sparkles, Zap, ShieldCheck } from 'lucide-react'

// ---------------------------------------------------------------------------
// Ad On AI — Design System v1 (proposal / living style tile)
// Direction: cool pure-white base · indigo structure · electric-blue pop ·
// warm coral/sand/teal accents · monospace labels · navy "dark moments".
// This page is self-contained and additive — it does not touch live pages.
// ---------------------------------------------------------------------------

type Swatch = { name: string; hex: string; cls: string; dark?: boolean }

const neutrals: Swatch[] = [
  { name: 'white', hex: '#ffffff', cls: 'bg-white border border-slate-200' },
  { name: 'slate-50', hex: '#f8fafc', cls: 'bg-slate-50' },
  { name: 'slate-100', hex: '#f1f5f9', cls: 'bg-slate-100' },
  { name: 'slate-200', hex: '#e2e8f0', cls: 'bg-slate-200' },
  { name: 'slate-400', hex: '#94a3b8', cls: 'bg-slate-400' },
  { name: 'slate-500', hex: '#64748b', cls: 'bg-slate-500', dark: true },
  { name: 'slate-700', hex: '#334155', cls: 'bg-slate-700', dark: true },
  { name: 'slate-900', hex: '#0f172a', cls: 'bg-slate-900', dark: true },
]

const indigo: Swatch[] = [
  { name: 'brand-50', hex: '#f0f4ff', cls: 'bg-brand-50' },
  { name: 'brand-100', hex: '#dbe4ff', cls: 'bg-brand-100' },
  { name: 'brand-400', hex: '#748ffc', cls: 'bg-brand-400' },
  { name: 'brand-600', hex: '#4c6ef5', cls: 'bg-brand-600', dark: true },
  { name: 'brand-700', hex: '#6F9BFF', cls: 'bg-brand-700', dark: true },
  { name: 'brand-900', hex: '#364fc7', cls: 'bg-brand-900', dark: true },
]

const electric: Swatch[] = [
  { name: 'electric-100', hex: '#dbeefe', cls: 'bg-electric-100' },
  { name: 'electric-300', hex: '#93d2ff', cls: 'bg-electric-300' },
  { name: 'electric-500', hex: '#3aa5ff', cls: 'bg-electric-500', dark: true },
  { name: 'electric-600', hex: '#0099ff', cls: 'bg-electric-600', dark: true },
  { name: 'electric-800', hex: '#0a60b0', cls: 'bg-electric-800', dark: true },
]

const warm: Swatch[] = [
  { name: 'coral-500', hex: '#de8363', cls: 'bg-coral-500', dark: true },
  { name: 'sand-500', hex: '#edbf86', cls: 'bg-sand-500' },
  { name: 'teal-500', hex: '#67bcb7', cls: 'bg-teal-500', dark: true },
  { name: 'grape-500', hex: '#7c5ac5', cls: 'bg-grape-500', dark: true },
]

const navy: Swatch[] = [
  { name: 'navy-800', hex: '#1a1f36', cls: 'bg-navy-800', dark: true },
  { name: 'navy-900', hex: '#0f1225', cls: 'bg-navy-900', dark: true },
  { name: 'navy-950', hex: '#0a0c1a', cls: 'bg-navy-950', dark: true },
]

function SwatchRow({ title, note, items }: { title: string; note: string; items: Swatch[] }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="text-sm font-bold text-slate-900">{title}</h3>
        <p className="font-mono text-[11px] text-slate-400">{note}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {items.map((s) => (
          <div key={s.name} className="rounded-[10px] overflow-hidden border border-slate-200">
            <div className={`h-16 ${s.cls}`} />
            <div className="px-2.5 py-2 bg-white">
              <p className="text-[11px] font-medium text-slate-700 leading-tight">{s.name}</p>
              <p className="font-mono text-[10px] text-slate-400 uppercase">{s.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Section({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="py-12 border-t border-slate-200">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-electric-600 mb-2">
        {label}
      </p>
      <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-8">{title}</h2>
      {children}
    </section>
  )
}

export default function StyleGuide() {
  return (
    <div className="bg-white">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-16">
        {/* Masthead */}
        <header className="mb-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-3">
            Ad On AI · Design System v1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight max-w-2xl">
            A crisp, warm system for a mass-market AI brand.
          </h1>
          <p className="mt-4 text-slate-500 max-w-2xl leading-relaxed">
            Pure-white canvas, indigo structure, an electric-blue pop, and warm coral / sand / teal
            accents — with monospace labels and navy “dark moments.” Built to feel premium like Beam
            and human like Kinso.
          </p>
        </header>

        {/* Colour */}
        <Section label="Foundations" title="Colour">
          <div className="space-y-8">
            <SwatchRow title="Neutrals" note="cool · pure white base" items={neutrals} />
            <SwatchRow title="Indigo — brand structure" note="primary brand" items={indigo} />
            <SwatchRow title="Electric — the pop" note="CTAs · highlights · glows" items={electric} />
            <SwatchRow title="Warm accents" note="illustration · category coding" items={warm} />
            <SwatchRow title="Navy — dark moments" note="dark cards & sections" items={navy} />
          </div>
        </Section>

        {/* Typography */}
        <Section label="Foundations" title="Typography">
          <div className="space-y-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
              Eyebrow / mono label — Space Mono
            </p>
            <div className="space-y-3">
              <p className="text-5xl font-bold text-slate-900 tracking-tight leading-none">
                Display — Inter Bold
              </p>
              <p className="text-3xl font-bold text-slate-900 tracking-tight">Heading 1</p>
              <p className="text-xl font-semibold text-slate-900">Heading 2</p>
              <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
                Body — clear, slightly cool grey for long-form reading. The quick brown fox jumps over
                the lazy dog, then deploys eight AI agents before lunch.
              </p>
              <p className="text-sm text-slate-400">Small / caption text</p>
            </div>
          </div>
        </Section>

        {/* Buttons & controls */}
        <Section label="Components" title="Buttons & controls">
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-brand-700 text-white text-sm font-medium hover:bg-brand-800 transition-colors">
              Primary <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-electric-600 text-white text-sm font-medium hover:bg-electric-700 transition-colors shadow-[0_8px_24px_-8px_rgba(0,153,255,0.6)]">
              Electric CTA <Zap className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] border border-slate-300 text-slate-700 text-sm font-medium hover:border-slate-400 hover:text-slate-900 transition-colors">
              Secondary
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-brand-700 text-sm font-medium hover:bg-brand-50 transition-colors">
              Ghost <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </Section>

        {/* Pills & labels */}
        <Section label="Components" title="Pills & category chips">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500 bg-slate-100 rounded-full px-3 py-1.5">
              Mono label
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-electric-700 bg-electric-100 rounded-full px-3 py-1.5">
              Sales
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-coral-700 bg-coral-100 rounded-full px-3 py-1.5">
              Operations
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-teal-700 bg-teal-100 rounded-full px-3 py-1.5">
              Finance
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-grape-700 bg-grape-100 rounded-full px-3 py-1.5">
              Marketing
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-sand-700 bg-sand-100 rounded-full px-3 py-1.5">
              HR
            </span>
          </div>
        </Section>

        {/* Cards */}
        <Section label="Components" title="Cards — light surface + dark accent">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Light feature card */}
            <div className="rounded-[20px] bg-white border border-slate-200 p-6 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.4)] hover:shadow-[0_18px_40px_-18px_rgba(66,99,235,0.35)] transition-shadow">
              <div className="w-11 h-11 rounded-[12px] bg-brand-50 border border-brand-100 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-brand-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Light feature card</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                The default surface — crisp white, cool border, soft elevation that warms to indigo on
                hover.
              </p>
            </div>

            {/* Warm gradient card */}
            <div className="relative rounded-[20px] overflow-hidden border border-slate-200 p-6">
              <div className="absolute -top-10 -right-8 h-40 w-40 rounded-full bg-coral-400/40 blur-3xl" />
              <div className="absolute -bottom-12 -left-6 h-40 w-40 rounded-full bg-sand-400/50 blur-3xl" />
              <div className="relative">
                <div className="w-11 h-11 rounded-[12px] bg-white border border-coral-100 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-coral-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Warm accent card</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Coral and sand glows add the human warmth that sets you apart from cold-blue AI sites.
                </p>
              </div>
            </div>

            {/* Dark agent card (Beam-style) */}
            <div className="relative flex flex-col overflow-hidden rounded-[20px] bg-navy-900 border border-navy-800 shadow-[0_18px_50px_-20px_rgba(10,12,26,0.65)]">
              <div className="relative h-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-brand-950 to-navy-900" />
                <div className="absolute -top-10 right-4 h-36 w-36 rounded-full bg-electric-500/40 blur-3xl" />
                <div className="absolute top-1 right-20 h-24 w-24 rounded-full bg-brand-400/30 blur-2xl" />
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-navy-900 to-transparent" />
                <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.12em] text-electric-100 bg-white/10 border border-white/15 rounded-full px-2.5 py-1">
                  Sales
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <Bot className="w-4 h-4 text-electric-300" />
                  <h3 className="text-base font-bold text-white">Dark agent card</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The premium “dark moment” — used for agents and feature highlights.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Sample hero */}
        <Section label="Patterns" title="Hero — light, warm, electric">
          <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white px-8 py-16 md:px-14 md:py-20">
            <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-electric-300/40 blur-3xl" />
            <div className="absolute top-10 -right-10 h-56 w-56 rounded-full bg-coral-300/40 blur-3xl" />
            <div className="absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-sand-300/40 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-electric-600 mb-4">
                AI Training & Enablement
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.05]">
                Get your team genuinely good at AI.
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                An ongoing, guided program built around the real work your staff already do — training, not theory.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-brand-700 text-white text-sm font-medium hover:bg-brand-800 transition-colors">
                  Explore the program <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] border border-slate-300 text-slate-700 text-sm font-medium hover:border-slate-400 transition-colors">
                  Book a call
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* Dark section */}
        <Section label="Patterns" title="Dark feature section — the “moment”">
          <div className="relative overflow-hidden rounded-[24px] bg-navy-950 px-8 py-16 md:px-14 md:py-20">
            <div className="absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-electric-600/25 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-electric-300 mb-4">
                Why Ad On AI
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Dark sections punctuate the journey and make the light pages feel even crisper.
              </h2>
              <p className="mt-5 text-slate-300 leading-relaxed">
                Reserve navy + electric for the handful of moments that deserve weight — never the whole
                page.
              </p>
              <div className="mt-8">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-white text-slate-900 text-sm font-medium hover:bg-slate-100 transition-colors">
                  See the proof <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
