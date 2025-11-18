import { useEffect, useState } from "react";
import { Speaker, Boxes, Server, Cpu } from "lucide-react";

const iconMap = {
  speakers: Speaker,
  electronics: Cpu,
  dsp: Server,
  systems: Boxes,
};

const backend = import.meta.env.VITE_BACKEND_URL || "";

export default function Products() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${backend}/api/products`);
        if (!res.ok) throw new Error("Failed to load products");
        const data = await res.json();
        setItems(data.items || []);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section id="products" className="relative py-24">
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.35),transparent),radial-gradient(30%_30%_at_80%_10%,rgba(99,102,241,0.35),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">Products</h2>
          <p className="mt-4 text-white/70">Hardware and software that work together for enterprise-grade sound.</p>
        </div>

        {loading && (
          <p className="mt-10 text-white/70">Loading products…</p>
        )}
        {error && (
          <p className="mt-10 text-red-300">{error}</p>
        )}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => {
            const Icon = iconMap[p.category] || Speaker;
            return (
              <a
                key={p.id || p.slug || i}
                href={`/products/${p.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur block"
              >
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10" />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 text-white flex items-center justify-center ring-1 ring-white/10 shadow-md shadow-cyan-500/20">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-white font-medium text-lg">{p.title}</h3>
                  <p className="mt-1 text-white/60 text-sm">{p.subtitle}</p>
                  {p.price != null && (
                    <p className="mt-3 text-cyan-300 text-sm">${p.price.toLocaleString()}</p>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
