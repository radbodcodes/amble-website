import Image from "next/image";

export function InstrumentAbout() {
  return (
    <section
      id="studio"
      className="relative overflow-hidden px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-28 md:pb-40 bg-[color:var(--paper-deep)] text-[color:var(--paper)]"
    >
      <div className="absolute inset-0 opacity-[0.08]">
        <Image src="/Crosswalk.png" alt="" fill className="object-cover grayscale contrast-[1.2]" />
      </div>
      <div
        className="grid-bg"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(241, 236, 227, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(241, 236, 227, 0.06) 1px, transparent 1px)",
        }}
      />

      <div className="relative z-[2] max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20">
          <div className="col-span-12 md:col-span-4 scroll-up">
            <span className="meta text-[color:var(--copper-bright)] prompt">
              section.studio
            </span>
            <p className="mono meta-sm text-[color:var(--paper)]/40 mt-3">
              03 / 04
            </p>
          </div>
          <h2 className="col-span-12 md:col-span-8 serif font-light text-[clamp(36px,5.5vw,84px)] leading-[1.06] text-[color:var(--paper)] tracking-[-0.02em] scroll-up">
            We&apos;ve been{" "}
            <span className="italic text-[color:var(--copper-bright)]">where</span>{" "}
            you are.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5 md:col-start-5 scroll-up">
            <p className="text-[16px] md:text-[18px] text-[color:var(--paper)]/80 leading-[1.8]">
              Our team has built companies, led strategy inside corporates, and
              advised startups from first pitch to scale. We&apos;ve sat in the
              boardroom, the war room, and the founder&apos;s living room.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 scroll-up">
            <p className="text-[16px] md:text-[18px] text-[color:var(--paper)]/80 leading-[1.8]">
              That range matters. Whether you&apos;re a leadership team inside
              a large organization trying to modernize, or a founder figuring
              out what comes next, we bring frameworks from consulting,
              instincts from building, and the patience that comes from
              knowing there are no shortcuts.
            </p>
          </div>
        </div>

        {/* Terminal-style capability readout */}
        <div className="mt-20 md:mt-28 pt-10 border-t border-[color:var(--paper)]/20 scroll-up">
          <p className="meta text-[color:var(--copper-bright)] mb-8 prompt">
            query: capabilities --list
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "built", value: "companies", count: "15+" },
              { label: "led", value: "strategy", count: "40+" },
              { label: "advised", value: "founders", count: "100+" },
              { label: "taught", value: "teams", count: "∞" },
            ].map((stat) => (
              <div key={stat.label} className="border-l border-[color:var(--paper)]/20 pl-4">
                <p className="mono text-[10px] text-[color:var(--copper-bright)] mb-2 uppercase tracking-[0.22em]">
                  [{stat.label}]
                </p>
                <p className="serif font-light text-[24px] md:text-[28px] text-[color:var(--paper)] tracking-[-0.01em]">
                  {stat.value}
                </p>
                <p className="mono text-[11px] text-[color:var(--paper)]/40 mt-2">
                  count: {stat.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
