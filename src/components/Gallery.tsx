'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  return (
    <section id="galleri" className="py-24 bg-brand-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal text-center mb-4">Vores Stolteste Værk</h2>
          <p className="text-center text-brand-charcoal/60 mb-12 max-w-2xl mx-auto text-lg">
            Et udpluk af vores glade kunders forvandlinger.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg group"
          >
            <Image 
              src="/images/gallery-1.jpg" 
              alt="Frisure før og efter 1" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
            />
            {/* Subtle dark overlay on hover to make it feel premium */}
            <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/10 transition-colors duration-500"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg group"
          >
            <Image 
              src="/images/gallery-2.jpg" 
              alt="Frisure før og efter 2" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
            />
            <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/10 transition-colors duration-500"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}