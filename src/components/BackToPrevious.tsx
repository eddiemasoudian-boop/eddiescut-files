'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface BackToPreviousProps {
  tabSlug?: string;
}

export default function BackToPrevious({ tabSlug }: BackToPreviousProps) {
  const targetHref = tabSlug ? `/?tab=${tabSlug}#priser` : '/#priser';

  return (
    <motion.div whileHover={{ x: -4 }} whileTap={{ scale: 0.97 }}>
      <Link
        href={targetHref}
        className="inline-flex items-center gap-2 text-brand-charcoal/70 hover:text-brand-olive font-medium transition-colors duration-200 cursor-pointer outline-none group"
        aria-label="Gå tilbage til prisoversigten"
      >
        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
        <span>Tilbage til oversigt</span>
      </Link>
    </motion.div>
  );
}