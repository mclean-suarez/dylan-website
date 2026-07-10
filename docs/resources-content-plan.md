# Ad On AI — `/resources` Content Plan (approved topics)

Status: **topics locked, not yet authored.** SERP-grounded (seo-cluster, WebSearch methodology — DataForSEO not connected, so difficulty = SERP judgment, not exact AU volumes). Pillars in scope: **Explainers/glossary** + **Comparisons**.

## Build spec (when authoring)
- Location: `/resources` hub (index) + articles at `/resources/<slug>`.
- Build as **clean static HTML** (like the bio pages — no dc-runtime, absolute `/assets/...` paths so subdirectory URLs work), matching site design.
- Schema per article: `Article`/`BlogPosting` + `FAQPage`; **author = Dylan Bailey or Beau Robards, linked to their bio pages** (E-E-A-T loop).
- Each article: soft CTA to `/programs` (glossary) or `/programs` + `/ongoing-support` (comparisons), per link matrix.
- Add every article to `sitemap.xml`.
- Guardrails: **no fabricated stats / false authority**; Australian English; tool-agnostic.
- Strategic read: explainers = **AEO/citation play** (hyperscalers own the head terms, won't rank #1); comparisons = **rankable** for a new AU site (mid-tier competition).

## Articles

### Cornerstone (INCLUDED in plan — DO NOT WRITE YET)
- **AI for Small Business: A Plain-English Guide for Australian SMEs** — slug `/resources/ai-for-small-business` — query `ai for small business` — informational pillar (~2,800–3,500 words) — difficulty Med–High (banks/Deloitte rank) — hub anchor. Deferred by decision 2026-07-10.

### Batch 1 — write first (all 5 approved)
1. **AI Automation vs AI Workflow** — `/resources/ai-automation-vs-ai-workflow` — query `ai automation vs ai workflow` — Comparison — difficulty **Medium (genuinely rankable)** — AEO: rule-based vs judgement-based distinction + AU SME example; best snippet-bait. (Merges "what is an ai automation" + "what is an ai workflow".)
2. **AI Training vs Learning AI Yourself** — `/resources/ai-training-vs-learning-ai-yourself` — query `ai training vs learning it yourself` — Comparison — difficulty **Low–Med** — best strategic fit; validates the model without being a landing page.
3. **Claude vs ChatGPT for Australian Business** — `/resources/claude-vs-chatgpt-for-business` — query `claude vs chatgpt for business` — Comparison — difficulty Med (AU indie already ranks) — AEO: comparison table by real SME task types.
4. **What Is an AI Agent? (+ Agentic AI)** — `/resources/what-is-an-ai-agent` — query `what is an ai agent` — Explainer — difficulty High (AEO citation play) — merges "agentic ai" + "ai agents for business" as H2s; AU worked example.
5. **What Are Claude Skills?** — `/resources/what-are-claude-skills` — query `what are claude skills` — Explainer — difficulty Med, **no independent AU-SME competition** — unique brand fit, ties to "Certified Claude Experts".

### Batch 2 — later
6. **What Is Prompt Engineering?** — `/resources/what-is-prompt-engineering` — Explainer — High difficulty — doctrine showcase (non-technical reframe).
7. **ChatGPT vs Copilot vs Gemini vs Claude** — `/resources/chatgpt-vs-copilot-vs-gemini` — Comparison — High difficulty — folds in "best AI chatbot"; ecosystem-fit framing (M365→Copilot, Workspace→Gemini).
8. **What Is an LLM?** — `/resources/what-is-an-llm` — Explainer — Very High difficulty — build mainly for **topical authority / internal linking**, not traffic.
9. **Best AI Tools for Australian Small Business (2026)** — `/resources/best-ai-tools-for-australian-small-business` — Comparison — Very High difficulty — **only build if narrowed hard to AU-geo; otherwise skip.**

### Do NOT build (cannibalisation / too competitive)
- Standalone "best AI chatbot for business" (fold into #7).
- Separate "what is an AI workflow" / "what is an AI automation" (merged into #1).
- Separate "AI agent vs agentic AI" (merged into #4).

## Internal-link matrix
- **Hub ↔ every spoke** (bidirectional, mandatory).
- Spoke ↔ spoke: #4↔#5, #4↔#1, #6↔#4, #8↔#4/#6, #3↔#7, #3↔#5, #1↔#2.
- To core pages (contextual, near close, once): Explainers → `/programs`; Comparisons → `/programs` + `/ongoing-support`; #2 → both.
- Every spoke must have ≥3 incoming links (no orphans).

---

# Beyond articles — "build soon" list

Approved 2026-07-10, **not yet built.** Same build spec as articles (clean static HTML, matches design, schema, author bylines → bios where relevant, internal links, CTAs, AU English, no fabricated data). Media-based repurposing (webinar/podcast recordings, transcripts, video) is **excluded for now** — that content doesn't exist yet.

## 1. Interactive tools — client-side only, NO LLM connection
Pure vanilla JS (fits the de-runtimed static approach). Strong link/engagement magnets; each ends in a soft CTA to `/programs`.
- **AI Training ROI Calculator** — `/tools/ai-roi-calculator`. Inputs: team size, avg hourly cost, hours/week on automatable tasks, expected time-saved %. Output: hours + $ reclaimed per month/year (+ optional payback framing). All arithmetic in-browser. Schema: `WebApplication`. Guardrail: label outputs as estimates, no invented benchmarks.
- **AI Readiness Quiz** — `/tools/ai-readiness-quiz`. ~8–10 multiple-choice questions → readiness tier + tailored next steps. Client-side scoring, no backend. Optional soft email capture. Schema: `Quiz`/`WebApplication`.

## 2. Downloadable resources (lead magnets)
Hub page `/resources/toolkit` (or `/downloads`) listing them; PDFs in `/assets/downloads/`. Recommend **ungated** (or soft gate) for SEO. Directly aligned with the product (reusable prompt packs).
- Role-based prompt packs: "AI prompts for [finance / admin / marketing / operations / customer service]".
- Checklists: "AI rollout checklist for SMEs", "Is this task safe to hand to AI?".
- Playbook: "Getting your team started with AI in week one".
- Schema per item: `DigitalDocument`/`Article`. Content must be genuinely useful + accurate (no filler).

## 3. Glossary / knowledge base
`/resources/glossary` — short plain-English definition entries, each with an AU SME example. **AEO gold** (`DefinedTerm` / `DefinedTermSet` schema). Distinct from the explainer articles: glossary = short entries, articles = deep dives → cross-link (glossary term ↔ its deep article).
- Seed terms: AI agent, agentic AI, LLM, prompt, prompt engineering, RAG, context window, token, hallucination, multimodal, AI automation, AI workflow, Claude skill, MCP, orchestrator agent, fine-tuning.
- Structure decision at build time: one page w/ anchors vs one page per term (per-term pages = more indexable, more internal-link surface).

## 4. Original research / data report
`/resources/state-of-ai-australian-smes-2026` (+ downloadable PDF + a short shareable summary for backlinks). **Biggest authority + backlink play**; heavily cited by AI/press. `Dataset` + `Report` schema.
- **Hard dependency: real data.** Do NOT fabricate stats. Data sources to decide: (a) a small survey of the webinar audience / newsletter list, or (b) anonymised/aggregated program outcomes (e.g. hours saved, builds deployed per learner). Blocked until a data source is chosen.

## Suggested sequence
Articles Batch 1 → Glossary (fast, reuses article research) → ROI Calculator → Downloadables (prompt packs) → AI Readiness Quiz → Original research (once data source exists).
