import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#090909]">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <div className="mb-4 h-2 w-48 overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            className="h-full w-1/3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
          />
        </div>
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Loading portfolio</p>
      </motion.div>
    </div>
  )
}

export default LoadingScreen
