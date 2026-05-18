import { createFileRoute, Link } from "@tanstack/react-router";
import { PRODUCTS, formatINR } from "@/lib/store";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adaadi Fine Jewels — Anti-Tarnish Jewellery" },
      { name: "description", content: "Jewellery that lasts, just like you. Anti-tarnish, hypoallergenic, handcrafted in India." },
      { property: "og:title", content: "Adaadi Fine Jewels" },
      { property: "og:description", content: "Anti-tarnish jewellery for every Indian woman." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: "✦", title: "Anti-Tarnish Technology", desc: "Triple-coated PVD finish that defies time and weather." },
  { icon: "✦", title: "Hypoallergenic", desc: "Nickel-free, skin-safe — kind on the most sensitive skin." },
  { icon: "✦", title: "Handcrafted in India", desc: "Made by skilled artisans in the heart of Lucknow." },
];

const collections = [
  { name: "Everyday Edit", desc: "Effortless pieces for daily glow", seed: "everyday-edit" },
  { name: "Bridal Essentials", desc: "Heirloom moments, modern soul", seed: "bridal-essentials" },
  { name: "Statement Pieces", desc: "Bold. Unapologetic. You.", seed: "statement-pieces" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center justify-center text-center px-6 overflow-hidden -mt-20 pt-20">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1920&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/70 via-maroon-deep/85 to-maroon-deep" />

        <div className="relative max-w-3xl animate-fade-up">
          <div className="text-gold tracking-[0.6em] text-xs uppercase mb-6">
            ◇ अदाIdi · Fine Jewels ◇
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
            Jewellery That Lasts,
            <br />
            <span className="italic text-gold">Just Like You.</span>
          </h1>
          <p className="mt-6 text-foreground/80 max-w-xl mx-auto">
            Anti-tarnish. Hypoallergenic. Made for every Indian woman.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/shop" className="bg-cream text-maroon-deep px-8 py-3.5 text-xs tracking-[0.25em] uppercase border border-cream hover:border-gold hover:bg-gold transition-colors">
              Shop Now
            </Link>
            <Link to="/collections" className="border border-gold text-foreground px-8 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-maroon-deep transition-colors">
              Explore Collections
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ADAADI */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="gold-divider mb-12 text-sm tracking-[0.4em] uppercase"><span>Why Adaadi</span></div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass glass-hover hover-lift p-8 text-center">
              <div className="text-gold text-3xl mb-4">{f.icon}</div>
              <h3 className="text-2xl mb-3">{f.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-2">◇ Fresh from the atelier</p>
            <h2 className="font-display text-4xl md:text-5xl">New Arrivals</h2>
          </div>
          <Link to="/shop" className="story-link text-xs tracking-[0.25em] uppercase text-gold hidden sm:inline-block">View All</Link>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 snap-x">
          {PRODUCTS.slice(0, 6).map((p) => (
            <div key={p.id} className="min-w-[260px] sm:min-w-[300px] snap-start">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="gold-divider mb-12 text-sm tracking-[0.4em] uppercase"><span>Collections Spotlight</span></div>
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((c) => (
            <Link
              key={c.name}
              to="/collections"
              className="group relative h-96 overflow-hidden glass hover-lift block"
            >
              <img
                src={`https://picsum.photos/seed/${c.seed}/800/1000`}
                alt={c.name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/30 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="font-display text-3xl">{c.name}</h3>
                <p className="text-sm text-foreground/80 mt-1">{c.desc}</p>
                <span className="mt-4 text-gold text-xs tracking-[0.3em] uppercase">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* AS SEEN ON */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-2">◇ #AdaadiOnYou</p>
          <h2 className="font-display text-4xl">As Seen On</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <a key={i} href="#" className="aspect-square overflow-hidden glass hover-lift block">
              <img
                src={`https://picsum.photos/seed/insta-${i}/400/400`}
                alt={`Adaadi on Instagram ${i}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

// Suppress unused warning in this file
void formatINR;
