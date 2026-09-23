import { Italiana, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: ["400"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport = {
  themeColor: "#214748",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://orenkasauli.com"),
  title: "OREN Kasauli — Luxury Hospitality Portfolio",
  description:
    "Explore OREN Kasauli through a curated visual portfolio of mountain architecture, interiors, rooms, private experiences, vegetarian dining and the landscapes of Himachal Pradesh.",
  keywords: [
    "OREN Kasauli",
    "Luxury Hospitality Portfolio",
    "Kasauli Architecture",
    "Himachal Pradesh Resort Portfolio",
    "Luxury Mountain Stay Showcase",
    "Pure Vegetarian Dining Kasauli"
  ],
  authors: [{ name: "OREN Kasauli" }],
  openGraph: {
    title: "OREN Kasauli — Luxury Hospitality Portfolio",
    description:
      "A curated architectural and interior showcase of OREN Kasauli, Himachal Pradesh.",
    url: "https://orenkasauli.com",
    siteName: "OREN Kasauli Portfolio",
    images: [
      {
        url: "/images/hero-kasauli.jpg",
        width: 1920,
        height: 1080,
        alt: "OREN Kasauli Architectural Facade",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OREN Kasauli — Luxury Hospitality Portfolio",
    description: "Architectural & Hospitality Portfolio of OREN Kasauli.",
    images: ["/images/hero-kasauli.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${italiana.variable} ${playfair.variable} ${manrope.variable}`}>
      <body className="font-sans bg-[#214748] text-[#fcfaf6] antialiased selection:bg-brand-gold selection:text-brand-bg min-h-screen">
        {children}
      </body>
    </html>
  );
}
