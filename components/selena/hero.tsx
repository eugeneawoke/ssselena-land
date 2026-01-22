"use client";

import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function smoothScrollTo(targetId: string) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 800;
  let startTime: number | null = null;

  function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--selene-purple-deep)] via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--selene-glow)_0%,transparent_50%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* LEFT (content) */}
          <div className="lg:col-span-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">Trusted by leadership teams worldwide</span>
            </div>

            {/* Headline */}
            <h1 className="font-sans text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              <span className="block">Turn Strategy Chaos</span>
              <span className="block text-primary">Into Focused Action</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 text-pretty">
              Facilitated strategic sessions that align your leadership team, set clear priorities, and produce actionable plans—in just 1–2 days.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <Button
                size="lg"
                onClick={() => smoothScrollTo("calculator")}
                className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 shadow-lg shadow-primary/25"
              >
                {t.cta.calculatePrice}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => smoothScrollTo("contact")}
                className="border-border/50 hover:bg-secondary px-8"
              >
                {t.cta.requestConsultation}
              </Button>
            </div>
          </div>

          {/* RIGHT (placeholder) */}
          <div className="lg:col-span-6">
            <div className="hidden lg:block">
              <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="h-[440px] w-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs text-white/70">
                    Hero visual placeholder
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Moon Element */}
          <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-t from-primary/5 to-transparent blur-3xl" />
        </div>
      </div>
    </section>
  );
}
