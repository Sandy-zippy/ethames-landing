import { img } from '../lib/assets'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import LeadForm from './LeadForm'
import { WhatsAppLogo } from './icons/PartnerLogos'

const faqs = [
  {
    q: 'What degree will I receive?',
    a: "You receive a degree from Osmania University, one of India's established state universities. It is fully recognized by UGC. The degree is granted by Osmania University, not by Ethames directly.",
  },
  {
    q: 'Is the degree from Ethames or Osmania University?',
    a: 'The degree is from Osmania University. Ethames is affiliated with Osmania University, so the degree you earn carries the full recognition and validity of an Osmania University qualification.',
  },
  {
    q: 'Is Ethames recognized by UGC?',
    a: 'Yes. Ethames is affiliated with Osmania University, which is UGC-recognized. Your degree carries the same validity as any Osmania University qualification.',
  },
  {
    q: 'What programs are available?',
    a: 'Ethames offers 7 programs including Professional Entrepreneurship (120 seats), AI Professional, Cybersecurity Professional, Investment Banking Professional, Global Finance Professional, Family Business Leadership, and Risk Management Professional.',
  },
  {
    q: 'What makes Ethames different from other colleges?',
    a: 'The curriculum integrates Harvard Manage Mentor for leadership development, Coursera for technical certifications, and E-Labz for real incubation experience. You graduate with an Osmania University degree plus industry-relevant skills.',
  },
  {
    q: 'What is the fee structure?',
    a: 'Our admissions team will share the detailed fee structure, scholarship options, and payment plans during your counselling session. Fill out the form above to get started.',
  },
  {
    q: 'How do I apply?',
    a: 'Fill out the form on this page. Our admissions team will call you within 24 hours to walk you through programs, fees, and next steps.',
  },
  {
    q: 'Where is the campus located?',
    a: 'Two campuses in Hyderabad: Raidurg (Gachibowli, near Financial District) and Banjara Hills. Both are central and well-connected.',
  },
]

export default function CTA() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-14 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Block with background image */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-12 sm:mb-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(' + img('/images/cta-bg.jpg') + ')' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy-light/90" />
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />
          </div>
          <div className="relative p-5 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 80 }}
              >
                <p className="text-sm font-medium text-gold tracking-widest uppercase mb-3">
                  Start Your Journey
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                  Admissions Are Open.
                  <br className="hidden sm:block" />
                  Apply in 3 Minutes.
                </h2>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Early applicants get priority access to program selection
                  and counselling sessions.
                </p>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-white hover:bg-[#25D366]/20 transition-colors duration-200 backdrop-blur-sm cursor-pointer"
                >
                  <WhatsAppLogo className="h-6 w-6" />
                  <span className="font-medium text-sm">Talk to Admissions on WhatsApp</span>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 80, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-8 border border-white/20 shadow-2xl"
              >
                <h3 className="font-serif text-lg font-semibold text-white mb-4">Reserve Your Seat</h3>
                <LeadForm variant="dark" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium text-red tracking-widest uppercase mb-3">
              Common Questions
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-cream rounded-xl border border-gray-100 overflow-hidden hover:border-gold/20 transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer group"
                >
                  <span className="text-sm font-medium text-navy pr-4 group-hover:text-red transition-colors duration-200">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-body leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
