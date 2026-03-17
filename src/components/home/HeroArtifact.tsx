/**
 * HeroArtifact — Swiss Modernism 2.0 Systems Poster
 *
 * A structured, editorial, grid-led abstract composition that serves as
 * the primary visual identity device for the Ad On AI hero section.
 *
 * Communicates: structure, systems thinking, workflow logic, enablement,
 * operational intelligence, human-guided AI, premium credibility.
 */
export default function HeroArtifact({ className = '' }: { className?: string }) {
  // Palette tokens (aligned with tailwind config)
  const navy = '#0a0c1a'
  const navyLight = '#1a1f36'
  const accent = '#4263eb'    // brand-700
  const accentSoft = '#748ffc' // brand-400
  const rule = 'rgba(255,255,255,0.06)'
  const ruleMid = 'rgba(255,255,255,0.10)'
  const ruleStrong = 'rgba(255,255,255,0.15)'
  const textGhost = 'rgba(255,255,255,0.08)'
  const textFaint = 'rgba(255,255,255,0.15)'
  const textSubtle = 'rgba(255,255,255,0.25)'
  const textMuted = 'rgba(255,255,255,0.35)'

  return (
    <svg
      viewBox="0 0 560 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ================================================================
          LAYER 0 — Grid scaffold
          ================================================================ */}
      {/* Vertical grid lines */}
      {[80, 160, 240, 320, 400, 480].map((x) => (
        <line key={`vg-${x}`} x1={x} y1={0} x2={x} y2={640} stroke={rule} strokeWidth={0.5} />
      ))}
      {/* Horizontal grid lines */}
      {[80, 160, 240, 320, 400, 480, 560].map((y) => (
        <line key={`hg-${y}`} x1={0} y1={y} x2={560} y2={y} stroke={rule} strokeWidth={0.5} />
      ))}

      {/* ================================================================
          LAYER 1 — Primary structural blocks
          ================================================================ */}

      {/* Large anchor block — top-left quadrant */}
      <rect x={80} y={80} width={240} height={200} fill={navyLight} stroke={ruleMid} strokeWidth={0.5} />

      {/* Accent fill block — emphasis zone */}
      <rect x={80} y={80} width={240} height={4} fill={accent} opacity={0.9} />

      {/* Inner sub-module — top-left */}
      <rect x={96} y={104} width={72} height={56} fill="none" stroke={ruleStrong} strokeWidth={0.5} />
      <rect x={96} y={104} width={72} height={1} fill={accentSoft} opacity={0.4} />

      {/* Inner data block */}
      <rect x={184} y={104} width={120} height={56} fill="rgba(255,255,255,0.02)" stroke={rule} strokeWidth={0.5} />

      {/* Inner horizontal rules — ledger lines */}
      {[120, 132, 144].map((y) => (
        <line key={`ledger-${y}`} x1={192} y1={y} x2={296} y2={y} stroke={rule} strokeWidth={0.5} />
      ))}

      {/* Stacked rows inside anchor */}
      {[180, 210, 240].map((y, i) => (
        <g key={`row-${y}`}>
          <rect x={96} y={y} width={208} height={22} fill={i === 1 ? 'rgba(66,99,235,0.06)' : 'rgba(255,255,255,0.015)'} stroke={rule} strokeWidth={0.5} />
          {/* Row content placeholder lines */}
          <line x1={104} y1={y + 11} x2={140 + i * 20} y2={y + 11} stroke={textFaint} strokeWidth={1} />
          <line x1={240} y1={y + 11} x2={280 - i * 8} y2={y + 11} stroke={rule} strokeWidth={1} />
        </g>
      ))}

      {/* ================================================================
          LAYER 2 — Right column modules
          ================================================================ */}

      {/* Tall vertical block — right side */}
      <rect x={360} y={120} width={120} height={280} fill={navyLight} stroke={ruleMid} strokeWidth={0.5} />

      {/* Section markers inside tall block */}
      {[0, 1, 2, 3].map((i) => (
        <g key={`section-${i}`}>
          <rect x={376} y={140 + i * 64} width={88} height={44} fill={i === 0 ? 'rgba(66,99,235,0.08)' : 'rgba(255,255,255,0.02)'} stroke={rule} strokeWidth={0.5} />
          {/* Module indicator dot */}
          <circle cx={384} cy={148 + i * 64} r={2} fill={i === 0 ? accent : textSubtle} />
          {/* Module line placeholders */}
          <line x1={392} y1={148 + i * 64} x2={440 + (i % 2) * 16} y2={148 + i * 64} stroke={i === 0 ? accentSoft : textFaint} strokeWidth={0.75} opacity={0.6} />
          <line x1={392} y1={162 + i * 64} x2={448 - i * 8} y2={162 + i * 64} stroke={rule} strokeWidth={0.75} />
        </g>
      ))}

      {/* Small accent square — signal point */}
      <rect x={496} y={120} width={24} height={24} fill={accent} opacity={0.12} stroke={accent} strokeWidth={0.5} strokeOpacity={0.4} />
      <rect x={502} y={126} width={12} height={12} fill={accent} opacity={0.25} />

      {/* ================================================================
          LAYER 3 — Flow connectors and process lines
          ================================================================ */}

      {/* Horizontal connector: anchor block → right block */}
      <line x1={320} y1={180} x2={360} y2={180} stroke={accentSoft} strokeWidth={0.75} opacity={0.35} />
      <circle cx={360} cy={180} r={2} fill={accentSoft} opacity={0.5} />

      {/* Vertical flow line — left margin */}
      <line x1={40} y1={100} x2={40} y2={540} stroke={ruleStrong} strokeWidth={0.5} strokeDasharray="2 6" />

      {/* Flow anchors on vertical line */}
      {[100, 200, 320, 440, 540].map((y, i) => (
        <g key={`anchor-${y}`}>
          <circle cx={40} cy={y} r={2.5} fill={i === 2 ? accent : 'transparent'} stroke={i === 2 ? accent : textSubtle} strokeWidth={0.75} />
          {i === 2 && <line x1={48} y1={y} x2={80} y2={y} stroke={accent} strokeWidth={0.5} opacity={0.3} />}
        </g>
      ))}

      {/* ================================================================
          LAYER 4 — Bottom composition
          ================================================================ */}

      {/* Wide data bar — lower section */}
      <rect x={80} y={340} width={240} height={80} fill="rgba(255,255,255,0.02)" stroke={ruleMid} strokeWidth={0.5} />

      {/* Data bar internals — metric columns */}
      {[0, 1, 2].map((i) => (
        <g key={`metric-${i}`}>
          <rect x={88 + i * 76} y={352} width={68} height={56} fill={i === 1 ? 'rgba(66,99,235,0.04)' : 'transparent'} stroke={rule} strokeWidth={0.5} />
          {/* Bar chart abstraction */}
          <rect x={100 + i * 76} y={392 - (12 + i * 10)} width={8} height={12 + i * 10} fill={i === 1 ? accent : textFaint} opacity={i === 1 ? 0.3 : 0.5} />
          <rect x={114 + i * 76} y={392 - (20 - i * 4)} width={8} height={20 - i * 4} fill={textFaint} opacity={0.3} />
          <rect x={128 + i * 76} y={392 - (8 + i * 6)} width={8} height={8 + i * 6} fill={i === 1 ? accentSoft : textFaint} opacity={0.2} />
        </g>
      ))}

      {/* Bottom-right module cluster */}
      <rect x={360} y={440} width={160} height={100} fill={navyLight} stroke={ruleMid} strokeWidth={0.5} />

      {/* Inner progress/timeline abstraction */}
      <line x1={376} y1={468} x2={504} y2={468} stroke={rule} strokeWidth={1} />
      <line x1={376} y1={468} x2={440} y2={468} stroke={accent} strokeWidth={1.5} opacity={0.5} />
      <circle cx={440} cy={468} r={3} fill={accent} opacity={0.6} />

      {/* Sub-rows below progress */}
      {[488, 504, 520].map((y, i) => (
        <g key={`subrow-${y}`}>
          <line x1={376} y1={y} x2={376 + 60 + i * 24} y2={y} stroke={textFaint} strokeWidth={0.75} />
          <circle cx={376 + 64 + i * 24} cy={y} r={1.5} fill={i === 2 ? accentSoft : textSubtle} opacity={0.5} />
        </g>
      ))}

      {/* ================================================================
          LAYER 5 — Accent geometry and focal points
          ================================================================ */}

      {/* Primary accent cross — focal intersection */}
      <line x1={80} y1={320} x2={520} y2={320} stroke={accent} strokeWidth={0.5} opacity={0.15} />
      <line x1={320} y1={80} x2={320} y2={560} stroke={accent} strokeWidth={0.5} opacity={0.1} />
      {/* Intersection mark */}
      <rect x={316} y={316} width={8} height={8} fill="none" stroke={accent} strokeWidth={0.75} opacity={0.4} />

      {/* Diagonal tension line */}
      <line x1={480} y1={80} x2={520} y2={120} stroke={textFaint} strokeWidth={0.5} />

      {/* Small signal squares — scattered */}
      <rect x={160} y={460} width={6} height={6} fill={accent} opacity={0.15} />
      <rect x={240} y={500} width={10} height={10} fill="none" stroke={ruleStrong} strokeWidth={0.5} />
      <rect x={140} y={540} width={4} height={4} fill={textSubtle} />

      {/* ================================================================
          LAYER 6 — Typography labels (editorial notation)
          ================================================================ */}

      {/* Top-left module label */}
      <text x={96} y={98} fill={textSubtle} fontSize={7} fontFamily="'Space Mono', monospace" letterSpacing="0.12em">
        ENABLEMENT
      </text>

      {/* Right column header label */}
      <text x={376} y={136} fill={textSubtle} fontSize={6.5} fontFamily="'Space Mono', monospace" letterSpacing="0.1em">
        MODULES
      </text>

      {/* Coordinate labels — architectural notation */}
      <text x={84} y={76} fill={textGhost} fontSize={6} fontFamily="'Space Mono', monospace">
        01.00
      </text>
      <text x={324} y={76} fill={textGhost} fontSize={6} fontFamily="'Space Mono', monospace">
        02.00
      </text>
      <text x={84} y={336} fill={textGhost} fontSize={6} fontFamily="'Space Mono', monospace">
        03.00
      </text>
      <text x={364} y={436} fill={textGhost} fontSize={6} fontFamily="'Space Mono', monospace">
        04.00
      </text>

      {/* Status label inside accent block */}
      <text x={508} y={138} fill={accentSoft} fontSize={5.5} fontFamily="'Space Mono', monospace" opacity={0.6} textAnchor="middle">
        SYS
      </text>

      {/* Process label — lower data section */}
      <text x={88} y={350} fill={textMuted} fontSize={6} fontFamily="'Space Mono', monospace" letterSpacing="0.08em">
        PROGRESS
      </text>

      {/* Flow label on left rail */}
      <text x={32} y={92} fill={textGhost} fontSize={5.5} fontFamily="'Space Mono', monospace" textAnchor="end" transform="rotate(-90 32 92)">
        FLOW
      </text>

      {/* Bottom module label */}
      <text x={376} y={456} fill={textSubtle} fontSize={6.5} fontFamily="'Space Mono', monospace" letterSpacing="0.1em">
        CYCLE
      </text>

      {/* ================================================================
          LAYER 7 — Bottom fade gradient (blends into hero content below)
          ================================================================ */}
      <defs>
        <linearGradient id="hero-fade-bottom" x1="0" y1="560" x2="0" y2="640">
          <stop offset="0%" stopColor={navy} stopOpacity={0} />
          <stop offset="100%" stopColor={navy} stopOpacity={1} />
        </linearGradient>
        <linearGradient id="hero-fade-right" x1="440" y1="0" x2="560" y2="0">
          <stop offset="0%" stopColor={navy} stopOpacity={0} />
          <stop offset="100%" stopColor={navy} stopOpacity={0.6} />
        </linearGradient>
      </defs>
      <rect x={0} y={560} width={560} height={80} fill="url(#hero-fade-bottom)" />
      <rect x={0} y={0} width={560} height={640} fill="url(#hero-fade-right)" />
    </svg>
  )
}
