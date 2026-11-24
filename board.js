// ─────────────────────────────────────────────────────────────
//  BRETTET – her redigerer du kategorier, spørsmål og svar.
//
//  Felter per spørsmål:
//    q      Spørsmålet som vises (påkrevd)
//    a      Svaret som vises når du trykker «Vis svar» (påkrevd)
//    img    Bilde som vises SAMMEN MED spørsmålet  (fil i img/)
//    aImg   Bilde som vises SAMMEN MED svaret      (fil i img/)
//    video  Videoklipp (fil i video/). Da brukes også:
//             start  sekund klippet starter på (standard 0)
//             pause  sekund klippet fryser på før svaret
//             end    sekund svaret slutter på
//             rate   avspillingsfart på svaret (0.5 = slow-mo, 1 = normal)
//             mask   skjul nederste del av videoen, f.eks. 0.75 = skjul nederste 25 % (teksting)
//
//  Tips: Husk komma mellom hvert spørsmål, og anførselstegn rundt tekst.
// ─────────────────────────────────────────────────────────────
window.BOARD = {
  title: "Jeopardy!",
  subtitle: "Julebordet 2026",
  doubleName: "Nisse-dobbel",
  values: [100, 200, 300, 400, 500],
  categories: [
    {
      name: "Jul",
      clues: [
        { q: "Hva heter reinsdyret med den røde nesen?", a: "Rudolf" },
        { q: "Hvor mange luker har en vanlig julekalender?", a: "24" },
        { q: "Hvilken by gir hvert år juletreet som står på Trafalgar Square i London?", a: "Oslo" },
        { q: "Hvilken tegnefilmfigur ser svenskene på klokka 15 hver julaften?", a: "Kalle Anka (Donald Duck)" },
        { q: "Hva heter nissens kone i den amerikanske tradisjonen?", a: "Mrs. Claus" },
      ],
    },
    {
      name: "Sport",
      clues: [
        { q: "Hvor mange spillere har hvert lag på banen i fotball?", a: "11" },
        { q: "Hvilken idrett driver Jakob Ingebrigtsen med?", a: "Friidrett (løping)" },
        { q: "Hvilket år arrangerte Lillehammer vinter-OL?", a: "1994" },
        { q: "Hvor langt er et maraton?", a: "42,195 km" },
        { q: "Hvilket land har vunnet flest gullmedaljer i vinter-OL totalt?", a: "Norge" },
      ],
    },
    {
      name: "Film",
      clues: [
        { q: "Hva heter hovedskurken i «Batman Begins» (2005)?", a: "Ra's al Ghul" },
        { q: "Hvem spiller hovedrollen som Thor Heyerdahl i filmen «Kon-Tiki» (2012)?", a: "Pål Sverre Valheim Hagen" },
        { q: "Phil Collins lagde sangene i Disney-filmen «Tarzan». Hvilke språk sang han dem på?", a: "Engelsk, spansk, fransk, tysk og italiensk" },
        { q: "I «Ringenes Herre»-trilogien møter vi hobbitene, som blant annet er kjent for sang og musikk. Hvor mange ganger ser vi hobbiter synge i filmene?", a: "3 (Bilbo, Merry & Pippin, Pippin)" },
        { q: "Den første «Fast & Furious»-filmen kom i 2001, og siden har det kommet totalt 10 filmer. Nevn minst 2 av regissørene bak filmene.", a: "Rob Cohen, John Singleton, Justin Lin, F. Gary Gray, Louis Leterrier" },
      ],
    },
    {
      name: "Steder",
      clues: [
        { q: "Hvor er dette?", img: "sted_1.PNG", a: "Nyhavn, København" },
        { q: "Hvor er dette?", img: "sted_2.PNG", a: "Praha" },
        { q: "Hvor er dette?", img: "sted_3.PNG", a: "Helsingfors (Helsinki)" },
        { q: "Hvor er dette?", img: "sted_4.PNG", a: "Alicante" },
        { q: "Hvor er dette?", img: "sted_5.PNG", a: "Cardiff" },
      ],
    },
    {
      name: "Memes",
      sub: "Fullfør setningen",
      // «end» = der svaret slutter: maks 10 sekunder etter «pause», eller slutten av klippet hvis det kommer før.
      // Lengde på klippene: 1 = 7,4 s · 2 = 12,9 s · 3 = 41,8 s · 4 = 16,3 s · 5 = 72,9 s
      clues: [
        { q: "Fullfør setningen …", video: "video_1.mp4", start: 0, pause: 5, end: 7.4, a: "«Noice»" },
        { q: "Fullfør setningen …", video: "video_2.mp4", start: 0, pause: 8, end: 12.9, a: "«Hit the road dude, this ain't no state property – this is private property»" },
        { q: "Fullfør setningen …", video: "video_3.mp4", start: 0, pause: 16, end: 26, a: "«If my grandmother had wheels, she would've been a bike»" },
        { q: "Fullfør setningen …", video: "video_4.mp4", start: 0, pause: 4, end: 14, a: "«I don't care that you broke your elbow»" },
        { q: "Fullfør setningen …", video: "video_5.mp4", start: 0, pause: 4, end: 14, a: "«But I cannot see, I'm legally blind»" },
      ],
    },
  ],
};
