import { motion } from 'framer-motion'

const recognitions = [
  {
    title: 'UGC Recognised',
    description: 'University Grants Commission approved programs ensuring your degree is valid nationwide.',
  },
  {
    title: 'AICTE Approved',
    description: 'All India Council for Technical Education approval for BCA programs.',
  },
  {
    title: 'NAAC Accredited',
    description: 'National Assessment and Accreditation Council certified for quality education standards.',
  },
  {
    title: 'ISO 9001:2015',
    description: 'International quality management certification for operational excellence.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Recognition() {
  return (
    <section id="recognition" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-4">
            Recognised. Accredited. Trusted.
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Your degree carries weight. eTHAMES holds every major recognition that
            employers and higher education institutions look for.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {recognitions.map((rec) => (
            <motion.div
              key={rec.title}
              variants={item}
              className="text-center p-6 rounded-xl border border-gray-100 hover:border-navy/10 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{rec.title}</h3>
              <p className="text-sm text-body leading-relaxed">{rec.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
