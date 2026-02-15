import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'

function AboutPreview() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2 lg:px-8">
      <img
        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
        alt="Students working in classroom"
        className="h-full min-h-[320px] w-full rounded-3xl object-cover shadow-soft"
      />
      <div className="flex flex-col justify-center">
        <SectionHeader
          eyebrow="About us"
          title="A School Community Built Around Every Child's Potential"
          description="We provide a balanced education that combines modern pedagogy, strong values, and experiential learning from primary through senior levels."
        />
        <p className="text-slate-600">
          From project-based learning to dedicated counseling and leadership initiatives, we ensure each learner develops the confidence and competence to thrive.
        </p>
        <div className="mt-6">
          <Link to="/about" className="btn-interactive inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary">
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
