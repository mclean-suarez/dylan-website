import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import circleImage from '../../images/circle.png'

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
    <section ref={ref} className="bg-white section-padding">
      <div className="section-container">

        {/* Desktop: vertical timeline with image */}
        <div className="hidden lg:flex gap-20 items-start">
          {/* Left column: image */}
          <div className="flex-shrink-0 w-1/2">
            <img
              src={circleImage}
              alt="Timeline Illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right column: vertical timeline */}
          <div className="flex-1 relative">
            <div className={`mb-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <p className="font-mono text-xs text-brand-400 uppercase tracking-[0.15em] mb-4">Monthly Cycle</p>
              <div className="w-10 h-0.5 bg-brand-400 mb-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#2D3A4A] tracking-tight leading-tight">
                How the Program Works Each Month
              </h2>
            </div>
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`group flex gap-5 transition-all duration-300 hover:scale-[1.03] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                {/* Timeline line + circle */}
                <div className="flex flex-col items-center relative">
                  <div
                    className={`
                      w-12 h-12 flex items-center justify-center flex-shrink-0
                      transition-all duration-300
                      bg-[#2D3A4A] border border-white/15
                      group-hover:bg-brand-700 group-hover:border-brand-700
                    `}
                  >
                    <span className="font-mono text-base font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-white/15 my-1" />
                  )}
                </div>

                {/* Step text */}
                <div className="pb-6 transition-all duration-300">
                  <h3 className="text-sm font-semibold text-[#2D3A4A] mb-0.5 group-hover:text-brand-700 transition-colors">
                    {step.title}
                  </h3>
                  <span className="font-mono text-[10px] text-brand-400 uppercase tracking-[0.12em]">
                    {step.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/tablet: vertical timeline (unchanged) */}
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
