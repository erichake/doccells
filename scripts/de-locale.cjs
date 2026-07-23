module.exports = {
  generalDialog: {
    partiallyError: "Dieser Vorgang kann nicht auf teilweise verbundene Zellen angewendet werden",
    readOnlyError: "Dieser Vorgang kann im schreibgeschützten Modus nicht ausgeführt werden",
    dataNullError: "Dieser Vorgang kann nicht auf nicht vorhandene Daten angewendet werden",
    noSeletionError: "Es wurde noch keine Auswahl vorgenommen",
    cannotSelectMultiple: "Mehrfachauswahl ist nicht möglich"
  },
  functionlist: [
    {
      n: "SUMIF",
      t: 0,
      d: "Beschreibung der Funktion SUMIF.",
      a: "Kurzbeschreibung der Funktion SUMIF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "bereich",
          detail: "Parameter `bereich` der Funktion SUMIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kriterium",
          detail: "Parameter `kriterium` der Funktion SUMIF.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "summenbereich",
          detail: "Parameter `summenbereich` der Funktion SUMIF.",
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
      d: "Beschreibung der Funktion TAN.",
      a: "Kurzbeschreibung der Funktion TAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "winkel",
          detail: "Parameter `winkel` der Funktion TAN.",
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
      d: "Beschreibung der Funktion TANH.",
      a: "Kurzbeschreibung der Funktion TANH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion TANH.",
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
      d: "Beschreibung der Funktion CEILING.",
      a: "Kurzbeschreibung der Funktion CEILING.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion CEILING.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "faktor",
          detail: "Parameter `faktor` der Funktion CEILING.",
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
      d: "Beschreibung der Funktion ATAN.",
      a: "Kurzbeschreibung der Funktion ATAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ATAN.",
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
      d: "Beschreibung der Funktion ASINH.",
      a: "Kurzbeschreibung der Funktion ASINH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ASINH.",
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
      d: "Beschreibung der Funktion ABS.",
      a: "Kurzbeschreibung der Funktion ABS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ABS.",
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
      d: "Beschreibung der Funktion ACOS.",
      a: "Kurzbeschreibung der Funktion ACOS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ACOS.",
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
      d: "Beschreibung der Funktion ACOSH.",
      a: "Kurzbeschreibung der Funktion ACOSH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ACOSH.",
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
      d: "Beschreibung der Funktion MULTINOMIAL.",
      a: "Kurzbeschreibung der Funktion MULTINOMIAL.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion MULTINOMIAL.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion MULTINOMIAL.",
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
      d: "Beschreibung der Funktion ATANH.",
      a: "Kurzbeschreibung der Funktion ATANH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ATANH.",
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
      d: "Beschreibung der Funktion ATAN2.",
      a: "Kurzbeschreibung der Funktion ATAN2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion ATAN2.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "y",
          detail: "Parameter `y` der Funktion ATAN2.",
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
      d: "Beschreibung der Funktion COUNTBLANK.",
      a: "Kurzbeschreibung der Funktion COUNTBLANK.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion COUNTBLANK.",
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
      d: "Beschreibung der Funktion COSH.",
      a: "Kurzbeschreibung der Funktion COSH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion COSH.",
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
      d: "Beschreibung der Funktion INT.",
      a: "Kurzbeschreibung der Funktion INT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion INT.",
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
      d: "Beschreibung der Funktion ISEVEN.",
      a: "Kurzbeschreibung der Funktion ISEVEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ISEVEN.",
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
      d: "Beschreibung der Funktion ISODD.",
      a: "Kurzbeschreibung der Funktion ISODD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ISODD.",
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
      d: "Beschreibung der Funktion LCM.",
      a: "Kurzbeschreibung der Funktion LCM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion LCM.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion LCM.",
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
      d: "Beschreibung der Funktion LN.",
      a: "Kurzbeschreibung der Funktion LN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion LN.",
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
      d: "Beschreibung der Funktion LOG.",
      a: "Kurzbeschreibung der Funktion LOG.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion LOG.",
          example: "128",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "basis",
          detail: "Parameter `basis` der Funktion LOG.",
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
      d: "Beschreibung der Funktion LOG10.",
      a: "Kurzbeschreibung der Funktion LOG10.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion LOG10.",
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
      d: "Beschreibung der Funktion MOD.",
      a: "Kurzbeschreibung der Funktion MOD.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividend",
          detail: "Parameter `dividend` der Funktion MOD.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "Parameter `divisor` der Funktion MOD.",
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
      d: "Beschreibung der Funktion MROUND.",
      a: "Kurzbeschreibung der Funktion MROUND.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion MROUND.",
          example: "21",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "faktor",
          detail: "Parameter `faktor` der Funktion MROUND.",
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
      d: "Beschreibung der Funktion ODD.",
      a: "Kurzbeschreibung der Funktion ODD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ODD.",
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
      d: "Beschreibung der Funktion SUMSQ.",
      a: "Kurzbeschreibung der Funktion SUMSQ.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion SUMSQ.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion SUMSQ.",
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
      d: "Beschreibung der Funktion COMBIN.",
      a: "Kurzbeschreibung der Funktion COMBIN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "Parameter `n` der Funktion COMBIN.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Parameter `k` der Funktion COMBIN.",
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
      d: "Beschreibung der Funktion SUM.",
      a: "Kurzbeschreibung der Funktion SUM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion SUM.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion SUM.",
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
      d: "Beschreibung der Funktion SUBTOTAL.",
      a: "Kurzbeschreibung der Funktion SUBTOTAL.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "funktionscode",
          detail: "Parameter `funktionscode` der Funktion SUBTOTAL.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bereich1",
          detail: "Parameter `bereich1` der Funktion SUBTOTAL.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "bereich2",
          detail: "Parameter `bereich2` der Funktion SUBTOTAL.",
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
      d: "Beschreibung der Funktion ASIN.",
      a: "Kurzbeschreibung der Funktion ASIN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ASIN.",
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
      d: "Beschreibung der Funktion COUNTIF.",
      a: "Kurzbeschreibung der Funktion COUNTIF.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "bereich",
          detail: "Parameter `bereich` der Funktion COUNTIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kriterium",
          detail: "Parameter `kriterium` der Funktion COUNTIF.",
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
      d: "Beschreibung der Funktion RADIANS.",
      a: "Kurzbeschreibung der Funktion RADIANS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "winkel",
          detail: "Parameter `winkel` der Funktion RADIANS.",
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
      d: "Beschreibung der Funktion RAND.",
      a: "Kurzbeschreibung der Funktion RAND.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "COUNTUNIQUE",
      t: 0,
      d: "Beschreibung der Funktion COUNTUNIQUE.",
      a: "Kurzbeschreibung der Funktion COUNTUNIQUE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion COUNTUNIQUE.",
          example: "A1:C100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion COUNTUNIQUE.",
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
      d: "Beschreibung der Funktion DEGREES.",
      a: "Kurzbeschreibung der Funktion DEGREES.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "winkel",
          detail: "Parameter `winkel` der Funktion DEGREES.",
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
      d: "Beschreibung der Funktion ERFC.",
      a: "Kurzbeschreibung der Funktion ERFC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "z",
          detail: "Parameter `z` der Funktion ERFC.",
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
      d: "Beschreibung der Funktion EVEN.",
      a: "Kurzbeschreibung der Funktion EVEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion EVEN.",
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
      d: "Beschreibung der Funktion EXP.",
      a: "Kurzbeschreibung der Funktion EXP.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "exponent",
          detail: "Parameter `exponent` der Funktion EXP.",
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
      d: "Beschreibung der Funktion FACT.",
      a: "Kurzbeschreibung der Funktion FACT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion FACT.",
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
      d: "Beschreibung der Funktion FACTDOUBLE.",
      a: "Kurzbeschreibung der Funktion FACTDOUBLE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion FACTDOUBLE.",
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
      d: "Beschreibung der Funktion PI.",
      a: "Kurzbeschreibung der Funktion PI.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FLOOR",
      t: 0,
      d: "Beschreibung der Funktion FLOOR.",
      a: "Kurzbeschreibung der Funktion FLOOR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion FLOOR.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "faktor",
          detail: "Parameter `faktor` der Funktion FLOOR.",
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
      d: "Beschreibung der Funktion GCD.",
      a: "Kurzbeschreibung der Funktion GCD.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion GCD.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion GCD.",
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
      d: "Beschreibung der Funktion RANDBETWEEN.",
      a: "Kurzbeschreibung der Funktion RANDBETWEEN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "untergrenze",
          detail: "Parameter `untergrenze` der Funktion RANDBETWEEN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "obergrenze",
          detail: "Parameter `obergrenze` der Funktion RANDBETWEEN.",
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
      d: "Beschreibung der Funktion ROUND.",
      a: "Kurzbeschreibung der Funktion ROUND.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ROUND.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dezimalstellen",
          detail: "Parameter `dezimalstellen` der Funktion ROUND.",
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
      d: "Beschreibung der Funktion ROUNDDOWN.",
      a: "Kurzbeschreibung der Funktion ROUNDDOWN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ROUNDDOWN.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dezimalstellen",
          detail: "Parameter `dezimalstellen` der Funktion ROUNDDOWN.",
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
      d: "Beschreibung der Funktion ROUNDUP.",
      a: "Kurzbeschreibung der Funktion ROUNDUP.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ROUNDUP.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dezimalstellen",
          detail: "Parameter `dezimalstellen` der Funktion ROUNDUP.",
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
      d: "Beschreibung der Funktion SERIESSUM.",
      a: "Kurzbeschreibung der Funktion SERIESSUM.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion SERIESSUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "Parameter `n` der Funktion SERIESSUM.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "m",
          detail: "Parameter `m` der Funktion SERIESSUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a",
          detail: "Parameter `a` der Funktion SERIESSUM.",
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
      d: "Beschreibung der Funktion SIGN.",
      a: "Kurzbeschreibung der Funktion SIGN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion SIGN.",
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
      d: "Beschreibung der Funktion SIN.",
      a: "Kurzbeschreibung der Funktion SIN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "winkel",
          detail: "Parameter `winkel` der Funktion SIN.",
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
      d: "Beschreibung der Funktion SINH.",
      a: "Kurzbeschreibung der Funktion SINH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion SINH.",
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
      d: "Beschreibung der Funktion SQRT.",
      a: "Kurzbeschreibung der Funktion SQRT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion SQRT.",
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
      d: "Beschreibung der Funktion SQRTPI.",
      a: "Kurzbeschreibung der Funktion SQRTPI.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion SQRTPI.",
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
      d: "Beschreibung der Funktion GAMMALN.",
      a: "Kurzbeschreibung der Funktion GAMMALN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion GAMMALN.",
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
      d: "Beschreibung der Funktion COS.",
      a: "Kurzbeschreibung der Funktion COS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "winkel",
          detail: "Parameter `winkel` der Funktion COS.",
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
      d: "Beschreibung der Funktion TRUNC.",
      a: "Kurzbeschreibung der Funktion TRUNC.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion TRUNC.",
          example: "3.141592654",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dezimalstellen",
          detail: "Parameter `dezimalstellen` der Funktion TRUNC.",
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
      d: "Beschreibung der Funktion QUOTIENT.",
      a: "Kurzbeschreibung der Funktion QUOTIENT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividend",
          detail: "Parameter `dividend` der Funktion QUOTIENT.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "Parameter `divisor` der Funktion QUOTIENT.",
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
      d: "Beschreibung der Funktion POWER.",
      a: "Kurzbeschreibung der Funktion POWER.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "basis",
          detail: "Parameter `basis` der Funktion POWER.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "exponent",
          detail: "Parameter `exponent` der Funktion POWER.",
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
      d: "Beschreibung der Funktion SUMIFS.",
      a: "Kurzbeschreibung der Funktion SUMIFS.",
      m: [
        3,
        257
      ],
      p: [
        {
          name: "summenbereich",
          detail: "Parameter `summenbereich` der Funktion SUMIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kriterienbereich1",
          detail: "Parameter `kriterienbereich1` der Funktion SUMIFS.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kriterium1",
          detail: "Parameter `kriterium1` der Funktion SUMIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterienbereich2",
          detail: "Parameter `kriterienbereich2` der Funktion SUMIFS.",
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
      d: "Beschreibung der Funktion COUNTIFS.",
      a: "Kurzbeschreibung der Funktion COUNTIFS.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "kriterienbereich1",
          detail: "Parameter `kriterienbereich1` der Funktion COUNTIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kriterium1",
          detail: "Parameter `kriterium1` der Funktion COUNTIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterienbereich2",
          detail: "Parameter `kriterienbereich2` der Funktion COUNTIFS.",
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
      d: "Beschreibung der Funktion PRODUCT.",
      a: "Kurzbeschreibung der Funktion PRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "faktor1",
          detail: "Parameter `faktor1` der Funktion PRODUCT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "faktor2",
          detail: "Parameter `faktor2` der Funktion PRODUCT.",
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
      d: "Beschreibung der Funktion HARMEAN.",
      a: "Kurzbeschreibung der Funktion HARMEAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion HARMEAN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion HARMEAN.",
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
      d: "Beschreibung der Funktion HYPGEOMDIST.",
      a: "Kurzbeschreibung der Funktion HYPGEOMDIST.",
      m: [
        5,
        5
      ],
      p: [
        {
          name: "anzahl_erfolge",
          detail: "Parameter `anzahl_erfolge` der Funktion HYPGEOMDIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_ziehungen",
          detail: "Parameter `anzahl_ziehungen` der Funktion HYPGEOMDIST.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "erfolge_in_population",
          detail: "Parameter `erfolge_in_population` der Funktion HYPGEOMDIST.",
          example: "20",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "populationsgröße",
          detail: "Parameter `populationsgröße` der Funktion HYPGEOMDIST.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Parameter `kumuliert` der Funktion HYPGEOMDIST.",
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
      d: "Beschreibung der Funktion INTERCEPT.",
      a: "Kurzbeschreibung der Funktion INTERCEPT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Parameter `daten_y` der Funktion INTERCEPT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Parameter `daten_x` der Funktion INTERCEPT.",
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
      d: "Beschreibung der Funktion KURT.",
      a: "Kurzbeschreibung der Funktion KURT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion KURT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion KURT.",
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
      d: "Beschreibung der Funktion LARGE.",
      a: "Kurzbeschreibung der Funktion LARGE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Parameter `daten` der Funktion LARGE.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "Parameter `n` der Funktion LARGE.",
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
      d: "Beschreibung der Funktion STDEVA.",
      a: "Kurzbeschreibung der Funktion STDEVA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion STDEVA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion STDEVA.",
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
      d: "Beschreibung der Funktion STDEVP.",
      a: "Kurzbeschreibung der Funktion STDEVP.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion STDEVP.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion STDEVP.",
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
      d: "Beschreibung der Funktion GEOMEAN.",
      a: "Kurzbeschreibung der Funktion GEOMEAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion GEOMEAN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion GEOMEAN.",
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
      d: "Beschreibung der Funktion RANK_EQ.",
      a: "Kurzbeschreibung der Funktion RANK_EQ.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion RANK_EQ.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten",
          detail: "Parameter `daten` der Funktion RANK_EQ.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "ist_aufsteigend",
          detail: "Parameter `ist_aufsteigend` der Funktion RANK_EQ.",
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
      d: "Beschreibung der Funktion RANK_AVG.",
      a: "Kurzbeschreibung der Funktion RANK_AVG.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion RANK_AVG.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten",
          detail: "Parameter `daten` der Funktion RANK_AVG.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "ist_aufsteigend",
          detail: "Parameter `ist_aufsteigend` der Funktion RANK_AVG.",
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
      d: "Beschreibung der Funktion PERCENTRANK_EXC.",
      a: "Kurzbeschreibung der Funktion PERCENTRANK_EXC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "daten",
          detail: "Parameter `daten` der Funktion PERCENTRANK_EXC.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion PERCENTRANK_EXC.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "signifikante_stellen",
          detail: "Parameter `signifikante_stellen` der Funktion PERCENTRANK_EXC.",
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
      d: "Beschreibung der Funktion PERCENTRANK_INC.",
      a: "Kurzbeschreibung der Funktion PERCENTRANK_INC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "daten",
          detail: "Parameter `daten` der Funktion PERCENTRANK_INC.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion PERCENTRANK_INC.",
          example: " A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "signifikante_stellen",
          detail: "Parameter `signifikante_stellen` der Funktion PERCENTRANK_INC.",
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
      d: "Beschreibung der Funktion FORECAST.",
      a: "Kurzbeschreibung der Funktion FORECAST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion FORECAST.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_y",
          detail: "Parameter `daten_y` der Funktion FORECAST.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Parameter `daten_x` der Funktion FORECAST.",
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
      d: "Beschreibung der Funktion FISHERINV.",
      a: "Kurzbeschreibung der Funktion FISHERINV.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion FISHERINV.",
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
      d: "Beschreibung der Funktion FISHER.",
      a: "Kurzbeschreibung der Funktion FISHER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion FISHER.",
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
      d: "Beschreibung der Funktion MODE_SNGL.",
      a: "Kurzbeschreibung der Funktion MODE_SNGL.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion MODE_SNGL.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion MODE_SNGL.",
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
      d: "Beschreibung der Funktion WEIBULL_DIST.",
      a: "Kurzbeschreibung der Funktion WEIBULL_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion WEIBULL_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "form",
          detail: "Parameter `form` der Funktion WEIBULL_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "skalierung",
          detail: "Parameter `skalierung` der Funktion WEIBULL_DIST.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Parameter `kumuliert` der Funktion WEIBULL_DIST.",
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
      d: "Beschreibung der Funktion COUNT.",
      a: "Kurzbeschreibung der Funktion COUNT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion COUNT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion COUNT.",
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
      d: "Beschreibung der Funktion COUNTA.",
      a: "Kurzbeschreibung der Funktion COUNTA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion COUNTA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion COUNTA.",
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
      d: "Beschreibung der Funktion AVEDEV.",
      a: "Kurzbeschreibung der Funktion AVEDEV.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion AVEDEV.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion AVEDEV.",
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
      d: "Beschreibung der Funktion AVERAGE.",
      a: "Kurzbeschreibung der Funktion AVERAGE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion AVERAGE.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion AVERAGE.",
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
      d: "Beschreibung der Funktion AVERAGEA.",
      a: "Kurzbeschreibung der Funktion AVERAGEA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion AVERAGEA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion AVERAGEA.",
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
      d: "Beschreibung der Funktion BINOM_DIST.",
      a: "Kurzbeschreibung der Funktion BINOM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "anzahl_erfolge",
          detail: "Parameter `anzahl_erfolge` der Funktion BINOM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_versuche",
          detail: "Parameter `anzahl_versuche` der Funktion BINOM_DIST.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "erfolgswahrscheinlichkeit",
          detail: "Parameter `erfolgswahrscheinlichkeit` der Funktion BINOM_DIST.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Parameter `kumuliert` der Funktion BINOM_DIST.",
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
      d: "Beschreibung der Funktion BINOM_INV.",
      a: "Kurzbeschreibung der Funktion BINOM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "anzahl_versuche",
          detail: "Parameter `anzahl_versuche` der Funktion BINOM_INV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "erfolgswahrscheinlichkeit",
          detail: "Parameter `erfolgswahrscheinlichkeit` der Funktion BINOM_INV.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zielwahrscheinlichkeit",
          detail: "Parameter `zielwahrscheinlichkeit` der Funktion BINOM_INV.",
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
      d: "Beschreibung der Funktion CONFIDENCE_NORM.",
      a: "Kurzbeschreibung der Funktion CONFIDENCE_NORM.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "alpha",
          detail: "Parameter `alpha` der Funktion CONFIDENCE_NORM.",
          example: "0.05",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standardabweichung",
          detail: "Parameter `standardabweichung` der Funktion CONFIDENCE_NORM.",
          example: "1.6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "populationsgröße",
          detail: "Parameter `populationsgröße` der Funktion CONFIDENCE_NORM.",
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
      d: "Beschreibung der Funktion CORREL.",
      a: "Kurzbeschreibung der Funktion CORREL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Parameter `daten_y` der Funktion CORREL.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Parameter `daten_x` der Funktion CORREL.",
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
      d: "Beschreibung der Funktion COVARIANCE_P.",
      a: "Kurzbeschreibung der Funktion COVARIANCE_P.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Parameter `daten_y` der Funktion COVARIANCE_P.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Parameter `daten_x` der Funktion COVARIANCE_P.",
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
      d: "Beschreibung der Funktion COVARIANCE_S.",
      a: "Kurzbeschreibung der Funktion COVARIANCE_S.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Parameter `daten_y` der Funktion COVARIANCE_S.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Parameter `daten_x` der Funktion COVARIANCE_S.",
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
      d: "Beschreibung der Funktion DEVSQ.",
      a: "Kurzbeschreibung der Funktion DEVSQ.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion DEVSQ.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion DEVSQ.",
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
      d: "Beschreibung der Funktion EXPON_DIST.",
      a: "Kurzbeschreibung der Funktion EXPON_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion EXPON_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lambda",
          detail: "Parameter `lambda` der Funktion EXPON_DIST.",
          example: "0.5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Parameter `kumuliert` der Funktion EXPON_DIST.",
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
      d: "Beschreibung der Funktion AVERAGEIF.",
      a: "Kurzbeschreibung der Funktion AVERAGEIF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "kriterienbereich",
          detail: "Parameter `kriterienbereich` der Funktion AVERAGEIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterium",
          detail: "Parameter `kriterium` der Funktion AVERAGEIF.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "mittelwertbereich",
          detail: "Parameter `mittelwertbereich` der Funktion AVERAGEIF.",
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
      d: "Beschreibung der Funktion AVERAGEIFS.",
      a: "Kurzbeschreibung der Funktion AVERAGEIFS.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "mittelwertbereich",
          detail: "Parameter `mittelwertbereich` der Funktion AVERAGEIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterienbereich1",
          detail: "Parameter `kriterienbereich1` der Funktion AVERAGEIFS.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterium1",
          detail: "Parameter `kriterium1` der Funktion AVERAGEIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterienbereich2",
          detail: "Parameter `kriterienbereich2` der Funktion AVERAGEIFS.",
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
      d: "Beschreibung der Funktion PERMUT.",
      a: "Kurzbeschreibung der Funktion PERMUT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "Parameter `n` der Funktion PERMUT.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Parameter `k` der Funktion PERMUT.",
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
      d: "Beschreibung der Funktion TRIMMEAN.",
      a: "Kurzbeschreibung der Funktion TRIMMEAN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Parameter `daten` der Funktion TRIMMEAN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "ausgeschlossener_anteil",
          detail: "Parameter `ausgeschlossener_anteil` der Funktion TRIMMEAN.",
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
      d: "Beschreibung der Funktion PERCENTILE_EXC.",
      a: "Kurzbeschreibung der Funktion PERCENTILE_EXC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Parameter `daten` der Funktion PERCENTILE_EXC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "perzentil",
          detail: "Parameter `perzentil` der Funktion PERCENTILE_EXC.",
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
      d: "Beschreibung der Funktion PERCENTILE_INC.",
      a: "Kurzbeschreibung der Funktion PERCENTILE_INC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Parameter `daten` der Funktion PERCENTILE_INC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "perzentil",
          detail: "Parameter `perzentil` der Funktion PERCENTILE_INC.",
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
      d: "Beschreibung der Funktion PEARSON.",
      a: "Kurzbeschreibung der Funktion PEARSON.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Parameter `daten_y` der Funktion PEARSON.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Parameter `daten_x` der Funktion PEARSON.",
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
      d: "Beschreibung der Funktion NORM_S_INV.",
      a: "Kurzbeschreibung der Funktion NORM_S_INV.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion NORM_S_INV.",
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
      d: "Beschreibung der Funktion NORM_S_DIST.",
      a: "Kurzbeschreibung der Funktion NORM_S_DIST.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion NORM_S_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Parameter `kumuliert` der Funktion NORM_S_DIST.",
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
      d: "Beschreibung der Funktion NORM_INV.",
      a: "Kurzbeschreibung der Funktion NORM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion NORM_INV.",
          example: "0.75",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mittelwert",
          detail: "Parameter `mittelwert` der Funktion NORM_INV.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standardabweichung",
          detail: "Parameter `standardabweichung` der Funktion NORM_INV.",
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
      d: "Beschreibung der Funktion NORM_DIST.",
      a: "Kurzbeschreibung der Funktion NORM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion NORM_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mittelwert",
          detail: "Parameter `mittelwert` der Funktion NORM_DIST.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standardabweichung",
          detail: "Parameter `standardabweichung` der Funktion NORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Parameter `kumuliert` der Funktion NORM_DIST.",
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
      d: "Beschreibung der Funktion NEGBINOM_DIST.",
      a: "Kurzbeschreibung der Funktion NEGBINOM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "anzahl_fehlschläge",
          detail: "Parameter `anzahl_fehlschläge` der Funktion NEGBINOM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_erfolge",
          detail: "Parameter `anzahl_erfolge` der Funktion NEGBINOM_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "erfolgswahrscheinlichkeit",
          detail: "Parameter `erfolgswahrscheinlichkeit` der Funktion NEGBINOM_DIST.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Parameter `kumuliert` der Funktion NEGBINOM_DIST.",
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
      d: "Beschreibung der Funktion MINA.",
      a: "Kurzbeschreibung der Funktion MINA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion MINA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion MINA.",
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
      d: "Beschreibung der Funktion MIN.",
      a: "Kurzbeschreibung der Funktion MIN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion MIN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion MIN.",
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
      d: "Beschreibung der Funktion MEDIAN.",
      a: "Kurzbeschreibung der Funktion MEDIAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion MEDIAN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion MEDIAN.",
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
      d: "Beschreibung der Funktion MAXA.",
      a: "Kurzbeschreibung der Funktion MAXA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion MAXA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion MAXA.",
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
      d: "Beschreibung der Funktion MAX.",
      a: "Kurzbeschreibung der Funktion MAX.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion MAX.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion MAX.",
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
      d: "Beschreibung der Funktion LOGNORM_INV.",
      a: "Kurzbeschreibung der Funktion LOGNORM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion LOGNORM_INV.",
          example: "0.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mittelwert",
          detail: "Parameter `mittelwert` der Funktion LOGNORM_INV.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standardabweichung",
          detail: "Parameter `standardabweichung` der Funktion LOGNORM_INV.",
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
      d: "Beschreibung der Funktion LOGNORM_DIST.",
      a: "Kurzbeschreibung der Funktion LOGNORM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion LOGNORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mittelwert",
          detail: "Parameter `mittelwert` der Funktion LOGNORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standardabweichung",
          detail: "Parameter `standardabweichung` der Funktion LOGNORM_DIST.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Parameter `kumuliert` der Funktion LOGNORM_DIST.",
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
      d: "Beschreibung der Funktion Z_TEST.",
      a: "Kurzbeschreibung der Funktion Z_TEST.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "daten",
          detail: "Parameter `daten` der Funktion Z_TEST.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion Z_TEST.",
          example: "B2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standardabweichung",
          detail: "Parameter `standardabweichung` der Funktion Z_TEST.",
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
      d: "Beschreibung der Funktion PROB.",
      a: "Kurzbeschreibung der Funktion PROB.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "daten",
          detail: "Parameter `daten` der Funktion PROB.",
          example: "A3:A6",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "wahrscheinlichkeiten",
          detail: "Parameter `wahrscheinlichkeiten` der Funktion PROB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "untergrenze",
          detail: "Parameter `untergrenze` der Funktion PROB.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "obergrenze",
          detail: "Parameter `obergrenze` der Funktion PROB.",
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
      d: "Beschreibung der Funktion QUARTILE_EXC.",
      a: "Kurzbeschreibung der Funktion QUARTILE_EXC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Parameter `daten` der Funktion QUARTILE_EXC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "quartilnummer",
          detail: "Parameter `quartilnummer` der Funktion QUARTILE_EXC.",
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
      d: "Beschreibung der Funktion QUARTILE_INC.",
      a: "Kurzbeschreibung der Funktion QUARTILE_INC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Parameter `daten` der Funktion QUARTILE_INC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "quartilnummer",
          detail: "Parameter `quartilnummer` der Funktion QUARTILE_INC.",
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
      d: "Beschreibung der Funktion POISSON_DIST.",
      a: "Kurzbeschreibung der Funktion POISSON_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion POISSON_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mittelwert",
          detail: "Parameter `mittelwert` der Funktion POISSON_DIST.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Parameter `kumuliert` der Funktion POISSON_DIST.",
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
      d: "Beschreibung der Funktion RSQ.",
      a: "Kurzbeschreibung der Funktion RSQ.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Parameter `daten_y` der Funktion RSQ.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Parameter `daten_x` der Funktion RSQ.",
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
      d: "Beschreibung der Funktion T_DIST.",
      a: "Kurzbeschreibung der Funktion T_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion T_DIST.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade",
          detail: "Parameter `freiheitsgrade` der Funktion T_DIST.",
          example: "30",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Parameter `kumuliert` der Funktion T_DIST.",
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
      d: "Beschreibung der Funktion T_DIST_2T.",
      a: "Kurzbeschreibung der Funktion T_DIST_2T.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion T_DIST_2T.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade",
          detail: "Parameter `freiheitsgrade` der Funktion T_DIST_2T.",
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
      d: "Beschreibung der Funktion T_DIST_RT.",
      a: "Kurzbeschreibung der Funktion T_DIST_RT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion T_DIST_RT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade",
          detail: "Parameter `freiheitsgrade` der Funktion T_DIST_RT.",
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
      d: "Beschreibung der Funktion T_INV.",
      a: "Kurzbeschreibung der Funktion T_INV.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wahrscheinlichkeit",
          detail: "Parameter `wahrscheinlichkeit` der Funktion T_INV.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade",
          detail: "Parameter `freiheitsgrade` der Funktion T_INV.",
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
      d: "Beschreibung der Funktion T_INV_2T.",
      a: "Kurzbeschreibung der Funktion T_INV_2T.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wahrscheinlichkeit",
          detail: "Parameter `wahrscheinlichkeit` der Funktion T_INV_2T.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade",
          detail: "Parameter `freiheitsgrade` der Funktion T_INV_2T.",
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
      d: "Beschreibung der Funktion T_TEST.",
      a: "Kurzbeschreibung der Funktion T_TEST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "bereich1",
          detail: "Parameter `bereich1` der Funktion T_TEST.",
          example: "A1:A4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bereich2",
          detail: "Parameter `bereich2` der Funktion T_TEST.",
          example: "B1:B4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "seiten",
          detail: "Parameter `seiten` der Funktion T_TEST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "typ",
          detail: "Parameter `typ` der Funktion T_TEST.",
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
      d: "Beschreibung der Funktion F_DIST.",
      a: "Kurzbeschreibung der Funktion F_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion F_DIST.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade1",
          detail: "Parameter `freiheitsgrade1` der Funktion F_DIST.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade2",
          detail: "Parameter `freiheitsgrade2` der Funktion F_DIST.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Parameter `kumuliert` der Funktion F_DIST.",
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
      d: "Beschreibung der Funktion F_DIST_RT.",
      a: "Kurzbeschreibung der Funktion F_DIST_RT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` der Funktion F_DIST_RT.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade1",
          detail: "Parameter `freiheitsgrade1` der Funktion F_DIST_RT.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade2",
          detail: "Parameter `freiheitsgrade2` der Funktion F_DIST_RT.",
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
      d: "Beschreibung der Funktion VAR_P.",
      a: "Kurzbeschreibung der Funktion VAR_P.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion VAR_P.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion VAR_P.",
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
      d: "Beschreibung der Funktion VAR_S.",
      a: "Kurzbeschreibung der Funktion VAR_S.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion VAR_S.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion VAR_S.",
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
      d: "Beschreibung der Funktion VARA.",
      a: "Kurzbeschreibung der Funktion VARA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion VARA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion VARA.",
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
      d: "Beschreibung der Funktion VARPA.",
      a: "Kurzbeschreibung der Funktion VARPA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion VARPA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion VARPA.",
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
      d: "Beschreibung der Funktion STEYX.",
      a: "Kurzbeschreibung der Funktion STEYX.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Parameter `daten_y` der Funktion STEYX.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Parameter `daten_x` der Funktion STEYX.",
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
      d: "Beschreibung der Funktion STANDARDIZE.",
      a: "Kurzbeschreibung der Funktion STANDARDIZE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion STANDARDIZE.",
          example: "96",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mittelwert",
          detail: "Parameter `mittelwert` der Funktion STANDARDIZE.",
          example: "80",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standardabweichung",
          detail: "Parameter `standardabweichung` der Funktion STANDARDIZE.",
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
      d: "Beschreibung der Funktion SMALL.",
      a: "Kurzbeschreibung der Funktion SMALL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Parameter `daten` der Funktion SMALL.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "n",
          detail: "Parameter `n` der Funktion SMALL.",
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
      d: "Beschreibung der Funktion SLOPE.",
      a: "Kurzbeschreibung der Funktion SLOPE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Parameter `daten_y` der Funktion SLOPE.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Parameter `daten_x` der Funktion SLOPE.",
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
      d: "Beschreibung der Funktion SKEW.",
      a: "Kurzbeschreibung der Funktion SKEW.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion SKEW.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion SKEW.",
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
      d: "Beschreibung der Funktion SKEW_P.",
      a: "Kurzbeschreibung der Funktion SKEW_P.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion SKEW_P.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion SKEW_P.",
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
      d: "Beschreibung der Funktion VLOOKUP.",
      a: "Kurzbeschreibung der Funktion VLOOKUP.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "suchschlüssel",
          detail: "Parameter `suchschlüssel` der Funktion VLOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bereich",
          detail: "Parameter `bereich` der Funktion VLOOKUP.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "index",
          detail: "Parameter `index` der Funktion VLOOKUP.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ist_sortiert",
          detail: "Parameter `ist_sortiert` der Funktion VLOOKUP.",
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
      d: "Beschreibung der Funktion HLOOKUP.",
      a: "Kurzbeschreibung der Funktion HLOOKUP.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "suchschlüssel",
          detail: "Parameter `suchschlüssel` der Funktion HLOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bereich",
          detail: "Parameter `bereich` der Funktion HLOOKUP.",
          example: "A2:Z6",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "index",
          detail: "Parameter `index` der Funktion HLOOKUP.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ist_sortiert",
          detail: "Parameter `ist_sortiert` der Funktion HLOOKUP.",
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
      d: "Beschreibung der Funktion LOOKUP.",
      a: "Kurzbeschreibung der Funktion LOOKUP.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "suchschlüssel",
          detail: "Parameter `suchschlüssel` der Funktion LOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "suchbereich|ergebnismatrix",
          detail: "Parameter `search_range|search_result_array` der Funktion LOOKUP.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ergebnisbereich",
          detail: "Parameter `ergebnisbereich` der Funktion LOOKUP.",
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
      d: "Beschreibung der Funktion ADDRESS.",
      a: "Kurzbeschreibung der Funktion ADDRESS.",
      m: [
        2,
        5
      ],
      p: [
        {
          name: "zeile",
          detail: "Parameter `zeile` der Funktion ADDRESS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "spalte",
          detail: "Parameter `spalte` der Funktion ADDRESS.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "modus_absolut_relativ",
          detail: "Parameter `modus_absolut_relativ` der Funktion ADDRESS.",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a1_notation_verwenden",
          detail: "Parameter `a1_notation_verwenden` der Funktion ADDRESS.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tabellenblatt",
          detail: "Parameter `tabellenblatt` der Funktion ADDRESS.",
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
      d: "Beschreibung der Funktion INDIRECT.",
      a: "Kurzbeschreibung der Funktion INDIRECT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "zellbezug_als_zeichenfolge",
          detail: "Parameter `zellbezug_als_zeichenfolge` der Funktion INDIRECT.",
          example: "\"Sheet2!\"&B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ist_a1_notation",
          detail: "Parameter `ist_a1_notation` der Funktion INDIRECT.",
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
      d: "Beschreibung der Funktion ROW.",
      a: "Kurzbeschreibung der Funktion ROW.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "zellbezug",
          detail: "Parameter `zellbezug` der Funktion ROW.",
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
      d: "Beschreibung der Funktion ROWS.",
      a: "Kurzbeschreibung der Funktion ROWS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "bereich",
          detail: "Parameter `bereich` der Funktion ROWS.",
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
      d: "Beschreibung der Funktion COLUMN.",
      a: "Kurzbeschreibung der Funktion COLUMN.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "zellbezug",
          detail: "Parameter `zellbezug` der Funktion COLUMN.",
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
      d: "Beschreibung der Funktion COLUMNS.",
      a: "Kurzbeschreibung der Funktion COLUMNS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "bereich",
          detail: "Parameter `bereich` der Funktion COLUMNS.",
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
      d: "Beschreibung der Funktion OFFSET.",
      a: "Kurzbeschreibung der Funktion OFFSET.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "zellbezug",
          detail: "Parameter `zellbezug` der Funktion OFFSET.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "zeilen_verschieben",
          detail: "Parameter `zeilen_verschieben` der Funktion OFFSET.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "spalten_verschieben",
          detail: "Parameter `spalten_verschieben` der Funktion OFFSET.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "höhe",
          detail: "Parameter `höhe` der Funktion OFFSET.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "breite",
          detail: "Parameter `breite` der Funktion OFFSET.",
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
      d: "Beschreibung der Funktion MATCH.",
      a: "Kurzbeschreibung der Funktion MATCH.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "suchschlüssel",
          detail: "Parameter `suchschlüssel` der Funktion MATCH.",
          example: "\"Sunday\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bereich",
          detail: "Parameter `bereich` der Funktion MATCH.",
          example: "A2:A9",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "suchtyp",
          detail: "Parameter `suchtyp` der Funktion MATCH.",
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
      d: "Beschreibung der Funktion INDEX.",
      a: "Kurzbeschreibung der Funktion INDEX.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "bezug",
          detail: "Parameter `bezug` der Funktion INDEX.",
          example: "A1:C20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "zeile",
          detail: "Parameter `zeile` der Funktion INDEX.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "spalte",
          detail: "Parameter `spalte` der Funktion INDEX.",
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
      d: "Beschreibung der Funktion GETPIVOTDATA.",
      a: "Kurzbeschreibung der Funktion GETPIVOTDATA.",
      m: [
        2,
        254
      ],
      p: [
        {
          name: "wertname",
          detail: "Parameter `wertname` der Funktion GETPIVOTDATA.",
          example: "\"SUM of number of units\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zelle_pivot_tabelle",
          detail: "Parameter `zelle_pivot_tabelle` der Funktion GETPIVOTDATA.",
          example: "'Pivot table'!A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ursprüngliche_spalte",
          detail: "Parameter `ursprüngliche_spalte` der Funktion GETPIVOTDATA.",
          example: "\"division\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        },
        {
          name: "element_pivot_tabelle",
          detail: "Parameter `element_pivot_tabelle` der Funktion GETPIVOTDATA.",
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
      d: "Beschreibung der Funktion CHOOSE.",
      a: "Kurzbeschreibung der Funktion CHOOSE.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "index",
          detail: "Parameter `index` der Funktion CHOOSE.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "auswahl1",
          detail: "Parameter `auswahl1` der Funktion CHOOSE.",
          example: "\"A\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "auswahl2",
          detail: "Parameter `auswahl2` der Funktion CHOOSE.",
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
      d: "Beschreibung der Funktion HYPERLINK.",
      a: "Kurzbeschreibung der Funktion HYPERLINK.",
      p: [
        {
          name: "url",
          detail: "Parameter `url` der Funktion HYPERLINK.",
          example: "\"http://www.luckysheet.com/\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "linktext",
          detail: "Parameter `linktext` der Funktion HYPERLINK.",
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
      d: "Beschreibung der Funktion TIME.",
      a: "Kurzbeschreibung der Funktion TIME.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "stunde",
          detail: "Parameter `stunde` der Funktion TIME.",
          example: "11",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "minute",
          detail: "Parameter `minute` der Funktion TIME.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sekunde",
          detail: "Parameter `sekunde` der Funktion TIME.",
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
      d: "Beschreibung der Funktion TIMEVALUE.",
      a: "Kurzbeschreibung der Funktion TIMEVALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "uhrzeitzeichenfolge",
          detail: "Parameter `uhrzeitzeichenfolge` der Funktion TIMEVALUE.",
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
      d: "Beschreibung der Funktion EOMONTH.",
      a: "Kurzbeschreibung der Funktion EOMONTH.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` der Funktion EOMONTH.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "anzahl_monate",
          detail: "Parameter `anzahl_monate` der Funktion EOMONTH.",
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
      d: "Beschreibung der Funktion EDATE.",
      a: "Kurzbeschreibung der Funktion EDATE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` der Funktion EDATE.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "anzahl_monate",
          detail: "Parameter `anzahl_monate` der Funktion EDATE.",
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
      d: "Beschreibung der Funktion SECOND.",
      a: "Kurzbeschreibung der Funktion SECOND.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "uhrzeit",
          detail: "Parameter `uhrzeit` der Funktion SECOND.",
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
      d: "Beschreibung der Funktion MINUTE.",
      a: "Kurzbeschreibung der Funktion MINUTE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "uhrzeit",
          detail: "Parameter `uhrzeit` der Funktion MINUTE.",
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
      d: "Beschreibung der Funktion HOUR.",
      a: "Kurzbeschreibung der Funktion HOUR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "uhrzeit",
          detail: "Parameter `uhrzeit` der Funktion HOUR.",
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
      d: "Beschreibung der Funktion NOW.",
      a: "Kurzbeschreibung der Funktion NOW.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "NETWORKDAYS",
      t: 6,
      d: "Beschreibung der Funktion NETWORKDAYS.",
      a: "Kurzbeschreibung der Funktion NETWORKDAYS.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` der Funktion NETWORKDAYS.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "enddatum",
          detail: "Parameter `enddatum` der Funktion NETWORKDAYS.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feiertage",
          detail: "Parameter `feiertage` der Funktion NETWORKDAYS.",
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
      d: "Beschreibung der Funktion NETWORKDAYS_INTL.",
      a: "Kurzbeschreibung der Funktion NETWORKDAYS_INTL.",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` der Funktion NETWORKDAYS_INTL.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "enddatum",
          detail: "Parameter `enddatum` der Funktion NETWORKDAYS_INTL.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wochenende",
          detail: "Parameter `wochenende` der Funktion NETWORKDAYS_INTL.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feiertage",
          detail: "Parameter `feiertage` der Funktion NETWORKDAYS_INTL.",
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
      d: "Beschreibung der Funktion ISOWEEKNUM.",
      a: "Kurzbeschreibung der Funktion ISOWEEKNUM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "Parameter `datum` der Funktion ISOWEEKNUM.",
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
      d: "Beschreibung der Funktion WEEKNUM.",
      a: "Kurzbeschreibung der Funktion WEEKNUM.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "datum",
          detail: "Parameter `datum` der Funktion WEEKNUM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "typ",
          detail: "Parameter `typ` der Funktion WEEKNUM.",
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
      d: "Beschreibung der Funktion WEEKDAY.",
      a: "Kurzbeschreibung der Funktion WEEKDAY.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "datum",
          detail: "Parameter `datum` der Funktion WEEKDAY.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "typ",
          detail: "Parameter `typ` der Funktion WEEKDAY.",
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
      d: "Beschreibung der Funktion DAY.",
      a: "Kurzbeschreibung der Funktion DAY.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "Parameter `datum` der Funktion DAY.",
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
      d: "Beschreibung der Funktion DAYS.",
      a: "Kurzbeschreibung der Funktion DAYS.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "enddatum",
          detail: "Parameter `enddatum` der Funktion DAYS.",
          example: "2011-3-15",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "startdatum",
          detail: "Parameter `startdatum` der Funktion DAYS.",
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
      d: "Beschreibung der Funktion DAYS360.",
      a: "Kurzbeschreibung der Funktion DAYS360.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` der Funktion DAYS360.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "enddatum",
          detail: "Parameter `enddatum` der Funktion DAYS360.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "methode",
          detail: "Parameter `methode` der Funktion DAYS360.",
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
      d: "Beschreibung der Funktion DATE.",
      a: "Kurzbeschreibung der Funktion DATE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "jahr",
          detail: "Parameter `jahr` der Funktion DATE.",
          example: "1969",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "monat",
          detail: "Parameter `monat` der Funktion DATE.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tag",
          detail: "Parameter `tag` der Funktion DATE.",
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
      d: "Beschreibung der Funktion DATEVALUE.",
      a: "Kurzbeschreibung der Funktion DATEVALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datumszeichenfolge",
          detail: "Parameter `datumszeichenfolge` der Funktion DATEVALUE.",
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
      d: "Beschreibung der Funktion DATEDIF.",
      a: "Kurzbeschreibung der Funktion DATEDIF.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` der Funktion DATEDIF.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "enddatum",
          detail: "Parameter `enddatum` der Funktion DATEDIF.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "einheit",
          detail: "Parameter `einheit` der Funktion DATEDIF.",
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
      d: "Beschreibung der Funktion WORKDAY.",
      a: "Kurzbeschreibung der Funktion WORKDAY.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` der Funktion WORKDAY.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "anzahl_tage",
          detail: "Parameter `anzahl_tage` der Funktion WORKDAY.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "feiertage",
          detail: "Parameter `feiertage` der Funktion WORKDAY.",
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
      d: "Beschreibung der Funktion WORKDAY_INTL.",
      a: "Kurzbeschreibung der Funktion WORKDAY_INTL.",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` der Funktion WORKDAY_INTL.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "anzahl_tage",
          detail: "Parameter `anzahl_tage` der Funktion WORKDAY_INTL.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wochenende",
          detail: "Parameter `wochenende` der Funktion WORKDAY_INTL.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feiertage",
          detail: "Parameter `feiertage` der Funktion WORKDAY_INTL.",
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
      d: "Beschreibung der Funktion YEAR.",
      a: "Kurzbeschreibung der Funktion YEAR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "Parameter `datum` der Funktion YEAR.",
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
      d: "Beschreibung der Funktion YEARFRAC.",
      a: "Kurzbeschreibung der Funktion YEARFRAC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` der Funktion YEARFRAC.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "enddatum",
          detail: "Parameter `enddatum` der Funktion YEARFRAC.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion YEARFRAC.",
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
      d: "Beschreibung der Funktion TODAY.",
      a: "Kurzbeschreibung der Funktion TODAY.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "MONTH",
      t: 6,
      d: "Beschreibung der Funktion MONTH.",
      a: "Kurzbeschreibung der Funktion MONTH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "Parameter `datum` der Funktion MONTH.",
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
      d: "Beschreibung der Funktion EFFECT.",
      a: "Kurzbeschreibung der Funktion EFFECT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "nominalzins",
          detail: "Parameter `nominalzins` der Funktion EFFECT.",
          example: "0.99",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "perioden_pro_jahr",
          detail: "Parameter `perioden_pro_jahr` der Funktion EFFECT.",
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
      d: "Beschreibung der Funktion DOLLAR.",
      a: "Kurzbeschreibung der Funktion DOLLAR.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "zahl",
          detail: "Parameter `zahl` der Funktion DOLLAR.",
          example: "1.2351",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_dezimalstellen",
          detail: "Parameter `anzahl_dezimalstellen` der Funktion DOLLAR.",
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
      d: "Beschreibung der Funktion DOLLARDE.",
      a: "Kurzbeschreibung der Funktion DOLLARDE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "bruchpreis",
          detail: "Parameter `bruchpreis` der Funktion DOLLARDE.",
          example: "100.10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einheit",
          detail: "Parameter `einheit` der Funktion DOLLARDE.",
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
      d: "Beschreibung der Funktion DOLLARFR.",
      a: "Kurzbeschreibung der Funktion DOLLARFR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dezimalpreis",
          detail: "Parameter `dezimalpreis` der Funktion DOLLARFR.",
          example: "100.125",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einheit",
          detail: "Parameter `einheit` der Funktion DOLLARFR.",
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
      d: "Beschreibung der Funktion DB.",
      a: "Kurzbeschreibung der Funktion DB.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "anschaffungskosten",
          detail: "Parameter `anschaffungskosten` der Funktion DB.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwert",
          detail: "Parameter `restwert` der Funktion DB.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nutzungsdauer",
          detail: "Parameter `nutzungsdauer` der Funktion DB.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "Parameter `periode` der Funktion DB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "monat",
          detail: "Parameter `monat` der Funktion DB.",
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
      d: "Beschreibung der Funktion DDB.",
      a: "Kurzbeschreibung der Funktion DDB.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "anschaffungskosten",
          detail: "Parameter `anschaffungskosten` der Funktion DDB.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwert",
          detail: "Parameter `restwert` der Funktion DDB.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nutzungsdauer",
          detail: "Parameter `nutzungsdauer` der Funktion DDB.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "Parameter `periode` der Funktion DDB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "faktor",
          detail: "Parameter `faktor` der Funktion DDB.",
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
      d: "Beschreibung der Funktion RATE.",
      a: "Kurzbeschreibung der Funktion RATE.",
      m: [
        3,
        6
      ],
      p: [
        {
          name: "anzahl_perioden",
          detail: "Parameter `anzahl_perioden` der Funktion RATE.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zahlung_pro_periode",
          detail: "Parameter `zahlung_pro_periode` der Funktion RATE.",
          example: "-100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "barwert",
          detail: "Parameter `barwert` der Funktion RATE.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zukunftswert",
          detail: "Parameter `zukunftswert` der Funktion RATE.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ende_oder_anfang",
          detail: "Parameter `ende_oder_anfang` der Funktion RATE.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zinsschätzung",
          detail: "Parameter `zinsschätzung` der Funktion RATE.",
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
      d: "Beschreibung der Funktion CUMPRINC.",
      a: "Kurzbeschreibung der Funktion CUMPRINC.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion CUMPRINC.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_perioden",
          detail: "Parameter `anzahl_perioden` der Funktion CUMPRINC.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "barwert",
          detail: "Parameter `barwert` der Funktion CUMPRINC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "erste_periode",
          detail: "Parameter `erste_periode` der Funktion CUMPRINC.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "letzte_periode",
          detail: "Parameter `letzte_periode` der Funktion CUMPRINC.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ende_oder_anfang",
          detail: "Parameter `ende_oder_anfang` der Funktion CUMPRINC.",
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
      d: "Beschreibung der Funktion COUPNUM.",
      a: "Kurzbeschreibung der Funktion COUPNUM.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion COUPNUM.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion COUPNUM.",
          example: "02",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "häufigkeit",
          detail: "Parameter `häufigkeit` der Funktion COUPNUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion COUPNUM.",
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
      d: "Beschreibung der Funktion SYD.",
      a: "Kurzbeschreibung der Funktion SYD.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "anschaffungskosten",
          detail: "Parameter `anschaffungskosten` der Funktion SYD.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwert",
          detail: "Parameter `restwert` der Funktion SYD.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nutzungsdauer",
          detail: "Parameter `nutzungsdauer` der Funktion SYD.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "Parameter `periode` der Funktion SYD.",
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
      d: "Beschreibung der Funktion TBILLEQ.",
      a: "Kurzbeschreibung der Funktion TBILLEQ.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion TBILLEQ.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion TBILLEQ.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "diskontsatz",
          detail: "Parameter `diskontsatz` der Funktion TBILLEQ.",
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
      d: "Beschreibung der Funktion TBILLYIELD.",
      a: "Kurzbeschreibung der Funktion TBILLYIELD.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion TBILLYIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion TBILLYIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "preis",
          detail: "Parameter `preis` der Funktion TBILLYIELD.",
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
      d: "Beschreibung der Funktion TBILLPRICE.",
      a: "Kurzbeschreibung der Funktion TBILLPRICE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion TBILLPRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion TBILLPRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "diskontsatz",
          detail: "Parameter `diskontsatz` der Funktion TBILLPRICE.",
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
      d: "Beschreibung der Funktion PV.",
      a: "Kurzbeschreibung der Funktion PV.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion PV.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_perioden",
          detail: "Parameter `anzahl_perioden` der Funktion PV.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zahlungsbetrag",
          detail: "Parameter `zahlungsbetrag` der Funktion PV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zukunftswert",
          detail: "Parameter `zukunftswert` der Funktion PV.",
          example: "D2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ende_oder_anfang",
          detail: "Parameter `ende_oder_anfang` der Funktion PV.",
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
      d: "Beschreibung der Funktion ACCRINT.",
      a: "Kurzbeschreibung der Funktion ACCRINT.",
      m: [
        6,
        8
      ],
      p: [
        {
          name: "ausgabedatum",
          detail: "Parameter `ausgabedatum` der Funktion ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "erste_zahlung",
          detail: "Parameter `erste_zahlung` der Funktion ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion ACCRINT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rückzahlungswert",
          detail: "Parameter `rückzahlungswert` der Funktion ACCRINT.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "häufigkeit",
          detail: "Parameter `häufigkeit` der Funktion ACCRINT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion ACCRINT.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "berechnungsmethode",
          detail: "Parameter `berechnungsmethode` der Funktion ACCRINT.",
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
      d: "Beschreibung der Funktion ACCRINTM.",
      a: "Kurzbeschreibung der Funktion ACCRINTM.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "ausgabedatum",
          detail: "Parameter `ausgabedatum` der Funktion ACCRINTM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion ACCRINTM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion ACCRINTM.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rückzahlungswert",
          detail: "Parameter `rückzahlungswert` der Funktion ACCRINTM.",
          example: "1000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion ACCRINTM.",
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
      d: "Beschreibung der Funktion COUPDAYBS.",
      a: "Kurzbeschreibung der Funktion COUPDAYBS.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion COUPDAYBS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion COUPDAYBS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "häufigkeit",
          detail: "Parameter `häufigkeit` der Funktion COUPDAYBS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion COUPDAYBS.",
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
      d: "Beschreibung der Funktion COUPDAYS.",
      a: "Kurzbeschreibung der Funktion COUPDAYS.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion COUPDAYS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion COUPDAYS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "häufigkeit",
          detail: "Parameter `häufigkeit` der Funktion COUPDAYS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion COUPDAYS.",
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
      d: "Beschreibung der Funktion COUPDAYSNC.",
      a: "Kurzbeschreibung der Funktion COUPDAYSNC.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion COUPDAYSNC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion COUPDAYSNC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "häufigkeit",
          detail: "Parameter `häufigkeit` der Funktion COUPDAYSNC.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion COUPDAYSNC.",
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
      d: "Beschreibung der Funktion COUPNCD.",
      a: "Kurzbeschreibung der Funktion COUPNCD.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion COUPNCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion COUPNCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "häufigkeit",
          detail: "Parameter `häufigkeit` der Funktion COUPNCD.",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion COUPNCD.",
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
      d: "Beschreibung der Funktion COUPPCD.",
      a: "Kurzbeschreibung der Funktion COUPPCD.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion COUPPCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion COUPPCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "häufigkeit",
          detail: "Parameter `häufigkeit` der Funktion COUPPCD.",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion COUPPCD.",
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
      d: "Beschreibung der Funktion FV.",
      a: "Kurzbeschreibung der Funktion FV.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion FV.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_perioden",
          detail: "Parameter `anzahl_perioden` der Funktion FV.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zahlungsbetrag",
          detail: "Parameter `zahlungsbetrag` der Funktion FV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "barwert",
          detail: "Parameter `barwert` der Funktion FV.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ende_oder_anfang",
          detail: "Parameter `ende_oder_anfang` der Funktion FV.",
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
      d: "Beschreibung der Funktion FVSCHEDULE.",
      a: "Kurzbeschreibung der Funktion FVSCHEDULE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "kapital",
          detail: "Parameter `kapital` der Funktion FVSCHEDULE.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zinsplan",
          detail: "Parameter `zinsplan` der Funktion FVSCHEDULE.",
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
      d: "Beschreibung der Funktion YIELD.",
      a: "Kurzbeschreibung der Funktion YIELD.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion YIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion YIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion YIELD.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "preis",
          detail: "Parameter `preis` der Funktion YIELD.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rückzahlungswert",
          detail: "Parameter `rückzahlungswert` der Funktion YIELD.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "häufigkeit",
          detail: "Parameter `häufigkeit` der Funktion YIELD.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion YIELD.",
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
      d: "Beschreibung der Funktion YIELDDISC.",
      a: "Kurzbeschreibung der Funktion YIELDDISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion YIELDDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion YIELDDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "preis",
          detail: "Parameter `preis` der Funktion YIELDDISC.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rückzahlungswert",
          detail: "Parameter `rückzahlungswert` der Funktion YIELDDISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion YIELDDISC.",
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
      d: "Beschreibung der Funktion NOMINAL.",
      a: "Kurzbeschreibung der Funktion NOMINAL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "effektiver_zinssatz",
          detail: "Parameter `effektiver_zinssatz` der Funktion NOMINAL.",
          example: "0.85",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "perioden_pro_jahr",
          detail: "Parameter `perioden_pro_jahr` der Funktion NOMINAL.",
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
      d: "Beschreibung der Funktion XIRR.",
      a: "Kurzbeschreibung der Funktion XIRR.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "zahlungsstrombeträge",
          detail: "Parameter `zahlungsstrombeträge` der Funktion XIRR.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "zahlungsstromdaten",
          detail: "Parameter `zahlungsstromdaten` der Funktion XIRR.",
          example: "C2:C25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "zinsschätzung",
          detail: "Parameter `zinsschätzung` der Funktion XIRR.",
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
      d: "Beschreibung der Funktion MIRR.",
      a: "Kurzbeschreibung der Funktion MIRR.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "zahlungsstrombeträge",
          detail: "Parameter `zahlungsstrombeträge` der Funktion MIRR.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "finanzierungssatz",
          detail: "Parameter `finanzierungssatz` der Funktion MIRR.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "reinvestitionsrendite",
          detail: "Parameter `reinvestitionsrendite` der Funktion MIRR.",
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
      d: "Beschreibung der Funktion IRR.",
      a: "Kurzbeschreibung der Funktion IRR.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "zahlungsstrombeträge",
          detail: "Parameter `zahlungsstrombeträge` der Funktion IRR.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "zinsschätzung",
          detail: "Parameter `zinsschätzung` der Funktion IRR.",
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
      d: "Beschreibung der Funktion NPV.",
      a: "Kurzbeschreibung der Funktion NPV.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "diskontsatz",
          detail: "Parameter `diskontsatz` der Funktion NPV.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zahlungsstrom1",
          detail: "Parameter `zahlungsstrom1` der Funktion NPV.",
          example: "200",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zahlungsstrom2",
          detail: "Parameter `zahlungsstrom2` der Funktion NPV.",
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
      d: "Beschreibung der Funktion XNPV.",
      a: "Kurzbeschreibung der Funktion XNPV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "diskontsatz",
          detail: "Parameter `diskontsatz` der Funktion XNPV.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zahlungsstrombeträge",
          detail: "Parameter `zahlungsstrombeträge` der Funktion XNPV.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "zahlungsstromdaten",
          detail: "Parameter `zahlungsstromdaten` der Funktion XNPV.",
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
      d: "Beschreibung der Funktion CUMIPMT.",
      a: "Kurzbeschreibung der Funktion CUMIPMT.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion CUMIPMT.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_perioden",
          detail: "Parameter `anzahl_perioden` der Funktion CUMIPMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "barwert",
          detail: "Parameter `barwert` der Funktion CUMIPMT.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "erste_periode",
          detail: "Parameter `erste_periode` der Funktion CUMIPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "letzte_periode",
          detail: "Parameter `letzte_periode` der Funktion CUMIPMT.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ende_oder_anfang",
          detail: "Parameter `ende_oder_anfang` der Funktion CUMIPMT.",
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
      d: "Beschreibung der Funktion PMT.",
      a: "Kurzbeschreibung der Funktion PMT.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion PMT.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_perioden",
          detail: "Parameter `anzahl_perioden` der Funktion PMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "barwert",
          detail: "Parameter `barwert` der Funktion PMT.",
          example: " 100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zukunftswert",
          detail: "Parameter `zukunftswert` der Funktion PMT.",
          example: "D2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ende_oder_anfang",
          detail: "Parameter `ende_oder_anfang` der Funktion PMT.",
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
      d: "Beschreibung der Funktion IPMT.",
      a: "Kurzbeschreibung der Funktion IPMT.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion IPMT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "Parameter `periode` der Funktion IPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_perioden",
          detail: "Parameter `anzahl_perioden` der Funktion IPMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "barwert",
          detail: "Parameter `barwert` der Funktion IPMT.",
          example: "80000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zukunftswert",
          detail: "Parameter `zukunftswert` der Funktion IPMT.",
          example: "E2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ende_oder_anfang",
          detail: "Parameter `ende_oder_anfang` der Funktion IPMT.",
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
      d: "Beschreibung der Funktion PPMT.",
      a: "Kurzbeschreibung der Funktion PPMT.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion PPMT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "Parameter `periode` der Funktion PPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_perioden",
          detail: "Parameter `anzahl_perioden` der Funktion PPMT.",
          example: "3*12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "barwert",
          detail: "Parameter `barwert` der Funktion PPMT.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zukunftswert",
          detail: "Parameter `zukunftswert` der Funktion PPMT.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ende_oder_anfang",
          detail: "Parameter `ende_oder_anfang` der Funktion PPMT.",
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
      d: "Beschreibung der Funktion INTRATE.",
      a: "Kurzbeschreibung der Funktion INTRATE.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "kaufdatum",
          detail: "Parameter `kaufdatum` der Funktion INTRATE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "verkaufsdatum",
          detail: "Parameter `verkaufsdatum` der Funktion INTRATE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kaufpreis",
          detail: "Parameter `kaufpreis` der Funktion INTRATE.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "verkaufspreis",
          detail: "Parameter `verkaufspreis` der Funktion INTRATE.",
          example: "101200",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion INTRATE.",
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
      d: "Beschreibung der Funktion PRICE.",
      a: "Kurzbeschreibung der Funktion PRICE.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion PRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion PRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion PRICE.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendite",
          detail: "Parameter `rendite` der Funktion PRICE.",
          example: "0.065",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rückzahlungswert",
          detail: "Parameter `rückzahlungswert` der Funktion PRICE.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "häufigkeit",
          detail: "Parameter `häufigkeit` der Funktion PRICE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion PRICE.",
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
      d: "Beschreibung der Funktion PRICEDISC.",
      a: "Kurzbeschreibung der Funktion PRICEDISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion PRICEDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion PRICEDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "diskontsatz",
          detail: "Parameter `diskontsatz` der Funktion PRICEDISC.",
          example: "0.0525",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rückzahlungswert",
          detail: "Parameter `rückzahlungswert` der Funktion PRICEDISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion PRICEDISC.",
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
      d: "Beschreibung der Funktion PRICEMAT.",
      a: "Kurzbeschreibung der Funktion PRICEMAT.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ausgabedatum",
          detail: "Parameter `ausgabedatum` der Funktion PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion PRICEMAT.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendite",
          detail: "Parameter `rendite` der Funktion PRICEMAT.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion PRICEMAT.",
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
      d: "Beschreibung der Funktion RECEIVED.",
      a: "Kurzbeschreibung der Funktion RECEIVED.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion RECEIVED.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion RECEIVED.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "investition",
          detail: "Parameter `investition` der Funktion RECEIVED.",
          example: "10000000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "diskontsatz",
          detail: "Parameter `diskontsatz` der Funktion RECEIVED.",
          example: "0.0575",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion RECEIVED.",
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
      d: "Beschreibung der Funktion DISC.",
      a: "Kurzbeschreibung der Funktion DISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion DISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion DISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "preis",
          detail: "Parameter `preis` der Funktion DISC.",
          example: "97.975",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rückzahlungswert",
          detail: "Parameter `rückzahlungswert` der Funktion DISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion DISC.",
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
      d: "Beschreibung der Funktion NPER.",
      a: "Kurzbeschreibung der Funktion NPER.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion NPER.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zahlungsbetrag",
          detail: "Parameter `zahlungsbetrag` der Funktion NPER.",
          example: "500",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "barwert",
          detail: "Parameter `barwert` der Funktion NPER.",
          example: "40000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zukunftswert",
          detail: "Parameter `zukunftswert` der Funktion NPER.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ende_oder_anfang",
          detail: "Parameter `ende_oder_anfang` der Funktion NPER.",
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
      d: "Beschreibung der Funktion SLN.",
      a: "Kurzbeschreibung der Funktion SLN.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "anschaffungskosten",
          detail: "Parameter `anschaffungskosten` der Funktion SLN.",
          example: "300000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwert",
          detail: "Parameter `restwert` der Funktion SLN.",
          example: "75000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nutzungsdauer",
          detail: "Parameter `nutzungsdauer` der Funktion SLN.",
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
      d: "Beschreibung der Funktion DURATION.",
      a: "Kurzbeschreibung der Funktion DURATION.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion DURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion DURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion DURATION.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendite",
          detail: "Parameter `rendite` der Funktion DURATION.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "häufigkeit",
          detail: "Parameter `häufigkeit` der Funktion DURATION.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion DURATION.",
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
      d: "Beschreibung der Funktion MDURATION.",
      a: "Kurzbeschreibung der Funktion MDURATION.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Parameter `abrechnungstermin` der Funktion MDURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Parameter `fälligkeit` der Funktion MDURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zinssatz",
          detail: "Parameter `zinssatz` der Funktion MDURATION.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendite",
          detail: "Parameter `rendite` der Funktion MDURATION.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "häufigkeit",
          detail: "Parameter `häufigkeit` der Funktion MDURATION.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Parameter `tageszählmethode` der Funktion MDURATION.",
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
      d: "Beschreibung der Funktion BIN2DEC.",
      a: "Kurzbeschreibung der Funktion BIN2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "vorzeichenbehaftete_binärzahl",
          detail: "Parameter `vorzeichenbehaftete_binärzahl` der Funktion BIN2DEC.",
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
      d: "Beschreibung der Funktion BIN2HEX.",
      a: "Kurzbeschreibung der Funktion BIN2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "vorzeichenbehaftete_binärzahl",
          detail: "Parameter `vorzeichenbehaftete_binärzahl` der Funktion BIN2HEX.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "signifikante_stellen",
          detail: "Parameter `signifikante_stellen` der Funktion BIN2HEX.",
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
      d: "Beschreibung der Funktion BIN2OCT.",
      a: "Kurzbeschreibung der Funktion BIN2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "vorzeichenbehaftete_binärzahl",
          detail: "Parameter `vorzeichenbehaftete_binärzahl` der Funktion BIN2OCT.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "signifikante_stellen",
          detail: "Parameter `signifikante_stellen` der Funktion BIN2OCT.",
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
      d: "Beschreibung der Funktion DEC2BIN.",
      a: "Kurzbeschreibung der Funktion DEC2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "dezimalzahl",
          detail: "Parameter `dezimalzahl` der Funktion DEC2BIN.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "signifikante_stellen",
          detail: "Parameter `signifikante_stellen` der Funktion DEC2BIN.",
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
      d: "Beschreibung der Funktion DEC2HEX.",
      a: "Kurzbeschreibung der Funktion DEC2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "dezimalzahl",
          detail: "Parameter `dezimalzahl` der Funktion DEC2HEX.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "signifikante_stellen",
          detail: "Parameter `signifikante_stellen` der Funktion DEC2HEX.",
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
      d: "Beschreibung der Funktion DEC2OCT.",
      a: "Kurzbeschreibung der Funktion DEC2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "dezimalzahl",
          detail: "Parameter `dezimalzahl` der Funktion DEC2OCT.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "signifikante_stellen",
          detail: "Parameter `signifikante_stellen` der Funktion DEC2OCT.",
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
      d: "Beschreibung der Funktion HEX2BIN.",
      a: "Kurzbeschreibung der Funktion HEX2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "vorzeichenbehaftete_hexadezimalzahl",
          detail: "Parameter `vorzeichenbehaftete_hexadezimalzahl` der Funktion HEX2BIN.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "signifikante_stellen",
          detail: "Parameter `signifikante_stellen` der Funktion HEX2BIN.",
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
      d: "Beschreibung der Funktion HEX2DEC.",
      a: "Kurzbeschreibung der Funktion HEX2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "vorzeichenbehaftete_hexadezimalzahl",
          detail: "Parameter `vorzeichenbehaftete_hexadezimalzahl` der Funktion HEX2DEC.",
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
      d: "Beschreibung der Funktion HEX2OCT.",
      a: "Kurzbeschreibung der Funktion HEX2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "vorzeichenbehaftete_hexadezimalzahl",
          detail: "Parameter `vorzeichenbehaftete_hexadezimalzahl` der Funktion HEX2OCT.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "signifikante_stellen",
          detail: "Parameter `signifikante_stellen` der Funktion HEX2OCT.",
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
      d: "Beschreibung der Funktion OCT2BIN.",
      a: "Kurzbeschreibung der Funktion OCT2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "vorzeichenbehaftete_oktalzahl",
          detail: "Parameter `vorzeichenbehaftete_oktalzahl` der Funktion OCT2BIN.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "signifikante_stellen",
          detail: "Parameter `signifikante_stellen` der Funktion OCT2BIN.",
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
      d: "Beschreibung der Funktion OCT2DEC.",
      a: "Kurzbeschreibung der Funktion OCT2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "vorzeichenbehaftete_oktalzahl",
          detail: "Parameter `vorzeichenbehaftete_oktalzahl` der Funktion OCT2DEC.",
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
      d: "Beschreibung der Funktion OCT2HEX.",
      a: "Kurzbeschreibung der Funktion OCT2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "vorzeichenbehaftete_oktalzahl",
          detail: "Parameter `vorzeichenbehaftete_oktalzahl` der Funktion OCT2HEX.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "signifikante_stellen",
          detail: "Parameter `signifikante_stellen` der Funktion OCT2HEX.",
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
      d: "Beschreibung der Funktion COMPLEX.",
      a: "Kurzbeschreibung der Funktion COMPLEX.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "realteil",
          detail: "Parameter `realteil` der Funktion COMPLEX.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "imaginärteil",
          detail: "Parameter `imaginärteil` der Funktion COMPLEX.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "suffix",
          detail: "Parameter `suffix` der Funktion COMPLEX.",
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
      d: "Beschreibung der Funktion IMREAL.",
      a: "Kurzbeschreibung der Funktion IMREAL.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "komplexe_zahl",
          detail: "Parameter `komplexe_zahl` der Funktion IMREAL.",
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
      d: "Beschreibung der Funktion IMAGINARY.",
      a: "Kurzbeschreibung der Funktion IMAGINARY.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "komplexe_zahl",
          detail: "Parameter `komplexe_zahl` der Funktion IMAGINARY.",
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
      d: "Beschreibung der Funktion IMCONJUGATE.",
      a: "Kurzbeschreibung der Funktion IMCONJUGATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "zahl",
          detail: "Parameter `zahl` der Funktion IMCONJUGATE.",
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
      d: "Beschreibung der Funktion IMABS.",
      a: "Kurzbeschreibung der Funktion IMABS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "zahl",
          detail: "Parameter `zahl` der Funktion IMABS.",
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
      d: "Beschreibung der Funktion DELTA.",
      a: "Kurzbeschreibung der Funktion DELTA.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "zahl1",
          detail: "Parameter `zahl1` der Funktion DELTA.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zahl2",
          detail: "Parameter `zahl2` der Funktion DELTA.",
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
      d: "Beschreibung der Funktion IMSUM.",
      a: "Kurzbeschreibung der Funktion IMSUM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion IMSUM.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion IMSUM.",
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
      d: "Beschreibung der Funktion IMSUB.",
      a: "Kurzbeschreibung der Funktion IMSUB.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "erste_zahl",
          detail: "Parameter `erste_zahl` der Funktion IMSUB.",
          example: "\"6+5i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zweite_zahl",
          detail: "Parameter `zweite_zahl` der Funktion IMSUB.",
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
      d: "Beschreibung der Funktion IMPRODUCT.",
      a: "Kurzbeschreibung der Funktion IMPRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "faktor1",
          detail: "Parameter `faktor1` der Funktion IMPRODUCT.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "faktor2",
          detail: "Parameter `faktor2` der Funktion IMPRODUCT.",
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
      d: "Beschreibung der Funktion IMDIV.",
      a: "Kurzbeschreibung der Funktion IMDIV.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividend",
          detail: "Parameter `dividend` der Funktion IMDIV.",
          example: "\"11+16i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "divisor",
          detail: "Parameter `divisor` der Funktion IMDIV.",
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
      d: "Beschreibung der Funktion NOT.",
      a: "Kurzbeschreibung der Funktion NOT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wahrheitsausdruck",
          detail: "Parameter `wahrheitsausdruck` der Funktion NOT.",
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
      d: "Beschreibung der Funktion TRUE.",
      a: "Kurzbeschreibung der Funktion TRUE.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FALSE",
      t: 10,
      d: "Beschreibung der Funktion FALSE.",
      a: "Kurzbeschreibung der Funktion FALSE.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "AND",
      t: 10,
      d: "Beschreibung der Funktion AND.",
      a: "Kurzbeschreibung der Funktion AND.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wahrheitsausdruck1",
          detail: "Parameter `wahrheitsausdruck1` der Funktion AND.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wahrheitsausdruck2",
          detail: "Parameter `wahrheitsausdruck2` der Funktion AND.",
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
      d: "Beschreibung der Funktion IFERROR.",
      a: "Kurzbeschreibung der Funktion IFERROR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion IFERROR.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert_wenn_fehler",
          detail: "Parameter `wert_wenn_fehler` der Funktion IFERROR.",
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
      d: "Beschreibung der Funktion IF.",
      a: "Kurzbeschreibung der Funktion IF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "wahrheitsausdruck",
          detail: "Parameter `wahrheitsausdruck` der Funktion IF.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert_wenn_wahr",
          detail: "Parameter `wert_wenn_wahr` der Funktion IF.",
          example: "\"A2 is foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert_wenn_falsch",
          detail: "Parameter `wert_wenn_falsch` der Funktion IF.",
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
      d: "Beschreibung der Funktion OR.",
      a: "Kurzbeschreibung der Funktion OR.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wahrheitsausdruck1",
          detail: "Parameter `wahrheitsausdruck1` der Funktion OR.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wahrheitsausdruck2",
          detail: "Parameter `wahrheitsausdruck2` der Funktion OR.",
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
      d: "Beschreibung der Funktion NE.",
      a: "Kurzbeschreibung der Funktion NE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion NE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion NE.",
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
      d: "Beschreibung der Funktion EQ.",
      a: "Kurzbeschreibung der Funktion EQ.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion EQ.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion EQ.",
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
      d: "Beschreibung der Funktion GT.",
      a: "Kurzbeschreibung der Funktion GT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion GT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion GT.",
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
      d: "Beschreibung der Funktion GTE.",
      a: "Kurzbeschreibung der Funktion GTE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion GTE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion GTE.",
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
      d: "Beschreibung der Funktion LT.",
      a: "Kurzbeschreibung der Funktion LT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion LT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion LT.",
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
      d: "Beschreibung der Funktion LTE.",
      a: "Kurzbeschreibung der Funktion LTE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion LTE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion LTE.",
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
      d: "Beschreibung der Funktion ADD.",
      a: "Kurzbeschreibung der Funktion ADD.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion ADD.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion ADD.",
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
      d: "Beschreibung der Funktion MINUS.",
      a: "Kurzbeschreibung der Funktion MINUS.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion MINUS.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion MINUS.",
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
      d: "Beschreibung der Funktion MULTIPLY.",
      a: "Kurzbeschreibung der Funktion MULTIPLY.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "faktor1",
          detail: "Parameter `faktor1` der Funktion MULTIPLY.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "faktor2",
          detail: "Parameter `faktor2` der Funktion MULTIPLY.",
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
      d: "Beschreibung der Funktion DIVIDE.",
      a: "Kurzbeschreibung der Funktion DIVIDE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividend",
          detail: "Parameter `dividend` der Funktion DIVIDE.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "Parameter `divisor` der Funktion DIVIDE.",
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
      d: "Beschreibung der Funktion CONCAT.",
      a: "Kurzbeschreibung der Funktion CONCAT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert1",
          detail: "Parameter `wert1` der Funktion CONCAT.",
          example: "\"de\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Parameter `wert2` der Funktion CONCAT.",
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
      d: "Beschreibung der Funktion UNARY_PERCENT.",
      a: "Kurzbeschreibung der Funktion UNARY_PERCENT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "prozentsatz",
          detail: "Parameter `prozentsatz` der Funktion UNARY_PERCENT.",
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
      d: "Beschreibung der Funktion CONCATENATE.",
      a: "Kurzbeschreibung der Funktion CONCATENATE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "zeichenfolge1",
          detail: "Parameter `zeichenfolge1` der Funktion CONCATENATE.",
          example: "\"Super\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zeichenfolge2",
          detail: "Parameter `zeichenfolge2` der Funktion CONCATENATE.",
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
      d: "Beschreibung der Funktion CODE.",
      a: "Kurzbeschreibung der Funktion CODE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "zeichenfolge",
          detail: "Parameter `zeichenfolge` der Funktion CODE.",
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
      d: "Beschreibung der Funktion CHAR.",
      a: "Kurzbeschreibung der Funktion CHAR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tabellennummer",
          detail: "Parameter `tabellennummer` der Funktion CHAR.",
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
      d: "Beschreibung der Funktion ARABIC.",
      a: "Kurzbeschreibung der Funktion ARABIC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "römische_zahl",
          detail: "Parameter `römische_zahl` der Funktion ARABIC.",
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
      d: "Beschreibung der Funktion ROMAN.",
      a: "Kurzbeschreibung der Funktion ROMAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "zahl",
          detail: "Parameter `zahl` der Funktion ROMAN.",
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
      d: "Beschreibung der Funktion REGEXEXTRACT.",
      a: "Kurzbeschreibung der Funktion REGEXEXTRACT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "text",
          detail: "Parameter `text` der Funktion REGEXEXTRACT.",
          example: "\"Needle in a haystack\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "regulärer_ausdruck",
          detail: "Parameter `regulärer_ausdruck` der Funktion REGEXEXTRACT.",
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
      d: "Beschreibung der Funktion REGEXMATCH.",
      a: "Kurzbeschreibung der Funktion REGEXMATCH.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "text",
          detail: "Parameter `text` der Funktion REGEXMATCH.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "regulärer_ausdruck",
          detail: "Parameter `regulärer_ausdruck` der Funktion REGEXMATCH.",
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
      d: "Beschreibung der Funktion REGEXREPLACE.",
      a: "Kurzbeschreibung der Funktion REGEXREPLACE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "text",
          detail: "Parameter `text` der Funktion REGEXREPLACE.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "regulärer_ausdruck",
          detail: "Parameter `regulärer_ausdruck` der Funktion REGEXREPLACE.",
          example: "\"S.*d\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ersatztext",
          detail: "Parameter `ersatztext` der Funktion REGEXREPLACE.",
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
      d: "Beschreibung der Funktion T.",
      a: "Kurzbeschreibung der Funktion T.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion T.",
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
      d: "Beschreibung der Funktion FIXED.",
      a: "Kurzbeschreibung der Funktion FIXED.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "zahl",
          detail: "Parameter `zahl` der Funktion FIXED.",
          example: "3.141592653",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_dezimalstellen",
          detail: "Parameter `anzahl_dezimalstellen` der Funktion FIXED.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "trennzeichen_unterdrücken",
          detail: "Parameter `trennzeichen_unterdrücken` der Funktion FIXED.",
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
      d: "Beschreibung der Funktion FIND.",
      a: "Kurzbeschreibung der Funktion FIND.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "suchtext",
          detail: "Parameter `suchtext` der Funktion FIND.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "text_zu_durchsuchen",
          detail: "Parameter `text_zu_durchsuchen` der Funktion FIND.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ab_position",
          detail: "Parameter `ab_position` der Funktion FIND.",
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
      d: "Beschreibung der Funktion FINDB.",
      a: "Kurzbeschreibung der Funktion FINDB.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "suchtext",
          detail: "Parameter `suchtext` der Funktion FINDB.",
          example: "\"new\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "text_zu_durchsuchen",
          detail: "Parameter `text_zu_durchsuchen` der Funktion FINDB.",
          example: "\"new year\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ab_position",
          detail: "Parameter `ab_position` der Funktion FINDB.",
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
      d: "Beschreibung der Funktion JOIN.",
      a: "Kurzbeschreibung der Funktion JOIN.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "trennzeichen",
          detail: "Parameter `trennzeichen` der Funktion JOIN.",
          example: "\" and-a \"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert_oder_matrix1",
          detail: "Parameter `wert_oder_matrix1` der Funktion JOIN.",
          example: "{1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert_oder_matrix2",
          detail: "Parameter `wert_oder_matrix2` der Funktion JOIN.",
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
      d: "Beschreibung der Funktion LEFT.",
      a: "Kurzbeschreibung der Funktion LEFT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "zeichenfolge",
          detail: "Parameter `zeichenfolge` der Funktion LEFT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "anzahl_zeichen",
          detail: "Parameter `anzahl_zeichen` der Funktion LEFT.",
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
      d: "Beschreibung der Funktion RIGHT.",
      a: "Kurzbeschreibung der Funktion RIGHT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "zeichenfolge",
          detail: "Parameter `zeichenfolge` der Funktion RIGHT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "anzahl_zeichen",
          detail: "Parameter `anzahl_zeichen` der Funktion RIGHT.",
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
      d: "Beschreibung der Funktion MID.",
      a: "Kurzbeschreibung der Funktion MID.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "zeichenfolge",
          detail: "Parameter `zeichenfolge` der Funktion MID.",
          example: "\"get this\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ab_position",
          detail: "Parameter `ab_position` der Funktion MID.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "extraktionslänge",
          detail: "Parameter `extraktionslänge` der Funktion MID.",
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
      d: "Beschreibung der Funktion LEN.",
      a: "Kurzbeschreibung der Funktion LEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parameter `text` der Funktion LEN.",
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
      d: "Beschreibung der Funktion LENB.",
      a: "Kurzbeschreibung der Funktion LENB.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parameter `text` der Funktion LENB.",
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
      d: "Beschreibung der Funktion LOWER.",
      a: "Kurzbeschreibung der Funktion LOWER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parameter `text` der Funktion LOWER.",
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
      d: "Beschreibung der Funktion UPPER.",
      a: "Kurzbeschreibung der Funktion UPPER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parameter `text` der Funktion UPPER.",
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
      d: "Beschreibung der Funktion EXACT.",
      a: "Kurzbeschreibung der Funktion EXACT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "zeichenfolge1",
          detail: "Parameter `zeichenfolge1` der Funktion EXACT.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zeichenfolge2",
          detail: "Parameter `zeichenfolge2` der Funktion EXACT.",
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
      d: "Beschreibung der Funktion REPLACE.",
      a: "Kurzbeschreibung der Funktion REPLACE.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "text",
          detail: "Parameter `text` der Funktion REPLACE.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "position",
          detail: "Parameter `position` der Funktion REPLACE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "länge",
          detail: "Parameter `länge` der Funktion REPLACE.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "neuer_text",
          detail: "Parameter `neuer_text` der Funktion REPLACE.",
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
      d: "Beschreibung der Funktion REPT.",
      a: "Kurzbeschreibung der Funktion REPT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "text_zu_wiederholen",
          detail: "Parameter `text_zu_wiederholen` der Funktion REPT.",
          example: "\"ha\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "anzahl_wiederholungen",
          detail: "Parameter `anzahl_wiederholungen` der Funktion REPT.",
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
      d: "Beschreibung der Funktion SEARCH.",
      a: "Kurzbeschreibung der Funktion SEARCH.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "suchtext",
          detail: "Parameter `suchtext` der Funktion SEARCH.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "text_zu_durchsuchen",
          detail: "Parameter `text_zu_durchsuchen` der Funktion SEARCH.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ab_position",
          detail: "Parameter `ab_position` der Funktion SEARCH.",
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
      d: "Beschreibung der Funktion SUBSTITUTE.",
      a: "Kurzbeschreibung der Funktion SUBSTITUTE.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "text_zu_durchsuchen",
          detail: "Parameter `text_zu_durchsuchen` der Funktion SUBSTITUTE.",
          example: "\"search for it\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "suchtext",
          detail: "Parameter `suchtext` der Funktion SUBSTITUTE.",
          example: "\"search for\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ersetzen_durch",
          detail: "Parameter `ersetzen_durch` der Funktion SUBSTITUTE.",
          example: "\"Google\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vorkommen_nummer",
          detail: "Parameter `vorkommen_nummer` der Funktion SUBSTITUTE.",
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
      d: "Beschreibung der Funktion CLEAN.",
      a: "Kurzbeschreibung der Funktion CLEAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parameter `text` der Funktion CLEAN.",
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
      d: "Beschreibung der Funktion TEXT.",
      a: "Kurzbeschreibung der Funktion TEXT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "zahl",
          detail: "Parameter `zahl` der Funktion TEXT.",
          example: "1.23",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "format",
          detail: "Parameter `format` der Funktion TEXT.",
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
      d: "Beschreibung der Funktion TRIM.",
      a: "Kurzbeschreibung der Funktion TRIM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parameter `text` der Funktion TRIM.",
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
      d: "Beschreibung der Funktion VALUE.",
      a: "Kurzbeschreibung der Funktion VALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parameter `text` der Funktion VALUE.",
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
      d: "Beschreibung der Funktion PROPER.",
      a: "Kurzbeschreibung der Funktion PROPER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text_zu_großschreiben",
          detail: "Parameter `text_zu_großschreiben` der Funktion PROPER.",
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
      d: "Beschreibung der Funktion CONVERT.",
      a: "Kurzbeschreibung der Funktion CONVERT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion CONVERT.",
          example: "5.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "starteinheit",
          detail: "Parameter `starteinheit` der Funktion CONVERT.",
          example: "\"g\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zieleinheit",
          detail: "Parameter `zieleinheit` der Funktion CONVERT.",
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
      d: "Beschreibung der Funktion SUMX2MY2.",
      a: "Kurzbeschreibung der Funktion SUMX2MY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrix_x",
          detail: "Parameter `matrix_x` der Funktion SUMX2MY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix_y",
          detail: "Parameter `matrix_y` der Funktion SUMX2MY2.",
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
      d: "Beschreibung der Funktion SUMX2PY2.",
      a: "Kurzbeschreibung der Funktion SUMX2PY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrix_x",
          detail: "Parameter `matrix_x` der Funktion SUMX2PY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix_y",
          detail: "Parameter `matrix_y` der Funktion SUMX2PY2.",
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
      d: "Beschreibung der Funktion SUMXMY2.",
      a: "Kurzbeschreibung der Funktion SUMXMY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrix_x",
          detail: "Parameter `matrix_x` der Funktion SUMXMY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix_y",
          detail: "Parameter `matrix_y` der Funktion SUMXMY2.",
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
      d: "Beschreibung der Funktion TRANSPOSE.",
      a: "Kurzbeschreibung der Funktion TRANSPOSE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "matrix_oder_bereich",
          detail: "Parameter `matrix_oder_bereich` der Funktion TRANSPOSE.",
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
      d: "Beschreibung der Funktion TREND.",
      a: "Kurzbeschreibung der Funktion TREND.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "bekannte_daten_y",
          detail: "Parameter `bekannte_daten_y` der Funktion TREND.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bekannte_daten_x",
          detail: "Parameter `bekannte_daten_x` der Funktion TREND.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "neue_daten_x",
          detail: "Parameter `neue_daten_x` der Funktion TREND.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Parameter `b` der Funktion TREND.",
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
      d: "Beschreibung der Funktion FREQUENCY.",
      a: "Kurzbeschreibung der Funktion FREQUENCY.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Parameter `daten` der Funktion FREQUENCY.",
          example: "A2:A40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "klassen",
          detail: "Parameter `klassen` der Funktion FREQUENCY.",
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
      d: "Beschreibung der Funktion GROWTH.",
      a: "Kurzbeschreibung der Funktion GROWTH.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "bekannte_daten_y",
          detail: "Parameter `bekannte_daten_y` der Funktion GROWTH.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bekannte_daten_x",
          detail: "Parameter `bekannte_daten_x` der Funktion GROWTH.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "neue_daten_x",
          detail: "Parameter `neue_daten_x` der Funktion GROWTH.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Parameter `b` der Funktion GROWTH.",
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
      d: "Beschreibung der Funktion LINEST.",
      a: "Kurzbeschreibung der Funktion LINEST.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "bekannte_daten_y",
          detail: "Parameter `bekannte_daten_y` der Funktion LINEST.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bekannte_daten_x",
          detail: "Parameter `bekannte_daten_x` der Funktion LINEST.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b_berechnen",
          detail: "Parameter `b_berechnen` der Funktion LINEST.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ausführlich",
          detail: "Parameter `ausführlich` der Funktion LINEST.",
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
      d: "Beschreibung der Funktion LOGEST.",
      a: "Kurzbeschreibung der Funktion LOGEST.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "bekannte_daten_y",
          detail: "Parameter `bekannte_daten_y` der Funktion LOGEST.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bekannte_daten_x",
          detail: "Parameter `bekannte_daten_x` der Funktion LOGEST.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Parameter `b` der Funktion LOGEST.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ausführlich",
          detail: "Parameter `ausführlich` der Funktion LOGEST.",
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
      d: "Beschreibung der Funktion MDETERM.",
      a: "Kurzbeschreibung der Funktion MDETERM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "quadratische_matrix",
          detail: "Parameter `quadratische_matrix` der Funktion MDETERM.",
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
      d: "Beschreibung der Funktion MINVERSE.",
      a: "Kurzbeschreibung der Funktion MINVERSE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "quadratische_matrix",
          detail: "Parameter `quadratische_matrix` der Funktion MINVERSE.",
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
      d: "Beschreibung der Funktion MMULT.",
      a: "Kurzbeschreibung der Funktion MMULT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrix1",
          detail: "Parameter `matrix1` der Funktion MMULT.",
          example: "A1:B3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix2",
          detail: "Parameter `matrix2` der Funktion MMULT.",
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
      d: "Beschreibung der Funktion SUMPRODUCT.",
      a: "Kurzbeschreibung der Funktion SUMPRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "matrix1",
          detail: "Parameter `matrix1` der Funktion SUMPRODUCT.",
          example: "A2:C5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix2",
          detail: "Parameter `matrix2` der Funktion SUMPRODUCT.",
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
      d: "Beschreibung der Funktion ISFORMULA.",
      a: "Kurzbeschreibung der Funktion ISFORMULA.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "zelle",
          detail: "Parameter `zelle` der Funktion ISFORMULA.",
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
      d: "Beschreibung der Funktion CELL.",
      a: "Kurzbeschreibung der Funktion CELL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "infotyp",
          detail: "Parameter `infotyp` der Funktion CELL.",
          example: "\"type\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bezug",
          detail: "Parameter `bezug` der Funktion CELL.",
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
      d: "Beschreibung der Funktion NA.",
      a: "Kurzbeschreibung der Funktion NA.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "ERROR_TYPE",
      t: 15,
      d: "Beschreibung der Funktion ERROR_TYPE.",
      a: "Kurzbeschreibung der Funktion ERROR_TYPE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "bezug",
          detail: "Parameter `bezug` der Funktion ERROR_TYPE.",
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
      d: "Beschreibung der Funktion ISBLANK.",
      a: "Kurzbeschreibung der Funktion ISBLANK.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ISBLANK.",
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
      d: "Beschreibung der Funktion ISERR.",
      a: "Kurzbeschreibung der Funktion ISERR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ISERR.",
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
      d: "Beschreibung der Funktion ISERROR.",
      a: "Kurzbeschreibung der Funktion ISERROR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ISERROR.",
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
      d: "Beschreibung der Funktion ISLOGICAL.",
      a: "Kurzbeschreibung der Funktion ISLOGICAL.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ISLOGICAL.",
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
      d: "Beschreibung der Funktion ISNA.",
      a: "Kurzbeschreibung der Funktion ISNA.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ISNA.",
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
      d: "Beschreibung der Funktion ISNONTEXT.",
      a: "Kurzbeschreibung der Funktion ISNONTEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ISNONTEXT.",
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
      d: "Beschreibung der Funktion ISNUMBER.",
      a: "Kurzbeschreibung der Funktion ISNUMBER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ISNUMBER.",
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
      d: "Beschreibung der Funktion ISREF.",
      a: "Kurzbeschreibung der Funktion ISREF.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ISREF.",
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
      d: "Beschreibung der Funktion ISTEXT.",
      a: "Kurzbeschreibung der Funktion ISTEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion ISTEXT.",
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
      d: "Beschreibung der Funktion TYPE.",
      a: "Kurzbeschreibung der Funktion TYPE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion TYPE.",
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
      d: "Beschreibung der Funktion N.",
      a: "Kurzbeschreibung der Funktion N.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion N.",
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
      d: "Beschreibung der Funktion TO_DATE.",
      a: "Kurzbeschreibung der Funktion TO_DATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion TO_DATE.",
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
      d: "Beschreibung der Funktion TO_PURE_NUMBER.",
      a: "Kurzbeschreibung der Funktion TO_PURE_NUMBER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion TO_PURE_NUMBER.",
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
      d: "Beschreibung der Funktion TO_TEXT.",
      a: "Kurzbeschreibung der Funktion TO_TEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion TO_TEXT.",
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
      d: "Beschreibung der Funktion TO_DOLLARS.",
      a: "Kurzbeschreibung der Funktion TO_DOLLARS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion TO_DOLLARS.",
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
      d: "Beschreibung der Funktion TO_PERCENT.",
      a: "Kurzbeschreibung der Funktion TO_PERCENT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Parameter `wert` der Funktion TO_PERCENT.",
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
      d: "Beschreibung der Funktion DGET.",
      a: "Kurzbeschreibung der Funktion DGET.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "datenbank",
          detail: "Parameter `datenbank` der Funktion DGET.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "feld",
          detail: "Parameter `feld` der Funktion DGET.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterien",
          detail: "Parameter `kriterien` der Funktion DGET.",
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
      d: "Beschreibung der Funktion DMAX.",
      a: "Kurzbeschreibung der Funktion DMAX.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "datenbank",
          detail: "Parameter `datenbank` der Funktion DMAX.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "feld",
          detail: "Parameter `feld` der Funktion DMAX.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterien",
          detail: "Parameter `kriterien` der Funktion DMAX.",
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
      d: "Beschreibung der Funktion DMIN.",
      a: "Kurzbeschreibung der Funktion DMIN.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "datenbank",
          detail: "Parameter `datenbank` der Funktion DMIN.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "feld",
          detail: "Parameter `feld` der Funktion DMIN.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterien",
          detail: "Parameter `kriterien` der Funktion DMIN.",
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
      d: "Beschreibung der Funktion DAVERAGE.",
      a: "Kurzbeschreibung der Funktion DAVERAGE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "datenbank",
          detail: "Parameter `datenbank` der Funktion DAVERAGE.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "feld",
          detail: "Parameter `feld` der Funktion DAVERAGE.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterien",
          detail: "Parameter `kriterien` der Funktion DAVERAGE.",
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
      d: "Beschreibung der Funktion DCOUNT.",
      a: "Kurzbeschreibung der Funktion DCOUNT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "datenbank",
          detail: "Parameter `datenbank` der Funktion DCOUNT.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "feld",
          detail: "Parameter `feld` der Funktion DCOUNT.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterien",
          detail: "Parameter `kriterien` der Funktion DCOUNT.",
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
      d: "Beschreibung der Funktion DCOUNTA.",
      a: "Kurzbeschreibung der Funktion DCOUNTA.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "datenbank",
          detail: "Parameter `datenbank` der Funktion DCOUNTA.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "feld",
          detail: "Parameter `feld` der Funktion DCOUNTA.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterien",
          detail: "Parameter `kriterien` der Funktion DCOUNTA.",
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
      d: "Beschreibung der Funktion DPRODUCT.",
      a: "Kurzbeschreibung der Funktion DPRODUCT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "datenbank",
          detail: "Parameter `datenbank` der Funktion DPRODUCT.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "feld",
          detail: "Parameter `feld` der Funktion DPRODUCT.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterien",
          detail: "Parameter `kriterien` der Funktion DPRODUCT.",
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
      d: "Beschreibung der Funktion DSTDEV.",
      a: "Kurzbeschreibung der Funktion DSTDEV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "datenbank",
          detail: "Parameter `datenbank` der Funktion DSTDEV.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "feld",
          detail: "Parameter `feld` der Funktion DSTDEV.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterien",
          detail: "Parameter `kriterien` der Funktion DSTDEV.",
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
      d: "Beschreibung der Funktion DSTDEVP.",
      a: "Kurzbeschreibung der Funktion DSTDEVP.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "datenbank",
          detail: "Parameter `datenbank` der Funktion DSTDEVP.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "feld",
          detail: "Parameter `feld` der Funktion DSTDEVP.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterien",
          detail: "Parameter `kriterien` der Funktion DSTDEVP.",
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
      d: "Beschreibung der Funktion DSUM.",
      a: "Kurzbeschreibung der Funktion DSUM.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "datenbank",
          detail: "Parameter `datenbank` der Funktion DSUM.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "feld",
          detail: "Parameter `feld` der Funktion DSUM.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterien",
          detail: "Parameter `kriterien` der Funktion DSUM.",
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
      d: "Beschreibung der Funktion DVAR.",
      a: "Kurzbeschreibung der Funktion DVAR.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "datenbank",
          detail: "Parameter `datenbank` der Funktion DVAR.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "feld",
          detail: "Parameter `feld` der Funktion DVAR.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterien",
          detail: "Parameter `kriterien` der Funktion DVAR.",
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
      d: "Beschreibung der Funktion DVARP.",
      a: "Kurzbeschreibung der Funktion DVARP.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "datenbank",
          detail: "Parameter `datenbank` der Funktion DVARP.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "feld",
          detail: "Parameter `feld` der Funktion DVARP.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterien",
          detail: "Parameter `kriterien` der Funktion DVARP.",
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
      d: "Beschreibung der Funktion AGE_BY_IDCARD.",
      a: "Kurzbeschreibung der Funktion AGE_BY_IDCARD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Ausweisnummer",
          example: "A1",
          detail: "Parameter `Ausweisnummer` der Funktion AGE_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Stichtag",
          example: "\"2017-10-01\"",
          detail: "Parameter `Stichtag` der Funktion AGE_BY_IDCARD.",
          require: "o",
          repeat: "n",
          type: "rangedatetime"
        }
      ]
    },
    {
      n: "SEX_BY_IDCARD",
      t: "3",
      d: "Beschreibung der Funktion SEX_BY_IDCARD.",
      a: "Kurzbeschreibung der Funktion SEX_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Ausweisnummer",
          example: "\"31033519900101XXXX\"",
          detail: "Parameter `Ausweisnummer` der Funktion SEX_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BIRTHDAY_BY_IDCARD",
      t: "3",
      d: "Beschreibung der Funktion BIRTHDAY_BY_IDCARD.",
      a: "Kurzbeschreibung der Funktion BIRTHDAY_BY_IDCARD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Ausweisnummer",
          example: "\"31033519900101XXXX\"",
          detail: "Parameter `Ausweisnummer` der Funktion BIRTHDAY_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Geburtsdatumsformat",
          example: "0",
          detail: "Parameter `Geburtsdatumsformat` der Funktion BIRTHDAY_BY_IDCARD.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PROVINCE_BY_IDCARD",
      t: "3",
      d: "Beschreibung der Funktion PROVINCE_BY_IDCARD.",
      a: "Kurzbeschreibung der Funktion PROVINCE_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Ausweisnummer",
          example: "\"31033519900101XXXX\"",
          detail: "Parameter `Ausweisnummer` der Funktion PROVINCE_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "CITY_BY_IDCARD",
      t: "3",
      d: "Beschreibung der Funktion CITY_BY_IDCARD.",
      a: "Kurzbeschreibung der Funktion CITY_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Ausweisnummer",
          example: "\"31033519900101XXXX\"",
          detail: "Parameter `Ausweisnummer` der Funktion CITY_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STAR_BY_IDCARD",
      t: "3",
      d: "Beschreibung der Funktion STAR_BY_IDCARD.",
      a: "Kurzbeschreibung der Funktion STAR_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Ausweisnummer",
          example: "\"31033519900101XXXX\"",
          detail: "Parameter `Ausweisnummer` der Funktion STAR_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ANIMAL_BY_IDCARD",
      t: "3",
      d: "Beschreibung der Funktion ANIMAL_BY_IDCARD.",
      a: "Kurzbeschreibung der Funktion ANIMAL_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Ausweisnummer",
          example: "\"31033519900101XXXX\"",
          detail: "Parameter `Ausweisnummer` der Funktion ANIMAL_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISIDCARD",
      t: "3",
      d: "Beschreibung der Funktion ISIDCARD.",
      a: "Kurzbeschreibung der Funktion ISIDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Ausweisnummer",
          example: "\"31033519900101XXXX\"",
          detail: "Parameter `Ausweisnummer` der Funktion ISIDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DM_TEXT_CUTWORD",
      t: "4",
      d: "Beschreibung der Funktion DM_TEXT_CUTWORD.",
      a: "Kurzbeschreibung der Funktion DM_TEXT_CUTWORD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Text",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parameter `Text` der Funktion DM_TEXT_CUTWORD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Wortsegmentierungsmodus",
          example: "0",
          detail: "Parameter `Wortsegmentierungsmodus` der Funktion DM_TEXT_CUTWORD.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DM_TEXT_TFIDF",
      t: "4",
      d: "Beschreibung der Funktion DM_TEXT_TFIDF.",
      a: "Kurzbeschreibung der Funktion DM_TEXT_TFIDF.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Text",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parameter `Text` der Funktion DM_TEXT_TFIDF.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Anzahl der Schlüsselwörter",
          example: "20",
          detail: "Parameter `Anzahl der Schlüsselwörter` der Funktion DM_TEXT_TFIDF.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "Korpus",
          example: "1",
          detail: "Parameter `Korpus` der Funktion DM_TEXT_TFIDF.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DM_TEXT_TEXTRANK",
      t: "4",
      d: "Beschreibung der Funktion DM_TEXT_TEXTRANK.",
      a: "Kurzbeschreibung der Funktion DM_TEXT_TEXTRANK.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Text",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parameter `Text` der Funktion DM_TEXT_TEXTRANK.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Anzahl der Schlüsselwörter",
          example: "20",
          detail: "Parameter `Anzahl der Schlüsselwörter` der Funktion DM_TEXT_TEXTRANK.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "Korpus",
          example: "1",
          detail: "Parameter `Korpus` der Funktion DM_TEXT_TEXTRANK.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_CLOSE",
      t: "5",
      d: "Beschreibung der Funktion DATA_CN_STOCK_CLOSE.",
      a: "Kurzbeschreibung der Funktion DATA_CN_STOCK_CLOSE.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Aktienkürzel",
          example: "\"000001\"",
          detail: "Parameter `Aktienkürzel` der Funktion DATA_CN_STOCK_CLOSE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Datum",
          example: "2015-01-08",
          detail: "Parameter `Datum` der Funktion DATA_CN_STOCK_CLOSE.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Art der Kursbereinigung",
          example: "0",
          detail: "Parameter `Art der Kursbereinigung` der Funktion DATA_CN_STOCK_CLOSE.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_OPEN",
      t: "5",
      d: "Beschreibung der Funktion DATA_CN_STOCK_OPEN.",
      a: "Kurzbeschreibung der Funktion DATA_CN_STOCK_OPEN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Aktienkürzel",
          example: "\"000001\"",
          detail: "Parameter `Aktienkürzel` der Funktion DATA_CN_STOCK_OPEN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Datum",
          example: "2015-01-08",
          detail: "Parameter `Datum` der Funktion DATA_CN_STOCK_OPEN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Art der Kursbereinigung",
          example: "0",
          detail: "Parameter `Art der Kursbereinigung` der Funktion DATA_CN_STOCK_OPEN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_MAX",
      t: "5",
      d: "Beschreibung der Funktion DATA_CN_STOCK_MAX.",
      a: "Kurzbeschreibung der Funktion DATA_CN_STOCK_MAX.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Aktienkürzel",
          example: "\"000001\"",
          detail: "Parameter `Aktienkürzel` der Funktion DATA_CN_STOCK_MAX.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Datum",
          example: "2015-01-08",
          detail: "Parameter `Datum` der Funktion DATA_CN_STOCK_MAX.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Art der Kursbereinigung",
          example: "0",
          detail: "Parameter `Art der Kursbereinigung` der Funktion DATA_CN_STOCK_MAX.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_MIN",
      t: "5",
      d: "Beschreibung der Funktion DATA_CN_STOCK_MIN.",
      a: "Kurzbeschreibung der Funktion DATA_CN_STOCK_MIN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Aktienkürzel",
          example: "\"000001\"",
          detail: "Parameter `Aktienkürzel` der Funktion DATA_CN_STOCK_MIN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Datum",
          example: "2015-01-08",
          detail: "Parameter `Datum` der Funktion DATA_CN_STOCK_MIN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Art der Kursbereinigung",
          example: "0",
          detail: "Parameter `Art der Kursbereinigung` der Funktion DATA_CN_STOCK_MIN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_VOLUMN",
      t: "5",
      d: "Beschreibung der Funktion DATA_CN_STOCK_VOLUMN.",
      a: "Kurzbeschreibung der Funktion DATA_CN_STOCK_VOLUMN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Aktienkürzel",
          example: "\"000001\"",
          detail: "Parameter `Aktienkürzel` der Funktion DATA_CN_STOCK_VOLUMN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Datum",
          example: "2015-01-08",
          detail: "Parameter `Datum` der Funktion DATA_CN_STOCK_VOLUMN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Art der Kursbereinigung",
          example: "0",
          detail: "Parameter `Art der Kursbereinigung` der Funktion DATA_CN_STOCK_VOLUMN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_AMOUNT",
      t: "5",
      d: "Beschreibung der Funktion DATA_CN_STOCK_AMOUNT.",
      a: "Kurzbeschreibung der Funktion DATA_CN_STOCK_AMOUNT.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Aktienkürzel",
          example: "\"000001\"",
          detail: "Parameter `Aktienkürzel` der Funktion DATA_CN_STOCK_AMOUNT.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Datum",
          example: "2015-01-08",
          detail: "Parameter `Datum` der Funktion DATA_CN_STOCK_AMOUNT.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Art der Kursbereinigung",
          example: "0",
          detail: "Parameter `Art der Kursbereinigung` der Funktion DATA_CN_STOCK_AMOUNT.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ISDATE",
      t: "6",
      d: "Beschreibung der Funktion ISDATE.",
      a: "Kurzbeschreibung der Funktion ISDATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          example: "\"1990-01-01\"",
          detail: "Parameter `wert` der Funktion ISDATE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LINESPLINES",
      t: "3",
      d: "Beschreibung der Funktion LINESPLINES.",
      a: "Kurzbeschreibung der Funktion LINESPLINES.",
      m: [
        1,
        8
      ],
      p: [
        {
          name: "Bereich",
          example: "A1:A20",
          detail: "Parameter `Bereich` der Funktion LINESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Linienfarbe",
          example: "#2ec7c9",
          detail: "Parameter `Linienfarbe` der Funktion LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Linienstärke",
          example: "1",
          detail: "Parameter `Linienstärke` der Funktion LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Hilfslinie",
          example: "avg",
          detail: "Parameter `Hilfslinie` der Funktion LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Farbe der Hilfslinie",
          example: "#000",
          detail: "Parameter `Farbe der Hilfslinie` der Funktion LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximalmarkierung",
          example: "#fc5c5c",
          detail: "Parameter `Maximalmarkierung` der Funktion LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Minimalmarkierung",
          example: "#fc5c5c",
          detail: "Parameter `Minimalmarkierung` der Funktion LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Markierungsgröße",
          example: "1.5",
          detail: "Parameter `Markierungsgröße` der Funktion LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "AREASPLINES",
      t: "3",
      d: "Beschreibung der Funktion AREASPLINES.",
      a: "Kurzbeschreibung der Funktion AREASPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Bereich",
          example: "A1:A20",
          detail: "Parameter `Bereich` der Funktion AREASPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Linienfarbe",
          example: "#2ec7c9",
          detail: "Parameter `Linienfarbe` der Funktion AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Füllfarbe",
          example: "#CCF3F4",
          detail: "Parameter `Füllfarbe` der Funktion AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Linienstärke",
          example: "1",
          detail: "Parameter `Linienstärke` der Funktion AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Hilfslinie",
          example: "avg",
          detail: "Parameter `Hilfslinie` der Funktion AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Farbe der Hilfslinie",
          example: "#000",
          detail: "Parameter `Farbe der Hilfslinie` der Funktion AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COLUMNSPLINES",
      t: "3",
      d: "Beschreibung der Funktion COLUMNSPLINES.",
      a: "Kurzbeschreibung der Funktion COLUMNSPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Bereich",
          example: "A1:A20",
          detail: "Parameter `Bereich` der Funktion COLUMNSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Balkenabstand",
          example: "1",
          detail: "Parameter `Balkenabstand` der Funktion COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Balkenfarbe",
          example: "#fc5c5c",
          detail: "Parameter `Balkenfarbe` der Funktion COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Farbe negativer Balken",
          example: "#97b552",
          detail: "Parameter `Farbe negativer Balken` der Funktion COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximum",
          example: "100",
          detail: "Parameter `Maximum` der Funktion COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Farbpalette",
          example: "#97b552",
          detail: "Parameter `Farbpalette` der Funktion COLUMNSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STACKCOLUMNSPLINES",
      t: "3",
      d: "Beschreibung der Funktion STACKCOLUMNSPLINES.",
      a: "Kurzbeschreibung der Funktion STACKCOLUMNSPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Bereich",
          example: "A1:A20",
          detail: "Parameter `Bereich` der Funktion STACKCOLUMNSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Nach Spalte stapeln",
          example: "1",
          detail: "Parameter `Nach Spalte stapeln` der Funktion STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Balkenabstand",
          example: "1",
          detail: "Parameter `Balkenabstand` der Funktion STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximum",
          example: "100",
          detail: "Parameter `Maximum` der Funktion STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Farbpalette",
          example: "#97b552",
          detail: "Parameter `Farbpalette` der Funktion STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BARSPLINES",
      t: "3",
      d: "Beschreibung der Funktion BARSPLINES.",
      a: "Kurzbeschreibung der Funktion BARSPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Bereich",
          example: "A1:A20",
          detail: "Parameter `Bereich` der Funktion BARSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Balkenabstand",
          example: "1",
          detail: "Parameter `Balkenabstand` der Funktion BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Balkenfarbe",
          example: "#fc5c5c",
          detail: "Parameter `Balkenfarbe` der Funktion BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Farbe negativer Balken",
          example: "#97b552",
          detail: "Parameter `Farbe negativer Balken` der Funktion BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximum",
          example: "100",
          detail: "Parameter `Maximum` der Funktion BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Farbpalette",
          example: "#97b552",
          detail: "Parameter `Farbpalette` der Funktion BARSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STACKBARSPLINES",
      t: "3",
      d: "Beschreibung der Funktion STACKBARSPLINES.",
      a: "Kurzbeschreibung der Funktion STACKBARSPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Bereich",
          example: "A1:A20",
          detail: "Parameter `Bereich` der Funktion STACKBARSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Nach Spalte stapeln",
          example: "1",
          detail: "Parameter `Nach Spalte stapeln` der Funktion STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Balkenabstand",
          example: "1",
          detail: "Parameter `Balkenabstand` der Funktion STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximum",
          example: "100",
          detail: "Parameter `Maximum` der Funktion STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Farbpalette",
          example: "#97b552",
          detail: "Parameter `Farbpalette` der Funktion STACKBARSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DISCRETESPLINES",
      t: "3",
      d: "Beschreibung der Funktion DISCRETESPLINES.",
      a: "Kurzbeschreibung der Funktion DISCRETESPLINES.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "Bereich",
          example: "A1:A20",
          detail: "Parameter `Bereich` der Funktion DISCRETESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Segmentierungsschwelle",
          example: "1",
          detail: "Parameter `Segmentierungsschwelle` der Funktion DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Farbe über Schwellenwert",
          example: "#2ec7c9",
          detail: "Parameter `Farbe über Schwellenwert` der Funktion DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Farbe unter Schwellenwert",
          example: "#fc5c5c",
          detail: "Parameter `Farbe unter Schwellenwert` der Funktion DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TRISTATESPLINES",
      t: "3",
      d: "Beschreibung der Funktion TRISTATESPLINES.",
      a: "Kurzbeschreibung der Funktion TRISTATESPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Bereich",
          example: "A1:A20",
          detail: "Parameter `Bereich` der Funktion TRISTATESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Balkenabstand",
          example: "1",
          detail: "Parameter `Balkenabstand` der Funktion TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Balkenfarbe",
          example: "#fc5c5c",
          detail: "Parameter `Balkenfarbe` der Funktion TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Farbe negativer Balken",
          example: "#97b552",
          detail: "Parameter `Farbe negativer Balken` der Funktion TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Farbe der Nullwertbalken",
          example: "#999",
          detail: "Parameter `Farbe der Nullwertbalken` der Funktion TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Farbpalette",
          example: "#97b552",
          detail: "Parameter `Farbpalette` der Funktion TRISTATESPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PIESPLINES",
      t: "3",
      d: "Beschreibung der Funktion PIESPLINES.",
      a: "Kurzbeschreibung der Funktion PIESPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Bereich",
          example: "A1:A20",
          detail: "Parameter `Bereich` der Funktion PIESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Drehwinkel",
          example: "0",
          detail: "Parameter `Drehwinkel` der Funktion PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rahmen",
          example: "0",
          detail: "Parameter `rahmen` der Funktion PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Rahmenfarbe",
          example: "#000",
          detail: "Parameter `Rahmenfarbe` der Funktion PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Farbpalette",
          example: "#97b552",
          detail: "Parameter `Farbpalette` der Funktion PIESPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BOXSPLINES",
      t: "3",
      d: "Beschreibung der Funktion BOXSPLINES.",
      a: "Kurzbeschreibung der Funktion BOXSPLINES.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "Bereich",
          example: "A1:A20",
          detail: "Parameter `Bereich` der Funktion BOXSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Ausreißerquote",
          example: "1.5",
          detail: "Parameter `Ausreißerquote` der Funktion BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Zielwert",
          example: "10",
          detail: "Parameter `Zielwert` der Funktion BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Punktgröße",
          example: "1.5",
          detail: "Parameter `Punktgröße` der Funktion BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BULLETSPLINES",
      t: "3",
      d: "Beschreibung der Funktion BULLETSPLINES.",
      a: "Kurzbeschreibung der Funktion BULLETSPLINES.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "Ziel",
          example: "10",
          detail: "Parameter `Ziel` der Funktion BULLETSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "erreicht",
          example: "8",
          detail: "Parameter `erreicht` der Funktion BULLETSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Vergleichswert",
          example: "12",
          detail: "Parameter `Vergleichswert` der Funktion BULLETSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COMPOSESPLINES",
      t: "3",
      d: "Beschreibung der Funktion COMPOSESPLINES.",
      a: "Kurzbeschreibung der Funktion COMPOSESPLINES.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "konfiguration",
          example: "PIESPLINES(A1:A20)",
          detail: "Parameter `konfiguration` der Funktion COMPOSESPLINES.",
          require: "m",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "SORT",
      t: "14",
      d: "Beschreibung der Funktion SORT.",
      a: "Kurzbeschreibung der Funktion SORT.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "bereich",
          detail: "Parameter `bereich` der Funktion SORT.",
          example: "A2:A17",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sortierspalte",
          detail: "Parameter `sortierspalte` der Funktion SORT.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ist_aufsteigend",
          detail: "Parameter `ist_aufsteigend` der Funktion SORT.",
          example: "-1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sortierspalte2",
          detail: "Parameter `sortierspalte2` der Funktion SORT.",
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
      d: "Beschreibung der Funktion FILTER.",
      a: "Kurzbeschreibung der Funktion FILTER.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "bereich",
          detail: "Parameter `bereich` der Funktion FILTER.",
          example: "A5:D20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "bedingung1",
          detail: "Parameter `bedingung1` der Funktion FILTER.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "bedingung2",
          detail: "Parameter `bedingung2` der Funktion FILTER.",
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
      d: "Beschreibung der Funktion UNIQUE.",
      a: "Kurzbeschreibung der Funktion UNIQUE.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "bereich",
          detail: "Parameter `bereich` der Funktion UNIQUE.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nach_spalte",
          detail: "Parameter `nach_spalte` der Funktion UNIQUE.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "nur_einmal",
          detail: "Parameter `nur_einmal` der Funktion UNIQUE.",
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
      d: "Beschreibung der Funktion RANDARRAY.",
      a: "Kurzbeschreibung der Funktion RANDARRAY.",
      m: [
        0,
        2
      ],
      p: [
        {
          name: "zeilen",
          detail: "Parameter `zeilen` der Funktion RANDARRAY.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "spalten",
          detail: "Parameter `spalten` der Funktion RANDARRAY.",
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
      d: "Beschreibung der Funktion SEQUENCE.",
      a: "Kurzbeschreibung der Funktion SEQUENCE.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "zeilen",
          detail: "Parameter `zeilen` der Funktion SEQUENCE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "spalten",
          detail: "Parameter `spalten` der Funktion SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "start",
          detail: "Parameter `start` der Funktion SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "schritt",
          detail: "Parameter `schritt` der Funktion SEQUENCE.",
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
      d: "Beschreibung der Funktion EVALUATE.",
      a: "Kurzbeschreibung der Funktion EVALUATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ausdruck",
          example: "\"A1+5*2^2\"",
          detail: "Parameter `ausdruck` der Funktion EVALUATE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "REMOTE",
      t: "5",
      d: "Beschreibung der Funktion REMOTE.",
      a: "Kurzbeschreibung der Funktion REMOTE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "externer_ausdruck",
          example: "SUM(A1:A10000000)",
          detail: "Parameter `externer_ausdruck` der Funktion REMOTE.",
          require: "m",
          repeat: "n",
          type: "string"
        }
      ]
    }
  ],
  toolbar: {  "toolbar": "Symbolleiste",
  "clear-format": "Format löschen",
  "format-painter": "Format übertragen",
  "currency-format": "Als Währung formatieren",
  "percentage-format": "Als Prozent formatieren",
  "number-decrease": "Dezimalstellen verringern",
  "number-increase": "Dezimalstellen erhöhen",
  "border-all": "Alle Rahmen",
  "merge-all": "Alle Zellen verbinden",
  "format": "Format",
  "font-size": "Schriftgröße",
  "strike-through": "Durchgestrichen (Alt+Umschalt+5)",
  "font-color": "Schriftfarbe",
  "align-left": "Linksbündig",
  "align-center": "Horizontal zentriert",
  "align-right": "Rechtsbündig",
  "align-top": "Oben ausgerichtet",
  "align-mid": "Vertikal zentriert",
  "align-bottom": "Unten ausgerichtet",
  "background": "Füllfarbe",
  "borderStyle": "Rahmenstil",
  "merge-cell": "Zellen verbinden",
  "chooseMergeType": "Verbindungstyp wählen",
  "horizontalAlign": "Horizontale Ausrichtung",
  "verticalAlign": "Vertikale Ausrichtung",
  "alignment": "Ausrichtung",
  "textWrap": "Textumbruch",
  "textRotate": "Textdrehung",
  "freeze": "Fixieren",
  "sort": "Sortieren",
  "filter": "Filtern",
  "formula-sum": "SUMME",
  "autoSum": "Autosumme",
  "moreFunction": "Weitere Funktionen",
  "comment": "Kommentar",
  "insertImage": "Bild einfügen",
  "insertLink": "Link einfügen",
  "clearText": "Farbe löschen",
  "noColorSelectedText": "Keine Farbe ausgewählt",
  "toolMore": "Mehr",
  "toolLess": "Weniger",
  "toolClose": "Schließen",
  "toolMoreTip": "Weitere Funktionen",
  "moreOptions": "Weitere Optionen",
  "cellFormat": "Zellformat konfigurieren",

    undo: "Rückgängig",
    redo: "Wiederholen",
    paintFormat: "Format übertragen",
    currencyFormat: "Währungsformat",
    percentageFormat: "Prozentformat",
    numberDecrease: "Dezimalstellen verringern",
    numberIncrease: "Dezimalstellen erhöhen",
    moreFormats: "Weitere Formate",
    font: "Schriftart",
    fontSize: "Schriftgröße",
    bold: "Fett",
    italic: "Kursiv",
    strikethrough: "Durchgestrichen",
    underline: "Unterstrichen",
    textColor: "Textfarbe",
    chooseColor: "Farbe auswählen",
    resetColor: "Zurücksetzen",
    customColor: "Benutzerdefiniert",
    alternatingColors: "Abwechselnde Farben",
    confirmColor: "Bestätigen",
    cancelColor: "Abbrechen",
    collapse: "Einklappen",
    fillColor: "Füllfarbe",
    border: "Rahmen",
    mergeCell: "Zellen verbinden",
    horizontalAlignMode: "Horizontal ausrichten",
    verticalAlignMode: "Vertikal ausrichten",
    textWrapMode: "Textumbruch",
    textRotateMode: "Textdrehung",
    image: "Bild",
    link: "Link",
    chart: "Diagramm",
    postil: "Kommentar",
    pivotTable: "Pivot-Tabelle",
    function: "Funktion",
    frozenMode: "Fixieren",
    sortAndFilter: "Sortieren und filtern",
    conditionalFormat: "Bedingte Formatierung",
    dataVerification: "Datenüberprüfung",
    splitColumn: "Text in Spalten",
    screenshot: "Screenshot",
    findAndReplace: "Suchen und ersetzen",
    protection: "Schutz",
    print: "Drucken",
    edit: "Bearbeiten",
    save: "Speichern",
    preview: "Vorschau",
    clear: "Löschen",
    formatPainter: "Format übertragen",
    more: "Mehr",
    formula: "Formel",
    insert: "Einfügen",
    delete: "Löschen",
    hide: "Ausblenden",
    show: "Einblenden",
    data: "Daten",
    view: "Ansicht",
    share: "Teilen",
    history: "Verlauf",
    copy: "Kopieren",
    paste: "Einfügen",
    cut: "Ausschneiden",
    import: "Importieren",
    export: "Exportieren",
    download: "Herunterladen",
    upload: "Hochladen",
    refresh: "Aktualisieren",
    zoom: "Zoom",
    help: "Hilfe",
    close: "Schließen",
    settings: "Einstellungen",
    fullscreen: "Vollbild",
    exitFullscreen: "Vollbild verlassen",
    gridlines: "Gitternetzlinien",
    lock: "Sperren",
    unlock: "Entsperren"
  },
  alternatingColors: {
    applyRange: "Apply to range",
    selectRange: "Datenbereich auswählen",
    header: "Header",
    footer: "Footer",
    errorInfo: "Dieser Vorgang kann nicht auf mehrere Auswahlbereiche angewendet werden. Bitte wählen Sie einen einzelnen Bereich aus und versuchen Sie es erneut.",
    textTitle: "Format style",
    custom: "CUSTOM",
    close: "Schließen",
    selectionTextColor: "Klicken, um die Textfarbe auszuwählen",
    selectionCellColor: "Klicken, um die Zellfarbe auszuwählen",
    removeColor: "Abwechselnde Farben entfernen",
    colorShow: "Farbe",
    currentColor: "Current",
    tipSelectRange: "Bitte wählen Sie den Bereich für abwechselnde Farben aus",
    errorNoRange: "Es ist kein Bereich ausgewählt",
    errorExistColors: "Abwechselnde Farben sind bereits vorhanden und können nicht bearbeitet werden"
  },
  button: {
    confirm: "OK",
    cancel: "Abbrechen",
    close: "Schließen",
    update: "Aktualisieren",
    delete: "Löschen",
    insert: "Einfügen",
    prevPage: "Vorherige",
    nextPage: "Nächste",
    total: "Gesamt:",
    edit: "Bearbeiten",
    add: "Hinzufügen",
    clear: "Löschen",
    save: "Speichern",
    ok: "OK",
    yes: "Ja",
    no: "Nein",
    reset: "Zurücksetzen",
    apply: "Anwenden",
    search: "Suchen",
    replace: "Ersetzen",
    done: "Fertig"
  },
  paint: {  "tipNotMulti": "Diese Aktion ist bei mehreren ausgewählten Bereichen nicht möglich",

    start: "Format übertragen starten",
    end: "Format übertragen beenden",
    tipSelectRange: "Bitte wählen Sie den Bereich aus, auf den das Format angewendet werden soll"
  },
  format: {  "tipDecimalPlaces": "Die Anzahl der Dezimalstellen muss zwischen 0 und 9 liegen!",
  "select": "Auswählen",
  "format": "Format",

    moreCurrency: "Weitere Währungsformate",
    moreDateTime: "Weitere Datums- und Uhrzeitformate",
    moreNumber: "Weitere Zahlenformate",
    titleCurrency: "Währungsformate",
    decimalPlaces: "Dezimalstellen",
    titleDateTime: "Datums- und Uhrzeitformate",
    titleNumber: "Zahlenformate",
    titleNumberFormat: "Zahlenformat",
    formatError: "Fehler beim Formatieren",
    customFormat: "Benutzerdefiniertes Format",
    preview: "Vorschau",
    tips: "Tipp",
    example: "Beispiel",
    type: "Typ",
    symbol: "Symbol",
    currency: "Währung",
    date: "Datum",
    time: "Uhrzeit",
    number: "Zahl",
    percent: "Prozent",
    text: "Text",
    automatic: "Automatisch",
    accounting: "Buchhaltung",
    scientific: "Wissenschaftlich",
    fraction: "Bruch",
    duration: "Dauer",
    normal: "Normal",
    plainText: "Nur Text"
  },
  info: {  "noName": "Unbenannte Tabelle",
  "add": "Hinzufügen",
  "addLast": "weitere Zeilen unten",
  "backTop": "Nach oben",
  "pageInfo": "Gesamt ${total}, ${totalPage} Seiten, aktuell ${currentPage}",
  "nextPage": "Weiter",
  "tipInputNumber": "Bitte geben Sie eine Zahl ein",
  "tipInputNumberLimit": "Der Erhöhungsbereich ist auf 1-100 begrenzt",
  "tipRowHeightLimit": "Die Zeilenhöhe muss zwischen 0 und 545 liegen",
  "tipColumnWidthLimit": "Die Spaltenbreite muss zwischen 0 und 2038 liegen",
  "pageInfoFull": "Gesamt ${total}, ${totalPage} Seiten, alle Daten angezeigt",
  "sheetIsFocused": "Tabellenfokus-Sperre aktiviert.",
  "sheetNotFocused": "Tabellenfokus-Sperre deaktiviert.",
  "sheetSrIntro": "Um den Tabellenfokus für die Navigation in der Symbolleiste umzuschalten, verwenden Sie Umschalt, Strg, F.",
  "currentCellInput": "Eingabe der aktuellen Zelle",
  "newSheet": "Neue Tabelle",
  "sheetOptions": "Tabellenoptionen",
  "Dropdown": "Dropdown",
  "zoomIn": "Vergrößern",
  "zoomOut": "Verkleinern",
  "toggleSheetFocusShortcut": "Tabellenfokus-Sperre umschalten: Umschalt, Strg, F.",
  "selectRangeShortcut": "Bereich auswählen: Umschalt, Pfeiltasten.",
  "autoFillDownShortcut": "Auswahl ab erster Zelle nach unten automatisch ausfüllen: Strg oder Cmd, D.",
  "autoFillRightShortcut": "Auswahl ab erster Zelle nach rechts automatisch ausfüllen: Strg oder Cmd, R.",
  "boldTextShortcut": "Text fett formatieren: Strg oder Cmd, B.",
  "copyShortcut": "Kopieren: Strg oder Cmd, C.",
  "pasteShortcut": "Einfügen: Strg oder Cmd, V.",
  "undoShortcut": "Rückgängig: Strg oder Cmd, Z.",
  "redoShortcut": "Wiederholen: Strg oder Cmd, Umschalt, Z.",
  "deleteCellContentShortcut": "Zellinhalt löschen: Entf oder Rücktaste.",
  "confirmCellEditShortcut": "Zellbearbeitung bestätigen und nach unten wechseln: Eingabetaste.",
  "moveRightShortcut": "Nach rechts wechseln: Tab.",
  "moveLeftShortcut": "Nach links wechseln: Umschalt, Tab.",
  "shortcuts": "Tastenkombinationen",

    detailUpdate: "Aktualisierung abgeschlossen",
    detailSave: "Speichern abgeschlossen",
    row: "Zeile",
    column: "Spalte",
    loading: "Wird geladen...",
    copy: "Kopiert",
    return: "Zurück",
    rename: "Umbenennen",
    tips: "Tipps",
    noData: "Keine Daten",
    wait: "Bitte warten...",
    success: "Erfolgreich",
    error: "Fehler",
    warning: "Warnung"
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
    return [{
      text: "Automatisch",
      value: "General",
      example: ""
    }, {
      text: "Nur Text",
      value: "@",
      example: ""
    }, {
      text: "",
      value: "split",
      example: ""
    }, {
      text: "Zahl",
      value: "##0.00",
      example: "1000.12"
    }, {
      text: "Prozent",
      value: "#0.00%",
      example: "12.21%"
    }, {
      text: "Wissenschaftlich",
      value: "0.00E+00",
      example: "1.01E+5"
    }, {
      text: "",
      value: "split",
      example: ""
    }, {
      text: "Buchhaltung",
      value: "".concat(currency, "(0.00)"),
      example: "".concat(currency, "(1200.09)")
    }, {
      text: "Währung",
      value: "".concat(currency, "0.00"),
      example: "".concat(currency, "1200.09")
    }, {
      text: "",
      value: "split",
      example: ""
    }, {
      text: "Datum",
      value: "yyyy-MM-dd",
      example: "2017-11-29"
    }, {
      text: "Uhrzeit",
      value: "hh:mm AM/PM",
      example: "3:00 PM"
    }, {
      text: "Uhrzeit 24h",
      value: "hh:mm",
      example: "15:00"
    }, {
      text: "Datum und Uhrzeit",
      value: "yyyy-MM-dd hh:mm AM/PM",
      example: "2017-11-29 3:00 PM"
    }, {
      text: "Datum und Uhrzeit 24h",
      value: "yyyy-MM-dd hh:mm",
      example: "2017-11-29 15:00"
    }, {
      text: "",
      value: "split",
      example: ""
    }, {
      text: "Benutzerdefinierte Formate",
      value: "fmtOtherSelf",
      example: "",
      icon: "rightArrow"
    }];
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
    MicrosoftYaHei: "Microsoft YaHei",
    SimSun: "SimSun",
    SimHei: "SimHei",
    KaiTi: "KaiTi",
    NSimSun: "NSimSun",
    FangSong: "FangSong",
    Arial: "Arial",
    TimesNewRoman: "Times New Roman",
    Tahoma: "Tahoma",
    Verdana: "Verdana",
    sans: "Sans",
    serif: "Serif",
    mono: "Mono"
  },
  fontarray: [
    "Arial",
    "Times New Roman",
    "Tahoma",
    "Verdana"
  ],
  fontjson: {  "helvetica": 4,
  "trebuchet ms": 5,
  "georgia": 6,
  "garamond": 7,
  "courier new": 8,
  "lucida console": 9,
  "impact": 10,
  "comic sans ms": 11,
  "segoe ui": 12,

    arial: 0,
    "times new roman": 1,
    tahoma: 2,
    verdana: 3
  },
  border: {  "borderSlash": "Diagonale Bordüre",
  "borderDefault": "Standard",
  "borderStyle": "Rahmenstil",

    borderTop: "Oberer Rahmen",
    borderBottom: "Unterer Rahmen",
    borderLeft: "Linker Rahmen",
    borderRight: "Rechter Rahmen",
    borderNone: "Kein Rahmen",
    borderAll: "Alle Rahmen",
    borderOutside: "Außenrahmen",
    borderInside: "Innenrahmen",
    borderHorizontal: "Innere horizontale Rahmen",
    borderVertical: "Innere vertikale Rahmen",
    borderColor: "Rahmenfarbe",
    borderSize: "Rahmenstärke",
    borderType: "Rahmenart",
    borderDiagonal: "Diagonalrahmen",
    borderDiagonalDown: "Diagonal nach unten",
    borderDiagonalUp: "Diagonal nach oben",
    borderDouble: "Doppelte Linie",
    borderDotted: "Gepunktete Linie",
    borderDashed: "Gestrichelte Linie",
    borderSolid: "Durchgezogene Linie",
    borderMedium: "Mittlere Linie",
    borderThick: "Dicke Linie",
    borderThin: "Dünne Linie",
    borderHair: "Haarlinie"
  },
  merge: {
    mergeAll: "Alle verbinden",
    mergeV: "Vertikal verbinden",
    mergeH: "Horizontal verbinden",
    mergeCancel: "Verbindung aufheben",
    overlappingError: "Verbundene Bereiche dürfen sich nicht überschneiden",
    partiallyError: "Dieser Vorgang kann nicht auf teilweise verbundene Zellen angewendet werden",
    confirm: "Beim Verbinden bleiben nur die Werte der linken oberen Zelle erhalten. Fortfahren?",
    confirmTitle: "Zellen verbinden"
  },
  align: {
    left: "Links",
    center: "Zentriert",
    right: "Rechts",
    top: "Oben",
    middle: "Mitte",
    bottom: "Unten",
    justify: "Blocksatz",
    general: "Allgemein"
  },
  textWrap: {
    overflow: "Überlauf",
    wrap: "Umbruch",
    clip: "Abschneiden"
  },
  rotation: {
    none: "Keine Drehung",
    angleup: "Nach oben kippen",
    angledown: "Nach unten kippen",
    vertical: "Vertikaler Text",
    rotationUp: "Nach oben drehen",
    rotationDown: "Nach unten drehen"
  },
  freezen: {  "freezenRow": "Erste Zeile",
  "freezenColumn": "Erste Spalte",
  "freezenRC": "Beide",
  "freezenRowRange": "Bis zur aktuellen Zeile fixieren",
  "freezenColumnRange": "Bis zur aktuellen Spalte fixieren",
  "freezenRCRange": "Bis zur aktuellen Zelle fixieren",
  "freezenCancel": "Fixierung aufheben",
  "noSeletionError": "Kein Bereich ausgewählt",
  "rangeRCOverErrorTitle": "Fixierungshinweis",
  "rangeRCOverError": "Der fixierte Bereich liegt außerhalb des sichtbaren Bereichs, was zu unerwartetem Verhalten führen kann. Bitte setzen Sie den fixierten Bereich zurück.",

    default: "Keine Fixierung",
    row: "Erste Zeile fixieren",
    column: "Erste Spalte fixieren",
    both: "Zeilen und Spalten fixieren",
    rangeRow: "Bis zur aktuellen Zeile fixieren",
    rangeColumn: "Bis zur aktuellen Spalte fixieren",
    rangeBoth: "Bis zum aktuellen Bereich fixieren",
    cancel: "Fixierung aufheben"
  },
  sort: {  "columnOperation": "Spalte",
  "secondaryTitle": "dann nach",
  "sortTitle": "Bereich sortieren",
  "sortRangeTitle": "Bereich sortieren von",
  "sortRangeTitleTo": "bis",
  "noRangeError": "Diese Aktion ist bei mehreren ausgewählten Bereichen nicht möglich. Bitte wählen Sie einen einzelnen Bereich aus und versuchen Sie es erneut",

    asc: "A bis Z sortieren",
    desc: "Z bis A sortieren",
    custom: "Benutzerdefiniert sortieren",
    hasTitle: "Daten haben Kopfzeile",
    sortBy: "Sortieren nach",
    addOthers: "Weitere Sortierspalte hinzufügen",
    close: "Schließen",
    confirm: "Sortieren",
    column: "Spalte",
    order: "Reihenfolge",
    value: "Werte",
    color: "Farbe",
    ascTitle: "Aufsteigend",
    descTitle: "Absteigend",
    sortRange: "Bereich sortieren",
    sortWarning: "Bitte wählen Sie einen Bereich zum Sortieren aus.",
    singleRangeError: "Dieser Vorgang ist für Mehrfachauswahl nicht verfügbar.",
    mergeError: "Zum Sortieren müssen alle verbundenen Zellen dieselbe Größe haben."
  },
  filter: {  "filterByValues": "Nach Werten filtern",
  "filiterInputNone": "Keine",
  "filiterInputTip": "Filterwert eingeben",
  "filiterRangeStartTip": "Wert für Formel",
  "filiterRangeEndTip": "Wert für Formel",
  "filterValueByAllBtn": "Alle auswählen",
  "filterValueByClearBtn": "Löschen",
  "filterValueByInverseBtn": "Umkehren",
  "filterValueByTip": "Nach Werten filtern",
  "filterConform": "Bestätigen",
  "filterCancel": "Abbrechen",
  "conditionCellGreater": "Größer als",
  "conditionCellGreaterEqual": "Größer oder gleich",
  "conditionCellLess": "Kleiner als",
  "conditionCellLessEqual": "Kleiner oder gleich",
  "conditionCellEqual": "Ist gleich",
  "conditionCellNotEqual": "Ist ungleich",
  "conditionCellBetween": "Liegt zwischen",
  "conditionCellNotBetween": "Liegt nicht zwischen",
  "filiterMoreDataTip": "Große Datenmenge! Bitte warten",
  "filiterMonthText": "Monat",
  "filiterYearText": "Jahr",
  "filiterByColorTip": "Nach Zellfarbe filtern",
  "filiterByTextColorTip": "Nach Schriftfarbe filtern",
  "filterContainerOneColorTip": "Diese Spalte enthält nur eine Farbe",
  "filterDateFormatTip": "Datumsformat",
  "valueBlank": "(Leer)",
  "mergeError": "Die Filterauswahl enthält verbundene Zellen, diese Aktion kann nicht ausgeführt werden!",

    filter: "Filter erstellen",
    clearFilter: "Filter löschen",
    sortByAsc: "Aufsteigend sortieren",
    sortByDesc: "Absteigend sortieren",
    filterByColor: "Nach Farbe filtern",
    filterByCondition: "Nach Bedingung filtern",
    filterByValue: "Nach Wert filtern",
    search: "Suchen",
    selectAll: "Alle auswählen",
    empty: "(Leer)",
    confirm: "OK",
    cancel: "Abbrechen",
    conditionNone: "Keine",
    conditionCellIsNull: "Zelle ist leer",
    conditionCellNotNull: "Zelle ist nicht leer",
    conditionCellTextContain: "Text enthält",
    conditionCellTextNotContain: "Text enthält nicht",
    conditionCellTextStart: "Text beginnt mit",
    conditionCellTextEnd: "Text endet mit",
    conditionCellTextEqual: "Text ist gleich",
    conditionCellDateEqual: "Datum ist gleich",
    conditionCellDateBefore: "Datum ist vor",
    conditionCellDateAfter: "Datum ist nach",
    conditionGreater: "Größer als",
    conditionGreaterEqual: "Größer oder gleich",
    conditionLess: "Kleiner als",
    conditionLessEqual: "Kleiner oder gleich",
    conditionEqual: "Gleich",
    conditionNotEqual: "Ungleich",
    conditionBetween: "Zwischen",
    conditionNotBetween: "Nicht zwischen",
    conditionCustom: "Benutzerdefinierte Formel",
    chooseColor: "Farbe auswählen",
    textColor: "Textfarbe",
    backgroundColor: "Hintergrundfarbe",
    clear: "Löschen",
    noResult: "Keine Ergebnisse"
  },
  rightclick: {  "diagonal": "Diagonal",
  "antiDiagonal": "Gegendiagonal",
  "diagonalOffset": "Diagonaler Versatz",
  "offset": "Versatz",
  "boolean": "Boolescher Wert",
  "flip": "Spiegeln",
  "upAndDown": "Oben und unten",
  "leftAndRight": "Links und rechts",
  "clockwise": "Im Uhrzeigersinn",
  "counterclockwise": "Gegen den Uhrzeigersinn",
  "transpose": "Transponieren",
  "matrixCalculation": "Matrixberechnung",
  "plus": "Addition",
  "minus": "Subtraktion",
  "multiply": "Multiplikation",
  "divided": "Division",
  "power": "Potenz",
  "root": "Wurzel",
  "log": "Logarithmus",
  "delete0": "Nullwerte an beiden Enden entfernen",
  "removeDuplicate": "Duplikate entfernen",
  "byRow": "Nach Zeile",
  "byCol": "Nach Spalte",
  "generateNewMatrix": "Neue Matrix erzeugen",
  "noMulti": "Diese Aktion ist bei mehreren ausgewählten Bereichen nicht möglich, bitte wählen Sie einen einzelnen Bereich aus",
  "cannotDeleteAllRow": "Es können nicht alle Zeilen gelöscht werden",
  "cannotDeleteAllColumn": "Es können nicht alle Spalten gelöscht werden",
  "cannotDeleteRowReadOnly": "Zeile ist schreibgeschützt, Löschen nicht möglich",
  "cannotDeleteColumnReadOnly": "Spalte ist schreibgeschützt, Löschen nicht möglich",
  "cannotInsertOnRowReadOnly": "Einfügen bei schreibgeschützter Zeile nicht möglich",
  "cannotInsertOnColumnReadOnly": "Einfügen bei schreibgeschützter Spalte nicht möglich",
  "rowOverLimit": "Limit von 10.000 Zeilen überschritten",
  "columnOverLimit": "Limit von 1.000 Spalten überschritten",

    copy: "Kopieren",
    copyAs: "Kopieren als",
    paste: "Einfügen",
    insert: "Einfügen",
    delete: "Löschen",
    deleteCell: "Zellen löschen",
    deleteSelected: "Ausgewählte löschen",
    hide: "Ausblenden",
    hideSelected: "Ausgewählte ausblenden",
    showHide: "Einblenden",
    to: "bis",
    left: "links",
    right: "rechts",
    top: "oben",
    bottom: "unten",
    moveLeft: "Nach links verschieben",
    moveUp: "Nach oben verschieben",
    add: "Hinzufügen",
    row: "Zeile",
    column: "Spalte",
    width: "Spaltenbreite",
    height: "Zeilenhöhe",
    number: "Anzahl",
    confirm: "OK",
    orderAZ: "A bis Z sortieren",
    orderZA: "Z bis A sortieren",
    clearContent: "Inhalte löschen",
    matrix: "Matrixoperation",
    sortSelection: "Auswahl sortieren",
    filterSelection: "Auswahl filtern",
    chartGeneration: "Diagramm erstellen",
    firstLineTitle: "Erste Zeile als Titel",
    untitled: "Ohne Titel",
    array1: "Array 1",
    array2: "Array 2",
    array3: "Array 3",
    array4: "Array 4",
    array5: "Array 5",
    array6: "Array 6",
    leftTop: "Oben links",
    rightTop: "Oben rechts",
    leftBottom: "Unten links",
    rightBottom: "Unten rechts",
    dropCell: "Zellen nach unten verschieben",
    rightCell: "Zellen nach rechts verschieben",
    image: "Bild einfügen",
    link: "Link einfügen",
    data: "Daten",
    cellFormat: "Zellen formatieren",
    rowHeight: "Zeilenhöhe",
    columnWidth: "Spaltenbreite",
    insertRow: "Zeile einfügen",
    insertColumn: "Spalte einfügen",
    deleteRow: "Zeile löschen",
    deleteColumn: "Spalte löschen"
  },
  comment: {  "showOne": "Anzeigen/Ausblenden",
  "showAll": "Alle anzeigen/ausblenden",

    insert: "Kommentar einfügen",
    edit: "Kommentar bearbeiten",
    delete: "Kommentar löschen",
    show: "Kommentar anzeigen",
    hide: "Kommentar ausblenden",
    reply: "Antworten",
    resolve: "Erledigen",
    cancel: "Abbrechen",
    save: "Speichern",
    placeholder: "Kommentar eingeben",
    commented: "Kommentiert"
  },
  screenshot: {  "screenshotImageName": "Screenshot",
  "downLoadClose": "Schließen",
  "downLoadCopy": "In die Zwischenablage kopieren",
  "downLoadBtn": "Herunterladen",
  "browserNotTip": "vom Internet Explorer nicht unterstützt!",
  "rightclickTip": "Bitte klicken Sie mit der rechten Maustaste auf das Bild und wählen Sie \"Kopieren\"",
  "successTip": "Erfolgreich (falls das Einfügen fehlschlägt, klicken Sie mit der rechten Maustaste auf das Bild und wählen Sie \"Bild kopieren\")",

    screenshotTipNoSelection: "Bitte wählen Sie einen Bereich aus",
    screenshotTipTitle: "Screenshot",
    screenshotTipHasMerge: "Der ausgewählte Bereich enthält verbundene Zellen und kann nicht als Bild exportiert werden",
    screenshotTipHasMulti: "Bitte wählen Sie nur einen Bereich aus",
    screenshotTipSuccess: "Screenshot erstellt",
    screenshotTipError: "Screenshot fehlgeschlagen"
  },
  splitText: {  "splitSymbols": [
    {
      "name": "Tab",
      "value": "Tab"
    },
    {
      "name": "Semikolon",
      "value": "semicolon"
    },
    {
      "name": "Komma",
      "value": "comma"
    },
    {
      "name": "Leerzeichen",
      "value": "space"
    }
  ],
  "tipNoMulti": "Diese Aktion ist bei mehreren ausgewählten Bereichen nicht möglich, bitte wählen Sie einen einzelnen Bereich aus und versuchen Sie es erneut",
  "tipNoMultiColumn": "Es kann jeweils nur eine Datenspalte umgewandelt werden. Der ausgewählte Bereich kann mehrere Zeilen, aber nicht mehrere Spalten enthalten. Bitte versuchen Sie es nach Auswahl eines einzelnen Spaltenbereichs erneut",
  "tipNoSelect": "Sie können keine Zelle trennen, ohne sie auszuwählen",

    splitDelimiters: "Trennzeichen",
    splitOther: "Andere",
    splitContinueSymbol: "Mehrere Trennzeichen als eins behandeln",
    splitDataPreview: "Datenvorschau",
    splitTextTitle: "Text in Spalten",
    splitConfirmToExe: "Ausführen",
    splitCancel: "Abbrechen",
    splitEmptyTip: "Bitte wählen Sie einen Bereich aus",
    splitHasMergeTip: "Der ausgewählte Bereich enthält verbundene Zellen",
    splitColumnTip: "Bitte wählen Sie eine einzelne Spalte aus",
    splitType: "Typ",
    splitByDelimiters: "Nach Trennzeichen",
    splitByFixedWidth: "Feste Breite",
    splitSemicolon: "Semikolon",
    splitComma: "Komma",
    splitSpace: "Leerzeichen",
    splitTab: "Tabulator"
  },
  imageText: {  "moveCell1": "Zellen verschieben und Größe ändern",
  "moveCell2": "Verschieben, aber Zellgröße nicht ändern",
  "moveCell3": "Nicht verschieben und Zellgröße nicht ändern",
  "fixedPos": "Feste Position",
  "border": "Rahmen",
  "width": "Breite",
  "radius": "Radius",
  "style": "Stil",
  "solid": "Durchgezogen",
  "dashed": "Gestrichelt",
  "dotted": "Gepunktet",
  "double": "Doppelt",
  "color": "Farbe",

    imageSetting: "Bildeinstellungen",
    close: "Schließen",
    conventional: "Standard",
    moveCell: "Mit Zellen verschieben und Größe ändern",
    moveNoSizeCell: "Mit Zellen verschieben, aber Größe nicht ändern",
    noMoveSizeCell: "Nicht mit Zellen verschieben oder Größe ändern",
    title: "Bildtitel",
    description: "Beschreibung",
    upload: "Bild hochladen",
    position: "Position",
    crop: "Zuschneiden",
    reset: "Zurücksetzen",
    replace: "Ersetzen",
    delete: "Löschen",
    lockAspectRatio: "Seitenverhältnis sperren"
  },
  punctuation: {
    tab: "Tabulator",
    semicolon: "Semikolon",
    comma: "Komma",
    space: "Leerzeichen"
  },
  findAndReplace: {  "number": "Zahl",
  "string": "Text",
  "error": "Fehler",
  "condition": "Bedingung",
  "rowSpan": "Zeilenverbund",
  "columnSpan": "Spaltenverbund",
  "locationExample": "Position",
  "lessTwoRowTip": "Bitte wählen Sie mindestens zwei Zeilen aus",
  "lessTwoColumnTip": "Bitte wählen Sie mindestens zwei Spalten aus",
  "findTextbox": "Suchinhalt",
  "replaceTextbox": "Ersetzungsinhalt",
  "regexTextbox": "Regulärer Ausdruck",
  "wholeTextbox": "Ganzes Wort",
  "distinguishTextbox": "Groß-/Kleinschreibung beachten",
  "allReplaceBtn": "Alle ersetzen",
  "replaceBtn": "Ersetzen",
  "allFindBtn": "Alle suchen",
  "findBtn": "Weitersuchen",
  "noFindTip": "Der Inhalt wurde nicht gefunden",
  "modeTip": "Diese Aktion ist in diesem Modus nicht verfügbar",
  "searchTargetSheet": "Tabelle",
  "searchTargetCell": "Zelle",
  "searchTargetValue": "Wert",
  "searchInputTip": "Bitte geben Sie den Suchinhalt ein",
  "noReplceTip": "Es gibt nichts zu ersetzen",
  "noMatchTip": "Keine Übereinstimmung gefunden",
  "successTip": "${xlength} Treffer gefunden",
  "locationConstant": "Konstante",
  "locationFormula": "Formel",
  "locationDate": "Datum",
  "locationDigital": "Zahl",
  "locationString": "Text",
  "locationBool": "Logisch",
  "locationError": "Fehler",
  "locationNull": "Leer",
  "locationCondition": "Bedingte Formatierung",
  "locationRowSpan": "Zeilenverbund",
  "locationColumnSpan": "Spaltenverbund",
  "locationTiplessTwoRow": "Bitte wählen Sie mindestens zwei Zeilen aus",
  "locationTiplessTwoColumn": "Bitte wählen Sie mindestens zwei Spalten aus",
  "locationTipNotFindCell": "Zelle nicht gefunden",

    find: "Suchen",
    replace: "Ersetzen",
    goto: "Gehe zu",
    location: "Suchen in",
    formula: "Formel",
    date: "Datum",
    value: "Wert",
    all: "Alle",
    sheet: "Blatt",
    cell: "Zelle",
    row: "Zeile",
    column: "Spalte",
    findContent: "Suchbegriff",
    replaceContent: "Ersetzen durch",
    caseSensitive: "Groß-/Kleinschreibung beachten",
    matchEntireCell: "Ganze Zelle vergleichen",
    searchByRow: "Nach Zeilen suchen",
    searchByColumn: "Nach Spalten suchen",
    next: "Weiter",
    previous: "Zurück",
    replaceAll: "Alle ersetzen",
    replaceTip: "Ersetzungen abgeschlossen",
    noResult: "Keine Übereinstimmungen gefunden",
    mode: "Modus",
    range: "Bereich",
    workbook: "Arbeitsmappe",
    worksheet: "Arbeitsblatt"
  },
  sheetconfig: {  "changeColor": "Farbe ändern",
  "moveLeft": "Nach links verschieben",
  "moveRight": "Nach rechts verschieben",
  "resetColor": "Farbe zurücksetzen",
  "cancelText": "Abbrechen",
  "chooseText": "Farbe bestätigen",
  "focus": "Fokus",
  "tipNameRepeat": "Der Name der Tabelle darf nicht doppelt vergeben werden! Bitte ändern Sie ihn",
  "noMoreSheet": "Die Arbeitsmappe muss mindestens ein sichtbares Tabellenblatt enthalten. Um das ausgewählte Blatt zu löschen, fügen Sie ein neues Blatt ein oder blenden Sie ein verstecktes Blatt ein.",
  "redoDelete": "Kann mit Strg+Z rückgängig gemacht werden",
  "noHide": "Kann nicht ausgeblendet werden, mindestens ein Tabellenblatt muss sichtbar bleiben",
  "chartEditNoOpt": "Diese Aktion ist im Diagramm-Bearbeitungsmodus nicht zulässig!",
  "sheetNameSpecCharError": "Der Name darf nicht enthalten: [ ] : ? * / ' \"",
  "sheetNamecannotIsEmptyError": "Der Tabellenname darf nicht leer sein",

    delete: "Löschen",
    copy: "Kopieren",
    rename: "Umbenennen",
    color: "Farbe ändern",
    hide: "Ausblenden",
    unhide: "Einblenden",
    move: "Verschieben",
    order: "Reihenfolge ändern",
    protect: "Blatt schützen",
    unprotect: "Blattschutz aufheben",
    new: "Neues Blatt",
    tooltip: "Blattmenü",
    name: "Name",
    changeSheetName: "Blattnamen ändern",
    oldName: "Alter Name",
    newName: "Neuer Name",
    errorNameRepeat: "Blattname ist bereits vorhanden",
    errorNameNull: "Blattname darf nicht leer sein",
    errorNameTooLong: "Blattname darf nicht länger als 31 Zeichen sein",
    errorNameSpecChar: "Blattname darf folgende Zeichen nicht enthalten: [ ] : \\ ? * /",
    errorDelete: "Die Arbeitsmappe muss mindestens ein Blatt enthalten",
    confirmDelete: "Dieses Blatt löschen?",
    confirmCopy: "Dieses Blatt kopieren?",
    success: "Erfolgreich",
    failed: "Fehlgeschlagen"
  },
  conditionformat: {
    conditionformat_greaterThan: "Größer als",
    conditionformat_greaterThan_title: "Zellen formatieren, die größer sind als",
    conditionformat_lessThan: "Kleiner als",
    conditionformat_lessThan_title: "Zellen formatieren, die kleiner sind als",
    conditionformat_between: "Zwischen",
    conditionformat_between_title: "Zellen formatieren, die zwischen folgenden Werten liegen",
    conditionformat_equal: "Gleich",
    conditionformat_equal_title: "Zellen formatieren, die gleich sind",
    conditionformat_textContains: "Text enthält",
    conditionformat_textContains_title: "Zellen formatieren, die folgenden Text enthalten",
    conditionformat_occurrenceDate: "Datum",
    conditionformat_occurrenceDate_title: "Zellen formatieren, die ein Datum enthalten",
    conditionformat_duplicateValue: "Doppelte Werte",
    conditionformat_duplicateValue_title: "Doppelte Werte formatieren",
    conditionformat_top10: "Top 10",
    conditionformat_top10_percent: "Top 10%",
    conditionformat_last10: "Untere 10",
    conditionformat_last10_percent: "Untere 10%",
    conditionformat_aboveAverage: "Über Durchschnitt",
    conditionformat_belowAverage: "Unter Durchschnitt",
    conditionformat_rule: "Regel",
    conditionformat_newRule: "Neue Regel",
    conditionformat_clearRules: "Regeln löschen",
    conditionformat_manageRules: "Regeln verwalten",
    conditionformat_formatOnlyCells: "Nur Zellen formatieren mit",
    conditionformat_cellValue: "Zellwert",
    conditionformat_specificText: "Bestimmter Text",
    conditionformat_dateOccurring: "Datum tritt auf",
    conditionformat_blanks: "Leere Zellen",
    conditionformat_noBlanks: "Nicht leere Zellen",
    conditionformat_errors: "Fehler",
    conditionformat_noErrors: "Keine Fehler",
    conditionformat_formula: "Formel",
    conditionformat_operator: "Operator",
    conditionformat_format: "Format",
    conditionformat_preview: "Vorschau",
    conditionformat_ok: "OK",
    conditionformat_cancel: "Abbrechen",
    conditionformat_delete: "Löschen",
    conditionformat_add: "Hinzufügen",
    conditionformat_colorScale: "Farbskala",
    conditionformat_dataBar: "Datenbalken",
    conditionformat_iconSet: "Symbolsatz"
  },
  insertLink: {  "linkText": "Anzeigetext",
  "linkType": "Linktyp",
  "linkAddress": "Linkadresse",
  "linkSheet": "Arbeitsblatt",
  "linkCell": "Zellbereich",
  "linkTooltip": "Tooltip",
  "selectCellRange": "Zellbereich auswählen",
  "cellRangePlaceholder": "Zellen mit dem Cursor auswählen oder direkt eingeben",
  "placeholder1": "Bitte geben Sie die Webadresse ein",
  "placeholder2": "Bitte geben Sie die zu referenzierende Zelle ein, z. B. A1",
  "placeholder3": "Bitte geben Sie den Tooltip-Text ein",
  "tooltipInfo1": "Bitte geben Sie einen gültigen Link ein",
  "invalidCellRangeTip": "Bitte geben Sie einen gültigen Zellbereich ein, z. B. Tabelle1!A1:C8",
  "openLink": "Link öffnen",
  "goTo": "Gehe zu ${linkAddress}",

    title: "Link einfügen",
    text: "Text",
    link: "Link",
    placeholder: "Link eingeben",
    confirm: "OK",
    cancel: "Abbrechen",
    edit: "Link bearbeiten",
    open: "Link öffnen",
    remove: "Link entfernen",
    invalid: "Ungültiger Link",
    url: "Webadresse",
    sheet: "Blatt",
    cell: "Zelle",
    range: "Bereich"
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
  dataVerification: {  "selectCellRange2": "Bitte wählen Sie einen Zellbereich aus",
  "number_integer": "Zahl – Ganzzahl",
  "number_decimal": "Zahl – Dezimalzahl",
  "text_content": "Text – Inhalt",
  "text_length": "Text – Länge",
  "validity": "Gültigkeit",
  "placeholder1": "Bitte geben Sie die Optionen durch Kommas getrennt ein, z. B. 1,2,3,4,5",
  "placeholder2": "Bitte geben Sie einen Inhalt ein",
  "placeholder3": "Numerischer Wert, z. B. 10",
  "placeholder4": "Bitte geben Sie den angegebenen Text ein",
  "placeholder5": "Bitte geben Sie den Hinweis ein, der bei Auswahl der Zelle angezeigt wird",
  "selected": "Ausgewählt",
  "notSelected": "Nicht ausgewählt",
  "notEqualTo": "Ungleich",
  "moreThanThe": "Größer als",
  "greaterOrEqualTo": "Größer oder gleich",
  "lessThanOrEqualTo": "Kleiner oder gleich",
  "include": "Enthält",
  "exclude": "Enthält nicht",
  "earlierThan": "Früher als",
  "noEarlierThan": "Nicht früher als",
  "laterThan": "Später als",
  "noLaterThan": "Nicht später als",
  "identificationNumber": "Ausweisnummer",
  "phoneNumber": "Telefonnummer",
  "remote": "Automatische Fernabruf-Option",
  "prohibitInput": "Eingabe verhindern, wenn die Daten ungültig sind",
  "hintShow": "Hinweis anzeigen, wenn die Zelle ausgewählt wird",
  "deleteVerification": "Überprüfung löschen",
  "tooltipInfo1": "Die Option der Dropdown-Liste darf nicht leer sein",
  "tooltipInfo2": "Der Inhalt des Kontrollkästchens darf nicht leer sein",
  "tooltipInfo3": "Der eingegebene Wert ist kein numerischer Typ",
  "tooltipInfo4": "Wert 2 darf nicht kleiner als Wert 1 sein",
  "tooltipInfo5": "Der Textinhalt darf nicht leer sein",
  "tooltipInfo6": "Der eingegebene Wert ist kein Datumstyp",
  "tooltipInfo7": "Datum 2 darf nicht vor Datum 1 liegen",
  "textlengthInteger": "Die Textlänge muss eine Ganzzahl größer oder gleich 0 sein",

    cellRange: "Zellbereich",
    selectCellRange: "Zellbereich auswählen",
    selectRange: "Bereich auswählen",
    verificationCondition: "Prüfbedingung",
    allowMultiSelect: "Mehrfachauswahl erlauben",
    dropdown: "Dropdown",
    checkbox: "Kontrollkästchen",
    number: "Zahl",
    integer: "Ganzzahl",
    decimal: "Dezimalzahl",
    text: "Text",
    date: "Datum",
    list: "Liste",
    listItem: "Listeneintrag",
    custom: "Benutzerdefinierte Formel",
    between: "zwischen",
    notBetween: "nicht zwischen",
    equal: "gleich",
    notEqual: "ungleich",
    greaterThan: "größer als",
    lessThan: "kleiner als",
    greaterThanOrEqual: "größer oder gleich",
    lessThanOrEqual: "kleiner oder gleich",
    value: "Wert",
    minimum: "Minimum",
    maximum: "Maximum",
    source: "Quelle",
    ignoreBlank: "Leere Zellen ignorieren",
    showDropdown: "Dropdown in Zelle anzeigen",
    inputMessage: "Eingabemeldung",
    showInputMessage: "Eingabemeldung anzeigen",
    errorAlert: "Fehlermeldung",
    showErrorAlert: "Fehlermeldung anzeigen",
    errorTitle: "Titel",
    errorMessage: "Meldung",
    rejectInput: "Eingabe ablehnen",
    warning: "Warnung",
    information: "Information",
    stop: "Stopp",
    confirm: "OK",
    cancel: "Abbrechen",
    removeVerification: "Datenüberprüfung entfernen",
    addRule: "Regel hinzufügen",
    editRule: "Regel bearbeiten",
    deleteRule: "Regel löschen",
    saveRule: "Regel speichern",
    pleaseInput: "Bitte eingeben",
    rule: "Regel"
  },
  formula: {  "find": "Mehr erfahren",
  "ifGenCompareValueTitle": "Vergleichswert",
  "ifGenSelectCellTitle": "Klicken, um eine Zelle auszuwählen",
  "ifGenRangeTitle": "Bereich",
  "ifGenRangeTo": "bis",
  "ifGenRangeEvaluate": "Bereichsauswertung",
  "ifGenSelectRangeTitle": "Klicken, um einen Bereich auszuwählen",
  "ifGenCutWay": "Aufteilungsmethode",
  "ifGenCutSame": "Gleicher Aufteilungswert",
  "ifGenCutNpiece": "Aufteilen in N",
  "ifGenCutCustom": "Benutzerdefiniert",
  "ifGenCutConfirm": "Bestätigen",
  "ifGenTipSelectCell": "Zellen auswählen",
  "ifGenTipSelectCellPlace": "Bitte Zellen auswählen",
  "ifGenTipSelectRange": "Bereich auswählen",
  "ifGenTipSelectRangePlace": "Bitte Bereich auswählen",
  "ifGenTipNotNullValue": "Der Vergleichswert darf nicht leer sein!",
  "ifGenTipLableTitile": "Beschriftung",
  "ifGenTipRangeNotforNull": "Der Bereich darf nicht leer sein!",
  "ifGenTipCutValueNotforNull": "Der Aufteilungswert darf nicht leer sein!",
  "ifGenTipNotGenCondition": "Es sind keine Bedingungen zur Generierung verfügbar!",

    sum: "SUMME",
    average: "MITTELWERT",
    count: "ANZAHL",
    max: "MAX",
    min: "MIN",
    ifGenerate: "Funktion einfügen",
    findFunction: "Funktion suchen",
    tipNotBelongToIf: "Diese Funktion gehört nicht zu dieser Kategorie",
    tipSelectCell: "Bitte wählen Sie eine Zelle oder einen Bereich aus",
    help: "Hilfe",
    example: "Beispiel",
    functionName: "Funktionsname",
    functionType: "Funktionskategorie",
    functionDescription: "Funktionsbeschreibung",
    functionParameter: "Funktionsparameter",
    parameter: "Parameter",
    parameterDescription: "Parameterbeschreibung",
    required: "Erforderlich",
    optional: "Optional",
    repeat: "Wiederholbar",
    formulaError: "Formelfehler",
    formulaTip: "Formel eingeben"
  },
  formulaMore: {
    valueTitle: "Wert",
    tipSelectDataRange: "Datenbereich auswählen",
    tipDataRangeTile: "Datenbereich",
    findFunctionTitle: "Funktion suchen",
    tipInputFunctionName: "Funktionsnamen eingeben",
    Array: "Array",
    Database: "Datenbank",
    Date: "Datum",
    Engineering: "Technik",
    Filter: "Filter",
    Financial: "Finanzen",
    luckysheet: "Luckysheet",
    other: "Sonstige",
    Logical: "Logisch",
    Lookup: "Suchen",
    Math: "Mathematik",
    Operator: "Operator",
    Parser: "Parser",
    Statistical: "Statistik",
    Text: "Text",
    dataMining: "Data-Mining",
    selectFunctionTitle: "Funktion auswählen",
    calculationResult: "Ergebnis",
    tipSuccessText: "Erfolgreich",
    tipParamErrorText: "Fehler im Parametertyp",
    helpClose: "Schließen",
    helpCollapse: "Einklappen",
    helpExample: "Beispiel",
    helpAbstract: "Zusammenfassung",
    execfunctionError: "Fehler in der Formel",
    execfunctionSelfError: "Die Formel kann sich nicht auf ihre eigene Zelle beziehen",
    execfunctionSelfErrorResult: "Die Formel kann sich nicht auf ihre eigene Zelle beziehen, was zu ungenauen Berechnungsergebnissen führen würde",
    allowRepeatText: "Wiederholbar",
    allowOptionText: "Optional",
    selectCategory: "Oder eine Kategorie auswählen"
  },
  drag: {
    noMerge: "Dieser Vorgang kann nicht auf verbundene Zellen angewendet werden",
    affectPivot: "Diese Änderung kann an der ausgewählten Zelle nicht vorgenommen werden, da sie die Pivot-Tabelle beeinflusst.",
    noMulti: "Dieser Vorgang kann nicht auf mehrere Auswahlbereiche angewendet werden. Bitte wählen Sie einen einzelnen Bereich aus.",
    noPaste: "Dieser Inhalt kann hier nicht eingefügt werden. Bitte wählen Sie eine Zelle im Einfügebereich aus und versuchen Sie es erneut.",
    noPartMerge: "Dieser Vorgang kann nicht auf teilweise verbundene Zellen angewendet werden",
    inputCorrect: "Bitte geben Sie den richtigen Wert ein",
    notLessOne: "Die Anzahl der Zeilen und Spalten darf nicht kleiner als 1 sein",
    offsetColumnLessZero: "Der Spaltenversatz darf nicht negativ sein.",
    pasteMustKeybordAlert: "Kopieren und Einfügen in der Tabelle: Ctrl + C zum Kopieren, Ctrl + V zum Einfügen, Ctrl + X zum Ausschneiden",
    pasteMustKeybordAlertHTMLTitle: "在表格中进行复制粘贴",
    pasteMustKeybordAlertHTML: "<span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + C</span>&nbsp;&nbsp;zum Kopieren<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + V</span>&nbsp;&nbsp;zum Einfügen<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + X</span>&nbsp;&nbsp;zum Ausschneiden"
  },
  pivotTable: {
    title: "Pivot Table",
    closePannel: "Close",
    editRange: "Range",
    tipPivotFieldSelected: "Felder auswählen",
    tipClearSelectedField: "Clear all fields",
    btnClearSelectedField: "Clear",
    btnFilter: "Filter",
    titleRow: "Row",
    titleColumn: "Column",
    titleValue: "Value",
    tipShowColumn: "Statistikfelder werden als Spalten angezeigt",
    tipShowRow: "Statistikfelder werden als Zeilen angezeigt",
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
    errorNotAllowEdit: "Dieser Vorgang ist im Nicht-Bearbeitungsmodus untersagt.",
    errorNotAllowMulti: "Dieser Vorgang kann nicht auf mehrere Auswahlbereiche angewendet werden. Bitte wählen Sie einen einzelnen Bereich aus und versuchen Sie es erneut.",
    errorSelectRange: "Bitte wählen Sie den Bereich der neuen Pivot-Tabelle aus",
    errorIsDamage: "Die Quelldaten dieser Pivot-Tabelle sind beschädigt.",
    errorNotAllowPivotData: "Eine Pivot-Tabelle kann nicht als Quelldaten ausgewählt werden.",
    errorSelectionRange: "Auswahl fehlgeschlagen, falscher Eingabebereich.",
    errorIncreaseRange: "Bitte erweitern Sie den ausgewählten Bereich.",
    titleAddColumn: "Spalte zur Pivot-Tabelle hinzufügen",
    titleMoveColumn: "Spalte in das untenstehende weiße Feld verschieben",
    titleClearColumnFilter: "Filter für diese Spalte löschen",
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
    borderTile: "Rahmenfarbe des Bildes",
    borderCur: "Color"
  },
  protection: {
    protectiontTitle: "Protection",
    enterPassword: "Passwort eingeben (optional)",
    enterHintTitle: "Hinweis, wenn Bearbeiten verboten ist (optional)",
    enterHint: "Die Zelle oder das Diagramm, das Sie ändern möchten, befindet sich in einem geschützten Arbeitsblatt. Heben Sie den Blattschutz auf, um Änderungen vorzunehmen. Möglicherweise müssen Sie ein Passwort eingeben.",
    swichProtectionTip: "Blatt und Inhalte gesperrter Zellen schützen",
    authorityTitle: "Benutzern dieses Blatts erlauben:",
    selectLockedCells: "Gesperrte Zellen auswählen",
    selectunLockedCells: "Nicht gesperrte Zellen auswählen",
    formatCells: "Format cells",
    formatColumns: "Format columns",
    formatRows: "Format rows",
    insertColumns: "Insert columns",
    insertRows: "Insert rows",
    insertHyperlinks: "Hyperlinks einfügen",
    deleteColumns: "Delete columns",
    deleteRows: "Delete rows",
    sort: "Sort",
    filter: "Filter",
    usePivotTablereports: "Pivot-Tabellenberichte verwenden",
    editObjects: "Edit objects",
    editScenarios: "Edit scenarios",
    allowRangeTitle: "Benutzern des Bereichs erlauben:",
    allowRangeAdd: "New...",
    allowRangeAddTitle: "Title",
    allowRangeAddSqrf: "Reference",
    selectCellRange: "Klicken, um einen Zellbereich auszuwählen",
    selectCellRangeHolder: "Cell range",
    allowRangeAddTitlePassword: "Password",
    allowRangeAddTitleHint: "Prompt",
    allowRangeAddTitleHintTitle: "Hinweis, wenn ein Passwort festgelegt ist (optional)",
    allowRangeAddtitleDefault: "Input range name",
    rangeItemDblclick: "Zum Bearbeiten doppelklicken",
    rangeItemHasPassword: "Has password",
    rangeItemErrorTitleNull: "Title is null",
    rangeItemErrorRangeNull: "Der Bezug ist leer",
    rangeItemErrorRange: "Der Bezug ist fehlerhaft",
    validationTitle: "Passwortprüfung",
    validationTips: "Zum Aufheben des Blattschutzes muss ein Passwort eingegeben werden",
    validationInputHint: "Enter a password",
    checkPasswordNullalert: "Passwort ist erforderlich.",
    checkPasswordWrongalert: "Falsches Passwort, bitte versuchen Sie es erneut.",
    checkPasswordSucceedalert: "Unlock Succeed!",
    defaultRangeHintText: "Die Zelle ist passwortgeschützt.",
    defaultSheetHintText: "Die Zelle oder das Diagramm befindet sich in einem geschützten Arbeitsblatt. Heben Sie den Blattschutz auf, um Änderungen vorzunehmen. Möglicherweise müssen Sie ein Passwort eingeben."
  },
  cellFormat: {
    cellFormatTitle: "Format cells",
    protection: "Protection",
    locked: "Locked",
    hidden: "Hidden",
    protectionTips: "Um Zellen zu sperren oder Formeln auszublenden, schützen Sie das Arbeitsblatt. Klicken Sie in der Symbolleiste auf die Schaltfläche zum Blattschutz.",
    tipsPart: "Partial checked",
    tipsAll: "All checked",
    selectionIsNullAlert: "Eine Auswahl ist erforderlich.",
    sheetDataIsNullAlert: "Fehler: Keine Daten vorhanden."
  },
  print: {
    normalBtn: "Normal",
    layoutBtn: "Page Layout",
    pageBtn: "Seitenumbruchvorschau",
    menuItemPrint: "Print (Ctrl+P)",
    menuItemAreas: "Print areas",
    menuItemRows: "Print title rows",
    menuItemColumns: "Titelspalten drucken"
  },
  edit: {
    typing: "Eingabe"
  },
  websocket: {
    success: "WebSocket-Verbindung erfolgreich hergestellt",
    refresh: "Bei der WebSocket-Verbindung ist ein Fehler aufgetreten. Bitte aktualisieren Sie die Seite.",
    wait: "Bei der WebSocket-Verbindung ist ein Fehler aufgetreten. Bitte warten Sie einen Moment.",
    close: "WebSocket-Verbindung geschlossen",
    contact: "Bei der Serverkommunikation ist ein Fehler aufgetreten. Bitte aktualisieren Sie die Seite und versuchen Sie es erneut. Wenn das nicht hilft, wenden Sie sich bitte an den Administrator.",
    support: "Der aktuelle Browser unterstützt WebSocket nicht"
  },
  custom: {
    lockCells: "Zellen sperren",
    unlockCells: "Zellen entsperren",
    toggleSheetProtection: "Arbeitsmappe schützen / Schutz aufheben",
    toggleGridLines: "Gitternetzlinien anzeigen / ausblenden",
    customNumberFormat: {
      menuItem: "Benutzerdefiniertes Zahlenformat…",
      title: "Benutzerdefinierte Zahlenformate",
      formatLabel: "Formatcode",
      inputPlaceholder: "Zum Beispiel: #.##0,00",
      apply: "Anwenden",
      cancel: "Abbrechen",
      close: "Schließen",
      preview: "Vorschau",
      presets: "Vorgeschlagene Formate",
      standardFormats: "Zahlen",
      currencyFormats: "Währung",
      unitFormats: "Einheiten",
      selection: "Auswahl",
      help: "Formatübersicht",
      helpTitle: "Funktionsweise von Formatcodes",
      helpZero: "0 zeigt immer eine Ziffer an, einschließlich führender oder nachgestellter Nullen.",
      helpHash: "# zeigt eine Ziffer nur an, wenn sie signifikant ist.",
      helpDecimal: "{separator} kennzeichnet die Dezimalstelle im Formatcode.",
      helpGrouping: "{separator} fügt eine Zifferngruppierung hinzu.",
      groupingSpace: "Ein Leerzeichen fügt eine Zifferngruppierung hinzu.",
      helpSections: "; trennt Abschnitte für positive, negative, Null- und Textwerte.",
      normalizedHint: "Das Format wird als {format} gespeichert.",
      errors: {
        required: "Geben Sie einen Formatcode ein.",
        tooLong: "Der Formatcode ist zu lang.",
        tooManySections: "Ein Format darf höchstens vier Abschnitte enthalten.",
        missingPlaceholder: "Fügen Sie mindestens einen numerischen Platzhalter hinzu: 0, # oder ?.",
        invalid: "Dieser Formatcode ist ungültig."
      }
    },
    charts: {
      toolbar: "Diagramm einfügen",
      title: "Diagramme",
      defaultTitle: "Diagramm",
      activeSheet: "Aktives Blatt",
      existingCharts: "Diagramme des Blatts",
      noCharts: "Keine Diagramme für dieses Blatt.",
      newChart: "Neues Diagramm",
      editChart: "Diagramm bearbeiten",
      chartTitle: "Titel",
      type: "Typ",
      range: "Daten",
      labels: "Beschriftungen",
      labelReference: "Referenz",
      labelColumnReference: "Spaltenbuchstabe",
      labelRowReference: "Zeilennummer",
      values: "Werte anzeigen",
      legend: "Legende anzeigen",
      color: "Farbe",
      xAxis: "X-Achsenbeschriftungen anzeigen",
      yAxis: "Y-Achsenbeschriftungen anzeigen",
      gridlines: "Gitternetzlinien anzeigen",
      displayOptions: "Anzeige",
      preview: "Vorschau",
      close: "Schließen",
      reset: "Neu",
      add: "Hinzufügen",
      save: "Speichern",
      edit: "Bearbeiten",
      delete: "Löschen",
      types: {
        bar: "Balken",
        line: "Linie",
        scatter: "Punkte",
        pie: "Kreis"
      },
      labelTypes: {
        none: "Keine",
        sameRowColumn: "Spalte derselben Zeile",
        sameColumnRow: "Zeile derselben Spalten",
        range: "Benutzerdefinierter Bereich"
      },
      errors: {
        range: "Der Bereich muss wie A1:B5 aussehen.",
        dataColumn: "Der Datenbereich muss eine einzelne Zeile oder eine einzelne Spalte mit Werten sein.",
        labelColumn: "Die Beschriftungsspalte muss wie B aussehen.",
        labelRow: "Die Beschriftungszeile muss wie 2 aussehen.",
        labelRange: "Der Beschriftungsbereich muss wie B3:B24 aussehen.",
        labelRangeSize: "Der Beschriftungsbereich muss dieselbe Anzahl von Werten wie die Daten enthalten.",
        title: "Fügen Sie einen kurzen Diagrammtitel hinzu."
      }
    },
    standaloneMenu: {  "menuBarLabel": "DocCells-Menüs",
  "open": "Öffnen",
  "export": "Exportieren",
  "show": "Anzeigen",
  "gridlines": "Gitternetzlinien",

      file: "Datei",
      edit: "Bearbeiten",
      view: "Ansicht",
      insert: "Einfügen",
      data: "Daten",
      tools: "Werkzeuge",
      lockCells: "Zellen sperren",
      unlockCells: "Zellen entsperren",
      toggleSheetProtection: "Arbeitsmappe schützen / Schutz aufheben",
      toggleGridLines: "Gitternetzlinien anzeigen / ausblenden",
      uploadExcel: "Excel-Datei importieren",
      exportExcel: "Excel-Datei exportieren",
      undo: "Rückgängig",
      redo: "Wiederholen",
      copy: "Kopieren",
      paste: "Einfügen",
      cut: "Ausschneiden",
      chart: "Diagramm",
      conditionalFormatting: "Bedingte Formatierung",
      frozen: "Fixieren",
      sort: "Sortieren",
      filter: "Filter",
      findReplace: "Suchen und ersetzen",
      dataValidation: "Datenüberprüfung",
      screenshot: "Screenshot",
      splitText: "Text in Spalten",
      print: "Drucken"
    },
    conditionalFormatting: {  "activeSheet": "Aktives Blatt",
  "appliedRules": "Angewendete Regeln",
  "newRule": "Neue Regel",
  "applyTo": "Anwenden auf",
  "condition": "Bedingung",
  "compareTo": "Vergleichen mit",
  "cell": "Zelle",
  "sameRowColumn": "Spalte in derselben Zeile",
  "backgroundColor": "Füllung",
  "close": "Schließen",
  "reset": "Neu",
  "save": "Speichern",
  "add": "Hinzufügen",
  "edit": "Bearbeiten",
  "none": "Keine",
  "sample": "Aa",
  "textPlaceholder": "verspätet",
  "conditions": {
    "lessThan": "kleiner ist als",
    "greaterThan": "größer ist als",
    "equal": "gleich ist",
    "notEqual": "ungleich ist",
    "between": "zwischen liegt",
    "textContains": "den Text enthält"
  },
  "compareTypes": {
    "value": "einem festen Wert",
    "cell": "einer festen Zelle",
    "sameRowColumn": "einer Spalte in derselben Zeile"
  },
  "descriptions": {
    "cell": "Zelle",
    "between": "Zelle zwischen {value1} und {value2}",
    "textContains": "Text enthält \"{value}\"",
    "sameRowColumn": "Spalte {reference} derselben Zeile",
    "fixedCell": "Zelle {reference}",
    "comparison": "Zelle {operator} {target}"
  },
  "errors": {
    "range": "Der Bereich muss wie A2:A100 aussehen.",
    "between": "Geben Sie zwei Werte für die Zwischen-Bedingung ein.",
    "text": "Geben Sie den zu suchenden Text ein.",
    "compareCell": "Die Vergleichszelle muss wie B1 aussehen.",
    "compareColumn": "Die Vergleichsspalte muss wie B aussehen.",
    "compareValue": "Geben Sie einen Vergleichswert ein.",
    "style": "Wählen Sie mindestens eine Farbe oder einen Stil aus."
  },
  "styleLabels": {
    "bold": "Fett",
    "italic": "Kursiv",
    "underline": "Unterstrichen"
  },

      toolbar: "Bedingte Formatierung",
      title: "Bedingte Formatierung",
      range: "Bereich",
      rangePlaceholder: "A1:A10",
      selectRange: "Bereich auswählen",
      ruleType: "Regeltyp",
      greaterThan: "Größer als",
      lessThan: "Kleiner als",
      between: "Zwischen",
      equals: "Gleich",
      textContains: "Text enthält",
      duplicateValues: "Doppelte Werte",
      colorScale: "Farbskala",
      dataBar: "Datenbalken",
      iconSet: "Symbolsatz",
      value: "Wert",
      minValue: "Mindestwert",
      maxValue: "Höchstwert",
      text: "Text",
      style: "Stil",
      fillColor: "Füllfarbe",
      textColor: "Textfarbe",
      bold: "Fett",
      italic: "Kursiv",
      preview: "Vorschau",
      apply: "Anwenden",
      update: "Aktualisieren",
      cancel: "Abbrechen",
      delete: "Löschen",
      noRules: "Keine Regel für dieses Blatt.",
      addRule: "Regel hinzufügen",
      editRule: "Regel bearbeiten",
      invalidRange: "Der Bereich ist ungültig.",
      invalidValue: "Bitte geben Sie einen gültigen Wert ein.",
      invalidBetween: "Bitte geben Sie zwei gültige Werte ein.",
      duplicate: "Doppelt",
      unique: "Eindeutig",
      low: "Niedrig",
      mid: "Mittel",
      high: "Hoch",
      positive: "Positiv",
      negative: "Negativ",
      neutral: "Neutral"
    }
  },
  matrix: {
    title: "Matrixoperation",
    transpose: "Transponieren",
    rotateLeft: "90° nach links drehen",
    rotateRight: "90° nach rechts drehen",
    flipHorizontal: "Horizontal spiegeln",
    flipVertical: "Vertikal spiegeln",
    confirm: "OK",
    cancel: "Abbrechen"
  },
  sheetbar: {
    add: "Blatt hinzufügen",
    menu: "Alle Blätter",
    sheet: "Blatt",
    hidden: "Ausgeblendet",
    rename: "Umbenennen",
    delete: "Löschen",
    copy: "Kopieren",
    color: "Farbe",
    hide: "Ausblenden",
    unhide: "Einblenden",
    moveLeft: "Nach links verschieben",
    moveRight: "Nach rechts verschieben",
    first: "Erstes Blatt",
    last: "Letztes Blatt",
    previous: "Vorheriges Blatt",
    next: "Nächstes Blatt"
  },
  statistics: {
    total: "Gesamt",
    sum: "Summe",
    average: "Mittelwert",
    count: "Anzahl",
    max: "Max",
    min: "Min",
    range: "Bereich",
    selected: "Ausgewählt",
    numericalCount: "Numerische Anzahl"
  },
  tabs: {
    sheet: "Blatt",
    data: "Daten",
    chart: "Diagramm",
    pivot: "Pivot",
    image: "Bild",
    link: "Link",
    comment: "Kommentar"
  }
};
