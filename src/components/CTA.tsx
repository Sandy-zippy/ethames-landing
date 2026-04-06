import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LeadForm from './LeadForm'

const faqs = [
  {
    q: 'What are the eligibility criteria for BBA and BCA programs?',
    a: 'Candidates must have completed 10+2 from a recognised board with a minimum of 50% aggregate marks. For BCA, Mathematics or Computer Science as a subject in 12th is preferred but not mandatory.',
  },
  {
    q: 'Is there an entrance exam?',
    a: 'eTHAMES conducts its own aptitude assessment followed by a personal interview. No separate entrance exam like CET is required.',
  },
  {
    q: 'What is the fee structure?',
    a: 'Fees vary by program. Our admissions counsellor will share the detailed fee structure, scholarship options, and EMI plans during your counselling session.',
  },
  {
    q: 'Do you offer hostel facilities?',
    a: 'Yes. We have separate boys and girls hostels on campus with Wi-Fi, mess, laundry, and 24/7 security. Off-campus PG options are also available nearby.',
  },
  {
    q: 'What is the placement record?',
    a: 'Our placement rate is 95%+ with an average package of 4.5 LPA. Top recruiters include Deloitte, KPMG, TCS, Infosys, and 50+ companies across sectors.',
  },
]

export default function CTA() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Block */}
        <div className="gradient-brand rounded-2xl p-8 sm:p-12 lg:p-16 mb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Don't Wait. Seats Are Filling Fast.
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                The 2026 batch has limited seats across all programs. Secure your spot now
                and get a free career counselling session with our admissions team.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free counselling call
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Scholarship eligibility check
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Zero application fee
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-semibold text-navy mb-4">Secure Your Seat</h3>
              <LeadForm variant="light" />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-medium text-navy pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-navy/40 flex-shrink-0 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-body leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
