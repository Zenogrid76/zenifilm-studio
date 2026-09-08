import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PricingSection } from "@/components/site/PricingSection";
import { ReadyToBookSection } from "@/components/site/ReadyToBookSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Zenifilm | Founder-Led Post-Production Studio",
      },
      {
        name: "description",
        content:
          "Zenifilm is a founder-led post-production studio built on professional editing experience since 2020, with 500+ videos delivered and 20M+ views across selected work.",
      },
      {
        property: "og:title",
        content: "About Zenifilm | Post-Production Built Around You",
      },
      {
        property: "og:description",
        content:
          "A focused post-production studio built on years of professional editing experience across creators, brands and agencies.",
      },
    ],
  }),

  component: AboutPage,
});

const stats = [
  {
    value: "500+",
    label: "Videos delivered",
    tone: "text-primary",
  },
  {
    value: "20M+",
    label: "Views generated",
    tone: "text-tertiary",
  },
  {
    value: "20+",
    label: "Clients worked with",
    tone: "text-primary",
  },
  {
    value: "2020",
    label: "Editing since",
    tone: "text-tertiary",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Intro */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            About Zenifilm
          </span>

          <h1 className="mt-3 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] md:text-6xl">
            Built on experience.
            <span className="text-gradient-brand"> Designed to scale.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Zenifilm is a founder-led post-production studio built around one simple idea: great
            editing should feel consistent, reliable and tailored to the way you create.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/60">
            Our foundation comes from years of professional editing across creators, brands and
            agency productions. Today, we bring that experience into a focused studio built for
            long-form content, short-form video, motion graphics and ongoing post-production.
          </p>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className={`font-display text-4xl font-extrabold ${s.tone}`}>{s.value}</div>

                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <ReadyToBookSection />

      <PricingSection />

      <SiteFooter />
    </div>
  );
}
