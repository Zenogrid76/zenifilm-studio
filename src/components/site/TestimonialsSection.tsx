const testimonials = [
  {
    quote: "Simply the best editor we’ve had.",
    name: "Jim Fahad Digital",
    role: "Digital Creator",
    image: "/images/testimonials/jfd.jpg",
  },
  {
    quote: "Mahmud can take messy footage and turn it into something polished and engaging.",
    name: "Eve Kilcher Homestead",
    role: "Creator Brand",
    image: "/images/testimonials/ekh.jpg",
  },
  {
    quote: "Excellent turnaround, reliable delivery, and nothing gets missed.",
    name: "Chewed Up",
    role: "Production Team",
    image: "/images/testimonials/cu.jpg",
  },

  {
    quote:
      "The revision process is incredibly smooth. Changes are handled without any extra hassle, and the turnaround on revisions is impressively fast.",
    name: "Kaizen",
    role: "Finance Brand",
    image: "/images/testimonials/kaizen.jpg",
  },
  {
    quote:
      "The ads Mahmud created for our website were insanely effective. They presented the product perfectly and helped us sell it incredibly well.",
    name: "Kitpapa",
    role: "Website Brand",
    image: "/images/testimonials/Kitpapa-Logo.png",
  },
  {
    quote:
      "An incredibly hardworking editor who can switch gears quickly, adapt to feedback, and still maintain a high standard of work.",
    name: "Framelabs",
    role: "Production Team",
    image: "/images/testimonials/framelabs.svg",
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <blockquote className="testimonial-card shrink-0 rounded-3xl border border-border bg-background p-8 shadow-sm">
      <div className="font-display text-4xl font-extrabold text-primary/20">&ldquo;</div>

      <p className="mt-2 min-h-[90px] text-sm leading-relaxed text-foreground/75">
        {testimonial.quote}
      </p>

      <footer className="mt-8 flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          loading="lazy"
          className="size-11 rounded-full object-cover"
        />

        <div>
          <span className="block text-sm font-bold">{testimonial.name}</span>

          <span className="block text-xs text-muted-foreground">{testimonial.role}</span>
        </div>
      </footer>
    </blockquote>
  );
}

export function TestimonialsSection() {
  return (
    <section className="border-y border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Client Feedback
            </span>

            <h2 className="mt-3 font-display text-4xl font-bold">Words From Past Collaborations</h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-foreground/60">
            Feedback from clients who have worked directly with Mahmud Reza Mahim, founder and lead
            editor of Zenifilm Studio.
          </p>
        </div>

        {/* Testimonial slider */}
        <div className="testimonial-viewport overflow-hidden">
          <div className="testimonial-track">
            <div className="testimonial-group">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`first-${index}`} testimonial={testimonial} />
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="testimonial-group" aria-hidden="true">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`second-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
