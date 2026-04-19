import Image from "next/image";

export function RefineInterlude() {
  return (
    <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
      <Image
        src="/interlude-city.jpg"
        alt=""
        fill
        className="object-cover grayscale contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,22,20,0.82)_0%,rgba(140,82,42,0.7)_100%)]" />

      {/* Horizontal rule above pull quote */}
      <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[80%] max-w-[720px] h-px bg-white/25" />

      <div className="relative z-[2] h-full flex flex-col items-center justify-center px-6 text-center">
        <p className="eyebrow text-white/70 mb-6">
          <span className="rule bg-white/70" />
          Field Note
        </p>
        <blockquote className="display text-white text-[clamp(28px,4.5vw,64px)] leading-[1.08] max-w-[1000px]">
          Technology is easy to acquire.
          <br />
          Turning it into real{" "}
          <em className="italic font-light text-[#E2B08E]">value</em> is the
          hard part.
        </blockquote>
        <p className="mt-10 text-white/55 text-[12px] uppercase tracking-[0.22em]">
          — A thing we keep saying, because it keeps being true.
        </p>
      </div>
    </section>
  );
}
