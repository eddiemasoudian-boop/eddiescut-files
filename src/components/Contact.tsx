'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section 
      id="kontakt" 
      className="bg-brand-charcoal text-brand-offwhite py-16 snap-start scroll-mt-20"
      itemScope 
      itemType="https://schema.org/HairSalon"
    >
      <meta itemProp="name" content="Eddie's Cut" />
      <meta itemProp="image" content="https://eddiescut.dk/images/eddie-hero-cut.jpg" />
      <meta itemProp="priceRange" content="$$" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Location, Contact & Socials */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-brand-olive" size={22} />
                Adresse
              </h2>
              <div 
                className="text-brand-offwhite/90 leading-relaxed"
                itemProp="address" 
                itemScope 
                itemType="https://schema.org/PostalAddress"
              >
                <p className="font-semibold text-white">Eddie&apos;s Cut</p>
                <p itemProp="streetAddress">Bernstorffsvej 67</p>
                <p>
                  <span itemProp="postalCode">2900</span>{' '}
                  <span itemProp="addressLocality">Hellerup</span>
                </p>
                <p itemProp="addressCountry" content="DK">Danmark</p>
                <p className="text-sm text-brand-offwhite/60 mt-2">
                  Nem adgang og parkering – kun få minutter fra Gentofte og Charlottenlund.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
              <div className="space-y-3 text-brand-offwhite/90">
                <a 
                  href="tel:+4527135533" 
                  itemProp="telephone"
                  className="flex items-center gap-3 hover:text-white transition-colors min-h-touch"
                >
                  <Phone className="shrink-0 text-brand-olive" size={20} />
                  +45 27 13 55 33
                </a>
                <a 
                  href="mailto:info@eddiescut.dk" 
                  itemProp="email"
                  className="flex items-center gap-3 hover:text-white transition-colors min-h-touch"
                >
                  <Mail className="shrink-0 text-brand-olive" size={20} />
                  info@eddiescut.dk
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a 
                href="https://facebook.com/2900eddiescut/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-brand-offwhite/10 rounded-lg hover:bg-brand-olive transition-colors min-h-touch min-w-touch flex items-center justify-center" 
                aria-label="Besøg Eddie's Cut på Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/eddiescut_hellerup/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-brand-offwhite/10 rounded-lg hover:bg-brand-olive transition-colors min-h-touch min-w-touch flex items-center justify-center" 
                aria-label="Besøg Eddie's Cut på Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Column: Hours */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Clock className="text-brand-olive" size={22} />
              Åbningstider
            </h2>
            <ul className="space-y-3 text-brand-offwhite/90">
              <li className="flex justify-between border-b border-brand-offwhite/20 pb-2">
                <span>Mandag</span><span>14:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-brand-offwhite/20 pb-2">
                <span>Tirsdag</span><span>11:30 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-brand-offwhite/20 pb-2">
                <span>Onsdag</span><span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-brand-offwhite/20 pb-2">
                <span>Torsdag</span><span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-brand-offwhite/20 pb-2">
                <span>Fredag</span><span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-brand-offwhite/20 pb-2">
                <span>Lørdag</span><span>09:00 - 14:00</span>
              </li>
              <li className="flex justify-between text-[#9cae9f] font-semibold pt-1">
                <span>Søndag</span><span>Lukket</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="w-full h-64 lg:h-full min-h-[280px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative shadow-inner">
            <iframe
              title="Kortplacering af Eddie's Cut frisørsalon på Bernstorffsvej 67 i Hellerup"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.460166242097!2d12.553008577263359!3d55.73504999335774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525276a86856d5%3A0xc78643ba37b254c6!2sEddies%20Cut%20%E2%80%93%20Fris%C3%B8r%20i%20Hellerup!5e1!3m2!1sen!2sza!4v1786646142969!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full md:grayscale md:contrast-125 md:hover:grayscale-0 md:hover:contrast-100 transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}