function TopInfoStrip() {
  const items = [
    '📞 +1 (555) 123-4567',
    '📍 88 Maple Avenue, Riverside City',
    '🕒 Mon–Sat: 8:00 AM – 4:00 PM',
    '🏫 Affiliated to National Education Board',
  ]

  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 text-xs font-medium text-slate-700 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <p key={item} className="rounded-lg bg-slate-50 px-3 py-2 text-center">{item}</p>
        ))}
      </div>
    </section>
  )
}

export default TopInfoStrip
