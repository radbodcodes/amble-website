import { Fraunces } from "next/font/google";
import { EditorialNav } from "./_components/nav";
import { EditorialHero } from "./_components/hero";
import { EditorialOutcomes } from "./_components/outcomes";
import { EditorialInterlude } from "./_components/interlude";
import { EditorialMethodology } from "./_components/methodology";
import { EditorialAbout } from "./_components/about";
import { EditorialContact } from "./_components/contact";
import { EditorialFooter } from "./_components/footer";
import "./editorial.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  variable: "--font-editorial-display",
  display: "swap",
});

const frauncesBody = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-editorial-serif",
  display: "swap",
});

export default function EditorialPreview() {
  return (
    <div className={`${fraunces.variable} ${frauncesBody.variable} editorial-root`}>
      <EditorialNav />
      <main>
        <EditorialHero />
        <EditorialOutcomes />
        <EditorialInterlude />
        <EditorialMethodology />
        <EditorialAbout />
        <EditorialContact />
      </main>
      <EditorialFooter />
    </div>
  );
}
