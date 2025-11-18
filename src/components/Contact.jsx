export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(50%_60%_at_50%_0%,rgba(56,189,248,0.35),transparent),radial-gradient(30%_30%_at_80%_10%,rgba(99,102,241,0.35),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-3xl font-semibold text-white">Talk to our team</h2>
          <p className="mt-2 text-white/70">Request a demo, pricing, or architectural review for your deployment.</p>
          <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-500/40" />
            <input required type="email" placeholder="Work email" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-500/40" />
            <input placeholder="Company" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-500/40" />
            <input placeholder="Phone" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-500/40" />
            <textarea placeholder="Tell us about your use case" rows={4} className="sm:col-span-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-500/40" />
            <button className="sm:col-span-2 inline-flex justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 ring-1 ring-white/10">Request demo</button>
          </form>
        </div>
      </div>
    </section>
  );
}
