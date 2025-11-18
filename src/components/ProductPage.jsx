import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const backend = import.meta.env.VITE_BACKEND_URL || "";

export default function ProductPage() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${backend}/api/products/${slug}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setItem(data);
      } catch (e) {
        setError((e).message);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [slug]);

  if (loading) return <div className="mx-auto max-w-7xl px-6 py-24 text-white/70">Loading…</div>;
  if (error) return <div className="mx-auto max-w-7xl px-6 py-24 text-red-300">{error}</div>;
  if (!item) return null;

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,0.15),transparent),radial-gradient(40%_30%_at_80%_10%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-center gap-2 text-white/70 text-sm">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/#products" className="hover:text-white">Products</Link>
          <span>/</span>
          <span className="text-white/90">{item.title}</span>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">{item.title}</h1>
            {item.subtitle && <p className="mt-3 text-white/70 text-lg">{item.subtitle}</p>}
            {item.price != null && (
              <p className="mt-6 text-cyan-300 text-xl font-medium">${item.price.toLocaleString()}</p>
            )}
            {item.description && <p className="mt-6 text-white/70 leading-7">{item.description}</p>}

            {item.features?.length > 0 && (
              <div className="mt-8">
                <h3 className="text-white font-medium">Key features</h3>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.features.map((f, i) => (
                    <li key={i} className="text-white/70 text-sm">• {f}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.specs && Object.keys(item.specs).length > 0 && (
              <div className="mt-8">
                <h3 className="text-white font-medium">Specifications</h3>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(item.specs).map(([k, v]) => (
                    <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">
                      <span className="text-white/60">{k}</span>
                      <div className="text-white">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="order-1 lg:order-2">
            <div className="aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
              {item.hero_image ? (
                <img src={item.hero_image} alt={item.title} className="h-full w-full object-contain" />
              ) : (
                <div className="text-white/50">No image</div>
              )}
            </div>
            {item.images?.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {item.images.slice(1).map((src, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/5">
                    <img src={src} alt={`${item.title} ${i+2}`} className="h-full w-full object-contain" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
