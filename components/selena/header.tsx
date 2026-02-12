"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n, languages } from "@/lib/i18n/context";
import type { Language } from "@/lib/i18n/translations";
import { smoothScrollTo } from "@/lib/scroll";

export function Header() {
  const { t, language, setLanguage } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.results, href: "outcomes" },
    { label: t.nav.howItWorks, href: "how-it-works" },
    { label: t.nav.pricing, href: "calculator" },
    { label: t.nav.faq, href: "faq" },
    { label: t.nav.contact, href: "contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    smoothScrollTo(href);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="relative h-full w-full">
          {/* Плавный переход в нижних ~20% хедера от полупрозрачного к прозрачному при скролле */}
          {isScrolled && (
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-[20%] min-h-[12px] bg-gradient-to-t from-background/90 to-transparent"
              aria-hidden
            />
          )}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="cursor-pointer font-sans text-2xl font-semibold tracking-wide text-foreground"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="text-primary">sss</span>elena
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-4 md:flex">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="cursor-pointer flex items-center gap-1 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {languages.find((l) => l.code === language)?.flag}
                  <ChevronDown className="h-3 w-3" />
                </button>
                {isLangOpen && (
                  <div className="absolute right-0 top-full mt-2 rounded-lg border border-border bg-card p-1 shadow-lg">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`cursor-pointer block w-full rounded-md px-3 py-1.5 text-left text-sm transition-colors hover:bg-secondary ${
                          language === lang.code ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {lang.flag} {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNavClick("contact")}
                className="cursor-pointer border border-primary/30 text-muted-foreground hover:bg-primary/10 hover:text-primary"
              >
                {t.cta.requestConsultation}
              </Button>
              <Button
                size="sm"
                onClick={() => handleNavClick("calculator")}
                className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {t.cta.calculatePrice}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="cursor-pointer rounded-md p-2 text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-card border-l border-border p-6 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mt-16 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="cursor-pointer text-left text-lg text-foreground py-2 border-b border-border/50 transition-colors hover:text-primary"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Language Switcher */}
            <div className="mt-4 pt-4 border-t border-border">
              <p className="mb-2 text-xs uppercase text-muted-foreground tracking-wider">Language</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
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

            <div className="mt-6 flex flex-col gap-3">
              <Button
                variant="outline"
                onClick={() => handleNavClick("contact")}
                className="cursor-pointer w-full border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                {t.cta.requestConsultation}
              </Button>
              <Button
                onClick={() => handleNavClick("calculator")}
                className="cursor-pointer w-full bg-primary text-primary-foreground"
              >
                {t.cta.calculatePrice}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
