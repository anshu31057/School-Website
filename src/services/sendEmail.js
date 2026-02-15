import emailjs from '@emailjs/browser'

function getEmailConfig() {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    toName: import.meta.env.VITE_EMAILJS_TO_NAME || 'Admissions Team',
    toEmail: import.meta.env.VITE_EMAILJS_TO_EMAIL || 'admissions@blueridgeacademy.edu',
  }
}

export async function sendEmail(formValues) {
  const config = getEmailConfig()

  if (!config.serviceId || !config.templateId || !config.publicKey) {
    throw new Error('Missing EmailJS configuration. Please check your .env variables.')
  }

  const payload = {
    from_name: formValues.name,
    phone: formValues.phone,
    from_email: formValues.email || 'Not provided',
    message: formValues.message,
    to_name: config.toName,
    to_email: config.toEmail,
  }

  return emailjs.send(config.serviceId, config.templateId, payload, {
    publicKey: config.publicKey,
    limitRate: {
      throttle: 8000,
    },
  })
}
