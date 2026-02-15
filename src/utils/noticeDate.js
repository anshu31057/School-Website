export function formatNoticeDateParts(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`)

  if (Number.isNaN(date.getTime())) {
    return { day: '--', month: '---', year: '----' }
  }

  return {
    day: date.toLocaleString('en-US', { day: '2-digit' }),
    month: date.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
    year: String(date.getFullYear()),
  }
}

export function sortNoticesNewestFirst(notices) {
  return [...notices].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
