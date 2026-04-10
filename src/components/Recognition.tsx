import { motion } from 'framer-motion'
import { img } from '../lib/assets'

const recognitions = [
  {
    title: 'Osmania University',
    description: 'UGC-recognized degree from one of India\'s established state universities, founded in 1918. Your degree carries full national and international recognition.',
    logo: '/images/osmania-logo.png',
  },
  {
    title: 'Times BBA Ranking',
    description: 'Ranked among Top 10 BBA programs in India by Times Education. Evaluated on curriculum quality, faculty, placements, and industry exposure.',
    logo: null,
    text: 'TIMES',
    textColor: 'text-[#E31937]',
  },
  {
    title: 'Higher Education Review',
    description: 'Listed in Top 10 Most Promising BBA Colleges in India (2022). Recognized for innovative pedagogy and industry-integrated learning.',
    logo: null,
    text: 'HER',
    textColor: 'text-navy',
  },
]

export default function Recognition() {
  return (
    <section id="recognition" className="py-14 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-sm font-medium text-red tracking-widest uppercase mb-3">
            Rankings &amp; Affiliations
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4">
            University Affiliation &amp; Rankings
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Nationally ranked programs backed by a UGC-recognized university degree.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {recognitions.map((rec) => (
            <motion.div
              key={rec.title}
              className="group text-center p-8 rounded-xl bg-white border border-gray-100 hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-16 flex items-center justify-center mx-auto mb-5">
                {rec.logo ? (
                  <img src={img(rec.logo)} alt={rec.title} className="h-14 object-contain" />
                ) : (
                  <span className={`font-black text-3xl ${rec.textColor || 'text-navy'}`}>{rec.text}</span>
                )}
              </div>
              <h3 className="font-serif text-base font-semibold text-navy mb-2">{rec.title}</h3>
              <p className="text-sm text-body leading-relaxed">{rec.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
