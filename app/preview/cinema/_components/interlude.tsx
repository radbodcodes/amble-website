import Image from "next/image";

export function CinemaInterlude() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden px-6 md:px-10 lg:px-14 py-24 md:py-32">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0">
        <Image
          src="/hero-city.jpg"
          alt=""
          fill
          className="object-cover duotone-dark kenburns opacity-60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,12,8,0.45)_0%,rgba(15,12,8,0.9)_75%)]" />
      </div>

      <div className="relative z-[2] max-w-[1080px] mx-auto text-center">
        <span className="meta text-[color:var(--copper-pale)] scroll-up">
          · Intermission ·
        </span>
        <blockquote className="mt-12 md:mt-16 serif font-light text-[clamp(32px,4.8vw,72px)] leading-[1.14] text-white tracking-[-0.02em] scroll-up">
          Technology is easy to acquire.
          <br />
          Turning it into real{" "}
          <span className="italic text-[color:var(--copper-pale)]">value</span> is
          the hard part.
        </blockquote>
        <p className="mt-12 meta text-white/50 scroll-up">
          — A thing we keep saying, because it keeps being true.
        </p>
      </div>
    </section>
  );
}
