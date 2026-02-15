import { Link } from 'react-router-dom'
import noticesJson from '../data/notices.json'
import { sortNoticesNewestFirst } from '../utils/noticeDate'

function NoticeTicker() {
  const sorted = sortNoticesNewestFirst(noticesJson)
  const noticeText = sorted.map((item) => `${item.title} | ${new Date(item.date).toLocaleDateString()}`)
  const scrollerItems = [...noticeText, ...noticeText]

  return (
    <section className="border-y border-secondary/20 bg-secondary/10 py-3">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 lg:px-8">
        <p className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">Notices</p>
        <Link to="/notices" aria-label="View all school notices" className="group relative block w-full overflow-hidden rounded-md">
          <div className="flex min-w-max animate-marquee gap-8 text-sm font-medium text-primary group-hover:[animation-play-state:paused]">
            {scrollerItems.map((notice, index) => (
              <span key={`${notice}-${index}`} className="whitespace-nowrap">{notice}</span>
            ))}
          </div>
        </Link>
      </div>
    </section>
  )
}

export default NoticeTicker
