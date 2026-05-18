import { createFileRoute } from "@tanstack/react-router";
import founderImg from "@/assets/founder.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Adaadi Fine Jewels" },
      { name: "description", content: "Crafted for the modern Indian woman. Anti-tarnish jewellery that refuses to fade." },
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
          A woman's jewellery is her{" "}
          <span className="italic text-gold">silent statement.</span>
        </h1>
        <p className="mt-8 text-foreground/80 leading-relaxed max-w-2xl mx-auto">
          Adaadi was born from a feeling every woman knows — falling in love with
          a piece, only to watch it lose its shine too soon. We refused to accept
          that. We built a brand where beauty doesn't have an expiry date, where
          every piece is as fierce and lasting as the woman wearing it.
        </p>
        <p className="mt-5 text-foreground/70 leading-relaxed max-w-2xl mx-auto">
          From your morning chai to your midnight dance floor — Adaadi is made
          for every version of you, every single day.
        </p>
      </section>

      {/* PROMISE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="gold-divider mb-12 text-sm tracking-[0.4em] uppercase">
          <span>Our Promise</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass p-10 text-center">
            <div className="text-gold text-3xl mb-4">◇</div>
            <h3 className="text-2xl mb-3">Anti-Tarnish Guarantee</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              If it fades within 12 months, we replace it. No questions, no drama.
            </p>
          </div>
          <div className="glass p-10 text-center">
            <div className="text-gold text-3xl mb-4">◇</div>
            <h3 className="text-2xl mb-3">1-Year Warranty</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Every Adaadi piece is backed by a full year of love, care, and repair.
            </p>
          </div>
          <div className="glass p-10 text-center">
            <div className="text-gold text-3xl mb-4">◇</div>
            <h3 className="text-2xl mb-3">Hypoallergenic</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Nickel-free, skin-safe metals. Wear us 24/7 — we can handle it.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className="aspect-[4/5] glass overflow-hidden">
          <img
            src={founderImg}
            alt="Adaadi Singh — Founder of Adaadi Fine Jewels"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div>
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">◇ Meet the Founder</p>
          <h2 className="font-display text-4xl md:text-5xl mb-2">Adaadi Singh</h2>
          <p className="text-gold/70 text-xs tracking-[0.2em] uppercase mb-6">
            Founder · BSc Agriculture · Jewellery Obsessive
          </p>
          <p className="text-foreground/80 leading-relaxed">
            A science student who believes jewellery can make or break a deal —
            Adaadi turned her obsession into a brand that proves you don't have
            to choose between looking stunning and staying practical.
          </p>
          <p className="mt-6 text-gold italic font-display text-2xl leading-snug">
            "The right jewellery doesn't just complete an outfit —<br />
            it completes a woman."
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="gold-divider mb-12 text-sm tracking-[0.4em] uppercase">
          <span>What We Stand For</span>
        </div>
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
