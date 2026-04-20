import { Archivo_Black, Inter } from "next/font/google";
import { StatementNav } from "./_components/nav";
import { StatementHero } from "./_components/hero";
import { StatementOutcomes } from "./_components/outcomes";
import { StatementInterlude } from "./_components/interlude";
import { StatementMethodology } from "./_components/methodology";
import { StatementAbout } from "./_components/about";
import { StatementContact } from "./_components/contact";
import { StatementFooter } from "./_components/footer";
import "./statement.css";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-statement-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-statement-body",
  display: "swap",
});

export default function StatementPreview() {
  return (
    <div className={`${display.variable} ${body.variable} statement-root`}>
      <StatementNav />
      <main>
        <StatementHero />
        <StatementOutcomes />
        <StatementInterlude />
        <StatementMethodology />
        <StatementAbout />
        <StatementContact />
      </main>
      <StatementFooter />
    </div>
  );
}
