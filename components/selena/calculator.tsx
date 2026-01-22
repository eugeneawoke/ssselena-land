"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const basePrices = [1500, 2500, 3500, 5000];
const sessionMultipliers = [1, 1.8, 3];

export function Calculator() {
  const { t } = useI18n();
  const [teamSize, setTeamSize] = useState(0);
  const [sessionType, setSessionType] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);

  const basePrice = basePrices[teamSize];
  const sessionPrice = basePrice * sessionMultipliers[sessionType];
  const addOnsPrice = selectedAddOns.reduce((sum, i) => sum + t.calculator.addOnOptions[i].price, 0);
  const total = sessionPrice + addOnsPrice;

  const toggleAddOn = (index: number) => {
    setSelectedAddOns((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  function smoothScrollTo(targetId: string) {
    const target = document.getElementById(targetId);
    if (!target) return;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }

  return (
    <section id="calculator" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {t.calculator.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.calculator.subtitle}</p>
        </div>

        <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-8">
          {/* Team Size */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-foreground mb-4">
              {t.calculator.teamSize}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {t.calculator.teamSizeOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setTeamSize(index)}
                  className={`rounded-lg border px-4 py-3 text-sm transition-all ${
                    teamSize === index
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-secondary/50 text-muted-foreground hover:border-primary/50 hover:bg-secondary"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Session Type */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-foreground mb-4">
              {t.calculator.sessionType}
            </label>
            <div className="grid sm:grid-cols-3 gap-3">
              {t.calculator.sessionTypeOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSessionType(index)}
                  className={`rounded-lg border px-4 py-3 text-sm transition-all ${
                    sessionType === index
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-secondary/50 text-muted-foreground hover:border-primary/50 hover:bg-secondary"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-foreground mb-4">
              {t.calculator.addOns}
            </label>
            <div className="space-y-3">
              {t.calculator.addOnOptions.map((addon, index) => (
                <button
                  key={index}
                  onClick={() => toggleAddOn(index)}
                  className={`w-full flex items-center justify-between rounded-lg border px-4 py-3 text-left transition-all ${
                    selectedAddOns.includes(index)
                      ? "border-primary bg-primary/10"
                      : "border-border bg-secondary/50 hover:border-primary/50 hover:bg-secondary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-5 w-5 rounded border flex items-center justify-center transition-colors ${
                        selectedAddOns.includes(index)
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border"
                      }`}
                    >
                      {selectedAddOns.includes(index) && <Check className="h-3 w-3" />}
                    </div>
                    <span
                      className={
                        selectedAddOns.includes(index) ? "text-foreground" : "text-muted-foreground"
                      }
                    >
                      {addon.name}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">+${addon.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">{t.calculator.total}</span>
              <span className="font-serif text-3xl font-semibold text-foreground">
                ${total.toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">{t.calculator.disclaimer}</p>
            <Button
              size="lg"
              onClick={() => smoothScrollTo("contact")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {t.cta.requestConsultation}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
