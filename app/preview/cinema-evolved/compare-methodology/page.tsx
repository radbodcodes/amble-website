import { JetBrains_Mono, Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "../cinema.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-cinema",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cinema-serif",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinema-data",
  display: "swap",
});

const steps = [
  { letter: "A", label: "Assess", description: "We listen before we advise. Stakeholder interviews, landscape analysis, and an honest look at where you are today." },
  { letter: "M", label: "Map", description: "We build the roadmap together. Clear priorities, real timelines, and a plan your team helped shape so they own it." },
  { letter: "B", label: "Build", description: "We develop the frameworks, tools, and capabilities your team needs. Not a deck you\u2019ll never open. Functional tools." },
  { letter: "L", label: "Launch", description: "We put the plan into action alongside your team. Facilitation, coaching, and hands-on support from day one." },
  { letter: "E", label: "Evolve", description: "We stay as your strategy adapts. Ongoing iteration, capability building, and support as your team grows." },
];

function Orb({ letter, size = "md" }: { letter: string; size?: "sm" | "md" | "lg" }) {
  const px = size === "lg" ? 180 : size === "md" ? 140 : 100;
  const fontPx = size === "lg" ? 100 : size === "md" ? 76 : 54;
  return (
    <div
      className="relative flex items-center justify-center flex-shrink-0"
      style={{ width: px, height: px }}
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 orbit-slow">
        <circle cx="100" cy="100" r="96" stroke="var(--azure-glow)" strokeWidth="0.6" fill="none" strokeDasharray="2 6" opacity="0.6" />
        <circle cx="100" cy="4" r="2" fill="var(--copper-glow)" />
      </svg>
      <svg viewBox="0 0 200 200" className="absolute inset-0 orbit">
        <circle cx="100" cy="100" r="78" stroke="var(--copper)" strokeWidth="0.5" fill="none" opacity="0.5" />
      </svg>
      <span
        className="serif font-light leading-none tracking-tight relative"
        style={{ color: "var(--copper-glow)", fontSize: fontPx }}
      >
        {letter}
      </span>
    </div>
  );
}

function VariantLabel({ tag, title, note }: { tag: string; title: string; note: string }) {
  return (
    <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-14 pt-20 pb-6">
      <div className="flex items-baseline gap-5 mb-3">
        <span className="data text-[color:var(--copper-glow)]">{tag}</span>
        <span className="flex-1 h-px bg-[color:var(--hairline-cool)]" />
      </div>
      <h3 className="serif font-light text-[36px] md:text-[48px] text-[color:var(--paper)] tracking-[-0.025em]">
        {title}
      </h3>
      <p className="mt-2 text-[14px] text-[color:var(--paper)]/60 max-w-[640px]">
        {note}
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   VARIANT A — 3-up / 2-up grid, each orb paired with its description
   Row 1: A M B   Row 2: L E (centered with gutters)
   ────────────────────────────────────────────────────────────── */
function VariantA() {
  return (
    <section className="slate-section relative px-6 md:px-10 lg:px-14 pt-10 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--azure-glow) 1px, transparent 1px), linear-gradient(90deg, var(--azure-glow) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative max-w-[1320px] mx-auto">
        <div className="mb-12 max-w-[920px]">
          <div className="flex items-center gap-6 mb-6">
            <span className="data text-[color:var(--azure-glow)]">SEQ.03 / METHOD</span>
            <span className="flex-1 h-px bg-[color:var(--hairline-cool)]" />
            <span className="data-num text-[11px] text-[color:var(--azure-glow)]/70">05 PHASES</span>
          </div>
          <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1.04] text-[color:var(--paper)] tracking-[-0.025em]">
            We named the company after the process.
            <br />
            <span className="italic text-[color:var(--copper-glow)]">
              Or maybe it was the other way around.
            </span>
          </h2>
        </div>

        {/* Row 1: A M B */}
        <div className="grid grid-cols-12 gap-8 md:gap-10 border-t border-[color:var(--hairline-cool)] pt-10">
          {steps.slice(0, 3).map((step, i) => (
            <article key={step.letter} className="col-span-12 md:col-span-4 flex flex-col">
              <Orb letter={step.letter} size="md" />
              <span className="data-num text-[10px] text-[color:var(--azure-glow)]/70 mt-5 mb-1">
                PHASE {String(i + 1).padStart(2, "0")} / 05
              </span>
              <h3 className="serif font-light text-[28px] md:text-[34px] text-[color:var(--paper)] tracking-[-0.02em] leading-none mb-4">
                {step.label}
              </h3>
              <p className="text-[14px] md:text-[15px] text-[color:var(--paper)]/75 leading-[1.7]">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* Row 2: L E centered with gutters */}
        <div className="grid grid-cols-12 gap-8 md:gap-10 border-t border-[color:var(--hairline-cool)] pt-10 mt-10">
          <div className="hidden md:block md:col-span-2" />
          {steps.slice(3).map((step, i) => (
            <article key={step.letter} className="col-span-12 md:col-span-4 flex flex-col">
              <Orb letter={step.letter} size="md" />
              <span className="data-num text-[10px] text-[color:var(--azure-glow)]/70 mt-5 mb-1">
                PHASE {String(i + 4).padStart(2, "0")} / 05
              </span>
              <h3 className="serif font-light text-[28px] md:text-[34px] text-[color:var(--paper)] tracking-[-0.02em] leading-none mb-4">
                {step.label}
              </h3>
              <p className="text-[14px] md:text-[15px] text-[color:var(--paper)]/75 leading-[1.7]">
                {step.description}
              </p>
            </article>
          ))}
          <div className="hidden md:block md:col-span-2" />
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   VARIANT B — Orbs as poster top, descriptions as endnotes below
   Row 1: A M B (orbs only)   Row 2: L E (orbs only)
   Descriptions in 2-column paragraph list underneath
   ────────────────────────────────────────────────────────────── */
function VariantB() {
  return (
    <section className="slate-section relative px-6 md:px-10 lg:px-14 pt-10 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--azure-glow) 1px, transparent 1px), linear-gradient(90deg, var(--azure-glow) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative max-w-[1320px] mx-auto">
        <div className="mb-12 max-w-[920px]">
          <div className="flex items-center gap-6 mb-6">
            <span className="data text-[color:var(--azure-glow)]">SEQ.03 / METHOD</span>
            <span className="flex-1 h-px bg-[color:var(--hairline-cool)]" />
            <span className="data-num text-[11px] text-[color:var(--azure-glow)]/70">05 PHASES</span>
          </div>
          <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1.04] text-[color:var(--paper)] tracking-[-0.025em]">
            We named the company after the process.
            <br />
            <span className="italic text-[color:var(--copper-glow)]">
              Or maybe it was the other way around.
            </span>
          </h2>
        </div>

        {/* Orb poster — 3 + 2 rows */}
        <div className="border-t border-b border-[color:var(--hairline-cool)] py-14 mb-12">
          <div className="flex flex-wrap justify-center md:justify-between items-end gap-10 md:gap-4 mb-12">
            {steps.slice(0, 3).map((step, i) => (
              <div key={step.letter} className="flex flex-col items-center">
                <Orb letter={step.letter} size="lg" />
                <span className="data-num text-[10px] text-[color:var(--azure-glow)]/70 mt-5">
                  PHASE {String(i + 1).padStart(2, "0")}
                </span>
                <span className="serif font-light italic text-[22px] md:text-[26px] text-[color:var(--paper)] mt-1">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-20 md:gap-40">
            {steps.slice(3).map((step, i) => (
              <div key={step.letter} className="flex flex-col items-center">
                <Orb letter={step.letter} size="lg" />
                <span className="data-num text-[10px] text-[color:var(--azure-glow)]/70 mt-5">
                  PHASE {String(i + 4).padStart(2, "0")}
                </span>
                <span className="serif font-light italic text-[22px] md:text-[26px] text-[color:var(--paper)] mt-1">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Endnotes — descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8 max-w-[1080px] mx-auto">
          {steps.map((step, i) => (
            <div key={step.letter} className="flex gap-5">
              <span className="data-num text-[11px] text-[color:var(--copper-glow)] pt-1 w-12 flex-shrink-0">
                {String(i + 1).padStart(2, "0")} · {step.letter}
              </span>
              <p className="text-[14px] md:text-[15px] text-[color:var(--paper)]/75 leading-[1.7] flex-1">
                <span className="serif italic text-[color:var(--paper)]">{step.label}.</span>{" "}
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   VARIANT C — Offset 3/2 with descriptions beside each orb
   Row 1: A M B flush-left   Row 2: L E offset right
   ────────────────────────────────────────────────────────────── */
function VariantC() {
  return (
    <section className="slate-section relative px-6 md:px-10 lg:px-14 pt-10 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--azure-glow) 1px, transparent 1px), linear-gradient(90deg, var(--azure-glow) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative max-w-[1320px] mx-auto">
        <div className="mb-12 max-w-[920px]">
          <div className="flex items-center gap-6 mb-6">
            <span className="data text-[color:var(--azure-glow)]">SEQ.03 / METHOD</span>
            <span className="flex-1 h-px bg-[color:var(--hairline-cool)]" />
            <span className="data-num text-[11px] text-[color:var(--azure-glow)]/70">05 PHASES</span>
          </div>
          <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1.04] text-[color:var(--paper)] tracking-[-0.025em]">
            We named the company after the process.
            <br />
            <span className="italic text-[color:var(--copper-glow)]">
              Or maybe it was the other way around.
            </span>
          </h2>
        </div>

        {/* Row 1: A M B — flush left, cols 1-9 */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 border-t border-[color:var(--hairline-cool)] pt-8">
          {steps.slice(0, 3).map((step, i) => (
            <article key={step.letter} className="col-span-12 md:col-span-4">
              <div className="flex items-start gap-4 md:gap-5">
                <Orb letter={step.letter} size="sm" />
                <div className="flex-1 pt-1">
                  <span className="data-num text-[10px] text-[color:var(--azure-glow)]/70 block mb-1">
                    PHASE {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="serif font-light text-[22px] md:text-[26px] text-[color:var(--paper)] tracking-[-0.02em] leading-none mb-3">
                    {step.label}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[color:var(--paper)]/75 leading-[1.7]">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Row 2: L E — offset right, cols 4-12, creates diagonal flow */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 border-t border-[color:var(--hairline-cool)] pt-8 mt-10">
          <div className="hidden md:block md:col-span-3" />
          {steps.slice(3).map((step, i) => (
            <article key={step.letter} className="col-span-12 md:col-span-4">
              <div className="flex items-start gap-4 md:gap-5">
                <Orb letter={step.letter} size="sm" />
                <div className="flex-1 pt-1">
                  <span className="data-num text-[10px] text-[color:var(--azure-glow)]/70 block mb-1">
                    PHASE {String(i + 4).padStart(2, "0")}
                  </span>
                  <h3 className="serif font-light text-[22px] md:text-[26px] text-[color:var(--paper)] tracking-[-0.02em] leading-none mb-3">
                    {step.label}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[color:var(--paper)]/75 leading-[1.7]">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
          <div className="hidden md:block md:col-span-1" />
        </div>
      </div>
    </section>
  );
}

export default function CompareMethodology() {
  return (
    <div className={`${mono.variable} ${cormorant.variable} ${grotesk.variable} cinema-root`}>
      <main>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-14 pt-20 pb-4">
          <p className="data text-[color:var(--copper-glow)] mb-4">METHODOLOGY LAYOUT — COMPARISON</p>
          <h1 className="serif font-light italic text-[56px] md:text-[84px] leading-[0.96] text-[color:var(--paper)] tracking-[-0.03em]">
            Three ways to fit AMBLE onto two lines.
          </h1>
          <p className="mt-6 text-[15px] text-[color:var(--paper)]/65 max-w-[680px]">
            Scroll through. Each variant keeps the orbital rings, copper-glow letters,
            phase codes, azure grid, and slate overlay. Only the composition differs.
          </p>
        </div>

        <VariantLabel
          tag="VARIANT A"
          title="3-up / 2-up grid"
          note="Each cell pairs an orb with its own description. Row 2 (L E) centered between gutters. Cleanest grid read."
        />
        <VariantA />

        <VariantLabel
          tag="VARIANT B"
          title="Orbs as poster, descriptions as endnotes"
          note="Letters become a cinematic display piece. Descriptions live below in a two-column endnote block. Most dramatic."
        />
        <VariantB />

        <VariantLabel
          tag="VARIANT C"
          title="Offset 3/2 with diagonal flow"
          note="Row 2 shifts right — letters feel like the second line of a movie poster. Compact inline orb + copy per cell."
        />
        <VariantC />

        <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-14 py-20 text-center">
          <p className="data text-[color:var(--copper-glow)]/60">
            END OF COMPARISON
          </p>
        </div>
      </main>
    </div>
  );
}
