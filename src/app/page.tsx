import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Prices from '@/components/Prices';
import Contact from '@/components/Contact';
import BookingModal from '@/components/BookingModal';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
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