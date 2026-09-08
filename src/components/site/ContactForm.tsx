import { useState } from "react";

type ContactFormProps = {
  subject?: string;
};

export function ContactForm({ subject = "New Zenifilm Website Inquiry" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");

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
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 rounded-[2rem] border border-border bg-card p-7 shadow-sm md:p-8"
    >
      {/* Web3Forms */}
      <input type="hidden" name="access_key" value="d984e91d-bb5d-4288-ab58-6931633ab173" />

      <input type="hidden" name="subject" value={subject} />

      {/* Spam protection */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      {/* Name + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className="rounded-2xl border border-border bg-background px-5 py-4 text-sm outline-none transition-colors focus:border-primary"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email address"
          className="rounded-2xl border border-border bg-background px-5 py-4 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>

      {/* Service */}
      <div className="relative">
        <select
          name="service"
          required
          defaultValue=""
          className="
            w-full
            cursor-pointer
            appearance-none
            rounded-2xl
            border
            border-border
            bg-background
            px-5
            py-4
            pr-12
            text-sm
            text-foreground
            outline-none
            transition-colors
            focus:border-primary
          "
        >
          <option value="" disabled>
            What are you looking for?
          </option>

          <option value="Project-Based Editing">Project-Based Editing</option>

          <option value="Monthly Editing Partnership">Monthly Editing Partnership</option>

          <option value="Complimentary Sample Edit">Complimentary 1-Minute Sample Edit</option>

          <option value="Custom Inquiry">Custom / Other Inquiry</option>
        </select>

        <svg
          className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>

      {/* Content type */}
      <div className="relative">
        <select
          name="content_type"
          defaultValue=""
          className="
            w-full
            cursor-pointer
            appearance-none
            rounded-2xl
            border
            border-border
            bg-background
            px-5
            py-4
            pr-12
            text-sm
            text-foreground
            outline-none
            transition-colors
            focus:border-primary
          "
        >
          <option value="" disabled>
            Type of content
          </option>

          <option value="Long-form / YouTube">Long-form / YouTube</option>

          <option value="Shorts / Reels">Shorts / Reels</option>

          <option value="Vlog">Vlog</option>

          <option value="Talking Head">Talking Head</option>

          <option value="Multicam / Podcast">Multicam / Podcast</option>

          <option value="Motion Graphics / Promo">Motion Graphics / Promo</option>

          <option value="Gaming">Gaming</option>

          <option value="Tutorial / Screen Recording">Tutorial / Screen Recording</option>

          <option value="Other">Other</option>
        </select>

        <svg
          className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>

      {/* Reference */}
      <input
        type="url"
        name="reference"
        placeholder="Channel / website / reference link (optional)"
        className="rounded-2xl border border-border bg-background px-5 py-4 text-sm outline-none transition-colors focus:border-primary"
      />

      {/* Message */}
      <textarea
        name="message"
        required
        rows={6}
        placeholder="Tell us about your project, footage, style and what you're looking for..."
        className="resize-none rounded-2xl border border-border bg-background px-5 py-4 text-sm outline-none transition-colors focus:border-primary"
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-2xl bg-ink py-4 text-sm font-bold text-ink-foreground transition-all hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Project Details"}
      </button>

      {/* Status */}
      {status === "success" && (
        <p className="text-center text-sm font-semibold text-primary">
          Message sent. We&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-center text-sm font-semibold text-red-500">
          Something went wrong. Please try again.
        </p>
      )}

      {/* Email fallback */}
      <div className="mt-2 border-t border-border pt-5 text-center text-sm text-muted-foreground">
        Or send us an email at{" "}
        <a
          href="mailto:mahmud.rezamahim@gmail.com"
          className="font-semibold text-primary hover:underline"
        >
          mahmud.rezamahim@gmail.com
        </a>
      </div>
    </form>
  );
}
