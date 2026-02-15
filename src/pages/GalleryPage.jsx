import { useEffect, useMemo, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import useScrollReveal from '../hooks/useScrollReveal'
import { galleryEvents } from '../data/siteData'

function GalleryPage() {
  const revealRef = useScrollReveal({ selector: '[data-reveal]', stagger: 0.08, y: 18 })
  const [activeIndex, setActiveIndex] = useState(null)

  const allPhotos = useMemo(
    () => galleryEvents.flatMap((event) => event.photos.map((photo) => ({ ...photo, event: event.event }))),
    [],
  )

  useEffect(() => {
    const onKeyDown = (event) => {
      if (activeIndex === null) return
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowRight') setActiveIndex((prev) => (prev + 1) % allPhotos.length)
      if (event.key === 'ArrowLeft') setActiveIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex, allPhotos.length])

  return (
    <section ref={revealRef} className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div data-reveal className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <SectionHeader
          eyebrow="Gallery"
          title="Moments That Define Campus Life"
          description="An event-based visual archive featuring student achievements, co-curricular experiences, and institutional milestones."
        />
      </div>

      <div className="mt-10 space-y-12">
        {galleryEvents.map((eventGroup) => (
          <section key={eventGroup.event} data-reveal aria-label={eventGroup.event}>
            <h2 className="font-heading text-2xl font-bold text-primary">{eventGroup.event}</h2>
            <div className="mt-5 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {eventGroup.photos.map((item) => {
                const photoIndex = allPhotos.findIndex((photo) => photo.image === item.image)
                return (
                  <button
                    key={item.image}
                    type="button"
                    onClick={() => setActiveIndex(photoIndex)}
                    className="group btn-interactive relative mb-5 block w-full overflow-hidden rounded-2xl text-left shadow-sm"
                    aria-label={`Open image ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} at ${eventGroup.event}`}
                      loading="lazy"
                      className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <p className="absolute bottom-4 left-4 translate-y-3 font-heading text-base font-bold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                      {item.title}
                    </p>
                  </button>
                )
              })}
            </div>
          </section>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/85 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close lightbox"
              className="btn-interactive absolute -top-12 right-0 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white"
            >
              Close ✕
            </button>
            <img
              src={allPhotos[activeIndex].image}
              alt={`${allPhotos[activeIndex].title} at ${allPhotos[activeIndex].event}`}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
            <p className="mt-3 text-center font-heading text-lg font-bold text-white">{allPhotos[activeIndex].title}</p>
            <p className="text-center text-sm text-slate-200">{allPhotos[activeIndex].event}</p>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default GalleryPage
