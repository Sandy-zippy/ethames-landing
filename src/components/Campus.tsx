import { img } from '../lib/assets'
import { motion } from 'framer-motion'
import { MapPin, Lightbulb, Network, Presentation } from 'lucide-react'

const campuses = [
  {
    name: 'Raidurgam Campus',
    description: "In the heart of Hyderabad's tech corridor, near Financial District.",
    image: '/images/raidurg-campus.jpeg',
  },
]

const elabzFeatures = [
  { icon: Lightbulb, text: 'Expert mentorship' },
  { icon: Network, text: 'TiE entrepreneur network' },
  { icon: Presentation, text: 'Incubation support' },
  { icon: MapPin, text: 'Pitch event access' },
]

export default function Campus() {
  return (
    <section id="campus" className="py-14 sm:py-28 bg-cream overflow-hidden relative">
      {/* Texture */}
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
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-sm font-medium text-red tracking-widest uppercase mb-3">
            Our Campuses
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4">
            Built in Hyderabad.{' '}
            <span className="text-red">Built for Business.</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Located in Hyderabad's thriving tech and startup ecosystem.
          </p>
        </motion.div>

        {/* Campus card — full-width hero style */}
        <motion.div
          transition={{ type: 'spring', stiffness: 80 }}
          className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-red/20 shadow-sm hover:shadow-xl transition-all duration-300 mb-12 sm:mb-16"
        >
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img
              src={img(campuses[0].image)}
              alt={campuses[0].name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">{campuses[0].name}</h3>
              </div>
              <p className="text-sm sm:text-base text-white/70 max-w-lg">{campuses[0].description}</p>
              <p className="text-xs text-white/50 mt-2">Survey No. 13, Raidurgam, Gachibowli, near Financial District, Hyderabad, Telangana - 500081</p>
            </div>
          </div>
        </motion.div>

        {/* E-Labz section */}
        <motion.div
          transition={{ type: 'spring', stiffness: 80 }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          <div className="rounded-2xl overflow-hidden">
            <img
              src={img("/images/building-entrepreneurs.jpg")}
              alt="E-Labz Incubation Center"
              className="w-full h-64 lg:h-80 object-cover rounded-2xl"
            />
          </div>
          <div className="bg-navy rounded-2xl p-5 sm:p-8 text-white">
            <p className="text-sm font-medium text-red-light tracking-widest uppercase mb-3">
              Incubation
            </p>
            <h3 className="font-serif text-2xl font-semibold mb-4">
              E-Labz Incubation Center
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              On-campus incubation with mentorship from top tech institutions. Students don't just study startups.
              They develop ideas, get mentorship, and access entrepreneur networks
              while still in college.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {elabzFeatures.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red/20 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4 h-4 text-red-light" />
                  </div>
                  <span className="text-sm text-white/80">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
