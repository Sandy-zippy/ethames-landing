import { scrollToSection } from "../lib/scroll"
import { MapPin, Mail, Phone } from 'lucide-react'
import logo from '../assets/logo.webp'

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white/50 py-16 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={logo}
              alt="Ethames Business School"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed mb-6">
              Industry-integrated BBA &amp; BCA programs preparing students for
              the careers of tomorrow.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/30">
              <MapPin className="w-3.5 h-3.5" />
              <span>Hyderabad, India</span>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif text-white font-semibold text-sm mb-5 tracking-wide">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollToSection("programs")} role="button" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  BBA in Entrepreneurship
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("programs")} role="button" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  BCA in AI
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("programs")} role="button" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  BCA in Cybersecurity
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("programs")} role="button" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  BBA in Investment Banking
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("programs")} role="button" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  B.Com in Global Finance
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white font-semibold text-sm mb-5 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold/60" />
                <span>info@iyrahub.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold/60" />
                <span>+91 8896066666</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold/60 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 font-medium text-xs mb-1">Raidurg Campus</p>
                  <p>Gachibowli, Raidurg, Hyderabad - 500081</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold/60 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 font-medium text-xs mb-1">Banjara Hills Campus</p>
                  <p>Unit 101, 1st Floor, Elite Arcade, Road No. 1, Banjara Hills, Hyderabad - 500034</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-white/50 mb-1">
              An initiative of IYRA
            </p>
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Ethames Business School. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 text-xs">
            <button onClick={() => scrollToSection("apply")} role="button" className="hover:text-white transition-colors duration-200 cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => scrollToSection("apply")} role="button" className="hover:text-white transition-colors duration-200 cursor-pointer">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
