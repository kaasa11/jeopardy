# Jeopardy! – Julebordet 🎅

Statisk Jeopardy-spill for én skjerm (PC koblet til TV/prosjektor). Game master styrer.
Inspirert av [oscarmarcussen/jeopardy](https://github.com/oscarmarcussen/jeopardy).

## Kjøre spillet

**Enklest:** dobbeltklikk `index.html` (eller `start.bat`). Det åpnes i nettleseren, og ingen server eller internett trengs.
Trykk **F11** for fullskjerm.

**Alternativt med lokal server** (hvis nettleseren skulle kludre med video fra fil):

```powershell
python -m http.server 8000
```

og åpne http://localhost:8000

## Redigere spørsmål

Alt ligger i **`board.js`**: tittel, kategorier, spørsmål, svar, bilder og video. Forklaring av feltene står øverst i fila.

- Bilder legges i `img/` og refereres med `img: "filnavn.jpg"` (vises med spørsmålet) eller `aImg: "filnavn.jpg"` (vises med svaret).
- Videoklipp legges i `video/`. Eksempel på et «fullfør setningen»-klipp:

  ```js
  { q: "Fullfør setningen …", video: "klipp1.mp4", start: 0, pause: 8, end: 11.5, rate: 0.75, a: "«… sitatet»" },
  ```

  Klippet spilles fra `start` til `pause` og fryser. Når du viser svaret spilles `pause` → `end` (med `rate` < 1 = slow-mo).
  `mask: 0.75` skjuler nederste 25 % av videoen (f.eks. teksting).

Etter endringer: last siden på nytt (F5). Har du endret mye, trykk **⚙️ Lag → Nytt spill (nullstill)**.

## Spillstatus

Poeng, lag og brukte ruter lagres i nettleseren (localStorage), så du kan laste siden på nytt uten å miste noe.

## Hurtigtaster

| Tast | Handling |
|---|---|
| Mellomrom / Enter | Vis svar |
| R | Spill videoen igjen |
| Esc | Tilbake til brettet |
| S | Snø av/på |
| F11 | Fullskjerm |
