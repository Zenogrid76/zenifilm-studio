import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Zenifilm | Start a Project",
      },
      {
        name: "description",
        content:
          "Tell Zenifilm about your project, monthly editing needs or request a free one-minute sample edit.",
      },
    ],
  }),

  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Work With Zenifilm
            </span>

            <h1 className="mt-3 max-w-xl font-display text-5xl font-extrabold leading-[1.05] md:text-6xl">
              Let&apos;s make something <span className="text-gradient-brand">worth watching.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-foreground/70">
              Tell us what you&apos;re working on, what kind of editing you need and where you want
              to take your content. We typically respond within one business day.
            </p>

            <div className="mt-10 rounded-3xl border border-border bg-card p-6">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Not ready to commit?
              </span>

              <h2 className="mt-2 text-xl font-bold">Request a free sample edit.</h2>

              <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                Send us your footage and we&apos;ll create a one-minute sample edit at no cost. If
                you like the direction, we can move forward from there.
              </p>
            </div>
          </div>

          {/* Shared form */}
          <ContactForm subject="New Zenifilm Contact Page Inquiry" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
