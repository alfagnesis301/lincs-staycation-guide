# Caravan park images

Drop verified Creative Commons / public-domain images here, saved as `.webp`.

## Verified slots ready to fill

| File | Source page | Required attribution |
|---|---|---|
| `golden-sands-holiday-park.webp` | https://commons.wikimedia.org/wiki/Category:Golden_Sands_Holiday_Park | David Brown — CC BY-SA 2.0 |
| `southview-holiday-park.webp` | https://commons.wikimedia.org/wiki/Category:Southview_Holiday_Park | See file page — CC BY-SA 2.0 |
| `butlins-skegness.webp` | https://commons.wikimedia.org/wiki/Category:Butlins_Skegness | See file page |
| `skegness-water-leisure-park.webp` | https://commons.wikimedia.org/wiki/Category:Skegness_Water_Leisure_Park | J.Hannan-Briggs — CC BY-SA 2.0 |

## How to activate a verified image

1. Download the original image from the source URL (Wikimedia/Geograph).
2. Resize to 1200px wide and convert to `.webp` (e.g. `cwebp -q 80 in.jpg -o out.webp`).
3. Save with the exact filename listed above.
4. Open `src/data/bookableCaravanParks.ts`, find `VERIFIED_IMAGES_PRESENT`, and flip the matching key to `true`.
5. Update the `credit` / `licenceUrl` if the file you downloaded has a more specific author or licence than the placeholder.

Until step 4 is done, the card automatically falls back to the area-context image — no broken images.

## Rules

- Never hotlink from Wikimedia, Geograph or any third party.
- Never copy images from official park websites without written permission.
- Always preserve attribution: author + licence + source URL.
- Resize/optimise — record changes in the `modifications` field.
- We do not imply the photographer endorses Lincs Staycation Guide or any park.
