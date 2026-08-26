import { Link } from "@tanstack/react-router";

const nav = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-2xl font-extrabold tracking-tighter ${className}`}>
      <span className="text-primary">ZENI</span>
      <span className="text-tertiary">FILM.</span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" aria-label="Zenifilm home">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-sm font-medium text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:bg-primary/90"
        >
          Contact us
        </Link>
      </div>
    </header>
  );
}
