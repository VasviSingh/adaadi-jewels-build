import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { useShop, formatINR, type Product } from "@/lib/store";

export function ProductCard({ product }: { product: Product }) {
  const addToCart = useShop((s) => s.addToCart);
  const toggleWishlist = useShop((s) => s.toggleWishlist);
  const wishlist = useShop((s) => s.wishlist);
  const wished = wishlist.includes(product.id);

  return (
    <div className="group glass glass-hover hover-lift overflow-hidden flex flex-col">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-maroon-deep/80 border border-gold/40 text-gold text-[10px] tracking-[0.2em] uppercase px-2 py-1">
          Anti-Tarnish
        </span>
        <button
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-maroon-deep/70 border border-gold/30 flex items-center justify-center hover:border-gold transition-colors"
          aria-label="Wishlist"
        >
          <Heart size={14} className={wished ? "fill-gold text-gold" : "text-foreground"} />
        </button>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <Link to="/shop" className="font-display text-lg leading-snug hover:text-gold">
          {product.name}
        </Link>
        <p className="text-gold mt-1 text-sm tracking-wider">{formatINR(product.price)}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 flex items-center justify-center gap-2 border border-gold/40 py-2.5 text-[11px] tracking-[0.25em] uppercase hover:bg-gold hover:text-maroon-deep hover:border-gold transition-colors"
        >
          <ShoppingBag size={13} /> Add to Cart
        </button>
      </div>
    </div>
  );
}
