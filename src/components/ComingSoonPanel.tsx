import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface ComingSoonPanelProps {
  title: string
  description: string
  items: string[]
}

export default function ComingSoonPanel({ title, description, items }: ComingSoonPanelProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`glass-panel rounded-xl p-6 sm:p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <span className="inline-block text-xs font-semibold text-brand-400 uppercase tracking-wider mb-3">
        In Development
      </span>
      <h3 className="text-base font-semibold text-white mb-3">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-5">{description}</p>
      <div className="flex flex-wrap gap-2.5">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-medium text-gray-400"
          >
            {item}
            <span className="text-[10px] text-gray-600 font-normal">Coming Soon</span>
          </span>
        ))}
      </div>
    </div>
  )
}
