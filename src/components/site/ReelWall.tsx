const columns = [
  [
    "/videos/reels/Short_1_prv.mp4",
    "/videos/reels/Short_2_prv.mp4",
    "/videos/reels/Short_3_prv.mp4",
  ],
  [
    "/videos/reels/Short_4_prv.mp4",
    "/videos/reels/Short_5_prv.mp4",
    "/videos/reels/Short_6_prv.mp4",
  ],
  [
    "/videos/reels/Short_7_prv.mp4",
    "/videos/reels/Short_8_prv.mp4",
    "/videos/reels/Short_9_prv.mp4",
  ],
  [
    "/videos/reels/Short_10_prv.mp4",
    "/videos/reels/Short_11_prv.mp4",
    "/videos/reels/Short_12_prv.mp4",
  ],
];

function ReelCard({ src }: { src: string }) {
  return (
    <div className="aspect-[9/16] overflow-hidden rounded-xl bg-transparent shadow-[0_10px_40px_rgba(0,0,0,0.75)]">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        className="block h-full w-full object-cover"
      />
    </div>
  );
}

export function ReelWall() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-10 opacity-15 blur-3xl"
        style={{ backgroundImage: "var(--gradient-brand)" }}
        aria-hidden="true"
      />

      <div className="reel-frame relative h-[520px] overflow-hidden md:h-[620px]">
        <div className="flex rotate-6 scale-110 gap-4">
          {columns.map((column, i) => {
            let visibility = "";

            // Column 1: mobile only
            if (i === 0) {
              visibility = "flex-1 md:hidden";
            }

            // Columns 2 & 3: always visible
            if (i === 1 || i === 2) {
              visibility = "flex-1";
            }

            // Column 4: desktop only
            if (i === 3) {
              visibility = "hidden md:block md:flex-1";
            }

            return (
              <div key={i} className={visibility}>
                <div
                  className={`flex flex-col gap-4 ${
                    i % 2 === 0 ? "animate-reel-up" : "animate-reel-down"
                  }`}
                  style={{
                    animationDuration: `${26 + i * 3}s`,
                  }}
                >
                  {[...column, ...column].map((video, j) => (
                    <ReelCard key={`${video}-${j}`} src={video} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
