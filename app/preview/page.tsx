import Link from "next/link";

const variants = [
  {
    slug: "sophisticated",
    name: "Sophisticated",
    subtitle: "Aesop × Anthropic",
    description:
      "The baseline. Editorial serif, monospace meta, subtle gradient mesh, corner crosshairs, dialed-back copper on warm cream. Quiet motion throughout.",
    palette: ["#9C5E37", "#F5F1EB", "#1C1815"],
  },
  {
    slug: "editorial",
    name: "Editorial",
    subtitle: "Kinfolk × NYT",
    description:
      "Magazine aesthetic. Fraunces serif, drop caps, double-rule dividers, numbered chapters, oversized photography. No monospace. Paper grain overlay.",
    palette: ["#8C3A1F", "#F4EEE3", "#1F1A14"],
  },
  {
    slug: "instrument",
    name: "Instrument",
    subtitle: "Anthropic docs × Linear",
    description:
      "Tech dialed up. Animated grid, live status indicators, function-call methodology, terminal prompts, capability readout. Precision-instrument undertone.",
    palette: ["#9C5E37", "#F1ECE3", "#141310"],
  },
  {
    slug: "cinema",
    name: "Cinema",
    subtitle: "A24 × Cereal",
    description:
      "Full-bleed duotone photography as backdrop. Copper-tinted shadows, kenburns motion, letterbox tick marks, film grain overlay. Dramatic scale.",
    palette: ["#C47A4E", "#0F0C08", "#EDE5D6"],
  },
];

export default function PreviewIndex() {
  return (
    <main className="min-h-screen bg-[#F5F1EB] text-[#1C1815] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1120px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#9C5E37] mb-4 font-mono">
          · Design Exploration ·
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.05] mb-6 tracking-[-0.015em]">
          Four directions.
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#5C504A] leading-[1.75] max-w-[680px] mb-16">
          Each keeps the clean, high-class aesthetic with a tech undercurrent —
          expressed differently. Same copy, same sections, same brand. The live
          site at ambleandco.com is untouched.
        </p>

        <ul className="flex flex-col gap-6">
          {variants.map((v) => (
            <li key={v.slug}>
              <Link
                href={`/preview/${v.slug}`}
                className="group block bg-white/60 backdrop-blur-sm border border-[#9C5E37]/15 p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(28,24,21,0.08)] hover:border-[#9C5E37]/40"
              >
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-12 md:col-span-8">
                    <div className="flex items-baseline gap-4 mb-2 flex-wrap">
                      <h2 className="font-serif text-[28px] md:text-[38px] font-light leading-tight tracking-[-0.01em]">
                        {v.name}
                      </h2>
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9C5E37]">
                        {v.subtitle}
                      </span>
                    </div>
                    <p className="text-[15px] md:text-[16px] text-[#5C504A] leading-[1.7] max-w-[620px]">
                      {v.description}
                    </p>
                  </div>

                  <div className="col-span-12 md:col-span-4 flex items-center md:justify-end gap-4">
                    <div className="flex items-center -space-x-1">
                      {v.palette.map((c, i) => (
                        <span
                          key={i}
                          className="inline-block w-6 h-6 rounded-full border border-[#1C1815]/15"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                    <span className="text-[#9C5E37] text-[11px] font-mono uppercase tracking-[0.2em] whitespace-nowrap transition-transform duration-500 group-hover:translate-x-1">
                      view →
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-[12px] text-[#5C504A]/70 font-mono">
          Branch: design-exploration · Main is untouched
        </p>
      </div>
    </main>
  );
}
