import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const stats = [
  { value: '2008', label: 'Ad On Group established', mono: true },
  { value: '17+', label: 'Years in business operations', mono: true },
  { value: '3', label: 'Countries with delivery teams', mono: true },
  { value: '3 yrs', label: 'AI deployed in live operations', mono: true },
]

export default function OperationalCredibility() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding bg-navy-950">
      <div className="section-container">
        {/* Header */}
        <div
          className={`max-w-3xl mb-14 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="font-mono text-xs text-brand-400 uppercase tracking-[0.15em] mb-4">
            Operational Foundation
          </p>
          <div className="w-10 h-0.5 bg-brand-400 mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-4">
            Built Inside a Real Business.{' '}
            <span className="text-white/40">Proven in Real Operations.</span>
          </h2>
          <p className="text-sm text-white/40 leading-relaxed max-w-xl">
            Ad On AI is a specialist division of Ad On Group — an Australian
            diversified business services provider operating since 2008 with teams across Gold Coast,
            Philippines, and South Africa. The enablement program was developed
            inside live operations before it was offered externally.
          </p>
        </div>

        {/* Photo grid + stats composition */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] gap-8 lg:gap-10 items-start">
          {/* Main photo — Gold Coast HQ */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="mx-auto max-w-[640px]">
              <div className="relative aspect-square overflow-hidden rounded-full border-[4px] border-[#4263EB] bg-white/5 shadow-[0_16px_40px_rgba(66,99,235,0.22)]">
                <img
                  src="/images/offices/gold-coast-hq.png"
                  alt="Ad On Group headquarters, Gold Coast, Australia"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5 flex flex-col gap-2 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
                <div>
                  <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.15em] mb-1">
                    Headquarters
                  </p>
                  <p className="text-sm text-white/70 font-medium">Australia</p>
                </div>
                <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.12em] sm:pt-1">
                  −28.00° / 153.43°
                </p>
              </div>
            </div>
          </div>

          {/* Right column — stats + secondary photos */}
          <div className="space-y-6 lg:space-y-7">
            {/* Stats grid */}
            <div
              className={`grid grid-cols-2 gap-px bg-white/[0.06] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`bg-navy-950 p-5 sm:p-6 ${
                    i === 0 ? 'border-t-2 border-brand-700' : ''
                  }`}
                >
                  <div
                    className={`${
                      stat.mono ? 'font-mono' : ''
                    } text-xl sm:text-2xl font-bold text-white mb-1.5`}
                  >
                    {stat.value}
                  </div>
                  <p className="text-[11px] text-white/35 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Secondary photo — Philippines office */}
              <div
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: '280ms' }}
              >
                <div className="mx-auto max-w-[250px]">
                  <div className="relative aspect-square overflow-hidden rounded-full border-[4px] border-[#4263EB] bg-white/5 shadow-[0_14px_32px_rgba(66,99,235,0.2)]">
                    <img
                      src="/images/offices/philippines-office.jpg"
                      alt="Ad On Group delivery office, Philippines"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.15em] mb-1">
                      Delivery Office
                    </p>
                    <p className="text-sm text-white/70 font-medium">
                      Philippines
                    </p>
                  </div>
                </div>
              </div>

              {/* Tertiary photo — South Africa remote team */}
              <div
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: '360ms' }}
              >
                <div className="mx-auto max-w-[250px]">
                  <div className="relative aspect-square overflow-hidden rounded-full border-[4px] border-[#4263EB] bg-white/5 shadow-[0_14px_32px_rgba(66,99,235,0.2)]">
                    <img
                      src="/images/offices/south-africa.jpg"
                      alt="Cape Town, South Africa — remote delivery team"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.15em] mb-1">
                      Remote Delivery Team
                    </p>
                    <p className="text-sm text-white/70 font-medium">
                      South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom attribution bar */}
        <div
          className={`mt-8 bg-navy-950 border-t border-white/[0.06] py-4 px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all duration-500 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] text-white/25 uppercase tracking-[0.15em]">
              Parent Company
            </span>
            <span className="text-white/10">—</span>
            <span className="text-xs text-white/50 font-medium tracking-wide">
              AD ON GROUP
            </span>
            <span className="text-[10px] text-white/20">Est. 2008</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-white/25 font-mono uppercase tracking-[0.1em]">
            <span>Australia</span>
            <span className="text-white/10">·</span>
            <span>Philippines</span>
            <span className="text-white/10">·</span>
            <span>South Africa</span>
          </div>
        </div>
      </div>
    </section>
  )
}
