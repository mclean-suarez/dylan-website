import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import adOnAiLogo from '../../images/adonailogo.webp'

const pillars = [
  {
    number: '01',
    title: 'AI Training Matched to Their Role',
    subtitle: 'Your person learns AI skills & tools specific to what they actually do every day',
  },
  {
    number: '02',
    title: 'Monthly Modules with Monitored Outcomes',
    subtitle: 'Live call, customised modules, skills check, implementation to their daily work, progress report sent to you',
  },
  {
    number: '03',
    title: 'Supporting Your Person Implementing AI',
    subtitle: 'We help your staff implement AI into their daily tasks',
  },
]

export default function OfferSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    
    <section ref={ref} className="section-padding relative">

      {/* Watermark background */}
    <div className="absolute inset-0 flex items-center justify-end pointer-events-none hidden md:flex">
      <img
        src={adOnAiLogo}
        alt="Hero"
        className="
          w-[400px] h-auto opacity-100
          md:w-[400px] md:opacity-100
          lg:w-[400px] lg:opacity-100
          xl:w-[400px]
          translate-x-8 md:translate-x-0
          lg:-translate-x-[13rem]
          translate-y-[10rem]
          select-none
        "
      />
    </div>
      <div className="section-container">
        <div className={`max-w-3xl mb-12 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">The Program</p>
          <div className="w-10 h-0.5 bg-brand-700 mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
            What Is Ad On AI
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed max-w-xl font-medium">
            We teach your people how to use AI to boost their productivity. They learn it, apply it in their actual work, and you get a monthly report showing what changed.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 borders transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`group bg-white shadow-[0_4px_4px_0_rgba(66,99,235,0.5)] rounded-[20px] p-6 md:p-8 
                        transform transition-transform duration-300 hover:scale-105
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="border-t-2 border-stone-900 pt-5 mb-4 group-hover:border-brand-700 transition-colors duration-300">
                <span className="font-mono text-2xl font-bold text-stone-900 tracking-tight">{pillar.number}</span>
              </div>
              <h3 className="text-sm font-bold text-stone-900 leading-snug mb-1.5">{pillar.title}</h3>
              <p className="text-xs text-stone-400">{pillar.subtitle}</p>
            </div>
          ))}
        </div>

        <div className={`mt-8 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <Link to="/program" className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800 transition-colors group">
            See full program details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
