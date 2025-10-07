# Vefforritun 1, 2025: Verkefni 7, JavaScript #1

## Markmið

- Búa til JavaScript forrit sem notar föll, flæðistýringar og ítranir.
- Nota strengi og tölur í JavaScript.
- Nota fylki og hluti í JavaScript.

## Virkni

Öll virkni fer fram með því að notandi kallar í föll í `console` í vafra. Niðurstöður eru birtar í `console` eða með `alert()`. Upplýsingar frá notanda koma með í kalli í föll eða gegnum `prompt()` eða `confirm()`.

Ef ekki er skilgreint hvernig skal taka við gögnum eða birta niðurstöður er það útfærslu atriði sem þið getið ákveðið sjálf.

Í öllum tilfellum skal hafa í huga týpukerfi JavaScript og hvað gerist ef kallað er í föllin með „vitlausri“ týpu miðað við það sem við gerum ráð fyrir. T.d. hvað gerist ef það er kallað í `createTodoItem(text)` með tölustaf í stað strengs? Eða `null`?

- `createTodoItem(text)`
  - Ef inntak er löglegt, býr til nýtt verkefni með texta `text` og bætir því við ókláruðu við verkefnalista.
  - Ef inntak er ólöglegt, lætur vita af því og bætir ekki við.
- `list()`
  - Sýnir allan verkefnalistann í console. Ekki skilgreint hvernig verkefnalisti er sýndur eingöngu að það sé hægt að sýna hann.
  - Ef listinn er tómur skal birta viðeigandi skilaboð í console.
- `toggleFinished(number)`
  - Breytir stöðu verkefnis í „klárað“ eða „óklárað“ eftir því hvort það var áður.
  - Notum stöðu í fylki, fyrsta verkefni er því `0`, annað `1` o.s.frv.
  - Ef `number` er ekki í réttu bili skal birta viðeigandi skilaboð.
  - Láta skal vita stöðu á verkefni eftir breytingu.
- `stats()`
  - Sýnir í console fjölda kláraðra og ókláraðra verkefna.
  - Útfærslu atriði hvernig þetta er sýnt.
- `clear()`
  - Eyðir öllum kláruðum verkefnum af verkefnalistanum.
  - Ef engin verkefni eru í lista gerist ekkert.
  - Ef það eru verkefni skal byrja á að biðja um staðfestingu með `confirm()`.
- `start()`
  - Byrjar leiðbeint ferli þar sem notandi getur bætt við mörgum verkefnum í einu með `prompt()`.
  - Byrjar á að biðja um texta fyrir nýtt verkefni. Ef gefinn er texti er búið til verkefni og því bætt við listann. Síðan er beðið um nýtt verkefni o.s.frv.
  - Ef notandi gefur upp verkefni með tóman streng skal láta vita að verkefni verður að vera með texta með `alert()` og beðið aftur um texta.
  - Ef notandi ýtir á „Cancel“ er hætt og kallað er í `list()` og `stats()` til að sýna stöðu verkefnalistans í `console`.

## Grunnur

Gefinn er grunnur með mjög einfaldri `index.html` skrá ásamt `scripts.js` skrá.

Ekki þarf að breyta neinu í `index.html` skrá, en hægt er að bæta við ef þið viljið.

Ekki þarf að útfæra neitt CSS í þessu verkefni.

Í `scripts.js` er grunnur með [`jsdoc`](https://jsdoc.app/) skjölun og lýsingu á virkni sem þarf að útfæra. Það er ekki krafa að nota `jsdoc` en það er góð venja að skjala kóða og ef þið kveikið á `Check JS` í VSCode þá hjálpar ritill við að skrifa verkefnið og benda á mögulegar villur.

Leyfilegt er að breyta því hverju föll skila ef það er ekki skilgreint í virkni.

### Uppsetning á grunn

Til að byrja að vinna verkefnið er hægt að sækja það frá GitHub:

```bash
# Inni í möppu sem á að geyma verkefnið
git clone https://github.com/vefforritun/vef1-2025-v7.git
# eða ef ssh uppsett
git clone git@github.com:vefforritun/vef1-2025-v7.git

# Förum inn í möppu
cd vef1-2025-v7
```

Áður en skilað er þarf að breyta remote í þitt eigið repo:

```bash
git remote remove origin
git remote add origin <slóð á þitt GitHub repo>
```

## GitHub & Netlify

Setja skal upp verkefnið á GitHub og skila með slóð á repo. Tengja skal Netlify við GitHub repo.

## Mat

- 20% — `createTodoItem()` útfært
- 10% — `list()` útfært
- 20% — `toggleFinished()` útfært
- 10% — `stats()` útfært
- 10% — `clear()` útfært
- 20% — Leiðbeint ferli útfært með `start`
- 10% — Verkefni sett upp GitHub og á Netlify

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 6. október 2025.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags fimmtudaginn 16. október 2025.

Skilaboð skulu innihalda:

- Slóð á verkefnið keyrandi í hýsingu
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `klingsterina`
  - `kristinfrida`
  - `osk`
  - `reynirjr`

## Aðstoð

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Ekki er heimilt að nota stór mállíkön til að vinna verkefni í námskeiðinu, [sjá nánar um notkun](https://github.com/vefforritun/vef1-2025/blob/main/mallikon.md).

## Verkefni og einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 5% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

> Útgáfa 0.1

## Útgáfusaga

| Útgáfa | Lýsing                     |
| ------ | -------------------------- |
| 0.1    | Fyrsta útgáfa verkefnisins |
