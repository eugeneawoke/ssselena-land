"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { smoothScrollTo } from "@/lib/scroll";
import { Button } from "@/components/ui/button";

export function MobileCTA() {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (!footer) {
        setIsVisible(window.scrollY > 300);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const isFooterVisible = footerRect.top < window.innerHeight;
      const isPastHero = window.scrollY > 300;

      setIsVisible(isPastHero && !isFooterVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-card/95 backdrop-blur-md border-t border-border px-4 py-3">
        <Button
          onClick={() => smoothScrollTo("calculator")}
          className="min-h-[40px] cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {t.cta.calculatePrice}
        </Button>
      </div>
    </div>
  );
}
