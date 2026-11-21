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
      clues: [
        { q: "Hvilken hunderase er «Doge»?", a: "Shiba Inu" },
        { q: "Fullfør: «One does not simply …»", a: "«… walk into Mordor»" },
        { q: "Hvilken sang blir du lurt til å høre når du blir «rickrolla»?", a: "«Never Gonna Give You Up» – Rick Astley" },
        { q: "Hva heter memen der en mann snur seg etter en annen kvinne mens kjæresten ser sjokkert på?", a: "Distracted Boyfriend" },
        { q: "Hva het egentlig katten kjent som «Grumpy Cat»?", a: "Tardar Sauce" },
      ],
    },
  ],
};
