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

interface AdOnAILogoProps {
  variant?: 'full' | 'mark'
  className?: string
}

export default function AdOnAILogo({ variant = 'full', className = '' }: AdOnAILogoProps) {
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
      <span className="whitespace-nowrap select-none tracking-[0.12em]">
        <span className="text-[26px] sm:text-[30px] font-extrabold">AD</span>
        <span className="text-[20px] sm:text-[22px] font-bold ml-[0.12em]">ON AI</span>
      </span>
    </div>
  )
}
