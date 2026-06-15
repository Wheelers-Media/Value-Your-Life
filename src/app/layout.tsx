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
  metadataBase: new URL("https://valueyourlifewellness.ca"),
  title: {
    default: "Value Your Life Wellness | Mental Wellness & Holistic Nutrition Kamloops",
    template: "%s | Value Your Life Wellness",
  },
  description:
    "Empowering health journeys in Kamloops, BC. Danielle Mayer, C.H.N.C., provides compassionate mental wellness coaching and personalized holistic nutrition plans to manage stress, balance hormones, and nourish your body and mind.",
  keywords: [
    "holistic nutritionist Kamloops",
    "life coach Kamloops",
    "mental wellness coaching Kamloops BC",
    "Danielle Mayer nutritionist",
    "nutritional consultant Kamloops",
    "health coaching Kamloops",
    "stress management coach BC",
    "hormone balance Kamloops",
    "food and mood coaching Canada",
    "custom meal plans Kamloops",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Value Your Life Wellness | Mental Wellness & Holistic Nutrition Kamloops",
    description:
      "Personalized mental wellness coaching and holistic nutrition support designed around your unique lifestyle in Kamloops, BC. Start with a free 30-minute discovery session.",
    url: "https://valueyourlifewellness.ca",
    siteName: "Value Your Life Wellness",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Value Your Life Wellness - Mental Wellness & Holistic Nutrition Coaching in Kamloops, BC",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Value Your Life Wellness | Mental Wellness & Holistic Nutrition",
    description:
      "Personalized mental wellness coaching and holistic nutrition support designed around your unique lifestyle in Kamloops, BC.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Value Your Life Wellness",
    "image": "https://valueyourlifewellness.ca/images/og-image.png",
    "@id": "https://valueyourlifewellness.ca/#business",
    "url": "https://valueyourlifewellness.ca",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kamloops",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.6747,
      "longitude": -120.3273
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://my.practicebetter.io/#/610c73543980330f000f7e1b/bookings?step=services"
    ],
    "description": "Compassionate mental wellness coaching and holistic nutrition guidance by Danielle Mayer, C.H.N.C. in Kamloops, BC."
  };

  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${dancingScript.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
