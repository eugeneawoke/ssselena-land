"use client";

import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

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

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">{t.hero.badge}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          <span className="text-balance">{t.hero.title}</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 text-pretty">
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
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

        {/* Decorative Moon Element */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-t from-primary/5 to-transparent blur-3xl" />
      </div>
    </section>
  );
}
