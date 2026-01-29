"use client";

import { useI18n } from "@/lib/i18n/context";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown } from "lucide-react";

export function Deliverables() {
  const { t } = useI18n();
  const isMobile = useIsMobile();

  const tangibleTitle = t.deliverables.title;
  const centerLabel = t.deliverables.mindmap.center;
  const painItems = t.situation.items.slice(0, 5);
  const tangibleItems = [
    ...t.deliverables.mindmap.nodes,
    ...t.deliverables.mindmap.subNodes,
  ].slice(0, 5);

  const splitPainLabel = (text: string): string[] => {
    const normalized = String(text).trim();

    // Prefer splitting on em-dash to keep meaning (matches your copy style)
    if (normalized.includes(" — ")) {
      const parts = normalized.split(" — ");
      if (parts.length >= 2) {
        const left = parts[0]?.trim();
        const right = parts.slice(1).join(" — ").trim();
        if (left && right) return [`${left} —`, right];
      }
    }

    // Fallback: split long lines roughly in half on a space
    if (normalized.length > 48) {
      const mid = Math.floor(normalized.length / 2);
      let idx = normalized.lastIndexOf(" ", mid);
      if (idx < 20) idx = normalized.indexOf(" ", mid);
      if (idx > 0) return [normalized.slice(0, idx), normalized.slice(idx + 1)];
    }

    return [normalized];
  };

  if (isMobile) {
    return (
      <section className="relative py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            {tangibleTitle}
          </h2>
          <div
            aria-label="Tangible Deliverables: from pains to strategic sessions to deliverables"
            className="mx-auto mt-8 flex max-w-sm flex-col items-center gap-6"
          >
            {/* Pains */}
            <div className="w-full space-y-3 rounded-2xl border border-border/35 bg-card/10 px-4 py-4 backdrop-blur-sm">
              <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Pains
              </p>
              <ul className="space-y-2">
                {painItems.map((text, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-border/40 bg-card/15 px-4 py-3 text-sm text-muted-foreground"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <ChevronDown className="h-6 w-6 shrink-0 text-primary/70" aria-hidden />
            {/* Strategic Sessions */}
            <div className="rounded-2xl border border-primary/30 bg-primary/10 px-6 py-4 text-center backdrop-blur-sm">
              <p className="font-semibold text-foreground">{centerLabel}</p>
            </div>
            <ChevronDown className="h-6 w-6 shrink-0 text-primary/70" aria-hidden />
            {/* Deliverables */}
            <div className="w-full space-y-3 rounded-2xl border border-border/35 bg-card/10 px-4 py-4 backdrop-blur-sm">
              <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Deliverables
              </p>
              <ul className="space-y-2">
                {tangibleItems.map((text, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-border/40 bg-card/15 px-4 py-3 text-sm text-muted-foreground"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-4xl font-semibold text-foreground sm:text-5xl">
          {tangibleTitle}
        </h2>

        {/* Visual mindmap (desktop) */}
        <div
          aria-label="Tangible Deliverables: from pains to strategic sessions to deliverables"
          className="relative mx-auto mt-10 w-full overflow-hidden rounded-3xl border border-border/35 bg-card/10 shadow-[0_0_140px_rgba(236,72,153,0.10)] backdrop-blur-md"
        >
          {/* Subtle vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.00),rgba(0,0,0,0.45)_70%)]"
          />

          {/* Fixed aspect ratio container (responsive) */}
          <div className="relative aspect-[16/7] min-h-[360px] w-full">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="-220 0 1420 520"
              role="img"
              aria-label="Mindmap connecting pains to Strategic Sessions and to deliverables"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Arrow heads */}
                <marker
                  id="arrowIn"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#6B4A73" />
                </marker>

                <marker
                  id="arrowOut"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#D7A7FF" />
                </marker>

                {/* Glow for outgoing connections */}
                <filter id="softGlow" x="-80%" y="-80%" width="260%" height="260%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#D7A7FF" floodOpacity="0.45" />
                </filter>
              </defs>

              {/* Connection lines: incoming (pains -> center) */}
              <g
                opacity="0.75"
                stroke="#6B4A73"
                strokeWidth="2.25"
                fill="none"
                strokeLinecap="round"
              >
                <path d="M 180 110 C 300 110, 420 180, 516 245" />
                <path d="M 180 190 C 310 190, 430 220, 516 258" />
                <path d="M 180 270 C 320 270, 435 270, 516 270" />
                <path d="M 180 350 C 310 350, 430 320, 516 282" />
                <path d="M 180 430 C 300 430, 420 360, 516 295" />
              </g>

              {/* Connection lines: outgoing (center -> deliverables) */}
              <g
                opacity="0.98"
                stroke="#D7A7FF"
                strokeWidth="2.75"
                fill="none"
                markerEnd="url(#arrowOut)"
                filter="url(#softGlow)"
                strokeLinecap="round"
              >
                <path d="M 684 245 C 760 190, 820 120, 980 110" />
                <path d="M 684 258 C 770 230, 835 195, 980 190" />
                <path d="M 684 270 C 780 270, 850 270, 980 270" />
                <path d="M 684 282 C 770 310, 835 345, 980 350" />
                <path d="M 684 295 C 760 350, 820 420, 980 430" />
              </g>

              {/* Center circle */}
              <g>
                <circle cx="600" cy="270" r="84" fill="#38273E" opacity="0.92" />
                <circle cx="600" cy="270" r="86" fill="none" stroke="#4B3554" strokeWidth="2" opacity="0.7" />
                <circle cx="600" cy="270" r="98" fill="none" stroke="#4B3554" strokeWidth="10" opacity="0.12" />
                <text
                  x="600"
                  y="262"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="18"
                  fontWeight="600"
                  fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
                >
                  {centerLabel.split(" ").map((word, idx) => (
                    <tspan key={idx} x="600" dy={idx === 0 ? 0 : 22}>
                      {word}
                    </tspan>
                  ))}
                </text>
              </g>

              {/* Left labels (pains) */}
              <g
                fill="rgba(255,255,255,0.78)"
                fontSize="16"
                fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
              >
                {[110, 190, 270, 350, 430].map((y, i) => {
                  const p = painItems[i];
                  if (!p) return null;
                  const x = 160;
                  const lines = splitPainLabel(p);
                  const baseY = y - (lines.length - 1) * 10;
                  return (
                    <text key={`pain-label-${i}`} x={x} y={baseY} textAnchor="end">
                      {lines.map((ln, idx) => (
                        <tspan key={idx} x={x} dy={idx === 0 ? 0 : 20}>
                          {ln}
                        </tspan>
                      ))}
                    </text>
                  );
                })}
              </g>

              {/* Right labels (deliverables) */}
              <g
                fill="rgba(255,255,255,0.88)"
                fontSize="16"
                fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
              >
                {tangibleItems.slice(0, 5).map((raw, i) => {
                  const lines = String(raw).split("\n");
                  const yList = [110, 190, 270, 350, 430];
                  const y = yList[i] ?? 110 + i * 80;
                  return (
                    <text key={`out-label-${i}`} x={1000} y={y} textAnchor="start">
                      {lines.map((ln, idx) => (
                        <tspan key={idx} x={1000} dy={idx === 0 ? 0 : 20}>
                          {ln}
                        </tspan>
                      ))}
                    </text>
                  );
                })}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}