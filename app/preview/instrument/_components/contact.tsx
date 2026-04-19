import { ContactForm } from "@/components/contact-form";

export function InstrumentContact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-24 md:pb-32 overflow-hidden"
    >
      <div className="grid-bg" style={{ opacity: 0.6 }} />
      <div className="scanline" />

      <div className="relative z-[2] max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start">
          <div className="col-span-12 lg:col-span-6 scroll-up">
            <span className="meta text-[color:var(--copper)] prompt">section.contact</span>
            <p className="mono meta-sm text-[color:var(--ink-faint)] mt-3 mb-6">04 / 04</p>
            <h2 className="serif font-light text-[clamp(44px,6vw,88px)] leading-[1.02] text-[color:var(--ink)] tracking-[-0.02em]">
              Ready to{" "}
              <span className="italic text-[color:var(--copper)]">walk?</span>
            </h2>
            <p className="mt-10 text-[16px] md:text-[18px] text-[color:var(--ink-soft)] leading-[1.75] max-w-[460px]">
              Tell us where you are and what&apos;s in the way. No paperwork
              needed. Just a conversation about what matters next.
            </p>
            <div className="mt-12 pt-8 border-t border-[color:var(--hairline)] space-y-3">
              <p className="meta-sm text-[color:var(--ink-faint)]">
                direct_line:
              </p>
              <a
                href="mailto:letswalk@ambleandco.com"
                className="link mono font-medium text-[18px] md:text-[22px] text-[color:var(--copper)]"
              >
                letswalk@ambleandco.com
              </a>
            </div>

            {/* System status readout */}
            <div className="mt-12 pt-6 border-t border-[color:var(--grid)] space-y-2 mono meta-sm text-[color:var(--ink-faint)]">
              <p>· avg_response_time: &lt; 24h</p>
              <p>· nda: available on request</p>
              <p>· coffee_welcomed: always</p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 scroll-up">
            <div className="bg-[color:var(--paper)] border border-[color:var(--hairline)] p-8 md:p-10">
              <div className="flex items-center justify-between pb-4 mb-8 border-b border-[color:var(--hairline)]">
                <span className="meta text-[color:var(--copper)]">form.001</span>
                <span className="flex items-center gap-2 meta-sm text-[color:var(--ink-faint)]">
                  <span className="signal-dot" />
                  encrypted
                </span>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
