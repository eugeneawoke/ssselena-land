import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "StreamLine transformed how our engineering team operates. We've cut our deployment time by 80% and our developers are happier than ever.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechFlow Inc.",
    initials: "SC",
  },
  {
    quote:
      "The automation capabilities are unreal. What used to take our team days now happens automatically. It's like having an extra team member.",
    author: "Marcus Johnson",
    role: "CTO",
    company: "GrowthLabs",
    initials: "MJ",
  },
  {
    quote:
      "We evaluated dozens of solutions before choosing StreamLine. The combination of power and simplicity is unmatched in the market.",
    author: "Emily Rodriguez",
    role: "Head of Product",
    company: "InnovateCo",
    initials: "ER",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-border bg-secondary/30 py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Testimonials
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by teams worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what industry leaders are saying about StreamLine.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col rounded-xl border border-border bg-card p-8"
            >
              <blockquote className="flex-1 text-foreground">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-accent/10 text-accent">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
