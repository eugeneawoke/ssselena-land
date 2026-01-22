"use client";

import { useI18n } from "@/lib/i18n/context";
import { Star } from "lucide-react";

export function SocialProof() {
  const { t } = useI18n();

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {t.proof.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.proof.subtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group rounded-2xl border border-dashed border-border/50 bg-card/30 p-6 flex flex-col items-center justify-center min-h-[200px] transition-colors hover:border-primary/30"
            >
              <div className="flex gap-1 mb-4 opacity-30">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-muted-foreground text-muted-foreground" />
                ))}
              </div>
              <p className="text-center text-muted-foreground/60 text-sm">{t.proof.placeholder}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
