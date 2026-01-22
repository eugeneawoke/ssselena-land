import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="border-t border-border bg-secondary/30 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12 lg:p-16">
          {/* Background Pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to streamline your workflow?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of teams already using StreamLine to build faster,
              collaborate better, and ship with confidence.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 px-8">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Talk to Sales
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required. Start free and upgrade anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
