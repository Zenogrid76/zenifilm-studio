import { Link } from "@tanstack/react-router";

export function ReadyToBookSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink p-10 text-ink-foreground shadow-elegant md:p-16">
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full opacity-70 blur-3xl"
            style={{ backgroundImage: "var(--gradient-brand)" }}
            aria-hidden="true"
          />

          <div className="relative max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-foreground/50">
              Try Us First
            </span>

            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Get a Free Sample Edit.
            </h2>

            <p className="mt-6 text-lg text-ink-foreground/70">
              Send us your footage and we’ll create a one-minute sample edit at no cost. If you like
              the direction, we’ll take it from there.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="rounded-full gradient-brand px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:brightness-110"
              >
                Get My Free Sample
              </Link>

              <Link
                to="/portfolio"
                className="rounded-full border border-ink-foreground/20 px-8 py-4 text-sm font-bold transition-all hover:bg-ink-foreground/10"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
