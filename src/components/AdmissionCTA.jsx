function AdmissionCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
      <div className="rounded-3xl bg-primary p-8 text-white shadow-soft md:p-12">
        <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-accent">Admissions 2026-27</p>
        <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl">Secure Your Child's Seat for the Next Academic Session</h2>
        <p className="mt-4 max-w-2xl text-blue-100">
          Book a counseling session, campus visit, or connect directly with our admissions team for a personalized application walkthrough.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <a href="tel:+15551234567" className="btn-interactive rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-900">Call Now</a>
          <a href="https://wa.me/15551234567" className="btn-interactive rounded-full border border-white/60 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </section>
  )
}

export default AdmissionCTA
