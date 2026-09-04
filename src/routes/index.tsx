import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PricingSection } from "@/components/site/PricingSection";
import { FaqSection } from "@/components/site/FaqSection";
import { ReadyToBookSection } from "@/components/site/ReadyToBookSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { ReelWall } from "@/components/site/ReelWall";
import { VideoLightbox, type VideoProject } from "@/components/site/VideoLightbox";
import showreelCover from "@/assets/showreel-cover.jpg";
import workEducation from "@/assets/work-education.jpg";
import workGaming from "@/assets/work-gaming.jpg";
import workVlog from "@/assets/work-vlog.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zenifilm — Premium Video Editing Agency for Creators & Brands" },
      {
        name: "description",
        content:
          "Zenifilm edits long-form, short-form and motion graphics for high-performance creators and brands. 500+ videos, 20M+ views, on a simple monthly retainer.",
      },
      {
        property: "og:title",
        content: "Zenifilm — Premium Video Editing Agency for Creators & Brands",
      },
      {
        property: "og:description",
        content:
          "Cinematic edits, retention-first short form and motion graphics — delivered on a monthly retainer.",
      },
    ],
  }),
  component: Home,
});

const whyUs = [
  {
    n: "01",
    title: "Retention-first storytelling",
    body: "Every cut is paced against watch-time data, not vibes. Hooks in the first three seconds, no dead air.",
  },
  {
    n: "02",
    title: "Colorist-grade finishing",
    body: "A signature grade, cleaned dialogue and licensed sound design on every single delivery.",
  },
  {
    n: "03",
    title: "One studio, every format",
    body: "Long form, verticals, motion graphics and thumbnails from the same team, so your brand stays consistent.",
  },
];

const services = [
  {
    n: "01",
    title: "Long-form editing",
    body: "Story-driven YouTube cuts, interviews and webinars up to 60 minutes.",
    tone: "text-primary",
  },
  {
    n: "02",
    title: "Short-form & reels",
    body: "Hook-first verticals for YouTube Shorts, Instagram, TikTok and Facebook.",
    tone: "text-tertiary",
  },
  {
    n: "03",
    title: "Motion graphics",
    body: "Titles, lower thirds, kinetic type and animated brand systems.",
    tone: "text-primary",
  },
  {
    n: "04",
    title: "Gaming & facecam",
    body: "High-energy montages, highlight edits and stream-to-short repurposing.",
    tone: "text-tertiary",
  },
  {
    n: "05",
    title: "Documentary & brand films",
    body: "Multi-cam narrative editing with sound design and cinematic grading.",
    tone: "text-primary",
  },
  {
    n: "06",
    title: "Thumbnails & packaging",
    body: "Click-worthy frames, titles and end screens designed alongside the edit.",
    tone: "text-tertiary",
  },
];

const showreelProject: VideoProject = {
  title: "Zenifilm 2024 Showreel",
  description:
    "A two-minute look at the edits, grades and motion work we delivered this year. Long form, short form and motion graphics — all under one roof.",
  tags: ["Showreel", "Long form", "Short form", "Motion GFX"],
  videoUrl: "https://www.youtube.com/watch?v=YE7VzlLtp-4",
};

const works: (VideoProject & { img: string; tag: string; tone: string })[] = [
  {
    img: workEducation,
    tag: "Education",
    tone: "text-tertiary",
    title: "The Future of AI: Explainer Series",
    description:
      "EdTech explainer series blending live footage, motion graphics and clean chapter pacing for an online learning platform.",
    tags: ["Education", "Explainer", "Motion GFX"],
    videoUrl: "https://www.youtube.com/watch?v=eRsGyueVQ1c",
  },
  {
    img: workGaming,
    tag: "Gaming",
    tone: "text-primary",
    title: "Hyper-Fast Montage: Nexus Elite",
    description:
      "High-energy gaming montage with synced kills, facecam reactions and custom sound design for a competitive FPS creator.",
    tags: ["Gaming", "Montage", "Sound design"],
    videoUrl: "https://www.youtube.com/watch?v=GAqNiyog7Zo",
  },
  {
    img: workVlog,
    tag: "Vlog",
    tone: "text-tertiary",
    title: "24 Hours in Tokyo: 4K Cinematic",
    description:
      "Cinematic travel vlog cut to music with color-graded city footage, transitions and platform-native exports.",
    tags: ["Vlog", "Travel", "Color grade"],
    videoUrl: "https://www.youtube.com/watch?v=TLkA0RE67cI",
  },
];

const stats = [
  { value: "500+", label: "Videos delivered", tone: "text-primary" },
  { value: "20M+", label: "Views generated", tone: "text-tertiary" },
  { value: "20+", label: "Recurring clients", tone: "text-primary" },
  { value: "2020", label: "Editing since", tone: "text-tertiary" },
];

function Home() {
  const [activeProject, setActiveProject] = useState<VideoProject | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (project: VideoProject) => {
    setActiveProject(project);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setActiveProject(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Banner */}
      <section className="relative overflow-hidden pb-28 pt-20">
        <div
          className="pointer-events-none absolute inset-x-0 -top-40 h-[640px]"
          style={{ backgroundImage: "var(--gradient-glow)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 md:flex md:items-center">
          <div className="animate-rise md:w-1/2 md:pr-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Post-production studio · Est. 2020
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              We Edit. <br />
              <span className="text-gradient-brand">You Dominate.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-foreground/70">
              Premium video editing for high-performance creators and brands. We turn raw footage
              into cinematic, retention-focused assets — long form, short form and motion.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#showreel"
                className="rounded-full bg-ink px-8 py-4 text-sm font-bold text-ink-foreground transition-all hover:bg-ink/90"
              >
                View Showreel
              </a>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <span className="size-8 rounded-full border-2 border-background bg-primary/20" />
                  <span className="size-8 rounded-full border-2 border-background bg-tertiary/25" />
                  <span className="size-8 rounded-full border-2 border-background bg-primary/40" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Trusted by 20+ top creators
                </span>
              </div>
            </div>
          </div>

          {/* Reels */}
          <div className="relative mt-16 md:mt-0 md:w-1/2">
            <ReelWall />
          </div>

        </div>
      </section>

      {/* Showreel / why choose us */}
      <section id="showreel" className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-4xl font-bold">The Zenifilm Quality</h2>
              <p className="mt-2 text-ink-foreground/60">
                Why premium clients choose our studio over freelancers.
              </p>
            </div>
            <div className="font-display text-5xl font-extrabold text-primary/30">01 / 06</div>
          </div>

          <figure
            className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-3xl border border-ink-foreground/10"
            onClick={() => openLightbox(showreelProject)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(showreelProject);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Play Zenifilm 2024 Showreel"
          >
            <img
              src={showreelCover}
              alt="Zenifilm showreel: cinematic editing suite with color-graded timelines"
              width={1600}
              height={900}
              loading="lazy"
              className="size-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 grid place-items-center">
              <span className="grid size-20 place-items-center rounded-full bg-card shadow-elegant transition-transform group-hover:scale-110">
                <span className="ml-1 size-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-ink" />
              </span>
            </div>
          </figure>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {whyUs.map((item) => (
              <div key={item.n} className="border-t border-ink-foreground/10 pt-6">
                <span className="font-display text-sm font-bold text-primary">{item.n}</span>
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-foreground/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                What we do
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold">Full-stack post, one studio.</h2>
            </div>
            <p className="max-w-sm text-sm text-foreground/60">
              From raw footage to platform-ready exports — you brief once, we handle the rest.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.n}
                className="rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <span className={`font-display text-sm font-bold ${s.tone}`}>{s.n}</span>
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-bold">Recent Projects</h2>
            <Link
              to="/portfolio"
              className="text-sm font-bold uppercase tracking-widest text-primary hover:underline"
            >
              View full portfolio →
            </Link>
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-ink bg-ink px-6 py-2 text-xs font-bold text-ink-foreground">
              All Works
            </span>
            {["Documentary", "Motion GFX", "Gaming", "Facecam"].map((tab) => (
              <Link
                key={tab}
                to="/portfolio"
                className="rounded-full border border-border px-6 py-2 text-xs font-bold transition-all hover:bg-ink hover:text-ink-foreground"
              >
                {tab}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {works.map((w) => (
              <article
                key={w.title}
                className="group block cursor-pointer"
                onClick={() => openLightbox(w)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(w);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Play ${w.title}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all group-hover:shadow-elegant">
                  <img
                    src={w.img}
                    alt={w.title}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />
                  <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="grid size-14 place-items-center rounded-full bg-card shadow-elegant">
                      <span className="ml-1 size-0 border-y-[8px] border-l-[14px] border-y-transparent border-l-ink" />
                    </span>
                  </span>
                </div>
                <div className="mt-4">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest ${w.tone}`}
                  >
                    {w.tag}
                  </span>
                  <h3 className="text-lg font-bold">{w.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About us */}
      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              About Zenifilm
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight">
              A small studio with a very big output.
            </h2>
            <p className="mt-6 text-lg text-foreground/70">
              Since 2020 we have been the behind-the-scenes post team for creators and brands who
              take their content seriously. No account managers, no bloated process — just senior
              editors, a shared drive and a delivery calendar that never slips.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block rounded-full border border-ink px-8 py-3.5 text-sm font-bold transition-all hover:bg-ink hover:text-ink-foreground"
            >
              More about us
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-3xl border border-border bg-card p-7">
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
      <FaqSection />

      {/* Contact */}
      <section id="contact" className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-12 rounded-[2.5rem] bg-accent p-8 md:flex-row md:p-16">
            <div className="md:w-1/2">
              <h2 className="font-display text-4xl font-bold">Ready to elevate your content?</h2>
              <p className="mt-6 text-lg text-foreground/70">
                Send us your channel and goals. You will get a reply within one business day with a
                plan, a timeline and a fixed monthly price.
              </p>
              <p className="mt-6 text-sm font-semibold text-primary">hello@zenifilm.com</p>
            </div>
            <div className="w-full md:w-1/2">
              <form className="grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="rounded-2xl border border-border bg-card px-6 py-4 text-sm outline-none focus:border-primary"
                />
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="rounded-2xl border border-border bg-card px-6 py-4 text-sm outline-none focus:border-primary"
                />
                <textarea
                  rows={4}
                  placeholder="Project details"
                  className="rounded-2xl border border-border bg-card px-6 py-4 text-sm outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-ink py-4 text-sm font-bold text-ink-foreground transition-all hover:bg-ink/90"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
