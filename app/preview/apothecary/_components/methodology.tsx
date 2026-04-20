const steps = [
  {
    n: "01",
    letter: "A",
    label: "Assess",
    duration: "Week 1–2",
    method: "Stakeholder interviews (n = 8–12) · landscape scan · artifact review.",
    description:
      "We listen before we advise. An honest look at where you are today.",
  },
  {
    n: "02",
    letter: "M",
    label: "Map",
    duration: "Week 3–4",
    method: "Priority framework · roadmap draft · quarterly milestones.",
    description:
      "Clear priorities, real timelines, and a plan your team helped shape so they own it.",
  },
  {
    n: "03",
    letter: "B",
    label: "Build",
    duration: "Month 2–3",
    method: "Frameworks · internal tools · system documentation.",
    description:
      "The frameworks, tools, and capabilities your team needs. Not a deck you will never open.",
  },
  {
    n: "04",
    letter: "L",
    label: "Launch",
    duration: "Month 3–4",
    method: "Facilitation · coaching · hands-on support.",
    description:
      "We put the plan into action alongside your team. From day one.",
  },
  {
    n: "05",
    letter: "E",
    label: "Evolve",
    duration: "Ongoing",
    method: "Monthly cadence · quarterly review · capability deepening.",
    description:
      "We stay as your strategy adapts. Ongoing iteration and support.",
  },
];

export function ApothecaryMethodology() {
  return (
    <section
      id="method"
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-24 md:pb-32"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="mb-20 md:mb-28 scroll-fade max-w-[900px]">
          <p className="data text-[color:var(--amber)] mb-8">
            PART II · THE PROTOCOL
          </p>
          <h2 className="serif text-[color:var(--ink)] text-[clamp(36px,5.5vw,80px)] leading-[1.05] tracking-[-0.015em]">
            AMBLE — a five-phase
            <span className="italic" style={{ color: "var(--amber)" }}>
              {" "}protocol,{" "}
            </span>
            documented and repeatable.
          </h2>
        </div>

        {/* Specimen table with phases */}
        <div className="border-t-2 border-[color:var(--ink)]">
          <div className="grid grid-cols-12 gap-4 px-2 py-4 border-b border-[color:var(--rule)]">
            <span className="col-span-1 data text-[color:var(--ink-faint)]">№</span>
            <span className="col-span-1 data text-[color:var(--ink-faint)]">Key</span>
            <span className="col-span-2 data text-[color:var(--ink-faint)]">Phase</span>
            <span className="col-span-2 data text-[color:var(--ink-faint)]">Duration</span>
            <span className="col-span-6 data text-[color:var(--ink-faint)]">Method &amp; Description</span>
          </div>

          {steps.map((step) => (
            <div
              key={step.n}
              className="grid grid-cols-12 gap-4 px-2 py-8 md:py-10 border-b border-[color:var(--hairline)] scroll-fade items-start"
            >
              <span className="col-span-1 mono text-[14px] text-[color:var(--amber)] pt-3">
                {step.n}
              </span>
              <span
                className="col-span-1 serif text-[48px] md:text-[56px] leading-none"
                style={{ color: "var(--amber)" }}
              >
                {step.letter}
              </span>
              <div className="col-span-2">
                <p className="serif text-[22px] md:text-[28px] leading-[1.1] text-[color:var(--ink)]">
                  {step.label}
                </p>
              </div>
              <div className="col-span-2">
                <p className="mono text-[12px] text-[color:var(--ink)] pt-3 tracking-[0.08em]">
                  {step.duration}
                </p>
              </div>
              <div className="col-span-6">
                <p className="serif text-[17px] text-[color:var(--ink)] leading-[1.6] mb-3">
                  {step.description}
                </p>
                <p className="mono text-[12px] text-[color:var(--ink-faint)] leading-[1.75]">
                  {step.method}
                </p>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-12 gap-4 px-2 py-4 border-t-2 border-[color:var(--ink)]">
            <span className="col-span-12 data text-[color:var(--ink-faint)] text-right">
              End of Protocol · AMBLE v. 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
