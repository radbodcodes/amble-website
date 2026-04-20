const outcomes = [
  {
    n: "01",
    tag: "Strategy",
    headline: "AI strategy that actually ships.",
    description:
      "Most companies are experimenting with AI tools but lack a real strategy. We assess where AI makes the biggest impact, build the roadmap, set up the systems, and train your team to run them.",
    forLine: "For leaders who need a concrete AI plan.",
    bg: "bg-cream-warm",
  },
  {
    n: "02",
    tag: "Planning",
    headline: "Planning that holds under pressure.",
    description:
      "Growth stalls when the vision is unclear or the plan does not hold. We facilitate structured engagements that produce a clear vision, real priorities, and an action plan your team can move on.",
    forLine: "For organizations ready for their next stage.",
    bg: "bg-coral",
  },
  {
    n: "03",
    tag: "Training",
    headline: "Teams that communicate better by Friday.",
    description:
      "Strategy fails when teams cannot deliver it together. We run workshops on communication, pitch skills, and audience analysis that give your team practical tools they can use the same day.",
    forLine: "For teams who aim to perform at higher levels.",
    bg: "bg-cream-warm",
  },
  {
    n: "04",
    tag: "Advisory",
    headline: "A partner, not another consultant.",
    description:
      "We do not hand over a deck and disappear. We embed with your team through execution, providing ongoing coaching, facilitation, and strategic support as the work evolves and grows.",
    forLine: "For companies that want skin in the game.",
    bg: "bg-ink",
  },
];

export function StatementOutcomes() {
  return (
    <section
      id="practice"
      className="relative px-6 md:px-10 lg:px-14 pt-24 md:pt-32 pb-20 md:pb-28"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16 md:mb-24 scroll-punch max-w-[1200px]">
          <span className="label text-[color:var(--coral-deep)] mb-6 inline-block">
            What we do · four ways
          </span>
          <h2 className="display text-[color:var(--ink)] text-[clamp(52px,10vw,180px)] leading-[0.86]">
            We move
            <br />
            <span style={{ color: "var(--coral)" }}>slow enough</span>
            <br />
            to get it right.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {outcomes.map((item) => (
            <article
              key={item.n}
              className={`${item.bg} pop border-2 border-[color:var(--ink)] rounded-[32px] p-8 md:p-12 scroll-punch ${
                item.bg === "bg-ink" ? "text-[color:var(--cream)]" : ""
              }`}
            >
              <div className="flex items-baseline justify-between mb-10">
                <span
                  className="number text-[72px] md:text-[96px]"
                  style={{
                    color:
                      item.bg === "bg-ink" ? "var(--coral)" : "var(--ink)",
                  }}
                >
                  {item.n}
                </span>
                <span
                  className="label"
                  style={{
                    color:
                      item.bg === "bg-ink"
                        ? "var(--coral-pale)"
                        : item.bg === "bg-coral"
                          ? "var(--ink)"
                          : "var(--coral-deep)",
                  }}
                >
                  {item.tag}
                </span>
              </div>

              <h3
                className={`display text-[32px] md:text-[44px] leading-[0.95] mb-8 ${
                  item.bg === "bg-ink"
                    ? "text-[color:var(--cream)]"
                    : "text-[color:var(--ink)]"
                }`}
              >
                {item.headline}
              </h3>

              <p
                className={`body-medium text-[16px] md:text-[17px] leading-[1.6] mb-8 ${
                  item.bg === "bg-ink"
                    ? "text-[color:var(--cream)]/90"
                    : "text-[color:var(--ink-soft)]"
                }`}
              >
                {item.description}
              </p>

              <div
                className={`pt-6 border-t-2 ${
                  item.bg === "bg-ink"
                    ? "border-[color:var(--cream)]/25"
                    : "border-[color:var(--ink)]"
                } flex items-center justify-between`}
              >
                <span
                  className={`label ${
                    item.bg === "bg-ink"
                      ? "text-[color:var(--coral-pale)]"
                      : "text-[color:var(--coral-deep)]"
                  }`}
                >
                  {item.forLine}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
