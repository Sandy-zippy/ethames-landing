import { CheckCircle2, Phone, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.webp'
import { img } from '../lib/assets'
import { WhatsAppLogo } from './icons/PartnerLogos'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy via-navy to-navy-light relative overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-10"
        >
          <img src={logo} alt="Ethames Business School" className="h-8 sm:h-9 w-auto brightness-0 invert" />
          <span className="text-xs text-white/20 font-light">×</span>
          <img src={img('/images/iyra-logo-transparent.png')} alt="IYRA" className="h-14 sm:h-16 w-auto brightness-0 invert" />
        </motion.div>

        {/* Success Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.1 }}
          className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl max-w-lg w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
            className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="w-8 h-8 text-green-400" />
          </motion.div>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Application Received!
          </h1>
          <p className="text-white/60 mb-2">
            Thank you for your interest in Ethames Business School.
          </p>
          <p className="text-white/50 text-sm mb-8">
            Our admissions counsellor will call you within 24 hours to discuss your program, fees, and next steps.
          </p>

          {/* Contact options */}
          <div className="space-y-3">
            <a
              href="https://wa.me/919703003456?text=Hi%2C%20I%20just%20submitted%20my%20application%20on%20the%20Ethames%20website.%20Looking%20forward%20to%20hearing%20from%20the%20admissions%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:bg-[#25D366]/90 transition-colors cursor-pointer"
            >
              <WhatsAppLogo className="h-5 w-5" />
              Chat with Admissions on WhatsApp
            </a>

            <a
              href="tel:+919703003456"
              className="flex items-center justify-center gap-3 w-full px-6 py-3.5 rounded-xl bg-white/10 text-white font-medium text-sm border border-white/15 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              Call +91-9703003456
            </a>
          </div>
        </motion.div>

        {/* Back to home */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => { window.location.hash = '/'; window.scrollTo(0, 0); }}
          className="mt-8 inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors cursor-pointer"
        >
          Back to Home
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </div>
  )
}
