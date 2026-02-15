import { useMemo, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import useScrollReveal from '../hooks/useScrollReveal'
import GalleryModal from '../components/modals/GalleryModal'
import { galleryEvents } from '../data/siteData'

function GalleryPage() {
  const revealRef = useScrollReveal({ selector: '[data-reveal]', stagger: 0.08, y: 18 })
  const [activeIndex, setActiveIndex] = useState(null)

  const allPhotos = useMemo(
    () => galleryEvents.flatMap((event) => event.photos.map((photo) => ({ ...photo, event: event.event }))),
    [],
  )

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

      <GalleryModal open={activeIndex !== null} onClose={() => setActiveIndex(null)} item={activeIndex !== null ? allPhotos[activeIndex] : null} />
    </section>
  )
}

export default GalleryPage
