export interface Town {
  id: string;
  name: string;
  slug: string;
  image?: string;
  description: string;
  extendedDescription: string[];
  bestFor: string;
  regionType: 'City' | 'Coast' | 'Market town' | 'Countryside';
  categories: string[];
}

export const towns: Town[] = [
  {
    id: 'lincoln',
    name: 'Lincoln',
    slug: 'lincoln',
    image: '/images/lincolnshire/lincoln.jpg',
    description: 'A historic cathedral city with a stunning medieval quarter, vibrant independent shops, riverside walks and a lively food scene.',
    extendedDescription: [
      'Lincoln is one of England\'s most rewarding cities for visitors. The dramatic \'Uphill\' area is home to the magnificent Lincoln Cathedral, which dominated the skyline for over 200 years as the tallest building in the world, and the imposing Lincoln Castle, where one of the four surviving copies of the Magna Carta is held. The medieval Steep Hill, regularly voted one of Britain\'s best streets, connects the historic quarter to the bustling waterfront area below, lined with independent boutiques, antique shops and artisan food producers.',
      'Down in the \'Downhill\' quarter, the Brayford Waterfront offers a vibrant social scene with restaurants, bars and cafés overlooking the marina. The city has a thriving cultural calendar, from the renowned Lincoln Christmas Market — one of the largest in Europe — to summer festivals, food fairs and open-air events at the castle grounds. With excellent rail connections to London and the East Midlands, Lincoln makes an ideal base for exploring the wider county, from the Lincolnshire Wolds to the coast.',
    ],
    bestFor: 'History, culture and city breaks',
    regionType: 'City',
    categories: ['places-to-stay', 'things-to-do', 'food-drink'],
  },
  {
    id: 'skegness',
    name: 'Skegness',
    slug: 'skegness',
    image: '/images/lincolnshire/skegness.jpg',
    description: 'A classic British seaside resort with sandy beaches, amusement parks, holiday parks and a family-friendly atmosphere.',
    extendedDescription: [
      'Skegness has been one of Britain\'s favourite seaside destinations since the Victorian era, when the railway first brought holidaymakers to its wide, sandy beaches. The town\'s famous \'Jolly Fisherman\' poster declared it \'SO bracing\', and the brisk North Sea air and golden sands remain a major draw. The seafront promenade stretches for miles, lined with traditional amusements, fish and chip shops, ice cream parlours and family entertainment that captures the spirit of a classic British seaside holiday.',
      'Beyond the traditional arcades and funfairs, Skegness offers a surprising variety of experiences. Naturalists can explore the nearby Gibraltar Point National Nature Reserve, a stunning coastal habitat for birdwatching and peaceful walks. The town is surrounded by some of the most popular holiday parks in the country, offering self-catering breaks with swimming pools, entertainment and direct beach access. For families, Skegness remains one of the most affordable and enjoyable seaside breaks on the east coast, with easy access to neighbouring resorts at Ingoldmells and Chapel St Leonards.',
    ],
    bestFor: 'Seaside holidays and family fun',
    regionType: 'Coast',
    categories: ['places-to-stay', 'things-to-do', 'lincolnshire-coast', 'family-days-out'],
  },
  {
    id: 'stamford',
    name: 'Stamford',
    slug: 'stamford',
    image: '/images/lincolnshire/stamford.jpg',
    description: 'One of England\'s finest stone towns with Georgian architecture, boutique shopping, cosy pubs and nearby Burghley House.',
    extendedDescription: [
      'Stamford is widely regarded as one of the most beautiful towns in England. Its streets are lined with honey-coloured limestone buildings spanning medieval, Tudor and elegant Georgian periods, creating a remarkably harmonious townscape that has attracted film crews from productions including Pride and Prejudice and The Da Vinci Code. The town centre is a delight for strolling, with a wealth of independent boutiques, antique dealers, art galleries and some of the finest pubs and restaurants in the county.',
      'Just a short walk from the town centre lies Burghley House, one of the grandest Elizabethan mansions in England, set within a magnificent deer park landscaped by Capability Brown. Stamford\'s thriving food scene includes award-winning restaurants, traditional coaching inns serving real ales, artisan bakeries and a popular weekly market. The town also sits on the edge of the Welland Valley, offering excellent walking and cycling along gentle river paths and through rolling countryside. For weekend breaks combining history, architecture and gastronomy, Stamford is hard to beat.',
    ],
    bestFor: 'Weekend breaks and fine dining',
    regionType: 'Market town',
    categories: ['places-to-stay', 'food-drink', 'things-to-do'],
  },
  {
    id: 'louth',
    name: 'Louth',
    slug: 'louth',
    image: '/images/lincolnshire/louth.jpg',
    description: 'A charming Wolds market town known for its independent shops, weekly markets, local produce and easy access to the coast.',
    extendedDescription: [
      'Louth is often described as the capital of the Lincolnshire Wolds, and it lives up to the title with a thriving independent high street that puts many larger towns to shame. The town\'s elegant spire of St James\' Church — the tallest parish church spire in England — rises above a network of characterful streets packed with independent butchers, bakers, cheesemongers, bookshops and traditional ironmongers. The weekly markets on Wednesdays, Fridays and Saturdays bring the town centre to life with stalls selling locally grown produce, artisan foods and antiques.',
      'Louth sits at the western edge of the Lincolnshire Wolds, an Area of Outstanding Natural Beauty offering some of the best walking in eastern England. The gentle chalk hills, hidden valleys and quiet country lanes are perfect for exploring on foot or by bicycle. The town is also just a short drive from the coast at Mablethorpe, making it an excellent base for combining countryside and seaside experiences. With a growing café culture and several well-regarded pubs, Louth rewards visitors who take the time to explore beyond the main road.',
    ],
    bestFor: 'Market days and Wolds walking',
    regionType: 'Market town',
    categories: ['things-to-do', 'food-drink'],
  },
  {
    id: 'boston',
    name: 'Boston',
    slug: 'boston',
    image: '/images/lincolnshire/boston.jpg',
    description: 'A historic market town on the River Witham, famous for the Boston Stump church tower, weekly markets and fenland heritage.',
    extendedDescription: [
      'Boston\'s most iconic landmark, the 83-metre tower of St Botolph\'s Church — affectionately known as the \'Boston Stump\' — has guided travellers across the flat fenland landscape for centuries. The tower offers panoramic views across the Wash and surrounding countryside, and the church itself is one of the largest and most impressive parish churches in England. The town played a pivotal role in the story of the Pilgrim Fathers, who attempted to flee to religious freedom from its quayside in 1607, a connection celebrated at the Guildhall Museum.',
      'Modern Boston retains its strong market town character with a bustling Wednesday and Saturday market, a mix of independent and chain shops, and a riverside setting that gives the town centre a distinctive feel. The surrounding fenland is some of the richest agricultural land in Britain, and local produce features prominently in the town\'s food offering. For visitors interested in history, heritage and the story of how a small Lincolnshire port shaped the founding of one of America\'s great cities, Boston is a rewarding destination.',
    ],
    bestFor: 'History and heritage',
    regionType: 'Market town',
    categories: ['things-to-do', 'food-drink'],
  },
  {
    id: 'grantham',
    name: 'Grantham',
    slug: 'grantham',
    image: '/images/lincolnshire/grantham.jpg',
    description: 'A south Lincolnshire market town with good transport links, nearby country estates and access to the Vale of Belvoir.',
    extendedDescription: [
      'Grantham sits at the crossroads of the A1 and the East Coast Main Line, making it one of the best-connected towns in Lincolnshire. The town has a long history — it was here that Isaac Newton attended grammar school, and the town\'s heritage is celebrated at the Grantham Museum. The Angel and Royal Hotel on the high street claims to be one of the oldest coaching inns in England, and the town centre retains a pleasant mix of historic architecture and practical market town amenities.',
      'The real draw for visitors is the surrounding countryside. Belton House, a magnificent National Trust property just north of town, offers grand interiors, formal gardens and extensive parkland perfect for family walks. To the west lies the Vale of Belvoir, with Belvoir Castle perched dramatically on a hilltop overlooking rolling farmland. Grantham also provides easy access to Woolsthorpe Manor, Newton\'s birthplace, where the famous apple tree still grows. For those looking for country house visits, gentle walks and a taste of rural Lincolnshire, Grantham is a practical and rewarding base.',
    ],
    bestFor: 'Country house visits and day trips',
    regionType: 'Market town',
    categories: ['things-to-do', 'food-drink', 'places-to-stay'],
  },
  {
    id: 'spalding',
    name: 'Spalding',
    slug: 'spalding',
    image: '/images/lincolnshire/spalding.jpg',
    description: 'A fenland town known for its riverside walks, spring bulb fields and local garden centres.',
    extendedDescription: [
      'Spalding is the heart of south Lincolnshire\'s bulb-growing country, and in spring the surrounding fields burst into spectacular colour with acres of tulips, daffodils and hyacinths. Although the famous Spalding Flower Parade no longer runs, the horticultural heritage remains central to the town\'s identity, with excellent garden centres, nurseries and seasonal flower displays throughout the area. The River Welland flows through the town centre, and the riverside walks offer a peaceful way to explore Spalding on foot.',
      'The town has a quiet, practical charm typical of the Lincolnshire fens, with a regular market, independent shops and a handful of good cafés and pubs serving hearty meals. Ayscoughfee Hall, a medieval wool merchant\'s house set in attractive public gardens, is one of the town\'s most pleasant spots for a stroll. Spalding also makes a useful base for exploring the wider fens, including the nearby RSPB reserves and the unique landscape of the Wash — one of the most important estuarine habitats in Britain.',
    ],
    bestFor: 'Spring flowers and riverside walks',
    regionType: 'Market town',
    categories: ['things-to-do'],
  },
  {
    id: 'sleaford',
    name: 'Sleaford',
    slug: 'sleaford',
    image: '/images/lincolnshire/sleaford.jpg',
    description: 'A quiet market town in the heart of Lincolnshire with a growing independent food scene and good walking routes.',
    extendedDescription: [
      'Sleaford is a pleasant, unassuming market town at the centre of Lincolnshire, where the gentle farmland of the heath meets the beginning of the fens. The town has a compact centre with a good mix of independent shops, a regular outdoor market and an increasing number of quality cafés and restaurants. The Navigation House arts centre and the nearby Cogglesford Watermill — a working 18th-century watermill — add cultural interest to what might otherwise be an easy town to overlook.',
      'For walkers and cyclists, Sleaford offers easy access to some of the quieter corners of Lincolnshire. The Sleaford Navigation, a restored canal towpath, provides a flat and scenic walking route through the countryside, while the surrounding villages of Heckington (home to the only eight-sailed windmill still working in England) and Cranwell offer gentle day trip options. Sleaford is increasingly popular with visitors looking for a peaceful countryside base away from the busier tourist destinations, with affordable accommodation and a genuine sense of local community.',
    ],
    bestFor: 'Peaceful countryside breaks',
    regionType: 'Market town',
    categories: ['things-to-do', 'food-drink'],
  },
  {
    id: 'mablethorpe',
    name: 'Mablethorpe',
    slug: 'mablethorpe',
    image: '/images/lincolnshire/mablethorpe.jpg',
    description: 'A traditional seaside town with long sandy beaches, a seal sanctuary, beach chalets and a relaxed coastal atmosphere.',
    extendedDescription: [
      'Mablethorpe offers a quieter, more relaxed alternative to the busier resorts further south along the Lincolnshire Coast. Its wide, sandy beach stretches for miles in both directions, backed by colourful beach chalets and a traditional promenade. The town retains the unhurried charm of a classic British seaside holiday, with bucket-and-spade shops, fish and chip cafés, small amusement arcades and the kind of gentle atmosphere that families with young children particularly appreciate.',
      'The Mablethorpe Seal Sanctuary and Wildlife Centre is one of the town\'s most popular attractions, offering close-up views of rescued seals and a variety of other animals. The surrounding coastline is part of a dynamic and fascinating landscape — the sand dunes and marshes between Mablethorpe and Sutton-on-Sea are rich in wildlife, and the beach itself regularly reveals fossilised remains from prehistoric periods. For visitors seeking a genuine, unpretentious British seaside experience with space to breathe, Mablethorpe is an excellent choice.',
    ],
    bestFor: 'Quiet beach holidays',
    regionType: 'Coast',
    categories: ['places-to-stay', 'lincolnshire-coast', 'family-days-out'],
  },
  {
    id: 'woodhall-spa',
    name: 'Woodhall Spa',
    slug: 'woodhall-spa',
    image: '/images/lincolnshire/woodhall-spa.jpg',
    description: 'A picturesque woodland village with a famous golf course, heritage cinema, tea rooms and connections to WWII history.',
    extendedDescription: [
      'Woodhall Spa is one of the most distinctive and charming villages in Lincolnshire. Set among pine and birch woodland, it has a leafy, almost Edwardian character that sets it apart from the surrounding farmland. The village grew as a Victorian spa town after the discovery of a natural mineral spring, and although the spa itself no longer operates, the elegant atmosphere remains. The Kinema in the Woods, one of the last rear-projection cinemas in Britain, is a beloved local institution, and the village\'s tea rooms, gift shops and boutique accommodation give it a genteel, unhurried quality.',
      'Woodhall Spa also has deep connections to the Second World War. The Petwood Hotel served as the officers\' mess for 617 Squadron — the famous Dambusters — and the hotel\'s Squadron Bar is filled with memorabilia. The nearby Thorpe Camp Visitor Centre and the Woodhall Spa Cottage Museum tell the story of the area\'s wartime role. Golfers are drawn to the Woodhall Spa Golf Club, home to the Hotchkin Course, consistently rated among the finest inland courses in England. For countryside retreats combining history, woodland walks and a uniquely English village atmosphere, Woodhall Spa is hard to rival.',
    ],
    bestFor: 'Countryside retreats and golf',
    regionType: 'Countryside',
    categories: ['places-to-stay', 'things-to-do', 'food-drink'],
  },
  {
    id: 'horncastle',
    name: 'Horncastle',
    slug: 'horncastle',
    image: '/images/lincolnshire/horncastle.jpg',
    description: 'A Wolds market town known for antique shops, local food producers and access to scenic countryside walks.',
    extendedDescription: [
      'Horncastle has long been known as one of the best towns in England for antique hunting. Although the number of antique shops has reduced from its peak, the town still offers a rewarding browse for collectors, with several established dealers and regular antique fairs. Beyond the antiques, Horncastle has a pleasant, walkable centre with a good weekly market, independent food shops and a handful of welcoming pubs serving locally brewed ales and hearty Lincolnshire cooking.',
      'The town\'s position at the southern gateway to the Lincolnshire Wolds makes it an ideal base for walkers and cyclists exploring the Area of Outstanding Natural Beauty. The Viking Way long-distance trail passes through the area, and there are numerous circular walks through quiet valleys and along ancient ridgeway paths. Horncastle also hosts a popular annual food festival celebrating local producers, and its proximity to Woodhall Spa, Louth and the coast means that visitors can easily combine a stay here with day trips to a variety of Lincolnshire destinations.',
    ],
    bestFor: 'Antiques and Wolds exploring',
    regionType: 'Market town',
    categories: ['things-to-do', 'food-drink'],
  },
  {
    id: 'gainsborough',
    name: 'Gainsborough',
    slug: 'gainsborough',
    image: '/images/lincolnshire/gainsborough.jpg',
    description: 'A riverside town in West Lindsey with Gainsborough Old Hall, one of the best-preserved medieval manor houses in England.',
    extendedDescription: [
      'Gainsborough\'s greatest treasure is the Old Hall, a remarkably complete medieval manor house dating from the 15th century. Now managed by English Heritage, the building features a magnificent Great Hall with an original timber roof, medieval kitchens and Tudor-era rooms that bring centuries of history vividly to life. The Old Hall has hosted both Richard III and Henry VIII, and its survival through the centuries is a minor miracle of English heritage. For visitors with an interest in medieval and Tudor history, it is one of the finest buildings in the Midlands.',
      'The town itself sits on the River Trent, and its riverside setting provides pleasant walking opportunities. Gainsborough has connections to the literary world — the town and its tidal bore (known as the Trent Aegir) are believed to have inspired George Eliot\'s novel The Mill on the Floss. While the town is less immediately picturesque than some Lincolnshire destinations, it offers genuine historical interest, affordable accommodation and a base for exploring the quieter western side of the county, including the villages of the Lincolnshire Cliff.',
    ],
    bestFor: 'Medieval history',
    regionType: 'Market town',
    categories: ['things-to-do'],
  },
  {
    id: 'market-rasen',
    name: 'Market Rasen',
    slug: 'market-rasen',
    image: '/images/lincolnshire/market-rasen.jpg',
    description: 'A small Wolds town with a popular racecourse, local walks and easy access to the Lincolnshire countryside.',
    extendedDescription: [
      'Market Rasen is a compact, friendly market town on the western edge of the Lincolnshire Wolds. The town is best known for its racecourse, which hosts regular National Hunt and flat racing fixtures throughout the year, drawing visitors from across the region for a day out combining sport, socialising and the atmosphere of a traditional English race meeting. On non-race days, the town centre offers a quiet base with a handful of independent shops, a weekly Tuesday market and several pubs serving honest Lincolnshire fare.',
      'The surrounding countryside is among the most attractive in the county. The Lincolnshire Wolds rise gently to the east, offering excellent walking through a patchwork of chalk downland, hidden valleys and peaceful farmland. The nearby village of Tealby is regularly listed among the prettiest in Lincolnshire, and Bayons Manor ruins provide an atmospheric stop on local walks. Market Rasen is well placed for visitors who want to explore the northern Wolds without the crowds, with easy access to Caistor, the Viking Way and the quieter parts of the Lincolnshire countryside.',
    ],
    bestFor: 'Race days and countryside walks',
    regionType: 'Market town',
    categories: ['things-to-do'],
  },
  {
    id: 'bourne',
    name: 'Bourne',
    slug: 'bourne',
    image: '/images/lincolnshire/bourne.jpg',
    description: 'A south Lincolnshire market town surrounded by woodlands, nature reserves and quiet countryside perfect for walking.',
    extendedDescription: [
      'Bourne is a pleasant south Lincolnshire market town with a rich history — it was the birthplace of Hereward the Wake, the legendary Anglo-Saxon resistance leader, and later of William Cecil, Lord Burghley, chief advisor to Elizabeth I. The town centre has a traditional character, with a weekly Thursday market, independent shops and the striking red-brick Baldock\'s Mill standing beside the Bourne Eau watercourse. The town is perhaps best known locally for its spring water, which has been channelled through the streets since medieval times.',
      'What makes Bourne particularly special for visitors is the surrounding landscape. Bourne Wood, managed by the Forestry Commission, offers miles of waymarked trails through mature broadleaf and coniferous woodland — ideal for walking, running, cycling and family nature exploration. The Grimsthorpe Castle estate, just a few miles west, provides another excellent day out, with parkland designed by Capability Brown, seasonal events and a deer park. For those who enjoy quiet, unhurried countryside exploring in a part of England that feels genuinely off the beaten track, Bourne is a rewarding destination.',
    ],
    bestFor: 'Nature walks and woodland trails',
    regionType: 'Countryside',
    categories: ['things-to-do'],
  },
];

export const coastalAreas = [
  {
    name: 'Skegness',
    slug: 'skegness',
    description: 'Traditional seaside resort with sandy beaches, arcades, family attractions and holiday parks.',
  },
  {
    name: 'Mablethorpe',
    slug: 'mablethorpe',
    description: 'Quiet coastal town with long sandy beaches, a seal sanctuary and traditional seaside charm.',
  },
  {
    name: 'Sutton-on-Sea',
    slug: 'sutton-on-sea',
    description: 'Peaceful seaside village with a promenade, beach chalets and a quieter coastal atmosphere.',
  },
  {
    name: 'Chapel St Leonards',
    slug: 'chapel-st-leonards',
    description: 'Family-friendly resort with holiday parks, a sandy beach and easy access to local attractions.',
  },
  {
    name: 'Ingoldmells',
    slug: 'ingoldmells',
    description: 'Popular for holiday parks, Fantasy Island theme park and family seaside entertainment.',
  },
  {
    name: 'Anderby Creek',
    slug: 'anderby-creek',
    description: 'One of the quietest stretches of the Lincolnshire Coast, ideal for nature lovers and peaceful walks.',
  },
  {
    name: 'Gibraltar Point',
    slug: 'gibraltar-point',
    description: 'A national nature reserve south of Skegness with coastal walks, birdwatching and unspoilt beaches.',
  },
  {
    name: 'Cleethorpes',
    slug: 'cleethorpes',
    description: 'A lively seaside town with a promenade, pier, independent food spots and views across the Humber.',
  },
];
