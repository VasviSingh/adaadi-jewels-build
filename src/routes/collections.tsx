import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Adaadi Fine Jewels" },
      { name: "description", content: "Discover Everyday Edit, Bridal Essentials, and Statement Pieces." },
      { property: "og:title", content: "Adaadi Collections" },
      { property: "og:description", content: "Curated edits for every moment." },
    ],
  }),
  component: Collections,
});

const collections = [
  {
    name: "Everyday Edit",
    tag: "Minimalist · Daily Wear",
    desc: "Featherweight pieces that go from morning chai to midnight calls. Designed to be lived in.",
    img: "photo-1599643478518-a784e5dc4c8f",
  },
  {
    name: "Bridal Essentials",
    tag: "Tradition · Reimagined",
    desc: "Mangalsutras, chokers and sets where ancestral craft meets contemporary form. For the bride who writes her own rituals.",
    img: "photo-1601121141461-9d6647bca1ed",
  },
  {
    name: "Statement Pieces",
    tag: "Bold · Unforgettable",
    desc: "Chunky cuffs, dramatic drops, and ear cuffs that turn rooms into runways.",
    img: "photo-1611591437281-460bfbe1220a",
  },
];

function Collections() {
  return (
    <div>
      <header className="text-center py-20 px-6">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">◇ Curated Edits</p>
        <h1 className="font-display text-5xl md:text-6xl">Collections</h1>
      </header>

      <div className="space-y-32 pb-20">
        {collections.map((c, i) => (
          <section
            key={c.name}
            className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center ${
              i % 2 === 1 ? "md:[direction:rtl]" : ""
            }`}
          >
            <div className="relative aspect-[4/5] glass overflow-hidden md:[direction:ltr]">
              <img
                src={`https://images.unsplash.com/${c.img}?auto=format&fit=crop&w=900&q=80`}
                alt={c.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/60 to-transparent" />
            </div>
            <div className="md:[direction:ltr]">
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">◇ {c.tag}</p>
              <h2 className="font-display text-4xl md:text-5xl mb-5">{c.name}</h2>
              <p className="text-foreground/80 leading-relaxed mb-8">{c.desc}</p>
              <Link
                to="/shop"
                className="inline-block border border-gold px-8 py-3 text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-maroon-deep transition-colors"
              >
                Shop the Edit
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
