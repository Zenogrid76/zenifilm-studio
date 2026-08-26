import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PricingSection } from "@/components/site/PricingSection";
import { ReadyToBookSection } from "@/components/site/ReadyToBookSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Zenifilm — Editing Since 2020, 500+ Videos Delivered" },
      {
        name: "description",
        content:
          "Zenifilm has been editing since 2020: 500+ videos delivered, 20+ recurring clients and 20M+ views generated for creators and brands.",
      },
      { property: "og:title", content: "About Zenifilm — Editing Since 2020" },
      {
        property: "og:description",
        content: "500+ videos, 20+ clients, 20M+ views. Meet the studio behind the edits.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "2020", label: "Working since" },
  { value: "500+", label: "Videos delivered" },
  { value: "20+", label: "Clients" },
  { value: "20M+", label: "Views generated" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            About us
          </span>
          <h1 className="mt-3 max-w-2xl font-display text-5xl font-extrabold leading-[1.05]">
            A small studio with a very big output.
          </h1>
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className="rounded-3xl border border-border bg-card p-7">
                <div
                  className={`font-display text-4xl font-extrabold ${
                    i % 2 === 0 ? "text-primary" : "text-tertiary"
                  }`}
                >
                  {s.value}
                </div>
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
