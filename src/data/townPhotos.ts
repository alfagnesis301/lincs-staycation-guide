// Secondary "photo highlights" shown on town guide pages.
//
// Every photo is stored locally (no hotlinking) and must have a matching
// entry in imageCredits.ts (creditId) so licensing stays auditable and the
// /image-credits page lists it. Dimensions are the real file dimensions so
// next/image can reserve space and avoid CLS.
export interface TownPhoto {
  creditId: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export const townPhotos: Record<string, TownPhoto[]> = {
  lincoln: [
    {
      creditId: 'gallery-lincoln-brayford-pool',
      src: '/images/towns/lincoln/lincoln-brayford-pool-waterfront.jpg',
      alt: 'Boats moored on Brayford Pool with waterfront buildings in Lincoln',
      caption: 'Brayford Pool waterfront in the lower city',
      width: 1100,
      height: 825,
    },
    {
      creditId: 'gallery-lincoln-castle-west-gate',
      src: '/images/towns/lincoln/lincoln-castle-west-gate.jpg',
      alt: 'The stone west gate of Lincoln Castle',
      caption: 'The west gate of Lincoln Castle in the uphill quarter',
      width: 1100,
      height: 825,
    },
  ],
  skegness: [
    {
      creditId: 'gallery-skegness-beach-pier',
      src: '/images/towns/skegness/skegness-beach-and-pier.jpg',
      alt: 'Skegness beach at low tide with the pier stretching towards the sea',
      caption: 'Skegness beach and pier',
      width: 1100,
      height: 810,
    },
    {
      creditId: 'gallery-skegness-gibraltar-point',
      src: '/images/towns/skegness/skegness-gibraltar-point-reserve.jpg',
      alt: 'Open dunes and marshland at Gibraltar Point National Nature Reserve',
      caption: 'Gibraltar Point National Nature Reserve, south of the resort',
      width: 1100,
      height: 731,
    },
  ],
  stamford: [
    {
      creditId: 'gallery-stamford-burghley-house',
      src: '/images/towns/stamford/stamford-burghley-house-west-front.jpg',
      alt: 'The west front of Burghley House seen across parkland near Stamford',
      caption: 'Burghley House, a short distance from the town centre',
      width: 1100,
      height: 825,
    },
    {
      creditId: 'gallery-stamford-welland-meadows',
      src: '/images/towns/stamford/stamford-river-welland-meadows.jpg',
      alt: 'The River Welland flowing through meadows on the edge of Stamford',
      caption: 'The River Welland and meadows beside the town',
      width: 1100,
      height: 733,
    },
  ],
  boston: [
    {
      creditId: 'gallery-boston-market-place',
      src: '/images/towns/boston/boston-market-place.jpg',
      alt: 'Boston Market Place with historic buildings and market stalls',
      caption: 'The Market Place in central Boston',
      width: 1100,
      height: 965,
    },
    {
      creditId: 'gallery-boston-maud-foster-windmill',
      src: '/images/towns/boston/boston-maud-foster-windmill.jpg',
      alt: 'Maud Foster Windmill with its sails, beside the drain in Boston',
      caption: 'Maud Foster Windmill, close to the town centre',
      width: 1100,
      height: 1500,
    },
  ],
  louth: [
    {
      creditId: 'gallery-louth-market-place',
      src: '/images/towns/louth/louth-market-place.jpg',
      alt: 'The Market Place in Louth with shops and historic buildings',
      caption: "Louth's Market Place in the town centre",
      width: 1100,
      height: 825,
    },
    {
      creditId: 'gallery-louth-westgate',
      src: '/images/towns/louth/louth-westgate-georgian-street.jpg',
      alt: 'Georgian houses along Westgate in Louth',
      caption: 'Westgate, one of Louth\'s Georgian streets',
      width: 1100,
      height: 1467,
    },
  ],
};

export function getTownPhotos(slug: string): TownPhoto[] {
  return townPhotos[slug] ?? [];
}
