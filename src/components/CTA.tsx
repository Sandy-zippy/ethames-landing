import { img } from '../lib/assets'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import LeadForm from './LeadForm'
import { WhatsAppLogo } from './icons/PartnerLogos'

const faqs = [
  {
    q: 'What degree will I receive?',
    a: "You receive a UGC-recognized degree from Osmania University, one of India's established state universities.",
  },
  {
    q: 'Is Ethames recognized by UGC?',
    a: 'Yes. Ethames is affiliated with a UGC-recognized university. Your degree carries full validity and recognition.',
  },
  {
    q: 'What programs are available?',
    a: 'Ethames offers 6 programs across two campuses: Entrepreneurship (120 seats), AI, and Cybersecurity at Raidurgam; Investment Banking, Family Business Leadership, and Risk Management at Banjara Hills.',
  },
  {
    q: 'What makes Ethames different from other colleges?',
    a: 'The curriculum integrates Harvard Manage Mentor for leadership development, Coursera for technical certifications, and E-Labz for real incubation experience. You graduate with a UGC-recognized degree plus industry-relevant skills.',
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
    a: 'Our Raidurgam campus is located in Gachibowli, near the Financial District in Hyderabad.',
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
                transition={{ type: 'spring', stiffness: 80 }}
              >
                <p className="text-sm font-medium text-gold tracking-widest uppercase mb-3">
                  Start Your Journey
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                  Limited Seats. Applications Closing Soon.
                </h2>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Join the 2026 batch. Early applicants get priority counselling and program selection.
                </p>
                <a
                  href="https://wa.me/919703003456?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20the%20BBA%2FBCA%20programs%20at%20Ethames%20Business%20School.%20Please%20share%20the%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (window.gtag) { window.gtag('event', 'conversion', { send_to: 'AW-18065137326/JT-gCKO875kcEK69kKZD', value: 100.0, currency: 'INR' }); }
                    if (window.fbq) { window.fbq('track', 'Contact', { content_name: 'WhatsApp Click', value: 100.0, currency: 'INR' }); }
                  }}
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-white hover:bg-[#25D366]/20 transition-colors duration-200 backdrop-blur-sm cursor-pointer"
                >
                  <WhatsAppLogo className="h-6 w-6" />
                  <span className="font-medium text-sm">Talk to Admissions on WhatsApp</span>
                </a>
              </motion.div>
              <motion.div
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
