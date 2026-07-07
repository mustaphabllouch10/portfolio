import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { getProjects } from '../services/api'
import SectionHeading from '../components/SectionHeading'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProjects()
      .then(({ data }) => setProjects(data))
      .finally(() => setLoading(false))
  }, [])

  const technologies = useMemo(() => {
    const items = new Set(['All'])
    projects.forEach((project) => project.technologies.forEach((technology) => items.add(technology)))
    return Array.from(items)
  }, [projects])

  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.technologies.includes(filter))

  return (
    <div className="space-y-8 pb-16">
      <SectionHeading eyebrow="Projects" title="Selected work" description="Filter by technology to explore the builds behind the portfolio." />
      <div className="flex flex-wrap gap-3">
        {technologies.map((item) => (
          <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-sm transition ${filter === item ? 'bg-white text-black' : 'border border-white/10 bg-white/[0.03] text-slate-300'}`}>
            {item}
          </button>
        ))}
      </div>
      {loading ? <p className="text-slate-400">Loading projects...</p> : null}
      <div className="grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <motion.article key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
            <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
            <div className="space-y-4 p-6">
              <div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => <span key={technology} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">{technology}</span>)}
              </div>
              <div className="space-y-2 text-sm text-slate-400">
                <p><span className="text-white">Features:</span> {project.features.join(', ')}</p>
                <p><span className="text-white">Challenges:</span> {project.challenges.join(', ')}</p>
                <p><span className="text-white">Lessons:</span> {project.lessons.join(', ')}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Projects
