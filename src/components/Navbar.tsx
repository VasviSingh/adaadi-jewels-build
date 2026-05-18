import { Link } from "@tanstack/react-router";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useShop, useUI } from "@/lib/store";
import logoImg from "@/assets/logo.jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/care", label: "Care Guide" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const cart = useShop((s) => s.cart);
  const setCartOpen = useUI((s) => s.setCartOpen);
  const setAccountOpen = useUI((s) => s.setAccountOpen);
  const count = cart.reduce((a, c) => a + c.qty, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-maroon-deep/95 backdrop-blur-md border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center group">
          <img
            src={logoImg}
            alt="Adaadi Fine Jewels"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="story-link text-sm tracking-[0.2em] uppercase text-foreground/85 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button aria-label="Search" className="hover:text-gold transition-colors hidden sm:block">
            <Search size={18} />
          </button>
          <button
            aria-label="Account"
            onClick={() => setAccountOpen(true)}
            className="hover:text-gold transition-colors"
          >
            <User size={18} />
          </button>
          <button
            aria-label="Cart"
            onClick={() => setCartOpen(true)}
            className="relative hover:text-gold transition-colors"
          >
            <ShoppingBag size={18} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-maroon-deep text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            className="md:hidden hover:text-gold"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-maroon-deep/98 border-t border-gold/20 animate-fade-in">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-[0.2em] uppercase py-2"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
