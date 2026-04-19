import { ContactForm } from "@/components/contact-form";

export function CinemaContact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-24 md:pb-32 bg-[color:var(--paper-deep)]"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start">
          <div className="col-span-12 lg:col-span-6 scroll-up">
            <span className="meta text-[color:var(--copper-pale)]">
              · Closing Credits · Correspondence ·
            </span>
            <h2 className="mt-8 serif font-light text-[clamp(52px,8vw,128px)] leading-[0.95] text-white tracking-[-0.03em]">
              Ready to{" "}
              <span className="italic text-[color:var(--copper)]">walk?</span>
            </h2>
            <p className="mt-10 text-[17px] md:text-[19px] text-white/75 leading-[1.75] max-w-[500px]">
              Tell us where you are and what&apos;s in the way. No paperwork
              needed. Just a conversation about what matters next.
            </p>
            <div className="mt-12 pt-8 border-t border-white/15 space-y-3">
              <p className="meta-sm text-white/50">Or correspond directly</p>
              <a
                href="mailto:letswalk@ambleandco.com"
                className="link serif italic font-light text-[26px] md:text-[32px] text-[color:var(--copper-pale)]"
              >
                letswalk@ambleandco.com
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 scroll-up">
            <div className="bg-[color:var(--paper)] text-[color:var(--ink)] border border-white/10 p-8 md:p-12">
              <p className="meta-sm text-[color:var(--copper-deep)] mb-8">
                · Form I · Confidential ·
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
