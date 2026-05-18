import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 mt-32 bg-maroon-deep/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gold text-xl">◇</span>
            <div>
              <div className="font-display text-2xl">Adaadi</div>
              <div className="text-[10px] tracking-[0.3em] text-gold uppercase">
                Fine Jewels
              </div>
            </div>
          </div>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Anti-tarnish, hypoallergenic jewellery handcrafted in India for the
            modern woman.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-4">
            Help
          </h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/care" className="story-link">FAQ</Link></li>
            <li><a href="#" className="story-link">Shipping</a></li>
            <li><a href="#" className="story-link">Returns</a></li>
            <li><a href="#" className="story-link">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-4">
            Brand
          </h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/about" className="story-link">Our Story</Link></li>
            <li><Link to="/collections" className="story-link">Collections</Link></li>
            <li><Link to="/care" className="story-link">Care Guide</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-4">
            Follow
          </h4>
          <div className="flex gap-4 text-foreground/80">
            <a href="#" className="hover:text-gold"><Instagram size={18} /></a>
            <a href="#" className="hover:text-gold"><Facebook size={18} /></a>
            <a href="#" className="hover:text-gold"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/10 py-6 text-center text-xs text-foreground/60 tracking-widest">
        © {new Date().getFullYear()} ADAADI FINE JEWELS · MADE IN INDIA
      </div>
    </footer>
  );
}
