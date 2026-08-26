import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PricingSection } from "@/components/site/PricingSection";
import { ReadyToBookSection } from "@/components/site/ReadyToBookSection";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Long Form & Short Form Edits | Zenifilm" },
      {
        name: "description",
        content:
          "Browse Zenifilm's video editing portfolio: documentary, vlogs, motion graphics, gaming, tutorials, education and facecam long-form plus YouTube, Instagram, Facebook and TikTok short-form work.",
      },
      { property: "og:title", content: "Portfolio — Long Form & Short Form Edits | Zenifilm" },
      {
        property: "og:description",
        content: "Selected long-form and short-form video edits from the Zenifilm studio.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Portfolio
          </span>
          <h1 className="mt-3 font-display text-5xl font-extrabold">Selected work</h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            The full long-form and short-form galleries are being built next.
          </p>
        </div>
      </section>
      <ReadyToBookSection />
      <PricingSection />
      <SiteFooter />
    </div>
  );
}
