"use client";

import { useI18n, languages } from "@/lib/i18n/context";
import type { Language } from "@/lib/i18n/translations";
import { smoothScrollTo } from "@/lib/scroll";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const { t, language, setLanguage } = useI18n();

  return (
    <footer id="footer" className="relative border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="cursor-pointer font-sans text-2xl font-semibold tracking-wide text-foreground">
              <span className="text-primary">sss</span>elena
            </a>
            <p className="mt-4 max-w-xs text-base md:text-sm text-foreground/85 md:text-muted-foreground">{t.footer.tagline}</p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@ssselena.com"
                className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.contact}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@ssselena.com"
                  className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@ssselena.com
                </a>
              </li>
            </ul>

            <h3 className="font-semibold text-foreground mb-4 mt-6">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* CTA & Language */}
          <div>
            <Button
              onClick={() => smoothScrollTo("calculator")}
              className="min-h-[40px] cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90 mb-6"
            >
              {t.cta.calculatePrice}
            </Button>

            <div>
              <p className="text-xs uppercase text-muted-foreground tracking-wider mb-2">Language</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className={`cursor-pointer rounded-md px-3 py-1.5 text-sm transition-colors ${
                      language === lang.code
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {lang.flag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-base md:text-sm text-foreground/85 md:text-muted-foreground">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
