import { Menu, Headphones, PlayCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 ring-1 ring-white/10">
            <Headphones className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Sonic</span> Vision
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-white/70 hover:text-white transition">Pricing</a>
          <a href="#demo" className="text-white/70 hover:text-white transition">Demo</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-white/70 hover:text-white text-sm">Sign in</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 ring-1 ring-white/10">
            <PlayCircle className="h-4 w-4" />
            Get Started
          </a>
        </div>

        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
