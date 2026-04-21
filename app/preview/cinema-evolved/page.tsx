import { JetBrains_Mono, Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import { CinemaNav } from "./_components/nav";
import { CinemaHero } from "./_components/hero";
import { CinemaOutcomes } from "./_components/outcomes";
import { CinemaInterlude } from "./_components/interlude";
import { CinemaMethodology } from "./_components/methodology";
import { CinemaAbout } from "./_components/about";
import { CinemaContact } from "./_components/contact";
import { CinemaFooter } from "./_components/footer";
import "./cinema.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-cinema",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cinema-serif",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinema-data",
  display: "swap",
});

export default function CinemaPreview() {
  return (
    <div className={`${mono.variable} ${cormorant.variable} ${grotesk.variable} cinema-root`}>
      <CinemaNav />
      <main>
        <CinemaHero />
        <CinemaOutcomes />
        <CinemaInterlude />
        <CinemaMethodology />
        <CinemaAbout />
        <CinemaContact />
      </main>
      <CinemaFooter />
    </div>
  );
}
