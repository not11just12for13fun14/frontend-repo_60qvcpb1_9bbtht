export default function Testimonials() {
  const quotes = [
    {
      quote: "Sonic Vision transformed our venue acoustics in a weekend.",
      author: "Maya R.",
      role: "FOH Engineer, Skyline Arena",
    },
    {
      quote: "The predictive tuning shaved hours off every broadcast setup.",
      author: "Jordan K.",
      role: "Audio Director, StreamWave",
    },
    {
      quote: "Enterprise features without enterprise friction.",
      author: "Ava T.",
      role: "CTO, Eventry",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-slate-950 to-black">
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.35),transparent),radial-gradient(30%_30%_at_80%_10%,rgba(99,102,241,0.35),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">Loved by pros</h2>
          <p className="mt-4 text-white/70">What engineers and teams say about Sonic Vision.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-white/90">“{q.quote}”</p>
              <p className="mt-4 text-white/70 text-sm">{q.author} • {q.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
