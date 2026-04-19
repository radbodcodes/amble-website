import Link from "next/link";

const variants = [
  {
    slug: "refine",
    title: "Option 1 — Refine",
    description:
      "Typography and spatial polish of the current design. Same brand, tighter hierarchy, asymmetry, scroll choreography, subtle grain.",
  },
  {
    slug: "hero",
    title: "Option 2 — Hero Reimagined",
    description:
      "Only the hero is rebuilt. Kinetic type, star motif as primary device, scroll-reveal. Rest of the page stays as it is.",
  },
  {
    slug: "editorial",
    title: "Option 3 — Editorial",
    description:
      "Full magazine aesthetic. Oversized serif, diagonal flow, layered transparencies, grain overlay, custom cursor.",
  },
];

export default function PreviewIndex() {
  return (
    <main className="min-h-screen bg-[#F8F4F0] text-[#1A1614] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[900px]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A8673E] mb-4">
          Design Exploration
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-normal leading-[1.1] mb-6">
          Three directions for Amble.
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#5C504A] leading-relaxed max-w-[620px] mb-16">
          Each preview is a full-page variant of the current site using real
          copy and brand assets. The live site at ambleandco.com is untouched.
          Click through, compare, share notes.
        </p>

        <ul className="flex flex-col gap-6">
          {variants.map((v) => (
            <li key={v.slug}>
              <Link
                href={`/preview/${v.slug}`}
                className="group block bg-white border border-[#A8673E]/12 rounded-lg p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,22,20,0.08)] hover:border-[#A8673E]/25"
              >
                <div className="flex items-baseline justify-between gap-6 mb-3">
                  <h2 className="font-serif text-2xl md:text-[32px] font-medium leading-tight">
                    {v.title}
                  </h2>
                  <span className="text-[#A8673E] text-[14px] font-medium tracking-wide whitespace-nowrap transition-transform group-hover:translate-x-1">
                    View →
                  </span>
                </div>
                <p className="text-[15px] md:text-[16px] text-[#5C504A] leading-relaxed">
                  {v.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-[13px] text-[#5C504A]/70">
          Branch: <code className="font-mono">design-exploration</code>. Main
          is untouched. Delete branch to discard all three.
        </p>
      </div>
    </main>
  );
}
