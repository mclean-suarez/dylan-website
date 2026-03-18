import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Building2, Users, TrendingUp } from 'lucide-react'

const criteria = [
  {
    icon: Building2,
    title: 'Founder-Led Australian SME',
    detail: '5 to 50 staff',
  },
  {
    icon: Users,
    title: 'Using Outsourced Staff',
    detail: 'Onshore, offshore, or blended',
  },
  {
    icon: TrendingUp,
    title: 'Want More From Your Existing Team',
    detail: 'Productivity, not hiring',
  },
]

export default function FitSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding border-t border-stone-200">
      <div className="section-container">
        <div className={`max-w-3xl mb-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
            Is This Right for You?
          </p>
          <div className="w-10 h-0.5 bg-brand-700 mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight">
            Built for a Specific Type of Business
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          {criteria.map((item, i) => (
            <div
              key={item.title}
              className={`bg-white p-6 md:p-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className={`border-t-2 ${i === 0 ? 'border-brand-700' : 'border-stone-900'} pt-5 mb-5`}>
                <div className="w-12 h-12 flex items-center justify-center border border-stone-200 mb-4">
                  <item.icon className="w-5 h-5 text-brand-700" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-stone-900 leading-snug mb-1">{item.title}</h3>
              <p className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em]">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className={`mt-6 flex items-center gap-3 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="h-px flex-1 bg-stone-200" />
          <span className="font-mono text-[10px] text-stone-400 uppercase tracking-[0.12em]">
            Ready to move beyond dabbling with AI
          </span>
          <div className="h-px flex-1 bg-stone-200" />
        </div>
      </div>
    </section>
  )
}
