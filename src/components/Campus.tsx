import { motion } from 'framer-motion'
import { MapPin, Lightbulb, Network, Presentation } from 'lucide-react'

const campuses = [
  {
    name: 'Banjara Hills Campus',
    description: "Located in one of Hyderabad's most well-connected and established districts.",
    image: '/images/banjara-campus.jpeg',
  },
  {
    name: 'Raidurg Campus',
    description: "Situated in the heart of Hyderabad's tech and business corridor, near Financial District.",
    image: '/images/raidurg-campus.jpeg',
  },
]

const elabzFeatures = [
  { icon: Lightbulb, text: 'IIIT Hyderabad mentorship' },
  { icon: Network, text: 'TiE entrepreneur network' },
  { icon: Presentation, text: 'Incubation support' },
  { icon: MapPin, text: 'Pitch event access' },
]

export default function Campus() {
  return (
    <section id="campus" className="py-20 sm:py-28 bg-cream overflow-hidden relative">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-red tracking-widest uppercase mb-3">
            Our Campuses
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Built in Hyderabad.{' '}
            <span className="text-red">Built for Business.</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Two campuses. One city that runs on ambition. Hyderabad is home to a thriving
            tech and startup ecosystem, and your classrooms sit inside it.
          </p>
        </motion.div>

        {/* Campus cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {campuses.map((campus, i) => (
            <motion.div
              key={campus.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 80 }}
              className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-red/20 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 sm:h-72 overflow-hidden">
                <img
                  src={campus.image}
                  alt={campus.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    <h3 className="font-serif text-xl font-semibold text-white">{campus.name}</h3>
                  </div>
                  <p className="text-sm text-white/70">{campus.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* E-Labz section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80 }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/building-entrepreneurs.jpg"
              alt="E-Labz Incubation Center"
              className="w-full h-64 lg:h-80 object-cover rounded-2xl"
            />
          </div>
          <div className="bg-navy rounded-2xl p-6 sm:p-8 text-white">
            <p className="text-sm font-medium text-red-light tracking-widest uppercase mb-3">
              Incubation
            </p>
            <h3 className="font-serif text-2xl font-semibold mb-4">
              E-Labz Incubation Center
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Built with IIIT Hyderabad and TiE. Students don't just study startups.
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
