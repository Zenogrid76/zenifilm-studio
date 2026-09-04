import { useEffect, useCallback } from "react";
import { X } from "lucide-react";

export type VideoProject = {
  title: string;
  description: string;
  tags: string[];
  videoUrl: string;
};

function getEmbedUrl(url: string): string | null {
  if (!url) return null;

  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/
  );
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0&modestbranding=1`;
  }

  const vimeoMatch = url.match(/vimeo\.com\/(\d+)(?:\/([a-zA-Z0-9]+))?/);
  if (vimeoMatch) {
    const id = vimeoMatch[1];
    const hash = vimeoMatch[2] ? `?h=${vimeoMatch[2]}&autoplay=1` : `?autoplay=1`;
    return `https://player.vimeo.com/video/${id}${hash}`;
  }

  if (url.includes("embed")) return url;

  return url;
}

export function VideoLightbox({
  project,
  isOpen,
  onClose,
}: {
  project: VideoProject | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleEscape]);

  if (!isOpen || !project) return null;

  const embedUrl = getEmbedUrl(project.videoUrl);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-ink/80 text-ink-foreground transition hover:bg-ink"
          aria-label="Close video"
        >
          <X className="size-5" />
        </button>

        <div className="aspect-video w-full bg-black">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={project.title}
              className="size-full"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex size-full flex-col items-center justify-center text-ink-foreground">
              <p className="text-sm font-semibold">Video unavailable</p>
            </div>
          )}
        </div>

        <div className="p-6 md:p-10">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">
            {project.title}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/70 md:text-lg">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
