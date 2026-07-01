import { Link } from 'react-router-dom'
import { ArrowUpRight, Facebook, Instagram, Linkedin } from 'lucide-react'
import AdOnAILogo from './AdOnAILogo'

const siteLinks = [
  { label: 'BPO AI Learning Program', href: '/bpo-ai-program' },
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
  { icon: Facebook, href: 'https://www.facebook.com/adongroup1/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/adongroup', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/adongroup/', label: 'LinkedIn' },
]

export default function Footer() {
  const columns = [
    { title: 'Ad On AI', links: siteLinks },
    { title: 'Useful Links', links: usefulLinks },
    { title: 'Ad On Group Sites', links: ecosystemLinks },
  ]
  return (
    <footer className="relative overflow-hidden border-t border-white/10" style={{ background: '#05070D' }}>
      {/* faint blueprint accent */}
      <div className="absolute inset-0 pointer-events-none opacity-60" style={{ backgroundImage: 'linear-gradient(rgba(111,155,255,0.06) 1px,transparent 1px), linear-gradient(90deg, rgba(111,155,255,0.06) 1px, transparent 1px)', backgroundSize: '150px 150px' }} />
      <div className="relative section-container">
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="inline-block mb-3 hover:opacity-80 transition-opacity text-white">
              <AdOnAILogo />
            </Link>
            <p className="text-xs text-white/40 leading-relaxed max-w-xs">
              AI training and enablement for Australian businesses. Part of the Ad On Group ecosystem.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[10px] text-white/35 uppercase tracking-[0.15em] mb-4 font-bold">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/55 hover:text-white transition-colors inline-flex items-center gap-1.5">
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-40" />
                      </a>
                    ) : (
                      <Link to={link.href} className="text-[13px] text-white/55 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Ad On Group. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-white/40 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-xs text-white/40 hover:text-white transition-colors">Terms</a>
            <div className="flex items-center gap-2.5 ml-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center rounded-[8px] bg-white/[0.06] hover:bg-white/15 transition-colors"
                >
                  <social.icon className="w-3.5 h-3.5 text-white/70" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
