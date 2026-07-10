import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../constants/content'
import { submitContact } from '../services/api'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')
    try {
      await submitContact(form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error?.response?.data?.message || error?.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="space-y-8 pb-16">
      <SectionHeading eyebrow="Contact" title="Say hello" description="Whether you need a product-minded engineer or a thoughtful collaborator, I’d love to hear about it." />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-lg leading-8 text-slate-400">Open to freelance work, thoughtful product teams, and ambitious side projects.</p>
          <div className="mt-8 space-y-3 text-sm text-slate-400">
            <p>📍 {profile.location}</p>
            <a href={`mailto:${profile.email}`} className="block transition hover:text-white">✉️ {profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="block transition hover:text-white">🔗 {profile.github}</a>
          </div>
        </motion.div>
        <motion.form initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} onSubmit={handleSubmit} className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none" placeholder="Name" />
            <input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none" placeholder="Email" />
          </div>
          <textarea required rows="6" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none" placeholder="Your message" />
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">
            <Send size={16} /> {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' ? <p className="text-sm text-emerald-400">Message sent successfully.</p> : null}
          {status === 'error' ? <p className="text-sm text-rose-400">{errorMessage}</p> : null}
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
