'use client';

import { UserCheck, Droplet, Gem } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const featuresData = [
  {
    title: "Individuel konsultation",
    body: "Jeg tilbyder skræddersyede behandlinger med personlig rådgivning, så du får det perfekte look, der passer til din stil og personlighed.",
    icon: UserCheck
  },
  {
    title: "Topkvalitetsprodukter",
    body: "Jeg bruger kun de bedste produkter til at pleje og style dit hår, så du opnår et sundt og smukt resultat, der holder længe.",
    icon: Droplet
  },
  {
    title: "Luksuriøs atmosfære",
    body: "Nyd en afslappende og eksklusiv oplevelse i min salon i Hellerup, hvor kvalitet, personlig service og godt håndværk er i fokus. Jeg tilbyder professionelle behandlinger i rolige og indbydende omgivelser med fokus på smukke, naturlige resultater. Mange af mine kunder kommer fra Hellerup, Gentofte og Charlottenlund og vælger salonen for den høje kvalitet, den personlige service og den eksklusive oplevelse. Her får du behandlinger, der lever op til dine forventninger til en pris, der afspejler kvaliteten.",
    icon: Gem
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Features() {
  return (
    <section className="py-24 bg-brand-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0px 15px 30px rgba(74, 93, 78, 0.12)" }}
                className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-white border border-brand-charcoal/5 cursor-default transition-colors duration-300"
              >
                <div className="p-4 bg-brand-olive/10 rounded-full text-brand-olive mb-2">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal">{feature.title}</h3>
                <p className="text-brand-charcoal/70 leading-relaxed">{feature.body}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}