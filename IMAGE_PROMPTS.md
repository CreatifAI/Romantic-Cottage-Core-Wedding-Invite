# Shagna Invites Garden Gate Demo — AI Image Prompts

## 1. How to keep the couple consistent
- **Step 0:** generate a character sheet first (prompt in section 3), pick the best one
- **Step 1:** use that image as the character reference for every other image
  - Midjourney: `--cref <image link> --cw 100` (V6) or `--oref <image link>` (V7)
  - ChatGPT / Gemini / Flux Kontext: upload the sheet and write "Use the same two people and the same outfits as in the reference image"
  - Leonardo / Ideogram: use their Character Reference option
- **Step 2:** paste the full prompt below (the character tags are already inside each one)
- **Step 3:** if a face drifts, regenerate or edit that image with the reference again
- **Do not change:** hair colour and length, gown, waistcoat colour, veil, flowers
- To change the couple for a client mood, edit the tags in section 2 once and re-run Step 0

## 2. Character and style tags (already used inside each prompt)
- **ELIANA:** woman in her late 20s, long soft wavy chestnut hair, hazel eyes, light freckles, gentle smile, ivory cotton-lace Victorian prairie wedding gown with high lace neckline, sheer puff sleeves with lace cuffs, flowing A-line tulle skirt, long lace-trimmed veil, small crown of baby's breath and blush roses
- **JONATHAN:** man in his late 20s, short tousled dark-brown hair, light stubble, warm brown eyes, kind smile, sage-green linen waistcoat over a cream shirt with rolled sleeves, beige linen trousers, blush rose and eucalyptus boutonniere, no tie
- **BOUQUET:** loose bouquet of blush garden roses, peonies, baby's breath and eucalyptus tied with cream lace ribbon
- **STYLE:** soft pastel cottage-core wedding photography, vintage film look (Kodak Portra 400), natural golden-hour light, dreamy haze, shallow depth of field, muted blush, sage, cream and soft gold palette, gentle film grain, romantic, timeless, lace and vintage elegance
- **NEGATIVE:** text, letters, logos, watermark, harsh shadows, oversaturated colours, black suit, modern clothing, extra fingers, deformed hands, distorted faces, plastic skin

## 3. Step 0: character sheet
> Character reference sheet of two people on a plain soft cream background, full body and close-up faces, front view and three-quarter view. Eliana: woman in her late 20s, long soft wavy chestnut hair, hazel eyes, light freckles, gentle smile, ivory cotton-lace Victorian prairie wedding gown with high lace neckline, sheer puff sleeves with lace cuffs, flowing A-line tulle skirt, long lace-trimmed veil, small crown of baby's breath and blush roses. Jonathan: man in his late 20s, short tousled dark-brown hair, light stubble, warm brown eyes, kind smile, sage-green linen waistcoat over a cream shirt with rolled sleeves, beige linen trousers, blush rose and eucalyptus boutonniere. Soft natural light, vintage film look, consistent faces and outfits. --ar 3:2

## 4. The 10 website images

### 1) `hero.jpg` — landscape 3:2 (keep the middle calm, text sits over it)
> Eliana and Jonathan walking hand in hand along a winding garden path lined with climbing roses and wooden rose arches, seen from slightly behind, he looks at her laughing, a small stone chapel softly blurred in the distance, drifting blush petals in the air, wide shot with the couple in the lower third, lots of soft open space above. Eliana: woman in her late 20s, long soft wavy chestnut hair, ivory cotton-lace Victorian prairie gown with puff sleeves, long lace-trimmed veil, baby's breath and blush rose crown. Jonathan: man in his late 20s, short dark-brown hair, sage-green linen waistcoat, cream shirt, beige linen trousers. Soft pastel cottage-core wedding photography, vintage film look, Kodak Portra 400, golden-hour light, dreamy haze, muted blush, sage, cream and soft gold palette, film grain, no text, no watermark. --ar 3:2

### 2) `couple.jpg` — portrait 4:5 (shown in the arch frame)
> Close romantic portrait of Eliana and Jonathan standing foreheads touching with eyes closed, his hand gently on her cheek, she holds a loose bouquet of blush garden roses, peonies, baby's breath and eucalyptus tied with cream lace ribbon, an old willow tree and soft garden bokeh behind them, warm golden-hour backlight. Eliana: woman in her late 20s, long soft wavy chestnut hair, light freckles, ivory lace gown with sheer puff sleeves, lace-trimmed veil, baby's breath crown. Jonathan: man in his late 20s, short tousled dark-brown hair, light stubble, sage-green linen waistcoat over cream shirt with rolled sleeves, blush rose boutonniere. Soft pastel cottage-core, vintage film look, Kodak Portra 400, shallow depth of field, film grain, no text, no watermark. --ar 4:5

### 3) `venue.jpg` — landscape 3:2 (no people)
> A small romantic stone garden chapel with an arched wooden door, covered in ivy and climbing blush roses, in front of it a rustic wooden wedding arch decorated with blush roses, peonies, baby's breath and eucalyptus, rows of vintage white wooden chairs on soft green grass with cream lace ribbon bows, hanging lanterns, scattered petals on the aisle, soft morning light and gentle haze. Soft pastel cottage-core wedding photography, vintage film look, Kodak Portra 400, muted blush, sage, cream and soft gold palette, film grain, no people, no text, no watermark. --ar 3:2

### 4) `closing.jpg` — landscape 16:9 (faded behind the closing note)
> Eliana and Jonathan seen from behind standing together under a large willow tree at dusk, his arm around her waist, her long lace veil flowing in the breeze, glowing lanterns hanging in the branches, a quiet garden path ahead, wide shot with the couple small and centred, lots of soft open space. Eliana: long soft wavy chestnut hair, ivory cotton-lace Victorian gown with puff sleeves and long veil, baby's breath crown. Jonathan: short dark-brown hair, sage-green linen waistcoat, cream shirt, beige trousers. Soft pastel cottage-core, vintage film look, golden-to-blush dusk light, dreamy haze, film grain, no text, no watermark. --ar 16:9

### 5) `gal1.jpg` — portrait 4:5 (arch frame)
> Portrait of Eliana alone, looking down at her bouquet with a gentle smile, standing by a sunlit window draped with white lace curtains, the long lace-trimmed veil resting over her shoulders, soft side light on her face. Eliana: woman in her late 20s, long soft wavy chestnut hair, hazel eyes, light freckles, ivory cotton-lace Victorian prairie gown with high lace neckline, sheer puff sleeves with lace cuffs, small crown of baby's breath and blush roses, bouquet of blush roses, peonies, baby's breath and eucalyptus tied with cream lace ribbon. Soft pastel cottage-core, vintage film look, Kodak Portra 400, shallow depth of field, film grain, no text, no watermark. --ar 4:5

### 6) `gal2.jpg` — square 1:1 (no people)
> Close-up macro still life of two simple gold wedding rings resting on a piece of antique cream lace, beside a handwritten-style letter folded with a blush wax seal, pressed pink flowers and a sprig of eucalyptus, soft window light, shallow depth of field. Soft pastel cottage-core, vintage film look, muted blush, sage, cream and soft gold palette, film grain, the letter shows no readable text, no watermark. --ar 1:1

### 7) `gal3.jpg` — 4:5 (no people)
> Flat-lay of wedding stationery on cream linen: a blank cream invitation card with a deckled edge and a pressed-flower border, lace ribbon tied in a bow, a blush wax seal, an antique brass key, a fountain pen, dried lavender and baby's breath, soft natural light from one side. Soft pastel cottage-core, vintage film look, muted blush, sage, cream and soft gold palette, film grain, the card is blank with no text, no watermark. --ar 4:5

### 8) `gal4.jpg` — 3:2 (no people)
> Long rustic wooden garden table set for a wedding dinner at dusk, cream linen runner, lace napkins, vintage china plates, glass jars with candles, loose arrangements of blush roses, eucalyptus and baby's breath, tiny string lights glowing above, soft green garden behind. Soft pastel cottage-core wedding photography, vintage film look, Kodak Portra 400, warm candlelight, dreamy haze, film grain, no people, no text, no watermark. --ar 3:2

### 9) `gal5.jpg` — 4:5
> Candid moment of Jonathan twirling Eliana barefoot on the grass in a sunlit garden, her tulle skirt and long veil swirling, both laughing joyfully, soft motion, golden-hour backlight, wildflowers around. Eliana: long soft wavy chestnut hair, ivory cotton-lace Victorian gown with sheer puff sleeves, baby's breath crown. Jonathan: short tousled dark-brown hair, light stubble, sage-green linen waistcoat, cream shirt with rolled sleeves, beige linen trousers. Soft pastel cottage-core, vintage film look, Kodak Portra 400, film grain, no text, no watermark. --ar 4:5

### 10) `gal6.jpg` — portrait 4:5 (arch frame; links to the Garden Gate on Page 1)
> Jonathan holding open a black wrought-iron garden gate wrapped in blush climbing roses and ivy while Eliana walks through it holding his hand, she looks back over her shoulder with a soft smile, a path of petals and a blooming garden ahead, soft golden light. Eliana: long soft wavy chestnut hair, ivory cotton-lace Victorian gown with sheer puff sleeves, lace-trimmed veil, baby's breath crown, bouquet of blush roses and eucalyptus. Jonathan: short dark-brown hair, light stubble, sage-green linen waistcoat, cream shirt, beige trousers, blush rose boutonniere. Soft pastel cottage-core, vintage film look, Kodak Portra 400, shallow depth of field, film grain, no text, no watermark. --ar 4:5

## 5. Negative prompt (for tools that have a separate box)
text, letters, logos, watermark, harsh shadows, oversaturated colours, black suit, modern clothing, extra fingers, deformed hands, distorted faces, plastic skin

## 6. Check before using each image
- Same hair, gown and waistcoat as the character sheet
- Hands and fingers are natural, faces are not warped
- No text, letters or logos anywhere (especially on cards and letters)
- Colours are soft and pastel, not orange or oversaturated
- Compress to under 300 KB (squoosh.app) and save as `hero.jpg`, `couple.jpg`, `venue.jpg`, `closing.jpg`, `gal1.jpg` to `gal6.jpg`
- Check your AI tool's licence for commercial use before using the images for clients

## 7. Tips
- If the arch frames crop a head, ask for "more space above the head"
- For the hero, keep the couple small and low so the names stay readable
- For real customers, replace all 10 with their own photos and keep the same file names
