import { motion } from 'framer-motion'
import { ArrowRight, Download, GitBranch, Link2 } from 'lucide-react'
import AnimatedBackground from '../components/AnimatedBackground'
import SectionHeading from '../components/SectionHeading'
import SkillIcon from '../components/SkillIcon'
import { aboutContent, heroContent, projectsContent, skillsContent, experienceContent, profile } from '../constants/content'

const getProjectImage = (project) => {
  if (Array.isArray(project?.images) && project.images.length > 0) {
    return project.images[0]
  }

  return project?.image || ''
}

const Home = () => {
  return (
    <div className="space-y-24 pb-16">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-16 shadow-2xl shadow-black/30 sm:px-8 lg:px-12 lg:py-24">
        <AnimatedBackground />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Available for ambitious teams</p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                {heroContent.name}
              </h1>
              <h2 className="text-xl font-medium text-blue-400 sm:text-2xl">{heroContent.title}</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-400">{heroContent.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">
                View Projects <ArrowRight size={16} />
              </a>
              <a   href="/CV.pdf" download="Mustapha_Bllouch_CV.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-blue-400 hover:bg-blue-500/10">
                <Download size={16} /> Download CV
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={profile.github} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-400 hover:text-white">
                <GitBranch size={16} /> GitHub
              </a>
              {profile.linkedin ? (
                <a href={profile.linkedin} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-400 hover:text-white">
                  <Link2 size={16} /> LinkedIn
                </a>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-slate-400">
              {heroContent.stats.map((stat) => (
                <div key={stat} className="rounded-full border border-white/10 px-3 py-2">
                  {stat}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-transparent to-slate-600/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 p-4 backdrop-blur-xl">
              <img
                src={profile.image}
                alt={profile.name}
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />
              <div className="mt-4 rounded-[1.25rem] border border-white/10 p-4 text-sm text-slate-400">
                <p className="text-white">Focused on thoughtful interfaces and dependable systems.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading eyebrow="About" title="A calm, product-minded engineer" description="My work sits at the intersection of design detail and dependable architecture." />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-lg leading-8 text-slate-400">{aboutContent.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {aboutContent.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300">{skill}</span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutContent.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/40 p-4 text-slate-300">{item}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading eyebrow="Projects" title="Selected work" description="A few recent builds that blend experience design with clean engineering." />
        <div className="grid gap-6 lg:grid-cols-3">
          {projectsContent.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.08 }} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
              <img src={getProjectImage(project)} alt={project.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              <div className="space-y-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm leading-7 text-slate-400">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">{technology}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="text-sm text-slate-300 transition hover:text-white">GitHub</a>
                  <a href={project.demo} className="text-sm text-slate-300 transition hover:text-white">Repo</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading eyebrow="Skills" title="Tools and disciplines" description="I build across the stack with a strong bias toward maintainability and clarity." />
        <div className="grid gap-6 lg:grid-cols-2">
          {skillsContent.groups.map((group) => (
            <div key={group.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="mb-5 text-xl font-semibold text-white">{group.title}</h3>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-slate-300">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-400">
                          <SkillIcon icon={item.icon} className="h-4 w-4" />
                        </span>
                        {item.name}
                      </span>
                      <span className="text-slate-400">{item.level}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading eyebrow="Experience" title="A steady, focused growth path" description="The journey so far has been shaped by curiosity, shipping, and quiet consistency." />
        <div className="space-y-4">
          {experienceContent.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }} className="flex flex-col gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
