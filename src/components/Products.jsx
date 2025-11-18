import { Speaker, Radio, Headphones, Mic2, MonitorSmartphone, Bluetooth } from "lucide-react";

const products = [
  {
    icon: Speaker,
    name: "Sonic Node X1",
    desc: "Rack-mount DSP for arenas and enterprise venues with redundant power.",
    badge: "NEW",
  },
  {
    icon: Headphones,
    name: "Vision Pro Cans",
    desc: "Reference headphones with spatial head-tracking and lossless wireless.",
  },
  {
    icon: Mic2,
    name: "Array Mic S6",
    desc: "Beamforming mic array with noise rejection and auto-calibration.",
  },
  {
    icon: MonitorSmartphone,
    name: "Live Console App",
    desc: "Real-time control across iOS, Android, and web with role-based access.",
  },
  {
    icon: Radio,
    name: "Edge Stream Kit",
    desc: "Low-latency transmitter/receiver pair for venues and broadcast.",
  },
  {
    icon: Bluetooth,
    name: "BLE Sync Hub",
    desc: "Millisecond-accurate sync for multi-room speaker deployments.",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-24">
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.35),transparent),radial-gradient(30%_30%_at_80%_10%,rgba(99,102,241,0.35),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">Products</h2>
          <p className="mt-4 text-white/70">Hardware and software that work together for enterprise-grade sound.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 text-white flex items-center justify-center ring-1 ring-white/10 shadow-md shadow-cyan-500/20">
                    <p.icon className="h-5 w-5" />
                  </div>
                  {p.badge && (
                    <span className="text-[10px] px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-400/30">{p.badge}</span>
                  )}
                </div>
                <h3 className="mt-4 text-white font-medium text-lg">{p.name}</h3>
                <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
