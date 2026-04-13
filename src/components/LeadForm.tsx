import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { programs } from '../data/programs'
import { getUTMParams, getCookie, trackEvent } from '../lib/tracking'

interface LeadFormProps {
  variant?: 'light' | 'dark'
  className?: string
}

export default function LeadForm({ variant = 'light', className = '' }: LeadFormProps) {
  const [form, setForm] = useState({ name: '', phone: '', program: '', city: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit mobile number'
    if (!form.program) e.program = 'Select a program'
    if (!form.city.trim()) e.city = 'City is required'
    return e
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) {
      const utm = getUTMParams()
      const fullPhone = `+91${form.phone}`

      // Unique event ID for Meta Pixel + Conversion API dedup
      const eventId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`

      const payload = {
        name: form.name,
        phone: fullPhone,
        program: form.program,
        city: form.city,
        ...utm,
        page_url: window.location.href,
        fb_event_id: eventId,
        fb_fbp: getCookie('_fbp'),
        fb_fbc: getCookie('_fbc'),
        user_agent: navigator.userAgent,
      }

      // POST to Apps Script (logs to Sheets + pushes to GHL + forwards to Meta CAPI)
      const formData = new FormData()
      formData.append('data', JSON.stringify(payload))
      fetch('https://script.google.com/macros/s/AKfycbxjrNinl4Bq3xxOOShB1-AIA2FMGZb8LGuaKNbMPYwfHbI3gRttj0n8MyxrtuOM03-KPg/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      }).catch(() => {})

      // Track GA4 conversion
      trackEvent('generate_lead', {
        event_category: 'form',
        event_label: form.program,
      })

      // Google Ads conversion — Iyra account Form Submit (primary)
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-18065137326/Q8wrCPT-g5ocEK69kKZD',
          value: 100.0,
          currency: 'INR',
        })
      }

      // Meta Pixel Lead event (client-side). CAPI server-side fires from Apps Script with same eventId for dedup.
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: form.program,
          content_category: 'Admission Inquiry',
          value: 100.0,
          currency: 'INR',
        }, { eventID: eventId })
      }

      setSubmitted(true)
      // Redirect to thank you page after short delay
      setTimeout(() => {
        window.location.hash = '/thank-you'
        window.scrollTo(0, 0)
      }, 1500)
    }
  }

  const isDark = variant === 'dark'
  const inputBase = `w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-red/50 ${
    isDark
      ? 'bg-white/10 text-white placeholder-white/40 border border-white/15 backdrop-blur-sm'
      : 'bg-white text-navy-dark border border-gray-200 placeholder-gray-400'
  }`
  const labelClass = `block text-xs font-medium mb-1.5 ${isDark ? 'text-white/70' : 'text-navy'}`

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-2xl p-8 text-center ${isDark ? 'bg-white/10 backdrop-blur-sm' : 'bg-green-50 border border-green-200'} ${className}`}
      >
        <CheckCircle2 className={`w-12 h-12 mx-auto mb-3 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
        <h3 className={`font-serif text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-navy'}`}>
          Application Received!
        </h3>
        <p className={isDark ? 'text-white/60' : 'text-body'}>
          Our admissions counsellor will call you within 24 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} noValidate>
      <div>
        <label className={labelClass}>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          className={inputBase}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="text-red text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className={labelClass}>Phone Number</label>
        <input
          type="tel"
          placeholder="10-digit mobile number"
          className={inputBase}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
        />
        {errors.phone && <p className="text-red text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className={labelClass}>Program of Interest</label>
        <select
          className={`${inputBase} cursor-pointer ${!form.program ? (isDark ? 'text-white/40' : 'text-gray-400') : ''}`}
          value={form.program}
          onChange={(e) => setForm({ ...form, program: e.target.value })}
        >
          <option value="">Select a program</option>
          {programs.map((p) => (
            <option key={p.name} value={p.name} className="text-navy-dark">
              {p.name}
            </option>
          ))}
        </select>
        {errors.program && <p className="text-red text-xs mt-1">{errors.program}</p>}
      </div>

      <div>
        <label className={labelClass}>City</label>
        <input
          type="text"
          placeholder="Your city"
          className={inputBase}
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />
        {errors.city && <p className="text-red text-xs mt-1">{errors.city}</p>}
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3.5 rounded-lg bg-red text-white font-semibold text-sm tracking-wide hover:bg-red/90 transition-colors duration-200 cursor-pointer"
      >
        Apply Now
      </motion.button>

      <p className={`text-[11px] text-center ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
        No spam. Your data is secure and confidential.
      </p>
    </form>
  )
}
