
export interface AreaPage {
  slug: string;
  area: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutIntro: string;
  aboutClosing: string;
  features: { title: string; body: string }[];
}

// Text unique to each area page. The layout is the same as the homepage; only the words differ,
// so Google doesn't see these pages as copies of the homepage.
// Keep travel facts general; only add bus lines or parking rules once Eddie has confirmed them.
export const areaPages: Record<'gentofte' | 'charlottenlund', AreaPage> = {
  gentofte: {
    slug: 'frisoer-gentofte',
    area: 'Gentofte',
    seoTitle: "Frisør Gentofte | Eddie's Cut — Klip, farve & skæg",
    seoDescription: "Frisør tæt på Gentofte: Eddie's Cut på Bernstorffsvej 67 klipper damer, herrer og børn og tilbyder farve og skægtrim. Nem parkering. Book online.",
    heroTitle: 'Din frisør tæt på Gentofte',
    heroSubtitle: "Eddie's Cut ligger på Bernstorffsvej 67, nær Gentofte Hospital og få minutter fra Gentofte. Personlig behandling og over 25 års erfaring.",
    aboutTitle: 'En erfaren frisør for kunder fra Gentofte',
    aboutIntro: 'Mange af salonens faste kunder kommer fra Gentofte. Salonen ligger på Bernstorffsvej tæt på Gentofte Hospital, så det er nemt at nå en klipning før eller efter arbejde. Eddie har drevet salonen siden 2006 og har over 25 års erfaring.',
    aboutClosing: 'Fra Gentofte er det få minutter i bil eller på cykel, og der er nem parkering i nærheden. Book online, så er du sikker på en tid uden ventetid.',
    features: [
      {
        title: 'Kort vej fra Gentofte',
        body: 'Salonen ligger på Bernstorffsvej 67 i stueetagen, tæt på Gentofte Hospital og Hellerup Station.',
      },
      {
        title: 'Nem parkering',
        body: 'Kommer du i bil fra Gentofte, er der nem parkering i nærheden af salonen.',
      },
      {
        title: 'Åbent seks dage om ugen',
        body: 'Mandag 13–17, tirsdag til fredag 10–17 og lørdag 10–14. Se alle ledige tider i online bookingen.',
      },
    ],
  },
  charlottenlund: {
    slug: 'frisoer-charlottenlund',
    area: 'Charlottenlund',
    seoTitle: "Frisør Charlottenlund | Eddie's Cut — Book tid online",
    seoDescription: "Frisør nær Charlottenlund: Eddie's Cut på Bernstorffsvej 67 tilbyder klip, farve, permanent og skægpleje med over 25 års erfaring. Book online.",
    heroTitle: 'Din frisør nær Charlottenlund',
    heroSubtitle: "Fra Charlottenlund er der kort vej til Eddie's Cut på Bernstorffsvej 67. En rolig salon, hvor der er tid til at lytte.",
    aboutTitle: 'Personlig frisør for kunder fra Charlottenlund',
    aboutIntro: "Kunder fra Charlottenlund vælger Eddie's Cut for den personlige behandling. Salonen er lille og rolig, og du bliver klippet af en frisør med over 25 års erfaring, som tager sig tid til at lytte til dine ønsker.",
    aboutClosing: 'Ud over klip og farve tilbyder salonen permanent og genopbyggende hårkure. Du bliver budt på kaffe, te eller chokolade, og fra Charlottenlund er det kun få minutters kørsel.',
    features: [
      {
        title: 'Kort vej fra Charlottenlund',
        body: 'Salonen ligger på Bernstorffsvej 67 i stueetagen, få minutter fra Charlottenlund og tæt på Hellerup Station.',
      },
      {
        title: 'Permanent & hårkur',
        body: 'Holdbare krøller til kort og langt hår samt kure til tørt eller skadet hår.',
      },
      {
        title: 'Åben lørdag',
        body: 'Lørdag 10–14 og på hverdage. Se alle ledige tider i online bookingen.',
      },
    ],
  },
};
