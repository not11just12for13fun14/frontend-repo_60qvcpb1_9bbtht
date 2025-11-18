import { motion } from "framer-motion";

export default function Showcase() {
  // animated sound wave bars
  const bars = Array.from({ length: 32 });
  return (
    <section className="relative py-28 bg-gradient-to-b from-black to-slate-950 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(40%_40%_at_20%_0%,rgba(56,189,248,0.35),transparent),radial-gradient(30%_30%_at_80%_10%,rgba(99,102,241,0.35),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">Sound you can see</h2>
            <p className="mt-4 text-white/70 max-w-xl">Visualize frequency, loudness, and stereo field in real-time. Our motion-optimized renderer makes monitoring effortless at any scale.</p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm">
              <li>• Multi-band metering with true-peak detection</li>
              <li>• Phase correlation and stereo imaging</li>
              <li>• Export snapshots for QA and audits</li>
            </ul>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10" />
            <div className="relative grid grid-cols-32 gap-1 h-48 items-end">
              {bars.map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 4, opacity: 0.6 }}
                  animate={{ height: [8, 64 + (i % 8) * 6, 12], opacity: [0.6, 1, 0.7] }}
                  transition={{ duration: 2 + (i % 5) * 0.2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-indigo-500 shadow-[0_0_15px_rgba(56,189,248,0.35)]"
                  style={{ gridColumn: `span 1 / span 1` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
