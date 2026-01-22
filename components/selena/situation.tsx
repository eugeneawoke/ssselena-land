"use client";

import { useI18n } from "@/lib/i18n/context";

export function Situation() {
  const { t } = useI18n();

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl mb-12">
          {t.situation.title}
        </h2>

        <div className="relative flex flex-col items-center gap-4">
          {t.situation.items.map((item, index) => {
            const offsets = [
              "translate-x-0",
              "-translate-x-4 sm:-translate-x-8",
              "translate-x-6 sm:translate-x-12",
              "-translate-x-2 sm:-translate-x-4",
              "translate-x-4 sm:translate-x-6",
            ];

            return (
              <div
                key={index}
                className={`group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm px-6 py-4 transition-all duration-500 hover:border-primary/50 hover:bg-card ${offsets[index]} animate-in fade-in slide-in-from-bottom-4`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {item}
                </p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
