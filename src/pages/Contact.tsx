import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import Seo from '../components/Seo'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { KEYS, CYAN, DarkPageHeader, Aurora, BlueprintGrid, Grain } from '../components/hero/visuals'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined
const FORM_CONFIGURED = Boolean(ACCESS_KEY)

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  seats: string
  message: string
}

interface FieldErrors {
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  seats?: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {}
  if (!data.firstName.trim()) errors.firstName = 'First name is required'
  if (!data.lastName.trim()) errors.lastName = 'Last name is required'
  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!EMAIL_RE.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }
  if (!data.company.trim()) errors.company = 'Business name is required'
  if (!data.seats) errors.seats = 'Please select the number of employees'
  return errors
}

function inputClass(error?: string) {
  return `input ${error ? 'input-error' : ''}`
}

const INITIAL_FORM: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  seats: '',
  message: '',
}

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [serverError, setServerError] = useState('')

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FieldErrors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field as keyof FieldErrors]
        return next
      })
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const fieldErrors = validate(form)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    if (!FORM_CONFIGURED) return

    setStatus('submitting')
    setServerError('')

    try {
      const payload = {
        access_key: ACCESS_KEY,
        subject: `New enquiry from ${form.firstName} ${form.lastName} — Ad On AI`,
        from_name: 'Ad On AI Website',
        'First Name': form.firstName.trim(),
        'Last Name': form.lastName.trim(),
        'Business Email': form.email.trim(),
        'Business Name': form.company.trim(),
        'Employees to Enrol': form.seats,
        'Additional Notes': form.message.trim() || '(none)',
      }

      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      const json = await res.json()

      if (json.success) {
        setStatus('success')
        setForm(INITIAL_FORM)
        setErrors({})
      } else {
        setServerError(json.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <>
        <Seo
          title="Book a Call | Ad On AI"
          description="Get in touch with Ad On AI to discuss AI training and enablement for your team, including guided sessions, modules, and practical implementation support."
          path="/contact"
        />
        <style>{KEYS}</style>
        <div className="bg-black">
          <DarkPageHeader
            label="Get Started"
            title="Book a Call"
            subtitle="Tell us about your business and we'll show you how the program works for your team."
          />
          <section ref={ref} className="relative overflow-hidden" style={{ background: '#05070D' }}>
            <Aurora warm={false} />
            <BlueprintGrid />
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
              <div className="max-w-xl mx-auto text-center">
                <div className={`rounded-[18px] border border-white/10 bg-white/[0.03] py-16 px-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-5" style={{ color: CYAN }} />
                  <h3 className="text-xl font-bold text-white mb-3">Enquiry Received</h3>
                  <p className="text-sm leading-relaxed max-w-sm mx-auto mb-8" style={{ color: 'rgba(213,224,255,0.65)' }}>
                    Thanks for reaching out. We&apos;ll review your submission and get back to you within one business day to book your strategy call.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm font-medium transition-colors"
                    style={{ color: CYAN }}
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            </div>
            <Grain opacity={0.1} />
          </section>
        </div>
      </>
    )
  }

  return (
    <>
      <Seo
        title="Book a Call | Ad On AI"
        description="Get in touch with Ad On AI to discuss AI training and enablement for your team, including guided sessions, modules, and practical implementation support."
        path="/contact"
      />
      <style>{KEYS}</style>
      <div className="bg-black">
      <DarkPageHeader
        label="Get Started"
        title="Book a Call"
        subtitle="Tell us about your business and we'll show you how the program works for your team."
      />

      <section ref={ref} className="relative overflow-hidden" style={{ background: '#05070D' }}>
        <Aurora warm={false} />
        <BlueprintGrid />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24 flex justify-center">
          <div className="max-w-xl w-full">
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <h3 className="text-lg font-bold text-white mb-1">Get Started</h3>
                <p className="text-sm mb-6" style={{ color: 'rgba(213,224,255,0.6)' }}>
                  Fill out the form and we&apos;ll be in touch within one business day.
                </p>

                {status === 'error' && serverError && (
                  <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 mb-5">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700 leading-snug">{serverError}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white/70 mb-1.5">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="First name"
                        value={form.firstName}
                        onChange={(e) => update('firstName', e.target.value)}
                        className={inputClass(errors.firstName)}
                      />
                      {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white/70 mb-1.5">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Last name"
                        value={form.lastName}
                        onChange={(e) => update('lastName', e.target.value)}
                        className={inputClass(errors.lastName)}
                      />
                      {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1.5">Business Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="you@company.com.au"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={inputClass(errors.email)}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-1.5">Business Name</label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Your business"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      className={inputClass(errors.company)}
                    />
                    {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
                  </div>
                  <div>
                    <label htmlFor="seats" className="block text-sm font-medium text-white/70 mb-1.5">How Many Employees to Enrol?</label>
                    <select
                      id="seats"
                      value={form.seats}
                      onChange={(e) => update('seats', e.target.value)}
                      className={`${inputClass(errors.seats)} ${!form.seats ? 'text-white/40' : 'text-white'} appearance-none [&>option]:text-stone-800`}
                    >
                      <option value="">Select</option>
                      <option value="1-3">1 to 3 employees</option>
                      <option value="4-10">4 to 10 employees</option>
                      <option value="11-20">11 to 20 employees</option>
                      <option value="20+">20+ employees</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                    {errors.seats && <p className="text-xs text-red-500 mt-1">{errors.seats}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1.5">Anything Else? (Optional)</label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Tell us about your team, their roles, or what you're looking to improve"
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className="input resize-none"
                    />
                  </div>
                  {!FORM_CONFIGURED && (
                    <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 mt-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-800 leading-snug">
                        The contact form is currently being set up. Please email us directly at{' '}
                        <a href="mailto:info@adongroup.com.au" className="underline hover:text-amber-900 transition-colors">info@adongroup.com.au</a>{' '}
                        in the meantime.
                      </p>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={!FORM_CONFIGURED || status === 'submitting'}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[10px] bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Book My Call
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
        <Grain opacity={0.1} />
      </section>
      </div>
    </>
  )
}
