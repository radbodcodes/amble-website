const outcomes = [
  {
    index: "001",
    tag: "Strategy",
    forLine: "Leaders who need a concrete AI plan",
    headline: "AI Strategy and Implementation",
    description:
      "Most companies are experimenting with AI tools but lack a real strategy. We assess where AI makes the biggest impact, build the roadmap, set up the systems, and train your team to run them.",
  },
  {
    index: "002",
    tag: "Planning",
    forLine: "Organizations ready for their next stage of growth",
    headline: "Strategic Planning and Transformation",
    description:
      "Growth stalls when the vision is unclear or the plan doesn\u2019t hold. We facilitate structured engagements that produce a clear vision, real priorities, and an action plan your team can move on.",
  },
  {
    index: "003",
    tag: "Training",
    forLine: "Teams who aim to perform at higher levels",
    headline: "Team Training and Communication",
    description:
      "Strategy fails when teams can\u2019t deliver it together. We run workshops on communication styles, pitch skills, and audience analysis that give your team practical tools they can use the same day.",
  },
  {
    index: "004",
    tag: "Advisory",
    forLine: "Companies that want a partner, not a consultant",
    headline: "Embedded Advisory",
    description:
      "We don\u2019t hand over a deck and disappear. We embed with your team through execution, providing ongoing coaching, facilitation, and strategic support as the work evolves and grows.",
  },
];

export function SophisticatedOutcomes() {
  return (
    <section
      id="practice"
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-16 md:pb-24"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-28">
          <div className="col-span-12 md:col-span-4 scroll-up">
            <span className="meta text-[color:var(--copper)]">
              I · Practice
            </span>
          </div>
          <h2 className="col-span-12 md:col-span-8 serif font-light text-[clamp(32px,4.6vw,64px)] leading-[1.08] text-[color:var(--ink)] tracking-[-0.02em] scroll-up">
            AI is moving fast. Your{" "}
            <span className="italic text-[color:var(--copper)]">strategy</span>,
            your{" "}
            <span className="italic text-[color:var(--copper)]">vision</span>,
            and your team need to keep pace.
          </h2>
        </div>

        {/* Outcomes grid — quiet, generous */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[color:var(--hairline)]">
          {outcomes.map((item, i) => (
            <article
              key={item.index}
              className={`card group relative p-8 md:p-12 lg:p-14 scroll-up ${
                i % 2 === 0
                  ? "md:border-r border-[color:var(--hairline)]"
                  : ""
              } border-b border-[color:var(--hairline)]`}
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-10">
                <span className="meta-sm text-[color:var(--ink-faint)]">
                  {item.index} · {item.tag}
                </span>
                <svg
                  className="card-arrow text-[color:var(--copper)]"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M13 1L19 7M19 7L13 13M19 7H0"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>

              <p className="text-[12px] text-[color:var(--ink-faint)] uppercase tracking-[0.16em] mb-4">
                For {item.forLine.toLowerCase()}
              </p>
              <h3 className="serif font-light text-[28px] md:text-[34px] leading-[1.12] text-[color:var(--ink)] mb-6 max-w-[420px]">
                {item.headline}
              </h3>
              <p className="text-[15px] md:text-[16px] text-[color:var(--ink-soft)] leading-[1.75] max-w-[460px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
