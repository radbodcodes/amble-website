import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-dark px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image
          src="/logo-white.png"
          alt="Amble & Co."
          width={120}
          height={17}
          className="h-4 w-auto opacity-80"
        />
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
