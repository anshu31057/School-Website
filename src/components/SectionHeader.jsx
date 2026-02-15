function SectionHeader({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto mb-10 max-w-3xl text-center' : 'mb-8 max-w-3xl'}>
      {eyebrow ? <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-secondary">{eyebrow}</p> : null}
      <h2 className="mt-2 font-heading text-3xl font-extrabold text-bodyText md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-slate-600">{description}</p> : null}
    </div>
  )
}

export default SectionHeader
