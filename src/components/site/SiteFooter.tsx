import { Link } from "@tanstack/react-router";
import { Wordmark } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <Wordmark className="text-xl" />
        <nav className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <Link to="/portfolio" className="transition-colors hover:text-primary">
            Portfolio
          </Link>
          <Link to="/about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link to="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
          <a href="https://youtube.com" className="transition-colors hover:text-primary">
            YouTube
          </a>
          <a href="https://instagram.com" className="transition-colors hover:text-primary">
            Instagram
          </a>
        </nav>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Zenifilm Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
