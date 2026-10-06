'use client';

import { motion } from 'framer-motion';
import BookButton from './ui/BookButton';
import Image from 'next/image';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export default function Hero({ 
  title = "Frisør i Hellerup med 25 års erfaring", 
  subtitle = "Læn dig tilbage i stolen og nyd behandlingen. Som din lokale frisør i Hellerup sørger Eddies Cut for god stemning og en rar atmosfære." 
}: HeroProps) {
  return (
    <section className="relative min-h-[100svh] bg-brand-offwhite flex items-center pt-32 pb-16 md:pt-20 md:pb-0 overflow-hidden snap-start scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full space-y-8 z-10 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-brand-charcoal leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-brand-charcoal/80 max-w-lg mx-auto md:mx-0">
            {subtitle}
          </p>
          <div className="flex justify-center md:justify-start">
            <BookButton text="Book Tid Nu" className="text-lg px-8 py-4 shadow-lg shadow-brand-olive/20" />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[450px] aspect-[3/4] mt-8 md:mt-0 mx-auto md:mx-0 rounded-2xl shadow-2xl"
        >
          <Image
            src="/images/eddie-hero-cut.jpg"
            alt="Eddie klipper en kunde hos sin frisør salon i Hellerup"
            fill
            priority={true}
            quality={75}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover rounded-2xl relative z-10"
          />
        </motion.div>

      </div>
    </section>
  );
}