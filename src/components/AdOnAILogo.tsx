/**
 * Ad On AI brand logo — definitive logo asset.
 *
 * variant="full"  → logo mark + "AD ON AI" wordmark (default)
 * variant="mark"  → logo mark only
 *
 * Uses the authoritative brand SVG asset imported as an image.
 * Text colour inherits from parent via currentColor on the wordmark.
 */

import logoSrc from '../assets/adonai-logo-optimized.svg'

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
      <span className="text-[22px] sm:text-2xl font-bold tracking-[0.14em] whitespace-nowrap select-none">
        AD ON AI
      </span>
    </div>
  )
}
