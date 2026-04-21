import Image from "next/image";

export function CinemaAbout() {
  return (
    <section
      id="studio"
      className="paper-section relative overflow-hidden px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-28 md:pb-40"
    >
      <div className="max-w-[1320px] mx-auto grid grid-cols-12 gap-10 md:gap-16 lg:gap-20">
        {/* Left column — warm duotone portrait-scale image */}
        <div className="col-span-12 md:col-span-5 scroll-up">
          <figure className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/Crosswalk.png"
              alt=""
              fill
              className="object-cover duotone kenburns"
            />
            <span className="absolute top-4 left-4 w-6 h-px bg-[color:var(--copper)]/80 z-[3]" />
            <span className="absolute top-4 left-4 w-px h-6 bg-[color:var(--copper)]/80 z-[3]" />
            <span className="absolute bottom-4 right-4 w-6 h-px bg-[color:var(--copper)]/80 z-[3]" />
            <span className="absolute bottom-4 right-4 w-px h-6 bg-[color:var(--copper)]/80 z-[3]" />
          </figure>
        </div>

        {/* Right column — copy */}
        <div className="col-span-12 md:col-span-7">
          <div className="scroll-up">
            <div className="flex items-center gap-5 mb-8">
              <span className="data text-[color:var(--copper-deep)]">
                SEQ.04 / STUDIO
              </span>
              <span className="flex-1 h-px bg-[color:var(--ink)]/20" />
              <span className="data-num text-[11px] text-[color:var(--copper-deep)]/70">
                NYC — EST. MMXXIV
              </span>
            </div>
            <h2 className="serif font-light text-[clamp(44px,6.6vw,96px)] leading-[0.98] text-[color:var(--ink)] tracking-[-0.03em]">
              We&apos;ve been{" "}
              <span className="italic text-[color:var(--copper-deep)]">where</span>{" "}
              you are.
            </h2>
          </div>

          <div className="mt-12 md:mt-14 space-y-6 scroll-up max-w-[580px]">
            <p className="text-[17px] md:text-[19px] text-[color:var(--ink)]/85 leading-[1.75]">
              Our team has built companies, led strategy inside corporates, and
              advised startups from first pitch to scale. We&apos;ve sat in the
              boardroom, the war room, and the founder&apos;s living room.
            </p>
            <p className="text-[17px] md:text-[19px] text-[color:var(--ink)]/85 leading-[1.75]">
              Whether you&apos;re a leadership team inside a large organization
              trying to modernize, or a founder figuring out what comes next,
              we bring frameworks from consulting, instincts from building,
              and the patience that comes from knowing there are no shortcuts.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-[color:var(--ink)]/15 scroll-up">
            <a href="#contact" className="link-cta">
              <span>Say hello</span>
              <svg
                className="arrow"
                width="22"
                height="14"
                viewBox="0 0 22 14"
                fill="none"
                aria-hidden
              >
                <path d="M15 1L21 7M21 7L15 13M21 7H0" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
