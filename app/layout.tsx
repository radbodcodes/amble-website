import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Nav } from "@/components/nav";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amble & Co. — Unhurried Thinking, Unparalleled Results",
  description:
    "We partner with forward-thinking organizations in traditional industries to turn AI curiosity into real strategy, and strategy into stories that stick.",
  metadataBase: new URL("https://ambleandco.com"),
  openGraph: {
    title: "Amble & Co. — Unhurried Thinking, Unparalleled Results",
    description:
      "We partner with forward-thinking organizations in traditional industries to turn AI curiosity into real strategy, and strategy into stories that stick.",
    url: "https://ambleandco.com",
    siteName: "Amble & Co.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Amble & Co. — Unhurried Thinking, Unparalleled Results",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amble & Co. — Unhurried Thinking, Unparalleled Results",
    description:
      "We partner with forward-thinking organizations in traditional industries to turn AI curiosity into real strategy.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
