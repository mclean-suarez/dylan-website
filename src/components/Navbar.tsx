import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import AdOnAILogo from './AdOnAILogo'

const navLinks = [
  { label: 'Program', href: '/program' },
  { label: 'For Clients', href: '/aow' },
  { label: 'Proof', href: '/proof' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const onDark = isHome && !scrolled && !isOpen

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        onDark
          ? 'bg-transparent'
          : 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-200'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-24">
          <Link
            to="/"
            className={`hover:opacity-80 transition-opacity ${onDark ? 'text-white' : 'text-stone-900'}`}
          >
            <AdOnAILogo />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-base font-medium transition-colors ${
                  location.pathname === link.href
                    ? onDark ? 'text-white' : 'text-stone-900'
                    : onDark ? 'text-white/60 hover:text-white' : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#"
              className={`text-base font-medium transition-colors ${
                onDark
                  ? 'text-white/60 hover:text-white'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              Launch Terminal
            </a>
            <Link
              to="/contact"
              className={onDark ? 'btn-primary-on-dark text-base py-3 px-7' : 'btn-primary text-base py-3 px-7'}
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-3 transition-colors ${
              onDark ? 'text-white/60 hover:text-white' : 'text-stone-500 hover:text-stone-900'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-stone-200 pb-8 animate-fade-in">
            <div className="flex flex-col gap-1 pt-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-4 text-base font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-stone-900 bg-stone-100'
                      : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#"
                className="px-4 py-4 text-base font-medium text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              >
                Launch Terminal
              </a>
              <div className="pt-4 px-4">
                <Link to="/contact" className="btn-primary text-base py-3 w-full">
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
