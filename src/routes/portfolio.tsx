import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PricingSection } from "@/components/site/PricingSection";
import { FaqSection } from "@/components/site/FaqSection";
import { ReadyToBookSection } from "@/components/site/ReadyToBookSection";
import { VideoLightbox, type VideoProject } from "@/components/site/VideoLightbox";
import workEducation from "@/assets/work-education.jpg";
import workGaming from "@/assets/work-gaming.jpg";
import workVlog from "@/assets/work-vlog.jpg";
import workMotion from "@/assets/work-motion.jpg";
import workDocumentary from "@/assets/work-documentary.jpg";
import workTutorial from "@/assets/work-tutorial.jpg";
import reelShort from "@/assets/reel-short.jpg";
import reelVlog from "@/assets/reel-vlog.jpg";
import reelDoc from "@/assets/reel-doc.jpg";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

type Work = VideoProject & {
  client: string;
  img: string;
  tone: string;
  meta: string;
};

const demoVideos = [
  "https://www.youtube.com/watch?v=YE7VzlLtp-4",
  "https://www.youtube.com/watch?v=eRsGyueVQ1c",
  "https://www.youtube.com/watch?v=GAqNiyog7Zo",
  "https://www.youtube.com/watch?v=TLkA0RE67cI",
  "https://vimeo.com/824804225",
];

let videoIndex = 0;
const nextVideo = () => demoVideos[videoIndex++ % demoVideos.length]!;

const longForm: Record<string, Work[]> = {
  Documentary: [
    {
      title: "Cold Streets, Warm Hands",
      client: "Independent film",
      img: workDocumentary,
      tone: "text-primary",
      meta: "24 min • Documentary",
      description:
        "A cinematic documentary edit combining interviews, observational footage and a restrained score. Pacing follows emotional beats rather than exposition.",
      tags: ["Documentary", "Long form", "Color grade"],
      videoUrl: nextVideo(),
    },
    {
      title: "The Last Workshop",
      client: "Craft brand doc",
      img: workVlog,
      tone: "text-tertiary",
      meta: "18 min • Documentary",
      description:
        "Brand documentary following a master craftsperson from raw material to finished product. Built for web and theatrical pitch decks.",
      tags: ["Brand doc", "Interviews", "Sound design"],
      videoUrl: nextVideo(),
    },
    {
      title: "Founders at 4AM",
      client: "SaaS brand film",
      img: workTutorial,
      tone: "text-primary",
      meta: "12 min • Brand doc",
      description:
        "Founder-led narrative shot across three cities, edited into a single 12-minute brand film for a B2B SaaS launch campaign.",
      tags: ["Brand film", "SaaS", "Launch"],
      videoUrl: nextVideo(),
    },
  ],
  Vlogs: [
    {
      title: "Tokyo in 72 Hours",
      client: "Travel creator, 1.2M subs",
      img: workVlog,
      tone: "text-primary",
      meta: "16 min • Vlog",
      description:
        "Fast, rhythm-led travel vlog cut to music. We handled color, sound design and export in five platform formats.",
      tags: ["Vlog", "Travel", "Music sync"],
      videoUrl: nextVideo(),
    },
    {
      title: "A Week Off Grid",
      client: "Lifestyle channel",
      img: workDocumentary,
      tone: "text-tertiary",
      meta: "21 min • Vlog",
      description:
        "Lifestyle vlog with intentional breathing room. The edit respects silence and landscape while keeping retention high.",
      tags: ["Lifestyle", "Vlog", "Retention edit"],
      videoUrl: nextVideo(),
    },
    {
      title: "Studio Move-In Day",
      client: "Creator studio",
      img: workEducation,
      tone: "text-primary",
      meta: "14 min • Vlog",
      description:
        "Behind-the-scenes creator studio build. Hooked in the first five seconds and held watch time through the build progress.",
      tags: ["BTS", "Vlog", "Creator"],
      videoUrl: nextVideo(),
    },
  ],
  "Motion GFX": [
    {
      title: "Product Launch Titles",
      client: "Hardware startup",
      img: workMotion,
      tone: "text-tertiary",
      meta: "90 sec • Motion GFX",
      description:
        "High-impact motion graphics package for a hardware launch: titles, lower thirds, transitions and social cutdowns.",
      tags: ["Motion GFX", "Titles", "Launch"],
      videoUrl: nextVideo(),
    },
    {
      title: "Data Story Explainer",
      client: "Fintech brand",
      img: workTutorial,
      tone: "text-primary",
      meta: "3 min • Animated explainer",
      description:
        "Animated fintech explainer turning complex data into a clear narrative with kinetic typography and icon animation.",
      tags: ["Explainer", "Motion GFX", "Fintech"],
      videoUrl: nextVideo(),
    },
    {
      title: "Channel Rebrand Package",
      client: "Tech reviewer",
      img: workGaming,
      tone: "text-tertiary",
      meta: "Intro + lower thirds",
      description:
        "Complete YouTube rebrand including intro, end screen, lower thirds and thumbnail templates.",
      tags: ["Rebrand", "YouTube", "Motion GFX"],
      videoUrl: nextVideo(),
    },
  ],
  Gaming: [
    {
      title: "Ranked Grind: Season Finale",
      client: "FPS creator, 800K subs",
      img: workGaming,
      tone: "text-primary",
      meta: "22 min • Gaming",
      description:
        "High-energy gaming season finale with multi-cam facecam, gameplay sync and custom sound effects.",
      tags: ["Gaming", "Facecam", "Season finale"],
      videoUrl: nextVideo(),
    },
    {
      title: "Boss Rush Breakdown",
      client: "Gaming channel",
      img: workMotion,
      tone: "text-tertiary",
      meta: "17 min • Gaming",
      description:
        "Analytical boss-fight breakdown with clean pacing, on-screen data and commentary-friendly gaps.",
      tags: ["Gaming", "Commentary", "Breakdown"],
      videoUrl: nextVideo(),
    },
    {
      title: "Full Playthrough Recap",
      client: "Let's-play channel",
      img: workVlog,
      tone: "text-primary",
      meta: "28 min • Gaming",
      description:
        "Long-form let's-play recap edited for both narrative flow and binge-watch retention.",
      tags: ["Gaming", "Long form", "Recap"],
      videoUrl: nextVideo(),
    },
  ],
  Tutorials: [
    {
      title: "Editing Like a Studio",
      client: "Post-production course",
      img: workTutorial,
      tone: "text-primary",
      meta: "26 min • Tutorial",
      description:
        "Post-production course module edited from live workshop footage with graphics, chapter markers and B-roll.",
      tags: ["Tutorial", "Course", "Education"],
      videoUrl: nextVideo(),
    },
    {
      title: "Lighting for Creators",
      client: "Gear channel",
      img: workEducation,
      tone: "text-tertiary",
      meta: "13 min • Tutorial",
      description:
        "Gear tutorial with tight pacing, side-by-side comparisons and clear on-screen callouts.",
      tags: ["Tutorial", "Gear", "Lighting"],
      videoUrl: nextVideo(),
    },
    {
      title: "Workflow Deep Dive",
      client: "Software brand",
      img: workMotion,
      tone: "text-primary",
      meta: "19 min • Tutorial",
      description:
        "Software workflow deep dive with screen capture, zoom callouts and motion-enhanced UI highlights.",
      tags: ["Tutorial", "Screen capture", "Workflow"],
      videoUrl: nextVideo(),
    },
  ],
  Education: [
    {
      title: "Physics, Visualised",
      client: "EdTech platform",
      img: workEducation,
      tone: "text-tertiary",
      meta: "15 min • Education",
      description:
        "EdTech lesson using animation, real-world footage and on-screen equations to explain physics concepts.",
      tags: ["Education", "Explainer", "Animation"],
      videoUrl: nextVideo(),
    },
    {
      title: "History in Motion",
      client: "Education channel",
      img: workDocumentary,
      tone: "text-primary",
      meta: "23 min • Education",
      description:
        "History documentary edit blending archival footage, narration and animated maps for an education channel.",
      tags: ["Education", "Documentary", "Archival"],
      videoUrl: nextVideo(),
    },
    {
      title: "Course Module Series",
      client: "Online academy",
      img: workTutorial,
      tone: "text-tertiary",
      meta: "12 × lessons",
      description:
        "Twelve-lesson online academy series with consistent intros, lower thirds and quiz pacing.",
      tags: ["Education", "Course", "Series"],
      videoUrl: nextVideo(),
    },
  ],
  Facecam: [
    {
      title: "Podcast Multicam Cut",
      client: "Business podcast",
      img: workTutorial,
      tone: "text-primary",
      meta: "48 min • Multicam",
      description:
        "Four-camera podcast edit with live switching, lower thirds and sponsor-read bumpers.",
      tags: ["Facecam", "Podcast", "Multicam"],
      videoUrl: nextVideo(),
    },
    {
      title: "Weekly Commentary",
      client: "Commentary channel",
      img: workVlog,
      tone: "text-tertiary",
      meta: "17 min • Facecam",
      description:
        "Commentary channel episode with tight cuts, B-roll inserts and audience-retention pacing.",
      tags: ["Facecam", "Commentary", "Weekly"],
      videoUrl: nextVideo(),
    },
    {
      title: "Interview Series Ep. 04",
      client: "Creator interviews",
      img: workEducation,
      tone: "text-primary",
      meta: "34 min • Facecam",
      description:
        "Long-form interview series with two-camera cut, title cards and chapter dividers.",
      tags: ["Facecam", "Interview", "Series"],
      videoUrl: nextVideo(),
    },
  ],
};

const shortForm: Record<string, Work[]> = {
  YouTube: [
    {
      title: "Hook-First Shorts Pack",
      client: "Tech reviewer",
      img: reelShort,
      tone: "text-primary",
      meta: "45 sec • YT Shorts",
      description:
        "Batch of retention-optimized YouTube Shorts cut from longer videos with bold hooks and captions.",
      tags: ["YouTube Shorts", "Repurpose", "Hooks"],
      videoUrl: nextVideo(),
    },
    {
      title: "Long-Form Repurpose",
      client: "Business channel",
      img: reelVlog,
      tone: "text-tertiary",
      meta: "6 clips from 1 video",
      description:
        "Six Shorts extracted from one long-form video, each with a unique angle and thumbnail moment.",
      tags: ["YouTube Shorts", "Repurpose", "Batch"],
      videoUrl: nextVideo(),
    },
    {
      title: "Retention Test Series",
      client: "Fitness creator",
      img: reelDoc,
      tone: "text-primary",
      meta: "30 sec • YT Shorts",
      description:
        "Fitness Shorts series A/B tested for hook style, pacing and caption placement.",
      tags: ["YouTube Shorts", "Fitness", "A/B test"],
      videoUrl: nextVideo(),
    },
    {
      title: "Product Teaser",
      client: "DTC brand",
      img: reelShort,
      tone: "text-tertiary",
      meta: "22 sec • YT Shorts",
      description:
        "22-second product teaser with fast cuts, type and a clear end-frame CTA.",
      tags: ["YouTube Shorts", "Product", "Teaser"],
      videoUrl: nextVideo(),
    },
  ],
  Instagram: [
    {
      title: "Reels Growth Sprint",
      client: "Coach, 300K followers",
      img: reelVlog,
      tone: "text-primary",
      meta: "30 sec • Reels",
      description:
        "30-day Reels sprint for a coach, designed for shares, saves and profile growth.",
      tags: ["Instagram", "Reels", "Growth"],
      videoUrl: nextVideo(),
    },
    {
      title: "Founder Story Reel",
      client: "Skincare brand",
      img: reelShort,
      tone: "text-tertiary",
      meta: "38 sec • Reels",
      description:
        "Founder narrative Reel with emotional hook and polished brand captions.",
      tags: ["Instagram", "Reels", "Brand story"],
      videoUrl: nextVideo(),
    },
    {
      title: "Carousel-to-Reel Set",
      client: "Design studio",
      img: reelDoc,
      tone: "text-primary",
      meta: "5 × Reels",
      description:
        "Design studio Reels repurposed from carousel posts, keeping visual identity intact.",
      tags: ["Instagram", "Reels", "Repurpose"],
      videoUrl: nextVideo(),
    },
    {
      title: "Launch Week Reels",
      client: "App startup",
      img: reelVlog,
      tone: "text-tertiary",
      meta: "28 sec • Reels",
      description:
        "App launch Reels covering feature drops, behind-the-scenes and user reactions.",
      tags: ["Instagram", "Reels", "Launch"],
      videoUrl: nextVideo(),
    },
  ],
  Facebook: [
    {
      title: "Captioned Value Clips",
      client: "Local services brand",
      img: reelDoc,
      tone: "text-primary",
      meta: "40 sec • FB Reels",
      description:
        "Value-driven clips with burned-in captions for a local services brand page.",
      tags: ["Facebook", "Captions", "Value clips"],
      videoUrl: nextVideo(),
    },
    {
      title: "Testimonial Cutdowns",
      client: "Agency client",
      img: reelShort,
      tone: "text-tertiary",
      meta: "35 sec • FB",
      description:
        "Customer testimonial cutdowns edited for trust and quick social proof.",
      tags: ["Facebook", "Testimonial", "Social proof"],
      videoUrl: nextVideo(),
    },
    {
      title: "Ad Variant Batch",
      client: "E-commerce brand",
      img: reelVlog,
      tone: "text-primary",
      meta: "4 × ad cuts",
      description:
        "Four ad variants for e-commerce, each with a different hook and call to action.",
      tags: ["Facebook", "Ads", "E-commerce"],
      videoUrl: nextVideo(),
    },
    {
      title: "Event Highlight Reel",
      client: "Community brand",
      img: reelDoc,
      tone: "text-tertiary",
      meta: "50 sec • FB",
      description:
        "Community event highlight Reel combining crowd shots, speakers and motion titles.",
      tags: ["Facebook", "Event", "Highlight"],
      videoUrl: nextVideo(),
    },
  ],
  TikTok: [
    {
      title: "Trend-Native Series",
      client: "Music creator",
      img: reelShort,
      tone: "text-primary",
      meta: "18 sec • TikTok",
      description:
        "Music creator TikToks edited trend-native while preserving artist brand.",
      tags: ["TikTok", "Trend", "Music"],
      videoUrl: nextVideo(),
    },
    {
      title: "Faceless Story Cuts",
      client: "Finance page",
      img: reelDoc,
      tone: "text-tertiary",
      meta: "42 sec • TikTok",
      description:
        "Faceless finance page videos with voiceover, stock footage and kinetic captions.",
      tags: ["TikTok", "Faceless", "Finance"],
      videoUrl: nextVideo(),
    },
    {
      title: "POV Skit Edit",
      client: "Comedy creator",
      img: reelVlog,
      tone: "text-primary",
      meta: "26 sec • TikTok",
      description:
        "Comedy POV skit with tight timing, reaction inserts and sound design.",
      tags: ["TikTok", "POV", "Comedy"],
      videoUrl: nextVideo(),
    },
    {
      title: "UGC Ad Pack",
      client: "Supplement brand",
      img: reelShort,
      tone: "text-tertiary",
      meta: "6 × UGC ads",
      description:
        "Six UGC-style ad creatives for a supplement brand, each with a different hook.",
      tags: ["TikTok", "UGC", "Ads"],
      videoUrl: nextVideo(),
    },
  ],
};

const stats = [
  { value: "2020", label: "Editing since", tone: "text-primary" },
  { value: "500+", label: "Videos delivered", tone: "text-tertiary" },
  { value: "20+", label: "Retainer clients", tone: "text-primary" },
  { value: "20M+", label: "Views generated", tone: "text-tertiary" },
];

function TabBar({
  tabs,
  active,
  onSelect,
}: {
  tabs: string[];
  active: string;
  onSelect: (tab: string) => void;
}) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {tabs.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onSelect(tab)}
            aria-pressed={isActive}
            className={`rounded-full border px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
              isActive
                ? "border-ink bg-ink text-ink-foreground"
                : "border-border bg-card hover:-translate-y-0.5 hover:border-ink"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

function WorkCard({
  work,
  ratio,
  onClick,
}: {
  work: Work;
  ratio: "long" | "short";
  onClick: () => void;
}) {
  return (
    <article
      className="group block cursor-pointer"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Play ${work.title}`}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all group-hover:shadow-elegant ${
          ratio === "long" ? "aspect-[4/5]" : "aspect-[9/16]"
        }`}
      >
        <img
          src={work.img}
          alt={`${work.title} — ${work.meta}`}
          width={ratio === "long" ? 800 : 720}
          height={ratio === "long" ? 1000 : 1280}
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
        <span className={`text-[10px] font-bold uppercase tracking-widest ${work.tone}`}>
          {work.meta}
        </span>
        <h3 className="text-lg font-bold leading-snug">{work.title}</h3>
        <p className="mt-1 text-sm text-foreground/60">{work.client}</p>
      </div>
    </article>
  );
}

function PortfolioPage() {
  const longTabs = Object.keys(longForm);
  const shortTabs = Object.keys(shortForm);
  const [longTab, setLongTab] = useState(longTabs[0]!);
  const [shortTab, setShortTab] = useState(shortTabs[0]!);
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

      {/* Intro */}
      <section className="pb-4 pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Portfolio
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] md:text-6xl">
            Edits that hold attention{" "}
            <span className="text-gradient-brand">from frame one.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            A selection of long-form and short-form work delivered for creators and brands on
            monthly retainers. Every cut below was edited, graded, sound-designed and exported
            in-house.
          </p>
        </div>
      </section>

      {/* Long form */}
      <section id="long-form" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-bold">Long form</h2>
            <p className="max-w-sm text-sm text-foreground/60">
              Story-driven cuts from 10 to 50 minutes — documentaries, vlogs, tutorials, gaming and
              multicam facecam.
            </p>
          </div>
          <TabBar tabs={longTabs} active={longTab} onSelect={setLongTab} />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {longForm[longTab]!.map((work) => (
              <WorkCard
                key={`${longTab}-${work.title}`}
                work={work}
                ratio="long"
                onClick={() => openLightbox(work)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Short form */}
      <section id="short-form" className="border-y border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-bold">Short form</h2>
            <p className="max-w-sm text-sm text-foreground/60">
              Vertical, caption-first edits built platform-native for every feed you post to.
            </p>
          </div>
          <TabBar tabs={shortTabs} active={shortTab} onSelect={setShortTab} />
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {shortForm[shortTab]!.map((work) => (
              <WorkCard
                key={`${shortTab}-${work.title}`}
                work={work}
                ratio="short"
                onClick={() => openLightbox(work)}
              />
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
              The post team behind the channels you watch.
            </h2>
            <p className="mt-6 text-lg text-foreground/70">
              Since 2020 we have shipped over 500 videos for creators and brands across seven
              content categories. Senior editors only, a shared drive, and a delivery calendar that
              never slips.
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

      <FaqSection />
      <ReadyToBookSection />
      <PricingSection />
      <SiteFooter />

      <VideoLightbox project={activeProject} isOpen={isLightboxOpen} onClose={closeLightbox} />
    </div>
  );
}
