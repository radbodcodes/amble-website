const outcomes = [
  {
    code: "01",
    tag: "Strategy",
    headline: "AI Strategy and Implementation",
    description:
      "Most companies are experimenting with AI tools but lack a real strategy. We assess where AI makes the biggest impact, build the roadmap, set up the systems, and train your team to run them.",
  },
  {
    code: "02",
    tag: "Planning",
    headline: "Strategic Planning and Transformation",
    description:
      "Growth stalls when the vision is unclear or the plan doesn\u2019t hold. We facilitate structured engagements that produce a clear vision, real priorities, and an action plan your team can move on.",
  },
  {
    code: "03",
    tag: "Training",
    headline: "Team Training and Communication",
    description:
      "Strategy fails when teams can\u2019t deliver it together. We run workshops on communication, pitch skills, and audience analysis that give your team practical tools they can use the same day.",
  },
  {
    code: "04",
    tag: "Advisory",
    headline: "Embedded Advisory",
    description:
      "We don\u2019t hand over a deck and disappear. We embed with your team through execution, providing ongoing coaching, facilitation, and strategic support as the work evolves and grows.",
  },
];

export function CinemaOutcomes() {
  return (
    <section
      id="practice"
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-16 md:pb-24"
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Title card */}
        <div className="mb-20 md:mb-28 max-w-[920px] scroll-up">
          <div className="flex items-center gap-6 mb-8">
            <span className="data text-[color:var(--azure-glow)]">
              SEQ.02 / PRACTICE
            </span>
            <span className="flex-1 h-px bg-[color:var(--hairline-cool)]" />
            <span className="data-num text-[11px] text-[color:var(--azure-glow)]/70">
              04 DISCIPLINES
            </span>
          </div>
          <h2 className="serif font-light text-[clamp(40px,6.2vw,92px)] leading-[1.02] text-[color:var(--paper)] tracking-[-0.03em]">
            AI is moving fast. Your{" "}
            <span className="italic text-[color:var(--copper-glow)]">strategy</span>,
            your{" "}
            <span className="italic text-[color:var(--copper-glow)]">vision</span>,
            and your team need to keep pace.
          </h2>
        </div>

        {/* Plates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {outcomes.map((item, i) => (
            <a
              key={item.code}
              href="#contact"
              className={`card card-link group relative border border-[color:var(--hairline)] p-8 md:p-12 bg-[color:var(--ink-soft)]/30 scroll-up ${
                i % 2 === 1 ? "md:mt-16" : ""
              }`}
            >
              {/* Discipline header — code + tag + orbital mark */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <span className="data-num text-[13px] text-[color:var(--azure-glow)]">
                    {item.code}
                  </span>
                  <span className="w-4 h-px bg-[color:var(--azure-glow)]/50" />
                  <span className="data text-[color:var(--copper-pale)]">
                    {item.tag}
                  </span>
                </div>
                <svg viewBox="0 0 24 24" width="24" height="24" className="opacity-60">
                  <circle cx="12" cy="12" r="10" stroke="var(--copper)" strokeWidth="0.6" fill="none" />
                  <circle cx="12" cy="12" r="1.5" fill="var(--copper-glow)" />
                </svg>
              </div>
              <h3 className="serif font-light text-[28px] md:text-[38px] leading-[1.1] text-[color:var(--paper)] mb-6 max-w-[420px] tracking-[-0.025em]">
                {item.headline}
              </h3>
              <p className="text-[15px] md:text-[16px] text-[color:var(--paper)]/75 leading-[1.75] max-w-[460px] mb-8">
                {item.description}
              </p>
              <span className="card-cta link-inline inline-flex items-baseline gap-3 text-[19px] md:text-[21px]">
                <span>Learn more</span>
                <svg
                  className="arrow"
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  aria-hidden
                >
                  <path d="M13 1L17 5M17 5L13 9M17 5H0" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
