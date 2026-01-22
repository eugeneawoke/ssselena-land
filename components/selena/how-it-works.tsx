"use client";

import { useI18n } from "@/lib/i18n/context";
import { useEffect, useRef, useState } from "react";

export function HowItWorks() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress based on how much of the section is scrolled
      const scrolledPast = viewportHeight - rect.top;
      const totalScrollable = sectionHeight + viewportHeight * 0.5;
      const newProgress = Math.max(0, Math.min(1, scrolledPast / totalScrollable));
      
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = t.howItWorks.steps;

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-foreground text-center sm:text-4xl mb-16">
          {t.howItWorks.title}
        </h2>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-px">
            <div className="h-full w-full bg-border/30" />
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/50 transition-all duration-300"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const stepProgress = Math.max(0, Math.min(1, (progress * steps.length - index) * 2));
              const isActive = stepProgress > 0;

              return (
                <div
                  key={index}
                  className="relative flex gap-6 sm:gap-8"
                >
                  {/* Step Number */}
                  <div
                    className={`relative z-10 flex h-8 w-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-muted-foreground"
                    }`}
                  >
                    <span className="text-sm sm:text-base font-semibold">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 pb-8 transition-all duration-500 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-50 translate-y-2"
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
