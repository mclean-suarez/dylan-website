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
