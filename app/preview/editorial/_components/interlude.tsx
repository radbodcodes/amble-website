import Image from "next/image";

export function EditorialInterlude() {
  return (
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden border-y-4 border-[#14100D]">
      <Image
        src="/interlude-city.jpg"
        alt=""
        fill
        className="object-cover grayscale contrast-[1.1]"
      />
      <div className="absolute inset-0 bg-[#5C2410] mix-blend-multiply opacity-88" />
      <div className="absolute inset-0 halftone opacity-20" />

      <div className="relative z-[2] h-full flex flex-col justify-center items-center px-6 text-center">
        <p className="mono text-[10px] uppercase tracking-[0.32em] text-[#E2B08E] mb-6">
          ✦ An Aside ✦
        </p>
        <blockquote className="editorial text-[#F3EADB] text-[clamp(32px,6vw,88px)] leading-[1.02] max-w-[1100px]">
          Technology is easy to acquire.{" "}
          <span className="editorial-italic text-[#E2B08E]">
            Turning it into real value
          </span>{" "}
          is the hard part.
        </blockquote>
        <p className="mt-10 mono text-[10px] uppercase tracking-[0.28em] text-[#F3EADB]/50">
          — Editors&apos; Note, page 7
        </p>
      </div>
    </section>
  );
}
