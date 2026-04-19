export function RefineFooter() {
  return (
    <footer className="relative bg-[#1A1614] text-white px-6 md:px-10 lg:px-16 py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-6">
            <p className="display italic text-[56px] md:text-[88px] leading-none text-white">
              Amble
              <span className="text-[#A8673E]"> &amp; </span>
              Co.
            </p>
            <p className="mt-6 text-[13px] uppercase tracking-[0.22em] text-white/55">
              Unhurried Thinking · Unparalleled Results
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:text-right space-y-3">
            <a
              href="mailto:letswalk@ambleandco.com"
              className="display italic text-[22px] md:text-[28px] text-[#E2B08E] hover:text-white transition-colors"
            >
              letswalk@ambleandco.com
            </a>
            <p className="text-[12px] text-white/45">
              &copy; {new Date().getFullYear()} Amble &amp; Co.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
