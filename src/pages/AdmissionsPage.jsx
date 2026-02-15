import SectionHeader from '../components/SectionHeader'

function AdmissionsPage() {
  const steps = ['Submit inquiry form', 'Attend counseling session', 'Campus interaction', 'Complete enrollment documentation']

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeader
        eyebrow="Admissions"
        title="Admissions Process"
        description="A transparent and parent-friendly process designed to make enrollment simple and stress-free."
      />
      <div className="rounded-2xl border border-slate-200 bg-white p-8">
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={step} className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="text-slate-700">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default AdmissionsPage
