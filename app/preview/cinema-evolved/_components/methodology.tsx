const steps = [
  { letter: "A", label: "Assess", description: "We listen before we advise. Stakeholder interviews, landscape analysis, and an honest look at where you are today." },
  { letter: "M", label: "Map", description: "We build the roadmap together. Clear priorities, real timelines, and a plan your team helped shape so they own it." },
  { letter: "B", label: "Build", description: "We develop the frameworks, tools, and capabilities your team needs. Not a deck you\u2019ll never open. Functional tools." },
  { letter: "L", label: "Launch", description: "We put the plan into action alongside your team. Facilitation, coaching, and hands-on support from day one." },
  { letter: "E", label: "Evolve", description: "We stay as your strategy adapts. Ongoing iteration, capability building, and support as your team grows." },
];

export function CinemaMethodology() {
  return (
    <section
      id="method"
      className="slate-section relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-20 md:pb-32 overflow-hidden"
    >
      {/* Faint grid — architectural blueprint backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--azure-glow) 1px, transparent 1px), linear-gradient(90deg, var(--azure-glow) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto">
        <div className="mb-20 md:mb-28 max-w-[920px] scroll-up">
          <div className="flex items-center gap-6 mb-8">
            <span className="data text-[color:var(--azure-glow)]">
              SEQ.03 / METHOD
            </span>
            <span className="flex-1 h-px bg-[color:var(--hairline-cool)]" />
            <span className="data-num text-[11px] text-[color:var(--azure-glow)]/70">
              05 PHASES
            </span>
          </div>
          <h2 className="serif font-light text-[clamp(40px,6vw,88px)] leading-[1.04] text-[color:var(--paper)] tracking-[-0.025em]">
            We named the company after the process.
            <br />
            <span className="italic text-[color:var(--copper-glow)]">
              Or maybe it was the other way around.
            </span>
          </h2>
        </div>

        {/* Phase steps — orbital thin-line circle around each letter */}
        <ol className="grid grid-cols-12 gap-y-0 border-t border-[color:var(--hairline-cool)]">
          {steps.map((step, i) => (
            <li
              key={step.letter}
              className="col-span-12 py-14 md:py-20 border-b border-[color:var(--hairline-cool)] grid grid-cols-12 gap-x-8 gap-y-4 items-center group scroll-up"
            >
              {/* Orbital letter — thin ring + phase code */}
              <div className="col-span-12 md:col-span-5 flex items-center gap-6 md:gap-10">
                <div className="relative flex items-center justify-center w-[140px] h-[140px] md:w-[200px] md:h-[200px] flex-shrink-0">
                  <svg viewBox="0 0 200 200" className="absolute inset-0 orbit-slow">
                    <circle cx="100" cy="100" r="96" stroke="var(--azure-glow)" strokeWidth="0.6" fill="none" strokeDasharray="2 6" opacity="0.6" />
                    <circle cx="100" cy="4" r="2" fill="var(--copper-glow)" />
                  </svg>
                  <svg viewBox="0 0 200 200" className="absolute inset-0 orbit">
                    <circle cx="100" cy="100" r="78" stroke="var(--copper)" strokeWidth="0.5" fill="none" opacity="0.5" />
                  </svg>
                  <span
                    className="serif font-light text-[76px] md:text-[112px] leading-none tracking-tight relative"
                    style={{ color: "var(--copper-glow)" }}
                  >
                    {step.letter}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="data-num text-[11px] text-[color:var(--azure-glow)]/70 block mb-2">
                    PHASE {String(i + 1).padStart(2, "0")} / 05
                  </span>
                  <span className="serif font-light text-[28px] md:text-[42px] text-[color:var(--paper)] tracking-[-0.02em] transition-colors duration-500 group-hover:text-[color:var(--copper-glow)]">
                    {step.label}
                  </span>
                </div>
              </div>
              <p className="col-span-12 md:col-span-7 text-[15px] md:text-[17px] text-[color:var(--paper)]/75 leading-[1.75]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
