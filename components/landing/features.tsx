import { Zap, Shield, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Automation",
    description:
      "Automate repetitive tasks in seconds, not hours. Our intelligent workflow engine handles the heavy lifting so you can focus on what matters.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Bank-level encryption and SOC 2 compliance keep your data safe. Role-based access control ensures the right people have the right access.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track performance metrics and gain insights with beautiful, actionable dashboards. Make data-driven decisions with confidence.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description:
      "Break down silos with tools designed for modern teams. Share, comment, and iterate together in real-time from anywhere.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Features
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to scale
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features that help your team ship faster and smarter.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:bg-card/80"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
