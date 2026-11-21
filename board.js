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
        { q: "Hva heter gutten som blir glemt hjemme alene i julen?", a: "Kevin (McCallister)" },
        { q: "Hva heter den grønne skapningen som stjal julen?", a: "Grinchen" },
        { q: "Hvilken film med en hest, en ugle og tre nøtter vises på NRK hver julaften?", a: "Tre nøtter til Askepott" },
        { q: "Hvem spiller Buddy i filmen «Elf»?", a: "Will Ferrell" },
        { q: "Hvilken jobb har Hugh Grants rollefigur i «Love Actually»?", a: "Statsminister" },
      ],
    },
    {
      name: "Steder",
      clues: [
        { q: "I hvilken finsk by bor julenissen, ifølge finnene?", a: "Rovaniemi" },
        { q: "Hvilken norsk by lager verdens største pepperkakeby?", a: "Bergen" },
        { q: "Hva er Norges nordligste punkt på fastlandet?", a: "Kinnarodden (ikke Nordkapp!)" },
        { q: "Hvor er dette? (eksempel på bildespørsmål – bytt ut bildet)", img: "eksempel.svg", a: "Nordpolen" },
        { q: "Hvilket land har flest innbyggere i verden?", a: "India" },
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
