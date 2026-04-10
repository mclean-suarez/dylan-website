import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import watermarkImage from '../images/watermark.webp'

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
        <PageHeader
          label="Get Started"
          title="Book a Call"
          subtitle="Tell us about your business and we'll show you how the program works for your team."
        />
        <section ref={ref} className="section-padding">
          <div className="section-container">
            <div className="max-w-xl mx-auto text-center">
              <div className={`border border-stone-200 bg-white py-16 px-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                <CheckCircle2 className="w-12 h-12 text-brand-700 mx-auto mb-5" />
                <h3 className="text-xl font-bold text-stone-900 mb-3">Enquiry Received</h3>
                <p className="text-sm text-stone-500 leading-relaxed max-w-sm mx-auto mb-8">
                  Thanks for reaching out. We&apos;ll review your submission and get back to you within one business day to book your strategy call.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm font-medium text-brand-700 hover:text-brand-800 transition-colors"
                >
                  Submit another enquiry
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHeader
        label="Get Started"
        title="Book a Call"
        subtitle="Tell us about your business and we'll show you how the program works for your team."
      />

      <section ref={ref} className="section-padding bg-[#2D3A4A] relative">
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
            <img
              src={watermarkImage}
              alt="Hero"
              className="
                w-[100%] h-auto opacity-100
                md:w-[100%] md:opacity-100
                lg:w-[100% lg:opacity-100
                xl:w-[100%]
                translate-x-8 md:translate-x-0
                lg:-translate-x-[0rem]
                translate-y-[3rem]
                select-none
              "
            />
        </div>
        <div className="section-container flex justify-center">
          <div className="max-w-xl">
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <div className="border border-stone-200 bg-white p-6 md:p-8">
                <h3 className="text-lg font-bold text-stone-900 mb-1">Get Started</h3>
                <p className="text-sm text-stone-500 mb-6">
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
                      <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-1.5">First Name</label>
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
                      <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-1.5">Last Name</label>
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
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">Business Email</label>
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
                    <label htmlFor="company" className="block text-sm font-medium text-stone-700 mb-1.5">Business Name</label>
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
                    <label htmlFor="seats" className="block text-sm font-medium text-stone-700 mb-1.5">How Many Employees to Enrol?</label>
                    <select
                      id="seats"
                      value={form.seats}
                      onChange={(e) => update('seats', e.target.value)}
                      className={`${inputClass(errors.seats)} ${!form.seats ? 'text-stone-400' : 'text-stone-800'} appearance-none`}
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
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">Anything Else? (Optional)</label>
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
                    className="btn-primary w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
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
      </section>
    </>
  )
}
