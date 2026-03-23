import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const steps = [
  { number: '01', title: 'Live Face-To-Face Training', time: '2 hrs / month' },
  { number: '02', title: 'Self-Paced Modules', time: '2 hrs / month' },
  { number: '03', title: 'Skills and Knowledge Check', time: 'End of month' },
  { number: '04', title: 'Progress Report', time: 'Delivered to you' },
  { number: '05', title: 'Hands-On Support & Implementation', time: 'As needed' },
]

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="bg-navy-950 section-padding">
      <div className="section-container">
        <div className={`mb-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <p className="font-mono text-xs text-brand-400 uppercase tracking-[0.15em] mb-4">Monthly Cycle</p>
          <div className="w-10 h-0.5 bg-brand-400 mb-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
            How the Program Works Each Month
          </h2>
        </div>

        {/* Desktop: horizontal timeline — hero element */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-7 left-[10%] right-[10%] h-px bg-white/15" />
            <div className="grid grid-cols-5 gap-0">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`relative text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="flex justify-center mb-5">
                    <div className={`w-14 h-14 flex items-center justify-center relative z-10 ${
                      i === 0 ? 'bg-brand-700' : 'bg-white/10 border border-white/15'
                    }`}>
                      <span className="font-mono text-base font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
                  <span className="font-mono text-[10px] text-brand-400 uppercase tracking-[0.12em]">
                    {step.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/tablet: vertical timeline */}
        <div className="lg:hidden">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex gap-5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                  i === 0 ? 'bg-brand-700' : 'bg-white/10 border border-white/15'
                }`}>
                  <span className="font-mono text-xs font-bold text-white">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-white/15 my-1" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="text-sm font-semibold text-white mb-0.5">{step.title}</h3>
                <span className="font-mono text-[10px] text-brand-400 uppercase tracking-[0.12em]">
                  {step.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
