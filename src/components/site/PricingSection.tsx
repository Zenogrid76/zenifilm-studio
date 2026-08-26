import { Link } from "@tanstack/react-router";

const plans = [
  {
    name: "Short Form Focus",
    price: "$1,499",
    blurb: "For creators scaling reels and shorts.",
    features: ["15 Shorts / Reels per month", "Subtitles & Motion GFX", "48-hour Turnaround"],
    featured: false,
  },
  {
    name: "The Full Channel",
    price: "$2,999",
    blurb: "Our most popular retainer for serious channels.",
    features: [
      "4 Long Form + 10 Shorts",
      "Thumbnail Design Included",
      "Priority Discord Support",
    ],
    featured: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold">Choose Your Pace</h2>
          <p className="mt-4 text-foreground/60">
            Monthly retainers built for channels that publish consistently. Pause anytime.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {plans.map((plan) =>
            plan.featured ? (
              <div
                key={plan.name}
                className="relative rounded-3xl bg-ink p-8 text-ink-foreground shadow-elegant"
              >
                <div className="absolute -top-4 right-8 rounded-full bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  Popular
                </div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 font-display text-4xl font-extrabold">
                  {plan.price}
                  <span className="text-sm font-normal text-ink-foreground/40">/mo</span>
                </div>
                <p className="mt-3 text-sm text-ink-foreground/60">{plan.blurb}</p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="size-2 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-10 block rounded-xl bg-primary py-3 text-center text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Scale Now
                </Link>
              </div>
            ) : (
              <div
                key={plan.name}
                className="rounded-3xl border border-border bg-background p-8 transition-all hover:border-primary/50"
              >
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 font-display text-4xl font-extrabold">
                  {plan.price}
                  <span className="text-sm font-normal text-muted-foreground">/mo</span>
                </div>
                <p className="mt-3 text-sm text-foreground/60">{plan.blurb}</p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="size-2 shrink-0 rounded-full bg-tertiary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-10 block rounded-xl border border-ink py-3 text-center text-sm font-bold transition-all hover:bg-ink hover:text-ink-foreground"
                >
                  Get Started
                </Link>
              </div>
            ),
          )}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need a custom volume or white-label agency plan?{" "}
          <Link to="/contact" className="font-semibold text-primary hover:underline">
            Talk to us
          </Link>
        </p>
      </div>
    </section>
  );
}
