import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import HeroArtifact from './HeroArtifact'

export default function Hero() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      {/* Artifact — positioned behind text on mobile, beside on desktop */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <HeroArtifact className="
          w-[480px] h-auto opacity-40
          md:w-[540px] md:opacity-50
          lg:w-[600px] lg:opacity-60
          xl:w-[640px]
          translate-x-8 md:translate-x-0
          lg:-translate-x-4
          select-none
        " />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-2xl">
          {/* Label */}
          <p className="font-mono text-lg sm:text-xl lg:text-2xl text-brand-400 uppercase tracking-[0.15em] mb-6 animate-fade-in">
            AI Training & Enablement
          </p>

          {/* Accent rule */}
          <div className="w-12 h-0.5 bg-brand-700 mb-8 animate-fade-in" />

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.08] mb-6 animate-fade-in-up">
            AI Training and Enablement for Your People
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-white/50 leading-relaxed max-w-xl mb-10 animate-fade-in-up animate-delay-100">
            Your team learns to use AI inside their daily tasks, creating real productivity gains for your business. Most AI training gets forgotten — not this.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-in-up animate-delay-200">
            <Link to="/contact" className="btn-primary-on-dark text-sm">
              Book a Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/program" className="btn-secondary-on-dark text-sm">
              See the Program
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
