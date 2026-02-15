import SectionHeader from '../components/SectionHeader'
import useScrollReveal from '../hooks/useScrollReveal'

const classBands = [
  { title: 'Foundational Years', detail: 'Pre-Primary to Grade 2 focused on inquiry, literacy, numeracy, and social-emotional growth.' },
  { title: 'Preparatory School', detail: 'Grades 3 to 5 with integrated thematic learning and exploratory projects.' },
  { title: 'Middle School', detail: 'Grades 6 to 8 emphasizing analytical thinking, communication, and interdisciplinary modules.' },
  { title: 'Senior School', detail: 'Grades 9 to 12 with college-aligned pathways in Science, Commerce, and Humanities.' },
]

const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English', 'Social Studies', 'Economics', 'Fine Arts', 'Physical Education']

const facilities = [
  'Digital smart classrooms',
  'Innovation and robotics lab',
  'Language and reading studios',
  'Counseling and career guidance cell',
]

function AcademicsPage() {
  const revealRef = useScrollReveal({ selector: '[data-reveal]', stagger: 0.1, y: 24 })

  return (
    <section ref={revealRef} className="mx-auto max-w-7xl space-y-12 px-4 py-16 lg:px-8">
      <header data-reveal className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <SectionHeader
          eyebrow="Academics"
          title="Structured Learning for Every Stage"
          description="Our academic model combines curriculum rigor, modern pedagogy, and formative mentorship to ensure sustained student success."
        />
      </header>

      <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-heading text-2xl font-extrabold text-primary md:text-3xl">Classes Offered</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {classBands.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:shadow-soft">
              <h3 className="font-heading text-lg font-bold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </article>

      <article data-reveal className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-primary p-8 text-white shadow-sm">
          <h2 className="font-heading text-2xl font-extrabold">Curriculum Board</h2>
          <p className="mt-4 text-blue-100">
            Affiliated with the National Education Board and designed to align with competitive examinations, higher education expectations, and global benchmarks.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-heading text-2xl font-extrabold text-primary">Teaching Methodology</h2>
          <p className="mt-4 text-slate-700">
            We use blended learning, flipped classrooms, project-based tasks, and regular formative assessments for measurable growth.
          </p>
        </div>
      </article>

      <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-heading text-2xl font-extrabold text-primary md:text-3xl">Subjects Grid</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {subjects.map((subject) => (
            <p key={subject} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-medium text-slate-700">
              {subject}
            </p>
          ))}
        </div>
      </article>

      <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-heading text-2xl font-extrabold text-primary md:text-3xl">Academic Facilities</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {facilities.map((facility) => (
            <li key={facility} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              {facility}
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default AcademicsPage
