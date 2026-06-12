import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Value Your Life Wellness | Mental Wellness, Nutrition & Life Coaching",
  description:
    "Compassionate mental wellness coaching and holistic nutrition guidance by Danielle Mayer, C.H.N.C. Personalized programs designed around your unique life. Book a free discovery session today.",
  keywords: [
    "mental wellness coaching",
    "holistic nutrition",
    "life coaching",
    "wellness coaching Alberta",
    "stress management",
    "nutrition coaching",
    "Value Your Life Wellness",
    "Danielle Mayer",
    "C.H.N.C.",
    "Certified Holistic Nutritional Consultant",
  ],
  openGraph: {
    title: "Value Your Life Wellness | Mental Wellness, Nutrition & Life Coaching",
    description:
      "Value Yourself. Nourish Your Mind. Transform Your Life. Personalized coaching programs designed around your unique journey.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${dancingScript.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
