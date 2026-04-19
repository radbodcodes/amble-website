const steps = [
  { roman: "I.", letter: "A", label: "Assess", description: "We listen before we advise. Stakeholder interviews, landscape analysis, and an honest look at where you are today." },
  { roman: "II.", letter: "M", label: "Map", description: "We build the roadmap together. Clear priorities, real timelines, and a plan your team helped shape so they own it." },
  { roman: "III.", letter: "B", label: "Build", description: "We develop the frameworks, tools, and capabilities your team needs. Not a deck you\u2019ll never open. Functional tools." },
  { roman: "IV.", letter: "L", label: "Launch", description: "We put the plan into action alongside your team. Facilitation, coaching, and hands-on support from day one." },
  { roman: "V.", letter: "E", label: "Evolve", description: "We stay as your strategy adapts. Ongoing iteration, capability building, and support as your team grows." },
];

export function EditorialMethodology() {
  return (
    <section id="method" className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-20 md:pb-32">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-20 md:mb-28 scroll-up">
          <span className="chapter text-[color:var(--accent)]">— Part Two · Method —</span>
          <h2 className="mt-8 display font-light text-[clamp(36px,5.5vw,80px)] leading-[1.06] text-[color:var(--ink)] tracking-[-0.02em] max-w-[1100px] mx-auto">
            We named the company after the process.
            <br />
            <span className="italic" style={{ color: "var(--accent)" }}>
              Or maybe it was the other way around.
            </span>
          </h2>
        </div>

        <hr className="double-rule mb-16 md:mb-20" />

        <ol className="space-y-16 md:space-y-24">
          {steps.map((step) => (
            <li key={step.roman} className="grid grid-cols-12 gap-x-8 md:gap-x-12 gap-y-6 scroll-up">
              <div className="col-span-12 md:col-span-3">
                <span className="chapter text-[color:var(--accent)]">{step.roman}</span>
                <p className="mt-2 display italic font-light text-[color:var(--ink-faint)] text-[18px]">
                  Step {step.roman.replace(".", "")}
                </p>
              </div>
              <div className="col-span-12 md:col-span-9 flex items-baseline gap-6 md:gap-10">
                <span
                  className="display font-light text-[80px] md:text-[120px] leading-[0.9] tracking-[-0.03em]"
                  style={{ color: "var(--accent)" }}
                >
                  {step.letter}
                </span>
                <div>
                  <h3 className="display font-light text-[36px] md:text-[48px] leading-[1.05] text-[color:var(--ink)] tracking-[-0.02em]">
                    {step.label}
                  </h3>
                  <p className="mt-6 serif text-[16px] md:text-[17px] text-[color:var(--ink-soft)] leading-[1.75] max-w-[540px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
