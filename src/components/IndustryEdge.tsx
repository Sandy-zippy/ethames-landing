import { motion } from 'framer-motion'

const edges = [
  {
    icon: '🏢',
    title: 'Live Industry Projects',
    description: 'Work on real business problems from day one, not just textbook case studies.',
  },
  {
    icon: '🎓',
    title: 'Placement-First Curriculum',
    description: 'Every module is designed backward from what top recruiters actually hire for.',
  },
  {
    icon: '🌍',
    title: 'Global Campus Experience',
    description: 'International faculty, cross-border case competitions, and semester exchange options.',
  },
  {
    icon: '🤝',
    title: '50+ Hiring Partners',
    description: 'Dedicated placement cell with direct pipelines to top companies across sectors.',
  },
  {
    icon: '💻',
    title: 'Tech-Enabled Learning',
    description: 'AI tools, cloud labs, and data platforms integrated into every program.',
  },
  {
    icon: '📋',
    title: 'Mentorship Program',
    description: 'One-on-one mentoring from CXOs and founders who guide your career trajectory.',
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

export default function IndustryEdge() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-4">
            The eTHAMES Industry Edge
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We don't just teach business. We immerse you in it. Every program is built
            with direct input from hiring managers and industry leaders.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {edges.map((edge) => (
            <motion.div
              key={edge.title}
              variants={item}
              className="p-6 rounded-xl border border-gray-100 hover:border-red/20 hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-4">{edge.icon}</div>
              <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-red transition-colors">
                {edge.title}
              </h3>
              <p className="text-sm text-body leading-relaxed">{edge.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
