import { ContactForm } from "@/components/contact-form";

export function ApothecaryContact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-24 md:pb-36"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="mb-20 md:mb-28 scroll-fade max-w-[900px]">
          <p className="data text-[color:var(--amber)] mb-8">
            PART IV · INTAKE
          </p>
          <h2 className="serif text-[color:var(--ink)] text-[clamp(48px,7.5vw,120px)] leading-[0.98] tracking-[-0.02em]">
            Ready to
            <span className="italic" style={{ color: "var(--amber)" }}>
              {" "}walk?{" "}
            </span>
          </h2>
          <p className="mt-10 serif text-[18px] md:text-[20px] text-[color:var(--ink-soft)] leading-[1.7] max-w-[620px]">
            Tell us where you are and what is in the way. No paperwork. The
            intake form is a single, considered message.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-10 md:gap-14">
          <div className="col-span-12 md:col-span-5 scroll-fade">
            <div className="dossier p-8 md:p-10 relative">
              <span className="dossier-stamp">Direct correspondence</span>
              <span className="data text-[color:var(--amber)]">
                Contact · Primary
              </span>
              <a
                href="mailto:letswalk@ambleandco.com"
                className="mt-6 block serif italic text-[24px] md:text-[30px] text-[color:var(--amber)] hover:text-[color:var(--ink)] transition-colors break-all"
              >
                letswalk@ambleandco.com
              </a>
              <hr className="my-8 border-[color:var(--hairline)]" />
              <p className="mono text-[12px] text-[color:var(--ink-faint)] leading-[1.7]">
                Letters received at any hour. We reply when we have something
                considered to say. Usual response time — 24–48 hours.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 scroll-fade">
            <div className="dossier p-8 md:p-12 relative">
              <span className="dossier-stamp">Form 01 — Intake</span>
              <div className="flex items-baseline justify-between mb-10 pb-4 border-b border-[color:var(--rule)]">
                <span className="data text-[color:var(--amber)]">
                  CONFIDENTIAL
                </span>
                <span className="data text-[color:var(--ink-faint)]">
                  v. 2026.04
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
