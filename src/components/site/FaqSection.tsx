const faqs = [
  {
    q: "How does the monthly retainer work?",
    a: "You pay once a month, drop footage in a shared folder, and we deliver the agreed number of edits on a rolling schedule. No per-project invoices, no surprises.",
  },
  {
    q: "What is your typical turnaround?",
    a: "Short-form lands in 48 hours, long-form in 3–5 business days depending on run time and revision rounds.",
  },
  {
    q: "How many revisions do I get?",
    a: "Unlimited revisions within the scope of the original brief. We keep iterating until the cut is right.",
  },
  {
    q: "Do you handle color grading, sound and thumbnails?",
    a: "Yes. Every delivery includes a signature grade, cleaned dialogue, licensed music and SFX. Thumbnails are included on the Full Channel plan.",
  },
  {
    q: "Which formats do you deliver?",
    a: "Platform-native exports for YouTube, Instagram, TikTok and Facebook — including vertical reframes of long-form footage.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-4xl font-bold">Questions, answered</h2>
        <p className="mt-4 text-foreground/60">
          Everything you need to know before your first delivery.
        </p>
        <div className="mt-12 divide-y divide-border rounded-3xl border border-border bg-card px-6">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold">
                {item.q}
                <span className="text-xl leading-none text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
