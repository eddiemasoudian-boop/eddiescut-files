'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const logoText = "Eddie's Cut";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const copenhagenTime = new Intl.DateTimeFormat('da-DK', {
        timeZone: 'Europe/Copenhagen',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date());
      
      setTime(copenhagenTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-brand-charcoal text-brand-offwhite py-12 md:py-16 snap-start scroll-mt-20 overflow-hidden">
      {/* Subtle Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-olive/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          
          {/* Left: Footer Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <motion.button 
              onClick={scrollToTop} 
              className="text-2xl font-bold tracking-[0.2em] uppercase cursor-pointer flex border-0 bg-transparent p-0 outline-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
            >
              {logoText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.05 } },
                    hover: { y: -3, color: '#4a5d4e', transition: { duration: 0.2 } }
                  }}
                  style={{ whiteSpace: 'pre' }}
                  className="text-brand-offwhite"
                >
                  {char}
                </motion.span>
              ))}
            </motion.button>
            <p className="text-brand-offwhite/50 text-sm tracking-wide text-center md:text-left max-w-xs">
              Klassisk håndværk og uovertruffen service i hjertet af Hellerup.
            </p>
          </div>

          {/* Center: SEO Internal Links */}
          <div className="flex justify-center gap-12 text-sm font-medium tracking-wide">
            <div className="flex flex-col gap-3">
              <h4 className="text-white mb-2 uppercase tracking-widest text-xs">Behandlinger</h4>
              <Link href="/behandlinger/klip-og-maskineklip" className="text-brand-offwhite/60 hover:text-brand-olive transition-colors duration-300">Klip & Maskineklip</Link>
              <Link href="/behandlinger/farve-og-striber" className="text-brand-offwhite/60 hover:text-brand-olive transition-colors duration-300">Farve & Striber</Link>
              <Link href="/behandlinger/permanent-og-pleje" className="text-brand-offwhite/60 hover:text-brand-olive transition-colors duration-300">Permanent & Pleje</Link>
              <Link href="/behandlinger/skaeg" className="text-brand-offwhite/60 hover:text-brand-olive transition-colors duration-300">Skæg</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <h4 className="text-white mb-2 uppercase tracking-widest text-xs">Salonen</h4>
              <Link href="/frisoer-gentofte" className="text-brand-offwhite/60 hover:text-brand-olive transition-colors duration-300">Frisør Gentofte</Link>
              <Link href="/frisoer-charlottenlund" className="text-brand-offwhite/60 hover:text-brand-olive transition-colors duration-300">Frisør Charlottenlund</Link>
              <a href="/#priser" onClick={(e) => scrollToSection(e, 'priser')} className="text-brand-offwhite/60 hover:text-brand-olive transition-colors duration-300">Priser</a>
              <a href="/#kontakt" onClick={(e) => scrollToSection(e, 'kontakt')} className="text-brand-offwhite/60 hover:text-brand-olive transition-colors duration-300">Kontakt</a>
            </div>
          </div>

          {/* Right: Legal & Live Local Time */}
          <div className="flex flex-col items-center md:items-end gap-6 text-sm text-brand-offwhite/60">
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5 shadow-inner backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-olive opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-olive"></span>
              </span>
              <span className="text-brand-offwhite/80">Lokal tid: <span className="font-mono tracking-widest ml-1">{time || '...'}</span></span>
            </div>
            
            <div className="text-center md:text-right space-y-1.5">
              <p>Bernstorffsvej 67, 2900 Hellerup</p>
              <p>© {currentYear} Eddie's Cut. Alle rettigheder forbeholdes.</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}