import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <img
          src="/src/images/watermark.webp" // adjust path
          alt="Hero"
          className="
            w-[100%] h-auto opacity-100
            md:w-[100%] md:opacity-100
            lg:w-[100% lg:opacity-100
            xl:w-[100%]
            translate-x-8 md:translate-x-0
            lg:-translate-x-4
            translate-y-[5rem]
            select-none
          "
        />
      </div>
      {/* Content */}
      <div className="section-container relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center lg:gap-10">
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
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/program" className="btn-secondary-on-dark text-sm">
                See the Program
              </Link>
            </div>

            <div className="lg:hidden flex justify-center pointer-events-none">
              <div className="relative w-full max-w-[280px]">
                <div className="absolute inset-[14%] rounded-full bg-brand-700/15 blur-3xl" />
                <img
                  src="/images/brand/aiface-transparent.png"
                  alt="Ad On AI abstract face mark"
                  className="relative w-full h-auto object-contain opacity-70 mix-blend-screen saturate-125 [mask-image:radial-gradient(circle_at_center,_black_58%,_transparent_92%)] drop-shadow-[0_18px_60px_rgba(66,99,235,0.16)]"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-end self-start pointer-events-none -translate-y-16 xl:-translate-y-20">
            <div className="relative w-full max-w-[520px]">
              <div className="absolute inset-[15%] rounded-full bg-brand-700/12 blur-[90px]" />
              <img
                src="/images/brand/aiface-transparent.png"
                alt="Ad On AI abstract face mark"
                className="relative w-full h-auto object-contain opacity-68 mix-blend-screen saturate-125 [mask-image:radial-gradient(circle_at_center,_black_60%,_transparent_94%)] drop-shadow-[0_18px_60px_rgba(66,99,235,0.14)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
