import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Eye, BarChart3, Users, BookOpen, Wrench, ClipboardCheck, FileText, Target } from 'lucide-react'

const forYourBusiness = [
  { icon: BarChart3, title: 'Monthly Progress Report' },
  { icon: Eye, title: 'Full Visibility Into Adoption' },
  { icon: Users, title: 'Open Call Access' },
  { icon: Target, title: 'Measurable Productivity Gains' },
]

const forYourPerson = [
  { icon: BookOpen, title: '1 Hour Live Enablement Call' },
  { icon: FileText, title: 'Three Weekly Self-Paced Sessions' },
  { icon: ClipboardCheck, title: 'Monthly Knowledge Check' },
  { icon: Wrench, title: 'Hands-On Support When Needed' },
]

export default function ProblemsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding border-t border-stone-200 bg-stone-100/50">
      <div className="section-container">
        <div className={`max-w-3xl mb-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
            Built for Both Sides
          </p>
          <div className="w-10 h-0.5 bg-brand-700 mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight">
            You Get Accountability.{' '}
            <span className="text-stone-400">Your Person Gets Support.</span>
          </h2>
        </div>

        {/* Two-track grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Business track */}
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 mb-5">
              For your business
            </h3>
            <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200">
              {forYourBusiness.map((item, i) => (
                <div
                  key={item.title}
                  className={`bg-white p-5 sm:p-6 flex flex-col items-center text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                  style={{ transitionDelay: `${(i + 1) * 80}ms` }}
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-stone-200 mb-3">
                    <item.icon className="w-5 h-5 text-brand-700" />
                  </div>
                  <h4 className="text-xs font-semibold text-stone-900 leading-snug">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Person track */}
          <div className={`transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 mb-5">
              For your person
            </h3>
            <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200">
              {forYourPerson.map((item, i) => (
                <div
                  key={item.title}
                  className={`bg-white p-5 sm:p-6 flex flex-col items-center text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                  style={{ transitionDelay: `${(i + 3) * 80}ms` }}
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-stone-200 mb-3">
                    <item.icon className="w-5 h-5 text-brand-700" />
                  </div>
                  <h4 className="text-xs font-semibold text-stone-900 leading-snug">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
