module.exports = {
  generalDialog: {
    partiallyError: "Não é possível executar esta operação em células parcialmente unidas",
    readOnlyError: "Não é possível executar esta operação em modo só de leitura",
    dataNullError: "Não é possível executar esta operação em dados inexistentes",
    noSeletionError: "A operação de seleção ainda não foi efetuada",
    cannotSelectMultiple: "Não é possível selecionar várias seleções"
  },
  functionlist: [
    {
      n: "SUMIF",
      t: 0,
      d: "Descrição da função SUMIF.",
      a: "Resumo da função SUMIF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "range",
          detail: "Parâmetro `range` da função SUMIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterion",
          detail: "Parâmetro `criterion` da função SUMIF.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "sum_range",
          detail: "Parâmetro `sum_range` da função SUMIF.",
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
      d: "Descrição da função TAN.",
      a: "Resumo da função TAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "Parâmetro `angle` da função TAN.",
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
      d: "Descrição da função TANH.",
      a: "Resumo da função TANH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função TANH.",
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
      d: "Descrição da função CEILING.",
      a: "Resumo da função CEILING.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função CEILING.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Parâmetro `factor` da função CEILING.",
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
      d: "Descrição da função ATAN.",
      a: "Resumo da função ATAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ATAN.",
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
      d: "Descrição da função ASINH.",
      a: "Resumo da função ASINH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ASINH.",
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
      d: "Descrição da função ABS.",
      a: "Resumo da função ABS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ABS.",
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
      d: "Descrição da função ACOS.",
      a: "Resumo da função ACOS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ACOS.",
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
      d: "Descrição da função ACOSH.",
      a: "Resumo da função ACOSH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ACOSH.",
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
      d: "Descrição da função MULTINOMIAL.",
      a: "Resumo da função MULTINOMIAL.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função MULTINOMIAL.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função MULTINOMIAL.",
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
      d: "Descrição da função ATANH.",
      a: "Resumo da função ATANH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ATANH.",
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
      d: "Descrição da função ATAN2.",
      a: "Resumo da função ATAN2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função ATAN2.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "y",
          detail: "Parâmetro `y` da função ATAN2.",
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
      d: "Descrição da função COUNTBLANK.",
      a: "Resumo da função COUNTBLANK.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função COUNTBLANK.",
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
      d: "Descrição da função COSH.",
      a: "Resumo da função COSH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função COSH.",
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
      d: "Descrição da função INT.",
      a: "Resumo da função INT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função INT.",
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
      d: "Descrição da função ISEVEN.",
      a: "Resumo da função ISEVEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ISEVEN.",
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
      d: "Descrição da função ISODD.",
      a: "Resumo da função ISODD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ISODD.",
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
      d: "Descrição da função LCM.",
      a: "Resumo da função LCM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função LCM.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função LCM.",
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
      d: "Descrição da função LN.",
      a: "Resumo da função LN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função LN.",
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
      d: "Descrição da função LOG.",
      a: "Resumo da função LOG.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função LOG.",
          example: "128",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "base",
          detail: "Parâmetro `base` da função LOG.",
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
      d: "Descrição da função LOG10.",
      a: "Resumo da função LOG10.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função LOG10.",
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
      d: "Descrição da função MOD.",
      a: "Resumo da função MOD.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividend",
          detail: "Parâmetro `dividend` da função MOD.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "Parâmetro `divisor` da função MOD.",
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
      d: "Descrição da função MROUND.",
      a: "Resumo da função MROUND.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função MROUND.",
          example: "21",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Parâmetro `factor` da função MROUND.",
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
      d: "Descrição da função ODD.",
      a: "Resumo da função ODD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ODD.",
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
      d: "Descrição da função SUMSQ.",
      a: "Resumo da função SUMSQ.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função SUMSQ.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função SUMSQ.",
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
      d: "Descrição da função COMBIN.",
      a: "Resumo da função COMBIN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "Parâmetro `n` da função COMBIN.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Parâmetro `k` da função COMBIN.",
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
      d: "Descrição da função SUM.",
      a: "Resumo da função SUM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função SUM.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função SUM.",
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
      d: "Descrição da função SUBTOTAL.",
      a: "Resumo da função SUBTOTAL.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "function_code",
          detail: "Parâmetro `function_code` da função SUBTOTAL.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "range1",
          detail: "Parâmetro `range1` da função SUBTOTAL.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "range2",
          detail: "Parâmetro `range2` da função SUBTOTAL.",
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
      d: "Descrição da função ASIN.",
      a: "Resumo da função ASIN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ASIN.",
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
      d: "Descrição da função COUNTIF.",
      a: "Resumo da função COUNTIF.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "range",
          detail: "Parâmetro `range` da função COUNTIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterion",
          detail: "Parâmetro `criterion` da função COUNTIF.",
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
      d: "Descrição da função RADIANS.",
      a: "Resumo da função RADIANS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "Parâmetro `angle` da função RADIANS.",
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
      d: "Descrição da função RAND.",
      a: "Resumo da função RAND.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "COUNTUNIQUE",
      t: 0,
      d: "Descrição da função COUNTUNIQUE.",
      a: "Resumo da função COUNTUNIQUE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função COUNTUNIQUE.",
          example: "A1:C100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função COUNTUNIQUE.",
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
      d: "Descrição da função DEGREES.",
      a: "Resumo da função DEGREES.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "Parâmetro `angle` da função DEGREES.",
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
      d: "Descrição da função ERFC.",
      a: "Resumo da função ERFC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "z",
          detail: "Parâmetro `z` da função ERFC.",
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
      d: "Descrição da função EVEN.",
      a: "Resumo da função EVEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função EVEN.",
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
      d: "Descrição da função EXP.",
      a: "Resumo da função EXP.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "exponent",
          detail: "Parâmetro `exponent` da função EXP.",
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
      d: "Descrição da função FACT.",
      a: "Resumo da função FACT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função FACT.",
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
      d: "Descrição da função FACTDOUBLE.",
      a: "Resumo da função FACTDOUBLE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função FACTDOUBLE.",
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
      d: "Descrição da função PI.",
      a: "Resumo da função PI.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FLOOR",
      t: 0,
      d: "Descrição da função FLOOR.",
      a: "Resumo da função FLOOR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função FLOOR.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Parâmetro `factor` da função FLOOR.",
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
      d: "Descrição da função GCD.",
      a: "Resumo da função GCD.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função GCD.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função GCD.",
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
      d: "Descrição da função RANDBETWEEN.",
      a: "Resumo da função RANDBETWEEN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "low",
          detail: "Parâmetro `low` da função RANDBETWEEN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "high",
          detail: "Parâmetro `high` da função RANDBETWEEN.",
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
      d: "Descrição da função ROUND.",
      a: "Resumo da função ROUND.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ROUND.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "places",
          detail: "Parâmetro `places` da função ROUND.",
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
      d: "Descrição da função ROUNDDOWN.",
      a: "Resumo da função ROUNDDOWN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ROUNDDOWN.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "places",
          detail: "Parâmetro `places` da função ROUNDDOWN.",
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
      d: "Descrição da função ROUNDUP.",
      a: "Resumo da função ROUNDUP.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ROUNDUP.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "places",
          detail: "Parâmetro `places` da função ROUNDUP.",
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
      d: "Descrição da função SERIESSUM.",
      a: "Resumo da função SERIESSUM.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função SERIESSUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "Parâmetro `n` da função SERIESSUM.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "m",
          detail: "Parâmetro `m` da função SERIESSUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a",
          detail: "Parâmetro `a` da função SERIESSUM.",
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
      d: "Descrição da função SIGN.",
      a: "Resumo da função SIGN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função SIGN.",
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
      d: "Descrição da função SIN.",
      a: "Resumo da função SIN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "Parâmetro `angle` da função SIN.",
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
      d: "Descrição da função SINH.",
      a: "Resumo da função SINH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função SINH.",
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
      d: "Descrição da função SQRT.",
      a: "Resumo da função SQRT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função SQRT.",
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
      d: "Descrição da função SQRTPI.",
      a: "Resumo da função SQRTPI.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função SQRTPI.",
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
      d: "Descrição da função GAMMALN.",
      a: "Resumo da função GAMMALN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função GAMMALN.",
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
      d: "Descrição da função COS.",
      a: "Resumo da função COS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "Parâmetro `angle` da função COS.",
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
      d: "Descrição da função TRUNC.",
      a: "Resumo da função TRUNC.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função TRUNC.",
          example: "3.141592654",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "places",
          detail: "Parâmetro `places` da função TRUNC.",
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
      d: "Descrição da função QUOTIENT.",
      a: "Resumo da função QUOTIENT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividend",
          detail: "Parâmetro `dividend` da função QUOTIENT.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "Parâmetro `divisor` da função QUOTIENT.",
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
      d: "Descrição da função POWER.",
      a: "Resumo da função POWER.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "base",
          detail: "Parâmetro `base` da função POWER.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "exponent",
          detail: "Parâmetro `exponent` da função POWER.",
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
      d: "Descrição da função SUMIFS.",
      a: "Resumo da função SUMIFS.",
      m: [
        3,
        257
      ],
      p: [
        {
          name: "sum_range",
          detail: "Parâmetro `sum_range` da função SUMIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criteria_range1",
          detail: "Parâmetro `criteria_range1` da função SUMIFS.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterion1",
          detail: "Parâmetro `criterion1` da função SUMIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria_range2",
          detail: "Parâmetro `criteria_range2` da função SUMIFS.",
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
      d: "Descrição da função COUNTIFS.",
      a: "Resumo da função COUNTIFS.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "criteria_range1",
          detail: "Parâmetro `criteria_range1` da função COUNTIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterion1",
          detail: "Parâmetro `criterion1` da função COUNTIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria_range2",
          detail: "Parâmetro `criteria_range2` da função COUNTIFS.",
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
      d: "Descrição da função PRODUCT.",
      a: "Resumo da função PRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "factor1",
          detail: "Parâmetro `factor1` da função PRODUCT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor2",
          detail: "Parâmetro `factor2` da função PRODUCT.",
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
      d: "Descrição da função HARMEAN.",
      a: "Resumo da função HARMEAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função HARMEAN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função HARMEAN.",
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
      d: "Descrição da função HYPGEOMDIST.",
      a: "Resumo da função HYPGEOMDIST.",
      m: [
        5,
        5
      ],
      p: [
        {
          name: "num_successes",
          detail: "Parâmetro `num_successes` da função HYPGEOMDIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "num_draws",
          detail: "Parâmetro `num_draws` da função HYPGEOMDIST.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "successes_in_pop",
          detail: "Parâmetro `successes_in_pop` da função HYPGEOMDIST.",
          example: "20",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "pop_size",
          detail: "Parâmetro `pop_size` da função HYPGEOMDIST.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parâmetro `cumulative` da função HYPGEOMDIST.",
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
      d: "Descrição da função INTERCEPT.",
      a: "Resumo da função INTERCEPT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parâmetro `data_y` da função INTERCEPT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parâmetro `data_x` da função INTERCEPT.",
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
      d: "Descrição da função KURT.",
      a: "Resumo da função KURT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função KURT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função KURT.",
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
      d: "Descrição da função LARGE.",
      a: "Resumo da função LARGE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parâmetro `data` da função LARGE.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "Parâmetro `n` da função LARGE.",
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
      d: "Descrição da função STDEVA.",
      a: "Resumo da função STDEVA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função STDEVA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função STDEVA.",
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
      d: "Descrição da função STDEVP.",
      a: "Resumo da função STDEVP.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função STDEVP.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função STDEVP.",
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
      d: "Descrição da função GEOMEAN.",
      a: "Resumo da função GEOMEAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função GEOMEAN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função GEOMEAN.",
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
      d: "Descrição da função RANK_EQ.",
      a: "Resumo da função RANK_EQ.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função RANK_EQ.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data",
          detail: "Parâmetro `data` da função RANK_EQ.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "is_ascending",
          detail: "Parâmetro `is_ascending` da função RANK_EQ.",
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
      d: "Descrição da função RANK_AVG.",
      a: "Resumo da função RANK_AVG.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função RANK_AVG.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data",
          detail: "Parâmetro `data` da função RANK_AVG.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "is_ascending",
          detail: "Parâmetro `is_ascending` da função RANK_AVG.",
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
      d: "Descrição da função PERCENTRANK_EXC.",
      a: "Resumo da função PERCENTRANK_EXC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "data",
          detail: "Parâmetro `data` da função PERCENTRANK_EXC.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value",
          detail: "Parâmetro `value` da função PERCENTRANK_EXC.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significant_digits",
          detail: "Parâmetro `significant_digits` da função PERCENTRANK_EXC.",
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
      d: "Descrição da função PERCENTRANK_INC.",
      a: "Resumo da função PERCENTRANK_INC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "data",
          detail: "Parâmetro `data` da função PERCENTRANK_INC.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value",
          detail: "Parâmetro `value` da função PERCENTRANK_INC.",
          example: " A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significant_digits",
          detail: "Parâmetro `significant_digits` da função PERCENTRANK_INC.",
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
      d: "Descrição da função FORECAST.",
      a: "Resumo da função FORECAST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função FORECAST.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_y",
          detail: "Parâmetro `data_y` da função FORECAST.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parâmetro `data_x` da função FORECAST.",
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
      d: "Descrição da função FISHERINV.",
      a: "Resumo da função FISHERINV.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função FISHERINV.",
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
      d: "Descrição da função FISHER.",
      a: "Resumo da função FISHER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função FISHER.",
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
      d: "Descrição da função MODE_SNGL.",
      a: "Resumo da função MODE_SNGL.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função MODE_SNGL.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função MODE_SNGL.",
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
      d: "Descrição da função WEIBULL_DIST.",
      a: "Resumo da função WEIBULL_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função WEIBULL_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "shape",
          detail: "Parâmetro `shape` da função WEIBULL_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "scale",
          detail: "Parâmetro `scale` da função WEIBULL_DIST.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parâmetro `cumulative` da função WEIBULL_DIST.",
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
      d: "Descrição da função COUNT.",
      a: "Resumo da função COUNT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função COUNT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função COUNT.",
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
      d: "Descrição da função COUNTA.",
      a: "Resumo da função COUNTA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função COUNTA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função COUNTA.",
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
      d: "Descrição da função AVEDEV.",
      a: "Resumo da função AVEDEV.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função AVEDEV.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função AVEDEV.",
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
      d: "Descrição da função AVERAGE.",
      a: "Resumo da função AVERAGE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função AVERAGE.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função AVERAGE.",
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
      d: "Descrição da função AVERAGEA.",
      a: "Resumo da função AVERAGEA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função AVERAGEA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função AVERAGEA.",
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
      d: "Descrição da função BINOM_DIST.",
      a: "Resumo da função BINOM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "num_successes",
          detail: "Parâmetro `num_successes` da função BINOM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "num_trials",
          detail: "Parâmetro `num_trials` da função BINOM_DIST.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "prob_success",
          detail: "Parâmetro `prob_success` da função BINOM_DIST.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parâmetro `cumulative` da função BINOM_DIST.",
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
      d: "Descrição da função BINOM_INV.",
      a: "Resumo da função BINOM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "num_trials",
          detail: "Parâmetro `num_trials` da função BINOM_INV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "prob_success",
          detail: "Parâmetro `prob_success` da função BINOM_INV.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "target_prob",
          detail: "Parâmetro `target_prob` da função BINOM_INV.",
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
      d: "Descrição da função CONFIDENCE_NORM.",
      a: "Resumo da função CONFIDENCE_NORM.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "alpha",
          detail: "Parâmetro `alpha` da função CONFIDENCE_NORM.",
          example: "0.05",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standard_deviation",
          detail: "Parâmetro `standard_deviation` da função CONFIDENCE_NORM.",
          example: "1.6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "pop_size",
          detail: "Parâmetro `pop_size` da função CONFIDENCE_NORM.",
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
      d: "Descrição da função CORREL.",
      a: "Resumo da função CORREL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parâmetro `data_y` da função CORREL.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parâmetro `data_x` da função CORREL.",
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
      d: "Descrição da função COVARIANCE_P.",
      a: "Resumo da função COVARIANCE_P.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parâmetro `data_y` da função COVARIANCE_P.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parâmetro `data_x` da função COVARIANCE_P.",
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
      d: "Descrição da função COVARIANCE_S.",
      a: "Resumo da função COVARIANCE_S.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parâmetro `data_y` da função COVARIANCE_S.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parâmetro `data_x` da função COVARIANCE_S.",
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
      d: "Descrição da função DEVSQ.",
      a: "Resumo da função DEVSQ.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função DEVSQ.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função DEVSQ.",
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
      d: "Descrição da função EXPON_DIST.",
      a: "Resumo da função EXPON_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função EXPON_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lambda",
          detail: "Parâmetro `lambda` da função EXPON_DIST.",
          example: "0.5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parâmetro `cumulative` da função EXPON_DIST.",
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
      d: "Descrição da função AVERAGEIF.",
      a: "Resumo da função AVERAGEIF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "criteria_range",
          detail: "Parâmetro `criteria_range` da função AVERAGEIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterion",
          detail: "Parâmetro `criterion` da função AVERAGEIF.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "average_range",
          detail: "Parâmetro `average_range` da função AVERAGEIF.",
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
      d: "Descrição da função AVERAGEIFS.",
      a: "Resumo da função AVERAGEIFS.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "average_range",
          detail: "Parâmetro `average_range` da função AVERAGEIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria_range1",
          detail: "Parâmetro `criteria_range1` da função AVERAGEIFS.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterion1",
          detail: "Parâmetro `criterion1` da função AVERAGEIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria_range2",
          detail: "Parâmetro `criteria_range2` da função AVERAGEIFS.",
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
      d: "Descrição da função PERMUT.",
      a: "Resumo da função PERMUT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "Parâmetro `n` da função PERMUT.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Parâmetro `k` da função PERMUT.",
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
      d: "Descrição da função TRIMMEAN.",
      a: "Resumo da função TRIMMEAN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parâmetro `data` da função TRIMMEAN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "exclude_proportion",
          detail: "Parâmetro `exclude_proportion` da função TRIMMEAN.",
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
      d: "Descrição da função PERCENTILE_EXC.",
      a: "Resumo da função PERCENTILE_EXC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parâmetro `data` da função PERCENTILE_EXC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "percentile",
          detail: "Parâmetro `percentile` da função PERCENTILE_EXC.",
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
      d: "Descrição da função PERCENTILE_INC.",
      a: "Resumo da função PERCENTILE_INC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parâmetro `data` da função PERCENTILE_INC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "percentile",
          detail: "Parâmetro `percentile` da função PERCENTILE_INC.",
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
      d: "Descrição da função PEARSON.",
      a: "Resumo da função PEARSON.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parâmetro `data_y` da função PEARSON.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parâmetro `data_x` da função PEARSON.",
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
      d: "Descrição da função NORM_S_INV.",
      a: "Resumo da função NORM_S_INV.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função NORM_S_INV.",
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
      d: "Descrição da função NORM_S_DIST.",
      a: "Resumo da função NORM_S_DIST.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função NORM_S_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parâmetro `cumulative` da função NORM_S_DIST.",
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
      d: "Descrição da função NORM_INV.",
      a: "Resumo da função NORM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função NORM_INV.",
          example: "0.75",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mean",
          detail: "Parâmetro `mean` da função NORM_INV.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standard_deviation",
          detail: "Parâmetro `standard_deviation` da função NORM_INV.",
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
      d: "Descrição da função NORM_DIST.",
      a: "Resumo da função NORM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função NORM_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mean",
          detail: "Parâmetro `mean` da função NORM_DIST.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standard_deviation",
          detail: "Parâmetro `standard_deviation` da função NORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parâmetro `cumulative` da função NORM_DIST.",
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
      d: "Descrição da função NEGBINOM_DIST.",
      a: "Resumo da função NEGBINOM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "num_failures",
          detail: "Parâmetro `num_failures` da função NEGBINOM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "num_successes",
          detail: "Parâmetro `num_successes` da função NEGBINOM_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "prob_success",
          detail: "Parâmetro `prob_success` da função NEGBINOM_DIST.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parâmetro `cumulative` da função NEGBINOM_DIST.",
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
      d: "Descrição da função MINA.",
      a: "Resumo da função MINA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função MINA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função MINA.",
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
      d: "Descrição da função MIN.",
      a: "Resumo da função MIN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função MIN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função MIN.",
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
      d: "Descrição da função MEDIAN.",
      a: "Resumo da função MEDIAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função MEDIAN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função MEDIAN.",
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
      d: "Descrição da função MAXA.",
      a: "Resumo da função MAXA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função MAXA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função MAXA.",
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
      d: "Descrição da função MAX.",
      a: "Resumo da função MAX.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função MAX.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função MAX.",
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
      d: "Descrição da função LOGNORM_INV.",
      a: "Resumo da função LOGNORM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função LOGNORM_INV.",
          example: "0.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mean",
          detail: "Parâmetro `mean` da função LOGNORM_INV.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standard_deviation",
          detail: "Parâmetro `standard_deviation` da função LOGNORM_INV.",
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
      d: "Descrição da função LOGNORM_DIST.",
      a: "Resumo da função LOGNORM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função LOGNORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mean",
          detail: "Parâmetro `mean` da função LOGNORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standard_deviation",
          detail: "Parâmetro `standard_deviation` da função LOGNORM_DIST.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parâmetro `cumulative` da função LOGNORM_DIST.",
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
      d: "Descrição da função Z_TEST.",
      a: "Resumo da função Z_TEST.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "data",
          detail: "Parâmetro `data` da função Z_TEST.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "value",
          detail: "Parâmetro `value` da função Z_TEST.",
          example: "B2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standard_deviation",
          detail: "Parâmetro `standard_deviation` da função Z_TEST.",
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
      d: "Descrição da função PROB.",
      a: "Resumo da função PROB.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "data",
          detail: "Parâmetro `data` da função PROB.",
          example: "A3:A6",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "probabilities",
          detail: "Parâmetro `probabilities` da função PROB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "low_limit",
          detail: "Parâmetro `low_limit` da função PROB.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "high_limit",
          detail: "Parâmetro `high_limit` da função PROB.",
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
      d: "Descrição da função QUARTILE_EXC.",
      a: "Resumo da função QUARTILE_EXC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parâmetro `data` da função QUARTILE_EXC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "quartile_number",
          detail: "Parâmetro `quartile_number` da função QUARTILE_EXC.",
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
      d: "Descrição da função QUARTILE_INC.",
      a: "Resumo da função QUARTILE_INC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parâmetro `data` da função QUARTILE_INC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "quartile_number",
          detail: "Parâmetro `quartile_number` da função QUARTILE_INC.",
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
      d: "Descrição da função POISSON_DIST.",
      a: "Resumo da função POISSON_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função POISSON_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mean",
          detail: "Parâmetro `mean` da função POISSON_DIST.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parâmetro `cumulative` da função POISSON_DIST.",
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
      d: "Descrição da função RSQ.",
      a: "Resumo da função RSQ.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parâmetro `data_y` da função RSQ.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parâmetro `data_x` da função RSQ.",
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
      d: "Descrição da função T_DIST.",
      a: "Resumo da função T_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função T_DIST.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom",
          detail: "Parâmetro `degrees_freedom` da função T_DIST.",
          example: "30",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parâmetro `cumulative` da função T_DIST.",
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
      d: "Descrição da função T_DIST_2T.",
      a: "Resumo da função T_DIST_2T.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função T_DIST_2T.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom",
          detail: "Parâmetro `degrees_freedom` da função T_DIST_2T.",
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
      d: "Descrição da função T_DIST_RT.",
      a: "Resumo da função T_DIST_RT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função T_DIST_RT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom",
          detail: "Parâmetro `degrees_freedom` da função T_DIST_RT.",
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
      d: "Descrição da função T_INV.",
      a: "Resumo da função T_INV.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "probability",
          detail: "Parâmetro `probability` da função T_INV.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom",
          detail: "Parâmetro `degrees_freedom` da função T_INV.",
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
      d: "Descrição da função T_INV_2T.",
      a: "Resumo da função T_INV_2T.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "probability",
          detail: "Parâmetro `probability` da função T_INV_2T.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom",
          detail: "Parâmetro `degrees_freedom` da função T_INV_2T.",
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
      d: "Descrição da função T_TEST.",
      a: "Resumo da função T_TEST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "range1",
          detail: "Parâmetro `range1` da função T_TEST.",
          example: "A1:A4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "range2",
          detail: "Parâmetro `range2` da função T_TEST.",
          example: "B1:B4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tails",
          detail: "Parâmetro `tails` da função T_TEST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "type",
          detail: "Parâmetro `type` da função T_TEST.",
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
      d: "Descrição da função F_DIST.",
      a: "Resumo da função F_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função F_DIST.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom1",
          detail: "Parâmetro `degrees_freedom1` da função F_DIST.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom2",
          detail: "Parâmetro `degrees_freedom2` da função F_DIST.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulative",
          detail: "Parâmetro `cumulative` da função F_DIST.",
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
      d: "Descrição da função F_DIST_RT.",
      a: "Resumo da função F_DIST_RT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Parâmetro `x` da função F_DIST_RT.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom1",
          detail: "Parâmetro `degrees_freedom1` da função F_DIST_RT.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrees_freedom2",
          detail: "Parâmetro `degrees_freedom2` da função F_DIST_RT.",
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
      d: "Descrição da função VAR_P.",
      a: "Resumo da função VAR_P.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função VAR_P.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função VAR_P.",
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
      d: "Descrição da função VAR_S.",
      a: "Resumo da função VAR_S.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função VAR_S.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função VAR_S.",
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
      d: "Descrição da função VARA.",
      a: "Resumo da função VARA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função VARA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função VARA.",
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
      d: "Descrição da função VARPA.",
      a: "Resumo da função VARPA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função VARPA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função VARPA.",
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
      d: "Descrição da função STEYX.",
      a: "Resumo da função STEYX.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parâmetro `data_y` da função STEYX.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parâmetro `data_x` da função STEYX.",
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
      d: "Descrição da função STANDARDIZE.",
      a: "Resumo da função STANDARDIZE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função STANDARDIZE.",
          example: "96",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mean",
          detail: "Parâmetro `mean` da função STANDARDIZE.",
          example: "80",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standard_deviation",
          detail: "Parâmetro `standard_deviation` da função STANDARDIZE.",
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
      d: "Descrição da função SMALL.",
      a: "Resumo da função SMALL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parâmetro `data` da função SMALL.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "n",
          detail: "Parâmetro `n` da função SMALL.",
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
      d: "Descrição da função SLOPE.",
      a: "Resumo da função SLOPE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_y",
          detail: "Parâmetro `data_y` da função SLOPE.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "data_x",
          detail: "Parâmetro `data_x` da função SLOPE.",
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
      d: "Descrição da função SKEW.",
      a: "Resumo da função SKEW.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função SKEW.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função SKEW.",
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
      d: "Descrição da função SKEW_P.",
      a: "Resumo da função SKEW_P.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função SKEW_P.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função SKEW_P.",
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
      d: "Descrição da função VLOOKUP.",
      a: "Resumo da função VLOOKUP.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "search_key",
          detail: "Parâmetro `search_key` da função VLOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "range",
          detail: "Parâmetro `range` da função VLOOKUP.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "index",
          detail: "Parâmetro `index` da função VLOOKUP.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "is_sorted",
          detail: "Parâmetro `is_sorted` da função VLOOKUP.",
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
      d: "Descrição da função HLOOKUP.",
      a: "Resumo da função HLOOKUP.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "search_key",
          detail: "Parâmetro `search_key` da função HLOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "range",
          detail: "Parâmetro `range` da função HLOOKUP.",
          example: "A2:Z6",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "index",
          detail: "Parâmetro `index` da função HLOOKUP.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "is_sorted",
          detail: "Parâmetro `is_sorted` da função HLOOKUP.",
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
      d: "Descrição da função LOOKUP.",
      a: "Resumo da função LOOKUP.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "search_key",
          detail: "Parâmetro `search_key` da função LOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "search_range|search_result_array",
          detail: "Parâmetro `search_range|search_result_array` da função LOOKUP.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "result_range",
          detail: "Parâmetro `result_range` da função LOOKUP.",
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
      d: "Descrição da função ADDRESS.",
      a: "Resumo da função ADDRESS.",
      m: [
        2,
        5
      ],
      p: [
        {
          name: "row",
          detail: "Parâmetro `row` da função ADDRESS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "column",
          detail: "Parâmetro `column` da função ADDRESS.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "absolute_relative_mode",
          detail: "Parâmetro `absolute_relative_mode` da função ADDRESS.",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "use_a1_notation",
          detail: "Parâmetro `use_a1_notation` da função ADDRESS.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "sheet",
          detail: "Parâmetro `sheet` da função ADDRESS.",
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
      d: "Descrição da função INDIRECT.",
      a: "Resumo da função INDIRECT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "cell_reference_as_string",
          detail: "Parâmetro `cell_reference_as_string` da função INDIRECT.",
          example: "\"Sheet2!\"&B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "is_A1_notation",
          detail: "Parâmetro `is_A1_notation` da função INDIRECT.",
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
      d: "Descrição da função ROW.",
      a: "Resumo da função ROW.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "cell_reference",
          detail: "Parâmetro `cell_reference` da função ROW.",
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
      d: "Descrição da função ROWS.",
      a: "Resumo da função ROWS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "range",
          detail: "Parâmetro `range` da função ROWS.",
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
      d: "Descrição da função COLUMN.",
      a: "Resumo da função COLUMN.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "cell_reference",
          detail: "Parâmetro `cell_reference` da função COLUMN.",
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
      d: "Descrição da função COLUMNS.",
      a: "Resumo da função COLUMNS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "range",
          detail: "Parâmetro `range` da função COLUMNS.",
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
      d: "Descrição da função OFFSET.",
      a: "Resumo da função OFFSET.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "cell_reference",
          detail: "Parâmetro `cell_reference` da função OFFSET.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "offset_rows",
          detail: "Parâmetro `offset_rows` da função OFFSET.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "offset_columns",
          detail: "Parâmetro `offset_columns` da função OFFSET.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "height",
          detail: "Parâmetro `height` da função OFFSET.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "width",
          detail: "Parâmetro `width` da função OFFSET.",
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
      d: "Descrição da função MATCH.",
      a: "Resumo da função MATCH.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "search_key",
          detail: "Parâmetro `search_key` da função MATCH.",
          example: "\"Sunday\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "range",
          detail: "Parâmetro `range` da função MATCH.",
          example: "A2:A9",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "search_type",
          detail: "Parâmetro `search_type` da função MATCH.",
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
      d: "Descrição da função INDEX.",
      a: "Resumo da função INDEX.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "reference",
          detail: "Parâmetro `reference` da função INDEX.",
          example: "A1:C20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "row",
          detail: "Parâmetro `row` da função INDEX.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "column",
          detail: "Parâmetro `column` da função INDEX.",
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
      d: "Descrição da função GETPIVOTDATA.",
      a: "Resumo da função GETPIVOTDATA.",
      m: [
        2,
        254
      ],
      p: [
        {
          name: "value_name",
          detail: "Parâmetro `value_name` da função GETPIVOTDATA.",
          example: "\"SUM of number of units\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "any_pivot_table_cell",
          detail: "Parâmetro `any_pivot_table_cell` da função GETPIVOTDATA.",
          example: "'Pivot table'!A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "original_column",
          detail: "Parâmetro `original_column` da função GETPIVOTDATA.",
          example: "\"division\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        },
        {
          name: "pivot_item",
          detail: "Parâmetro `pivot_item` da função GETPIVOTDATA.",
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
      d: "Descrição da função CHOOSE.",
      a: "Resumo da função CHOOSE.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "index",
          detail: "Parâmetro `index` da função CHOOSE.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "choice1",
          detail: "Parâmetro `choice1` da função CHOOSE.",
          example: "\"A\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "choice2",
          detail: "Parâmetro `choice2` da função CHOOSE.",
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
      d: "Descrição da função HYPERLINK.",
      a: "Resumo da função HYPERLINK.",
      p: [
        {
          name: "url",
          detail: "Parâmetro `url` da função HYPERLINK.",
          example: "\"http://www.luckysheet.com/\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "link_label",
          detail: "Parâmetro `link_label` da função HYPERLINK.",
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
      d: "Descrição da função TIME.",
      a: "Resumo da função TIME.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "hour",
          detail: "Parâmetro `hour` da função TIME.",
          example: "11",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "minute",
          detail: "Parâmetro `minute` da função TIME.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "second",
          detail: "Parâmetro `second` da função TIME.",
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
      d: "Descrição da função TIMEVALUE.",
      a: "Resumo da função TIMEVALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "time_string",
          detail: "Parâmetro `time_string` da função TIMEVALUE.",
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
      d: "Descrição da função EOMONTH.",
      a: "Resumo da função EOMONTH.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "start_date",
          detail: "Parâmetro `start_date` da função EOMONTH.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "months",
          detail: "Parâmetro `months` da função EOMONTH.",
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
      d: "Descrição da função EDATE.",
      a: "Resumo da função EDATE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "start_date",
          detail: "Parâmetro `start_date` da função EDATE.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "months",
          detail: "Parâmetro `months` da função EDATE.",
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
      d: "Descrição da função SECOND.",
      a: "Resumo da função SECOND.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "time",
          detail: "Parâmetro `time` da função SECOND.",
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
      d: "Descrição da função MINUTE.",
      a: "Resumo da função MINUTE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "time",
          detail: "Parâmetro `time` da função MINUTE.",
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
      d: "Descrição da função HOUR.",
      a: "Resumo da função HOUR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "time",
          detail: "Parâmetro `time` da função HOUR.",
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
      d: "Descrição da função NOW.",
      a: "Resumo da função NOW.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "NETWORKDAYS",
      t: 6,
      d: "Descrição da função NETWORKDAYS.",
      a: "Resumo da função NETWORKDAYS.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "start_date",
          detail: "Parâmetro `start_date` da função NETWORKDAYS.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "end_date",
          detail: "Parâmetro `end_date` da função NETWORKDAYS.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "holidays",
          detail: "Parâmetro `holidays` da função NETWORKDAYS.",
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
      d: "Descrição da função NETWORKDAYS_INTL.",
      a: "Resumo da função NETWORKDAYS_INTL.",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "start_date",
          detail: "Parâmetro `start_date` da função NETWORKDAYS_INTL.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "end_date",
          detail: "Parâmetro `end_date` da função NETWORKDAYS_INTL.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "weekend",
          detail: "Parâmetro `weekend` da função NETWORKDAYS_INTL.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "holidays",
          detail: "Parâmetro `holidays` da função NETWORKDAYS_INTL.",
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
      d: "Descrição da função ISOWEEKNUM.",
      a: "Resumo da função ISOWEEKNUM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "date",
          detail: "Parâmetro `date` da função ISOWEEKNUM.",
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
      d: "Descrição da função WEEKNUM.",
      a: "Resumo da função WEEKNUM.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "date",
          detail: "Parâmetro `date` da função WEEKNUM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "type",
          detail: "Parâmetro `type` da função WEEKNUM.",
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
      d: "Descrição da função WEEKDAY.",
      a: "Resumo da função WEEKDAY.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "date",
          detail: "Parâmetro `date` da função WEEKDAY.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "type",
          detail: "Parâmetro `type` da função WEEKDAY.",
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
      d: "Descrição da função DAY.",
      a: "Resumo da função DAY.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "date",
          detail: "Parâmetro `date` da função DAY.",
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
      d: "Descrição da função DAYS.",
      a: "Resumo da função DAYS.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "end_date",
          detail: "Parâmetro `end_date` da função DAYS.",
          example: "2011-3-15",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "start_date",
          detail: "Parâmetro `start_date` da função DAYS.",
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
      d: "Descrição da função DAYS360.",
      a: "Resumo da função DAYS360.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "start_date",
          detail: "Parâmetro `start_date` da função DAYS360.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "end_date",
          detail: "Parâmetro `end_date` da função DAYS360.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "method",
          detail: "Parâmetro `method` da função DAYS360.",
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
      d: "Descrição da função DATE.",
      a: "Resumo da função DATE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "year",
          detail: "Parâmetro `year` da função DATE.",
          example: "1969",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "month",
          detail: "Parâmetro `month` da função DATE.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day",
          detail: "Parâmetro `day` da função DATE.",
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
      d: "Descrição da função DATEVALUE.",
      a: "Resumo da função DATEVALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "date_string",
          detail: "Parâmetro `date_string` da função DATEVALUE.",
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
      d: "Descrição da função DATEDIF.",
      a: "Resumo da função DATEDIF.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "start_date",
          detail: "Parâmetro `start_date` da função DATEDIF.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "end_date",
          detail: "Parâmetro `end_date` da função DATEDIF.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "unit",
          detail: "Parâmetro `unit` da função DATEDIF.",
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
      d: "Descrição da função WORKDAY.",
      a: "Resumo da função WORKDAY.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "start_date",
          detail: "Parâmetro `start_date` da função WORKDAY.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "num_days",
          detail: "Parâmetro `num_days` da função WORKDAY.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "holidays",
          detail: "Parâmetro `holidays` da função WORKDAY.",
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
      d: "Descrição da função WORKDAY_INTL.",
      a: "Resumo da função WORKDAY_INTL.",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "start_date",
          detail: "Parâmetro `start_date` da função WORKDAY_INTL.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "num_days",
          detail: "Parâmetro `num_days` da função WORKDAY_INTL.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "weekend",
          detail: "Parâmetro `weekend` da função WORKDAY_INTL.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "holidays",
          detail: "Parâmetro `holidays` da função WORKDAY_INTL.",
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
      d: "Descrição da função YEAR.",
      a: "Resumo da função YEAR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "date",
          detail: "Parâmetro `date` da função YEAR.",
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
      d: "Descrição da função YEARFRAC.",
      a: "Resumo da função YEARFRAC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "start_date",
          detail: "Parâmetro `start_date` da função YEARFRAC.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "end_date",
          detail: "Parâmetro `end_date` da função YEARFRAC.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função YEARFRAC.",
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
      d: "Descrição da função TODAY.",
      a: "Resumo da função TODAY.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "MONTH",
      t: 6,
      d: "Descrição da função MONTH.",
      a: "Resumo da função MONTH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "date",
          detail: "Parâmetro `date` da função MONTH.",
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
      d: "Descrição da função EFFECT.",
      a: "Resumo da função EFFECT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "nominal_rate",
          detail: "Parâmetro `nominal_rate` da função EFFECT.",
          example: "0.99",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periods_per_year",
          detail: "Parâmetro `periods_per_year` da função EFFECT.",
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
      d: "Descrição da função DOLLAR.",
      a: "Resumo da função DOLLAR.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "number",
          detail: "Parâmetro `number` da função DOLLAR.",
          example: "1.2351",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_places",
          detail: "Parâmetro `number_of_places` da função DOLLAR.",
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
      d: "Descrição da função DOLLARDE.",
      a: "Resumo da função DOLLARDE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "fractional_price",
          detail: "Parâmetro `fractional_price` da função DOLLARDE.",
          example: "100.10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unit",
          detail: "Parâmetro `unit` da função DOLLARDE.",
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
      d: "Descrição da função DOLLARFR.",
      a: "Resumo da função DOLLARFR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "decimal_price",
          detail: "Parâmetro `decimal_price` da função DOLLARFR.",
          example: "100.125",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unit",
          detail: "Parâmetro `unit` da função DOLLARFR.",
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
      d: "Descrição da função DB.",
      a: "Resumo da função DB.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "cost",
          detail: "Parâmetro `cost` da função DB.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "salvage",
          detail: "Parâmetro `salvage` da função DB.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "life",
          detail: "Parâmetro `life` da função DB.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "period",
          detail: "Parâmetro `period` da função DB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "month",
          detail: "Parâmetro `month` da função DB.",
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
      d: "Descrição da função DDB.",
      a: "Resumo da função DDB.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "cost",
          detail: "Parâmetro `cost` da função DDB.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "salvage",
          detail: "Parâmetro `salvage` da função DDB.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "life",
          detail: "Parâmetro `life` da função DDB.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "period",
          detail: "Parâmetro `period` da função DDB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "Parâmetro `factor` da função DDB.",
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
      d: "Descrição da função RATE.",
      a: "Resumo da função RATE.",
      m: [
        3,
        6
      ],
      p: [
        {
          name: "number_of_periods",
          detail: "Parâmetro `number_of_periods` da função RATE.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "payment_per_period",
          detail: "Parâmetro `payment_per_period` da função RATE.",
          example: "-100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parâmetro `present_value` da função RATE.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "future_value",
          detail: "Parâmetro `future_value` da função RATE.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parâmetro `end_or_beginning` da função RATE.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rate_guess",
          detail: "Parâmetro `rate_guess` da função RATE.",
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
      d: "Descrição da função CUMPRINC.",
      a: "Resumo da função CUMPRINC.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "rate",
          detail: "Parâmetro `rate` da função CUMPRINC.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_periods",
          detail: "Parâmetro `number_of_periods` da função CUMPRINC.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parâmetro `present_value` da função CUMPRINC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "first_period",
          detail: "Parâmetro `first_period` da função CUMPRINC.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "last_period",
          detail: "Parâmetro `last_period` da função CUMPRINC.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parâmetro `end_or_beginning` da função CUMPRINC.",
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
      d: "Descrição da função COUPNUM.",
      a: "Resumo da função COUPNUM.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função COUPNUM.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função COUPNUM.",
          example: "02",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequency",
          detail: "Parâmetro `frequency` da função COUPNUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função COUPNUM.",
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
      d: "Descrição da função SYD.",
      a: "Resumo da função SYD.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "cost",
          detail: "Parâmetro `cost` da função SYD.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "salvage",
          detail: "Parâmetro `salvage` da função SYD.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "life",
          detail: "Parâmetro `life` da função SYD.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "period",
          detail: "Parâmetro `period` da função SYD.",
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
      d: "Descrição da função TBILLEQ.",
      a: "Resumo da função TBILLEQ.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função TBILLEQ.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função TBILLEQ.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "discount",
          detail: "Parâmetro `discount` da função TBILLEQ.",
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
      d: "Descrição da função TBILLYIELD.",
      a: "Resumo da função TBILLYIELD.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função TBILLYIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função TBILLYIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "price",
          detail: "Parâmetro `price` da função TBILLYIELD.",
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
      d: "Descrição da função TBILLPRICE.",
      a: "Resumo da função TBILLPRICE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função TBILLPRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função TBILLPRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "discount",
          detail: "Parâmetro `discount` da função TBILLPRICE.",
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
      d: "Descrição da função PV.",
      a: "Resumo da função PV.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rate",
          detail: "Parâmetro `rate` da função PV.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_periods",
          detail: "Parâmetro `number_of_periods` da função PV.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "payment_amount",
          detail: "Parâmetro `payment_amount` da função PV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "future_value",
          detail: "Parâmetro `future_value` da função PV.",
          example: "D2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parâmetro `end_or_beginning` da função PV.",
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
      d: "Descrição da função ACCRINT.",
      a: "Resumo da função ACCRINT.",
      m: [
        6,
        8
      ],
      p: [
        {
          name: "issue",
          detail: "Parâmetro `issue` da função ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "first_payment",
          detail: "Parâmetro `first_payment` da função ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rate",
          detail: "Parâmetro `rate` da função ACCRINT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "redemption",
          detail: "Parâmetro `redemption` da função ACCRINT.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequency",
          detail: "Parâmetro `frequency` da função ACCRINT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função ACCRINT.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "calc_method",
          detail: "Parâmetro `calc_method` da função ACCRINT.",
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
      d: "Descrição da função ACCRINTM.",
      a: "Resumo da função ACCRINTM.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "issue",
          detail: "Parâmetro `issue` da função ACCRINTM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função ACCRINTM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rate",
          detail: "Parâmetro `rate` da função ACCRINTM.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "redemption",
          detail: "Parâmetro `redemption` da função ACCRINTM.",
          example: "1000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função ACCRINTM.",
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
      d: "Descrição da função COUPDAYBS.",
      a: "Resumo da função COUPDAYBS.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função COUPDAYBS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função COUPDAYBS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequency",
          detail: "Parâmetro `frequency` da função COUPDAYBS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função COUPDAYBS.",
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
      d: "Descrição da função COUPDAYS.",
      a: "Resumo da função COUPDAYS.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função COUPDAYS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função COUPDAYS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequency",
          detail: "Parâmetro `frequency` da função COUPDAYS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função COUPDAYS.",
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
      d: "Descrição da função COUPDAYSNC.",
      a: "Resumo da função COUPDAYSNC.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função COUPDAYSNC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função COUPDAYSNC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequency",
          detail: "Parâmetro `frequency` da função COUPDAYSNC.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função COUPDAYSNC.",
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
      d: "Descrição da função COUPNCD.",
      a: "Resumo da função COUPNCD.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função COUPNCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função COUPNCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequency",
          detail: "Parâmetro `frequency` da função COUPNCD.",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função COUPNCD.",
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
      d: "Descrição da função COUPPCD.",
      a: "Resumo da função COUPPCD.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função COUPPCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função COUPPCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequency",
          detail: "Parâmetro `frequency` da função COUPPCD.",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função COUPPCD.",
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
      d: "Descrição da função FV.",
      a: "Resumo da função FV.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rate",
          detail: "Parâmetro `rate` da função FV.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_periods",
          detail: "Parâmetro `number_of_periods` da função FV.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "payment_amount",
          detail: "Parâmetro `payment_amount` da função FV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parâmetro `present_value` da função FV.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parâmetro `end_or_beginning` da função FV.",
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
      d: "Descrição da função FVSCHEDULE.",
      a: "Resumo da função FVSCHEDULE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "principal",
          detail: "Parâmetro `principal` da função FVSCHEDULE.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rate_schedule",
          detail: "Parâmetro `rate_schedule` da função FVSCHEDULE.",
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
      d: "Descrição da função YIELD.",
      a: "Resumo da função YIELD.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função YIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função YIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rate",
          detail: "Parâmetro `rate` da função YIELD.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "price",
          detail: "Parâmetro `price` da função YIELD.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "redemption",
          detail: "Parâmetro `redemption` da função YIELD.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequency",
          detail: "Parâmetro `frequency` da função YIELD.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função YIELD.",
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
      d: "Descrição da função YIELDDISC.",
      a: "Resumo da função YIELDDISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função YIELDDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função YIELDDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "price",
          detail: "Parâmetro `price` da função YIELDDISC.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "redemption",
          detail: "Parâmetro `redemption` da função YIELDDISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função YIELDDISC.",
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
      d: "Descrição da função NOMINAL.",
      a: "Resumo da função NOMINAL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "effective_rate",
          detail: "Parâmetro `effective_rate` da função NOMINAL.",
          example: "0.85",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periods_per_year",
          detail: "Parâmetro `periods_per_year` da função NOMINAL.",
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
      d: "Descrição da função XIRR.",
      a: "Resumo da função XIRR.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "cashflow_amounts",
          detail: "Parâmetro `cashflow_amounts` da função XIRR.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "cashflow_dates",
          detail: "Parâmetro `cashflow_dates` da função XIRR.",
          example: "C2:C25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "rate_guess",
          detail: "Parâmetro `rate_guess` da função XIRR.",
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
      d: "Descrição da função MIRR.",
      a: "Resumo da função MIRR.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "cashflow_amounts",
          detail: "Parâmetro `cashflow_amounts` da função MIRR.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "financing_rate",
          detail: "Parâmetro `financing_rate` da função MIRR.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "reinvestment_return_rate",
          detail: "Parâmetro `reinvestment_return_rate` da função MIRR.",
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
      d: "Descrição da função IRR.",
      a: "Resumo da função IRR.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "cashflow_amounts",
          detail: "Parâmetro `cashflow_amounts` da função IRR.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "rate_guess",
          detail: "Parâmetro `rate_guess` da função IRR.",
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
      d: "Descrição da função NPV.",
      a: "Resumo da função NPV.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "discount",
          detail: "Parâmetro `discount` da função NPV.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cashflow1",
          detail: "Parâmetro `cashflow1` da função NPV.",
          example: "200",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cashflow2",
          detail: "Parâmetro `cashflow2` da função NPV.",
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
      d: "Descrição da função XNPV.",
      a: "Resumo da função XNPV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "discount",
          detail: "Parâmetro `discount` da função XNPV.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cashflow_amounts",
          detail: "Parâmetro `cashflow_amounts` da função XNPV.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "cashflow_dates",
          detail: "Parâmetro `cashflow_dates` da função XNPV.",
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
      d: "Descrição da função CUMIPMT.",
      a: "Resumo da função CUMIPMT.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "rate",
          detail: "Parâmetro `rate` da função CUMIPMT.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_periods",
          detail: "Parâmetro `number_of_periods` da função CUMIPMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parâmetro `present_value` da função CUMIPMT.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "first_period",
          detail: "Parâmetro `first_period` da função CUMIPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "last_period",
          detail: "Parâmetro `last_period` da função CUMIPMT.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parâmetro `end_or_beginning` da função CUMIPMT.",
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
      d: "Descrição da função PMT.",
      a: "Resumo da função PMT.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rate",
          detail: "Parâmetro `rate` da função PMT.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_periods",
          detail: "Parâmetro `number_of_periods` da função PMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parâmetro `present_value` da função PMT.",
          example: " 100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "future_value",
          detail: "Parâmetro `future_value` da função PMT.",
          example: "D2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parâmetro `end_or_beginning` da função PMT.",
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
      d: "Descrição da função IPMT.",
      a: "Resumo da função IPMT.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "rate",
          detail: "Parâmetro `rate` da função IPMT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "period",
          detail: "Parâmetro `period` da função IPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_periods",
          detail: "Parâmetro `number_of_periods` da função IPMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parâmetro `present_value` da função IPMT.",
          example: "80000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "future_value",
          detail: "Parâmetro `future_value` da função IPMT.",
          example: "E2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parâmetro `end_or_beginning` da função IPMT.",
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
      d: "Descrição da função PPMT.",
      a: "Resumo da função PPMT.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "rate",
          detail: "Parâmetro `rate` da função PPMT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "period",
          detail: "Parâmetro `period` da função PPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_periods",
          detail: "Parâmetro `number_of_periods` da função PPMT.",
          example: "3*12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parâmetro `present_value` da função PPMT.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "future_value",
          detail: "Parâmetro `future_value` da função PPMT.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parâmetro `end_or_beginning` da função PPMT.",
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
      d: "Descrição da função INTRATE.",
      a: "Resumo da função INTRATE.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "buy_date",
          detail: "Parâmetro `buy_date` da função INTRATE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "sell_date",
          detail: "Parâmetro `sell_date` da função INTRATE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "buy_price",
          detail: "Parâmetro `buy_price` da função INTRATE.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sell_price",
          detail: "Parâmetro `sell_price` da função INTRATE.",
          example: "101200",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função INTRATE.",
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
      d: "Descrição da função PRICE.",
      a: "Resumo da função PRICE.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função PRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função PRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rate",
          detail: "Parâmetro `rate` da função PRICE.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "yield",
          detail: "Parâmetro `yield` da função PRICE.",
          example: "0.065",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "redemption",
          detail: "Parâmetro `redemption` da função PRICE.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequency",
          detail: "Parâmetro `frequency` da função PRICE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função PRICE.",
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
      d: "Descrição da função PRICEDISC.",
      a: "Resumo da função PRICEDISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função PRICEDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função PRICEDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "discount",
          detail: "Parâmetro `discount` da função PRICEDISC.",
          example: "0.0525",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "redemption",
          detail: "Parâmetro `redemption` da função PRICEDISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função PRICEDISC.",
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
      d: "Descrição da função PRICEMAT.",
      a: "Resumo da função PRICEMAT.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "issue",
          detail: "Parâmetro `issue` da função PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rate",
          detail: "Parâmetro `rate` da função PRICEMAT.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "yield",
          detail: "Parâmetro `yield` da função PRICEMAT.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função PRICEMAT.",
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
      d: "Descrição da função RECEIVED.",
      a: "Resumo da função RECEIVED.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função RECEIVED.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função RECEIVED.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "investment",
          detail: "Parâmetro `investment` da função RECEIVED.",
          example: "10000000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "discount",
          detail: "Parâmetro `discount` da função RECEIVED.",
          example: "0.0575",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função RECEIVED.",
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
      d: "Descrição da função DISC.",
      a: "Resumo da função DISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função DISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função DISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "price",
          detail: "Parâmetro `price` da função DISC.",
          example: "97.975",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "redemption",
          detail: "Parâmetro `redemption` da função DISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função DISC.",
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
      d: "Descrição da função NPER.",
      a: "Resumo da função NPER.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "rate",
          detail: "Parâmetro `rate` da função NPER.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "payment_amount",
          detail: "Parâmetro `payment_amount` da função NPER.",
          example: "500",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "present_value",
          detail: "Parâmetro `present_value` da função NPER.",
          example: "40000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "future_value",
          detail: "Parâmetro `future_value` da função NPER.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "end_or_beginning",
          detail: "Parâmetro `end_or_beginning` da função NPER.",
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
      d: "Descrição da função SLN.",
      a: "Resumo da função SLN.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "cost",
          detail: "Parâmetro `cost` da função SLN.",
          example: "300000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "salvage",
          detail: "Parâmetro `salvage` da função SLN.",
          example: "75000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "life",
          detail: "Parâmetro `life` da função SLN.",
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
      d: "Descrição da função DURATION.",
      a: "Resumo da função DURATION.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função DURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função DURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rate",
          detail: "Parâmetro `rate` da função DURATION.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "yield",
          detail: "Parâmetro `yield` da função DURATION.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequency",
          detail: "Parâmetro `frequency` da função DURATION.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função DURATION.",
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
      d: "Descrição da função MDURATION.",
      a: "Resumo da função MDURATION.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "settlement",
          detail: "Parâmetro `settlement` da função MDURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "maturity",
          detail: "Parâmetro `maturity` da função MDURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rate",
          detail: "Parâmetro `rate` da função MDURATION.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "yield",
          detail: "Parâmetro `yield` da função MDURATION.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequency",
          detail: "Parâmetro `frequency` da função MDURATION.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "day_count_convention",
          detail: "Parâmetro `day_count_convention` da função MDURATION.",
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
      d: "Descrição da função BIN2DEC.",
      a: "Resumo da função BIN2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "signed_binary_number",
          detail: "Parâmetro `signed_binary_number` da função BIN2DEC.",
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
      d: "Descrição da função BIN2HEX.",
      a: "Resumo da função BIN2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "signed_binary_number",
          detail: "Parâmetro `signed_binary_number` da função BIN2HEX.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significant_digits",
          detail: "Parâmetro `significant_digits` da função BIN2HEX.",
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
      d: "Descrição da função BIN2OCT.",
      a: "Resumo da função BIN2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "signed_binary_number",
          detail: "Parâmetro `signed_binary_number` da função BIN2OCT.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significant_digits",
          detail: "Parâmetro `significant_digits` da função BIN2OCT.",
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
      d: "Descrição da função DEC2BIN.",
      a: "Resumo da função DEC2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "decimal_number",
          detail: "Parâmetro `decimal_number` da função DEC2BIN.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significant_digits",
          detail: "Parâmetro `significant_digits` da função DEC2BIN.",
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
      d: "Descrição da função DEC2HEX.",
      a: "Resumo da função DEC2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "decimal_number",
          detail: "Parâmetro `decimal_number` da função DEC2HEX.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significant_digits",
          detail: "Parâmetro `significant_digits` da função DEC2HEX.",
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
      d: "Descrição da função DEC2OCT.",
      a: "Resumo da função DEC2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "decimal_number",
          detail: "Parâmetro `decimal_number` da função DEC2OCT.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "significant_digits",
          detail: "Parâmetro `significant_digits` da função DEC2OCT.",
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
      d: "Descrição da função HEX2BIN.",
      a: "Resumo da função HEX2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "signed_hexadecimal_number",
          detail: "Parâmetro `signed_hexadecimal_number` da função HEX2BIN.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significant_digits",
          detail: "Parâmetro `significant_digits` da função HEX2BIN.",
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
      d: "Descrição da função HEX2DEC.",
      a: "Resumo da função HEX2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "signed_hexadecimal_number",
          detail: "Parâmetro `signed_hexadecimal_number` da função HEX2DEC.",
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
      d: "Descrição da função HEX2OCT.",
      a: "Resumo da função HEX2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "signed_hexadecimal_number",
          detail: "Parâmetro `signed_hexadecimal_number` da função HEX2OCT.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significant_digits",
          detail: "Parâmetro `significant_digits` da função HEX2OCT.",
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
      d: "Descrição da função OCT2BIN.",
      a: "Resumo da função OCT2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "signed_octal_number",
          detail: "Parâmetro `signed_octal_number` da função OCT2BIN.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significant_digits",
          detail: "Parâmetro `significant_digits` da função OCT2BIN.",
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
      d: "Descrição da função OCT2DEC.",
      a: "Resumo da função OCT2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "signed_octal_number",
          detail: "Parâmetro `signed_octal_number` da função OCT2DEC.",
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
      d: "Descrição da função OCT2HEX.",
      a: "Resumo da função OCT2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "signed_octal_number",
          detail: "Parâmetro `signed_octal_number` da função OCT2HEX.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "significant_digits",
          detail: "Parâmetro `significant_digits` da função OCT2HEX.",
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
      d: "Descrição da função COMPLEX.",
      a: "Resumo da função COMPLEX.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "real_part",
          detail: "Parâmetro `real_part` da função COMPLEX.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "imaginary_part",
          detail: "Parâmetro `imaginary_part` da função COMPLEX.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "suffix",
          detail: "Parâmetro `suffix` da função COMPLEX.",
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
      d: "Descrição da função IMREAL.",
      a: "Resumo da função IMREAL.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "complex_number",
          detail: "Parâmetro `complex_number` da função IMREAL.",
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
      d: "Descrição da função IMAGINARY.",
      a: "Resumo da função IMAGINARY.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "complex_number",
          detail: "Parâmetro `complex_number` da função IMAGINARY.",
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
      d: "Descrição da função IMCONJUGATE.",
      a: "Resumo da função IMCONJUGATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "number",
          detail: "Parâmetro `number` da função IMCONJUGATE.",
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
      d: "Descrição da função IMABS.",
      a: "Resumo da função IMABS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "number",
          detail: "Parâmetro `number` da função IMABS.",
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
      d: "Descrição da função DELTA.",
      a: "Resumo da função DELTA.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "number1",
          detail: "Parâmetro `number1` da função DELTA.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number2",
          detail: "Parâmetro `number2` da função DELTA.",
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
      d: "Descrição da função IMSUM.",
      a: "Resumo da função IMSUM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função IMSUM.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função IMSUM.",
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
      d: "Descrição da função IMSUB.",
      a: "Resumo da função IMSUB.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "first_number",
          detail: "Parâmetro `first_number` da função IMSUB.",
          example: "\"6+5i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "second_number",
          detail: "Parâmetro `second_number` da função IMSUB.",
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
      d: "Descrição da função IMPRODUCT.",
      a: "Resumo da função IMPRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "factor1",
          detail: "Parâmetro `factor1` da função IMPRODUCT.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "factor2",
          detail: "Parâmetro `factor2` da função IMPRODUCT.",
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
      d: "Descrição da função IMDIV.",
      a: "Resumo da função IMDIV.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividend",
          detail: "Parâmetro `dividend` da função IMDIV.",
          example: "\"11+16i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "divisor",
          detail: "Parâmetro `divisor` da função IMDIV.",
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
      d: "Descrição da função NOT.",
      a: "Resumo da função NOT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "logical_expression",
          detail: "Parâmetro `logical_expression` da função NOT.",
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
      d: "Descrição da função TRUE.",
      a: "Resumo da função TRUE.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FALSE",
      t: 10,
      d: "Descrição da função FALSE.",
      a: "Resumo da função FALSE.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "AND",
      t: 10,
      d: "Descrição da função AND.",
      a: "Resumo da função AND.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "logical_expression1",
          detail: "Parâmetro `logical_expression1` da função AND.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "logical_expression2",
          detail: "Parâmetro `logical_expression2` da função AND.",
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
      d: "Descrição da função IFERROR.",
      a: "Resumo da função IFERROR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função IFERROR.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value_if_error",
          detail: "Parâmetro `value_if_error` da função IFERROR.",
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
      d: "Descrição da função IF.",
      a: "Resumo da função IF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "logical_expression",
          detail: "Parâmetro `logical_expression` da função IF.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value_if_true",
          detail: "Parâmetro `value_if_true` da função IF.",
          example: "\"A2 is foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value_if_false",
          detail: "Parâmetro `value_if_false` da função IF.",
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
      d: "Descrição da função OR.",
      a: "Resumo da função OR.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "logical_expression1",
          detail: "Parâmetro `logical_expression1` da função OR.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "logical_expression2",
          detail: "Parâmetro `logical_expression2` da função OR.",
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
      d: "Descrição da função NE.",
      a: "Resumo da função NE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função NE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função NE.",
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
      d: "Descrição da função EQ.",
      a: "Resumo da função EQ.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função EQ.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função EQ.",
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
      d: "Descrição da função GT.",
      a: "Resumo da função GT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função GT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função GT.",
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
      d: "Descrição da função GTE.",
      a: "Resumo da função GTE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função GTE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função GTE.",
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
      d: "Descrição da função LT.",
      a: "Resumo da função LT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função LT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função LT.",
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
      d: "Descrição da função LTE.",
      a: "Resumo da função LTE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função LTE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função LTE.",
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
      d: "Descrição da função ADD.",
      a: "Resumo da função ADD.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função ADD.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função ADD.",
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
      d: "Descrição da função MINUS.",
      a: "Resumo da função MINUS.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função MINUS.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função MINUS.",
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
      d: "Descrição da função MULTIPLY.",
      a: "Resumo da função MULTIPLY.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "factor1",
          detail: "Parâmetro `factor1` da função MULTIPLY.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor2",
          detail: "Parâmetro `factor2` da função MULTIPLY.",
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
      d: "Descrição da função DIVIDE.",
      a: "Resumo da função DIVIDE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividend",
          detail: "Parâmetro `dividend` da função DIVIDE.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "Parâmetro `divisor` da função DIVIDE.",
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
      d: "Descrição da função CONCAT.",
      a: "Resumo da função CONCAT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "value1",
          detail: "Parâmetro `value1` da função CONCAT.",
          example: "\"de\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value2",
          detail: "Parâmetro `value2` da função CONCAT.",
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
      d: "Descrição da função UNARY_PERCENT.",
      a: "Resumo da função UNARY_PERCENT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "percentage",
          detail: "Parâmetro `percentage` da função UNARY_PERCENT.",
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
      d: "Descrição da função CONCATENATE.",
      a: "Resumo da função CONCATENATE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "string1",
          detail: "Parâmetro `string1` da função CONCATENATE.",
          example: "\"Super\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "string2",
          detail: "Parâmetro `string2` da função CONCATENATE.",
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
      d: "Descrição da função CODE.",
      a: "Resumo da função CODE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "string",
          detail: "Parâmetro `string` da função CODE.",
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
      d: "Descrição da função CHAR.",
      a: "Resumo da função CHAR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "table_number",
          detail: "Parâmetro `table_number` da função CHAR.",
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
      d: "Descrição da função ARABIC.",
      a: "Resumo da função ARABIC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "roman_numeral",
          detail: "Parâmetro `roman_numeral` da função ARABIC.",
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
      d: "Descrição da função ROMAN.",
      a: "Resumo da função ROMAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "number",
          detail: "Parâmetro `number` da função ROMAN.",
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
      d: "Descrição da função REGEXEXTRACT.",
      a: "Resumo da função REGEXEXTRACT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "text",
          detail: "Parâmetro `text` da função REGEXEXTRACT.",
          example: "\"Needle in a haystack\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "regular_expression",
          detail: "Parâmetro `regular_expression` da função REGEXEXTRACT.",
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
      d: "Descrição da função REGEXMATCH.",
      a: "Resumo da função REGEXMATCH.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "text",
          detail: "Parâmetro `text` da função REGEXMATCH.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "regular_expression",
          detail: "Parâmetro `regular_expression` da função REGEXMATCH.",
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
      d: "Descrição da função REGEXREPLACE.",
      a: "Resumo da função REGEXREPLACE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "text",
          detail: "Parâmetro `text` da função REGEXREPLACE.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "regular_expression",
          detail: "Parâmetro `regular_expression` da função REGEXREPLACE.",
          example: "\"S.*d\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "replacement",
          detail: "Parâmetro `replacement` da função REGEXREPLACE.",
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
      d: "Descrição da função T.",
      a: "Resumo da função T.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função T.",
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
      d: "Descrição da função FIXED.",
      a: "Resumo da função FIXED.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "number",
          detail: "Parâmetro `number` da função FIXED.",
          example: "3.141592653",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "number_of_places",
          detail: "Parâmetro `number_of_places` da função FIXED.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "suppress_separator",
          detail: "Parâmetro `suppress_separator` da função FIXED.",
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
      d: "Descrição da função FIND.",
      a: "Resumo da função FIND.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "search_for",
          detail: "Parâmetro `search_for` da função FIND.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "text_to_search",
          detail: "Parâmetro `text_to_search` da função FIND.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "starting_at",
          detail: "Parâmetro `starting_at` da função FIND.",
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
      d: "Descrição da função FINDB.",
      a: "Resumo da função FINDB.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "search_for",
          detail: "Parâmetro `search_for` da função FINDB.",
          example: "\"new\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "text_to_search",
          detail: "Parâmetro `text_to_search` da função FINDB.",
          example: "\"new year\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "starting_at",
          detail: "Parâmetro `starting_at` da função FINDB.",
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
      d: "Descrição da função JOIN.",
      a: "Resumo da função JOIN.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "delimiter",
          detail: "Parâmetro `delimiter` da função JOIN.",
          example: "\" and-a \"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value_or_array1",
          detail: "Parâmetro `value_or_array1` da função JOIN.",
          example: "{1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "value_or_array2",
          detail: "Parâmetro `value_or_array2` da função JOIN.",
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
      d: "Descrição da função LEFT.",
      a: "Resumo da função LEFT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "string",
          detail: "Parâmetro `string` da função LEFT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "number_of_characters",
          detail: "Parâmetro `number_of_characters` da função LEFT.",
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
      d: "Descrição da função RIGHT.",
      a: "Resumo da função RIGHT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "string",
          detail: "Parâmetro `string` da função RIGHT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "number_of_characters",
          detail: "Parâmetro `number_of_characters` da função RIGHT.",
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
      d: "Descrição da função MID.",
      a: "Resumo da função MID.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "string",
          detail: "Parâmetro `string` da função MID.",
          example: "\"get this\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "starting_at",
          detail: "Parâmetro `starting_at` da função MID.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "extract_length",
          detail: "Parâmetro `extract_length` da função MID.",
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
      d: "Descrição da função LEN.",
      a: "Resumo da função LEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parâmetro `text` da função LEN.",
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
      d: "Descrição da função LENB.",
      a: "Resumo da função LENB.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parâmetro `text` da função LENB.",
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
      d: "Descrição da função LOWER.",
      a: "Resumo da função LOWER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parâmetro `text` da função LOWER.",
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
      d: "Descrição da função UPPER.",
      a: "Resumo da função UPPER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parâmetro `text` da função UPPER.",
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
      d: "Descrição da função EXACT.",
      a: "Resumo da função EXACT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "string1",
          detail: "Parâmetro `string1` da função EXACT.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "string2",
          detail: "Parâmetro `string2` da função EXACT.",
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
      d: "Descrição da função REPLACE.",
      a: "Resumo da função REPLACE.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "text",
          detail: "Parâmetro `text` da função REPLACE.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "position",
          detail: "Parâmetro `position` da função REPLACE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "length",
          detail: "Parâmetro `length` da função REPLACE.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "new_text",
          detail: "Parâmetro `new_text` da função REPLACE.",
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
      d: "Descrição da função REPT.",
      a: "Resumo da função REPT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "text_to_repeat",
          detail: "Parâmetro `text_to_repeat` da função REPT.",
          example: "\"ha\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "number_of_repetitions",
          detail: "Parâmetro `number_of_repetitions` da função REPT.",
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
      d: "Descrição da função SEARCH.",
      a: "Resumo da função SEARCH.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "search_for",
          detail: "Parâmetro `search_for` da função SEARCH.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "text_to_search",
          detail: "Parâmetro `text_to_search` da função SEARCH.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "starting_at",
          detail: "Parâmetro `starting_at` da função SEARCH.",
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
      d: "Descrição da função SUBSTITUTE.",
      a: "Resumo da função SUBSTITUTE.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "text_to_search",
          detail: "Parâmetro `text_to_search` da função SUBSTITUTE.",
          example: "\"search for it\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "search_for",
          detail: "Parâmetro `search_for` da função SUBSTITUTE.",
          example: "\"search for\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "replace_with",
          detail: "Parâmetro `replace_with` da função SUBSTITUTE.",
          example: "\"Google\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "occurrence_number",
          detail: "Parâmetro `occurrence_number` da função SUBSTITUTE.",
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
      d: "Descrição da função CLEAN.",
      a: "Resumo da função CLEAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parâmetro `text` da função CLEAN.",
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
      d: "Descrição da função TEXT.",
      a: "Resumo da função TEXT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "number",
          detail: "Parâmetro `number` da função TEXT.",
          example: "1.23",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "format",
          detail: "Parâmetro `format` da função TEXT.",
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
      d: "Descrição da função TRIM.",
      a: "Resumo da função TRIM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parâmetro `text` da função TRIM.",
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
      d: "Descrição da função VALUE.",
      a: "Resumo da função VALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text",
          detail: "Parâmetro `text` da função VALUE.",
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
      d: "Descrição da função PROPER.",
      a: "Resumo da função PROPER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "text_to_capitalize",
          detail: "Parâmetro `text_to_capitalize` da função PROPER.",
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
      d: "Descrição da função CONVERT.",
      a: "Resumo da função CONVERT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função CONVERT.",
          example: "5.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "start_unit",
          detail: "Parâmetro `start_unit` da função CONVERT.",
          example: "\"g\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "end_unit",
          detail: "Parâmetro `end_unit` da função CONVERT.",
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
      d: "Descrição da função SUMX2MY2.",
      a: "Resumo da função SUMX2MY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "array_x",
          detail: "Parâmetro `array_x` da função SUMX2MY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "array_y",
          detail: "Parâmetro `array_y` da função SUMX2MY2.",
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
      d: "Descrição da função SUMX2PY2.",
      a: "Resumo da função SUMX2PY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "array_x",
          detail: "Parâmetro `array_x` da função SUMX2PY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "array_y",
          detail: "Parâmetro `array_y` da função SUMX2PY2.",
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
      d: "Descrição da função SUMXMY2.",
      a: "Resumo da função SUMXMY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "array_x",
          detail: "Parâmetro `array_x` da função SUMXMY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "array_y",
          detail: "Parâmetro `array_y` da função SUMXMY2.",
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
      d: "Descrição da função TRANSPOSE.",
      a: "Resumo da função TRANSPOSE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "array_or_range",
          detail: "Parâmetro `array_or_range` da função TRANSPOSE.",
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
      d: "Descrição da função TREND.",
      a: "Resumo da função TREND.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "known_data_y",
          detail: "Parâmetro `known_data_y` da função TREND.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "known_data_x",
          detail: "Parâmetro `known_data_x` da função TREND.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "new_data_x",
          detail: "Parâmetro `new_data_x` da função TREND.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Parâmetro `b` da função TREND.",
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
      d: "Descrição da função FREQUENCY.",
      a: "Resumo da função FREQUENCY.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data",
          detail: "Parâmetro `data` da função FREQUENCY.",
          example: "A2:A40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "classes",
          detail: "Parâmetro `classes` da função FREQUENCY.",
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
      d: "Descrição da função GROWTH.",
      a: "Resumo da função GROWTH.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "known_data_y",
          detail: "Parâmetro `known_data_y` da função GROWTH.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "known_data_x",
          detail: "Parâmetro `known_data_x` da função GROWTH.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "new_data_x",
          detail: "Parâmetro `new_data_x` da função GROWTH.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Parâmetro `b` da função GROWTH.",
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
      d: "Descrição da função LINEST.",
      a: "Resumo da função LINEST.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "known_data_y",
          detail: "Parâmetro `known_data_y` da função LINEST.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "known_data_x",
          detail: "Parâmetro `known_data_x` da função LINEST.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "calculate_b",
          detail: "Parâmetro `calculate_b` da função LINEST.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "verbose",
          detail: "Parâmetro `verbose` da função LINEST.",
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
      d: "Descrição da função LOGEST.",
      a: "Resumo da função LOGEST.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "known_data_y",
          detail: "Parâmetro `known_data_y` da função LOGEST.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "known_data_x",
          detail: "Parâmetro `known_data_x` da função LOGEST.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Parâmetro `b` da função LOGEST.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "verbose",
          detail: "Parâmetro `verbose` da função LOGEST.",
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
      d: "Descrição da função MDETERM.",
      a: "Resumo da função MDETERM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "square_matrix",
          detail: "Parâmetro `square_matrix` da função MDETERM.",
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
      d: "Descrição da função MINVERSE.",
      a: "Resumo da função MINVERSE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "square_matrix",
          detail: "Parâmetro `square_matrix` da função MINVERSE.",
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
      d: "Descrição da função MMULT.",
      a: "Resumo da função MMULT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrix1",
          detail: "Parâmetro `matrix1` da função MMULT.",
          example: "A1:B3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrix2",
          detail: "Parâmetro `matrix2` da função MMULT.",
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
      d: "Descrição da função SUMPRODUCT.",
      a: "Resumo da função SUMPRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "array1",
          detail: "Parâmetro `array1` da função SUMPRODUCT.",
          example: "A2:C5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "array2",
          detail: "Parâmetro `array2` da função SUMPRODUCT.",
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
      d: "Descrição da função ISFORMULA.",
      a: "Resumo da função ISFORMULA.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "cell",
          detail: "Parâmetro `cell` da função ISFORMULA.",
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
      d: "Descrição da função CELL.",
      a: "Resumo da função CELL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "info_type",
          detail: "Parâmetro `info_type` da função CELL.",
          example: "\"type\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "reference",
          detail: "Parâmetro `reference` da função CELL.",
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
      d: "Descrição da função NA.",
      a: "Resumo da função NA.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "ERROR_TYPE",
      t: 15,
      d: "Descrição da função ERROR_TYPE.",
      a: "Resumo da função ERROR_TYPE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "reference",
          detail: "Parâmetro `reference` da função ERROR_TYPE.",
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
      d: "Descrição da função ISBLANK.",
      a: "Resumo da função ISBLANK.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ISBLANK.",
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
      d: "Descrição da função ISERR.",
      a: "Resumo da função ISERR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ISERR.",
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
      d: "Descrição da função ISERROR.",
      a: "Resumo da função ISERROR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ISERROR.",
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
      d: "Descrição da função ISLOGICAL.",
      a: "Resumo da função ISLOGICAL.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ISLOGICAL.",
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
      d: "Descrição da função ISNA.",
      a: "Resumo da função ISNA.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ISNA.",
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
      d: "Descrição da função ISNONTEXT.",
      a: "Resumo da função ISNONTEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ISNONTEXT.",
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
      d: "Descrição da função ISNUMBER.",
      a: "Resumo da função ISNUMBER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ISNUMBER.",
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
      d: "Descrição da função ISREF.",
      a: "Resumo da função ISREF.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ISREF.",
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
      d: "Descrição da função ISTEXT.",
      a: "Resumo da função ISTEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função ISTEXT.",
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
      d: "Descrição da função TYPE.",
      a: "Resumo da função TYPE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função TYPE.",
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
      d: "Descrição da função N.",
      a: "Resumo da função N.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função N.",
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
      d: "Descrição da função TO_DATE.",
      a: "Resumo da função TO_DATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função TO_DATE.",
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
      d: "Descrição da função TO_PURE_NUMBER.",
      a: "Resumo da função TO_PURE_NUMBER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função TO_PURE_NUMBER.",
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
      d: "Descrição da função TO_TEXT.",
      a: "Resumo da função TO_TEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função TO_TEXT.",
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
      d: "Descrição da função TO_DOLLARS.",
      a: "Resumo da função TO_DOLLARS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função TO_DOLLARS.",
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
      d: "Descrição da função TO_PERCENT.",
      a: "Resumo da função TO_PERCENT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          detail: "Parâmetro `value` da função TO_PERCENT.",
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
      d: "Descrição da função DGET.",
      a: "Resumo da função DGET.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parâmetro `database` da função DGET.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parâmetro `field` da função DGET.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parâmetro `criteria` da função DGET.",
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
      d: "Descrição da função DMAX.",
      a: "Resumo da função DMAX.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parâmetro `database` da função DMAX.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parâmetro `field` da função DMAX.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parâmetro `criteria` da função DMAX.",
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
      d: "Descrição da função DMIN.",
      a: "Resumo da função DMIN.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parâmetro `database` da função DMIN.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parâmetro `field` da função DMIN.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parâmetro `criteria` da função DMIN.",
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
      d: "Descrição da função DAVERAGE.",
      a: "Resumo da função DAVERAGE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parâmetro `database` da função DAVERAGE.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parâmetro `field` da função DAVERAGE.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parâmetro `criteria` da função DAVERAGE.",
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
      d: "Descrição da função DCOUNT.",
      a: "Resumo da função DCOUNT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parâmetro `database` da função DCOUNT.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parâmetro `field` da função DCOUNT.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parâmetro `criteria` da função DCOUNT.",
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
      d: "Descrição da função DCOUNTA.",
      a: "Resumo da função DCOUNTA.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parâmetro `database` da função DCOUNTA.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parâmetro `field` da função DCOUNTA.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parâmetro `criteria` da função DCOUNTA.",
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
      d: "Descrição da função DPRODUCT.",
      a: "Resumo da função DPRODUCT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parâmetro `database` da função DPRODUCT.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parâmetro `field` da função DPRODUCT.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parâmetro `criteria` da função DPRODUCT.",
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
      d: "Descrição da função DSTDEV.",
      a: "Resumo da função DSTDEV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parâmetro `database` da função DSTDEV.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parâmetro `field` da função DSTDEV.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parâmetro `criteria` da função DSTDEV.",
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
      d: "Descrição da função DSTDEVP.",
      a: "Resumo da função DSTDEVP.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parâmetro `database` da função DSTDEVP.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parâmetro `field` da função DSTDEVP.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parâmetro `criteria` da função DSTDEVP.",
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
      d: "Descrição da função DSUM.",
      a: "Resumo da função DSUM.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parâmetro `database` da função DSUM.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parâmetro `field` da função DSUM.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parâmetro `criteria` da função DSUM.",
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
      d: "Descrição da função DVAR.",
      a: "Resumo da função DVAR.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parâmetro `database` da função DVAR.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parâmetro `field` da função DVAR.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parâmetro `criteria` da função DVAR.",
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
      d: "Descrição da função DVARP.",
      a: "Resumo da função DVARP.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "database",
          detail: "Parâmetro `database` da função DVARP.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "field",
          detail: "Parâmetro `field` da função DVARP.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteria",
          detail: "Parâmetro `criteria` da função DVARP.",
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
      d: "Descrição da função AGE_BY_IDCARD.",
      a: "Resumo da função AGE_BY_IDCARD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ID number",
          example: "A1",
          detail: "Parâmetro `ID number` da função AGE_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Deadline",
          example: "\"2017-10-01\"",
          detail: "Parâmetro `Deadline` da função AGE_BY_IDCARD.",
          require: "o",
          repeat: "n",
          type: "rangedatetime"
        }
      ]
    },
    {
      n: "SEX_BY_IDCARD",
      t: "3",
      d: "Descrição da função SEX_BY_IDCARD.",
      a: "Resumo da função SEX_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ID number",
          example: "\"31033519900101XXXX\"",
          detail: "Parâmetro `ID number` da função SEX_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BIRTHDAY_BY_IDCARD",
      t: "3",
      d: "Descrição da função BIRTHDAY_BY_IDCARD.",
      a: "Resumo da função BIRTHDAY_BY_IDCARD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ID number",
          example: "\"31033519900101XXXX\"",
          detail: "Parâmetro `ID number` da função BIRTHDAY_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Birthday format",
          example: "0",
          detail: "Parâmetro `Birthday format` da função BIRTHDAY_BY_IDCARD.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PROVINCE_BY_IDCARD",
      t: "3",
      d: "Descrição da função PROVINCE_BY_IDCARD.",
      a: "Resumo da função PROVINCE_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ID number",
          example: "\"31033519900101XXXX\"",
          detail: "Parâmetro `ID number` da função PROVINCE_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "CITY_BY_IDCARD",
      t: "3",
      d: "Descrição da função CITY_BY_IDCARD.",
      a: "Resumo da função CITY_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ID number",
          example: "\"31033519900101XXXX\"",
          detail: "Parâmetro `ID number` da função CITY_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STAR_BY_IDCARD",
      t: "3",
      d: "Descrição da função STAR_BY_IDCARD.",
      a: "Resumo da função STAR_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ID number",
          example: "\"31033519900101XXXX\"",
          detail: "Parâmetro `ID number` da função STAR_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ANIMAL_BY_IDCARD",
      t: "3",
      d: "Descrição da função ANIMAL_BY_IDCARD.",
      a: "Resumo da função ANIMAL_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ID number",
          example: "\"31033519900101XXXX\"",
          detail: "Parâmetro `ID number` da função ANIMAL_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISIDCARD",
      t: "3",
      d: "Descrição da função ISIDCARD.",
      a: "Resumo da função ISIDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ID number",
          example: "\"31033519900101XXXX\"",
          detail: "Parâmetro `ID number` da função ISIDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DM_TEXT_CUTWORD",
      t: "4",
      d: "Descrição da função DM_TEXT_CUTWORD.",
      a: "Resumo da função DM_TEXT_CUTWORD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Text",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parâmetro `Text` da função DM_TEXT_CUTWORD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Word segmentation mode",
          example: "0",
          detail: "Parâmetro `Word segmentation mode` da função DM_TEXT_CUTWORD.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DM_TEXT_TFIDF",
      t: "4",
      d: "Descrição da função DM_TEXT_TFIDF.",
      a: "Resumo da função DM_TEXT_TFIDF.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Text",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parâmetro `Text` da função DM_TEXT_TFIDF.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Number of keywords",
          example: "20",
          detail: "Parâmetro `Number of keywords` da função DM_TEXT_TFIDF.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "Corpus",
          example: "1",
          detail: "Parâmetro `Corpus` da função DM_TEXT_TFIDF.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DM_TEXT_TEXTRANK",
      t: "4",
      d: "Descrição da função DM_TEXT_TEXTRANK.",
      a: "Resumo da função DM_TEXT_TEXTRANK.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Text",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parâmetro `Text` da função DM_TEXT_TEXTRANK.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Number of keywords",
          example: "20",
          detail: "Parâmetro `Number of keywords` da função DM_TEXT_TEXTRANK.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "Corpus",
          example: "1",
          detail: "Parâmetro `Corpus` da função DM_TEXT_TEXTRANK.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_CLOSE",
      t: "5",
      d: "Descrição da função DATA_CN_STOCK_CLOSE.",
      a: "Resumo da função DATA_CN_STOCK_CLOSE.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Stock code",
          example: "\"000001\"",
          detail: "Parâmetro `Stock code` da função DATA_CN_STOCK_CLOSE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Parâmetro `Date` da função DATA_CN_STOCK_CLOSE.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Reversion and exclusion",
          example: "0",
          detail: "Parâmetro `Reversion and exclusion` da função DATA_CN_STOCK_CLOSE.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_OPEN",
      t: "5",
      d: "Descrição da função DATA_CN_STOCK_OPEN.",
      a: "Resumo da função DATA_CN_STOCK_OPEN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Stock code",
          example: "\"000001\"",
          detail: "Parâmetro `Stock code` da função DATA_CN_STOCK_OPEN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Parâmetro `Date` da função DATA_CN_STOCK_OPEN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Reversion and exclusion",
          example: "0",
          detail: "Parâmetro `Reversion and exclusion` da função DATA_CN_STOCK_OPEN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_MAX",
      t: "5",
      d: "Descrição da função DATA_CN_STOCK_MAX.",
      a: "Resumo da função DATA_CN_STOCK_MAX.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Stock code",
          example: "\"000001\"",
          detail: "Parâmetro `Stock code` da função DATA_CN_STOCK_MAX.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Parâmetro `Date` da função DATA_CN_STOCK_MAX.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Reversion and exclusion",
          example: "0",
          detail: "Parâmetro `Reversion and exclusion` da função DATA_CN_STOCK_MAX.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_MIN",
      t: "5",
      d: "Descrição da função DATA_CN_STOCK_MIN.",
      a: "Resumo da função DATA_CN_STOCK_MIN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Stock code",
          example: "\"000001\"",
          detail: "Parâmetro `Stock code` da função DATA_CN_STOCK_MIN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Parâmetro `Date` da função DATA_CN_STOCK_MIN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Reversion and exclusion",
          example: "0",
          detail: "Parâmetro `Reversion and exclusion` da função DATA_CN_STOCK_MIN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_VOLUMN",
      t: "5",
      d: "Descrição da função DATA_CN_STOCK_VOLUMN.",
      a: "Resumo da função DATA_CN_STOCK_VOLUMN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Stock code",
          example: "\"000001\"",
          detail: "Parâmetro `Stock code` da função DATA_CN_STOCK_VOLUMN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Parâmetro `Date` da função DATA_CN_STOCK_VOLUMN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Reversion and exclusion",
          example: "0",
          detail: "Parâmetro `Reversion and exclusion` da função DATA_CN_STOCK_VOLUMN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_AMOUNT",
      t: "5",
      d: "Descrição da função DATA_CN_STOCK_AMOUNT.",
      a: "Resumo da função DATA_CN_STOCK_AMOUNT.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Stock code",
          example: "\"000001\"",
          detail: "Parâmetro `Stock code` da função DATA_CN_STOCK_AMOUNT.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Parâmetro `Date` da função DATA_CN_STOCK_AMOUNT.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Reversion and exclusion",
          example: "0",
          detail: "Parâmetro `Reversion and exclusion` da função DATA_CN_STOCK_AMOUNT.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ISDATE",
      t: "6",
      d: "Descrição da função ISDATE.",
      a: "Resumo da função ISDATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "value",
          example: "\"1990-01-01\"",
          detail: "Parâmetro `value` da função ISDATE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LINESPLINES",
      t: "3",
      d: "Descrição da função LINESPLINES.",
      a: "Resumo da função LINESPLINES.",
      m: [
        1,
        8
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parâmetro `Range` da função LINESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Line color",
          example: "#2ec7c9",
          detail: "Parâmetro `Line color` da função LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Line thickness",
          example: "1",
          detail: "Parâmetro `Line thickness` da função LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Auxiliary line",
          example: "avg",
          detail: "Parâmetro `Auxiliary line` da função LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Auxiliary line color",
          example: "#000",
          detail: "Parâmetro `Auxiliary line color` da função LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximum mark",
          example: "#fc5c5c",
          detail: "Parâmetro `Maximum mark` da função LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Minimum mark",
          example: "#fc5c5c",
          detail: "Parâmetro `Minimum mark` da função LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Mark size",
          example: "1.5",
          detail: "Parâmetro `Mark size` da função LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "AREASPLINES",
      t: "3",
      d: "Descrição da função AREASPLINES.",
      a: "Resumo da função AREASPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parâmetro `Range` da função AREASPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Line color",
          example: "#2ec7c9",
          detail: "Parâmetro `Line color` da função AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Fill color",
          example: "#CCF3F4",
          detail: "Parâmetro `Fill color` da função AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Line thickness",
          example: "1",
          detail: "Parâmetro `Line thickness` da função AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Auxiliary line",
          example: "avg",
          detail: "Parâmetro `Auxiliary line` da função AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Auxiliary line color",
          example: "#000",
          detail: "Parâmetro `Auxiliary line color` da função AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COLUMNSPLINES",
      t: "3",
      d: "Descrição da função COLUMNSPLINES.",
      a: "Resumo da função COLUMNSPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parâmetro `Range` da função COLUMNSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar interval",
          example: "1",
          detail: "Parâmetro `Bar interval` da função COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar color",
          example: "#fc5c5c",
          detail: "Parâmetro `Bar color` da função COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Negative bar color",
          example: "#97b552",
          detail: "Parâmetro `Negative bar color` da função COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Max",
          example: "100",
          detail: "Parâmetro `Max` da função COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color palette",
          example: "#97b552",
          detail: "Parâmetro `Color palette` da função COLUMNSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STACKCOLUMNSPLINES",
      t: "3",
      d: "Descrição da função STACKCOLUMNSPLINES.",
      a: "Resumo da função STACKCOLUMNSPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parâmetro `Range` da função STACKCOLUMNSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Stack by column",
          example: "1",
          detail: "Parâmetro `Stack by column` da função STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar interval",
          example: "1",
          detail: "Parâmetro `Bar interval` da função STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Max",
          example: "100",
          detail: "Parâmetro `Max` da função STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color palette",
          example: "#97b552",
          detail: "Parâmetro `Color palette` da função STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BARSPLINES",
      t: "3",
      d: "Descrição da função BARSPLINES.",
      a: "Resumo da função BARSPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parâmetro `Range` da função BARSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar interval",
          example: "1",
          detail: "Parâmetro `Bar interval` da função BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar color",
          example: "#fc5c5c",
          detail: "Parâmetro `Bar color` da função BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Negative bar color",
          example: "#97b552",
          detail: "Parâmetro `Negative bar color` da função BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Max",
          example: "100",
          detail: "Parâmetro `Max` da função BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color palette",
          example: "#97b552",
          detail: "Parâmetro `Color palette` da função BARSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STACKBARSPLINES",
      t: "3",
      d: "Descrição da função STACKBARSPLINES.",
      a: "Resumo da função STACKBARSPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parâmetro `Range` da função STACKBARSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Stack by column",
          example: "1",
          detail: "Parâmetro `Stack by column` da função STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar interval",
          example: "1",
          detail: "Parâmetro `Bar interval` da função STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Max",
          example: "100",
          detail: "Parâmetro `Max` da função STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color palette",
          example: "#97b552",
          detail: "Parâmetro `Color palette` da função STACKBARSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DISCRETESPLINES",
      t: "3",
      d: "Descrição da função DISCRETESPLINES.",
      a: "Resumo da função DISCRETESPLINES.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parâmetro `Range` da função DISCRETESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Segmentation threshold",
          example: "1",
          detail: "Parâmetro `Segmentation threshold` da função DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Above threshold color",
          example: "#2ec7c9",
          detail: "Parâmetro `Above threshold color` da função DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Below threshold color",
          example: "#fc5c5c",
          detail: "Parâmetro `Below threshold color` da função DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TRISTATESPLINES",
      t: "3",
      d: "Descrição da função TRISTATESPLINES.",
      a: "Resumo da função TRISTATESPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parâmetro `Range` da função TRISTATESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar interval",
          example: "1",
          detail: "Parâmetro `Bar interval` da função TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Bar color",
          example: "#fc5c5c",
          detail: "Parâmetro `Bar color` da função TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Negative bar color",
          example: "#97b552",
          detail: "Parâmetro `Negative bar color` da função TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Zero value bar color",
          example: "#999",
          detail: "Parâmetro `Zero value bar color` da função TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color palette",
          example: "#97b552",
          detail: "Parâmetro `Color palette` da função TRISTATESPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PIESPLINES",
      t: "3",
      d: "Descrição da função PIESPLINES.",
      a: "Resumo da função PIESPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parâmetro `Range` da função PIESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Rotation angle",
          example: "0",
          detail: "Parâmetro `Rotation angle` da função PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "border",
          example: "0",
          detail: "Parâmetro `border` da função PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Border color",
          example: "#000",
          detail: "Parâmetro `Border color` da função PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color palette",
          example: "#97b552",
          detail: "Parâmetro `Color palette` da função PIESPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BOXSPLINES",
      t: "3",
      d: "Descrição da função BOXSPLINES.",
      a: "Resumo da função BOXSPLINES.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "Range",
          example: "A1:A20",
          detail: "Parâmetro `Range` da função BOXSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Outlier ratio",
          example: "1.5",
          detail: "Parâmetro `Outlier ratio` da função BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Target value",
          example: "10",
          detail: "Parâmetro `Target value` da função BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Point size",
          example: "1.5",
          detail: "Parâmetro `Point size` da função BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BULLETSPLINES",
      t: "3",
      d: "Descrição da função BULLETSPLINES.",
      a: "Resumo da função BULLETSPLINES.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "Target",
          example: "10",
          detail: "Parâmetro `Target` da função BULLETSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "achieved",
          example: "8",
          detail: "Parâmetro `achieved` da função BULLETSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Contrast",
          example: "12",
          detail: "Parâmetro `Contrast` da função BULLETSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COMPOSESPLINES",
      t: "3",
      d: "Descrição da função COMPOSESPLINES.",
      a: "Resumo da função COMPOSESPLINES.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "config",
          example: "PIESPLINES(A1:A20)",
          detail: "Parâmetro `config` da função COMPOSESPLINES.",
          require: "m",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "SORT",
      t: "14",
      d: "Descrição da função SORT.",
      a: "Resumo da função SORT.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "range",
          detail: "Parâmetro `range` da função SORT.",
          example: "A2:A17",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sort_column",
          detail: "Parâmetro `sort_column` da função SORT.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "is_ascending",
          detail: "Parâmetro `is_ascending` da função SORT.",
          example: "-1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sort_column2",
          detail: "Parâmetro `sort_column2` da função SORT.",
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
      d: "Descrição da função FILTER.",
      a: "Resumo da função FILTER.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "range",
          detail: "Parâmetro `range` da função FILTER.",
          example: "A5:D20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "condition1",
          detail: "Parâmetro `condition1` da função FILTER.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "condition2",
          detail: "Parâmetro `condition2` da função FILTER.",
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
      d: "Descrição da função UNIQUE.",
      a: "Resumo da função UNIQUE.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "range",
          detail: "Parâmetro `range` da função UNIQUE.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "by_col",
          detail: "Parâmetro `by_col` da função UNIQUE.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "occurs_once",
          detail: "Parâmetro `occurs_once` da função UNIQUE.",
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
      d: "Descrição da função RANDARRAY.",
      a: "Resumo da função RANDARRAY.",
      m: [
        0,
        2
      ],
      p: [
        {
          name: "rows",
          detail: "Parâmetro `rows` da função RANDARRAY.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "columns",
          detail: "Parâmetro `columns` da função RANDARRAY.",
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
      d: "Descrição da função SEQUENCE.",
      a: "Resumo da função SEQUENCE.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "rows",
          detail: "Parâmetro `rows` da função SEQUENCE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "columns",
          detail: "Parâmetro `columns` da função SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "start",
          detail: "Parâmetro `start` da função SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "step",
          detail: "Parâmetro `step` da função SEQUENCE.",
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
      d: "Descrição da função EVALUATE.",
      a: "Resumo da função EVALUATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "expression",
          example: "\"A1+5*2^2\"",
          detail: "Parâmetro `expression` da função EVALUATE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "REMOTE",
      t: "5",
      d: "Descrição da função REMOTE.",
      a: "Resumo da função REMOTE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "remote_expression",
          example: "SUM(A1:A10000000)",
          detail: "Parâmetro `remote_expression` da função REMOTE.",
          require: "m",
          repeat: "n",
          type: "string"
        }
      ]
    }
  ],
  toolbar: {
    toolbar: "Barra de ferramentas",
    undo: "Anular",
    redo: "Refazer",
    "clear-format": "Limpar formato",
    "format-painter": "Pincel de formatação",
    paintFormat: "Copiar formato",
    "currency-format": "Formatar como moeda",
    "percentage-format": "Formatar como percentagem",
    "number-decrease": "Diminuir casas decimais",
    "number-increase": "Aumentar casas decimais",
    moreFormats: "Mais formatos",
    "border-all": "Todas as bordas",
    "merge-all": "Unir todas as células",
    format: "Formato",
    font: "Tipo de letra",
    "font-size": "Tamanho da letra",
    bold: "Negrito (Ctrl+B)",
    italic: "Itálico (Ctrl+I)",
    "strike-through": "Rasurado (Alt+Shift+5)",
    underline: "Sublinhado",
    "font-color": "Cor do texto",
    "align-left": "Alinhar à esquerda",
    "align-center": "Centrar horizontalmente",
    "align-right": "Alinhar à direita",
    "align-top": "Alinhar acima",
    "align-mid": "Centrar verticalmente",
    "align-bottom": "Alinhar abaixo",
    chooseColor: "escolher cor",
    resetColor: "Repor",
    customColor: "PERSONALIZADO",
    alternatingColors: "Cores alternadas",
    confirmColor: "OK",
    cancelColor: "Cancelar",
    collapse: "Recolher",
    background: "Cor de preenchimento",
    border: "Borda",
    borderStyle: "Estilo da borda",
    "merge-cell": "Unir células",
    chooseMergeType: "Escolher tipo de união",
    horizontalAlign: "Alinhamento horizontal",
    verticalAlign: "Alinhamento vertical",
    alignment: "Alinhamento",
    textWrap: "Quebra de texto",
    textWrapMode: "Modo de quebra de texto",
    textRotate: "Rodar texto",
    textRotateMode: "Modo de rotação do texto",
    freeze: "Fixar",
    sort: "Ordenar",
    filter: "Filtrar",
    sortAndFilter: "Ordenar e filtrar",
    findAndReplace: "Localizar e substituir",
    "formula-sum": "SUM",
    autoSum: "Soma automática",
    moreFunction: "Mais funções",
    conditionalFormat: "Formatação condicional",
    comment: "Comentário",
    pivotTable: "Tabela dinâmica",
    chart: "Gráfico",
    screenshot: "Captura de ecrã",
    splitColumn: "Dividir texto",
    insertImage: "Inserir imagem",
    insertLink: "Inserir ligação",
    dataVerification: "Validação de dados",
    protection: "Proteger a folha",
    clearText: "Limpar cor",
    noColorSelectedText: "Nenhuma cor selecionada",
    toolMore: "Mais",
    toolLess: "Menos",
    toolClose: "Fechar",
    toolMoreTip: "Mais funcionalidades",
    moreOptions: "Mais opções",
    cellFormat: "Formato da célula",
    print: "Imprimir"
  },
  alternatingColors: {
    applyRange: "Aplicar ao intervalo",
    selectRange: "Selecionar um intervalo de dados",
    header: "Cabeçalho",
    footer: "Rodapé",
    errorInfo: "Não é possível executar esta operação em várias áreas selecionadas. Selecione uma única área e tente novamente",
    textTitle: "Estilo de formato",
    custom: "PERSONALIZADO",
    close: "fechar",
    selectionTextColor: "Clique para selecionar a cor do texto",
    selectionCellColor: "Clique para selecionar a cor da célula",
    removeColor: "Remover cores alternadas",
    colorShow: "cor",
    currentColor: "Atual",
    tipSelectRange: "Selecione o intervalo das cores alternadas",
    errorNoRange: "Nenhum intervalo está selecionado",
    errorExistColors: "Já existem cores alternadas e não podem ser editadas"
  },
  button: {
    confirm: "OK",
    cancel: "Cancelar",
    close: "Fechar",
    update: "Atualizar",
    delete: "Eliminar",
    insert: "Inserir",
    prevPage: "Anterior",
    nextPage: "Seguinte",
    total: "total:"
  },
  paint: {
    start: "Início da cópia de formato",
    end: "ESC",
    tipSelectRange: "Selecione o intervalo a copiar",
    tipNotMulti: "Não é possível executar esta operação em vários intervalos selecionados"
  },
  format: {
    moreCurrency: "Mais formatos de moeda",
    moreDateTime: "Mais formatos de data e hora",
    moreNumber: "Mais formatos numéricos",
    titleCurrency: "Formatos de moeda",
    decimalPlaces: "Casas decimais",
    titleDateTime: "Formatos de data e hora",
    titleNumber: "Formatos numéricos",
    tipDecimalPlaces: "As casas decimais devem estar entre 0 e 9!",
    select: "Selecionar",
    format: "formato",
    currency: "moeda"
  },
  info: {
    detailUpdate: "Aberto recentemente",
    detailSave: "Cache local restaurada",
    row: "",
    column: "",
    loading: "A carregar...",
    copy: "Copiar",
    return: "Sair",
    rename: "Mudar nome",
    tips: "Mudar nome do livro",
    noName: "Folha de cálculo sem título",
    wait: "a aguardar atualização",
    add: "Adicionar",
    addLast: "mais linhas no fim",
    backTop: "Voltar ao topo",
    pageInfo: "Total ${total}, ${totalPage} página(s), atual ${currentPage}",
    nextPage: "Seguinte",
    tipInputNumber: "Introduza o número",
    tipInputNumberLimit: "O intervalo de aumento é limitado a 1-100",
    tipRowHeightLimit: "A altura da linha deve estar entre 0 e 545",
    tipColumnWidthLimit: "A largura da coluna deve estar entre 0 e 2038",
    pageInfoFull: "Total ${total}, ${totalPage} página(s), todos os dados apresentados",
    sheetIsFocused: "Bloqueio de foco da folha ativado.",
    sheetNotFocused: "Bloqueio de foco da folha desativado.",
    sheetSrIntro: "Para alternar o foco da folha e facilitar a navegação pela barra de ferramentas e por outros elementos fora da folha, use Shift, Control, F.",
    currentCellInput: "Entrada da célula atual",
    newSheet: "Nova folha",
    sheetOptions: "Opções da folha",
    Dropdown: "Lista pendente",
    zoomIn: "Aumentar zoom",
    zoomOut: "Diminuir zoom",
    toggleSheetFocusShortcut: "Alternar bloqueio de foco da folha: Shift, Control, F.",
    selectRangeShortcut: "Selecionar intervalo: Shift, teclas de seta.",
    autoFillDownShortcut: "Preencher seleção para baixo a partir da primeira célula: tecla Control ou Meta, D.",
    autoFillRightShortcut: "Preencher seleção para a direita a partir da primeira célula: tecla Control ou Meta, R.",
    boldTextShortcut: "Texto em negrito: tecla Control ou Meta, B.",
    copyShortcut: "Copiar: tecla Control ou Meta, C.",
    pasteShortcut: "Colar: tecla Control ou Meta, V.",
    undoShortcut: "Anular: tecla Control ou Meta, Z.",
    redoShortcut: "Refazer: tecla Control ou Meta, Shift, Z.",
    deleteCellContentShortcut: "Eliminar conteúdo da célula: Delete ou Backspace.",
    confirmCellEditShortcut: "Confirmar edição da célula e mover para baixo: Enter.",
    moveRightShortcut: "Mover para a direita: Tab.",
    moveLeftShortcut: "Mover para a esquerda: Shift, Tab.",
    shortcuts: "Atalhos de teclado"
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
      text: "Automático",
      value: "General",
      example: ""
    }, {
      text: "Texto simples",
      value: "@",
      example: ""
    }, {
      text: "",
      value: "split",
      example: ""
    }, {
      text: "Número",
      value: "##0.00",
      example: "1000.12"
    }, {
      text: "Percentual",
      value: "#0.00%",
      example: "12.21%"
    }, {
      text: "Científico",
      value: "0.00E+00",
      example: "1.01E+5"
    }, {
      text: "",
      value: "split",
      example: ""
    }, {
      text: "Contabilidade",
      value: "".concat(currency, "(0.00)"),
      example: "".concat(currency, "(1200.09)")
    }, {
      text: "Moeda",
      value: "".concat(currency, "0.00"),
      example: "".concat(currency, "1200.09")
    }, {
      text: "",
      value: "split",
      example: ""
    }, {
      text: "Data",
      value: "yyyy-MM-dd",
      example: "2017-11-29"
    }, {
      text: "Hora",
      value: "hh:mm AM/PM",
      example: "3:00 PM"
    }, {
      text: "Hora 24h",
      value: "hh:mm",
      example: "15:00"
    }, {
      text: "Data e hora",
      value: "yyyy-MM-dd hh:mm AM/PM",
      example: "2017-11-29 3:00 PM"
    }, {
      text: "Data e hora 24h",
      value: "yyyy-MM-dd hh:mm",
      example: "2017-11-29 15:00"
    }, {
      text: "",
      value: "split",
      example: ""
    }, {
      text: "Formatos personalizados",
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
    borderTop: "Borda superior",
    borderBottom: "Borda inferior",
    borderLeft: "Borda esquerda",
    borderRight: "Borda direita",
    borderNone: "Sem borda",
    borderAll: "Todas as bordas",
    borderOutside: "Borda externa",
    borderInside: "Borda interna",
    borderHorizontal: "Bordas horizontais",
    borderVertical: "Bordas verticais",
    borderColor: "cor da borda",
    borderSize: "espessura da borda",
    borderSlash: "Borda diagonal",
    borderDefault: "predefinido",
    borderStyle: "estilo da borda"
  },
  merge: {
    mergeAll: "Unir tudo",
    mergeV: "Unir verticalmente",
    mergeH: "Unir horizontalmente",
    mergeCancel: "Separar células",
    overlappingError: "Não é possível unir áreas sobrepostas",
    partiallyError: "Não é possível executar esta operação em células parcialmente unidas"
  },
  align: {
    left: "esquerda",
    center: "centro",
    right: "direita",
    top: "Acima",
    middle: "Meio",
    bottom: "Abaixo"
  },
  textWrap: {
    overflow: "Transbordar",
    wrap: "Quebrar linha",
    clip: "Cortar"
  },
  rotation: {
    none: "Nenhum",
    angleup: "Inclinar para cima",
    angledown: "Inclinar para baixo",
    vertical: "Empilhar verticalmente",
    rotationUp: "Rodar para cima",
    rotationDown: "Rodar para baixo"
  },
  freezen: {
    default: "Fixar",
    freezenRow: "Primeira linha",
    freezenColumn: "Primeira coluna",
    freezenRC: "Ambos",
    freezenRowRange: "Fixar até à linha atual",
    freezenColumnRange: "Fixar até à coluna atual",
    freezenRCRange: "Fixar até à célula atual",
    freezenCancel: "Cancelar fixação",
    noSeletionError: "Nenhum intervalo selecionado",
    rangeRCOverErrorTitle: "Aviso de fixação",
    rangeRCOverError: "O painel fixado está fora da área visível, o que pode causar funcionamento anormal. Reponha a área fixada."
  },
  sort: {
    asc: "Ascendente ",
    desc: "Descendente ",
    custom: "Ordenação personalizada",
    hasTitle: "Os dados têm linha de cabeçalho",
    sortBy: "Ordenar por",
    addOthers: "Adicionar outra coluna de ordenação",
    close: "fechar",
    confirm: "ordenar",
    columnOperation: "Coluna",
    secondaryTitle: "depois por",
    sortTitle: "Ordenar intervalo",
    sortRangeTitle: "Ordenar intervalo de",
    sortRangeTitleTo: "até",
    noRangeError: "Não é possível executar esta operação em várias áreas selecionadas. Selecione um único intervalo e tente novamente",
    mergeError: "Existem células unidas na seleção; esta operação não pode ser executada!"
  },
  filter: {
    filter: "criar filtro",
    sortByAsc: "Ordenar ascendente",
    sortByDesc: "Ordenar descendente",
    filterByColor: "Filtrar por cor",
    filterByCondition: "Filtrar por condição",
    filterByValues: "Filtrar por valores",
    filiterInputNone: "Nenhum",
    filiterInputTip: "Introduza o valor do filtro",
    filiterRangeStartTip: "Valor para a fórmula",
    filiterRangeEndTip: "Valor para a fórmula",
    filterValueByAllBtn: "Selecionar tudo",
    filterValueByClearBtn: "Limpar",
    filterValueByInverseBtn: "Inverter",
    filterValueByTip: "filtrar por valores",
    filterConform: "Confirmar",
    filterCancel: "Cancelar",
    clearFilter: "Limpar filtro",
    conditionNone: "Nenhum",
    conditionCellIsNull: "Está vazio",
    conditionCellNotNull: "Não está vazio",
    conditionCellTextContain: "Texto contém",
    conditionCellTextNotContain: "Texto não contém",
    conditionCellTextStart: "Texto começa por",
    conditionCellTextEnd: "Texto termina em",
    conditionCellTextEqual: "Texto é exatamente",
    conditionCellDateEqual: "Data é",
    conditionCellDateBefore: "Data é anterior a",
    conditionCellDateAfter: "Data é posterior a",
    conditionCellGreater: "Maior que",
    conditionCellGreaterEqual: "Maior ou igual a",
    conditionCellLess: "Menor que",
    conditionCellLessEqual: "Menor ou igual a",
    conditionCellEqual: "É igual a",
    conditionCellNotEqual: "Não é igual a",
    conditionCellBetween: "Está entre",
    conditionCellNotBetween: "Não está entre",
    filiterMoreDataTip: "Grande quantidade de dados! Aguarde",
    filiterMonthText: "Mês",
    filiterYearText: "Ano",
    filiterByColorTip: "Filtrar por cor da célula",
    filiterByTextColorTip: "Filtrar por cor do texto",
    filterContainerOneColorTip: "Esta coluna contém apenas uma cor",
    filterDateFormatTip: "Formato de data",
    valueBlank: "(Vazio)",
    mergeError: "Existem células unidas na seleção do filtro; esta operação não pode ser executada!"
  },
  rightclick: {
    copy: "Copiar",
    copyAs: "Copiar como",
    paste: "Colar",
    insert: "Inserir",
    image: "Inserir imagem",
    link: "Inserir ligação",
    delete: "Eliminar",
    deleteCell: "Eliminar célula",
    deleteSelected: "Eliminar seleção ",
    hide: "Ocultar",
    hideSelected: "Ocultar seleção ",
    showHide: "Mostrar oculto ",
    to: "Para",
    left: "Esquerda",
    right: "Direita",
    top: "Acima",
    bottom: "Abaixo",
    moveLeft: "Mover para a esquerda",
    moveUp: "Mover para cima",
    add: "Adicionar",
    row: "Linha",
    column: "Coluna",
    width: "Largura",
    height: "Altura",
    number: "Número",
    confirm: "Confirmar",
    orderAZ: "Ordenação ascendente",
    orderZA: "Ordenação descendente",
    clearContent: "Limpar conteúdo",
    matrix: "Operação de matriz",
    sortSelection: "Ordenar",
    filterSelection: "Filtrar",
    chartGeneration: "Criar gráfico",
    firstLineTitle: "título da primeira linha",
    untitled: "sem título",
    array1: "Matriz unidimensional",
    array2: "Matriz bidimensional",
    array3: "Matriz multidimensional",
    diagonal: "Diagonal",
    antiDiagonal: "Anti-diagonal",
    diagonalOffset: "Deslocamento diagonal",
    offset: "Deslocamento",
    boolean: "Booleano",
    flip: "Inverter",
    upAndDown: "Cima e baixo",
    leftAndRight: "Esquerda e direita",
    clockwise: "Sentido horário",
    counterclockwise: "Sentido anti-horário",
    transpose: "Transpor",
    matrixCalculation: "Cálculo de matriz",
    plus: "Mais",
    minus: "Menos",
    multiply: "Multiplicar",
    divided: "Dividir",
    power: "Potência",
    root: "Raiz",
    log: "Logaritmo",
    delete0: "Eliminar valores 0 nas extremidades",
    removeDuplicate: "Remover valores duplicados",
    byRow: "Por linha",
    byCol: "Por coluna",
    generateNewMatrix: "Gerar nova matriz",
    noMulti: "Não é possível executar esta operação em várias áreas selecionadas. Selecione uma única área",
    cannotDeleteAllRow: "Não é possível eliminar todas as linhas",
    cannotDeleteAllColumn: "Não é possível eliminar todas as colunas",
    cannotDeleteRowReadOnly: "Não é possível eliminar uma linha só de leitura",
    cannotDeleteColumnReadOnly: "Não é possível eliminar uma coluna só de leitura",
    cannotInsertOnRowReadOnly: "Não é possível inserir numa linha só de leitura",
    cannotInsertOnColumnReadOnly: "Não é possível inserir numa coluna só de leitura",
    rowOverLimit: "Limite de 10000 linhas excedido",
    columnOverLimit: "Limite de 1000 colunas excedido"
  },
  comment: {
    insert: "Inserir",
    edit: "Editar",
    delete: "Eliminar",
    showOne: "Mostrar/Ocultar",
    showAll: "Mostrar/Ocultar tudo"
  },
  screenshot: {
    screenshotTipNoSelection: "Selecione a área da captura de ecrã",
    screenshotTipTitle: "Aviso!",
    screenshotTipHasMerge: "Esta operação não pode ser executada em células unidas",
    screenshotTipHasMulti: "Esta operação não pode ser executada em várias regiões selecionadas",
    screenshotTipSuccess: "Concluído",
    screenshotImageName: "Captura de ecrã",
    downLoadClose: "Fechar",
    downLoadCopy: "Copiar para a área de transferência",
    downLoadBtn: "Descarregar",
    browserNotTip: "não suportado pelo Internet Explorer!",
    rightclickTip: "Clique com o botão direito em \"copiar\" na imagem",
    successTip: "Concluído (se a colagem falhar, clique com o botão direito na imagem e escolha \"copiar imagem\")"
  },
  splitText: {
    splitDelimiters: "Delimitadores",
    splitOther: "Outro",
    splitContinueSymbol: "Separadores consecutivos são tratados como um só",
    splitDataPreview: "Pré-visualização",
    splitTextTitle: "Dividir texto",
    splitConfirmToExe: "Já existem dados aqui. Pretende substituí-los?",
    splitSymbols: [
      {
        name: "Tabulação",
        value: "Tabulação"
      },
      {
        name: "ponto e vírgula",
        value: "ponto e vírgula"
      },
      {
        name: "vírgula",
        value: "vírgula"
      },
      {
        name: "espaço",
        value: "espaço"
      }
    ],
    tipNoMulti: "Não é possível executar esta operação em várias áreas selecionadas. Selecione uma única área e tente novamente",
    tipNoMultiColumn: "Só é possível converter uma coluna de dados de cada vez. A área selecionada pode ter várias linhas, mas não várias colunas. Tente novamente depois de selecionar um intervalo de uma única coluna",
    tipNoSelect: "Não é possível separar uma célula sem a selecionar"
  },
  imageText: {
    imageSetting: "Definições da imagem",
    close: "Fechar",
    conventional: "Convencional",
    moveCell1: "Mover e redimensionar com as células",
    moveCell2: "Mover sem redimensionar a célula",
    moveCell3: "Não mover nem redimensionar a célula",
    fixedPos: "Posição fixa",
    border: "Borda",
    width: "Largura",
    radius: "Raio",
    style: "Estilo",
    solid: "Sólido",
    dashed: "Tracejado",
    dotted: "Pontilhado",
    double: "Duplo",
    color: "Cor"
  },
  punctuation: {
    tab: "Tabulação",
    semicolon: "ponto e vírgula",
    comma: "vírgula",
    space: "espaço"
  },
  findAndReplace: {
    find: "Localizar",
    replace: "Substituir",
    goto: "Ir para",
    location: "Localização",
    formula: "Fórmula",
    date: "Data",
    number: "Número",
    string: "Texto",
    error: "Erro",
    condition: "Condição",
    rowSpan: "Intervalo de linhas",
    columnSpan: "Intervalo de colunas",
    locationExample: "Localização",
    lessTwoRowTip: "Selecione pelo menos duas linhas",
    lessTwoColumnTip: "Selecione pelo menos duas colunas",
    findTextbox: "Conteúdo a localizar",
    replaceTextbox: "Conteúdo de substituição",
    regexTextbox: "Expressão regular",
    wholeTextbox: "Palavra inteira",
    distinguishTextbox: "Distinguir maiúsculas/minúsculas",
    allReplaceBtn: "Substituir tudo",
    replaceBtn: "Substituir",
    allFindBtn: "Localizar tudo",
    findBtn: "Localizar seguinte",
    noFindTip: "O conteúdo não foi encontrado",
    modeTip: "Esta operação não está disponível neste modo",
    searchTargetSheet: "Folha",
    searchTargetCell: "Célula",
    searchTargetValue: "Valor",
    searchInputTip: "Introduza o conteúdo da pesquisa",
    noReplceTip: "Não há nada para substituir",
    noMatchTip: "Nenhuma correspondência encontrada",
    successTip: "${xlength} item(ns) encontrados",
    locationConstant: "Constante",
    locationFormula: "Fórmula",
    locationDate: "Data",
    locationDigital: "Número",
    locationString: "Texto",
    locationBool: "Lógico",
    locationError: "Erro",
    locationNull: "Nulo",
    locationCondition: "Formatação condicional",
    locationRowSpan: "Intervalo de linhas",
    locationColumnSpan: "Intervalo de colunas",
    locationTiplessTwoRow: "Selecione pelo menos duas linhas",
    locationTiplessTwoColumn: "Selecione pelo menos duas colunas",
    locationTipNotFindCell: "Célula não encontrada"
  },
  sheetconfig: {
    delete: "Eliminar",
    copy: "Copiar",
    rename: "Mudar nome",
    changeColor: "Alterar cor",
    hide: "Ocultar",
    unhide: "Mostrar",
    moveLeft: "Mover para a esquerda",
    moveRight: "Mover para a direita",
    resetColor: "Repor cor",
    cancelText: "Cancelar",
    chooseText: "Confirmar cor",
    focus: "Foco",
    tipNameRepeat: "O nome da aba não pode ser repetido! Corrija-o",
    noMoreSheet: "O livro deve conter pelo menos uma folha visível. Para eliminar a folha selecionada, insira uma nova folha ou mostre uma folha oculta.",
    confirmDelete: "Tem a certeza de que pretende eliminar",
    redoDelete: "Pode ser anulado com Ctrl+Z",
    noHide: "Não é possível ocultar; mantenha pelo menos uma aba de folha",
    chartEditNoOpt: "Esta operação não é permitida no modo de edição de gráfico!",
    sheetNameSpecCharError: "O nome não pode conter: [ ] : ? * / ' \"",
    sheetNamecannotIsEmptyError: "O nome da folha não pode estar vazio"
  },
  conditionformat: {
    conditionformat_greaterThan: "Formatação condicional - Maior que",
    conditionformat_greaterThan_title: "Formatar células maiores que",
    conditionformat_lessThan: "Formatação condicional - Menor que",
    conditionformat_lessThan_title: "Formatar células menores que",
    conditionformat_between: "Formatação condicional - Entre",
    conditionformat_between_title: "Formatar células com valores entre",
    conditionformat_equal: "Formatação condicional - Igual",
    conditionformat_equal_title: "Formatar células iguais a",
    conditionformat_textContains: "Formatação condicional - Texto contém",
    conditionformat_textContains_title: "Formatar células que contêm o seguinte texto",
    conditionformat_occurrenceDate: "Formatação condicional - Data",
    conditionformat_occurrenceDate_title: "Formatar células que contêm as seguintes datas",
    conditionformat_duplicateValue: "Formatação condicional - Valor duplicado",
    conditionformat_duplicateValue_title: "Formatar células que contêm os seguintes tipos de valores",
    conditionformat_top10: "Formatação condicional - Top 10",
    conditionformat_top10_percent: "Formatação condicional - Top 10%",
    conditionformat_top10_title: "Formatar as células com os maiores valores",
    conditionformat_last10: "Formatação condicional - Últimos 10",
    conditionformat_last10_percent: "Formatação condicional - Últimos 10%",
    conditionformat_last10_title: "Formatar as células com os menores valores",
    conditionformat_aboveAverage: "Formatação condicional - Acima da média",
    conditionformat_aboveAverage_title: "Formatar células acima da média",
    conditionformat_belowAverage: "Formatação condicional - Abaixo da média",
    conditionformat_belowAverage_title: "Formatar células abaixo da média",
    rule: "Regra",
    newRule: "Nova regra",
    editRule: "Editar regra",
    deleteRule: "Eliminar regra",
    deleteCellRule: "Eliminar regra da célula",
    deleteSheetRule: "Eliminar regra da folha",
    manageRules: "Gerir regras",
    showRules: "Mostrar as regras de formatação",
    highlightCellRules: "Regras de realce de células",
    itemSelectionRules: "Regras de seleção de itens",
    conditionformatManageRules: "Gestor de regras de formatação condicional",
    format: "Formato",
    setFormat: "Definir formato",
    setAs: "Definir como",
    setAsByArea: "Para a área selecionada, definir como",
    applyRange: "Aplicar intervalo",
    selectRange: "Selecionar intervalo de aplicação",
    selectRange_percent: "Percentagem do intervalo selecionado",
    selectRange_average: "Valor médio do intervalo selecionado",
    selectRange_value: "Valor no intervalo selecionado",
    pleaseSelectRange: "Selecione o intervalo de aplicação",
    selectDataRange: "Selecionar intervalo de dados",
    selectCell: "selecionar célula",
    pleaseSelectCell: "Selecione a célula",
    pleaseSelectADate: "Selecione uma data",
    pleaseEnterInteger: "Introduza um inteiro entre 1 e 1000",
    onlySingleCell: "Só é possível referenciar uma única célula",
    conditionValueCanOnly: "O valor da condição só pode ser um número ou uma única célula",
    ruleTypeItem1: "Formatar todas as células com base nos respetivos valores",
    ruleTypeItem2: "Formatar apenas células que contêm",
    ruleTypeItem2_title: "Apenas para células que cumprem as seguintes condições",
    ruleTypeItem3: "Formatar apenas os valores superiores ou inferiores",
    ruleTypeItem3_title: "O valor está na seguinte classificação",
    ruleTypeItem4: "Formatar apenas valores acima ou abaixo da média",
    ruleTypeItem4_title: "É um valor que satisfaz as seguintes condições",
    ruleTypeItem5: "Formatar apenas valores únicos ou repetidos",
    ruleTypeItem6: "Usar fórmulas para determinar quais células formatar",
    formula: "Fórmula",
    textColor: "Cor do texto",
    cellColor: "Cor da célula",
    confirm: "Confirmar",
    confirmColor: "Confirmar cor",
    cancel: "Cancelar",
    close: "Fechar",
    clearColorSelect: "Limpar seleção de cor",
    sheet: "Folha",
    currentSheet: "Folha atual",
    dataBar: "barra de dados",
    dataBarColor: "cor da barra de dados",
    gradientDataBar_1: "Azul-branco gradiente barra de dados",
    gradientDataBar_2: "Verde-branco gradiente barra de dados",
    gradientDataBar_3: "Vermelho-branco gradiente barra de dados",
    gradientDataBar_4: "Barras gradientes laranja-branco",
    gradientDataBar_5: "Barras gradientes azul claro-branco",
    gradientDataBar_6: "Roxo-branco gradiente barra de dados",
    solidColorDataBar_1: "Azul barra de dados",
    solidColorDataBar_2: "Verde barra de dados",
    solidColorDataBar_3: "Vermelho barra de dados",
    solidColorDataBar_4: "Laranja barra de dados",
    solidColorDataBar_5: "Light Azul barra de dados",
    solidColorDataBar_6: "Roxo barra de dados",
    colorGradation: "gradação de cor",
    colorGradation_1: "Verde-Amarelo-Vermelho gradação de cor",
    colorGradation_2: "Vermelho-Amarelo-Verde gradação de cor",
    colorGradation_3: "Verde-Branco-Vermelho gradação de cor",
    colorGradation_4: "Vermelho-Branco-Verde gradação de cor",
    colorGradation_5: "Azul-Branco-Vermelho gradação de cor",
    colorGradation_6: "Vermelho-Branco-Azul gradação de cor",
    colorGradation_7: "Branco-Vermelho gradação de cor",
    colorGradation_8: "Vermelho-Branco gradação de cor",
    colorGradation_9: "Verde-Branco gradação de cor",
    colorGradation_10: "Branco-Verde gradação de cor",
    colorGradation_11: "Verde-Amarelo gradação de cor",
    colorGradation_12: "Amarelo-Verde gradação de cor",
    icons: "ícones",
    pleaseSelectIcon: "Clique para selecionar um grupo de ícones:",
    cellValue: "Valor da célula",
    specificText: "Texto específico",
    occurrenceDate: "Data",
    greaterThan: "Maior que",
    lessThan: "Menor que",
    between: "Entre",
    equal: "Igual",
    in: "Em",
    between2: "",
    contain: "Contém",
    textContains: "Texto contém",
    duplicateValue: "Valor duplicado",
    uniqueValue: "Valor único",
    top: "Superior",
    top10: "Top 10",
    top10_percent: "Top 10%",
    last: "Inferior",
    last10: "Últimos 10",
    last10_percent: "Últimos 10%",
    oneself: "",
    above: "Acima",
    aboveAverage: "Acima da média",
    below: "Abaixo",
    belowAverage: "Abaixo da média",
    all: "Tudo",
    yesterday: "Ontem",
    today: "Hoje",
    tomorrow: "Amanhã",
    lastWeek: "Semana passada",
    thisWeek: "Esta semana",
    lastMonth: "Mês passado",
    thisMonth: "Este mês",
    lastYear: "Ano passado",
    thisYear: "Este ano",
    last7days: "Últimos 7 dias",
    last30days: "Últimos 30 dias",
    next7days: "Próximos 7 dias",
    next30days: "Próximos 30 dias",
    next60days: "Próximos 60 dias",
    chooseRuleType: "Escolher tipo de regra",
    editRuleDescription: "Editar descrição da regra",
    newFormatRule: "Nova regra de formatação",
    editFormatRule: "Editar regra de formatação",
    formatStyle: "Estilo",
    fillType: "Preenchimento",
    color: "Cor",
    twocolor: "Duas cores",
    tricolor: "Três cores",
    multicolor: "Multicor",
    grayColor: "Cor cinzenta",
    gradient: "Gradiente",
    solid: "Sólido",
    maxValue: "Valor máximo",
    medianValue: "Valor mediano",
    minValue: "Valor mínimo",
    direction: "Direção",
    threeWayArrow: "Seta de três direções",
    fourWayArrow: "Seta de quatro direções",
    fiveWayArrow: "Seta de cinco direções",
    threeTriangles: "Três triângulos",
    shape: "Forma",
    threeColorTrafficLight: "Semáforo de três cores",
    fourColorTrafficLight: "Semáforo de quatro cores",
    threeSigns: "Três sinais",
    greenRedBlackGradient: "Gradiente verde-vermelho-preto",
    rimless: "Sem borda",
    bordered: "Com borda",
    mark: "Marca",
    threeSymbols: "Três símbolos",
    tricolorFlag: "Bandeira tricolor",
    circled: "Com círculo",
    noCircle: "Sem círculo",
    grade: "Grau",
    grade4: "4 níveis",
    grade5: "5 níveis",
    threeStars: "3 estrelas",
    fiveQuadrantDiagram: "Diagrama de cinco quadrantes",
    fiveBoxes: "5 caixas"
  },
  insertLink: {
    linkText: "Texto apresentado",
    linkType: "Tipo de ligação",
    linkAddress: "Endereço da ligação",
    linkSheet: "Folha de cálculo",
    linkCell: "Intervalo de células",
    linkTooltip: "Dica",
    selectCellRange: "Selecionar intervalo de células",
    cellRangePlaceholder: "Selecione células com o cursor ou introduza diretamente",
    placeholder1: "Introduza o endereço da ligação Web",
    placeholder2: "Introduza a célula a referenciar, exemplo A1",
    placeholder3: "Introduza o conteúdo da dica",
    tooltipInfo1: "Introduza uma ligação válida",
    invalidCellRangeTip: "Introduza o intervalo de células correto, como Folha1!A1:C8",
    openLink: "Abrir ligação",
    goTo: "Ir para ${linkAddress}"
  },
  linkTypeList: [
    {
      text: "Páginas Web",
      value: "webpage"
    },
    {
      text: "Intervalo de células",
      value: "cellrange"
    },
    {
      text: "Folha",
      value: "sheet"
    }
  ],
  dataVerification: {
    cellRange: "Intervalo de células",
    selectCellRange: "Clique para selecionar um intervalo de células",
    selectCellRange2: "Selecione um intervalo de células",
    verificationCondition: "Condição de validação",
    allowMultiSelect: "Permitir seleção múltipla",
    dropdown: "lista pendente",
    checkbox: "Caixa de seleção",
    number: "Número",
    number_integer: "Número inteiro",
    number_decimal: "Número decimal",
    text_content: "Conteúdo de texto",
    text_length: "Comprimento do texto",
    date: "Data",
    validity: "Validade",
    placeholder1: "Introduza as opções separadas por vírgulas, por exemplo 1,2,3,4,5",
    placeholder2: "Introduza o conteúdo",
    placeholder3: "Valor numérico, por exemplo 10",
    placeholder4: "Introduza o texto especificado",
    placeholder5: "Introduza a mensagem apresentada quando a célula é selecionada",
    selected: "Selecionado",
    notSelected: "Não selecionado",
    between: "Entre",
    notBetween: "Não entre",
    equal: "Igual",
    notEqualTo: "Diferente de",
    moreThanThe: "Maior que",
    lessThan: "Menor que",
    greaterOrEqualTo: "Maior ou igual a",
    lessThanOrEqualTo: "Menor ou igual a",
    include: "Incluir",
    exclude: "Excluir",
    earlierThan: "Anterior a",
    noEarlierThan: "Não anterior a",
    laterThan: "Posterior a",
    noLaterThan: "Não posterior a",
    identificationNumber: "Número de identificação",
    phoneNumber: "Número de telefone",
    remote: "Aquisição remota automática de opções",
    prohibitInput: "Proibir entrada quando os dados forem inválidos",
    hintShow: "Mostrar mensagem quando a célula for selecionada",
    deleteVerification: "Eliminar validação",
    tooltipInfo1: "A opção da lista pendente não pode estar vazia",
    tooltipInfo2: "O conteúdo da checkbox não pode estar vazio",
    tooltipInfo3: "O valor introduzido não é numérico",
    tooltipInfo4: "O valor 2 não pode ser menor que o valor 1",
    tooltipInfo5: "O conteúdo de texto não pode estar vazio",
    tooltipInfo6: "O valor introduzido não é uma data",
    tooltipInfo7: "A data 2 não pode ser anterior à data 1",
    textlengthInteger: "O comprimento do texto deve ser um inteiro maior ou igual a 0"
  },
  formula: {
    sum: "Soma",
    average: "Média",
    count: "Contagem",
    max: "Max",
    min: "Min",
    ifGenerate: "Gerador de fórmula IF",
    find: "Saiba mais",
    tipNotBelongToIf: "Esta função de célula não pertence à fórmula IF!",
    tipSelectCell: "Selecione a célula para inserir a função",
    ifGenCompareValueTitle: "Valor de comparação",
    ifGenSelectCellTitle: "Clique para selecionar a célula",
    ifGenRangeTitle: "Intervalo",
    ifGenRangeTo: "até",
    ifGenRangeEvaluate: "Avaliação do intervalo",
    ifGenSelectRangeTitle: "Clique para selecionar o intervalo",
    ifGenCutWay: "Modo de divisão",
    ifGenCutSame: "Mesmo valor de divisão",
    ifGenCutNpiece: "Dividir em N partes",
    ifGenCutCustom: "Personalizado",
    ifGenCutConfirm: "Confirmar",
    ifGenTipSelectCell: "Selecionar células",
    ifGenTipSelectCellPlace: "Selecione células",
    ifGenTipSelectRange: "Selecionar intervalo",
    ifGenTipSelectRangePlace: "Selecione o intervalo",
    ifGenTipNotNullValue: "O valor de comparação não pode estar vazio!",
    ifGenTipLableTitile: "Etiqueta",
    ifGenTipRangeNotforNull: "O intervalo não pode estar vazio!",
    ifGenTipCutValueNotforNull: "O valor de divisão não pode estar vazio!",
    ifGenTipNotGenCondition: "Não há condições disponíveis para gerar!"
  },
  formulaMore: {
    valueTitle: "Valor",
    tipSelectDataRange: "Selecionar intervalo de dados",
    tipDataRangeTile: "Intervalo de dados",
    findFunctionTitle: "Pesquisar função",
    tipInputFunctionName: "Nome da função ou breve descrição",
    Array: "Matriz",
    Database: "Base de dados",
    Date: "Data",
    Engineering: "Engenharia",
    Filter: "Filtro",
    Financial: "Financeiro",
    luckysheet: "Luckysheet",
    other: "Outro",
    Logical: "Lógico",
    Lookup: "Pesquisa",
    Math: "Matemática",
    Operator: "Operador",
    Parser: "Parser",
    Statistical: "Estatística",
    Text: "Texto",
    dataMining: "Mineração de dados",
    selectFunctionTitle: "Selecionar uma função",
    calculationResult: "Resultado",
    tipSuccessText: "Sucesso",
    tipParamErrorText: "Erro de tipo de parâmetro",
    helpClose: "Fechar",
    helpCollapse: "Recolher",
    helpExample: "Exemplo",
    helpAbstract: "Resumo",
    execfunctionError: "Erro na fórmula",
    execfunctionSelfError: "A fórmula não pode referir a própria célula",
    execfunctionSelfErrorResult: "A fórmula não pode referir a própria célula, pois isso gera resultados de cálculo imprecisos",
    allowRepeatText: "Repetível",
    allowOptionText: "Opcional",
    selectCategory: "Ou selecione uma categoria"
  },
  drag: {
    noMerge: "Não é possível executar esta operação em células unidas",
    affectPivot: "Esta alteração não pode ser feita na célula selecionada porque afetará a tabela dinâmica!",
    noMulti: "Não é possível executar esta operação em várias áreas selecionadas. Selecione uma única área",
    noPaste: "Não é possível colar este conteúdo aqui. Selecione uma célula na área de colagem e tente novamente",
    noPartMerge: "Não é possível executar esta operação em células parcialmente unidas",
    inputCorrect: "Introduza o valor correto",
    notLessOne: "O número de linhas e colunas não pode ser inferior a 1",
    offsetColumnLessZero: "O deslocamento da coluna não pode ser negativo!",
    pasteMustKeybordAlert: "Na folha de cálculo, use Ctrl + C para copiar, Ctrl + V para colar, Ctrl + X para cortar",
    pasteMustKeybordAlertHTMLTitle: "Na folha de cálculo, para copiar e colar",
    pasteMustKeybordAlertHTML: "<span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + C</span>&nbsp;&nbsp;para copiar<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + V</span>&nbsp;&nbsp;para colar<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + X</span>&nbsp;&nbsp;para cortar"
  },
  pivotTable: {
    title: "Tabela dinâmica",
    closePannel: "Fechar",
    editRange: "Intervalo",
    tipPivotFieldSelected: "Selecionar os campos",
    tipClearSelectedField: "Limpar todos os campos",
    btnClearSelectedField: "Limpar",
    btnFilter: "Filtrar",
    titleRow: "Linha",
    titleColumn: "Coluna",
    titleValue: "Valor",
    tipShowColumn: "Os campos estatísticos são apresentados como colunas",
    tipShowRow: "Os campos estatísticos são apresentados como linhas",
    titleSelectionDataRange: "Selecionar intervalo",
    titleDataRange: "Intervalo de dados",
    valueSum: "SOMA",
    valueStatisticsSUM: "Soma",
    valueStatisticsCOUNT: "Contagem",
    valueStatisticsCOUNTA: "Contagem A",
    valueStatisticsCOUNTUNIQUE: "Contagem única",
    valueStatisticsAVERAGE: "Média",
    valueStatisticsMAX: "Máx.",
    valueStatisticsMIN: "Mín.",
    valueStatisticsMEDIAN: "Mediana",
    valueStatisticsPRODUCT: "Produto",
    valueStatisticsSTDEV: "Desvio padrão",
    valueStatisticsSTDEVP: "Desvio padrão população",
    valueStatisticslet: "Var",
    valueStatisticsVARP: "VarP",
    errorNotAllowEdit: "Esta operação é proibida em modo sem edição!",
    errorNotAllowMulti: "Não é possível executar esta operação em várias áreas selecionadas. Selecione um único intervalo e tente novamente",
    errorSelectRange: "Selecione o intervalo da nova tabela dinâmica",
    errorIsDamage: "Os dados de origem desta tabela dinâmica estão danificados!",
    errorNotAllowPivotData: "Não é possível selecionar uma tabela dinâmica como dados de origem!",
    errorSelectionRange: "Falha na seleção, intervalo de entrada incorreto!",
    errorIncreaseRange: "Expanda o intervalo selecionado!",
    titleAddColumn: "Adicionar coluna à tabela dinâmica",
    titleMoveColumn: "Mover a coluna para a caixa branca abaixo",
    titleClearColumnFilter: "Limpar o filtro desta coluna",
    titleFilterColumn: "Filtro",
    titleSort: "Ordenar",
    titleNoSort: "Sem ordenação",
    titleSortAsc: "ASC",
    titleSortDesc: "DESC",
    titleSortBy: "Ordenar por",
    titleShowSum: "Mostrar total",
    titleStasticTrue: "Sim",
    titleStasticFalse: "Não"
  },
  dropCell: {
    copyCell: "Copiar",
    sequence: "Sequência",
    onlyFormat: "Apenas formato",
    noFormat: "Sem formato",
    day: "Dia",
    workDay: "Dia útil",
    month: "Mês",
    year: "Ano",
    chineseNumber: "Números chineses"
  },
  imageCtrl: {
    borderTile: "Cor da borda da imagem",
    borderCur: "Cor"
  },
  protection: {
    protectiontTitle: "Proteção",
    enterPassword: "Introduza uma palavra-passe (opcional)",
    enterHintTitle: "Mensagem quando a edição é proibida (opcional)",
    enterHint: "A célula ou o gráfico que está a tentar alterar está numa folha protegida. Para alterar, desproteja a folha. Pode ser necessário introduzir uma palavra-passe",
    swichProtectionTip: "Proteger a folha e o conteúdo das células bloqueadas",
    authorityTitle: "Permitir aos utilizadores desta folha:",
    selectLockedCells: "Selecionar células bloqueadas",
    selectunLockedCells: "Selecionar células desbloqueadas",
    formatCells: "Formatar células",
    formatColumns: "Formatar colunas",
    formatRows: "Formatar linhas",
    insertColumns: "Inserir colunas",
    insertRows: "Inserir linhas",
    insertHyperlinks: "Inserir hiperligações",
    deleteColumns: "Eliminar colunas",
    deleteRows: "Eliminar linhas",
    sort: "Ordenar",
    filter: "Filtrar",
    usePivotTablereports: "Usar relatórios de tabela dinâmica",
    editObjects: "Editar objetos",
    editScenarios: "Editar cenários",
    allowRangeTitle: "Permitir aos utilizadores do intervalo:",
    allowRangeAdd: "Novo...",
    allowRangeAddTitle: "Título",
    allowRangeAddSqrf: "Referência",
    selectCellRange: "Clique para selecionar um intervalo de células",
    selectCellRangeHolder: "Intervalo de células",
    allowRangeAddTitlePassword: "Palavra-passe",
    allowRangeAddTitleHint: "Mensagem",
    allowRangeAddTitleHintTitle: "Mensagem quando uma palavra-passe é definida (opcional)",
    allowRangeAddtitleDefault: "Introduza o nome do intervalo",
    rangeItemDblclick: "Duplo clique para editar",
    rangeItemHasPassword: "Tem palavra-passe",
    rangeItemErrorTitleNull: "O título está vazio",
    rangeItemErrorRangeNull: "A referência está vazia",
    rangeItemErrorRange: "A referência contém erro",
    validationTitle: "Validação da palavra-passe",
    validationTips: "É necessário introduzir uma palavra-passe para desproteger a folha",
    validationInputHint: "Introduza uma palavra-passe",
    checkPasswordNullalert: "A palavra-passe é obrigatória!",
    checkPasswordWrongalert: "Palavra-passe incorreta, tente novamente!",
    checkPasswordSucceedalert: "Desbloqueio efetuado!",
    defaultRangeHintText: "A célula está protegida por palavra-passe.",
    defaultSheetHintText: "A célula ou o gráfico está numa folha protegida. Para fazer alterações, desproteja a folha. Pode ser necessário introduzir uma palavra-passe"
  },
  cellFormat: {
    cellFormatTitle: "Formatar células",
    protection: "Proteção",
    locked: "Bloqueado",
    hidden: "Oculto",
    protectionTips: "Para bloquear células ou ocultar fórmulas, proteja a folha. Na barra de ferramentas, clique no botão Proteger folha",
    tipsPart: "Parcialmente selecionado",
    tipsAll: "Tudo selecionado",
    selectionIsNullAlert: "A seleção é obrigatória!",
    sheetDataIsNullAlert: "erro, não há dados!"
  },
  print: {
    normalBtn: "Normal",
    layoutBtn: "Esquema de página",
    pageBtn: "Pré-visualização das quebras de página",
    menuItemPrint: "Imprimir (Ctrl+P)",
    menuItemAreas: "Áreas de impressão",
    menuItemRows: "Imprimir linhas de título",
    menuItemColumns: "Imprimir colunas de título"
  },
  edit: {
    typing: "a escrever"
  },
  websocket: {
    success: "Ligação WebSocket bem-sucedida",
    refresh: "Ocorreu um erro na ligação WebSocket. Atualize a página!",
    wait: "Ocorreu um erro na ligação WebSocket. Aguarde!",
    close: "Ligação WebSocket fechada",
    contact: "Ocorreu um erro de comunicação com o servidor. Atualize a página e tente novamente; se não resultar, contacte o administrador!",
    support: "O navegador atual não suporta WebSocket"
  },
  custom: {
    lockCells: "Bloquear células",
    unlockCells: "Desbloquear células",
    toggleSheetProtection: "Proteger / Desproteger livro",
    toggleGridLines: "Mostrar / ocultar grelha",
    customNumberFormat: {
      menuItem: "Formato numérico personalizado…",
      title: "Formatos numéricos personalizados",
      formatLabel: "Código de formato",
      inputPlaceholder: "Por exemplo: # ##0,00",
      apply: "Aplicar",
      cancel: "Cancelar",
      close: "Fechar",
      preview: "Pré-visualização",
      presets: "Formatos sugeridos",
      selection: "Seleção",
      help: "Guia de formatos",
      helpTitle: "Como funcionam os códigos de formato",
      helpZero: "0 apresenta sempre um algarismo, incluindo um zero inicial ou final.",
      helpHash: "# apresenta um algarismo apenas quando é significativo.",
      helpDecimal: "{separator} indica a posição decimal no código de formato.",
      helpGrouping: "{separator} adiciona o agrupamento de algarismos.",
      groupingSpace: "Um espaço adiciona o agrupamento de algarismos.",
      helpSections: "; separa as secções de positivos, negativos, zeros e texto.",
      normalizedHint: "O formato será guardado como {format}.",
      errors: {
        required: "Introduza um código de formato.",
        tooLong: "O código de formato é demasiado longo.",
        tooManySections: "Um formato pode conter no máximo quatro secções.",
        missingPlaceholder: "Adicione pelo menos um marcador numérico: 0, # ou ?.",
        invalid: "Este código de formato não é válido."
      }
    },
    standaloneMenu: {
      menuBarLabel: "Menus DocCells",
      file: "Ficheiro",
      edit: "Editar",
      view: "Ver",
      insert: "Inserir",
      data: "Dados",
      tools: "Ferramentas",
      open: "Abrir",
      export: "Exportar",
      show: "Mostrar",
      gridlines: "Grelha"
    },
    conditionalFormatting: {
      toolbar: "Formatação condicional",
      title: "Formatação condicional",
      activeSheet: "Folha ativa",
      appliedRules: "Regras aplicadas",
      noRules: "Não há regras para esta folha.",
      editRule: "Editar regra",
      newRule: "Nova regra",
      applyTo: "Aplicar a",
      condition: "Condição",
      compareTo: "Comparar com",
      minValue: "Valor mínimo",
      maxValue: "Valor máximo",
      cell: "Célula",
      sameRowColumn: "Coluna da mesma linha",
      text: "Texto",
      value: "Valor",
      textColor: "Texto",
      backgroundColor: "Preenchimento",
      style: "Estilo",
      preview: "Pré-visualização da célula",
      close: "Fechar",
      reset: "Nova",
      save: "Guardar",
      add: "Adicionar",
      edit: "Editar",
      delete: "Eliminar",
      none: "Nenhum",
      sample: "Aa",
      textPlaceholder: "atraso",
      conditions: {
        lessThan: "é menor que",
        greaterThan: "é maior que",
        equal: "é igual a",
        notEqual: "é diferente de",
        between: "está entre",
        textContains: "contém texto"
      },
      compareTypes: {
        value: "um valor fixo",
        cell: "uma célula fixa",
        sameRowColumn: "uma coluna da mesma linha"
      },
      descriptions: {
        cell: "célula",
        between: "célula entre {value1} e {value2}",
        textContains: "texto contém \"{value}\"",
        sameRowColumn: "coluna {reference} na mesma linha",
        fixedCell: "célula {reference}",
        comparison: "célula {operator} {target}"
      },
      errors: {
        range: "O intervalo deve parecer-se com A2:A100.",
        between: "Indique dois valores para a condição entre.",
        text: "Indique o texto a procurar.",
        compareCell: "A célula de comparação deve parecer-se com B1.",
        compareColumn: "A coluna de comparação deve parecer-se com B.",
        compareValue: "Indique um valor de comparação.",
        style: "Escolha pelo menos uma cor ou um estilo."
      },
      styleLabels: {
        bold: "Negrito",
        italic: "Itálico",
        underline: "Sublinhado"
      }
    },
    charts: {
      toolbar: "Inserir gráfico",
      title: "Gráficos",
      defaultTitle: "Gráfico",
      activeSheet: "Folha ativa",
      existingCharts: "Gráficos desta folha",
      noCharts: "Não há gráficos para esta folha.",
      newChart: "Novo gráfico",
      editChart: "Editar gráfico",
      chartTitle: "Título",
      type: "Tipo",
      range: "Dados",
      labels: "Etiquetas",
      labelReference: "Referência",
      labelColumnReference: "Letra da coluna",
      labelRowReference: "Número da linha",
      values: "Mostrar valores",
      legend: "Mostrar legenda",
      color: "Cor",
      xAxis: "Mostrar etiquetas do eixo X",
      yAxis: "Mostrar etiquetas do eixo Y",
      gridlines: "Mostrar grelha",
      displayOptions: "Visualização",
      preview: "Pré-visualização",
      close: "Fechar",
      reset: "Novo",
      add: "Adicionar",
      save: "Guardar",
      edit: "Editar",
      delete: "Eliminar",
      types: {
        bar: "Barras",
        line: "Linha",
        scatter: "Dispersão",
        pie: "Setores"
      },
      labelTypes: {
        none: "Sem etiquetas",
        sameRowColumn: "Coluna da mesma linha",
        sameColumnRow: "Linha das mesmas colunas",
        range: "Intervalo personalizado"
      },
      errors: {
        range: "O intervalo deve parecer-se com A1:B5.",
        dataColumn: "O intervalo de dados deve ser uma única linha ou uma única coluna de valores.",
        labelColumn: "A coluna de etiquetas deve parecer-se com B.",
        labelRow: "A linha de etiquetas deve parecer-se com 2.",
        labelRange: "O intervalo de etiquetas deve parecer-se com B3:B24.",
        labelRangeSize: "O intervalo de etiquetas deve ter o mesmo número de valores que os dados.",
        title: "Adicione um título curto ao gráfico."
      }
    }
  }
};
