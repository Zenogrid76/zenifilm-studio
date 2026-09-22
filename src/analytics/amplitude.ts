import * as amplitude from "@amplitude/analytics-browser";

let initialized = false;

type EventProperties = Record<string, string | number | boolean | undefined>;

export function initAmplitude() {
  if (typeof window === "undefined") {
    return;
  }

  if (initialized) {
    return;
  }

  const apiKey = import.meta.env["VITE_AMPLITUDE_API_KEY"];

  if (!apiKey) {
    if (import.meta.env.DEV) {
      console.warn("Amplitude API key is missing.");
    }

    return;
  }

  amplitude.init(apiKey, undefined, {
    autocapture: {
      attribution: true,
      pageViews: true,
      sessions: true,

      /*
        We'll manually track the important actions.

        This also avoids unnecessarily autocapturing
        contact-form interactions.
      */
      fileDownloads: false,
      formInteractions: false,
      elementInteractions: false,
    },
  });

  initialized = true;
}

/* =========================================================
   BASE TRACKER
========================================================= */

export function trackEvent(eventName: string, properties: EventProperties = {}) {
  if (typeof window === "undefined" || !initialized) {
    return;
  }

  amplitude.track(eventName, {
    ...properties,

    page_path: window.location.pathname,
  });
}

/* =========================================================
   PORTFOLIO
========================================================= */

export function trackProjectOpened({
  title,
  category,
  type,
}: {
  title: string;
  category: string;
  type: "Long Form" | "Short Form";
}) {
  trackEvent("Portfolio Project Opened", {
    project_title: title,
    project_category: category,
    project_type: type,
  });
}

export function trackLoadMore({
  type,
  visibleCount,
}: {
  type: "Long Form" | "Short Form";
  visibleCount: number;
}) {
  trackEvent("Portfolio Load More Clicked", {
    project_type: type,
    visible_count: visibleCount,
  });
}

/* =========================================================
   CTA
========================================================= */

export function trackCtaClicked({ name, location }: { name: string; location: string }) {
  trackEvent("CTA Clicked", {
    cta_name: name,
    cta_location: location,
  });
}

/* =========================================================
   CONTACT
========================================================= */

export function trackContactSubmitted({
  service,
  contentType,
}: {
  service?: string;
  contentType?: string;
}) {
  trackEvent("Contact Form Submitted", {
    service: service || "Not specified",
    content_type: contentType || "Not specified",
  });
}

export function trackEmailClicked({ location }: { location: string }) {
  trackEvent("Email Link Clicked", {
    location,
  });
}
