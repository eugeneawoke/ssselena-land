"use client";

import { useI18n } from "@/lib/i18n/context";
import { smoothScrollTo } from "@/lib/scroll";
import { ColorBends } from "@/components/ui/color-bends";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* ColorBends background (full section) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <ColorBends
          rotation={130}
          speed={0.1}
          colors={["#52395a", "#231826"]}
          transparent
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          className="w-full h-full"
        />
      </div>

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
              {t.hero.description}
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

          {/* Right column kept for grid balance (background is ColorBends) */}
          <div className="lg:col-span-6" />
        </div>
      </div>
    </section>
  );
}
