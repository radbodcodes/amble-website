export function MaisonHero() {
  return (
    <section className="relative pt-40 md:pt-56 pb-24 md:pb-36 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Delicate top ornament */}
        <div className="flex flex-col items-center mb-16 md:mb-24 fade">
          <span className="caps text-[color:var(--accent)] mb-6">
            A house for unhurried intelligence
          </span>
          <div
            aria-hidden
            className="w-[1px] h-12 bg-[color:var(--hairline)]"
          />
        </div>

        {/* Centered display, couture counter */}
        <div className="text-center max-w-[1120px] mx-auto">
          <h1 className="display text-[color:var(--ink)] text-[clamp(56px,9vw,148px)] leading-[0.94]">
            <span className="block settle d-100">Unhurried</span>
            <span
              className="block italic settle d-300"
              style={{ color: "var(--accent)" }}
            >
              thinking,
            </span>
            <span className="block settle d-500">unparalleled</span>
            <span
              className="block italic settle d-700"
              style={{ color: "var(--accent)" }}
            >
              results.
            </span>
          </h1>
        </div>

        {/* Specimen card — in place of a city photo */}
        <div className="mt-28 md:mt-36 grid grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="col-span-12 md:col-span-4 settle-slow d-600">
            <div className="swatch-frame aspect-[3/4] relative flex flex-col items-center justify-center p-10">
              <div className="relative z-[1] flex flex-col items-center text-center">
                <span className="caps text-[color:var(--gold)] mb-8">
                  Specimen i
                </span>
                <svg
                  viewBox="0 0 80 120"
                  className="w-16 h-24 mb-8"
                  aria-hidden
                >
                  {/* Minimal bottle silhouette */}
                  <path
                    d="M32 8 h16 v16 c8 4 14 12 14 24 v56 c0 6 -5 10 -10 10 h-24 c-5 0 -10 -4 -10 -10 V48 c0 -12 6 -20 14 -24 z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-[color:var(--ink)]"
                  />
                  <line
                    x1="26"
                    y1="60"
                    x2="54"
                    y2="60"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-[color:var(--gold)]"
                  />
                </svg>
                <p className="specimen text-[color:var(--ink-soft)] text-[15px] leading-[1.5]">
                  N° 01 — Strategy,
                  <br />
                  distilled with patience.
                </p>
                <hr className="silk w-20 my-6" />
                <span className="caps text-[color:var(--ink-faint)]">
                  New York · Est. MMXXIV
                </span>
              </div>
            </div>
          </div>

          {/* Lede column — quiet prose, a house introduction */}
          <div className="col-span-12 md:col-span-8 settle-slow d-800">
            <span className="caps text-[color:var(--accent)]">
              — A letter from the house —
            </span>
            <p className="mt-10 display italic font-light text-[clamp(22px,2.4vw,34px)] leading-[1.35] text-[color:var(--ink)] max-w-[680px]">
              We partner with forward-thinking organizations that want to turn
              AI curiosity into something worth keeping.
            </p>
            <p className="mt-10 body text-[16px] md:text-[17px] text-[color:var(--ink-soft)] leading-[1.85] max-w-[620px]">
              Not the deck delivered and disappeared. A plan, the systems that
              carry it, and the team that tends them. The process is slower
              than it looks. That is the point.
            </p>

            <div className="mt-14 pt-8 border-t border-[color:var(--hairline)] flex items-center justify-between gap-6 max-w-[620px]">
              <a
                href="#contact"
                className="specimen text-[20px] md:text-[22px] text-[color:var(--accent)] hover:text-[color:var(--ink)] transition-colors"
              >
                Request an appointment →
              </a>
              <span className="folio text-[14px]">i.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
