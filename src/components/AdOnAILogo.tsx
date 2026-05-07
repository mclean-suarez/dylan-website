/**
 * Ad On AI brand logo — definitive logo asset.
 *
 * variant="full"  → logo mark + "AD ON AI" wordmark (default)
 * variant="mark"  → logo mark only
 *
 * Uses the authoritative brand SVG asset imported as an image.
 * Text colour inherits from parent via currentColor on the wordmark.
 */

import logoSrc from '../assets/newlogo.png'
import claudeLogoSrc from '../assets/tool-logos/claude.svg'

interface AdOnAILogoProps {
  variant?: 'full' | 'mark'
  className?: string
  showExpertTagline?: boolean
}

export default function AdOnAILogo({
  variant = 'full',
  className = '',
  showExpertTagline = false,
}: AdOnAILogoProps) {
  if (variant === 'mark') {
    return (
      <img
        src={logoSrc}
        alt="Ad On AI"
        className={className}
      />
    )
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoSrc}
        alt=""
        aria-hidden="true"
        className="h-10 w-auto sm:h-12"
      />
      <div className="flex flex-col">
        <span className="whitespace-nowrap select-none tracking-[0.12em] leading-none">
          <span className="text-[26px] sm:text-[30px] font-extrabold">AD</span>
          <span className="text-[20px] sm:text-[22px] font-bold ml-[0.12em]">ON AI</span>
        </span>
        {showExpertTagline && (
          <span className="hidden md:flex items-center gap-1.5 mt-1 font-mono text-[10px] uppercase tracking-[0.13em] opacity-70 whitespace-nowrap">
            <span>Ran by Certified</span>
            <img
              src={claudeLogoSrc}
              alt=""
              aria-hidden="true"
              className="h-3.5 w-3.5 rounded-[2px]"
            />
            <span>Claude Experts</span>
          </span>
        )}
      </div>
    </div>
  )
}
