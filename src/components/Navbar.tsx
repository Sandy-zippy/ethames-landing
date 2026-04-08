import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.webp'
import { img } from '../lib/assets'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Programs', href: '#programs' },
    { label: 'Campus', href: '#campus' },
    { label: 'Recognition', href: '#recognition' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex-shrink-0 cursor-pointer flex items-center gap-2">
            <img src={logo} alt="Ethames Business School" className={`h-10 sm:h-12 w-auto transition-all duration-300 ${!scrolled ? 'brightness-0 invert' : ''}`} />
            <span className={`text-sm font-light ${scrolled ? 'text-navy/30' : 'text-white/40'}`}>×</span>
            <img src={img('/images/iyra-logo.svg')} alt="IYRA" className={`h-10 sm:h-12 w-auto transition-all duration-300 ${!scrolled ? 'brightness-0 invert' : ''}`} />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  scrolled
                    ? 'text-navy hover:text-red'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#apply"
              className="px-6 py-2.5 rounded-lg bg-red text-white text-sm font-semibold hover:bg-red/90 transition-colors duration-200 cursor-pointer"
            >
              Apply Now
            </a>
          </div>

          <button
            className={`md:hidden p-2 cursor-pointer transition-colors ${
              scrolled ? 'text-navy' : 'text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-navy hover:text-red transition-colors cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#apply"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-6 py-2.5 rounded-lg bg-red text-white text-sm font-semibold cursor-pointer"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
