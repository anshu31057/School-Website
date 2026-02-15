function NoticeCard({ notice }) {
  const date = new Date(notice.date)
  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  const year = date.getFullYear()

  return (
    <article className="rounded-2xl border-l-4 border-secondary bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft md:p-6">
      <div className="grid gap-4 md:grid-cols-[92px_1fr] md:items-start md:gap-6">
        <div className="w-full rounded-xl bg-slate-50 px-4 py-3 text-center md:w-[92px]">
          <p className="font-heading text-3xl font-extrabold leading-none text-primary">{day}</p>
          <p className="mt-1 text-xs font-bold tracking-[0.15em] text-secondary">{month}</p>
          <p className="mt-1 text-xs text-slate-500">{year}</p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-primary">{notice.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{notice.description}</p>
          {notice.pdf ? (
            <a
              href={notice.pdf}
              className="btn-interactive mt-4 inline-flex w-full items-center justify-center rounded-full border border-secondary px-4 py-2 text-xs font-bold text-secondary hover:bg-secondary hover:text-white sm:w-auto"
              aria-label={`Download circular PDF for ${notice.title}`}
            >
              Download Circular PDF
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default NoticeCard
