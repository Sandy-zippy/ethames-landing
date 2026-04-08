import { scrollTo } from "../lib/scroll"
import { img } from '../lib/assets'
import { motion } from 'framer-motion'
import LeadForm from './LeadForm'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(' + img('/images/hero-v2.png') + ')' }}
      />
      {/* Navy overlay — lets campus image show through */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy-light/65" />

      {/* Dot grid animation */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 20 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-[10px] sm:text-xs font-medium border border-white/20 backdrop-blur-sm mb-3"
            >
              <span className="hidden sm:inline">In Strategic Collaboration with IYRA</span>
              <span className="sm:hidden">IYRA × Ethames</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-medium mb-5 sm:mb-8 border border-white/20 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
              Admissions Open for 2026 Batch
            </motion.div>

            <h1 className="font-serif text-[1.4rem] sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight">
              Built by Industry.{' '}
              <span className="text-gradient">Not by Academia.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/75 mb-4 max-w-xl leading-relaxed">
              Ernst &amp; Young knowledge partner. Harvard Manage Mentor. Osmania University degree.
            </p>
            <div className="mb-6 sm:mb-10" />

            <div className="flex flex-wrap gap-4">
              <a
                onClick={() => scrollTo("programs")} role="button"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-red text-white font-semibold text-sm hover:bg-red/90 transition-colors duration-200 cursor-pointer"
              >
                Explore Programs
              </a>
              <a
                onClick={() => scrollTo("apply")} role="button"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-white/10 text-white font-medium text-sm border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200 cursor-pointer"
              >
                Apply Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.3 }}
            id="apply"
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-8 border border-white/20 shadow-2xl"
          >
            <h2 className="font-serif text-xl font-semibold text-white mb-1">
              Reserve Your Seat for 2026
            </h2>
            <p className="text-sm text-white/60 mb-6">
              Our admissions team will reach out within 24 hours.
            </p>
            <LeadForm variant="dark" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
