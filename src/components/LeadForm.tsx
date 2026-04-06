import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { programs } from '../data/programs'

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
      setSubmitted(true)
      // TODO: POST to backend
    }
  }

  const isDark = variant === 'dark'
  const inputBase = `w-full rounded-lg px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-red ${
    isDark
      ? 'bg-white/10 text-white placeholder-white/50 border border-white/20'
      : 'bg-white text-navy-dark border border-gray-200 placeholder-gray-400'
  }`
  const labelClass = `block text-xs font-medium mb-1 ${isDark ? 'text-white/80' : 'text-navy'}`

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-2xl p-8 text-center ${isDark ? 'bg-white/10' : 'bg-green-50 border border-green-200'} ${className}`}
      >
        <div className="text-4xl mb-3">&#10003;</div>
        <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-navy'}`}>
          Application Received!
        </h3>
        <p className={isDark ? 'text-white/70' : 'text-body'}>
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
          className={`${inputBase} ${!form.program ? (isDark ? 'text-white/50' : 'text-gray-400') : ''}`}
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
        className="w-full py-3.5 rounded-lg bg-red text-white font-semibold text-sm tracking-wide hover:bg-red/90 transition-colors cursor-pointer"
      >
        Apply Now — Free Counselling
      </motion.button>

      <p className={`text-[11px] text-center ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
        No spam. Your data is secure and confidential.
      </p>
    </form>
  )
}
