import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { trackCtaClicked } from "@/analytics/amplitude";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleDesktopContactClick() {
    trackCtaClicked({
      name: "Contact Us",
      location: "Header",
    });
  }

  function handleMobileContactClick() {
    trackCtaClicked({
      name: "Contact Us",
      location: "Mobile Menu",
    });

    closeMenu();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      {/* Main Header */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" aria-label="Zenifilm home" onClick={closeMenu}>
          <Wordmark />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{
                className: "text-sm font-medium text-primary",
              }}
              activeOptions={{
                exact: item.to === "/",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact CTA */}
        <Link
          to="/contact"
          onClick={handleDesktopContactClick}
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:bg-primary/90 md:inline-flex"
        >
          Contact us
        </Link>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          className="grid size-11 place-items-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-border/60 bg-background transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-[430px] opacity-100" : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 pb-6 pt-3">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className="border-b border-border/60 py-4 text-base font-semibold text-foreground/75 transition-colors hover:text-primary"
                activeProps={{
                  className: "border-b border-border/60 py-4 text-base font-semibold text-primary",
                }}
                activeOptions={{
                  exact: item.to === "/",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Contact CTA */}
          <Link
            to="/contact"
            onClick={handleMobileContactClick}
            className="mt-6 flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-elegant transition-all hover:bg-primary/90"
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}
