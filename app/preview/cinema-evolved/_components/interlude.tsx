import Image from "next/image";

export function CinemaInterlude() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden px-6 md:px-10 lg:px-14 py-24 md:py-32">
      {/* Atmospheric backdrop — warm amber vignette */}
      <div className="absolute inset-0">
        <Image
          src="/interlude-city.jpg"
          alt=""
          fill
          className="object-cover duotone-dark kenburns opacity-60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,79,29,0.28)_0%,rgba(24,19,10,0.6)_38%,rgba(20,16,10,0.96)_78%)]" />
      </div>

      {/* Trajectory arc — thin-line sci-fi sweep */}
      <svg className="absolute inset-0 w-full h-full z-[1] pointer-events-none" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <path d="M -100 650 Q 800 -100 1700 650" stroke="var(--copper)" strokeWidth="0.6" fill="none" strokeDasharray="3 6" opacity="0.35" />
        <path d="M -100 700 Q 800 50 1700 700" stroke="var(--azure-glow)" strokeWidth="0.5" fill="none" strokeDasharray="1 4" opacity="0.2" />
      </svg>

      <div className="relative z-[2] max-w-[1080px] mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-16 scroll-up">
          <span className="w-12 h-px bg-[color:var(--copper-pale)]/50" />
          <span className="data text-[color:var(--copper-pale)]">INTERMISSION</span>
          <span className="w-12 h-px bg-[color:var(--copper-pale)]/50" />
        </div>
        <blockquote className="serif font-light text-[clamp(32px,4.8vw,72px)] leading-[1.14] text-[color:var(--paper)] tracking-[-0.025em] scroll-up">
          Technology is easy to acquire.
          <br />
          Turning it into real{" "}
          <span className="italic text-[color:var(--copper-glow)]">value</span> is
          the hard part.
        </blockquote>
      </div>
    </section>
  );
}
