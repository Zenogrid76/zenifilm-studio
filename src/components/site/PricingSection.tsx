import { Link } from "@tanstack/react-router";

const singleEditPlans = [
  {
    name: "Essential Edit",
    price: "$150+",
    blurb: "For clean, straightforward edits that need polish without heavy post-production.",
    features: [
      "Facecam & talking-head videos",
      "Screen recordings & tutorials",
      "Clean cuts & pacing",
      "Basic text & lower thirds",
      "Audio cleanup",
      "2 revision rounds",
    ],
  },
  {
    name: "Enhanced Edit",
    price: "$250+",
    blurb: "For videos that need stronger storytelling, visuals and a more polished finish.",
    features: [
      "YouTube videos & vlogs",
      "Multicam & interviews",
      "B-roll integration",
      "Music & sound design",
      "Branded graphics",
      "Color & audio finishing",
    ],
  },
  {
    name: "Advanced Edit",
    price: "$350+",
    blurb: "For motion-heavy, cinematic or complex productions that demand more creative work.",
    features: [
      "Motion graphic promos",
      "Documentary-style editing",
      "Advanced visual storytelling",
      "Custom motion graphics",
      "Detailed sound design",
      "Advanced color finishing",
    ],
  },
];

const monthlyPlans = [
  {
    name: "Creator Essential",
    price: "$1,500",
    blurb: "Consistent monthly post-production for growing creators.",
    features: [
      "4–6 long-form videos / month",
      "12–15 Shorts / Reels",
      "Long-form + vertical editing",
      "Motion graphics & branded assets",
      "Color & audio finishing",
      "Priority revisions",
      "Dedicated editing workflow",
    ],
    featured: false,
  },
  {
    name: "Creator Unlimited",
    price: "$2,500",
    blurb: "High-output editing for creators who don't want post-production slowing them down.",
    features: [
      "Unlimited video editing requests",
      "Unlimited revisions",
      "Long-form + Shorts / Reels",
      "48-hour standard delivery",
      "~24-hour average turnaround",
      "Priority editing queue",
      "Motion graphics included",
      "Dedicated editor & workflow",
    ],
    featured: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Pricing</span>

          <h2 className="mt-4 font-display text-4xl font-bold">Built Around Your Workflow</h2>

          <p className="mt-4 text-foreground/60">
            Choose a one-off edit or a monthly partnership built for consistent content production.
          </p>
        </div>

        {/* SINGLE PROJECTS */}
        <div>
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold">Project-Based Editing</h3>

            <p className="mt-2 text-sm text-foreground/60">
              Flexible pricing based on the complexity and production needs of each video.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {singleEditPlans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-3xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
              >
                <h4 className="text-xl font-bold">{plan.name}</h4>

                <div className="mt-5 font-display text-4xl font-extrabold">{plan.price}</div>

                <p className="mt-4 min-h-[60px] text-sm leading-relaxed text-foreground/60">
                  {plan.blurb}
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-10 block rounded-xl border border-ink py-3 text-center text-sm font-bold transition-all hover:bg-ink hover:text-ink-foreground"
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* MONTHLY PLANS */}
        <div className="mt-24">
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold">Monthly Creator Plans</h3>

            <p className="mt-2 text-sm text-foreground/60">
              Ongoing editing support for creators publishing consistently.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {monthlyPlans.map((plan) =>
              plan.featured ? (
                <div
                  key={plan.name}
                  className="relative rounded-3xl bg-ink p-8 text-ink-foreground shadow-elegant"
                >
                  <div className="absolute -top-4 right-8 animate-badge-float rounded-full bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    Best Value
                  </div>

                  <h4 className="text-xl font-bold">{plan.name}</h4>

                  <div className="mt-5 font-display text-4xl font-extrabold">
                    {plan.price}
                    <span className="ml-1 text-sm font-normal text-ink-foreground/40">/mo</span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-foreground/60">
                    {plan.blurb}
                  </p>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="mt-10 block rounded-xl bg-primary py-3 text-center text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    Get Started
                  </Link>
                </div>
              ) : (
                <div
                  key={plan.name}
                  className="rounded-3xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
                >
                  <h4 className="text-xl font-bold">{plan.name}</h4>

                  <div className="mt-5 font-display text-4xl font-extrabold">
                    {plan.price}
                    <span className="ml-1 text-sm font-normal text-muted-foreground">/mo</span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-foreground/60">{plan.blurb}</p>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 size-2 shrink-0 rounded-full bg-tertiary" />
                        {feature}
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
        </div>

        {/* Footer note */}
        <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          Every project is different. Final pricing may vary based on footage length, complexity,
          motion graphics and turnaround requirements. Complex VFX or large-scale productions are
          quoted separately.
        </p>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Not sure which option fits?{" "}
          <Link to="/contact" className="font-semibold text-primary hover:underline">
            Tell us about your project
          </Link>
        </p>
      </div>
    </section>
  );
}
