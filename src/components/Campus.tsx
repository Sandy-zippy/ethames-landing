import { motion } from 'framer-motion'

const stats = [
  { value: '15+', label: 'Acres Campus' },
  { value: '50+', label: 'Industry Partners' },
  { value: '95%', label: 'Placement Rate' },
  { value: '20+', label: 'Student Clubs' },
]

const facilities = [
  'State-of-the-art Computer Labs',
  'Bloomberg Finance Terminal',
  'Startup Incubation Centre',
  'Smart Classrooms with AV',
  'Library with 50,000+ Volumes',
  'Sports Complex & Gym',
  'Hostel with Wi-Fi Campus',
  'Cafeteria & Recreation Zone',
]

export default function Campus() {
  return (
    <section id="campus" className="py-20 sm:py-28 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              A Campus Built for <span className="text-red">Tomorrow's Leaders</span>
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              From Bloomberg terminals to startup incubation labs, every facility
              is designed to give you hands-on experience that mirrors the professional world.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-semibold text-red">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Facilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-lg font-semibold mb-6">Campus Facilities</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {facilities.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-white/80">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
