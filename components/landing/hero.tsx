import { Button } from "@/components/ui/button";
import { ArrowRight, Bolt, Target, Users } from "lucide-react";

const AUDIENCE = ["Owners", "CEOs", "C-Level", "COO", "CPO", "HRD"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36">
      {/* Dark “Selene” background: glow + subtle grid + stars */}
      <div className="pointer-events-none absolute inset-0">
        {/* base */}
        <div className="absolute inset-0 bg-[#060611]" />
        {/* top glow */}
        <div className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        {/* secondary glow */}
        <div className="absolute -top-10 left-1/3 h-[360px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:96px_96px]" />
        {/* stars */}
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:26px_26px]" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT (content) */}
          <div className="lg:col-span-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-fuchsia-300" />
              <span>Trusted by leadership teams worldwide</span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-balance text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="block text-white">Turn Strategy Chaos</span>
              <span className="block text-[#E9C7FF]">Into Focused Action</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Facilitated strategic sessions that align your leadership team, set clear priorities, and produce actionable plans—in just 1–2 days.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="h-12 rounded-full px-7 text-[15px] font-semibold text-[#0B0712]
                bg-gradient-to-b from-[#F0C7FF] to-[#C784FF]
                shadow-[0_18px_70px_rgba(199,132,255,0.28)]
                hover:opacity-90"
              >
                Calculate Price <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-7 text-[15px] font-semibold
                border-white/15 bg-white/0 text-white/85
                hover:bg-white/5 hover:text-white"
              >
                Request a Consultation
              </Button>
            </div>

            <p className="mt-4 text-xs text-white/45 sm:text-sm">
              Send an estimate request. We&apos;ll confirm scope and propose the
              best format.
            </p>

            {/* Bullets */}
            <ul className="mt-6 space-y-3 text-sm text-white/80 sm:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Bolt className="h-4 w-4 text-fuchsia-200" />
                </span>
                <span>Clarity on direction in 1–2 weeks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Target className="h-4 w-4 text-fuchsia-200" />
                </span>
                <span>Measurable goals and key metrics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Users className="h-4 w-4 text-fuchsia-200" />
                </span>
                <span>Team aligned with clear ownership</span>
              </li>
            </ul>

            {/* Audience pills */}
            <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-white/50">Designed for:</span>
              {AUDIENCE.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/75 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT (placeholder only) */}
          <div className="lg:col-span-6">
            <div
              aria-hidden="true"
              className="hidden lg:block h-[420px] w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
