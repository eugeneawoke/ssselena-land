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
      {/* ColorBends background — dynamic size, same look on all screens */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="w-full h-full min-h-full"
          style={{ position: "relative", width: "100%", height: "100%", minHeight: "100%" }}
        >
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
            noise={0.05}
          />
        </div>
      </div>

      {/* Soft transition to next block — gradient mask at bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-64 sm:h-80 md:h-96"
        style={{
          background: "linear-gradient(to top, var(--background) 0%, var(--background) 15%, transparent 70%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Headline — по центру, шрифт в 1.7 раза меньше */}
          <h1 className="font-sans text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 max-w-2xl">
            <span className="block">Turn Strategy Chaos</span>
            <span className="block text-muted-foreground mt-1">Into Focused Action</span>
          </h1>

          {/* Description — по центру, шрифт в 1.7 раза меньше */}
          <p className="mt-5 max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 text-pretty">
            {t.hero.description}
          </p>

          {/* CTA — две кнопки по центру, как на примере */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Button
              size="default"
              onClick={() => smoothScrollTo("calculator")}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 px-6 shadow-lg shadow-primary/25 rounded-lg"
            >
              {t.cta.calculatePrice}
              <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="default"
              variant="outline"
              onClick={() => smoothScrollTo("contact")}
              className="border border-border bg-transparent hover:bg-secondary/50 px-6 rounded-lg"
            >
              {t.cta.requestConsultation}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
