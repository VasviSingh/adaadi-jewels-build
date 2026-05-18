import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Adaadi Fine Jewels" },
      { name: "description", content: "Born in the lanes of Lucknow, crafted for the modern Indian woman." },
      { property: "og:title", content: "Our Story — Adaadi" },
      { property: "og:description", content: "Sustainable, affordable luxury made in India." },
    ],
  }),
  component: About,
});

const values = ["Sustainable", "Affordable Luxury", "Made in India", "Women-led"];

function About() {
  return (
    <div>
      {/* HERO */}
      <section className="text-center py-24 px-6 max-w-3xl mx-auto">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">◇ Our Story</p>
        <h1 className="font-display text-5xl md:text-6xl leading-tight">
          Born in the lanes of <span className="italic text-gold">Lucknow</span>, crafted for the modern Indian woman.
        </h1>
        <p className="mt-8 text-foreground/80 leading-relaxed">
          Adaadi began with a single frustration — beautiful jewellery that turned
          dull in weeks. We set out to fix it. Years of metallurgy, dozens of
          prototypes, and one obsessive promise later, Adaadi is anti-tarnish
          jewellery that refuses to fade. Just like the women who wear it.
        </p>
      </section>

      {/* PROMISE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="gold-divider mb-12 text-sm tracking-[0.4em] uppercase"><span>Our Promise</span></div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass p-10">
            <div className="text-gold text-3xl mb-3">◇</div>
            <h3 className="text-2xl mb-2">Anti-Tarnish Guarantee</h3>
            <p className="text-foreground/70">If it fades within 12 months, we replace it. No questions.</p>
          </div>
          <div className="glass p-10">
            <div className="text-gold text-3xl mb-3">◇</div>
            <h3 className="text-2xl mb-2">1-Year Warranty</h3>
            <p className="text-foreground/70">Every Adaadi piece is backed by a full year of love and repair.</p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-[4/5] glass overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?auto=format&fit=crop&w=800&q=80"
            alt="Founder of Adaadi"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">◇ Meet the Founder</p>
          <h2 className="font-display text-4xl mb-4">Aanya Verma</h2>
          <p className="text-foreground/80 leading-relaxed">
            A metallurgist-turned-designer, Aanya grew up watching her grandmother's
            jewellery turn black overnight in the Lucknow humidity. Adaadi is her
            answer — a brand where heirloom craft meets technology, and where every
            woman, regardless of skin or season, can wear gold every day.
          </p>
          <p className="mt-4 text-gold italic font-display text-xl">
            "Jewellery should outlive the moment it was bought for."
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="gold-divider mb-12 text-sm tracking-[0.4em] uppercase"><span>What We Stand For</span></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((v) => (
            <div key={v} className="glass glass-hover hover-lift p-8 text-center">
              <div className="text-gold text-2xl mb-3">◇</div>
              <p className="font-display text-xl">{v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
