'use client';

import { useBooking } from '@/context/BookingContext';

interface BookButtonProps {
  text?: string;
  className?: string;
}

export default function BookButton({ text = "Book Tid", className = "" }: BookButtonProps) {
  const { openModal } = useBooking();

  return (
    <button
      onClick={openModal}
      className={`cursor-pointer min-h-touch min-w-touch px-6 py-3 bg-brand-olive text-white font-medium tracking-wide rounded-lg hover:bg-opacity-90 transition-all active:scale-95 focus-visible:ring-4 focus-visible:ring-brand-olive/50 focus-visible:outline-none ${className}`}
      aria-label={`Åbn booking system for at ${text}`}
      role="button"
    >
      {text}
    </button>
  );
}