import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ReadyToBookSection } from "@/components/site/ReadyToBookSection";

import { VideoLightbox, type VideoProject } from "@/components/site/VideoLightbox";

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

type Work = {
  title: string;
  category: string;
  img: string;
  description: string;
  tags: string[];
  videoUrl: string;
};

/* =========================================================
   LONG FORM PROJECTS
========================================================= */

const longFormWorks: Work[] = [
  {
    title: "24 Hours of Daylight & Two Impossible Jobs",
    category: "Vlog / Storytelling",
    img: "/images/thumbnails/long_form/Two Impossible Jobs.jpg",
    description:
      "A long-form Alaskan homestead story following two demanding projects happening in parallel. I structured the edit to balance both storylines, maintain momentum, and give each narrative enough space while handling the full cut, sound design, and color finishing.",
    tags: ["Vlog", "Storytelling", "Long Form", "Sound Design"],
    videoUrl: "https://youtu.be/PD_wOLO7feg",
  },

  {
    title: "Chewed Up — Multicam Cooking Edit",
    category: "Multicam / Tutorial",
    img: "/images/thumbnails/long_form/CU-1.jpg",
    description:
      "A polished multicam cooking segment edited for the Chewed Up show. I selected the strongest camera angles, refined the pacing, and created supporting graphic elements for a clean broadcast-style finish.",
    tags: ["Multicam", "Cooking", "Tutorial", "Graphics"],
    videoUrl: "https://youtu.be/bg7JD2KV06Q",
  },

  {
    title: "How to Build a Website with WordPress",
    category: "Motion Graphics Tutorial",
    img: "/images/thumbnails/long_form/Website with WordPress.jpg",
    description:
      "A fully animated promo intro created for an in-depth WordPress tutorial. Using provided screen recordings, I transformed flat website elements into dynamic 3D-style compositions and built the sequence in After Effects.",
    tags: ["Motion Graphics", "After Effects", "Tutorial", "Screen Recording"],
    videoUrl: "https://youtu.be/P-rYCO6CuuA",
  },

  {
    title: "GAN Academy Promo",
    category: "Brand Promo",
    img: "/images/thumbnails/long_form/Gann Academy.jpg",
    description:
      "A promotional video created entirely from provided footage for GAN Academy. I shaped the final piece through shot selection, pacing, color grading, music, and sound design to create a polished and energetic brand presentation.",
    tags: ["Promo", "Brand Video", "Color Grading", "Sound Design"],
    videoUrl: "https://drive.google.com/file/d/12HFoPEJf8sgp8Hbl7nHUfLxlx4Za9zYq/view?usp=sharing",
  },

  {
    title: "How to Make Money with Copywriting",
    category: "Motion Graphics Tutorial",
    img: "/images/thumbnails/long_form/Copywrite.jpg",
    description:
      "A step-by-step copywriting tutorial enhanced with a motion-driven promo intro and animated screen content. I used After Effects to turn static interface elements into dimensional, engaging visuals without relying on facecam footage.",
    tags: ["Tutorial", "Motion Graphics", "After Effects", "Screen Recording"],
    videoUrl: "https://drive.google.com/file/d/1zS7qAqnm19mdzyXhcRsTFfuWVq9PVTWx/view?usp=sharing",
  },

  {
    title: "Wild Planet Promo",
    category: "Brand Promo",
    img: "/images/thumbnails/long_form/Wild Planet.jpg",
    description:
      "A polished promotional piece created from provided footage, shaped through purposeful shot selection, pacing, color grading, music, and sound design to deliver a strong brand-focused presentation.",
    tags: ["Promo", "Advertisement", "Color Grading", "Sound Design"],
    videoUrl: "https://drive.google.com/file/d/14y4Z2QtZHUnUBpj4c0zEp75ZyYK0zQUB/view?usp=sharing",
  },

  {
    title: "How to Build a Website with Google AI Studio",
    category: "Motion Graphics Tutorial",
    img: "/images/thumbnails/long_form/AIStudio.jpg",
    description:
      "A tutorial showing how to use Google AI Studio to build a website, elevated with a custom motion graphics intro. I used the provided screen recordings to turn flat webpage elements into dynamic 3D-style sequences in After Effects.",
    tags: ["AI", "Tutorial", "Motion Graphics", "Screen Recording"],
    videoUrl: "https://youtu.be/cx5JdktiPeI",
  },

  {
    title: "Chewed Up — Multicam Cooking Edit II",
    category: "Multicam / Tutorial",
    img: "/images/thumbnails/long_form/CU-2.jpg",
    description:
      "Another multicam cooking segment edited for Chewed Up, focused on selecting the strongest camera angles, maintaining natural pacing, and integrating custom graphic elements throughout the episode.",
    tags: ["Multicam", "Cooking", "Tutorial", "Post-Production"],
    videoUrl: "https://youtu.be/bVE4bX4_rAc",
  },

  {
    title: "How Salmon Becomes Red Gold",
    category: "Homestead Vlog",
    img: "/images/thumbnails/long_form/Red Gold.jpg",
    description:
      "A story-driven homestead video following the process of turning fresh salmon into smoked 'red gold.' I handled the full edit, pacing, sound design, color finishing, and visual storytelling from start to finish.",
    tags: ["Vlog", "Food", "Storytelling", "Long Form"],
    videoUrl: "https://youtu.be/vjIP9TxwBlk",
  },

  {
    title: "How to Use TikTok Shop for Dropshipping",
    category: "Facecam / Motion Graphics",
    img: "/images/thumbnails/long_form/Tiktok shop.jpg",
    description:
      "An energetic talking-head tutorial built around branded motion graphics, animated B-roll, and fast-paced visual reinforcement. I handled the edit, pacing, graphics, and overall visual direction while maintaining the established brand style.",
    tags: ["Facecam", "Motion Graphics", "Tutorial", "YouTube"],
    videoUrl: "https://drive.google.com/file/d/1SVKXq8MPltDLe1twovWjYEQgqICtmQTk/view?usp=sharing",
  },

  {
    title: "Anker Soundcore R50i Review",
    category: "Tech Review",
    img: "/images/thumbnails/long_form/Anker r50i.jpg",
    description:
      "A cinematic tech review combining talking-head commentary with detailed product B-roll. I handled the complete edit, including pacing, B-roll sequencing, sound design, and visual presentation.",
    tags: ["Tech Review", "Facecam", "B-Roll", "Sound Design"],
    videoUrl: "https://youtu.be/uvIAeLhNzH4",
  },

  {
    title: "HyperX Cloud Stinger Review",
    category: "Tech Review",
    img: "/images/thumbnails/long_form/Hyperx.jpg",
    description:
      "A creator-led headset review combining facecam commentary, cinematic product B-roll, clean pacing, and detailed sound design to keep the technical content visually engaging.",
    tags: ["Tech Review", "Facecam", "Product B-Roll", "YouTube"],
    videoUrl: "https://youtu.be/_mNfatAqH_k",
  },

  {
    title: "Xbox Series S Review",
    category: "Tech Review / Gaming",
    img: "/images/thumbnails/long_form/Xbox series.jpg",
    description:
      "A personal gaming hardware review combining talking-head commentary with cinematic product B-roll, clean pacing, and sound design for a polished YouTube review format.",
    tags: ["Tech Review", "Gaming", "Facecam", "B-Roll"],
    videoUrl: "https://youtu.be/ggHQ0qvTntw",
  },
];

/* =========================================================
   SHORT FORM PROJECTS
========================================================= */

const shortFormWorks: Work[] = [
  {
    title: "Short 01",
    category: "Short Form",
    img: "/images/thumbnails/short_form/Short 1.jpg",
    description: "",
    tags: ["Short Form"],
    videoUrl:
      "https://drive.google.com/file/d/1OBOGpNfvnwGCy0XUH3lKlhRHojpBQjpD/view?usp=drive_link",
  },

  {
    title: "Short 02",
    category: "Short Form",
    img: "/images/thumbnails/short_form/Short 2.jpg",
    description: "",
    tags: ["Short Form"],
    videoUrl:
      "https://drive.google.com/file/d/1GxSk7qn6Ha-HtzTDfdsQBiQ0FudeUj7Y/view?usp=drive_link",
  },

  {
    title: "Short 03",
    category: "Short Form",
    img: "/images/thumbnails/short_form/Short 3.jpg",
    description: "",
    tags: ["Short Form"],
    videoUrl:
      "https://drive.google.com/file/d/1YsbN8eNtIEE4dPCdf4RRerJKrSUnLb3k/view?usp=drive_link",
  },

  {
    title: "Short 04",
    category: "Short Form",
    img: "/images/thumbnails/short_form/Short 4.jpg",
    description: "",
    tags: ["Short Form"],
    videoUrl:
      "https://drive.google.com/file/d/19Her0g1Ig1MzM6jl2dNwYHdjxkgJgpZC/view?usp=drive_link",
  },

  {
    title: "Short 05",
    category: "Short Form",
    img: "/images/thumbnails/short_form/Short 5.jpg",
    description: "",
    tags: ["Short Form"],
    videoUrl:
      "https://drive.google.com/file/d/1mXb4R2ifsjqb2r8yVzJnmq1pdwGweWuh/view?usp=drive_link",
  },

  {
    title: "Short 06",
    category: "Short Form",
    img: "/images/thumbnails/short_form/Short 6.jpg",
    description: "",
    tags: ["Short Form"],
    videoUrl:
      "https://drive.google.com/file/d/1LdmChMX9mG9kunpu5fhGWH7Xx-R3Y6L9/view?usp=drive_link",
  },

  {
    title: "Short 07",
    category: "Short Form",
    img: "/images/thumbnails/short_form/Short 7.jpg",
    description: "",
    tags: ["Short Form"],
    videoUrl:
      "https://drive.google.com/file/d/1gVJW2_s9QhTukDN_RDEHzlGr6C3KXCP0/view?usp=drive_link",
  },

  {
    title: "Short 08",
    category: "Short Form",
    img: "/images/thumbnails/short_form/Short 8.jpg",
    description: "",
    tags: ["Short Form"],
    videoUrl:
      "https://drive.google.com/file/d/12XevZeN6-FpggLSQoer52gWBMywmRm6w/view?usp=drive_link",
  },

  {
    title: "Short 09",
    category: "Short Form",
    img: "/images/thumbnails/short_form/Short 9.jpg",
    description: "",
    tags: ["Short Form"],
    videoUrl:
      "https://drive.google.com/file/d/1TGz2J4K1hTfMCDf5nuU-bLx6nL6ZONj5/view?usp=drive_link",
  },

  {
    title: "Short 10",
    category: "Short Form",
    img: "/images/thumbnails/short_form/Short 10.jpg",
    description: "",
    tags: ["Short Form"],
    videoUrl:
      "https://drive.google.com/file/d/1edWvHkO6Z1gvq6iao7WQcEaFd5k9CWDw/view?usp=drive_link",
  },

  {
    title: "Short 11",
    category: "Short Form",
    img: "/images/thumbnails/short_form/Short 11.jpg",
    description: "",
    tags: ["Short Form"],
    videoUrl:
      "https://drive.google.com/file/d/1iQcVdpxH-WLhREnN-ThDcHimCJqSzf1N/view?usp=drive_link",
  },

  {
    title: "Short 12",
    category: "Short Form",
    img: "/images/thumbnails/short_form/Short 12.jpg",
    description: "",
    tags: ["Short Form"],
    videoUrl:
      "https://drive.google.com/file/d/1s7zbs38i95aYbdlbADOJfQ0Pr6fAcugM/view?usp=drive_link",
  },
];

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
      onClick={() =>
        onOpen({
          title: work.title,
          description: work.description,
          tags: work.tags,
          videoUrl: work.videoUrl,
          orientation: portrait ? "portrait" : "landscape",
        })
      }
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

  const [visibleShortFormCount, setVisibleShortFormCount] = useState(4);

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

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {longFormWorks.slice(0, visibleLongFormCount).map((work) => (
              <WorkCard key={work.title} work={work} onOpen={setSelectedProject} />
            ))}
          </div>

          {visibleLongFormCount < longFormWorks.length && (
            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleLongFormCount((prev) => prev + 6)}
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

          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {shortFormWorks.slice(0, visibleShortFormCount).map((work) => (
              <WorkCard key={work.title} work={work} portrait onOpen={setSelectedProject} />
            ))}
          </div>

          {visibleShortFormCount < shortFormWorks.length && (
            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleShortFormCount((prev) => prev + 4)}
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
          {/* About copy */}
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
