import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { AccountDrawer } from "@/components/AccountDrawer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gold">404</h1>
        <p className="mt-4 text-foreground/70">This page slipped through the cracks.</p>
        <Link to="/" className="mt-6 inline-block border border-gold px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-maroon-deep transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <h1 className="font-display text-3xl">Something shimmered out of place</h1>
        <p className="mt-3 text-sm text-foreground/70">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 border border-gold px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-maroon-deep transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Adaadi Fine Jewels — Anti-Tarnish Jewellery for the Modern Indian Woman" },
      { name: "description", content: "Adaadi Fine Jewels: anti-tarnish, hypoallergenic, handcrafted jewellery made in India." },
      { name: "author", content: "Adaadi" },
      { property: "og:title", content: "Adaadi Fine Jewels" },
      { property: "og:description", content: "Anti-tarnish, hypoallergenic jewellery handcrafted in India." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <AccountDrawer />
    </QueryClientProvider>
  );
}
