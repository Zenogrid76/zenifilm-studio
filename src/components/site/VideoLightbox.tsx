import { useCallback, useEffect } from "react";
import { X } from "lucide-react";

export type VideoProject = {
  title: string;
  description: string;
  tags: string[];
  videoUrl: string;
  orientation?: "portrait" | "landscape";
};

type VideoLightboxProps = {
  project: VideoProject | null;
  isOpen: boolean;
  onClose: () => void;
};

/* =========================================================
   HELPERS
========================================================= */

function isYouTubeShort(url: string) {
  return /youtube\.com\/shorts\//i.test(url);
}

function getEmbedUrl(url: string): string | null {
  if (!url) return null;

  if (url.includes("PASTE_") || url === "#" || !url.startsWith("http")) {
    return null;
  }

  /* =======================================================
     YOUTUBE
     Supports:
     youtube.com/watch?v=
     youtube.com/shorts/
     youtube.com/embed/
     youtube.com/v/
     youtu.be/
  ======================================================= */

  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );

  if (youtubeMatch) {
    const videoId = youtubeMatch[1];

    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`;
  }

  /* Vimeo */

  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);

  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  }

  /* Google Drive */

  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);

  if (driveMatch) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }

  return null;
}

/* =========================================================
   VIDEO LIGHTBOX
========================================================= */

export function VideoLightbox({ project, isOpen, onClose }: VideoLightboxProps) {
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleEscape]);

  if (!isOpen || !project) {
    return null;
  }

  const embedUrl = getEmbedUrl(project.videoUrl);

  /*
    Portrait if:
    1. Portfolio explicitly marks it portrait
    OR
    2. The URL is a YouTube Short
  */
  const isPortrait = project.orientation === "portrait" || isYouTubeShort(project.videoUrl);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className={
          isPortrait
            ? "relative w-full max-w-[430px] overflow-hidden rounded-3xl bg-card shadow-2xl"
            : "relative w-full max-w-6xl overflow-hidden rounded-3xl bg-card shadow-2xl"
        }
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full bg-black/70 text-white transition hover:bg-black"
          aria-label="Close video"
        >
          <X className="size-5" />
        </button>

        {/* Video */}

        <div
          className={
            isPortrait
              ? "mx-auto aspect-[9/16] max-h-[88vh] w-full bg-black"
              : "aspect-video w-full bg-black"
          }
        >
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={project.title}
              className="h-full w-full border-0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex size-full items-center justify-center text-white">
              Video unavailable
            </div>
          )}
        </div>

        {/* Info — only long-form */}

        {!isPortrait && (
          <div className="p-5 md:p-7">
            <div className="mb-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="font-display text-xl font-bold md:text-2xl">{project.title}</h2>

            {project.description && (
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {project.description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
