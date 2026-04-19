const outcomes = [
  {
    index: "01",
    id: "ai.strategy",
    tag: "strategy",
    forLine: "leaders who need a concrete ai plan",
    headline: "AI Strategy and Implementation",
    description:
      "Most companies are experimenting with AI tools but lack a real strategy. We assess where AI makes the biggest impact, build the roadmap, set up the systems, and train your team to run them.",
    deliverables: ["roadmap", "systems", "training", "governance"],
  },
  {
    index: "02",
    id: "planning.transformation",
    tag: "planning",
    forLine: "orgs ready for their next stage of growth",
    headline: "Strategic Planning and Transformation",
    description:
      "Growth stalls when the vision is unclear or the plan doesn\u2019t hold. We facilitate structured engagements that produce a clear vision, real priorities, and an action plan your team can move on.",
    deliverables: ["vision", "priorities", "plan", "cadence"],
  },
  {
    index: "03",
    id: "training.communication",
    tag: "training",
    forLine: "teams who aim to perform at higher levels",
    headline: "Team Training and Communication",
    description:
      "Strategy fails when teams can\u2019t deliver it together. We run workshops on communication, pitch skills, and audience analysis that give your team practical tools they can use the same day.",
    deliverables: ["workshops", "playbooks", "coaching", "frameworks"],
  },
  {
    index: "04",
    id: "advisory.embedded",
    tag: "advisory",
    forLine: "companies that want a partner, not a consultant",
    headline: "Embedded Advisory",
    description:
      "We don\u2019t hand over a deck and disappear. We embed with your team through execution, providing ongoing coaching, facilitation, and strategic support as the work evolves and grows.",
    deliverables: ["embedded", "coaching", "facilitation", "continuity"],
  },
];

export function InstrumentOutcomes() {
  return (
    <section
      id="practice"
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-16 md:pb-24"
    >
      <div className="grid-fine" />
      <div className="relative z-[2] max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-28">
          <div className="col-span-12 md:col-span-4 scroll-up">
            <span className="meta text-[color:var(--copper)] prompt">
              section.practice
            </span>
            <p className="mono meta-sm text-[color:var(--ink-faint)] mt-3">
              01 / 04
            </p>
          </div>
          <h2 className="col-span-12 md:col-span-8 serif font-light text-[clamp(32px,4.6vw,64px)] leading-[1.08] text-[color:var(--ink)] tracking-[-0.02em] scroll-up">
            AI is moving fast. Your{" "}
            <span className="italic text-[color:var(--copper)]">strategy</span>,
            your{" "}
            <span className="italic text-[color:var(--copper)]">vision</span>,
            and your team need to keep pace.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[color:var(--hairline)]">
          {outcomes.map((item, i) => (
            <article
              key={item.index}
              className={`card group relative p-8 md:p-12 lg:p-14 scroll-up ${
                i % 2 === 0 ? "md:border-r border-[color:var(--hairline)]" : ""
              } border-b border-[color:var(--hairline)]`}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="meta-sm text-[color:var(--ink-faint)]">
                  <span className="text-[color:var(--copper)]">[{item.index}]</span>{" "}
                  {item.id}
                </span>
                <svg
                  className="card-arrow text-[color:var(--copper)]"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  aria-hidden
                >
                  <path d="M13 1L19 7M19 7L13 13M19 7H0" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>

              <p className="meta-sm text-[color:var(--ink-faint)] mb-4">
                target_audience: {item.forLine}
              </p>
              <h3 className="serif font-light text-[28px] md:text-[34px] leading-[1.12] text-[color:var(--ink)] mb-6 max-w-[420px]">
                {item.headline}
              </h3>
              <p className="text-[15px] md:text-[16px] text-[color:var(--ink-soft)] leading-[1.75] max-w-[460px] mb-8">
                {item.description}
              </p>

              {/* Deliverables list — tech-style metadata */}
              <div className="pt-6 border-t border-[color:var(--grid)] flex flex-wrap gap-x-4 gap-y-2">
                {item.deliverables.map((d) => (
                  <span
                    key={d}
                    className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-faint)]"
                  >
                    <span className="text-[color:var(--copper)]">+</span> {d}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
