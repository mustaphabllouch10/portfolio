const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-slate-400">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
