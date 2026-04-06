import { motion } from 'framer-motion'
import LeadForm from './LeadForm'

export default function Hero() {
  return (
    <section className="relative min-h-screen gradient-brand pt-20 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
              Admissions Open for 2026 Batch
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Your Career Starts with the{' '}
              <span className="text-red">Right Degree</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              Industry-integrated BBA &amp; BCA programs with 100% placement support,
              live projects, and a global campus experience at eTHAMES Business School.
            </p>

            <div className="flex flex-wrap gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-red text-lg font-semibold">7</span> Programs
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red text-lg font-semibold">330+</span> Seats
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red text-lg font-semibold">50+</span> Industry Partners
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="apply"
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-navy mb-1">Get Free Counselling</h2>
            <p className="text-sm text-body mb-6">Fill in your details. Our admissions team will reach out within 24 hours.</p>
            <LeadForm variant="light" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
