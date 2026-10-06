'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, HelpCircle } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import BookButton from '@/components/ui/BookButton';
import { FAQItem, ServiceDetail } from '@/lib/servicesData';

interface ClientServiceListProps {
  title: string;
  services: ServiceDetail[];
  faqs?: FAQItem[];
}

export default function ClientServiceList({ title, services, faqs = [] }: ClientServiceListProps) {
  const { openModal } = useBooking();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="lg:col-span-7 flex flex-col h-full pt-4 lg:pt-0">
      <h2 className="text-3xl font-bold text-brand-charcoal mb-6 px-4 border-b border-brand-charcoal/10 pb-4">
        Priser for {title}
      </h2>
      
      {/* Clickable Price List */}
      <ul className="space-y-1">
        {services.map((item, idx) => {
          const isEven = idx % 2 === 0;
          
          return (
            <li key={idx}>
              <button 
                onClick={openModal}
                className={`group relative w-full text-left cursor-pointer p-4 md:p-5 rounded-xl transition-all duration-300 border border-transparent hover:border-brand-olive/10 hover:shadow-md hover:bg-white ${
                  isEven ? 'bg-brand-olive/[0.02]' : 'bg-transparent'
                }`}
              >
                <div className="flex items-baseline w-full pr-8">
                  <h3 className="text-lg md:text-xl font-semibold text-brand-charcoal group-hover:text-brand-olive transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  <div className="flex-grow border-b-2 border-dotted border-brand-charcoal/20 mx-4 relative -top-1 opacity-50 group-hover:border-brand-olive/40 transition-colors duration-300"></div>
                  
                  <div className="flex items-center justify-end min-w-[90px] md:min-w-[100px] relative">
                    <span className="text-lg md:text-xl font-bold text-brand-olive whitespace-nowrap transform transition-transform duration-300 group-hover:-translate-x-6">
                      {item.price}
                    </span>
                    <span className="absolute right-0 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-olive flex items-center">
                      <ArrowRight size={20} />
                    </span>
                  </div>
                </div>
                
                {item.description && (
                  <p className="text-sm md:text-base text-brand-charcoal/60 mt-2 max-w-[85%] leading-relaxed group-hover:text-brand-charcoal/80 transition-colors duration-300">
                    {item.description}
                  </p>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Booking CTA Button */}
      <div className="mt-8 pt-8 border-t border-brand-charcoal/10 flex justify-start md:justify-end px-4">
        <BookButton text="Book Tid Nu" className="w-full md:w-auto text-lg px-8 py-4 shadow-lg cursor-pointer" />
      </div>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-12 pt-8 border-t border-brand-charcoal/10 px-2 sm:px-4"
        >
          {/* Header with Anchored Tooltip */}
          <div className="flex items-center justify-between gap-3 mb-6 relative">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-charcoal leading-snug">
              Ofte stillede spørgsmål om {title.toLowerCase()}
            </h3>

            <div 
              className="relative shrink-0"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
            >
              <button 
                type="button"
                className="p-1.5 text-brand-charcoal/50 hover:text-brand-olive transition-colors rounded-full outline-none cursor-help"
                aria-label="Information om spørgsmål og svar"
              >
                <HelpCircle size={22} />
              </button>

              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 bottom-full mb-2 w-64 sm:w-72 p-3 bg-brand-charcoal text-white text-xs sm:text-sm rounded-xl shadow-2xl z-50 pointer-events-none leading-relaxed"
                  >
                    Få svar på de mest almindelige spørgsmål omkring {title.toLowerCase()} og tidsbestilling.
                    <div className="absolute top-full right-3 border-4 border-transparent border-t-brand-charcoal"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Full-Width Accordion List */}
          <div className="space-y-3">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;

              return (
                <motion.div 
                  key={fIdx} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: fIdx * 0.08 }}
                  className={`border rounded-xl transition-all duration-200 ${
                    isOpen 
                      ? 'border-brand-olive/40 bg-white shadow-sm' 
                      : 'border-brand-charcoal/10 bg-brand-offwhite/50 hover:border-brand-olive/20'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full flex items-start sm:items-center justify-between p-4 sm:p-5 text-left font-semibold text-brand-charcoal hover:text-brand-olive transition-colors cursor-pointer outline-none gap-4"
                  >
                    <span className="text-base sm:text-lg leading-snug flex-grow">{faq.question}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-brand-olive transition-transform duration-300 shrink-0 mt-1 sm:mt-0 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-brand-charcoal/80 text-sm sm:text-base leading-relaxed border-t border-brand-charcoal/5 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}