import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { programs } from '../data/programs'
import { img } from '../lib/assets'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 14 } },
}

export default function Programs() {
  const featured = programs.filter((p) => p.featured)
  const others = programs.filter((p) => !p.featured)

  return (
    <section id="programs" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-red tracking-widest uppercase mb-3">
            Academic Programs
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4">
            Pick a Career Track. Not Just a Degree.
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Seven programs. Each one built with KPMG, backed by Coursera certifications,
            and focused on a specific career outcome.
          </p>
        </motion.div>

        {/* Featured Programs -- 3 large cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {featured.map((prog, i) => (
            <motion.div
              key={prog.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 80 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-red/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
                <img
                  src={img(prog.image)}
                  alt={prog.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-xs font-semibold text-white bg-red px-3 py-1 rounded-full">
                    Featured Program
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-semibold text-navy mb-2 group-hover:text-red transition-colors duration-200">
                  {prog.name}
                </h3>
                <p className="text-xs text-muted mb-4">
                  {prog.seats} seats | {prog.duration}
                </p>
                {prog.bullets && (
                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {prog.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-red flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-body leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red text-white font-medium text-sm hover:bg-red/90 transition-colors duration-200 cursor-pointer mt-auto self-start"
                >
                  Apply for {prog.shortName}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Programs -- smaller cards with image headers */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {others.map((prog) => (
            <motion.div
              key={prog.name}
              variants={item}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={img(prog.image)}
                  alt={prog.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-red bg-red/5 px-3 py-1 rounded-full">
                    {prog.duration}
                  </span>
                  <span className="text-xs font-medium text-muted">
                    {prog.seats} seats
                  </span>
                </div>
                <h3 className="font-serif text-base font-semibold text-navy mb-3 group-hover:text-red transition-colors duration-200">
                  {prog.name}
                </h3>
                <p className="text-sm text-body leading-relaxed mb-4">{prog.description}</p>
                <a
                  href="#apply"
                  className="inline-flex items-center text-sm font-medium text-red hover:text-red/80 transition-colors duration-200 cursor-pointer"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
