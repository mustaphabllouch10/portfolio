import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUp, Menu, Search, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, profile } from '../constants/content'
import useScrollProgress from '../hooks/useScrollProgress'
import useTheme from '../hooks/useTheme'
import CommandPalette from '../components/CommandPalette'
import LoadingScreen from '../components/LoadingScreen'

const MainLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const progress = useScrollProgress()
  const { theme, setTheme } = useTheme()

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setCommandOpen(true)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className={`min-h-screen bg-[#090909] text-white ${theme === 'light' ? 'bg-white text-black' : ''}`}>
      {loading ? <LoadingScreen /> : null}
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-lg font-semibold tracking-[0.25em] text-white">
            {profile.name.toUpperCase()}
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm text-slate-400 transition hover:text-white ${isActive ? 'text-white' : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setCommandOpen(true)} className="hidden rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-blue-400 hover:text-white md:inline-flex" aria-label="Open command palette">
              <Search size={18} />
            </button>
            <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-blue-400 hover:text-white" aria-label="Toggle theme">
              <Sparkles size={18} />
            </button>
            <button type="button" className="rounded-full border border-white/10 p-2 text-slate-300 md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
              <Menu size={18} />
            </button>
          </div>
        </div>
        {menuOpen ? (
          <div className="border-t border-white/10 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink key={item.href} to={item.href} className={({ isActive }) => `text-sm text-slate-400 transition hover:text-white ${isActive ? 'text-white' : ''}`} onClick={() => setMenuOpen(false)}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="border-t border-white/10 bg-black/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 {profile.name}. Built with React and Laravel.</p>
          <div className="flex items-center gap-4">
            <a href={profile.github} className="transition hover:text-white">GitHub</a>
            <a href={profile.linkedin} className="transition hover:text-white">LinkedIn</a>
            <button type="button" onClick={scrollToTop} className="rounded-full border border-white/10 p-2 transition hover:border-blue-400 hover:text-white" aria-label="Scroll to top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>

      <motion.div className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400" style={{ scaleX: progress }} />
    </div>
  )
}

export default MainLayout
