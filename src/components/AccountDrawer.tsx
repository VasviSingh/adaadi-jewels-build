import { useState } from "react";
import { X } from "lucide-react";
import { useShop, useUI, MOCK_ORDERS, formatINR } from "@/lib/store";

export function AccountDrawer() {
  const open = useUI((s) => s.accountOpen);
  const setOpen = useUI((s) => s.setAccountOpen);
  const user = useShop((s) => s.user);
  const login = useShop((s) => s.login);
  const logout = useShop((s) => s.logout);
  const wishlist = useShop((s) => s.wishlist);

  const [tab, setTab] = useState<"login" | "signup">("login");
  const [view, setView] = useState<"orders" | "wishlist" | "address" | "profile">("orders");
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name: form.name || "Adaadi Customer", email: form.email || "you@adaadi.com" });
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-maroon-deep border-l border-gold/30 z-50 transform transition-transform duration-500 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
          <h3 className="font-display text-2xl">
            {user ? `Namaste, ${user.name.split(" ")[0]}` : "Account"} <span className="text-gold">◇</span>
          </h3>
          <button onClick={() => setOpen(false)} className="hover:text-gold"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {!user ? (
            <>
              <div className="flex border-b border-gold/20 mb-6">
                {(["login", "signup"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`flex-1 py-3 text-xs uppercase tracking-[0.25em] transition-colors ${
                      tab === t ? "text-gold border-b-2 border-gold" : "text-foreground/60"
                    }`}
                  >
                    {t === "login" ? "Login" : "Sign Up"}
                  </button>
                ))}
              </div>
              <form className="space-y-4" onSubmit={submit}>
                {tab === "signup" && (
                  <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                )}
                <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                <Field label="Password" type="password" value={form.password} onChange={(v) => setForm({ ...form, password: v })} />
                {tab === "signup" && (
                  <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                )}
                {tab === "login" && (
                  <a href="#" className="text-xs text-gold story-link inline-block">Forgot password?</a>
                )}
                <button type="submit" className="w-full bg-maroon border border-gold text-foreground py-3 tracking-[0.2em] uppercase text-xs hover:bg-gold hover:text-maroon-deep transition-colors mt-2">
                  {tab === "login" ? "Login" : "Create Account"}
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="flex flex-wrap gap-2 mb-6">
                {(["orders", "wishlist", "address", "profile"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    className={`px-3 py-1.5 text-[11px] tracking-[0.2em] uppercase border ${
                      view === v ? "bg-gold text-maroon-deep border-gold" : "border-gold/30 hover:border-gold"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>

              {view === "orders" && (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead className="text-gold uppercase tracking-wider">
                      <tr className="text-left">
                        <th className="py-2">Order</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MOCK_ORDERS.map((o) => (
                        <tr key={o.id} className="border-t border-gold/10">
                          <td className="py-3">{o.id}</td>
                          <td>{o.date}</td>
                          <td className="text-gold">{formatINR(o.total)}</td>
                          <td>{o.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {view === "wishlist" && (
                <p className="text-sm text-foreground/70">
                  {wishlist.length === 0 ? "No saved pieces yet." : `${wishlist.length} piece(s) saved.`}
                </p>
              )}
              {view === "address" && (
                <p className="text-sm text-foreground/70 italic font-display text-lg">No addresses on file.</p>
              )}
              {view === "profile" && (
                <div className="space-y-2 text-sm">
                  <p><span className="text-gold">Name:</span> {user.name}</p>
                  <p><span className="text-gold">Email:</span> {user.email}</p>
                </div>
              )}

              <button onClick={logout} className="mt-8 w-full border border-gold/40 py-3 tracking-[0.2em] uppercase text-xs hover:border-gold hover:text-gold">
                Logout
              </button>
            </>
          )}
        </div>
      </aside>
    </>
  );
}

function Field({
  label, value, onChange, type = "text",
}: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.25em] uppercase text-foreground/70">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full bg-transparent border-b border-gold/30 py-2 focus:outline-none focus:border-gold text-sm"
      />
    </label>
  );
}
