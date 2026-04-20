export function StatementHero() {
  return (
    <section className="relative min-h-[100vh] bg-[color:var(--coral)] overflow-hidden">
      {/* Huge word UNHURRIED — kisses the edges */}
      <div className="relative pt-32 md:pt-40 pb-8 md:pb-12 px-6 md:px-10 lg:px-14">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-10 md:mb-14 drop">
            <span className="w-3 h-3 rounded-full bg-[color:var(--ink)] animate-pulse" />
            <span className="label text-[color:var(--ink)]">
              Amble &amp; Co · New York · Est. 2024
            </span>
          </div>

          <h1 className="display text-[color:var(--ink)] text-[clamp(88px,18vw,320px)] leading-[0.82]">
            <span className="block punch d-100">Unhurried</span>
            <span
              className="block punch d-300 italic"
              style={{
                fontStyle: "italic",
                color: "var(--cream)",
                WebkitTextStroke: "2px var(--ink)",
              }}
            >
              thinking.
            </span>
            <span className="block punch d-500">Unparalleled</span>
            <span
              className="block punch d-700"
              style={{ color: "var(--cream)" }}
            >
              results.
            </span>
          </h1>
        </div>
      </div>

      {/* Bottom plate — lede + CTA on ink */}
      <div className="bg-[color:var(--ink)] text-[color:var(--cream)] px-6 md:px-10 lg:px-14 py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 md:col-span-8 slide">
            <p className="body text-[20px] md:text-[26px] leading-[1.4] text-[color:var(--cream)] max-w-[780px]">
              We turn AI curiosity into real AI strategy for teams that refuse
              to pretend. Not a deck. A plan, the systems, and the team that
              runs them.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex md:justify-end slide d-200">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[color:var(--coral)] text-[color:var(--ink)] px-8 py-5 rounded-full label hover:bg-[color:var(--cream)] transition-all"
            >
              Start a conversation
              <span
                aria-hidden
                className="inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Marquee strip — moving tagline repeat */}
      <div className="bg-[color:var(--cream)] border-y-2 border-[color:var(--ink)] overflow-hidden py-4">
        <div className="marquee-track label text-[color:var(--ink)] text-[18px] md:text-[22px]">
          {Array.from({ length: 2 }).map((_, wrap) => (
            <span key={wrap} className="inline-flex gap-10 pr-10">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="inline-flex items-center gap-10">
                  <span>Unhurried thinking</span>
                  <span style={{ color: "var(--coral)" }}>★</span>
                  <span>Unparalleled results</span>
                  <span style={{ color: "var(--coral)" }}>★</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
