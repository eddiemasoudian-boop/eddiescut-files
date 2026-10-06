'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import BookButton from './ui/BookButton';
import Image from 'next/image';

const logoText = "Eddie's Cut";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Next.js routing hooks
  const pathname = usePathname();
  const router = useRouter();

  // 1. Ultra-precise scroll tracking engine using getBoundingClientRect
  useEffect(() => {
    // Only track scroll sections if we are on the homepage
    if (pathname !== '/') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['om-os', 'priser', 'kontakt'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // 2. Dynamic Browser Tab Title and URL Updater
  useEffect(() => {
    if (pathname !== '/') return;

    if (activeSection) {
      window.history.replaceState(null, '', `#${activeSection}`);
      const formattedName = activeSection === 'om-os' ? 'Om os' : activeSection.charAt(0).toUpperCase() + activeSection.slice(1);
      document.title = `${formattedName} | Eddie's Cut`;
    } else {
      window.history.replaceState(null, '', window.location.pathname);
      document.title = "Eddie's Cut | Frisør Hellerup";
    }
  }, [activeSection, pathname]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (pathname !== '/') {
      router.push('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); 

    // Cross-page routing logic
    if (pathname !== '/') {
      router.push(`/#${targetId}`);
      return;
    }

    // Standard smooth scroll if already on homepage
    const element = document.getElementById(targetId);
    if (element) {
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const mobileMenuVariants: Variants = {
    closed: { opacity: 0, height: 0 },
    open: { 
      opacity: 1, 
      height: '100vh',
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const mobileItemVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen || pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      aria-label="Hovednavigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 z-50 flex items-center gap-2 sm:gap-3">
            <motion.div
              whileHover={{ rotate: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="cursor-pointer flex items-center shrink-0"
              onClick={scrollToTop}
            >
              <Image 
                src="/images/razor.svg" 
                alt="Eddie's Cut Razor" 
                width={35} 
                height={35} 
                className="h-7 sm:h-9 w-auto object-contain drop-shadow-sm"
                priority
              />
            </motion.div>

            <motion.button 
              onClick={scrollToTop} 
              aria-label="Eddie's Cut - Gå til forsiden"
              className="cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-olive focus-visible:outline-none rounded border-0 bg-transparent p-0 flex items-center whitespace-nowrap"
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {logoText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0, color: '#0f172a', transition: { delay: index * 0.05, duration: 0.4 } },
                    hover: { y: -4, color: '#4a5d4e', transition: { delay: index * 0.02, duration: 0.2 } }
                  }}
                  style={{ whiteSpace: 'pre' }}
                  className="text-xs sm:text-sm md:text-2xl font-bold tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase"
                >
                  {char}
                </motion.span>
              ))}
            </motion.button>
          </div>

          <div className="hidden md:flex items-center p-1.5 bg-brand-charcoal/[0.03] rounded-full border border-brand-charcoal/5 shadow-inner">
            {['om-os', 'priser', 'kontakt'].map((item) => {
              const isActive = activeSection === item && pathname === '/';

              return (
                <a
                  key={item}
                  href={`/#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-5 py-2 rounded-full font-medium capitalize transition-colors duration-300 z-10 outline-none focus-visible:ring-2 focus-visible:ring-brand-olive cursor-pointer ${
                    isActive ? 'text-brand-olive' : 'text-brand-charcoal/60 hover:text-brand-charcoal/90'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-brand-charcoal/5"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.replace('-', ' ')}</span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4 z-50">
            <div className="hidden md:block">
              <BookButton text="Book Tid" className="cursor-pointer shadow-md" />
            </div>
            
            <button 
              className="md:hidden p-2 text-brand-charcoal min-h-touch min-w-touch flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-olive focus-visible:outline-none rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Luk menu" : "Åbn menu"}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-white/95 backdrop-blur-md absolute top-20 left-0 w-full flex flex-col items-center pt-10 space-y-6 shadow-xl overflow-y-auto pb-24 border-t border-brand-charcoal/5"
          >
            {['om-os', 'priser', 'kontakt'].map((item) => {
              const isActive = activeSection === item && pathname === '/';

              return (
                <motion.a
                  variants={mobileItemVariants}
                  key={item}
                  href={`/#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-2xl font-medium capitalize transition-all duration-300 min-h-touch flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-olive focus-visible:outline-none rounded-xl px-8 py-3 w-3/4 text-center ${
                    isActive 
                      ? 'bg-brand-olive/10 text-brand-olive shadow-sm' 
                      : 'text-brand-charcoal hover:bg-brand-charcoal/5'
                  }`}
                >
                  {item.replace('-', ' ')}
                </motion.a>
              );
            })}
            <motion.div 
              variants={mobileItemVariants} 
              className="pt-8 w-full px-8 max-w-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <BookButton className="w-full py-4 text-lg cursor-pointer shadow-lg" text="Book Tid" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}