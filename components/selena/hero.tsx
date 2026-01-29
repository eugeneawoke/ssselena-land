"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { smoothScrollTo } from "@/lib/scroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { t } = useI18n();
  const [visualState, setVisualState] = useState<"before" | "after">("before");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--selene-purple-deep)] via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--selene-glow)_0%,transparent_50%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* LEFT (content) */}
          <div className="lg:col-span-6">
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

          {/* RIGHT (interactive before/after SVG) */}
          <div className="lg:col-span-6">
            <div
              className="hidden lg:block"
              onMouseEnter={() => setVisualState("after")}
              onMouseLeave={() => setVisualState("before")}
            >
              <div
                className="relative w-full overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm"
                data-state={visualState}
              >
                <svg
                  className="h-[440px] w-full"
                  viewBox="0 0 520 440"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Strategy: from chaos to focused process"
                >
                  {/* BEFORE: scattered blocks (chaos) */}
                  <g
                    className="transition-opacity duration-500"
                    style={{ opacity: visualState === "before" ? 1 : 0 }}
                  >
                    <rect x="40" y="80" width="100" height="48" rx="8" fill="hsl(var(--primary) / 0.25)" transform="rotate(-4 90 104)" />
                    <rect x="280" y="40" width="100" height="48" rx="8" fill="hsl(var(--primary) / 0.2)" transform="rotate(6 330 64)" />
                    <rect x="380" y="160" width="100" height="48" rx="8" fill="hsl(var(--primary) / 0.2)" transform="rotate(-3 430 184)" />
                    <rect x="80" y="280" width="100" height="48" rx="8" fill="hsl(var(--primary) / 0.15)" transform="rotate(5 130 304)" />
                    <rect x="320" y="320" width="100" height="48" rx="8" fill="hsl(var(--primary) / 0.2)" transform="rotate(-2 370 344)" />
                  </g>
                  {/* AFTER: aligned process (focused) */}
                  <g
                    className="transition-opacity duration-500"
                    style={{ opacity: visualState === "after" ? 1 : 0 }}
                  >
                    <rect x="50" y="196" width="72" height="48" rx="8" fill="hsl(var(--primary) / 0.35)" />
                    <line x1="130" y1="220" x2="168" y2="220" stroke="hsl(var(--primary) / 0.5)" strokeWidth="2" strokeLinecap="round" />
                    <rect x="176" y="196" width="72" height="48" rx="8" fill="hsl(var(--primary) / 0.4)" />
                    <line x1="256" y1="220" x2="294" y2="220" stroke="hsl(var(--primary) / 0.5)" strokeWidth="2" strokeLinecap="round" />
                    <rect x="302" y="196" width="72" height="48" rx="8" fill="hsl(var(--primary) / 0.45)" />
                    <line x1="382" y1="220" x2="420" y2="220" stroke="hsl(var(--primary) / 0.5)" strokeWidth="2" strokeLinecap="round" />
                    <rect x="428" y="196" width="72" height="48" rx="8" fill="hsl(var(--primary) / 0.5)" />
                  </g>
                </svg>
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
