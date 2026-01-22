"use client";

import { useI18n } from "@/lib/i18n/context";
import { Target, Focus, Users, BarChart3, Map, Handshake } from "lucide-react";

const icons = [Target, Focus, Users, BarChart3, Map, Handshake];

export function Outcomes() {
  const { t } = useI18n();

  return (
    <section id="outcomes" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {t.outcomes.title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t.outcomes.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.outcomes.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
