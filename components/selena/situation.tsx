"use client";

import { useI18n } from "@/lib/i18n/context";
import { useIsMobile } from "@/hooks/use-mobile";

const painPositions = [
  "left-1/2 top-8 -translate-x-1/2",
  "left-10 top-36",
  "right-10 top-40",
  "left-14 bottom-16",
  "right-14 bottom-20",
];

const drifts = [
  "[animation:driftA_17s_ease-in-out_infinite]",
  "[animation:driftB_21s_ease-in-out_infinite_0.6s]",
  "[animation:driftC_19s_ease-in-out_infinite_1.1s]",
  "[animation:driftB_23s_ease-in-out_infinite_0.2s]",
  "[animation:driftA_20s_ease-in-out_infinite_0.9s]",
];

const cardClass =
  "select-none rounded-full border border-border/40 bg-card/15 backdrop-blur-md px-7 py-5 text-center text-sm text-muted-foreground shadow-[0_0_80px_rgba(236,72,153,0.10)] min-h-[90px] flex items-center justify-center leading-snug";

export function Situation() {
  const { t } = useI18n();
  const isMobile = useIsMobile();
  const recognizeTitle = t.situation.title;
  const recognizeItems = t.situation.items.slice(0, 5);

  if (isMobile) {
    const topItems = recognizeItems.slice(0, 2);
    const bottomItems = recognizeItems.slice(2, 5);
    return (
      <section className="relative py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8">
            {/* Top pains */}
            <div className="flex w-full max-w-[320px] flex-col gap-4">
              {topItems.map((text, i) => (
                <div key={i} className={cardClass + " w-full"}>
                  <span className="block">{text}</span>
                </div>
              ))}
            </div>
            {/* Center title */}
            <h2 className="text-center font-serif text-4xl font-semibold text-foreground">
              {recognizeTitle}
            </h2>
            {/* Bottom pains */}
            <div className="flex w-full max-w-[320px] flex-col gap-4">
              {bottomItems.map((text, i) => (
                <div key={i} className={cardClass + " w-full"}>
                  <span className="block">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex min-h-[560px] items-center justify-center [animation:cloudFloat_18s_ease-in-out_infinite]">
          <h2 className="pointer-events-none select-none text-center font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            {recognizeTitle}
          </h2>

          {recognizeItems.map((text, i) => (
            <div
              key={i}
              className={"pointer-events-none absolute " + (painPositions[i] ?? "")}
            >
              <div className={cardClass + " w-[320px] " + (drifts[i] ?? "")}>
                <span className="block">{text}</span>
              </div>
            </div>
          ))}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
          >
            <div className="h-[360px] w-[360px] rounded-full bg-primary/10 blur-3xl" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes cloudFloat {
          0% { transform: translate3d(0, 0, 0); }
          25% { transform: translate3d(0, -10px, 0); }
          55% { transform: translate3d(-8px, 6px, 0); }
          80% { transform: translate3d(10px, 4px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes driftA {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          20% { transform: translate3d(14px, -10px, 0) rotate(0.8deg); }
          45% { transform: translate3d(-10px, -16px, 0) rotate(-0.9deg); }
          70% { transform: translate3d(18px, 12px, 0) rotate(1.1deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }
        @keyframes driftB {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          18% { transform: translate3d(-18px, -8px, 0) rotate(-0.7deg); }
          40% { transform: translate3d(10px, -18px, 0) rotate(0.9deg); }
          68% { transform: translate3d(-8px, 16px, 0) rotate(-1deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }
        @keyframes driftC {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          22% { transform: translate3d(12px, 10px, 0) rotate(0.6deg); }
          50% { transform: translate3d(-14px, 16px, 0) rotate(-0.8deg); }
          78% { transform: translate3d(8px, -14px, 0) rotate(0.9deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .reduce-motion * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}
