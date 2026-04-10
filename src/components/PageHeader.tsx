import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface PageHeaderProps {
  label: string
  title: string
  subtitle: string
  artSrc?: string
  artAlt?: string
  artClassName?: string
}

export default function PageHeader({ label, title, subtitle, artSrc, artAlt = '', artClassName = '' }: PageHeaderProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="pt-32 pb-14 md:pt-40 md:pb-16 border-b border-stone-200 relative overflow-hidden">
      <div className="section-container">
        <div className={`${artSrc ? 'lg:grid lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:gap-10' : ''}`}>
          <div className={`max-w-3xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <p className="font-mono text-xs text-brand-700 uppercase tracking-[0.15em] mb-4">
              {label}
            </p>
            <div className="w-10 h-0.5 bg-brand-700 mb-6" />
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
              {title}
            </h1>
            <p className="text-base text-stone-500 leading-relaxed">
              {subtitle}
            </p>

            {artSrc ? (
              <div
                className={`mt-8 flex justify-center lg:hidden transition-all duration-500 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <img
                  src={artSrc}
                  alt={artAlt}
                  className={`w-full max-w-[220px] h-auto object-contain ${artClassName}`}
                />
              </div>
            ) : null}
          </div>

          {artSrc ? (
            <div
              className={`hidden lg:flex justify-end transition-all duration-500 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <img
                src={artSrc}
                alt={artAlt}
                className={`w-full max-w-[380px] h-auto object-contain ${artClassName}`}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
