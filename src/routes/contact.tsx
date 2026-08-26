import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Zenifilm — Book a Free Strategy Call" },
      {
        name: "description",
        content:
          "Tell Zenifilm about your channel or brand and get a reply within one business day with a plan, timeline and fixed monthly price.",
      },
      { property: "og:title", content: "Contact Zenifilm — Book a Free Strategy Call" },
      {
        property: "og:description",
        content: "Send your project details and we'll reply within one business day.",
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
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Contact
            </span>
            <h1 className="mt-3 max-w-lg font-display text-5xl font-extrabold leading-[1.05]">
              Let's make something worth watching.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-foreground/70">
              Share your channel, footage volume and goals. You'll get a reply within one business
              day.
            </p>
            <p className="mt-6 text-sm font-semibold text-primary">hello@zenifilm.com</p>
          </div>
          <form
            className="grid grid-cols-1 gap-4 rounded-[2rem] border border-border bg-card p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              required
              placeholder="Name"
              className="rounded-2xl border border-border bg-background px-6 py-4 text-sm outline-none focus:border-primary"
            />
            <input
              type="email"
              required
              placeholder="Email address"
              className="rounded-2xl border border-border bg-background px-6 py-4 text-sm outline-none focus:border-primary"
            />
            <textarea
              rows={5}
              placeholder="Project details"
              className="rounded-2xl border border-border bg-background px-6 py-4 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="rounded-2xl bg-ink py-4 text-sm font-bold text-ink-foreground transition-all hover:bg-ink/90"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
