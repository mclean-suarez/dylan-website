// Living product vignette — a light "Academy Terminal" window that loops a
// whole task end to end: a prompt types itself in, the assistant "thinks",
// results populate, a checklist ticks, a progress bar fills and a toast pops.
//
// Every element animates on the SAME shared timeline (LOOP seconds, infinite);
// the act sequencing lives in the keyframe %-ranges in index.css. Ported from
// the Ad On AI reference motion system. Calm light surface, single blue accent.

const LOOP = '11s'
const ACCENT = '#2F6FED'
const INK = '#0B1220'
const CHIP = '#EEF1F6'

const loopAnim = (name: string) => ({ animation: `${name} ${LOOP} ease infinite` })

const resultRows = [
  ['Whitfield & Co', '$4,210', '14 days'],
  ['Brightwater Pty', '$1,980', '9 days'],
  ['Meridian Group', '$760', '6 days'],
]
const checklist = ['Overdue invoices triaged', 'Chase emails drafted', 'Owner notified']

export function LiveDemo() {
  return (
    <div className="relative" style={{ animation: `adonFloatA 9s ease-in-out infinite` }}>
      {/* ambient glow behind the window */}
      <div className="absolute -inset-8 pointer-events-none" style={{ background: 'radial-gradient(60% 60% at 60% 35%, rgba(47,111,237,0.30), transparent 70%)', filter: 'blur(26px)' }} />

      {/* toast */}
      <div
        className="absolute right-4 -top-3 z-20 flex items-center gap-2 rounded-full px-3.5 py-2 text-[12px] font-semibold shadow-lg"
        style={{ background: '#fff', color: INK, border: '1px solid rgba(11,18,32,0.08)', ...loopAnim('adonToast') }}
      >
        <span className="flex items-center justify-center w-4 h-4 rounded-full text-white text-[10px]" style={{ background: ACCENT }}>✓</span>
        Task complete
      </div>

      {/* app window */}
      <div className="relative rounded-[16px] overflow-hidden" style={{ background: '#fff', border: '1px solid rgba(11,18,32,0.10)', boxShadow: '0 40px 90px -30px rgba(11,18,32,0.45)' }}>
        {/* chrome */}
        <div className="flex items-center gap-1.5 px-4 h-9 border-b" style={{ borderColor: 'rgba(11,18,32,0.07)', background: '#FAFBFD' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#E2E6EE' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#E2E6EE' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#E2E6EE' }} />
          <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: 'rgba(11,18,32,0.4)' }}>Academy Terminal</span>
        </div>

        <div className="p-5" style={{ color: INK }}>
          {/* prompt input */}
          <div className="flex items-center gap-2 rounded-[12px] px-3.5 py-3" style={{ background: CHIP }}>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] flex-shrink-0" style={{ color: ACCENT }}>You</span>
            <div className="relative flex-1 overflow-hidden">
              <span
                className="block whitespace-nowrap overflow-hidden font-mono text-[12.5px]"
                style={{ color: INK, ...loopAnim('adonPromptType') }}
              >
                Triage overdue invoices &amp; draft chases
              </span>
              <span className="absolute top-0 right-0 inline-block w-[2px] h-[15px]" style={{ background: ACCENT, animation: 'adonCaret 1s step-end infinite' }} />
            </div>
            <span className="flex items-center justify-center w-7 h-7 rounded-[9px] text-white flex-shrink-0" style={{ background: ACCENT, ...loopAnim('adonSendPulse') }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M4 12l16-8-6 16-3-7-7-1z" fill="currentColor" /></svg>
            </span>
          </div>

          {/* thinking */}
          <div className="flex items-center gap-2 mt-4 h-5" style={loopAnim('adonThink')}>
            <span className="font-mono text-[11px]" style={{ color: 'rgba(11,18,32,0.5)' }}>Working</span>
            <span className="flex items-center gap-1">
              {[0, 1, 2].map((d) => (
                <span key={d} className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT, animation: `adonDots 1.1s ease-in-out ${d * 0.18}s infinite` }} />
              ))}
            </span>
          </div>

          {/* progress */}
          <div className="mt-4 h-1.5 rounded-full overflow-hidden" style={{ background: CHIP }}>
            <div className="h-full rounded-full" style={{ background: ACCENT, ...loopAnim('adonProg') }} />
          </div>

          {/* result rows */}
          <div className="mt-4 space-y-2">
            {resultRows.map((r, i) => (
              <div
                key={r[0]}
                className="flex items-center justify-between rounded-[10px] px-3 py-2.5 text-[12.5px]"
                style={{ background: '#FAFBFD', border: '1px solid rgba(11,18,32,0.06)', ...loopAnim(`adonR${i}`) }}
              >
                <span className="font-medium">{r[0]}</span>
                <span className="flex items-center gap-3">
                  <span style={{ color: 'rgba(11,18,32,0.55)' }}>{r[2]} overdue</span>
                  <span className="font-mono font-semibold" style={{ color: ACCENT }}>{r[1]}</span>
                </span>
              </div>
            ))}
          </div>

          {/* checklist */}
          <div className="mt-4 pt-4 space-y-2.5 border-t" style={{ borderColor: 'rgba(11,18,32,0.07)' }}>
            {checklist.map((c, i) => (
              <div key={c} className="flex items-center gap-2.5 text-[12.5px]">
                <span
                  className="relative flex items-center justify-center w-4 h-4 rounded-[5px] flex-shrink-0"
                  style={{ background: CHIP, animation: `adonCheck ${LOOP} ease ${i * 0.12}s infinite` }}
                >
                  <svg className="absolute" width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ animation: `adonCheckMark ${LOOP} ease ${i * 0.12}s infinite` }}>
                    <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span style={{ color: 'rgba(11,18,32,0.75)' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
