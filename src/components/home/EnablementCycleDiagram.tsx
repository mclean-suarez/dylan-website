/**
 * EnablementCycleDiagram — Swiss Modernism 2.0 Process Visual
 *
 * A geometric, grid-aligned diagram showing the monthly enablement cycle.
 * Designed to feel like an editorial systems diagram, not a generic SaaS flowchart.
 */
export default function EnablementCycleDiagram({ className = '' }: { className?: string }) {
  const accent = '#4263eb'
  const border = '#d6d3d1' // stone-300
  const borderLight = '#e7e5e4' // stone-200
  const textDark = '#1c1917' // stone-900
  const textMid = '#78716c' // stone-500
  const textLight = '#a8a29e' // stone-400
  const white = '#ffffff'

  return (
    <svg
      viewBox="0 0 400 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Monthly enablement cycle diagram showing five stages: Learn, Prove, Apply, Support, Report"
      role="img"
    >
      {/* Background grid — subtle */}
      {[80, 160, 240, 320].map((x) => (
        <line key={`vg-${x}`} x1={x} y1={0} x2={x} y2={360} stroke={borderLight} strokeWidth={0.5} opacity={0.5} />
      ))}
      {[72, 144, 216, 288].map((y) => (
        <line key={`hg-${y}`} x1={0} y1={y} x2={400} y2={y} stroke={borderLight} strokeWidth={0.5} opacity={0.5} />
      ))}

      {/* ---- Central cycle ring (abstract pentagon) ---- */}
      {/* Pentagon vertices at: top(200,48), top-right(332,128), bottom-right(292,280), bottom-left(108,280), top-left(68,128) */}

      {/* Connecting lines between stages — restrained */}
      <polyline
        points="200,52 328,128 288,276 112,276 72,128 200,52"
        stroke={border}
        strokeWidth={1}
        fill="none"
      />

      {/* Flow direction indicators — tiny arrows on edges */}
      <polygon points="268,96 272,90 276,96" fill={textLight} opacity={0.6} />
      <polygon points="316,208 320,202 324,208" fill={textLight} opacity={0.6} />
      <polygon points="196,284 200,290 204,284" fill={textLight} opacity={0.6} />
      <polygon points="84,208 80,202 76,208" fill={textLight} opacity={0.6} />
      <polygon points="128,96 132,90 124,90" fill={textLight} opacity={0.6} />

      {/* ---- Stage 1: LEARN (top center) ---- */}
      <rect x={160} y={20} width={80} height={52} fill={white} stroke={accent} strokeWidth={1.5} />
      <rect x={160} y={20} width={80} height={3} fill={accent} />
      <text x={200} y={42} fill={accent} fontSize={7} fontFamily="'Space Mono', monospace" textAnchor="middle" letterSpacing="0.12em" fontWeight="700">
        LEARN
      </text>
      <text x={200} y={55} fill={textMid} fontSize={6.5} fontFamily="system-ui, sans-serif" textAnchor="middle">
        Live call + modules
      </text>
      {/* Stage number */}
      <text x={164} y={16} fill={textLight} fontSize={7} fontFamily="'Space Mono', monospace" fontWeight="700">01</text>

      {/* ---- Stage 2: PROVE (top right) ---- */}
      <rect x={292} y={104} width={76} height={48} fill={white} stroke={border} strokeWidth={1} />
      <rect x={292} y={104} width={76} height={2.5} fill={textDark} />
      <text x={330} y={126} fill={textDark} fontSize={7} fontFamily="'Space Mono', monospace" textAnchor="middle" letterSpacing="0.12em" fontWeight="700">
        PROVE
      </text>
      <text x={330} y={139} fill={textMid} fontSize={6.5} fontFamily="system-ui, sans-serif" textAnchor="middle">
        Knowledge check
      </text>
      <text x={296} y={100} fill={textLight} fontSize={7} fontFamily="'Space Mono', monospace" fontWeight="700">02</text>

      {/* ---- Stage 3: APPLY (bottom right) ---- */}
      <rect x={252} y={252} width={76} height={48} fill={white} stroke={border} strokeWidth={1} />
      <rect x={252} y={252} width={76} height={2.5} fill={textDark} />
      <text x={290} y={274} fill={textDark} fontSize={7} fontFamily="'Space Mono', monospace" textAnchor="middle" letterSpacing="0.12em" fontWeight="700">
        APPLY
      </text>
      <text x={290} y={287} fill={textMid} fontSize={6.5} fontFamily="system-ui, sans-serif" textAnchor="middle">
        Workflow usage
      </text>
      <text x={256} y={248} fill={textLight} fontSize={7} fontFamily="'Space Mono', monospace" fontWeight="700">03</text>

      {/* ---- Stage 4: SUPPORT (bottom left) ---- */}
      <rect x={72} y={252} width={76} height={48} fill={white} stroke={border} strokeWidth={1} />
      <rect x={72} y={252} width={76} height={2.5} fill={textDark} />
      <text x={110} y={274} fill={textDark} fontSize={7} fontFamily="'Space Mono', monospace" textAnchor="middle" letterSpacing="0.12em" fontWeight="700">
        SUPPORT
      </text>
      <text x={110} y={287} fill={textMid} fontSize={6.5} fontFamily="system-ui, sans-serif" textAnchor="middle">
        Hands-on help
      </text>
      <text x={76} y={248} fill={textLight} fontSize={7} fontFamily="'Space Mono', monospace" fontWeight="700">04</text>

      {/* ---- Stage 5: REPORT (top left) ---- */}
      <rect x={32} y={104} width={76} height={48} fill={white} stroke={border} strokeWidth={1} />
      <rect x={32} y={104} width={76} height={2.5} fill={textDark} />
      <text x={70} y={126} fill={textDark} fontSize={7} fontFamily="'Space Mono', monospace" textAnchor="middle" letterSpacing="0.12em" fontWeight="700">
        REPORT
      </text>
      <text x={70} y={139} fill={textMid} fontSize={6.5} fontFamily="system-ui, sans-serif" textAnchor="middle">
        Progress visible
      </text>
      <text x={36} y={100} fill={textLight} fontSize={7} fontFamily="'Space Mono', monospace" fontWeight="700">05</text>

      {/* ---- Center label ---- */}
      <text x={200} y={164} fill={textLight} fontSize={6} fontFamily="'Space Mono', monospace" textAnchor="middle" letterSpacing="0.15em">
        MONTHLY
      </text>
      <text x={200} y={176} fill={textDark} fontSize={9} fontFamily="'Space Mono', monospace" textAnchor="middle" letterSpacing="0.08em" fontWeight="700">
        CYCLE
      </text>
      {/* Small accent dot */}
      <circle cx={200} cy={184} r={2} fill={accent} />

      {/* ---- Accountability indicator — bottom ---- */}
      <line x1={120} y1={336} x2={280} y2={336} stroke={borderLight} strokeWidth={0.5} />
      <text x={200} y={350} fill={textLight} fontSize={5.5} fontFamily="'Space Mono', monospace" textAnchor="middle" letterSpacing="0.15em">
        ACCOUNTABILITY BUILT IN
      </text>
    </svg>
  )
}
