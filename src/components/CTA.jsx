export default function CTA() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.35),transparent_35%),radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.35),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-2xl font-semibold text-white">Experience studio-grade sound in your product</h3>
            <p className="mt-2 text-white/70">Start free. Upgrade when you ship to production. No credit card required.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-white/80">Unlimited projects</div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-white/80">5M monthly events</div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-white/80">Community support</div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 ring-1 ring-white/10" href="#demo">
                Start Free
              </a>
              <a className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/15" href="#contact">
                Talk to sales
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8">
            <p className="text-white/70 text-sm">Pro</p>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-4xl font-semibold text-white">$49</span>
              <span className="text-white/60">/mo</span>
            </div>
            <ul className="mt-6 space-y-3 text-white/80 text-sm">
              <li>50M monthly events</li>
              <li>Priority support</li>
              <li>Advanced monitoring</li>
              <li>SLA + SSO</li>
            </ul>
            <a className="mt-8 inline-flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 ring-1 ring-white/10" href="#checkout">
              Upgrade to Pro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
