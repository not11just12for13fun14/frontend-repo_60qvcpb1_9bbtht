import { Waves, LineChart, Cpu, Globe, Sliders, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Spatial Audio Engine",
    desc: "Render lifelike 3D environments with sub-millisecond latency and psychoacoustic modeling.",
  },
  {
    icon: LineChart,
    title: "Real-time Analytics",
    desc: "Observe signal flow, headroom, and loudness across every channel with anomaly alerts.",
  },
  {
    icon: Cpu,
    title: "AI Tuning",
    desc: "Adaptive EQ and room correction trained on thousands of acoustic profiles.",
  },
  {
    icon: Globe,
    title: "Edge Ready",
    desc: "Ultra-low footprint nodes that stream perfectly from cloud to edge devices.",
  },
  {
    icon: Sliders,
    title: "Pipeline Orchestrator",
    desc: "Drag-and-drop DSP blocks with versioning and rollback for safe experiments.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade",
    desc: "SSO, audit logs, encryption at rest, and region isolation out of the box.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black to-slate-950">
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.35),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.35),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">Built for audio at scale</h2>
          <p className="mt-4 text-white/70">Everything you need to power immersive sound in modern products.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg shadow-cyan-500/10">
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10" />
              <div className="relative">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 text-white flex items-center justify-center ring-1 ring-white/10 shadow-md shadow-cyan-500/20">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-white font-medium text-lg">{f.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
