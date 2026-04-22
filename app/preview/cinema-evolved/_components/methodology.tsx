const steps = [
  { letter: "A", label: "Assess", description: "We listen before we advise. Stakeholder interviews, landscape analysis, and an honest look at where you are today." },
  { letter: "M", label: "Map", description: "We build the roadmap together. Clear priorities, real timelines, and a plan your team helped shape so they own it." },
  { letter: "B", label: "Build", description: "We develop the frameworks, tools, and capabilities your team needs. Not a deck you\u2019ll never open. Functional tools." },
  { letter: "L", label: "Launch", description: "We put the plan into action alongside your team. Facilitation, coaching, and hands-on support from day one." },
  { letter: "E", label: "Evolve", description: "We stay as your strategy adapts. Ongoing iteration, capability building, and support as your team grows." },
];

function Orb({ letter }: { letter: string }) {
  return (
    <div className="relative flex items-center justify-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] flex-shrink-0">
      <svg viewBox="0 0 200 200" className="absolute inset-0 orbit-slow">
        <circle cx="100" cy="100" r="96" stroke="var(--azure-glow)" strokeWidth="1" fill="none" strokeDasharray="3 5" opacity="0.85" />
        <circle cx="100" cy="4" r="3.5" fill="var(--copper-glow)" />
        <circle cx="100" cy="196" r="1.8" fill="var(--copper-glow)" opacity="0.75" />
      </svg>
      <svg viewBox="0 0 200 200" className="absolute inset-0 orbit">
        <circle cx="100" cy="100" r="78" stroke="var(--copper)" strokeWidth="0.9" fill="none" opacity="0.75" />
      </svg>
      <span
        className="serif font-light text-[64px] md:text-[76px] leading-none tracking-tight relative"
        style={{ color: "var(--copper-glow)" }}
      >
        {letter}
      </span>
    </div>
  );
}

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
        <div className="mb-16 md:mb-20 max-w-[920px] scroll-up">
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

        {/* Row 1: A M B */}
        <div className="grid grid-cols-12 gap-8 md:gap-10 border-t border-[color:var(--hairline-cool)] pt-12 md:pt-14">
          {steps.slice(0, 3).map((step, i) => (
            <article
              key={step.letter}
              className="col-span-12 md:col-span-4 flex flex-col scroll-up group"
            >
              <Orb letter={step.letter} />
              <span className="data-num text-[10px] text-[color:var(--azure-glow)]/70 mt-6 mb-1">
                PHASE {String(i + 1).padStart(2, "0")} / 05
              </span>
              <h3 className="serif font-light text-[30px] md:text-[36px] text-[color:var(--paper)] tracking-[-0.02em] leading-none mb-5 transition-colors duration-500 group-hover:text-[color:var(--copper-glow)]">
                {step.label}
              </h3>
              <p className="text-[14px] md:text-[15px] text-[color:var(--paper)]/75 leading-[1.75] max-w-[360px]">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* Row 2: L E — centered with gutters */}
        <div className="grid grid-cols-12 gap-8 md:gap-10 border-t border-[color:var(--hairline-cool)] pt-12 md:pt-14 mt-12 md:mt-14">
          <div className="hidden md:block md:col-span-2" />
          {steps.slice(3).map((step, i) => (
            <article
              key={step.letter}
              className="col-span-12 md:col-span-4 flex flex-col scroll-up group"
            >
              <Orb letter={step.letter} />
              <span className="data-num text-[10px] text-[color:var(--azure-glow)]/70 mt-6 mb-1">
                PHASE {String(i + 4).padStart(2, "0")} / 05
              </span>
              <h3 className="serif font-light text-[30px] md:text-[36px] text-[color:var(--paper)] tracking-[-0.02em] leading-none mb-5 transition-colors duration-500 group-hover:text-[color:var(--copper-glow)]">
                {step.label}
              </h3>
              <p className="text-[14px] md:text-[15px] text-[color:var(--paper)]/75 leading-[1.75] max-w-[360px]">
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
