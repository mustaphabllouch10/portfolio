import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { getSkills } from '../services/api'

const Skills = () => {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    getSkills().then(({ data }) => {
      const grouped = data.reduce((accumulator, item) => {
        if (!accumulator[item.group]) accumulator[item.group] = []
        accumulator[item.group].push(item)
        return accumulator
      }, {})
      setGroups(Object.entries(grouped).map(([title, items]) => ({ title, items })))
    })
  }, [])

  return (
    <div className="space-y-8 pb-16">
      <SectionHeading eyebrow="Skills" title="A practical stack" description="The stack I use to ship polished products with care." />
      <div className="grid gap-6 lg:grid-cols-2">
        {groups.map((group) => (
          <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="mb-5 text-xl font-semibold text-white">{group.title}</h3>
            <div className="space-y-4">
              {group.items.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-300"><span>{item.icon}</span>{item.name}</span>
                    <span className="text-slate-400">{item.level}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
