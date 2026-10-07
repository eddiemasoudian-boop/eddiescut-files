import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/context/BookingContext";
import { SITE_URL, business, openingHours } from "@/lib/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Frisør i Hellerup | Frisør Hellerup — Eddie's Cut",
    template: "%s | Eddie's Cut — Frisør i Hellerup",
  },
  description: "Leder du efter en professionel frisør i Hellerup? Eddie's Cut tilbyder herreklip, dameklip, balayage og skægpleje tæt på Gentofte og Charlottenlund. Book online!",
  alternates: {
    canonical: '/',
  },
  keywords: [
    "Frisør i Hellerup",
    "Frisør Hellerup", 
    "Herrefrisør Hellerup", 
    "Damefrisør Hellerup", 
    "Frisør 2900", 
    "Frisør Gentofte", 
    "Frisør Charlottenlund", 
    "Bedste frisør i Hellerup", 
    "Book frisør online Hellerup",
    "Herreklip Hellerup", 
    "Dameklip Hellerup", 
    "Børneklip Hellerup", 
    "Balayage Hellerup",
    "Skægtrimning Hellerup",
    "Eddie's Cut"
  ],
  authors: [{ name: "Eddie's Cut" }],
  openGraph: {
    title: "Frisør i Hellerup | Frisør Hellerup — Eddie's Cut",
    description: "Professionel klipning med 25 års erfaring i hjertet af Hellerup. Tæt på Gentofte & Charlottenlund. Book din tid i dag.",
    url: SITE_URL,
    siteName: "Eddie's Cut",
    locale: 'da_DK',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${SITE_URL}/#salon`,
  "name": business.name,
  "alternateName": business.alternateName,
  "url": SITE_URL,
  "image": `${SITE_URL}/images/eddie-hero-cut.jpg`,
  "telephone": business.telephone,
  "email": business.email,
  "priceRange": "$$",
  "currenciesAccepted": "DKK",
  "paymentAccepted": "Cash, Credit Card, MobilePay",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": business.streetAddress,
    "addressLocality": business.addressLocality,
    "postalCode": business.postalCode,
    "addressCountry": "DK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": business.latitude,
    "longitude": business.longitude
  },
  "hasMap": business.googleMapsUrl,
  "sameAs": business.sameAs,
  "areaServed": [
    { "@type": "City", "name": "Hellerup" },
    { "@type": "City", "name": "Gentofte" },
    { "@type": "City", "name": "Charlottenlund" },
    { "@type": "City", "name": "Skovshoved" }
  ],
  "description": "Personlig og professionel herreklip, dameklip, balayage og skægpleje i en hyggelig salon i Hellerup med over 25 års erfaring.",
  "openingHoursSpecification": openingHours
    .filter((d) => d.opens && d.closes)
    .map((d) => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": d.schema,
      "opens": d.opens,
      "closes": d.closes
    }))
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="scroll-smooth snap-y snap-proximity">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} bg-brand-offwhite text-brand-charcoal antialiased selection:bg-brand-olive selection:text-white`}>
        <BookingProvider>
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}