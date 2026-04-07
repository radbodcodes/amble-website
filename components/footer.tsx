export function Footer() {
  return (
    <footer className="bg-dark px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif text-xl font-semibold text-white/80">
          Amble&Co
        </span>
        <span className="text-[13px] text-white/45">
          &copy; {new Date().getFullYear()} Amble & Co. &middot;{" "}
          <a
            href="mailto:letswalk@ambleandco.com"
            className="text-primary-pale hover:text-white transition-colors"
          >
            letswalk@ambleandco.com
          </a>
        </span>
      </div>
    </footer>
  );
}
