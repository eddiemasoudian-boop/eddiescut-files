'use client';

import { useBooking } from '@/context/BookingContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function BookingModal() {
  const { isModalOpen, closeModal } = useBooking();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-brand-charcoal/80 backdrop-blur-sm p-0 md:p-4"
          aria-labelledby="booking-modal-title"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-full max-w-4xl bg-white md:rounded-xl h-[90vh] md:h-[80vh] flex flex-col overflow-hidden shadow-2xl relative"
          >
            <div className="bg-brand-olive text-white px-4 py-3 flex items-center justify-between z-10 shrink-0">
              <a 
                href="https://eddies-cut.planway.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-xs md:text-sm font-medium hover:underline min-h-touch focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded px-2"
                aria-label="Åbn booking i et nyt vindue, hvis du oplever problemer"
              >
                Sikker online booking. Oplever du problemer? [Klik her for at åbne direkte]
                <ExternalLink size={14} className="ml-2" aria-hidden="true" />
              </a>
              <button 
                onClick={closeModal} 
                className="flex items-center gap-2 p-2 hover:bg-white/20 rounded transition-colors min-h-touch min-w-touch focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                aria-label="Luk booking vindue"
              >
                <span className="hidden md:block text-sm font-medium">Luk</span>
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            
            <div className="flex-1 w-full bg-brand-offwhite overflow-hidden relative">
              <iframe 
                src="https://eddies-cut.planway.com/" 
                title="Booking system leveret af Planway"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                aria-label="Planway Booking Kalender"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}