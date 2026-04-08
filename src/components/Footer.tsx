import { Link } from 'react-router-dom'
import { ArrowUpRight, Facebook, Instagram, Linkedin } from 'lucide-react'
import AdOnAILogo from './AdOnAILogo'

const siteLinks = [
  { label: 'Program', href: '/program' },
  { label: 'Meet The Team', href: '/about' },
  { label: 'FAQ', href: '/faq' },
]

const usefulLinks = [
  { label: 'Contact', href: '/contact' },
  { label: 'Launch Academy', href: 'https://terminal-v4-production.up.railway.app' },
]

const ecosystemLinks = [
  { label: 'Ad On Group', href: 'https://adongroup.com.au/' },
  { label: 'Ad On Workforce', href: 'https://adonworkforce.com.au/' },
  { label: 'Ad On South Africa', href: 'https://adonsa.co.za/' },
]

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/adongroup', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/adongroup', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/adongroup', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-[#2d3a4a]">
      <div className="section-container">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Logo + brand area */}
          <div className="lg:col-span-3">
            <Link to="/" className="inline-block mb-6 hover:opacity-80 transition-opacity text-white">
              <AdOnAILogo />
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              AI training and enablement for staff in Australian businesses.
              Part of the Ad On Group ecosystem.
            </p>
          </div>

          {/* Ad On AI */}
          <div className="lg:col-span-2 lg:col-start-5">
            <h4 className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-5 font-bold">
              Ad On AI
            </h4>
            <ul className="space-y-3">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-5 font-bold">
              Useful Links
            </h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('http') ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Ad On Group Sites */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-5 font-bold">
              Ad On Group Sites
            </h4>
            <ul className="space-y-3">
              {ecosystemLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-40" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div className="lg:col-span-3 lg:col-start-10">
            <div className="space-y-3 mb-8">
              <a href="#" className="block text-sm text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-white/50 hover:text-white transition-colors">
                Terms and Conditions
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-4 h-4 text-white/70" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-center gap-2 border-t border-white/10">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Ad On Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
