import { motion } from 'framer-motion'
import { AnimatedCounter } from './AnimatedCounter'

const stats = [
  { value: 7, suffix: '', label: 'Career-Specific Programs' },
  { value: 480, suffix: '+', label: 'Seats Available' },
  { value: 5000, suffix: '+', label: 'Coursera Courses' },
  { value: 5, suffix: '', label: 'Industry Partners' },
]

export default function Stats() {
  return (
    <section className="py-14 sm:py-16 bg-red-soft relative overflow-hidden border-y border-red-light">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-5xl font-serif font-bold text-red mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-navy/60 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
