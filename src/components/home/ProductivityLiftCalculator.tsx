import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface WorkflowArea {
  id: string
  label: string
  defaultHoursPerPerson: number
  /** Conservative uplift factor (0–1) applied to hours in this area */
  liftFactor: number
}

const WORKFLOW_AREAS: WorkflowArea[] = [
  { id: 'reporting',   label: 'Reporting & updates',       defaultHoursPerPerson: 2.0, liftFactor: 0.30 },
  { id: 'crm',         label: 'CRM & admin processing',    defaultHoursPerPerson: 1.5, liftFactor: 0.35 },
  { id: 'comms',       label: 'Client communication',      defaultHoursPerPerson: 2.0, liftFactor: 0.25 },
  { id: 'data',        label: 'Data entry & records',      defaultHoursPerPerson: 2.5, liftFactor: 0.40 },
  { id: 'scheduling',  label: 'Scheduling & coordination', defaultHoursPerPerson: 1.5, liftFactor: 0.30 },
  { id: 'drafting',    label: 'Drafting & documentation',  defaultHoursPerPerson: 1.0, liftFactor: 0.35 },
]

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function ProductivityLiftCalculator() {
  const { ref, isVisible } = useScrollAnimation()

  const [teamSize, setTeamSize] = useState(2)
  const [activeAreas, setActiveAreas] = useState<Record<string, boolean>>(() => {
    const m: Record<string, boolean> = {}
    WORKFLOW_AREAS.forEach((a) => (m[a.id] = true))
    return m
  })

  const toggleArea = (id: string) =>
    setActiveAreas((prev) => ({ ...prev, [id]: !prev[id] }))

  // --- Derived ---
  const totalManualHoursPerPerson = useMemo(
    () => WORKFLOW_AREAS.reduce((s, a) => s + (activeAreas[a.id] ? a.defaultHoursPerPerson : 0), 0),
    [activeAreas]
  )

  const totalRecoveredPerPerson = useMemo(
    () =>
      WORKFLOW_AREAS.reduce(
        (s, a) => s + (activeAreas[a.id] ? a.defaultHoursPerPerson * a.liftFactor : 0),
        0
      ),
    [activeAreas]
  )

  const weeklyRecovered = useMemo(
    () => totalRecoveredPerPerson * teamSize,
    [totalRecoveredPerPerson, teamSize]
  )

  const annualRecovered = useMemo(() => weeklyRecovered * 48, [weeklyRecovered]) // 48 productive weeks

  const liftPercentage = useMemo(
    () => (totalManualHoursPerPerson > 0
      ? Math.round((totalRecoveredPerPerson / totalManualHoursPerPerson) * 100)
      : 0),
    [totalRecoveredPerPerson, totalManualHoursPerPerson]
  )

  // Visual bar widths (capped at 100%)
  const maxBarHours = 4 // widest single bar reference
  const barScale = (hours: number) => Math.min((hours / maxBarHours) * 100, 100)

  return (
    <section ref={ref} className="section-padding border-t border-stone-200">
      <div className="section-container">
        {/* ---- Header ---- */}
        <div
          className={`max-w-3xl mb-14 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
            Productivity Lift Estimator
          </p>
          <div className="w-10 h-0.5 bg-brand-700 mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
            See How Much More Productive Your People Can be With AI
          </h2>
          <p className="text-sm text-stone-500 leading-relaxed max-w-2xl">
            Model the time that could be recovered by reducing manual, repetitive
            work across your staff. Select the workflow areas relevant to your
            team and adjust team size to see an indicative estimate.
          </p>
        </div>

        {/* ---- Estimator body ---- */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {/* ===== LEFT: Workflow map (7 cols) ===== */}
          <div className="lg:col-span-7 border border-stone-200 lg:border-r-0">

            {/* Team size control */}
            <div className="p-6 sm:p-8 border-b border-stone-200">
              <div className="flex items-baseline justify-between mb-5">
                <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em]">
                  Team Size
                </span>
                <span className="font-mono text-2xl font-bold text-stone-900 tabular-nums">
                  {teamSize}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-px appearance-none cursor-pointer bg-stone-300
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
                  [&::-webkit-slider-thumb]:bg-brand-700 [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3
                  [&::-moz-range-thumb]:bg-brand-700 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                <span className="font-mono text-[10px] text-stone-300">01</span>
                <span className="font-mono text-[10px] text-stone-300">10</span>
              </div>
            </div>

            {/* Workflow area diagram */}
            <div className="p-6 sm:p-8">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em]">
                  Workflow Areas
                </span>
                <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em]">
                  Hrs / person / week
                </span>
              </div>

              {/* Visual workflow bars */}
              <div className="space-y-0">
                {WORKFLOW_AREAS.map((area) => {
                  const active = activeAreas[area.id]
                  const manualWidth = barScale(area.defaultHoursPerPerson)
                  const recoveredWidth = barScale(area.defaultHoursPerPerson * area.liftFactor)

                  return (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => toggleArea(area.id)}
                      className={`w-full text-left py-3.5 border-b border-stone-100 last:border-b-0 transition-opacity cursor-pointer ${
                        active ? 'opacity-100' : 'opacity-30'
                      }`}
                    >
                      {/* Label row */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-3 h-3 flex-shrink-0 border flex items-center justify-center transition-colors ${
                              active ? 'bg-brand-700 border-brand-700' : 'border-stone-300 bg-transparent'
                            }`}
                          >
                            {active && (
                              <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                          <span className="text-sm text-stone-600">{area.label}</span>
                        </div>
                        <span className="font-mono text-xs text-stone-400 tabular-nums">
                          {area.defaultHoursPerPerson.toFixed(1)}
                        </span>
                      </div>

                      {/* Visual bar — stacked: manual (light) + recoverable (brand) */}
                      {active && (
                        <div className="ml-[22px] flex items-center gap-0 h-2">
                          {/* Remaining manual portion */}
                          <div
                            className="h-full bg-stone-200 transition-all duration-300"
                            style={{ width: `${manualWidth - recoveredWidth}%` }}
                          />
                          {/* Recoverable portion */}
                          <div
                            className="h-full bg-brand-600/70 transition-all duration-300"
                            style={{ width: `${recoveredWidth}%` }}
                          />
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Bar legend */}
              <div className="flex items-center gap-5 mt-5 ml-[22px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-2 bg-stone-200" />
                  <span className="font-mono text-[9px] text-stone-400 uppercase tracking-[0.12em]">
                    Manual effort
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-2 bg-brand-600/70" />
                  <span className="font-mono text-[9px] text-stone-400 uppercase tracking-[0.12em]">
                    Recoverable
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: Output panel (5 cols, light) ===== */}
          <div className="lg:col-span-5 border border-stone-200 bg-white lg:sticky lg:top-28 lg:self-start">
            <div className="p-6 sm:p-8 lg:p-10">

              {/* Primary metric: weekly hours recovered */}
              <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] mb-8">
                Indicative Productivity Lift
              </p>

              <div className="mb-10">
                <div className="border-t-2 border-brand-700 pt-5">
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-stone-900 tabular-nums tracking-tight">
                    {weeklyRecovered.toFixed(1)}
                  </span>
                  <span className="font-mono text-lg text-stone-400 ml-2">
                    hrs / week
                  </span>
                </div>
                <p className="mt-2 text-[11px] text-stone-400 leading-snug">
                  Estimated hours recoverable across the team, weekly
                </p>
              </div>

              {/* Lift percentage — large visual indicator */}
              <div className="mb-8">
                <div className="flex items-end gap-3 mb-2">
                  <span className="font-mono text-3xl font-bold text-brand-700 tabular-nums">
                    {liftPercentage}%
                  </span>
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] pb-1">
                    Workflow efficiency lift
                  </span>
                </div>
                {/* Visual lift bar */}
                <div className="w-full h-1.5 bg-stone-100">
                  <div
                    className="h-full bg-brand-700 transition-all duration-500"
                    style={{ width: `${Math.min(liftPercentage, 100)}%` }}
                  />
                </div>
              </div>

              {/* Supporting metrics */}
              <div className="space-y-0 mb-8">
                <div className="flex items-baseline justify-between py-3 border-b border-stone-100">
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em]">
                    Annual hours recovered
                  </span>
                  <span className="font-mono text-sm text-stone-600 tabular-nums">
                    {Math.round(annualRecovered).toLocaleString()} hrs
                  </span>
                </div>
                <div className="flex items-baseline justify-between py-3 border-b border-stone-100">
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em]">
                    Per person / week
                  </span>
                  <span className="font-mono text-sm text-stone-600 tabular-nums">
                    {totalRecoveredPerPerson.toFixed(1)} hrs
                  </span>
                </div>
                <div className="flex items-baseline justify-between py-3 border-b border-stone-100">
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em]">
                    Workflow areas active
                  </span>
                  <span className="font-mono text-sm text-stone-600 tabular-nums">
                    {Object.values(activeAreas).filter(Boolean).length} of {WORKFLOW_AREAS.length}
                  </span>
                </div>
              </div>

              {/* Capacity composition — visual split */}
              <div className="mb-10">
                <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.15em] block mb-3">
                  Capacity composition
                </span>
                <div className="flex h-3 w-full overflow-hidden border border-stone-200">
                  <div
                    className="bg-stone-200 transition-all duration-500"
                    style={{ width: `${100 - liftPercentage}%` }}
                    title="Remaining manual"
                  />
                  <div
                    className="bg-brand-700 transition-all duration-500"
                    style={{ width: `${liftPercentage}%` }}
                    title="Recovered capacity"
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="font-mono text-[9px] text-stone-300 uppercase tracking-[0.12em]">
                    Current workload
                  </span>
                  <span className="font-mono text-[9px] text-stone-300 uppercase tracking-[0.12em]">
                    Recovered
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="btn-primary w-full text-sm"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Grounding note */}
              <p className="mt-8 text-[10px] text-stone-300 leading-relaxed">
                Directional estimate only. Actual productivity lift depends on
                workflow complexity, tool adoption, and application quality. Based
                on conservative recovery assumptions across embedded operational roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
