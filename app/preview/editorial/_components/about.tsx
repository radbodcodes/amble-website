import Image from "next/image";

export function EditorialAbout() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 md:px-10 lg:px-14 py-24 md:py-32 bg-[#14100D] text-[#F3EADB] border-y-4 border-[#14100D]"
    >
      {/* Background crosswalk */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/Crosswalk.png"
          alt=""
          fill
          className="object-cover grayscale contrast-[1.3]"
        />
      </div>
      <div className="absolute inset-0 halftone opacity-10" />

      <div className="relative z-[2]">
        <div className="folio text-[#F3EADB] mb-14">
          <span>Part Three</span>
          <span>The Masthead</span>
        </div>

        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 lg:col-span-5 scroll-reveal">
            <h2 className="editorial text-[clamp(48px,8vw,128px)] leading-[0.94] text-[#F3EADB]">
              We&apos;ve been
            </h2>
            <h2 className="editorial-italic text-[clamp(56px,9vw,140px)] leading-[0.94] text-[#E2B08E] mt-1">
              where
            </h2>
            <h2 className="editorial text-[clamp(48px,8vw,128px)] leading-[0.94] text-[#F3EADB] mt-1">
              you are.
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-7 scroll-reveal space-y-8">
            <hr className="rule-copper" />
            <p className="serif text-[18px] md:text-[22px] leading-[1.7] text-[#F3EADB]/90 drop-cap">
              Our team has built companies, led strategy inside corporates, and
              advised startups from first pitch to scale. We&apos;ve sat in the
              boardroom, the war room, and the founder&apos;s living room.
            </p>
            <p className="serif text-[16px] md:text-[18px] leading-[1.75] text-[#F3EADB]/75">
              That range matters. Whether you&apos;re a leadership team inside
              a large organization trying to modernize, or a founder figuring
              out what comes next, we bring frameworks from consulting,
              instincts from building, and the patience that comes from
              knowing there are no shortcuts.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#F3EADB]/25">
              {["Built", "Led", "Advised", "Taught"].map((verb) => (
                <div key={verb}>
                  <p className="editorial-italic text-[32px] text-[#E2B08E] leading-none">
                    {verb}
                  </p>
                  <p className="mono text-[10px] uppercase tracking-[0.2em] text-[#F3EADB]/60 mt-2">
                    companies · strategy · founders · teams
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
