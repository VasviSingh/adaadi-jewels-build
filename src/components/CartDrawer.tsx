import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useShop, useUI, formatINR } from "@/lib/store";

export function CartDrawer() {
  const open = useUI((s) => s.cartOpen);
  const setOpen = useUI((s) => s.setCartOpen);
  const cart = useShop((s) => s.cart);
  const updateQty = useShop((s) => s.updateQty);
  const removeFromCart = useShop((s) => s.removeFromCart);
  const subtotal = cart.reduce((a, c) => a + c.qty * c.price, 0);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-maroon-deep border-l border-gold/30 z-50 transform transition-transform duration-500 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
          <h3 className="font-display text-2xl">Your Bag <span className="text-gold">◇</span></h3>
          <button onClick={() => setOpen(false)} className="hover:text-gold">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <p className="text-center text-foreground/60 mt-20 italic font-display text-lg">
              Your bag is empty.
            </p>
          ) : (
            <ul className="space-y-5">
              {cart.map((c) => (
                <li key={c.id} className="flex gap-4 glass p-3">
                  <img src={c.image} alt={c.name} className="w-20 h-20 object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between gap-2">
                      <p className="font-display text-lg leading-tight">{c.name}</p>
                      <button onClick={() => removeFromCart(c.id)} className="text-foreground/50 hover:text-gold">
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-gold text-sm mt-1">{formatINR(c.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQty(c.id, c.qty - 1)} className="w-7 h-7 border border-gold/40 hover:border-gold flex items-center justify-center"><Minus size={12} /></button>
                      <span className="w-6 text-center text-sm">{c.qty}</span>
                      <button onClick={() => updateQty(c.id, c.qty + 1)} className="w-7 h-7 border border-gold/40 hover:border-gold flex items-center justify-center"><Plus size={12} /></button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-gold/20 px-6 py-5 space-y-4">
            <input
              placeholder="Discount code"
              className="w-full bg-transparent border border-gold/30 px-3 py-2 text-sm focus:outline-none focus:border-gold placeholder:text-foreground/40"
            />
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="text-gold font-medium">{formatINR(subtotal)}</span>
            </div>
            <button className="w-full bg-maroon border border-gold text-foreground py-3 tracking-[0.2em] uppercase text-xs hover:bg-gold hover:text-maroon-deep transition-colors">
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
