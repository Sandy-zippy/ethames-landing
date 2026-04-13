import { scrollToSection } from "../lib/scroll"
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react'
import { programs } from '../data/programs'
import { img } from '../lib/assets'
import { useEffect, useRef } from 'react'

export default function Programs() {
  const featured = programs.filter((p) => p.featured)
  const others = programs.filter((p) => !p.featured)
  const sectionRef = useRef<HTMLElement>(null)
  const firedRef = useRef(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !firedRef.current) {
          firedRef.current = true
          if (window.fbq) window.fbq('track', 'ViewContent', { content_name: 'Programs Section', content_category: 'BBA/BCA Programs' })
          if (window.gtag) window.gtag('event', 'view_item_list', { item_list_name: 'Programs' })
          obs.disconnect()
        }
      })
    }, { threshold: 0.3 })
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="programs" ref={sectionRef} className="py-14 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-sm font-medium text-red tracking-widest uppercase mb-3">
            Academic Programs
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4">
            Pick a Career Track. Not Just a Degree.
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Six programs across two campuses. Each one backed by Coursera certifications, Harvard Manage Mentor,
            and focused on a specific career outcome.
          </p>
        </motion.div>

        {/* Featured Programs -- 3 large cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {featured.map((prog, i) => (
            <motion.div
              key={prog.name}
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
                <p className="text-xs text-muted mb-2">
                  {prog.seats} seats | {prog.duration}
                </p>
                <p className="inline-flex items-center gap-1 text-xs text-navy/60 bg-cream px-2.5 py-1 rounded-full mb-4">
                  <MapPin className="w-3 h-3" />
                  {prog.campus}
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
                <button
                  onClick={() => scrollToSection("apply")} role="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red text-white font-medium text-sm hover:bg-red/90 transition-colors duration-200 cursor-pointer mt-auto self-start"
                >
                  Apply for {prog.shortName}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Programs -- smaller cards with image headers */}
        <motion.div
          
          
          
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {others.map((prog) => (
            <motion.div
              key={prog.name}
              
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-red/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
                <img
                  src={img(prog.image)}
                  alt={prog.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-semibold text-navy mb-2 group-hover:text-red transition-colors duration-200">
                  {prog.name}
                </h3>
                <p className="text-xs text-muted mb-2">
                  {prog.seats} seats | {prog.duration}
                </p>
                <p className="inline-flex items-center gap-1 text-xs text-navy/60 bg-cream px-2.5 py-1 rounded-full mb-4">
                  <MapPin className="w-3 h-3" />
                  {prog.campus}
                </p>
                <p className="text-sm text-body leading-relaxed mb-4 flex-grow">{prog.description}</p>
                <button
                  onClick={() => scrollToSection("apply")} role="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red text-white font-medium text-sm hover:bg-red/90 transition-colors duration-200 cursor-pointer mt-auto self-start"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
