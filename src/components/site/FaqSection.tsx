const faqs = [
  {
    q: "How does the monthly plan work?",
    a: "Send us your footage and we’ll assign an editor who becomes familiar with your content and editing style. We download the footage, edit the project, and send you a first draft for review. From there, we handle your feedback and revisions until the video is ready to publish.",
  },
  {
    q: "What is your typical turnaround time?",
    a: "We aim to deliver most standard edits within 24 hours, with 48 hours being our usual turnaround. Projects with very large files may require an additional day for downloading and preparation. Motion graphics and promotional videos typically take 3–5 business days depending on complexity.",
  },
  {
    q: "How many revisions are included?",
    a: "Revisions are unlimited within the scope of the original brief. We’ll keep refining the edit until you’re happy with it. Additional charges may apply if new footage, major additions, or significant changes outside the original scope are requested.",
  },
  {
    q: "What types of videos do you edit?",
    a: "We specialize in vlogs, talking-head content, YouTube videos, Shorts, Reels, multicam videos, tutorials, reviews, and motion-driven content. We can also repurpose long-form footage into short-form content so you can get more value from every shoot.",
  },
  {
    q: "How does project-based pricing work?",
    a: "We start with a quick conversation about your project, footage, editing style, and requirements. Once we understand the brief, we provide a custom quote based on the complexity and amount of post-production involved.",
  },
  {
    q: "Can you match my existing editing style?",
    a: "Yes. Our editors can study your existing content, references, graphics, pacing, and overall style to make the transition feel seamless. The goal is for your audience to feel like nothing changed.",
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
