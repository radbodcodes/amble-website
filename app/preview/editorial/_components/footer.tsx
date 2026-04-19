export function EditorialFooter() {
  return (
    <footer className="relative bg-[#14100D] text-[#F3EADB] border-t-4 border-[#14100D]">
      <div className="px-6 md:px-10 lg:px-14 py-16">
        <div className="folio text-[#F3EADB]/70 mb-10">
          <span>Colophon</span>
          <span>End of Issue</span>
        </div>

        <p className="editorial italic font-normal text-[clamp(48px,10vw,168px)] leading-[0.88] text-[#F3EADB]">
          Amble <span className="text-[#E2B08E]">&amp;</span> Co.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 mono text-[11px] uppercase tracking-[0.22em] text-[#F3EADB]/55">
          <div>
            <p className="text-[#E2B08E] mb-2">Field</p>
            <p>Strategy &amp; AI</p>
          </div>
          <div>
            <p className="text-[#E2B08E] mb-2">Tone</p>
            <p>Unhurried</p>
          </div>
          <div>
            <p className="text-[#E2B08E] mb-2">Motto</p>
            <p>Unparalleled results</p>
          </div>
          <div>
            <p className="text-[#E2B08E] mb-2">Direct</p>
            <a
              href="mailto:letswalk@ambleandco.com"
              className="text-[#F3EADB] hover:text-[#E2B08E]"
            >
              letswalk@ambleandco.com
            </a>
          </div>
        </div>

        <hr className="rule-copper my-10" />
        <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#F3EADB]/50">
          &copy; {new Date().getFullYear()} Amble &amp; Co. · Set in Playfair
          Display, Instrument Serif &amp; JetBrains Mono. Printed on pixels,
          thought through slowly.
        </p>
      </div>
    </footer>
  );
}
