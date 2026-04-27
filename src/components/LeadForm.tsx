import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { programs } from '../data/programs'
import { getUTMParams, getCookie, trackEvent } from '../lib/tracking'

const HYDERABAD_AREAS = [
  'Raidurgam',
  'Gachibowli',
  'Kondapur',
  'Madhapur',
  'HITEC City',
  'Kukatpally',
  'Miyapur',
  'Manikonda',
  'Nanakramguda',
  'Financial District',
  'Banjara Hills',
  'Jubilee Hills',
  'Secunderabad',
  'LB Nagar',
  'Dilsukhnagar',
  'Uppal',
  'Begumpet',
  'Ameerpet',
  'Mehdipatnam',
  'Tolichowki',
  'Other Hyderabad Area',
  'Outside Hyderabad',
]

interface LeadFormProps {
  variant?: 'light' | 'dark'
  className?: string
}

export default function LeadForm({ variant = 'light', className = '' }: LeadFormProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    program: '',
    area: '',
    outsideCity: '',
    visitorType: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [startedFilling, setStartedFilling] = useState(false)

  function trackFormStart() {
    if (startedFilling) return
    setStartedFilling(true)
    if (window.fbq) window.fbq('track', 'InitiateCheckout', { content_name: 'Lead Form Start' })
    if (window.gtag) window.gtag('event', 'form_start', { event_category: 'form' })
  }

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit mobile number'
    if (!form.program) e.program = 'Select a program'
    if (!form.area) e.area = 'Select your area'
    if (form.area === 'Outside Hyderabad' && !form.outsideCity.trim()) e.outsideCity = 'Enter your city'
    if (!form.visitorType) e.visitorType = 'Please select one'
    return e
  }

  function computeLeadQuality(): string {
    const isLocal = form.area !== '' && form.area !== 'Outside Hyderabad'
    if (isLocal) return 'HIGH'
    return 'MEDIUM'
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) {
      const utm = getUTMParams()
      const fullPhone = `+91${form.phone}`
      const eventId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
      const city = form.area === 'Outside Hyderabad' ? form.outsideCity.trim() : form.area
      const leadQuality = computeLeadQuality()

      const payload = {
        name: form.name,
        phone: fullPhone,
        program: form.program,
        city,
        area: form.area,
        visitor_type: form.visitorType,
        lead_quality: leadQuality,
        ...utm,
        page_url: window.location.href,
        fb_event_id: eventId,
        fb_fbp: getCookie('_fbp'),
        fb_fbc: getCookie('_fbc'),
        user_agent: navigator.userAgent,
      }

      const formData = new FormData()
      formData.append('data', JSON.stringify(payload))
      fetch('https://script.google.com/macros/s/AKfycbyW5v9uQ1jyPOXLeOBbAO4-iP9d1qziL2xkExvgpFQPyQQWWM9DB7x5iR73T7N2ZLeAYA/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      }).catch(() => {})

      fetch('https://sandyautomations.app.n8n.cloud/webhook/iyra-meta-capi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, event_name: 'Lead', value: 100, currency: 'INR' }),
        keepalive: true,
      }).catch(() => {})

      trackEvent('generate_lead', {
        event_category: 'form',
        event_label: form.program,
      })

      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-18065137326/Q8wrCPT-g5ocEK69kKZD',
          value: 100.0,
          currency: 'INR',
        })
      }

      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: form.program,
          content_category: 'Admission Inquiry',
          value: 100.0,
          currency: 'INR',
        }, { eventID: eventId })
      }

      setSubmitted(true)
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
          onFocus={trackFormStart}
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
        <label className={labelClass}>I am a</label>
        <div className="flex gap-3">
          {['Student', 'Parent'].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setForm({ ...form, visitorType: type.toLowerCase() })}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                form.visitorType === type.toLowerCase()
                  ? 'bg-red text-white'
                  : isDark
                    ? 'bg-white/10 text-white/60 border border-white/15 hover:bg-white/15'
                    : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        {errors.visitorType && <p className="text-red text-xs mt-1">{errors.visitorType}</p>}
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
        <label className={labelClass}>Your Area</label>
        <select
          className={`${inputBase} cursor-pointer ${!form.area ? (isDark ? 'text-white/40' : 'text-gray-400') : ''}`}
          value={form.area}
          onChange={(e) => setForm({ ...form, area: e.target.value, outsideCity: '' })}
        >
          <option value="">Select your area</option>
          {HYDERABAD_AREAS.map((a) => (
            <option key={a} value={a} className="text-navy-dark">{a}</option>
          ))}
        </select>
        {errors.area && <p className="text-red text-xs mt-1">{errors.area}</p>}
      </div>

      {form.area === 'Outside Hyderabad' && (
        <div>
          <label className={labelClass}>Your City</label>
          <input
            type="text"
            placeholder="Enter your city"
            className={inputBase}
            value={form.outsideCity}
            onChange={(e) => setForm({ ...form, outsideCity: e.target.value })}
          />
          {errors.outsideCity && <p className="text-red text-xs mt-1">{errors.outsideCity}</p>}
        </div>
      )}

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3.5 rounded-lg bg-red text-white font-semibold text-sm tracking-wide hover:bg-red/90 transition-colors duration-200 cursor-pointer"
      >
        Book Counseling Session
      </motion.button>

      <p className={`text-[11px] text-center ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
        No spam. Your data is secure and confidential.
      </p>
    </form>
  )
}
