import { ContactForm } from "@/components/contact-form";

export function SophisticatedContact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-24 md:pb-32 overflow-hidden"
    >
      <div className="mesh" style={{ opacity: 0.4 }} />

      <div className="relative z-[2] max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start">
          <div className="col-span-12 lg:col-span-6 scroll-up">
            <span className="meta text-[color:var(--copper)]">
              IV · Correspondence
            </span>
            <h2 className="mt-8 serif font-light text-[clamp(44px,6vw,88px)] leading-[1.02] text-[color:var(--ink)] tracking-[-0.02em]">
              Ready to{" "}
              <span className="italic text-[color:var(--copper)]">walk?</span>
            </h2>
            <p className="mt-10 text-[16px] md:text-[18px] text-[color:var(--ink-soft)] leading-[1.75] max-w-[460px]">
              Tell us where you are and what&apos;s in the way. No paperwork
              needed. Just a conversation about what matters next.
            </p>
            <div className="mt-12 pt-8 border-t border-[color:var(--hairline)] space-y-3">
              <p className="meta-sm text-[color:var(--ink-faint)]">
                Or correspond directly
              </p>
              <a
                href="mailto:letswalk@ambleandco.com"
                className="link serif italic font-light text-[24px] md:text-[28px] text-[color:var(--copper)]"
              >
                letswalk@ambleandco.com
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 scroll-up">
            <div className="bg-white/70 backdrop-blur-sm border border-[color:var(--hairline)] p-8 md:p-10">
              <p className="meta-sm text-[color:var(--ink-faint)] mb-6">
                / Form 001 · Confidential
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
