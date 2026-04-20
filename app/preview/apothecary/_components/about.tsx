export function ApothecaryAbout() {
  return (
    <section
      id="studio"
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-32 md:pb-40 bg-[color:var(--paper-cool)] border-t border-[color:var(--rule)]"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="mb-20 md:mb-28 scroll-fade max-w-[900px]">
          <p className="data text-[color:var(--amber)] mb-8">
            PART III · THE PRACTITIONERS
          </p>
          <h2 className="serif text-[color:var(--ink)] text-[clamp(40px,6vw,92px)] leading-[1.02] tracking-[-0.02em]">
            We have been
            <span className="italic" style={{ color: "var(--amber)" }}>
              {" "}where you are.{" "}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-14 items-start">
          {/* Credential dossier in place of a photograph */}
          <div className="col-span-12 md:col-span-5 scroll-fade">
            <figure className="dossier graph p-8 md:p-10 relative">
              <span className="dossier-stamp">Dossier — Partners, n = 2</span>

              <div className="space-y-8 relative z-[1]">
                {[
                  {
                    label: "Built",
                    value: "Companies",
                    detail: "Founder · 2x exits · operator through scale",
                  },
                  {
                    label: "Led",
                    value: "Strategy",
                    detail: "Corporate innovation · P&L ownership · board facing",
                  },
                  {
                    label: "Advised",
                    value: "Founders",
                    detail: "Seed through Series B · 30+ advised companies",
                  },
                  {
                    label: "Taught",
                    value: "Teams",
                    detail: "Workshops · facilitation · embedded coaching",
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="pb-6 border-b border-[color:var(--hairline)] last:border-b-0"
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="data text-[color:var(--amber)]">
                        {row.label}
                      </span>
                      <span className="serif italic text-[color:var(--ink)] text-[20px] md:text-[24px]">
                        {row.value}
                      </span>
                    </div>
                    <p className="mono text-[11px] text-[color:var(--ink-faint)] leading-[1.7]">
                      {row.detail}
                    </p>
                  </div>
                ))}
              </div>
            </figure>
          </div>

          <div className="col-span-12 md:col-span-7 scroll-fade">
            <p className="serif text-[22px] md:text-[28px] leading-[1.45] text-[color:var(--ink)] max-w-[620px]">
              Our team has built companies, led strategy inside corporates, and
              advised startups from first pitch to scale.
            </p>
            <p className="mt-8 serif text-[17px] md:text-[18px] text-[color:var(--ink-soft)] leading-[1.8] max-w-[560px]">
              We have sat in the boardroom, the war room, and the founder&apos;s
              living room. That range matters.
            </p>

            <hr className="mt-12 border-[color:var(--hairline)]" />

            <p className="mt-12 serif text-[17px] md:text-[18px] text-[color:var(--ink-soft)] leading-[1.8] max-w-[560px]">
              Whether you are a leadership team inside a large organization
              trying to modernize, or a founder figuring out what comes next,
              we bring frameworks from consulting, instincts from building, and
              the patience that comes from knowing there are no shortcuts.
            </p>

            <div className="mt-14 pt-6 border-t border-[color:var(--hairline)] flex flex-wrap items-baseline gap-6">
              <span className="data text-[color:var(--ink-faint)]">
                PRACTICE ESTABLISHED · MMXXIV
              </span>
              <span className="data text-[color:var(--amber)]">
                NEW YORK · NY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
