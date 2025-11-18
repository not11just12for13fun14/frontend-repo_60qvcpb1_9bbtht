import { ShieldCheck, Zap, Settings, Headphones, Sparkles, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Enterprise security",
    desc: "SSO, SOC2-ready controls, audit trails, and role-based access across regions.",
  },
  {
    icon: Zap,
    title: "Ultra-low latency",
    desc: "Sub-10ms end-to-end delivery with adaptive jitter buffers and priority lanes.",
  },
  {
    icon: Settings,
    title: "Flexible integration",
    desc: "SDKs for web, native, and embedded devices with drop-in reference designs.",
  },
  {
    icon: Headphones,
    title: "Studio-grade fidelity",
    desc: "Lossless pipelines, 64-bit float DSP, and perceptual models tuned by pros.",
  },
  {
    icon: Sparkles,
    title: "AI-enhanced",
    desc: "Automatic room correction, profile detection, and predictive monitoring.",
  },
  {
    icon: CheckCircle2,
    title: "Proven at scale",
    desc: "Billions of events processed monthly with 99.99% historical uptime.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-24 bg-gradient-to-b from-slate-950 to-black">
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(50%_60%_at_50%_0%,rgba(56,189,248,0.35),transparent),radial-gradient(30%_30%_at_80%_10%,rgba(99,102,241,0.35),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">Why choose Sonic Vision</h2>
          <p className="mt-4 text-white/70">Enterprise-level sound system solutions engineered for reliability, control, and pristine audio quality.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10" />
              <div className="relative">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 text-white flex items-center justify-center ring-1 ring-white/10 shadow-md shadow-cyan-500/20">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-white font-medium text-lg">{r.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
