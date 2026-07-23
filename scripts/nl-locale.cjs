module.exports = {
  generalDialog: {
    partiallyError: "Deze bewerking kan niet worden uitgevoerd op gedeeltelijk samengevoegde cellen",
    readOnlyError: "Deze bewerking kan niet worden uitgevoerd in alleen-lezenmodus",
    dataNullError: "Deze bewerking kan niet worden uitgevoerd op gegevens die niet bestaan",
    noSeletionError: "Er is nog geen selectie gemaakt",
    cannotSelectMultiple: "Meerdere selecties kunnen niet worden geselecteerd"
  },
  functionlist: [
    {
      n: "SUMIF",
      t: 0,
      d: "Retourneert een voorwaardelijke som over een bereik.",
      a: "Een voorwaardelijke som over een bereik.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "bereik",
          detail: "Het bereik dat wordt getoetst aan `criterium`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterium",
          detail: "Het patroon of de test die op `bereik` wordt toegepast.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "sombereik",
          detail: "Het bereik dat moet worden opgeteld, indien anders dan `bereik`.",
          example: "B1:B10",
          require: "o",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "TAN",
      t: 0,
      d: "Retourneert de tangens van een hoek in radialen.",
      a: "Tangens van een hoek in radialen.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hoek",
          detail: "De hoek waarvan de tangens moet worden bepaald, in radialen.",
          example: "45*PI()/180",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "TANH",
      t: 0,
      d: "Retourneert de hyperbolische tangens van een willekeurig reëel getal.",
      a: "Hyperbolische tangens van een willekeurig reëel getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Elke reële waarde waarvan de hyperbolische tangens moet worden berekend.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "CEILING",
      t: 0,
      d: "Rondt een getal naar boven af op het dichtstbijzijnde gehele veelvoud van de opgegeven significantie `factor`.",
      a: "Rondt een getal naar boven af op het dichtstbijzijnde veelvoud van een factor.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die naar boven moet worden afgerond op het dichtstbijzijnde gehele veelvoud van `factor`.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Het getal waarvan de veelvouden worden gebruikt om `waarde` op af te ronden.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ATAN",
      t: 0,
      d: "Retourneert de boogtangens van een waarde, in radialen.",
      a: "Boogtangens van een waarde, in radialen.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvan de boogtangens moet worden berekend.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ASINH",
      t: 0,
      d: "Retourneert de inverse hyperbolische sinus van een getal.",
      a: "Inverse hyperbolische sinus van een getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvan de inverse hyperbolische sinus moet worden berekend.",
          example: "0.9",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ABS",
      t: 0,
      d: "Retourneert de absolute waarde van een getal.",
      a: "Absolute waarde van een getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Het getal waarvan de absolute waarde moet worden geretourneerd.",
          example: "-2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ACOS",
      t: 0,
      d: "Retourneert de boogcosinus van een waarde, in radialen.",
      a: "Boogcosinus van een waarde, in radialen.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvan de boogcosinus moet worden berekend. Moet tussen `-1` en `1` liggen, inclusief.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ACOSH",
      t: 0,
      d: "Retourneert de inverse hyperbolische cosinus van een getal.",
      a: "Inverse hyperbolische cosinus van een getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvan de inverse hyperbolische cosinus moet worden berekend. Moet groter dan of gelijk aan `1` zijn.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MULTINOMIAL",
      t: 0,
      d: "Retourneert de faculteit van de som van waarden gedeeld door het product van de faculteiten van de waarden.",
      a: "Multinomiale verdelingsfunctie.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik om in aanmerking te nemen.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om in aanmerking te nemen.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ATANH",
      t: 0,
      d: "Retourneert de inverse hyperbolische tangens van een getal.",
      a: "Inverse hyperbolische tangens van een getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvan de inverse hyperbolische tangens moet worden berekend. Moet tussen -1 en 1 liggen, exclusief.",
          example: "0.9",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ATAN2",
      t: 0,
      d: "Retourneert de hoek tussen de x-as en een lijnstuk vanaf de oorsprong (0,0) naar het opgegeven coördinatenpaar (`x`,`y`), in radialen.",
      a: "Boogtangens van een waarde.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "De x-coördinaat van het eindpunt van het lijnstuk waarvoor de hoek ten opzichte van de x-as moet worden berekend.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "y",
          detail: "De y-coördinaat van het eindpunt van het lijnstuk waarvoor de hoek ten opzichte van de x-as moet worden berekend.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "COUNTBLANK",
      t: 1,
      d: "Retourneert het aantal lege waarden in een lijst met waarden en bereiken.",
      a: "Aantal lege waarden.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik waarin het aantal lege cellen moet worden geteld.",
          example: "A2:C100",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "COSH",
      t: 0,
      d: "Retourneert de hyperbolische cosinus van een willekeurig reëel getal.",
      a: "Hyperbolische cosinus van een willekeurig reëel getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Elke reële waarde waarvan de hyperbolische cosinus moet worden berekend.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "INT",
      t: 0,
      d: "Rondt een getal naar beneden af op het dichtstbijzijnde gehele getal dat er kleiner dan of gelijk aan is.",
      a: "Rondt een getal naar beneden af op het dichtstbijzijnde gehele getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die naar beneden moet worden afgerond op het dichtstbijzijnde gehele getal.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ISEVEN",
      t: 0,
      d: "Controleert of de opgegeven waarde even is.",
      a: "Of de opgegeven waarde even is.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De te controleren waarde als even.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ISODD",
      t: 0,
      d: "Controleert of de opgegeven waarde oneven is.",
      a: "Of de opgegeven waarde oneven is.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De te controleren waarde als oneven.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "LCM",
      t: 0,
      d: "Retourneert het kleinste gemene veelvoud van een of meer gehele getallen.",
      a: "Kleinste gemene veelvoud van een of meer gehele getallen.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik waarvan de factoren in aanmerking worden genomen bij het berekenen van het kleinste gemene veelvoud.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken waarvan de factoren in aanmerking worden genomen om het kleinste gemene veelvoud te vinden.",
          example: "3",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LN",
      t: 0,
      d: "Retourneert de logaritme van een getal, met grondtal e (het getal van Euler).",
      a: "De logaritme van een getal, met grondtal e (het getal van euler).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvan de logaritme met grondtal e moet worden berekend.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "LOG",
      t: 0,
      d: "Retourneert de logaritme van een getal met betrekking tot een grondtal.",
      a: "De logaritme van een getal met betrekking tot een grondtal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvan de logaritme moet worden berekend.",
          example: "128",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "grondtal",
          detail: "Het grondtal dat wordt gebruikt voor de berekening van de logaritme.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "LOG10",
      t: 0,
      d: "Retourneert de logaritme van een getal, met grondtal 10.",
      a: "De logaritme van een getal, met grondtal 10.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvan de logaritme met grondtal 10 moet worden berekend.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MOD",
      t: 0,
      d: "Retourneert het resultaat van de modulo-operator, de rest na een deling.",
      a: "Modulo (rest) operator.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "deeltal",
          detail: "Het getal dat moet worden gedeeld om de rest te bepalen.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "deler",
          detail: "Het getal waardoor moet worden gedeeld.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MROUND",
      t: 0,
      d: "Rondt een getal af op het dichtstbijzijnde gehele veelvoud van een ander getal.",
      a: "Rondt een getal af op het dichtstbijzijnde gehele veelvoud.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "Het getal dat moet worden afgerond op het dichtstbijzijnde gehele veelvoud van een ander getal.",
          example: "21",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Het getal waarvan de veelvouden worden gebruikt om `waarde` op af te ronden.",
          example: "14",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ODD",
      t: 0,
      d: "Rondt een getal naar boven af op het dichtstbijzijnde oneven gehele getal.",
      a: "Rondt een getal naar boven af op het dichtstbijzijnde oneven gehele getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die moet worden afgerond op het eerstvolgende, hogere oneven getal.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SUMSQ",
      t: 0,
      d: "Retourneert de som van de kwadraten van een reeks getallen en/of cellen.",
      a: "Som van kwadraten.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Het eerste getal of bereik waarvan de kwadraten bij elkaar moeten worden opgeteld.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Extra getallen of bereiken waarvan de kwadraten moeten worden opgeteld bij de kwadraten van `waarde1`.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COMBIN",
      t: 0,
      d: "Retourneert het aantal manieren om een bepaald aantal objecten te kiezen uit een groep objecten van een bepaalde grootte.",
      a: "Aantal combinaties uit een reeks objecten.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "De grootte van de groep objecten om uit te kiezen.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Het aantal te kiezen objecten.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SUM",
      t: 0,
      d: "Retourneert de som van een reeks getallen en/of cellen.",
      a: "Som van een reeks getallen en/of cellen.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Het eerste getal of bereik dat bij elkaar moet worden opgeteld.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Extra getallen of bereiken die moeten worden opgeteld bij `waarde1`.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "SUBTOTAL",
      t: 0,
      d: "Retourneert een subtotaal voor een verticaal celbereik met behulp van een opgegeven aggregatiefunctie.",
      a: "Subtotaal voor een bereik met een specifieke functie.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "functiecode",
          detail: "De functie die moet worden gebruikt voor de subtotaalaggregatie.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bereik1",
          detail: "Het eerste bereik waarvoor een subtotaal moet worden berekend.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "bereik2",
          detail: "Extra bereiken waarvoor subtotalen moeten worden berekend.",
          example: "B2:B8",
          require: "o",
          repeat: "y",
          type: "range"
        }
      ]
    },
    {
      n: "ASIN",
      t: 0,
      d: "Retourneert de boogsinus van een waarde, in radialen.",
      a: "Boogsinus van een waarde, in radialen.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvan de boogsinus moet worden berekend. Moet tussen `-1` en `1` liggen, inclusief.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "COUNTIF",
      t: 1,
      d: "Retourneert een voorwaardelijk aantal over een bereik.",
      a: "Een voorwaardelijk aantal over een bereik.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "bereik",
          detail: "Het bereik dat wordt getoetst aan `criterium`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterium",
          detail: "Het patroon of de test die op `bereik` wordt toegepast.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "RADIANS",
      t: 0,
      d: "Converteert een hoekwaarde in graden naar radialen.",
      a: "Converteert een hoekwaarde in graden naar radialen.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hoek",
          detail: "De hoek die van graden naar radialen moet worden geconverteerd.",
          example: "180",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "RAND",
      t: 0,
      d: "Retourneert een willekeurig getal tussen 0 (inclusief) en 1 (exclusief).",
      a: "Een willekeurig getal tussen 0 inclusief en 1 exclusief.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "COUNTUNIQUE",
      t: 0,
      d: "Telt het aantal unieke waarden in een lijst met opgegeven waarden en bereiken.",
      a: "Telt het aantal unieke waarden in een bereik.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik om in aanmerking te nemen voor uniciteit.",
          example: "A1:C100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om in aanmerking te nemen voor uniciteit.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DEGREES",
      t: 0,
      d: "Converteert een hoekwaarde in radialen naar graden.",
      a: "Converteert een hoekwaarde in radialen naar graden.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hoek",
          detail: "De hoek die van radialen naar graden moet worden geconverteerd.",
          example: "PI()",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ERFC",
      t: 9,
      d: "Retourneert de complementaire Gauss-foutfunctie van een waarde.",
      a: "Complementaire gauss-foutfunctie van een waarde.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "z",
          detail: "Het getal waarvoor de complementaire Gauss-foutfunctie moet worden berekend.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "EVEN",
      t: 0,
      d: "Rondt een getal naar boven af op het dichtstbijzijnde even gehele getal.",
      a: "Rondt een getal naar boven af op het dichtstbijzijnde even gehele getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die moet worden afgerond op het eerstvolgende, hogere even getal.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "EXP",
      t: 0,
      d: "Retourneert het getal van Euler, e (~2,718), verheven tot een macht.",
      a: "Het getal van euler, e (~2,718), verheven tot een macht.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "exponent",
          detail: "De exponent waartoe e moet worden verheven.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "FACT",
      t: 0,
      d: "Retourneert de faculteit van een getal.",
      a: "Faculteit van een getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Het getal of de verwijzing naar een getal waarvan de faculteit wordt berekend en geretourneerd.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "FACTDOUBLE",
      t: 0,
      d: "Retourneert de \"dubbele faculteit\" van een getal.",
      a: "\"Dubbele faculteit\" van een getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Het getal of de verwijzing naar een getal waarvan de dubbele faculteit wordt berekend en geretourneerd.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "PI",
      t: 0,
      d: "Retourneert de waarde van Pi met 14 decimalen.",
      a: "Het getal pi.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FLOOR",
      t: 0,
      d: "Rondt een getal naar beneden af op het dichtstbijzijnde gehele veelvoud van de opgegeven significantie `factor`.",
      a: "Rondt een getal naar beneden af op het dichtstbijzijnde veelvoud van een factor.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die naar beneden moet worden afgerond op het dichtstbijzijnde gehele veelvoud van `factor`.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Het getal waarvan de veelvouden worden gebruikt om `waarde` op af te ronden.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "GCD",
      t: 0,
      d: "Retourneert de grootste gemene deler van een of meer gehele getallen.",
      a: "Grootste gemene deler van een of meer gehele getallen.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik waarvan de factoren in aanmerking worden genomen bij het berekenen van de grootste gemene deler.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken waarvan de factoren in aanmerking worden genomen om de grootste gemene deler te vinden.",
          example: "96",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "RANDBETWEEN",
      t: 0,
      d: "Retourneert een uniform willekeurig geheel getal tussen twee waarden, inclusief.",
      a: "Willekeurig geheel getal tussen twee waarden, inclusief.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "ondergrens",
          detail: "De ondergrens van het willekeurige bereik.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bovengrens",
          detail: "De bovengrens van het willekeurige bereik.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ROUND",
      t: 0,
      d: "Rondt een getal af op een bepaald aantal decimalen volgens de standaardregels.",
      a: "Rondt een getal af volgens de standaardregels.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die moet worden afgerond op `posities` aantal posities.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimalen",
          detail: "Het aantal decimalen waarop moet worden afgerond.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ROUNDDOWN",
      t: 0,
      d: "Rondt een getal af op een bepaald aantal decimalen, altijd naar beneden afgerond op de eerstvolgende geldige stap.",
      a: "Rondt een getal naar beneden af.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die moet worden afgerond op `posities` aantal posities, altijd naar beneden.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimalen",
          detail: "Het aantal decimalen waarop moet worden afgerond.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ROUNDUP",
      t: 0,
      d: "Rondt een getal af op een bepaald aantal decimalen, altijd naar boven afgerond op de eerstvolgende geldige stap.",
      a: "Rondt een getal naar boven af.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die moet worden afgerond op `posities` aantal posities, altijd naar boven.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimalen",
          detail: "Het aantal decimalen waarop moet worden afgerond.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SERIESSUM",
      t: 0,
      d: "Gegeven de parameters `x`, `n`, `m` en `a`, retourneert de som van de machtreeks a1*x^n + a2*x^(n+m) + ... + ai*x^(n+(i-1)*m).",
      a: "Som van een machtreeks.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de machtreeks. Varieert afhankelijk van het type benadering, kan een hoek, exponent of andere waarde zijn.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "De beginmacht waartoe `x` in de machtreeks moet worden verheven.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "m",
          detail: "De additieve stap waarmee `x` wordt verhoogd.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a",
          detail: "Het array of bereik met de coëfficiënten van de machtreeks.",
          example: "{FACT(0)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SIGN",
      t: 0,
      d: "Retourneert, gegeven een ingevoerd getal, `-1` als het negatief is, `1` als het positief is en `0` als het nul is.",
      a: "Teken van een opgegeven getal (+/-/0).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvan het teken wordt geëvalueerd.",
          example: "-42",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SIN",
      t: 0,
      d: "Retourneert de sinus van een hoek in radialen.",
      a: "Sinus van een hoek in radialen.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hoek",
          detail: "De hoek waarvan de sinus moet worden bepaald, in radialen.",
          example: "PI()",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SINH",
      t: 0,
      d: "Retourneert de hyperbolische sinus van een willekeurig reëel getal.",
      a: "Hyperbolische sinus van een willekeurig reëel getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Elke reële waarde waarvan de hyperbolische sinus moet worden berekend.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SQRT",
      t: 0,
      d: "Retourneert de positieve vierkantswortel van een positief getal.",
      a: "Positieve vierkantswortel van een positief getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Het getal waarvan de positieve vierkantswortel moet worden berekend.",
          example: "9",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SQRTPI",
      t: 0,
      d: "Retourneert de positieve vierkantswortel van het product van Pi en het opgegeven positieve getal.",
      a: "Vierkantswortel van het product van pi en een getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Het getal dat wordt vermenigvuldigd met Pi, waarna de vierkantswortel van het product wordt geretourneerd.",
          example: "9",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "GAMMALN",
      t: 1,
      d: "Retourneert de logaritme van een opgegeven Gammafunctie, met grondtal e (het getal van Euler).",
      a: "Logaritme van gammafunctie.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De invoer voor de Gammafunctie. De natuurlijke logaritme van Gamma(`waarde`) wordt geretourneerd.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "COS",
      t: 0,
      d: "Retourneert de cosinus van een hoek in radialen.",
      a: "Cosinus van een hoek in radialen.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hoek",
          detail: "De hoek waarvan de cosinus moet worden bepaald, in radialen.",
          example: "PI()",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "TRUNC",
      t: 0,
      d: "Kapt een getal af op een bepaald aantal significante cijfers door minder significante cijfers weg te laten.",
      a: "Kapt een getal af.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die moet worden afgekapt.",
          example: "3.141592654",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimalen",
          detail: "Het aantal significante cijfers rechts van de komma dat moet worden behouden.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "QUOTIENT",
      t: 0,
      d: "Retourneert het ene getal gedeeld door het andere.",
      a: "Het ene getal gedeeld door het andere.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "deeltal",
          detail: "Het getal dat moet worden gedeeld.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "deler",
          detail: "Het getal waardoor moet worden gedeeld.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "POWER",
      t: 0,
      d: "Retourneert een getal verheven tot een macht.",
      a: "Een getal verheven tot een macht.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "grondtal",
          detail: "Het getal dat moet worden verheven tot de macht `exponent`.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "exponent",
          detail: "De exponent waartoe `grondtal` moet worden verheven.",
          example: "0.5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SUMIFS",
      t: 0,
      d: "Retourneert de som van een bereik afhankelijk van meerdere criteria.",
      a: "Telt een bereik op afhankelijk van meerdere criteria.",
      m: [
        3,
        257
      ],
      p: [
        {
          name: "sombereik",
          detail: "Het bereik dat moet worden opgeteld.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criteriumbereik1",
          detail: "Het bereik dat wordt getoetst aan criterium1.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterium1",
          detail: "Het patroon of de test die wordt toegepast op criteriumbereik1.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteriumbereik2",
          detail: "Extra bereiken om te controleren.",
          example: " C1:C10",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COUNTIFS",
      t: 1,
      d: "Retourneert het aantal van een bereik afhankelijk van meerdere criteria.",
      a: "Telt waarden afhankelijk van meerdere criteria.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "criteriumbereik1",
          detail: "Het bereik dat wordt getoetst aan `criterium1`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterium1",
          detail: "Het patroon of de test die wordt toegepast op `criteriumbereik1`.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteriumbereik2",
          detail: "Extra bereiken om te controleren.",
          example: " B1:B10",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PRODUCT",
      t: 0,
      d: "Retourneert het resultaat van het met elkaar vermenigvuldigen van een reeks getallen.",
      a: "Resultaat van het met elkaar vermenigvuldigen van een reeks getallen.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "factor1",
          detail: "Het eerste getal of bereik dat moet worden berekend voor het product.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor2",
          detail: "Meer getallen of bereiken die moeten worden berekend voor het product.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "HARMEAN",
      t: 1,
      d: "Berekent het harmonisch gemiddelde van een gegevensset.",
      a: "Het harmonisch gemiddelde van een gegevensset.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik van de populatie.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om op te nemen in de populatie.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "HYPGEOMDIST",
      t: 1,
      d: "Berekent de kans op het trekken van een bepaald aantal successen in een bepaald aantal pogingen, gegeven een populatie van een bepaalde grootte met een bepaald aantal successen, zonder terugleggen van de trekkingen.",
      a: "Hypergeometrische verdelingskans.",
      m: [
        5,
        5
      ],
      p: [
        {
          name: "aantal_successen",
          detail: "Het gewenste aantal successen.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_trekkingen",
          detail: "Het toegestane aantal trekkingen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "successen_in_populatie",
          detail: "Het totale aantal successen in de populatie.",
          example: "20",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "populatiegrootte",
          detail: "De totale omvang van de populatie.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Bepaalt de logische waarde van de vorm van de functie. \n\nAls cumulatief WAAR() is, retourneert HYPGEOM.DIST de cumulatieve verdelingsfunctie;\n\nals het ONWAAR() is, retourneert het de kansdichtheidsfunctie.",
          example: "TRUE()",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "INTERCEPT",
      t: 1,
      d: "Berekent de y-waarde waarop de lijn die het resultaat is van lineaire regressie van een gegevensset de y-as snijdt (x=0).",
      a: "Snijpunt met de y-as van een lijn afgeleid via lineaire regressie.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Het bereik dat het array of de matrix van afhankelijke gegevens vertegenwoordigt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Het bereik dat het array of de matrix van onafhankelijke gegevens vertegenwoordigt.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "KURT",
      t: 1,
      d: "Berekent de kurtosis van een gegevensset, die de vorm beschrijft en met name de \"piekvorm\" van die gegevensset.",
      a: "Kurtosis van een gegevensset.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik van de gegevensset.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om op te nemen in de gegevensset.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "LARGE",
      t: 1,
      d: "Retourneert het n-de grootste element uit een gegevensset, waarbij n door de gebruiker wordt bepaald.",
      a: "N-de grootste element uit een gegevensset.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Array of bereik dat de te overwegen gegevensset bevat.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "De rangorde, van groot naar klein, van het te retourneren element.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "STDEVA",
      t: 1,
      d: "Berekent de standaarddeviatie op basis van een steekproef, waarbij tekst wordt ingesteld op de waarde `0`.",
      a: "Standaarddeviatie van steekproef (tekst als 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik van de steekproef.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om op te nemen in de steekproef.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "STDEVP",
      t: 1,
      d: "Berekent de standaarddeviatie op basis van een volledige populatie.",
      a: "Standaarddeviatie van een volledige populatie.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik van de populatie.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om op te nemen in de populatie.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "GEOMEAN",
      t: 1,
      d: "Berekent het meetkundig gemiddelde van een gegevensset.",
      a: "Het meetkundig gemiddelde van een gegevensset.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik van de populatie.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om op te nemen in de populatie.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "RANK_EQ",
      t: 1,
      d: "Retourneert de rangorde van een opgegeven waarde in een gegevensset. Als er meer dan één item met dezelfde waarde in de gegevensset voorkomt, wordt de hoogste rangorde van de items geretourneerd.",
      a: "Hoogste rangorde van een opgegeven waarde in een gegevensset.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvan de rangorde wordt bepaald.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens",
          detail: "Het array of bereik met de te overwegen gegevensset.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "is_oplopend",
          detail: "Of de waarden in `gegevens` in aflopende of oplopende volgorde moeten worden beschouwd. Indien weggelaten, is de standaardwaarde aflopend (ONWAAR).",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "RANK_AVG",
      t: 1,
      d: "Retourneert de rangorde van een opgegeven waarde in een gegevensset. Als er meer dan één item met dezelfde waarde in de gegevensset voorkomt, wordt de gemiddelde rangorde van de items geretourneerd.",
      a: "Gemiddelde rangorde van een opgegeven waarde in een gegevensset.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvan de rangorde wordt bepaald.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens",
          detail: "Het array of bereik met de te overwegen gegevensset.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "is_oplopend",
          detail: "Of de waarden in `gegevens` in aflopende of oplopende volgorde moeten worden beschouwd. Indien weggelaten, is de standaardwaarde aflopend (ONWAAR).",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PERCENTRANK_EXC",
      t: 1,
      d: "Retourneert de percentagerangorde (percentiel) van 0 tot 1 exclusief van een opgegeven waarde in een gegevensset.",
      a: "Percentagerangorde (percentiel) van 0 tot 1 exclusief.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "gegevens",
          detail: "Het array of bereik met de te overwegen gegevensset.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde",
          detail: "De waarde waarvan de percentagerangorde wordt bepaald.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significante_cijfers",
          detail: "Het aantal significante cijfers dat wordt gebruikt in de berekening. Standaard is 3.",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "PERCENTRANK_INC",
      t: 1,
      d: "Retourneert de percentagerangorde (percentiel) van 0 tot 1 inclusief van een opgegeven waarde in een gegevensset.",
      a: "Percentagerangorde (percentiel) van 0 tot 1 inclusief.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "gegevens",
          detail: "Het array of bereik met de te overwegen gegevensset.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde",
          detail: "De waarde waarvan de percentagerangorde wordt bepaald.",
          example: " A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significante_cijfers",
          detail: "Het aantal significante cijfers dat wordt gebruikt in de berekening. Standaard is 3.",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "FORECAST",
      t: 1,
      d: "Berekent de verwachte y-waarde voor een opgegeven x op basis van een lineaire regressie van een gegevensset.",
      a: "Verwachte y-waarde op basis van lineaire regressie.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "De waarde op de x-as die moet worden voorspeld.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_y",
          detail: "Het bereik dat het array of de matrix van afhankelijke gegevens vertegenwoordigt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Het bereik dat het array of de matrix van onafhankelijke gegevens vertegenwoordigt.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "FISHERINV",
      t: 1,
      d: "Retourneert de inverse Fisher-transformatie van een opgegeven waarde.",
      a: "Inverse fisher-transformatie van een opgegeven waarde.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvoor de inverse Fisher-transformatie moet worden berekend.",
          example: "0.962",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "FISHER",
      t: 1,
      d: "Retourneert de Fisher-transformatie van een opgegeven waarde.",
      a: "Fisher-transformatie van een opgegeven waarde.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvoor de Fisher-transformatie moet worden berekend.",
          example: "0.962",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MODE_SNGL",
      t: 1,
      d: "Retourneert de meest voorkomende waarde in een gegevensset.",
      a: "Meest voorkomende waarde in een gegevensset.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik om in aanmerking te nemen bij het berekenen van de modus.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om in aanmerking te nemen bij het berekenen van de modus.",
          example: "B2:B100",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "WEIBULL_DIST",
      t: 1,
      d: "Retourneert de waarde van de Weibull-verdelingsfunctie (of cumulatieve Weibull-verdelingsfunctie) voor een opgegeven vorm en schaal.",
      a: "Weibull-verdelingsfunctie.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de Weibull-verdelingsfunctie.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vorm",
          detail: "De vormparameter van de Weibull-verdelingsfunctie.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "schaal",
          detail: "De schaalparameter van de Weibull-verdelingsfunctie.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Of de cumulatieve verdelingsfunctie moet worden gebruikt.",
          example: "TRUE()",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COUNT",
      t: 1,
      d: "Retourneert het aantal numerieke waarden in een gegevensset.",
      a: "Het aantal numerieke waarden in een gegevensset.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik om in aanmerking te nemen bij het tellen.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om in aanmerking te nemen bij het tellen.",
          example: "B2:B100",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COUNTA",
      t: 1,
      d: "Retourneert het aantal waarden in een gegevensset.",
      a: "Het aantal waarden in een gegevensset.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik om in aanmerking te nemen bij het tellen.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om in aanmerking te nemen bij het tellen.",
          example: "B2:B100",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "AVEDEV",
      t: 1,
      d: "Berekent het gemiddelde van de absolute afwijkingen van gegevens ten opzichte van het gemiddelde van een gegevensset.",
      a: "Gemiddelde afwijkingsgrootte ten opzichte van het gemiddelde.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik van de steekproef.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om op te nemen in de steekproef.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "AVERAGE",
      t: 1,
      d: "Retourneert de numerieke gemiddelde waarde in een gegevensset, waarbij tekst wordt genegeerd.",
      a: "Numerieke gemiddelde waarde in een gegevensset, waarbij tekst wordt genegeerd.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik om in aanmerking te nemen bij het berekenen van de gemiddelde waarde.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om in aanmerking te nemen bij het berekenen van de gemiddelde waarde.",
          example: "B2:B100",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "AVERAGEA",
      t: 1,
      d: "Retourneert de numerieke gemiddelde waarde in een gegevensset.",
      a: "Numerieke gemiddelde waarde in een gegevensset.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik om in aanmerking te nemen bij het berekenen van de gemiddelde waarde.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om in aanmerking te nemen bij het berekenen van de gemiddelde waarde.",
          example: "B2:B100",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BINOM_DIST",
      t: 1,
      d: "Berekent de kans op het trekken van een bepaald aantal successen (of een maximumaantal successen) in een bepaald aantal pogingen, gegeven een populatie van een bepaalde grootte met een bepaald aantal successen, met terugleggen van de trekkingen.",
      a: "Binomiale verdelingskans.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "aantal_successen",
          detail: "Het aantal successen waarvoor de kans in `aantal_proeven` proeven moet worden berekend.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_pogingen",
          detail: "Het aantal onafhankelijke proeven.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kans_op_succes",
          detail: "De kans op succes in een gegeven proef.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Of de binomiale cumulatieve verdeling moet worden gebruikt.",
          example: "FALSE()",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BINOM_INV",
      t: 1,
      d: "Berekent de kleinste waarde waarvoor de cumulatieve binomiale verdeling groter dan of gelijk is aan een opgegeven criterium.",
      a: "Inverse cumulatieve binomiale verdelingsfunctie.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "aantal_pogingen",
          detail: "Het aantal onafhankelijke proeven.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kans_op_succes",
          detail: "De kans op succes in een gegeven proef.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "doelkans",
          detail: "De gewenste drempelkans.",
          example: "0.8",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "CONFIDENCE_NORM",
      t: 1,
      d: "Berekent de breedte van de helft van het betrouwbaarheidsinterval voor een normale verdeling.",
      a: "Betrouwbaarheidsinterval voor een normale verdeling.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "alfa",
          detail: "Eén min het gewenste betrouwbaarheidsniveau. Bijv. `0,1` voor een betrouwbaarheid van `0,9`, of 90%.",
          example: "0.05",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standaarddeviatie",
          detail: "De standaarddeviatie van de populatie.",
          example: "1.6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "populatiegrootte",
          detail: "De omvang van de populatie.",
          example: "250",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "CORREL",
      t: 1,
      d: "Berekent r, de Pearson-productmomentcorrelatiecoëfficiënt van een gegevensset.",
      a: "Pearson-productmomentcorrelatiecoëfficiënt.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Het bereik dat het array of de matrix van afhankelijke gegevens vertegenwoordigt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Het bereik dat het array of de matrix van onafhankelijke gegevens vertegenwoordigt.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "COVARIANCE_P",
      t: 1,
      d: "Berekent de covariantie van een gegevensset.",
      a: "De covariantie van een gegevensset.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Het bereik dat het array of de matrix van afhankelijke gegevens vertegenwoordigt.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Het bereik dat het array of de matrix van onafhankelijke gegevens vertegenwoordigt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "COVARIANCE_S",
      t: 1,
      d: "Berekent de steekproefcovariantie van een gegevensset.",
      a: "De steekproefcovariantie van een gegevensset.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Het bereik dat het array of de matrix van afhankelijke gegevens vertegenwoordigt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Het bereik dat het array of de matrix van onafhankelijke gegevens vertegenwoordigt.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DEVSQ",
      t: 1,
      d: "Berekent de som van de kwadraten van afwijkingen op basis van een steekproef.",
      a: "De som van de kwadraten van afwijkingen op basis van een steekproef.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik van de steekproef.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om op te nemen in de steekproef.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "EXPON_DIST",
      t: 1,
      d: "Retourneert de waarde van de exponentiële verdelingsfunctie met een opgegeven lambda bij een opgegeven waarde.",
      a: "Exponentiële verdelingsfunctie.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de exponentiële verdelingsfunctie.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lambda",
          detail: "De lambda die de exponentiële verdelingsfunctie bepaalt.",
          example: "0.5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Of de exponentiële cumulatieve verdeling moet worden gebruikt.",
          example: "FALSE()",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "AVERAGEIF",
      t: 1,
      d: "Retourneert het gemiddelde van een bereik afhankelijk van criteria.",
      a: "Gemiddelde van waarden afhankelijk van criteria.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "criteriumbereik",
          detail: "Het bereik dat wordt getoetst aan `criterium`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterium",
          detail: "Het patroon of de test die wordt toegepast op `criteriumbereik`.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "gemiddeldebereik",
          detail: "Het bereik waarvan het gemiddelde wordt berekend. Als dit niet is opgenomen, wordt in plaats daarvan `criteriumbereik` gebruikt voor het gemiddelde.",
          example: "B1:B10",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "AVERAGEIFS",
      t: 1,
      d: "Retourneert het gemiddelde van een bereik afhankelijk van meerdere criteria.",
      a: "Gemiddelde van waarden afhankelijk van meerdere criteria.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "gemiddeldebereik",
          detail: "Het bereik waarvan het gemiddelde wordt berekend.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteriumbereik1",
          detail: "Het bereik dat wordt getoetst aan `criterium1`.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterium1",
          detail: "Het patroon of de test die wordt toegepast op `criteriumbereik1`.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteriumbereik2",
          detail: "Extra bereiken om te controleren.",
          example: " C1:C10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PERMUT",
      t: 1,
      d: "Retourneert het aantal manieren om een bepaald aantal objecten te kiezen uit een groep objecten van een bepaalde grootte, waarbij de volgorde in aanmerking wordt genomen.",
      a: "Aantal permutaties uit een aantal objecten.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "De grootte van de groep objecten om uit te kiezen.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Het aantal te kiezen objecten.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "TRIMMEAN",
      t: 1,
      d: "Berekent het gemiddelde van een gegevensset, waarbij een bepaald deel van de gegevens aan de hoge en lage uiteinden van de gegevensset wordt uitgesloten.",
      a: "Gemiddelde van een gegevensset, met uitsluiting van hoge/lage uiteinden.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Array of bereik dat de te overwegen gegevensset bevat.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "uitgesloten_deel",
          detail: "Het deel van de gegevensset dat moet worden uitgesloten, vanaf de uiteinden van de set.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "PERCENTILE_EXC",
      t: 1,
      d: "Retourneert de waarde bij een gegeven percentiel van een gegevensset, exclusief 0 en 1.",
      a: "Waarde bij een gegeven percentiel van een gegevensset, exclusief 0 en 1.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Het array of bereik met de te overwegen gegevensset.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "percentiel",
          detail: "Het percentiel, exclusief 0 en 1, waarvan de waarde binnen 'gegevens' wordt berekend en geretourneerd.",
          example: "0.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "PERCENTILE_INC",
      t: 1,
      d: "Retourneert de waarde bij een gegeven percentiel van een gegevensset.",
      a: "Waarde bij een gegeven percentiel van een gegevensset.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Het array of bereik met de te overwegen gegevensset.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "percentiel",
          detail: "Het percentiel waarvan de waarde binnen `gegevens` wordt berekend en geretourneerd.",
          example: "0.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "PEARSON",
      t: 1,
      d: "Berekent r, de Pearson-productmomentcorrelatiecoëfficiënt van een gegevensset.",
      a: "Pearson-productmomentcorrelatiecoëfficiënt.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Het bereik dat het array of de matrix van afhankelijke gegevens vertegenwoordigt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Het bereik dat het array of de matrix van onafhankelijke gegevens vertegenwoordigt.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "NORM_S_INV",
      t: 1,
      d: "Retourneert de waarde van de inverse standaardnormale verdelingsfunctie voor een opgegeven waarde.",
      a: "Inverse standaardnormale verdelingsfunctie.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de inverse standaardnormale verdelingsfunctie.",
          example: "0.75",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "NORM_S_DIST",
      t: 1,
      d: "Retourneert de waarde van de standaardnormale cumulatieve verdelingsfunctie voor een opgegeven waarde.",
      a: "Standaardnormale cumulatieve verdelingsfunctie.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de standaardnormale cumulatieve verdelingsfunctie.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Bepaalt de logische waarde van de vorm van de functie. \n\nAls het WAAR() is, retourneert het de cumulatieve verdelingsfunctie;\n\nAls het ONWAAR() is, retourneert het de kansdichtheidsfunctie.",
          example: "FALSE()",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "NORM_INV",
      t: 1,
      d: "Retourneert de waarde van de inverse normale verdelingsfunctie voor een opgegeven waarde, gemiddelde en standaarddeviatie.",
      a: "Inverse normale verdelingsfunctie.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de inverse normale verdelingsfunctie.",
          example: "0.75",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gemiddelde",
          detail: "Het gemiddelde (mu) van de normale verdelingsfunctie.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standaarddeviatie",
          detail: "De standaarddeviatie (sigma) van de normale verdelingsfunctie.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "NORM_DIST",
      t: 1,
      d: "Retourneert de waarde van de normale verdelingsfunctie (of cumulatieve normale verdelingsfunctie) voor een opgegeven waarde, gemiddelde en standaarddeviatie.",
      a: "Normale verdelingsfunctie.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de normale verdelingsfunctie.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gemiddelde",
          detail: "Het gemiddelde (mu) van de normale verdelingsfunctie.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standaarddeviatie",
          detail: "De standaarddeviatie (sigma) van de normale verdelingsfunctie.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Of de cumulatieve normale verdelingsfunctie moet worden gebruikt in plaats van de verdelingsfunctie.",
          example: "FALSE()",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "NEGBINOM_DIST",
      t: 1,
      d: "Berekent de kans op een bepaald aantal mislukkingen vóór een bepaald aantal successen, gegeven een kans op succes bij onafhankelijke proeven.",
      a: "Negatieve binomiale verdelingskans.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "aantal_mislukkingen",
          detail: "Het aantal te modelleren mislukkingen.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_successen",
          detail: "Het aantal te modelleren successen.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kans_op_succes",
          detail: "De kans op succes in een gegeven proef.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Bepaalt de logische waarde van de vorm van de functie. \n\nAls het WAAR() is, retourneert het de cumulatieve verdelingsfunctie;\n\nAls het ONWAAR() is, retourneert het de kansdichtheidsfunctie.",
          example: "FALSE()",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "MINA",
      t: 1,
      d: "Retourneert de minimale numerieke waarde in een gegevensset.",
      a: "Minimale numerieke waarde in een gegevensset.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik om in aanmerking te nemen bij het berekenen van de minimumwaarde.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om in aanmerking te nemen bij het berekenen van de minimumwaarde.",
          example: "B2:B100",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MIN",
      t: 1,
      d: "Retourneert de minimumwaarde in een numerieke gegevensset.",
      a: "Minimumwaarde in een numerieke gegevensset.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik om in aanmerking te nemen bij het berekenen van de minimumwaarde.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om in aanmerking te nemen bij het berekenen van de minimumwaarde.",
          example: "B2:B100",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MEDIAN",
      t: 1,
      d: "Retourneert de mediaanwaarde in een numerieke gegevensset.",
      a: "Mediaanwaarde in een numerieke gegevensset.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik om in aanmerking te nemen bij het berekenen van de mediaanwaarde.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om in aanmerking te nemen bij het berekenen van de mediaanwaarde.",
          example: "B2:B100",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MAXA",
      t: 1,
      d: "Retourneert de maximale numerieke waarde in een gegevensset.",
      a: "Maximale numerieke waarde in een gegevensset.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik om in aanmerking te nemen bij het berekenen van de maximumwaarde.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om in aanmerking te nemen bij het berekenen van de maximumwaarde.",
          example: "B2:B100",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MAX",
      t: 1,
      d: "Retourneert de maximumwaarde in een numerieke gegevensset.",
      a: "Maximumwaarde in een numerieke gegevensset.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik om in aanmerking te nemen bij het berekenen van de maximumwaarde.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om in aanmerking te nemen bij het berekenen van de maximumwaarde.",
          example: "B2:B100",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "LOGNORM_INV",
      t: 1,
      d: "Retourneert de waarde van de inverse log-normale cumulatieve verdeling met opgegeven gemiddelde en standaarddeviatie bij een opgegeven waarde.",
      a: "Inverse log-normale cumulatieve verdelingsfunctie.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de inverse log-normale cumulatieve verdelingsfunctie.",
          example: "0.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gemiddelde",
          detail: "Het gemiddelde (mu) van de inverse log-normale cumulatieve verdelingsfunctie.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standaarddeviatie",
          detail: "De standaarddeviatie (sigma) van de inverse log-normale cumulatieve verdelingsfunctie.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "LOGNORM_DIST",
      t: 1,
      d: "Retourneert de waarde van de log-normale cumulatieve verdeling met opgegeven gemiddelde en standaarddeviatie bij een opgegeven waarde.",
      a: "Log-normale cumulatieve verdelingskans.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de log-normale cumulatieve verdelingsfunctie.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gemiddelde",
          detail: "Het gemiddelde (mu) van de log-normale cumulatieve verdelingsfunctie.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standaarddeviatie",
          detail: "De standaarddeviatie (sigma) van de log-normale cumulatieve verdelingsfunctie.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Bepaalt de logische waarde van de vorm van de functie. \n\nAls het WAAR() is, retourneert het de cumulatieve verdelingsfunctie;\n\nAls het ONWAAR() is, retourneert het de kansdichtheidsfunctie.",
          example: "FALSE()",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "Z_TEST",
      t: 1,
      d: "Retourneert de eenzijdige p-waarde van een Z-toets met standaardverdeling.",
      a: "Eenzijdige p-waarde van een z-toets.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "gegevens",
          detail: "Het array of bereik met de te overwegen gegevensset.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "waarde",
          detail: "De toetsingsgrootheid die in de Z-toets moet worden gebruikt.",
          example: "B2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standaarddeviatie",
          detail: "De standaarddeviatie die voor de Z-toets moet worden aangenomen. Als dit niet is opgegeven, wordt de standaarddeviatie van de gegevens gebruikt.",
          example: "3",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "PROB",
      t: 1,
      d: "Berekent, gegeven een reeks waarden en bijbehorende kansen, de kans dat een willekeurig gekozen waarde tussen twee grenzen valt.",
      a: "Kans dat waarden binnen een bereik liggen.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "gegevens",
          detail: "Array of bereik dat de te overwegen gegevensset bevat.",
          example: "A3:A6",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kansen",
          detail: "Array of bereik met kansen die overeenkomen met `gegevens`.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "ondergrens",
          detail: "De ondergrens van het waardenbereik waarvoor de kans moet worden berekend.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bovengrens",
          detail: "De bovengrens van het waardenbereik waarvoor de kans moet worden berekend.",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "QUARTILE_EXC",
      t: 1,
      d: "Retourneert een waarde die het dichtst bij een opgegeven kwartiel van een gegevensset ligt, exclusief 0 en 4.",
      a: "Waarde het dichtst bij een specifiek kwartiel van een gegevensset, exclusief 0 en 4.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Het array of bereik met de te overwegen gegevensset.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kwartielnummer",
          detail: "Welk kwartiel moet worden geretourneerd.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "QUARTILE_INC",
      t: 1,
      d: "Retourneert een waarde die het dichtst bij een opgegeven kwartiel van een gegevensset ligt.",
      a: "Waarde het dichtst bij een specifiek kwartiel van een gegevensset.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Het array of bereik met de te overwegen gegevensset.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kwartielnummer",
          detail: "Welke kwartielwaarde moet worden geretourneerd.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "POISSON_DIST",
      t: 1,
      d: "Retourneert de waarde van de Poisson-verdelingsfunctie (of cumulatieve Poisson-verdelingsfunctie) voor een opgegeven waarde en gemiddelde.",
      a: "Poisson-verdelingsfunctie.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de Poisson-verdelingsfunctie.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gemiddelde",
          detail: "Het gemiddelde (mu) van de Poisson-verdelingsfunctie.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Of de cumulatieve Poisson-verdelingsfunctie moet worden gebruikt in plaats van de verdelingsfunctie.",
          example: "FALSE()",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "RSQ",
      t: 1,
      d: "Berekent het kwadraat van r, de Pearson-productmomentcorrelatiecoëfficiënt van een gegevensset.",
      a: "Kwadraat van de correlatiecoëfficiënt.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Het bereik dat het array of de matrix van afhankelijke gegevens vertegenwoordigt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Het bereik dat het array of de matrix van onafhankelijke gegevens vertegenwoordigt.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "T_DIST",
      t: 1,
      d: "Berekent de linkszijdige kans voor een t-verdeling van Student met een gegeven invoer (x).",
      a: "De linkszijdige t-verdeling van Student.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de t-verdelingsfunctie.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden",
          detail: "Het aantal vrijheidsgraden.",
          example: "30",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Als cumulatief WAAR is, retourneert T.DIST de cumulatieve verdelingsfunctie; als het ONWAAR is, retourneert het de kansdichtheidsfunctie.",
          example: "TRUE()",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "T_DIST_2T",
      t: 1,
      d: "Berekent de kans voor een tweezijdige t-verdeling van Student met een gegeven invoer (x).",
      a: "De tweezijdige t-verdeling van Student.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de t-verdelingsfunctie.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden",
          detail: "Het aantal vrijheidsgraden.",
          example: "30",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "T_DIST_RT",
      t: 1,
      d: "Berekent de rechtszijdige kans voor een t-verdeling van Student met een gegeven invoer (x).",
      a: "De rechtszijdige t-verdeling van Student.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de t-verdelingsfunctie.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden",
          detail: "Het aantal vrijheidsgraden.",
          example: "30",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "T_INV",
      t: 1,
      d: "Berekent de negatieve inverse van de eenzijdige TDIST-functie.",
      a: "T.INV",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "kans",
          detail: "De kans die is verbonden met de tweezijdige t-verdeling.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden",
          detail: "Het aantal vrijheidsgraden.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "T_INV_2T",
      t: 1,
      d: "Berekent de inverse van de tweezijdige TDIST-functie.",
      a: "T.INV.2T",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "kans",
          detail: "De kans die is verbonden met de tweezijdige t-verdeling.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden",
          detail: "Het aantal vrijheidsgraden.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "T_TEST",
      t: 1,
      d: "t-toets. Retourneert de kans die is verbonden met de t-toets van Student. Bepaalt of het waarschijnlijk is dat twee steekproeven afkomstig zijn van dezelfde twee onderliggende populaties met hetzelfde gemiddelde.",
      a: "Retourneert de kans die is verbonden met de t-toets.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "bereik1",
          detail: "De eerste steekproef van gegevens of groep cellen om in aanmerking te nemen voor de t-toets.",
          example: "A1:A4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bereik2",
          detail: "De tweede steekproef van gegevens of groep cellen om in aanmerking te nemen voor de t-toets.",
          example: "B1:B4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "staarten",
          detail: "Geeft het aantal staarten van de verdeling aan.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "type",
          detail: "Geeft het type t-toets aan.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "F_DIST",
      t: 1,
      d: "Berekent de linkszijdige F-kansverdeling (mate van diversiteit) voor twee gegevenssets met een gegeven invoer x. Ook wel de Fisher-Snedecor-verdeling of de F-verdeling van Snedecor genoemd.",
      a: "F-kansverdeling (linkszijdig).",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de F-kansverdelingsfunctie. De waarde waarbij de functie moet worden geëvalueerd.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden1",
          detail: "De teller van het aantal vrijheidsgraden.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden2",
          detail: "De noemer van het aantal vrijheidsgraden.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Logische waarde die de vorm van de functie bepaalt.",
          example: "TRUE()",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "F_DIST_RT",
      t: 1,
      d: "Berekent de rechtszijdige F-kansverdeling (mate van diversiteit) voor twee gegevenssets met een gegeven invoer x. Ook wel de Fisher-Snedecor-verdeling of de F-verdeling van Snedecor genoemd.",
      a: "F-kansverdeling.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "De invoer voor de F-kansverdelingsfunctie. De waarde waarbij de functie moet worden geëvalueerd.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden1",
          detail: "De teller van het aantal vrijheidsgraden.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden2",
          detail: "De noemer van het aantal vrijheidsgraden.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "VAR_P",
      t: 1,
      d: "Berekent de variantie op basis van een volledige populatie.",
      a: "Variantie van een volledige populatie.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik van de populatie.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om op te nemen in de populatie.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "VAR_S",
      t: 1,
      d: "Berekent de variantie op basis van een steekproef.",
      a: "Variantie.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik van de steekproef.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om op te nemen in de steekproef.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "VARA",
      t: 1,
      d: "Berekent de variantie op basis van een steekproef, waarbij tekst wordt ingesteld op de waarde `0`.",
      a: "Variantie van steekproef (tekst als 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik van de steekproef.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om op te nemen in de steekproef.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "VARPA",
      t: 1,
      d: "Berekent de variantie op basis van een volledige populatie, waarbij tekst wordt ingesteld op de waarde `0`.",
      a: "Variantie van een volledige populatie (tekst als 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik van de populatie.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om op te nemen in de populatie.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "STEYX",
      t: 1,
      d: "Berekent de standaardfout van de voorspelde y-waarde voor elke x in de regressie van een gegevensset.",
      a: "Standaardfout van voorspelde y-waarden in regressie.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Het bereik dat het array of de matrix van afhankelijke gegevens vertegenwoordigt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Het bereik dat het array of de matrix van onafhankelijke gegevens vertegenwoordigt.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "STANDARDIZE",
      t: 1,
      d: "Berekent het genormaliseerde equivalent van een willekeurige variabele, gegeven gemiddelde en standaarddeviatie van de verdeling.",
      a: "Genormaliseerd equivalent van een willekeurige variabele.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde van de willekeurige variabele die moet worden genormaliseerd.",
          example: "96",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gemiddelde",
          detail: "Het gemiddelde van de verdeling.",
          example: "80",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standaarddeviatie",
          detail: "De standaarddeviatie van de verdeling.",
          example: "6.7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SMALL",
      t: 1,
      d: "Retourneert het n-de kleinste element uit een gegevensset, waarbij n door de gebruiker wordt bepaald.",
      a: "N-de kleinste element in een gegevensset.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Het array of bereik met de te overwegen gegevensset.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "n",
          detail: "De rangorde, van klein naar groot, van het te retourneren element.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SLOPE",
      t: 1,
      d: "Berekent de richtingscoëfficiënt van de lijn die het resultaat is van lineaire regressie van een gegevensset.",
      a: "Richtingscoëfficiënt van een lijn uit lineaire regressie van gegevens.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Het bereik dat het array of de matrix van afhankelijke gegevens vertegenwoordigt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Het bereik dat het array of de matrix van onafhankelijke gegevens vertegenwoordigt.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SKEW",
      t: 1,
      d: "Berekent de scheefheid van een gegevensset, die de symmetrie van die gegevensset ten opzichte van het gemiddelde beschrijft.",
      a: "Scheefheid van een gegevensset.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik van de gegevensset.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om op te nemen in de gegevensset.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "SKEW_P",
      t: 1,
      d: "Berekent de scheefheid van een gegevensset, die de symmetrie van die gegevensset ten opzichte van het gemiddelde beschrijft. Hierbij wordt aangenomen dat de gegevensset betrekking heeft op de populatie.",
      a: "Scheefheid van de gegevensset van een populatie.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde of het eerste bereik van de gegevensset.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Extra waarden of bereiken om op te nemen in de gegevensset.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "VLOOKUP",
      t: 2,
      d: "Verticaal opzoeken. Zoekt in de eerste kolom van een bereik naar een sleutel en retourneert de waarde van een opgegeven cel in de gevonden rij.",
      a: "Verticaal opzoeken.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "zoeksleutel",
          detail: "De waarde om naar te zoeken. Bijvoorbeeld `42`, `\"Katten\"` of `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bereik",
          detail: "Het bereik dat voor de zoekopdracht in aanmerking wordt genomen. De eerste kolom in het bereik wordt doorzocht op de sleutel die is opgegeven in `zoeksleutel`.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "index",
          detail: "De kolomindex van de te retourneren waarde, waarbij de eerste kolom in `bereik` is genummerd als 1.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "is_gesorteerd",
          detail: "Geeft aan of de te doorzoeken kolom (de eerste kolom van het opgegeven bereik) is gesorteerd; in dat geval wordt de dichtstbijzijnde overeenkomst voor `zoeksleutel` geretourneerd.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "HLOOKUP",
      t: 2,
      d: "Horizontaal opzoeken. Zoekt in de eerste rij van een bereik naar een sleutel en retourneert de waarde van een opgegeven cel in de gevonden kolom.",
      a: "Horizontaal opzoeken.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "zoeksleutel",
          detail: "De waarde om naar te zoeken. Bijvoorbeeld `42`, `\"Katten\"` of `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bereik",
          detail: "Het bereik dat voor de zoekopdracht in aanmerking wordt genomen. De eerste rij in het bereik wordt doorzocht op de sleutel die is opgegeven in `zoeksleutel`.",
          example: "A2:Z6",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "index",
          detail: "De rij-index van de te retourneren waarde, waarbij de eerste rij in `bereik` is genummerd als 1.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "is_gesorteerd",
          detail: "Geeft aan of de te doorzoeken rij (de eerste rij van het opgegeven bereik) is gesorteerd.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LOOKUP",
      t: 2,
      d: "Zoekt in een gesorteerde rij of kolom naar een sleutel en retourneert de waarde van de cel in een resultaatbereik op dezelfde positie als de zoekrij of -kolom.",
      a: "Een waarde opzoeken.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "zoeksleutel",
          detail: "De waarde om naar te zoeken in de rij of kolom. Bijvoorbeeld `42`, `\"Katten\"` of `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zoekbereik|resultaatmatrix",
          detail: "Eén manier om deze functie te gebruiken is door één gesorteerde rij of kolom `zoekbereik` op te geven om in te zoeken naar `zoeksleutel`, met een tweede argument `resultaatbereik`. De andere manier is om deze twee argumenten te combineren tot één `resultaatmatrix`, waarbij de eerste rij of kolom wordt doorzocht en een waarde wordt geretourneerd uit de laatste rij of kolom van de matrix. Als `zoeksleutel` niet wordt gevonden, kan een niet-exacte overeenkomst worden geretourneerd.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "resultaatbereik",
          detail: "Het bereik waaruit een resultaat moet worden geretourneerd. De geretourneerde waarde komt overeen met de locatie waar `zoeksleutel` wordt gevonden in `zoekbereik`. Dit bereik moet uit slechts één rij of kolom bestaan en mag niet worden gebruikt als de methode `resultaatmatrix` wordt gebruikt.",
          example: "B1:B100",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ADDRESS",
      t: 2,
      d: "Retourneert een celverwijzing als een tekenreeks.",
      a: "Celverwijzing als een tekenreeks.",
      m: [
        2,
        5
      ],
      p: [
        {
          name: "rij",
          detail: "Het rijnummer van de celverwijzing.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kolom",
          detail: "Het kolomnummer (niet de naam) van de celverwijzing. `A` is kolomnummer `1`.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "modus_absoluut_relatief",
          detail: "Een indicator die aangeeft of de verwijzing absoluut is voor rij/kolom. `1` is rij en kolom absoluut (bijv. $A$1), `2` is rij absoluut en kolom relatief (bijv. A$1), `3` is rij relatief en kolom absoluut (bijv. $A1), en `4` is rij en kolom relatief (bijv. A1).",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a1_notatie_gebruiken",
          detail: "Een booleaanse waarde die aangeeft of de stijl `A1` (WAAR) of de stijl `R1C1` (ONWAAR) moet worden gebruikt.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "blad",
          detail: "Tekst die de naam aangeeft van het blad waarnaar het adres verwijst.",
          example: "\"Sheet2\"",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "INDIRECT",
      t: 2,
      d: "Retourneert een celverwijzing die is opgegeven door een tekenreeks.",
      a: "Een celverwijzing die is opgegeven door een tekenreeks.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "celverwijzing_als_tekenreeks",
          detail: "Een celverwijzing, geschreven als een tekenreeks tussen aanhalingstekens.",
          example: "\"Sheet2!\"&B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "is_a1_notatie",
          detail: "Geeft aan of de celverwijzing in A1-notatie (WAAR) of R1C1-notatie (ONWAAR) is.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ROW",
      t: 2,
      d: "Retourneert het rijnummer van een opgegeven cel.",
      a: "Rijnummer van een opgegeven cel.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "celverwijzing",
          detail: "De cel waarvan het rijnummer wordt geretourneerd.",
          example: "A9",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ROWS",
      t: 2,
      d: "Retourneert het aantal rijen in een opgegeven array of bereik.",
      a: "Aantal rijen in een opgegeven array of bereik.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "bereik",
          detail: "Het bereik waarvan het aantal rijen wordt geretourneerd.",
          example: "A9:A62",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "COLUMN",
      t: 2,
      d: "Retourneert het kolomnummer van een opgegeven cel, waarbij `A=1`.",
      a: "Kolomnummer van een opgegeven cel.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "celverwijzing",
          detail: "De cel waarvan het kolomnummer wordt geretourneerd. Kolom `A` komt overeen met `1`.",
          example: "A9",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COLUMNS",
      t: 2,
      d: "Retourneert het aantal kolommen in een opgegeven array of bereik.",
      a: "Aantal kolommen in een opgegeven array of bereik.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "bereik",
          detail: "Het bereik waarvan het aantal kolommen wordt geretourneerd.",
          example: "A9:W62",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "OFFSET",
      t: 2,
      d: "Retourneert een bereikverwijzing die is verschoven met een opgegeven aantal rijen en kolommen ten opzichte van een beginnende celverwijzing.",
      a: "Een bereikverwijzing verschoven ten opzichte van een cel.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "celverwijzing",
          detail: "Het startpunt vanwaar het aantal rijen en kolommen van de verschuiving wordt geteld.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "rijen_verschuiven",
          detail: "Het aantal rijen om te verschuiven.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kolommen_verschuiven",
          detail: "Het aantal kolommen om te verschuiven.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "hoogte",
          detail: "De hoogte van het te retourneren bereik, beginnend bij het doel van de verschuiving.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "breedte",
          detail: "De breedte van het te retourneren bereik, beginnend bij het doel van de verschuiving.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MATCH",
      t: 2,
      d: "Retourneert de relatieve positie van een item in een bereik dat overeenkomt met een opgegeven waarde.",
      a: "Positie van een item in een bereik dat overeenkomt met een waarde.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "zoeksleutel",
          detail: "De waarde om naar te zoeken. Bijvoorbeeld `42`, `\"Katten\"` of `I24`.",
          example: "\"Sunday\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bereik",
          detail: "De eendimensionale array die moet worden doorzocht.",
          example: "A2:A9",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "zoektype",
          detail: "De zoekmethode. `1` (standaard) vindt de grootste waarde kleiner dan of gelijk aan `zoeksleutel` wanneer `bereik` in oplopende volgorde is gesorteerd. `0` vindt de exacte waarde wanneer `bereik` niet is gesorteerd. `-1` vindt de kleinste waarde groter dan of gelijk aan `zoeksleutel` wanneer `bereik` in aflopende volgorde is gesorteerd.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "INDEX",
      t: 2,
      d: "Retourneert de inhoud van een cel, opgegeven door rij- en kolomverschuiving.",
      a: "Inhoud van een cel opgegeven door rij- en kolomverschuiving.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "verwijzing",
          detail: "Het array van cellen waarin de verschuiving plaatsvindt.",
          example: "A1:C20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "rij",
          detail: "Het aantal verschuivingsrijen.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kolom",
          detail: "Het aantal verschuivingskolommen.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "GETPIVOTDATA",
      t: 2,
      d: "Haalt een geaggregeerde waarde op uit een draaitabel die overeenkomt met de opgegeven rij- en kolomkoppen.",
      a: "Haalt een geaggregeerde waarde op uit een draaitabel die overeenkomt met de opgegeven rij- en kolomkoppen.",
      m: [
        2,
        254
      ],
      p: [
        {
          name: "waardenaam",
          detail: "De naam van de waarde in de draaitabel waarvoor u gegevens wilt ophalen.",
          example: "\"SUM of number of units\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cel_draaitabel",
          detail: "Elke verwijzing naar een cel in de gewenste draaitabel (linkerbovenhoek aanbevolen).",
          example: "'Pivot table'!A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "oorspronkelijke_kolom",
          detail: "De naam van de kolom in de oorspronkelijke gegevensset (niet de draaitabel).",
          example: "\"division\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        },
        {
          name: "item_draaitabel",
          detail: "De naam van de rij of kolom in de draaitabel die overeenkomt met *oorspronkelijke_kolom* die u wilt ophalen.",
          example: "\"east\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "CHOOSE",
      t: 2,
      d: "Retourneert een element uit een lijst met keuzes op basis van index.",
      a: "Een element uit een lijst met keuzes op basis van index.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "index",
          detail: "Welke keuze (van de maximaal 30 opgegeven) moet worden geretourneerd.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "keuze1",
          detail: "Een mogelijke waarde om te retourneren. Verplicht. Kan een verwijzing naar een cel zijn of een afzonderlijke waarde.",
          example: "\"A\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "keuze2",
          detail: "Extra waarden om uit te kiezen.",
          example: "\"B\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "HYPERLINK",
      t: 2,
      d: "Maakt een hyperlink binnen een cel.",
      a: "Maakt een hyperlink binnen een cel.",
      p: [
        {
          name: "url",
          detail: "De volledige URL van de linklocatie, tussen aanhalingstekens, of een verwijzing naar een cel die zo'n URL bevat.",
          example: "\"http://www.luckysheet.com/\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "linktekst",
          detail: "De tekst die in de cel wordt weergegeven als de link, tussen aanhalingstekens, of een verwijzing naar een cel die zo'n label bevat.",
          example: "\"luckysheet\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TIME",
      t: 6,
      d: "Converteert een opgegeven uur, minuut en seconde naar een tijd.",
      a: "Converteert uur/minuut/seconde naar een tijd.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "uur",
          detail: "Het uurcomponent van de tijd.",
          example: "11",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "minuut",
          detail: "Het minuutcomponent van de tijd.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "seconde",
          detail: "Het secondecomponent van de tijd.",
          example: "59",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "TIMEVALUE",
      t: 6,
      d: "Retourneert het deel van een dag van 24 uur dat de tijd vertegenwoordigt.",
      a: "Converteert een tijdreeks naar de bijbehorende seriële weergave.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tijdtekenreeks",
          detail: "De tekenreeks met de tijdweergave.",
          example: "\"2:15 PM\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "EOMONTH",
      t: 6,
      d: "Retourneert een datum op de laatste dag van een maand die een opgegeven aantal maanden vóór of na een andere datum valt.",
      a: "Laatste dag van een maand vóór of na een datum.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "startdatum",
          detail: "De datum vanaf welke het resultaat wordt berekend.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aantal_maanden",
          detail: "Het aantal maanden vóór (negatief) of na (positief) 'startdatum' om in aanmerking te nemen.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "EDATE",
      t: 6,
      d: "Retourneert een datum een opgegeven aantal maanden vóór of na een andere datum.",
      a: "Datum een aantal maanden vóór/na een andere datum.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "startdatum",
          detail: "De datum vanaf welke het resultaat wordt berekend.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aantal_maanden",
          detail: "Het aantal maanden vóór (negatief) of na (positief) 'startdatum' om te berekenen.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SECOND",
      t: 6,
      d: "Retourneert het secondecomponent van een specifieke tijd, in numeriek formaat.",
      a: "Secondecomponent van een specifieke tijd.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tijd",
          detail: "De tijd waarvan het secondecomponent wordt berekend.",
          example: "TIME(11",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "MINUTE",
      t: 6,
      d: "Retourneert het minuutcomponent van een specifieke tijd, in numeriek formaat.",
      a: "Minuutcomponent van een specifieke tijd.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tijd",
          detail: "De tijd waarvan het minuutcomponent wordt berekend.",
          example: "TIME(11",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "HOUR",
      t: 6,
      d: "Retourneert het uurcomponent van een specifieke tijd, in numeriek formaat.",
      a: "Uurcomponent van een specifieke tijd.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tijd",
          detail: "De tijd waarvan het uurcomponent wordt berekend.",
          example: "TIME(11",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "NOW",
      t: 6,
      d: "Retourneert de huidige datum en tijd als een datumwaarde.",
      a: "Huidige datum en tijd als een datumwaarde.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "NETWORKDAYS",
      t: 6,
      d: "Retourneert het aantal netto werkdagen tussen twee opgegeven dagen.",
      a: "Netto werkdagen tussen twee opgegeven dagen.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "De begindatum van de periode waarvan het aantal netto werkdagen wordt berekend.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "einddatum",
          detail: "De einddatum van de periode waarvan het aantal netto werkdagen wordt berekend.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feestdagen",
          detail: "Een bereik of array-constante met de seriële datumnummers die als feestdagen worden beschouwd.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "NETWORKDAYS_INTL",
      t: 6,
      d: "Retourneert het aantal netto werkdagen tussen twee opgegeven dagen, met uitsluiting van opgegeven weekenddagen en feestdagen.",
      a: "Netto werkdagen tussen twee datums (weekenden opgeven).",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "startdatum",
          detail: "De begindatum van de periode waarvan het aantal netto werkdagen wordt berekend.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "einddatum",
          detail: "De einddatum van de periode waarvan het aantal netto werkdagen wordt berekend.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "weekend",
          detail: "Een getal of tekenreeks die aangeeft welke dagen van de week als weekend worden beschouwd.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feestdagen",
          detail: "Een bereik of array-constante met de datums die als feestdagen worden beschouwd.",
          example: "DATE(1969",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISOWEEKNUM",
      t: 6,
      d: "Retourneert een getal dat het ISO-weeknummer van het jaar vertegenwoordigt waarin de opgegeven datum valt.",
      a: "ISO-weeknummer van het jaar.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "De datum waarvoor het ISO-weeknummer moet worden bepaald. Moet een verwijzing zijn naar een cel met een datum, een functie die een datumtype retourneert, of een getal.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "WEEKNUM",
      t: 6,
      d: "Retourneert een getal dat de week van het jaar vertegenwoordigt waarin de opgegeven datum valt.",
      a: "Weeknummer van het jaar.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "datum",
          detail: "De datum waarvoor het weeknummer moet worden bepaald. Moet een verwijzing zijn naar een cel met een datum, een functie die een datumtype retourneert, of een getal.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "type",
          detail: "Een getal dat de dag vertegenwoordigt waarop een week begint. Zondag = 1.",
          example: "7",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "WEEKDAY",
      t: 6,
      d: "Retourneert een getal dat de dag van de week van de opgegeven datum vertegenwoordigt.",
      a: "Dag van de week van de opgegeven datum (als getal).",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "datum",
          detail: "De datum waarvoor de dag van de week moet worden bepaald. Moet een verwijzing zijn naar een cel met een datum, een functie die een datumtype retourneert, of een getal.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "type",
          detail: "Een getal dat aangeeft welk nummeringssysteem moet worden gebruikt om weekdagen weer te geven. Standaard wordt geteld vanaf zondag = 1.",
          example: "7",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DAY",
      t: 6,
      d: "Retourneert de dag van de maand waarop een specifieke datum valt, in numeriek formaat.",
      a: "Dag van de maand waarop een specifieke datum valt.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "De datum waaruit de dag wordt geëxtraheerd.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DAYS",
      t: 6,
      d: "Retourneert het aantal dagen tussen twee datums.",
      a: "Aantal dagen tussen twee datums.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "einddatum",
          detail: "Het einde van het datumbereik.",
          example: "2011-3-15",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "startdatum",
          detail: "Het begin van het datumbereik.",
          example: "2011-2-1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DAYS360",
      t: 6,
      d: "Retourneert het verschil tussen twee dagen op basis van het jaar van 360 dagen dat wordt gebruikt bij sommige financiële renteberekeningen.",
      a: "Dagen tussen twee datums op basis van een jaar van 360 dagen.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "De begindatum om in de berekening in aanmerking te nemen. Moet een verwijzing zijn naar een cel met een datum, een functie die een datumtype retourneert, of een getal.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "einddatum",
          detail: "De einddatum om in de berekening in aanmerking te nemen. Moet een verwijzing zijn naar een cel met een datum, een functie die een datumtype retourneert, of een getal.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "methode",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DATE",
      t: 6,
      d: "Converteert een opgegeven jaar, maand en dag naar een datum.",
      a: "Converteert jaar/maand/dag naar een datum.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "jaar",
          detail: "Het jaarcomponent van de datum.",
          example: "1969",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "maand",
          detail: "Het maandcomponent van de datum.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dag",
          detail: "Het dagcomponent van de datum.",
          example: "20",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATEVALUE",
      t: 6,
      d: "Converteert een opgegeven datumreeks in een bekend formaat naar een datumwaarde.",
      a: "Converteert een datumreeks naar een datumwaarde.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datumtekenreeks",
          detail: "De tekenreeks die de datum vertegenwoordigt.",
          example: "\"1969-7-20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DATEDIF",
      t: 6,
      d: "Berekent het aantal dagen, maanden of jaren tussen twee datums.",
      a: "Datumverschil.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "De begindatum om in de berekening in aanmerking te nemen. Moet een verwijzing zijn naar een cel met een datum, een functie die een datumtype retourneert, of een getal.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "einddatum",
          detail: "De einddatum om in de berekening in aanmerking te nemen. Moet een verwijzing zijn naar een cel met een datum, een functie die een datumtype retourneert, of een getal.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "eenheid",
          detail: "Een tekenreeksafkorting voor de tijdseenheid. Bijvoorbeeld \"M\" voor maand. Toegestane waarden zijn \"Y\",\"M\",\"D\",\"MD\",\"YM\",\"YD\".",
          example: "16)",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "WORKDAY",
      t: 6,
      d: "Berekent de datum na een aantal werkdagen vanaf een opgegeven begindatum.",
      a: "Aantal werkdagen vanaf de begindatum.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "De datum vanaf welke moet worden begonnen met tellen.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aantal_dagen",
          detail: "Het aantal werkdagen om vanaf `startdatum` verder te gaan. Indien negatief, wordt terug geteld.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "feestdagen",
          detail: "Een bereik of array-constante met de datums die als feestdagen worden beschouwd.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "WORKDAY_INTL",
      t: 6,
      d: "Berekent de datum na een opgegeven aantal werkdagen, met uitsluiting van opgegeven weekenddagen en feestdagen.",
      a: "Datum na een aantal werkdagen (weekenden opgeven).",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "startdatum",
          detail: "De datum vanaf welke moet worden begonnen met tellen.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aantal_dagen",
          detail: "Het aantal werkdagen om vanaf `startdatum` verder te gaan. Indien negatief, wordt terug geteld.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "weekend",
          detail: "Een getal of tekenreeks die aangeeft welke dagen van de week als weekend worden beschouwd.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feestdagen",
          detail: "Een bereik of array-constante met de datums die als feestdagen worden beschouwd.",
          example: "DATE(1969",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "YEAR",
      t: 6,
      d: "Retourneert het jaar dat door een opgegeven datum wordt aangegeven.",
      a: "Jaar dat door een opgegeven datum wordt aangegeven.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "De datum waaruit het jaar wordt geëxtraheerd.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "YEARFRAC",
      t: 6,
      d: "Retourneert het aantal jaren, inclusief fracties van jaren, tussen twee datums met behulp van een opgegeven daggetalconventie.",
      a: "Exact aantal jaren tussen twee datums.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "De begindatum om in de berekening in aanmerking te nemen. Moet een verwijzing zijn naar een cel met een datum, een functie die een datumtype retourneert, of een getal.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "einddatum",
          detail: "De einddatum om in de berekening in aanmerking te nemen. Moet een verwijzing zijn naar een cel met een datum, een functie die een datumtype retourneert, of een getal.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "TODAY",
      t: 6,
      d: "Retourneert de huidige datum als een datumwaarde.",
      a: "Huidige datum als een datumwaarde.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "MONTH",
      t: 6,
      d: "Retourneert de maand van het jaar waarin een specifieke datum valt, in numeriek formaat.",
      a: "Maand van het jaar waarin een specifieke datum valt.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "De datum waaruit de maand wordt geëxtraheerd.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "EFFECT",
      t: 8,
      d: "Berekent het effectieve jaarlijkse rentepercentage gegeven het nominale percentage en het aantal samengestelde periodes per jaar.",
      a: "Effectief jaarlijks rentepercentage.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "nominale_rente",
          detail: "Het nominale jaarlijkse rentepercentage.",
          example: "0.99",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodes_per_jaar",
          detail: "Het aantal samengestelde periodes per jaar.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DOLLAR",
      t: 12,
      d: "Formatteert een getal in de valuta die specifiek is voor de landinstelling van uw spreadsheet.",
      a: "Formatteert een getal als valuta die specifiek is voor de landinstelling van uw spreadsheet.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "getal",
          detail: "De te formatteren waarde.",
          example: "1.2351",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_decimalen",
          detail: "Het aantal weer te geven decimalen.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DOLLARDE",
      t: 8,
      d: "Converteert een prijsnotering die is opgegeven als decimale breuk naar een decimale waarde.",
      a: "Converteert een decimale breuk naar een decimale waarde.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gebroken_prijs",
          detail: "De prijsnotering die is opgegeven met decimale-breukconventies.",
          example: "100.10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "eenheid",
          detail: "De eenheden van de breuk, bijv. `8` voor achtsten of `32` voor tweeëndertigsten.",
          example: "32",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DOLLARFR",
      t: 8,
      d: "Converteert een prijsnotering die is opgegeven als decimale waarde naar een decimale breuk.",
      a: "Converteert een decimale waarde naar een decimale breuk.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "decimale_prijs",
          detail: "De prijsnotering die is opgegeven als decimale waarde.",
          example: "100.125",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "eenheid",
          detail: "De eenheden van de gewenste breuk, bijv. `8` voor achtsten of `32` voor tweeëndertigsten.",
          example: "32",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DB",
      t: 8,
      d: "Berekent de afschrijving van een actief voor een opgegeven periode met behulp van de rekenkundige degressieve afschrijvingsmethode.",
      a: "Afschrijving via de degressieve afschrijvingsmethode.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "kostprijs",
          detail: "De initiële kosten van het actief.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwaarde",
          detail: "De waarde van het actief aan het einde van de afschrijving.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "levensduur",
          detail: "Het aantal periodes waarover het actief wordt afgeschreven.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "De enkele periode binnen `levensduur` waarvoor de afschrijving moet worden berekend.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "maand",
          detail: "Het aantal maanden in het eerste jaar van afschrijving.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DDB",
      t: 8,
      d: "Berekent de afschrijving van een actief voor een opgegeven periode met behulp van de dubbel-degressieve afschrijvingsmethode.",
      a: "Afschrijving via de dubbel-degressieve afschrijvingsmethode.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "kostprijs",
          detail: "De initiële kosten van het actief.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwaarde",
          detail: "De waarde van het actief aan het einde van de afschrijving.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "levensduur",
          detail: "Het aantal periodes waarover het actief wordt afgeschreven.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "De enkele periode binnen `levensduur` waarvoor de afschrijving moet worden berekend.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "De factor waarmee de afschrijving afneemt.",
          example: "2.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "RATE",
      t: 8,
      d: "Berekent het rentepercentage van een lijfrente-investering op basis van periodieke betalingen van een constant bedrag en de aanname van een constant rentepercentage.",
      a: "Rentepercentage van een lijfrente-investering.",
      m: [
        3,
        6
      ],
      p: [
        {
          name: "aantal_periodes",
          detail: "Het aantal te verrichten betalingen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "betaling_per_periode",
          detail: "Het per periode te betalen bedrag.",
          example: "-100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "De huidige waarde van de lijfrente.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "toekomstige_waarde",
          detail: "De toekomstige waarde die overblijft nadat de laatste betaling is verricht.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Of betalingen verschuldigd zijn aan het einde (`0`) of het begin (`1`) van elke periode.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "renteschatting",
          detail: "Een schatting van wat het rentepercentage zal zijn.",
          example: "0.1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "CUMPRINC",
      t: 8,
      d: "Berekent de cumulatieve hoofdsom die is betaald over een reeks betalingsperiodes voor een investering op basis van periodieke betalingen van een constant bedrag en een constant rentepercentage.",
      a: "Cumulatieve hoofdsom betaald over een reeks periodes.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Het rentepercentage.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_periodes",
          detail: "Het aantal te verrichten betalingen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "De huidige waarde van de lijfrente.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "eerste_periode",
          detail: "Het nummer van de betalingsperiode waarmee de cumulatieve berekening begint.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "laatste_periode",
          detail: "Het nummer van de betalingsperiode waarmee de cumulatieve berekening eindigt.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Of betalingen verschuldigd zijn aan het einde (`0`) of het begin (`1`) van elke periode.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "COUPNUM",
      t: 8,
      d: "Berekent het aantal coupons, of rentebetalingen, tussen de afwikkelingsdatum en de vervaldatum van de investering.",
      a: "Aantal coupons tussen afwikkeling en vervaldatum.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "02",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequentie",
          detail: "Het aantal rente- of couponbetalingen per jaar (1, 2 of 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SYD",
      t: 8,
      d: "Berekent de afschrijving van een actief voor een opgegeven periode met behulp van de methode van de som van de jaartallen.",
      a: "Afschrijving via de methode van de som van de jaartallen.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "kostprijs",
          detail: "De initiële kosten van het actief.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwaarde",
          detail: "De waarde van het actief aan het einde van de afschrijving.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "levensduur",
          detail: "Het aantal periodes waarover het actief wordt afgeschreven.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "De enkele periode binnen `levensduur` waarvoor de afschrijving moet worden berekend.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "TBILLEQ",
      t: 8,
      d: "Berekent het equivalente jaarlijkse rendement van een Amerikaanse schatkistpromesse op basis van het disconteringspercentage.",
      a: "Equivalent rendement voor een schatkistpromesse.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "discontovoet",
          detail: "Het disconteringspercentage van het biljet op het moment van aankoop.",
          example: "2)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "TBILLYIELD",
      t: 8,
      d: "Berekent het rendement van een Amerikaanse schatkistpromesse op basis van de prijs.",
      a: "Het rendement van een Amerikaanse schatkistpromesse op basis van de prijs.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prijs",
          detail: "De prijs waartegen het effect wordt gekocht per 100 nominale waarde.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "TBILLPRICE",
      t: 8,
      d: "Berekent de prijs van een Amerikaanse schatkistpromesse op basis van het disconteringspercentage.",
      a: "Prijs van een Amerikaanse schatkistpromesse.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "discontovoet",
          detail: "Het disconteringspercentage van het biljet op het moment van aankoop.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "PV",
      t: 8,
      d: "Berekent de huidige waarde van een lijfrente-investering op basis van periodieke betalingen van een constant bedrag en een constant rentepercentage.",
      a: "Huidige waarde van een lijfrente-investering.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Het rentepercentage.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_periodes",
          detail: "Het aantal te verrichten betalingen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "betalingsbedrag",
          detail: "Het per periode te betalen bedrag.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "toekomstige_waarde",
          detail: "De toekomstige waarde die overblijft nadat de laatste betaling is verricht.",
          example: "D2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Of betalingen verschuldigd zijn aan het einde (`0`) of het begin (`1`) van elke periode.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ACCRINT",
      t: 8,
      d: "Berekent de opgebouwde rente van een effect met periodieke betalingen.",
      a: "Opgebouwde rente van een effect met periodieke betalingen.",
      m: [
        6,
        8
      ],
      p: [
        {
          name: "uitgiftedatum",
          detail: "De datum waarop het effect oorspronkelijk werd uitgegeven.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "eerste_betaling",
          detail: "De eerste datum waarop rente wordt betaald.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rentevoet",
          detail: "Het geannualiseerde rentepercentage.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aflossingswaarde",
          detail: "Het aflossingsbedrag per 100 nominale waarde.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequentie",
          detail: "Het aantal rente- of couponbetalingen per jaar (1, 2 of 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "berekeningsmethode",
          detail: "[Optioneel - standaard WAAR()] - Een logische waarde die de methode aangeeft die wordt gebruikt om de totale opgebouwde rente te berekenen wanneer de afwikkelingsdatum later is dan de eerste renteopbouwdatum. \n\nAls de waarde WAAR is, wordt de totale opgebouwde rente vanaf de uitgiftedatum tot de afwikkelingsdatum geretourneerd. \n\nAls de waarde ONWAAR is, wordt de opgebouwde rente vanaf de eerste renteopbouwdatum tot de afwikkelingsdatum geretourneerd.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ACCRINTM",
      t: 8,
      d: "Berekent de opgebouwde rente van een effect dat rente betaalt bij vervaldatum.",
      a: "Opgebouwde rente van een effect dat betaalt bij vervaldatum.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "uitgiftedatum",
          detail: "De datum waarop het effect oorspronkelijk werd uitgegeven.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum van het effect.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rentevoet",
          detail: "Het geannualiseerde rentepercentage.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aflossingswaarde",
          detail: "Het aflossingsbedrag per 100 nominale waarde.",
          example: "1000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "COUPDAYBS",
      t: 8,
      d: "Berekent het aantal dagen vanaf de eerste coupon, of rentebetaling, tot de afwikkeling.",
      a: "Aantal dagen van eerste coupon tot afwikkeling.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequentie",
          detail: "Het aantal rente- of couponbetalingen per jaar (1, 2 of 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "COUPDAYS",
      t: 8,
      d: "Berekent het aantal dagen in de couponperiode, of renteperiode, die de opgegeven afwikkelingsdatum bevat.",
      a: "Dagen in couponperiode die de afwikkelingsdatum bevat.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequentie",
          detail: "Het aantal rente- of couponbetalingen per jaar (1, 2 of 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "COUPDAYSNC",
      t: 8,
      d: "Berekent het aantal dagen vanaf de afwikkelingsdatum tot de volgende coupon, of rentebetaling.",
      a: "Dagen van afwikkeling tot volgende coupon.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequentie",
          detail: "Het aantal rente- of couponbetalingen per jaar (1, 2 of 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "COUPNCD",
      t: 8,
      d: "Berekent de volgende coupondatum, of renteperiode, na de afwikkelingsdatum.",
      a: "Volgende coupondatum na de afwikkelingsdatum.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequentie",
          detail: "Het aantal rente- of couponbetalingen per jaar (1, 2 of 4).",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "DATE(2019",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "COUPPCD",
      t: 8,
      d: "Berekent de laatste coupondatum, of rentebetaling, vóór de afwikkelingsdatum.",
      a: "Laatste coupondatum vóór de afwikkelingsdatum.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequentie",
          detail: "Het aantal rente- of couponbetalingen per jaar (1, 2 of 4).",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "DATE(2019",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "FV",
      t: 8,
      d: "Berekent de toekomstige waarde van een lijfrente-investering op basis van periodieke betalingen van een constant bedrag en een constant rentepercentage.",
      a: "Toekomstige waarde van een lijfrente-investering.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Het rentepercentage.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_periodes",
          detail: "Het aantal te verrichten betalingen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "betalingsbedrag",
          detail: "Het per periode te betalen bedrag.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "De huidige waarde van de lijfrente.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Of betalingen verschuldigd zijn aan het einde (`0`) of het begin (`1`) van elke periode.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "FVSCHEDULE",
      t: 8,
      d: "Berekent de toekomstige waarde van een hoofdsom op basis van een opgegeven reeks mogelijk variërende rentepercentages.",
      a: "Toekomstige waarde van hoofdsom uit een reeks percentages.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "hoofdsom",
          detail: "Het bedrag van het initiële kapitaal of de waarde waarop wordt samengesteld.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rentetabel",
          detail: "Een reeks rentepercentages die worden samengesteld tegen de `hoofdsom`.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "YIELD",
      t: 8,
      d: "Berekent het jaarlijkse rendement van een effect dat periodieke rente betaalt, zoals een Amerikaanse staatsobligatie, op basis van de prijs.",
      a: "Jaarlijks rendement van een effect dat periodieke rente betaalt.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rentevoet",
          detail: "Het geannualiseerde rentepercentage.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "prijs",
          detail: "De prijs waartegen het effect wordt gekocht per 100 nominale waarde.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aflossingswaarde",
          detail: "Het aflossingsbedrag per 100 nominale waarde.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequentie",
          detail: "Het aantal rente- of couponbetalingen per jaar (1, 2 of 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "YIELDDISC",
      t: 8,
      d: "Berekent het jaarlijkse rendement van een discontowaardepapier (zonder rente), op basis van de prijs.",
      a: "Jaarlijks rendement van een discontowaardepapier.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prijs",
          detail: "De prijs waartegen het effect wordt gekocht per 100 nominale waarde.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aflossingswaarde",
          detail: "Het aflossingsbedrag per 100 nominale waarde.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "NOMINAL",
      t: 8,
      d: "Berekent het nominale jaarlijkse rentepercentage gegeven het effectieve percentage en het aantal samengestelde periodes per jaar.",
      a: "Nominaal jaarlijks rentepercentage.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "effectieve_rente",
          detail: "Het effectieve jaarlijkse rentepercentage.",
          example: "0.85",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodes_per_jaar",
          detail: "Het aantal samengestelde periodes per jaar.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "XIRR",
      t: 8,
      d: "Berekent het interne rendement van een investering op basis van een opgegeven reeks mogelijk onregelmatig gespreide kasstromen.",
      a: "Intern rendement gegeven niet-periodieke kasstromen.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "kasstroombedragen",
          detail: "Een array of bereik met de inkomsten of betalingen die verbonden zijn met de investering.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kasstroomdatums",
          detail: "Een array of bereik met datums die overeenkomen met de kasstromen in `kasstroombedragen`.",
          example: "C2:C25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "renteschatting",
          detail: "Een schatting van wat het interne rendement zal zijn.",
          example: "250",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MIRR",
      t: 8,
      d: "Berekent het aangepaste interne rendement van een investering op basis van een reeks periodieke kasstromen en het verschil tussen het rentepercentage dat is betaald op financiering en het rendement dat is ontvangen op herbelegd inkomen.",
      a: "Aangepast intern rendement.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "kasstroombedragen",
          detail: "Een array of bereik met de inkomsten of betalingen die verbonden zijn met de investering.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "financieringsrente",
          detail: "Het rentepercentage dat is betaald op geïnvesteerde middelen.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "herinvesteringsrendement",
          detail: "Het rendement (als percentage) verdiend op herbelegging van inkomsten uit de investering.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "IRR",
      t: 8,
      d: "Berekent het interne rendement van een investering op basis van een reeks periodieke kasstromen.",
      a: "Intern rendement gegeven periodieke kasstromen.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "kasstroombedragen",
          detail: "Een array of bereik met de inkomsten of betalingen die verbonden zijn met de investering.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "renteschatting",
          detail: "Een schatting van wat het interne rendement zal zijn.",
          example: "200",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "NPV",
      t: 8,
      d: "Berekent de netto contante waarde van een investering op basis van een reeks periodieke kasstromen en een disconteringspercentage.",
      a: "De netto contante waarde van een investering op basis van een reeks periodieke kasstromen en een disconteringspercentage.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "discontovoet",
          detail: "Het disconteringspercentage van de investering over één periode.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kasstroom1",
          detail: "De eerste toekomstige kasstroom.",
          example: "200",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kasstroom2",
          detail: "Extra toekomstige kasstromen.",
          example: "250",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "XNPV",
      t: 8,
      d: "Berekent de netto contante waarde van een investering op basis van een opgegeven reeks mogelijk onregelmatig gespreide kasstromen en een disconteringspercentage.",
      a: "Netto contante waarde gegeven niet-periodieke kasstromen.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "discontovoet",
          detail: "Het disconteringspercentage van de investering over één periode.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kasstroombedragen",
          detail: "Een celbereik met de inkomsten of betalingen die verbonden zijn met de investering.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kasstroomdatums",
          detail: "Een celbereik met datums die overeenkomen met de kasstromen in `kasstroombedragen`.",
          example: "C2:C25",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "CUMIPMT",
      t: 8,
      d: "Berekent de cumulatieve rente over een reeks betalingsperiodes voor een investering op basis van periodieke betalingen van een constant bedrag en een constant rentepercentage.",
      a: "Cumulatieve rente betaald over een reeks periodes.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Het rentepercentage.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_periodes",
          detail: "Het aantal te verrichten betalingen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "De huidige waarde van de lijfrente.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "eerste_periode",
          detail: "Het nummer van de betalingsperiode waarmee de cumulatieve berekening begint.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "laatste_periode",
          detail: "Het nummer van de betalingsperiode waarmee de cumulatieve berekening eindigt.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Of betalingen verschuldigd zijn aan het einde (`0`) of het begin (`1`) van elke periode.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "PMT",
      t: 8,
      d: "Berekent de periodieke betaling voor een lijfrente-investering op basis van periodieke betalingen van een constant bedrag en een constant rentepercentage.",
      a: "Periodieke betaling voor een lijfrente-investering.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Het rentepercentage.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_periodes",
          detail: "Het aantal te verrichten betalingen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "De huidige waarde van de lijfrente.",
          example: " 100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "toekomstige_waarde",
          detail: "De toekomstige waarde die overblijft nadat de laatste betaling is verricht.",
          example: "D2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Of betalingen verschuldigd zijn aan het einde (`0`) of het begin (`1`) van elke periode.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "IPMT",
      t: 8,
      d: "Berekent de rentebetaling voor een investering op basis van periodieke betalingen van een constant bedrag en een constant rentepercentage.",
      a: "Rentebetaling voor een investering.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Het rentepercentage.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "De afschrijvingsperiode, in termen van aantal periodes.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_periodes",
          detail: "Het aantal te verrichten betalingen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "De huidige waarde van de lijfrente.",
          example: "80000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "toekomstige_waarde",
          detail: "De toekomstige waarde die overblijft nadat de laatste betaling is verricht.",
          example: "E2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Of betalingen verschuldigd zijn aan het einde (`0`) of het begin (`1`) van elke periode.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "PPMT",
      t: 8,
      d: "Berekent de aflossing op de hoofdsom van een investering op basis van periodieke betalingen van een constant bedrag en een constant rentepercentage.",
      a: "Aflossing op de hoofdsom van een investering.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Het rentepercentage.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "De afschrijvingsperiode, in termen van aantal periodes.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_periodes",
          detail: "Het aantal te verrichten betalingen.",
          example: "3*12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "De huidige waarde van de lijfrente.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "toekomstige_waarde",
          detail: "De toekomstige waarde die overblijft nadat de laatste betaling is verricht.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Of betalingen verschuldigd zijn aan het einde (`0`) of het begin (`1`) van elke periode.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "INTRATE",
      t: 8,
      d: "Berekent het effectieve rentepercentage dat wordt gegenereerd wanneer een investering tegen de ene prijs wordt gekocht en tegen een andere wordt verkocht, zonder dat de investering zelf rente of dividend oplevert.",
      a: "Berekent het effectieve rentepercentage.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "aankoopdatum",
          detail: "De aankoopdatum van de investering.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "verkoopdatum",
          detail: "De verkoopdatum van de investering.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aankoopprijs",
          detail: "De prijs waartegen de investering werd gekocht.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "verkoopprijs",
          detail: "De prijs waartegen de investering werd verkocht.",
          example: "101200",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "PRICE",
      t: 8,
      d: "Berekent de prijs van een effect dat periodieke rente betaalt, zoals een Amerikaanse staatsobligatie, op basis van het verwachte rendement.",
      a: "Prijs van een effect dat periodieke rente betaalt.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rentevoet",
          detail: "Het geannualiseerde rentepercentage.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendement",
          detail: "Het verwachte jaarlijkse rendement van het effect.",
          example: "0.065",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aflossingswaarde",
          detail: "Het aflossingsbedrag per 100 nominale waarde.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequentie",
          detail: "Het aantal rente- of couponbetalingen per jaar (1, 2 of 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "PRICEDISC",
      t: 8,
      d: "Berekent de prijs van een discontowaardepapier (zonder rente), op basis van het verwachte rendement.",
      a: "Prijs van een discontowaardepapier.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "discontovoet",
          detail: "Het disconteringspercentage van het effect op het moment van aankoop.",
          example: "0.0525",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aflossingswaarde",
          detail: "Het aflossingsbedrag per 100 nominale waarde.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "PRICEMAT",
      t: 8,
      d: "Berekent de prijs van een effect dat rente betaalt bij vervaldatum, op basis van het verwachte rendement.",
      a: "Prijs van een effect dat rente betaalt bij vervaldatum.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "uitgiftedatum",
          detail: "De datum waarop het effect oorspronkelijk werd uitgegeven.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rentevoet",
          detail: "Het geannualiseerde rentepercentage.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendement",
          detail: "Het verwachte jaarlijkse rendement van het effect.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "RECEIVED",
      t: 8,
      d: "Berekent het bedrag dat bij vervaldatum wordt ontvangen voor een investering in vastrentende effecten die op een bepaalde datum zijn gekocht.",
      a: "Bedrag ontvangen bij vervaldatum voor een effect.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "investering",
          detail: "Het geïnvesteerde bedrag (ongeacht de nominale waarde van elk effect).",
          example: "10000000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "discontovoet",
          detail: "Het disconteringspercentage van het effect waarin wordt geïnvesteerd.",
          example: "0.0575",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "12",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DISC",
      t: 8,
      d: "Berekent het disconteringspercentage van een effect op basis van de prijs.",
      a: "Het disconteringspercentage van een effect op basis van de prijs.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prijs",
          detail: "De prijs waartegen het effect wordt gekocht per 100 nominale waarde.",
          example: "97.975",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aflossingswaarde",
          detail: "Het aflossingsbedrag per 100 nominale waarde.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "12",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "NPER",
      t: 8,
      d: "Berekent het aantal betalingsperiodes voor een investering op basis van periodieke betalingen van een constant bedrag en een constant rentepercentage.",
      a: "Aantal betalingsperiodes voor een investering.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Het rentepercentage.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "betalingsbedrag",
          detail: "Het bedrag van elke verrichte betaling.",
          example: "500",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "De huidige waarde van de lijfrente.",
          example: "40000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "toekomstige_waarde",
          detail: "De toekomstige waarde die overblijft nadat de laatste betaling is verricht.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Of betalingen verschuldigd zijn aan het einde (`0`) of het begin (`1`) van elke periode.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SLN",
      t: 8,
      d: "Berekent de afschrijving van een actief voor één periode met behulp van de lineaire afschrijvingsmethode.",
      a: "Afschrijving van een actief met de lineaire afschrijvingsmethode.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "kostprijs",
          detail: "De initiële kosten van het actief.",
          example: "300000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwaarde",
          detail: "De waarde van het actief aan het einde van de afschrijving.",
          example: "75000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "levensduur",
          detail: "Het aantal periodes waarover het actief wordt afgeschreven.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DURATION",
      t: 8,
      d: "Berekent het aantal samengestelde periodes dat nodig is voor een investering met een opgegeven huidige waarde die tegen een gegeven percentage in waarde stijgt, om een streefwaarde te bereiken.",
      a: "Aantal periodes voordat een investering een waarde bereikt.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rentevoet",
          detail: "Het geannualiseerde rentepercentage.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendement",
          detail: "Het verwachte jaarlijkse rendement van het effect.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequentie",
          detail: "Het aantal rente- of couponbetalingen per jaar (1, 2 of 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MDURATION",
      t: 8,
      d: "Berekent de aangepaste Macaulay-looptijd van een effect dat periodieke rente betaalt, zoals een Amerikaanse staatsobligatie, op basis van het verwachte rendement.",
      a: "Aangepaste Macaulay-looptijd.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "De afwikkelingsdatum van het effect, de datum na uitgifte waarop het effect aan de koper wordt geleverd.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "De vervaldatum of einddatum van het effect, waarop het tegen de nominale waarde kan worden ingelost.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rentevoet",
          detail: "Het geannualiseerde rentepercentage.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendement",
          detail: "Het verwachte jaarlijkse rendement van het effect.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequentie",
          detail: "Het aantal rente- of couponbetalingen per jaar (1, 2 of 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Een indicator van de te gebruiken methode voor het tellen van dagen.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "BIN2DEC",
      t: 9,
      d: "Converteert een binair getal met teken naar decimaal formaat.",
      a: "Converteert een binair getal met teken naar decimaal formaat.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ondertekend_binair_getal",
          detail: "De binaire waarde met teken van 10 bits die naar decimaal moet worden geconverteerd, opgegeven als een tekenreeks.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BIN2HEX",
      t: 9,
      d: "Converteert een binair getal met teken naar hexadecimaal formaat met teken.",
      a: "Converteert een binair getal naar hexadecimaal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ondertekend_binair_getal",
          detail: "De binaire waarde met teken van 10 bits die naar hexadecimaal met teken moet worden geconverteerd, opgegeven als een tekenreeks.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significante_cijfers",
          detail: "Het aantal significante cijfers dat in het resultaat moet worden gegarandeerd.",
          example: "8",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "BIN2OCT",
      t: 9,
      d: "Converteert een binair getal met teken naar octaal formaat met teken.",
      a: "Converteert een binair getal naar octaal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ondertekend_binair_getal",
          detail: "De binaire waarde met teken van 10 bits die naar octaal met teken moet worden geconverteerd, opgegeven als een tekenreeks.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significante_cijfers",
          detail: "Het aantal significante cijfers dat in het resultaat moet worden gegarandeerd.",
          example: "8",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DEC2BIN",
      t: 9,
      d: "Converteert een decimaal getal naar binair formaat met teken.",
      a: "Converteert een decimaal getal naar binair formaat met teken.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "decimaal_getal",
          detail: "De decimale waarde die naar binair met teken moet worden geconverteerd, opgegeven als een tekenreeks.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significante_cijfers",
          detail: "Het aantal significante cijfers dat in het resultaat moet worden gegarandeerd.",
          example: "8",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DEC2HEX",
      t: 9,
      d: "Converteert een decimaal getal naar hexadecimaal formaat met teken.",
      a: "Converteert een decimaal getal naar hexadecimaal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "decimaal_getal",
          detail: "De decimale waarde die naar hexadecimaal met teken moet worden geconverteerd, opgegeven als een tekenreeks.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significante_cijfers",
          detail: "Het aantal significante cijfers dat in het resultaat moet worden gegarandeerd.",
          example: "8",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DEC2OCT",
      t: 9,
      d: "Converteert een decimaal getal naar octaal formaat met teken.",
      a: "Converteert een decimaal getal naar octaal formaat met teken.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "decimaal_getal",
          detail: "De decimale waarde die naar octaal met teken moet worden geconverteerd, opgegeven als een tekenreeks.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significante_cijfers",
          detail: "Het aantal significante cijfers dat in het resultaat moet worden gegarandeerd.",
          example: "8",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "HEX2BIN",
      t: 9,
      d: "Converteert een hexadecimaal getal met teken naar binair formaat met teken.",
      a: "Converteert een hexadecimaal getal naar binair.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ondertekend_hexadecimaal_getal",
          detail: "De hexadecimale waarde met teken van 40 bits die naar binair met teken moet worden geconverteerd, opgegeven als een tekenreeks.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significante_cijfers",
          detail: "Het aantal significante cijfers dat in het resultaat moet worden gegarandeerd.",
          example: "8",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "HEX2DEC",
      t: 9,
      d: "Converteert een hexadecimaal getal met teken naar decimaal formaat.",
      a: "Converteert een hexadecimaal getal naar decimaal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ondertekend_hexadecimaal_getal",
          detail: "De hexadecimale waarde met teken van 40 bits die naar decimaal moet worden geconverteerd, opgegeven als een tekenreeks.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "HEX2OCT",
      t: 9,
      d: "Converteert een hexadecimaal getal met teken naar octaal formaat met teken.",
      a: "Converteert een hexadecimaal getal naar octaal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ondertekend_hexadecimaal_getal",
          detail: "De hexadecimale waarde met teken van 40 bits die naar octaal met teken moet worden geconverteerd, opgegeven als een tekenreeks.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significante_cijfers",
          detail: "Het aantal significante cijfers dat in het resultaat moet worden gegarandeerd.",
          example: "8",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "OCT2BIN",
      t: 9,
      d: "Converteert een octaal getal met teken naar binair formaat met teken.",
      a: "Converteert een octaal getal naar binair.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ondertekend_octaal_getal",
          detail: "De octale waarde met teken van 30 bits die naar binair met teken moet worden geconverteerd, opgegeven als een tekenreeks.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significante_cijfers",
          detail: "Het aantal significante cijfers dat in het resultaat moet worden gegarandeerd.",
          example: "8",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "OCT2DEC",
      t: 9,
      d: "Converteert een octaal getal met teken naar decimaal formaat.",
      a: "Converteert een octaal getal met teken naar decimaal formaat.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ondertekend_octaal_getal",
          detail: "De octale waarde met teken van 30 bits die naar decimaal moet worden geconverteerd, opgegeven als een tekenreeks.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "OCT2HEX",
      t: 9,
      d: "Converteert een octaal getal met teken naar hexadecimaal formaat met teken.",
      a: "Converteert een octaal getal naar hexadecimaal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ondertekend_octaal_getal",
          detail: "De octale waarde met teken van 30 bits die naar hexadecimaal met teken moet worden geconverteerd, opgegeven als een tekenreeks.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significante_cijfers",
          detail: "Het aantal significante cijfers dat in het resultaat moet worden gegarandeerd.",
          example: "8",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "COMPLEX",
      t: 9,
      d: "Maakt een complex getal gegeven reële en imaginaire coëfficiënten.",
      a: "Maakt een complex getal.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "reëel_deel",
          detail: "De reële coëfficiënt.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "imaginair_deel",
          detail: "De imaginaire coëfficiënt.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "achtervoegsel",
          detail: "Het achtervoegsel voor de imaginaire coëfficiënt, kan alleen 'i' of 'j' zijn. Indien weggelaten, wordt 'i' gebruikt.",
          example: "\"j\"",
          require: "o",
          repeat: "n",
          type: "rangestring"
        }
      ]
    },
    {
      n: "IMREAL",
      t: 9,
      d: "Retourneert de reële coëfficiënt van een complex getal.",
      a: "De reële coëfficiënt van een complex getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "complex_getal",
          detail: "Het complexe getal, in de indeling a+bi of a+bj.",
          example: "\"4+5i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "IMAGINARY",
      t: 9,
      d: "Retourneert de imaginaire coëfficiënt van een complex getal.",
      a: "De imaginaire coëfficiënt van een complex getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "complex_getal",
          detail: "Het complexe getal, in de indeling a+bi of a+bj.",
          example: "\"4+5i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "IMCONJUGATE",
      t: 9,
      d: "Retourneert de complexe geconjugeerde van een getal.",
      a: "De complexe geconjugeerde van een getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "getal",
          detail: "Het complexe getal waarvoor de geconjugeerde moet worden berekend.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "IMABS",
      t: 9,
      d: "Retourneert de absolute waarde (of modulus) van een complex getal.",
      a: "De absolute waarde van een complex getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "getal",
          detail: "Het complexe getal waarvan de absolute waarde moet worden berekend.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DELTA",
      t: 9,
      d: "Vergelijkt twee numerieke waarden en retourneert 1 als ze gelijk zijn.",
      a: "Vergelijkt twee numerieke waarden.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "getal1",
          detail: "Het eerste te vergelijken getal.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "getal2",
          detail: "Het tweede te vergelijken getal.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "IMSUM",
      t: 9,
      d: "Retourneert de som van een reeks complexe getallen.",
      a: "Som van een reeks complexe getallen.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Het eerste complexe getal of bereik dat bij elkaar moet worden opgeteld.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Extra complexe getallen of bereiken die moeten worden opgeteld bij `waarde1`.",
          example: "\"5-3i\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "IMSUB",
      t: 9,
      d: "Retourneert het verschil tussen twee complexe getallen.",
      a: "Het verschil tussen twee complexe getallen.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "eerste_getal",
          detail: "Het complexe getal waarvan tweede_getal moet worden afgetrokken.",
          example: "\"6+5i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tweede_getal",
          detail: "Het complexe getal dat moet worden afgetrokken van eerste_getal.",
          example: "\"2+3i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "IMPRODUCT",
      t: 9,
      d: "Retourneert het resultaat van het met elkaar vermenigvuldigen van een reeks complexe getallen.",
      a: "Resultaat van het met elkaar vermenigvuldigen van een reeks complexe getallen.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "factor1",
          detail: "Het eerste getal of bereik dat moet worden berekend voor het product.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "factor2",
          detail: "Extra complexe getallen of bereiken die moeten worden berekend voor het product.",
          example: "\"5-3i\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "IMDIV",
      t: 9,
      d: "Retourneert het ene complexe getal gedeeld door het andere.",
      a: "Het ene complexe getal gedeeld door het andere.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "deeltal",
          detail: "Het complexe getal dat moet worden gedeeld.",
          example: "\"11+16i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "deler",
          detail: "Het complexe getal waardoor moet worden gedeeld.",
          example: "\"3+2i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "NOT",
      t: 10,
      d: "Retourneert het tegenovergestelde van een logische waarde - `NOT(WAAR)` retourneert `ONWAAR`; `NOT(ONWAAR)` retourneert `WAAR`.",
      a: "Retourneert het tegenovergestelde van de opgegeven logische waarde.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "logische_expressie",
          detail: "Een expressie of een verwijzing naar een cel met een expressie die een logische waarde vertegenwoordigt.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TRUE",
      t: 10,
      d: "Retourneert de logische waarde `WAAR`.",
      a: "Logische waarde `waar`.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FALSE",
      t: 10,
      d: "Retourneert de logische waarde `ONWAAR`.",
      a: "Logische waarde `onwaar`.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "AND",
      t: 10,
      d: "Retourneert waar als alle opgegeven argumenten logisch waar zijn, en onwaar als een van de opgegeven argumenten logisch onwaar is.",
      a: "Logische `en`-operator.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "logische_expressie1",
          detail: "Een expressie of een verwijzing naar een cel met een expressie die een logische waarde vertegenwoordigt, d.w.z. `WAAR` of `ONWAAR`, of een expressie die kan worden omgezet in een logische waarde.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "logische_expressie2",
          detail: "Meer expressies die logische waarden vertegenwoordigen.",
          example: "A3 = \"bar\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "IFERROR",
      t: 10,
      d: "Retourneert het eerste argument als het geen foutwaarde is, anders wordt het tweede argument geretourneerd indien aanwezig, of leeg als het tweede argument ontbreekt.",
      a: "Waarde als het geen fout is, anders het 2e argument.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde om te retourneren als `waarde` zelf geen fout is.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde_als_fout",
          detail: "De waarde die de functie retourneert als `waarde` een fout is.",
          example: "\"Error in cell A1\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "IF",
      t: 10,
      d: "Retourneert de ene waarde als een logische expressie `WAAR` is en een andere als deze `ONWAAR` is.",
      a: "Retourneert een waarde afhankelijk van een logische expressie.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "logische_expressie",
          detail: "Een expressie of een verwijzing naar een cel met een expressie die een logische waarde vertegenwoordigt, d.w.z. `WAAR` of `ONWAAR`.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde_als_waar",
          detail: "De waarde die de functie retourneert als `logische_expressie` `WAAR` is.",
          example: "\"A2 is foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde_als_onwaar",
          detail: "De waarde die de functie retourneert als `logische_expressie` `ONWAAR` is.",
          example: "\"A2 was false\"",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "OR",
      t: 10,
      d: "Retourneert waar als een van de opgegeven argumenten logisch waar is, en onwaar als alle opgegeven argumenten logisch onwaar zijn.",
      a: "Logische `of`-operator.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "logische_expressie1",
          detail: "Een expressie of een verwijzing naar een cel met een expressie die een logische waarde vertegenwoordigt, d.w.z. `WAAR` of `ONWAAR`, of een expressie die kan worden omgezet in een logische waarde.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "logische_expressie2",
          detail: "Meer expressies die worden geëvalueerd tot logische waarden.",
          example: " A3 = \"bar\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "NE",
      t: 11,
      d: "Retourneert `WAAR` als twee opgegeven waarden niet gelijk zijn en `ONWAAR` anders. Equivalent aan de operator `!=`.",
      a: "Ongelijk aan.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "De waarde om te toetsen op ongelijkheid ten opzichte van `waarde1`.",
          example: "A3",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "EQ",
      t: 11,
      d: "Retourneert `WAAR` als twee opgegeven waarden gelijk zijn en `ONWAAR` anders. Equivalent aan de operator `==`.",
      a: "Gelijk aan.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste waarde.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "De waarde om te toetsen op gelijkheid ten opzichte van `waarde1`.",
          example: "A3",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "GT",
      t: 11,
      d: "Retourneert `WAAR` als het eerste argument strikt groter is dan het tweede, en `ONWAAR` anders. Equivalent aan de operator `>`.",
      a: "Strikt groter dan.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "De waarde om te toetsen als groter dan `waarde2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "De tweede waarde.",
          example: "A3",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "GTE",
      t: 11,
      d: "Retourneert `WAAR` als het eerste argument groter dan of gelijk is aan het tweede, en `ONWAAR` anders. Equivalent aan de operator `>=`.",
      a: "Groter dan of gelijk aan.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "De waarde om te toetsen als groter dan of gelijk aan `waarde2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "De tweede waarde.",
          example: "A3",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LT",
      t: 11,
      d: "Retourneert `WAAR` als het eerste argument strikt kleiner is dan het tweede, en `ONWAAR` anders. Equivalent aan de operator `<`.",
      a: "Kleiner dan.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "De waarde om te toetsen als kleiner dan `waarde2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "De tweede waarde.",
          example: "A3",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LTE",
      t: 11,
      d: "Retourneert `WAAR` als het eerste argument kleiner dan of gelijk is aan het tweede, en `ONWAAR` anders. Equivalent aan de operator `<=`.",
      a: "Kleiner dan of gelijk aan.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "De waarde om te toetsen als kleiner dan of gelijk aan `waarde2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "De tweede waarde.",
          example: "A3",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ADD",
      t: 11,
      d: "Retourneert de som van twee getallen. Equivalent aan de operator `+`.",
      a: "Som van twee getallen",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "De eerste term.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "De tweede term.",
          example: "A3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MINUS",
      t: 11,
      d: "Retourneert het verschil van twee getallen. Equivalent aan de operator `-`.",
      a: "Verschil van twee getallen",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "Het aftrektal, of het getal waarvan wordt afgetrokken.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "De aftrekker, of het getal dat wordt afgetrokken van `waarde1`.",
          example: "A3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MULTIPLY",
      t: 11,
      d: "Retourneert het product van twee getallen. Equivalent aan de operator `*`.",
      a: "Product van twee getallen",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "factor1",
          detail: "De eerste vermenigvuldiger.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor2",
          detail: "De tweede vermenigvuldiger.",
          example: "B2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DIVIDE",
      t: 11,
      d: "Retourneert het ene getal gedeeld door het andere. Equivalent aan de operator `/`.",
      a: "Het ene getal gedeeld door het andere",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "deeltal",
          detail: "Het getal dat moet worden gedeeld.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "deler",
          detail: "Het getal waardoor moet worden gedeeld.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "CONCAT",
      t: 11,
      d: "Retourneert de samenvoeging van twee waarden. Equivalent aan de operator `&`.",
      a: "Samenvoeging van twee waarden",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "De waarde waaraan `waarde2` wordt toegevoegd.",
          example: "\"de\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "De waarde die aan `waarde1` wordt toegevoegd.",
          example: "\"mystify\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "UNARY_PERCENT",
      t: 11,
      d: "Retourneert een waarde die wordt geïnterpreteerd als een percentage; dat wil zeggen, `UNARY_PERCENT(100)` is gelijk aan `1`.",
      a: "Waarde geïnterpreteerd als een percentage.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "percentage",
          detail: "De waarde die als percentage moet worden geïnterpreteerd.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "CONCATENATE",
      t: 12,
      d: "Voegt tekenreeksen aan elkaar toe.",
      a: "Voegt tekenreeksen aan elkaar toe.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "tekenreeks1",
          detail: "De begintekenreeks.",
          example: "\"Super\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tekenreeks2",
          detail: "Meer tekenreeksen om achtereenvolgens toe te voegen.",
          example: "\"calla\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "CODE",
      t: 12,
      d: "Retourneert de numerieke Unicode-waarde van het eerste teken in de opgegeven tekenreeks.",
      a: "Numerieke unicode-waarde van een teken.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekenreeks",
          detail: "De tekenreeks waarvan de Unicode-waarde van het eerste teken wordt geretourneerd.",
          example: "\"a\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "CHAR",
      t: 12,
      d: "Converteert een getal naar een teken volgens de huidige Unicode-tabel.",
      a: "Haalt het teken op dat is gekoppeld aan een getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tabelnummer",
          detail: "Het nummer van het teken dat moet worden opgezocht in de huidige Unicode-tabel, in decimaal formaat.",
          example: "97",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ARABIC",
      t: 12,
      d: "Berekent de waarde van een Romeins cijfer.",
      a: "Berekent de waarde van een romeins cijfer.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "romeins_cijfer",
          detail: "Het te formatteren Romeinse cijfer, waarvan de waarde tussen 1 en 3999 moet liggen, inclusief.",
          example: "\"XIV\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ROMAN",
      t: 12,
      d: "Formatteert een getal in Romeinse cijfers.",
      a: "Formatteert een getal in Romeinse cijfers.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "getal",
          detail: "Het te formatteren getal, tussen 1 en 3999, inclusief.",
          example: "499",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "REGEXEXTRACT",
      t: 12,
      d: "Extraheert overeenkomende substrings volgens een reguliere expressie.",
      a: "Extraheert overeenkomende substrings met een reguliere expressie.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tekst",
          detail: "De invoertekst.",
          example: "\"Needle in a haystack\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "reguliere_expressie",
          detail: "Het eerste deel van `tekst` dat overeenkomt met deze expressie wordt geretourneerd.",
          example: "\".e{2}dle\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "REGEXMATCH",
      t: 12,
      d: "Of een stuk tekst overeenkomt met een reguliere expressie.",
      a: "Of een stuk tekst overeenkomt met een reguliere expressie.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tekst",
          detail: "De tekst die wordt getoetst aan de reguliere expressie.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "reguliere_expressie",
          detail: "De reguliere expressie waaraan de tekst wordt getoetst.",
          example: "\"S.r\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "REGEXREPLACE",
      t: 12,
      d: "Vervangt een deel van een tekenreeks door een andere tekenreeks met behulp van reguliere expressies.",
      a: "Vervangt tekst met reguliere expressies.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "tekst",
          detail: "De tekst, waarvan een deel wordt vervangen.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "reguliere_expressie",
          detail: "De reguliere expressie. Alle overeenkomende exemplaren in `tekst` worden vervangen.",
          example: "\"S.*d\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervanging",
          detail: "De tekst die in de oorspronkelijke tekst wordt ingevoegd.",
          example: "\"Bed\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "T",
      t: 12,
      d: "Retourneert tekenreeksargumenten als tekst, of de lege tekenreeks als de waarde geen tekst is.",
      a: "Tekenreeksargumenten als tekst.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Het argument dat naar tekst moet worden geconverteerd.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "FIXED",
      t: 12,
      d: "Formatteert een getal met een vast aantal decimalen.",
      a: "Formatteert een getal met een vast aantal decimalen.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "getal",
          detail: "Het te formatteren getal.",
          example: "3.141592653",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_decimalen",
          detail: "Het aantal in het resultaat weer te geven decimalen.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "scheidingsteken_onderdrukken",
          detail: "Of het duizendtalscheidingsteken dat in sommige landinstellingen wordt gebruikt, moet worden onderdrukt (bijv. `1.000` wordt `1000`). Scheidingstekens zijn aanwezig als deze waarde 0 is of wordt weggelaten, en afwezig anders.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "FIND",
      t: 12,
      d: "Retourneert de positie waarop een tekenreeks voor het eerst wordt gevonden in tekst, waarbij hoofdlettergebruik van belang is. Retourneert `#WAARDE!` als de tekenreeks niet wordt gevonden.",
      a: "Eerste positie van een tekenreeks gevonden in tekst, hoofdlettergevoelig.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "te_zoeken_tekst",
          detail: "De tekenreeks om naar te zoeken binnen `te_doorzoeken_tekst`.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "te_doorzoeken_tekst",
          detail: "De tekst waarin naar het eerste voorkomen van `zoeken_naar` wordt gezocht.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "beginnend_bij",
          detail: "Het teken binnen `te_doorzoeken_tekst` waarbij de zoekopdracht moet beginnen.",
          example: "14",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "FINDB",
      t: 12,
      d: "Retourneert de positie waarop een tekenreeks voor het eerst wordt gevonden in tekst, waarbij elk dubbel teken als 2 wordt geteld.",
      a: "Positie waarop een tekenreeks voor het eerst wordt gevonden in tekst (binair).",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "te_zoeken_tekst",
          detail: "De tekenreeks om naar te zoeken binnen `te_doorzoeken_tekst`.",
          example: "\"new\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "te_doorzoeken_tekst",
          detail: "De tekst waarin naar het eerste voorkomen van `zoeken_naar` wordt gezocht.",
          example: "\"new year\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "beginnend_bij",
          detail: "Het teken binnen `te_doorzoeken_tekst` waarbij de zoekopdracht moet beginnen.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "JOIN",
      t: 12,
      d: "Voegt de elementen van een of meer eendimensionale arrays samen met behulp van een opgegeven scheidingsteken.",
      a: "Voegt elementen van arrays samen met een scheidingsteken.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "scheidingsteken",
          detail: "Het teken of de tekenreeks om tussen elke samengevoegde waarde te plaatsen.",
          example: "\" and-a \"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde_of_matrix1",
          detail: "De waarde of waarden die moeten worden toegevoegd met `scheidingsteken`.",
          example: "{1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde_of_matrix2",
          detail: "Meer waarden om toe te voegen met `scheidingsteken`.",
          example: "2",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LEFT",
      t: 12,
      d: "Retourneert een substring vanaf het begin van een opgegeven tekenreeks.",
      a: "Substring vanaf het begin van een opgegeven tekenreeks.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "tekenreeks",
          detail: "De tekenreeks waaruit het linkerdeel wordt geretourneerd.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aantal_tekens",
          detail: "Het aantal tekens dat vanaf de linkerkant van `tekenreeks` moet worden geretourneerd.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "RIGHT",
      t: 12,
      d: "Retourneert een substring vanaf het einde van een opgegeven tekenreeks.",
      a: "Een substring vanaf het einde van een opgegeven tekenreeks.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "tekenreeks",
          detail: "De tekenreeks waaruit het rechterdeel wordt geretourneerd.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aantal_tekens",
          detail: "Het aantal tekens dat vanaf de rechterkant van `tekenreeks` moet worden geretourneerd.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MID",
      t: 12,
      d: "Retourneert een segment van een tekenreeks.",
      a: "Een segment van een tekenreeks.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "tekenreeks",
          detail: "De tekenreeks waaruit een segment moet worden geëxtraheerd.",
          example: "\"get this\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "beginnend_bij",
          detail: "De index vanaf links van `tekenreeks` waarvandaan de extractie moet beginnen. Het eerste teken in `tekenreeks` heeft index 1.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "extractielengte",
          detail: "De lengte van het te extraheren segment.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "LEN",
      t: 12,
      d: "Retourneert de lengte van een tekenreeks.",
      a: "Lengte van een tekenreeks.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekst",
          detail: "De tekenreeks waarvan de lengte wordt geretourneerd.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LENB",
      t: 12,
      d: "Retourneert de lengte van een tekenreeks in bytes.",
      a: "Lengte van een tekenreeks in bytes.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekst",
          detail: "De tekenreeks waarvan de lengte wordt geretourneerd.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LOWER",
      t: 12,
      d: "Converteert een opgegeven tekenreeks naar kleine letters.",
      a: "Converteert een opgegeven tekenreeks naar kleine letters.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekst",
          detail: "De tekenreeks die naar kleine letters moet worden geconverteerd.",
          example: "\"LOREM IPSUM\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "UPPER",
      t: 12,
      d: "Converteert een opgegeven tekenreeks naar hoofdletters.",
      a: "Converteert een opgegeven tekenreeks naar hoofdletters.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekst",
          detail: "De tekenreeks die naar hoofdletters moet worden geconverteerd.",
          example: "\"lorem ipsum\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "EXACT",
      t: 12,
      d: "Test of twee tekenreeksen identiek zijn.",
      a: "Test of twee tekenreeksen identiek zijn.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tekenreeks1",
          detail: "De eerste te vergelijken tekenreeks.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tekenreeks2",
          detail: "De tweede te vergelijken tekenreeks.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "REPLACE",
      t: 12,
      d: "Vervangt een deel van een tekenreeks door een andere tekenreeks.",
      a: "Vervangt een deel van een tekenreeks door andere tekst.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "tekst",
          detail: "De tekst, waarvan een deel wordt vervangen.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "positie",
          detail: "De positie waar de vervanging begint (te beginnen bij 1).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lengte",
          detail: "Het aantal tekens in de tekst dat moet worden vervangen.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nieuwe_tekst",
          detail: "De tekst die in de oorspronkelijke tekst wordt ingevoegd.",
          example: "\"Bed\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "REPT",
      t: 12,
      d: "Retourneert opgegeven tekst een aantal keer herhaald.",
      a: "Opgegeven tekst een aantal keer herhaald.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "te_herhalen_tekst",
          detail: "Het teken of de tekenreeks om te herhalen.",
          example: "\"ha\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aantal_herhalingen",
          detail: "Het aantal keren dat `te_herhalen_tekst` moet verschijnen in de geretourneerde waarde.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SEARCH",
      t: 12,
      d: "Retourneert de positie waarop een tekenreeks voor het eerst wordt gevonden in tekst en negeert hoofdlettergebruik. Retourneert `#WAARDE!` als de tekenreeks niet wordt gevonden.",
      a: "Eerste positie van een tekenreeks gevonden in tekst, hoofdletterongevoelig.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "te_zoeken_tekst",
          detail: "De tekenreeks om naar te zoeken binnen `te_doorzoeken_tekst`.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "te_doorzoeken_tekst",
          detail: "De tekst waarin naar het eerste voorkomen van `zoeken_naar` wordt gezocht.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "beginnend_bij",
          detail: "Het teken binnen `te_doorzoeken_tekst` waarbij de zoekopdracht moet beginnen.",
          example: "14",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SUBSTITUTE",
      t: 12,
      d: "Vervangt bestaande tekst door nieuwe tekst in een tekenreeks.",
      a: "Vervangt bestaande tekst door nieuwe tekst in een tekenreeks.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "te_doorzoeken_tekst",
          detail: "De tekst waarbinnen wordt gezocht en vervangen.",
          example: "\"search for it\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "te_zoeken_tekst",
          detail: "De tekenreeks om naar te zoeken binnen `te_doorzoeken_tekst`.",
          example: "\"search for\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervangen_door",
          detail: "De tekenreeks die `zoeken_naar` vervangt.",
          example: "\"Google\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "voorkomen_nummer",
          detail: "Het voorkomen van `zoeken_naar` binnen `te_doorzoeken_tekst` dat moet worden vervangen door `vervangen_door`. Standaard worden alle voorkomens van `zoeken_naar` vervangen; als `voorkomen_nummer` echter is opgegeven, wordt alleen het aangegeven voorkomen van `zoeken_naar` vervangen.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "CLEAN",
      t: 12,
      d: "Retourneert de tekst waaruit de niet-afdrukbare ASCII-tekens zijn verwijderd.",
      a: "Verwijdert niet-afdrukbare tekens uit een stuk tekst.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekst",
          detail: "De tekst waarvan de niet-afdrukbare tekens moeten worden verwijderd.",
          example: "\"AF\"&CHAR(31)",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TEXT",
      t: 12,
      d: "Converteert een getal naar tekst volgens een opgegeven formaat.",
      a: "Formatteert een getal naar tekst.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "getal",
          detail: "Het getal, de datum of de tijd om te formatteren.",
          example: "1.23",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "notatie",
          detail: "Het patroon waarmee het getal wordt geformatteerd, tussen aanhalingstekens.",
          example: "\"$0.00\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TRIM",
      t: 12,
      d: "Verwijdert voorloop-, volg- en herhaalde spaties in tekst.",
      a: "Verwijdert spatietekens.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekst",
          detail: "De tekst of verwijzing naar een cel met de op te schonen tekst.",
          example: "\" lorem ipsum\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "VALUE",
      t: 12,
      d: "Converteert een tekenreeks in een van de datum-, tijd- of getalnotaties die Google Spreadsheets begrijpt, naar een getal.",
      a: "Converteert een datum/tijd/getal-tekenreeks naar een getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekst",
          detail: "De tekenreeks met de te converteren waarde.",
          example: "\"123\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PROPER",
      t: 12,
      d: "Zet de eerste letter van elk woord in een opgegeven tekenreeks in een hoofdletter.",
      a: "Zet de eerste letter van elk woord in een opgegeven tekenreeks in een hoofdletter.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "te_kapitaliseren_tekst",
          detail: "De tekst die wordt geretourneerd met de eerste letter van elk woord in een hoofdletter en alle andere letters in kleine letters.",
          example: "\"united states\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "CONVERT",
      t: 13,
      d: "Converteert een numerieke waarde naar een andere maateenheid.",
      a: "Eenheidsconversie voor getallen.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "waarde",
          detail: "De numerieke waarde in `begineenheid` die moet worden geconverteerd naar `eindeenheid`.",
          example: "5.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "starteenheid",
          detail: "De begineenheid, de eenheid die momenteel aan `waarde` is toegewezen.",
          example: "\"g\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "doeleenheid",
          detail: "De maateenheid waarnaar het argument `waarde` moet worden geconverteerd.",
          example: "\"kg\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "SUMX2MY2",
      t: 14,
      d: "Berekent de som van de verschillen van de kwadraten van waarden in twee arrays.",
      a: "Som van de verschillen van kwadraten.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrix_x",
          detail: "Het array of bereik van waarden waarvan de kwadraten worden verminderd met de kwadraten van overeenkomstige items in `array_y` en bij elkaar worden opgeteld.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix_y",
          detail: "Het array of bereik van waarden waarvan de kwadraten worden afgetrokken van de kwadraten van overeenkomstige items in `array_x` en bij elkaar worden opgeteld.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SUMX2PY2",
      t: 14,
      d: "Berekent de som van de sommen van de kwadraten van waarden in twee arrays.",
      a: "Som van de sommen van kwadraten.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrix_x",
          detail: "Het array of bereik van waarden waarvan de kwadraten worden opgeteld bij de kwadraten van overeenkomstige items in `array_y` en bij elkaar worden opgeteld.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix_y",
          detail: "Het array of bereik van waarden waarvan de kwadraten worden opgeteld bij de kwadraten van overeenkomstige items in `array_x` en bij elkaar worden opgeteld.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SUMXMY2",
      t: 14,
      d: "Berekent de som van de kwadraten van verschillen van waarden in twee arrays.",
      a: "Som van de kwadraten van verschillen.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrix_x",
          detail: "Het array of bereik van waarden dat wordt verminderd met overeenkomstige items in `array_y`, gekwadrateerd, en bij elkaar wordt opgeteld.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix_y",
          detail: "Het array of bereik van waarden dat wordt afgetrokken van overeenkomstige items in `array_x`, waarna het resultaat wordt gekwadrateerd en al deze resultaten bij elkaar worden opgeteld.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "TRANSPOSE",
      t: 14,
      d: "Verwisselt de rijen en kolommen van een array of celbereik.",
      a: "Verwisselt de rijen en kolommen van een array.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "matrix_of_bereik",
          detail: "Het array of bereik waarvan de rijen en kolommen worden verwisseld.",
          example: "{1,2}",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "TREND",
      t: 14,
      d: "Past, gegeven gedeeltelijke gegevens over een lineaire trend, een ideale lineaire trend aan met behulp van de kleinste-kwadratenmethode en/of voorspelt verdere waarden.",
      a: "Past punten aan een lineaire trend aan via kleinste kwadraten.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "bekende_gegevens_y",
          detail: "Het array of bereik met reeds bekende afhankelijke (y-)waarden, gebruikt om een ideale lineaire trend aan te passen.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bekende_gegevens_x",
          detail: "De waarden van de onafhankelijke variabele(n) die overeenkomen met `bekende_gegevens_y`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nieuwe_gegevens_x",
          detail: "De gegevenspunten waarvoor de `y`-waarden op de ideale aangepaste curve moeten worden geretourneerd.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Gegeven een algemene lineaire vorm van `y = m*x+b` voor een curveaanpassing, berekent `b` als `WAAR`, of dwingt `b` om `0` te zijn en berekent alleen de `m`-waarden als `ONWAAR`, d.w.z. dwingt de aangepaste curve om door de oorsprong te gaan.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "FREQUENCY",
      t: 14,
      d: "Berekent de frequentieverdeling van een array met één kolom in opgegeven klassen.",
      a: "De frequentieverdeling van een array.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Het array of bereik met de te tellen waarden.",
          example: "A2:A40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "klassen",
          detail: "Het array of bereik met de set klassen.",
          example: "B2:B5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "GROWTH",
      t: 14,
      d: "Past, gegeven gedeeltelijke gegevens over een exponentiële groeitrend, een ideale exponentiële groeitrend aan en/of voorspelt verdere waarden.",
      a: "Past punten aan een exponentiële groeitrend aan.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "bekende_gegevens_y",
          detail: "Het array of bereik met reeds bekende afhankelijke (y-)waarden, gebruikt om een ideale exponentiële groeicurve aan te passen.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bekende_gegevens_x",
          detail: "De waarden van de onafhankelijke variabele(n) die overeenkomen met `bekende_gegevens_y`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nieuwe_gegevens_x",
          detail: "De gegevenspunten waarvoor de `y`-waarden op de ideale aangepaste curve moeten worden geretourneerd.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Gegeven een algemene exponentiële vorm van `y = b*m^x` voor een curveaanpassing, berekent `b` als `WAAR`, of dwingt `b` om `1` te zijn en berekent alleen de `m`-waarden als `ONWAAR`.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LINEST",
      t: 14,
      d: "Berekent, gegeven gedeeltelijke gegevens over een lineaire trend, verschillende parameters over de ideale lineaire trend met behulp van de kleinste-kwadratenmethode.",
      a: "Best passende lineaire trend via kleinste kwadraten.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "bekende_gegevens_y",
          detail: "Het array of bereik met reeds bekende afhankelijke (y-)waarden, gebruikt om een ideale lineaire trend aan te passen.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bekende_gegevens_x",
          detail: "De waarden van de onafhankelijke variabele(n) die overeenkomen met `bekende_gegevens_y`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b_berekenen",
          detail: "Gegeven een lineaire vorm van `y = m*x+b`, berekent het snijpunt met de y-as (`b`) als `WAAR`. Anders wordt `b` gedwongen om `0` te zijn en worden alleen de `m`-waarden berekend als `ONWAAR`, d.w.z. dwingt de aangepaste curve om door de oorsprong te gaan.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "uitgebreid",
          detail: "Een vlag die aangeeft of aanvullende regressiestatistieken moeten worden geretourneerd of alleen de lineaire coëfficiënten en het snijpunt met de y-as (standaard).",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LOGEST",
      t: 14,
      d: "Berekent, gegeven gedeeltelijke gegevens over een exponentiële groeicurve, verschillende parameters over de best passende ideale exponentiële groeicurve.",
      a: "Best passende exponentiële groeicurve.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "bekende_gegevens_y",
          detail: "Het array of bereik met reeds bekende afhankelijke (y-)waarden, gebruikt om een ideale exponentiële groeicurve aan te passen.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bekende_gegevens_x",
          detail: "De waarden van de onafhankelijke variabele(n) die overeenkomen met `bekende_gegevens_y`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Gegeven een algemene exponentiële vorm van `y = b*m^x` voor een curveaanpassing, berekent `b` als `WAAR`, of dwingt `b` om `1` te zijn en berekent alleen de `m`-waarden als `ONWAAR`.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "uitgebreid",
          detail: "Een vlag die aangeeft of aanvullende regressiestatistieken moeten worden geretourneerd of alleen de berekende coëfficiënt en exponenten.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "MDETERM",
      t: 14,
      d: "Retourneert de matrixdeterminant van een vierkante matrix opgegeven als een array of bereik.",
      a: "Matrixdeterminant van een vierkante matrix.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "vierkante_matrix",
          detail: "Een array of bereik met een gelijk aantal rijen en kolommen dat een matrix vertegenwoordigt waarvan de determinant wordt berekend.",
          example: "A1:D4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MINVERSE",
      t: 14,
      d: "Retourneert de multiplicatieve inverse van een vierkante matrix opgegeven als een array of bereik.",
      a: "Multiplicatieve inverse van een vierkante matrix.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "vierkante_matrix",
          detail: "Een array of bereik met een gelijk aantal rijen en kolommen dat een matrix vertegenwoordigt waarvan de multiplicatieve inverse wordt berekend.",
          example: "A1:D4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "MMULT",
      t: 14,
      d: "Berekent het matrixproduct van twee matrices opgegeven als arrays of bereiken.",
      a: "Het matrixproduct van twee matrices.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrix1",
          detail: "De eerste matrix in de matrixvermenigvuldigingsbewerking, weergegeven als een array of bereik.",
          example: "A1:B3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix2",
          detail: "De tweede matrix in de matrixvermenigvuldigingsbewerking, weergegeven als een array of bereik.",
          example: "C1:F2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SUMPRODUCT",
      t: 14,
      d: "Berekent de som van de producten van overeenkomstige items in twee even grote arrays of bereiken.",
      a: "Som van producten van elementen in twee arrays.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "matrix1",
          detail: "Het eerste array of bereik waarvan de items worden vermenigvuldigd met overeenkomstige items in het tweede array of bereik.",
          example: "A2:C5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix2",
          detail: "Het tweede array of bereik waarvan de items worden vermenigvuldigd met overeenkomstige items in het eerste array of bereik.",
          example: "D2:F5",
          require: "o",
          repeat: "y",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ISFORMULA",
      t: 15,
      d: "Controleert of een waarde een formule is.",
      a: "Of een waarde een formule is.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "cel",
          detail: "De cel die wordt gecontroleerd op het bevatten van een formule.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "CELL",
      t: 15,
      d: "Retourneert de gevraagde informatie over de opgegeven cel.",
      a: "Haalt informatie op over een cel.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "infotype",
          detail: "Het type gevraagde informatie (zie artikel voor beschikbare typen).",
          example: "\"type\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "verwijzing",
          detail: "De verwijzing naar de cel.",
          example: "C2",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "NA",
      t: 15,
      d: "Retourneert de fout \"waarde niet beschikbaar\", `#N/B`.",
      a: "De fout `#N/B`.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "ERROR_TYPE",
      t: 15,
      d: "Retourneert een getal dat overeenkomt met de foutwaarde in een andere cel.",
      a: "Foutwaarde van een cel (als getal).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "verwijzing",
          detail: "De cel om het foutnummer voor te zoeken, hoewel u de foutwaarde ook rechtstreeks kunt opgeven.",
          example: "A3",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISBLANK",
      t: 15,
      d: "Controleert of de cel waarnaar wordt verwezen leeg is.",
      a: "Of de cel waarnaar wordt verwezen leeg is.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Verwijzing naar de cel die wordt gecontroleerd op leegheid.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "ISERR",
      t: 15,
      d: "Controleert of een waarde een andere fout is dan `#N/B`.",
      a: "Of een waarde een andere fout is dan `#n/b`.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die wordt gecontroleerd als een ander fouttype dan `#N/B`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISERROR",
      t: 15,
      d: "Controleert of een waarde een fout is.",
      a: "Of een waarde een fout is.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die wordt gecontroleerd als een fouttype.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISLOGICAL",
      t: 15,
      d: "Controleert of een waarde `WAAR` of `ONWAAR` is.",
      a: "Of een waarde `waar` of `onwaar` is.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die wordt gecontroleerd als logisch `WAAR` of `ONWAAR`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISNA",
      t: 15,
      d: "Controleert of een waarde de fout `#N/B` is.",
      a: "Of een waarde de fout `#n/b` is.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die wordt vergeleken met de foutwaarde `#N/B`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISNONTEXT",
      t: 15,
      d: "Controleert of een waarde niet-tekstueel is.",
      a: "Of een waarde niet-tekstueel is.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De te controleren waarde.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISNUMBER",
      t: 15,
      d: "Controleert of een waarde een getal is.",
      a: "Of een waarde een getal is.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die wordt gecontroleerd als een getal.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISREF",
      t: 15,
      d: "Controleert of een waarde een geldige celverwijzing is.",
      a: "Of een waarde een geldige celverwijzing is.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die wordt gecontroleerd als een celverwijzing.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "ISTEXT",
      t: 15,
      d: "Controleert of een waarde tekst is.",
      a: "Of een waarde tekst is.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde die wordt gecontroleerd als tekst.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TYPE",
      t: 15,
      d: "Retourneert een getal dat is gekoppeld aan het type gegevens dat aan de functie wordt doorgegeven.",
      a: "Haalt het type van een waarde op.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "De waarde waarvan het type moet worden bepaald.",
          example: "C4",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "N",
      t: 15,
      d: "Retourneert het opgegeven argument als een getal. Tekst wordt geconverteerd naar 0 en fouten worden ongewijzigd geretourneerd.",
      a: "Opgegeven argument als een getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Het argument dat naar een getal moet worden geconverteerd.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TO_DATE",
      t: 16,
      d: "Converteert een opgegeven getal naar een datum.",
      a: "Converteert een opgegeven getal naar een datum.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Het argument of de verwijzing naar een cel die naar een datum moet worden geconverteerd.",
          example: "25405",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "TO_PURE_NUMBER",
      t: 16,
      d: "Converteert een opgegeven datum/tijd, percentage, valuta of andere geformatteerde numerieke waarde naar een zuiver getal zonder opmaak.",
      a: "Converteert elke numerieke waarde naar een zuiver getal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Het argument of de verwijzing naar een cel die naar een zuiver getal moet worden geconverteerd.",
          example: "50%",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TO_TEXT",
      t: 16,
      d: "Beschrijving van de functie TO_TEXT.",
      a: "Samenvatting van de functie TO_TEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie TO_TEXT.",
          example: "24",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TO_DOLLARS",
      t: 16,
      d: "Beschrijving van de functie TO_DOLLARS.",
      a: "Samenvatting van de functie TO_DOLLARS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie TO_DOLLARS.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "TO_PERCENT",
      t: 16,
      d: "Beschrijving van de functie TO_PERCENT.",
      a: "Samenvatting van de functie TO_PERCENT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie TO_PERCENT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DGET",
      t: 17,
      d: "Beschrijving van de functie DGET.",
      a: "Samenvatting van de functie DGET.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parameter `database` van de functie DGET.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "veld",
          detail: "Parameter `veld` van de functie DGET.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parameter `criteria` van de functie DGET.",
          example: "A22:D23",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "DMAX",
      t: 17,
      d: "Beschrijving van de functie DMAX.",
      a: "Samenvatting van de functie DMAX.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parameter `database` van de functie DMAX.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "veld",
          detail: "Parameter `veld` van de functie DMAX.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parameter `criteria` van de functie DMAX.",
          example: "A22:D23",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "DMIN",
      t: 17,
      d: "Beschrijving van de functie DMIN.",
      a: "Samenvatting van de functie DMIN.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parameter `database` van de functie DMIN.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "veld",
          detail: "Parameter `veld` van de functie DMIN.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parameter `criteria` van de functie DMIN.",
          example: "A22:D23",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "DAVERAGE",
      t: 17,
      d: "Beschrijving van de functie DAVERAGE.",
      a: "Samenvatting van de functie DAVERAGE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parameter `database` van de functie DAVERAGE.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "veld",
          detail: "Parameter `veld` van de functie DAVERAGE.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parameter `criteria` van de functie DAVERAGE.",
          example: "A22:D23",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "DCOUNT",
      t: 17,
      d: "Beschrijving van de functie DCOUNT.",
      a: "Samenvatting van de functie DCOUNT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parameter `database` van de functie DCOUNT.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "veld",
          detail: "Parameter `veld` van de functie DCOUNT.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parameter `criteria` van de functie DCOUNT.",
          example: "A22:D23",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "DCOUNTA",
      t: 17,
      d: "Beschrijving van de functie DCOUNTA.",
      a: "Samenvatting van de functie DCOUNTA.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parameter `database` van de functie DCOUNTA.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "veld",
          detail: "Parameter `veld` van de functie DCOUNTA.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parameter `criteria` van de functie DCOUNTA.",
          example: "A22:D23",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "DPRODUCT",
      t: 17,
      d: "Beschrijving van de functie DPRODUCT.",
      a: "Samenvatting van de functie DPRODUCT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parameter `database` van de functie DPRODUCT.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "veld",
          detail: "Parameter `veld` van de functie DPRODUCT.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parameter `criteria` van de functie DPRODUCT.",
          example: "A22:D23",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "DSTDEV",
      t: 17,
      d: "Beschrijving van de functie DSTDEV.",
      a: "Samenvatting van de functie DSTDEV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parameter `database` van de functie DSTDEV.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "veld",
          detail: "Parameter `veld` van de functie DSTDEV.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parameter `criteria` van de functie DSTDEV.",
          example: "A22:D23",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "DSTDEVP",
      t: 17,
      d: "Beschrijving van de functie DSTDEVP.",
      a: "Samenvatting van de functie DSTDEVP.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parameter `database` van de functie DSTDEVP.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "veld",
          detail: "Parameter `veld` van de functie DSTDEVP.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parameter `criteria` van de functie DSTDEVP.",
          example: "A22:D23",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "DSUM",
      t: 17,
      d: "Beschrijving van de functie DSUM.",
      a: "Samenvatting van de functie DSUM.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parameter `database` van de functie DSUM.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "veld",
          detail: "Parameter `veld` van de functie DSUM.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parameter `criteria` van de functie DSUM.",
          example: "A22:D23",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "DVAR",
      t: 17,
      d: "Beschrijving van de functie DVAR.",
      a: "Samenvatting van de functie DVAR.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parameter `database` van de functie DVAR.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "veld",
          detail: "Parameter `veld` van de functie DVAR.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parameter `criteria` van de functie DVAR.",
          example: "A22:D23",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "DVARP",
      t: 17,
      d: "Beschrijving van de functie DVARP.",
      a: "Samenvatting van de functie DVARP.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parameter `database` van de functie DVARP.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "veld",
          detail: "Parameter `veld` van de functie DVARP.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parameter `criteria` van de functie DVARP.",
          example: "A22:D23",
          require: "m",
          repeat: "n",
          type: "range"
        }
      ]
    },
    {
      n: "AGE_BY_IDCARD",
      t: "3",
      d: "Beschrijving van de functie AGE_BY_IDCARD.",
      a: "Samenvatting van de functie AGE_BY_IDCARD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Identificatienummer",
          example: "A1",
          detail: "Parameter `Identificatienummer` van de functie AGE_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Uiterste datum",
          example: "\"2017-10-01\"",
          detail: "Parameter `Uiterste datum` van de functie AGE_BY_IDCARD.",
          require: "o",
          repeat: "n",
          type: "rangedatetime"
        }
      ]
    },
    {
      n: "SEX_BY_IDCARD",
      t: "3",
      d: "Beschrijving van de functie SEX_BY_IDCARD.",
      a: "Samenvatting van de functie SEX_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Identificatienummer",
          example: "\"31033519900101XXXX\"",
          detail: "Parameter `Identificatienummer` van de functie SEX_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BIRTHDAY_BY_IDCARD",
      t: "3",
      d: "Beschrijving van de functie BIRTHDAY_BY_IDCARD.",
      a: "Samenvatting van de functie BIRTHDAY_BY_IDCARD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Identificatienummer",
          example: "\"31033519900101XXXX\"",
          detail: "Parameter `Identificatienummer` van de functie BIRTHDAY_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Geboortedatumnotatie",
          example: "0",
          detail: "Parameter `Geboortedatumnotatie` van de functie BIRTHDAY_BY_IDCARD.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PROVINCE_BY_IDCARD",
      t: "3",
      d: "Beschrijving van de functie PROVINCE_BY_IDCARD.",
      a: "Samenvatting van de functie PROVINCE_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Identificatienummer",
          example: "\"31033519900101XXXX\"",
          detail: "Parameter `Identificatienummer` van de functie PROVINCE_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "CITY_BY_IDCARD",
      t: "3",
      d: "Beschrijving van de functie CITY_BY_IDCARD.",
      a: "Samenvatting van de functie CITY_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Identificatienummer",
          example: "\"31033519900101XXXX\"",
          detail: "Parameter `Identificatienummer` van de functie CITY_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STAR_BY_IDCARD",
      t: "3",
      d: "Beschrijving van de functie STAR_BY_IDCARD.",
      a: "Samenvatting van de functie STAR_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Identificatienummer",
          example: "\"31033519900101XXXX\"",
          detail: "Parameter `Identificatienummer` van de functie STAR_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ANIMAL_BY_IDCARD",
      t: "3",
      d: "Beschrijving van de functie ANIMAL_BY_IDCARD.",
      a: "Samenvatting van de functie ANIMAL_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Identificatienummer",
          example: "\"31033519900101XXXX\"",
          detail: "Parameter `Identificatienummer` van de functie ANIMAL_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISIDCARD",
      t: "3",
      d: "Beschrijving van de functie ISIDCARD.",
      a: "Samenvatting van de functie ISIDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Identificatienummer",
          example: "\"31033519900101XXXX\"",
          detail: "Parameter `Identificatienummer` van de functie ISIDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DM_TEXT_CUTWORD",
      t: "4",
      d: "Beschrijving van de functie DM_TEXT_CUTWORD.",
      a: "Samenvatting van de functie DM_TEXT_CUTWORD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Tekst",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parameter `Tekst` van de functie DM_TEXT_CUTWORD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Woordsegmentatiemodus",
          example: "0",
          detail: "Parameter `Woordsegmentatiemodus` van de functie DM_TEXT_CUTWORD.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DM_TEXT_TFIDF",
      t: "4",
      d: "Beschrijving van de functie DM_TEXT_TFIDF.",
      a: "Samenvatting van de functie DM_TEXT_TFIDF.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Tekst",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parameter `Tekst` van de functie DM_TEXT_TFIDF.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Aantal trefwoorden",
          example: "20",
          detail: "Parameter `Aantal trefwoorden` van de functie DM_TEXT_TFIDF.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "Corpus",
          example: "1",
          detail: "Parameter `Corpus` van de functie DM_TEXT_TFIDF.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DM_TEXT_TEXTRANK",
      t: "4",
      d: "Beschrijving van de functie DM_TEXT_TEXTRANK.",
      a: "Samenvatting van de functie DM_TEXT_TEXTRANK.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Tekst",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parameter `Tekst` van de functie DM_TEXT_TEXTRANK.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Aantal trefwoorden",
          example: "20",
          detail: "Parameter `Aantal trefwoorden` van de functie DM_TEXT_TEXTRANK.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "Corpus",
          example: "1",
          detail: "Parameter `Corpus` van de functie DM_TEXT_TEXTRANK.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_CLOSE",
      t: "5",
      d: "Beschrijving van de functie DATA_CN_STOCK_CLOSE.",
      a: "Samenvatting van de functie DATA_CN_STOCK_CLOSE.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Aandelencode",
          example: "\"000001\"",
          detail: "Parameter `Aandelencode` van de functie DATA_CN_STOCK_CLOSE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Datum",
          example: "2015-01-08",
          detail: "Parameter `Datum` van de functie DATA_CN_STOCK_CLOSE.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Type koersherstelling",
          example: "0",
          detail: "Parameter `Type koersherstelling` van de functie DATA_CN_STOCK_CLOSE.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_OPEN",
      t: "5",
      d: "Beschrijving van de functie DATA_CN_STOCK_OPEN.",
      a: "Samenvatting van de functie DATA_CN_STOCK_OPEN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Aandelencode",
          example: "\"000001\"",
          detail: "Parameter `Aandelencode` van de functie DATA_CN_STOCK_OPEN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Datum",
          example: "2015-01-08",
          detail: "Parameter `Datum` van de functie DATA_CN_STOCK_OPEN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Type koersherstelling",
          example: "0",
          detail: "Parameter `Type koersherstelling` van de functie DATA_CN_STOCK_OPEN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_MAX",
      t: "5",
      d: "Beschrijving van de functie DATA_CN_STOCK_MAX.",
      a: "Samenvatting van de functie DATA_CN_STOCK_MAX.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Aandelencode",
          example: "\"000001\"",
          detail: "Parameter `Aandelencode` van de functie DATA_CN_STOCK_MAX.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Datum",
          example: "2015-01-08",
          detail: "Parameter `Datum` van de functie DATA_CN_STOCK_MAX.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Type koersherstelling",
          example: "0",
          detail: "Parameter `Type koersherstelling` van de functie DATA_CN_STOCK_MAX.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_MIN",
      t: "5",
      d: "Beschrijving van de functie DATA_CN_STOCK_MIN.",
      a: "Samenvatting van de functie DATA_CN_STOCK_MIN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Aandelencode",
          example: "\"000001\"",
          detail: "Parameter `Aandelencode` van de functie DATA_CN_STOCK_MIN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Datum",
          example: "2015-01-08",
          detail: "Parameter `Datum` van de functie DATA_CN_STOCK_MIN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Type koersherstelling",
          example: "0",
          detail: "Parameter `Type koersherstelling` van de functie DATA_CN_STOCK_MIN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_VOLUMN",
      t: "5",
      d: "Beschrijving van de functie DATA_CN_STOCK_VOLUMN.",
      a: "Samenvatting van de functie DATA_CN_STOCK_VOLUMN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Aandelencode",
          example: "\"000001\"",
          detail: "Parameter `Aandelencode` van de functie DATA_CN_STOCK_VOLUMN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Datum",
          example: "2015-01-08",
          detail: "Parameter `Datum` van de functie DATA_CN_STOCK_VOLUMN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Type koersherstelling",
          example: "0",
          detail: "Parameter `Type koersherstelling` van de functie DATA_CN_STOCK_VOLUMN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_AMOUNT",
      t: "5",
      d: "Beschrijving van de functie DATA_CN_STOCK_AMOUNT.",
      a: "Samenvatting van de functie DATA_CN_STOCK_AMOUNT.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Aandelencode",
          example: "\"000001\"",
          detail: "Parameter `Aandelencode` van de functie DATA_CN_STOCK_AMOUNT.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Datum",
          example: "2015-01-08",
          detail: "Parameter `Datum` van de functie DATA_CN_STOCK_AMOUNT.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Type koersherstelling",
          example: "0",
          detail: "Parameter `Type koersherstelling` van de functie DATA_CN_STOCK_AMOUNT.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ISDATE",
      t: "6",
      d: "Beschrijving van de functie ISDATE.",
      a: "Samenvatting van de functie ISDATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          example: "\"1990-01-01\"",
          detail: "Parameter `waarde` van de functie ISDATE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LINESPLINES",
      t: "3",
      d: "Beschrijving van de functie LINESPLINES.",
      a: "Samenvatting van de functie LINESPLINES.",
      m: [
        1,
        8
      ],
      p: [
        {
          name: "Bereik",
          example: "A1:A20",
          detail: "Parameter `Bereik` van de functie LINESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Lijnkleur",
          example: "#2ec7c9",
          detail: "Parameter `Lijnkleur` van de functie LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Lijndikte",
          example: "1",
          detail: "Parameter `Lijndikte` van de functie LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Hulplijn",
          example: "avg",
          detail: "Parameter `Hulplijn` van de functie LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleur van de hulplijn",
          example: "#000",
          detail: "Parameter `Kleur van de hulplijn` van de functie LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximummarkering",
          example: "#fc5c5c",
          detail: "Parameter `Maximummarkering` van de functie LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Minimummarkering",
          example: "#fc5c5c",
          detail: "Parameter `Minimummarkering` van de functie LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Markeringsgrootte",
          example: "1.5",
          detail: "Parameter `Markeringsgrootte` van de functie LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "AREASPLINES",
      t: "3",
      d: "Beschrijving van de functie AREASPLINES.",
      a: "Samenvatting van de functie AREASPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Bereik",
          example: "A1:A20",
          detail: "Parameter `Bereik` van de functie AREASPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Lijnkleur",
          example: "#2ec7c9",
          detail: "Parameter `Lijnkleur` van de functie AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Vulkleur",
          example: "#CCF3F4",
          detail: "Parameter `Vulkleur` van de functie AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Lijndikte",
          example: "1",
          detail: "Parameter `Lijndikte` van de functie AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Hulplijn",
          example: "avg",
          detail: "Parameter `Hulplijn` van de functie AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleur van de hulplijn",
          example: "#000",
          detail: "Parameter `Kleur van de hulplijn` van de functie AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COLUMNSPLINES",
      t: "3",
      d: "Beschrijving van de functie COLUMNSPLINES.",
      a: "Samenvatting van de functie COLUMNSPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Bereik",
          example: "A1:A20",
          detail: "Parameter `Bereik` van de functie COLUMNSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Balkinterval",
          example: "1",
          detail: "Parameter `Balkinterval` van de functie COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleur van de balk",
          example: "#fc5c5c",
          detail: "Parameter `Kleur van de balk` van de functie COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleur negatieve balken",
          example: "#97b552",
          detail: "Parameter `Kleur negatieve balken` van de functie COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximum",
          example: "100",
          detail: "Parameter `Maximum` van de functie COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleurenpalet",
          example: "#97b552",
          detail: "Parameter `Kleurenpalet` van de functie COLUMNSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STACKCOLUMNSPLINES",
      t: "3",
      d: "Beschrijving van de functie STACKCOLUMNSPLINES.",
      a: "Samenvatting van de functie STACKCOLUMNSPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Bereik",
          example: "A1:A20",
          detail: "Parameter `Bereik` van de functie STACKCOLUMNSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Stapelen per kolom",
          example: "1",
          detail: "Parameter `Stapelen per kolom` van de functie STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Balkinterval",
          example: "1",
          detail: "Parameter `Balkinterval` van de functie STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximum",
          example: "100",
          detail: "Parameter `Maximum` van de functie STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleurenpalet",
          example: "#97b552",
          detail: "Parameter `Kleurenpalet` van de functie STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BARSPLINES",
      t: "3",
      d: "Beschrijving van de functie BARSPLINES.",
      a: "Samenvatting van de functie BARSPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Bereik",
          example: "A1:A20",
          detail: "Parameter `Bereik` van de functie BARSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Balkinterval",
          example: "1",
          detail: "Parameter `Balkinterval` van de functie BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleur van de balk",
          example: "#fc5c5c",
          detail: "Parameter `Kleur van de balk` van de functie BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleur negatieve balken",
          example: "#97b552",
          detail: "Parameter `Kleur negatieve balken` van de functie BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximum",
          example: "100",
          detail: "Parameter `Maximum` van de functie BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleurenpalet",
          example: "#97b552",
          detail: "Parameter `Kleurenpalet` van de functie BARSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STACKBARSPLINES",
      t: "3",
      d: "Beschrijving van de functie STACKBARSPLINES.",
      a: "Samenvatting van de functie STACKBARSPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Bereik",
          example: "A1:A20",
          detail: "Parameter `Bereik` van de functie STACKBARSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Stapelen per kolom",
          example: "1",
          detail: "Parameter `Stapelen per kolom` van de functie STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Balkinterval",
          example: "1",
          detail: "Parameter `Balkinterval` van de functie STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximum",
          example: "100",
          detail: "Parameter `Maximum` van de functie STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleurenpalet",
          example: "#97b552",
          detail: "Parameter `Kleurenpalet` van de functie STACKBARSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DISCRETESPLINES",
      t: "3",
      d: "Beschrijving van de functie DISCRETESPLINES.",
      a: "Samenvatting van de functie DISCRETESPLINES.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "Bereik",
          example: "A1:A20",
          detail: "Parameter `Bereik` van de functie DISCRETESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Segmentatiedrempel",
          example: "1",
          detail: "Parameter `Segmentatiedrempel` van de functie DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleur boven drempel",
          example: "#2ec7c9",
          detail: "Parameter `Kleur boven drempel` van de functie DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleur onder drempel",
          example: "#fc5c5c",
          detail: "Parameter `Kleur onder drempel` van de functie DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TRISTATESPLINES",
      t: "3",
      d: "Beschrijving van de functie TRISTATESPLINES.",
      a: "Samenvatting van de functie TRISTATESPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Bereik",
          example: "A1:A20",
          detail: "Parameter `Bereik` van de functie TRISTATESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Balkinterval",
          example: "1",
          detail: "Parameter `Balkinterval` van de functie TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleur van de balk",
          example: "#fc5c5c",
          detail: "Parameter `Kleur van de balk` van de functie TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleur negatieve balken",
          example: "#97b552",
          detail: "Parameter `Kleur negatieve balken` van de functie TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleur nulwaardebalken",
          example: "#999",
          detail: "Parameter `Kleur nulwaardebalken` van de functie TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleurenpalet",
          example: "#97b552",
          detail: "Parameter `Kleurenpalet` van de functie TRISTATESPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PIESPLINES",
      t: "3",
      d: "Beschrijving van de functie PIESPLINES.",
      a: "Samenvatting van de functie PIESPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Bereik",
          example: "A1:A20",
          detail: "Parameter `Bereik` van de functie PIESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Rotatiehoek",
          example: "0",
          detail: "Parameter `Rotatiehoek` van de functie PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rand",
          example: "0",
          detail: "Parameter `rand` van de functie PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Randkleur",
          example: "#000",
          detail: "Parameter `Randkleur` van de functie PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Kleurenpalet",
          example: "#97b552",
          detail: "Parameter `Kleurenpalet` van de functie PIESPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BOXSPLINES",
      t: "3",
      d: "Beschrijving van de functie BOXSPLINES.",
      a: "Samenvatting van de functie BOXSPLINES.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "Bereik",
          example: "A1:A20",
          detail: "Parameter `Bereik` van de functie BOXSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Uitschieterverhouding",
          example: "1.5",
          detail: "Parameter `Uitschieterverhouding` van de functie BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Doelwaarde",
          example: "10",
          detail: "Parameter `Doelwaarde` van de functie BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Puntgrootte",
          example: "1.5",
          detail: "Parameter `Puntgrootte` van de functie BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BULLETSPLINES",
      t: "3",
      d: "Beschrijving van de functie BULLETSPLINES.",
      a: "Samenvatting van de functie BULLETSPLINES.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "Doel",
          example: "10",
          detail: "Parameter `Doel` van de functie BULLETSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bereikt",
          example: "8",
          detail: "Parameter `bereikt` van de functie BULLETSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Vergelijkingswaarde",
          example: "12",
          detail: "Parameter `Vergelijkingswaarde` van de functie BULLETSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COMPOSESPLINES",
      t: "3",
      d: "Beschrijving van de functie COMPOSESPLINES.",
      a: "Samenvatting van de functie COMPOSESPLINES.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "configuratie",
          example: "PIESPLINES(A1:A20)",
          detail: "Parameter `configuratie` van de functie COMPOSESPLINES.",
          require: "m",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "SORT",
      t: "14",
      d: "Beschrijving van de functie SORT.",
      a: "Samenvatting van de functie SORT.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "bereik",
          detail: "Parameter `bereik` van de functie SORT.",
          example: "A2:A17",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sorteerkolom",
          detail: "Parameter `sorteerkolom` van de functie SORT.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "is_oplopend",
          detail: "Parameter `is_oplopend` van de functie SORT.",
          example: "-1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sorteerkolom2",
          detail: "Parameter `sorteerkolom2` van de functie SORT.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "FILTER",
      t: "14",
      d: "Beschrijving van de functie FILTER.",
      a: "Samenvatting van de functie FILTER.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "bereik",
          detail: "Parameter `bereik` van de functie FILTER.",
          example: "A5:D20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "voorwaarde1",
          detail: "Parameter `voorwaarde1` van de functie FILTER.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "voorwaarde2",
          detail: "Parameter `voorwaarde2` van de functie FILTER.",
          example: "\"\"",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "UNIQUE",
      t: "14",
      d: "Beschrijving van de functie UNIQUE.",
      a: "Samenvatting van de functie UNIQUE.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "bereik",
          detail: "Parameter `bereik` van de functie UNIQUE.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "per_kolom",
          detail: "Parameter `per_kolom` van de functie UNIQUE.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "slechts_eenmaal",
          detail: "Parameter `slechts_eenmaal` van de functie UNIQUE.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "RANDARRAY",
      t: "14",
      d: "Beschrijving van de functie RANDARRAY.",
      a: "Samenvatting van de functie RANDARRAY.",
      m: [
        0,
        2
      ],
      p: [
        {
          name: "rijen",
          detail: "Parameter `rijen` van de functie RANDARRAY.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kolommen",
          detail: "Parameter `kolommen` van de functie RANDARRAY.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "SEQUENCE",
      t: "14",
      d: "Beschrijving van de functie SEQUENCE.",
      a: "Samenvatting van de functie SEQUENCE.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "rijen",
          detail: "Parameter `rijen` van de functie SEQUENCE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kolommen",
          detail: "Parameter `kolommen` van de functie SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "start",
          detail: "Parameter `start` van de functie SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "stap",
          detail: "Parameter `stap` van de functie SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "EVALUATE",
      t: "3",
      d: "Beschrijving van de functie EVALUATE.",
      a: "Samenvatting van de functie EVALUATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "expressie",
          example: "\"A1+5*2^2\"",
          detail: "Parameter `expressie` van de functie EVALUATE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "REMOTE",
      t: "5",
      d: "Beschrijving van de functie REMOTE.",
      a: "Samenvatting van de functie REMOTE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "externe_expressie",
          example: "SUM(A1:A10000000)",
          detail: "Parameter `externe_expressie` van de functie REMOTE.",
          require: "m",
          repeat: "n",
          type: "string"
        }
      ]
    }
  ],
  toolbar: {
    toolbar: "Werkbalk",
    undo: "Ongedaan maken",
    redo: "Opnieuw",
    "clear-format": "Opmaak wissen",
    "format-painter": "Opmaak kopiëren",
    paintFormat: "Opmaak kopiëren",
    "currency-format": "Valutanotatie",
    "percentage-format": "Percentagenotatie",
    "number-decrease": "Decimalen verminderen",
    "number-increase": "Decimalen verhogen",
    moreFormats: "Meer notaties",
    "border-all": "Alle randen",
    "merge-all": "Alles samenvoegen",
    format: "Opmaak",
    font: "Lettertype",
    "font-size": "Tekengrootte",
    bold: "Vet",
    italic: "Cursief",
    "strike-through": "Doorhalen",
    underline: "Onderstrepen",
    "font-color": "Tekstkleur",
    "align-left": "Links uitlijnen",
    "align-center": "Centreren",
    "align-right": "Rechts uitlijnen",
    "align-top": "Boven uitlijnen",
    "align-mid": "Midden uitlijnen",
    "align-bottom": "Onder uitlijnen",
    chooseColor: "Kleur kiezen",
    resetColor: "Herstellen",
    customColor: "Aangepast",
    alternatingColors: "Afwisselende kleuren",
    confirmColor: "Bevestigen",
    cancelColor: "Annuleren",
    collapse: "Samenvouwen",
    background: "Opvulkleur",
    border: "Rand",
    borderStyle: "Randstijl",
    "merge-cell": "Cellen samenvoegen",
    chooseMergeType: "Samenvoegtype kiezen",
    horizontalAlign: "Horizontaal uitlijnen",
    verticalAlign: "Verticaal uitlijnen",
    alignment: "Uitlijning",
    textWrap: "Tekstterugloop",
    textWrapMode: "Tekstterugloop",
    textRotate: "Tekst draaien",
    textRotateMode: "Tekst draaien",
    freeze: "Vastzetten",
    sort: "Sorteren",
    filter: "Filter",
    sortAndFilter: "Sorteren en filteren",
    findAndReplace: "Zoeken en vervangen",
    "formula-sum": "Som",
    autoSum: "AutoSom",
    moreFunction: "Meer functies",
    conditionalFormat: "Voorwaardelijke opmaak",
    comment: "Opmerking",
    pivotTable: "Draaitabel",
    chart: "Grafiek",
    screenshot: "Schermafbeelding",
    splitColumn: "Tekst naar kolommen",
    insertImage: "Afbeelding invoegen",
    insertLink: "Koppeling invoegen",
    dataVerification: "Gegevensvalidatie",
    protection: "Beveiliging",
    clearText: "Inhoud wissen",
    noColorSelectedText: "Geen kleur geselecteerd",
    toolMore: "Meer",
    toolLess: "Minder",
    toolClose: "Sluiten",
    toolMoreTip: "Meer hulpmiddelen",
    moreOptions: "Meer opties",
    cellFormat: "Celeigenschappen",
    print: "Afdrukken",
    currencyFormat: "Valutanotatie",
    percentageFormat: "Percentagenotatie",
    numberDecrease: "Decimalen verminderen",
    numberIncrease: "Decimalen verhogen",
    fontSize: "Tekengrootte",
    strikethrough: "Doorhalen",
    textColor: "Tekstkleur",
    fillColor: "Opvulkleur",
    mergeCell: "Cellen samenvoegen",
    horizontalAlignMode: "Horizontaal uitlijnen",
    verticalAlignMode: "Verticaal uitlijnen",
    image: "Afbeelding",
    link: "Koppeling",
    function: "Functie",
    formula: "Formule",
    frozenMode: "Vastzetten",
    edit: "Bewerken",
    save: "Opslaan",
    preview: "Voorbeeld",
    clear: "Wissen",
    insert: "Invoegen",
    delete: "Verwijderen",
    hide: "Verbergen",
    show: "Weergeven",
    data: "Gegevens",
    view: "Beeld",
    share: "Delen",
    history: "Geschiedenis",
    copy: "Kopiëren",
    paste: "Plakken",
    cut: "Knippen",
    import: "Importeren",
    export: "Exporteren",
    download: "Downloaden",
    upload: "Uploaden",
    refresh: "Vernieuwen",
    zoom: "Zoom",
    help: "Help",
    close: "Sluiten",
    settings: "Instellingen",
    fullscreen: "Volledig scherm",
    exitFullscreen: "Volledig scherm verlaten",
    gridlines: "Rasterlijnen",
    lock: "Vergrendelen",
    unlock: "Ontgrendelen"
  },
  alternatingColors: {
    applyRange: "Apply to range",
    selectRange: "Gegevensbereik selecteren",
    header: "Header",
    footer: "Footer",
    errorInfo: "Deze bewerking kan niet worden uitgevoerd op meerdere geselecteerde gebieden. Selecteer één gebied en probeer het opnieuw.",
    textTitle: "Format style",
    custom: "CUSTOM",
    close: "Sluiten",
    selectionTextColor: "Klik om tekstkleur te kiezen",
    selectionCellColor: "Klik om celkleur te kiezen",
    removeColor: "Afwisselende kleuren verwijderen",
    colorShow: "kleur",
    currentColor: "Current",
    tipSelectRange: "Selecteer het bereik voor afwisselende kleuren",
    errorNoRange: "Er is geen bereik geselecteerd",
    errorExistColors: "Afwisselende kleuren bestaan al en kunnen niet worden bewerkt"
  },
  button: {
    confirm: "OK",
    cancel: "Annuleren",
    close: "Sluiten",
    update: "Bijwerken",
    delete: "Verwijderen",
    insert: "Invoegen",
    prevPage: "Vorige",
    nextPage: "Volgende",
    total: "Totaal:",
    edit: "Bewerken",
    add: "Toevoegen",
    clear: "Wissen",
    save: "Opslaan",
    ok: "OK",
    yes: "Ja",
    no: "Nee",
    reset: "Herstellen",
    apply: "Toepassen",
    search: "Zoeken",
    replace: "Vervangen",
    done: "Gereed"
  },
  paint: {
    start: "Opmaak kopiëren starten",
    end: "Opmaak kopiëren beëindigen",
    tipSelectRange: "Selecteer het bereik waarop de opmaak moet worden toegepast",
    tipNotMulti: "Deze bewerking kan niet worden uitgevoerd op meerdere geselecteerde bereiken"
  },
  format: {
    moreCurrency: "Meer valutanotaties",
    moreDateTime: "Meer datum- en tijdnotaties",
    moreNumber: "Meer getalnotaties",
    titleCurrency: "Valutanotaties",
    decimalPlaces: "Decimalen",
    titleDateTime: "Datum- en tijdnotaties",
    titleNumber: "Getalnotaties",
    tipDecimalPlaces: "Het aantal decimalen moet tussen 0 en 9 liggen.",
    select: "Select",
    format: "opmaak",
    currency: "Valuta",
    titleNumberFormat: "Getalnotatie",
    formatError: "Opmaakfout",
    customFormat: "Aangepaste notatie",
    preview: "Voorbeeld",
    tips: "Tip",
    example: "Voorbeeld",
    type: "Type",
    symbol: "Symbool",
    date: "Datum",
    time: "Tijd",
    number: "Getal",
    percent: "Percentage",
    text: "Tekst",
    automatic: "Automatisch",
    accounting: "Boekhouding",
    scientific: "Wetenschappelijk",
    fraction: "Breuk",
    duration: "Duur",
    normal: "Normaal",
    plainText: "Platte tekst"
  },
  info: {
    detailUpdate: "Bijwerken voltooid",
    detailSave: "Opslaan voltooid",
    row: "Rij",
    column: "Kolom",
    loading: "Laden...",
    copy: "Gekopieerd",
    return: "Terug",
    rename: "Naam wijzigen",
    tips: "Tips",
    noName: "Naamloos spreadsheet",
    wait: "Even geduld...",
    add: "Add",
    addLast: "meer rijen onderaan",
    backTop: "Back to the top",
    pageInfo: "Totaal ${total}，${totalPage} pagina’s，huidige ${currentPage}",
    nextPage: "Next",
    tipInputNumber: "Voer het getal in",
    tipInputNumberLimit: "Het vergrotingsbereik is beperkt tot 1-100",
    tipRowHeightLimit: "Rijhoogte moet tussen 0 en 545 liggen",
    tipColumnWidthLimit: "Kolombreedte moet tussen 0 en 2038 liggen",
    pageInfoFull: "Totaal ${total}，${totalPage} pagina’s，alle gegevens weergegeven",
    sheetIsFocused: "Focusvergrendeling van blad ingeschakeld.",
    sheetNotFocused: "Focusvergrendeling van blad uitgeschakeld.",
    sheetSrIntro: "Gebruik Shift, Control, F om bladfocus te wisselen voor navigatie via werkbalk en buiten het blad.",
    currentCellInput: "Invoer huidige cel",
    newSheet: "New sheet",
    sheetOptions: "Sheet options",
    Dropdown: "Dropdown",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    toggleSheetFocusShortcut: "Focusvergrendeling blad wisselen: Shift, Control, F.",
    selectRangeShortcut: "Bereik selecteren: Shift, pijltoetsen.",
    autoFillDownShortcut: "Selectie omlaag automatisch vullen vanaf eerste cel: Control of Meta, D.",
    autoFillRightShortcut: "Selectie naar rechts automatisch vullen vanaf eerste cel: Control of Meta, R.",
    boldTextShortcut: "Tekst vet: Control of Meta, B.",
    copyShortcut: "Kopiëren: Control of Meta, C.",
    pasteShortcut: "Plakken: Control of Meta, V.",
    undoShortcut: "Ongedaan maken: Control of Meta, Z.",
    redoShortcut: "Opnieuw: Control of Meta, Shift, Z.",
    deleteCellContentShortcut: "Celinhoud verwijderen: Delete of Backspace.",
    confirmCellEditShortcut: "Celbewerking bevestigen en omlaag gaan: Enter.",
    moveRightShortcut: "Move right: Tab.",
    moveLeftShortcut: "Naar links: Shift, Tab.",
    shortcuts: "Sneltoetsen",
    noData: "Geen gegevens",
    success: "Gelukt",
    error: "Fout",
    warning: "Waarschuwing"
  },
  currencyDetail: [
    {
      name: "RMB",
      pos: "before",
      value: "¥"
    },
    {
      name: "US dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "EUR",
      pos: "before",
      value: "€"
    },
    {
      name: "GBP",
      pos: "before",
      value: "￡"
    },
    {
      name: "HK",
      pos: "before",
      value: "$"
    },
    {
      name: "JPY",
      pos: "before",
      value: "￥"
    },
    {
      name: "Albanian Lek",
      pos: "before",
      value: "Lek"
    },
    {
      name: "Algerian Dinar",
      pos: "before",
      value: "din"
    },
    {
      name: "Afghani",
      pos: "after",
      value: "Af"
    },
    {
      name: "Argentine Peso",
      pos: "before",
      value: "$"
    },
    {
      name: "United Arab Emirates Dirham",
      pos: "before",
      value: "dh"
    },
    {
      name: "Aruban Florin",
      pos: "before",
      value: "Afl"
    },
    {
      name: "Omani Rial",
      pos: "before",
      value: "Rial"
    },
    {
      name: "Azerbaijani manat",
      pos: "before",
      value: "?"
    },
    {
      name: "Egyptian Pound",
      pos: "before",
      value: "￡"
    },
    {
      name: "Ethiopian Birr",
      pos: "before",
      value: "Birr"
    },
    {
      name: "Angola Kwanza",
      pos: "before",
      value: "Kz"
    },
    {
      name: "Australian Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Patacas",
      pos: "before",
      value: "MOP"
    },
    {
      name: "Barbados Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Papua New Guinea Kina",
      pos: "before",
      value: "PGK"
    },
    {
      name: "Bahamian Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Pakistan Rupee",
      pos: "before",
      value: "Rs"
    },
    {
      name: "Paraguayan Guarani",
      pos: "after",
      value: "Gs"
    },
    {
      name: "Bahraini Dinar",
      pos: "before",
      value: "din"
    },
    {
      name: "Panamanian Balboa",
      pos: "before",
      value: "B/"
    },
    {
      name: "Brazilian real",
      pos: "before",
      value: "R$"
    },
    {
      name: "Belarusian ruble",
      pos: "after",
      value: "р"
    },
    {
      name: "Bermudian Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Bulgarian Lev",
      pos: "before",
      value: "lev"
    },
    {
      name: "Iceland Krona",
      pos: "before",
      value: "kr"
    },
    {
      name: "Bosnia-Herzegovina Convertible Mark",
      pos: "before",
      value: "KM"
    },
    {
      name: "Polish Zloty",
      pos: "after",
      value: "z?"
    },
    {
      name: "Boliviano",
      pos: "before",
      value: "Bs"
    },
    {
      name: "Belize Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Botswana Pula",
      pos: "before",
      value: "P"
    },
    {
      name: "Not Dannuzhamu",
      pos: "before",
      value: "Nu"
    },
    {
      name: "Burundi Franc",
      pos: "before",
      value: "FBu"
    },
    {
      name: "North Korean Won",
      pos: "before",
      value: "?KP"
    },
    {
      name: "Danish Krone",
      pos: "after",
      value: "kr"
    },
    {
      name: "East Caribbean Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Dominica Peso",
      pos: "before",
      value: "RD$"
    },
    {
      name: "Russian Ruble",
      pos: "after",
      value: "?"
    },
    {
      name: "Eritrean Nakfa",
      pos: "before",
      value: "Nfk"
    },
    {
      name: "CFA franc",
      pos: "before",
      value: "CFA"
    },
    {
      name: "Philippine Peso",
      pos: "before",
      value: "?"
    },
    {
      name: "Fiji Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Cape Verde Escudo",
      pos: "before",
      value: "CVE"
    },
    {
      name: "Falkland Islands Pound",
      pos: "before",
      value: "￡"
    },
    {
      name: "Gambian Dalasi",
      pos: "before",
      value: "GMD"
    },
    {
      name: "Congolese franc",
      pos: "before",
      value: "FrCD"
    },
    {
      name: "Colombian Peso",
      pos: "before",
      value: "$"
    },
    {
      name: "Costa Rican Colon",
      pos: "before",
      value: "?"
    },
    {
      name: "Cuban Peso",
      pos: "before",
      value: "$"
    },
    {
      name: "Cuban convertible peso",
      pos: "before",
      value: "$"
    },
    {
      name: "Guyana Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Kazakhstan Tenge",
      pos: "before",
      value: "?"
    },
    {
      name: "Haitian gourde",
      pos: "before",
      value: "HTG"
    },
    {
      name: "won",
      pos: "before",
      value: "?"
    },
    {
      name: "Netherlands Antilles Guilder",
      pos: "before",
      value: "NAf."
    },
    {
      name: "Honduras lempiras",
      pos: "before",
      value: "L"
    },
    {
      name: "Djibouti Franc",
      pos: "before",
      value: "Fdj"
    },
    {
      name: "Kyrgyzstan Som",
      pos: "before",
      value: "KGS"
    },
    {
      name: "Guinea Franc",
      pos: "before",
      value: "FG"
    },
    {
      name: "Canadian Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Ghanaian Cedi",
      pos: "before",
      value: "GHS"
    },
    {
      name: "Cambodian riel",
      pos: "before",
      value: "Riel"
    },
    {
      name: "Czech Koruna",
      pos: "after",
      value: "K?"
    },
    {
      name: "Zimbabwe Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Qatari Riyal",
      pos: "before",
      value: "Rial"
    },
    {
      name: "Cayman Islands Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Comorian franc",
      pos: "before",
      value: "CF"
    },
    {
      name: "Kuwaiti Dinar",
      pos: "before",
      value: "din"
    },
    {
      name: "Croatian Kuna",
      pos: "before",
      value: "kn"
    },
    {
      name: "Kenyan Shilling",
      pos: "before",
      value: "Ksh"
    },
    {
      name: "Lesotho Loti",
      pos: "before",
      value: "LSL"
    },
    {
      name: "Lao Kip",
      pos: "before",
      value: "?"
    },
    {
      name: "Lebanese Pound",
      pos: "before",
      value: "L￡"
    },
    {
      name: "Lithuanian litas",
      pos: "before",
      value: "Lt"
    },
    {
      name: "Libyan Dinar",
      pos: "before",
      value: "din"
    },
    {
      name: "Liberian Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Rwanda Franc",
      pos: "before",
      value: "RF"
    },
    {
      name: "Romanian Leu",
      pos: "before",
      value: "RON"
    },
    {
      name: "Malagasy Ariary",
      pos: "before",
      value: "Ar"
    },
    {
      name: "Maldivian Rufiyaa",
      pos: "before",
      value: "Rf"
    },
    {
      name: "Malawi Kwacha",
      pos: "before",
      value: "MWK"
    },
    {
      name: "Malaysian Ringgit",
      pos: "before",
      value: "RM"
    },
    {
      name: "Macedonia wearing Dinar",
      pos: "before",
      value: "din"
    },
    {
      name: "Mauritius Rupee",
      pos: "before",
      value: "MURs"
    },
    {
      name: "Mauritanian Ouguiya",
      pos: "before",
      value: "MRO"
    },
    {
      name: "Mongolian Tugrik",
      pos: "before",
      value: "?"
    },
    {
      name: "Bangladeshi Taka",
      pos: "before",
      value: "?"
    },
    {
      name: "Peruvian Nuevo Sol",
      pos: "before",
      value: "S/"
    },
    {
      name: "Myanmar Kyat",
      pos: "before",
      value: "K"
    },
    {
      name: "Moldovan Leu",
      pos: "before",
      value: "MDL"
    },
    {
      name: "Moroccan Dirham",
      pos: "before",
      value: "dh"
    },
    {
      name: "Mozambique Metical",
      pos: "before",
      value: "MTn"
    },
    {
      name: "Mexican Peso",
      pos: "before",
      value: "$"
    },
    {
      name: "Namibian Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "South African Rand",
      pos: "before",
      value: "R"
    },
    {
      name: "South Sudanese Pound",
      pos: "before",
      value: "￡"
    },
    {
      name: "Nicaragua Cordoba",
      pos: "before",
      value: "C$"
    },
    {
      name: "Nepalese Rupee",
      pos: "before",
      value: "Rs"
    },
    {
      name: "Nigerian Naira",
      pos: "before",
      value: "?"
    },
    {
      name: "Norwegian Krone",
      pos: "after",
      value: "kr"
    },
    {
      name: "Georgian Lari",
      pos: "before",
      value: "GEL"
    },
    {
      name: "Swedish Krona",
      pos: "after",
      value: "kr"
    },
    {
      name: "Swiss Franc",
      pos: "before",
      value: "CHF"
    },
    {
      name: "Serbian Dinar",
      pos: "before",
      value: "din"
    },
    {
      name: "Sierra Leone",
      pos: "before",
      value: "SLL"
    },
    {
      name: "Seychelles Rupee",
      pos: "before",
      value: "SCR"
    },
    {
      name: "Saudi Riyal",
      pos: "before",
      value: "Rial"
    },
    {
      name: "Sao Tome Dobra",
      pos: "before",
      value: "Db"
    },
    {
      name: "Saint Helena pound",
      pos: "before",
      value: "￡"
    },
    {
      name: "Sri Lanka Rupee",
      pos: "before",
      value: "Rs"
    },
    {
      name: "Swaziland Lilangeni",
      pos: "before",
      value: "SZL"
    },
    {
      name: "Sudanese Pound",
      pos: "before",
      value: "SDG"
    },
    {
      name: "Surinamese dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Solomon Islands Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Somali Shilling",
      pos: "before",
      value: "SOS"
    },
    {
      name: "Tajikistan Somoni",
      pos: "before",
      value: "Som"
    },
    {
      name: "Pacific Franc",
      pos: "after",
      value: "FCFP"
    },
    {
      name: "Thai Baht",
      pos: "before",
      value: "?"
    },
    {
      name: "Tanzanian Shilling",
      pos: "before",
      value: "TSh"
    },
    {
      name: "Tongan Pa'anga",
      pos: "before",
      value: "T$"
    },
    {
      name: "Trinidad and Tobago Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Tunisian Dinar",
      pos: "before",
      value: "din"
    },
    {
      name: "Turkish Lira",
      pos: "before",
      value: "?"
    },
    {
      name: "Vanuatu Vatu",
      pos: "before",
      value: "VUV"
    },
    {
      name: "Guatemalan Quetzal",
      pos: "before",
      value: "Q"
    },
    {
      name: "Commission Bolivar",
      pos: "before",
      value: "Bs"
    },
    {
      name: "Brunei Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Ugandan Shilling",
      pos: "before",
      value: "UGX"
    },
    {
      name: "Ukrainian Hryvnia",
      pos: "before",
      value: "грн."
    },
    {
      name: "Uruguayan Peso",
      pos: "before",
      value: "$"
    },
    {
      name: "Uzbekistan som",
      pos: "before",
      value: "so?m"
    },
    {
      name: "Western Samoa Tala",
      pos: "before",
      value: "WST"
    },
    {
      name: "Singapore Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "NT",
      pos: "before",
      value: "NT$"
    },
    {
      name: "New Zealand Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Hungarian Forint",
      pos: "before",
      value: "Ft"
    },
    {
      name: "Syrian Pound",
      pos: "before",
      value: "￡"
    },
    {
      name: "Jamaican Dollar",
      pos: "before",
      value: "$"
    },
    {
      name: "Armenian Dram",
      pos: "before",
      value: "Dram"
    },
    {
      name: "Yemeni Rial",
      pos: "before",
      value: "Rial"
    },
    {
      name: "Iraqi Dinar",
      pos: "before",
      value: "din"
    },
    {
      name: "Iranian Rial",
      pos: "before",
      value: "Rial"
    },
    {
      name: "New Israeli Shekel",
      pos: "before",
      value: "?"
    },
    {
      name: "Indian Rupee",
      pos: "before",
      value: "₹"
    },
    {
      name: "Indonesian Rupiah",
      pos: "before",
      value: "Rp"
    },
    {
      name: "Jordanian Dinar",
      pos: "before",
      value: "din"
    },
    {
      name: "VND",
      pos: "after",
      value: "?"
    },
    {
      name: "Zambian Kwacha",
      pos: "before",
      value: "ZMW"
    },
    {
      name: "Gibraltar Pound",
      pos: "before",
      value: "￡"
    },
    {
      name: "Chilean Peso",
      pos: "before",
      value: "$"
    },
    {
      name: "CFA Franc BEAC",
      pos: "before",
      value: "FCFA"
    }
  ],
  numberFmtList: [
    {
      name: "Volts",
      pos: "after",
      value: "V"
    },
    {
      name: "Ampere",
      pos: "after",
      value: "A"
    },
    {
      name: "Ohms",
      pos: "after",
      value: "Ω"
    }
  ],
  defaultFmt: function defaultFmt(currency) {
  return [{ text: 'Automatisch', value: 'General', example: '' }, { text: 'Platte tekst', value: '@', example: '' }, { text: '', value: 'split', example: '' }, { text: 'Getal', value: '##0.00', example: '1000.12' }, { text: 'Percentage', value: '#0.00%', example: '12.21%' }, { text: 'Wetenschappelijk', value: '0.00E+00', example: '1.01E+5' }, { text: '', value: 'split', example: '' }, { text: 'Boekhouding', value: ''.concat(currency, '(0.00)'), example: ''.concat(currency, '(1200.09)') }, { text: 'Valuta', value: ''.concat(currency, '0.00'), example: ''.concat(currency, '1200.09') }, { text: '', value: 'split', example: '' }, { text: 'Datum', value: 'yyyy-MM-dd', example: '2017-11-29' }, { text: 'Tijd', value: 'hh:mm AM/PM', example: '3:00 PM' }, { text: 'Tijd 24u', value: 'hh:mm', example: '15:00' }, { text: 'Datum en tijd', value: 'yyyy-MM-dd hh:mm AM/PM', example: '2017-11-29 3:00 PM' }, { text: 'Datum en tijd 24u', value: 'yyyy-MM-dd hh:mm', example: '2017-11-29 15:00' }, { text: '', value: 'split', example: '' }, { text: 'Aangepaste notaties', value: 'fmtOtherSelf', example: '', icon: 'rightArrow' }];
},
  dateFmtList: [
    {
      name: "1930-08-05",
      value: "yyyy-MM-dd"
    },
    {
      name: "1930/8/5",
      value: "yyyy/MM/dd"
    },
    {
      name: "08-05",
      value: "MM-dd"
    },
    {
      name: "8-5",
      value: "M-d"
    },
    {
      name: "13:30:30",
      value: "h:mm:ss"
    },
    {
      name: "13:30",
      value: "h:mm"
    },
    {
      name: "PM 01:30",
      value: "AM/PM hh:mm"
    },
    {
      name: "PM 1:30",
      value: "AM/PM h:mm"
    },
    {
      name: "PM 1:30:30",
      value: "AM/PM h:mm:ss"
    },
    {
      name: "08-05 PM 01:30",
      value: "MM-dd AM/PM hh:mm"
    }
  ],
  fontFamily: {
    MicrosoftYaHei: "YaHei"
  },
  fontarray: [
    "Arial",
    "Times New Roman",
    "Tahoma",
    "Verdana",
    "Helvetica",
    "Trebuchet MS",
    "Georgia",
    "Garamond",
    "Courier New",
    "Lucida Console",
    "Impact",
    "Comic Sans MS",
    "Segoe UI"
  ],
  fontjson: {
    arial: 0,
    "times new roman": 1,
    tahoma: 2,
    verdana: 3,
    helvetica: 4,
    "trebuchet ms": 5,
    georgia: 6,
    garamond: 7,
    "courier new": 8,
    "lucida console": 9,
    impact: 10,
    "comic sans ms": 11,
    "segoe ui": 12
  },
  border: {
    borderTop: "Bovenrand",
    borderBottom: "Onderrand",
    borderLeft: "Linkerrand",
    borderRight: "Rechterrand",
    borderNone: "Geen rand",
    borderAll: "Alle randen",
    borderOutside: "Buitenrand",
    borderInside: "Binnenranden",
    borderHorizontal: "Binnenste horizontale randen",
    borderVertical: "Binnenste verticale randen",
    borderColor: "Randkleur",
    borderSize: "Randdikte",
    borderSlash: "Slash border",
    borderDefault: "standaard",
    borderStyle: "randstijl",
    borderType: "Randtype",
    borderDiagonal: "Diagonale rand",
    borderDiagonalDown: "Diagonaal omlaag",
    borderDiagonalUp: "Diagonaal omhoog",
    borderDouble: "Dubbele lijn",
    borderDotted: "Gestippelde lijn",
    borderDashed: "Gestreepte lijn",
    borderSolid: "Doorgetrokken lijn",
    borderMedium: "Middelgrote lijn",
    borderThick: "Dikke lijn",
    borderThin: "Dunne lijn",
    borderHair: "Haarlijn"
  },
  merge: {
    mergeAll: "Alles samenvoegen",
    mergeV: "Verticaal samenvoegen",
    mergeH: "Horizontaal samenvoegen",
    mergeCancel: "Samenvoegen opheffen",
    overlappingError: "Samengevoegde bereiken mogen elkaar niet overlappen",
    partiallyError: "Deze bewerking kan niet worden toegepast op gedeeltelijk samengevoegde cellen",
    confirm: "Bij samenvoegen blijft alleen de waarde van de cel linksboven behouden. Doorgaan?",
    confirmTitle: "Cellen samenvoegen"
  },
  align: {
    left: "Links",
    center: "Midden",
    right: "Rechts",
    top: "Boven",
    middle: "Midden",
    bottom: "Onder",
    justify: "Uitvullen",
    general: "Algemeen"
  },
  textWrap: {
    overflow: "Overlopen",
    wrap: "Terugloop",
    clip: "Afkappen"
  },
  rotation: {
    none: "Geen rotatie",
    angleup: "Omhoog kantelen",
    angledown: "Omlaag kantelen",
    vertical: "Verticale tekst",
    rotationUp: "Omhoog draaien",
    rotationDown: "Omlaag draaien"
  },
  freezen: {
    default: "Niet vastzetten",
    freezenRow: "Eerste rij vastzetten",
    freezenColumn: "Eerste kolom vastzetten",
    freezenRC: "Rijen en kolommen vastzetten",
    freezenRowRange: "Vastzetten tot huidige rij",
    freezenColumnRange: "Vastzetten tot huidige kolom",
    freezenRCRange: "Vastzetten tot huidige cel",
    freezenCancel: "Vastzetten opheffen",
    noSeletionError: "Geen selectie",
    rangeRCOverErrorTitle: "Ongeldig bereik",
    rangeRCOverError: "Het geselecteerde bereik is ongeldig"
  },
  sort: {
    asc: "A-Z sorteren",
    desc: "Z-A sorteren",
    custom: "Aangepast sorteren",
    hasTitle: "Gegevens hebben kopteksten",
    sortBy: "Sorteren op",
    addOthers: "Sorteerkolom toevoegen",
    close: "Sluiten",
    confirm: "Sorteren",
    columnOperation: "Column",
    secondaryTitle: "vervolgens op",
    sortTitle: "Sort range",
    sortRangeTitle: "Sort range from",
    sortRangeTitleTo: "to",
    noRangeError: "Deze bewerking kan niet worden uitgevoerd op meerdere geselecteerde gebieden. Selecteer één bereik en probeer het opnieuw.",
    mergeError: "Voor sorteren moeten alle samengevoegde cellen dezelfde grootte hebben.",
    column: "Kolom",
    order: "Volgorde",
    value: "Waarden",
    color: "Kleur",
    ascTitle: "Oplopend",
    descTitle: "Aflopend",
    sortRange: "Bereik sorteren",
    sortWarning: "Selecteer een bereik om te sorteren.",
    singleRangeError: "Deze bewerking is niet beschikbaar voor meerdere selecties."
  },
  filter: {
    filter: "Filter maken",
    sortByAsc: "Oplopend sorteren",
    sortByDesc: "Aflopend sorteren",
    filterByColor: "Filteren op kleur",
    filterByCondition: "Filteren op voorwaarde",
    filterByValues: "Filter by values",
    filiterInputNone: "None",
    filiterInputTip: "Filterwaarde invoeren",
    filiterRangeStartTip: "Waarde voor formule",
    filiterRangeEndTip: "Waarde voor formule",
    filterValueByAllBtn: "Check all",
    filterValueByClearBtn: "Clear",
    filterValueByInverseBtn: "Inverse",
    filterValueByTip: "filteren op waarden",
    filterConform: "Confirm",
    filterCancel: "Cancel",
    clearFilter: "Filter wissen",
    conditionNone: "Geen",
    conditionCellIsNull: "Cel is leeg",
    conditionCellNotNull: "Cel is niet leeg",
    conditionCellTextContain: "Tekst bevat",
    conditionCellTextNotContain: "Tekst bevat niet",
    conditionCellTextStart: "Tekst begint met",
    conditionCellTextEnd: "Tekst eindigt met",
    conditionCellTextEqual: "Tekst is gelijk aan",
    conditionCellDateEqual: "Datum is gelijk aan",
    conditionCellDateBefore: "Datum is vóór",
    conditionCellDateAfter: "Datum is na",
    conditionCellGreater: "Greater than",
    conditionCellGreaterEqual: "Groter dan of gelijk aan",
    conditionCellLess: "Less than",
    conditionCellLessEqual: "Kleiner dan of gelijk aan",
    conditionCellEqual: "Is equal to",
    conditionCellNotEqual: "Is not equal to",
    conditionCellBetween: "Is between",
    conditionCellNotBetween: "Is not between",
    filiterMoreDataTip: "Grote hoeveelheid gegevens, even geduld",
    filiterMonthText: "Month",
    filiterYearText: "Year",
    filiterByColorTip: "Filteren op celkleur",
    filiterByTextColorTip: "Filteren op tekstkleur",
    filterContainerOneColorTip: "Deze kolom bevat slechts één kleur",
    filterDateFormatTip: "Date format",
    valueBlank: "(Null)",
    mergeError: "De filterselectie bevat samengevoegde cellen; deze bewerking kan niet worden uitgevoerd.",
    filterByValue: "Filteren op waarde",
    search: "Zoeken",
    selectAll: "Alles selecteren",
    empty: "(Leeg)",
    confirm: "OK",
    cancel: "Annuleren",
    conditionGreater: "Groter dan",
    conditionGreaterEqual: "Groter dan of gelijk aan",
    conditionLess: "Kleiner dan",
    conditionLessEqual: "Kleiner dan of gelijk aan",
    conditionEqual: "Gelijk aan",
    conditionNotEqual: "Niet gelijk aan",
    conditionBetween: "Tussen",
    conditionNotBetween: "Niet tussen",
    conditionCustom: "Aangepaste formule",
    chooseColor: "Kleur kiezen",
    textColor: "Tekstkleur",
    backgroundColor: "Achtergrondkleur",
    clear: "Wissen",
    noResult: "Geen resultaten",
    image: "Afbeelding"
  },
  rightclick: {
    copy: "Kopiëren",
    copyAs: "Kopiëren als",
    paste: "Plakken",
    insert: "Invoegen",
    image: "Afbeelding invoegen",
    link: "Koppeling invoegen",
    delete: "Verwijderen",
    deleteCell: "Cellen verwijderen",
    deleteSelected: "Selectie verwijderen",
    hide: "Verbergen",
    hideSelected: "Selectie verbergen",
    showHide: "Weergeven",
    to: "tot",
    left: "links",
    right: "rechts",
    top: "boven",
    bottom: "onder",
    moveLeft: "Naar links verplaatsen",
    moveUp: "Omhoog verplaatsen",
    add: "Toevoegen",
    row: "Rij",
    column: "Kolom",
    width: "Kolombreedte",
    height: "Rijhoogte",
    number: "Getal",
    confirm: "OK",
    orderAZ: "A-Z sorteren",
    orderZA: "Z-A sorteren",
    clearContent: "Inhoud wissen",
    matrix: "Matrixbewerking",
    sortSelection: "Selectie sorteren",
    filterSelection: "Selectie filteren",
    chartGeneration: "Grafiek maken",
    firstLineTitle: "Eerste rij als titel",
    untitled: "Naamloos",
    array1: "Matrix 1",
    array2: "Matrix 2",
    array3: "Matrix 3",
    diagonal: "Diagonal",
    antiDiagonal: "Anti-diagonal",
    diagonalOffset: "Diagonal offset",
    offset: "Offset",
    boolean: "Boolean",
    flip: "Flip",
    upAndDown: "Up and down",
    leftAndRight: "Left and right",
    clockwise: "Clockwise",
    counterclockwise: "Counterclockwise",
    transpose: "Transpose",
    matrixCalculation: "Matrixberekening",
    plus: "Plus",
    minus: "Minus",
    multiply: "Multiply",
    divided: "Divided",
    power: "Power",
    root: "Root",
    log: "Log",
    delete0: "Nulwaarden aan beide uiteinden verwijderen",
    removeDuplicate: "Dubbele waarden verwijderen",
    byRow: "By row",
    byCol: "By column",
    generateNewMatrix: "Nieuwe matrix genereren",
    noMulti: "Deze bewerking kan niet worden uitgevoerd op meerdere geselecteerde gebieden. Selecteer één gebied.",
    cannotDeleteAllRow: "Kan niet alle rijen verwijderen",
    cannotDeleteAllColumn: "Kan niet alle kolommen verwijderen",
    cannotDeleteRowReadOnly: "Kan rij in alleen-lezenmodus niet verwijderen",
    cannotDeleteColumnReadOnly: "Kan kolom in alleen-lezenmodus niet verwijderen",
    cannotInsertOnRowReadOnly: "Kan niet invoegen in alleen-lezenrij",
    cannotInsertOnColumnReadOnly: "Kan niet invoegen in alleen-lezenkolom",
    rowOverLimit: "Limiet van 10000 rijen overschreden",
    columnOverLimit: "Limiet van 1000 kolommen overschreden",
    array4: "Matrix 4",
    array5: "Matrix 5",
    array6: "Matrix 6",
    leftTop: "Linksboven",
    rightTop: "Rechtsboven",
    leftBottom: "Linksonder",
    rightBottom: "Rechtsonder",
    dropCell: "Cellen omlaag verplaatsen",
    rightCell: "Cellen naar rechts verplaatsen",
    data: "Gegevens",
    cellFormat: "Celeigenschappen",
    rowHeight: "Rijhoogte",
    columnWidth: "Kolombreedte",
    insertRow: "Rij invoegen",
    insertColumn: "Kolom invoegen",
    deleteRow: "Rij verwijderen",
    deleteColumn: "Kolom verwijderen"
  },
  comment: {
    insert: "Opmerking invoegen",
    edit: "Opmerking bewerken",
    delete: "Opmerking verwijderen",
    showOne: "Show/Hide",
    showAll: "Show/Hide All",
    show: "Opmerking weergeven",
    hide: "Opmerking verbergen",
    reply: "Beantwoorden",
    resolve: "Oplossen",
    cancel: "Annuleren",
    save: "Opslaan",
    placeholder: "Opmerking invoeren",
    commented: "Met opmerking"
  },
  screenshot: {
    screenshotTipNoSelection: "Selecteer een bereik",
    screenshotTipTitle: "Schermafbeelding",
    screenshotTipHasMerge: "Het geselecteerde bereik bevat samengevoegde cellen en kan niet als afbeelding worden geëxporteerd",
    screenshotTipHasMulti: "Selecteer slechts één bereik",
    screenshotTipSuccess: "Schermafbeelding gemaakt",
    screenshotImageName: "Screenshot",
    downLoadClose: "Close",
    downLoadCopy: "Kopiëren naar klembord",
    downLoadBtn: "Download",
    browserNotTip: "niet ondersteund door IE-browser.",
    rightclickTip: "Klik met de rechtermuisknop op \"kopiëren\" op de afbeelding",
    successTip: "Gelukt. Als plakken mislukt, klik dan met de rechtermuisknop op de afbeelding en kies \"afbeelding kopiëren\".",
    screenshotTipError: "Schermafbeelding maken mislukt"
  },
  splitText: {
    splitDelimiters: "Scheidingstekens",
    splitOther: "Overig",
    splitContinueSymbol: "Opeenvolgende scheidingstekens als één behandelen",
    splitDataPreview: "Gegevensvoorbeeld",
    splitTextTitle: "Tekst naar kolommen",
    splitConfirmToExe: "Uitvoeren",
    splitSymbols: [
      {
        name: "Tab",
        value: "Tab"
      },
      {
        name: "puntkomma",
        value: "puntkomma"
      },
      {
        name: "komma",
        value: "komma"
      },
      {
        name: "spatie",
        value: "spatie"
      }
    ],
    tipNoMulti: "Deze bewerking kan niet worden uitgevoerd op meerdere geselecteerde gebieden. Selecteer één gebied en probeer het opnieuw.",
    tipNoMultiColumn: "Er kan slechts één kolom gegevens tegelijk worden geconverteerd. Het geselecteerde gebied mag meerdere rijen hebben, maar geen meerdere kolommen. Probeer het opnieuw na het selecteren van één kolom.",
    tipNoSelect: "Je kunt een cel niet splitsen zonder deze te selecteren",
    splitCancel: "Annuleren",
    splitEmptyTip: "Selecteer een bereik",
    splitHasMergeTip: "Het geselecteerde bereik bevat samengevoegde cellen",
    splitColumnTip: "Selecteer één kolom",
    splitType: "Type",
    splitByDelimiters: "Op scheidingstekens",
    splitByFixedWidth: "Vaste breedte",
    splitSemicolon: "Puntkomma",
    splitComma: "Komma",
    splitSpace: "Spatie",
    splitTab: "Tab"
  },
  imageText: {
    imageSetting: "Afbeeldingsinstellingen",
    close: "Sluiten",
    conventional: "Standaard",
    moveCell1: "Cellen verplaatsen en formaat wijzigen",
    moveCell2: "Cel verplaatsen en niet vergroten/verkleinen",
    moveCell3: "Cel niet verplaatsen of vergroten/verkleinen",
    fixedPos: "Fixed position",
    border: "Border",
    width: "Width",
    radius: "Radius",
    style: "Style",
    solid: "Solid",
    dashed: "Dashed",
    dotted: "Dotted",
    double: "Double",
    color: "Color",
    moveCell: "Verplaatsen en formaat wijzigen met cellen",
    moveNoSizeCell: "Verplaatsen met cellen zonder formaat te wijzigen",
    noMoveSizeCell: "Niet verplaatsen of formaat wijzigen met cellen",
    title: "Afbeeldingstitel",
    description: "Beschrijving",
    upload: "Afbeelding uploaden",
    position: "Positie",
    crop: "Bijsnijden",
    reset: "Herstellen",
    replace: "Vervangen",
    delete: "Verwijderen",
    lockAspectRatio: "Verhoudingen vergrendelen"
  },
  punctuation: {
    tab: "Tab",
    semicolon: "Puntkomma",
    comma: "Komma",
    space: "Spatie"
  },
  findAndReplace: {
    find: "Zoeken",
    replace: "Vervangen",
    goto: "Ga naar",
    location: "Zoeken in",
    formula: "Formule",
    date: "Datum",
    number: "Number",
    string: "String",
    error: "Error",
    condition: "Condition",
    rowSpan: "Row span",
    columnSpan: "Column span",
    locationExample: "Location",
    lessTwoRowTip: "Selecteer ten minste twee rijen",
    lessTwoColumnTip: "Selecteer ten minste twee kolommen",
    findTextbox: "Find Content",
    replaceTextbox: "Replace Content",
    regexTextbox: "Reguliere expressie",
    wholeTextbox: "Whole word",
    distinguishTextbox: "Case sensitive",
    allReplaceBtn: "Replace All",
    replaceBtn: "Replace",
    allFindBtn: "Find All",
    findBtn: "Find next",
    noFindTip: "De inhoud is niet gevonden",
    modeTip: "Deze bewerking is niet beschikbaar in deze modus",
    searchTargetSheet: "Sheet",
    searchTargetCell: "Cell",
    searchTargetValue: "Value",
    searchInputTip: "Voer de zoekinhoud in",
    noReplceTip: "Er is niets te vervangen",
    noMatchTip: "No match found",
    successTip: "${xlength} items gevonden",
    locationConstant: "Constant",
    locationFormula: "Formula",
    locationDate: "Date",
    locationDigital: "Number",
    locationString: "String",
    locationBool: "Logical",
    locationError: "Error",
    locationNull: "Null",
    locationCondition: "Voorwaardelijke opmaak",
    locationRowSpan: "Row span",
    locationColumnSpan: "Column span",
    locationTiplessTwoRow: "Selecteer ten minste twee rijen",
    locationTiplessTwoColumn: "Selecteer ten minste twee kolommen",
    locationTipNotFindCell: "Cell not found",
    value: "Waarde",
    all: "Alles",
    sheet: "Blad",
    cell: "Cel",
    row: "Rij",
    column: "Kolom",
    findContent: "Zoektekst",
    replaceContent: "Vervangen door",
    caseSensitive: "Hoofdlettergevoelig",
    matchEntireCell: "Hele cel vergelijken",
    searchByRow: "Zoeken op rijen",
    searchByColumn: "Zoeken op kolommen",
    next: "Volgende",
    previous: "Vorige",
    replaceAll: "Alles vervangen",
    replaceTip: "Vervangen voltooid",
    noResult: "Geen overeenkomsten gevonden",
    mode: "Modus",
    range: "Bereik",
    workbook: "Werkmap",
    worksheet: "Werkblad"
  },
  sheetconfig: {
    delete: "Verwijderen",
    copy: "Kopiëren",
    rename: "Naam wijzigen",
    changeColor: "Change color",
    hide: "Verbergen",
    unhide: "Weergeven",
    moveLeft: "Move left",
    moveRight: "Move right",
    resetColor: "Reset color",
    cancelText: "Cancel",
    chooseText: "Confirm color",
    focus: "Focus",
    tipNameRepeat: "De tabbladnaam mag niet dubbel voorkomen. Pas deze aan.",
    noMoreSheet: "De werkmap bevat ten minste één zichtbaar werkblad. Voeg een nieuw werkblad in of toon een verborgen werkblad om het geselecteerde werkblad te verwijderen.",
    confirmDelete: "Dit blad verwijderen?",
    redoDelete: "Kan ongedaan worden gemaakt met Ctrl+Z",
    noHide: "Kan niet verbergen: er moet minstens één bladtab zichtbaar blijven",
    chartEditNoOpt: "Deze bewerking is niet toegestaan in grafiekbewerkingsmodus.",
    sheetNameSpecCharError: "De naam mag niet bevatten: [ ] :  ? * / ' \"",
    sheetNamecannotIsEmptyError: "Bladnaam mag niet leeg zijn",
    color: "Kleur wijzigen",
    move: "Verplaatsen",
    order: "Volgorde wijzigen",
    protect: "Blad beveiligen",
    unprotect: "Bladbeveiliging opheffen",
    new: "Nieuw blad",
    tooltip: "Bladmenu",
    name: "Naam",
    changeSheetName: "Bladnaam wijzigen",
    oldName: "Oude naam",
    newName: "Nieuwe naam",
    errorNameRepeat: "Bladnaam bestaat al",
    errorNameNull: "Bladnaam mag niet leeg zijn",
    errorNameTooLong: "Bladnaam mag niet langer zijn dan 31 tekens",
    errorNameSpecChar: "Bladnaam mag deze tekens niet bevatten: [ ] : \\ ? * /",
    errorDelete: "De werkmap moet ten minste één blad bevatten",
    confirmCopy: "Dit blad kopiëren?",
    success: "Gelukt",
    failed: "Mislukt"
  },
  conditionformat: {
    conditionformat_greaterThan: "Groter dan",
    conditionformat_greaterThan_title: "Cellen opmaken die groter zijn dan",
    conditionformat_lessThan: "Kleiner dan",
    conditionformat_lessThan_title: "Cellen opmaken die kleiner zijn dan",
    conditionformat_between: "Tussen",
    conditionformat_between_title: "Cellen opmaken die tussen de volgende waarden liggen",
    conditionformat_equal: "Gelijk aan",
    conditionformat_equal_title: "Cellen opmaken die gelijk zijn aan",
    conditionformat_textContains: "Tekst bevat",
    conditionformat_textContains_title: "Cellen opmaken die de volgende tekst bevatten",
    conditionformat_occurrenceDate: "Datum",
    conditionformat_occurrenceDate_title: "Cellen opmaken die een datum bevatten",
    conditionformat_duplicateValue: "Dubbele waarden",
    conditionformat_duplicateValue_title: "Dubbele waarden opmaken",
    conditionformat_top10: "Bovenste 10",
    conditionformat_top10_percent: "Bovenste 10%",
    conditionformat_top10_title: "Cellen met de hoogste waarde opmaken",
    conditionformat_last10: "Onderste 10",
    conditionformat_last10_percent: "Onderste 10%",
    conditionformat_last10_title: "Cellen met de laagste waarde opmaken",
    conditionformat_aboveAverage: "Boven gemiddelde",
    conditionformat_aboveAverage_title: "Cellen boven het gemiddelde opmaken",
    conditionformat_belowAverage: "Onder gemiddelde",
    conditionformat_belowAverage_title: "Cellen onder het gemiddelde opmaken",
    rule: "Rule",
    newRule: "New rule",
    editRule: "Edit rule",
    deleteRule: "Delete rule",
    deleteCellRule: "Delete cell rule",
    deleteSheetRule: "Bladregel verwijderen",
    manageRules: "Management rules",
    showRules: "Opmaakregels tonen",
    highlightCellRules: "Regels voor cellen markeren",
    itemSelectionRules: "Regels voor itemselectie",
    conditionformatManageRules: "Beheer voorwaardelijke-opmaakregels",
    format: "Format",
    setFormat: "Set format",
    setAs: "Set as",
    setAsByArea: "Voor het geselecteerde gebied instellen op",
    applyRange: "Apply range",
    selectRange: "Toepassingsbereik selecteren",
    selectRange_percent: "Percentage van geselecteerd bereik",
    selectRange_average: "Gemiddelde waarde van geselecteerd bereik",
    selectRange_value: "Waarde in geselecteerd bereik",
    pleaseSelectRange: "Selecteer toepassingsbereik",
    selectDataRange: "Gegevensbereik selecteren",
    selectCell: "cel selecteren",
    pleaseSelectCell: "Selecteer cel",
    pleaseSelectADate: "Selecteer een datum",
    pleaseEnterInteger: "Voer een geheel getal tussen 1 en 1000 in",
    onlySingleCell: "Er kan slechts naar één cel worden verwezen",
    conditionValueCanOnly: "De voorwaardewaarde mag alleen een getal of één cel zijn",
    ruleTypeItem1: "Alle cellen opmaken op basis van hun respectieve waarden",
    ruleTypeItem2: "Alleen cellen opmaken die bevatten",
    ruleTypeItem2_title: "Alleen voor cellen die aan de volgende voorwaarden voldoen",
    ruleTypeItem3: "Alleen bovenste of onderste waarden opmaken",
    ruleTypeItem3_title: "De waarde staat in de volgende rangschikking",
    ruleTypeItem4: "Alleen waarden boven of onder het gemiddelde opmaken",
    ruleTypeItem4_title: "Is een waarde die aan de volgende voorwaarden voldoet",
    ruleTypeItem5: "Alleen unieke of herhaalde waarden opmaken",
    ruleTypeItem6: "Formules gebruiken om te bepalen welke cellen worden opgemaakt",
    formula: "Formula",
    textColor: "Text color",
    cellColor: "Cell color",
    confirm: "Confirm",
    confirmColor: "Confirm color",
    cancel: "Cancel",
    close: "Close",
    clearColorSelect: "Kleurselectie wissen",
    sheet: "Sheet",
    currentSheet: "Current Sheet",
    dataBar: "gegevensbalk",
    dataBarColor: "kleur gegevensbalk",
    gradientDataBar_1: "Blauw-witte verloopgegevensbalk",
    gradientDataBar_2: "Groen-witte verloopgegevensbalk",
    gradientDataBar_3: "Rood-witte verloopgegevensbalk",
    gradientDataBar_4: "Oranje-witte verloopstrepen",
    gradientDataBar_5: "Lichtblauw-witte verloopstrepen",
    gradientDataBar_6: "Paars-witte verloopgegevensbalk",
    solidColorDataBar_1: "Blue data bar",
    solidColorDataBar_2: "Green data bar",
    solidColorDataBar_3: "Red data bar",
    solidColorDataBar_4: "Orange data bar",
    solidColorDataBar_5: "Lichtblauwe gegevensbalk",
    solidColorDataBar_6: "Purple data bar",
    colorGradation: "kleurgradatie",
    colorGradation_1: "Groen-geel-rode kleurgradatie",
    colorGradation_2: "Rood-geel-groene kleurgradatie",
    colorGradation_3: "Groen-wit-rode kleurgradatie",
    colorGradation_4: "Rood-wit-groene kleurgradatie",
    colorGradation_5: "Blauw-wit-rode kleurgradatie",
    colorGradation_6: "Rood-wit-blauwe kleurgradatie",
    colorGradation_7: "Wit-rode kleurgradatie",
    colorGradation_8: "Rood-witte kleurgradatie",
    colorGradation_9: "Groen-witte kleurgradatie",
    colorGradation_10: "Wit-groene kleurgradatie",
    colorGradation_11: "Groen-gele kleurgradatie",
    colorGradation_12: "Geel-groene kleurgradatie",
    icons: "pictogrammen",
    pleaseSelectIcon: "Klik om een pictogramgroep te selecteren:",
    cellValue: "Cell value",
    specificText: "Specific text",
    occurrenceDate: "Date",
    greaterThan: "Greater than",
    lessThan: "Less than",
    between: "Between",
    equal: "Equal",
    in: "In",
    between2: "",
    contain: "Contain",
    textContains: "Text contains",
    duplicateValue: "Duplicate value",
    uniqueValue: "Unique value",
    top: "Top",
    top10: "Top 10",
    top10_percent: "Top 10%",
    last: "Last",
    last10: "Last 10",
    last10_percent: "Last 10%",
    oneself: "",
    above: "Above",
    aboveAverage: "Above average",
    below: "Below",
    belowAverage: "Below average",
    all: "All",
    yesterday: "YTD",
    today: "Today",
    tomorrow: "Tomorrow",
    lastWeek: "Last week",
    thisWeek: "This week",
    lastMonth: "Last month",
    thisMonth: "This month",
    lastYear: "Last year",
    thisYear: "This year",
    last7days: "Last 7 days",
    last30days: "Last 30 days",
    next7days: "Next 7 days",
    next30days: "Next 30 days",
    next60days: "Next 60 days",
    chooseRuleType: "Choose rule type",
    editRuleDescription: "Regelbeschrijving bewerken",
    newFormatRule: "New format rule",
    editFormatRule: "Edit format rule",
    formatStyle: "Style",
    fillType: "Fill",
    color: "Color",
    twocolor: "Two-color",
    tricolor: "Tricolor",
    multicolor: "Multi color",
    grayColor: "Gray color",
    gradient: "Gradient",
    solid: "Solid",
    maxValue: "Max value",
    medianValue: "Median value",
    minValue: "Min value",
    direction: "Direction",
    threeWayArrow: "Three-way arrow",
    fourWayArrow: "Four-way arrow",
    fiveWayArrow: "Five-way arrow",
    threeTriangles: "Three triangles",
    shape: "Shape",
    threeColorTrafficLight: "Driekleurig verkeerslicht",
    fourColorTrafficLight: "Vierkleurig verkeerslicht",
    threeSigns: "Three signs",
    greenRedBlackGradient: "Groen-rood-zwart verloop",
    rimless: "Rimless",
    bordered: "Bordered",
    mark: "Mark",
    threeSymbols: "Three symbols",
    tricolorFlag: "Tricolor flag",
    circled: "Circled",
    noCircle: "No circle",
    grade: "Grade",
    grade4: "4 Grade",
    grade5: "5 Grade",
    threeStars: "3 Stars",
    fiveQuadrantDiagram: "Vijfkwadrantendiagram",
    fiveBoxes: "5 Boxes",
    conditionformat_rule: "Regel",
    conditionformat_newRule: "Nieuwe regel",
    conditionformat_clearRules: "Regels wissen",
    conditionformat_manageRules: "Regels beheren",
    conditionformat_formatOnlyCells: "Alleen cellen opmaken met",
    conditionformat_cellValue: "Celwaarde",
    conditionformat_specificText: "Specifieke tekst",
    conditionformat_dateOccurring: "Datum komt voor",
    conditionformat_blanks: "Lege cellen",
    conditionformat_noBlanks: "Niet-lege cellen",
    conditionformat_errors: "Fouten",
    conditionformat_noErrors: "Geen fouten",
    conditionformat_formula: "Formule",
    conditionformat_operator: "Operator",
    conditionformat_format: "Opmaak",
    conditionformat_preview: "Voorbeeld",
    conditionformat_ok: "OK",
    conditionformat_cancel: "Annuleren",
    conditionformat_delete: "Verwijderen",
    conditionformat_add: "Toevoegen",
    conditionformat_colorScale: "Kleurschaal",
    conditionformat_dataBar: "Gegevensbalk",
    conditionformat_iconSet: "Pictogrammenset"
  },
  insertLink: {
    linkText: "Display text",
    linkType: "Link type",
    linkAddress: "Link address",
    linkSheet: "Worksheet",
    linkCell: "Cell range",
    linkTooltip: "Tooltip",
    selectCellRange: "Celbereik selecteren",
    cellRangePlaceholder: "Selecteer cellen met de cursor of voer direct in",
    placeholder1: "Voer het webadres van de koppeling in",
    placeholder2: "Voer de cel in waarnaar wordt verwezen, bijvoorbeeld A1",
    placeholder3: "Voer de tooltiptekst in",
    tooltipInfo1: "Voer een geldige koppeling in",
    invalidCellRangeTip: "Voer het juiste celbereik in, bijvoorbeeld Sheet1!A1:C8",
    openLink: "Open link",
    goTo: "Ga naar ${linkAddress}",
    title: "Koppeling invoegen",
    text: "Tekst",
    link: "Koppeling",
    placeholder: "Koppeling invoeren",
    confirm: "OK",
    cancel: "Annuleren",
    edit: "Koppeling bewerken",
    open: "Koppeling openen",
    remove: "Koppeling verwijderen",
    invalid: "Ongeldige koppeling",
    url: "Webadres",
    sheet: "Blad",
    cell: "Cel",
    range: "Bereik"
  },
  linkTypeList: [
    {
      text: "Webpages",
      value: "webpage"
    },
    {
      text: "Cell range",
      value: "cellrange"
    },
    {
      text: "Sheet",
      value: "sheet"
    }
  ],
  dataVerification: {
    cellRange: "Celbereik",
    selectCellRange: "Celbereik selecteren",
    selectCellRange2: "Selecteer een celbereik",
    verificationCondition: "Validatievoorwaarde",
    allowMultiSelect: "Meervoudige selectie toestaan",
    dropdown: "Keuzelijst",
    checkbox: "Selectievakje",
    number: "Getal",
    number_integer: "Number-integer",
    number_decimal: "Number-decimal",
    text_content: "Text-content",
    text_length: "Text-length",
    date: "Datum",
    validity: "Effectiveness",
    placeholder1: "Voer opties in, gescheiden door komma’s, bijvoorbeeld 1,2,3,4,5",
    placeholder2: "Voer inhoud in",
    placeholder3: "Numerieke waarde, bijvoorbeeld 10",
    placeholder4: "Voer de opgegeven tekst in",
    placeholder5: "Voer de hint in die wordt weergegeven wanneer de cel is geselecteerd",
    selected: "Selected",
    notSelected: "Not selected",
    between: "tussen",
    notBetween: "niet tussen",
    equal: "gelijk aan",
    notEqualTo: "Not equal to",
    moreThanThe: "More than the",
    lessThan: "kleiner dan",
    greaterOrEqualTo: "Groter dan of gelijk aan",
    lessThanOrEqualTo: "Kleiner dan of gelijk aan",
    include: "Include",
    exclude: "Exclude",
    earlierThan: "Earlier than",
    noEarlierThan: "No earlier than",
    laterThan: "Later than",
    noLaterThan: "No later than",
    identificationNumber: "Identificatienummer",
    phoneNumber: "Phone number",
    remote: "Automatische externe ophaaloptie",
    prohibitInput: "Invoer verbieden wanneer ingevoerde gegevens ongeldig zijn",
    hintShow: "Hint weergeven wanneer de cel is geselecteerd",
    deleteVerification: "Validatie verwijderen",
    tooltipInfo1: "De optie in de keuzelijst mag niet leeg zijn",
    tooltipInfo2: "Inhoud van selectievakje mag niet leeg zijn",
    tooltipInfo3: "De ingevoerde waarde is geen numeriek type",
    tooltipInfo4: "Waarde 2 mag niet kleiner zijn dan waarde 1",
    tooltipInfo5: "Tekstinhoud mag niet leeg zijn",
    tooltipInfo6: "De ingevoerde waarde is geen datumtype",
    tooltipInfo7: "Datum 2 mag niet vóór datum 1 liggen",
    textlengthInteger: "Tekstlengte moet een geheel getal groter dan of gelijk aan 0 zijn",
    selectRange: "Bereik selecteren",
    integer: "Geheel getal",
    decimal: "Decimaal",
    text: "Tekst",
    list: "Lijst",
    listItem: "Lijstitem",
    custom: "Aangepaste formule",
    notEqual: "niet gelijk aan",
    greaterThan: "groter dan",
    greaterThanOrEqual: "groter dan of gelijk aan",
    lessThanOrEqual: "kleiner dan of gelijk aan",
    value: "Waarde",
    minimum: "Minimum",
    maximum: "Maximum",
    source: "Bron",
    ignoreBlank: "Lege cellen negeren",
    showDropdown: "Keuzelijst in cel weergeven",
    inputMessage: "Invoerbericht",
    showInputMessage: "Invoerbericht weergeven",
    errorAlert: "Foutmelding",
    showErrorAlert: "Foutmelding weergeven",
    errorTitle: "Titel",
    errorMessage: "Bericht",
    rejectInput: "Invoer weigeren",
    warning: "Waarschuwing",
    information: "Informatie",
    stop: "Stoppen",
    confirm: "OK",
    cancel: "Annuleren",
    removeVerification: "Gegevensvalidatie verwijderen",
    addRule: "Regel toevoegen",
    editRule: "Regel bewerken",
    deleteRule: "Regel verwijderen",
    saveRule: "Regel opslaan",
    pleaseInput: "Voer in",
    rule: "Regel"
  },
  formula: {
    sum: "Som",
    average: "Gemiddelde",
    count: "Aantal",
    max: "Maximum",
    min: "Minimum",
    ifGenerate: "Functie invoegen",
    find: "Learn more",
    tipNotBelongToIf: "Deze functie hoort niet bij deze categorie",
    tipSelectCell: "Selecteer een cel of bereik",
    ifGenCompareValueTitle: "Comparison value",
    ifGenSelectCellTitle: "Klik om cel te selecteren",
    ifGenRangeTitle: "Range",
    ifGenRangeTo: "to",
    ifGenRangeEvaluate: "Range evaluate",
    ifGenSelectRangeTitle: "Klik om bereik te selecteren",
    ifGenCutWay: "Partition way",
    ifGenCutSame: "Zelfde partitiewaarde",
    ifGenCutNpiece: "Partition by N",
    ifGenCutCustom: "Custom",
    ifGenCutConfirm: "Confirm",
    ifGenTipSelectCell: "Select cells",
    ifGenTipSelectCellPlace: "Selecteer cellen",
    ifGenTipSelectRange: "Select range",
    ifGenTipSelectRangePlace: "Selecteer bereik",
    ifGenTipNotNullValue: "De vergelijkingswaarde mag niet leeg zijn.",
    ifGenTipLableTitile: "Label",
    ifGenTipRangeNotforNull: "Het bereik mag niet leeg zijn.",
    ifGenTipCutValueNotforNull: "De partitiewaarde mag niet leeg zijn.",
    ifGenTipNotGenCondition: "Er zijn geen voorwaarden beschikbaar om te genereren.",
    findFunction: "Functie zoeken",
    help: "Help",
    example: "Voorbeeld",
    functionName: "Functienaam",
    functionType: "Functiecategorie",
    functionDescription: "Functiebeschrijving",
    functionParameter: "Functieparameter",
    parameter: "Parameter",
    parameterDescription: "Parameterbeschrijving",
    required: "Verplicht",
    optional: "Optioneel",
    repeat: "Herhaalbaar",
    formulaError: "Formulefout",
    formulaTip: "Formule invoeren"
  },
  formulaMore: {
    valueTitle: "Waarde",
    tipSelectDataRange: "Gegevensbereik selecteren",
    tipDataRangeTile: "Gegevensbereik",
    findFunctionTitle: "Functie zoeken",
    tipInputFunctionName: "Functienaam invoeren",
    Array: "Matrix",
    Database: "Database",
    Date: "Datum",
    Engineering: "Engineering",
    Filter: "Filter",
    Financial: "Financieel",
    luckysheet: "Luckysheet",
    other: "Overig",
    Logical: "Logisch",
    Lookup: "Zoeken",
    Math: "Wiskunde",
    Operator: "Operator",
    Parser: "Parser",
    Statistical: "Statistiek",
    Text: "Tekst",
    dataMining: "Datamining",
    selectFunctionTitle: "Functie selecteren",
    calculationResult: "Result",
    tipSuccessText: "Success",
    tipParamErrorText: "Parametertypefout",
    helpClose: "Close",
    helpCollapse: "Collapse",
    helpExample: "Example",
    helpAbstract: "Abstract",
    execfunctionError: "Fout in de formule",
    execfunctionSelfError: "De formule kan niet naar de eigen cel verwijzen",
    execfunctionSelfErrorResult: "De formule kan niet naar de eigen cel verwijzen; dit leidt tot onnauwkeurige berekeningsresultaten",
    allowRepeatText: "Repeatable",
    allowOptionText: "Optional",
    selectCategory: "Of selecteer een categorie",
    selectFunction: "Functie selecteren"
  },
  drag: {
    noMerge: "Deze bewerking kan niet worden uitgevoerd op samengevoegde cellen",
    affectPivot: "Deze wijziging kan niet worden toegepast op de geselecteerde cel omdat dit de draaitabel beïnvloedt.",
    noMulti: "Deze bewerking kan niet worden uitgevoerd op meerdere geselecteerde gebieden. Selecteer één gebied.",
    noPaste: "Deze inhoud kan hier niet worden geplakt. Selecteer een cel in het plakgebied en probeer het opnieuw.",
    noPartMerge: "Deze bewerking kan niet worden uitgevoerd op gedeeltelijk samengevoegde cellen",
    inputCorrect: "Voer de juiste waarde in",
    notLessOne: "Het aantal rijen en kolommen mag niet kleiner zijn dan 1",
    offsetColumnLessZero: "De kolomverschuiving mag niet negatief zijn.",
    pasteMustKeybordAlert: "Kopiëren en plakken in de tabel: Ctrl + C om te kopiëren, Ctrl + V om te plakken, Ctrl + X om te knippen",
    pasteMustKeybordAlertHTMLTitle: "在表格中进行复制粘贴",
    pasteMustKeybordAlertHTML: "<span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + C</span>&nbsp;&nbsp;om te kopiëren<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + V</span>&nbsp;&nbsp;om te plakken<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + X</span>&nbsp;&nbsp;om te knippen"
  },
  pivotTable: {
    title: "Pivot Table",
    closePannel: "Close",
    editRange: "Range",
    tipPivotFieldSelected: "Velden selecteren",
    tipClearSelectedField: "Clear all fields",
    btnClearSelectedField: "Clear",
    btnFilter: "Filter",
    titleRow: "Row",
    titleColumn: "Column",
    titleValue: "Value",
    tipShowColumn: "Statistische velden worden als kolommen weergegeven",
    tipShowRow: "Statistische velden worden als rijen weergegeven",
    titleSelectionDataRange: "Select range",
    titleDataRange: "Data range",
    valueSum: "SUM",
    valueStatisticsSUM: "Sum",
    valueStatisticsCOUNT: "Count",
    valueStatisticsCOUNTA: "Count A",
    valueStatisticsCOUNTUNIQUE: "Count Unique",
    valueStatisticsAVERAGE: "Average",
    valueStatisticsMAX: "Max",
    valueStatisticsMIN: "Min",
    valueStatisticsMEDIAN: "Median",
    valueStatisticsPRODUCT: "Product",
    valueStatisticsSTDEV: "Stdev",
    valueStatisticsSTDEVP: "Stdevp",
    valueStatisticslet: "Var",
    valueStatisticsVARP: "VarP",
    errorNotAllowEdit: "Deze bewerking is verboden in niet-bewerkingsmodus.",
    errorNotAllowMulti: "Deze bewerking kan niet worden uitgevoerd op meerdere geselecteerde gebieden. Selecteer één bereik en probeer het opnieuw.",
    errorSelectRange: "Selecteer het bereik van de nieuwe draaitabel",
    errorIsDamage: "De brongegevens van deze draaitabel zijn beschadigd.",
    errorNotAllowPivotData: "Een draaitabel kan niet als brongegevens worden geselecteerd.",
    errorSelectionRange: "Selectie mislukt, onjuist invoerbereik.",
    errorIncreaseRange: "Vergroot het geselecteerde bereik.",
    titleAddColumn: "Kolom toevoegen aan draaitabel",
    titleMoveColumn: "Verplaats de kolom naar het witte vak hieronder",
    titleClearColumnFilter: "Filter voor deze kolom wissen",
    titleFilterColumn: "Filter",
    titleSort: "Sort",
    titleNoSort: "No sort",
    titleSortAsc: "ASC",
    titleSortDesc: "DESC",
    titleSortBy: "Sort by",
    titleShowSum: "Show total",
    titleStasticTrue: "Yes",
    titleStasticFalse: "No"
  },
  dropCell: {
    copyCell: "Copy",
    sequence: "Sequence",
    onlyFormat: "Only format",
    noFormat: "Not format",
    day: "Day",
    workDay: "Work Day",
    month: "Month",
    year: "Year",
    chineseNumber: "Chinese numbers"
  },
  imageCtrl: {
    borderTile: "Randkleur afbeelding",
    borderCur: "Color"
  },
  protection: {
    protectiontTitle: "Protection",
    enterPassword: "Wachtwoord invoeren (optioneel)",
    enterHintTitle: "Hint wanneer bewerken verboden is (optioneel)",
    enterHint: "De cel of grafiek die je probeert te wijzigen staat in een beveiligd werkblad. Hef de bladbeveiliging op om wijzigingen aan te brengen. Mogelijk moet je een wachtwoord invoeren.",
    swichProtectionTip: "Blad en inhoud van vergrendelde cellen beveiligen",
    authorityTitle: "Gebruikers van dit blad toestaan om:",
    selectLockedCells: "Vergrendelde cellen selecteren",
    selectunLockedCells: "Ontgrendelde cellen selecteren",
    formatCells: "Format cells",
    formatColumns: "Format columns",
    formatRows: "Format rows",
    insertColumns: "Insert columns",
    insertRows: "Insert rows",
    insertHyperlinks: "Hyperlinks invoegen",
    deleteColumns: "Delete columns",
    deleteRows: "Delete rows",
    sort: "Sort",
    filter: "Filter",
    usePivotTablereports: "Draaitabelrapporten gebruiken",
    editObjects: "Edit objects",
    editScenarios: "Edit scenarios",
    allowRangeTitle: "Gebruikers van bereik toestaan om:",
    allowRangeAdd: "New...",
    allowRangeAddTitle: "Title",
    allowRangeAddSqrf: "Reference",
    selectCellRange: "Klik om een celbereik te selecteren",
    selectCellRangeHolder: "Cell range",
    allowRangeAddTitlePassword: "Password",
    allowRangeAddTitleHint: "Prompt",
    allowRangeAddTitleHintTitle: "Hint wanneer een wachtwoord is ingesteld (optioneel)",
    allowRangeAddtitleDefault: "Input range name",
    rangeItemDblclick: "Dubbelklik om te bewerken",
    rangeItemHasPassword: "Has password",
    rangeItemErrorTitleNull: "Title is null",
    rangeItemErrorRangeNull: "Verwijzing is leeg",
    rangeItemErrorRange: "Verwijzing bevat een fout",
    validationTitle: "Wachtwoordvalidatie",
    validationTips: "Voer een wachtwoord in om de beveiliging van het werkblad op te heffen",
    validationInputHint: "Enter a password",
    checkPasswordNullalert: "Wachtwoord is verplicht.",
    checkPasswordWrongalert: "Onjuist wachtwoord, probeer het opnieuw.",
    checkPasswordSucceedalert: "Unlock Succeed!",
    defaultRangeHintText: "De cel is met een wachtwoord beveiligd.",
    defaultSheetHintText: "De cel of grafiek staat in een beveiligd werkblad. Hef de bladbeveiliging op om wijzigingen aan te brengen. Mogelijk moet je een wachtwoord invoeren."
  },
  cellFormat: {
    cellFormatTitle: "Format cells",
    protection: "Protection",
    locked: "Locked",
    hidden: "Hidden",
    protectionTips: "Beveilig het werkblad om cellen te vergrendelen of formules te verbergen. Klik op de werkbalk op de knop Blad beveiligen.",
    tipsPart: "Partial checked",
    tipsAll: "All checked",
    selectionIsNullAlert: "Een selectie is vereist.",
    sheetDataIsNullAlert: "Fout: geen gegevens aanwezig."
  },
  print: {
    normalBtn: "Normaal",
    layoutBtn: "Pagina-indeling",
    pageBtn: "Pagina-eindevoorbeeld",
    menuItemPrint: "Afdrukken (Ctrl+P)",
    menuItemAreas: "Afdrukgebieden",
    menuItemRows: "Titelrijen afdrukken",
    menuItemColumns: "Titelkolommen afdrukken"
  },
  edit: {
    typing: "typen"
  },
  websocket: {
    success: "WebSocket-verbinding geslaagd",
    refresh: "Er is een fout opgetreden in de WebSocket-verbinding. Vernieuw de pagina.",
    wait: "Er is een fout opgetreden in de WebSocket-verbinding. Wacht even.",
    close: "WebSocket-verbinding gesloten",
    contact: "Er is een communicatiefout met de server opgetreden. Vernieuw de pagina en probeer het opnieuw. Neem contact op met de beheerder als dit niet helpt.",
    support: "De huidige browser ondersteunt WebSocket niet"
  },
  custom: {
    lockCells: "Cellen vergrendelen",
    unlockCells: "Cellen ontgrendelen",
    toggleSheetProtection: "Werkmap beveiligen / beveiliging opheffen",
    toggleGridLines: "Rasterlijnen weergeven / verbergen",
    customNumberFormat: {
      menuItem: "Aangepaste getalnotatie…",
      title: "Aangepaste getalnotaties",
      formatLabel: "Notatiecode",
      inputPlaceholder: "Bijvoorbeeld: #.##0,00",
      apply: "Toepassen",
      cancel: "Annuleren",
      close: "Sluiten",
      preview: "Voorbeeld",
      presets: "Voorgestelde notaties",
      standardFormats: "Getallen",
      currencyFormats: "Valuta",
      unitFormats: "Eenheden",
      selection: "Selectie",
      help: "Notatiegids",
      helpTitle: "Hoe notatiecodes werken",
      helpZero: "0 geeft altijd een cijfer weer, inclusief een voorloop- of volgnul.",
      helpHash: "# geeft een cijfer alleen weer wanneer het significant is.",
      helpDecimal: "{separator} markeert de decimale positie in de notatiecode.",
      helpGrouping: "{separator} voegt cijfergroepering toe.",
      groupingSpace: "Een spatie voegt cijfergroepering toe.",
      helpSections: "; scheidt de secties voor positieve, negatieve, nul- en tekstwaarden.",
      normalizedHint: "De notatie wordt opgeslagen als {format}.",
      errors: {
        required: "Voer een notatiecode in.",
        tooLong: "De notatiecode is te lang.",
        tooManySections: "Een notatie kan maximaal vier secties bevatten.",
        missingPlaceholder: "Voeg ten minste één numerieke tijdelijke aanduiding toe: 0, # of ?.",
        invalid: "Deze notatiecode is ongeldig."
      }
    },
    standaloneMenu: {
      menuBarLabel: "DocCells-menu’s",
      file: "Bestand",
      edit: "Bewerken",
      view: "Beeld",
      insert: "Invoegen",
      data: "Gegevens",
      tools: "Hulpmiddelen",
      open: "Openen",
      export: "Exporteren",
      show: "Weergeven",
      gridlines: "Rasterlijnen"
    },
    conditionalFormatting: {
      toolbar: "Voorwaardelijke opmaak",
      title: "Voorwaardelijke opmaak",
      activeSheet: "Actief blad",
      appliedRules: "Toegepaste regels",
      noRules: "Geen regels voor dit blad.",
      editRule: "Regel bewerken",
      newRule: "Nieuwe regel",
      applyTo: "Toepassen op",
      condition: "Voorwaarde",
      compareTo: "Vergelijken met",
      minValue: "Minimumwaarde",
      maxValue: "Maximumwaarde",
      cell: "Cel",
      sameRowColumn: "Kolom in dezelfde rij",
      text: "Tekst",
      value: "Waarde",
      textColor: "Tekst",
      backgroundColor: "Opvulling",
      style: "Stijl",
      preview: "Celvoorbeeld",
      close: "Sluiten",
      reset: "Nieuw",
      save: "Opslaan",
      add: "Toevoegen",
      edit: "Bewerken",
      delete: "Verwijderen",
      none: "Geen",
      sample: "Aa",
      textPlaceholder: "laat",
      conditions: {
        lessThan: "is kleiner dan",
        greaterThan: "is groter dan",
        equal: "is gelijk aan",
        notEqual: "is verschillend van",
        between: "ligt tussen",
        textContains: "bevat tekst"
      },
      compareTypes: {
        value: "een vaste waarde",
        cell: "een vaste cel",
        sameRowColumn: "een kolom in dezelfde rij"
      },
      descriptions: {
        cell: "cel",
        between: "cel tussen {value1} en {value2}",
        textContains: "tekst bevat \"{value}\"",
        sameRowColumn: "kolom {reference} in dezelfde rij",
        fixedCell: "cel {reference}",
        comparison: "cel {operator} {target}"
      },
      errors: {
        range: "Het bereik moet lijken op A2:A100.",
        between: "Voer twee waarden in voor de voorwaarde tussen.",
        text: "Voer de tekst in waarnaar moet worden gezocht.",
        compareCell: "De vergelijkingscel moet lijken op B1.",
        compareColumn: "De vergelijkingskolom moet lijken op B.",
        compareValue: "Voer een vergelijkingswaarde in.",
        style: "Kies ten minste één kleur of stijl."
      },
      styleLabels: {
        bold: "Vet",
        italic: "Cursief",
        underline: "Onderstrepen"
      }
    },
    charts: {
      toolbar: "Grafiek invoegen",
      title: "Grafieken",
      defaultTitle: "Grafiek",
      activeSheet: "Actief blad",
      existingCharts: "Grafieken van het blad",
      noCharts: "Geen grafieken voor dit blad.",
      newChart: "Nieuwe grafiek",
      editChart: "Grafiek bewerken",
      chartTitle: "Titel",
      type: "Type",
      range: "Gegevens",
      labels: "Labels",
      labelReference: "Verwijzing",
      labelColumnReference: "Kolomletter",
      labelRowReference: "Rijnummer",
      values: "Waarden weergeven",
      legend: "Legenda weergeven",
      color: "Kleur",
      xAxis: "X-aslabels weergeven",
      yAxis: "Y-aslabels weergeven",
      gridlines: "Raster weergeven",
      displayOptions: "Weergave",
      preview: "Voorbeeld",
      close: "Sluiten",
      reset: "Nieuw",
      add: "Toevoegen",
      save: "Opslaan",
      edit: "Bewerken",
      delete: "Verwijderen",
      types: {
        bar: "Balken",
        line: "Lijn",
        scatter: "Spreiding",
        pie: "Taart"
      },
      labelTypes: {
        none: "Geen labels",
        sameRowColumn: "Kolom van dezelfde rij",
        sameColumnRow: "Rij van dezelfde kolommen",
        range: "Aangepast bereik"
      },
      errors: {
        range: "Het bereik moet lijken op A1:B5.",
        dataColumn: "Het gegevensbereik moet één rij of één kolom met waarden zijn.",
        labelColumn: "De labelkolom moet lijken op B.",
        labelRow: "De labelrij moet lijken op 2.",
        labelRange: "Het labelbereik moet lijken op B3:B24.",
        labelRangeSize: "Het labelbereik moet hetzelfde aantal waarden bevatten als de gegevens.",
        title: "Voeg een korte grafiektitel toe."
      }
    }
  }
};
