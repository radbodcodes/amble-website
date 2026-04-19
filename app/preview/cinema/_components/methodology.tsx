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
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-20 md:pb-32 bg-[color:var(--paper-deep)]"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="mb-20 md:mb-28 max-w-[900px] scroll-up">
          <span className="meta text-[color:var(--copper-pale)]">
            · Act II · Method ·
          </span>
          <h2 className="mt-8 serif font-light text-[clamp(40px,6vw,88px)] leading-[1.04] text-white tracking-[-0.025em]">
            We named the company after the process.
            <br />
            <span className="italic text-[color:var(--copper)]">
              Or maybe it was the other way around.
            </span>
          </h2>
        </div>

        {/* Film-strip style steps — horizontal rhythm */}
        <ol className="grid grid-cols-12 gap-y-0 border-t border-white/10">
          {steps.map((step, i) => (
            <li
              key={step.letter}
              className="col-span-12 py-12 md:py-16 border-b border-white/10 grid grid-cols-12 gap-x-8 gap-y-4 items-baseline group scroll-up"
            >
              <span className="col-span-2 md:col-span-1 meta-sm text-white/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="col-span-10 md:col-span-4 flex items-baseline gap-4 md:gap-6">
                <span
                  className="serif font-light text-[72px] md:text-[120px] leading-[0.85] tracking-tight"
                  style={{ color: "var(--copper)" }}
                >
                  {step.letter}
                </span>
                <span className="serif font-light text-[28px] md:text-[40px] text-white tracking-[-0.02em] transition-colors duration-500 group-hover:text-[color:var(--copper)]">
                  {step.label.slice(1)}
                </span>
              </div>
              <p className="col-span-12 md:col-span-7 text-[15px] md:text-[17px] text-white/65 leading-[1.75]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
