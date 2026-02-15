import SectionHeader from '../components/SectionHeader'
import useScrollReveal from '../hooks/useScrollReveal'
import ContactForm from '../components/forms/ContactForm'

function ContactPage() {
  const revealRef = useScrollReveal({ selector: '[data-reveal]', stagger: 0.1, y: 20 })

  return (
    <section ref={revealRef} className="mx-auto max-w-7xl space-y-8 px-4 py-16 lg:px-8">
      <div data-reveal className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <SectionHeader
          eyebrow="Contact"
          title="Connect With Blue Ridge Academy"
          description="Reach out for admissions counseling, campus tours, and academic guidance."
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-heading text-2xl font-extrabold text-primary">Contact Information</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li><strong>Address:</strong> 88 Maple Avenue, Riverside City</li>
            <li><strong>Phone:</strong> <a className="hover:text-secondary" href="tel:+15551234567">+1 (555) 123-4567</a></li>
            <li><strong>Email:</strong> <a className="hover:text-secondary" href="mailto:admissions@blueridgeacademy.edu">admissions@blueridgeacademy.edu</a></li>
          </ul>

          <ContactForm />

          <a
            href="https://wa.me/15551234567"
            className="btn-interactive mt-6 inline-flex w-full justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-slate-900 sm:w-auto"
            aria-label="Chat on WhatsApp"
          >
            WhatsApp Quick Contact
          </a>
        </article>

        <article data-reveal className="overflow-hidden rounded-3xl bg-white p-3 shadow-sm">
          <iframe
            title="Blue Ridge Academy location on Google Maps"
            src="https://www.google.com/maps?q=Times%20Square%20New%20York&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-[420px] w-full rounded-2xl border-0"
          />
        </article>
      </div>
    </section>
  )
}

export default ContactPage
