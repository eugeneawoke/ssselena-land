"use client";

import { useI18n } from "@/lib/i18n/context";
import { Check } from "lucide-react";

export function Deliverables() {
  const { t } = useI18n();
  const { mindmap } = t.deliverables;

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {t.deliverables.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.deliverables.subtitle}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Checklist */}
          <div className="space-y-4">
            {t.deliverables.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-4 transition-all hover:border-primary/30 hover:bg-card"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>

          {/* Mindmap */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-md"
              aria-label="Strategic Sessions Mindmap"
            >
              {/* Background glow */}
              <defs>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background circle */}
              <circle cx="200" cy="200" r="150" fill="url(#centerGlow)" />

              {/* Connection lines */}
              <g stroke="var(--border)" strokeWidth="1" fill="none" opacity="0.5">
                {/* Main connections */}
                <path d="M200,200 L200,80" className="animate-pulse" />
                <path d="M200,200 L320,240" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                <path d="M200,200 L80,240" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
                {/* Sub connections */}
                <path d="M200,200 L280,340" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                <path d="M200,200 L120,340" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
              </g>

              {/* Center node */}
              <g filter="url(#glow)">
                <circle cx="200" cy="200" r="50" fill="var(--card)" stroke="var(--primary)" strokeWidth="2" />
                <text
                  x="200"
                  y="195"
                  textAnchor="middle"
                  fill="var(--foreground)"
                  fontSize="11"
                  fontWeight="600"
                >
                  {mindmap.center.split(" ")[0]}
                </text>
                <text
                  x="200"
                  y="210"
                  textAnchor="middle"
                  fill="var(--foreground)"
                  fontSize="11"
                  fontWeight="600"
                >
                  {mindmap.center.split(" ")[1]}
                </text>
              </g>

              {/* Main nodes */}
              {/* Node 1 - Top */}
              <g>
                <circle cx="200" cy="65" r="35" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
                <text x="200" y="60" textAnchor="middle" fill="var(--muted-foreground)" fontSize="9">
                  {mindmap.nodes[0].split(" ").slice(0, 2).join(" ")}
                </text>
                <text x="200" y="72" textAnchor="middle" fill="var(--muted-foreground)" fontSize="9">
                  {mindmap.nodes[0].split(" ").slice(2).join(" ")}
                </text>
              </g>

              {/* Node 2 - Right */}
              <g>
                <circle cx="330" cy="220" r="40" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
                <text x="330" y="215" textAnchor="middle" fill="var(--muted-foreground)" fontSize="8">
                  {mindmap.nodes[1].split(" ").slice(0, 2).join(" ")}
                </text>
                <text x="330" y="227" textAnchor="middle" fill="var(--muted-foreground)" fontSize="8">
                  {mindmap.nodes[1].split(" ").slice(2).join(" ")}
                </text>
              </g>

              {/* Node 3 - Left */}
              <g>
                <circle cx="70" cy="220" r="35" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
                <text x="70" y="217" textAnchor="middle" fill="var(--muted-foreground)" fontSize="8">
                  {mindmap.nodes[2].split(" ").slice(0, 2).join(" ")}
                </text>
                <text x="70" y="228" textAnchor="middle" fill="var(--muted-foreground)" fontSize="8">
                  {mindmap.nodes[2].split(" ").slice(2).join(" ")}
                </text>
              </g>

              {/* Sub nodes */}
              <g>
                <circle cx="290" cy="340" r="28" fill="var(--secondary)" stroke="var(--border)" strokeWidth="1" />
                <text x="290" y="343" textAnchor="middle" fill="var(--muted-foreground)" fontSize="8">
                  {mindmap.subNodes[0]}
                </text>
              </g>

              <g>
                <circle cx="110" cy="340" r="32" fill="var(--secondary)" stroke="var(--border)" strokeWidth="1" />
                <text x="110" y="337" textAnchor="middle" fill="var(--muted-foreground)" fontSize="7">
                  {mindmap.subNodes[1].split(" ").slice(0, 2).join(" ")}
                </text>
                <text x="110" y="348" textAnchor="middle" fill="var(--muted-foreground)" fontSize="7">
                  {mindmap.subNodes[1].split(" ").slice(2).join(" ")}
                </text>
              </g>

              {/* Decorative stars */}
              {[
                { x: 50, y: 100, size: 2 },
                { x: 350, y: 80, size: 1.5 },
                { x: 380, y: 320, size: 2 },
                { x: 30, y: 320, size: 1.5 },
                { x: 200, y: 380, size: 2 },
              ].map((star, i) => (
                <circle
                  key={i}
                  cx={star.x}
                  cy={star.y}
                  r={star.size}
                  fill="var(--selene-star)"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
