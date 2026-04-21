import { ContactForm } from "@/components/contact-form";

export function CinemaContact() {
  return (
    <section
      id="contact"
      className="paper-section relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-24 md:pb-32"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start">
          <div className="col-span-12 lg:col-span-6 scroll-up">
            <div className="flex items-center gap-5 mb-8">
              <span className="data text-[color:var(--copper-deep)]">
                SEQ.05 / BEGIN
              </span>
              <span className="flex-1 h-px bg-[color:var(--ink)]/20" />
              <span className="data-num text-[11px] text-[color:var(--copper-deep)]/70">
                T-00:00
              </span>
            </div>
            <h2 className="serif font-light text-[clamp(52px,8vw,128px)] leading-[0.95] text-[color:var(--ink)] tracking-[-0.03em]">
              Ready to{" "}
              <span className="italic text-[color:var(--copper-deep)]">walk?</span>
            </h2>
            <p className="mt-10 text-[17px] md:text-[19px] text-[color:var(--ink)]/80 leading-[1.75] max-w-[500px]">
              Tell us where you are and what&apos;s in the way. No paperwork.
              Just a conversation about what matters next.
            </p>
            <div className="mt-12 pt-8 border-t border-[color:var(--ink)]/18">
              <p className="text-[15px] text-[color:var(--ink)]/60 mb-3">
                Or just write to us directly.
              </p>
              <a
                href="mailto:letswalk@ambleandco.com"
                className="link-inline text-[26px] md:text-[32px] font-light"
              >
                letswalk@ambleandco.com
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 scroll-up">
            <div className="bg-[color:var(--paper-warm)] text-[color:var(--ink)] border border-[color:var(--ink)]/15 p-8 md:p-12">
              <h3 className="serif font-light text-[26px] md:text-[32px] text-[color:var(--ink)] mb-8 tracking-[-0.02em]">
                Start the conversation.
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
