import SectionHeader from '../components/SectionHeader'
import useScrollReveal from '../hooks/useScrollReveal'

const achievements = [
  'State Rank #1 in Board Results for 3 consecutive years',
  'National Robotics Challenge Finalists',
  'Green Campus Excellence Award',
  '100% university placement guidance support',
]

const timelineEvents = [
  { year: '2002', detail: 'Blue Ridge Academy founded with 180 learners and a vision for value-based education.' },
  { year: '2010', detail: 'Senior school wing inaugurated, introducing advanced STEM labs and language centers.' },
  { year: '2017', detail: 'Integrated digital classrooms and student mentorship model launched campus-wide.' },
  { year: '2024', detail: 'Recognized as a model institution for innovation-led school transformation.' },
]

function AboutPage() {
  const revealRef = useScrollReveal({ selector: '[data-reveal]', stagger: 0.08, y: 30 })

  return (
    <section ref={revealRef} className="mx-auto max-w-7xl space-y-16 px-4 py-16 lg:px-8">
      <header data-reveal className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <SectionHeader
          eyebrow="About"
          title="A Legacy of Scholarship and Character"
          description="Blue Ridge Academy is an independent institution shaping informed, compassionate, and future-ready citizens through rigorous academics and strong values."
        />
      </header>

      <article data-reveal className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-extrabold text-primary md:text-3xl">School History</h2>
          <p className="mt-4 text-slate-700">
            Since its founding, Blue Ridge Academy has steadily evolved from a neighborhood school into a leading academic campus.
            Our commitment has remained unchanged: personalized education, strong ethics, and a culture that encourages ambition.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=70"
          alt="Historic school library"
          className="h-72 w-full rounded-2xl object-cover"
          loading="lazy"
        />
      </article>

      <article data-reveal className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-primary p-8 text-white shadow-sm">
          <h2 className="font-heading text-2xl font-extrabold">Mission</h2>
          <p className="mt-4 text-blue-100">To cultivate critical thinkers and principled leaders through meaningful learning experiences, mentoring, and service.</p>
        </div>
        <div className="rounded-3xl bg-secondary p-8 text-white shadow-sm">
          <h2 className="font-heading text-2xl font-extrabold">Vision</h2>
          <p className="mt-4 text-blue-100">To be a benchmark institution where academic excellence meets emotional intelligence, creativity, and social responsibility.</p>
        </div>
      </article>

      <article data-reveal className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="font-heading text-2xl font-extrabold text-primary md:text-3xl">Principal&apos;s Message</h2>
          <p className="mt-4 text-slate-700">
            "At Blue Ridge Academy, we believe that every child deserves an environment that celebrates individuality while inspiring collective excellence.
            Our educators focus on nurturing curiosity, discipline, and empathy so students are prepared not only for exams, but for life."
          </p>
          <p className="mt-4 font-semibold text-slate-800">— Dr. Eleanor Matthews, Principal</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=70"
          alt="School principal"
          className="h-72 w-full rounded-2xl object-cover"
          loading="lazy"
        />
      </article>

      <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-heading text-2xl font-extrabold text-primary md:text-3xl">Achievements</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {achievements.map((item) => (
            <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </article>

      <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-heading text-2xl font-extrabold text-primary md:text-3xl">Our Journey</h2>
        <ol className="mt-8 space-y-6 border-l-2 border-secondary/40 pl-6">
          {timelineEvents.map((event) => (
            <li key={event.year} className="relative">
              <span className="absolute -left-[2.1rem] top-1 h-4 w-4 rounded-full border-4 border-white bg-secondary" />
              <p className="font-heading text-lg font-bold text-secondary">{event.year}</p>
              <p className="mt-2 text-slate-700">{event.detail}</p>
            </li>
          ))}
        </ol>
      </article>
    </section>
  )
}

export default AboutPage
