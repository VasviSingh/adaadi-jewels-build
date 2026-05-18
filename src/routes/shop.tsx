import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PRODUCTS } from "@/lib/store";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Adaadi Fine Jewels" },
      { name: "description", content: "Browse our complete collection of anti-tarnish, hypoallergenic jewellery." },
      { property: "og:title", content: "Shop Adaadi Fine Jewels" },
      { property: "og:description", content: "Anti-tarnish rings, earrings, necklaces and more." },
    ],
  }),
  component: Shop,
});

const categories = ["All", "Rings", "Earrings", "Necklaces", "Bracelets", "Anklets", "Sets"];
const metals = ["All", "Gold-plated", "Silver", "Rose Gold"];

function Shop() {
  const [cat, setCat] = useState("All");
  const [metal, setMetal] = useState("All");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);
  const perPage = 9;

  const filtered = useMemo(() => {
    let arr = PRODUCTS.filter(
      (p) =>
        (cat === "All" || p.category === cat) &&
        (metal === "All" || p.metal === metal) &&
        p.price <= maxPrice
    );
    if (sort === "low") arr = [...arr].sort((a, b) => a.price - b.price);
    if (sort === "high") arr = [...arr].sort((a, b) => b.price - a.price);
    if (sort === "name") arr = [...arr].sort((a, b) => a.name.localeCompare(b.name));
    return arr;
  }, [cat, metal, maxPrice, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / perPage));
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="text-center mb-14">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">◇ The Collection</p>
        <h1 className="font-display text-5xl md:text-6xl">Shop All</h1>
        <p className="mt-3 text-foreground/70 max-w-xl mx-auto">
          Every piece, anti-tarnish, hypoallergenic, and made to last.
        </p>
      </header>

      <div className="grid lg:grid-cols-[260px_1fr] gap-10">
        {/* SIDEBAR */}
        <aside className="space-y-8 lg:sticky lg:top-24 self-start">
          <Filter title="Category">
            <ul className="space-y-2">
              {categories.map((c) => (
                <li key={c}>
                  <button
                    onClick={() => { setCat(c); setPage(1); }}
                    className={`text-sm text-left w-full hover:text-gold ${cat === c ? "text-gold" : "text-foreground/80"}`}
                  >
                    {cat === c && "◇ "}{c}
                  </button>
                </li>
              ))}
            </ul>
          </Filter>

          <Filter title={`Price up to ₹${maxPrice}`}>
            <input
              type="range"
              min={500}
              max={5000}
              step={100}
              value={maxPrice}
              onChange={(e) => { setMaxPrice(Number(e.target.value)); setPage(1); }}
              className="w-full accent-[color:var(--gold)]"
            />
          </Filter>

          <Filter title="Metal Type">
            <ul className="space-y-2">
              {metals.map((m) => (
                <li key={m}>
                  <button
                    onClick={() => { setMetal(m); setPage(1); }}
                    className={`text-sm text-left w-full hover:text-gold ${metal === m ? "text-gold" : "text-foreground/80"}`}
                  >
                    {metal === m && "◇ "}{m}
                  </button>
                </li>
              ))}
            </ul>
          </Filter>

          <Filter title="Sort by">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full bg-transparent border border-gold/30 px-3 py-2 text-sm focus:outline-none focus:border-gold"
            >
              <option value="featured" className="bg-maroon-deep">Featured</option>
              <option value="low" className="bg-maroon-deep">Price: Low to High</option>
              <option value="high" className="bg-maroon-deep">Price: High to Low</option>
              <option value="name" className="bg-maroon-deep">Name (A–Z)</option>
            </select>
          </Filter>
        </aside>

        {/* GRID */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-6">
            Showing {visible.length} of {filtered.length} pieces
          </p>
          {visible.length === 0 ? (
            <p className="font-display text-2xl italic text-foreground/70 py-20 text-center">
              No pieces match your filters.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}

          {pageCount > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 border text-sm ${
                    page === i + 1
                      ? "bg-gold text-maroon-deep border-gold"
                      : "border-gold/30 hover:border-gold"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Filter({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[11px] tracking-[0.3em] uppercase text-gold border-b border-gold/20 pb-2 mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}
