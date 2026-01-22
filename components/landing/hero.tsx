import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-muted-foreground">
              Announcing our $20M Series A Funding
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            The complete platform to{" "}
            <span className="text-accent">streamline</span> your workflow
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Your team&apos;s toolkit to stop configuring and start innovating.
            Securely build, deploy, and scale the best experiences with
            StreamLine.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8 bg-transparent">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-12 lg:grid-cols-4">
          {[
            { value: "20 days", label: "saved on daily builds", company: "TechCorp" },
            { value: "98%", label: "faster time to market", company: "InnovateCo" },
            { value: "300%", label: "increase in productivity", company: "GrowthLabs" },
            { value: "6x", label: "faster to build + deploy", company: "ScaleUp" },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="text-2xl font-semibold text-foreground lg:text-3xl">
                {stat.value}{" "}
                <span className="text-lg font-normal text-muted-foreground lg:text-xl">
                  {stat.label}
                </span>
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
