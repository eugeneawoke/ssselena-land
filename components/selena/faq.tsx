"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-foreground text-center sm:text-4xl mb-12">
          {t.faq.title}
        </h2>

        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden transition-colors hover:border-primary/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="cursor-pointer flex w-full items-center justify-between p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-foreground">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-muted-foreground">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
