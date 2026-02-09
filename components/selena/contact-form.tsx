"use client";

import React from "react"

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Send, ArrowLeft } from "lucide-react";

export function ContactForm() {
  const { t } = useI18n();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", company: "", teamSize: "", message: "" });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
              <Check className="h-8 w-8" />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
              {t.form.success.title}
            </h2>
            <p className="text-muted-foreground mb-8">{t.form.success.subtitle}</p>

            <div className="text-left rounded-xl bg-secondary/50 p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-4">{t.form.success.nextSteps}</h3>
              <ol className="space-y-3">
                {t.form.success.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-base md:text-sm text-foreground/85 md:text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <Button onClick={handleReset} variant="outline" className="cursor-pointer gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              {t.cta.submitAnother}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {t.form.title}
          </h2>
          <p className="mt-4 text-base md:text-sm text-foreground/85 md:text-muted-foreground">{t.form.subtitle}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 space-y-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-base md:text-sm font-medium text-foreground mb-2">
                {t.form.name}
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="min-h-[40px] bg-input border-border"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base md:text-sm font-medium text-foreground mb-2">
                {t.form.email}
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="min-h-[40px] bg-input border-border"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className="block text-base md:text-sm font-medium text-foreground mb-2">
                {t.form.company}
              </label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="min-h-[40px] bg-input border-border"
              />
            </div>
            <div>
              <label htmlFor="teamSize" className="block text-base md:text-sm font-medium text-foreground mb-2">
                {t.form.teamSize}
              </label>
              <Input
                id="teamSize"
                type="text"
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className="min-h-[40px] bg-input border-border"
                placeholder=""
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-base md:text-sm font-medium text-foreground mb-2">
              {t.form.message}
            </label>
            <Textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-input border-border resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="min-h-[40px] w-full cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            <Send className="h-4 w-4" />
            {t.cta.submitRequest}
          </Button>
        </form>
      </div>
    </section>
  );
}
