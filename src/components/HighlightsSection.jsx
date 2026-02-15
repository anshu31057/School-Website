import { highlights } from '../data/siteData'
import SectionHeader from './SectionHeader'
import useScrollReveal from '../hooks/useScrollReveal'

function HighlightsSection() {
  const revealRef = useScrollReveal({ selector: '[data-card]', stagger: 0.12, y: 28 })

  return (
    <section ref={revealRef} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          eyebrow="Campus Highlights"
          title="Programs and Facilities Designed for Complete Development"
          description="A future-ready ecosystem that supports academics, creativity, physical wellness, and life skills."
          centered
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              data-card
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 font-heading text-xl font-bold text-primary">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HighlightsSection
