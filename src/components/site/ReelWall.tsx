import reelVlog from "@/assets/reel-vlog.jpg";
import reelDoc from "@/assets/reel-doc.jpg";
import reelShort from "@/assets/reel-short.jpg";
import workGaming from "@/assets/work-gaming.jpg";
import workEducation from "@/assets/work-education.jpg";
import workMotion from "@/assets/work-motion.jpg";
import workTutorial from "@/assets/work-tutorial.jpg";
import workVlog from "@/assets/work-vlog.jpg";
import workDocumentary from "@/assets/work-documentary.jpg";

type Reel = { img: string; label: string; alt: string };

const columns: Reel[][] = [
  [
    { img: reelVlog, label: "Vlog Reel", alt: "Vertical travel vlog reel edited by Zenifilm" },
    { img: workGaming, label: "Gaming", alt: "Gaming highlight vertical edit" },
    { img: workTutorial, label: "Tutorial", alt: "Tutorial short-form edit" },
  ],
  [
    { img: reelDoc, label: "Doc Series", alt: "Documentary interview vertical reel" },
    { img: workEducation, label: "Education", alt: "Educational explainer vertical edit" },
    { img: workVlog, label: "Lifestyle", alt: "Lifestyle vlog vertical edit" },
  ],
  [
    { img: reelShort, label: "Shorts", alt: "Hook-first short-form vertical edit" },
    { img: workMotion, label: "Motion GFX", alt: "Kinetic typography motion graphics reel" },
    { img: workDocumentary, label: "Brand Film", alt: "Cinematic brand film vertical edit" },
  ],
];

function ReelCard({ reel }: { reel: Reel }) {
  return (
    <figure className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
      <img
        src={reel.img}
        alt={reel.alt}
        loading="lazy"
        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
      <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-ink-foreground">
        {reel.label}
      </span>
      <span className="absolute right-3 top-3 grid size-7 place-items-center rounded-full bg-card/85">
        <span className="ml-0.5 size-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-ink" />
      </span>
    </figure>
  );
}

export function ReelWall() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-10 opacity-25 blur-3xl"
        style={{ backgroundImage: "var(--gradient-brand)" }}
        aria-hidden="true"
      />
      <div className="relative h-[520px] overflow-hidden rounded-[2rem] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] md:h-[620px]">
        <div className="flex rotate-6 scale-110 gap-4">
          {columns.map((col, i) => (
            <div key={i} className="flex-1">
              <div
                className={`flex flex-col gap-4 ${i === 1 ? "animate-reel-down" : "animate-reel-up"}`}
                style={{ animationDuration: `${24 + i * 6}s` }}
              >
                {[...col, ...col].map((reel, j) => (
                  <ReelCard key={`${reel.label}-${j}`} reel={reel} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
