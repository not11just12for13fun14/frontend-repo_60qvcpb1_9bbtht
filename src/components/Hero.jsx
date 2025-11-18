import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Speaker, Waves, Disc3, Mic2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* vignette + gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full blur-3xl opacity-30 bg-gradient-to-r from-cyan-500/40 to-indigo-500/40" />
      </div>

      {/* floating speakers & discs */}
      <motion.div
        className="absolute -left-10 top-28 hidden md:flex items-center justify-center"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 0.9 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-24 w-24 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur flex items-center justify-center">
          <Speaker className="h-10 w-10 text-cyan-300" />
        </div>
      </motion.div>
      <motion.div
        className="absolute right-6 top-1/3 hidden lg:flex items-center justify-center"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: [0, 10, 0], opacity: 0.9 }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-20 w-20 rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur flex items-center justify-center">
          <Disc3 className="h-8 w-8 text-indigo-300" />
        </div>
      </motion.div>

      {/* animated sound wave lines */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl">
        {[...Array(3)].map((_, row) => (
          <motion.div
            key={row}
            className="relative h-10 my-2 overflow-hidden"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.6] }}
            transition={{ duration: 3 + row, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ x: '-100%' }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 6 + row * 1.5, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundImage: `repeating-linear-gradient(90deg, rgba(56,189,248,0.0) 0, rgba(56,189,248,0.0) 8px, rgba(56,189,248,0.55) 8px, rgba(99,102,241,0.55) 14px, rgba(56,189,248,0.0) 14px, rgba(56,189,248,0.0) 22px)` }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            New: AI-driven acoustic profiles
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Sonic Vision
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-400">
              Enterprise sound system solutions
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-xl">
            Design, optimize, and monitor immersive audio infrastructures with live 3D visualization.
            Bring studio-grade clarity to every venue with predictive tuning and real-time insights.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 ring-1 ring-white/10" href="#demo">
              Explore the Demo
            </a>
            <a className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/15" href="#contact">
              Talk to Sales
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-white/60 text-xs">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={`https://i.pravatar.cc/40?img=${i+1}`} alt="avatar" className="h-7 w-7 rounded-full ring-2 ring-black/60" />
              ))}
            </div>
            <p>Trusted by arenas, broadcast, and live production teams</p>
          </div>
        </div>
      </div>

      {/* mic badge */}
      <motion.div
        className="absolute bottom-10 right-6 hidden sm:flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10 backdrop-blur"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: [10, 0, 10], opacity: 1 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Mic2 className="h-4 w-4 text-cyan-300" /> Live metering
      </motion.div>
    </section>
  );
}
