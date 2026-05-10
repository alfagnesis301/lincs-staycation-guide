export interface ImageCredit {
  id: string;
  /** Descriptive title of what the image shows */
  title: string;
  /** Photographer or creator name */
  author: string;
  /** Platform or service where the image originates */
  source: string;
  sourceUrl: string;
  /** Licence name */
  licence: string;
  licenceUrl: string;
  /** Any post-processing applied */
  modifications: string;
  /** Local path in /public */
  localPath: string;
  /** Human-readable description of where this image appears */
  pageUsedOn: string;
  /** Route(s) that use this image */
  pageHref: string | string[];
}

/**
 * All images used across Lincs Staycation Guide.
 *
 * All photographs are sourced from Wikimedia Commons under Creative Commons
 * licences. Images are stored locally in /public/images/lincolnshire/ —
 * no hotlinking. Full attribution is also recorded in:
 * /public/images/ATTRIBUTIONS.md
 */
export const imageCredits: ImageCredit[] = [
  {
    id: 'town-lincoln',
    title: 'Steep Hill, Lincoln — view towards Lincoln Cathedral',
    author: 'Yarah',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bottom_of_Steep_Hill.JPG',
    licence: 'CC BY-SA 3.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    modifications: 'Resized to 1200px wide, optimised as progressive JPEG',
    localPath: '/images/lincolnshire/lincoln.jpg',
    pageUsedOn: 'Town Guides index, Lincoln town guide',
    pageHref: ['/town-guides', '/town-guides/lincoln'],
  },
  {
    id: 'town-skegness',
    title: 'Clock Tower, Skegness seafront',
    author: 'Mick Knapton',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Clock_Tower,_Skegness_1.JPG',
    licence: 'CC BY-SA 3.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    modifications: 'Renamed for web use',
    localPath: '/images/lincolnshire/skegness.jpg',
    pageUsedOn: 'Town Guides index, Skegness town guide',
    pageHref: ['/town-guides', '/town-guides/skegness'],
  },
  {
    id: 'town-stamford',
    title: 'Stamford townscape, Lincolnshire',
    author: 'Michael Trolove / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Stamford_town_scape_-_geograph.org.uk_-_1737389.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Resized to 1200px wide, optimised as progressive JPEG',
    localPath: '/images/lincolnshire/stamford.jpg',
    pageUsedOn: 'Town Guides index, Stamford town guide',
    pageHref: ['/town-guides', '/town-guides/stamford'],
  },
  {
    id: 'town-louth',
    title: "St James's Church, Louth",
    author: 'Michael Garlick / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Louth,_St._James%27s_Church_-_geograph.org.uk_-_5141257.jpg",
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Resized to 1200px wide, optimised as progressive JPEG',
    localPath: '/images/lincolnshire/louth.jpg',
    pageUsedOn: 'Town Guides index, Louth town guide',
    pageHref: ['/town-guides', '/town-guides/louth'],
  },
  {
    id: 'town-boston',
    title: "St Botolph's Church, Boston (The Boston Stump)",
    author: 'Alan Heardman / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:St_Botolph%27s_Church_Boston_-_(Boston_Stump)_-_geograph.org.uk_-_623944.jpg",
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Renamed for web use',
    localPath: '/images/lincolnshire/boston.jpg',
    pageUsedOn: 'Town Guides index, Boston town guide',
    pageHref: ['/town-guides', '/town-guides/boston'],
  },
  {
    id: 'town-grantham',
    title: "St Wulfram's Church, Grantham",
    author: 'Martinevans123',
    source: 'Wikimedia Commons',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:St_Wulfram%27s,_Grantham_-_from_school.jpg",
    licence: 'CC BY-SA 3.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    modifications: 'Resized to 1200px wide, optimised as progressive JPEG',
    localPath: '/images/lincolnshire/grantham.jpg',
    pageUsedOn: 'Town Guides index, Grantham town guide',
    pageHref: ['/town-guides', '/town-guides/grantham'],
  },
  {
    id: 'town-spalding',
    title: 'Ayscoughfee Hall, Spalding — medieval manor house and museum',
    author: 'Richard Humphrey / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ayscoughfee_Hall,_Spalding_(geograph_2027638).jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Resized to 1200×800px, optimised as progressive JPEG',
    localPath: '/images/lincolnshire/spalding.jpg',
    pageUsedOn: 'Town Guides index, Spalding town guide',
    pageHref: ['/town-guides', '/town-guides/spalding'],
  },
  {
    id: 'town-sleaford',
    title: 'Rooftops of Sleaford, Lincolnshire',
    author: 'Neil Theasby / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rooftops_of_Sleaford_-_geograph.org.uk_-_5534149.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Resized to 1200px wide, optimised as progressive JPEG',
    localPath: '/images/lincolnshire/sleaford.jpg',
    pageUsedOn: 'Town Guides index, Sleaford town guide',
    pageHref: ['/town-guides', '/town-guides/sleaford'],
  },
  {
    id: 'town-mablethorpe',
    title: 'Mablethorpe beach, Lincolnshire Coast',
    author: 'Jonathan Thacker / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Outlet_to_the_sea,_Mablethorpe_beach_-_geograph.org.uk_-_3280708.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Renamed for web use',
    localPath: '/images/lincolnshire/mablethorpe.jpg',
    pageUsedOn: 'Town Guides index, Mablethorpe town guide',
    pageHref: ['/town-guides', '/town-guides/mablethorpe'],
  },
  {
    id: 'town-woodhall-spa',
    title: 'Kinema in the Woods, Woodhall Spa',
    author: 'Josie Campbell / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kinema_in_the_Woods_-_geograph.org.uk_-_2519348.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Resized to 1200px wide, optimised as progressive JPEG',
    localPath: '/images/lincolnshire/woodhall-spa.jpg',
    pageUsedOn: 'Town Guides index, Woodhall Spa town guide',
    pageHref: ['/town-guides', '/town-guides/woodhall-spa'],
  },
  {
    id: 'town-horncastle',
    title: 'Bridge Street, Horncastle',
    author: 'Dave Hitchborne / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bridge_Street,_Horncastle_-_geograph.org.uk_-_2858114.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Renamed for web use',
    localPath: '/images/lincolnshire/horncastle.jpg',
    pageUsedOn: 'Town Guides index, Horncastle town guide',
    pageHref: ['/town-guides', '/town-guides/horncastle'],
  },
  {
    id: 'town-gainsborough',
    title: 'Gainsborough Old Hall, Lincolnshire',
    author: 'Chris Coleman / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gainsborough_Old_Hall_-_geograph.org.uk_-_72817.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Renamed for web use',
    localPath: '/images/lincolnshire/gainsborough.jpg',
    pageUsedOn: 'Town Guides index, Gainsborough town guide',
    pageHref: ['/town-guides', '/town-guides/gainsborough'],
  },
  {
    id: 'town-market-rasen',
    title: 'Queen Street, Market Rasen',
    author: 'Peter Church / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Queen_Street,_Market_Rasen_-_geograph.org.uk_-_1322483.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Resized to 1200px wide, optimised as progressive JPEG',
    localPath: '/images/lincolnshire/market-rasen.jpg',
    pageUsedOn: 'Town Guides index, Market Rasen town guide',
    pageHref: ['/town-guides', '/town-guides/market-rasen'],
  },
  {
    id: 'town-bourne',
    title: 'Bourne Town Centre, Lincolnshire',
    author: 'Tony Atkin / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bourne_Town_Centre_-_geograph.org.uk_-_96987.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Renamed for web use',
    localPath: '/images/lincolnshire/bourne.jpg',
    pageUsedOn: 'Town Guides index, Bourne town guide',
    pageHref: ['/town-guides', '/town-guides/bourne'],
  },
  {
    id: 'coastal-sutton-on-sea',
    title: 'Beach huts at Sutton on Sea',
    author: 'Richard Hoare / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Beach_huts_at_Sutton_on_Sea_-_geograph.org.uk_-_1804145.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Resized to 1200px wide, optimised as progressive JPEG',
    localPath: '/images/lincolnshire/sutton-on-sea.jpg',
    pageUsedOn: 'Lincolnshire Coast page',
    pageHref: '/lincolnshire-coast',
  },
  {
    id: 'coastal-chapel-st-leonards',
    title: 'Beach and promenade at Chapel St Leonards',
    author: 'Mat Fascione / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Beach_and_promenade_at_Chapel_St_Leonards_-_geograph.org.uk_-_4768080.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Renamed for web use',
    localPath: '/images/lincolnshire/chapel-st-leonards.jpg',
    pageUsedOn: 'Lincolnshire Coast page',
    pageHref: '/lincolnshire-coast',
  },
  {
    id: 'coastal-ingoldmells',
    title: 'Ingoldmells Beach, Lincolnshire Coast',
    author: 'Tony Atkin / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ingoldmells_Beach_-_geograph.org.uk_-_237879.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Renamed for web use',
    localPath: '/images/lincolnshire/ingoldmells.jpg',
    pageUsedOn: 'Lincolnshire Coast page',
    pageHref: '/lincolnshire-coast',
  },
  {
    id: 'coastal-anderby-creek',
    title: 'Anderby Creek Beach, Lincolnshire',
    author: 'Stephen McKay / Geograph Britain and Ireland',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anderby_Creek_Beach_-_geograph.org.uk_-_7436054.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Resized to 1200px wide, optimised as progressive JPEG',
    localPath: '/images/lincolnshire/anderby-creek.jpg',
    pageUsedOn: 'Lincolnshire Coast page',
    pageHref: '/lincolnshire-coast',
  },
];

/** Look up a single credit by its id */
export function getImageCredit(id: string): ImageCredit | undefined {
  return imageCredits.find((c) => c.id === id);
}
