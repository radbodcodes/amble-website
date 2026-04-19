const outcomes = [
  {
    chapter: "Chapter One",
    number: "I.",
    tag: "Strategy",
    headline: "AI Strategy and Implementation",
    description:
      "Most companies are experimenting with AI tools but lack a real strategy. We assess where AI makes the biggest impact, build the roadmap, set up the systems, and train your team to run them.",
    forLine: "For leaders who need a concrete AI plan.",
  },
  {
    chapter: "Chapter Two",
    number: "II.",
    tag: "Planning",
    headline: "Strategic Planning and Transformation",
    description:
      "Growth stalls when the vision is unclear or the plan doesn\u2019t hold. We facilitate structured engagements that produce a clear vision, real priorities, and an action plan your team can move on.",
    forLine: "For organizations ready for their next stage of growth.",
  },
  {
    chapter: "Chapter Three",
    number: "III.",
    tag: "Training",
    headline: "Team Training and Communication",
    description:
      "Strategy fails when teams can\u2019t deliver it together. We run workshops on communication, pitch skills, and audience analysis that give your team practical tools they can use the same day.",
    forLine: "For teams who aim to perform at higher levels.",
  },
  {
    chapter: "Chapter Four",
    number: "IV.",
    tag: "Advisory",
    headline: "Embedded Advisory",
    description:
      "We don\u2019t hand over a deck and disappear. We embed with your team through execution, providing ongoing coaching, facilitation, and strategic support as the work evolves and grows.",
    forLine: "For companies that want a partner, not a consultant.",
  },
];

export function EditorialOutcomes() {
  return (
    <section id="practice" className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-[1320px] mx-auto">
        {/* Chapter opener */}
        <div className="text-center mb-20 md:mb-28 scroll-up">
          <span className="chapter text-[color:var(--accent)]">— Part One · Practice —</span>
          <h2 className="mt-8 display font-light text-[clamp(36px,5.8vw,84px)] leading-[1.06] text-[color:var(--ink)] tracking-[-0.02em] max-w-[1100px] mx-auto">
            AI is moving fast. Your{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>strategy</span>,
            your{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>vision</span>,
            and your team need to keep pace.
          </h2>
        </div>

        <hr className="double-rule mb-16 md:mb-20" />

        {/* Chapters — long-form list with editorial rhythm */}
        <div className="grid grid-cols-12 gap-x-8 md:gap-x-12 gap-y-20 md:gap-y-28">
          {outcomes.map((item, i) => (
            <article
              key={item.number}
              className={`col-span-12 md:col-span-6 scroll-up ${
                i % 2 === 1 ? "md:mt-16" : ""
              }`}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="chapter text-[color:var(--accent)]">{item.chapter}</span>
                <span className="display italic text-[color:var(--ink-faint)] text-[18px]">
                  {item.tag}
                </span>
              </div>
              <h3 className="display font-light text-[32px] md:text-[44px] leading-[1.08] text-[color:var(--ink)] mb-6 tracking-[-0.015em]">
                <span className="display italic text-[color:var(--accent)] mr-3">
                  {item.number}
                </span>
                {item.headline}
              </h3>
              <p className="label text-[color:var(--accent)] mb-5 italic">
                {item.forLine}
              </p>
              <p className="serif text-[16px] md:text-[17px] text-[color:var(--ink-soft)] leading-[1.75] max-w-[520px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
