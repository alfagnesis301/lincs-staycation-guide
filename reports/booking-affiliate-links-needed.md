# Booking.com affiliate links — status report (15 July 2026)

## How affiliate links work on this site

Property URLs are stored in the data files as **clean Booking.com links** (no
dates, occupancy or session parameters). At render time `src/lib/affiliate.ts`
wraps every Booking.com URL in the CJ deep link
(`dpbolvw.net/click-101754317-15734754?sid=<hotel-slug>&url=<property URL>`),
so each `bookingUrl` added below became an **active** affiliate link
automatically — no manual CJ construction was needed or performed.
The `sid` is derived automatically from the Booking.com property slug.

## Newly activated Booking.com affiliate links (added 15 July 2026)

All URLs verified via web search against the property name and town before
being added. Destination slug = automatic CJ `sid`.

| Localidad | Establecimiento | URL de Booking.com (limpia) | SID (automático) | Página | Estado |
|---|---|---|---|---|---|
| Boston | The White Hart Hotel | https://www.booking.com/hotel/gb/white-hart-hotel.html | white-hart-hotel | /town-guides/boston, /places-to-stay/boston | active |
| Boston | Boston West Hotel | https://www.booking.com/hotel/gb/boston-west.html | boston-west | idem | active |
| Boston | The Old Kings Head (Kirton) | https://www.booking.com/hotel/gb/the-old-kings-head.html | the-old-kings-head | idem | active |
| Boston | Quayside Hotel & Bar | https://www.booking.com/hotel/gb/quayside-amp-bar.html | quayside-amp-bar | idem | active |
| Boston | The Kings Arms | https://www.booking.com/hotel/gb/the-king-39-s-arms-boston.html | the-king-39-s-arms-boston | idem | active |
| Boston | Supreme Inn Boston (Bicker Bar) — NUEVO | https://www.booking.com/hotel/gb/supreme-inns.html | supreme-inns | idem | active |
| Grantham | Angel and Royal Hotel | https://www.booking.com/hotel/gb/the-angel-and-royal-hotel.html | the-angel-and-royal-hotel | /town-guides/grantham | active |
| Grantham | Belton Woods Hotel, Spa & Golf Resort | https://www.booking.com/hotel/gb/belton-woods.html | belton-woods | idem | active |
| Grantham | The Avenue Hotel | https://www.booking.com/hotel/gb/the-avenue-grantham.html | the-avenue-grantham | idem | active |
| Grantham | The Barn Hotel & Spa | https://www.booking.com/hotel/gb/the-olde-barn-hotel-sure-hotel-collection-by-best-western.html | the-olde-barn-hotel-sure-hotel-collection-by-best-western | idem | active |
| Grantham | Urban Hotel Grantham | https://www.booking.com/hotel/gb/urban-lincolnshire.html | urban-lincolnshire | idem | active |
| Spalding | Tulip Queen by Marston's Inns | https://www.booking.com/hotel/gb/tulip-queen-by-marston-39-s-inns.html | tulip-queen-by-marston-39-s-inns | /town-guides/spalding | active |
| Spalding | Woodhouse Farm Lodge | https://www.booking.com/hotel/gb/woodhouse-farm-lodge.html | woodhouse-farm-lodge | idem | active |
| Spalding | The Red Lion Hotel | https://www.booking.com/hotel/gb/the-red-lion-spalding.html | the-red-lion-spalding | idem | active |
| Spalding | Woodlands Hotel | https://www.booking.com/hotel/gb/woodlands-spalding.html | woodlands-spalding | idem | active |
| Spalding | Cley Hall | https://www.booking.com/hotel/gb/cley-hall.html | cley-hall | idem | active |
| Sleaford | The SOLO | https://www.booking.com/hotel/gb/no-1-bank-chambers.html | no-1-bank-chambers | /town-guides/sleaford | active |
| Sleaford | Marquis of Granby | https://www.booking.com/hotel/gb/marquis-of-granby-lincoln.html | marquis-of-granby-lincoln | idem | active |
| Sleaford | The Finch Hatton Arms (Ewerby) | https://www.booking.com/hotel/gb/the-finch-hatton-arms.html | the-finch-hatton-arms | idem | active |
| Sleaford | The Mallards | https://www.booking.com/hotel/gb/the-mallards-lincolnshire.html | the-mallards-lincolnshire | idem | active |
| Sleaford | Riverside Guest House | https://www.booking.com/hotel/gb/riverside-guest-house-sleaford.html | riverside-guest-house-sleaford | idem | active |
| Mablethorpe | White Heather Guest House | https://www.booking.com/hotel/gb/white-heather-guest-house.html | white-heather-guest-house | /town-guides/mablethorpe | active |
| Mablethorpe | The Victoria Guest House — NUEVO | https://www.booking.com/hotel/gb/the-victoria-guest-house.html | the-victoria-guest-house | idem | active |
| Mablethorpe | The Cross Guest House — NUEVO | https://www.booking.com/hotel/gb/the-cross-guest-house.html | the-cross-guest-house | idem | active |
| Mablethorpe | The Beach House — NUEVO | https://www.booking.com/hotel/gb/the-beach-house-mablethorpe.html | the-beach-house-mablethorpe | idem | active |
| Woodhall Spa | Village Limits B&B | https://www.booking.com/hotel/gb/village-limits.html | village-limits | /town-guides/woodhall-spa | active |
| Woodhall Spa | The Dower House Hotel | https://www.booking.com/hotel/gb/the-dower-house-woodhall-spa.html | the-dower-house-woodhall-spa | idem | active |
| Woodhall Spa | Petwood Hotel | https://www.booking.com/hotel/gb/petwood.html | petwood | idem | active |
| Woodhall Spa | The Golf Hotel | https://www.booking.com/hotel/gb/golfhotellincs.html | golfhotellincs | idem | active |
| Woodhall Spa | The Inn at Woodhall Spa | https://www.booking.com/hotel/gb/the-inn-at-woodhall-spa.html | the-inn-at-woodhall-spa | idem | active |
| Horncastle | The Admiral Rodney Hotel | https://www.booking.com/hotel/gb/admiralrodney.html | admiralrodney | /town-guides/horncastle | active |
| Horncastle | Magpies Restaurant with Rooms | https://www.booking.com/hotel/gb/magpies-restaurant-with-rooms.html | magpies-restaurant-with-rooms | idem | active |
| Horncastle | Laurel Lodge | https://www.booking.com/hotel/gb/laurel-lodge.html | laurel-lodge | idem | active |
| Horncastle | Mountain Ash | https://www.booking.com/hotel/gb/mountain-ash.html | mountain-ash | idem | active |
| Horncastle | The Bull Hotel | https://www.booking.com/hotel/gb/the-bull-lincoln.html | the-bull-lincoln | idem | active |
| Gainsborough | Brampton Dales Farm | https://www.booking.com/hotel/gb/brampton-dales-farm.html | brampton-dales-farm | /town-guides/gainsborough | active |
| Gainsborough | Hickman Hill Hotel | https://www.booking.com/hotel/gb/hickman-hill.html | hickman-hill | idem | active |
| Gainsborough | Black Swan Guest House (Marton) | https://www.booking.com/hotel/gb/black-swan-guest-house.html | black-swan-guest-house | idem | active |
| Market Rasen | The Advocate Arms | https://www.booking.com/hotel/gb/advocate-arms.html | advocate-arms | /town-guides/market-rasen | active |
| Market Rasen | The White Swan | https://www.booking.com/hotel/gb/the-white-swan-market-rasen1.html | the-white-swan-market-rasen1 | idem | active |
| Bourne | The Wishing Well Inn (Dyke) | https://www.booking.com/hotel/gb/the-wishing-well-inn.html | the-wishing-well-inn | /town-guides/bourne | active |
| Bourne | The Angel at Bourne | https://www.booking.com/hotel/gb/the-angel-at-bourne.html | the-angel-at-bourne | idem | active |
| Bourne | The Six Bells (Witham on the Hill) | https://www.booking.com/hotel/gb/the-six-bells.html | the-six-bells | idem | active |
| Bourne | The Bull Inn (Rippingale) | https://www.booking.com/hotel/gb/the-bull-inn-bourne.html | the-bull-inn-bourne | idem | active |
| Stamford | The George Hotel of Stamford | https://www.booking.com/hotel/gb/the-george-of-stamford.html | the-george-of-stamford | /town-guides/stamford | active |
| Lincoln | DoubleTree by Hilton Lincoln — NUEVO | https://www.booking.com/hotel/gb/doubletree-by-hilton-lincoln.html | doubletree-by-hilton-lincoln | /town-guides/lincoln | active |
| Skegness | The Vine Hotel — NUEVO | https://www.booking.com/hotel/gb/vinehotel.html | vinehotel | /town-guides/skegness | active |
| Louth | The Priory Hotel — NUEVO | https://www.booking.com/hotel/gb/the-priory-louth.html | the-priory-louth | /town-guides/louth | active |

## Pendientes (sin URL de Booking.com verificable a 15 Jul 2026)

Estos alojamientos siguen publicados con web oficial o aviso de verificación;
no se les inventó ningún enlace.

| Localidad | Establecimiento | Ruta actual del CTA | Estado |
|---|---|---|---|
| Gainsborough | The Black Horse Inn (Blyton) | Web oficial (blackhorseblyton.com) | pending — no listado claro en Booking.com |
| Gainsborough | Thonock Park B&B | Aviso de verificación (sin enlace) | pending — sin URL de propiedad verificada |
| Market Rasen | The Olive | Web oficial (theolivemarketrasen.co.uk) | pending — rooms se reservan directo |
| Market Rasen | Woldview House B&B | Aviso de verificación | pending — sin URL de propiedad verificada |
| Market Rasen | Glebe Farm Apartments | Aviso de verificación | pending — en Booking.com solo aparece "Glebe Farm Bungalow" (unidad distinta; no se reutilizó) |
| Mablethorpe | Park View Guest House | Web oficial (parkviewguest.house) | pending — solo reserva directa/telefónica |
| Bourne | Glen House Annexe | Aviso de verificación | pending — anuncio privado sin página estable |

## Caravan parks — programas de afiliación distintos de Booking.com/CJ

Los 27 parques de `bookableCaravanParks.ts` siguen con `affiliateUrl` vacío.
Sus plataformas de reserva (Haven, Parkdean, Hoseasons, Butlin's, Pitchup)
se monetizan vía **Awin u otros programas**, no vía el deep link CJ de
Booking.com. Requiere alta del propietario en esos programas; no se
inventaron enlaces.
