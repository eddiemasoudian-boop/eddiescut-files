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

export const metadata: Metadata = {
  title: "Frisør Gentofte | Eddie's Cut — Klip & farve",
  description: "Leder du efter en erfaren frisør nær Gentofte? Besøg Eddie's Cut på Bernstorffsvej 67. Kun 5 min. væk med nem parkering. Book online her!",
  alternates: {
    canonical: '/frisoer-gentofte',
  },
};

export default function GentoftePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="Din professionelle frisør nær Gentofte"
          subtitle="Knivskarpe klipninger, god stemning og personlig service – kun 5 minutters kørsel fra Gentofte."
        />
        <About 
          title="Lokal kvalitet tæt på Gentofte"
        />
        <Features />
        <Prices />
      </main>
      <Contact />
      <BookingModal />
      <BackToTop />
      <Footer />
    </>
  );
}