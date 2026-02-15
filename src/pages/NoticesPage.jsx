import { useMemo, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import useScrollReveal from '../hooks/useScrollReveal'
import { notices } from '../data/siteData'

function NoticesPage() {
  const [query, setQuery] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('all')
  const revealRef = useScrollReveal({ selector: '[data-reveal]', stagger: 0.08, y: 22 })

  const months = useMemo(
    () => [...new Set(notices.map((item) => new Date(item.date).toLocaleString('en-US', { month: 'long' })))],
    [],
  )

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const month = new Date(notice.date).toLocaleString('en-US', { month: 'long' })
      const matchesMonth = selectedMonth === 'all' || month === selectedMonth
      const searchText = `${notice.title} ${notice.description}`.toLowerCase()
      return matchesMonth && searchText.includes(query.toLowerCase())
    })
  }, [query, selectedMonth])

  return (
    <section ref={revealRef} className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div data-reveal className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <SectionHeader
          eyebrow="Notice Board"
          title="Latest Circulars and Announcements"
          description="Filter, search, and download key notices related to admissions, events, assessments, and school updates."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-[2fr_1fr]">
          <input
            aria-label="Search school notices"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Search notices..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
          />
          <select
            aria-label="Filter notices by month"
            value={selectedMonth}
            onChange={(event) => setSelectedMonth(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
          >
            <option value="all">All Months</option>
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {filteredNotices.map((notice) => (
          <article
            data-reveal
            key={notice.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{new Date(notice.date).toDateString()}</p>
                <h2 className="mt-2 font-heading text-xl font-bold text-primary">{notice.title}</h2>
                <p className="mt-2 max-w-3xl text-sm text-slate-700">{notice.description}</p>
              </div>
              {notice.pdf ? (
                <a
                  href={notice.pdf}
                  className="btn-interactive rounded-full border border-secondary px-4 py-2 text-xs font-bold text-secondary hover:bg-secondary hover:text-white"
                  aria-label={`Download PDF for ${notice.title}`}
                >
                  Download PDF
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default NoticesPage
