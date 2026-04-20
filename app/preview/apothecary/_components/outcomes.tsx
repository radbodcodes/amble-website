const outcomes = [
  {
    code: "§ 01 · STR",
    tag: "Strategy",
    headline: "AI Strategy and Implementation",
    description:
      "Most companies are experimenting with AI tools but lack a real strategy. We assess where AI makes the biggest impact, build the roadmap, set up the systems, and train your team to run them.",
    forLine: "For leaders who need a concrete AI plan.",
    indications:
      "Fragmented tool adoption; unclear ROI; pilots that do not scale.",
    method: "Audit · roadmap · systems build · enablement.",
  },
  {
    code: "§ 02 · PLN",
    tag: "Planning",
    headline: "Strategic Planning and Transformation",
    description:
      "Growth stalls when the vision is unclear or the plan does not hold. We facilitate structured engagements that produce a clear vision, real priorities, and an action plan your team can move on.",
    forLine: "For organizations ready for their next stage of growth.",
    indications: "Misaligned leadership; stalled initiatives; unclear priorities.",
    method: "Offsite facilitation · OKR structuring · quarterly cadence.",
  },
  {
    code: "§ 03 · TRN",
    tag: "Training",
    headline: "Team Training and Communication",
    description:
      "Strategy fails when teams cannot deliver it together. We run workshops on communication, pitch skills, and audience analysis that give your team practical tools they can use the same day.",
    forLine: "For teams who aim to perform at higher levels.",
    indications: "Talent without voice; pitches that miss; decks that over-explain.",
    method: "Workshop · coaching · repeatable toolkits.",
  },
  {
    code: "§ 04 · ADV",
    tag: "Advisory",
    headline: "Embedded Advisory",
    description:
      "We do not hand over a deck and disappear. We embed with your team through execution, providing ongoing coaching, facilitation, and strategic support as the work evolves and grows.",
    forLine: "For companies that want a partner, not a consultant.",
    indications: "Capability gap; need for on-call strategic thinking.",
    method: "Fractional · monthly retainer · multi-quarter.",
  },
];

export function ApothecaryOutcomes() {
  return (
    <section
      id="practice"
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-20 md:pb-28"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="mb-20 md:mb-28 scroll-fade max-w-[900px]">
          <p className="data text-[color:var(--amber)] mb-8">
            PART I · THE SERVICES
          </p>
          <h2 className="serif text-[color:var(--ink)] text-[clamp(36px,5.5vw,80px)] leading-[1.05] tracking-[-0.015em]">
            AI moves fast.
            <span className="italic" style={{ color: "var(--amber)" }}>
              {" "}Your strategy,{" "}
            </span>
            vision, and team must keep pace.
          </h2>
          <p className="mt-10 serif text-[18px] text-[color:var(--ink-soft)] leading-[1.7] max-w-[620px]">
            Four indications, four protocols. Each engagement begins with a
            documented intake and ends with capabilities the team can run
            without us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
          {outcomes.map((item) => (
            <article
              key={item.code}
              className="dossier p-8 md:p-10 scroll-fade"
            >
              <div className="flex items-baseline justify-between pb-5 mb-8 border-b border-[color:var(--hairline)]">
                <span className="data text-[color:var(--amber)]">
                  {item.code}
                </span>
                <span className="data text-[color:var(--ink-faint)]">
                  {item.tag}
                </span>
              </div>

              <h3 className="serif text-[28px] md:text-[34px] leading-[1.15] text-[color:var(--ink)] mb-5 tracking-[-0.01em]">
                {item.headline}
              </h3>
              <p className="serif italic text-[color:var(--amber)] mb-7 text-[17px]">
                {item.forLine}
              </p>
              <p className="serif text-[16px] md:text-[17px] text-[color:var(--ink-soft)] leading-[1.75] mb-10">
                {item.description}
              </p>

              <dl className="space-y-4 pt-6 border-t border-[color:var(--hairline)]">
                <div className="flex gap-6">
                  <dt className="data text-[color:var(--ink-faint)] w-28 shrink-0 pt-[3px]">
                    Indications
                  </dt>
                  <dd className="serif text-[14px] text-[color:var(--ink)] leading-[1.6]">
                    {item.indications}
                  </dd>
                </div>
                <div className="flex gap-6">
                  <dt className="data text-[color:var(--ink-faint)] w-28 shrink-0 pt-[3px]">
                    Method
                  </dt>
                  <dd className="mono text-[12px] text-[color:var(--ink)] leading-[1.7]">
                    {item.method}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
