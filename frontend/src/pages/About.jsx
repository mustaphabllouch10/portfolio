import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { aboutContent } from '../constants/content'

const About = () => {
  return (
    <div className="space-y-8 pb-16">
      <SectionHeading eyebrow="About" title="A modern timeline of growth" description="The path so far has been shaped by curiosity, shipping, and a commitment to clean systems." />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-lg leading-8 text-slate-400">{aboutContent.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {aboutContent.skills.map((skill) => <span key={skill} className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300">{skill}</span>)}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-3xl font-semibold text-white">4+</p>
              <p className="mt-2 text-sm text-slate-400">Projects</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-3xl font-semibold text-white">2+</p>
              <p className="mt-2 text-sm text-slate-400">Years Learning</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="space-y-4">
        {aboutContent.milestones.map((item, index) => (
          <motion.div key={item.year} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">{item.year}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About
