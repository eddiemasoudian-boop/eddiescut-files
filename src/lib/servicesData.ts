import { Scissors, Palette, Droplet, Sparkles } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  name: string;
  price: string;
  description?: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  shortTitle: string;
  icon: typeof Scissors;
  image: string;
  seoTitle: string;
  seoDescription: string;
  services: ServiceDetail[];
  faqs: FAQItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    slug: "klip-og-maskineklip",
    title: "Klip & Maskineklip",
    shortTitle: "Klip",
    icon: Scissors,
    image: "/images/service-klip.jpg",
    seoTitle: "Herreklip & Dameklip i Hellerup | Eddie's Cut",
    seoDescription: "Professionel herreklip, dameklip og børneklip i Hellerup. Erfaren frisør tæt på Gentofte og Charlottenlund. Book tid online hos Eddie's Cut.",
    services: [
      { name: "Dameklip", price: "fra 450 kr" },
      { name: "Herreklip", price: "450 kr" },
      { name: "Klip, vask & føn (kort/page)", price: "550 kr" },
      { name: "Klip, vask & føn (ryg/skulder)", price: "600 kr" },
      { name: "Maskineklip (én længde)", price: "250 kr" },
      { name: "Maskineklip (flere længder)", price: "300 kr" },
      { name: "Børneklip (under 12 år)", price: "350 kr" },
      { name: "Børneklip (under 6 år)", price: "400 kr" },
    ],
    faqs: [
      {
        question: "Skal jeg bestille tid til klipning på forhånd?",
        answer: "Ja, vi anbefaler altid at booke tid via vores onlinesystem, så du er sikret en tid uden ventetid i salonen på Bernstorffsvej."
      },
      {
        question: "Klipper I både damer, herrer og børn?",
        answer: "Ja, Eddie har over 25 års erfaring med herreklip, dameklip samt børneklip for både store og små."
      },
      {
        question: "Er der gode parkeringsmuligheder ved salonen?",
        answer: "Ja, der er nem og bekvem parkering tæt på salonen, uanset om du ankommer fra Hellerup, Gentofte eller Charlottenlund."
      }
    ]
  },
  {
    slug: "farve-og-striber",
    title: "Farve & Striber",
    shortTitle: "Farve",
    icon: Palette,
    image: "/images/service-farve.jpg",
    seoTitle: "Hårfarvning, Striber & Balayage i Hellerup | Eddie's Cut",
    seoDescription: "Få professionel hårfarve, balayage eller reflekser med staniol i Hellerup. Skånsom farvebehandling nær Gentofte og Charlottenlund.",
    services: [
      { name: "Bundfarve", price: "550 kr", description: "Bundfarve er en hårbehandling, hvor farvestoffet påføres ved rødderne på dit hår, også kendt som bunden." },
      { name: "Farve (kort hår)", price: "fra 600 kr" },
      { name: "Farve (op til skulderlangt)", price: "fra 800 kr" },
      { name: "Farve (ryglangt)", price: "fra 1100 kr" },
      { name: "Striber / refleks med hætte", price: "700 kr", description: "Reflekserer med til at give et andet spil og liv i dit hår end helfarvning." },
      { name: "Striber (kort hår med staniol)", price: "1200 kr" },
      { name: "Striber (skulderlangt med staniol)", price: "fra 2500 kr" },
      { name: "Striber (ryglangt med staniol)", price: "fra 2700 kr" },
      { name: "Balayage", price: "1200 kr", description: "Hårfarveteknik, der giver dig naturligt, solkysset og beachy hår uden skarpe udgroninger." },
      { name: "Farve af bryn", price: "150 kr" },
      { name: "Farve af øjenvipper", price: "200 kr" },
    ],
    faqs: [
      {
        question: "Hvad er forskellen på balayage og almindelige striber?",
        answer: "Balayage påføres i fri hånd for at skabe en blød, naturlig overgang uden markante udgroninger, mens striber med staniol giver en mere ensartet lysning helt fra hovedbunden."
      },
      {
        question: "Hvor lang tid tager en farvebehandling eller balayage?",
        answer: "En farvebehandling tager typisk mellem 1,5 og 3 timer afhængigt af hårets længde, tykkelse og den valgte teknik."
      },
      {
        question: "Farver I også bryn og vipper i forbindelse med klip eller farve?",
        answer: "Ja, du kan nemt tilvælge farvning af bryn og øjenvipper som en del af din samlede behandling."
      }
    ]
  },
  {
    slug: "permanent-og-pleje",
    title: "Permanent & Pleje",
    shortTitle: "Pleje",
    icon: Droplet,
    image: "/images/service-pleje.jpg",
    seoTitle: "Permanente Krøller & Hårkur i Hellerup | Eddie's Cut",
    seoDescription: "Få flotte, holdbare krøller eller en plejende hårkur hos Eddie's Cut i Hellerup. Skånsom hårpleje tæt på Gentofte og Charlottenlund.",
    services: [
      { name: "Krøller (kun toppen)", price: "1000 kr" },
      { name: "Krøller (kort hår)", price: "1500 kr" },
      { name: "Krøller (skulderlangt og længere)", price: "fra 2500 kr" },
      { name: "Reparation / Hårkur", price: "200 kr" },
    ],
    faqs: [
      {
        question: "Hvor længe holder en permanent med krøller?",
        answer: "En permanent holder normalt mellem 3 og 6 måneder, afhængigt af din hårstruktur, hårlængde og hvordan du plejer håret derhjemme."
      },
      {
        question: "Hvornår bør man vælge en genopbyggende hårkur?",
        answer: "En hårkur anbefales, hvis dit hår føles tørt, skadet af varmeredskaber eller efter en kemisk behandling som blegning eller permanent."
      }
    ]
  },
  {
    slug: "skaeg",
    title: "Skæg",
    shortTitle: "Skæg",
    icon: Sparkles,
    image: "/images/service-skaeg.jpg",
    seoTitle: "Barber & Skægtrimning i Hellerup | Eddie's Cut",
    seoDescription: "Professionel skægpleje og skægtrimning med saks eller maskine i Hellerup. Din lokale herrefrisør tæt på Gentofte og Charlottenlund.",
    services: [
      { name: "Skægtrim med maskine", price: "100 kr" },
      { name: "Skægstuds med saks", price: "fra 150 kr" },
    ],
    faqs: [
      {
        question: "Hvad indeholder en skægtrimning hos Eddie's Cut?",
        answer: "Behandlingen tilpasses dine ønsker med maskine eller saks for at skabe rene linjer, ensartet længde og en velplejet form."
      },
      {
        question: "Kan jeg kombinere skægtrimning med en herreklip?",
        answer: "Ja, mange af vores kunder vælger at kombinere herreklip med en skægtrimning i én samlet booking."
      }
    ]
  }
];