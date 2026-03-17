import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * MonthlyCycleDiagram — Swiss Modernism 2.0 Orbital Loop
 *
 * A closed-loop diagram communicating the recurring monthly cycle.
 * Six stages arranged in a hexagonal orbit around a central anchor.
 * Directional flow shows recurrence — one stage feeds the next
 * and loops back to the beginning.
 *
 * Desktop: hexagonal/circular arrangement with central label.
 * Mobile: 2×3 grid with central cycle indicator.
 */

const stages = [
  { number: '01', title: 'Live Call', time: '1 hr' },
  { number: '02', title: 'Modules', time: '3 hrs' },
  { number: '03', title: 'Knowledge Check', time: 'End of month' },
  { number: '04', title: 'Application', time: 'In workflow' },
  { number: '05', title: 'Report', time: 'To client' },
  { number: '06', title: 'Support', time: 'As needed' },
]

export default function MonthlyCycleDiagram() {
  const { ref, isVisible } = useScrollAnimation()

  // Position each node around a circle (clock positions, starting from top)
  // Angles: -90, -30, 30, 90, 150, 210 degrees
  const angleOffsets = [-90, -30, 30, 90, 150, 210]
  const radius = 180 // px from center
  const centerX = 220
  const centerY = 220
  const svgSize = 440

  return (
    <section ref={ref} className="section-padding border-b border-stone-200">
      <div className="section-container">
        <div className={`mb-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">Monthly Cycle</p>
          <div className="w-10 h-0.5 bg-brand-700 mb-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-tight">
            How Each Month Works
          </h2>
        </div>

        {/* Desktop: orbital loop diagram */}
        <div className={`hidden lg:flex justify-center transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative" style={{ width: svgSize, height: svgSize }}>
            {/* Orbital ring */}
            <svg
              className="absolute inset-0"
              width={svgSize}
              height={svgSize}
              viewBox={`0 0 ${svgSize} ${svgSize}`}
              fill="none"
            >
              {/* Main orbit circle */}
              <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                stroke="#d6d3d1"
                strokeWidth="1"
                fill="none"
              />
              {/* Directional arrows along the orbit — 3 arrows at 60°, 180°, 300° */}
              {[60, 180, 300].map((angle) => {
                const rad = (angle * Math.PI) / 180
                const ax = centerX + (radius + 1) * Math.cos(rad)
                const ay = centerY + (radius + 1) * Math.sin(rad)
                // Arrow points along the tangent (perpendicular to radius, clockwise)
                const tangentAngle = angle + 90
                const tRad = (tangentAngle * Math.PI) / 180
                const size = 5
                const tipX = ax + size * Math.cos(tRad)
                const tipY = ay + size * Math.sin(tRad)
                const leftRad = ((tangentAngle + 140) * Math.PI) / 180
                const rightRad = ((tangentAngle - 140) * Math.PI) / 180
                const lx = tipX + size * 1.2 * Math.cos(leftRad)
                const ly = tipY + size * 1.2 * Math.sin(leftRad)
                const rx = tipX + size * 1.2 * Math.cos(rightRad)
                const ry = tipY + size * 1.2 * Math.sin(rightRad)
                return (
                  <polygon
                    key={angle}
                    points={`${tipX},${tipY} ${lx},${ly} ${rx},${ry}`}
                    fill="#a8a29e"
                  />
                )
              })}
            </svg>

            {/* Central anchor */}
            <div
              className="absolute flex flex-col items-center justify-center"
              style={{
                left: centerX - 48,
                top: centerY - 28,
                width: 96,
                height: 56,
              }}
            >
              <span className="font-mono text-[9px] text-stone-400 uppercase tracking-[0.15em] mb-1">
                Repeats
              </span>
              <span className="font-mono text-lg font-bold text-stone-900 tracking-tight">
                Monthly
              </span>
            </div>

            {/* Orbital nodes */}
            {stages.map((stage, i) => {
              const angle = (angleOffsets[i] * Math.PI) / 180
              const x = centerX + radius * Math.cos(angle)
              const y = centerY + radius * Math.sin(angle)

              return (
                <div
                  key={stage.number}
                  className={`absolute flex flex-col items-center transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    left: x - 40,
                    top: y - 40,
                    width: 80,
                    transitionDelay: `${(i + 2) * 100}ms`,
                  }}
                >
                  {/* Node */}
                  <div className={`w-11 h-11 flex items-center justify-center ${
                    i === 0 ? 'bg-brand-700' : 'bg-stone-900'
                  }`}>
                    <span className="font-mono text-xs font-bold text-white">{stage.number}</span>
                  </div>
                  {/* Label */}
                  <h3 className="text-[11px] font-semibold text-stone-900 mt-2 text-center leading-tight">
                    {stage.title}
                  </h3>
                  <span className="font-mono text-[8px] text-brand-700 uppercase tracking-[0.08em] mt-0.5">
                    {stage.time}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile/tablet: structured loop grid */}
        <div className={`lg:hidden transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          {/* Central cycle indicator */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-stone-200" />
            <div className="flex items-center gap-2">
              {/* Loop arrow icon */}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-stone-400">
                <path d="M7 1C3.7 1 1 3.7 1 7s2.7 6 6 6 6-2.7 6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                <path d="M13 1v3.5h-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
              </svg>
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em]">
                Repeats monthly
              </span>
            </div>
            <div className="h-px flex-1 bg-stone-200" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
            {stages.map((stage, i) => (
              <div
                key={stage.number}
                className={`bg-white p-5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${(i + 1) * 60}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 ${
                    i === 0 ? 'bg-brand-700' : 'bg-stone-900'
                  }`}>
                    <span className="font-mono text-[10px] font-bold text-white">{stage.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-stone-900 leading-snug">{stage.title}</h3>
                    <span className="font-mono text-[8px] text-brand-700 uppercase tracking-[0.08em]">
                      {stage.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Loop close indicator */}
          <div className="flex items-center gap-3 mt-4">
            <div className="h-px flex-1 bg-stone-200" />
            <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em]">
              01 → 06 → 01
            </span>
            <div className="h-px flex-1 bg-stone-200" />
          </div>
        </div>
      </div>
    </section>
  )
}
