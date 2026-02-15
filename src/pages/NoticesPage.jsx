import { useMemo, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import NoticeCard from '../components/NoticeCard'
import useScrollReveal from '../hooks/useScrollReveal'
import noticesJson from '../data/notices.json'
import { sortNoticesNewestFirst } from '../utils/noticeDate'

function NoticesPage() {
  const [query, setQuery] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('all')
  const revealRef = useScrollReveal({ selector: '[data-reveal]', stagger: 0.08, y: 22 })

  const sortedNotices = useMemo(() => sortNoticesNewestFirst(noticesJson), [])

  const months = useMemo(
    () => [...new Set(sortedNotices.map((item) => new Date(item.date).toLocaleString('en-US', { month: 'long' })))],
    [sortedNotices],
  )

  const filteredNotices = useMemo(() => {
    return sortedNotices.filter((notice) => {
      const month = new Date(notice.date).toLocaleString('en-US', { month: 'long' })
      const matchesMonth = selectedMonth === 'all' || month === selectedMonth
      const searchText = `${notice.title} ${notice.desc} ${notice.category}`.toLowerCase()
      return matchesMonth && searchText.includes(query.toLowerCase())
    })
  }, [query, selectedMonth, sortedNotices])

  return (
    <section ref={revealRef} className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div data-reveal className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <SectionHeader
          eyebrow="Notice Board"
          title="Official Circulars and Announcements"
          description="A structured institutional notice board for parents, students, and faculty updates."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-[2fr_1fr]">
          <input
            aria-label="Search school notices"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Search circulars, events, or announcements..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-secondary focus:outline-none"
          />
          <select
            aria-label="Filter notices by month"
            value={selectedMonth}
            onChange={(event) => setSelectedMonth(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-secondary focus:outline-none"
          >
            <option value="all">All Months</option>
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 space-y-4" data-reveal>
        {filteredNotices.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
        ))}
      </div>
    </section>
  )
}

export default NoticesPage
