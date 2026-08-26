const testimonials = [
  {
    quote:
      "Zenifilm turned our raw vlogs into something that feels like a streaming doc. Average view duration went up 34% in two months.",
    name: "Maya Rahman",
    role: "Creator · 480K subs",
    initials: "MR",
  },
  {
    quote:
      "The retainer is the whole point. We upload footage on Monday and polished reels are live by Wednesday, every single week.",
    name: "Devon Klein",
    role: "Founder · SaaS brand",
    initials: "DK",
  },
  {
    quote:
      "Motion graphics that actually match our brand kit, and they have never missed a deadline. That's rare in this space.",
    name: "Lena Prakash",
    role: "Head of Marketing",
    initials: "LP",
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-y border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-bold">What clients say</h2>
          <p className="max-w-sm text-sm text-foreground/60">
            20+ creators and brands trust Zenifilm as their in-house post team.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-3xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="font-display text-4xl font-extrabold text-primary/20">&ldquo;</div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{t.quote}</p>
              <footer className="mt-8 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full gradient-brand text-xs font-bold text-primary-foreground">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-bold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
