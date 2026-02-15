import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'
import { galleryItems } from '../data/siteData'

function GalleryPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeader
        eyebrow="Gallery"
        title="A Glimpse Into Vibrant Campus Life"
        description="Explore moments that capture our culture of inquiry, expression, and achievement."
        centered
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <article key={item.title} className="group relative overflow-hidden rounded-2xl">
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 to-transparent opacity-0 transition group-hover:opacity-100" />
            <h3 className="absolute bottom-4 left-4 translate-y-4 font-heading text-lg font-bold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              {item.title}
            </h3>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/gallery" className="btn-interactive inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary">
          View Full Gallery
        </Link>
      </div>
    </section>
  )
}

export default GalleryPreview
