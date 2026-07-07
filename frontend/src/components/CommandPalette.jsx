import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { navItems } from '../constants/content'

const CommandPalette = ({ open, onClose }) => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const filteredItems = useMemo(() => {
    if (!query.trim()) return navItems
    return navItems.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
  }, [query])

  useEffect(() => {
    const onKeydown = (event) => {
      if (event.key === 'Escape') onClose()
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        onClose()
      }
    }

    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  }, [onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center bg-black/70 px-4 pt-24 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-[1.5rem] border border-white/10 bg-[#111111] p-3 shadow-2xl shadow-black/40">
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search sections"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0"
        />
        <div className="mt-3 space-y-1">
          {filteredItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => {
                navigate(item.href)
                onClose()
              }}
              className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <span>{item.name}</span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Go</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CommandPalette
