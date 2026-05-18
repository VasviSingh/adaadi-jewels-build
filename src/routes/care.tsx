import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/care")({
  head: () => ({
    meta: [
      { title: "Care Guide — Adaadi Fine Jewels" },
      { name: "description", content: "How to keep your anti-tarnish jewellery shining for years." },
      { property: "og:title", content: "Care Guide — Adaadi" },
      { property: "og:description", content: "Do's, don'ts, and storage tips for lasting shine." },
    ],
  }),
  component: Care,
});

const dos = [
  "Wipe with a soft, dry cloth after each wear.",
  "Store in the pouch provided, away from sunlight.",
  "Put jewellery on last — after perfume and makeup.",
  "Keep pieces separated to avoid scratches.",
];

const donts = [
  "Don't shower, swim, or sweat heavily in your jewellery.",
  "Don't use chemical cleaners, bleach, or alcohol wipes.",
  "Don't toss pieces loosely into a drawer or handbag.",
  "Don't store in humid bathrooms.",
];

function Care() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <header className="text-center mb-14">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">◇ The Long Game</p>
        <h1 className="font-display text-5xl md:text-6xl">Care Guide</h1>
        <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
          Our anti-tarnish coating does the heavy lifting — these small rituals
          help your Adaadi pieces shine for years to come.
        </p>
      </header>

      <section className="glass p-10 mb-16">
        <h2 className="font-display text-3xl mb-4 text-gold">How anti-tarnish works</h2>
        <p className="text-foreground/80 leading-relaxed">
          Every Adaadi piece is finished with a triple-layer PVD coating — a
          molecular shield that prevents oxygen and moisture from reaching the
          metal beneath. The result: gold that stays gold, silver that stays
          bright, and a finish that resists scratches, sweat and saltwater.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="glass glass-hover p-8">
          <h3 className="font-display text-2xl mb-5 text-gold flex items-center gap-2">
            <Check size={20} /> Do
          </h3>
          <ul className="space-y-3">
            {dos.map((d) => (
              <li key={d} className="flex gap-3 text-sm text-foreground/85">
                <span className="text-gold mt-1">◇</span> {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass glass-hover p-8">
          <h3 className="font-display text-2xl mb-5 text-gold flex items-center gap-2">
            <X size={20} /> Don't
          </h3>
          <ul className="space-y-3">
            {donts.map((d) => (
              <li key={d} className="flex gap-3 text-sm text-foreground/85">
                <span className="text-gold mt-1">◇</span> {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="glass p-10">
        <h2 className="font-display text-3xl mb-4 text-gold">Storage</h2>
        <p className="text-foreground/80 leading-relaxed">
          Keep each piece in its individual Adaadi pouch. For frequently worn
          everyday pieces, a lined jewellery tray in a dry cupboard works
          beautifully. Avoid bathroom shelves — humidity is the silent enemy of
          shine.
        </p>
      </section>
    </div>
  );
}
