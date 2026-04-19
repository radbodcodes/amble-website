import Image from "next/image";

export function RefineAbout() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 md:px-10 lg:px-16 py-28 md:py-36"
    >
      <Image
        src="/Crosswalk.png"
        alt=""
        fill
        className="object-cover grayscale contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,22,20,0.92)_0%,rgba(26,22,20,0.94)_100%)]" />

      <div className="relative z-[2] mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 scroll-reveal">
            <p className="eyebrow text-[#E2B08E]">
              <span className="rule bg-[#E2B08E]" />
              About
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 scroll-reveal">
            <h2 className="display text-[clamp(40px,6vw,84px)] leading-[1.02] text-white mb-14">
              We&apos;ve been <em className="italic text-[#E2B08E]">where</em>
              <br />
              you are.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[880px]">
              <p className="text-[16px] text-white/75 leading-[1.8]">
                Our team has built companies, led strategy inside corporates,
                and advised startups from first pitch to scale. We&apos;ve sat
                in the boardroom, the war room, and the founder&apos;s living
                room.
              </p>
              <p className="text-[16px] text-white/75 leading-[1.8]">
                That range matters. Whether you&apos;re a leadership team
                inside a large organization trying to modernize, or a founder
                figuring out what comes next, we bring frameworks from
                consulting, instincts from building, and the patience that
                comes from knowing there are no shortcuts.
              </p>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-6 text-[12px] text-[#E2B08E] uppercase tracking-[0.22em]">
              <span>Built companies</span>
              <span className="text-white/25">·</span>
              <span>Led corporate strategy</span>
              <span className="text-white/25">·</span>
              <span>Advised founders</span>
              <span className="text-white/25">·</span>
              <span>Taught the teams</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
