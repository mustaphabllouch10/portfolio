import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { getExperience } from '../services/api'

const Experience = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    getExperience().then(({ data }) => setItems(data))
  }, [])

  return (
    <div className="space-y-8 pb-16">
      <SectionHeading eyebrow="Experience" title="A focused growth path" description="A timeline of learning, shipping, and building with intent." />
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div key={item.id} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience
