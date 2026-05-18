import { create } from "zustand";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  metal: string;
  image: string;
};

type CartItem = Product & { qty: number };

type AuthUser = { name: string; email: string } | null;

type UIState = {
  cartOpen: boolean;
  accountOpen: boolean;
  setCartOpen: (v: boolean) => void;
  setAccountOpen: (v: boolean) => void;
};

type ShopState = {
  cart: CartItem[];
  wishlist: string[];
  user: AuthUser;
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  toggleWishlist: (id: string) => void;
  login: (u: NonNullable<AuthUser>) => void;
  logout: () => void;
};

export const useUI = create<UIState>((set) => ({
  cartOpen: false,
  accountOpen: false,
  setCartOpen: (v) => set({ cartOpen: v }),
  setAccountOpen: (v) => set({ accountOpen: v }),
}));

export const useShop = create<ShopState>((set) => ({
  cart: [],
  wishlist: [],
  user: null,
  addToCart: (p) =>
    set((s) => {
      const existing = s.cart.find((c) => c.id === p.id);
      if (existing) {
        return {
          cart: s.cart.map((c) =>
            c.id === p.id ? { ...c, qty: c.qty + 1 } : c
          ),
        };
      }
      return { cart: [...s.cart, { ...p, qty: 1 }] };
    }),
  removeFromCart: (id) =>
    set((s) => ({ cart: s.cart.filter((c) => c.id !== id) })),
  updateQty: (id, qty) =>
    set((s) => ({
      cart: s.cart
        .map((c) => (c.id === id ? { ...c, qty } : c))
        .filter((c) => c.qty > 0),
    })),
  toggleWishlist: (id) =>
    set((s) => ({
      wishlist: s.wishlist.includes(id)
        ? s.wishlist.filter((w) => w !== id)
        : [...s.wishlist, id],
    })),
  login: (u) => set({ user: u }),
  logout: () => set({ user: null }),
}));

export const PRODUCTS: Product[] = [
  { id: "zara-stud", name: "Zara Stud Earrings", price: 799, category: "Earrings", metal: "Gold-plated", image: "https://picsum.photos/seed/zara-stud/600/600" },
  { id: "meera-layered", name: "Meera Layered Necklace", price: 1499, category: "Necklaces", metal: "Gold-plated", image: "https://picsum.photos/seed/meera-layered/600/600" },
  { id: "asha-bangles", name: "Asha Bangles Set", price: 1299, category: "Bracelets", metal: "Gold-plated", image: "https://picsum.photos/seed/asha-bangles/600/600" },
  { id: "riya-ring", name: "Riya Statement Ring", price: 599, category: "Rings", metal: "Silver", image: "https://picsum.photos/seed/riya-ring/600/600" },
  { id: "priya-anklet", name: "Priya Anklet Duo", price: 899, category: "Anklets", metal: "Silver", image: "https://picsum.photos/seed/priya-anklet/600/600" },
  { id: "diya-choker", name: "Diya Choker", price: 1999, category: "Necklaces", metal: "Gold-plated", image: "https://picsum.photos/seed/diya-choker/600/600" },
  { id: "kavya-drop", name: "Kavya Drop Earrings", price: 749, category: "Earrings", metal: "Rose Gold", image: "https://picsum.photos/seed/kavya-drop/600/600" },
  { id: "leela-charm", name: "Leela Charm Bracelet", price: 1199, category: "Bracelets", metal: "Rose Gold", image: "https://picsum.photos/seed/leela-charm/600/600" },
  { id: "noor-cuff", name: "Noor Ear Cuff", price: 649, category: "Earrings", metal: "Gold-plated", image: "https://picsum.photos/seed/noor-cuff/600/600" },
  { id: "saira-hoop", name: "Saira Hoop Earrings", price: 849, category: "Earrings", metal: "Gold-plated", image: "https://picsum.photos/seed/saira-hoop/600/600" },
  { id: "tara-mangalsutra", name: "Tara Mangalsutra", price: 2499, category: "Sets", metal: "Gold-plated", image: "https://picsum.photos/seed/tara-mangalsutra/600/600" },
  { id: "ishaan-bracelet", name: "Ishaan Men's Bracelet", price: 999, category: "Bracelets", metal: "Silver", image: "https://picsum.photos/seed/ishaan-bracelet/600/600" },
];

export const MOCK_ORDERS = [
  { id: "ADA-1042", date: "2025-04-12", items: "Zara Stud Earrings, Riya Ring", total: 1398, status: "Delivered" },
  { id: "ADA-1031", date: "2025-03-02", items: "Diya Choker", total: 1999, status: "Delivered" },
  { id: "ADA-1018", date: "2025-02-14", items: "Tara Mangalsutra", total: 2499, status: "Shipped" },
];

export const formatINR = (n: number) =>
  "₹" + n.toLocaleString("en-IN");
