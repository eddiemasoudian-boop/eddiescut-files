'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BookButton from './ui/BookButton';
import { useBooking } from '@/context/BookingContext';
import { servicesData } from '@/lib/servicesData';

function PricesContent() {
  const searchParams = useSearchParams();
  const initialTabParam = searchParams.get('tab');
  
  // Find initial tab index based on URL parameter or default to 0
  const initialIndex = initialTabParam 
    ? servicesData.findIndex(s => s.slug === initialTabParam || s.shortTitle.toLowerCase() === initialTabParam.toLowerCase())
    : 0;

  const [activeTab, setActiveTab] = useState(initialIndex >= 0 ? initialIndex : 0);
  const { openModal } = useBooking();

  // Sync if URL search params change
  useEffect(() => {
    if (initialTabParam) {
      const idx = servicesData.findIndex(
        s => s.slug === initialTabParam || s.shortTitle.toLowerCase() === initialTabParam.toLowerCase()
      );
      if (idx >= 0) {
        setActiveTab(idx);
      }
    }
  }, [initialTabParam]);

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    const slug = servicesData[idx].slug;
    window.history.replaceState(null, '', `/?tab=${slug}#priser`);
  };

  return (
    <section id="priser" className="py-24 bg-brand-offwhite overflow-hidden snap-start scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">Priser & Behandlinger</h2>
          <p className="text-brand-charcoal/60 text-lg">Vælg en kategori for at se mine services.</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 p-1.5 bg-brand-charcoal/[0.03] rounded-full border border-brand-charcoal/5 shadow-inner">
            {servicesData.map((category, idx) => {
              const isActive = activeTab === idx;
              const Icon = category.icon;
              
              return (
                <button
                  key={idx}
                  onClick={() => handleTabChange(idx)}
                  className={`relative flex items-center gap-2 px-5 md:px-7 py-2.5 rounded-full font-medium transition-colors duration-300 outline-none cursor-pointer z-10 ${
                    isActive ? 'text-brand-olive' : 'text-brand-charcoal/70 hover:text-brand-charcoal/90'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-highlight"
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-brand-charcoal/5"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={18} className={isActive ? 'text-brand-olive' : 'text-brand-charcoal/40'} />
                    {category.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-brand-charcoal/5 border border-brand-charcoal/10 p-5 md:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative z-10">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-28 aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-lg border border-brand-charcoal/5 bg-brand-offwhite">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={servicesData[activeTab].image}
                      alt={servicesData[activeTab].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent mix-blend-multiply"></div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: Menu List */}
            <div className="lg:col-span-7 flex flex-col h-full pt-4 lg:pt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex-grow"
                >
                  <h3 className="text-3xl font-bold text-brand-charcoal mb-6 px-4 border-b border-brand-charcoal/10 pb-4">
                    {servicesData[activeTab].title}
                  </h3>
                  
                  <ul className="space-y-1">
                    {servicesData[activeTab].services.map((service, sIdx) => {
                      const isEven = sIdx % 2 === 0;
                      
                      return (
                        <li key={sIdx}>
                          <button 
                            onClick={openModal}
                            className={`group relative w-full text-left cursor-pointer p-4 md:p-5 rounded-xl transition-all duration-300 border border-transparent hover:border-brand-olive/10 hover:shadow-md hover:bg-white ${
                              isEven ? 'bg-brand-olive/[0.02]' : 'bg-transparent'
                            }`}
                          >
                            <div className="flex items-baseline w-full pr-8">
                              <h4 className="text-lg md:text-xl font-semibold text-brand-charcoal group-hover:text-brand-olive transition-colors duration-300">
                                {service.name}
                              </h4>
                              <div className="flex-grow border-b-2 border-dotted border-brand-charcoal/20 mx-4 relative -top-1 opacity-50 group-hover:border-brand-olive/40 transition-colors duration-300"></div>
                              <div className="flex items-center justify-end min-w-[90px] md:min-w-[100px] relative">
                                <span className="text-lg md:text-xl font-bold text-brand-olive whitespace-nowrap transform transition-transform duration-300 group-hover:-translate-x-6">
                                  {service.price}
                                </span>
                                <span className="absolute right-0 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-olive flex items-center">
                                  <ArrowRight size={20} />
                                </span>
                              </div>
                            </div>
                            
                            {service.description && (
                              <p className="text-sm md:text-base text-brand-charcoal/60 mt-2 max-w-[85%] leading-relaxed group-hover:text-brand-charcoal/80 transition-colors duration-300">
                                {service.description}
                              </p>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </AnimatePresence>

              {/* Bottom CTA & Sub-Page Link */}
              <div className="mt-8 pt-8 border-t border-brand-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-6 px-4">
                <Link 
                  href={`/behandlinger/${servicesData[activeTab].slug}`}
                  className="text-brand-olive font-medium flex items-center gap-2 hover:underline group"
                >
                  Læs mere om {servicesData[activeTab].shortTitle.toLowerCase()} 
                  <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-1" />
                </Link>

                <BookButton text="Book Tid Nu" className="w-full md:w-auto text-lg px-8 py-4 shadow-lg cursor-pointer" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function Prices() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Indlæser priser...</div>}>
      <PricesContent />
    </Suspense>
  );
}