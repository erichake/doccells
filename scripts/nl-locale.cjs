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
      d: "Beschrijving van de functie SUMIF.",
      a: "Samenvatting van de functie SUMIF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "bereik",
          detail: "Parameter `bereik` van de functie SUMIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterium",
          detail: "Parameter `criterium` van de functie SUMIF.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "sombereik",
          detail: "Parameter `sombereik` van de functie SUMIF.",
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
      d: "Beschrijving van de functie TAN.",
      a: "Samenvatting van de functie TAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hoek",
          detail: "Parameter `hoek` van de functie TAN.",
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
      d: "Beschrijving van de functie TANH.",
      a: "Samenvatting van de functie TANH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie TANH.",
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
      d: "Beschrijving van de functie CEILING.",
      a: "Samenvatting van de functie CEILING.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie CEILING.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Parameter `factor` van de functie CEILING.",
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
      d: "Beschrijving van de functie ATAN.",
      a: "Samenvatting van de functie ATAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ATAN.",
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
      d: "Beschrijving van de functie ASINH.",
      a: "Samenvatting van de functie ASINH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ASINH.",
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
      d: "Beschrijving van de functie ABS.",
      a: "Samenvatting van de functie ABS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ABS.",
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
      d: "Beschrijving van de functie ACOS.",
      a: "Samenvatting van de functie ACOS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ACOS.",
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
      d: "Beschrijving van de functie ACOSH.",
      a: "Samenvatting van de functie ACOSH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ACOSH.",
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
      d: "Beschrijving van de functie MULTINOMIAL.",
      a: "Samenvatting van de functie MULTINOMIAL.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie MULTINOMIAL.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie MULTINOMIAL.",
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
      d: "Beschrijving van de functie ATANH.",
      a: "Samenvatting van de functie ATANH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ATANH.",
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
      d: "Beschrijving van de functie ATAN2.",
      a: "Samenvatting van de functie ATAN2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie ATAN2.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "y",
          detail: "Parameter `y` van de functie ATAN2.",
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
      d: "Beschrijving van de functie COUNTBLANK.",
      a: "Samenvatting van de functie COUNTBLANK.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie COUNTBLANK.",
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
      d: "Beschrijving van de functie COSH.",
      a: "Samenvatting van de functie COSH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie COSH.",
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
      d: "Beschrijving van de functie INT.",
      a: "Samenvatting van de functie INT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie INT.",
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
      d: "Beschrijving van de functie ISEVEN.",
      a: "Samenvatting van de functie ISEVEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ISEVEN.",
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
      d: "Beschrijving van de functie ISODD.",
      a: "Samenvatting van de functie ISODD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ISODD.",
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
      d: "Beschrijving van de functie LCM.",
      a: "Samenvatting van de functie LCM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie LCM.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie LCM.",
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
      d: "Beschrijving van de functie LN.",
      a: "Samenvatting van de functie LN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie LN.",
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
      d: "Beschrijving van de functie LOG.",
      a: "Samenvatting van de functie LOG.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie LOG.",
          example: "128",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "grondtal",
          detail: "Parameter `grondtal` van de functie LOG.",
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
      d: "Beschrijving van de functie LOG10.",
      a: "Samenvatting van de functie LOG10.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie LOG10.",
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
      d: "Beschrijving van de functie MOD.",
      a: "Samenvatting van de functie MOD.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "deeltal",
          detail: "Parameter `deeltal` van de functie MOD.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "deler",
          detail: "Parameter `deler` van de functie MOD.",
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
      d: "Beschrijving van de functie MROUND.",
      a: "Samenvatting van de functie MROUND.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie MROUND.",
          example: "21",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Parameter `factor` van de functie MROUND.",
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
      d: "Beschrijving van de functie ODD.",
      a: "Samenvatting van de functie ODD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ODD.",
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
      d: "Beschrijving van de functie SUMSQ.",
      a: "Samenvatting van de functie SUMSQ.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie SUMSQ.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie SUMSQ.",
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
      d: "Beschrijving van de functie COMBIN.",
      a: "Samenvatting van de functie COMBIN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "Parameter `n` van de functie COMBIN.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Parameter `k` van de functie COMBIN.",
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
      d: "Beschrijving van de functie SUM.",
      a: "Samenvatting van de functie SUM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie SUM.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie SUM.",
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
      d: "Beschrijving van de functie SUBTOTAL.",
      a: "Samenvatting van de functie SUBTOTAL.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "functiecode",
          detail: "Parameter `functiecode` van de functie SUBTOTAL.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bereik1",
          detail: "Parameter `bereik1` van de functie SUBTOTAL.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "bereik2",
          detail: "Parameter `bereik2` van de functie SUBTOTAL.",
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
      d: "Beschrijving van de functie ASIN.",
      a: "Samenvatting van de functie ASIN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ASIN.",
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
      d: "Beschrijving van de functie COUNTIF.",
      a: "Samenvatting van de functie COUNTIF.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "bereik",
          detail: "Parameter `bereik` van de functie COUNTIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterium",
          detail: "Parameter `criterium` van de functie COUNTIF.",
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
      d: "Beschrijving van de functie RADIANS.",
      a: "Samenvatting van de functie RADIANS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hoek",
          detail: "Parameter `hoek` van de functie RADIANS.",
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
      d: "Beschrijving van de functie RAND.",
      a: "Samenvatting van de functie RAND.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "COUNTUNIQUE",
      t: 0,
      d: "Beschrijving van de functie COUNTUNIQUE.",
      a: "Samenvatting van de functie COUNTUNIQUE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie COUNTUNIQUE.",
          example: "A1:C100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie COUNTUNIQUE.",
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
      d: "Beschrijving van de functie DEGREES.",
      a: "Samenvatting van de functie DEGREES.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hoek",
          detail: "Parameter `hoek` van de functie DEGREES.",
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
      d: "Beschrijving van de functie ERFC.",
      a: "Samenvatting van de functie ERFC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "z",
          detail: "Parameter `z` van de functie ERFC.",
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
      d: "Beschrijving van de functie EVEN.",
      a: "Samenvatting van de functie EVEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie EVEN.",
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
      d: "Beschrijving van de functie EXP.",
      a: "Samenvatting van de functie EXP.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "exponent",
          detail: "Parameter `exponent` van de functie EXP.",
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
      d: "Beschrijving van de functie FACT.",
      a: "Samenvatting van de functie FACT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie FACT.",
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
      d: "Beschrijving van de functie FACTDOUBLE.",
      a: "Samenvatting van de functie FACTDOUBLE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie FACTDOUBLE.",
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
      d: "Beschrijving van de functie PI.",
      a: "Samenvatting van de functie PI.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FLOOR",
      t: 0,
      d: "Beschrijving van de functie FLOOR.",
      a: "Samenvatting van de functie FLOOR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie FLOOR.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Parameter `factor` van de functie FLOOR.",
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
      d: "Beschrijving van de functie GCD.",
      a: "Samenvatting van de functie GCD.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie GCD.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie GCD.",
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
      d: "Beschrijving van de functie RANDBETWEEN.",
      a: "Samenvatting van de functie RANDBETWEEN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "ondergrens",
          detail: "Parameter `ondergrens` van de functie RANDBETWEEN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bovengrens",
          detail: "Parameter `bovengrens` van de functie RANDBETWEEN.",
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
      d: "Beschrijving van de functie ROUND.",
      a: "Samenvatting van de functie ROUND.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ROUND.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimalen",
          detail: "Parameter `decimalen` van de functie ROUND.",
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
      d: "Beschrijving van de functie ROUNDDOWN.",
      a: "Samenvatting van de functie ROUNDDOWN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ROUNDDOWN.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimalen",
          detail: "Parameter `decimalen` van de functie ROUNDDOWN.",
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
      d: "Beschrijving van de functie ROUNDUP.",
      a: "Samenvatting van de functie ROUNDUP.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ROUNDUP.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimalen",
          detail: "Parameter `decimalen` van de functie ROUNDUP.",
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
      d: "Beschrijving van de functie SERIESSUM.",
      a: "Samenvatting van de functie SERIESSUM.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie SERIESSUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "Parameter `n` van de functie SERIESSUM.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "m",
          detail: "Parameter `m` van de functie SERIESSUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a",
          detail: "Parameter `a` van de functie SERIESSUM.",
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
      d: "Beschrijving van de functie SIGN.",
      a: "Samenvatting van de functie SIGN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie SIGN.",
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
      d: "Beschrijving van de functie SIN.",
      a: "Samenvatting van de functie SIN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hoek",
          detail: "Parameter `hoek` van de functie SIN.",
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
      d: "Beschrijving van de functie SINH.",
      a: "Samenvatting van de functie SINH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie SINH.",
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
      d: "Beschrijving van de functie SQRT.",
      a: "Samenvatting van de functie SQRT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie SQRT.",
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
      d: "Beschrijving van de functie SQRTPI.",
      a: "Samenvatting van de functie SQRTPI.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie SQRTPI.",
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
      d: "Beschrijving van de functie GAMMALN.",
      a: "Samenvatting van de functie GAMMALN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie GAMMALN.",
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
      d: "Beschrijving van de functie COS.",
      a: "Samenvatting van de functie COS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hoek",
          detail: "Parameter `hoek` van de functie COS.",
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
      d: "Beschrijving van de functie TRUNC.",
      a: "Samenvatting van de functie TRUNC.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie TRUNC.",
          example: "3.141592654",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimalen",
          detail: "Parameter `decimalen` van de functie TRUNC.",
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
      d: "Beschrijving van de functie QUOTIENT.",
      a: "Samenvatting van de functie QUOTIENT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "deeltal",
          detail: "Parameter `deeltal` van de functie QUOTIENT.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "deler",
          detail: "Parameter `deler` van de functie QUOTIENT.",
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
      d: "Beschrijving van de functie POWER.",
      a: "Samenvatting van de functie POWER.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "grondtal",
          detail: "Parameter `grondtal` van de functie POWER.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "exponent",
          detail: "Parameter `exponent` van de functie POWER.",
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
      d: "Beschrijving van de functie SUMIFS.",
      a: "Samenvatting van de functie SUMIFS.",
      m: [
        3,
        257
      ],
      p: [
        {
          name: "sombereik",
          detail: "Parameter `sombereik` van de functie SUMIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criteriumbereik1",
          detail: "Parameter `criteriumbereik1` van de functie SUMIFS.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterium1",
          detail: "Parameter `criterium1` van de functie SUMIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteriumbereik2",
          detail: "Parameter `criteriumbereik2` van de functie SUMIFS.",
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
      d: "Beschrijving van de functie COUNTIFS.",
      a: "Samenvatting van de functie COUNTIFS.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "criteriumbereik1",
          detail: "Parameter `criteriumbereik1` van de functie COUNTIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterium1",
          detail: "Parameter `criterium1` van de functie COUNTIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteriumbereik2",
          detail: "Parameter `criteriumbereik2` van de functie COUNTIFS.",
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
      d: "Beschrijving van de functie PRODUCT.",
      a: "Samenvatting van de functie PRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "factor1",
          detail: "Parameter `factor1` van de functie PRODUCT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor2",
          detail: "Parameter `factor2` van de functie PRODUCT.",
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
      d: "Beschrijving van de functie HARMEAN.",
      a: "Samenvatting van de functie HARMEAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie HARMEAN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie HARMEAN.",
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
      d: "Beschrijving van de functie HYPGEOMDIST.",
      a: "Samenvatting van de functie HYPGEOMDIST.",
      m: [
        5,
        5
      ],
      p: [
        {
          name: "aantal_successen",
          detail: "Parameter `aantal_successen` van de functie HYPGEOMDIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_trekkingen",
          detail: "Parameter `aantal_trekkingen` van de functie HYPGEOMDIST.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "successen_in_populatie",
          detail: "Parameter `successen_in_populatie` van de functie HYPGEOMDIST.",
          example: "20",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "populatiegrootte",
          detail: "Parameter `populatiegrootte` van de functie HYPGEOMDIST.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Parameter `cumulatief` van de functie HYPGEOMDIST.",
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
      d: "Beschrijving van de functie INTERCEPT.",
      a: "Samenvatting van de functie INTERCEPT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Parameter `gegevens_y` van de functie INTERCEPT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Parameter `gegevens_x` van de functie INTERCEPT.",
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
      d: "Beschrijving van de functie KURT.",
      a: "Samenvatting van de functie KURT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie KURT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie KURT.",
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
      d: "Beschrijving van de functie LARGE.",
      a: "Samenvatting van de functie LARGE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Parameter `gegevens` van de functie LARGE.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "Parameter `n` van de functie LARGE.",
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
      d: "Beschrijving van de functie STDEVA.",
      a: "Samenvatting van de functie STDEVA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie STDEVA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie STDEVA.",
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
      d: "Beschrijving van de functie STDEVP.",
      a: "Samenvatting van de functie STDEVP.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie STDEVP.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie STDEVP.",
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
      d: "Beschrijving van de functie GEOMEAN.",
      a: "Samenvatting van de functie GEOMEAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie GEOMEAN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie GEOMEAN.",
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
      d: "Beschrijving van de functie RANK_EQ.",
      a: "Samenvatting van de functie RANK_EQ.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie RANK_EQ.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens",
          detail: "Parameter `gegevens` van de functie RANK_EQ.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "is_oplopend",
          detail: "Parameter `is_oplopend` van de functie RANK_EQ.",
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
      d: "Beschrijving van de functie RANK_AVG.",
      a: "Samenvatting van de functie RANK_AVG.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie RANK_AVG.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens",
          detail: "Parameter `gegevens` van de functie RANK_AVG.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "is_oplopend",
          detail: "Parameter `is_oplopend` van de functie RANK_AVG.",
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
      d: "Beschrijving van de functie PERCENTRANK_EXC.",
      a: "Samenvatting van de functie PERCENTRANK_EXC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "gegevens",
          detail: "Parameter `gegevens` van de functie PERCENTRANK_EXC.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie PERCENTRANK_EXC.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significante_cijfers",
          detail: "Parameter `significante_cijfers` van de functie PERCENTRANK_EXC.",
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
      d: "Beschrijving van de functie PERCENTRANK_INC.",
      a: "Samenvatting van de functie PERCENTRANK_INC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "gegevens",
          detail: "Parameter `gegevens` van de functie PERCENTRANK_INC.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie PERCENTRANK_INC.",
          example: " A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significante_cijfers",
          detail: "Parameter `significante_cijfers` van de functie PERCENTRANK_INC.",
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
      d: "Beschrijving van de functie FORECAST.",
      a: "Samenvatting van de functie FORECAST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie FORECAST.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_y",
          detail: "Parameter `gegevens_y` van de functie FORECAST.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Parameter `gegevens_x` van de functie FORECAST.",
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
      d: "Beschrijving van de functie FISHERINV.",
      a: "Samenvatting van de functie FISHERINV.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie FISHERINV.",
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
      d: "Beschrijving van de functie FISHER.",
      a: "Samenvatting van de functie FISHER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie FISHER.",
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
      d: "Beschrijving van de functie MODE_SNGL.",
      a: "Samenvatting van de functie MODE_SNGL.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie MODE_SNGL.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie MODE_SNGL.",
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
      d: "Beschrijving van de functie WEIBULL_DIST.",
      a: "Samenvatting van de functie WEIBULL_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie WEIBULL_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vorm",
          detail: "Parameter `vorm` van de functie WEIBULL_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "schaal",
          detail: "Parameter `schaal` van de functie WEIBULL_DIST.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Parameter `cumulatief` van de functie WEIBULL_DIST.",
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
      d: "Beschrijving van de functie COUNT.",
      a: "Samenvatting van de functie COUNT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie COUNT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie COUNT.",
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
      d: "Beschrijving van de functie COUNTA.",
      a: "Samenvatting van de functie COUNTA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie COUNTA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie COUNTA.",
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
      d: "Beschrijving van de functie AVEDEV.",
      a: "Samenvatting van de functie AVEDEV.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie AVEDEV.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie AVEDEV.",
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
      d: "Beschrijving van de functie AVERAGE.",
      a: "Samenvatting van de functie AVERAGE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie AVERAGE.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie AVERAGE.",
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
      d: "Beschrijving van de functie AVERAGEA.",
      a: "Samenvatting van de functie AVERAGEA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie AVERAGEA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie AVERAGEA.",
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
      d: "Beschrijving van de functie BINOM_DIST.",
      a: "Samenvatting van de functie BINOM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "aantal_successen",
          detail: "Parameter `aantal_successen` van de functie BINOM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_pogingen",
          detail: "Parameter `aantal_pogingen` van de functie BINOM_DIST.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kans_op_succes",
          detail: "Parameter `kans_op_succes` van de functie BINOM_DIST.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Parameter `cumulatief` van de functie BINOM_DIST.",
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
      d: "Beschrijving van de functie BINOM_INV.",
      a: "Samenvatting van de functie BINOM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "aantal_pogingen",
          detail: "Parameter `aantal_pogingen` van de functie BINOM_INV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kans_op_succes",
          detail: "Parameter `kans_op_succes` van de functie BINOM_INV.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "doelkans",
          detail: "Parameter `doelkans` van de functie BINOM_INV.",
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
      d: "Beschrijving van de functie CONFIDENCE_NORM.",
      a: "Samenvatting van de functie CONFIDENCE_NORM.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "alfa",
          detail: "Parameter `alfa` van de functie CONFIDENCE_NORM.",
          example: "0.05",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standaarddeviatie",
          detail: "Parameter `standaarddeviatie` van de functie CONFIDENCE_NORM.",
          example: "1.6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "populatiegrootte",
          detail: "Parameter `populatiegrootte` van de functie CONFIDENCE_NORM.",
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
      d: "Beschrijving van de functie CORREL.",
      a: "Samenvatting van de functie CORREL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Parameter `gegevens_y` van de functie CORREL.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Parameter `gegevens_x` van de functie CORREL.",
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
      d: "Beschrijving van de functie COVARIANCE_P.",
      a: "Samenvatting van de functie COVARIANCE_P.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Parameter `gegevens_y` van de functie COVARIANCE_P.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Parameter `gegevens_x` van de functie COVARIANCE_P.",
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
      d: "Beschrijving van de functie COVARIANCE_S.",
      a: "Samenvatting van de functie COVARIANCE_S.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Parameter `gegevens_y` van de functie COVARIANCE_S.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Parameter `gegevens_x` van de functie COVARIANCE_S.",
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
      d: "Beschrijving van de functie DEVSQ.",
      a: "Samenvatting van de functie DEVSQ.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie DEVSQ.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie DEVSQ.",
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
      d: "Beschrijving van de functie EXPON_DIST.",
      a: "Samenvatting van de functie EXPON_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie EXPON_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lambda",
          detail: "Parameter `lambda` van de functie EXPON_DIST.",
          example: "0.5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Parameter `cumulatief` van de functie EXPON_DIST.",
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
      d: "Beschrijving van de functie AVERAGEIF.",
      a: "Samenvatting van de functie AVERAGEIF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "criteriumbereik",
          detail: "Parameter `criteriumbereik` van de functie AVERAGEIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterium",
          detail: "Parameter `criterium` van de functie AVERAGEIF.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "gemiddeldebereik",
          detail: "Parameter `gemiddeldebereik` van de functie AVERAGEIF.",
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
      d: "Beschrijving van de functie AVERAGEIFS.",
      a: "Samenvatting van de functie AVERAGEIFS.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "gemiddeldebereik",
          detail: "Parameter `gemiddeldebereik` van de functie AVERAGEIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteriumbereik1",
          detail: "Parameter `criteriumbereik1` van de functie AVERAGEIFS.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterium1",
          detail: "Parameter `criterium1` van de functie AVERAGEIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteriumbereik2",
          detail: "Parameter `criteriumbereik2` van de functie AVERAGEIFS.",
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
      d: "Beschrijving van de functie PERMUT.",
      a: "Samenvatting van de functie PERMUT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "Parameter `n` van de functie PERMUT.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Parameter `k` van de functie PERMUT.",
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
      d: "Beschrijving van de functie TRIMMEAN.",
      a: "Samenvatting van de functie TRIMMEAN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Parameter `gegevens` van de functie TRIMMEAN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "uitgesloten_deel",
          detail: "Parameter `uitgesloten_deel` van de functie TRIMMEAN.",
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
      d: "Beschrijving van de functie PERCENTILE_EXC.",
      a: "Samenvatting van de functie PERCENTILE_EXC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Parameter `gegevens` van de functie PERCENTILE_EXC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "percentiel",
          detail: "Parameter `percentiel` van de functie PERCENTILE_EXC.",
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
      d: "Beschrijving van de functie PERCENTILE_INC.",
      a: "Samenvatting van de functie PERCENTILE_INC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Parameter `gegevens` van de functie PERCENTILE_INC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "percentiel",
          detail: "Parameter `percentiel` van de functie PERCENTILE_INC.",
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
      d: "Beschrijving van de functie PEARSON.",
      a: "Samenvatting van de functie PEARSON.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Parameter `gegevens_y` van de functie PEARSON.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Parameter `gegevens_x` van de functie PEARSON.",
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
      d: "Beschrijving van de functie NORM_S_INV.",
      a: "Samenvatting van de functie NORM_S_INV.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie NORM_S_INV.",
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
      d: "Beschrijving van de functie NORM_S_DIST.",
      a: "Samenvatting van de functie NORM_S_DIST.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie NORM_S_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Parameter `cumulatief` van de functie NORM_S_DIST.",
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
      d: "Beschrijving van de functie NORM_INV.",
      a: "Samenvatting van de functie NORM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie NORM_INV.",
          example: "0.75",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gemiddelde",
          detail: "Parameter `gemiddelde` van de functie NORM_INV.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standaarddeviatie",
          detail: "Parameter `standaarddeviatie` van de functie NORM_INV.",
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
      d: "Beschrijving van de functie NORM_DIST.",
      a: "Samenvatting van de functie NORM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie NORM_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gemiddelde",
          detail: "Parameter `gemiddelde` van de functie NORM_DIST.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standaarddeviatie",
          detail: "Parameter `standaarddeviatie` van de functie NORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Parameter `cumulatief` van de functie NORM_DIST.",
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
      d: "Beschrijving van de functie NEGBINOM_DIST.",
      a: "Samenvatting van de functie NEGBINOM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "aantal_mislukkingen",
          detail: "Parameter `aantal_mislukkingen` van de functie NEGBINOM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_successen",
          detail: "Parameter `aantal_successen` van de functie NEGBINOM_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kans_op_succes",
          detail: "Parameter `kans_op_succes` van de functie NEGBINOM_DIST.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Parameter `cumulatief` van de functie NEGBINOM_DIST.",
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
      d: "Beschrijving van de functie MINA.",
      a: "Samenvatting van de functie MINA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie MINA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie MINA.",
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
      d: "Beschrijving van de functie MIN.",
      a: "Samenvatting van de functie MIN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie MIN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie MIN.",
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
      d: "Beschrijving van de functie MEDIAN.",
      a: "Samenvatting van de functie MEDIAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie MEDIAN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie MEDIAN.",
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
      d: "Beschrijving van de functie MAXA.",
      a: "Samenvatting van de functie MAXA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie MAXA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie MAXA.",
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
      d: "Beschrijving van de functie MAX.",
      a: "Samenvatting van de functie MAX.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie MAX.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie MAX.",
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
      d: "Beschrijving van de functie LOGNORM_INV.",
      a: "Samenvatting van de functie LOGNORM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie LOGNORM_INV.",
          example: "0.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gemiddelde",
          detail: "Parameter `gemiddelde` van de functie LOGNORM_INV.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standaarddeviatie",
          detail: "Parameter `standaarddeviatie` van de functie LOGNORM_INV.",
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
      d: "Beschrijving van de functie LOGNORM_DIST.",
      a: "Samenvatting van de functie LOGNORM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie LOGNORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gemiddelde",
          detail: "Parameter `gemiddelde` van de functie LOGNORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standaarddeviatie",
          detail: "Parameter `standaarddeviatie` van de functie LOGNORM_DIST.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Parameter `cumulatief` van de functie LOGNORM_DIST.",
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
      d: "Beschrijving van de functie Z_TEST.",
      a: "Samenvatting van de functie Z_TEST.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "gegevens",
          detail: "Parameter `gegevens` van de functie Z_TEST.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie Z_TEST.",
          example: "B2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standaarddeviatie",
          detail: "Parameter `standaarddeviatie` van de functie Z_TEST.",
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
      d: "Beschrijving van de functie PROB.",
      a: "Samenvatting van de functie PROB.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "gegevens",
          detail: "Parameter `gegevens` van de functie PROB.",
          example: "A3:A6",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kansen",
          detail: "Parameter `kansen` van de functie PROB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "ondergrens",
          detail: "Parameter `ondergrens` van de functie PROB.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bovengrens",
          detail: "Parameter `bovengrens` van de functie PROB.",
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
      d: "Beschrijving van de functie QUARTILE_EXC.",
      a: "Samenvatting van de functie QUARTILE_EXC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Parameter `gegevens` van de functie QUARTILE_EXC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kwartielnummer",
          detail: "Parameter `kwartielnummer` van de functie QUARTILE_EXC.",
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
      d: "Beschrijving van de functie QUARTILE_INC.",
      a: "Samenvatting van de functie QUARTILE_INC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Parameter `gegevens` van de functie QUARTILE_INC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kwartielnummer",
          detail: "Parameter `kwartielnummer` van de functie QUARTILE_INC.",
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
      d: "Beschrijving van de functie POISSON_DIST.",
      a: "Samenvatting van de functie POISSON_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie POISSON_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gemiddelde",
          detail: "Parameter `gemiddelde` van de functie POISSON_DIST.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Parameter `cumulatief` van de functie POISSON_DIST.",
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
      d: "Beschrijving van de functie RSQ.",
      a: "Samenvatting van de functie RSQ.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Parameter `gegevens_y` van de functie RSQ.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Parameter `gegevens_x` van de functie RSQ.",
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
      d: "Beschrijving van de functie T_DIST.",
      a: "Samenvatting van de functie T_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie T_DIST.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden",
          detail: "Parameter `vrijheidsgraden` van de functie T_DIST.",
          example: "30",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Parameter `cumulatief` van de functie T_DIST.",
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
      d: "Beschrijving van de functie T_DIST_2T.",
      a: "Samenvatting van de functie T_DIST_2T.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie T_DIST_2T.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden",
          detail: "Parameter `vrijheidsgraden` van de functie T_DIST_2T.",
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
      d: "Beschrijving van de functie T_DIST_RT.",
      a: "Samenvatting van de functie T_DIST_RT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie T_DIST_RT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden",
          detail: "Parameter `vrijheidsgraden` van de functie T_DIST_RT.",
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
      d: "Beschrijving van de functie T_INV.",
      a: "Samenvatting van de functie T_INV.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "kans",
          detail: "Parameter `kans` van de functie T_INV.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden",
          detail: "Parameter `vrijheidsgraden` van de functie T_INV.",
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
      d: "Beschrijving van de functie T_INV_2T.",
      a: "Samenvatting van de functie T_INV_2T.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "kans",
          detail: "Parameter `kans` van de functie T_INV_2T.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden",
          detail: "Parameter `vrijheidsgraden` van de functie T_INV_2T.",
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
      d: "Beschrijving van de functie T_TEST.",
      a: "Samenvatting van de functie T_TEST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "bereik1",
          detail: "Parameter `bereik1` van de functie T_TEST.",
          example: "A1:A4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bereik2",
          detail: "Parameter `bereik2` van de functie T_TEST.",
          example: "B1:B4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "staarten",
          detail: "Parameter `staarten` van de functie T_TEST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "type",
          detail: "Parameter `type` van de functie T_TEST.",
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
      d: "Beschrijving van de functie F_DIST.",
      a: "Samenvatting van de functie F_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie F_DIST.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden1",
          detail: "Parameter `vrijheidsgraden1` van de functie F_DIST.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden2",
          detail: "Parameter `vrijheidsgraden2` van de functie F_DIST.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatief",
          detail: "Parameter `cumulatief` van de functie F_DIST.",
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
      d: "Beschrijving van de functie F_DIST_RT.",
      a: "Samenvatting van de functie F_DIST_RT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parameter `x` van de functie F_DIST_RT.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden1",
          detail: "Parameter `vrijheidsgraden1` van de functie F_DIST_RT.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vrijheidsgraden2",
          detail: "Parameter `vrijheidsgraden2` van de functie F_DIST_RT.",
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
      d: "Beschrijving van de functie VAR_P.",
      a: "Samenvatting van de functie VAR_P.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie VAR_P.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie VAR_P.",
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
      d: "Beschrijving van de functie VAR_S.",
      a: "Samenvatting van de functie VAR_S.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie VAR_S.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie VAR_S.",
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
      d: "Beschrijving van de functie VARA.",
      a: "Samenvatting van de functie VARA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie VARA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie VARA.",
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
      d: "Beschrijving van de functie VARPA.",
      a: "Samenvatting van de functie VARPA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie VARPA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie VARPA.",
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
      d: "Beschrijving van de functie STEYX.",
      a: "Samenvatting van de functie STEYX.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Parameter `gegevens_y` van de functie STEYX.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Parameter `gegevens_x` van de functie STEYX.",
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
      d: "Beschrijving van de functie STANDARDIZE.",
      a: "Samenvatting van de functie STANDARDIZE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie STANDARDIZE.",
          example: "96",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gemiddelde",
          detail: "Parameter `gemiddelde` van de functie STANDARDIZE.",
          example: "80",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standaarddeviatie",
          detail: "Parameter `standaarddeviatie` van de functie STANDARDIZE.",
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
      d: "Beschrijving van de functie SMALL.",
      a: "Samenvatting van de functie SMALL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Parameter `gegevens` van de functie SMALL.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "n",
          detail: "Parameter `n` van de functie SMALL.",
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
      d: "Beschrijving van de functie SLOPE.",
      a: "Samenvatting van de functie SLOPE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens_y",
          detail: "Parameter `gegevens_y` van de functie SLOPE.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gegevens_x",
          detail: "Parameter `gegevens_x` van de functie SLOPE.",
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
      d: "Beschrijving van de functie SKEW.",
      a: "Samenvatting van de functie SKEW.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie SKEW.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie SKEW.",
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
      d: "Beschrijving van de functie SKEW_P.",
      a: "Samenvatting van de functie SKEW_P.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie SKEW_P.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie SKEW_P.",
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
      d: "Beschrijving van de functie VLOOKUP.",
      a: "Samenvatting van de functie VLOOKUP.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "zoeksleutel",
          detail: "Parameter `zoeksleutel` van de functie VLOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bereik",
          detail: "Parameter `bereik` van de functie VLOOKUP.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "index",
          detail: "Parameter `index` van de functie VLOOKUP.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "is_gesorteerd",
          detail: "Parameter `is_gesorteerd` van de functie VLOOKUP.",
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
      d: "Beschrijving van de functie HLOOKUP.",
      a: "Samenvatting van de functie HLOOKUP.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "zoeksleutel",
          detail: "Parameter `zoeksleutel` van de functie HLOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bereik",
          detail: "Parameter `bereik` van de functie HLOOKUP.",
          example: "A2:Z6",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "index",
          detail: "Parameter `index` van de functie HLOOKUP.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "is_gesorteerd",
          detail: "Parameter `is_gesorteerd` van de functie HLOOKUP.",
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
      d: "Beschrijving van de functie LOOKUP.",
      a: "Samenvatting van de functie LOOKUP.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "zoeksleutel",
          detail: "Parameter `zoeksleutel` van de functie LOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zoekbereik|resultaatmatrix",
          detail: "Parameter `search_range|search_result_array` van de functie LOOKUP.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "resultaatbereik",
          detail: "Parameter `resultaatbereik` van de functie LOOKUP.",
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
      d: "Beschrijving van de functie ADDRESS.",
      a: "Samenvatting van de functie ADDRESS.",
      m: [
        2,
        5
      ],
      p: [
        {
          name: "rij",
          detail: "Parameter `rij` van de functie ADDRESS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kolom",
          detail: "Parameter `kolom` van de functie ADDRESS.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "modus_absoluut_relatief",
          detail: "Parameter `modus_absoluut_relatief` van de functie ADDRESS.",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a1_notatie_gebruiken",
          detail: "Parameter `a1_notatie_gebruiken` van de functie ADDRESS.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "blad",
          detail: "Parameter `blad` van de functie ADDRESS.",
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
      d: "Beschrijving van de functie INDIRECT.",
      a: "Samenvatting van de functie INDIRECT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "celverwijzing_als_tekenreeks",
          detail: "Parameter `celverwijzing_als_tekenreeks` van de functie INDIRECT.",
          example: "\"Sheet2!\"&B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "is_a1_notatie",
          detail: "Parameter `is_a1_notatie` van de functie INDIRECT.",
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
      d: "Beschrijving van de functie ROW.",
      a: "Samenvatting van de functie ROW.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "celverwijzing",
          detail: "Parameter `celverwijzing` van de functie ROW.",
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
      d: "Beschrijving van de functie ROWS.",
      a: "Samenvatting van de functie ROWS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "bereik",
          detail: "Parameter `bereik` van de functie ROWS.",
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
      d: "Beschrijving van de functie COLUMN.",
      a: "Samenvatting van de functie COLUMN.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "celverwijzing",
          detail: "Parameter `celverwijzing` van de functie COLUMN.",
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
      d: "Beschrijving van de functie COLUMNS.",
      a: "Samenvatting van de functie COLUMNS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "bereik",
          detail: "Parameter `bereik` van de functie COLUMNS.",
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
      d: "Beschrijving van de functie OFFSET.",
      a: "Samenvatting van de functie OFFSET.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "celverwijzing",
          detail: "Parameter `celverwijzing` van de functie OFFSET.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "rijen_verschuiven",
          detail: "Parameter `rijen_verschuiven` van de functie OFFSET.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kolommen_verschuiven",
          detail: "Parameter `kolommen_verschuiven` van de functie OFFSET.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "hoogte",
          detail: "Parameter `hoogte` van de functie OFFSET.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "breedte",
          detail: "Parameter `breedte` van de functie OFFSET.",
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
      d: "Beschrijving van de functie MATCH.",
      a: "Samenvatting van de functie MATCH.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "zoeksleutel",
          detail: "Parameter `zoeksleutel` van de functie MATCH.",
          example: "\"Sunday\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bereik",
          detail: "Parameter `bereik` van de functie MATCH.",
          example: "A2:A9",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "zoektype",
          detail: "Parameter `zoektype` van de functie MATCH.",
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
      d: "Beschrijving van de functie INDEX.",
      a: "Samenvatting van de functie INDEX.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "verwijzing",
          detail: "Parameter `verwijzing` van de functie INDEX.",
          example: "A1:C20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "rij",
          detail: "Parameter `rij` van de functie INDEX.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kolom",
          detail: "Parameter `kolom` van de functie INDEX.",
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
      d: "Beschrijving van de functie GETPIVOTDATA.",
      a: "Samenvatting van de functie GETPIVOTDATA.",
      m: [
        2,
        254
      ],
      p: [
        {
          name: "waardenaam",
          detail: "Parameter `waardenaam` van de functie GETPIVOTDATA.",
          example: "\"SUM of number of units\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cel_draaitabel",
          detail: "Parameter `cel_draaitabel` van de functie GETPIVOTDATA.",
          example: "'Pivot table'!A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "oorspronkelijke_kolom",
          detail: "Parameter `oorspronkelijke_kolom` van de functie GETPIVOTDATA.",
          example: "\"division\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        },
        {
          name: "item_draaitabel",
          detail: "Parameter `item_draaitabel` van de functie GETPIVOTDATA.",
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
      d: "Beschrijving van de functie CHOOSE.",
      a: "Samenvatting van de functie CHOOSE.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "index",
          detail: "Parameter `index` van de functie CHOOSE.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "keuze1",
          detail: "Parameter `keuze1` van de functie CHOOSE.",
          example: "\"A\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "keuze2",
          detail: "Parameter `keuze2` van de functie CHOOSE.",
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
      d: "Beschrijving van de functie HYPERLINK.",
      a: "Samenvatting van de functie HYPERLINK.",
      p: [
        {
          name: "url",
          detail: "Parameter `url` van de functie HYPERLINK.",
          example: "\"http://www.luckysheet.com/\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "linktekst",
          detail: "Parameter `linktekst` van de functie HYPERLINK.",
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
      d: "Beschrijving van de functie TIME.",
      a: "Samenvatting van de functie TIME.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "uur",
          detail: "Parameter `uur` van de functie TIME.",
          example: "11",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "minuut",
          detail: "Parameter `minuut` van de functie TIME.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "seconde",
          detail: "Parameter `seconde` van de functie TIME.",
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
      d: "Beschrijving van de functie TIMEVALUE.",
      a: "Samenvatting van de functie TIMEVALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tijdtekenreeks",
          detail: "Parameter `tijdtekenreeks` van de functie TIMEVALUE.",
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
      d: "Beschrijving van de functie EOMONTH.",
      a: "Samenvatting van de functie EOMONTH.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` van de functie EOMONTH.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aantal_maanden",
          detail: "Parameter `aantal_maanden` van de functie EOMONTH.",
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
      d: "Beschrijving van de functie EDATE.",
      a: "Samenvatting van de functie EDATE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` van de functie EDATE.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aantal_maanden",
          detail: "Parameter `aantal_maanden` van de functie EDATE.",
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
      d: "Beschrijving van de functie SECOND.",
      a: "Samenvatting van de functie SECOND.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tijd",
          detail: "Parameter `tijd` van de functie SECOND.",
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
      d: "Beschrijving van de functie MINUTE.",
      a: "Samenvatting van de functie MINUTE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tijd",
          detail: "Parameter `tijd` van de functie MINUTE.",
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
      d: "Beschrijving van de functie HOUR.",
      a: "Samenvatting van de functie HOUR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tijd",
          detail: "Parameter `tijd` van de functie HOUR.",
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
      d: "Beschrijving van de functie NOW.",
      a: "Samenvatting van de functie NOW.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "NETWORKDAYS",
      t: 6,
      d: "Beschrijving van de functie NETWORKDAYS.",
      a: "Samenvatting van de functie NETWORKDAYS.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` van de functie NETWORKDAYS.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "einddatum",
          detail: "Parameter `einddatum` van de functie NETWORKDAYS.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feestdagen",
          detail: "Parameter `feestdagen` van de functie NETWORKDAYS.",
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
      d: "Beschrijving van de functie NETWORKDAYS_INTL.",
      a: "Samenvatting van de functie NETWORKDAYS_INTL.",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` van de functie NETWORKDAYS_INTL.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "einddatum",
          detail: "Parameter `einddatum` van de functie NETWORKDAYS_INTL.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "weekend",
          detail: "Parameter `weekend` van de functie NETWORKDAYS_INTL.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feestdagen",
          detail: "Parameter `feestdagen` van de functie NETWORKDAYS_INTL.",
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
      d: "Beschrijving van de functie ISOWEEKNUM.",
      a: "Samenvatting van de functie ISOWEEKNUM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "Parameter `datum` van de functie ISOWEEKNUM.",
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
      d: "Beschrijving van de functie WEEKNUM.",
      a: "Samenvatting van de functie WEEKNUM.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "datum",
          detail: "Parameter `datum` van de functie WEEKNUM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "type",
          detail: "Parameter `type` van de functie WEEKNUM.",
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
      d: "Beschrijving van de functie WEEKDAY.",
      a: "Samenvatting van de functie WEEKDAY.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "datum",
          detail: "Parameter `datum` van de functie WEEKDAY.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "type",
          detail: "Parameter `type` van de functie WEEKDAY.",
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
      d: "Beschrijving van de functie DAY.",
      a: "Samenvatting van de functie DAY.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "Parameter `datum` van de functie DAY.",
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
      d: "Beschrijving van de functie DAYS.",
      a: "Samenvatting van de functie DAYS.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "einddatum",
          detail: "Parameter `einddatum` van de functie DAYS.",
          example: "2011-3-15",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "startdatum",
          detail: "Parameter `startdatum` van de functie DAYS.",
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
      d: "Beschrijving van de functie DAYS360.",
      a: "Samenvatting van de functie DAYS360.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` van de functie DAYS360.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "einddatum",
          detail: "Parameter `einddatum` van de functie DAYS360.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "methode",
          detail: "Parameter `methode` van de functie DAYS360.",
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
      d: "Beschrijving van de functie DATE.",
      a: "Samenvatting van de functie DATE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "jaar",
          detail: "Parameter `jaar` van de functie DATE.",
          example: "1969",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "maand",
          detail: "Parameter `maand` van de functie DATE.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dag",
          detail: "Parameter `dag` van de functie DATE.",
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
      d: "Beschrijving van de functie DATEVALUE.",
      a: "Samenvatting van de functie DATEVALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datumtekenreeks",
          detail: "Parameter `datumtekenreeks` van de functie DATEVALUE.",
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
      d: "Beschrijving van de functie DATEDIF.",
      a: "Samenvatting van de functie DATEDIF.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` van de functie DATEDIF.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "einddatum",
          detail: "Parameter `einddatum` van de functie DATEDIF.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "eenheid",
          detail: "Parameter `eenheid` van de functie DATEDIF.",
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
      d: "Beschrijving van de functie WORKDAY.",
      a: "Samenvatting van de functie WORKDAY.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` van de functie WORKDAY.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aantal_dagen",
          detail: "Parameter `aantal_dagen` van de functie WORKDAY.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "feestdagen",
          detail: "Parameter `feestdagen` van de functie WORKDAY.",
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
      d: "Beschrijving van de functie WORKDAY_INTL.",
      a: "Samenvatting van de functie WORKDAY_INTL.",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` van de functie WORKDAY_INTL.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aantal_dagen",
          detail: "Parameter `aantal_dagen` van de functie WORKDAY_INTL.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "weekend",
          detail: "Parameter `weekend` van de functie WORKDAY_INTL.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feestdagen",
          detail: "Parameter `feestdagen` van de functie WORKDAY_INTL.",
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
      d: "Beschrijving van de functie YEAR.",
      a: "Samenvatting van de functie YEAR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "Parameter `datum` van de functie YEAR.",
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
      d: "Beschrijving van de functie YEARFRAC.",
      a: "Samenvatting van de functie YEARFRAC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Parameter `startdatum` van de functie YEARFRAC.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "einddatum",
          detail: "Parameter `einddatum` van de functie YEARFRAC.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie YEARFRAC.",
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
      d: "Beschrijving van de functie TODAY.",
      a: "Samenvatting van de functie TODAY.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "MONTH",
      t: 6,
      d: "Beschrijving van de functie MONTH.",
      a: "Samenvatting van de functie MONTH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "Parameter `datum` van de functie MONTH.",
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
      d: "Beschrijving van de functie EFFECT.",
      a: "Samenvatting van de functie EFFECT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "nominale_rente",
          detail: "Parameter `nominale_rente` van de functie EFFECT.",
          example: "0.99",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodes_per_jaar",
          detail: "Parameter `periodes_per_jaar` van de functie EFFECT.",
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
      d: "Beschrijving van de functie DOLLAR.",
      a: "Samenvatting van de functie DOLLAR.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "getal",
          detail: "Parameter `getal` van de functie DOLLAR.",
          example: "1.2351",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_decimalen",
          detail: "Parameter `aantal_decimalen` van de functie DOLLAR.",
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
      d: "Beschrijving van de functie DOLLARDE.",
      a: "Samenvatting van de functie DOLLARDE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gebroken_prijs",
          detail: "Parameter `gebroken_prijs` van de functie DOLLARDE.",
          example: "100.10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "eenheid",
          detail: "Parameter `eenheid` van de functie DOLLARDE.",
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
      d: "Beschrijving van de functie DOLLARFR.",
      a: "Samenvatting van de functie DOLLARFR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "decimale_prijs",
          detail: "Parameter `decimale_prijs` van de functie DOLLARFR.",
          example: "100.125",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "eenheid",
          detail: "Parameter `eenheid` van de functie DOLLARFR.",
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
      d: "Beschrijving van de functie DB.",
      a: "Samenvatting van de functie DB.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "kostprijs",
          detail: "Parameter `kostprijs` van de functie DB.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwaarde",
          detail: "Parameter `restwaarde` van de functie DB.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "levensduur",
          detail: "Parameter `levensduur` van de functie DB.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "Parameter `periode` van de functie DB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "maand",
          detail: "Parameter `maand` van de functie DB.",
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
      d: "Beschrijving van de functie DDB.",
      a: "Samenvatting van de functie DDB.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "kostprijs",
          detail: "Parameter `kostprijs` van de functie DDB.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwaarde",
          detail: "Parameter `restwaarde` van de functie DDB.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "levensduur",
          detail: "Parameter `levensduur` van de functie DDB.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "Parameter `periode` van de functie DDB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Parameter `factor` van de functie DDB.",
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
      d: "Beschrijving van de functie RATE.",
      a: "Samenvatting van de functie RATE.",
      m: [
        3,
        6
      ],
      p: [
        {
          name: "aantal_periodes",
          detail: "Parameter `aantal_periodes` van de functie RATE.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "betaling_per_periode",
          detail: "Parameter `betaling_per_periode` van de functie RATE.",
          example: "-100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "Parameter `huidige_waarde` van de functie RATE.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "toekomstige_waarde",
          detail: "Parameter `toekomstige_waarde` van de functie RATE.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Parameter `einde_of_begin` van de functie RATE.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "renteschatting",
          detail: "Parameter `renteschatting` van de functie RATE.",
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
      d: "Beschrijving van de functie CUMPRINC.",
      a: "Samenvatting van de functie CUMPRINC.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie CUMPRINC.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_periodes",
          detail: "Parameter `aantal_periodes` van de functie CUMPRINC.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "Parameter `huidige_waarde` van de functie CUMPRINC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "eerste_periode",
          detail: "Parameter `eerste_periode` van de functie CUMPRINC.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "laatste_periode",
          detail: "Parameter `laatste_periode` van de functie CUMPRINC.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Parameter `einde_of_begin` van de functie CUMPRINC.",
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
      d: "Beschrijving van de functie COUPNUM.",
      a: "Samenvatting van de functie COUPNUM.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie COUPNUM.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie COUPNUM.",
          example: "02",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequentie",
          detail: "Parameter `frequentie` van de functie COUPNUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie COUPNUM.",
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
      d: "Beschrijving van de functie SYD.",
      a: "Samenvatting van de functie SYD.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "kostprijs",
          detail: "Parameter `kostprijs` van de functie SYD.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwaarde",
          detail: "Parameter `restwaarde` van de functie SYD.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "levensduur",
          detail: "Parameter `levensduur` van de functie SYD.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "Parameter `periode` van de functie SYD.",
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
      d: "Beschrijving van de functie TBILLEQ.",
      a: "Samenvatting van de functie TBILLEQ.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie TBILLEQ.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie TBILLEQ.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "discontovoet",
          detail: "Parameter `discontovoet` van de functie TBILLEQ.",
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
      d: "Beschrijving van de functie TBILLYIELD.",
      a: "Samenvatting van de functie TBILLYIELD.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie TBILLYIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie TBILLYIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prijs",
          detail: "Parameter `prijs` van de functie TBILLYIELD.",
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
      d: "Beschrijving van de functie TBILLPRICE.",
      a: "Samenvatting van de functie TBILLPRICE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie TBILLPRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie TBILLPRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "discontovoet",
          detail: "Parameter `discontovoet` van de functie TBILLPRICE.",
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
      d: "Beschrijving van de functie PV.",
      a: "Samenvatting van de functie PV.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie PV.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_periodes",
          detail: "Parameter `aantal_periodes` van de functie PV.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "betalingsbedrag",
          detail: "Parameter `betalingsbedrag` van de functie PV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "toekomstige_waarde",
          detail: "Parameter `toekomstige_waarde` van de functie PV.",
          example: "D2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Parameter `einde_of_begin` van de functie PV.",
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
      d: "Beschrijving van de functie ACCRINT.",
      a: "Samenvatting van de functie ACCRINT.",
      m: [
        6,
        8
      ],
      p: [
        {
          name: "uitgiftedatum",
          detail: "Parameter `uitgiftedatum` van de functie ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "eerste_betaling",
          detail: "Parameter `eerste_betaling` van de functie ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie ACCRINT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aflossingswaarde",
          detail: "Parameter `aflossingswaarde` van de functie ACCRINT.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequentie",
          detail: "Parameter `frequentie` van de functie ACCRINT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie ACCRINT.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "berekeningsmethode",
          detail: "Parameter `berekeningsmethode` van de functie ACCRINT.",
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
      d: "Beschrijving van de functie ACCRINTM.",
      a: "Samenvatting van de functie ACCRINTM.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "uitgiftedatum",
          detail: "Parameter `uitgiftedatum` van de functie ACCRINTM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie ACCRINTM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie ACCRINTM.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aflossingswaarde",
          detail: "Parameter `aflossingswaarde` van de functie ACCRINTM.",
          example: "1000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie ACCRINTM.",
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
      d: "Beschrijving van de functie COUPDAYBS.",
      a: "Samenvatting van de functie COUPDAYBS.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie COUPDAYBS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie COUPDAYBS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequentie",
          detail: "Parameter `frequentie` van de functie COUPDAYBS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie COUPDAYBS.",
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
      d: "Beschrijving van de functie COUPDAYS.",
      a: "Samenvatting van de functie COUPDAYS.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie COUPDAYS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie COUPDAYS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequentie",
          detail: "Parameter `frequentie` van de functie COUPDAYS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie COUPDAYS.",
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
      d: "Beschrijving van de functie COUPDAYSNC.",
      a: "Samenvatting van de functie COUPDAYSNC.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie COUPDAYSNC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie COUPDAYSNC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequentie",
          detail: "Parameter `frequentie` van de functie COUPDAYSNC.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie COUPDAYSNC.",
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
      d: "Beschrijving van de functie COUPNCD.",
      a: "Samenvatting van de functie COUPNCD.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie COUPNCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie COUPNCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequentie",
          detail: "Parameter `frequentie` van de functie COUPNCD.",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie COUPNCD.",
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
      d: "Beschrijving van de functie COUPPCD.",
      a: "Samenvatting van de functie COUPPCD.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie COUPPCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie COUPPCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequentie",
          detail: "Parameter `frequentie` van de functie COUPPCD.",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie COUPPCD.",
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
      d: "Beschrijving van de functie FV.",
      a: "Samenvatting van de functie FV.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie FV.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_periodes",
          detail: "Parameter `aantal_periodes` van de functie FV.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "betalingsbedrag",
          detail: "Parameter `betalingsbedrag` van de functie FV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "Parameter `huidige_waarde` van de functie FV.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Parameter `einde_of_begin` van de functie FV.",
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
      d: "Beschrijving van de functie FVSCHEDULE.",
      a: "Samenvatting van de functie FVSCHEDULE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "hoofdsom",
          detail: "Parameter `hoofdsom` van de functie FVSCHEDULE.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rentetabel",
          detail: "Parameter `rentetabel` van de functie FVSCHEDULE.",
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
      d: "Beschrijving van de functie YIELD.",
      a: "Samenvatting van de functie YIELD.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie YIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie YIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie YIELD.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "prijs",
          detail: "Parameter `prijs` van de functie YIELD.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aflossingswaarde",
          detail: "Parameter `aflossingswaarde` van de functie YIELD.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequentie",
          detail: "Parameter `frequentie` van de functie YIELD.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie YIELD.",
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
      d: "Beschrijving van de functie YIELDDISC.",
      a: "Samenvatting van de functie YIELDDISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie YIELDDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie YIELDDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prijs",
          detail: "Parameter `prijs` van de functie YIELDDISC.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aflossingswaarde",
          detail: "Parameter `aflossingswaarde` van de functie YIELDDISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie YIELDDISC.",
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
      d: "Beschrijving van de functie NOMINAL.",
      a: "Samenvatting van de functie NOMINAL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "effectieve_rente",
          detail: "Parameter `effectieve_rente` van de functie NOMINAL.",
          example: "0.85",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodes_per_jaar",
          detail: "Parameter `periodes_per_jaar` van de functie NOMINAL.",
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
      d: "Beschrijving van de functie XIRR.",
      a: "Samenvatting van de functie XIRR.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "kasstroombedragen",
          detail: "Parameter `kasstroombedragen` van de functie XIRR.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kasstroomdatums",
          detail: "Parameter `kasstroomdatums` van de functie XIRR.",
          example: "C2:C25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "renteschatting",
          detail: "Parameter `renteschatting` van de functie XIRR.",
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
      d: "Beschrijving van de functie MIRR.",
      a: "Samenvatting van de functie MIRR.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "kasstroombedragen",
          detail: "Parameter `kasstroombedragen` van de functie MIRR.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "financieringsrente",
          detail: "Parameter `financieringsrente` van de functie MIRR.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "herinvesteringsrendement",
          detail: "Parameter `herinvesteringsrendement` van de functie MIRR.",
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
      d: "Beschrijving van de functie IRR.",
      a: "Samenvatting van de functie IRR.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "kasstroombedragen",
          detail: "Parameter `kasstroombedragen` van de functie IRR.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "renteschatting",
          detail: "Parameter `renteschatting` van de functie IRR.",
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
      d: "Beschrijving van de functie NPV.",
      a: "Samenvatting van de functie NPV.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "discontovoet",
          detail: "Parameter `discontovoet` van de functie NPV.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kasstroom1",
          detail: "Parameter `kasstroom1` van de functie NPV.",
          example: "200",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kasstroom2",
          detail: "Parameter `kasstroom2` van de functie NPV.",
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
      d: "Beschrijving van de functie XNPV.",
      a: "Samenvatting van de functie XNPV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "discontovoet",
          detail: "Parameter `discontovoet` van de functie XNPV.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kasstroombedragen",
          detail: "Parameter `kasstroombedragen` van de functie XNPV.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kasstroomdatums",
          detail: "Parameter `kasstroomdatums` van de functie XNPV.",
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
      d: "Beschrijving van de functie CUMIPMT.",
      a: "Samenvatting van de functie CUMIPMT.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie CUMIPMT.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_periodes",
          detail: "Parameter `aantal_periodes` van de functie CUMIPMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "Parameter `huidige_waarde` van de functie CUMIPMT.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "eerste_periode",
          detail: "Parameter `eerste_periode` van de functie CUMIPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "laatste_periode",
          detail: "Parameter `laatste_periode` van de functie CUMIPMT.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Parameter `einde_of_begin` van de functie CUMIPMT.",
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
      d: "Beschrijving van de functie PMT.",
      a: "Samenvatting van de functie PMT.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie PMT.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_periodes",
          detail: "Parameter `aantal_periodes` van de functie PMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "Parameter `huidige_waarde` van de functie PMT.",
          example: " 100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "toekomstige_waarde",
          detail: "Parameter `toekomstige_waarde` van de functie PMT.",
          example: "D2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Parameter `einde_of_begin` van de functie PMT.",
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
      d: "Beschrijving van de functie IPMT.",
      a: "Samenvatting van de functie IPMT.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie IPMT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "Parameter `periode` van de functie IPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_periodes",
          detail: "Parameter `aantal_periodes` van de functie IPMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "Parameter `huidige_waarde` van de functie IPMT.",
          example: "80000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "toekomstige_waarde",
          detail: "Parameter `toekomstige_waarde` van de functie IPMT.",
          example: "E2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Parameter `einde_of_begin` van de functie IPMT.",
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
      d: "Beschrijving van de functie PPMT.",
      a: "Samenvatting van de functie PPMT.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie PPMT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "Parameter `periode` van de functie PPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_periodes",
          detail: "Parameter `aantal_periodes` van de functie PPMT.",
          example: "3*12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "Parameter `huidige_waarde` van de functie PPMT.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "toekomstige_waarde",
          detail: "Parameter `toekomstige_waarde` van de functie PPMT.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Parameter `einde_of_begin` van de functie PPMT.",
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
      d: "Beschrijving van de functie INTRATE.",
      a: "Samenvatting van de functie INTRATE.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "aankoopdatum",
          detail: "Parameter `aankoopdatum` van de functie INTRATE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "verkoopdatum",
          detail: "Parameter `verkoopdatum` van de functie INTRATE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aankoopprijs",
          detail: "Parameter `aankoopprijs` van de functie INTRATE.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "verkoopprijs",
          detail: "Parameter `verkoopprijs` van de functie INTRATE.",
          example: "101200",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie INTRATE.",
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
      d: "Beschrijving van de functie PRICE.",
      a: "Samenvatting van de functie PRICE.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie PRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie PRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie PRICE.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendement",
          detail: "Parameter `rendement` van de functie PRICE.",
          example: "0.065",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aflossingswaarde",
          detail: "Parameter `aflossingswaarde` van de functie PRICE.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequentie",
          detail: "Parameter `frequentie` van de functie PRICE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie PRICE.",
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
      d: "Beschrijving van de functie PRICEDISC.",
      a: "Samenvatting van de functie PRICEDISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie PRICEDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie PRICEDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "discontovoet",
          detail: "Parameter `discontovoet` van de functie PRICEDISC.",
          example: "0.0525",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aflossingswaarde",
          detail: "Parameter `aflossingswaarde` van de functie PRICEDISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie PRICEDISC.",
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
      d: "Beschrijving van de functie PRICEMAT.",
      a: "Samenvatting van de functie PRICEMAT.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "uitgiftedatum",
          detail: "Parameter `uitgiftedatum` van de functie PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie PRICEMAT.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendement",
          detail: "Parameter `rendement` van de functie PRICEMAT.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie PRICEMAT.",
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
      d: "Beschrijving van de functie RECEIVED.",
      a: "Samenvatting van de functie RECEIVED.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie RECEIVED.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie RECEIVED.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "investering",
          detail: "Parameter `investering` van de functie RECEIVED.",
          example: "10000000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "discontovoet",
          detail: "Parameter `discontovoet` van de functie RECEIVED.",
          example: "0.0575",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie RECEIVED.",
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
      d: "Beschrijving van de functie DISC.",
      a: "Samenvatting van de functie DISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie DISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie DISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prijs",
          detail: "Parameter `prijs` van de functie DISC.",
          example: "97.975",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aflossingswaarde",
          detail: "Parameter `aflossingswaarde` van de functie DISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie DISC.",
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
      d: "Beschrijving van de functie NPER.",
      a: "Samenvatting van de functie NPER.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie NPER.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "betalingsbedrag",
          detail: "Parameter `betalingsbedrag` van de functie NPER.",
          example: "500",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "huidige_waarde",
          detail: "Parameter `huidige_waarde` van de functie NPER.",
          example: "40000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "toekomstige_waarde",
          detail: "Parameter `toekomstige_waarde` van de functie NPER.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einde_of_begin",
          detail: "Parameter `einde_of_begin` van de functie NPER.",
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
      d: "Beschrijving van de functie SLN.",
      a: "Samenvatting van de functie SLN.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "kostprijs",
          detail: "Parameter `kostprijs` van de functie SLN.",
          example: "300000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwaarde",
          detail: "Parameter `restwaarde` van de functie SLN.",
          example: "75000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "levensduur",
          detail: "Parameter `levensduur` van de functie SLN.",
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
      d: "Beschrijving van de functie DURATION.",
      a: "Samenvatting van de functie DURATION.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie DURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie DURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie DURATION.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendement",
          detail: "Parameter `rendement` van de functie DURATION.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequentie",
          detail: "Parameter `frequentie` van de functie DURATION.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie DURATION.",
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
      d: "Beschrijving van de functie MDURATION.",
      a: "Samenvatting van de functie MDURATION.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "stortingsdatum",
          detail: "Parameter `stortingsdatum` van de functie MDURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervaldatum",
          detail: "Parameter `vervaldatum` van de functie MDURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rentevoet",
          detail: "Parameter `rentevoet` van de functie MDURATION.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendement",
          detail: "Parameter `rendement` van de functie MDURATION.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequentie",
          detail: "Parameter `frequentie` van de functie MDURATION.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dagentelconventie",
          detail: "Parameter `dagentelconventie` van de functie MDURATION.",
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
      d: "Beschrijving van de functie BIN2DEC.",
      a: "Samenvatting van de functie BIN2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ondertekend_binair_getal",
          detail: "Parameter `ondertekend_binair_getal` van de functie BIN2DEC.",
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
      d: "Beschrijving van de functie BIN2HEX.",
      a: "Samenvatting van de functie BIN2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ondertekend_binair_getal",
          detail: "Parameter `ondertekend_binair_getal` van de functie BIN2HEX.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significante_cijfers",
          detail: "Parameter `significante_cijfers` van de functie BIN2HEX.",
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
      d: "Beschrijving van de functie BIN2OCT.",
      a: "Samenvatting van de functie BIN2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ondertekend_binair_getal",
          detail: "Parameter `ondertekend_binair_getal` van de functie BIN2OCT.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significante_cijfers",
          detail: "Parameter `significante_cijfers` van de functie BIN2OCT.",
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
      d: "Beschrijving van de functie DEC2BIN.",
      a: "Samenvatting van de functie DEC2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "decimaal_getal",
          detail: "Parameter `decimaal_getal` van de functie DEC2BIN.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significante_cijfers",
          detail: "Parameter `significante_cijfers` van de functie DEC2BIN.",
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
      d: "Beschrijving van de functie DEC2HEX.",
      a: "Samenvatting van de functie DEC2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "decimaal_getal",
          detail: "Parameter `decimaal_getal` van de functie DEC2HEX.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significante_cijfers",
          detail: "Parameter `significante_cijfers` van de functie DEC2HEX.",
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
      d: "Beschrijving van de functie DEC2OCT.",
      a: "Samenvatting van de functie DEC2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "decimaal_getal",
          detail: "Parameter `decimaal_getal` van de functie DEC2OCT.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significante_cijfers",
          detail: "Parameter `significante_cijfers` van de functie DEC2OCT.",
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
      d: "Beschrijving van de functie HEX2BIN.",
      a: "Samenvatting van de functie HEX2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ondertekend_hexadecimaal_getal",
          detail: "Parameter `ondertekend_hexadecimaal_getal` van de functie HEX2BIN.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significante_cijfers",
          detail: "Parameter `significante_cijfers` van de functie HEX2BIN.",
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
      d: "Beschrijving van de functie HEX2DEC.",
      a: "Samenvatting van de functie HEX2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ondertekend_hexadecimaal_getal",
          detail: "Parameter `ondertekend_hexadecimaal_getal` van de functie HEX2DEC.",
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
      d: "Beschrijving van de functie HEX2OCT.",
      a: "Samenvatting van de functie HEX2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ondertekend_hexadecimaal_getal",
          detail: "Parameter `ondertekend_hexadecimaal_getal` van de functie HEX2OCT.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significante_cijfers",
          detail: "Parameter `significante_cijfers` van de functie HEX2OCT.",
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
      d: "Beschrijving van de functie OCT2BIN.",
      a: "Samenvatting van de functie OCT2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ondertekend_octaal_getal",
          detail: "Parameter `ondertekend_octaal_getal` van de functie OCT2BIN.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significante_cijfers",
          detail: "Parameter `significante_cijfers` van de functie OCT2BIN.",
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
      d: "Beschrijving van de functie OCT2DEC.",
      a: "Samenvatting van de functie OCT2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ondertekend_octaal_getal",
          detail: "Parameter `ondertekend_octaal_getal` van de functie OCT2DEC.",
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
      d: "Beschrijving van de functie OCT2HEX.",
      a: "Samenvatting van de functie OCT2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ondertekend_octaal_getal",
          detail: "Parameter `ondertekend_octaal_getal` van de functie OCT2HEX.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significante_cijfers",
          detail: "Parameter `significante_cijfers` van de functie OCT2HEX.",
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
      d: "Beschrijving van de functie COMPLEX.",
      a: "Samenvatting van de functie COMPLEX.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "reëel_deel",
          detail: "Parameter `reëel_deel` van de functie COMPLEX.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "imaginair_deel",
          detail: "Parameter `imaginair_deel` van de functie COMPLEX.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "achtervoegsel",
          detail: "Parameter `achtervoegsel` van de functie COMPLEX.",
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
      d: "Beschrijving van de functie IMREAL.",
      a: "Samenvatting van de functie IMREAL.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "complex_getal",
          detail: "Parameter `complex_getal` van de functie IMREAL.",
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
      d: "Beschrijving van de functie IMAGINARY.",
      a: "Samenvatting van de functie IMAGINARY.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "complex_getal",
          detail: "Parameter `complex_getal` van de functie IMAGINARY.",
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
      d: "Beschrijving van de functie IMCONJUGATE.",
      a: "Samenvatting van de functie IMCONJUGATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "getal",
          detail: "Parameter `getal` van de functie IMCONJUGATE.",
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
      d: "Beschrijving van de functie IMABS.",
      a: "Samenvatting van de functie IMABS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "getal",
          detail: "Parameter `getal` van de functie IMABS.",
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
      d: "Beschrijving van de functie DELTA.",
      a: "Samenvatting van de functie DELTA.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "getal1",
          detail: "Parameter `getal1` van de functie DELTA.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "getal2",
          detail: "Parameter `getal2` van de functie DELTA.",
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
      d: "Beschrijving van de functie IMSUM.",
      a: "Samenvatting van de functie IMSUM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie IMSUM.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie IMSUM.",
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
      d: "Beschrijving van de functie IMSUB.",
      a: "Samenvatting van de functie IMSUB.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "eerste_getal",
          detail: "Parameter `eerste_getal` van de functie IMSUB.",
          example: "\"6+5i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tweede_getal",
          detail: "Parameter `tweede_getal` van de functie IMSUB.",
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
      d: "Beschrijving van de functie IMPRODUCT.",
      a: "Samenvatting van de functie IMPRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "factor1",
          detail: "Parameter `factor1` van de functie IMPRODUCT.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "factor2",
          detail: "Parameter `factor2` van de functie IMPRODUCT.",
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
      d: "Beschrijving van de functie IMDIV.",
      a: "Samenvatting van de functie IMDIV.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "deeltal",
          detail: "Parameter `deeltal` van de functie IMDIV.",
          example: "\"11+16i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "deler",
          detail: "Parameter `deler` van de functie IMDIV.",
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
      d: "Beschrijving van de functie NOT.",
      a: "Samenvatting van de functie NOT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "logische_expressie",
          detail: "Parameter `logische_expressie` van de functie NOT.",
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
      d: "Beschrijving van de functie TRUE.",
      a: "Samenvatting van de functie TRUE.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FALSE",
      t: 10,
      d: "Beschrijving van de functie FALSE.",
      a: "Samenvatting van de functie FALSE.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "AND",
      t: 10,
      d: "Beschrijving van de functie AND.",
      a: "Samenvatting van de functie AND.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "logische_expressie1",
          detail: "Parameter `logische_expressie1` van de functie AND.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "logische_expressie2",
          detail: "Parameter `logische_expressie2` van de functie AND.",
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
      d: "Beschrijving van de functie IFERROR.",
      a: "Samenvatting van de functie IFERROR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie IFERROR.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde_als_fout",
          detail: "Parameter `waarde_als_fout` van de functie IFERROR.",
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
      d: "Beschrijving van de functie IF.",
      a: "Samenvatting van de functie IF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "logische_expressie",
          detail: "Parameter `logische_expressie` van de functie IF.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde_als_waar",
          detail: "Parameter `waarde_als_waar` van de functie IF.",
          example: "\"A2 is foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde_als_onwaar",
          detail: "Parameter `waarde_als_onwaar` van de functie IF.",
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
      d: "Beschrijving van de functie OR.",
      a: "Samenvatting van de functie OR.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "logische_expressie1",
          detail: "Parameter `logische_expressie1` van de functie OR.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "logische_expressie2",
          detail: "Parameter `logische_expressie2` van de functie OR.",
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
      d: "Beschrijving van de functie NE.",
      a: "Samenvatting van de functie NE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie NE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie NE.",
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
      d: "Beschrijving van de functie EQ.",
      a: "Samenvatting van de functie EQ.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie EQ.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie EQ.",
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
      d: "Beschrijving van de functie GT.",
      a: "Samenvatting van de functie GT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie GT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie GT.",
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
      d: "Beschrijving van de functie GTE.",
      a: "Samenvatting van de functie GTE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie GTE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie GTE.",
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
      d: "Beschrijving van de functie LT.",
      a: "Samenvatting van de functie LT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie LT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie LT.",
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
      d: "Beschrijving van de functie LTE.",
      a: "Samenvatting van de functie LTE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie LTE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie LTE.",
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
      d: "Beschrijving van de functie ADD.",
      a: "Samenvatting van de functie ADD.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie ADD.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie ADD.",
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
      d: "Beschrijving van de functie MINUS.",
      a: "Samenvatting van de functie MINUS.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie MINUS.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie MINUS.",
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
      d: "Beschrijving van de functie MULTIPLY.",
      a: "Samenvatting van de functie MULTIPLY.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "factor1",
          detail: "Parameter `factor1` van de functie MULTIPLY.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor2",
          detail: "Parameter `factor2` van de functie MULTIPLY.",
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
      d: "Beschrijving van de functie DIVIDE.",
      a: "Samenvatting van de functie DIVIDE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "deeltal",
          detail: "Parameter `deeltal` van de functie DIVIDE.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "deler",
          detail: "Parameter `deler` van de functie DIVIDE.",
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
      d: "Beschrijving van de functie CONCAT.",
      a: "Samenvatting van de functie CONCAT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "waarde1",
          detail: "Parameter `waarde1` van de functie CONCAT.",
          example: "\"de\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde2",
          detail: "Parameter `waarde2` van de functie CONCAT.",
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
      d: "Beschrijving van de functie UNARY_PERCENT.",
      a: "Samenvatting van de functie UNARY_PERCENT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "percentage",
          detail: "Parameter `percentage` van de functie UNARY_PERCENT.",
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
      d: "Beschrijving van de functie CONCATENATE.",
      a: "Samenvatting van de functie CONCATENATE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "tekenreeks1",
          detail: "Parameter `tekenreeks1` van de functie CONCATENATE.",
          example: "\"Super\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tekenreeks2",
          detail: "Parameter `tekenreeks2` van de functie CONCATENATE.",
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
      d: "Beschrijving van de functie CODE.",
      a: "Samenvatting van de functie CODE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekenreeks",
          detail: "Parameter `tekenreeks` van de functie CODE.",
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
      d: "Beschrijving van de functie CHAR.",
      a: "Samenvatting van de functie CHAR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tabelnummer",
          detail: "Parameter `tabelnummer` van de functie CHAR.",
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
      d: "Beschrijving van de functie ARABIC.",
      a: "Samenvatting van de functie ARABIC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "romeins_cijfer",
          detail: "Parameter `romeins_cijfer` van de functie ARABIC.",
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
      d: "Beschrijving van de functie ROMAN.",
      a: "Samenvatting van de functie ROMAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "getal",
          detail: "Parameter `getal` van de functie ROMAN.",
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
      d: "Beschrijving van de functie REGEXEXTRACT.",
      a: "Samenvatting van de functie REGEXEXTRACT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tekst",
          detail: "Parameter `tekst` van de functie REGEXEXTRACT.",
          example: "\"Needle in a haystack\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "reguliere_expressie",
          detail: "Parameter `reguliere_expressie` van de functie REGEXEXTRACT.",
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
      d: "Beschrijving van de functie REGEXMATCH.",
      a: "Samenvatting van de functie REGEXMATCH.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tekst",
          detail: "Parameter `tekst` van de functie REGEXMATCH.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "reguliere_expressie",
          detail: "Parameter `reguliere_expressie` van de functie REGEXMATCH.",
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
      d: "Beschrijving van de functie REGEXREPLACE.",
      a: "Samenvatting van de functie REGEXREPLACE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "tekst",
          detail: "Parameter `tekst` van de functie REGEXREPLACE.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "reguliere_expressie",
          detail: "Parameter `reguliere_expressie` van de functie REGEXREPLACE.",
          example: "\"S.*d\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervanging",
          detail: "Parameter `vervanging` van de functie REGEXREPLACE.",
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
      d: "Beschrijving van de functie T.",
      a: "Samenvatting van de functie T.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie T.",
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
      d: "Beschrijving van de functie FIXED.",
      a: "Samenvatting van de functie FIXED.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "getal",
          detail: "Parameter `getal` van de functie FIXED.",
          example: "3.141592653",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "aantal_decimalen",
          detail: "Parameter `aantal_decimalen` van de functie FIXED.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "scheidingsteken_onderdrukken",
          detail: "Parameter `scheidingsteken_onderdrukken` van de functie FIXED.",
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
      d: "Beschrijving van de functie FIND.",
      a: "Samenvatting van de functie FIND.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "te_zoeken_tekst",
          detail: "Parameter `te_zoeken_tekst` van de functie FIND.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "te_doorzoeken_tekst",
          detail: "Parameter `te_doorzoeken_tekst` van de functie FIND.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "beginnend_bij",
          detail: "Parameter `beginnend_bij` van de functie FIND.",
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
      d: "Beschrijving van de functie FINDB.",
      a: "Samenvatting van de functie FINDB.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "te_zoeken_tekst",
          detail: "Parameter `te_zoeken_tekst` van de functie FINDB.",
          example: "\"new\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "te_doorzoeken_tekst",
          detail: "Parameter `te_doorzoeken_tekst` van de functie FINDB.",
          example: "\"new year\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "beginnend_bij",
          detail: "Parameter `beginnend_bij` van de functie FINDB.",
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
      d: "Beschrijving van de functie JOIN.",
      a: "Samenvatting van de functie JOIN.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "scheidingsteken",
          detail: "Parameter `scheidingsteken` van de functie JOIN.",
          example: "\" and-a \"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde_of_matrix1",
          detail: "Parameter `waarde_of_matrix1` van de functie JOIN.",
          example: "{1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "waarde_of_matrix2",
          detail: "Parameter `waarde_of_matrix2` van de functie JOIN.",
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
      d: "Beschrijving van de functie LEFT.",
      a: "Samenvatting van de functie LEFT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "tekenreeks",
          detail: "Parameter `tekenreeks` van de functie LEFT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aantal_tekens",
          detail: "Parameter `aantal_tekens` van de functie LEFT.",
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
      d: "Beschrijving van de functie RIGHT.",
      a: "Samenvatting van de functie RIGHT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "tekenreeks",
          detail: "Parameter `tekenreeks` van de functie RIGHT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aantal_tekens",
          detail: "Parameter `aantal_tekens` van de functie RIGHT.",
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
      d: "Beschrijving van de functie MID.",
      a: "Samenvatting van de functie MID.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "tekenreeks",
          detail: "Parameter `tekenreeks` van de functie MID.",
          example: "\"get this\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "beginnend_bij",
          detail: "Parameter `beginnend_bij` van de functie MID.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "extractielengte",
          detail: "Parameter `extractielengte` van de functie MID.",
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
      d: "Beschrijving van de functie LEN.",
      a: "Samenvatting van de functie LEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekst",
          detail: "Parameter `tekst` van de functie LEN.",
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
      d: "Beschrijving van de functie LENB.",
      a: "Samenvatting van de functie LENB.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekst",
          detail: "Parameter `tekst` van de functie LENB.",
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
      d: "Beschrijving van de functie LOWER.",
      a: "Samenvatting van de functie LOWER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekst",
          detail: "Parameter `tekst` van de functie LOWER.",
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
      d: "Beschrijving van de functie UPPER.",
      a: "Samenvatting van de functie UPPER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekst",
          detail: "Parameter `tekst` van de functie UPPER.",
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
      d: "Beschrijving van de functie EXACT.",
      a: "Samenvatting van de functie EXACT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tekenreeks1",
          detail: "Parameter `tekenreeks1` van de functie EXACT.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tekenreeks2",
          detail: "Parameter `tekenreeks2` van de functie EXACT.",
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
      d: "Beschrijving van de functie REPLACE.",
      a: "Samenvatting van de functie REPLACE.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "tekst",
          detail: "Parameter `tekst` van de functie REPLACE.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "positie",
          detail: "Parameter `positie` van de functie REPLACE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lengte",
          detail: "Parameter `lengte` van de functie REPLACE.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nieuwe_tekst",
          detail: "Parameter `nieuwe_tekst` van de functie REPLACE.",
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
      d: "Beschrijving van de functie REPT.",
      a: "Samenvatting van de functie REPT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "te_herhalen_tekst",
          detail: "Parameter `te_herhalen_tekst` van de functie REPT.",
          example: "\"ha\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "aantal_herhalingen",
          detail: "Parameter `aantal_herhalingen` van de functie REPT.",
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
      d: "Beschrijving van de functie SEARCH.",
      a: "Samenvatting van de functie SEARCH.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "te_zoeken_tekst",
          detail: "Parameter `te_zoeken_tekst` van de functie SEARCH.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "te_doorzoeken_tekst",
          detail: "Parameter `te_doorzoeken_tekst` van de functie SEARCH.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "beginnend_bij",
          detail: "Parameter `beginnend_bij` van de functie SEARCH.",
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
      d: "Beschrijving van de functie SUBSTITUTE.",
      a: "Samenvatting van de functie SUBSTITUTE.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "te_doorzoeken_tekst",
          detail: "Parameter `te_doorzoeken_tekst` van de functie SUBSTITUTE.",
          example: "\"search for it\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "te_zoeken_tekst",
          detail: "Parameter `te_zoeken_tekst` van de functie SUBSTITUTE.",
          example: "\"search for\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vervangen_door",
          detail: "Parameter `vervangen_door` van de functie SUBSTITUTE.",
          example: "\"Google\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "voorkomen_nummer",
          detail: "Parameter `voorkomen_nummer` van de functie SUBSTITUTE.",
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
      d: "Beschrijving van de functie CLEAN.",
      a: "Samenvatting van de functie CLEAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekst",
          detail: "Parameter `tekst` van de functie CLEAN.",
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
      d: "Beschrijving van de functie TEXT.",
      a: "Samenvatting van de functie TEXT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "getal",
          detail: "Parameter `getal` van de functie TEXT.",
          example: "1.23",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "notatie",
          detail: "Parameter `notatie` van de functie TEXT.",
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
      d: "Beschrijving van de functie TRIM.",
      a: "Samenvatting van de functie TRIM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekst",
          detail: "Parameter `tekst` van de functie TRIM.",
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
      d: "Beschrijving van de functie VALUE.",
      a: "Samenvatting van de functie VALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tekst",
          detail: "Parameter `tekst` van de functie VALUE.",
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
      d: "Beschrijving van de functie PROPER.",
      a: "Samenvatting van de functie PROPER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "te_kapitaliseren_tekst",
          detail: "Parameter `te_kapitaliseren_tekst` van de functie PROPER.",
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
      d: "Beschrijving van de functie CONVERT.",
      a: "Samenvatting van de functie CONVERT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie CONVERT.",
          example: "5.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "starteenheid",
          detail: "Parameter `starteenheid` van de functie CONVERT.",
          example: "\"g\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "doeleenheid",
          detail: "Parameter `doeleenheid` van de functie CONVERT.",
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
      d: "Beschrijving van de functie SUMX2MY2.",
      a: "Samenvatting van de functie SUMX2MY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrix_x",
          detail: "Parameter `matrix_x` van de functie SUMX2MY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix_y",
          detail: "Parameter `matrix_y` van de functie SUMX2MY2.",
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
      d: "Beschrijving van de functie SUMX2PY2.",
      a: "Samenvatting van de functie SUMX2PY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrix_x",
          detail: "Parameter `matrix_x` van de functie SUMX2PY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix_y",
          detail: "Parameter `matrix_y` van de functie SUMX2PY2.",
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
      d: "Beschrijving van de functie SUMXMY2.",
      a: "Samenvatting van de functie SUMXMY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrix_x",
          detail: "Parameter `matrix_x` van de functie SUMXMY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix_y",
          detail: "Parameter `matrix_y` van de functie SUMXMY2.",
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
      d: "Beschrijving van de functie TRANSPOSE.",
      a: "Samenvatting van de functie TRANSPOSE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "matrix_of_bereik",
          detail: "Parameter `matrix_of_bereik` van de functie TRANSPOSE.",
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
      d: "Beschrijving van de functie TREND.",
      a: "Samenvatting van de functie TREND.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "bekende_gegevens_y",
          detail: "Parameter `bekende_gegevens_y` van de functie TREND.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bekende_gegevens_x",
          detail: "Parameter `bekende_gegevens_x` van de functie TREND.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nieuwe_gegevens_x",
          detail: "Parameter `nieuwe_gegevens_x` van de functie TREND.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Parameter `b` van de functie TREND.",
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
      d: "Beschrijving van de functie FREQUENCY.",
      a: "Samenvatting van de functie FREQUENCY.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "gegevens",
          detail: "Parameter `gegevens` van de functie FREQUENCY.",
          example: "A2:A40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "klassen",
          detail: "Parameter `klassen` van de functie FREQUENCY.",
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
      d: "Beschrijving van de functie GROWTH.",
      a: "Samenvatting van de functie GROWTH.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "bekende_gegevens_y",
          detail: "Parameter `bekende_gegevens_y` van de functie GROWTH.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bekende_gegevens_x",
          detail: "Parameter `bekende_gegevens_x` van de functie GROWTH.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nieuwe_gegevens_x",
          detail: "Parameter `nieuwe_gegevens_x` van de functie GROWTH.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Parameter `b` van de functie GROWTH.",
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
      d: "Beschrijving van de functie LINEST.",
      a: "Samenvatting van de functie LINEST.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "bekende_gegevens_y",
          detail: "Parameter `bekende_gegevens_y` van de functie LINEST.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bekende_gegevens_x",
          detail: "Parameter `bekende_gegevens_x` van de functie LINEST.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b_berekenen",
          detail: "Parameter `b_berekenen` van de functie LINEST.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "uitgebreid",
          detail: "Parameter `uitgebreid` van de functie LINEST.",
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
      d: "Beschrijving van de functie LOGEST.",
      a: "Samenvatting van de functie LOGEST.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "bekende_gegevens_y",
          detail: "Parameter `bekende_gegevens_y` van de functie LOGEST.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bekende_gegevens_x",
          detail: "Parameter `bekende_gegevens_x` van de functie LOGEST.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Parameter `b` van de functie LOGEST.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "uitgebreid",
          detail: "Parameter `uitgebreid` van de functie LOGEST.",
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
      d: "Beschrijving van de functie MDETERM.",
      a: "Samenvatting van de functie MDETERM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "vierkante_matrix",
          detail: "Parameter `vierkante_matrix` van de functie MDETERM.",
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
      d: "Beschrijving van de functie MINVERSE.",
      a: "Samenvatting van de functie MINVERSE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "vierkante_matrix",
          detail: "Parameter `vierkante_matrix` van de functie MINVERSE.",
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
      d: "Beschrijving van de functie MMULT.",
      a: "Samenvatting van de functie MMULT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrix1",
          detail: "Parameter `matrix1` van de functie MMULT.",
          example: "A1:B3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix2",
          detail: "Parameter `matrix2` van de functie MMULT.",
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
      d: "Beschrijving van de functie SUMPRODUCT.",
      a: "Samenvatting van de functie SUMPRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "matrix1",
          detail: "Parameter `matrix1` van de functie SUMPRODUCT.",
          example: "A2:C5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix2",
          detail: "Parameter `matrix2` van de functie SUMPRODUCT.",
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
      d: "Beschrijving van de functie ISFORMULA.",
      a: "Samenvatting van de functie ISFORMULA.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "cel",
          detail: "Parameter `cel` van de functie ISFORMULA.",
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
      d: "Beschrijving van de functie CELL.",
      a: "Samenvatting van de functie CELL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "infotype",
          detail: "Parameter `infotype` van de functie CELL.",
          example: "\"type\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "verwijzing",
          detail: "Parameter `verwijzing` van de functie CELL.",
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
      d: "Beschrijving van de functie NA.",
      a: "Samenvatting van de functie NA.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "ERROR_TYPE",
      t: 15,
      d: "Beschrijving van de functie ERROR_TYPE.",
      a: "Samenvatting van de functie ERROR_TYPE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "verwijzing",
          detail: "Parameter `verwijzing` van de functie ERROR_TYPE.",
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
      d: "Beschrijving van de functie ISBLANK.",
      a: "Samenvatting van de functie ISBLANK.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ISBLANK.",
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
      d: "Beschrijving van de functie ISERR.",
      a: "Samenvatting van de functie ISERR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ISERR.",
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
      d: "Beschrijving van de functie ISERROR.",
      a: "Samenvatting van de functie ISERROR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ISERROR.",
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
      d: "Beschrijving van de functie ISLOGICAL.",
      a: "Samenvatting van de functie ISLOGICAL.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ISLOGICAL.",
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
      d: "Beschrijving van de functie ISNA.",
      a: "Samenvatting van de functie ISNA.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ISNA.",
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
      d: "Beschrijving van de functie ISNONTEXT.",
      a: "Samenvatting van de functie ISNONTEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ISNONTEXT.",
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
      d: "Beschrijving van de functie ISNUMBER.",
      a: "Samenvatting van de functie ISNUMBER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ISNUMBER.",
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
      d: "Beschrijving van de functie ISREF.",
      a: "Samenvatting van de functie ISREF.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ISREF.",
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
      d: "Beschrijving van de functie ISTEXT.",
      a: "Samenvatting van de functie ISTEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie ISTEXT.",
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
      d: "Beschrijving van de functie TYPE.",
      a: "Samenvatting van de functie TYPE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie TYPE.",
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
      d: "Beschrijving van de functie N.",
      a: "Samenvatting van de functie N.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie N.",
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
      d: "Beschrijving van de functie TO_DATE.",
      a: "Samenvatting van de functie TO_DATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie TO_DATE.",
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
      d: "Beschrijving van de functie TO_PURE_NUMBER.",
      a: "Samenvatting van de functie TO_PURE_NUMBER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "waarde",
          detail: "Parameter `waarde` van de functie TO_PURE_NUMBER.",
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
