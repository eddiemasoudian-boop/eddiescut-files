import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/context/BookingContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://eddiescut.dk'),
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
    url: 'https://eddiescut.dk',
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
  "name": "Eddie's Cut",
  "url": "https://eddiescut.dk",
  "image": "https://eddiescut.dk/images/eddie-hero-cut.jpg",
  "telephone": "+4527135533",
  "priceRange": "$$",
  "currenciesAccepted": "DKK",
  "paymentAccepted": "Cash, Credit Card, MobilePay",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bernstorffsvej 67",
    "addressLocality": "Hellerup",
    "postalCode": "2900",
    "addressCountry": "DK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 55.7333,
    "longitude": 12.5667
  },
  "hasMap": "https://maps.google.com/?q=Bernstorffsvej+67,+2900+Hellerup",
  "areaServed": [
    { "@type": "City", "name": "Hellerup" },
    { "@type": "City", "name": "Gentofte" },
    { "@type": "City", "name": "Charlottenlund" },
    { "@type": "City", "name": "Skovshoved" }
  ],
  "description": "Personlig og professionel herreklip, dameklip, balayage og skægpleje i en hyggelig salon i Hellerup med over 25 års erfaring.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "90",
    "bestRating": "5",
    "worstRating": "1"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "14:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ]
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