import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-slate-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-white sm:text-6xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-lg text-slate-400">The page you are looking for might have moved or no longer exists.</p>
      <Link to="/" className="mt-8 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">
        Return Home
      </Link>
    </div>
  )
}

export default NotFound
