import { motion } from 'framer-motion'
import { programs } from '../data/programs'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Programs() {
  return (
    <section id="programs" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-4">
            Programs Built for the Real World
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Seven specialised programs. Each one designed with industry partners,
            taught by practitioners, and focused on employability from day one.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.map((prog) => (
            <motion.div
              key={prog.name}
              variants={item}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-red bg-red/10 px-3 py-1 rounded-full">
                  {prog.duration}
                </span>
                <span className="text-xs font-medium text-navy/60">
                  {prog.seats} seats
                </span>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-red transition-colors">
                {prog.name}
              </h3>
              <p className="text-sm text-body leading-relaxed mb-4">{prog.description}</p>
              <a
                href="#apply"
                className="inline-flex items-center text-sm font-medium text-red hover:text-red/80 transition-colors"
              >
                Apply Now
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
