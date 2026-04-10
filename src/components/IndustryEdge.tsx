import { motion } from 'framer-motion'
import { img } from '../lib/assets'
import logo from '../assets/logo.webp'
// Partner logos only — no icon imports
import {
  CourseraLogo,
  HarvardLogo,
  EYLogo,
  TiELogo,
} from './icons/PartnerLogos'

const partners = [
  {
    name: 'Ernst & Young',
    Logo: EYLogo,
    description: 'Knowledge partnership with one of the world\'s leading professional services firms for industry-relevant academic programs.',
    proof: 'Knowledge partner',
    featured: true,
  },
  {
    name: 'TiE Network',
    Logo: TiELogo,
    description: 'Connected to The Indus Entrepreneurs (TiE), the world\'s largest entrepreneur network fostering entrepreneurship through mentoring and networking.',
    proof: 'Entrepreneur network partner',
    featured: false,
  },
  {
    name: 'Harvard Manage Mentor',
    Logo: HarvardLogo,
    description: 'Access Harvard Manage Mentor, a globally recognized platform for building management and leadership capabilities through structured, interactive modules.',
    proof: 'Leadership development platform access',
    featured: false,
  },
  {
    name: 'E-Labz Incubation',
    Logo: null,
    description: 'On-campus incubation program. Develop and test real business ideas with mentorship from leading tech institutions and entrepreneur networks.',
    proof: 'Active incubation partnership',
    featured: false,
  },
  {
    name: 'Coursera',
    Logo: CourseraLogo,
    description: 'Unlimited access to 5,000+ courses from Google, IBM, Meta, and top global universities.',
    proof: '5,000+ courses for every enrolled student',
    featured: false,
  },
]

export default function IndustryEdge() {
  const featured = partners.find((p) => p.featured)!
  const others = partners.filter((p) => !p.featured)

  return (
    <section className="relative py-14 sm:py-28 bg-cream overflow-hidden">
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
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-sm font-medium text-red tracking-widest uppercase mb-3">
            Strategic Collaboration
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <img src={logo} alt="Ethames Business School" className="h-10 sm:h-12 w-auto" />
            <span className="text-2xl text-navy/30 font-light">×</span>
            <img src={img('/images/iyra-logo-transparent.png')} alt="IYRA" className="h-10 sm:h-12 w-auto" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4">
            Strategic Collaboration
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Industry partners that shape what you learn, how you learn it,
            and what skills you leave with.
          </p>
        </motion.div>

        {/* Featured partner -- Ernst & Young */}
        <motion.div
          transition={{ type: 'spring', stiffness: 80 }}
          className="mb-8"
        >
          <div className="relative group rounded-2xl p-5 sm:p-10 bg-red-soft border-2 border-red/20 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red/10">
            <div className="relative grid md:grid-cols-[auto_1fr] gap-6 items-center">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white p-3">
                {featured.Logo && <featured.Logo className="h-12 w-auto" />}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-serif text-2xl font-semibold text-navy">{featured.name}</h3>
                  <span className="px-3 py-1 rounded-full bg-red text-white text-xs font-medium">
                    Knowledge Partner
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
          
          
          
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {others.map((partner) => {
            return (
              <motion.div
                key={partner.name}
                
                className="group p-6 rounded-xl bg-white border border-gray-100 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="h-12 flex items-center mb-3">
                  {partner.Logo ? (
                    <partner.Logo className="h-8 max-w-[120px]" />
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                      <span className="text-navy font-bold text-sm">{partner.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy mb-2">{partner.name}</h3>
                <p className="text-sm text-body leading-relaxed mb-3 flex-grow">{partner.description}</p>
                <p className="text-xs text-red font-medium mt-auto">{partner.proof}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
