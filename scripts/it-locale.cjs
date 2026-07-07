module.exports = {
  generalDialog: {
    partiallyError: "Impossibile eseguire questa operazione su celle parzialmente unite",
    readOnlyError: "Impossibile eseguire questa operazione in modalità sola lettura",
    dataNullError: "Impossibile eseguire questa operazione su dati inesistenti",
    noSeletionError: "Non è stata ancora effettuata alcuna selezione",
    cannotSelectMultiple: "Non è possibile selezionare più selezioni"
  },
  functionlist: [
    {
      n: "SUMIF",
      t: 0,
      d: "Descrizione della funzione SUMIF.",
      a: "Sintesi della funzione SUMIF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "range",
          detail: "Parametro `range` della funzione SUMIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterion",
          detail: "Parametro `criterion` della funzione SUMIF.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "sum_range",
          detail: "Parametro `sum_range` della funzione SUMIF.",
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
      d: "Descrizione della funzione TAN.",
      a: "Sintesi della funzione TAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "Parametro `angle` della funzione TAN.",
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
      d: "Descrizione della funzione TANH.",
      a: "Sintesi della funzione TANH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione TANH.",
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
      d: "Descrizione della funzione CEILING.",
      a: "Sintesi della funzione CEILING.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione CEILING.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Parametro `factor` della funzione CEILING.",
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
      d: "Descrizione della funzione ATAN.",
      a: "Sintesi della funzione ATAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ATAN.",
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
      d: "Descrizione della funzione ASINH.",
      a: "Sintesi della funzione ASINH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ASINH.",
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
      d: "Descrizione della funzione ABS.",
      a: "Sintesi della funzione ABS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ABS.",
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
      d: "Descrizione della funzione ACOS.",
      a: "Sintesi della funzione ACOS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ACOS.",
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
      d: "Descrizione della funzione ACOSH.",
      a: "Sintesi della funzione ACOSH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ACOSH.",
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
      d: "Descrizione della funzione MULTINOMIAL.",
      a: "Sintesi della funzione MULTINOMIAL.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione MULTINOMIAL.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione MULTINOMIAL.",
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
      d: "Descrizione della funzione ATANH.",
      a: "Sintesi della funzione ATANH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ATANH.",
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
      d: "Descrizione della funzione ATAN2.",
      a: "Sintesi della funzione ATAN2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione ATAN2.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "y",
          detail: "Parametro `y` della funzione ATAN2.",
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
      d: "Descrizione della funzione COUNTBLANK.",
      a: "Sintesi della funzione COUNTBLANK.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione COUNTBLANK.",
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
      d: "Descrizione della funzione COSH.",
      a: "Sintesi della funzione COSH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione COSH.",
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
      d: "Descrizione della funzione INT.",
      a: "Sintesi della funzione INT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione INT.",
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
      d: "Descrizione della funzione ISEVEN.",
      a: "Sintesi della funzione ISEVEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ISEVEN.",
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
      d: "Descrizione della funzione ISODD.",
      a: "Sintesi della funzione ISODD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ISODD.",
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
      d: "Descrizione della funzione LCM.",
      a: "Sintesi della funzione LCM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione LCM.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione LCM.",
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
      d: "Descrizione della funzione LN.",
      a: "Sintesi della funzione LN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione LN.",
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
      d: "Descrizione della funzione LOG.",
      a: "Sintesi della funzione LOG.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione LOG.",
          example: "128",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "base",
          detail: "Parametro `base` della funzione LOG.",
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
      d: "Descrizione della funzione LOG10.",
      a: "Sintesi della funzione LOG10.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione LOG10.",
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
      d: "Descrizione della funzione MOD.",
      a: "Sintesi della funzione MOD.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividend",
          detail: "Parametro `dividend` della funzione MOD.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "Parametro `divisor` della funzione MOD.",
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
      d: "Descrizione della funzione MROUND.",
      a: "Sintesi della funzione MROUND.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione MROUND.",
          example: "21",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Parametro `factor` della funzione MROUND.",
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
      d: "Descrizione della funzione ODD.",
      a: "Sintesi della funzione ODD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ODD.",
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
      d: "Descrizione della funzione SUMSQ.",
      a: "Sintesi della funzione SUMSQ.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione SUMSQ.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione SUMSQ.",
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
      d: "Descrizione della funzione COMBIN.",
      a: "Sintesi della funzione COMBIN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "Parametro `n` della funzione COMBIN.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Parametro `k` della funzione COMBIN.",
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
      d: "Descrizione della funzione SUM.",
      a: "Sintesi della funzione SUM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione SUM.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione SUM.",
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
      d: "Descrizione della funzione SUBTOTAL.",
      a: "Sintesi della funzione SUBTOTAL.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "function_code",
          detail: "Parametro `function_code` della funzione SUBTOTAL.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "range1",
          detail: "Parametro `range1` della funzione SUBTOTAL.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "range2",
          detail: "Parametro `range2` della funzione SUBTOTAL.",
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
      d: "Descrizione della funzione ASIN.",
      a: "Sintesi della funzione ASIN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ASIN.",
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
      d: "Descrizione della funzione COUNTIF.",
      a: "Sintesi della funzione COUNTIF.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "range",
          detail: "Parametro `range` della funzione COUNTIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterion",
          detail: "Parametro `criterion` della funzione COUNTIF.",
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
      d: "Descrizione della funzione RADIANS.",
      a: "Sintesi della funzione RADIANS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "Parametro `angle` della funzione RADIANS.",
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
      d: "Descrizione della funzione RAND.",
      a: "Sintesi della funzione RAND.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "COUNTUNIQUE",
      t: 0,
      d: "Descrizione della funzione COUNTUNIQUE.",
      a: "Sintesi della funzione COUNTUNIQUE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione COUNTUNIQUE.",
          example: "A1:C100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione COUNTUNIQUE.",
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
      d: "Descrizione della funzione DEGREES.",
      a: "Sintesi della funzione DEGREES.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "Parametro `angle` della funzione DEGREES.",
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
      d: "Descrizione della funzione ERFC.",
      a: "Sintesi della funzione ERFC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "z",
          detail: "Parametro `z` della funzione ERFC.",
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
      d: "Descrizione della funzione EVEN.",
      a: "Sintesi della funzione EVEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione EVEN.",
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
      d: "Descrizione della funzione EXP.",
      a: "Sintesi della funzione EXP.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "exponent",
          detail: "Parametro `exponent` della funzione EXP.",
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
      d: "Descrizione della funzione FACT.",
      a: "Sintesi della funzione FACT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione FACT.",
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
      d: "Descrizione della funzione FACTDOUBLE.",
      a: "Sintesi della funzione FACTDOUBLE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione FACTDOUBLE.",
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
      d: "Descrizione della funzione PI.",
      a: "Sintesi della funzione PI.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FLOOR",
      t: 0,
      d: "Descrizione della funzione FLOOR.",
      a: "Sintesi della funzione FLOOR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione FLOOR.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Parametro `factor` della funzione FLOOR.",
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
      d: "Descrizione della funzione GCD.",
      a: "Sintesi della funzione GCD.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione GCD.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione GCD.",
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
      d: "Descrizione della funzione RANDBETWEEN.",
      a: "Sintesi della funzione RANDBETWEEN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "low",
          detail: "Parametro `low` della funzione RANDBETWEEN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "high",
          detail: "Parametro `high` della funzione RANDBETWEEN.",
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
      d: "Descrizione della funzione ROUND.",
      a: "Sintesi della funzione ROUND.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ROUND.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "places",
          detail: "Parametro `places` della funzione ROUND.",
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
      d: "Descrizione della funzione ROUNDDOWN.",
      a: "Sintesi della funzione ROUNDDOWN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ROUNDDOWN.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "places",
          detail: "Parametro `places` della funzione ROUNDDOWN.",
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
      d: "Descrizione della funzione ROUNDUP.",
      a: "Sintesi della funzione ROUNDUP.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ROUNDUP.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "places",
          detail: "Parametro `places` della funzione ROUNDUP.",
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
      d: "Descrizione della funzione SERIESSUM.",
      a: "Sintesi della funzione SERIESSUM.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione SERIESSUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "Parametro `n` della funzione SERIESSUM.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "m",
          detail: "Parametro `m` della funzione SERIESSUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a",
          detail: "Parametro `a` della funzione SERIESSUM.",
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
      d: "Descrizione della funzione SIGN.",
      a: "Sintesi della funzione SIGN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione SIGN.",
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
      d: "Descrizione della funzione SIN.",
      a: "Sintesi della funzione SIN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "Parametro `angle` della funzione SIN.",
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
      d: "Descrizione della funzione SINH.",
      a: "Sintesi della funzione SINH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione SINH.",
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
      d: "Descrizione della funzione SQRT.",
      a: "Sintesi della funzione SQRT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione SQRT.",
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
      d: "Descrizione della funzione SQRTPI.",
      a: "Sintesi della funzione SQRTPI.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione SQRTPI.",
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
      d: "Descrizione della funzione GAMMALN.",
      a: "Sintesi della funzione GAMMALN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione GAMMALN.",
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
      d: "Descrizione della funzione COS.",
      a: "Sintesi della funzione COS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "Parametro `angle` della funzione COS.",
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
      d: "Descrizione della funzione TRUNC.",
      a: "Sintesi della funzione TRUNC.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione TRUNC.",
          example: "3.141592654",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "places",
          detail: "Parametro `places` della funzione TRUNC.",
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
      d: "Descrizione della funzione QUOTIENT.",
      a: "Sintesi della funzione QUOTIENT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividend",
          detail: "Parametro `dividend` della funzione QUOTIENT.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "Parametro `divisor` della funzione QUOTIENT.",
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
      d: "Descrizione della funzione POWER.",
      a: "Sintesi della funzione POWER.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "base",
          detail: "Parametro `base` della funzione POWER.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "exponent",
          detail: "Parametro `exponent` della funzione POWER.",
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
      d: "Descrizione della funzione SUMIFS.",
      a: "Sintesi della funzione SUMIFS.",
      m: [
        3,
        257
      ],
      p: [
        {
          name: "sum_range",
          detail: "Parametro `sum_range` della funzione SUMIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criteria_range1",
          detail: "Parametro `criteria_range1` della funzione SUMIFS.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterion1",
          detail: "Parametro `criterion1` della funzione SUMIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria_range2",
          detail: "Parametro `criteria_range2` della funzione SUMIFS.",
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
      d: "Descrizione della funzione COUNTIFS.",
      a: "Sintesi della funzione COUNTIFS.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "criteria_range1",
          detail: "Parametro `criteria_range1` della funzione COUNTIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterion1",
          detail: "Parametro `criterion1` della funzione COUNTIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria_range2",
          detail: "Parametro `criteria_range2` della funzione COUNTIFS.",
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
      d: "Descrizione della funzione PRODUCT.",
      a: "Sintesi della funzione PRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "factor1",
          detail: "Parametro `factor1` della funzione PRODUCT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor2",
          detail: "Parametro `factor2` della funzione PRODUCT.",
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
      d: "Descrizione della funzione HARMEAN.",
      a: "Sintesi della funzione HARMEAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione HARMEAN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione HARMEAN.",
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
      d: "Descrizione della funzione HYPGEOMDIST.",
      a: "Sintesi della funzione HYPGEOMDIST.",
      m: [
        5,
        5
      ],
      p: [
        {
          name: "num_successes",
          detail: "Parametro `num_successes` della funzione HYPGEOMDIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "num_draws",
          detail: "Parametro `num_draws` della funzione HYPGEOMDIST.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "successes_in_pop",
          detail: "Parametro `successes_in_pop` della funzione HYPGEOMDIST.",
          example: "20",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "pop_size",
          detail: "Parametro `pop_size` della funzione HYPGEOMDIST.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parametro `cumulative` della funzione HYPGEOMDIST.",
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
      d: "Descrizione della funzione INTERCEPT.",
      a: "Sintesi della funzione INTERCEPT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parametro `data_y` della funzione INTERCEPT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parametro `data_x` della funzione INTERCEPT.",
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
      d: "Descrizione della funzione KURT.",
      a: "Sintesi della funzione KURT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione KURT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione KURT.",
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
      d: "Descrizione della funzione LARGE.",
      a: "Sintesi della funzione LARGE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parametro `data` della funzione LARGE.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "Parametro `n` della funzione LARGE.",
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
      d: "Descrizione della funzione STDEVA.",
      a: "Sintesi della funzione STDEVA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione STDEVA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione STDEVA.",
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
      d: "Descrizione della funzione STDEVP.",
      a: "Sintesi della funzione STDEVP.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione STDEVP.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione STDEVP.",
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
      d: "Descrizione della funzione GEOMEAN.",
      a: "Sintesi della funzione GEOMEAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione GEOMEAN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione GEOMEAN.",
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
      d: "Descrizione della funzione RANK_EQ.",
      a: "Sintesi della funzione RANK_EQ.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione RANK_EQ.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data",
          detail: "Parametro `data` della funzione RANK_EQ.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "is_ascending",
          detail: "Parametro `is_ascending` della funzione RANK_EQ.",
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
      d: "Descrizione della funzione RANK_AVG.",
      a: "Sintesi della funzione RANK_AVG.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione RANK_AVG.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data",
          detail: "Parametro `data` della funzione RANK_AVG.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "is_ascending",
          detail: "Parametro `is_ascending` della funzione RANK_AVG.",
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
      d: "Descrizione della funzione PERCENTRANK_EXC.",
      a: "Sintesi della funzione PERCENTRANK_EXC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "data",
          detail: "Parametro `data` della funzione PERCENTRANK_EXC.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value",
          detail: "Parametro `value` della funzione PERCENTRANK_EXC.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significant_digits",
          detail: "Parametro `significant_digits` della funzione PERCENTRANK_EXC.",
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
      d: "Descrizione della funzione PERCENTRANK_INC.",
      a: "Sintesi della funzione PERCENTRANK_INC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "data",
          detail: "Parametro `data` della funzione PERCENTRANK_INC.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value",
          detail: "Parametro `value` della funzione PERCENTRANK_INC.",
          example: " A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significant_digits",
          detail: "Parametro `significant_digits` della funzione PERCENTRANK_INC.",
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
      d: "Descrizione della funzione FORECAST.",
      a: "Sintesi della funzione FORECAST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione FORECAST.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_y",
          detail: "Parametro `data_y` della funzione FORECAST.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parametro `data_x` della funzione FORECAST.",
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
      d: "Descrizione della funzione FISHERINV.",
      a: "Sintesi della funzione FISHERINV.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione FISHERINV.",
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
      d: "Descrizione della funzione FISHER.",
      a: "Sintesi della funzione FISHER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione FISHER.",
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
      d: "Descrizione della funzione MODE_SNGL.",
      a: "Sintesi della funzione MODE_SNGL.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione MODE_SNGL.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione MODE_SNGL.",
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
      d: "Descrizione della funzione WEIBULL_DIST.",
      a: "Sintesi della funzione WEIBULL_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione WEIBULL_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "shape",
          detail: "Parametro `shape` della funzione WEIBULL_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "scale",
          detail: "Parametro `scale` della funzione WEIBULL_DIST.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parametro `cumulative` della funzione WEIBULL_DIST.",
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
      d: "Descrizione della funzione COUNT.",
      a: "Sintesi della funzione COUNT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione COUNT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione COUNT.",
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
      d: "Descrizione della funzione COUNTA.",
      a: "Sintesi della funzione COUNTA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione COUNTA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione COUNTA.",
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
      d: "Descrizione della funzione AVEDEV.",
      a: "Sintesi della funzione AVEDEV.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione AVEDEV.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione AVEDEV.",
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
      d: "Descrizione della funzione AVERAGE.",
      a: "Sintesi della funzione AVERAGE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione AVERAGE.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione AVERAGE.",
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
      d: "Descrizione della funzione AVERAGEA.",
      a: "Sintesi della funzione AVERAGEA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione AVERAGEA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione AVERAGEA.",
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
      d: "Descrizione della funzione BINOM_DIST.",
      a: "Sintesi della funzione BINOM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "num_successes",
          detail: "Parametro `num_successes` della funzione BINOM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "num_trials",
          detail: "Parametro `num_trials` della funzione BINOM_DIST.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "prob_success",
          detail: "Parametro `prob_success` della funzione BINOM_DIST.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parametro `cumulative` della funzione BINOM_DIST.",
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
      d: "Descrizione della funzione BINOM_INV.",
      a: "Sintesi della funzione BINOM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "num_trials",
          detail: "Parametro `num_trials` della funzione BINOM_INV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "prob_success",
          detail: "Parametro `prob_success` della funzione BINOM_INV.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "target_prob",
          detail: "Parametro `target_prob` della funzione BINOM_INV.",
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
      d: "Descrizione della funzione CONFIDENCE_NORM.",
      a: "Sintesi della funzione CONFIDENCE_NORM.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "alpha",
          detail: "Parametro `alpha` della funzione CONFIDENCE_NORM.",
          example: "0.05",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standard_deviation",
          detail: "Parametro `standard_deviation` della funzione CONFIDENCE_NORM.",
          example: "1.6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "pop_size",
          detail: "Parametro `pop_size` della funzione CONFIDENCE_NORM.",
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
      d: "Descrizione della funzione CORREL.",
      a: "Sintesi della funzione CORREL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parametro `data_y` della funzione CORREL.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parametro `data_x` della funzione CORREL.",
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
      d: "Descrizione della funzione COVARIANCE_P.",
      a: "Sintesi della funzione COVARIANCE_P.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parametro `data_y` della funzione COVARIANCE_P.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parametro `data_x` della funzione COVARIANCE_P.",
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
      d: "Descrizione della funzione COVARIANCE_S.",
      a: "Sintesi della funzione COVARIANCE_S.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parametro `data_y` della funzione COVARIANCE_S.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parametro `data_x` della funzione COVARIANCE_S.",
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
      d: "Descrizione della funzione DEVSQ.",
      a: "Sintesi della funzione DEVSQ.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione DEVSQ.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione DEVSQ.",
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
      d: "Descrizione della funzione EXPON_DIST.",
      a: "Sintesi della funzione EXPON_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione EXPON_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lambda",
          detail: "Parametro `lambda` della funzione EXPON_DIST.",
          example: "0.5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parametro `cumulative` della funzione EXPON_DIST.",
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
      d: "Descrizione della funzione AVERAGEIF.",
      a: "Sintesi della funzione AVERAGEIF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "criteria_range",
          detail: "Parametro `criteria_range` della funzione AVERAGEIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterion",
          detail: "Parametro `criterion` della funzione AVERAGEIF.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "average_range",
          detail: "Parametro `average_range` della funzione AVERAGEIF.",
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
      d: "Descrizione della funzione AVERAGEIFS.",
      a: "Sintesi della funzione AVERAGEIFS.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "average_range",
          detail: "Parametro `average_range` della funzione AVERAGEIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria_range1",
          detail: "Parametro `criteria_range1` della funzione AVERAGEIFS.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterion1",
          detail: "Parametro `criterion1` della funzione AVERAGEIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria_range2",
          detail: "Parametro `criteria_range2` della funzione AVERAGEIFS.",
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
      d: "Descrizione della funzione PERMUT.",
      a: "Sintesi della funzione PERMUT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "Parametro `n` della funzione PERMUT.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Parametro `k` della funzione PERMUT.",
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
      d: "Descrizione della funzione TRIMMEAN.",
      a: "Sintesi della funzione TRIMMEAN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parametro `data` della funzione TRIMMEAN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "exclude_proportion",
          detail: "Parametro `exclude_proportion` della funzione TRIMMEAN.",
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
      d: "Descrizione della funzione PERCENTILE_EXC.",
      a: "Sintesi della funzione PERCENTILE_EXC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parametro `data` della funzione PERCENTILE_EXC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "percentile",
          detail: "Parametro `percentile` della funzione PERCENTILE_EXC.",
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
      d: "Descrizione della funzione PERCENTILE_INC.",
      a: "Sintesi della funzione PERCENTILE_INC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parametro `data` della funzione PERCENTILE_INC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "percentile",
          detail: "Parametro `percentile` della funzione PERCENTILE_INC.",
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
      d: "Descrizione della funzione PEARSON.",
      a: "Sintesi della funzione PEARSON.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parametro `data_y` della funzione PEARSON.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parametro `data_x` della funzione PEARSON.",
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
      d: "Descrizione della funzione NORM_S_INV.",
      a: "Sintesi della funzione NORM_S_INV.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione NORM_S_INV.",
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
      d: "Descrizione della funzione NORM_S_DIST.",
      a: "Sintesi della funzione NORM_S_DIST.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione NORM_S_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parametro `cumulative` della funzione NORM_S_DIST.",
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
      d: "Descrizione della funzione NORM_INV.",
      a: "Sintesi della funzione NORM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione NORM_INV.",
          example: "0.75",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mean",
          detail: "Parametro `mean` della funzione NORM_INV.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standard_deviation",
          detail: "Parametro `standard_deviation` della funzione NORM_INV.",
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
      d: "Descrizione della funzione NORM_DIST.",
      a: "Sintesi della funzione NORM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione NORM_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mean",
          detail: "Parametro `mean` della funzione NORM_DIST.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standard_deviation",
          detail: "Parametro `standard_deviation` della funzione NORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parametro `cumulative` della funzione NORM_DIST.",
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
      d: "Descrizione della funzione NEGBINOM_DIST.",
      a: "Sintesi della funzione NEGBINOM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "num_failures",
          detail: "Parametro `num_failures` della funzione NEGBINOM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "num_successes",
          detail: "Parametro `num_successes` della funzione NEGBINOM_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "prob_success",
          detail: "Parametro `prob_success` della funzione NEGBINOM_DIST.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parametro `cumulative` della funzione NEGBINOM_DIST.",
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
      d: "Descrizione della funzione MINA.",
      a: "Sintesi della funzione MINA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione MINA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione MINA.",
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
      d: "Descrizione della funzione MIN.",
      a: "Sintesi della funzione MIN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione MIN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione MIN.",
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
      d: "Descrizione della funzione MEDIAN.",
      a: "Sintesi della funzione MEDIAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione MEDIAN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione MEDIAN.",
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
      d: "Descrizione della funzione MAXA.",
      a: "Sintesi della funzione MAXA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione MAXA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione MAXA.",
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
      d: "Descrizione della funzione MAX.",
      a: "Sintesi della funzione MAX.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione MAX.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione MAX.",
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
      d: "Descrizione della funzione LOGNORM_INV.",
      a: "Sintesi della funzione LOGNORM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione LOGNORM_INV.",
          example: "0.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mean",
          detail: "Parametro `mean` della funzione LOGNORM_INV.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standard_deviation",
          detail: "Parametro `standard_deviation` della funzione LOGNORM_INV.",
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
      d: "Descrizione della funzione LOGNORM_DIST.",
      a: "Sintesi della funzione LOGNORM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione LOGNORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mean",
          detail: "Parametro `mean` della funzione LOGNORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standard_deviation",
          detail: "Parametro `standard_deviation` della funzione LOGNORM_DIST.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parametro `cumulative` della funzione LOGNORM_DIST.",
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
      d: "Descrizione della funzione Z_TEST.",
      a: "Sintesi della funzione Z_TEST.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "data",
          detail: "Parametro `data` della funzione Z_TEST.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "value",
          detail: "Parametro `value` della funzione Z_TEST.",
          example: "B2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standard_deviation",
          detail: "Parametro `standard_deviation` della funzione Z_TEST.",
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
      d: "Descrizione della funzione PROB.",
      a: "Sintesi della funzione PROB.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "data",
          detail: "Parametro `data` della funzione PROB.",
          example: "A3:A6",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "probabilities",
          detail: "Parametro `probabilities` della funzione PROB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "low_limit",
          detail: "Parametro `low_limit` della funzione PROB.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "high_limit",
          detail: "Parametro `high_limit` della funzione PROB.",
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
      d: "Descrizione della funzione QUARTILE_EXC.",
      a: "Sintesi della funzione QUARTILE_EXC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parametro `data` della funzione QUARTILE_EXC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "quartile_number",
          detail: "Parametro `quartile_number` della funzione QUARTILE_EXC.",
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
      d: "Descrizione della funzione QUARTILE_INC.",
      a: "Sintesi della funzione QUARTILE_INC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parametro `data` della funzione QUARTILE_INC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "quartile_number",
          detail: "Parametro `quartile_number` della funzione QUARTILE_INC.",
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
      d: "Descrizione della funzione POISSON_DIST.",
      a: "Sintesi della funzione POISSON_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione POISSON_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mean",
          detail: "Parametro `mean` della funzione POISSON_DIST.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parametro `cumulative` della funzione POISSON_DIST.",
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
      d: "Descrizione della funzione RSQ.",
      a: "Sintesi della funzione RSQ.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parametro `data_y` della funzione RSQ.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parametro `data_x` della funzione RSQ.",
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
      d: "Descrizione della funzione T_DIST.",
      a: "Sintesi della funzione T_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione T_DIST.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom",
          detail: "Parametro `degrees_freedom` della funzione T_DIST.",
          example: "30",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parametro `cumulative` della funzione T_DIST.",
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
      d: "Descrizione della funzione T_DIST_2T.",
      a: "Sintesi della funzione T_DIST_2T.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione T_DIST_2T.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom",
          detail: "Parametro `degrees_freedom` della funzione T_DIST_2T.",
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
      d: "Descrizione della funzione T_DIST_RT.",
      a: "Sintesi della funzione T_DIST_RT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione T_DIST_RT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom",
          detail: "Parametro `degrees_freedom` della funzione T_DIST_RT.",
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
      d: "Descrizione della funzione T_INV.",
      a: "Sintesi della funzione T_INV.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "probability",
          detail: "Parametro `probability` della funzione T_INV.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom",
          detail: "Parametro `degrees_freedom` della funzione T_INV.",
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
      d: "Descrizione della funzione T_INV_2T.",
      a: "Sintesi della funzione T_INV_2T.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "probability",
          detail: "Parametro `probability` della funzione T_INV_2T.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom",
          detail: "Parametro `degrees_freedom` della funzione T_INV_2T.",
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
      d: "Descrizione della funzione T_TEST.",
      a: "Sintesi della funzione T_TEST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "range1",
          detail: "Parametro `range1` della funzione T_TEST.",
          example: "A1:A4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "range2",
          detail: "Parametro `range2` della funzione T_TEST.",
          example: "B1:B4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tails",
          detail: "Parametro `tails` della funzione T_TEST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "type",
          detail: "Parametro `type` della funzione T_TEST.",
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
      d: "Descrizione della funzione F_DIST.",
      a: "Sintesi della funzione F_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione F_DIST.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom1",
          detail: "Parametro `degrees_freedom1` della funzione F_DIST.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom2",
          detail: "Parametro `degrees_freedom2` della funzione F_DIST.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parametro `cumulative` della funzione F_DIST.",
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
      d: "Descrizione della funzione F_DIST_RT.",
      a: "Sintesi della funzione F_DIST_RT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parametro `x` della funzione F_DIST_RT.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom1",
          detail: "Parametro `degrees_freedom1` della funzione F_DIST_RT.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom2",
          detail: "Parametro `degrees_freedom2` della funzione F_DIST_RT.",
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
      d: "Descrizione della funzione VAR_P.",
      a: "Sintesi della funzione VAR_P.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione VAR_P.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione VAR_P.",
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
      d: "Descrizione della funzione VAR_S.",
      a: "Sintesi della funzione VAR_S.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione VAR_S.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione VAR_S.",
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
      d: "Descrizione della funzione VARA.",
      a: "Sintesi della funzione VARA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione VARA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione VARA.",
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
      d: "Descrizione della funzione VARPA.",
      a: "Sintesi della funzione VARPA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione VARPA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione VARPA.",
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
      d: "Descrizione della funzione STEYX.",
      a: "Sintesi della funzione STEYX.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parametro `data_y` della funzione STEYX.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parametro `data_x` della funzione STEYX.",
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
      d: "Descrizione della funzione STANDARDIZE.",
      a: "Sintesi della funzione STANDARDIZE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione STANDARDIZE.",
          example: "96",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mean",
          detail: "Parametro `mean` della funzione STANDARDIZE.",
          example: "80",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standard_deviation",
          detail: "Parametro `standard_deviation` della funzione STANDARDIZE.",
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
      d: "Descrizione della funzione SMALL.",
      a: "Sintesi della funzione SMALL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parametro `data` della funzione SMALL.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "n",
          detail: "Parametro `n` della funzione SMALL.",
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
      d: "Descrizione della funzione SLOPE.",
      a: "Sintesi della funzione SLOPE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parametro `data_y` della funzione SLOPE.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parametro `data_x` della funzione SLOPE.",
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
      d: "Descrizione della funzione SKEW.",
      a: "Sintesi della funzione SKEW.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione SKEW.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione SKEW.",
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
      d: "Descrizione della funzione SKEW_P.",
      a: "Sintesi della funzione SKEW_P.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione SKEW_P.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione SKEW_P.",
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
      d: "Descrizione della funzione VLOOKUP.",
      a: "Sintesi della funzione VLOOKUP.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "search_key",
          detail: "Parametro `search_key` della funzione VLOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "range",
          detail: "Parametro `range` della funzione VLOOKUP.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "index",
          detail: "Parametro `index` della funzione VLOOKUP.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "is_sorted",
          detail: "Parametro `is_sorted` della funzione VLOOKUP.",
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
      d: "Descrizione della funzione HLOOKUP.",
      a: "Sintesi della funzione HLOOKUP.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "search_key",
          detail: "Parametro `search_key` della funzione HLOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "range",
          detail: "Parametro `range` della funzione HLOOKUP.",
          example: "A2:Z6",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "index",
          detail: "Parametro `index` della funzione HLOOKUP.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "is_sorted",
          detail: "Parametro `is_sorted` della funzione HLOOKUP.",
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
      d: "Descrizione della funzione LOOKUP.",
      a: "Sintesi della funzione LOOKUP.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "search_key",
          detail: "Parametro `search_key` della funzione LOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "search_range|search_result_array",
          detail: "Parametro `search_range|search_result_array` della funzione LOOKUP.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "result_range",
          detail: "Parametro `result_range` della funzione LOOKUP.",
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
      d: "Descrizione della funzione ADDRESS.",
      a: "Sintesi della funzione ADDRESS.",
      m: [
        2,
        5
      ],
      p: [
        {
          name: "row",
          detail: "Parametro `row` della funzione ADDRESS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "column",
          detail: "Parametro `column` della funzione ADDRESS.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "absolute_relative_mode",
          detail: "Parametro `absolute_relative_mode` della funzione ADDRESS.",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "use_a1_notation",
          detail: "Parametro `use_a1_notation` della funzione ADDRESS.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "sheet",
          detail: "Parametro `sheet` della funzione ADDRESS.",
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
      d: "Descrizione della funzione INDIRECT.",
      a: "Sintesi della funzione INDIRECT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "cell_reference_as_string",
          detail: "Parametro `cell_reference_as_string` della funzione INDIRECT.",
          example: "\"Sheet2!\"&B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "is_A1_notation",
          detail: "Parametro `is_A1_notation` della funzione INDIRECT.",
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
      d: "Descrizione della funzione ROW.",
      a: "Sintesi della funzione ROW.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "cell_reference",
          detail: "Parametro `cell_reference` della funzione ROW.",
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
      d: "Descrizione della funzione ROWS.",
      a: "Sintesi della funzione ROWS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "range",
          detail: "Parametro `range` della funzione ROWS.",
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
      d: "Descrizione della funzione COLUMN.",
      a: "Sintesi della funzione COLUMN.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "cell_reference",
          detail: "Parametro `cell_reference` della funzione COLUMN.",
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
      d: "Descrizione della funzione COLUMNS.",
      a: "Sintesi della funzione COLUMNS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "range",
          detail: "Parametro `range` della funzione COLUMNS.",
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
      d: "Descrizione della funzione OFFSET.",
      a: "Sintesi della funzione OFFSET.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "cell_reference",
          detail: "Parametro `cell_reference` della funzione OFFSET.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "offset_rows",
          detail: "Parametro `offset_rows` della funzione OFFSET.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "offset_columns",
          detail: "Parametro `offset_columns` della funzione OFFSET.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "height",
          detail: "Parametro `height` della funzione OFFSET.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "width",
          detail: "Parametro `width` della funzione OFFSET.",
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
      d: "Descrizione della funzione MATCH.",
      a: "Sintesi della funzione MATCH.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "search_key",
          detail: "Parametro `search_key` della funzione MATCH.",
          example: "\"Sunday\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "range",
          detail: "Parametro `range` della funzione MATCH.",
          example: "A2:A9",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "search_type",
          detail: "Parametro `search_type` della funzione MATCH.",
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
      d: "Descrizione della funzione INDEX.",
      a: "Sintesi della funzione INDEX.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "reference",
          detail: "Parametro `reference` della funzione INDEX.",
          example: "A1:C20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "row",
          detail: "Parametro `row` della funzione INDEX.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "column",
          detail: "Parametro `column` della funzione INDEX.",
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
      d: "Descrizione della funzione GETPIVOTDATA.",
      a: "Sintesi della funzione GETPIVOTDATA.",
      m: [
        2,
        254
      ],
      p: [
        {
          name: "value_name",
          detail: "Parametro `value_name` della funzione GETPIVOTDATA.",
          example: "\"SUM of number of units\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "any_pivot_table_cell",
          detail: "Parametro `any_pivot_table_cell` della funzione GETPIVOTDATA.",
          example: "'Pivot table'!A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "original_column",
          detail: "Parametro `original_column` della funzione GETPIVOTDATA.",
          example: "\"division\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        },
        {
          name: "pivot_item",
          detail: "Parametro `pivot_item` della funzione GETPIVOTDATA.",
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
      d: "Descrizione della funzione CHOOSE.",
      a: "Sintesi della funzione CHOOSE.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "index",
          detail: "Parametro `index` della funzione CHOOSE.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "choice1",
          detail: "Parametro `choice1` della funzione CHOOSE.",
          example: "\"A\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "choice2",
          detail: "Parametro `choice2` della funzione CHOOSE.",
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
      d: "Descrizione della funzione HYPERLINK.",
      a: "Sintesi della funzione HYPERLINK.",
      p: [
        {
          name: "url",
          detail: "Parametro `url` della funzione HYPERLINK.",
          example: "\"http://www.luckysheet.com/\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "link_label",
          detail: "Parametro `link_label` della funzione HYPERLINK.",
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
      d: "Descrizione della funzione TIME.",
      a: "Sintesi della funzione TIME.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "hour",
          detail: "Parametro `hour` della funzione TIME.",
          example: "11",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "minute",
          detail: "Parametro `minute` della funzione TIME.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "second",
          detail: "Parametro `second` della funzione TIME.",
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
      d: "Descrizione della funzione TIMEVALUE.",
      a: "Sintesi della funzione TIMEVALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "time_string",
          detail: "Parametro `time_string` della funzione TIMEVALUE.",
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
      d: "Descrizione della funzione EOMONTH.",
      a: "Sintesi della funzione EOMONTH.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "start_date",
          detail: "Parametro `start_date` della funzione EOMONTH.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "months",
          detail: "Parametro `months` della funzione EOMONTH.",
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
      d: "Descrizione della funzione EDATE.",
      a: "Sintesi della funzione EDATE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "start_date",
          detail: "Parametro `start_date` della funzione EDATE.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "months",
          detail: "Parametro `months` della funzione EDATE.",
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
      d: "Descrizione della funzione SECOND.",
      a: "Sintesi della funzione SECOND.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "time",
          detail: "Parametro `time` della funzione SECOND.",
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
      d: "Descrizione della funzione MINUTE.",
      a: "Sintesi della funzione MINUTE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "time",
          detail: "Parametro `time` della funzione MINUTE.",
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
      d: "Descrizione della funzione HOUR.",
      a: "Sintesi della funzione HOUR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "time",
          detail: "Parametro `time` della funzione HOUR.",
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
      d: "Descrizione della funzione NOW.",
      a: "Sintesi della funzione NOW.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "NETWORKDAYS",
      t: 6,
      d: "Descrizione della funzione NETWORKDAYS.",
      a: "Sintesi della funzione NETWORKDAYS.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "start_date",
          detail: "Parametro `start_date` della funzione NETWORKDAYS.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "end_date",
          detail: "Parametro `end_date` della funzione NETWORKDAYS.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "holidays",
          detail: "Parametro `holidays` della funzione NETWORKDAYS.",
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
      d: "Descrizione della funzione NETWORKDAYS_INTL.",
      a: "Sintesi della funzione NETWORKDAYS_INTL.",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "start_date",
          detail: "Parametro `start_date` della funzione NETWORKDAYS_INTL.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "end_date",
          detail: "Parametro `end_date` della funzione NETWORKDAYS_INTL.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "weekend",
          detail: "Parametro `weekend` della funzione NETWORKDAYS_INTL.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "holidays",
          detail: "Parametro `holidays` della funzione NETWORKDAYS_INTL.",
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
      d: "Descrizione della funzione ISOWEEKNUM.",
      a: "Sintesi della funzione ISOWEEKNUM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "date",
          detail: "Parametro `date` della funzione ISOWEEKNUM.",
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
      d: "Descrizione della funzione WEEKNUM.",
      a: "Sintesi della funzione WEEKNUM.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "date",
          detail: "Parametro `date` della funzione WEEKNUM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "type",
          detail: "Parametro `type` della funzione WEEKNUM.",
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
      d: "Descrizione della funzione WEEKDAY.",
      a: "Sintesi della funzione WEEKDAY.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "date",
          detail: "Parametro `date` della funzione WEEKDAY.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "type",
          detail: "Parametro `type` della funzione WEEKDAY.",
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
      d: "Descrizione della funzione DAY.",
      a: "Sintesi della funzione DAY.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "date",
          detail: "Parametro `date` della funzione DAY.",
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
      d: "Descrizione della funzione DAYS.",
      a: "Sintesi della funzione DAYS.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "end_date",
          detail: "Parametro `end_date` della funzione DAYS.",
          example: "2011-3-15",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "start_date",
          detail: "Parametro `start_date` della funzione DAYS.",
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
      d: "Descrizione della funzione DAYS360.",
      a: "Sintesi della funzione DAYS360.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "start_date",
          detail: "Parametro `start_date` della funzione DAYS360.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "end_date",
          detail: "Parametro `end_date` della funzione DAYS360.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "method",
          detail: "Parametro `method` della funzione DAYS360.",
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
      d: "Descrizione della funzione DATE.",
      a: "Sintesi della funzione DATE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "year",
          detail: "Parametro `year` della funzione DATE.",
          example: "1969",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "month",
          detail: "Parametro `month` della funzione DATE.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day",
          detail: "Parametro `day` della funzione DATE.",
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
      d: "Descrizione della funzione DATEVALUE.",
      a: "Sintesi della funzione DATEVALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "date_string",
          detail: "Parametro `date_string` della funzione DATEVALUE.",
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
      d: "Descrizione della funzione DATEDIF.",
      a: "Sintesi della funzione DATEDIF.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "start_date",
          detail: "Parametro `start_date` della funzione DATEDIF.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "end_date",
          detail: "Parametro `end_date` della funzione DATEDIF.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "unit",
          detail: "Parametro `unit` della funzione DATEDIF.",
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
      d: "Descrizione della funzione WORKDAY.",
      a: "Sintesi della funzione WORKDAY.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "start_date",
          detail: "Parametro `start_date` della funzione WORKDAY.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "num_days",
          detail: "Parametro `num_days` della funzione WORKDAY.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "holidays",
          detail: "Parametro `holidays` della funzione WORKDAY.",
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
      d: "Descrizione della funzione WORKDAY_INTL.",
      a: "Sintesi della funzione WORKDAY_INTL.",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "start_date",
          detail: "Parametro `start_date` della funzione WORKDAY_INTL.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "num_days",
          detail: "Parametro `num_days` della funzione WORKDAY_INTL.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "weekend",
          detail: "Parametro `weekend` della funzione WORKDAY_INTL.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "holidays",
          detail: "Parametro `holidays` della funzione WORKDAY_INTL.",
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
      d: "Descrizione della funzione YEAR.",
      a: "Sintesi della funzione YEAR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "date",
          detail: "Parametro `date` della funzione YEAR.",
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
      d: "Descrizione della funzione YEARFRAC.",
      a: "Sintesi della funzione YEARFRAC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "start_date",
          detail: "Parametro `start_date` della funzione YEARFRAC.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "end_date",
          detail: "Parametro `end_date` della funzione YEARFRAC.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione YEARFRAC.",
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
      d: "Descrizione della funzione TODAY.",
      a: "Sintesi della funzione TODAY.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "MONTH",
      t: 6,
      d: "Descrizione della funzione MONTH.",
      a: "Sintesi della funzione MONTH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "date",
          detail: "Parametro `date` della funzione MONTH.",
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
      d: "Descrizione della funzione EFFECT.",
      a: "Sintesi della funzione EFFECT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "nominal_rate",
          detail: "Parametro `nominal_rate` della funzione EFFECT.",
          example: "0.99",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periods_per_year",
          detail: "Parametro `periods_per_year` della funzione EFFECT.",
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
      d: "Descrizione della funzione DOLLAR.",
      a: "Sintesi della funzione DOLLAR.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "number",
          detail: "Parametro `number` della funzione DOLLAR.",
          example: "1.2351",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_places",
          detail: "Parametro `number_of_places` della funzione DOLLAR.",
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
      d: "Descrizione della funzione DOLLARDE.",
      a: "Sintesi della funzione DOLLARDE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "fractional_price",
          detail: "Parametro `fractional_price` della funzione DOLLARDE.",
          example: "100.10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unit",
          detail: "Parametro `unit` della funzione DOLLARDE.",
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
      d: "Descrizione della funzione DOLLARFR.",
      a: "Sintesi della funzione DOLLARFR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "decimal_price",
          detail: "Parametro `decimal_price` della funzione DOLLARFR.",
          example: "100.125",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unit",
          detail: "Parametro `unit` della funzione DOLLARFR.",
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
      d: "Descrizione della funzione DB.",
      a: "Sintesi della funzione DB.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "cost",
          detail: "Parametro `cost` della funzione DB.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "salvage",
          detail: "Parametro `salvage` della funzione DB.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "life",
          detail: "Parametro `life` della funzione DB.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "period",
          detail: "Parametro `period` della funzione DB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "month",
          detail: "Parametro `month` della funzione DB.",
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
      d: "Descrizione della funzione DDB.",
      a: "Sintesi della funzione DDB.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "cost",
          detail: "Parametro `cost` della funzione DDB.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "salvage",
          detail: "Parametro `salvage` della funzione DDB.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "life",
          detail: "Parametro `life` della funzione DDB.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "period",
          detail: "Parametro `period` della funzione DDB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Parametro `factor` della funzione DDB.",
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
      d: "Descrizione della funzione RATE.",
      a: "Sintesi della funzione RATE.",
      m: [
        3,
        6
      ],
      p: [
        {
          name: "number_of_periods",
          detail: "Parametro `number_of_periods` della funzione RATE.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "payment_per_period",
          detail: "Parametro `payment_per_period` della funzione RATE.",
          example: "-100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parametro `present_value` della funzione RATE.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "future_value",
          detail: "Parametro `future_value` della funzione RATE.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parametro `end_or_beginning` della funzione RATE.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rate_guess",
          detail: "Parametro `rate_guess` della funzione RATE.",
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
      d: "Descrizione della funzione CUMPRINC.",
      a: "Sintesi della funzione CUMPRINC.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "rate",
          detail: "Parametro `rate` della funzione CUMPRINC.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_periods",
          detail: "Parametro `number_of_periods` della funzione CUMPRINC.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parametro `present_value` della funzione CUMPRINC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "first_period",
          detail: "Parametro `first_period` della funzione CUMPRINC.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "last_period",
          detail: "Parametro `last_period` della funzione CUMPRINC.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parametro `end_or_beginning` della funzione CUMPRINC.",
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
      d: "Descrizione della funzione COUPNUM.",
      a: "Sintesi della funzione COUPNUM.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione COUPNUM.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione COUPNUM.",
          example: "02",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequency",
          detail: "Parametro `frequency` della funzione COUPNUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione COUPNUM.",
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
      d: "Descrizione della funzione SYD.",
      a: "Sintesi della funzione SYD.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "cost",
          detail: "Parametro `cost` della funzione SYD.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "salvage",
          detail: "Parametro `salvage` della funzione SYD.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "life",
          detail: "Parametro `life` della funzione SYD.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "period",
          detail: "Parametro `period` della funzione SYD.",
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
      d: "Descrizione della funzione TBILLEQ.",
      a: "Sintesi della funzione TBILLEQ.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione TBILLEQ.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione TBILLEQ.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "discount",
          detail: "Parametro `discount` della funzione TBILLEQ.",
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
      d: "Descrizione della funzione TBILLYIELD.",
      a: "Sintesi della funzione TBILLYIELD.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione TBILLYIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione TBILLYIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "price",
          detail: "Parametro `price` della funzione TBILLYIELD.",
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
      d: "Descrizione della funzione TBILLPRICE.",
      a: "Sintesi della funzione TBILLPRICE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione TBILLPRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione TBILLPRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "discount",
          detail: "Parametro `discount` della funzione TBILLPRICE.",
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
      d: "Descrizione della funzione PV.",
      a: "Sintesi della funzione PV.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rate",
          detail: "Parametro `rate` della funzione PV.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_periods",
          detail: "Parametro `number_of_periods` della funzione PV.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "payment_amount",
          detail: "Parametro `payment_amount` della funzione PV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "future_value",
          detail: "Parametro `future_value` della funzione PV.",
          example: "D2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parametro `end_or_beginning` della funzione PV.",
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
      d: "Descrizione della funzione ACCRINT.",
      a: "Sintesi della funzione ACCRINT.",
      m: [
        6,
        8
      ],
      p: [
        {
          name: "issue",
          detail: "Parametro `issue` della funzione ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "first_payment",
          detail: "Parametro `first_payment` della funzione ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rate",
          detail: "Parametro `rate` della funzione ACCRINT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "redemption",
          detail: "Parametro `redemption` della funzione ACCRINT.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequency",
          detail: "Parametro `frequency` della funzione ACCRINT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione ACCRINT.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "calc_method",
          detail: "Parametro `calc_method` della funzione ACCRINT.",
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
      d: "Descrizione della funzione ACCRINTM.",
      a: "Sintesi della funzione ACCRINTM.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "issue",
          detail: "Parametro `issue` della funzione ACCRINTM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione ACCRINTM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rate",
          detail: "Parametro `rate` della funzione ACCRINTM.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "redemption",
          detail: "Parametro `redemption` della funzione ACCRINTM.",
          example: "1000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione ACCRINTM.",
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
      d: "Descrizione della funzione COUPDAYBS.",
      a: "Sintesi della funzione COUPDAYBS.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione COUPDAYBS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione COUPDAYBS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequency",
          detail: "Parametro `frequency` della funzione COUPDAYBS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione COUPDAYBS.",
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
      d: "Descrizione della funzione COUPDAYS.",
      a: "Sintesi della funzione COUPDAYS.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione COUPDAYS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione COUPDAYS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequency",
          detail: "Parametro `frequency` della funzione COUPDAYS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione COUPDAYS.",
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
      d: "Descrizione della funzione COUPDAYSNC.",
      a: "Sintesi della funzione COUPDAYSNC.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione COUPDAYSNC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione COUPDAYSNC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequency",
          detail: "Parametro `frequency` della funzione COUPDAYSNC.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione COUPDAYSNC.",
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
      d: "Descrizione della funzione COUPNCD.",
      a: "Sintesi della funzione COUPNCD.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione COUPNCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione COUPNCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequency",
          detail: "Parametro `frequency` della funzione COUPNCD.",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione COUPNCD.",
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
      d: "Descrizione della funzione COUPPCD.",
      a: "Sintesi della funzione COUPPCD.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione COUPPCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione COUPPCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequency",
          detail: "Parametro `frequency` della funzione COUPPCD.",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione COUPPCD.",
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
      d: "Descrizione della funzione FV.",
      a: "Sintesi della funzione FV.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rate",
          detail: "Parametro `rate` della funzione FV.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_periods",
          detail: "Parametro `number_of_periods` della funzione FV.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "payment_amount",
          detail: "Parametro `payment_amount` della funzione FV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parametro `present_value` della funzione FV.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parametro `end_or_beginning` della funzione FV.",
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
      d: "Descrizione della funzione FVSCHEDULE.",
      a: "Sintesi della funzione FVSCHEDULE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "principal",
          detail: "Parametro `principal` della funzione FVSCHEDULE.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rate_schedule",
          detail: "Parametro `rate_schedule` della funzione FVSCHEDULE.",
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
      d: "Descrizione della funzione YIELD.",
      a: "Sintesi della funzione YIELD.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione YIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione YIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rate",
          detail: "Parametro `rate` della funzione YIELD.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "price",
          detail: "Parametro `price` della funzione YIELD.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "redemption",
          detail: "Parametro `redemption` della funzione YIELD.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequency",
          detail: "Parametro `frequency` della funzione YIELD.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione YIELD.",
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
      d: "Descrizione della funzione YIELDDISC.",
      a: "Sintesi della funzione YIELDDISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione YIELDDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione YIELDDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "price",
          detail: "Parametro `price` della funzione YIELDDISC.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "redemption",
          detail: "Parametro `redemption` della funzione YIELDDISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione YIELDDISC.",
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
      d: "Descrizione della funzione NOMINAL.",
      a: "Sintesi della funzione NOMINAL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "effective_rate",
          detail: "Parametro `effective_rate` della funzione NOMINAL.",
          example: "0.85",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periods_per_year",
          detail: "Parametro `periods_per_year` della funzione NOMINAL.",
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
      d: "Descrizione della funzione XIRR.",
      a: "Sintesi della funzione XIRR.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "cashflow_amounts",
          detail: "Parametro `cashflow_amounts` della funzione XIRR.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "cashflow_dates",
          detail: "Parametro `cashflow_dates` della funzione XIRR.",
          example: "C2:C25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "rate_guess",
          detail: "Parametro `rate_guess` della funzione XIRR.",
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
      d: "Descrizione della funzione MIRR.",
      a: "Sintesi della funzione MIRR.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "cashflow_amounts",
          detail: "Parametro `cashflow_amounts` della funzione MIRR.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "financing_rate",
          detail: "Parametro `financing_rate` della funzione MIRR.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "reinvestment_return_rate",
          detail: "Parametro `reinvestment_return_rate` della funzione MIRR.",
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
      d: "Descrizione della funzione IRR.",
      a: "Sintesi della funzione IRR.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "cashflow_amounts",
          detail: "Parametro `cashflow_amounts` della funzione IRR.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "rate_guess",
          detail: "Parametro `rate_guess` della funzione IRR.",
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
      d: "Descrizione della funzione NPV.",
      a: "Sintesi della funzione NPV.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "discount",
          detail: "Parametro `discount` della funzione NPV.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cashflow1",
          detail: "Parametro `cashflow1` della funzione NPV.",
          example: "200",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cashflow2",
          detail: "Parametro `cashflow2` della funzione NPV.",
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
      d: "Descrizione della funzione XNPV.",
      a: "Sintesi della funzione XNPV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "discount",
          detail: "Parametro `discount` della funzione XNPV.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cashflow_amounts",
          detail: "Parametro `cashflow_amounts` della funzione XNPV.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "cashflow_dates",
          detail: "Parametro `cashflow_dates` della funzione XNPV.",
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
      d: "Descrizione della funzione CUMIPMT.",
      a: "Sintesi della funzione CUMIPMT.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "rate",
          detail: "Parametro `rate` della funzione CUMIPMT.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_periods",
          detail: "Parametro `number_of_periods` della funzione CUMIPMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parametro `present_value` della funzione CUMIPMT.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "first_period",
          detail: "Parametro `first_period` della funzione CUMIPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "last_period",
          detail: "Parametro `last_period` della funzione CUMIPMT.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parametro `end_or_beginning` della funzione CUMIPMT.",
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
      d: "Descrizione della funzione PMT.",
      a: "Sintesi della funzione PMT.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rate",
          detail: "Parametro `rate` della funzione PMT.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_periods",
          detail: "Parametro `number_of_periods` della funzione PMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parametro `present_value` della funzione PMT.",
          example: " 100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "future_value",
          detail: "Parametro `future_value` della funzione PMT.",
          example: "D2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parametro `end_or_beginning` della funzione PMT.",
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
      d: "Descrizione della funzione IPMT.",
      a: "Sintesi della funzione IPMT.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "rate",
          detail: "Parametro `rate` della funzione IPMT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "period",
          detail: "Parametro `period` della funzione IPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_periods",
          detail: "Parametro `number_of_periods` della funzione IPMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parametro `present_value` della funzione IPMT.",
          example: "80000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "future_value",
          detail: "Parametro `future_value` della funzione IPMT.",
          example: "E2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parametro `end_or_beginning` della funzione IPMT.",
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
      d: "Descrizione della funzione PPMT.",
      a: "Sintesi della funzione PPMT.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "rate",
          detail: "Parametro `rate` della funzione PPMT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "period",
          detail: "Parametro `period` della funzione PPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_periods",
          detail: "Parametro `number_of_periods` della funzione PPMT.",
          example: "3*12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parametro `present_value` della funzione PPMT.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "future_value",
          detail: "Parametro `future_value` della funzione PPMT.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parametro `end_or_beginning` della funzione PPMT.",
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
      d: "Descrizione della funzione INTRATE.",
      a: "Sintesi della funzione INTRATE.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "buy_date",
          detail: "Parametro `buy_date` della funzione INTRATE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "sell_date",
          detail: "Parametro `sell_date` della funzione INTRATE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "buy_price",
          detail: "Parametro `buy_price` della funzione INTRATE.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sell_price",
          detail: "Parametro `sell_price` della funzione INTRATE.",
          example: "101200",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione INTRATE.",
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
      d: "Descrizione della funzione PRICE.",
      a: "Sintesi della funzione PRICE.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione PRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione PRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rate",
          detail: "Parametro `rate` della funzione PRICE.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "yield",
          detail: "Parametro `yield` della funzione PRICE.",
          example: "0.065",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "redemption",
          detail: "Parametro `redemption` della funzione PRICE.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequency",
          detail: "Parametro `frequency` della funzione PRICE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione PRICE.",
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
      d: "Descrizione della funzione PRICEDISC.",
      a: "Sintesi della funzione PRICEDISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione PRICEDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione PRICEDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "discount",
          detail: "Parametro `discount` della funzione PRICEDISC.",
          example: "0.0525",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "redemption",
          detail: "Parametro `redemption` della funzione PRICEDISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione PRICEDISC.",
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
      d: "Descrizione della funzione PRICEMAT.",
      a: "Sintesi della funzione PRICEMAT.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "issue",
          detail: "Parametro `issue` della funzione PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rate",
          detail: "Parametro `rate` della funzione PRICEMAT.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "yield",
          detail: "Parametro `yield` della funzione PRICEMAT.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione PRICEMAT.",
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
      d: "Descrizione della funzione RECEIVED.",
      a: "Sintesi della funzione RECEIVED.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione RECEIVED.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione RECEIVED.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "investment",
          detail: "Parametro `investment` della funzione RECEIVED.",
          example: "10000000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "discount",
          detail: "Parametro `discount` della funzione RECEIVED.",
          example: "0.0575",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione RECEIVED.",
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
      d: "Descrizione della funzione DISC.",
      a: "Sintesi della funzione DISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione DISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione DISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "price",
          detail: "Parametro `price` della funzione DISC.",
          example: "97.975",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "redemption",
          detail: "Parametro `redemption` della funzione DISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione DISC.",
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
      d: "Descrizione della funzione NPER.",
      a: "Sintesi della funzione NPER.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rate",
          detail: "Parametro `rate` della funzione NPER.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "payment_amount",
          detail: "Parametro `payment_amount` della funzione NPER.",
          example: "500",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parametro `present_value` della funzione NPER.",
          example: "40000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "future_value",
          detail: "Parametro `future_value` della funzione NPER.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parametro `end_or_beginning` della funzione NPER.",
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
      d: "Descrizione della funzione SLN.",
      a: "Sintesi della funzione SLN.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "cost",
          detail: "Parametro `cost` della funzione SLN.",
          example: "300000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "salvage",
          detail: "Parametro `salvage` della funzione SLN.",
          example: "75000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "life",
          detail: "Parametro `life` della funzione SLN.",
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
      d: "Descrizione della funzione DURATION.",
      a: "Sintesi della funzione DURATION.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione DURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione DURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rate",
          detail: "Parametro `rate` della funzione DURATION.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "yield",
          detail: "Parametro `yield` della funzione DURATION.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequency",
          detail: "Parametro `frequency` della funzione DURATION.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione DURATION.",
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
      d: "Descrizione della funzione MDURATION.",
      a: "Sintesi della funzione MDURATION.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "settlement",
          detail: "Parametro `settlement` della funzione MDURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parametro `maturity` della funzione MDURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rate",
          detail: "Parametro `rate` della funzione MDURATION.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "yield",
          detail: "Parametro `yield` della funzione MDURATION.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequency",
          detail: "Parametro `frequency` della funzione MDURATION.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parametro `day_count_convention` della funzione MDURATION.",
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
      d: "Descrizione della funzione BIN2DEC.",
      a: "Sintesi della funzione BIN2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "signed_binary_number",
          detail: "Parametro `signed_binary_number` della funzione BIN2DEC.",
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
      d: "Descrizione della funzione BIN2HEX.",
      a: "Sintesi della funzione BIN2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "signed_binary_number",
          detail: "Parametro `signed_binary_number` della funzione BIN2HEX.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significant_digits",
          detail: "Parametro `significant_digits` della funzione BIN2HEX.",
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
      d: "Descrizione della funzione BIN2OCT.",
      a: "Sintesi della funzione BIN2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "signed_binary_number",
          detail: "Parametro `signed_binary_number` della funzione BIN2OCT.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significant_digits",
          detail: "Parametro `significant_digits` della funzione BIN2OCT.",
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
      d: "Descrizione della funzione DEC2BIN.",
      a: "Sintesi della funzione DEC2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "decimal_number",
          detail: "Parametro `decimal_number` della funzione DEC2BIN.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significant_digits",
          detail: "Parametro `significant_digits` della funzione DEC2BIN.",
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
      d: "Descrizione della funzione DEC2HEX.",
      a: "Sintesi della funzione DEC2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "decimal_number",
          detail: "Parametro `decimal_number` della funzione DEC2HEX.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significant_digits",
          detail: "Parametro `significant_digits` della funzione DEC2HEX.",
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
      d: "Descrizione della funzione DEC2OCT.",
      a: "Sintesi della funzione DEC2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "decimal_number",
          detail: "Parametro `decimal_number` della funzione DEC2OCT.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significant_digits",
          detail: "Parametro `significant_digits` della funzione DEC2OCT.",
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
      d: "Descrizione della funzione HEX2BIN.",
      a: "Sintesi della funzione HEX2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "signed_hexadecimal_number",
          detail: "Parametro `signed_hexadecimal_number` della funzione HEX2BIN.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significant_digits",
          detail: "Parametro `significant_digits` della funzione HEX2BIN.",
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
      d: "Descrizione della funzione HEX2DEC.",
      a: "Sintesi della funzione HEX2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "signed_hexadecimal_number",
          detail: "Parametro `signed_hexadecimal_number` della funzione HEX2DEC.",
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
      d: "Descrizione della funzione HEX2OCT.",
      a: "Sintesi della funzione HEX2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "signed_hexadecimal_number",
          detail: "Parametro `signed_hexadecimal_number` della funzione HEX2OCT.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significant_digits",
          detail: "Parametro `significant_digits` della funzione HEX2OCT.",
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
      d: "Descrizione della funzione OCT2BIN.",
      a: "Sintesi della funzione OCT2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "signed_octal_number",
          detail: "Parametro `signed_octal_number` della funzione OCT2BIN.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significant_digits",
          detail: "Parametro `significant_digits` della funzione OCT2BIN.",
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
      d: "Descrizione della funzione OCT2DEC.",
      a: "Sintesi della funzione OCT2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "signed_octal_number",
          detail: "Parametro `signed_octal_number` della funzione OCT2DEC.",
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
      d: "Descrizione della funzione OCT2HEX.",
      a: "Sintesi della funzione OCT2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "signed_octal_number",
          detail: "Parametro `signed_octal_number` della funzione OCT2HEX.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significant_digits",
          detail: "Parametro `significant_digits` della funzione OCT2HEX.",
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
      d: "Descrizione della funzione COMPLEX.",
      a: "Sintesi della funzione COMPLEX.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "real_part",
          detail: "Parametro `real_part` della funzione COMPLEX.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "imaginary_part",
          detail: "Parametro `imaginary_part` della funzione COMPLEX.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "suffix",
          detail: "Parametro `suffix` della funzione COMPLEX.",
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
      d: "Descrizione della funzione IMREAL.",
      a: "Sintesi della funzione IMREAL.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "complex_number",
          detail: "Parametro `complex_number` della funzione IMREAL.",
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
      d: "Descrizione della funzione IMAGINARY.",
      a: "Sintesi della funzione IMAGINARY.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "complex_number",
          detail: "Parametro `complex_number` della funzione IMAGINARY.",
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
      d: "Descrizione della funzione IMCONJUGATE.",
      a: "Sintesi della funzione IMCONJUGATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "number",
          detail: "Parametro `number` della funzione IMCONJUGATE.",
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
      d: "Descrizione della funzione IMABS.",
      a: "Sintesi della funzione IMABS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "number",
          detail: "Parametro `number` della funzione IMABS.",
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
      d: "Descrizione della funzione DELTA.",
      a: "Sintesi della funzione DELTA.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "number1",
          detail: "Parametro `number1` della funzione DELTA.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number2",
          detail: "Parametro `number2` della funzione DELTA.",
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
      d: "Descrizione della funzione IMSUM.",
      a: "Sintesi della funzione IMSUM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione IMSUM.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione IMSUM.",
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
      d: "Descrizione della funzione IMSUB.",
      a: "Sintesi della funzione IMSUB.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "first_number",
          detail: "Parametro `first_number` della funzione IMSUB.",
          example: "\"6+5i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "second_number",
          detail: "Parametro `second_number` della funzione IMSUB.",
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
      d: "Descrizione della funzione IMPRODUCT.",
      a: "Sintesi della funzione IMPRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "factor1",
          detail: "Parametro `factor1` della funzione IMPRODUCT.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "factor2",
          detail: "Parametro `factor2` della funzione IMPRODUCT.",
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
      d: "Descrizione della funzione IMDIV.",
      a: "Sintesi della funzione IMDIV.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividend",
          detail: "Parametro `dividend` della funzione IMDIV.",
          example: "\"11+16i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "divisor",
          detail: "Parametro `divisor` della funzione IMDIV.",
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
      d: "Descrizione della funzione NOT.",
      a: "Sintesi della funzione NOT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "logical_expression",
          detail: "Parametro `logical_expression` della funzione NOT.",
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
      d: "Descrizione della funzione TRUE.",
      a: "Sintesi della funzione TRUE.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FALSE",
      t: 10,
      d: "Descrizione della funzione FALSE.",
      a: "Sintesi della funzione FALSE.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "AND",
      t: 10,
      d: "Descrizione della funzione AND.",
      a: "Sintesi della funzione AND.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "logical_expression1",
          detail: "Parametro `logical_expression1` della funzione AND.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "logical_expression2",
          detail: "Parametro `logical_expression2` della funzione AND.",
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
      d: "Descrizione della funzione IFERROR.",
      a: "Sintesi della funzione IFERROR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione IFERROR.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value_if_error",
          detail: "Parametro `value_if_error` della funzione IFERROR.",
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
      d: "Descrizione della funzione IF.",
      a: "Sintesi della funzione IF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "logical_expression",
          detail: "Parametro `logical_expression` della funzione IF.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value_if_true",
          detail: "Parametro `value_if_true` della funzione IF.",
          example: "\"A2 is foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value_if_false",
          detail: "Parametro `value_if_false` della funzione IF.",
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
      d: "Descrizione della funzione OR.",
      a: "Sintesi della funzione OR.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "logical_expression1",
          detail: "Parametro `logical_expression1` della funzione OR.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "logical_expression2",
          detail: "Parametro `logical_expression2` della funzione OR.",
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
      d: "Descrizione della funzione NE.",
      a: "Sintesi della funzione NE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione NE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione NE.",
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
      d: "Descrizione della funzione EQ.",
      a: "Sintesi della funzione EQ.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione EQ.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione EQ.",
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
      d: "Descrizione della funzione GT.",
      a: "Sintesi della funzione GT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione GT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione GT.",
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
      d: "Descrizione della funzione GTE.",
      a: "Sintesi della funzione GTE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione GTE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione GTE.",
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
      d: "Descrizione della funzione LT.",
      a: "Sintesi della funzione LT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione LT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione LT.",
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
      d: "Descrizione della funzione LTE.",
      a: "Sintesi della funzione LTE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione LTE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione LTE.",
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
      d: "Descrizione della funzione ADD.",
      a: "Sintesi della funzione ADD.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione ADD.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione ADD.",
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
      d: "Descrizione della funzione MINUS.",
      a: "Sintesi della funzione MINUS.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione MINUS.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione MINUS.",
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
      d: "Descrizione della funzione MULTIPLY.",
      a: "Sintesi della funzione MULTIPLY.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "factor1",
          detail: "Parametro `factor1` della funzione MULTIPLY.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor2",
          detail: "Parametro `factor2` della funzione MULTIPLY.",
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
      d: "Descrizione della funzione DIVIDE.",
      a: "Sintesi della funzione DIVIDE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividend",
          detail: "Parametro `dividend` della funzione DIVIDE.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "Parametro `divisor` della funzione DIVIDE.",
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
      d: "Descrizione della funzione CONCAT.",
      a: "Sintesi della funzione CONCAT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parametro `value1` della funzione CONCAT.",
          example: "\"de\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parametro `value2` della funzione CONCAT.",
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
      d: "Descrizione della funzione UNARY_PERCENT.",
      a: "Sintesi della funzione UNARY_PERCENT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "percentage",
          detail: "Parametro `percentage` della funzione UNARY_PERCENT.",
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
      d: "Descrizione della funzione CONCATENATE.",
      a: "Sintesi della funzione CONCATENATE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "string1",
          detail: "Parametro `string1` della funzione CONCATENATE.",
          example: "\"Super\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "string2",
          detail: "Parametro `string2` della funzione CONCATENATE.",
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
      d: "Descrizione della funzione CODE.",
      a: "Sintesi della funzione CODE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "string",
          detail: "Parametro `string` della funzione CODE.",
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
      d: "Descrizione della funzione CHAR.",
      a: "Sintesi della funzione CHAR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "table_number",
          detail: "Parametro `table_number` della funzione CHAR.",
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
      d: "Descrizione della funzione ARABIC.",
      a: "Sintesi della funzione ARABIC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "roman_numeral",
          detail: "Parametro `roman_numeral` della funzione ARABIC.",
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
      d: "Descrizione della funzione ROMAN.",
      a: "Sintesi della funzione ROMAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "number",
          detail: "Parametro `number` della funzione ROMAN.",
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
      d: "Descrizione della funzione REGEXEXTRACT.",
      a: "Sintesi della funzione REGEXEXTRACT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "text",
          detail: "Parametro `text` della funzione REGEXEXTRACT.",
          example: "\"Needle in a haystack\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "regular_expression",
          detail: "Parametro `regular_expression` della funzione REGEXEXTRACT.",
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
      d: "Descrizione della funzione REGEXMATCH.",
      a: "Sintesi della funzione REGEXMATCH.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "text",
          detail: "Parametro `text` della funzione REGEXMATCH.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "regular_expression",
          detail: "Parametro `regular_expression` della funzione REGEXMATCH.",
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
      d: "Descrizione della funzione REGEXREPLACE.",
      a: "Sintesi della funzione REGEXREPLACE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "text",
          detail: "Parametro `text` della funzione REGEXREPLACE.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "regular_expression",
          detail: "Parametro `regular_expression` della funzione REGEXREPLACE.",
          example: "\"S.*d\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "replacement",
          detail: "Parametro `replacement` della funzione REGEXREPLACE.",
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
      d: "Descrizione della funzione T.",
      a: "Sintesi della funzione T.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione T.",
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
      d: "Descrizione della funzione FIXED.",
      a: "Sintesi della funzione FIXED.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "number",
          detail: "Parametro `number` della funzione FIXED.",
          example: "3.141592653",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_places",
          detail: "Parametro `number_of_places` della funzione FIXED.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "suppress_separator",
          detail: "Parametro `suppress_separator` della funzione FIXED.",
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
      d: "Descrizione della funzione FIND.",
      a: "Sintesi della funzione FIND.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "search_for",
          detail: "Parametro `search_for` della funzione FIND.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "text_to_search",
          detail: "Parametro `text_to_search` della funzione FIND.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "starting_at",
          detail: "Parametro `starting_at` della funzione FIND.",
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
      d: "Descrizione della funzione FINDB.",
      a: "Sintesi della funzione FINDB.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "search_for",
          detail: "Parametro `search_for` della funzione FINDB.",
          example: "\"new\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "text_to_search",
          detail: "Parametro `text_to_search` della funzione FINDB.",
          example: "\"new year\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "starting_at",
          detail: "Parametro `starting_at` della funzione FINDB.",
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
      d: "Descrizione della funzione JOIN.",
      a: "Sintesi della funzione JOIN.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "delimiter",
          detail: "Parametro `delimiter` della funzione JOIN.",
          example: "\" and-a \"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value_or_array1",
          detail: "Parametro `value_or_array1` della funzione JOIN.",
          example: "{1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value_or_array2",
          detail: "Parametro `value_or_array2` della funzione JOIN.",
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
      d: "Descrizione della funzione LEFT.",
      a: "Sintesi della funzione LEFT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "string",
          detail: "Parametro `string` della funzione LEFT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "number_of_characters",
          detail: "Parametro `number_of_characters` della funzione LEFT.",
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
      d: "Descrizione della funzione RIGHT.",
      a: "Sintesi della funzione RIGHT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "string",
          detail: "Parametro `string` della funzione RIGHT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "number_of_characters",
          detail: "Parametro `number_of_characters` della funzione RIGHT.",
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
      d: "Descrizione della funzione MID.",
      a: "Sintesi della funzione MID.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "string",
          detail: "Parametro `string` della funzione MID.",
          example: "\"get this\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "starting_at",
          detail: "Parametro `starting_at` della funzione MID.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "extract_length",
          detail: "Parametro `extract_length` della funzione MID.",
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
      d: "Descrizione della funzione LEN.",
      a: "Sintesi della funzione LEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parametro `text` della funzione LEN.",
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
      d: "Descrizione della funzione LENB.",
      a: "Sintesi della funzione LENB.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parametro `text` della funzione LENB.",
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
      d: "Descrizione della funzione LOWER.",
      a: "Sintesi della funzione LOWER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parametro `text` della funzione LOWER.",
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
      d: "Descrizione della funzione UPPER.",
      a: "Sintesi della funzione UPPER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parametro `text` della funzione UPPER.",
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
      d: "Descrizione della funzione EXACT.",
      a: "Sintesi della funzione EXACT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "string1",
          detail: "Parametro `string1` della funzione EXACT.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "string2",
          detail: "Parametro `string2` della funzione EXACT.",
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
      d: "Descrizione della funzione REPLACE.",
      a: "Sintesi della funzione REPLACE.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "text",
          detail: "Parametro `text` della funzione REPLACE.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "position",
          detail: "Parametro `position` della funzione REPLACE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "length",
          detail: "Parametro `length` della funzione REPLACE.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "new_text",
          detail: "Parametro `new_text` della funzione REPLACE.",
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
      d: "Descrizione della funzione REPT.",
      a: "Sintesi della funzione REPT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "text_to_repeat",
          detail: "Parametro `text_to_repeat` della funzione REPT.",
          example: "\"ha\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "number_of_repetitions",
          detail: "Parametro `number_of_repetitions` della funzione REPT.",
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
      d: "Descrizione della funzione SEARCH.",
      a: "Sintesi della funzione SEARCH.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "search_for",
          detail: "Parametro `search_for` della funzione SEARCH.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "text_to_search",
          detail: "Parametro `text_to_search` della funzione SEARCH.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "starting_at",
          detail: "Parametro `starting_at` della funzione SEARCH.",
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
      d: "Descrizione della funzione SUBSTITUTE.",
      a: "Sintesi della funzione SUBSTITUTE.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "text_to_search",
          detail: "Parametro `text_to_search` della funzione SUBSTITUTE.",
          example: "\"search for it\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "search_for",
          detail: "Parametro `search_for` della funzione SUBSTITUTE.",
          example: "\"search for\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "replace_with",
          detail: "Parametro `replace_with` della funzione SUBSTITUTE.",
          example: "\"Google\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "occurrence_number",
          detail: "Parametro `occurrence_number` della funzione SUBSTITUTE.",
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
      d: "Descrizione della funzione CLEAN.",
      a: "Sintesi della funzione CLEAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parametro `text` della funzione CLEAN.",
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
      d: "Descrizione della funzione TEXT.",
      a: "Sintesi della funzione TEXT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "number",
          detail: "Parametro `number` della funzione TEXT.",
          example: "1.23",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "format",
          detail: "Parametro `format` della funzione TEXT.",
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
      d: "Descrizione della funzione TRIM.",
      a: "Sintesi della funzione TRIM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parametro `text` della funzione TRIM.",
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
      d: "Descrizione della funzione VALUE.",
      a: "Sintesi della funzione VALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parametro `text` della funzione VALUE.",
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
      d: "Descrizione della funzione PROPER.",
      a: "Sintesi della funzione PROPER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text_to_capitalize",
          detail: "Parametro `text_to_capitalize` della funzione PROPER.",
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
      d: "Descrizione della funzione CONVERT.",
      a: "Sintesi della funzione CONVERT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione CONVERT.",
          example: "5.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "start_unit",
          detail: "Parametro `start_unit` della funzione CONVERT.",
          example: "\"g\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "end_unit",
          detail: "Parametro `end_unit` della funzione CONVERT.",
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
      d: "Descrizione della funzione SUMX2MY2.",
      a: "Sintesi della funzione SUMX2MY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "array_x",
          detail: "Parametro `array_x` della funzione SUMX2MY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "array_y",
          detail: "Parametro `array_y` della funzione SUMX2MY2.",
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
      d: "Descrizione della funzione SUMX2PY2.",
      a: "Sintesi della funzione SUMX2PY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "array_x",
          detail: "Parametro `array_x` della funzione SUMX2PY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "array_y",
          detail: "Parametro `array_y` della funzione SUMX2PY2.",
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
      d: "Descrizione della funzione SUMXMY2.",
      a: "Sintesi della funzione SUMXMY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "array_x",
          detail: "Parametro `array_x` della funzione SUMXMY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "array_y",
          detail: "Parametro `array_y` della funzione SUMXMY2.",
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
      d: "Descrizione della funzione TRANSPOSE.",
      a: "Sintesi della funzione TRANSPOSE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "array_or_range",
          detail: "Parametro `array_or_range` della funzione TRANSPOSE.",
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
      d: "Descrizione della funzione TREND.",
      a: "Sintesi della funzione TREND.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "known_data_y",
          detail: "Parametro `known_data_y` della funzione TREND.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "known_data_x",
          detail: "Parametro `known_data_x` della funzione TREND.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "new_data_x",
          detail: "Parametro `new_data_x` della funzione TREND.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Parametro `b` della funzione TREND.",
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
      d: "Descrizione della funzione FREQUENCY.",
      a: "Sintesi della funzione FREQUENCY.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parametro `data` della funzione FREQUENCY.",
          example: "A2:A40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "classes",
          detail: "Parametro `classes` della funzione FREQUENCY.",
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
      d: "Descrizione della funzione GROWTH.",
      a: "Sintesi della funzione GROWTH.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "known_data_y",
          detail: "Parametro `known_data_y` della funzione GROWTH.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "known_data_x",
          detail: "Parametro `known_data_x` della funzione GROWTH.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "new_data_x",
          detail: "Parametro `new_data_x` della funzione GROWTH.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Parametro `b` della funzione GROWTH.",
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
      d: "Descrizione della funzione LINEST.",
      a: "Sintesi della funzione LINEST.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "known_data_y",
          detail: "Parametro `known_data_y` della funzione LINEST.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "known_data_x",
          detail: "Parametro `known_data_x` della funzione LINEST.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "calculate_b",
          detail: "Parametro `calculate_b` della funzione LINEST.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "verbose",
          detail: "Parametro `verbose` della funzione LINEST.",
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
      d: "Descrizione della funzione LOGEST.",
      a: "Sintesi della funzione LOGEST.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "known_data_y",
          detail: "Parametro `known_data_y` della funzione LOGEST.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "known_data_x",
          detail: "Parametro `known_data_x` della funzione LOGEST.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Parametro `b` della funzione LOGEST.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "verbose",
          detail: "Parametro `verbose` della funzione LOGEST.",
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
      d: "Descrizione della funzione MDETERM.",
      a: "Sintesi della funzione MDETERM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "square_matrix",
          detail: "Parametro `square_matrix` della funzione MDETERM.",
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
      d: "Descrizione della funzione MINVERSE.",
      a: "Sintesi della funzione MINVERSE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "square_matrix",
          detail: "Parametro `square_matrix` della funzione MINVERSE.",
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
      d: "Descrizione della funzione MMULT.",
      a: "Sintesi della funzione MMULT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrix1",
          detail: "Parametro `matrix1` della funzione MMULT.",
          example: "A1:B3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix2",
          detail: "Parametro `matrix2` della funzione MMULT.",
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
      d: "Descrizione della funzione SUMPRODUCT.",
      a: "Sintesi della funzione SUMPRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "array1",
          detail: "Parametro `array1` della funzione SUMPRODUCT.",
          example: "A2:C5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "array2",
          detail: "Parametro `array2` della funzione SUMPRODUCT.",
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
      d: "Descrizione della funzione ISFORMULA.",
      a: "Sintesi della funzione ISFORMULA.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "cell",
          detail: "Parametro `cell` della funzione ISFORMULA.",
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
      d: "Descrizione della funzione CELL.",
      a: "Sintesi della funzione CELL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "info_type",
          detail: "Parametro `info_type` della funzione CELL.",
          example: "\"type\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "reference",
          detail: "Parametro `reference` della funzione CELL.",
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
      d: "Descrizione della funzione NA.",
      a: "Sintesi della funzione NA.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "ERROR_TYPE",
      t: 15,
      d: "Descrizione della funzione ERROR_TYPE.",
      a: "Sintesi della funzione ERROR_TYPE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "reference",
          detail: "Parametro `reference` della funzione ERROR_TYPE.",
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
      d: "Descrizione della funzione ISBLANK.",
      a: "Sintesi della funzione ISBLANK.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ISBLANK.",
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
      d: "Descrizione della funzione ISERR.",
      a: "Sintesi della funzione ISERR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ISERR.",
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
      d: "Descrizione della funzione ISERROR.",
      a: "Sintesi della funzione ISERROR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ISERROR.",
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
      d: "Descrizione della funzione ISLOGICAL.",
      a: "Sintesi della funzione ISLOGICAL.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ISLOGICAL.",
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
      d: "Descrizione della funzione ISNA.",
      a: "Sintesi della funzione ISNA.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ISNA.",
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
      d: "Descrizione della funzione ISNONTEXT.",
      a: "Sintesi della funzione ISNONTEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ISNONTEXT.",
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
      d: "Descrizione della funzione ISNUMBER.",
      a: "Sintesi della funzione ISNUMBER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ISNUMBER.",
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
      d: "Descrizione della funzione ISREF.",
      a: "Sintesi della funzione ISREF.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ISREF.",
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
      d: "Descrizione della funzione ISTEXT.",
      a: "Sintesi della funzione ISTEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione ISTEXT.",
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
      d: "Descrizione della funzione TYPE.",
      a: "Sintesi della funzione TYPE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione TYPE.",
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
      d: "Descrizione della funzione N.",
      a: "Sintesi della funzione N.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione N.",
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
      d: "Descrizione della funzione TO_DATE.",
      a: "Sintesi della funzione TO_DATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione TO_DATE.",
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
      d: "Descrizione della funzione TO_PURE_NUMBER.",
      a: "Sintesi della funzione TO_PURE_NUMBER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione TO_PURE_NUMBER.",
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
      d: "Descrizione della funzione TO_TEXT.",
      a: "Sintesi della funzione TO_TEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione TO_TEXT.",
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
      d: "Descrizione della funzione TO_DOLLARS.",
      a: "Sintesi della funzione TO_DOLLARS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione TO_DOLLARS.",
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
      d: "Descrizione della funzione TO_PERCENT.",
      a: "Sintesi della funzione TO_PERCENT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parametro `value` della funzione TO_PERCENT.",
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
      d: "Descrizione della funzione DGET.",
      a: "Sintesi della funzione DGET.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parametro `database` della funzione DGET.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parametro `field` della funzione DGET.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parametro `criteria` della funzione DGET.",
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
      d: "Descrizione della funzione DMAX.",
      a: "Sintesi della funzione DMAX.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parametro `database` della funzione DMAX.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parametro `field` della funzione DMAX.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parametro `criteria` della funzione DMAX.",
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
      d: "Descrizione della funzione DMIN.",
      a: "Sintesi della funzione DMIN.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parametro `database` della funzione DMIN.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parametro `field` della funzione DMIN.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parametro `criteria` della funzione DMIN.",
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
      d: "Descrizione della funzione DAVERAGE.",
      a: "Sintesi della funzione DAVERAGE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parametro `database` della funzione DAVERAGE.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parametro `field` della funzione DAVERAGE.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parametro `criteria` della funzione DAVERAGE.",
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
      d: "Descrizione della funzione DCOUNT.",
      a: "Sintesi della funzione DCOUNT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parametro `database` della funzione DCOUNT.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parametro `field` della funzione DCOUNT.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parametro `criteria` della funzione DCOUNT.",
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
      d: "Descrizione della funzione DCOUNTA.",
      a: "Sintesi della funzione DCOUNTA.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parametro `database` della funzione DCOUNTA.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parametro `field` della funzione DCOUNTA.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parametro `criteria` della funzione DCOUNTA.",
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
      d: "Descrizione della funzione DPRODUCT.",
      a: "Sintesi della funzione DPRODUCT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parametro `database` della funzione DPRODUCT.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parametro `field` della funzione DPRODUCT.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parametro `criteria` della funzione DPRODUCT.",
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
      d: "Descrizione della funzione DSTDEV.",
      a: "Sintesi della funzione DSTDEV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parametro `database` della funzione DSTDEV.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parametro `field` della funzione DSTDEV.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parametro `criteria` della funzione DSTDEV.",
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
      d: "Descrizione della funzione DSTDEVP.",
      a: "Sintesi della funzione DSTDEVP.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parametro `database` della funzione DSTDEVP.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parametro `field` della funzione DSTDEVP.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parametro `criteria` della funzione DSTDEVP.",
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
      d: "Descrizione della funzione DSUM.",
      a: "Sintesi della funzione DSUM.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parametro `database` della funzione DSUM.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parametro `field` della funzione DSUM.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parametro `criteria` della funzione DSUM.",
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
      d: "Descrizione della funzione DVAR.",
      a: "Sintesi della funzione DVAR.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parametro `database` della funzione DVAR.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parametro `field` della funzione DVAR.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parametro `criteria` della funzione DVAR.",
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
      d: "Descrizione della funzione DVARP.",
      a: "Sintesi della funzione DVARP.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parametro `database` della funzione DVARP.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parametro `field` della funzione DVARP.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parametro `criteria` della funzione DVARP.",
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
      d: "Descrizione della funzione AGE_BY_IDCARD.",
      a: "Sintesi della funzione AGE_BY_IDCARD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ID number",
          example: "A1",
          detail: "Parametro `ID number` della funzione AGE_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Deadline",
          example: "\"2017-10-01\"",
          detail: "Parametro `Deadline` della funzione AGE_BY_IDCARD.",
          require: "o",
          repeat: "n",
          type: "rangedatetime"
        }
      ]
    },
    {
      n: "SEX_BY_IDCARD",
      t: "3",
      d: "Descrizione della funzione SEX_BY_IDCARD.",
      a: "Sintesi della funzione SEX_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ID number",
          example: "\"31033519900101XXXX\"",
          detail: "Parametro `ID number` della funzione SEX_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BIRTHDAY_BY_IDCARD",
      t: "3",
      d: "Descrizione della funzione BIRTHDAY_BY_IDCARD.",
      a: "Sintesi della funzione BIRTHDAY_BY_IDCARD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ID number",
          example: "\"31033519900101XXXX\"",
          detail: "Parametro `ID number` della funzione BIRTHDAY_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Birthday format",
          example: "0",
          detail: "Parametro `Birthday format` della funzione BIRTHDAY_BY_IDCARD.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PROVINCE_BY_IDCARD",
      t: "3",
      d: "Descrizione della funzione PROVINCE_BY_IDCARD.",
      a: "Sintesi della funzione PROVINCE_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ID number",
          example: "\"31033519900101XXXX\"",
          detail: "Parametro `ID number` della funzione PROVINCE_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "CITY_BY_IDCARD",
      t: "3",
      d: "Descrizione della funzione CITY_BY_IDCARD.",
      a: "Sintesi della funzione CITY_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ID number",
          example: "\"31033519900101XXXX\"",
          detail: "Parametro `ID number` della funzione CITY_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STAR_BY_IDCARD",
      t: "3",
      d: "Descrizione della funzione STAR_BY_IDCARD.",
      a: "Sintesi della funzione STAR_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ID number",
          example: "\"31033519900101XXXX\"",
          detail: "Parametro `ID number` della funzione STAR_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ANIMAL_BY_IDCARD",
      t: "3",
      d: "Descrizione della funzione ANIMAL_BY_IDCARD.",
      a: "Sintesi della funzione ANIMAL_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ID number",
          example: "\"31033519900101XXXX\"",
          detail: "Parametro `ID number` della funzione ANIMAL_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISIDCARD",
      t: "3",
      d: "Descrizione della funzione ISIDCARD.",
      a: "Sintesi della funzione ISIDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ID number",
          example: "\"31033519900101XXXX\"",
          detail: "Parametro `ID number` della funzione ISIDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DM_TEXT_CUTWORD",
      t: "4",
      d: "Descrizione della funzione DM_TEXT_CUTWORD.",
      a: "Sintesi della funzione DM_TEXT_CUTWORD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Text",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parametro `Text` della funzione DM_TEXT_CUTWORD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Word segmentation mode",
          example: "0",
          detail: "Parametro `Word segmentation mode` della funzione DM_TEXT_CUTWORD.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DM_TEXT_TFIDF",
      t: "4",
      d: "Descrizione della funzione DM_TEXT_TFIDF.",
      a: "Sintesi della funzione DM_TEXT_TFIDF.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Text",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parametro `Text` della funzione DM_TEXT_TFIDF.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Number of keywords",
          example: "20",
          detail: "Parametro `Number of keywords` della funzione DM_TEXT_TFIDF.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "Corpus",
          example: "1",
          detail: "Parametro `Corpus` della funzione DM_TEXT_TFIDF.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DM_TEXT_TEXTRANK",
      t: "4",
      d: "Descrizione della funzione DM_TEXT_TEXTRANK.",
      a: "Sintesi della funzione DM_TEXT_TEXTRANK.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Text",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parametro `Text` della funzione DM_TEXT_TEXTRANK.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Number of keywords",
          example: "20",
          detail: "Parametro `Number of keywords` della funzione DM_TEXT_TEXTRANK.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "Corpus",
          example: "1",
          detail: "Parametro `Corpus` della funzione DM_TEXT_TEXTRANK.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_CLOSE",
      t: "5",
      d: "Descrizione della funzione DATA_CN_STOCK_CLOSE.",
      a: "Sintesi della funzione DATA_CN_STOCK_CLOSE.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Stock code",
          example: "\"000001\"",
          detail: "Parametro `Stock code` della funzione DATA_CN_STOCK_CLOSE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Parametro `Date` della funzione DATA_CN_STOCK_CLOSE.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Reversion and exclusion",
          example: "0",
          detail: "Parametro `Reversion and exclusion` della funzione DATA_CN_STOCK_CLOSE.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_OPEN",
      t: "5",
      d: "Descrizione della funzione DATA_CN_STOCK_OPEN.",
      a: "Sintesi della funzione DATA_CN_STOCK_OPEN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Stock code",
          example: "\"000001\"",
          detail: "Parametro `Stock code` della funzione DATA_CN_STOCK_OPEN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Parametro `Date` della funzione DATA_CN_STOCK_OPEN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Reversion and exclusion",
          example: "0",
          detail: "Parametro `Reversion and exclusion` della funzione DATA_CN_STOCK_OPEN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_MAX",
      t: "5",
      d: "Descrizione della funzione DATA_CN_STOCK_MAX.",
      a: "Sintesi della funzione DATA_CN_STOCK_MAX.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Stock code",
          example: "\"000001\"",
          detail: "Parametro `Stock code` della funzione DATA_CN_STOCK_MAX.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Parametro `Date` della funzione DATA_CN_STOCK_MAX.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Reversion and exclusion",
          example: "0",
          detail: "Parametro `Reversion and exclusion` della funzione DATA_CN_STOCK_MAX.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_MIN",
      t: "5",
      d: "Descrizione della funzione DATA_CN_STOCK_MIN.",
      a: "Sintesi della funzione DATA_CN_STOCK_MIN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Stock code",
          example: "\"000001\"",
          detail: "Parametro `Stock code` della funzione DATA_CN_STOCK_MIN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Parametro `Date` della funzione DATA_CN_STOCK_MIN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Reversion and exclusion",
          example: "0",
          detail: "Parametro `Reversion and exclusion` della funzione DATA_CN_STOCK_MIN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_VOLUMN",
      t: "5",
      d: "Descrizione della funzione DATA_CN_STOCK_VOLUMN.",
      a: "Sintesi della funzione DATA_CN_STOCK_VOLUMN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Stock code",
          example: "\"000001\"",
          detail: "Parametro `Stock code` della funzione DATA_CN_STOCK_VOLUMN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Parametro `Date` della funzione DATA_CN_STOCK_VOLUMN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Reversion and exclusion",
          example: "0",
          detail: "Parametro `Reversion and exclusion` della funzione DATA_CN_STOCK_VOLUMN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_AMOUNT",
      t: "5",
      d: "Descrizione della funzione DATA_CN_STOCK_AMOUNT.",
      a: "Sintesi della funzione DATA_CN_STOCK_AMOUNT.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Stock code",
          example: "\"000001\"",
          detail: "Parametro `Stock code` della funzione DATA_CN_STOCK_AMOUNT.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Parametro `Date` della funzione DATA_CN_STOCK_AMOUNT.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Reversion and exclusion",
          example: "0",
          detail: "Parametro `Reversion and exclusion` della funzione DATA_CN_STOCK_AMOUNT.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ISDATE",
      t: "6",
      d: "Descrizione della funzione ISDATE.",
      a: "Sintesi della funzione ISDATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          example: "\"1990-01-01\"",
          detail: "Parametro `value` della funzione ISDATE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LINESPLINES",
      t: "3",
      d: "Descrizione della funzione LINESPLINES.",
      a: "Sintesi della funzione LINESPLINES.",
      m: [
        1,
        8
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parametro `Range` della funzione LINESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Line color",
          example: "#2ec7c9",
          detail: "Parametro `Line color` della funzione LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Line thickness",
          example: "1",
          detail: "Parametro `Line thickness` della funzione LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Auxiliary line",
          example: "avg",
          detail: "Parametro `Auxiliary line` della funzione LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Auxiliary line color",
          example: "#000",
          detail: "Parametro `Auxiliary line color` della funzione LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximum mark",
          example: "#fc5c5c",
          detail: "Parametro `Maximum mark` della funzione LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Minimum mark",
          example: "#fc5c5c",
          detail: "Parametro `Minimum mark` della funzione LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Mark size",
          example: "1.5",
          detail: "Parametro `Mark size` della funzione LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "AREASPLINES",
      t: "3",
      d: "Descrizione della funzione AREASPLINES.",
      a: "Sintesi della funzione AREASPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parametro `Range` della funzione AREASPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Line color",
          example: "#2ec7c9",
          detail: "Parametro `Line color` della funzione AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Fill color",
          example: "#CCF3F4",
          detail: "Parametro `Fill color` della funzione AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Line thickness",
          example: "1",
          detail: "Parametro `Line thickness` della funzione AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Auxiliary line",
          example: "avg",
          detail: "Parametro `Auxiliary line` della funzione AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Auxiliary line color",
          example: "#000",
          detail: "Parametro `Auxiliary line color` della funzione AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COLUMNSPLINES",
      t: "3",
      d: "Descrizione della funzione COLUMNSPLINES.",
      a: "Sintesi della funzione COLUMNSPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parametro `Range` della funzione COLUMNSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar interval",
          example: "1",
          detail: "Parametro `Bar interval` della funzione COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar color",
          example: "#fc5c5c",
          detail: "Parametro `Bar color` della funzione COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Negative bar color",
          example: "#97b552",
          detail: "Parametro `Negative bar color` della funzione COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Max",
          example: "100",
          detail: "Parametro `Max` della funzione COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color palette",
          example: "#97b552",
          detail: "Parametro `Color palette` della funzione COLUMNSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STACKCOLUMNSPLINES",
      t: "3",
      d: "Descrizione della funzione STACKCOLUMNSPLINES.",
      a: "Sintesi della funzione STACKCOLUMNSPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parametro `Range` della funzione STACKCOLUMNSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Stack by column",
          example: "1",
          detail: "Parametro `Stack by column` della funzione STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar interval",
          example: "1",
          detail: "Parametro `Bar interval` della funzione STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Max",
          example: "100",
          detail: "Parametro `Max` della funzione STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color palette",
          example: "#97b552",
          detail: "Parametro `Color palette` della funzione STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BARSPLINES",
      t: "3",
      d: "Descrizione della funzione BARSPLINES.",
      a: "Sintesi della funzione BARSPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parametro `Range` della funzione BARSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar interval",
          example: "1",
          detail: "Parametro `Bar interval` della funzione BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar color",
          example: "#fc5c5c",
          detail: "Parametro `Bar color` della funzione BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Negative bar color",
          example: "#97b552",
          detail: "Parametro `Negative bar color` della funzione BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Max",
          example: "100",
          detail: "Parametro `Max` della funzione BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color palette",
          example: "#97b552",
          detail: "Parametro `Color palette` della funzione BARSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STACKBARSPLINES",
      t: "3",
      d: "Descrizione della funzione STACKBARSPLINES.",
      a: "Sintesi della funzione STACKBARSPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parametro `Range` della funzione STACKBARSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Stack by column",
          example: "1",
          detail: "Parametro `Stack by column` della funzione STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar interval",
          example: "1",
          detail: "Parametro `Bar interval` della funzione STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Max",
          example: "100",
          detail: "Parametro `Max` della funzione STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color palette",
          example: "#97b552",
          detail: "Parametro `Color palette` della funzione STACKBARSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DISCRETESPLINES",
      t: "3",
      d: "Descrizione della funzione DISCRETESPLINES.",
      a: "Sintesi della funzione DISCRETESPLINES.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parametro `Range` della funzione DISCRETESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Segmentation threshold",
          example: "1",
          detail: "Parametro `Segmentation threshold` della funzione DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Above threshold color",
          example: "#2ec7c9",
          detail: "Parametro `Above threshold color` della funzione DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Below threshold color",
          example: "#fc5c5c",
          detail: "Parametro `Below threshold color` della funzione DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TRISTATESPLINES",
      t: "3",
      d: "Descrizione della funzione TRISTATESPLINES.",
      a: "Sintesi della funzione TRISTATESPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parametro `Range` della funzione TRISTATESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar interval",
          example: "1",
          detail: "Parametro `Bar interval` della funzione TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar color",
          example: "#fc5c5c",
          detail: "Parametro `Bar color` della funzione TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Negative bar color",
          example: "#97b552",
          detail: "Parametro `Negative bar color` della funzione TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Zero value bar color",
          example: "#999",
          detail: "Parametro `Zero value bar color` della funzione TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color palette",
          example: "#97b552",
          detail: "Parametro `Color palette` della funzione TRISTATESPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PIESPLINES",
      t: "3",
      d: "Descrizione della funzione PIESPLINES.",
      a: "Sintesi della funzione PIESPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parametro `Range` della funzione PIESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Rotation angle",
          example: "0",
          detail: "Parametro `Rotation angle` della funzione PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "border",
          example: "0",
          detail: "Parametro `border` della funzione PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Border color",
          example: "#000",
          detail: "Parametro `Border color` della funzione PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color palette",
          example: "#97b552",
          detail: "Parametro `Color palette` della funzione PIESPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BOXSPLINES",
      t: "3",
      d: "Descrizione della funzione BOXSPLINES.",
      a: "Sintesi della funzione BOXSPLINES.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parametro `Range` della funzione BOXSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Outlier ratio",
          example: "1.5",
          detail: "Parametro `Outlier ratio` della funzione BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Target value",
          example: "10",
          detail: "Parametro `Target value` della funzione BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Point size",
          example: "1.5",
          detail: "Parametro `Point size` della funzione BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BULLETSPLINES",
      t: "3",
      d: "Descrizione della funzione BULLETSPLINES.",
      a: "Sintesi della funzione BULLETSPLINES.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "Target",
          example: "10",
          detail: "Parametro `Target` della funzione BULLETSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "achieved",
          example: "8",
          detail: "Parametro `achieved` della funzione BULLETSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Contrast",
          example: "12",
          detail: "Parametro `Contrast` della funzione BULLETSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COMPOSESPLINES",
      t: "3",
      d: "Descrizione della funzione COMPOSESPLINES.",
      a: "Sintesi della funzione COMPOSESPLINES.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "config",
          example: "PIESPLINES(A1:A20)",
          detail: "Parametro `config` della funzione COMPOSESPLINES.",
          require: "m",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "SORT",
      t: "14",
      d: "Descrizione della funzione SORT.",
      a: "Sintesi della funzione SORT.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "range",
          detail: "Parametro `range` della funzione SORT.",
          example: "A2:A17",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sort_column",
          detail: "Parametro `sort_column` della funzione SORT.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "is_ascending",
          detail: "Parametro `is_ascending` della funzione SORT.",
          example: "-1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sort_column2",
          detail: "Parametro `sort_column2` della funzione SORT.",
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
      d: "Descrizione della funzione FILTER.",
      a: "Sintesi della funzione FILTER.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "range",
          detail: "Parametro `range` della funzione FILTER.",
          example: "A5:D20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "condition1",
          detail: "Parametro `condition1` della funzione FILTER.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "condition2",
          detail: "Parametro `condition2` della funzione FILTER.",
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
      d: "Descrizione della funzione UNIQUE.",
      a: "Sintesi della funzione UNIQUE.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "range",
          detail: "Parametro `range` della funzione UNIQUE.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "by_col",
          detail: "Parametro `by_col` della funzione UNIQUE.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "occurs_once",
          detail: "Parametro `occurs_once` della funzione UNIQUE.",
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
      d: "Descrizione della funzione RANDARRAY.",
      a: "Sintesi della funzione RANDARRAY.",
      m: [
        0,
        2
      ],
      p: [
        {
          name: "rows",
          detail: "Parametro `rows` della funzione RANDARRAY.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "columns",
          detail: "Parametro `columns` della funzione RANDARRAY.",
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
      d: "Descrizione della funzione SEQUENCE.",
      a: "Sintesi della funzione SEQUENCE.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "rows",
          detail: "Parametro `rows` della funzione SEQUENCE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "columns",
          detail: "Parametro `columns` della funzione SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "start",
          detail: "Parametro `start` della funzione SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "step",
          detail: "Parametro `step` della funzione SEQUENCE.",
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
      d: "Descrizione della funzione EVALUATE.",
      a: "Sintesi della funzione EVALUATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "expression",
          example: "\"A1+5*2^2\"",
          detail: "Parametro `expression` della funzione EVALUATE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "REMOTE",
      t: "5",
      d: "Descrizione della funzione REMOTE.",
      a: "Sintesi della funzione REMOTE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "remote_expression",
          example: "SUM(A1:A10000000)",
          detail: "Parametro `remote_expression` della funzione REMOTE.",
          require: "m",
          repeat: "n",
          type: "string"
        }
      ]
    }
  ],
  toolbar: {
    toolbar: "Barra degli strumenti",
    undo: "Annulla",
    redo: "Ripeti",
    "clear-format": "Cancella formato",
    "format-painter": "Copia formato",
    paintFormat: "Copia formato",
    "currency-format": "Formato valuta",
    "percentage-format": "Formato percentuale",
    "number-decrease": "Diminuisci decimali",
    "number-increase": "Aumenta decimali",
    moreFormats: "Altri formati",
    "border-all": "Tutti i bordi",
    "merge-all": "Unisci tutto",
    format: "Formato",
    font: "Carattere",
    "font-size": "Dimensione carattere",
    bold: "Grassetto",
    italic: "Corsivo",
    "strike-through": "Barrato",
    underline: "Sottolineato",
    "font-color": "Colore testo",
    "align-left": "Allinea a sinistra",
    "align-center": "Allinea al centro",
    "align-right": "Allinea a destra",
    "align-top": "Allinea in alto",
    "align-mid": "Allinea al centro verticale",
    "align-bottom": "Allinea in basso",
    chooseColor: "Scegli colore",
    resetColor: "Reimposta",
    customColor: "Personalizzato",
    alternatingColors: "Colori alternati",
    confirmColor: "Conferma",
    cancelColor: "Annulla",
    collapse: "Comprimi",
    background: "Colore riempimento",
    border: "Bordo",
    borderStyle: "Stile bordo",
    "merge-cell": "Unisci celle",
    chooseMergeType: "Scegli tipo di unione",
    horizontalAlign: "Allineamento orizzontale",
    verticalAlign: "Allineamento verticale",
    alignment: "Allineamento",
    textWrap: "A capo automatico",
    textWrapMode: "A capo automatico",
    textRotate: "Rotazione testo",
    textRotateMode: "Rotazione testo",
    freeze: "Blocca",
    sort: "Ordina",
    filter: "Filtro",
    sortAndFilter: "Ordina e filtra",
    findAndReplace: "Trova e sostituisci",
    "formula-sum": "Somma",
    autoSum: "Somma automatica",
    moreFunction: "Altre funzioni",
    conditionalFormat: "Formattazione condizionale",
    comment: "Commento",
    pivotTable: "Tabella pivot",
    chart: "Grafico",
    screenshot: "Schermata",
    splitColumn: "Testo in colonne",
    insertImage: "Inserisci immagine",
    insertLink: "Inserisci collegamento",
    dataVerification: "Convalida dati",
    protection: "Protezione",
    clearText: "Cancella contenuto",
    noColorSelectedText: "Nessun colore selezionato",
    toolMore: "Altro",
    toolLess: "Meno",
    toolClose: "Chiudi",
    toolMoreTip: "Altri strumenti",
    moreOptions: "Altre opzioni",
    cellFormat: "Formato celle",
    print: "Stampa",
    currencyFormat: "Formato valuta",
    percentageFormat: "Formato percentuale",
    numberDecrease: "Diminuisci decimali",
    numberIncrease: "Aumenta decimali",
    fontSize: "Dimensione carattere",
    strikethrough: "Barrato",
    textColor: "Colore testo",
    fillColor: "Colore riempimento",
    mergeCell: "Unisci celle",
    horizontalAlignMode: "Allineamento orizzontale",
    verticalAlignMode: "Allineamento verticale",
    image: "Immagine",
    link: "Collegamento",
    function: "Funzione",
    formula: "Formula",
    frozenMode: "Blocca",
    edit: "Modifica",
    save: "Salva",
    preview: "Anteprima",
    clear: "Cancella",
    insert: "Inserisci",
    delete: "Elimina",
    hide: "Nascondi",
    show: "Mostra",
    data: "Dati",
    view: "Visualizza",
    share: "Condividi",
    history: "Cronologia",
    copy: "Copia",
    paste: "Incolla",
    cut: "Taglia",
    import: "Importa",
    export: "Esporta",
    download: "Scarica",
    upload: "Carica",
    refresh: "Aggiorna",
    zoom: "Zoom",
    help: "Aiuto",
    close: "Chiudi",
    settings: "Impostazioni",
    fullscreen: "Schermo intero",
    exitFullscreen: "Esci da schermo intero",
    gridlines: "Griglia",
    lock: "Blocca",
    unlock: "Sblocca"
  },
  alternatingColors: {
    applyRange: "Apply to range",
    selectRange: "Seleziona un intervallo di dati",
    header: "Header",
    footer: "Footer",
    errorInfo: "Impossibile eseguire questa operazione su più aree selezionate. Seleziona una sola area e riprova.",
    textTitle: "Format style",
    custom: "CUSTOM",
    close: "Chiudi",
    selectionTextColor: "Fai clic per scegliere il colore del testo",
    selectionCellColor: "Fai clic per scegliere il colore della cella",
    removeColor: "Rimuovi colori alternati",
    colorShow: "colore",
    currentColor: "Current",
    tipSelectRange: "Seleziona l’intervallo dei colori alternati",
    errorNoRange: "Nessun intervallo selezionato",
    errorExistColors: "I colori alternati esistono già e non possono essere modificati"
  },
  button: {
    confirm: "OK",
    cancel: "Annulla",
    close: "Chiudi",
    update: "Aggiorna",
    delete: "Elimina",
    insert: "Inserisci",
    prevPage: "Precedente",
    nextPage: "Successivo",
    total: "Totale:",
    edit: "Modifica",
    add: "Aggiungi",
    clear: "Cancella",
    save: "Salva",
    ok: "OK",
    yes: "Sì",
    no: "No",
    reset: "Reimposta",
    apply: "Applica",
    search: "Cerca",
    replace: "Sostituisci",
    done: "Fine"
  },
  paint: {
    start: "Avvia copia formato",
    end: "Termina copia formato",
    tipSelectRange: "Seleziona l’intervallo a cui applicare il formato",
    tipNotMulti: "Impossibile eseguire questa operazione su più intervalli selezionati"
  },
  format: {
    moreCurrency: "Altri formati valuta",
    moreDateTime: "Altri formati data e ora",
    moreNumber: "Altri formati numero",
    titleCurrency: "Formati valuta",
    decimalPlaces: "Decimali",
    titleDateTime: "Formati data e ora",
    titleNumber: "Formati numero",
    tipDecimalPlaces: "I decimali devono essere compresi tra 0 e 9.",
    select: "Select",
    format: "formato",
    currency: "Valuta",
    titleNumberFormat: "Formato numero",
    formatError: "Errore di formato",
    customFormat: "Formato personalizzato",
    preview: "Anteprima",
    tips: "Suggerimento",
    example: "Esempio",
    type: "Tipo",
    symbol: "Simbolo",
    date: "Data",
    time: "Ora",
    number: "Numero",
    percent: "Percentuale",
    text: "Testo",
    automatic: "Automatico",
    accounting: "Contabilità",
    scientific: "Scientifico",
    fraction: "Frazione",
    duration: "Durata",
    normal: "Normale",
    plainText: "Testo semplice"
  },
  info: {
    detailUpdate: "Aggiornamento completato",
    detailSave: "Salvataggio completato",
    row: "Riga",
    column: "Colonna",
    loading: "Caricamento...",
    copy: "Copiato",
    return: "Indietro",
    rename: "Rinomina",
    tips: "Suggerimenti",
    noName: "Foglio di calcolo senza titolo",
    wait: "Attendere...",
    add: "Add",
    addLast: "altre righe in fondo",
    backTop: "Back to the top",
    pageInfo: "Totale ${total}，${totalPage} pagine，pagina corrente ${currentPage}",
    nextPage: "Next",
    tipInputNumber: "Inserisci il numero",
    tipInputNumberLimit: "L’intervallo di aumento è limitato a 1-100",
    tipRowHeightLimit: "L’altezza della riga deve essere tra 0 e 545",
    tipColumnWidthLimit: "La larghezza della colonna deve essere tra 0 e 2038",
    pageInfoFull: "Totale ${total}，${totalPage} pagine，tutti i dati visualizzati",
    sheetIsFocused: "Blocco focus del foglio attivato.",
    sheetNotFocused: "Blocco focus del foglio disattivato.",
    sheetSrIntro: "Per attivare o disattivare il focus del foglio e facilitare la navigazione nella barra strumenti e fuori dal foglio, usa Maiusc, Ctrl, F.",
    currentCellInput: "Input cella corrente",
    newSheet: "New sheet",
    sheetOptions: "Sheet options",
    Dropdown: "Dropdown",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    toggleSheetFocusShortcut: "Attiva/disattiva blocco focus foglio: Maiusc, Ctrl, F.",
    selectRangeShortcut: "Seleziona intervallo: Maiusc, tasti freccia.",
    autoFillDownShortcut: "Riempimento automatico verso il basso dalla prima cella: Ctrl o Meta, D.",
    autoFillRightShortcut: "Riempimento automatico verso destra dalla prima cella: Ctrl o Meta, R.",
    boldTextShortcut: "Testo in grassetto: Ctrl o Meta, B.",
    copyShortcut: "Copia: Ctrl o Meta, C.",
    pasteShortcut: "Incolla: Ctrl o Meta, V.",
    undoShortcut: "Annulla: Ctrl o Meta, Z.",
    redoShortcut: "Ripeti: Ctrl o Meta, Maiusc, Z.",
    deleteCellContentShortcut: "Elimina contenuto cella: Canc o Backspace.",
    confirmCellEditShortcut: "Conferma modifica cella e sposta in basso: Invio.",
    moveRightShortcut: "Move right: Tab.",
    moveLeftShortcut: "Sposta a sinistra: Maiusc, Tab.",
    shortcuts: "Scorciatoie da tastiera",
    noData: "Nessun dato",
    success: "Operazione riuscita",
    error: "Errore",
    warning: "Avviso"
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
    return [{ text: 'Automatico', value: 'General', example: '' }, { text: 'Testo semplice', value: '@', example: '' }, { text: '', value: 'split', example: '' }, { text: 'Numero', value: '##0.00', example: '1000.12' }, { text: 'Percentuale', value: '#0.00%', example: '12.21%' }, { text: 'Scientifico', value: '0.00E+00', example: '1.01E+5' }, { text: '', value: 'split', example: '' }, { text: 'Contabilità', value: ''.concat(currency, '(0.00)'), example: ''.concat(currency, '(1200.09)') }, { text: 'Valuta', value: ''.concat(currency, '0.00'), example: ''.concat(currency, '1200.09') }, { text: '', value: 'split', example: '' }, { text: 'Data', value: 'yyyy-MM-dd', example: '2017-11-29' }, { text: 'Ora', value: 'hh:mm AM/PM', example: '3:00 PM' }, { text: 'Ora 24h', value: 'hh:mm', example: '15:00' }, { text: 'Data e ora', value: 'yyyy-MM-dd hh:mm AM/PM', example: '2017-11-29 3:00 PM' }, { text: 'Data e ora 24h', value: 'yyyy-MM-dd hh:mm', example: '2017-11-29 15:00' }, { text: '', value: 'split', example: '' }, { text: 'Formati personalizzati', value: 'fmtOtherSelf', example: '', icon: 'rightArrow' }];
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
    borderTop: "Bordo superiore",
    borderBottom: "Bordo inferiore",
    borderLeft: "Bordo sinistro",
    borderRight: "Bordo destro",
    borderNone: "Nessun bordo",
    borderAll: "Tutti i bordi",
    borderOutside: "Bordo esterno",
    borderInside: "Bordi interni",
    borderHorizontal: "Bordi orizzontali interni",
    borderVertical: "Bordi verticali interni",
    borderColor: "Colore bordo",
    borderSize: "Spessore bordo",
    borderSlash: "Slash border",
    borderDefault: "predefinito",
    borderStyle: "stile bordo",
    borderType: "Tipo bordo",
    borderDiagonal: "Bordo diagonale",
    borderDiagonalDown: "Diagonale verso il basso",
    borderDiagonalUp: "Diagonale verso l’alto",
    borderDouble: "Linea doppia",
    borderDotted: "Linea puntinata",
    borderDashed: "Linea tratteggiata",
    borderSolid: "Linea continua",
    borderMedium: "Linea media",
    borderThick: "Linea spessa",
    borderThin: "Linea sottile",
    borderHair: "Linea finissima"
  },
  merge: {
    mergeAll: "Unisci tutto",
    mergeV: "Unisci verticalmente",
    mergeH: "Unisci orizzontalmente",
    mergeCancel: "Annulla unione",
    overlappingError: "Gli intervalli uniti non possono sovrapporsi",
    partiallyError: "Questa operazione non può essere applicata a celle parzialmente unite",
    confirm: "Durante l’unione verrà conservato solo il valore della cella in alto a sinistra. Continuare?",
    confirmTitle: "Unisci celle"
  },
  align: {
    left: "Sinistra",
    center: "Centro",
    right: "Destra",
    top: "Alto",
    middle: "Centro",
    bottom: "Basso",
    justify: "Giustificato",
    general: "Generale"
  },
  textWrap: {
    overflow: "Overflow",
    wrap: "A capo",
    clip: "Ritaglia"
  },
  rotation: {
    none: "Nessuna rotazione",
    angleup: "Inclina verso l’alto",
    angledown: "Inclina verso il basso",
    vertical: "Testo verticale",
    rotationUp: "Ruota verso l’alto",
    rotationDown: "Ruota verso il basso"
  },
  freezen: {
    default: "Nessun blocco",
    freezenRow: "Blocca prima riga",
    freezenColumn: "Blocca prima colonna",
    freezenRC: "Blocca righe e colonne",
    freezenRowRange: "Blocca fino alla riga corrente",
    freezenColumnRange: "Blocca fino alla colonna corrente",
    freezenRCRange: "Blocca fino alla cella corrente",
    freezenCancel: "Annulla blocco",
    noSeletionError: "Nessuna selezione",
    rangeRCOverErrorTitle: "Intervallo non valido",
    rangeRCOverError: "L’intervallo selezionato non è valido"
  },
  sort: {
    asc: "Ordina A-Z",
    desc: "Ordina Z-A",
    custom: "Ordinamento personalizzato",
    hasTitle: "I dati hanno intestazioni",
    sortBy: "Ordina per",
    addOthers: "Aggiungi colonna di ordinamento",
    close: "Chiudi",
    confirm: "Ordina",
    columnOperation: "Column",
    secondaryTitle: "poi per",
    sortTitle: "Sort range",
    sortRangeTitle: "Sort range from",
    sortRangeTitleTo: "to",
    noRangeError: "Impossibile eseguire questa operazione su più aree selezionate. Seleziona un solo intervallo e riprova.",
    mergeError: "Per ordinare, tutte le celle unite devono avere la stessa dimensione.",
    column: "Colonna",
    order: "Ordine",
    value: "Valori",
    color: "Colore",
    ascTitle: "Crescente",
    descTitle: "Decrescente",
    sortRange: "Ordina intervallo",
    sortWarning: "Seleziona un intervallo da ordinare.",
    singleRangeError: "Questa operazione non è disponibile per selezioni multiple."
  },
  filter: {
    filter: "Crea filtro",
    sortByAsc: "Ordina crescente",
    sortByDesc: "Ordina decrescente",
    filterByColor: "Filtra per colore",
    filterByCondition: "Filtra per condizione",
    filterByValues: "Filter by values",
    filiterInputNone: "None",
    filiterInputTip: "Inserisci valore filtro",
    filiterRangeStartTip: "Valore per formula",
    filiterRangeEndTip: "Valore per formula",
    filterValueByAllBtn: "Check all",
    filterValueByClearBtn: "Clear",
    filterValueByInverseBtn: "Inverse",
    filterValueByTip: "filtra per valori",
    filterConform: "Confirm",
    filterCancel: "Cancel",
    clearFilter: "Cancella filtro",
    conditionNone: "Nessuna",
    conditionCellIsNull: "La cella è vuota",
    conditionCellNotNull: "La cella non è vuota",
    conditionCellTextContain: "Il testo contiene",
    conditionCellTextNotContain: "Il testo non contiene",
    conditionCellTextStart: "Il testo inizia con",
    conditionCellTextEnd: "Il testo termina con",
    conditionCellTextEqual: "Il testo è uguale a",
    conditionCellDateEqual: "La data è uguale a",
    conditionCellDateBefore: "La data è precedente a",
    conditionCellDateAfter: "La data è successiva a",
    conditionCellGreater: "Greater than",
    conditionCellGreaterEqual: "Maggiore o uguale a",
    conditionCellLess: "Less than",
    conditionCellLessEqual: "Minore o uguale a",
    conditionCellEqual: "Is equal to",
    conditionCellNotEqual: "Is not equal to",
    conditionCellBetween: "Is between",
    conditionCellNotBetween: "Is not between",
    filiterMoreDataTip: "Grande quantità di dati, attendere",
    filiterMonthText: "Month",
    filiterYearText: "Year",
    filiterByColorTip: "Filtra per colore cella",
    filiterByTextColorTip: "Filtra per colore carattere",
    filterContainerOneColorTip: "Questa colonna contiene un solo colore",
    filterDateFormatTip: "Date format",
    valueBlank: "(Null)",
    mergeError: "La selezione del filtro contiene celle unite; questa operazione non può essere eseguita.",
    filterByValue: "Filtra per valore",
    search: "Cerca",
    selectAll: "Seleziona tutto",
    empty: "(Vuoto)",
    confirm: "OK",
    cancel: "Annulla",
    conditionGreater: "Maggiore di",
    conditionGreaterEqual: "Maggiore o uguale a",
    conditionLess: "Minore di",
    conditionLessEqual: "Minore o uguale a",
    conditionEqual: "Uguale a",
    conditionNotEqual: "Diverso da",
    conditionBetween: "Tra",
    conditionNotBetween: "Non tra",
    conditionCustom: "Formula personalizzata",
    chooseColor: "Scegli colore",
    textColor: "Colore testo",
    backgroundColor: "Colore sfondo",
    clear: "Cancella",
    noResult: "Nessun risultato",
    image: "Immagine"
  },
  rightclick: {
    copy: "Copia",
    copyAs: "Copia come",
    paste: "Incolla",
    insert: "Inserisci",
    image: "Inserisci immagine",
    link: "Inserisci collegamento",
    delete: "Elimina",
    deleteCell: "Elimina celle",
    deleteSelected: "Elimina selezione",
    hide: "Nascondi",
    hideSelected: "Nascondi selezione",
    showHide: "Mostra",
    to: "a",
    left: "sinistra",
    right: "destra",
    top: "alto",
    bottom: "basso",
    moveLeft: "Sposta a sinistra",
    moveUp: "Sposta in alto",
    add: "Aggiungi",
    row: "Riga",
    column: "Colonna",
    width: "Larghezza colonna",
    height: "Altezza riga",
    number: "Numero",
    confirm: "OK",
    orderAZ: "Ordina A-Z",
    orderZA: "Ordina Z-A",
    clearContent: "Cancella contenuto",
    matrix: "Operazione matrice",
    sortSelection: "Ordina selezione",
    filterSelection: "Filtra selezione",
    chartGeneration: "Crea grafico",
    firstLineTitle: "Prima riga come titolo",
    untitled: "Senza titolo",
    array1: "Matrice 1",
    array2: "Matrice 2",
    array3: "Matrice 3",
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
    matrixCalculation: "Calcolo matrice",
    plus: "Plus",
    minus: "Minus",
    multiply: "Multiply",
    divided: "Divided",
    power: "Power",
    root: "Root",
    log: "Log",
    delete0: "Elimina valori 0 a entrambe le estremità",
    removeDuplicate: "Rimuovi duplicati",
    byRow: "By row",
    byCol: "By column",
    generateNewMatrix: "Genera nuova matrice",
    noMulti: "Impossibile eseguire questa operazione su più aree selezionate. Seleziona una sola area.",
    cannotDeleteAllRow: "Impossibile eliminare tutte le righe",
    cannotDeleteAllColumn: "Impossibile eliminare tutte le colonne",
    cannotDeleteRowReadOnly: "Impossibile eliminare una riga in sola lettura",
    cannotDeleteColumnReadOnly: "Impossibile eliminare una colonna in sola lettura",
    cannotInsertOnRowReadOnly: "Impossibile inserire in una riga di sola lettura",
    cannotInsertOnColumnReadOnly: "Impossibile inserire in una colonna di sola lettura",
    rowOverLimit: "Limite di 10000 righe superato",
    columnOverLimit: "Limite di 1000 colonne superato",
    array4: "Matrice 4",
    array5: "Matrice 5",
    array6: "Matrice 6",
    leftTop: "In alto a sinistra",
    rightTop: "In alto a destra",
    leftBottom: "In basso a sinistra",
    rightBottom: "In basso a destra",
    dropCell: "Sposta celle in basso",
    rightCell: "Sposta celle a destra",
    data: "Dati",
    cellFormat: "Formato celle",
    rowHeight: "Altezza riga",
    columnWidth: "Larghezza colonna",
    insertRow: "Inserisci riga",
    insertColumn: "Inserisci colonna",
    deleteRow: "Elimina riga",
    deleteColumn: "Elimina colonna"
  },
  comment: {
    insert: "Inserisci commento",
    edit: "Modifica commento",
    delete: "Elimina commento",
    showOne: "Show/Hide",
    showAll: "Show/Hide All",
    show: "Mostra commento",
    hide: "Nascondi commento",
    reply: "Rispondi",
    resolve: "Risolvi",
    cancel: "Annulla",
    save: "Salva",
    placeholder: "Inserisci un commento",
    commented: "Commentato"
  },
  screenshot: {
    screenshotTipNoSelection: "Seleziona un intervallo",
    screenshotTipTitle: "Schermata",
    screenshotTipHasMerge: "L’intervallo selezionato contiene celle unite e non può essere esportato come immagine",
    screenshotTipHasMulti: "Seleziona un solo intervallo",
    screenshotTipSuccess: "Schermata creata",
    screenshotImageName: "Screenshot",
    downLoadClose: "Close",
    downLoadCopy: "Copia negli appunti",
    downLoadBtn: "Download",
    browserNotTip: "non supportato dal browser IE.",
    rightclickTip: "Fai clic con il pulsante destro su \"copia\" nell’immagine",
    successTip: "Operazione riuscita. Se l’incollamento fallisce, fai clic con il pulsante destro sull’immagine e scegli \"copia immagine\".",
    screenshotTipError: "Creazione schermata non riuscita"
  },
  splitText: {
    splitDelimiters: "Delimitatori",
    splitOther: "Altro",
    splitContinueSymbol: "Considera delimitatori consecutivi come uno solo",
    splitDataPreview: "Anteprima dati",
    splitTextTitle: "Testo in colonne",
    splitConfirmToExe: "Esegui",
    splitSymbols: [
      {
        name: "Tab",
        value: "Tab"
      },
      {
        name: "punto e virgola",
        value: "punto e virgola"
      },
      {
        name: "virgola",
        value: "virgola"
      },
      {
        name: "spazio",
        value: "spazio"
      }
    ],
    tipNoMulti: "Impossibile eseguire questa operazione su più aree selezionate. Seleziona una sola area e riprova.",
    tipNoMultiColumn: "È possibile convertire una sola colonna di dati alla volta. L’area selezionata può avere più righe ma non più colonne. Riprova selezionando una singola colonna.",
    tipNoSelect: "Non puoi dividere una cella senza selezionarla",
    splitCancel: "Annulla",
    splitEmptyTip: "Seleziona un intervallo",
    splitHasMergeTip: "L’intervallo selezionato contiene celle unite",
    splitColumnTip: "Seleziona una sola colonna",
    splitType: "Tipo",
    splitByDelimiters: "Per delimitatori",
    splitByFixedWidth: "Larghezza fissa",
    splitSemicolon: "Punto e virgola",
    splitComma: "Virgola",
    splitSpace: "Spazio",
    splitTab: "Tabulazione"
  },
  imageText: {
    imageSetting: "Impostazioni immagine",
    close: "Chiudi",
    conventional: "Standard",
    moveCell1: "Sposta e ridimensiona celle",
    moveCell2: "Sposta e non ridimensionare la cella",
    moveCell3: "Non spostare né ridimensionare la cella",
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
    moveCell: "Sposta e ridimensiona con le celle",
    moveNoSizeCell: "Sposta con le celle senza ridimensionare",
    noMoveSizeCell: "Non spostare né ridimensionare con le celle",
    title: "Titolo immagine",
    description: "Descrizione",
    upload: "Carica immagine",
    position: "Posizione",
    crop: "Ritaglia",
    reset: "Reimposta",
    replace: "Sostituisci",
    delete: "Elimina",
    lockAspectRatio: "Blocca proporzioni"
  },
  punctuation: {
    tab: "Tabulazione",
    semicolon: "Punto e virgola",
    comma: "Virgola",
    space: "Spazio"
  },
  findAndReplace: {
    find: "Trova",
    replace: "Sostituisci",
    goto: "Vai a",
    location: "Cerca in",
    formula: "Formula",
    date: "Data",
    number: "Number",
    string: "String",
    error: "Error",
    condition: "Condition",
    rowSpan: "Row span",
    columnSpan: "Column span",
    locationExample: "Location",
    lessTwoRowTip: "Seleziona almeno due righe",
    lessTwoColumnTip: "Seleziona almeno due colonne",
    findTextbox: "Find Content",
    replaceTextbox: "Replace Content",
    regexTextbox: "Espressione regolare",
    wholeTextbox: "Whole word",
    distinguishTextbox: "Case sensitive",
    allReplaceBtn: "Replace All",
    replaceBtn: "Replace",
    allFindBtn: "Find All",
    findBtn: "Find next",
    noFindTip: "Il contenuto non è stato trovato",
    modeTip: "Questa operazione non è disponibile in questa modalità",
    searchTargetSheet: "Sheet",
    searchTargetCell: "Cell",
    searchTargetValue: "Value",
    searchInputTip: "Inserisci il contenuto da cercare",
    noReplceTip: "Non c’è nulla da sostituire",
    noMatchTip: "No match found",
    successTip: "${xlength} elementi trovati",
    locationConstant: "Constant",
    locationFormula: "Formula",
    locationDate: "Date",
    locationDigital: "Number",
    locationString: "String",
    locationBool: "Logical",
    locationError: "Error",
    locationNull: "Null",
    locationCondition: "Formato condizionale",
    locationRowSpan: "Row span",
    locationColumnSpan: "Column span",
    locationTiplessTwoRow: "Seleziona almeno due righe",
    locationTiplessTwoColumn: "Seleziona almeno due colonne",
    locationTipNotFindCell: "Cell not found",
    value: "Valore",
    all: "Tutto",
    sheet: "Foglio",
    cell: "Cella",
    row: "Riga",
    column: "Colonna",
    findContent: "Testo da cercare",
    replaceContent: "Sostituisci con",
    caseSensitive: "Maiuscole/minuscole",
    matchEntireCell: "Corrispondenza intera cella",
    searchByRow: "Cerca per righe",
    searchByColumn: "Cerca per colonne",
    next: "Successivo",
    previous: "Precedente",
    replaceAll: "Sostituisci tutto",
    replaceTip: "Sostituzione completata",
    noResult: "Nessuna corrispondenza trovata",
    mode: "Modalità",
    range: "Intervallo",
    workbook: "Cartella di lavoro",
    worksheet: "Foglio di lavoro"
  },
  sheetconfig: {
    delete: "Elimina",
    copy: "Copia",
    rename: "Rinomina",
    changeColor: "Change color",
    hide: "Nascondi",
    unhide: "Mostra",
    moveLeft: "Move left",
    moveRight: "Move right",
    resetColor: "Reset color",
    cancelText: "Cancel",
    chooseText: "Confirm color",
    focus: "Focus",
    tipNameRepeat: "Il nome della scheda non può essere ripetuto. Modificalo.",
    noMoreSheet: "La cartella di lavoro contiene almeno un foglio visibile. Per eliminare il foglio selezionato, inserisci un nuovo foglio o mostra un foglio nascosto.",
    confirmDelete: "Eliminare questo foglio?",
    redoDelete: "Può essere annullato con Ctrl+Z",
    noHide: "Impossibile nascondere: deve rimanere almeno una scheda foglio",
    chartEditNoOpt: "Questa operazione non è consentita in modalità modifica grafico.",
    sheetNameSpecCharError: "Il nome non può contenere: [ ] :  ? * / ' \"",
    sheetNamecannotIsEmptyError: "Il nome del foglio non può essere vuoto",
    color: "Cambia colore",
    move: "Sposta",
    order: "Cambia ordine",
    protect: "Proteggi foglio",
    unprotect: "Rimuovi protezione foglio",
    new: "Nuovo foglio",
    tooltip: "Menu foglio",
    name: "Nome",
    changeSheetName: "Cambia nome foglio",
    oldName: "Vecchio nome",
    newName: "Nuovo nome",
    errorNameRepeat: "Il nome del foglio esiste già",
    errorNameNull: "Il nome del foglio non può essere vuoto",
    errorNameTooLong: "Il nome del foglio non può superare 31 caratteri",
    errorNameSpecChar: "Il nome del foglio non può contenere: [ ] : \\ ? * /",
    errorDelete: "La cartella di lavoro deve contenere almeno un foglio",
    confirmCopy: "Copiare questo foglio?",
    success: "Operazione riuscita",
    failed: "Operazione non riuscita"
  },
  conditionformat: {
    conditionformat_greaterThan: "Maggiore di",
    conditionformat_greaterThan_title: "Formatta le celle maggiori di",
    conditionformat_lessThan: "Minore di",
    conditionformat_lessThan_title: "Formatta le celle minori di",
    conditionformat_between: "Tra",
    conditionformat_between_title: "Formatta le celle comprese tra i seguenti valori",
    conditionformat_equal: "Uguale a",
    conditionformat_equal_title: "Formatta le celle uguali a",
    conditionformat_textContains: "Il testo contiene",
    conditionformat_textContains_title: "Formatta le celle che contengono il testo seguente",
    conditionformat_occurrenceDate: "Data",
    conditionformat_occurrenceDate_title: "Formatta le celle che contengono una data",
    conditionformat_duplicateValue: "Valori duplicati",
    conditionformat_duplicateValue_title: "Formatta valori duplicati",
    conditionformat_top10: "Primi 10",
    conditionformat_top10_percent: "Primi 10%",
    conditionformat_top10_title: "Formatta le celle con il valore più alto",
    conditionformat_last10: "Ultimi 10",
    conditionformat_last10_percent: "Ultimi 10%",
    conditionformat_last10_title: "Formatta le celle con il valore più basso",
    conditionformat_aboveAverage: "Sopra la media",
    conditionformat_aboveAverage_title: "Formatta le celle sopra la media",
    conditionformat_belowAverage: "Sotto la media",
    conditionformat_belowAverage_title: "Formatta le celle sotto la media",
    rule: "Rule",
    newRule: "New rule",
    editRule: "Edit rule",
    deleteRule: "Delete rule",
    deleteCellRule: "Delete cell rule",
    deleteSheetRule: "Elimina regola del foglio",
    manageRules: "Management rules",
    showRules: "Mostra le sue regole di formattazione",
    highlightCellRules: "Regole evidenziazione celle",
    itemSelectionRules: "Regole selezione elementi",
    conditionformatManageRules: "Gestione regole formattazione condizionale",
    format: "Format",
    setFormat: "Set format",
    setAs: "Set as",
    setAsByArea: "Per l’area selezionata, imposta su",
    applyRange: "Apply range",
    selectRange: "Seleziona intervallo di applicazione",
    selectRange_percent: "Percentuale dell’intervallo selezionato",
    selectRange_average: "Valore medio dell’intervallo selezionato",
    selectRange_value: "Valore nell’intervallo selezionato",
    pleaseSelectRange: "Seleziona intervallo di applicazione",
    selectDataRange: "Seleziona intervallo dati",
    selectCell: "seleziona cella",
    pleaseSelectCell: "Seleziona cella",
    pleaseSelectADate: "Seleziona una data",
    pleaseEnterInteger: "Inserisci un intero tra 1 e 1000",
    onlySingleCell: "È possibile fare riferimento a una sola cella",
    conditionValueCanOnly: "Il valore della condizione può essere solo un numero o una singola cella",
    ruleTypeItem1: "Formatta tutte le celle in base ai rispettivi valori",
    ruleTypeItem2: "Formatta solo le celle che contengono",
    ruleTypeItem2_title: "Solo per celle che soddisfano le seguenti condizioni",
    ruleTypeItem3: "Formatta solo i valori superiori o inferiori",
    ruleTypeItem3_title: "Il valore è nella seguente classifica",
    ruleTypeItem4: "Formatta solo valori sopra o sotto la media",
    ruleTypeItem4_title: "È un valore che soddisfa le seguenti condizioni",
    ruleTypeItem5: "Formatta solo valori univoci o ripetuti",
    ruleTypeItem6: "Usa formule per determinare quali celle formattare",
    formula: "Formula",
    textColor: "Text color",
    cellColor: "Cell color",
    confirm: "Confirm",
    confirmColor: "Confirm color",
    cancel: "Cancel",
    close: "Close",
    clearColorSelect: "Cancella selezione colore",
    sheet: "Sheet",
    currentSheet: "Current Sheet",
    dataBar: "barra dati",
    dataBarColor: "colore barra dati",
    gradientDataBar_1: "Barra dati sfumata blu-bianco",
    gradientDataBar_2: "Barra dati sfumata verde-bianco",
    gradientDataBar_3: "Barra dati sfumata rosso-bianco",
    gradientDataBar_4: "Strisce sfumate arancione-bianco",
    gradientDataBar_5: "Strisce sfumate azzurro-bianco",
    gradientDataBar_6: "Barra dati sfumata viola-bianco",
    solidColorDataBar_1: "Blue data bar",
    solidColorDataBar_2: "Green data bar",
    solidColorDataBar_3: "Red data bar",
    solidColorDataBar_4: "Orange data bar",
    solidColorDataBar_5: "Barra dati azzurra",
    solidColorDataBar_6: "Purple data bar",
    colorGradation: "gradazione colore",
    colorGradation_1: "Gradazione colore verde-giallo-rosso",
    colorGradation_2: "Gradazione colore rosso-giallo-verde",
    colorGradation_3: "Gradazione colore verde-bianco-rosso",
    colorGradation_4: "Gradazione colore rosso-bianco-verde",
    colorGradation_5: "Gradazione colore blu-bianco-rosso",
    colorGradation_6: "Gradazione colore rosso-bianco-blu",
    colorGradation_7: "Gradazione colore bianco-rosso",
    colorGradation_8: "Gradazione colore rosso-bianco",
    colorGradation_9: "Gradazione colore verde-bianco",
    colorGradation_10: "Gradazione colore bianco-verde",
    colorGradation_11: "Gradazione colore verde-giallo",
    colorGradation_12: "Gradazione colore giallo-verde",
    icons: "icone",
    pleaseSelectIcon: "Fai clic per selezionare un gruppo di icone:",
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
    editRuleDescription: "Modifica descrizione regola",
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
    threeColorTrafficLight: "Semaforo a tre colori",
    fourColorTrafficLight: "Semaforo a quattro colori",
    threeSigns: "Three signs",
    greenRedBlackGradient: "Sfumatura verde-rosso-nero",
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
    fiveQuadrantDiagram: "Diagramma a cinque quadranti",
    fiveBoxes: "5 Boxes",
    conditionformat_rule: "Regola",
    conditionformat_newRule: "Nuova regola",
    conditionformat_clearRules: "Cancella regole",
    conditionformat_manageRules: "Gestisci regole",
    conditionformat_formatOnlyCells: "Formatta solo celle con",
    conditionformat_cellValue: "Valore cella",
    conditionformat_specificText: "Testo specifico",
    conditionformat_dateOccurring: "Data ricorrente",
    conditionformat_blanks: "Vuote",
    conditionformat_noBlanks: "Non vuote",
    conditionformat_errors: "Errori",
    conditionformat_noErrors: "Senza errori",
    conditionformat_formula: "Formula",
    conditionformat_operator: "Operatore",
    conditionformat_format: "Formato",
    conditionformat_preview: "Anteprima",
    conditionformat_ok: "OK",
    conditionformat_cancel: "Annulla",
    conditionformat_delete: "Elimina",
    conditionformat_add: "Aggiungi",
    conditionformat_colorScale: "Scala colori",
    conditionformat_dataBar: "Barra dati",
    conditionformat_iconSet: "Set icone"
  },
  insertLink: {
    linkText: "Display text",
    linkType: "Link type",
    linkAddress: "Link address",
    linkSheet: "Worksheet",
    linkCell: "Cell range",
    linkTooltip: "Tooltip",
    selectCellRange: "Seleziona intervallo celle",
    cellRangePlaceholder: "Seleziona celle con il cursore o inserisci direttamente",
    placeholder1: "Inserisci l’indirizzo del collegamento web",
    placeholder2: "Inserisci la cella da citare, esempio A1",
    placeholder3: "Inserisci il contenuto del suggerimento",
    tooltipInfo1: "Inserisci un collegamento valido",
    invalidCellRangeTip: "Inserisci l’intervallo celle corretto, ad esempio Sheet1!A1:C8",
    openLink: "Open link",
    goTo: "Vai a ${linkAddress}",
    title: "Inserisci collegamento",
    text: "Testo",
    link: "Collegamento",
    placeholder: "Inserisci collegamento",
    confirm: "OK",
    cancel: "Annulla",
    edit: "Modifica collegamento",
    open: "Apri collegamento",
    remove: "Rimuovi collegamento",
    invalid: "Collegamento non valido",
    url: "Indirizzo web",
    sheet: "Foglio",
    cell: "Cella",
    range: "Intervallo"
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
    cellRange: "Intervallo celle",
    selectCellRange: "Seleziona intervallo celle",
    selectCellRange2: "Seleziona un intervallo di celle",
    verificationCondition: "Condizione di convalida",
    allowMultiSelect: "Consenti selezione multipla",
    dropdown: "Menu a discesa",
    checkbox: "Casella di controllo",
    number: "Numero",
    number_integer: "Number-integer",
    number_decimal: "Number-decimal",
    text_content: "Text-content",
    text_length: "Text-length",
    date: "Data",
    validity: "Effectiveness",
    placeholder1: "Inserisci le opzioni separate da virgole, ad esempio 1,2,3,4,5",
    placeholder2: "Inserisci contenuto",
    placeholder3: "Valore numerico, ad esempio 10",
    placeholder4: "Inserisci il testo specificato",
    placeholder5: "Inserisci il suggerimento visualizzato quando la cella è selezionata",
    selected: "Selected",
    notSelected: "Not selected",
    between: "tra",
    notBetween: "non tra",
    equal: "uguale a",
    notEqualTo: "Not equal to",
    moreThanThe: "More than the",
    lessThan: "minore di",
    greaterOrEqualTo: "Maggiore o uguale a",
    lessThanOrEqualTo: "Minore o uguale a",
    include: "Include",
    exclude: "Exclude",
    earlierThan: "Earlier than",
    noEarlierThan: "No earlier than",
    laterThan: "Later than",
    noLaterThan: "No later than",
    identificationNumber: "Numero identificativo",
    phoneNumber: "Phone number",
    remote: "Opzione di acquisizione remota automatica",
    prohibitInput: "Vieta l’input quando i dati inseriti non sono validi",
    hintShow: "Mostra suggerimento quando la cella è selezionata",
    deleteVerification: "Elimina convalida",
    tooltipInfo1: "L’opzione dell’elenco a discesa non può essere vuota",
    tooltipInfo2: "Il contenuto della casella di controllo non può essere vuoto",
    tooltipInfo3: "Il valore inserito non è di tipo numerico",
    tooltipInfo4: "Il valore 2 non può essere minore del valore 1",
    tooltipInfo5: "Il contenuto testuale non può essere vuoto",
    tooltipInfo6: "Il valore inserito non è di tipo data",
    tooltipInfo7: "La data 2 non può essere precedente alla data 1",
    textlengthInteger: "La lunghezza del testo deve essere un intero maggiore o uguale a 0",
    selectRange: "Seleziona intervallo",
    integer: "Intero",
    decimal: "Decimale",
    text: "Testo",
    list: "Elenco",
    listItem: "Elemento elenco",
    custom: "Formula personalizzata",
    notEqual: "diverso da",
    greaterThan: "maggiore di",
    greaterThanOrEqual: "maggiore o uguale a",
    lessThanOrEqual: "minore o uguale a",
    value: "Valore",
    minimum: "Minimo",
    maximum: "Massimo",
    source: "Origine",
    ignoreBlank: "Ignora vuote",
    showDropdown: "Mostra menu a discesa nella cella",
    inputMessage: "Messaggio di input",
    showInputMessage: "Mostra messaggio di input",
    errorAlert: "Avviso errore",
    showErrorAlert: "Mostra avviso errore",
    errorTitle: "Titolo",
    errorMessage: "Messaggio",
    rejectInput: "Rifiuta input",
    warning: "Avviso",
    information: "Informazione",
    stop: "Interrompi",
    confirm: "OK",
    cancel: "Annulla",
    removeVerification: "Rimuovi convalida dati",
    addRule: "Aggiungi regola",
    editRule: "Modifica regola",
    deleteRule: "Elimina regola",
    saveRule: "Salva regola",
    pleaseInput: "Inserisci",
    rule: "Regola"
  },
  formula: {
    sum: "Somma",
    average: "Media",
    count: "Conteggio",
    max: "Massimo",
    min: "Minimo",
    ifGenerate: "Inserisci funzione",
    find: "Learn more",
    tipNotBelongToIf: "Questa funzione non appartiene a questa categoria",
    tipSelectCell: "Seleziona una cella o un intervallo",
    ifGenCompareValueTitle: "Comparison value",
    ifGenSelectCellTitle: "Fai clic per selezionare la cella",
    ifGenRangeTitle: "Range",
    ifGenRangeTo: "to",
    ifGenRangeEvaluate: "Range evaluate",
    ifGenSelectRangeTitle: "Fai clic per selezionare l’intervallo",
    ifGenCutWay: "Partition way",
    ifGenCutSame: "Stesso valore di partizione",
    ifGenCutNpiece: "Partition by N",
    ifGenCutCustom: "Custom",
    ifGenCutConfirm: "Confirm",
    ifGenTipSelectCell: "Select cells",
    ifGenTipSelectCellPlace: "Seleziona celle",
    ifGenTipSelectRange: "Select range",
    ifGenTipSelectRangePlace: "Seleziona intervallo",
    ifGenTipNotNullValue: "Il valore di confronto non può essere vuoto.",
    ifGenTipLableTitile: "Label",
    ifGenTipRangeNotforNull: "L’intervallo non può essere vuoto.",
    ifGenTipCutValueNotforNull: "Il valore di partizione non può essere vuoto.",
    ifGenTipNotGenCondition: "Nessuna condizione disponibile per la generazione.",
    findFunction: "Cerca funzione",
    help: "Aiuto",
    example: "Esempio",
    functionName: "Nome funzione",
    functionType: "Categoria funzione",
    functionDescription: "Descrizione funzione",
    functionParameter: "Parametro funzione",
    parameter: "Parametro",
    parameterDescription: "Descrizione parametro",
    required: "Obbligatorio",
    optional: "Facoltativo",
    repeat: "Ripetibile",
    formulaError: "Errore formula",
    formulaTip: "Inserisci formula"
  },
  formulaMore: {
    valueTitle: "Valore",
    tipSelectDataRange: "Seleziona intervallo dati",
    tipDataRangeTile: "Intervallo dati",
    findFunctionTitle: "Cerca funzione",
    tipInputFunctionName: "Inserisci nome funzione",
    Array: "Matrice",
    Database: "Database",
    Date: "Data",
    Engineering: "Ingegneria",
    Filter: "Filtro",
    Financial: "Finanziarie",
    luckysheet: "Luckysheet",
    other: "Altro",
    Logical: "Logiche",
    Lookup: "Ricerca",
    Math: "Matematica",
    Operator: "Operatore",
    Parser: "Parser",
    Statistical: "Statistiche",
    Text: "Testo",
    dataMining: "Data mining",
    selectFunctionTitle: "Seleziona una funzione",
    calculationResult: "Result",
    tipSuccessText: "Success",
    tipParamErrorText: "Errore tipo parametro",
    helpClose: "Close",
    helpCollapse: "Collapse",
    helpExample: "Example",
    helpAbstract: "Abstract",
    execfunctionError: "Errore nella formula",
    execfunctionSelfError: "La formula non può fare riferimento alla propria cella",
    execfunctionSelfErrorResult: "La formula non può fare riferimento alla propria cella; ciò produrrà risultati di calcolo imprecisi",
    allowRepeatText: "Repeatable",
    allowOptionText: "Optional",
    selectCategory: "Oppure seleziona una categoria",
    selectFunction: "Seleziona funzione"
  },
  drag: {
    noMerge: "Impossibile eseguire questa operazione su celle unite",
    affectPivot: "Questa modifica non può essere applicata alla cella selezionata perché influirà sulla tabella pivot.",
    noMulti: "Impossibile eseguire questa operazione su più aree selezionate. Seleziona una sola area.",
    noPaste: "Impossibile incollare questo contenuto qui. Seleziona una cella nell’area di incolla e riprova.",
    noPartMerge: "Impossibile eseguire questa operazione su celle parzialmente unite",
    inputCorrect: "Inserisci il valore corretto",
    notLessOne: "Il numero di righe e colonne non può essere inferiore a 1",
    offsetColumnLessZero: "Lo spostamento della colonna non può essere negativo.",
    pasteMustKeybordAlert: "Copia e incolla nella tabella: Ctrl + C per copiare, Ctrl + V per incollare, Ctrl + X per tagliare",
    pasteMustKeybordAlertHTMLTitle: "在表格中进行复制粘贴",
    pasteMustKeybordAlertHTML: "<span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + C</span>&nbsp;&nbsp;per copiare<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + V</span>&nbsp;&nbsp;per incollare<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + X</span>&nbsp;&nbsp;per tagliare"
  },
  pivotTable: {
    title: "Pivot Table",
    closePannel: "Close",
    editRange: "Range",
    tipPivotFieldSelected: "Seleziona i campi",
    tipClearSelectedField: "Clear all fields",
    btnClearSelectedField: "Clear",
    btnFilter: "Filter",
    titleRow: "Row",
    titleColumn: "Column",
    titleValue: "Value",
    tipShowColumn: "I campi statistici sono visualizzati come colonne",
    tipShowRow: "I campi statistici sono visualizzati come righe",
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
    errorNotAllowEdit: "Questa operazione è vietata in modalità non modificabile.",
    errorNotAllowMulti: "Impossibile eseguire questa operazione su più aree selezionate. Seleziona un solo intervallo e riprova.",
    errorSelectRange: "Seleziona l’intervallo della nuova tabella pivot",
    errorIsDamage: "I dati di origine di questa tabella pivot sono danneggiati.",
    errorNotAllowPivotData: "Non è possibile selezionare una tabella pivot come dati di origine.",
    errorSelectionRange: "Selezione non riuscita, intervallo di input errato.",
    errorIncreaseRange: "Estendi l’intervallo selezionato.",
    titleAddColumn: "Aggiungi colonna alla tabella pivot",
    titleMoveColumn: "Sposta la colonna nel riquadro bianco sottostante",
    titleClearColumnFilter: "Cancella il filtro per questa colonna",
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
    borderTile: "Colore bordo immagine",
    borderCur: "Color"
  },
  protection: {
    protectiontTitle: "Protection",
    enterPassword: "Inserisci una password (facoltativo)",
    enterHintTitle: "Suggerimento quando la modifica è vietata (facoltativo)",
    enterHint: "La cella o il grafico che stai cercando di modificare si trova in un foglio protetto. Per modificarlo, rimuovi la protezione del foglio. Potrebbe essere necessario inserire una password.",
    swichProtectionTip: "Proteggi il foglio e il contenuto delle celle bloccate",
    authorityTitle: "Consenti agli utenti di questo foglio di:",
    selectLockedCells: "Selezionare celle bloccate",
    selectunLockedCells: "Selezionare celle sbloccate",
    formatCells: "Format cells",
    formatColumns: "Format columns",
    formatRows: "Format rows",
    insertColumns: "Insert columns",
    insertRows: "Insert rows",
    insertHyperlinks: "Inserire collegamenti ipertestuali",
    deleteColumns: "Delete columns",
    deleteRows: "Delete rows",
    sort: "Sort",
    filter: "Filter",
    usePivotTablereports: "Usare report tabella pivot",
    editObjects: "Edit objects",
    editScenarios: "Edit scenarios",
    allowRangeTitle: "Consenti agli utenti dell’intervallo di:",
    allowRangeAdd: "New...",
    allowRangeAddTitle: "Title",
    allowRangeAddSqrf: "Reference",
    selectCellRange: "Fai clic per selezionare un intervallo di celle",
    selectCellRangeHolder: "Cell range",
    allowRangeAddTitlePassword: "Password",
    allowRangeAddTitleHint: "Prompt",
    allowRangeAddTitleHintTitle: "Suggerimento quando è impostata una password (facoltativo)",
    allowRangeAddtitleDefault: "Input range name",
    rangeItemDblclick: "Doppio clic per modificare",
    rangeItemHasPassword: "Has password",
    rangeItemErrorTitleNull: "Title is null",
    rangeItemErrorRangeNull: "Il riferimento è vuoto",
    rangeItemErrorRange: "Il riferimento contiene un errore",
    validationTitle: "Convalida password",
    validationTips: "È necessario inserire una password per sbloccare la protezione del foglio",
    validationInputHint: "Enter a password",
    checkPasswordNullalert: "La password è obbligatoria.",
    checkPasswordWrongalert: "Password errata, riprova.",
    checkPasswordSucceedalert: "Unlock Succeed!",
    defaultRangeHintText: "La cella è protetta da password.",
    defaultSheetHintText: "La cella o il grafico si trova in un foglio protetto. Per apportare modifiche, rimuovi la protezione del foglio. Potrebbe essere necessario inserire una password."
  },
  cellFormat: {
    cellFormatTitle: "Format cells",
    protection: "Protection",
    locked: "Locked",
    hidden: "Hidden",
    protectionTips: "Per bloccare celle o nascondere formule, proteggi il foglio. Nella barra degli strumenti fai clic sul pulsante Proteggi foglio.",
    tipsPart: "Partial checked",
    tipsAll: "All checked",
    selectionIsNullAlert: "È richiesta una selezione.",
    sheetDataIsNullAlert: "Errore: nessun dato presente."
  },
  print: {
    normalBtn: "Normale",
    layoutBtn: "Layout di pagina",
    pageBtn: "Anteprima interruzioni di pagina",
    menuItemPrint: "Stampa (Ctrl+P)",
    menuItemAreas: "Aree di stampa",
    menuItemRows: "Stampa righe titolo",
    menuItemColumns: "Stampa colonne titolo"
  },
  edit: {
    typing: "digitazione"
  },
  websocket: {
    success: "Connessione WebSocket riuscita",
    refresh: "Si è verificato un errore nella connessione WebSocket. Aggiorna la pagina.",
    wait: "Si è verificato un errore nella connessione WebSocket. Attendi un momento.",
    close: "Connessione WebSocket chiusa",
    contact: "Si è verificato un errore di comunicazione con il server. Aggiorna la pagina e riprova. Se il problema persiste, contatta l’amministratore.",
    support: "Il browser corrente non supporta WebSocket"
  },
  custom: {
    lockCells: "Blocca celle",
    unlockCells: "Sblocca celle",
    toggleSheetProtection: "Proteggi / rimuovi protezione cartella di lavoro",
    toggleGridLines: "Mostra / nascondi griglia",
    standaloneMenu: {
      menuBarLabel: "Menu DocCells",
      file: "File",
      edit: "Modifica",
      view: "Visualizza",
      insert: "Inserisci",
      data: "Dati",
      tools: "Strumenti",
      open: "Apri",
      export: "Esporta",
      show: "Mostra",
      gridlines: "Griglia"
    },
    conditionalFormatting: {
      toolbar: "Formattazione condizionale",
      title: "Formattazione condizionale",
      activeSheet: "Foglio attivo",
      appliedRules: "Regole applicate",
      noRules: "Nessuna regola per questo foglio.",
      editRule: "Modifica regola",
      newRule: "Nuova regola",
      applyTo: "Applica a",
      condition: "Condizione",
      compareTo: "Confronta con",
      minValue: "Valore minimo",
      maxValue: "Valore massimo",
      cell: "Cella",
      sameRowColumn: "Colonna stessa riga",
      text: "Testo",
      value: "Valore",
      textColor: "Testo",
      backgroundColor: "Riempimento",
      style: "Stile",
      preview: "Anteprima cella",
      close: "Chiudi",
      reset: "Nuova",
      save: "Salva",
      add: "Aggiungi",
      edit: "Modifica",
      delete: "Elimina",
      none: "Nessuno",
      sample: "Aa",
      textPlaceholder: "ritardo",
      conditions: {
        lessThan: "è minore di",
        greaterThan: "è maggiore di",
        equal: "è uguale a",
        notEqual: "è diverso da",
        between: "è compreso tra",
        textContains: "contiene il testo"
      },
      compareTypes: {
        value: "un valore fisso",
        cell: "una cella fissa",
        sameRowColumn: "una colonna della stessa riga"
      },
      descriptions: {
        cell: "cella",
        between: "cella tra {value1} e {value2}",
        textContains: "testo contiene \"{value}\"",
        sameRowColumn: "colonna {reference} stessa riga",
        fixedCell: "cella {reference}",
        comparison: "cella {operator} {target}"
      },
      errors: {
        range: "L’intervallo deve assomigliare a A2:A100.",
        between: "Inserisci due valori per la condizione tra.",
        text: "Inserisci il testo da cercare.",
        compareCell: "La cella di confronto deve assomigliare a B1.",
        compareColumn: "La colonna di confronto deve assomigliare a B.",
        compareValue: "Inserisci un valore di confronto.",
        style: "Scegli almeno un colore o uno stile."
      },
      styleLabels: {
        bold: "Grassetto",
        italic: "Corsivo",
        underline: "Sottolineato"
      }
    },
    charts: {
      toolbar: "Inserisci grafico",
      title: "Grafici",
      defaultTitle: "Grafico",
      activeSheet: "Foglio attivo",
      existingCharts: "Grafici del foglio",
      noCharts: "Nessun grafico per questo foglio.",
      newChart: "Nuovo grafico",
      editChart: "Modifica grafico",
      chartTitle: "Titolo",
      type: "Tipo",
      range: "Dati",
      labels: "Etichette",
      labelReference: "Riferimento",
      labelColumnReference: "Lettera della colonna",
      labelRowReference: "Numero della riga",
      values: "Mostra valori",
      legend: "Mostra legenda",
      color: "Colore",
      xAxis: "Mostra etichette asse X",
      yAxis: "Mostra etichette asse Y",
      gridlines: "Mostra griglia",
      displayOptions: "Visualizzazione",
      preview: "Anteprima",
      close: "Chiudi",
      reset: "Nuovo",
      add: "Aggiungi",
      save: "Salva",
      edit: "Modifica",
      delete: "Elimina",
      types: {
        bar: "Barre",
        line: "Linea",
        scatter: "Dispersione",
        pie: "Torta"
      },
      labelTypes: {
        none: "Senza etichette",
        sameRowColumn: "Colonna della stessa riga",
        sameColumnRow: "Riga delle stesse colonne",
        range: "Intervallo personalizzato"
      },
      errors: {
        range: "L’intervallo deve assomigliare a A1:B5.",
        dataColumn: "L’intervallo dati deve essere una singola riga o una singola colonna di valori.",
        labelColumn: "La colonna delle etichette deve assomigliare a B.",
        labelRow: "La riga delle etichette deve assomigliare a 2.",
        labelRange: "L’intervallo delle etichette deve assomigliare a B3:B24.",
        labelRangeSize: "L’intervallo delle etichette deve avere lo stesso numero di valori dei dati.",
        title: "Aggiungi un titolo breve al grafico."
      }
    }
  }
};
