import { motion } from 'framer-motion'
// Partner logos only — no icon imports
import {
  KPMGLogo,
  CourseraLogo,
  HarvardLogo,
  IIITLogo,
  TiELogo,
} from './icons/PartnerLogos'

const partners = [
  {
    name: 'KPMG',
    Logo: KPMGLogo,
    description: 'Curriculum designed and validated by KPMG consultants. Not professors guessing what industry needs.',
    proof: 'Full curriculum partnership across all BBA programs',
    featured: true,
  },
  {
    name: 'Coursera',
    Logo: CourseraLogo,
    description: 'Unlimited access to 5,000+ courses from Google, IBM, Meta, and top global universities.',
    proof: '5,000+ courses for every enrolled student',
    featured: false,
  },
  {
    name: 'Harvard Business Publishing',
    Logo: HarvardLogo,
    description: 'Learn strategy, finance, and leadership through the same case studies used at Harvard Business School.',
    proof: 'HBP Education case study access',
    featured: false,
  },
  {
    name: 'E-Labz (IIIT Hyderabad)',
    Logo: IIITLogo,
    description: 'On-campus incubation program. Develop and test real business ideas with mentorship from a top tech institution.',
    proof: 'Active incubation partnership',
    featured: false,
  },
  {
    name: 'TiE',
    Logo: TiELogo,
    description: "Access TiE's global entrepreneur network for mentorship, pitch events, and investor connections.",
    proof: 'Integrated into E-Labz incubation',
    featured: false,
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 12 } },
}

export default function IndustryEdge() {
  const featured = partners.find((p) => p.featured)!
  const others = partners.filter((p) => !p.featured)

  return (
    <section className="relative py-20 sm:py-28 bg-cream overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #061E43 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-red tracking-widest uppercase mb-3">
            Industry Partnerships
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4">
            Five Partners. Zero Textbook Theory.
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Every partner shapes what you learn, how you learn it,
            and what skills you leave with.
          </p>
        </motion.div>

        {/* Featured partner -- KPMG */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80 }}
          className="mb-8"
        >
          <div className="relative group rounded-2xl p-8 sm:p-10 bg-red-soft border-2 border-red/20 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red/10">
            <div className="relative grid md:grid-cols-[auto_1fr] gap-6 items-center">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white p-3">
                <featured.Logo className="h-12 w-auto" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-serif text-2xl font-semibold text-navy">{featured.name}</h3>
                  <span className="px-3 py-1 rounded-full bg-red text-white text-xs font-medium">
                    Lead Curriculum Partner
                  </span>
                </div>
                <p className="text-body text-lg mb-2">{featured.description}</p>
                <p className="text-red text-sm font-medium">{featured.proof}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other partners */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {others.map((partner) => {
            return (
              <motion.div
                key={partner.name}
                variants={item}
                className="group p-6 rounded-xl bg-white border border-gray-100 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-12 flex items-center mb-4">
                  <partner.Logo className="h-8" />
                </div>
                <p className="text-sm text-body leading-relaxed mb-3">{partner.description}</p>
                <p className="text-xs text-red font-medium">{partner.proof}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
