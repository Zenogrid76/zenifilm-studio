import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ReadyToBookSection } from "@/components/site/ReadyToBookSection";

import { VideoLightbox, type VideoProject } from "@/components/site/VideoLightbox";

import { longFormWorks, shortFormWorks, type Work } from "@/data/portfolioData";

import { trackLoadMore, trackProjectOpened } from "@/analytics/amplitude";

/* =========================================================
   ROUTE
========================================================= */

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      {
        title: "Portfolio | Zenifilm Studio",
      },
      {
        name: "description",
        content:
          "Explore selected long-form, short-form, motion graphics and creator-focused editing work from Zenifilm Studio.",
      },
      {
        property: "og:title",
        content: "Portfolio | Zenifilm Studio",
      },
      {
        property: "og:description",
        content:
          "Selected video editing work across long-form, short-form, creator content and motion graphics.",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
  }),

  component: PortfolioPage,
});

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    value: "500+",
    label: "Videos Delivered",
    tone: "text-primary",
  },
  {
    value: "20M+",
    label: "Views Generated",
    tone: "text-tertiary",
  },
  {
    value: "20+",
    label: "Clients Worked With",
    tone: "text-primary",
  },
  {
    value: "2020",
    label: "Editing Since",
    tone: "text-tertiary",
  },
];

/* =========================================================
   PROJECT CARD
========================================================= */

function WorkCard({
  work,
  portrait = false,
  onOpen,
}: {
  work: Work;
  portrait?: boolean;
  onOpen: (project: VideoProject) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        trackProjectOpened({
          title: work.title,
          category: work.category,
          type: portrait ? "Short Form" : "Long Form",
        });

        onOpen({
          title: work.title,
          description: work.description,
          tags: work.tags,
          videoUrl: work.videoUrl,
          orientation: portrait ? "portrait" : "landscape",
        });
      }}
      className="group block w-full text-left"
    >
      {/* Thumbnail */}
      <div
        className={`relative overflow-hidden rounded-2xl bg-black shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-elegant ${
          portrait ? "aspect-[9/16]" : "aspect-[16/9]"
        }`}
      >
        <img
          src={work.img}
          alt={work.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />

        {/* Play button */}
        <div className="absolute inset-0 z-20 grid place-items-center">
          <div className="grid size-16 place-items-center rounded-xl bg-white/40 shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/55">
            <span className="ml-1 size-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
          </div>
        </div>
      </div>

      {/* Project info — hidden for Shorts */}
      {!portrait && (
        <div className="mt-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            {work.category}
          </span>

          <h3 className="mt-1 text-lg font-bold leading-snug transition-colors group-hover:text-primary">
            {work.title}
          </h3>
        </div>
      )}
    </button>
  );
}

/* =========================================================
   PORTFOLIO PAGE
========================================================= */

function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<VideoProject | null>(null);

  const [visibleLongFormCount, setVisibleLongFormCount] = useState(6);

  const [visibleShortFormCount, setVisibleShortFormCount] = useState(8);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="pb-16 pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Selected Work
          </span>

          <h1 className="mt-4 max-w-4xl font-display text-5xl font-extrabold leading-[1.03] md:text-7xl">
            Editing built to <span className="text-gradient-brand">hold attention.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/65">
            A curated selection of long-form, short-form and motion-driven editing work across
            creators, brands and digital content.
          </p>
        </div>
      </section>

      {/* =====================================================
          LONG FORM
      ====================================================== */}

      <section id="long-form" className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Long Form
              </span>

              <h2 className="mt-3 font-display text-4xl font-bold">Stories With Room to Breathe</h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-foreground/60">
              Vlogs, documentaries, tutorials, gaming, talking-head content, multicam productions
              and motion-driven videos.
            </p>
          </div>

          {/* Long Form Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {longFormWorks.slice(0, visibleLongFormCount).map((work) => (
              <WorkCard key={work.title} work={work} onOpen={setSelectedProject} />
            ))}
          </div>

          {/* Load More */}
          {visibleLongFormCount < longFormWorks.length && (
            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  trackLoadMore({
                    type: "Long Form",
                    visibleCount: visibleLongFormCount,
                  });

                  setVisibleLongFormCount((prev) => Math.min(prev + 6, longFormWorks.length));
                }}
                className="rounded-full border border-ink px-8 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-ink-foreground"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          SHORT FORM
      ====================================================== */}

      <section id="short-form" className="border-y border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-tertiary">
                Short Form
              </span>

              <h2 className="mt-3 font-display text-4xl font-bold">Built for the Scroll</h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-foreground/60">
              Reels, Shorts and vertical content built around hooks, pacing and strong visual
              movement.
            </p>
          </div>

          {/* Short Form Grid */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {shortFormWorks.slice(0, visibleShortFormCount).map((work) => (
              <WorkCard key={work.title} work={work} portrait onOpen={setSelectedProject} />
            ))}
          </div>

          {/* Load More */}
          {visibleShortFormCount < shortFormWorks.length && (
            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  trackLoadMore({
                    type: "Short Form",
                    visibleCount: visibleShortFormCount,
                  });

                  setVisibleShortFormCount((prev) => Math.min(prev + 4, shortFormWorks.length));
                }}
                className="rounded-full border border-ink px-8 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-ink-foreground"
              >
                Load More Shorts
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          ABOUT ZENIFILM
      ====================================================== */}

      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          {/* About Copy */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              About Zenifilm
            </span>

            <h2 className="mt-3 font-display text-4xl font-bold leading-tight">
              The post team behind the content you watch.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              Founded by an editor working professionally since 2020, with 500+ videos delivered
              across creators, brands and agencies. Zenifilm brings that experience into a focused
              post-production studio built around strong storytelling, reliable delivery and
              consistent quality.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-block rounded-full border border-ink px-8 py-3.5 text-sm font-bold transition-all hover:bg-ink hover:text-ink-foreground"
            >
              More About Us
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className={`font-display text-4xl font-extrabold md:text-5xl ${stat.tone}`}>
                  {stat.value}
                </div>

                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FREE SAMPLE EDIT CTA
      ====================================================== */}

      <ReadyToBookSection />

      <SiteFooter />

      {/* =====================================================
          VIDEO LIGHTBOX
      ====================================================== */}

      <VideoLightbox
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
