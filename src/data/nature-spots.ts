export type NatureSpot = {
  id: string;
  name: string;
  town: string;
  category:
    | 'Park'
    | 'Nature reserve'
    | 'Woodland'
    | 'Riverside walk'
    | 'Beach'
    | 'Country park'
    | 'Garden'
    | 'Outdoor space';
  description: string;
  bestFor: string;
  googleMapsUrl: string;
  officialWebsiteUrl?: string;
  tags: string[];
};

export function googleMapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const natureSpotsByTown: Record<string, NatureSpot[]> = {
  lincoln: [
    {
      id: 'lincoln-arboretum',
      name: 'Lincoln Arboretum',
      town: 'Lincoln',
      category: 'Park',
      description:
        'A historic city park with landscaped gardens, walking paths and green space close to central Lincoln.',
      bestFor: 'A peaceful break near the city centre',
      googleMapsUrl: googleMapsSearchUrl('Lincoln Arboretum Lincoln'),
      tags: ['City park', 'Walk', 'Free activity', 'Outdoor space'],
    },
    {
      id: 'hartsholme-country-park',
      name: 'Hartsholme Country Park',
      town: 'Lincoln',
      category: 'Country park',
      description:
        'A large country park with lakeside walks, woodland, picnic areas and family-friendly outdoor space.',
      bestFor: 'Families, dog walks and longer outdoor time',
      googleMapsUrl: googleMapsSearchUrl('Hartsholme Country Park Lincoln'),
      tags: ['Country park', 'Lake', 'Family-friendly', 'Dog-friendly'],
    },
  ],
  skegness: [
    {
      id: 'gibraltar-point',
      name: 'Gibraltar Point National Nature Reserve',
      town: 'Skegness',
      category: 'Nature reserve',
      description:
        'A major coastal nature reserve south of Skegness, known for wildlife, dunes, saltmarsh and big-sky walking routes.',
      bestFor: 'Wildlife, coastal walks and quieter nature time',
      googleMapsUrl: googleMapsSearchUrl('Gibraltar Point National Nature Reserve'),
      tags: ['Nature reserve', 'Wildlife', 'Coast', 'Walk'],
    },
    {
      id: 'tower-gardens-skegness',
      name: 'Tower Gardens',
      town: 'Skegness',
      category: 'Park',
      description:
        'A central green space near Skegness seafront, useful for a short pause between beach, shops and family attractions.',
      bestFor: 'A quick central outdoor stop',
      googleMapsUrl: googleMapsSearchUrl('Tower Gardens Skegness'),
      tags: ['Park', 'Central', 'Family-friendly'],
    },
  ],
  stamford: [
    {
      id: 'stamford-meadows',
      name: 'Stamford Meadows',
      town: 'Stamford',
      category: 'Riverside walk',
      description:
        'Open riverside meadows close to the town centre, popular for gentle walks and views around the River Welland.',
      bestFor: 'Riverside walks close to town',
      googleMapsUrl: googleMapsSearchUrl('Stamford Meadows'),
      tags: ['Riverside', 'Walk', 'Outdoor space'],
    },
    {
      id: 'burghley-park',
      name: 'Burghley Park',
      town: 'Stamford',
      category: 'Park',
      description:
        'Parkland surrounding Burghley House, useful for visitors combining Stamford with a heritage and outdoor day out.',
      bestFor: 'Heritage, walking and scenic parkland',
      googleMapsUrl: googleMapsSearchUrl('Burghley Park Stamford'),
      tags: ['Parkland', 'Heritage', 'Walk'],
    },
  ],
  louth: [
    {
      id: 'hubbards-hills',
      name: "Hubbard's Hills",
      town: 'Louth',
      category: 'Outdoor space',
      description:
        'A popular green valley and walking area on the edge of Louth, ideal for picnics, short walks and family time outdoors.',
      bestFor: 'Picnics, families and easy walks',
      googleMapsUrl: googleMapsSearchUrl("Hubbard's Hills Louth"),
      tags: ['Walk', 'Picnic', 'Family-friendly', 'Dog-friendly'],
    },
    {
      id: 'westgate-fields',
      name: 'Westgate Fields',
      town: 'Louth',
      category: 'Outdoor space',
      description:
        'Open green space close to Louth, useful for a simple local walk before or after exploring the town centre.',
      bestFor: 'A quiet local outdoor stop',
      googleMapsUrl: googleMapsSearchUrl('Westgate Fields Louth'),
      tags: ['Green space', 'Walk', 'Local'],
    },
  ],
  boston: [
    {
      id: 'witham-way-country-park',
      name: 'Witham Way Country Park',
      town: 'Boston',
      category: 'Country park',
      description:
        'A country park and riverside green space useful for walks, wildlife and quieter outdoor time near Boston.',
      bestFor: 'Riverside walks and nature',
      googleMapsUrl: googleMapsSearchUrl('Witham Way Country Park Boston'),
      tags: ['Country park', 'Riverside', 'Wildlife'],
    },
    {
      id: 'frampton-marsh',
      name: 'RSPB Frampton Marsh',
      town: 'Boston',
      category: 'Nature reserve',
      description:
        'A major wetland nature reserve near Boston, known for birdwatching, open landscapes and peaceful walks.',
      bestFor: 'Birdwatching and nature-focused day trips',
      googleMapsUrl: googleMapsSearchUrl('RSPB Frampton Marsh'),
      tags: ['Nature reserve', 'Birdwatching', 'Wildlife'],
    },
  ],
  grantham: [
    {
      id: 'wyndham-park',
      name: 'Wyndham Park',
      town: 'Grantham',
      category: 'Park',
      description:
        'A well-used town park with gardens, riverside areas and family-friendly green space close to Grantham centre.',
      bestFor: 'Families and central green space',
      googleMapsUrl: googleMapsSearchUrl('Wyndham Park Grantham'),
      tags: ['Park', 'Family-friendly', 'Walk'],
    },
    {
      id: 'belton-park',
      name: 'Belton Park',
      town: 'Grantham',
      category: 'Park',
      description:
        'Historic parkland around Belton House, useful for visitors planning a countryside and heritage day out near Grantham.',
      bestFor: 'Heritage parkland and walking',
      googleMapsUrl: googleMapsSearchUrl('Belton Park Grantham'),
      tags: ['Parkland', 'Heritage', 'Walk'],
    },
  ],
  spalding: [
    {
      id: 'ayscoughfee-gardens',
      name: 'Ayscoughfee Gardens',
      town: 'Spalding',
      category: 'Garden',
      description:
        'Formal gardens beside Ayscoughfee Hall, offering a pleasant outdoor stop close to central Spalding.',
      bestFor: 'Gardens and a calm town-centre pause',
      googleMapsUrl: googleMapsSearchUrl('Ayscoughfee Gardens Spalding'),
      tags: ['Garden', 'Heritage', 'Central'],
    },
    {
      id: 'river-welland-spalding',
      name: 'River Welland walks',
      town: 'Spalding',
      category: 'Riverside walk',
      description:
        'Gentle riverside walking routes through Spalding, useful for seeing the town at a slower pace.',
      bestFor: 'Easy riverside walks',
      googleMapsUrl: googleMapsSearchUrl('River Welland Spalding'),
      tags: ['Riverside', 'Walk', 'Outdoor space'],
    },
  ],
  sleaford: [
    {
      id: 'river-slea-walk',
      name: 'River Slea walk',
      town: 'Sleaford',
      category: 'Riverside walk',
      description:
        'A simple riverside route through Sleaford, useful for visitors combining the town centre with heritage stops.',
      bestFor: 'Short walks and local heritage',
      googleMapsUrl: googleMapsSearchUrl('River Slea Sleaford'),
      tags: ['Riverside', 'Walk', 'Heritage'],
    },
    {
      id: 'lollycocks-field',
      name: 'Lollycocks Field',
      town: 'Sleaford',
      category: 'Nature reserve',
      description: 'A small local nature area close to Sleaford, useful for a quiet outdoor pause near the town.',
      bestFor: 'Quiet nature and short walks',
      googleMapsUrl: googleMapsSearchUrl('Lollycocks Field Sleaford'),
      tags: ['Nature', 'Walk', 'Local'],
    },
  ],
  mablethorpe: [
    {
      id: 'mablethorpe-beach',
      name: 'Mablethorpe Beach',
      town: 'Mablethorpe',
      category: 'Beach',
      description:
        'A broad sandy beach and classic seaside setting, popular with families and visitors planning a coastal day out.',
      bestFor: 'Beach days and family seaside trips',
      googleMapsUrl: googleMapsSearchUrl('Mablethorpe Beach'),
      tags: ['Beach', 'Family-friendly', 'Coast'],
    },
    {
      id: 'queens-park-mablethorpe',
      name: "Queen's Park",
      town: 'Mablethorpe',
      category: 'Park',
      description:
        'A family-friendly park close to the seafront, useful for a break from the beach and traditional seaside activities.',
      bestFor: 'Families and relaxed outdoor time',
      googleMapsUrl: googleMapsSearchUrl("Queen's Park Mablethorpe"),
      tags: ['Park', 'Family-friendly', 'Seaside'],
    },
  ],
  'woodhall-spa': [
    {
      id: 'jubilee-park-woodhall-spa',
      name: 'Jubilee Park',
      town: 'Woodhall Spa',
      category: 'Park',
      description:
        'A popular park in Woodhall Spa with outdoor leisure space, useful for families and relaxed village breaks.',
      bestFor: 'Families and relaxed outdoor time',
      googleMapsUrl: googleMapsSearchUrl('Jubilee Park Woodhall Spa'),
      tags: ['Park', 'Family-friendly', 'Outdoor space'],
    },
    {
      id: 'spa-trail',
      name: 'The Spa Trail',
      town: 'Woodhall Spa',
      category: 'Riverside walk',
      description:
        'A traffic-free walking and cycling route linking Woodhall Spa with surrounding countryside and heritage stops.',
      bestFor: 'Walking, cycling and countryside views',
      googleMapsUrl: googleMapsSearchUrl('Spa Trail Woodhall Spa'),
      tags: ['Walk', 'Cycling', 'Countryside'],
    },
  ],
  horncastle: [
    {
      id: 'horncastle-spa-trail',
      name: 'Horncastle Spa Trail',
      town: 'Horncastle',
      category: 'Outdoor space',
      description:
        'A walking and cycling route connecting Horncastle with the surrounding countryside and Woodhall Spa direction.',
      bestFor: 'Walking and cycling from town',
      googleMapsUrl: googleMapsSearchUrl('Horncastle Spa Trail'),
      tags: ['Walk', 'Cycling', 'Countryside'],
    },
    {
      id: 'wolds-near-horncastle',
      name: 'Lincolnshire Wolds near Horncastle',
      town: 'Horncastle',
      category: 'Outdoor space',
      description:
        'Horncastle is a useful base for exploring the Lincolnshire Wolds, with scenic villages and countryside routes nearby.',
      bestFor: 'Countryside drives and walks',
      googleMapsUrl: googleMapsSearchUrl('Lincolnshire Wolds near Horncastle'),
      tags: ['Wolds', 'Countryside', 'Walk'],
    },
  ],
  gainsborough: [
    {
      id: 'gainsborough-riverside',
      name: 'River Trent riverside walks',
      town: 'Gainsborough',
      category: 'Riverside walk',
      description:
        'Riverside areas along the River Trent offer a simple outdoor addition to a heritage visit in Gainsborough.',
      bestFor: 'A short walk near the town centre',
      googleMapsUrl: googleMapsSearchUrl('River Trent Gainsborough'),
      tags: ['Riverside', 'Walk', 'Heritage'],
    },
    {
      id: 'richmond-park-gainsborough',
      name: 'Richmond Park',
      town: 'Gainsborough',
      category: 'Park',
      description: 'A local green space in Gainsborough suitable for a simple outdoor pause during a town visit.',
      bestFor: 'Local park time',
      googleMapsUrl: googleMapsSearchUrl('Richmond Park Gainsborough'),
      tags: ['Park', 'Outdoor space', 'Local'],
    },
  ],
  'market-rasen': [
    {
      id: 'willingham-woods',
      name: 'Willingham Woods',
      town: 'Market Rasen',
      category: 'Woodland',
      description:
        'A well-known woodland area near Market Rasen, popular for walking, cycling and countryside breaks.',
      bestFor: 'Woodland walks and cycling',
      googleMapsUrl: googleMapsSearchUrl('Willingham Woods Market Rasen'),
      tags: ['Woodland', 'Walk', 'Cycling', 'Dog-friendly'],
    },
    {
      id: 'market-rasen-racecourse-walks',
      name: 'Countryside around Market Rasen Racecourse',
      town: 'Market Rasen',
      category: 'Outdoor space',
      description:
        'Open countryside around Market Rasen makes the town a useful base for race days and Wolds-inspired outdoor trips.',
      bestFor: 'Race-day weekends and countryside exploring',
      googleMapsUrl: googleMapsSearchUrl('Market Rasen Racecourse countryside'),
      tags: ['Countryside', 'Walk', 'Race days'],
    },
  ],
  bourne: [
    {
      id: 'bourne-woods',
      name: 'Bourne Woods',
      town: 'Bourne',
      category: 'Woodland',
      description: 'A large woodland area close to Bourne, useful for walking, cycling and quiet countryside time.',
      bestFor: 'Woodland walks and nature',
      googleMapsUrl: googleMapsSearchUrl('Bourne Woods Lincolnshire'),
      tags: ['Woodland', 'Walk', 'Cycling', 'Dog-friendly'],
    },
    {
      id: 'wellhead-gardens',
      name: 'Wellhead Gardens',
      town: 'Bourne',
      category: 'Garden',
      description:
        "A peaceful garden and green space linked to Bourne's local heritage, suitable for a short visitor stop.",
      bestFor: 'Quiet garden time and local heritage',
      googleMapsUrl: googleMapsSearchUrl('Wellhead Gardens Bourne'),
      tags: ['Garden', 'Heritage', 'Outdoor space'],
    },
  ],
};
