// Single source of truth for NAP (name, address, phone), hours and the canonical domain.
// Keep every value identical to the Google Business Profile.

// Must match the domain set as "Primary" in Vercel → Settings → Domains.
// The other variant (with/without www) should redirect to this one.
export const SITE_URL = 'https://www.eddiescut.dk';

export const business = {
  name: 'Eddies Cut',
  alternateName: "Eddie's Cut",
  telephone: '+4527135533',
  telephoneDisplay: '+45 27 13 55 33',
  email: 'info@eddiescut.dk',
  streetAddress: 'Bernstorffsvej 67, st.',
  postalCode: '2900',
  addressLocality: 'Hellerup',
  latitude: 55.73505,
  longitude: 12.55301,
  // Google Business Profile listing (CID taken from the Maps embed in Contact.tsx)
  googleMapsUrl: 'https://maps.google.com/?cid=14377253327504299206',
  sameAs: [
    'https://maps.google.com/?cid=14377253327504299206',
    'https://facebook.com/2900eddiescut/',
    'https://instagram.com/eddiescut_hellerup/',
  ],
};

export interface OpeningDay {
  da: string;
  schema: string;
  opens?: string;
  closes?: string;
}

// Matches the Google Business Profile hours ("Confirmed by this business").
export const openingHours: OpeningDay[] = [
  { da: 'Mandag', schema: 'Monday', opens: '13:00', closes: '17:00' },
  { da: 'Tirsdag', schema: 'Tuesday', opens: '10:00', closes: '17:00' },
  { da: 'Onsdag', schema: 'Wednesday', opens: '10:00', closes: '17:00' },
  { da: 'Torsdag', schema: 'Thursday', opens: '10:00', closes: '17:00' },
  { da: 'Fredag', schema: 'Friday', opens: '10:00', closes: '17:00' },
  { da: 'Lørdag', schema: 'Saturday', opens: '10:00', closes: '14:00' },
  { da: 'Søndag', schema: 'Sunday' },
];