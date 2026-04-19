const steps = [
  { index: "01", letter: "A", label: "Assess", fn: "assess()", description: "We listen before we advise. Stakeholder interviews, landscape analysis, and an honest look at where you are today." },
  { index: "02", letter: "M", label: "Map", fn: "map()", description: "We build the roadmap together. Clear priorities, real timelines, and a plan your team helped shape so they own it." },
  { index: "03", letter: "B", label: "Build", fn: "build()", description: "We develop the frameworks, tools, and capabilities your team needs. Not a deck you\u2019ll never open. Functional tools." },
  { index: "04", letter: "L", label: "Launch", fn: "launch()", description: "We put the plan into action alongside your team. Facilitation, coaching, and hands-on support from day one." },
  { index: "05", letter: "E", label: "Evolve", fn: "evolve()", description: "We stay as your strategy adapts. Ongoing iteration, capability building, and support as your team grows." },
];

export function InstrumentMethodology() {
  return (
    <section
      id="method"
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-20 md:pb-32"
    >
      <div className="grid-fine" />
      <div className="relative z-[2] max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-28">
          <div className="col-span-12 md:col-span-4 scroll-up">
            <span className="meta text-[color:var(--copper)] prompt">
              section.method
            </span>
            <p className="mono meta-sm text-[color:var(--ink-faint)] mt-3">02 / 04</p>
          </div>
          <h2 className="col-span-12 md:col-span-8 serif font-light text-[clamp(32px,4.6vw,64px)] leading-[1.08] text-[color:var(--ink)] tracking-[-0.02em] scroll-up">
            We named the company after the process.
            <br />
            <span className="italic text-[color:var(--copper)]">
              Or maybe it was the other way around.
            </span>
          </h2>
        </div>

        {/* Function-call style list */}
        <ol className="border-t border-[color:var(--hairline)]">
          {steps.map((step) => (
            <li
              key={step.letter}
              className="py-10 md:py-14 border-b border-[color:var(--hairline)] grid grid-cols-12 gap-x-8 gap-y-4 items-baseline group scroll-up"
            >
              <div className="col-span-12 md:col-span-2">
                <span className="mono meta-sm text-[color:var(--ink-faint)]">
                  <span className="text-[color:var(--copper)]">const</span> step_
                  <span className="text-[color:var(--copper)]">{step.index}</span>
                </span>
              </div>
              <div className="col-span-12 md:col-span-4 flex items-baseline gap-4">
                <span className="serif font-light text-[40px] md:text-[56px] leading-none text-[color:var(--copper)] tracking-tight">
                  {step.letter}
                </span>
                <div>
                  <span className="serif font-light text-[24px] md:text-[32px] text-[color:var(--ink)] tracking-[-0.015em] transition-colors duration-500 group-hover:text-[color:var(--copper)]">
                    {step.label.slice(1)}
                  </span>
                  <p className="mono meta-sm text-[color:var(--ink-faint)] mt-1">
                    {step.fn}
                  </p>
                </div>
              </div>
              <p className="col-span-12 md:col-span-6 text-[15px] md:text-[16px] text-[color:var(--ink-soft)] leading-[1.7]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Return line — little tech flourish */}
        <p className="mt-8 mono meta-sm text-[color:var(--ink-faint)]">
          <span className="text-[color:var(--copper)]">return</span> progress.compounded;
        </p>
      </div>
    </section>
  );
}
