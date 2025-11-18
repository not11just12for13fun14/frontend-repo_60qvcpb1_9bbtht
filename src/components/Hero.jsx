import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            New: AI-driven acoustic profiles
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Sonic Vision
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-400">
              3D sound systems for modern SaaS
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-xl">
            Design, optimize, and monitor immersive audio pipelines with live 3D visualization.
            Bring studio-grade clarity to your product with predictive tuning and real-time insights.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 ring-1 ring-white/10" href="#demo">
              Explore the Demo
            </a>
            <a className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/15" href="#pricing">
              View Pricing
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-white/60 text-xs">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={`https://i.pravatar.cc/40?img=${i+1}`} alt="avatar" className="h-7 w-7 rounded-full ring-2 ring-black/60" />
              ))}
            </div>
            <p>Trusted by product, game, and music teams</p>
          </div>
        </div>
      </div>
    </section>
  );
}
