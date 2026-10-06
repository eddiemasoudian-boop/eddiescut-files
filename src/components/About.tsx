'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface AboutProps {
  title?: string;
}

export default function About({
  title = "Frisør i Hellerup med hjerterum og 25 års erfaring"
}: AboutProps) {
  return (
    <section id="om-os" className="py-24 bg-white overflow-hidden snap-start scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Editorial Links */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal leading-tight">
              {title}
            </h2>

            <div className="space-y-4 text-lg text-brand-charcoal/80 leading-relaxed">
              <p>
                Eddie er en af Hellerups mest erfarne frisører og har drevet sin hyggelige salon på Bernstorffsvej siden 2006. Salonen er beliggende i lyse, indbydende lokaler tæt på både Gentofte og Charlottenlund, hvor behandlingen altid er professionel, personlig og nærværende.
              </p>

              {/* Editorial Internal Links passing authority to your 4 pillar routes */}
              <p>
                Uanset om du søger en præcis{' '}
                <Link href="/behandlinger/klip-og-maskineklip" className="text-brand-olive font-semibold hover:underline underline-offset-4">
                  herreklip eller dameklip
                </Link>
                , moderne{' '}
                <Link href="/behandlinger/farve-og-striber" className="text-brand-olive font-semibold hover:underline underline-offset-4">
                  hårfarvning og balayage
                </Link>
                , klassisk{' '}
                <Link href="/behandlinger/permanent-og-pleje" className="text-brand-olive font-semibold hover:underline underline-offset-4">
                  permanent med krøller
                </Link>
                {' '}eller professionel{' '}
                <Link href="/behandlinger/skaeg" className="text-brand-olive font-semibold hover:underline underline-offset-4">
                  skægtrimning
                </Link>
                , tages der god tid til at lytte til dine ønsker.
              </p>

              <p>
                Hos Eddie&apos;s Cut bydes du velkommen med friskbrygget kaffe, te og chokolade. Jeg gør mit yderste for at skabe den bedst mulige oplevelse og en rar atmosfære for dig, hver gang du sætter dig i stolen.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual Storytelling */}
          <div className="relative h-[450px] sm:h-[550px] w-full max-w-md mx-auto lg:max-w-none lg:mx-0 mt-8 lg:mt-0">
            {/* Background Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute top-0 right-0 w-[88%] sm:w-[85%] h-[82%] sm:h-[80%] rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <Image 
                src="/images/gallery-1.jpg" 
                alt="Frisør Eddie klipper kunde i salonen på Bernstorffsvej i Hellerup" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-top sm:object-center" 
              />
            </motion.div>
            
            {/* Floating Inset Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute bottom-2 left-0 sm:bottom-4 w-[42%] sm:w-[45%] h-[42%] sm:h-[45%] rounded-2xl overflow-hidden shadow-xl border-4 sm:border-8 border-white z-20"
            >
              <Image 
                src="/images/gallery-2.jpg" 
                alt="Eddie byder velkommen i sin frisørsalon tæt på Gentofte og Charlottenlund" 
                fill 
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                className="object-cover" 
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}