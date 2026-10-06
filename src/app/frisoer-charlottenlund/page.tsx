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
  title: "Frisør Charlottenlund | Eddie's Cut — Book nu",
  description: "Leder du efter frisør i Charlottenlund? Besøg Eddie's Cut på Bernstorffsvej 67. Nem parkering, 25 års erfaring. Book tid online!",
  alternates: {
    canonical: '/frisoer-charlottenlund',
  },
};

export default function CharlottenlundPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="Din lokale frisør tæt på Charlottenlund"
          subtitle="Få byens bedste behandling i en afslappet atmosfære. Eddie's Cut ligger blot et stenkast fra Charlottenlund på Bernstorffsvej 67."
        />
        <About 
          title="Kvalitetsklipning nær Charlottenlund"
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