import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Prices from '@/components/Prices';
import Contact from '@/components/Contact';
import BookingModal from '@/components/BookingModal';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import { areaPages } from '@/lib/areaData';
import { SITE_URL } from '@/lib/siteConfig';
import { JsonLd, SALON_ID, breadcrumbSchema } from '@/lib/schema';

const page = areaPages.gentofte;

export const metadata: Metadata = {
  title: { absolute: page.seoTitle },
  description: page.seoDescription,
  alternates: {
    canonical: `/${page.slug}`,
  },
  openGraph: {
    title: page.seoTitle,
    description: page.seoDescription,
    url: `${SITE_URL}/${page.slug}`,
    locale: 'da_DK',
    type: 'website',
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: `${SITE_URL}/${page.slug}`,
  name: page.seoTitle,
  description: page.seoDescription,
  about: { '@id': SALON_ID },
  spatialCoverage: { '@type': 'City', name: page.area },
};

export default function GentoftePage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema([{ name: 'Forside', path: '/' }, { name: `Frisør ${page.area}`, path: `/${page.slug}` }])} />
      <Navbar />
      <main>
        <Hero title={page.heroTitle} subtitle={page.heroSubtitle} />
        <About title={page.aboutTitle} intro={page.aboutIntro} closing={page.aboutClosing} />
        <Features items={page.features} />
        <Prices />
      </main>
      <Contact />
      <BookingModal />
      <BackToTop />
      <Footer />
    </>
  );
}