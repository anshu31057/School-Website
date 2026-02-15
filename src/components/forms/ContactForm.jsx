import { useMemo, useState } from 'react'
import { sendEmail } from '../../services/sendEmail'

const initialValues = {
  name: '',
  phone: '',
  email: '',
  message: '',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Name is required.'
  if (!values.phone.trim()) {
    errors.phone = 'Phone is required.'
  } else if (!/^\d+$/.test(values.phone.trim())) {
    errors.phone = 'Phone must contain numbers only.'
  }
  if (!values.message.trim()) errors.message = 'Message is required.'

  return errors
}

function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', text: '' })

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors])

  function onChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    if (isSubmitting) return

    const nextErrors = validate(values)
    setErrors(nextErrors)
    setStatus({ type: '', text: '' })

    if (Object.keys(nextErrors).length) return

    try {
      setIsSubmitting(true)
      await sendEmail(values)
      setStatus({ type: 'success', text: 'Thank you. Your message has been sent successfully.' })
      setValues(initialValues)
      setErrors({})
    } catch (error) {
      setStatus({
        type: 'error',
        text: error?.message || 'We could not send your message right now. Please try again shortly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'

  return (
    <form className="mt-8 space-y-4" aria-label="Contact form" onSubmit={onSubmit} noValidate>
      <label className="block text-sm font-medium text-slate-700" htmlFor="contact-name">
        Name <span className="text-red-600">*</span>
        <input
          id="contact-name"
          name="name"
          aria-label="Your name"
          value={values.name}
          onChange={onChange}
          className={`${inputClass} ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
          placeholder="Enter your name"
          autoComplete="name"
          required
        />
        {errors.name ? <span className="mt-1 block text-xs text-red-600">{errors.name}</span> : null}
      </label>

      <label className="block text-sm font-medium text-slate-700" htmlFor="contact-phone">
        Phone <span className="text-red-600">*</span>
        <input
          id="contact-phone"
          name="phone"
          aria-label="Your phone number"
          value={values.phone}
          onChange={onChange}
          className={`${inputClass} ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
          placeholder="Enter phone number"
          autoComplete="tel"
          inputMode="numeric"
          required
        />
        {errors.phone ? <span className="mt-1 block text-xs text-red-600">{errors.phone}</span> : null}
      </label>

      <label className="block text-sm font-medium text-slate-700" htmlFor="contact-email">
        Email (optional)
        <input
          id="contact-email"
          name="email"
          type="email"
          aria-label="Your email address"
          value={values.email}
          onChange={onChange}
          className={inputClass}
          placeholder="Enter email"
          autoComplete="email"
        />
      </label>

      <label className="block text-sm font-medium text-slate-700" htmlFor="contact-message">
        Message <span className="text-red-600">*</span>
        <textarea
          id="contact-message"
          name="message"
          aria-label="Your message"
          value={values.message}
          onChange={onChange}
          className={`${inputClass} h-32 resize-y ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
          placeholder="Write your message"
          required
        />
        {errors.message ? <span className="mt-1 block text-xs text-red-600">{errors.message}</span> : null}
      </label>

      {status.text ? (
        <p
          role="status"
          className={`rounded-lg px-4 py-3 text-sm ${
            status.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
          }`}
        >
          {status.text}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-interactive w-full rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
            Sending...
          </span>
        ) : (
          'Submit Inquiry'
        )}
      </button>

      {hasErrors ? <p className="text-xs text-slate-500">Please fix the highlighted fields before submitting.</p> : null}
    </form>
  )
}

export default ContactForm
