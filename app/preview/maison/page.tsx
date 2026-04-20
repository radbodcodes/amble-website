import { Playfair_Display, Inter } from "next/font/google";
import { MaisonNav } from "./_components/nav";
import { MaisonHero } from "./_components/hero";
import { MaisonOutcomes } from "./_components/outcomes";
import { MaisonInterlude } from "./_components/interlude";
import { MaisonMethodology } from "./_components/methodology";
import { MaisonAbout } from "./_components/about";
import { MaisonContact } from "./_components/contact";
import { MaisonFooter } from "./_components/footer";
import "./maison.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-maison-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-maison-body",
  display: "swap",
});

export default function MaisonPreview() {
  return (
    <div className={`${display.variable} ${body.variable} maison-root`}>
      <MaisonNav />
      <main>
        <MaisonHero />
        <MaisonOutcomes />
        <MaisonInterlude />
        <MaisonMethodology />
        <MaisonAbout />
        <MaisonContact />
      </main>
      <MaisonFooter />
    </div>
  );
}
