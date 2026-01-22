"use client";

import { useI18n } from "@/lib/i18n/context";

type AnyT = Record<string, any>;

export function Deliverables() {
  const { t } = useI18n();
  const tt = t as unknown as AnyT;

  // --- TRANSLATIONS (safe fallbacks)
  // Tangible Deliverables (mindmap)
  const tangibleTitle: string =
    tt?.tangibleDeliverables?.title ??
    tt?.deliverables?.tangibleTitle ??
    tt?.deliverables?.title ??
    "Tangible Deliverables";

  // Prefer a dedicated key for mindmap items; fallback to deliverables.items
  const tangibleItems: string[] =
    (tt?.tangibleDeliverables?.items as string[]) ??
    (tt?.deliverables?.mindmapItems as string[]) ??
    (tt?.deliverables?.items as string[]) ??
    [
      "Clarity in\n1–2 weeks",
      "Measurable goals\n& metrics",
      "Notion / Miro",
      "Action plan\n(30/60/90)",
      "Clear ownership",
    ];

  // Recognize Your Situation (floating non-interactive pain bubbles)
  const recognizeTitle: string =
    tt?.recognizeYourSituation?.title ??
    tt?.deliverables?.recognizeTitle ??
    "Recognize Your Situation?";

  const recognizeItems: string[] =
    (tt?.recognizeYourSituation?.items as string[]) ??
    (tt?.deliverables?.recognizeItems as string[]) ??
    [
      "No stable focus — priorities shift weekly",
      "Busy teams, weaker outcomes",
      "Leadership sees different realities — decisions stall",
      "Growth plans exist on paper, not in action",
      "Key people are stretched thin across too many fronts",
    ];

  // ---- LAYOUT HELPERS
  const painPositions = [
    // top
    "left-1/2 top-8 -translate-x-1/2",
    // upper-left
    "left-10 top-36",
    // upper-right
    "right-10 top-40",
    // lower-left
    "left-14 bottom-16",
    // lower-right
    "right-14 bottom-20",
  ];

  // Different drift patterns / durations so they don't sync.
  const drifts = [
    "[animation:driftA_17s_ease-in-out_infinite]",
    "[animation:driftB_21s_ease-in-out_infinite_0.6s]",
    "[animation:driftC_19s_ease-in-out_infinite_1.1s]",
    "[animation:driftB_23s_ease-in-out_infinite_0.2s]",
    "[animation:driftA_20s_ease-in-out_infinite_0.9s]",
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* -------------------------------- */}
        {/* Tangible Deliverables (LIST + VISUAL PLACEHOLDER) */}
        {/* -------------------------------- */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: title + list */}
          <div className="lg:col-span-6">
            <h2 className="text-center font-serif text-4xl font-semibold text-foreground sm:text-5xl lg:text-left">
              {tangibleTitle}
            </h2>

            <ul className="mt-10 space-y-4">
              {tangibleItems.slice(0, 5).map((item, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-border/35 bg-card/15 px-6 py-5 text-muted-foreground shadow-[0_0_70px_rgba(236,72,153,0.08)] backdrop-blur-md"
                >
                  <span className="block whitespace-pre-line leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: placeholder (you will add hero/visual later) */}
          <div className="lg:col-span-6">
            <div
              aria-label="Tangible Deliverables Visual Placeholder"
              className="relative mx-auto mt-2 min-h-[420px] w-full max-w-xl overflow-hidden rounded-3xl border border-border/35 bg-card/10 shadow-[0_0_120px_rgba(236,72,153,0.12)] backdrop-blur-md lg:mt-0"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.18),transparent_60%)] opacity-60"
              />

              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="text-center">
                  <div className="mx-auto h-14 w-14 rounded-full border border-border/40 bg-card/20" />
                  <p className="mt-4 text-sm text-muted-foreground/80">
                    Visual placeholder — we’ll add the reference later
                  </p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-6 rounded-[22px] border border-dashed border-border/35"
              />
            </div>
          </div>
        </div>

        {/* spacer */}
        <div className="mt-16 sm:mt-24" />

        {/* ------------------------------------ */}
        {/* Recognize Your Situation (FLOAT CLOUD) */}
        {/* ------------------------------------ */}
        <div className="relative mx-auto flex min-h-[560px] items-center justify-center">
          <h3 className="pointer-events-none select-none text-center font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            {recognizeTitle}
          </h3>

          {recognizeItems.slice(0, 5).map((text, i) => (
            <div
              key={i}
              className={"pointer-events-none absolute " + (painPositions[i] || "")}
            >
              {/* Animation on inner bubble so we don't break absolute positioning transforms */}
              <div
                className={
                  "select-none rounded-full border border-border/40 bg-card/15 backdrop-blur-md " +
                  "px-7 py-5 text-center text-sm text-muted-foreground shadow-[0_0_80px_rgba(236,72,153,0.10)] " +
                  "w-[320px] min-h-[90px] flex items-center justify-center leading-snug " +
                  (drifts[i] || "")
                }
              >
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
        @keyframes driftA {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          20% {
            transform: translate3d(14px, -10px, 0) rotate(0.8deg);
          }
          45% {
            transform: translate3d(-10px, -16px, 0) rotate(-0.9deg);
          }
          70% {
            transform: translate3d(18px, 12px, 0) rotate(1.1deg);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
        }

        @keyframes driftB {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          18% {
            transform: translate3d(-18px, -8px, 0) rotate(-0.7deg);
          }
          40% {
            transform: translate3d(10px, -18px, 0) rotate(0.9deg);
          }
          68% {
            transform: translate3d(-8px, 16px, 0) rotate(-1deg);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
        }

        @keyframes driftC {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          22% {
            transform: translate3d(12px, 10px, 0) rotate(0.6deg);
          }
          50% {
            transform: translate3d(-14px, 16px, 0) rotate(-0.8deg);
          }
          78% {
            transform: translate3d(8px, -14px, 0) rotate(0.9deg);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}