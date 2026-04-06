import { motion } from 'framer-motion'

const recognitions = [
  {
    title: 'Osmania University',
    description: 'UGC-recognized degree. Same credential weight as any top state university.',
    logo: '/images/osmania-logo.png',
  },
  {
    title: 'KPMG',
    description: 'Curriculum designed in partnership with one of the Big Four.',
    logo: '/images/kpmg-logo.png',
  },
  {
    title: 'Coursera',
    description: '5,000+ courses. Same platform used by Fortune 500 teams.',
    logo: null,
    text: 'Coursera',
    textColor: 'text-[#0056D2]',
  },
  {
    title: 'Harvard Business Publishing',
    description: 'Real case studies from Harvard. Not textbook summaries.',
    logo: '/images/hbp-logo.png',
  },
  {
    title: 'TiE Network',
    description: "Connected to the world's largest entrepreneur network.",
    logo: '/images/tie-logo.png',
  },
  {
    title: 'Times BBA Ranking',
    description: 'Top 10 BBA program in India.',
    logo: null,
    text: 'TIMES',
    textColor: 'text-[#E31937]',
  },
  {
    title: 'Higher Education Review',
    description: 'Top 10 Most Promising BBA Colleges (2022).',
    logo: null,
    text: 'HER',
    textColor: 'text-navy',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 14 } },
}

export default function Recognition() {
  return (
    <section id="recognition" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-red tracking-widest uppercase mb-3">
            Credentials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Ranked. Recognized. Industry-Backed.
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Every credential here is third-party verified, not self-proclaimed.
          </p>
        </motion.div>

        {/* Top row: 5 partner logos */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-6"
        >
          {recognitions.slice(0, 5).map((rec) => (
            <motion.div
              key={rec.title}
              variants={item}
              className="group text-center p-6 rounded-xl bg-white border border-gray-100 hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-16 flex items-center justify-center mx-auto mb-4">
                {rec.logo ? (
                  <img src={rec.logo} alt={rec.title} className="h-12 object-contain" />
                ) : (
                  <span className={`font-bold text-2xl ${rec.textColor || 'text-navy'}`}>{rec.text}</span>
                )}
              </div>
              <h3 className="font-serif text-sm font-semibold text-navy mb-1">{rec.title}</h3>
              <p className="text-xs text-body leading-relaxed">{rec.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row: 2 ranking badges centered */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {recognitions.slice(5).map((rec) => (
            <motion.div
              key={rec.title}
              variants={item}
              className="group text-center p-6 rounded-xl bg-white border border-gray-100 hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-16 flex items-center justify-center mx-auto mb-4">
                <span className={`font-black text-3xl ${rec.textColor || 'text-navy'}`}>{rec.text}</span>
              </div>
              <h3 className="font-serif text-sm font-semibold text-navy mb-1">{rec.title}</h3>
              <p className="text-xs text-body leading-relaxed">{rec.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
