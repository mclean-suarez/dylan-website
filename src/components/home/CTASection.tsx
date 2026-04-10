import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import phoneImage from '../../images/phone.png'

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="bg-navy-950 relative">
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none hidden md:flex">
      <img
        src={phoneImage}
        alt="Hero"
        className="
          w-[300px] h-auto opacity-100
          md:w-[300px] md:opacity-100
          lg:w-[300px] lg:opacity-100
          xl:w-[300px]
          translate-x-8 md:translate-x-0
          lg:-translate-x-[75rem]
          translate-y-[12rem]
          select-none
        "
      />
    </div>
      <div className="section-container">
        <div
          className={`py-20 md:py-28 text-center transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="font-mono text-xs text-brand-400 uppercase tracking-[0.15em] mb-4">
            Ready to Start?
          </p>
          <div className="w-10 h-0.5 bg-brand-400 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-5">
            Get More From Your People.<br />
            Start With a Conversation.
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free strategy call. We&apos;ll walk through the program,
            discuss your team, and show you how it fits your operation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/contact" className="btn-primary-on-dark text-sm">
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/program" className="btn-secondary-on-dark text-sm">
              See the Program
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-white/40">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Free 30-minute strategy call</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
              <span>No obligations</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
              <span>Structured AI Enablement Program</span>
            </div>
          </div>

          <div className="mt-12 pt-6 max-w-xl mx-auto border-t border-white/10">
            <p className="text-xs text-white/30">
              Ad On AI is a specialist division of{' '}
              <span className="text-white/50 font-medium">Ad On Group</span>
              . An Australian business ecosystem spanning workforce, operations, and technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
