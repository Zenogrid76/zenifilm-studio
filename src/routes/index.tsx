import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PricingSection } from "@/components/site/PricingSection";
import { FaqSection } from "@/components/site/FaqSection";
import { ReadyToBookSection } from "@/components/site/ReadyToBookSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { ReelWall } from "@/components/site/ReelWall";
import showreelCover from "@/assets/showreel-cover.jpg";
import workEducation from "@/assets/work-education.jpg";
import workGaming from "@/assets/work-gaming.jpg";
import workVlog from "@/assets/work-vlog.jpg";
import { useState } from "react";
import { VideoLightbox, type VideoProject } from "@/components/site/VideoLightbox";
import { ContactForm } from "@/components/site/ContactForm";

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
    body: "Every cut is built around pacing, clarity and keeping viewers engaged from the opening hook to the final frame.",
  },
  {
    n: "02",
    title: "Detail-driven post-production",
    body: "From clean dialogue and intentional sound design to polished visuals and seamless pacing, every detail is refined before delivery.",
  },
  {
    n: "03",
    title: "One studio, every format",
    body: "Long form, vertical content and motion graphics from the same team, so your visual style stays consistent across every platform.",
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
    title: "Podcast & multicam editing",
    body: "Clean multicam cuts, polished pacing, branded graphics and social-ready podcast content.",
    tone: "text-tertiary",
  },
];

const works = [
  {
    img: "/images/thumbnails/long_form/Two Impossible Jobs.jpg",
    tag: "Vlog / Storytelling",
    tone: "text-tertiary",
    title: "24 Hours of Daylight & Two Impossible Jobs",

    description:
      "A long-form Alaskan homestead story built around two parallel storylines, with a focus on pacing, sound design, color finishing and engaging visual storytelling.",

    tags: ["Vlog", "Storytelling", "Long Form", "Sound Design"],

    videoUrl: "https://youtu.be/PD_wOLO7feg",
  },

  {
    img: "/images/thumbnails/long_form/CU-1.jpg",
    tag: "Multicam",
    tone: "text-primary",
    title: "Chewed Up — Multicam Cooking Edit",

    description:
      "A polished multicam cooking segment featuring carefully selected camera angles, refined pacing and custom supporting graphics.",

    tags: ["Multicam", "Cooking", "Tutorial", "Graphics"],

    videoUrl: "https://youtu.be/bg7JD2KV06Q",
  },

  {
    img: "/images/thumbnails/long_form/Website with WordPress.jpg",
    tag: "Motion Graphics",
    tone: "text-tertiary",
    title: "How to Build a Website with WordPress",

    description:
      "A fully animated promo intro for an in-depth WordPress tutorial, transforming provided screen recordings into dynamic 3D-style compositions in After Effects.",

    tags: ["Motion Graphics", "After Effects", "Tutorial"],

    videoUrl: "https://youtu.be/P-rYCO6CuuA",
  },

  {
    img: "/images/thumbnails/long_form/Gann Academy.jpg",
    tag: "Brand Promo",
    tone: "text-primary",
    title: "GAN Academy Promo",

    description:
      "A promotional video built from provided footage using purposeful shot selection, pacing, color grading, music and detailed sound design.",

    tags: ["Promo", "Brand Video", "Color Grading", "Sound Design"],

    videoUrl: "https://drive.google.com/file/d/12HFoPEJf8sgp8Hbl7nHUfLxlx4Za9zYq/view?usp=sharing",
  },

  {
    img: "/images/thumbnails/long_form/Copywrite.jpg",
    tag: "Motion Graphics",
    tone: "text-tertiary",
    title: "How to Make Money with Copywriting",

    description:
      "A step-by-step tutorial enhanced with a motion-driven intro and animated screen content, turning static interface elements into engaging visual sequences.",

    tags: ["Tutorial", "Motion Graphics", "After Effects"],

    videoUrl: "https://drive.google.com/file/d/1zS7qAqnm19mdzyXhcRsTFfuWVq9PVTWx/view?usp=sharing",
  },

  {
    img: "/images/thumbnails/long_form/Wild Planet.jpg",
    tag: "Brand Promo",
    tone: "text-primary",
    title: "Wild Planet Promo",

    description:
      "A polished commercial-style edit shaped through strong shot selection, color grading, pacing, music and sound design.",

    tags: ["Promo", "Advertisement", "Color Grading", "Sound Design"],

    videoUrl: "https://drive.google.com/file/d/14y4Z2QtZHUnUBpj4c0zEp75ZyYK0zQUB/view?usp=sharing",
  },
];

const stats = [
  { value: "500+", label: "Videos delivered", tone: "text-primary" },
  { value: "20M+", label: "Views generated", tone: "text-tertiary" },
  { value: "20+", label: "Clients worked with", tone: "text-primary" },
  { value: "2020", label: "Editing since", tone: "text-tertiary" },
];

function Home() {
  const [selectedProject, setSelectedProject] = useState<VideoProject | null>(null);
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  async function handleHomeContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setContactStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setContactStatus("success");
        form.reset();
      } else {
        setContactStatus("error");
      }
    } catch {
      setContactStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Banner */}
      <section className="relative overflow-hidden pb-28 pt-20 ">
        <div
          className="pointer-events-none absolute inset-x-0 -top-40 h-640px "
          style={{ backgroundImage: "var(--gradient-glow)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 md:flex md:items-center">
          <div className="animate-rise md:w-1/2 md:pr-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Post-production studio
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              Professional Video Editing, <br />
              <span className="text-gradient-brand">Built Around You.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-foreground/70">
              High-quality post-production for creators and brands. <br /> From long-form
              storytelling to short-form content and motion graphics.
            </p>
            <div className="mt-0 flex flex-wrap items-center gap-6">
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#showreel"
                  className="rounded-full bg-ink px-8 py-4 text-sm font-bold text-ink-foreground transition-all hover:scale-[1.03] hover:bg-ink/90"
                >
                  View Showreel
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-ink px-8 py-4 text-sm font-bold text-ink transition-all hover:bg-ink hover:text-ink-foreground"
                >
                  Contact Us
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>
                  <span className="text-foreground">5+ Years</span> Experience
                </span>

                <span className="hidden size-1 rounded-full bg-primary sm:block" />

                <span>
                  <span className="text-foreground">500+</span> Videos Edited
                </span>

                <span className="hidden size-1 rounded-full bg-primary sm:block" />

                <span>
                  <span className="text-foreground">20M+</span> Views
                </span>
              </div>
            </div>
          </div>

          {/* Reels */}
          <div className="relative mt-16 md:mt-0 md:w-1/2 ">
            <ReelWall />
          </div>
        </div>
      </section>

      {/* Showreel / why choose us */}
      <section id="showreel" className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Founder Showreel
              </span>

              <h2 className="mt-3 font-display text-4xl font-bold">The Zenifilm Quality</h2>

              <p className="mt-3 max-w-2xl text-ink-foreground/60">
                Founder Showreel — a curated look at the editing standard behind Zenifilm.
              </p>
            </div>
          </div>

          {/* Autoplay Showreel */}
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/d9pPr6r-apM?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1"
              title="Mahmud Reza Mahim — Video Editing Showreel"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </div>

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
          {/* Header */}
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Selected Work
              </span>

              <h2 className="mt-3 font-display text-4xl font-bold">Recent Projects</h2>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/60">
                A selection of long-form, branded and creator-focused edits.
              </p>
            </div>

            <Link
              to="/portfolio"
              className="text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:text-primary/70"
            >
              View Full Portfolio →
            </Link>
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {works.map((w) => (
              <button
                key={w.title}
                type="button"
                onClick={() =>
                  setSelectedProject({
                    title: w.title,
                    description: w.description,
                    tags: w.tags,
                    videoUrl: w.videoUrl,
                  })
                }
                className="group block w-full text-left"
              >
                {/* Preview */}
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-elegant">
                  <img
                    src={w.img}
                    alt={w.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />

                  {/* Play button */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid size-16 place-items-center rounded-xl bg-white/35 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/50">
                      <span className="ml-1 size-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div className="mt-5">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${w.tone}`}>
                    {w.tag}
                  </span>

                  <h3 className="mt-1 text-lg font-bold transition-colors group-hover:text-primary">
                    {w.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile / bottom CTA */}
          <div className="mt-12 text-center md:hidden">
            <Link
              to="/portfolio"
              className="inline-flex rounded-full border border-ink px-7 py-3 text-xs font-bold uppercase tracking-widest transition-all hover:bg-ink hover:text-ink-foreground"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>

        {/* Video Lightbox */}
        <VideoLightbox
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
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
          <div className="flex flex-col items-start gap-12 rounded-[2.5rem] bg-accent p-8 md:flex-row md:p-16">
            {/* Left */}
            <div className="md:w-1/2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Start a Project
              </span>

              <h2 className="mt-3 font-display text-4xl font-bold">Have something in mind?</h2>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70">
                Tell us what you&apos;re working on and what kind of editing support you need. We
                typically respond within one business day.
              </p>

              <div className="mt-8">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Not ready to commit?
                </span>

                <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/60">
                  Request a complimentary one-minute sample edit and see what we can do with your
                  footage first.
                </p>
              </div>
            </div>

            {/* Shared form */}
            <div className="w-full md:w-1/2">
              <ContactForm subject="New Zenifilm Homepage Inquiry" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
