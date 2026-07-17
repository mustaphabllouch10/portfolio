import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { getProjects } from '../services/api'
import SectionHeading from '../components/SectionHeading'
import { projectsContent } from '../constants/content'

const ProjectGallery = ({ images, title }) => {
  const galleryImages = Array.isArray(images) ? images.filter(Boolean) : []
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    setActiveIndex(0)
    setSelectedImage(null)
  }, [images])

  if (!galleryImages.length) return null

  const nextImage = () => setActiveIndex((current) => (current + 1) % galleryImages.length)
  const prevImage = () => setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length)

  return (
    <>
      <div className="space-y-3">
        <div className="relative">
          <button type="button" onClick={() => setSelectedImage(galleryImages[activeIndex])} className="block w-full text-left">
            <img src={galleryImages[activeIndex]} alt={`${title} preview ${activeIndex + 1}`} className="h-48 w-full object-cover" />
          </button>
          {galleryImages.length > 1 ? (
            <div className="absolute inset-x-3 top-3 flex items-center justify-between">
              <button type="button" onClick={prevImage} className="rounded-full border border-white/20 bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70">
                <ArrowLeft size={16} />
              </button>
              <button type="button" onClick={nextImage} className="rounded-full border border-white/20 bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70">
                <ArrowRight size={16} />
              </button>
            </div>
          ) : null}
        </div>
        {galleryImages.length > 1 ? (
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {galleryImages.map((image, index) => (
                <button key={`${title}-${index}`} type="button" onClick={() => setActiveIndex(index)} className={`h-2.5 w-2.5 rounded-full transition ${activeIndex === index ? 'bg-blue-400' : 'bg-white/20'}`} />
              ))}
            </div>
            <p className="text-xs text-slate-400">{activeIndex + 1} / {galleryImages.length}</p>
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" onClick={() => setSelectedImage(null)}>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative w-full max-w-4xl rounded-[1.5rem] border border-white/10 bg-black/90 p-3" onClick={(event) => event.stopPropagation()}>
              <button type="button" onClick={() => setSelectedImage(null)} className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-black/60 p-2 text-white backdrop-blur-sm transition hover:bg-black/80">
                <X size={18} />
              </button>
              <img src={selectedImage} alt={`${title} full view`} className="max-h-[80vh] w-full rounded-[1rem] object-contain" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

const Projects = () => {
  const [projects, setProjects] = useState(projectsContent)
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)



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
            <ProjectGallery images={Array.isArray(project.images) ? project.images : [project.image].filter(Boolean)} title={project.title} />
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
