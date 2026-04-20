export function StatementAbout() {
  return (
    <section
      id="studio"
      className="relative bg-[color:var(--cream)] px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-28 md:pb-40"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16 md:mb-24 scroll-punch max-w-[1200px]">
          <span className="label text-[color:var(--coral-deep)] mb-6 inline-block">
            Who walks with you
          </span>
          <h2 className="display text-[color:var(--ink)] text-[clamp(56px,11vw,200px)] leading-[0.86]">
            We have been
            <br />
            <span style={{ color: "var(--coral)" }}>where you are.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-stretch">
          {/* Stat card — coral */}
          <div className="col-span-12 md:col-span-5 bg-[color:var(--coral)] border-2 border-[color:var(--ink)] rounded-[32px] p-8 md:p-12 scroll-punch">
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Built", value: "Companies" },
                { label: "Led", value: "Strategy" },
                { label: "Advised", value: "Founders" },
                { label: "Taught", value: "Teams" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-t-2 border-[color:var(--ink)] pt-5"
                >
                  <span className="label text-[color:var(--ink)] block mb-3">
                    {stat.label}
                  </span>
                  <p className="display text-[32px] md:text-[44px] leading-[0.9] text-[color:var(--ink)]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 pt-8 border-t-2 border-[color:var(--ink)]">
              <p className="label text-[color:var(--ink)] mb-4">
                Est. New York
              </p>
              <p className="display text-[64px] md:text-[88px] leading-[0.85] text-[color:var(--ink)]">
                2024
              </p>
            </div>
          </div>

          {/* Copy panel */}
          <div className="col-span-12 md:col-span-7 bg-[color:var(--ink)] text-[color:var(--cream)] border-2 border-[color:var(--ink)] rounded-[32px] p-8 md:p-14 scroll-punch">
            <p className="display text-[32px] md:text-[52px] leading-[0.95] text-[color:var(--cream)]">
              Built.
              <span style={{ color: "var(--coral)" }}> Led. </span>
              Advised.
              <span style={{ color: "var(--coral)" }}> Taught.</span>
            </p>
            <p className="mt-10 body text-[18px] md:text-[20px] text-[color:var(--cream)]/90 leading-[1.5] max-w-[560px]">
              Our team has built companies, led strategy inside corporates,
              and advised startups from first pitch to scale. We have sat in
              the boardroom, the war room, and the founder&apos;s living room.
              That range matters.
            </p>
            <p className="mt-8 body text-[17px] text-[color:var(--cream)]/75 leading-[1.65] max-w-[560px]">
              Whether you are a leadership team inside a large organization
              trying to modernize, or a founder figuring out what comes next,
              we bring frameworks from consulting, instincts from building,
              and the patience that comes from knowing there are no shortcuts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
