module.exports = {
  generalDialog: {
    partiallyError: "Αυτή η ενέργεια δεν μπορεί να εκτελεστεί σε μερικώς συγχωνευμένα κελιά",
    readOnlyError: "Αυτή η ενέργεια δεν μπορεί να εκτελεστεί σε λειτουργία μόνο για ανάγνωση",
    dataNullError: "Αυτή η ενέργεια δεν μπορεί να εκτελεστεί σε δεδομένα που δεν υπάρχουν",
    noSeletionError: "Δεν έχει γίνει ακόμη επιλογή",
    cannotSelectMultiple: "Δεν είναι δυνατή η πολλαπλή επιλογή"
  },
  functionlist: [
    {
      n: "SUMIF",
      t: 0,
      d: "Περιγραφή της συνάρτησης SUMIF.",
      a: "Σύνοψη της συνάρτησης SUMIF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "εύρος",
          detail: "Παράμετρος `εύρος` της συνάρτησης SUMIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "κριτήριο",
          detail: "Παράμετρος `κριτήριο` της συνάρτησης SUMIF.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "εύρος_άθροισης",
          detail: "Παράμετρος `εύρος_άθροισης` της συνάρτησης SUMIF.",
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
      d: "Περιγραφή της συνάρτησης TAN.",
      a: "Σύνοψη της συνάρτησης TAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "γωνία",
          detail: "Παράμετρος `γωνία` της συνάρτησης TAN.",
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
      d: "Περιγραφή της συνάρτησης TANH.",
      a: "Σύνοψη της συνάρτησης TANH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης TANH.",
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
      d: "Περιγραφή της συνάρτησης CEILING.",
      a: "Σύνοψη της συνάρτησης CEILING.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης CEILING.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "συντελεστής",
          detail: "Παράμετρος `συντελεστής` της συνάρτησης CEILING.",
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
      d: "Περιγραφή της συνάρτησης ATAN.",
      a: "Σύνοψη της συνάρτησης ATAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ATAN.",
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
      d: "Περιγραφή της συνάρτησης ASINH.",
      a: "Σύνοψη της συνάρτησης ASINH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ASINH.",
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
      d: "Περιγραφή της συνάρτησης ABS.",
      a: "Σύνοψη της συνάρτησης ABS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ABS.",
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
      d: "Περιγραφή της συνάρτησης ACOS.",
      a: "Σύνοψη της συνάρτησης ACOS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ACOS.",
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
      d: "Περιγραφή της συνάρτησης ACOSH.",
      a: "Σύνοψη της συνάρτησης ACOSH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ACOSH.",
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
      d: "Περιγραφή της συνάρτησης MULTINOMIAL.",
      a: "Σύνοψη της συνάρτησης MULTINOMIAL.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης MULTINOMIAL.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης MULTINOMIAL.",
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
      d: "Περιγραφή της συνάρτησης ATANH.",
      a: "Σύνοψη της συνάρτησης ATANH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ATANH.",
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
      d: "Περιγραφή της συνάρτησης ATAN2.",
      a: "Σύνοψη της συνάρτησης ATAN2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης ATAN2.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "y",
          detail: "Παράμετρος `y` της συνάρτησης ATAN2.",
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
      d: "Περιγραφή της συνάρτησης COUNTBLANK.",
      a: "Σύνοψη της συνάρτησης COUNTBLANK.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης COUNTBLANK.",
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
      d: "Περιγραφή της συνάρτησης COSH.",
      a: "Σύνοψη της συνάρτησης COSH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης COSH.",
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
      d: "Περιγραφή της συνάρτησης INT.",
      a: "Σύνοψη της συνάρτησης INT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης INT.",
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
      d: "Περιγραφή της συνάρτησης ISEVEN.",
      a: "Σύνοψη της συνάρτησης ISEVEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ISEVEN.",
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
      d: "Περιγραφή της συνάρτησης ISODD.",
      a: "Σύνοψη της συνάρτησης ISODD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ISODD.",
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
      d: "Περιγραφή της συνάρτησης LCM.",
      a: "Σύνοψη της συνάρτησης LCM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης LCM.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης LCM.",
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
      d: "Περιγραφή της συνάρτησης LN.",
      a: "Σύνοψη της συνάρτησης LN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης LN.",
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
      d: "Περιγραφή της συνάρτησης LOG.",
      a: "Σύνοψη της συνάρτησης LOG.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης LOG.",
          example: "128",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "βάση",
          detail: "Παράμετρος `βάση` της συνάρτησης LOG.",
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
      d: "Περιγραφή της συνάρτησης LOG10.",
      a: "Σύνοψη της συνάρτησης LOG10.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης LOG10.",
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
      d: "Περιγραφή της συνάρτησης MOD.",
      a: "Σύνοψη της συνάρτησης MOD.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "διαιρετέος",
          detail: "Παράμετρος `διαιρετέος` της συνάρτησης MOD.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "διαιρέτης",
          detail: "Παράμετρος `διαιρέτης` της συνάρτησης MOD.",
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
      d: "Περιγραφή της συνάρτησης MROUND.",
      a: "Σύνοψη της συνάρτησης MROUND.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης MROUND.",
          example: "21",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "συντελεστής",
          detail: "Παράμετρος `συντελεστής` της συνάρτησης MROUND.",
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
      d: "Περιγραφή της συνάρτησης ODD.",
      a: "Σύνοψη της συνάρτησης ODD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ODD.",
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
      d: "Περιγραφή της συνάρτησης SUMSQ.",
      a: "Σύνοψη της συνάρτησης SUMSQ.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης SUMSQ.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης SUMSQ.",
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
      d: "Περιγραφή της συνάρτησης COMBIN.",
      a: "Σύνοψη της συνάρτησης COMBIN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "Παράμετρος `n` της συνάρτησης COMBIN.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Παράμετρος `k` της συνάρτησης COMBIN.",
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
      d: "Περιγραφή της συνάρτησης SUM.",
      a: "Σύνοψη της συνάρτησης SUM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης SUM.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης SUM.",
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
      d: "Περιγραφή της συνάρτησης SUBTOTAL.",
      a: "Σύνοψη της συνάρτησης SUBTOTAL.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "κωδικός_συνάρτησης",
          detail: "Παράμετρος `κωδικός_συνάρτησης` της συνάρτησης SUBTOTAL.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "εύρος1",
          detail: "Παράμετρος `εύρος1` της συνάρτησης SUBTOTAL.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "εύρος2",
          detail: "Παράμετρος `εύρος2` της συνάρτησης SUBTOTAL.",
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
      d: "Περιγραφή της συνάρτησης ASIN.",
      a: "Σύνοψη της συνάρτησης ASIN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ASIN.",
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
      d: "Περιγραφή της συνάρτησης COUNTIF.",
      a: "Σύνοψη της συνάρτησης COUNTIF.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "εύρος",
          detail: "Παράμετρος `εύρος` της συνάρτησης COUNTIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "κριτήριο",
          detail: "Παράμετρος `κριτήριο` της συνάρτησης COUNTIF.",
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
      d: "Περιγραφή της συνάρτησης RADIANS.",
      a: "Σύνοψη της συνάρτησης RADIANS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "γωνία",
          detail: "Παράμετρος `γωνία` της συνάρτησης RADIANS.",
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
      d: "Περιγραφή της συνάρτησης RAND.",
      a: "Σύνοψη της συνάρτησης RAND.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "COUNTUNIQUE",
      t: 0,
      d: "Περιγραφή της συνάρτησης COUNTUNIQUE.",
      a: "Σύνοψη της συνάρτησης COUNTUNIQUE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης COUNTUNIQUE.",
          example: "A1:C100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης COUNTUNIQUE.",
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
      d: "Περιγραφή της συνάρτησης DEGREES.",
      a: "Σύνοψη της συνάρτησης DEGREES.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "γωνία",
          detail: "Παράμετρος `γωνία` της συνάρτησης DEGREES.",
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
      d: "Περιγραφή της συνάρτησης ERFC.",
      a: "Σύνοψη της συνάρτησης ERFC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "z",
          detail: "Παράμετρος `z` της συνάρτησης ERFC.",
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
      d: "Περιγραφή της συνάρτησης EVEN.",
      a: "Σύνοψη της συνάρτησης EVEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης EVEN.",
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
      d: "Περιγραφή της συνάρτησης EXP.",
      a: "Σύνοψη της συνάρτησης EXP.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "εκθέτης",
          detail: "Παράμετρος `εκθέτης` της συνάρτησης EXP.",
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
      d: "Περιγραφή της συνάρτησης FACT.",
      a: "Σύνοψη της συνάρτησης FACT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης FACT.",
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
      d: "Περιγραφή της συνάρτησης FACTDOUBLE.",
      a: "Σύνοψη της συνάρτησης FACTDOUBLE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης FACTDOUBLE.",
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
      d: "Περιγραφή της συνάρτησης PI.",
      a: "Σύνοψη της συνάρτησης PI.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FLOOR",
      t: 0,
      d: "Περιγραφή της συνάρτησης FLOOR.",
      a: "Σύνοψη της συνάρτησης FLOOR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης FLOOR.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "συντελεστής",
          detail: "Παράμετρος `συντελεστής` της συνάρτησης FLOOR.",
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
      d: "Περιγραφή της συνάρτησης GCD.",
      a: "Σύνοψη της συνάρτησης GCD.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης GCD.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης GCD.",
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
      d: "Περιγραφή της συνάρτησης RANDBETWEEN.",
      a: "Σύνοψη της συνάρτησης RANDBETWEEN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "κάτω_όριο",
          detail: "Παράμετρος `κάτω_όριο` της συνάρτησης RANDBETWEEN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "άνω_όριο",
          detail: "Παράμετρος `άνω_όριο` της συνάρτησης RANDBETWEEN.",
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
      d: "Περιγραφή της συνάρτησης ROUND.",
      a: "Σύνοψη της συνάρτησης ROUND.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ROUND.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεκαδικά_ψηφία",
          detail: "Παράμετρος `δεκαδικά_ψηφία` της συνάρτησης ROUND.",
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
      d: "Περιγραφή της συνάρτησης ROUNDDOWN.",
      a: "Σύνοψη της συνάρτησης ROUNDDOWN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ROUNDDOWN.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεκαδικά_ψηφία",
          detail: "Παράμετρος `δεκαδικά_ψηφία` της συνάρτησης ROUNDDOWN.",
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
      d: "Περιγραφή της συνάρτησης ROUNDUP.",
      a: "Σύνοψη της συνάρτησης ROUNDUP.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ROUNDUP.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεκαδικά_ψηφία",
          detail: "Παράμετρος `δεκαδικά_ψηφία` της συνάρτησης ROUNDUP.",
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
      d: "Περιγραφή της συνάρτησης SERIESSUM.",
      a: "Σύνοψη της συνάρτησης SERIESSUM.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης SERIESSUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "Παράμετρος `n` της συνάρτησης SERIESSUM.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "m",
          detail: "Παράμετρος `m` της συνάρτησης SERIESSUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a",
          detail: "Παράμετρος `a` της συνάρτησης SERIESSUM.",
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
      d: "Περιγραφή της συνάρτησης SIGN.",
      a: "Σύνοψη της συνάρτησης SIGN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης SIGN.",
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
      d: "Περιγραφή της συνάρτησης SIN.",
      a: "Σύνοψη της συνάρτησης SIN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "γωνία",
          detail: "Παράμετρος `γωνία` της συνάρτησης SIN.",
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
      d: "Περιγραφή της συνάρτησης SINH.",
      a: "Σύνοψη της συνάρτησης SINH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης SINH.",
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
      d: "Περιγραφή της συνάρτησης SQRT.",
      a: "Σύνοψη της συνάρτησης SQRT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης SQRT.",
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
      d: "Περιγραφή της συνάρτησης SQRTPI.",
      a: "Σύνοψη της συνάρτησης SQRTPI.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης SQRTPI.",
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
      d: "Περιγραφή της συνάρτησης GAMMALN.",
      a: "Σύνοψη της συνάρτησης GAMMALN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης GAMMALN.",
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
      d: "Περιγραφή της συνάρτησης COS.",
      a: "Σύνοψη της συνάρτησης COS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "γωνία",
          detail: "Παράμετρος `γωνία` της συνάρτησης COS.",
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
      d: "Περιγραφή της συνάρτησης TRUNC.",
      a: "Σύνοψη της συνάρτησης TRUNC.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης TRUNC.",
          example: "3.141592654",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεκαδικά_ψηφία",
          detail: "Παράμετρος `δεκαδικά_ψηφία` της συνάρτησης TRUNC.",
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
      d: "Περιγραφή της συνάρτησης QUOTIENT.",
      a: "Σύνοψη της συνάρτησης QUOTIENT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "διαιρετέος",
          detail: "Παράμετρος `διαιρετέος` της συνάρτησης QUOTIENT.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "διαιρέτης",
          detail: "Παράμετρος `διαιρέτης` της συνάρτησης QUOTIENT.",
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
      d: "Περιγραφή της συνάρτησης POWER.",
      a: "Σύνοψη της συνάρτησης POWER.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "βάση",
          detail: "Παράμετρος `βάση` της συνάρτησης POWER.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "εκθέτης",
          detail: "Παράμετρος `εκθέτης` της συνάρτησης POWER.",
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
      d: "Περιγραφή της συνάρτησης SUMIFS.",
      a: "Σύνοψη της συνάρτησης SUMIFS.",
      m: [
        3,
        257
      ],
      p: [
        {
          name: "εύρος_άθροισης",
          detail: "Παράμετρος `εύρος_άθροισης` της συνάρτησης SUMIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "εύρος_κριτηρίων1",
          detail: "Παράμετρος `εύρος_κριτηρίων1` της συνάρτησης SUMIFS.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "κριτήριο1",
          detail: "Παράμετρος `κριτήριο1` της συνάρτησης SUMIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "εύρος_κριτηρίων2",
          detail: "Παράμετρος `εύρος_κριτηρίων2` της συνάρτησης SUMIFS.",
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
      d: "Περιγραφή της συνάρτησης COUNTIFS.",
      a: "Σύνοψη της συνάρτησης COUNTIFS.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "εύρος_κριτηρίων1",
          detail: "Παράμετρος `εύρος_κριτηρίων1` της συνάρτησης COUNTIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "κριτήριο1",
          detail: "Παράμετρος `κριτήριο1` της συνάρτησης COUNTIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "εύρος_κριτηρίων2",
          detail: "Παράμετρος `εύρος_κριτηρίων2` της συνάρτησης COUNTIFS.",
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
      d: "Περιγραφή της συνάρτησης PRODUCT.",
      a: "Σύνοψη της συνάρτησης PRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "συντελεστής1",
          detail: "Παράμετρος `συντελεστής1` της συνάρτησης PRODUCT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "συντελεστής2",
          detail: "Παράμετρος `συντελεστής2` της συνάρτησης PRODUCT.",
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
      d: "Περιγραφή της συνάρτησης HARMEAN.",
      a: "Σύνοψη της συνάρτησης HARMEAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης HARMEAN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης HARMEAN.",
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
      d: "Περιγραφή της συνάρτησης HYPGEOMDIST.",
      a: "Σύνοψη της συνάρτησης HYPGEOMDIST.",
      m: [
        5,
        5
      ],
      p: [
        {
          name: "αριθμός_επιτυχιών",
          detail: "Παράμετρος `αριθμός_επιτυχιών` της συνάρτησης HYPGEOMDIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός_δοκιμών",
          detail: "Παράμετρος `αριθμός_δοκιμών` της συνάρτησης HYPGEOMDIST.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "επιτυχίες_στον_πληθυσμό",
          detail: "Παράμετρος `επιτυχίες_στον_πληθυσμό` της συνάρτησης HYPGEOMDIST.",
          example: "20",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μέγεθος_πληθυσμού",
          detail: "Παράμετρος `μέγεθος_πληθυσμού` της συνάρτησης HYPGEOMDIST.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αθροιστικό",
          detail: "Παράμετρος `αθροιστικό` της συνάρτησης HYPGEOMDIST.",
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
      d: "Περιγραφή της συνάρτησης INTERCEPT.",
      a: "Σύνοψη της συνάρτησης INTERCEPT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα_y",
          detail: "Παράμετρος `δεδομένα_y` της συνάρτησης INTERCEPT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεδομένα_x",
          detail: "Παράμετρος `δεδομένα_x` της συνάρτησης INTERCEPT.",
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
      d: "Περιγραφή της συνάρτησης KURT.",
      a: "Σύνοψη της συνάρτησης KURT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης KURT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης KURT.",
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
      d: "Περιγραφή της συνάρτησης LARGE.",
      a: "Σύνοψη της συνάρτησης LARGE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα",
          detail: "Παράμετρος `δεδομένα` της συνάρτησης LARGE.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "Παράμετρος `n` της συνάρτησης LARGE.",
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
      d: "Περιγραφή της συνάρτησης STDEVA.",
      a: "Σύνοψη της συνάρτησης STDEVA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης STDEVA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης STDEVA.",
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
      d: "Περιγραφή της συνάρτησης STDEVP.",
      a: "Σύνοψη της συνάρτησης STDEVP.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης STDEVP.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης STDEVP.",
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
      d: "Περιγραφή της συνάρτησης GEOMEAN.",
      a: "Σύνοψη της συνάρτησης GEOMEAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης GEOMEAN.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης GEOMEAN.",
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
      d: "Περιγραφή της συνάρτησης RANK_EQ.",
      a: "Σύνοψη της συνάρτησης RANK_EQ.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης RANK_EQ.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεδομένα",
          detail: "Παράμετρος `δεδομένα` της συνάρτησης RANK_EQ.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "είναι_αύξουσα",
          detail: "Παράμετρος `είναι_αύξουσα` της συνάρτησης RANK_EQ.",
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
      d: "Περιγραφή της συνάρτησης RANK_AVG.",
      a: "Σύνοψη της συνάρτησης RANK_AVG.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης RANK_AVG.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεδομένα",
          detail: "Παράμετρος `δεδομένα` της συνάρτησης RANK_AVG.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "είναι_αύξουσα",
          detail: "Παράμετρος `είναι_αύξουσα` της συνάρτησης RANK_AVG.",
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
      d: "Περιγραφή της συνάρτησης PERCENTRANK_EXC.",
      a: "Σύνοψη της συνάρτησης PERCENTRANK_EXC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "δεδομένα",
          detail: "Παράμετρος `δεδομένα` της συνάρτησης PERCENTRANK_EXC.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης PERCENTRANK_EXC.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σημαντικά_ψηφία",
          detail: "Παράμετρος `σημαντικά_ψηφία` της συνάρτησης PERCENTRANK_EXC.",
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
      d: "Περιγραφή της συνάρτησης PERCENTRANK_INC.",
      a: "Σύνοψη της συνάρτησης PERCENTRANK_INC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "δεδομένα",
          detail: "Παράμετρος `δεδομένα` της συνάρτησης PERCENTRANK_INC.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης PERCENTRANK_INC.",
          example: " A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σημαντικά_ψηφία",
          detail: "Παράμετρος `σημαντικά_ψηφία` της συνάρτησης PERCENTRANK_INC.",
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
      d: "Περιγραφή της συνάρτησης FORECAST.",
      a: "Σύνοψη της συνάρτησης FORECAST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης FORECAST.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεδομένα_y",
          detail: "Παράμετρος `δεδομένα_y` της συνάρτησης FORECAST.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεδομένα_x",
          detail: "Παράμετρος `δεδομένα_x` της συνάρτησης FORECAST.",
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
      d: "Περιγραφή της συνάρτησης FISHERINV.",
      a: "Σύνοψη της συνάρτησης FISHERINV.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης FISHERINV.",
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
      d: "Περιγραφή της συνάρτησης FISHER.",
      a: "Σύνοψη της συνάρτησης FISHER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης FISHER.",
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
      d: "Περιγραφή της συνάρτησης MODE_SNGL.",
      a: "Σύνοψη της συνάρτησης MODE_SNGL.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης MODE_SNGL.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης MODE_SNGL.",
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
      d: "Περιγραφή της συνάρτησης WEIBULL_DIST.",
      a: "Σύνοψη της συνάρτησης WEIBULL_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης WEIBULL_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σχήμα",
          detail: "Παράμετρος `σχήμα` της συνάρτησης WEIBULL_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "κλίμακα",
          detail: "Παράμετρος `κλίμακα` της συνάρτησης WEIBULL_DIST.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αθροιστικό",
          detail: "Παράμετρος `αθροιστικό` της συνάρτησης WEIBULL_DIST.",
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
      d: "Περιγραφή της συνάρτησης COUNT.",
      a: "Σύνοψη της συνάρτησης COUNT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης COUNT.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης COUNT.",
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
      d: "Περιγραφή της συνάρτησης COUNTA.",
      a: "Σύνοψη της συνάρτησης COUNTA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης COUNTA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης COUNTA.",
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
      d: "Περιγραφή της συνάρτησης AVEDEV.",
      a: "Σύνοψη της συνάρτησης AVEDEV.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης AVEDEV.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης AVEDEV.",
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
      d: "Περιγραφή της συνάρτησης AVERAGE.",
      a: "Σύνοψη της συνάρτησης AVERAGE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης AVERAGE.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης AVERAGE.",
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
      d: "Περιγραφή της συνάρτησης AVERAGEA.",
      a: "Σύνοψη της συνάρτησης AVERAGEA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης AVERAGEA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης AVERAGEA.",
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
      d: "Περιγραφή της συνάρτησης BINOM_DIST.",
      a: "Σύνοψη της συνάρτησης BINOM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "αριθμός_επιτυχιών",
          detail: "Παράμετρος `αριθμός_επιτυχιών` της συνάρτησης BINOM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός_δοκιμών",
          detail: "Παράμετρος `αριθμός_δοκιμών` της συνάρτησης BINOM_DIST.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "πιθανότητα_επιτυχίας",
          detail: "Παράμετρος `πιθανότητα_επιτυχίας` της συνάρτησης BINOM_DIST.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αθροιστικό",
          detail: "Παράμετρος `αθροιστικό` της συνάρτησης BINOM_DIST.",
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
      d: "Περιγραφή της συνάρτησης BINOM_INV.",
      a: "Σύνοψη της συνάρτησης BINOM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "αριθμός_δοκιμών",
          detail: "Παράμετρος `αριθμός_δοκιμών` της συνάρτησης BINOM_INV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "πιθανότητα_επιτυχίας",
          detail: "Παράμετρος `πιθανότητα_επιτυχίας` της συνάρτησης BINOM_INV.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "πιθανότητα_στόχου",
          detail: "Παράμετρος `πιθανότητα_στόχου` της συνάρτησης BINOM_INV.",
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
      d: "Περιγραφή της συνάρτησης CONFIDENCE_NORM.",
      a: "Σύνοψη της συνάρτησης CONFIDENCE_NORM.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "άλφα",
          detail: "Παράμετρος `άλφα` της συνάρτησης CONFIDENCE_NORM.",
          example: "0.05",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τυπική_απόκλιση",
          detail: "Παράμετρος `τυπική_απόκλιση` της συνάρτησης CONFIDENCE_NORM.",
          example: "1.6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μέγεθος_πληθυσμού",
          detail: "Παράμετρος `μέγεθος_πληθυσμού` της συνάρτησης CONFIDENCE_NORM.",
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
      d: "Περιγραφή της συνάρτησης CORREL.",
      a: "Σύνοψη της συνάρτησης CORREL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα_y",
          detail: "Παράμετρος `δεδομένα_y` της συνάρτησης CORREL.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεδομένα_x",
          detail: "Παράμετρος `δεδομένα_x` της συνάρτησης CORREL.",
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
      d: "Περιγραφή της συνάρτησης COVARIANCE_P.",
      a: "Σύνοψη της συνάρτησης COVARIANCE_P.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα_y",
          detail: "Παράμετρος `δεδομένα_y` της συνάρτησης COVARIANCE_P.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεδομένα_x",
          detail: "Παράμετρος `δεδομένα_x` της συνάρτησης COVARIANCE_P.",
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
      d: "Περιγραφή της συνάρτησης COVARIANCE_S.",
      a: "Σύνοψη της συνάρτησης COVARIANCE_S.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα_y",
          detail: "Παράμετρος `δεδομένα_y` της συνάρτησης COVARIANCE_S.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεδομένα_x",
          detail: "Παράμετρος `δεδομένα_x` της συνάρτησης COVARIANCE_S.",
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
      d: "Περιγραφή της συνάρτησης DEVSQ.",
      a: "Σύνοψη της συνάρτησης DEVSQ.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης DEVSQ.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης DEVSQ.",
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
      d: "Περιγραφή της συνάρτησης EXPON_DIST.",
      a: "Σύνοψη της συνάρτησης EXPON_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης EXPON_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "λάμδα",
          detail: "Παράμετρος `λάμδα` της συνάρτησης EXPON_DIST.",
          example: "0.5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αθροιστικό",
          detail: "Παράμετρος `αθροιστικό` της συνάρτησης EXPON_DIST.",
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
      d: "Περιγραφή της συνάρτησης AVERAGEIF.",
      a: "Σύνοψη της συνάρτησης AVERAGEIF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "εύρος_κριτηρίων",
          detail: "Παράμετρος `εύρος_κριτηρίων` της συνάρτησης AVERAGEIF.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κριτήριο",
          detail: "Παράμετρος `κριτήριο` της συνάρτησης AVERAGEIF.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "εύρος_μέσου_όρου",
          detail: "Παράμετρος `εύρος_μέσου_όρου` της συνάρτησης AVERAGEIF.",
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
      d: "Περιγραφή της συνάρτησης AVERAGEIFS.",
      a: "Σύνοψη της συνάρτησης AVERAGEIFS.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "εύρος_μέσου_όρου",
          detail: "Παράμετρος `εύρος_μέσου_όρου` της συνάρτησης AVERAGEIFS.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "εύρος_κριτηρίων1",
          detail: "Παράμετρος `εύρος_κριτηρίων1` της συνάρτησης AVERAGEIFS.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κριτήριο1",
          detail: "Παράμετρος `κριτήριο1` της συνάρτησης AVERAGEIFS.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "εύρος_κριτηρίων2",
          detail: "Παράμετρος `εύρος_κριτηρίων2` της συνάρτησης AVERAGEIFS.",
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
      d: "Περιγραφή της συνάρτησης PERMUT.",
      a: "Σύνοψη της συνάρτησης PERMUT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "Παράμετρος `n` της συνάρτησης PERMUT.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Παράμετρος `k` της συνάρτησης PERMUT.",
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
      d: "Περιγραφή της συνάρτησης TRIMMEAN.",
      a: "Σύνοψη της συνάρτησης TRIMMEAN.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα",
          detail: "Παράμετρος `δεδομένα` της συνάρτησης TRIMMEAN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "αποκλειόμενη_αναλογία",
          detail: "Παράμετρος `αποκλειόμενη_αναλογία` της συνάρτησης TRIMMEAN.",
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
      d: "Περιγραφή της συνάρτησης PERCENTILE_EXC.",
      a: "Σύνοψη της συνάρτησης PERCENTILE_EXC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα",
          detail: "Παράμετρος `δεδομένα` της συνάρτησης PERCENTILE_EXC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "εκατοστημόριο",
          detail: "Παράμετρος `εκατοστημόριο` της συνάρτησης PERCENTILE_EXC.",
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
      d: "Περιγραφή της συνάρτησης PERCENTILE_INC.",
      a: "Σύνοψη της συνάρτησης PERCENTILE_INC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα",
          detail: "Παράμετρος `δεδομένα` της συνάρτησης PERCENTILE_INC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "εκατοστημόριο",
          detail: "Παράμετρος `εκατοστημόριο` της συνάρτησης PERCENTILE_INC.",
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
      d: "Περιγραφή της συνάρτησης PEARSON.",
      a: "Σύνοψη της συνάρτησης PEARSON.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα_y",
          detail: "Παράμετρος `δεδομένα_y` της συνάρτησης PEARSON.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεδομένα_x",
          detail: "Παράμετρος `δεδομένα_x` της συνάρτησης PEARSON.",
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
      d: "Περιγραφή της συνάρτησης NORM_S_INV.",
      a: "Σύνοψη της συνάρτησης NORM_S_INV.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης NORM_S_INV.",
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
      d: "Περιγραφή της συνάρτησης NORM_S_DIST.",
      a: "Σύνοψη της συνάρτησης NORM_S_DIST.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης NORM_S_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αθροιστικό",
          detail: "Παράμετρος `αθροιστικό` της συνάρτησης NORM_S_DIST.",
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
      d: "Περιγραφή της συνάρτησης NORM_INV.",
      a: "Σύνοψη της συνάρτησης NORM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης NORM_INV.",
          example: "0.75",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μέση_τιμή",
          detail: "Παράμετρος `μέση_τιμή` της συνάρτησης NORM_INV.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τυπική_απόκλιση",
          detail: "Παράμετρος `τυπική_απόκλιση` της συνάρτησης NORM_INV.",
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
      d: "Περιγραφή της συνάρτησης NORM_DIST.",
      a: "Σύνοψη της συνάρτησης NORM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης NORM_DIST.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μέση_τιμή",
          detail: "Παράμετρος `μέση_τιμή` της συνάρτησης NORM_DIST.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τυπική_απόκλιση",
          detail: "Παράμετρος `τυπική_απόκλιση` της συνάρτησης NORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αθροιστικό",
          detail: "Παράμετρος `αθροιστικό` της συνάρτησης NORM_DIST.",
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
      d: "Περιγραφή της συνάρτησης NEGBINOM_DIST.",
      a: "Σύνοψη της συνάρτησης NEGBINOM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "αριθμός_αποτυχιών",
          detail: "Παράμετρος `αριθμός_αποτυχιών` της συνάρτησης NEGBINOM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός_επιτυχιών",
          detail: "Παράμετρος `αριθμός_επιτυχιών` της συνάρτησης NEGBINOM_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "πιθανότητα_επιτυχίας",
          detail: "Παράμετρος `πιθανότητα_επιτυχίας` της συνάρτησης NEGBINOM_DIST.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αθροιστικό",
          detail: "Παράμετρος `αθροιστικό` της συνάρτησης NEGBINOM_DIST.",
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
      d: "Περιγραφή της συνάρτησης MINA.",
      a: "Σύνοψη της συνάρτησης MINA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης MINA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης MINA.",
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
      d: "Περιγραφή της συνάρτησης MIN.",
      a: "Σύνοψη της συνάρτησης MIN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης MIN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης MIN.",
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
      d: "Περιγραφή της συνάρτησης MEDIAN.",
      a: "Σύνοψη της συνάρτησης MEDIAN.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης MEDIAN.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης MEDIAN.",
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
      d: "Περιγραφή της συνάρτησης MAXA.",
      a: "Σύνοψη της συνάρτησης MAXA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης MAXA.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης MAXA.",
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
      d: "Περιγραφή της συνάρτησης MAX.",
      a: "Σύνοψη της συνάρτησης MAX.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης MAX.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης MAX.",
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
      d: "Περιγραφή της συνάρτησης LOGNORM_INV.",
      a: "Σύνοψη της συνάρτησης LOGNORM_INV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης LOGNORM_INV.",
          example: "0.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μέση_τιμή",
          detail: "Παράμετρος `μέση_τιμή` της συνάρτησης LOGNORM_INV.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τυπική_απόκλιση",
          detail: "Παράμετρος `τυπική_απόκλιση` της συνάρτησης LOGNORM_INV.",
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
      d: "Περιγραφή της συνάρτησης LOGNORM_DIST.",
      a: "Σύνοψη της συνάρτησης LOGNORM_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης LOGNORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μέση_τιμή",
          detail: "Παράμετρος `μέση_τιμή` της συνάρτησης LOGNORM_DIST.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τυπική_απόκλιση",
          detail: "Παράμετρος `τυπική_απόκλιση` της συνάρτησης LOGNORM_DIST.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αθροιστικό",
          detail: "Παράμετρος `αθροιστικό` της συνάρτησης LOGNORM_DIST.",
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
      d: "Περιγραφή της συνάρτησης Z_TEST.",
      a: "Σύνοψη της συνάρτησης Z_TEST.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "δεδομένα",
          detail: "Παράμετρος `δεδομένα` της συνάρτησης Z_TEST.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης Z_TEST.",
          example: "B2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τυπική_απόκλιση",
          detail: "Παράμετρος `τυπική_απόκλιση` της συνάρτησης Z_TEST.",
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
      d: "Περιγραφή της συνάρτησης PROB.",
      a: "Σύνοψη της συνάρτησης PROB.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "δεδομένα",
          detail: "Παράμετρος `δεδομένα` της συνάρτησης PROB.",
          example: "A3:A6",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "πιθανότητες",
          detail: "Παράμετρος `πιθανότητες` της συνάρτησης PROB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "κάτω_όριο",
          detail: "Παράμετρος `κάτω_όριο` της συνάρτησης PROB.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "άνω_όριο",
          detail: "Παράμετρος `άνω_όριο` της συνάρτησης PROB.",
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
      d: "Περιγραφή της συνάρτησης QUARTILE_EXC.",
      a: "Σύνοψη της συνάρτησης QUARTILE_EXC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα",
          detail: "Παράμετρος `δεδομένα` της συνάρτησης QUARTILE_EXC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός_τεταρτημορίου",
          detail: "Παράμετρος `αριθμός_τεταρτημορίου` της συνάρτησης QUARTILE_EXC.",
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
      d: "Περιγραφή της συνάρτησης QUARTILE_INC.",
      a: "Σύνοψη της συνάρτησης QUARTILE_INC.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα",
          detail: "Παράμετρος `δεδομένα` της συνάρτησης QUARTILE_INC.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός_τεταρτημορίου",
          detail: "Παράμετρος `αριθμός_τεταρτημορίου` της συνάρτησης QUARTILE_INC.",
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
      d: "Περιγραφή της συνάρτησης POISSON_DIST.",
      a: "Σύνοψη της συνάρτησης POISSON_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης POISSON_DIST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μέση_τιμή",
          detail: "Παράμετρος `μέση_τιμή` της συνάρτησης POISSON_DIST.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αθροιστικό",
          detail: "Παράμετρος `αθροιστικό` της συνάρτησης POISSON_DIST.",
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
      d: "Περιγραφή της συνάρτησης RSQ.",
      a: "Σύνοψη της συνάρτησης RSQ.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα_y",
          detail: "Παράμετρος `δεδομένα_y` της συνάρτησης RSQ.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεδομένα_x",
          detail: "Παράμετρος `δεδομένα_x` της συνάρτησης RSQ.",
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
      d: "Περιγραφή της συνάρτησης T_DIST.",
      a: "Σύνοψη της συνάρτησης T_DIST.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης T_DIST.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "βαθμοί_ελευθερίας",
          detail: "Παράμετρος `βαθμοί_ελευθερίας` της συνάρτησης T_DIST.",
          example: "30",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αθροιστικό",
          detail: "Παράμετρος `αθροιστικό` της συνάρτησης T_DIST.",
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
      d: "Περιγραφή της συνάρτησης T_DIST_2T.",
      a: "Σύνοψη της συνάρτησης T_DIST_2T.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης T_DIST_2T.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "βαθμοί_ελευθερίας",
          detail: "Παράμετρος `βαθμοί_ελευθερίας` της συνάρτησης T_DIST_2T.",
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
      d: "Περιγραφή της συνάρτησης T_DIST_RT.",
      a: "Σύνοψη της συνάρτησης T_DIST_RT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης T_DIST_RT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "βαθμοί_ελευθερίας",
          detail: "Παράμετρος `βαθμοί_ελευθερίας` της συνάρτησης T_DIST_RT.",
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
      d: "Περιγραφή της συνάρτησης T_INV.",
      a: "Σύνοψη της συνάρτησης T_INV.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "πιθανότητα",
          detail: "Παράμετρος `πιθανότητα` της συνάρτησης T_INV.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "βαθμοί_ελευθερίας",
          detail: "Παράμετρος `βαθμοί_ελευθερίας` της συνάρτησης T_INV.",
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
      d: "Περιγραφή της συνάρτησης T_INV_2T.",
      a: "Σύνοψη της συνάρτησης T_INV_2T.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "πιθανότητα",
          detail: "Παράμετρος `πιθανότητα` της συνάρτησης T_INV_2T.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "βαθμοί_ελευθερίας",
          detail: "Παράμετρος `βαθμοί_ελευθερίας` της συνάρτησης T_INV_2T.",
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
      d: "Περιγραφή της συνάρτησης T_TEST.",
      a: "Σύνοψη της συνάρτησης T_TEST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "εύρος1",
          detail: "Παράμετρος `εύρος1` της συνάρτησης T_TEST.",
          example: "A1:A4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "εύρος2",
          detail: "Παράμετρος `εύρος2` της συνάρτησης T_TEST.",
          example: "B1:B4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ουρές",
          detail: "Παράμετρος `ουρές` της συνάρτησης T_TEST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τύπος",
          detail: "Παράμετρος `τύπος` της συνάρτησης T_TEST.",
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
      d: "Περιγραφή της συνάρτησης F_DIST.",
      a: "Σύνοψη της συνάρτησης F_DIST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης F_DIST.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "βαθμοί_ελευθερίας1",
          detail: "Παράμετρος `βαθμοί_ελευθερίας1` της συνάρτησης F_DIST.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "βαθμοί_ελευθερίας2",
          detail: "Παράμετρος `βαθμοί_ελευθερίας2` της συνάρτησης F_DIST.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αθροιστικό",
          detail: "Παράμετρος `αθροιστικό` της συνάρτησης F_DIST.",
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
      d: "Περιγραφή της συνάρτησης F_DIST_RT.",
      a: "Σύνοψη της συνάρτησης F_DIST_RT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Παράμετρος `x` της συνάρτησης F_DIST_RT.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "βαθμοί_ελευθερίας1",
          detail: "Παράμετρος `βαθμοί_ελευθερίας1` της συνάρτησης F_DIST_RT.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "βαθμοί_ελευθερίας2",
          detail: "Παράμετρος `βαθμοί_ελευθερίας2` της συνάρτησης F_DIST_RT.",
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
      d: "Περιγραφή της συνάρτησης VAR_P.",
      a: "Σύνοψη της συνάρτησης VAR_P.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης VAR_P.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης VAR_P.",
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
      d: "Περιγραφή της συνάρτησης VAR_S.",
      a: "Σύνοψη της συνάρτησης VAR_S.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης VAR_S.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης VAR_S.",
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
      d: "Περιγραφή της συνάρτησης VARA.",
      a: "Σύνοψη της συνάρτησης VARA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης VARA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης VARA.",
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
      d: "Περιγραφή της συνάρτησης VARPA.",
      a: "Σύνοψη της συνάρτησης VARPA.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης VARPA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης VARPA.",
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
      d: "Περιγραφή της συνάρτησης STEYX.",
      a: "Σύνοψη της συνάρτησης STEYX.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα_y",
          detail: "Παράμετρος `δεδομένα_y` της συνάρτησης STEYX.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεδομένα_x",
          detail: "Παράμετρος `δεδομένα_x` της συνάρτησης STEYX.",
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
      d: "Περιγραφή της συνάρτησης STANDARDIZE.",
      a: "Σύνοψη της συνάρτησης STANDARDIZE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης STANDARDIZE.",
          example: "96",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μέση_τιμή",
          detail: "Παράμετρος `μέση_τιμή` της συνάρτησης STANDARDIZE.",
          example: "80",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τυπική_απόκλιση",
          detail: "Παράμετρος `τυπική_απόκλιση` της συνάρτησης STANDARDIZE.",
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
      d: "Περιγραφή της συνάρτησης SMALL.",
      a: "Σύνοψη της συνάρτησης SMALL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα",
          detail: "Παράμετρος `δεδομένα` της συνάρτησης SMALL.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "n",
          detail: "Παράμετρος `n` της συνάρτησης SMALL.",
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
      d: "Περιγραφή της συνάρτησης SLOPE.",
      a: "Σύνοψη της συνάρτησης SLOPE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα_y",
          detail: "Παράμετρος `δεδομένα_y` της συνάρτησης SLOPE.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δεδομένα_x",
          detail: "Παράμετρος `δεδομένα_x` της συνάρτησης SLOPE.",
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
      d: "Περιγραφή της συνάρτησης SKEW.",
      a: "Σύνοψη της συνάρτησης SKEW.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης SKEW.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης SKEW.",
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
      d: "Περιγραφή της συνάρτησης SKEW_P.",
      a: "Σύνοψη της συνάρτησης SKEW_P.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης SKEW_P.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης SKEW_P.",
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
      d: "Περιγραφή της συνάρτησης VLOOKUP.",
      a: "Σύνοψη της συνάρτησης VLOOKUP.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "κλειδί_αναζήτησης",
          detail: "Παράμετρος `κλειδί_αναζήτησης` της συνάρτησης VLOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "εύρος",
          detail: "Παράμετρος `εύρος` της συνάρτησης VLOOKUP.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "δείκτης",
          detail: "Παράμετρος `δείκτης` της συνάρτησης VLOOKUP.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "είναι_ταξινομημένο",
          detail: "Παράμετρος `είναι_ταξινομημένο` της συνάρτησης VLOOKUP.",
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
      d: "Περιγραφή της συνάρτησης HLOOKUP.",
      a: "Σύνοψη της συνάρτησης HLOOKUP.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "κλειδί_αναζήτησης",
          detail: "Παράμετρος `κλειδί_αναζήτησης` της συνάρτησης HLOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "εύρος",
          detail: "Παράμετρος `εύρος` της συνάρτησης HLOOKUP.",
          example: "A2:Z6",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "δείκτης",
          detail: "Παράμετρος `δείκτης` της συνάρτησης HLOOKUP.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "είναι_ταξινομημένο",
          detail: "Παράμετρος `είναι_ταξινομημένο` της συνάρτησης HLOOKUP.",
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
      d: "Περιγραφή της συνάρτησης LOOKUP.",
      a: "Σύνοψη της συνάρτησης LOOKUP.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "κλειδί_αναζήτησης",
          detail: "Παράμετρος `κλειδί_αναζήτησης` της συνάρτησης LOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "εύρος_αναζήτησης|πίνακας_αποτελέσματος_αναζήτησης",
          detail: "Παράμετρος `search_range|search_result_array` της συνάρτησης LOOKUP.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "εύρος_αποτελέσματος",
          detail: "Παράμετρος `εύρος_αποτελέσματος` της συνάρτησης LOOKUP.",
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
      d: "Περιγραφή της συνάρτησης ADDRESS.",
      a: "Σύνοψη της συνάρτησης ADDRESS.",
      m: [
        2,
        5
      ],
      p: [
        {
          name: "γραμμή",
          detail: "Παράμετρος `γραμμή` της συνάρτησης ADDRESS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "στήλη",
          detail: "Παράμετρος `στήλη` της συνάρτησης ADDRESS.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "λειτουργία_απόλυτης_σχετικής",
          detail: "Παράμετρος `λειτουργία_απόλυτης_σχετικής` της συνάρτησης ADDRESS.",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "χρήση_σημειογραφίας_a1",
          detail: "Παράμετρος `χρήση_σημειογραφίας_a1` της συνάρτησης ADDRESS.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "φύλλο",
          detail: "Παράμετρος `φύλλο` της συνάρτησης ADDRESS.",
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
      d: "Περιγραφή της συνάρτησης INDIRECT.",
      a: "Σύνοψη της συνάρτησης INDIRECT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "αναφορά_κελιού_ως_συμβολοσειρά",
          detail: "Παράμετρος `αναφορά_κελιού_ως_συμβολοσειρά` της συνάρτησης INDIRECT.",
          example: "\"Sheet2!\"&B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "είναι_σημειογραφία_a1",
          detail: "Παράμετρος `είναι_σημειογραφία_a1` της συνάρτησης INDIRECT.",
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
      d: "Περιγραφή της συνάρτησης ROW.",
      a: "Σύνοψη της συνάρτησης ROW.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "αναφορά_κελιού",
          detail: "Παράμετρος `αναφορά_κελιού` της συνάρτησης ROW.",
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
      d: "Περιγραφή της συνάρτησης ROWS.",
      a: "Σύνοψη της συνάρτησης ROWS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "εύρος",
          detail: "Παράμετρος `εύρος` της συνάρτησης ROWS.",
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
      d: "Περιγραφή της συνάρτησης COLUMN.",
      a: "Σύνοψη της συνάρτησης COLUMN.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "αναφορά_κελιού",
          detail: "Παράμετρος `αναφορά_κελιού` της συνάρτησης COLUMN.",
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
      d: "Περιγραφή της συνάρτησης COLUMNS.",
      a: "Σύνοψη της συνάρτησης COLUMNS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "εύρος",
          detail: "Παράμετρος `εύρος` της συνάρτησης COLUMNS.",
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
      d: "Περιγραφή της συνάρτησης OFFSET.",
      a: "Σύνοψη της συνάρτησης OFFSET.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "αναφορά_κελιού",
          detail: "Παράμετρος `αναφορά_κελιού` της συνάρτησης OFFSET.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "μετατόπιση_γραμμών",
          detail: "Παράμετρος `μετατόπιση_γραμμών` της συνάρτησης OFFSET.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μετατόπιση_στηλών",
          detail: "Παράμετρος `μετατόπιση_στηλών` της συνάρτησης OFFSET.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ύψος",
          detail: "Παράμετρος `ύψος` της συνάρτησης OFFSET.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "πλάτος",
          detail: "Παράμετρος `πλάτος` της συνάρτησης OFFSET.",
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
      d: "Περιγραφή της συνάρτησης MATCH.",
      a: "Σύνοψη της συνάρτησης MATCH.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "κλειδί_αναζήτησης",
          detail: "Παράμετρος `κλειδί_αναζήτησης` της συνάρτησης MATCH.",
          example: "\"Sunday\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "εύρος",
          detail: "Παράμετρος `εύρος` της συνάρτησης MATCH.",
          example: "A2:A9",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "τύπος_αναζήτησης",
          detail: "Παράμετρος `τύπος_αναζήτησης` της συνάρτησης MATCH.",
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
      d: "Περιγραφή της συνάρτησης INDEX.",
      a: "Σύνοψη της συνάρτησης INDEX.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "αναφορά",
          detail: "Παράμετρος `αναφορά` της συνάρτησης INDEX.",
          example: "A1:C20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "γραμμή",
          detail: "Παράμετρος `γραμμή` της συνάρτησης INDEX.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "στήλη",
          detail: "Παράμετρος `στήλη` της συνάρτησης INDEX.",
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
      d: "Περιγραφή της συνάρτησης GETPIVOTDATA.",
      a: "Σύνοψη της συνάρτησης GETPIVOTDATA.",
      m: [
        2,
        254
      ],
      p: [
        {
          name: "όνομα_τιμής",
          detail: "Παράμετρος `όνομα_τιμής` της συνάρτησης GETPIVOTDATA.",
          example: "\"SUM of number of units\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κελί_συγκεντρωτικού_πίνακα",
          detail: "Παράμετρος `κελί_συγκεντρωτικού_πίνακα` της συνάρτησης GETPIVOTDATA.",
          example: "'Pivot table'!A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αρχική_στήλη",
          detail: "Παράμετρος `αρχική_στήλη` της συνάρτησης GETPIVOTDATA.",
          example: "\"division\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        },
        {
          name: "στοιχείο_συγκεντρωτικού_πίνακα",
          detail: "Παράμετρος `στοιχείο_συγκεντρωτικού_πίνακα` της συνάρτησης GETPIVOTDATA.",
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
      d: "Περιγραφή της συνάρτησης CHOOSE.",
      a: "Σύνοψη της συνάρτησης CHOOSE.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "δείκτης",
          detail: "Παράμετρος `δείκτης` της συνάρτησης CHOOSE.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "επιλογή1",
          detail: "Παράμετρος `επιλογή1` της συνάρτησης CHOOSE.",
          example: "\"A\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "επιλογή2",
          detail: "Παράμετρος `επιλογή2` της συνάρτησης CHOOSE.",
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
      d: "Περιγραφή της συνάρτησης HYPERLINK.",
      a: "Σύνοψη της συνάρτησης HYPERLINK.",
      p: [
        {
          name: "url",
          detail: "Παράμετρος `url` της συνάρτησης HYPERLINK.",
          example: "\"http://www.luckysheet.com/\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ετικέτα_συνδέσμου",
          detail: "Παράμετρος `ετικέτα_συνδέσμου` της συνάρτησης HYPERLINK.",
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
      d: "Περιγραφή της συνάρτησης TIME.",
      a: "Σύνοψη της συνάρτησης TIME.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "ώρα",
          detail: "Παράμετρος `ώρα` της συνάρτησης TIME.",
          example: "11",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "λεπτό",
          detail: "Παράμετρος `λεπτό` της συνάρτησης TIME.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "δευτερόλεπτο",
          detail: "Παράμετρος `δευτερόλεπτο` της συνάρτησης TIME.",
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
      d: "Περιγραφή της συνάρτησης TIMEVALUE.",
      a: "Σύνοψη της συνάρτησης TIMEVALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "συμβολοσειρά_ώρας",
          detail: "Παράμετρος `συμβολοσειρά_ώρας` της συνάρτησης TIMEVALUE.",
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
      d: "Περιγραφή της συνάρτησης EOMONTH.",
      a: "Σύνοψη της συνάρτησης EOMONTH.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "ημερομηνία_έναρξης",
          detail: "Παράμετρος `ημερομηνία_έναρξης` της συνάρτησης EOMONTH.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αριθμός_μηνών",
          detail: "Παράμετρος `αριθμός_μηνών` της συνάρτησης EOMONTH.",
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
      d: "Περιγραφή της συνάρτησης EDATE.",
      a: "Σύνοψη της συνάρτησης EDATE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "ημερομηνία_έναρξης",
          detail: "Παράμετρος `ημερομηνία_έναρξης` της συνάρτησης EDATE.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αριθμός_μηνών",
          detail: "Παράμετρος `αριθμός_μηνών` της συνάρτησης EDATE.",
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
      d: "Περιγραφή της συνάρτησης SECOND.",
      a: "Σύνοψη της συνάρτησης SECOND.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ώρα",
          detail: "Παράμετρος `ώρα` της συνάρτησης SECOND.",
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
      d: "Περιγραφή της συνάρτησης MINUTE.",
      a: "Σύνοψη της συνάρτησης MINUTE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ώρα",
          detail: "Παράμετρος `ώρα` της συνάρτησης MINUTE.",
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
      d: "Περιγραφή της συνάρτησης HOUR.",
      a: "Σύνοψη της συνάρτησης HOUR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ώρα",
          detail: "Παράμετρος `ώρα` της συνάρτησης HOUR.",
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
      d: "Περιγραφή της συνάρτησης NOW.",
      a: "Σύνοψη της συνάρτησης NOW.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "NETWORKDAYS",
      t: 6,
      d: "Περιγραφή της συνάρτησης NETWORKDAYS.",
      a: "Σύνοψη της συνάρτησης NETWORKDAYS.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "ημερομηνία_έναρξης",
          detail: "Παράμετρος `ημερομηνία_έναρξης` της συνάρτησης NETWORKDAYS.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ημερομηνία_λήξης",
          detail: "Παράμετρος `ημερομηνία_λήξης` της συνάρτησης NETWORKDAYS.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αργίες",
          detail: "Παράμετρος `αργίες` της συνάρτησης NETWORKDAYS.",
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
      d: "Περιγραφή της συνάρτησης NETWORKDAYS_INTL.",
      a: "Σύνοψη της συνάρτησης NETWORKDAYS_INTL.",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "ημερομηνία_έναρξης",
          detail: "Παράμετρος `ημερομηνία_έναρξης` της συνάρτησης NETWORKDAYS_INTL.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ημερομηνία_λήξης",
          detail: "Παράμετρος `ημερομηνία_λήξης` της συνάρτησης NETWORKDAYS_INTL.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "σαββατοκύριακο",
          detail: "Παράμετρος `σαββατοκύριακο` της συνάρτησης NETWORKDAYS_INTL.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αργίες",
          detail: "Παράμετρος `αργίες` της συνάρτησης NETWORKDAYS_INTL.",
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
      d: "Περιγραφή της συνάρτησης ISOWEEKNUM.",
      a: "Σύνοψη της συνάρτησης ISOWEEKNUM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ημερομηνία",
          detail: "Παράμετρος `ημερομηνία` της συνάρτησης ISOWEEKNUM.",
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
      d: "Περιγραφή της συνάρτησης WEEKNUM.",
      a: "Σύνοψη της συνάρτησης WEEKNUM.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ημερομηνία",
          detail: "Παράμετρος `ημερομηνία` της συνάρτησης WEEKNUM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τύπος",
          detail: "Παράμετρος `τύπος` της συνάρτησης WEEKNUM.",
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
      d: "Περιγραφή της συνάρτησης WEEKDAY.",
      a: "Σύνοψη της συνάρτησης WEEKDAY.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ημερομηνία",
          detail: "Παράμετρος `ημερομηνία` της συνάρτησης WEEKDAY.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τύπος",
          detail: "Παράμετρος `τύπος` της συνάρτησης WEEKDAY.",
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
      d: "Περιγραφή της συνάρτησης DAY.",
      a: "Σύνοψη της συνάρτησης DAY.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ημερομηνία",
          detail: "Παράμετρος `ημερομηνία` της συνάρτησης DAY.",
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
      d: "Περιγραφή της συνάρτησης DAYS.",
      a: "Σύνοψη της συνάρτησης DAYS.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "ημερομηνία_λήξης",
          detail: "Παράμετρος `ημερομηνία_λήξης` της συνάρτησης DAYS.",
          example: "2011-3-15",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ημερομηνία_έναρξης",
          detail: "Παράμετρος `ημερομηνία_έναρξης` της συνάρτησης DAYS.",
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
      d: "Περιγραφή της συνάρτησης DAYS360.",
      a: "Σύνοψη της συνάρτησης DAYS360.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "ημερομηνία_έναρξης",
          detail: "Παράμετρος `ημερομηνία_έναρξης` της συνάρτησης DAYS360.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ημερομηνία_λήξης",
          detail: "Παράμετρος `ημερομηνία_λήξης` της συνάρτησης DAYS360.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "μέθοδος",
          detail: "Παράμετρος `μέθοδος` της συνάρτησης DAYS360.",
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
      d: "Περιγραφή της συνάρτησης DATE.",
      a: "Σύνοψη της συνάρτησης DATE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "έτος",
          detail: "Παράμετρος `έτος` της συνάρτησης DATE.",
          example: "1969",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μήνας",
          detail: "Παράμετρος `μήνας` της συνάρτησης DATE.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ημέρα",
          detail: "Παράμετρος `ημέρα` της συνάρτησης DATE.",
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
      d: "Περιγραφή της συνάρτησης DATEVALUE.",
      a: "Σύνοψη της συνάρτησης DATEVALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "συμβολοσειρά_ημερομηνίας",
          detail: "Παράμετρος `συμβολοσειρά_ημερομηνίας` της συνάρτησης DATEVALUE.",
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
      d: "Περιγραφή της συνάρτησης DATEDIF.",
      a: "Σύνοψη της συνάρτησης DATEDIF.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "ημερομηνία_έναρξης",
          detail: "Παράμετρος `ημερομηνία_έναρξης` της συνάρτησης DATEDIF.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ημερομηνία_λήξης",
          detail: "Παράμετρος `ημερομηνία_λήξης` της συνάρτησης DATEDIF.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "μονάδα",
          detail: "Παράμετρος `μονάδα` της συνάρτησης DATEDIF.",
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
      d: "Περιγραφή της συνάρτησης WORKDAY.",
      a: "Σύνοψη της συνάρτησης WORKDAY.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "ημερομηνία_έναρξης",
          detail: "Παράμετρος `ημερομηνία_έναρξης` της συνάρτησης WORKDAY.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αριθμός_ημερών",
          detail: "Παράμετρος `αριθμός_ημερών` της συνάρτησης WORKDAY.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αργίες",
          detail: "Παράμετρος `αργίες` της συνάρτησης WORKDAY.",
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
      d: "Περιγραφή της συνάρτησης WORKDAY_INTL.",
      a: "Σύνοψη της συνάρτησης WORKDAY_INTL.",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "ημερομηνία_έναρξης",
          detail: "Παράμετρος `ημερομηνία_έναρξης` της συνάρτησης WORKDAY_INTL.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αριθμός_ημερών",
          detail: "Παράμετρος `αριθμός_ημερών` της συνάρτησης WORKDAY_INTL.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σαββατοκύριακο",
          detail: "Παράμετρος `σαββατοκύριακο` της συνάρτησης WORKDAY_INTL.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αργίες",
          detail: "Παράμετρος `αργίες` της συνάρτησης WORKDAY_INTL.",
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
      d: "Περιγραφή της συνάρτησης YEAR.",
      a: "Σύνοψη της συνάρτησης YEAR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ημερομηνία",
          detail: "Παράμετρος `ημερομηνία` της συνάρτησης YEAR.",
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
      d: "Περιγραφή της συνάρτησης YEARFRAC.",
      a: "Σύνοψη της συνάρτησης YEARFRAC.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "ημερομηνία_έναρξης",
          detail: "Παράμετρος `ημερομηνία_έναρξης` της συνάρτησης YEARFRAC.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ημερομηνία_λήξης",
          detail: "Παράμετρος `ημερομηνία_λήξης` της συνάρτησης YEARFRAC.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης YEARFRAC.",
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
      d: "Περιγραφή της συνάρτησης TODAY.",
      a: "Σύνοψη της συνάρτησης TODAY.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "MONTH",
      t: 6,
      d: "Περιγραφή της συνάρτησης MONTH.",
      a: "Σύνοψη της συνάρτησης MONTH.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ημερομηνία",
          detail: "Παράμετρος `ημερομηνία` της συνάρτησης MONTH.",
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
      d: "Περιγραφή της συνάρτησης EFFECT.",
      a: "Σύνοψη της συνάρτησης EFFECT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "ονομαστικό_επιτόκιο",
          detail: "Παράμετρος `ονομαστικό_επιτόκιο` της συνάρτησης EFFECT.",
          example: "0.99",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "περίοδοι_ανά_έτος",
          detail: "Παράμετρος `περίοδοι_ανά_έτος` της συνάρτησης EFFECT.",
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
      d: "Περιγραφή της συνάρτησης DOLLAR.",
      a: "Σύνοψη της συνάρτησης DOLLAR.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "αριθμός",
          detail: "Παράμετρος `αριθμός` της συνάρτησης DOLLAR.",
          example: "1.2351",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός_δεκαδικών",
          detail: "Παράμετρος `αριθμός_δεκαδικών` της συνάρτησης DOLLAR.",
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
      d: "Περιγραφή της συνάρτησης DOLLARDE.",
      a: "Σύνοψη της συνάρτησης DOLLARDE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "κλασματική_τιμή",
          detail: "Παράμετρος `κλασματική_τιμή` της συνάρτησης DOLLARDE.",
          example: "100.10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μονάδα",
          detail: "Παράμετρος `μονάδα` της συνάρτησης DOLLARDE.",
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
      d: "Περιγραφή της συνάρτησης DOLLARFR.",
      a: "Σύνοψη της συνάρτησης DOLLARFR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεκαδική_τιμή",
          detail: "Παράμετρος `δεκαδική_τιμή` της συνάρτησης DOLLARFR.",
          example: "100.125",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μονάδα",
          detail: "Παράμετρος `μονάδα` της συνάρτησης DOLLARFR.",
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
      d: "Περιγραφή της συνάρτησης DB.",
      a: "Σύνοψη της συνάρτησης DB.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "κόστος",
          detail: "Παράμετρος `κόστος` της συνάρτησης DB.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "υπολειμματική_αξία",
          detail: "Παράμετρος `υπολειμματική_αξία` της συνάρτησης DB.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "διάρκεια_ζωής",
          detail: "Παράμετρος `διάρκεια_ζωής` της συνάρτησης DB.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "περίοδος",
          detail: "Παράμετρος `περίοδος` της συνάρτησης DB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μήνας",
          detail: "Παράμετρος `μήνας` της συνάρτησης DB.",
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
      d: "Περιγραφή της συνάρτησης DDB.",
      a: "Σύνοψη της συνάρτησης DDB.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "κόστος",
          detail: "Παράμετρος `κόστος` της συνάρτησης DDB.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "υπολειμματική_αξία",
          detail: "Παράμετρος `υπολειμματική_αξία` της συνάρτησης DDB.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "διάρκεια_ζωής",
          detail: "Παράμετρος `διάρκεια_ζωής` της συνάρτησης DDB.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "περίοδος",
          detail: "Παράμετρος `περίοδος` της συνάρτησης DDB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "συντελεστής",
          detail: "Παράμετρος `συντελεστής` της συνάρτησης DDB.",
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
      d: "Περιγραφή της συνάρτησης RATE.",
      a: "Σύνοψη της συνάρτησης RATE.",
      m: [
        3,
        6
      ],
      p: [
        {
          name: "αριθμός_περιόδων",
          detail: "Παράμετρος `αριθμός_περιόδων` της συνάρτησης RATE.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "πληρωμή_ανά_περίοδο",
          detail: "Παράμετρος `πληρωμή_ανά_περίοδο` της συνάρτησης RATE.",
          example: "-100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "παρούσα_αξία",
          detail: "Παράμετρος `παρούσα_αξία` της συνάρτησης RATE.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μελλοντική_αξία",
          detail: "Παράμετρος `μελλοντική_αξία` της συνάρτησης RATE.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τέλος_ή_αρχή",
          detail: "Παράμετρος `τέλος_ή_αρχή` της συνάρτησης RATE.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "εκτίμηση_επιτοκίου",
          detail: "Παράμετρος `εκτίμηση_επιτοκίου` της συνάρτησης RATE.",
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
      d: "Περιγραφή της συνάρτησης CUMPRINC.",
      a: "Σύνοψη της συνάρτησης CUMPRINC.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης CUMPRINC.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός_περιόδων",
          detail: "Παράμετρος `αριθμός_περιόδων` της συνάρτησης CUMPRINC.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "παρούσα_αξία",
          detail: "Παράμετρος `παρούσα_αξία` της συνάρτησης CUMPRINC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "πρώτη_περίοδος",
          detail: "Παράμετρος `πρώτη_περίοδος` της συνάρτησης CUMPRINC.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τελευταία_περίοδος",
          detail: "Παράμετρος `τελευταία_περίοδος` της συνάρτησης CUMPRINC.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τέλος_ή_αρχή",
          detail: "Παράμετρος `τέλος_ή_αρχή` της συνάρτησης CUMPRINC.",
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
      d: "Περιγραφή της συνάρτησης COUPNUM.",
      a: "Σύνοψη της συνάρτησης COUPNUM.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης COUPNUM.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης COUPNUM.",
          example: "02",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "συχνότητα",
          detail: "Παράμετρος `συχνότητα` της συνάρτησης COUPNUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης COUPNUM.",
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
      d: "Περιγραφή της συνάρτησης SYD.",
      a: "Σύνοψη της συνάρτησης SYD.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "κόστος",
          detail: "Παράμετρος `κόστος` της συνάρτησης SYD.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "υπολειμματική_αξία",
          detail: "Παράμετρος `υπολειμματική_αξία` της συνάρτησης SYD.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "διάρκεια_ζωής",
          detail: "Παράμετρος `διάρκεια_ζωής` της συνάρτησης SYD.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "περίοδος",
          detail: "Παράμετρος `περίοδος` της συνάρτησης SYD.",
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
      d: "Περιγραφή της συνάρτησης TBILLEQ.",
      a: "Σύνοψη της συνάρτησης TBILLEQ.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης TBILLEQ.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης TBILLEQ.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "προεξοφλητικό_επιτόκιο",
          detail: "Παράμετρος `προεξοφλητικό_επιτόκιο` της συνάρτησης TBILLEQ.",
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
      d: "Περιγραφή της συνάρτησης TBILLYIELD.",
      a: "Σύνοψη της συνάρτησης TBILLYIELD.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης TBILLYIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης TBILLYIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης TBILLYIELD.",
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
      d: "Περιγραφή της συνάρτησης TBILLPRICE.",
      a: "Σύνοψη της συνάρτησης TBILLPRICE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης TBILLPRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης TBILLPRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "προεξοφλητικό_επιτόκιο",
          detail: "Παράμετρος `προεξοφλητικό_επιτόκιο` της συνάρτησης TBILLPRICE.",
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
      d: "Περιγραφή της συνάρτησης PV.",
      a: "Σύνοψη της συνάρτησης PV.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης PV.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός_περιόδων",
          detail: "Παράμετρος `αριθμός_περιόδων` της συνάρτησης PV.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ποσό_πληρωμής",
          detail: "Παράμετρος `ποσό_πληρωμής` της συνάρτησης PV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μελλοντική_αξία",
          detail: "Παράμετρος `μελλοντική_αξία` της συνάρτησης PV.",
          example: "D2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τέλος_ή_αρχή",
          detail: "Παράμετρος `τέλος_ή_αρχή` της συνάρτησης PV.",
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
      d: "Περιγραφή της συνάρτησης ACCRINT.",
      a: "Σύνοψη της συνάρτησης ACCRINT.",
      m: [
        6,
        8
      ],
      p: [
        {
          name: "ημερομηνία_έκδοσης",
          detail: "Παράμετρος `ημερομηνία_έκδοσης` της συνάρτησης ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "πρώτη_πληρωμή",
          detail: "Παράμετρος `πρώτη_πληρωμή` της συνάρτησης ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης ACCRINT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αξία_εξόφλησης",
          detail: "Παράμετρος `αξία_εξόφλησης` της συνάρτησης ACCRINT.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "συχνότητα",
          detail: "Παράμετρος `συχνότητα` της συνάρτησης ACCRINT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης ACCRINT.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μέθοδος_υπολογισμού",
          detail: "Παράμετρος `μέθοδος_υπολογισμού` της συνάρτησης ACCRINT.",
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
      d: "Περιγραφή της συνάρτησης ACCRINTM.",
      a: "Σύνοψη της συνάρτησης ACCRINTM.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "ημερομηνία_έκδοσης",
          detail: "Παράμετρος `ημερομηνία_έκδοσης` της συνάρτησης ACCRINTM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης ACCRINTM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης ACCRINTM.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αξία_εξόφλησης",
          detail: "Παράμετρος `αξία_εξόφλησης` της συνάρτησης ACCRINTM.",
          example: "1000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης ACCRINTM.",
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
      d: "Περιγραφή της συνάρτησης COUPDAYBS.",
      a: "Σύνοψη της συνάρτησης COUPDAYBS.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης COUPDAYBS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης COUPDAYBS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "συχνότητα",
          detail: "Παράμετρος `συχνότητα` της συνάρτησης COUPDAYBS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης COUPDAYBS.",
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
      d: "Περιγραφή της συνάρτησης COUPDAYS.",
      a: "Σύνοψη της συνάρτησης COUPDAYS.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης COUPDAYS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης COUPDAYS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "συχνότητα",
          detail: "Παράμετρος `συχνότητα` της συνάρτησης COUPDAYS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης COUPDAYS.",
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
      d: "Περιγραφή της συνάρτησης COUPDAYSNC.",
      a: "Σύνοψη της συνάρτησης COUPDAYSNC.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης COUPDAYSNC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης COUPDAYSNC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "συχνότητα",
          detail: "Παράμετρος `συχνότητα` της συνάρτησης COUPDAYSNC.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης COUPDAYSNC.",
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
      d: "Περιγραφή της συνάρτησης COUPNCD.",
      a: "Σύνοψη της συνάρτησης COUPNCD.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης COUPNCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης COUPNCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "συχνότητα",
          detail: "Παράμετρος `συχνότητα` της συνάρτησης COUPNCD.",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης COUPNCD.",
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
      d: "Περιγραφή της συνάρτησης COUPPCD.",
      a: "Σύνοψη της συνάρτησης COUPPCD.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης COUPPCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης COUPPCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "συχνότητα",
          detail: "Παράμετρος `συχνότητα` της συνάρτησης COUPPCD.",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης COUPPCD.",
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
      d: "Περιγραφή της συνάρτησης FV.",
      a: "Σύνοψη της συνάρτησης FV.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης FV.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός_περιόδων",
          detail: "Παράμετρος `αριθμός_περιόδων` της συνάρτησης FV.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ποσό_πληρωμής",
          detail: "Παράμετρος `ποσό_πληρωμής` της συνάρτησης FV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "παρούσα_αξία",
          detail: "Παράμετρος `παρούσα_αξία` της συνάρτησης FV.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τέλος_ή_αρχή",
          detail: "Παράμετρος `τέλος_ή_αρχή` της συνάρτησης FV.",
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
      d: "Περιγραφή της συνάρτησης FVSCHEDULE.",
      a: "Σύνοψη της συνάρτησης FVSCHEDULE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "κεφάλαιο",
          detail: "Παράμετρος `κεφάλαιο` της συνάρτησης FVSCHEDULE.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "πίνακας_επιτοκίων",
          detail: "Παράμετρος `πίνακας_επιτοκίων` της συνάρτησης FVSCHEDULE.",
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
      d: "Περιγραφή της συνάρτησης YIELD.",
      a: "Σύνοψη της συνάρτησης YIELD.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης YIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης YIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης YIELD.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης YIELD.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αξία_εξόφλησης",
          detail: "Παράμετρος `αξία_εξόφλησης` της συνάρτησης YIELD.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "συχνότητα",
          detail: "Παράμετρος `συχνότητα` της συνάρτησης YIELD.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης YIELD.",
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
      d: "Περιγραφή της συνάρτησης YIELDDISC.",
      a: "Σύνοψη της συνάρτησης YIELDDISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης YIELDDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης YIELDDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης YIELDDISC.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αξία_εξόφλησης",
          detail: "Παράμετρος `αξία_εξόφλησης` της συνάρτησης YIELDDISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης YIELDDISC.",
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
      d: "Περιγραφή της συνάρτησης NOMINAL.",
      a: "Σύνοψη της συνάρτησης NOMINAL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "πραγματικό_επιτόκιο",
          detail: "Παράμετρος `πραγματικό_επιτόκιο` της συνάρτησης NOMINAL.",
          example: "0.85",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "περίοδοι_ανά_έτος",
          detail: "Παράμετρος `περίοδοι_ανά_έτος` της συνάρτησης NOMINAL.",
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
      d: "Περιγραφή της συνάρτησης XIRR.",
      a: "Σύνοψη της συνάρτησης XIRR.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "ποσά_ταμειακών_ροών",
          detail: "Παράμετρος `ποσά_ταμειακών_ροών` της συνάρτησης XIRR.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "ημερομηνίες_ταμειακών_ροών",
          detail: "Παράμετρος `ημερομηνίες_ταμειακών_ροών` της συνάρτησης XIRR.",
          example: "C2:C25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "εκτίμηση_επιτοκίου",
          detail: "Παράμετρος `εκτίμηση_επιτοκίου` της συνάρτησης XIRR.",
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
      d: "Περιγραφή της συνάρτησης MIRR.",
      a: "Σύνοψη της συνάρτησης MIRR.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "ποσά_ταμειακών_ροών",
          detail: "Παράμετρος `ποσά_ταμειακών_ροών` της συνάρτησης MIRR.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "επιτόκιο_χρηματοδότησης",
          detail: "Παράμετρος `επιτόκιο_χρηματοδότησης` της συνάρτησης MIRR.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "απόδοση_επανεπένδυσης",
          detail: "Παράμετρος `απόδοση_επανεπένδυσης` της συνάρτησης MIRR.",
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
      d: "Περιγραφή της συνάρτησης IRR.",
      a: "Σύνοψη της συνάρτησης IRR.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "ποσά_ταμειακών_ροών",
          detail: "Παράμετρος `ποσά_ταμειακών_ροών` της συνάρτησης IRR.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "εκτίμηση_επιτοκίου",
          detail: "Παράμετρος `εκτίμηση_επιτοκίου` της συνάρτησης IRR.",
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
      d: "Περιγραφή της συνάρτησης NPV.",
      a: "Σύνοψη της συνάρτησης NPV.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "προεξοφλητικό_επιτόκιο",
          detail: "Παράμετρος `προεξοφλητικό_επιτόκιο` της συνάρτησης NPV.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ταμειακή_ροή1",
          detail: "Παράμετρος `ταμειακή_ροή1` της συνάρτησης NPV.",
          example: "200",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ταμειακή_ροή2",
          detail: "Παράμετρος `ταμειακή_ροή2` της συνάρτησης NPV.",
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
      d: "Περιγραφή της συνάρτησης XNPV.",
      a: "Σύνοψη της συνάρτησης XNPV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "προεξοφλητικό_επιτόκιο",
          detail: "Παράμετρος `προεξοφλητικό_επιτόκιο` της συνάρτησης XNPV.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ποσά_ταμειακών_ροών",
          detail: "Παράμετρος `ποσά_ταμειακών_ροών` της συνάρτησης XNPV.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "ημερομηνίες_ταμειακών_ροών",
          detail: "Παράμετρος `ημερομηνίες_ταμειακών_ροών` της συνάρτησης XNPV.",
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
      d: "Περιγραφή της συνάρτησης CUMIPMT.",
      a: "Σύνοψη της συνάρτησης CUMIPMT.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης CUMIPMT.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός_περιόδων",
          detail: "Παράμετρος `αριθμός_περιόδων` της συνάρτησης CUMIPMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "παρούσα_αξία",
          detail: "Παράμετρος `παρούσα_αξία` της συνάρτησης CUMIPMT.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "πρώτη_περίοδος",
          detail: "Παράμετρος `πρώτη_περίοδος` της συνάρτησης CUMIPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τελευταία_περίοδος",
          detail: "Παράμετρος `τελευταία_περίοδος` της συνάρτησης CUMIPMT.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τέλος_ή_αρχή",
          detail: "Παράμετρος `τέλος_ή_αρχή` της συνάρτησης CUMIPMT.",
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
      d: "Περιγραφή της συνάρτησης PMT.",
      a: "Σύνοψη της συνάρτησης PMT.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης PMT.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός_περιόδων",
          detail: "Παράμετρος `αριθμός_περιόδων` της συνάρτησης PMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "παρούσα_αξία",
          detail: "Παράμετρος `παρούσα_αξία` της συνάρτησης PMT.",
          example: " 100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μελλοντική_αξία",
          detail: "Παράμετρος `μελλοντική_αξία` της συνάρτησης PMT.",
          example: "D2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τέλος_ή_αρχή",
          detail: "Παράμετρος `τέλος_ή_αρχή` της συνάρτησης PMT.",
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
      d: "Περιγραφή της συνάρτησης IPMT.",
      a: "Σύνοψη της συνάρτησης IPMT.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης IPMT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "περίοδος",
          detail: "Παράμετρος `περίοδος` της συνάρτησης IPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός_περιόδων",
          detail: "Παράμετρος `αριθμός_περιόδων` της συνάρτησης IPMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "παρούσα_αξία",
          detail: "Παράμετρος `παρούσα_αξία` της συνάρτησης IPMT.",
          example: "80000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μελλοντική_αξία",
          detail: "Παράμετρος `μελλοντική_αξία` της συνάρτησης IPMT.",
          example: "E2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τέλος_ή_αρχή",
          detail: "Παράμετρος `τέλος_ή_αρχή` της συνάρτησης IPMT.",
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
      d: "Περιγραφή της συνάρτησης PPMT.",
      a: "Σύνοψη της συνάρτησης PPMT.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης PPMT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "περίοδος",
          detail: "Παράμετρος `περίοδος` της συνάρτησης PPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός_περιόδων",
          detail: "Παράμετρος `αριθμός_περιόδων` της συνάρτησης PPMT.",
          example: "3*12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "παρούσα_αξία",
          detail: "Παράμετρος `παρούσα_αξία` της συνάρτησης PPMT.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μελλοντική_αξία",
          detail: "Παράμετρος `μελλοντική_αξία` της συνάρτησης PPMT.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τέλος_ή_αρχή",
          detail: "Παράμετρος `τέλος_ή_αρχή` της συνάρτησης PPMT.",
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
      d: "Περιγραφή της συνάρτησης INTRATE.",
      a: "Σύνοψη της συνάρτησης INTRATE.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "ημερομηνία_αγοράς",
          detail: "Παράμετρος `ημερομηνία_αγοράς` της συνάρτησης INTRATE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ημερομηνία_πώλησης",
          detail: "Παράμετρος `ημερομηνία_πώλησης` της συνάρτησης INTRATE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή_αγοράς",
          detail: "Παράμετρος `τιμή_αγοράς` της συνάρτησης INTRATE.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή_πώλησης",
          detail: "Παράμετρος `τιμή_πώλησης` της συνάρτησης INTRATE.",
          example: "101200",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης INTRATE.",
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
      d: "Περιγραφή της συνάρτησης PRICE.",
      a: "Σύνοψη της συνάρτησης PRICE.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης PRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης PRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης PRICE.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "απόδοση",
          detail: "Παράμετρος `απόδοση` της συνάρτησης PRICE.",
          example: "0.065",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αξία_εξόφλησης",
          detail: "Παράμετρος `αξία_εξόφλησης` της συνάρτησης PRICE.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "συχνότητα",
          detail: "Παράμετρος `συχνότητα` της συνάρτησης PRICE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης PRICE.",
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
      d: "Περιγραφή της συνάρτησης PRICEDISC.",
      a: "Σύνοψη της συνάρτησης PRICEDISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης PRICEDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης PRICEDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "προεξοφλητικό_επιτόκιο",
          detail: "Παράμετρος `προεξοφλητικό_επιτόκιο` της συνάρτησης PRICEDISC.",
          example: "0.0525",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αξία_εξόφλησης",
          detail: "Παράμετρος `αξία_εξόφλησης` της συνάρτησης PRICEDISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης PRICEDISC.",
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
      d: "Περιγραφή της συνάρτησης PRICEMAT.",
      a: "Σύνοψη της συνάρτησης PRICEMAT.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ημερομηνία_έκδοσης",
          detail: "Παράμετρος `ημερομηνία_έκδοσης` της συνάρτησης PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης PRICEMAT.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "απόδοση",
          detail: "Παράμετρος `απόδοση` της συνάρτησης PRICEMAT.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης PRICEMAT.",
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
      d: "Περιγραφή της συνάρτησης RECEIVED.",
      a: "Σύνοψη της συνάρτησης RECEIVED.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης RECEIVED.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης RECEIVED.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "επένδυση",
          detail: "Παράμετρος `επένδυση` της συνάρτησης RECEIVED.",
          example: "10000000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "προεξοφλητικό_επιτόκιο",
          detail: "Παράμετρος `προεξοφλητικό_επιτόκιο` της συνάρτησης RECEIVED.",
          example: "0.0575",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης RECEIVED.",
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
      d: "Περιγραφή της συνάρτησης DISC.",
      a: "Σύνοψη της συνάρτησης DISC.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης DISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης DISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης DISC.",
          example: "97.975",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αξία_εξόφλησης",
          detail: "Παράμετρος `αξία_εξόφλησης` της συνάρτησης DISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης DISC.",
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
      d: "Περιγραφή της συνάρτησης NPER.",
      a: "Σύνοψη της συνάρτησης NPER.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης NPER.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ποσό_πληρωμής",
          detail: "Παράμετρος `ποσό_πληρωμής` της συνάρτησης NPER.",
          example: "500",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "παρούσα_αξία",
          detail: "Παράμετρος `παρούσα_αξία` της συνάρτησης NPER.",
          example: "40000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μελλοντική_αξία",
          detail: "Παράμετρος `μελλοντική_αξία` της συνάρτησης NPER.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τέλος_ή_αρχή",
          detail: "Παράμετρος `τέλος_ή_αρχή` της συνάρτησης NPER.",
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
      d: "Περιγραφή της συνάρτησης SLN.",
      a: "Σύνοψη της συνάρτησης SLN.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "κόστος",
          detail: "Παράμετρος `κόστος` της συνάρτησης SLN.",
          example: "300000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "υπολειμματική_αξία",
          detail: "Παράμετρος `υπολειμματική_αξία` της συνάρτησης SLN.",
          example: "75000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "διάρκεια_ζωής",
          detail: "Παράμετρος `διάρκεια_ζωής` της συνάρτησης SLN.",
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
      d: "Περιγραφή της συνάρτησης DURATION.",
      a: "Σύνοψη της συνάρτησης DURATION.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης DURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης DURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης DURATION.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "απόδοση",
          detail: "Παράμετρος `απόδοση` της συνάρτησης DURATION.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "συχνότητα",
          detail: "Παράμετρος `συχνότητα` της συνάρτησης DURATION.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης DURATION.",
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
      d: "Περιγραφή της συνάρτησης MDURATION.",
      a: "Σύνοψη της συνάρτησης MDURATION.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "ημερομηνία_διακανονισμού",
          detail: "Παράμετρος `ημερομηνία_διακανονισμού` της συνάρτησης MDURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λήξη",
          detail: "Παράμετρος `λήξη` της συνάρτησης MDURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "επιτόκιο",
          detail: "Παράμετρος `επιτόκιο` της συνάρτησης MDURATION.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "απόδοση",
          detail: "Παράμετρος `απόδοση` της συνάρτησης MDURATION.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "συχνότητα",
          detail: "Παράμετρος `συχνότητα` της συνάρτησης MDURATION.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σύμβαση_καταμέτρησης_ημερών",
          detail: "Παράμετρος `σύμβαση_καταμέτρησης_ημερών` της συνάρτησης MDURATION.",
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
      d: "Περιγραφή της συνάρτησης BIN2DEC.",
      a: "Σύνοψη της συνάρτησης BIN2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "προσημασμένος_δυαδικός_αριθμός",
          detail: "Παράμετρος `προσημασμένος_δυαδικός_αριθμός` της συνάρτησης BIN2DEC.",
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
      d: "Περιγραφή της συνάρτησης BIN2HEX.",
      a: "Σύνοψη της συνάρτησης BIN2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "προσημασμένος_δυαδικός_αριθμός",
          detail: "Παράμετρος `προσημασμένος_δυαδικός_αριθμός` της συνάρτησης BIN2HEX.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "σημαντικά_ψηφία",
          detail: "Παράμετρος `σημαντικά_ψηφία` της συνάρτησης BIN2HEX.",
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
      d: "Περιγραφή της συνάρτησης BIN2OCT.",
      a: "Σύνοψη της συνάρτησης BIN2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "προσημασμένος_δυαδικός_αριθμός",
          detail: "Παράμετρος `προσημασμένος_δυαδικός_αριθμός` της συνάρτησης BIN2OCT.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "σημαντικά_ψηφία",
          detail: "Παράμετρος `σημαντικά_ψηφία` της συνάρτησης BIN2OCT.",
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
      d: "Περιγραφή της συνάρτησης DEC2BIN.",
      a: "Σύνοψη της συνάρτησης DEC2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "δεκαδικός_αριθμός",
          detail: "Παράμετρος `δεκαδικός_αριθμός` της συνάρτησης DEC2BIN.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σημαντικά_ψηφία",
          detail: "Παράμετρος `σημαντικά_ψηφία` της συνάρτησης DEC2BIN.",
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
      d: "Περιγραφή της συνάρτησης DEC2HEX.",
      a: "Σύνοψη της συνάρτησης DEC2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "δεκαδικός_αριθμός",
          detail: "Παράμετρος `δεκαδικός_αριθμός` της συνάρτησης DEC2HEX.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σημαντικά_ψηφία",
          detail: "Παράμετρος `σημαντικά_ψηφία` της συνάρτησης DEC2HEX.",
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
      d: "Περιγραφή της συνάρτησης DEC2OCT.",
      a: "Σύνοψη της συνάρτησης DEC2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "δεκαδικός_αριθμός",
          detail: "Παράμετρος `δεκαδικός_αριθμός` της συνάρτησης DEC2OCT.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "σημαντικά_ψηφία",
          detail: "Παράμετρος `σημαντικά_ψηφία` της συνάρτησης DEC2OCT.",
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
      d: "Περιγραφή της συνάρτησης HEX2BIN.",
      a: "Σύνοψη της συνάρτησης HEX2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "προσημασμένος_δεκαεξαδικός_αριθμός",
          detail: "Παράμετρος `προσημασμένος_δεκαεξαδικός_αριθμός` της συνάρτησης HEX2BIN.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "σημαντικά_ψηφία",
          detail: "Παράμετρος `σημαντικά_ψηφία` της συνάρτησης HEX2BIN.",
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
      d: "Περιγραφή της συνάρτησης HEX2DEC.",
      a: "Σύνοψη της συνάρτησης HEX2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "προσημασμένος_δεκαεξαδικός_αριθμός",
          detail: "Παράμετρος `προσημασμένος_δεκαεξαδικός_αριθμός` της συνάρτησης HEX2DEC.",
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
      d: "Περιγραφή της συνάρτησης HEX2OCT.",
      a: "Σύνοψη της συνάρτησης HEX2OCT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "προσημασμένος_δεκαεξαδικός_αριθμός",
          detail: "Παράμετρος `προσημασμένος_δεκαεξαδικός_αριθμός` της συνάρτησης HEX2OCT.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "σημαντικά_ψηφία",
          detail: "Παράμετρος `σημαντικά_ψηφία` της συνάρτησης HEX2OCT.",
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
      d: "Περιγραφή της συνάρτησης OCT2BIN.",
      a: "Σύνοψη της συνάρτησης OCT2BIN.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "προσημασμένος_οκταδικός_αριθμός",
          detail: "Παράμετρος `προσημασμένος_οκταδικός_αριθμός` της συνάρτησης OCT2BIN.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "σημαντικά_ψηφία",
          detail: "Παράμετρος `σημαντικά_ψηφία` της συνάρτησης OCT2BIN.",
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
      d: "Περιγραφή της συνάρτησης OCT2DEC.",
      a: "Σύνοψη της συνάρτησης OCT2DEC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "προσημασμένος_οκταδικός_αριθμός",
          detail: "Παράμετρος `προσημασμένος_οκταδικός_αριθμός` της συνάρτησης OCT2DEC.",
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
      d: "Περιγραφή της συνάρτησης OCT2HEX.",
      a: "Σύνοψη της συνάρτησης OCT2HEX.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "προσημασμένος_οκταδικός_αριθμός",
          detail: "Παράμετρος `προσημασμένος_οκταδικός_αριθμός` της συνάρτησης OCT2HEX.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "σημαντικά_ψηφία",
          detail: "Παράμετρος `σημαντικά_ψηφία` της συνάρτησης OCT2HEX.",
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
      d: "Περιγραφή της συνάρτησης COMPLEX.",
      a: "Σύνοψη της συνάρτησης COMPLEX.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "πραγματικό_μέρος",
          detail: "Παράμετρος `πραγματικό_μέρος` της συνάρτησης COMPLEX.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "φανταστικό_μέρος",
          detail: "Παράμετρος `φανταστικό_μέρος` της συνάρτησης COMPLEX.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "επίθημα",
          detail: "Παράμετρος `επίθημα` της συνάρτησης COMPLEX.",
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
      d: "Περιγραφή της συνάρτησης IMREAL.",
      a: "Σύνοψη της συνάρτησης IMREAL.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "μιγαδικός_αριθμός",
          detail: "Παράμετρος `μιγαδικός_αριθμός` της συνάρτησης IMREAL.",
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
      d: "Περιγραφή της συνάρτησης IMAGINARY.",
      a: "Σύνοψη της συνάρτησης IMAGINARY.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "μιγαδικός_αριθμός",
          detail: "Παράμετρος `μιγαδικός_αριθμός` της συνάρτησης IMAGINARY.",
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
      d: "Περιγραφή της συνάρτησης IMCONJUGATE.",
      a: "Σύνοψη της συνάρτησης IMCONJUGATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "αριθμός",
          detail: "Παράμετρος `αριθμός` της συνάρτησης IMCONJUGATE.",
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
      d: "Περιγραφή της συνάρτησης IMABS.",
      a: "Σύνοψη της συνάρτησης IMABS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "αριθμός",
          detail: "Παράμετρος `αριθμός` της συνάρτησης IMABS.",
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
      d: "Περιγραφή της συνάρτησης DELTA.",
      a: "Σύνοψη της συνάρτησης DELTA.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "αριθμός1",
          detail: "Παράμετρος `αριθμός1` της συνάρτησης DELTA.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός2",
          detail: "Παράμετρος `αριθμός2` της συνάρτησης DELTA.",
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
      d: "Περιγραφή της συνάρτησης IMSUM.",
      a: "Σύνοψη της συνάρτησης IMSUM.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης IMSUM.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης IMSUM.",
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
      d: "Περιγραφή της συνάρτησης IMSUB.",
      a: "Σύνοψη της συνάρτησης IMSUB.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "πρώτος_αριθμός",
          detail: "Παράμετρος `πρώτος_αριθμός` της συνάρτησης IMSUB.",
          example: "\"6+5i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "δεύτερος_αριθμός",
          detail: "Παράμετρος `δεύτερος_αριθμός` της συνάρτησης IMSUB.",
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
      d: "Περιγραφή της συνάρτησης IMPRODUCT.",
      a: "Σύνοψη της συνάρτησης IMPRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "συντελεστής1",
          detail: "Παράμετρος `συντελεστής1` της συνάρτησης IMPRODUCT.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "συντελεστής2",
          detail: "Παράμετρος `συντελεστής2` της συνάρτησης IMPRODUCT.",
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
      d: "Περιγραφή της συνάρτησης IMDIV.",
      a: "Σύνοψη της συνάρτησης IMDIV.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "διαιρετέος",
          detail: "Παράμετρος `διαιρετέος` της συνάρτησης IMDIV.",
          example: "\"11+16i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "διαιρέτης",
          detail: "Παράμετρος `διαιρέτης` της συνάρτησης IMDIV.",
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
      d: "Περιγραφή της συνάρτησης NOT.",
      a: "Σύνοψη της συνάρτησης NOT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "λογική_έκφραση",
          detail: "Παράμετρος `λογική_έκφραση` της συνάρτησης NOT.",
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
      d: "Περιγραφή της συνάρτησης TRUE.",
      a: "Σύνοψη της συνάρτησης TRUE.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FALSE",
      t: 10,
      d: "Περιγραφή της συνάρτησης FALSE.",
      a: "Σύνοψη της συνάρτησης FALSE.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "AND",
      t: 10,
      d: "Περιγραφή της συνάρτησης AND.",
      a: "Σύνοψη της συνάρτησης AND.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "λογική_έκφραση1",
          detail: "Παράμετρος `λογική_έκφραση1` της συνάρτησης AND.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λογική_έκφραση2",
          detail: "Παράμετρος `λογική_έκφραση2` της συνάρτησης AND.",
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
      d: "Περιγραφή της συνάρτησης IFERROR.",
      a: "Σύνοψη της συνάρτησης IFERROR.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης IFERROR.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή_αν_σφάλμα",
          detail: "Παράμετρος `τιμή_αν_σφάλμα` της συνάρτησης IFERROR.",
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
      d: "Περιγραφή της συνάρτησης IF.",
      a: "Σύνοψη της συνάρτησης IF.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "λογική_έκφραση",
          detail: "Παράμετρος `λογική_έκφραση` της συνάρτησης IF.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή_αν_αληθής",
          detail: "Παράμετρος `τιμή_αν_αληθής` της συνάρτησης IF.",
          example: "\"A2 is foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή_αν_ψευδής",
          detail: "Παράμετρος `τιμή_αν_ψευδής` της συνάρτησης IF.",
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
      d: "Περιγραφή της συνάρτησης OR.",
      a: "Σύνοψη της συνάρτησης OR.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "λογική_έκφραση1",
          detail: "Παράμετρος `λογική_έκφραση1` της συνάρτησης OR.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "λογική_έκφραση2",
          detail: "Παράμετρος `λογική_έκφραση2` της συνάρτησης OR.",
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
      d: "Περιγραφή της συνάρτησης NE.",
      a: "Σύνοψη της συνάρτησης NE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης NE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης NE.",
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
      d: "Περιγραφή της συνάρτησης EQ.",
      a: "Σύνοψη της συνάρτησης EQ.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης EQ.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης EQ.",
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
      d: "Περιγραφή της συνάρτησης GT.",
      a: "Σύνοψη της συνάρτησης GT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης GT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης GT.",
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
      d: "Περιγραφή της συνάρτησης GTE.",
      a: "Σύνοψη της συνάρτησης GTE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης GTE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης GTE.",
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
      d: "Περιγραφή της συνάρτησης LT.",
      a: "Σύνοψη της συνάρτησης LT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης LT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης LT.",
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
      d: "Περιγραφή της συνάρτησης LTE.",
      a: "Σύνοψη της συνάρτησης LTE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης LTE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης LTE.",
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
      d: "Περιγραφή της συνάρτησης ADD.",
      a: "Σύνοψη της συνάρτησης ADD.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης ADD.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης ADD.",
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
      d: "Περιγραφή της συνάρτησης MINUS.",
      a: "Σύνοψη της συνάρτησης MINUS.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης MINUS.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης MINUS.",
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
      d: "Περιγραφή της συνάρτησης MULTIPLY.",
      a: "Σύνοψη της συνάρτησης MULTIPLY.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "συντελεστής1",
          detail: "Παράμετρος `συντελεστής1` της συνάρτησης MULTIPLY.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "συντελεστής2",
          detail: "Παράμετρος `συντελεστής2` της συνάρτησης MULTIPLY.",
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
      d: "Περιγραφή της συνάρτησης DIVIDE.",
      a: "Σύνοψη της συνάρτησης DIVIDE.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "διαιρετέος",
          detail: "Παράμετρος `διαιρετέος` της συνάρτησης DIVIDE.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "διαιρέτης",
          detail: "Παράμετρος `διαιρέτης` της συνάρτησης DIVIDE.",
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
      d: "Περιγραφή της συνάρτησης CONCAT.",
      a: "Σύνοψη της συνάρτησης CONCAT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τιμή1",
          detail: "Παράμετρος `τιμή1` της συνάρτησης CONCAT.",
          example: "\"de\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή2",
          detail: "Παράμετρος `τιμή2` της συνάρτησης CONCAT.",
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
      d: "Περιγραφή της συνάρτησης UNARY_PERCENT.",
      a: "Σύνοψη της συνάρτησης UNARY_PERCENT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ποσοστό",
          detail: "Παράμετρος `ποσοστό` της συνάρτησης UNARY_PERCENT.",
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
      d: "Περιγραφή της συνάρτησης CONCATENATE.",
      a: "Σύνοψη της συνάρτησης CONCATENATE.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "συμβολοσειρά1",
          detail: "Παράμετρος `συμβολοσειρά1` της συνάρτησης CONCATENATE.",
          example: "\"Super\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "συμβολοσειρά2",
          detail: "Παράμετρος `συμβολοσειρά2` της συνάρτησης CONCATENATE.",
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
      d: "Περιγραφή της συνάρτησης CODE.",
      a: "Σύνοψη της συνάρτησης CODE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "συμβολοσειρά",
          detail: "Παράμετρος `συμβολοσειρά` της συνάρτησης CODE.",
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
      d: "Περιγραφή της συνάρτησης CHAR.",
      a: "Σύνοψη της συνάρτησης CHAR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "αριθμός_πίνακα",
          detail: "Παράμετρος `αριθμός_πίνακα` της συνάρτησης CHAR.",
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
      d: "Περιγραφή της συνάρτησης ARABIC.",
      a: "Σύνοψη της συνάρτησης ARABIC.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "λατινικός_αριθμός",
          detail: "Παράμετρος `λατινικός_αριθμός` της συνάρτησης ARABIC.",
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
      d: "Περιγραφή της συνάρτησης ROMAN.",
      a: "Σύνοψη της συνάρτησης ROMAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "αριθμός",
          detail: "Παράμετρος `αριθμός` της συνάρτησης ROMAN.",
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
      d: "Περιγραφή της συνάρτησης REGEXEXTRACT.",
      a: "Σύνοψη της συνάρτησης REGEXEXTRACT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "κείμενο",
          detail: "Παράμετρος `κείμενο` της συνάρτησης REGEXEXTRACT.",
          example: "\"Needle in a haystack\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κανονική_έκφραση",
          detail: "Παράμετρος `κανονική_έκφραση` της συνάρτησης REGEXEXTRACT.",
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
      d: "Περιγραφή της συνάρτησης REGEXMATCH.",
      a: "Σύνοψη της συνάρτησης REGEXMATCH.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "κείμενο",
          detail: "Παράμετρος `κείμενο` της συνάρτησης REGEXMATCH.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κανονική_έκφραση",
          detail: "Παράμετρος `κανονική_έκφραση` της συνάρτησης REGEXMATCH.",
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
      d: "Περιγραφή της συνάρτησης REGEXREPLACE.",
      a: "Σύνοψη της συνάρτησης REGEXREPLACE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "κείμενο",
          detail: "Παράμετρος `κείμενο` της συνάρτησης REGEXREPLACE.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κανονική_έκφραση",
          detail: "Παράμετρος `κανονική_έκφραση` της συνάρτησης REGEXREPLACE.",
          example: "\"S.*d\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αντικατάσταση",
          detail: "Παράμετρος `αντικατάσταση` της συνάρτησης REGEXREPLACE.",
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
      d: "Περιγραφή της συνάρτησης T.",
      a: "Σύνοψη της συνάρτησης T.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης T.",
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
      d: "Περιγραφή της συνάρτησης FIXED.",
      a: "Σύνοψη της συνάρτησης FIXED.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "αριθμός",
          detail: "Παράμετρος `αριθμός` της συνάρτησης FIXED.",
          example: "3.141592653",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αριθμός_δεκαδικών",
          detail: "Παράμετρος `αριθμός_δεκαδικών` της συνάρτησης FIXED.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "καταστολή_διαχωριστικού",
          detail: "Παράμετρος `καταστολή_διαχωριστικού` της συνάρτησης FIXED.",
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
      d: "Περιγραφή της συνάρτησης FIND.",
      a: "Σύνοψη της συνάρτησης FIND.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "αναζητούμενο",
          detail: "Παράμετρος `αναζητούμενο` της συνάρτησης FIND.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κείμενο_προς_αναζήτηση",
          detail: "Παράμετρος `κείμενο_προς_αναζήτηση` της συνάρτησης FIND.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ξεκινώντας_από",
          detail: "Παράμετρος `ξεκινώντας_από` της συνάρτησης FIND.",
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
      d: "Περιγραφή της συνάρτησης FINDB.",
      a: "Σύνοψη της συνάρτησης FINDB.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "αναζητούμενο",
          detail: "Παράμετρος `αναζητούμενο` της συνάρτησης FINDB.",
          example: "\"new\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κείμενο_προς_αναζήτηση",
          detail: "Παράμετρος `κείμενο_προς_αναζήτηση` της συνάρτησης FINDB.",
          example: "\"new year\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ξεκινώντας_από",
          detail: "Παράμετρος `ξεκινώντας_από` της συνάρτησης FINDB.",
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
      d: "Περιγραφή της συνάρτησης JOIN.",
      a: "Σύνοψη της συνάρτησης JOIN.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "οριοθέτης",
          detail: "Παράμετρος `οριοθέτης` της συνάρτησης JOIN.",
          example: "\" and-a \"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή_ή_πίνακας1",
          detail: "Παράμετρος `τιμή_ή_πίνακας1` της συνάρτησης JOIN.",
          example: "{1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τιμή_ή_πίνακας2",
          detail: "Παράμετρος `τιμή_ή_πίνακας2` της συνάρτησης JOIN.",
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
      d: "Περιγραφή της συνάρτησης LEFT.",
      a: "Σύνοψη της συνάρτησης LEFT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "συμβολοσειρά",
          detail: "Παράμετρος `συμβολοσειρά` της συνάρτησης LEFT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αριθμός_χαρακτήρων",
          detail: "Παράμετρος `αριθμός_χαρακτήρων` της συνάρτησης LEFT.",
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
      d: "Περιγραφή της συνάρτησης RIGHT.",
      a: "Σύνοψη της συνάρτησης RIGHT.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "συμβολοσειρά",
          detail: "Παράμετρος `συμβολοσειρά` της συνάρτησης RIGHT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αριθμός_χαρακτήρων",
          detail: "Παράμετρος `αριθμός_χαρακτήρων` της συνάρτησης RIGHT.",
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
      d: "Περιγραφή της συνάρτησης MID.",
      a: "Σύνοψη της συνάρτησης MID.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "συμβολοσειρά",
          detail: "Παράμετρος `συμβολοσειρά` της συνάρτησης MID.",
          example: "\"get this\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ξεκινώντας_από",
          detail: "Παράμετρος `ξεκινώντας_από` της συνάρτησης MID.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μήκος_εξαγωγής",
          detail: "Παράμετρος `μήκος_εξαγωγής` της συνάρτησης MID.",
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
      d: "Περιγραφή της συνάρτησης LEN.",
      a: "Σύνοψη της συνάρτησης LEN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "κείμενο",
          detail: "Παράμετρος `κείμενο` της συνάρτησης LEN.",
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
      d: "Περιγραφή της συνάρτησης LENB.",
      a: "Σύνοψη της συνάρτησης LENB.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "κείμενο",
          detail: "Παράμετρος `κείμενο` της συνάρτησης LENB.",
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
      d: "Περιγραφή της συνάρτησης LOWER.",
      a: "Σύνοψη της συνάρτησης LOWER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "κείμενο",
          detail: "Παράμετρος `κείμενο` της συνάρτησης LOWER.",
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
      d: "Περιγραφή της συνάρτησης UPPER.",
      a: "Σύνοψη της συνάρτησης UPPER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "κείμενο",
          detail: "Παράμετρος `κείμενο` της συνάρτησης UPPER.",
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
      d: "Περιγραφή της συνάρτησης EXACT.",
      a: "Σύνοψη της συνάρτησης EXACT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "συμβολοσειρά1",
          detail: "Παράμετρος `συμβολοσειρά1` της συνάρτησης EXACT.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "συμβολοσειρά2",
          detail: "Παράμετρος `συμβολοσειρά2` της συνάρτησης EXACT.",
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
      d: "Περιγραφή της συνάρτησης REPLACE.",
      a: "Σύνοψη της συνάρτησης REPLACE.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "κείμενο",
          detail: "Παράμετρος `κείμενο` της συνάρτησης REPLACE.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "θέση",
          detail: "Παράμετρος `θέση` της συνάρτησης REPLACE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μήκος",
          detail: "Παράμετρος `μήκος` της συνάρτησης REPLACE.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "νέο_κείμενο",
          detail: "Παράμετρος `νέο_κείμενο` της συνάρτησης REPLACE.",
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
      d: "Περιγραφή της συνάρτησης REPT.",
      a: "Σύνοψη της συνάρτησης REPT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "κείμενο_προς_επανάληψη",
          detail: "Παράμετρος `κείμενο_προς_επανάληψη` της συνάρτησης REPT.",
          example: "\"ha\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αριθμός_επαναλήψεων",
          detail: "Παράμετρος `αριθμός_επαναλήψεων` της συνάρτησης REPT.",
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
      d: "Περιγραφή της συνάρτησης SEARCH.",
      a: "Σύνοψη της συνάρτησης SEARCH.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "αναζητούμενο",
          detail: "Παράμετρος `αναζητούμενο` της συνάρτησης SEARCH.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κείμενο_προς_αναζήτηση",
          detail: "Παράμετρος `κείμενο_προς_αναζήτηση` της συνάρτησης SEARCH.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ξεκινώντας_από",
          detail: "Παράμετρος `ξεκινώντας_από` της συνάρτησης SEARCH.",
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
      d: "Περιγραφή της συνάρτησης SUBSTITUTE.",
      a: "Σύνοψη της συνάρτησης SUBSTITUTE.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "κείμενο_προς_αναζήτηση",
          detail: "Παράμετρος `κείμενο_προς_αναζήτηση` της συνάρτησης SUBSTITUTE.",
          example: "\"search for it\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αναζητούμενο",
          detail: "Παράμετρος `αναζητούμενο` της συνάρτησης SUBSTITUTE.",
          example: "\"search for\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αντικατάσταση_με",
          detail: "Παράμετρος `αντικατάσταση_με` της συνάρτησης SUBSTITUTE.",
          example: "\"Google\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αριθμός_εμφάνισης",
          detail: "Παράμετρος `αριθμός_εμφάνισης` της συνάρτησης SUBSTITUTE.",
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
      d: "Περιγραφή της συνάρτησης CLEAN.",
      a: "Σύνοψη της συνάρτησης CLEAN.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "κείμενο",
          detail: "Παράμετρος `κείμενο` της συνάρτησης CLEAN.",
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
      d: "Περιγραφή της συνάρτησης TEXT.",
      a: "Σύνοψη της συνάρτησης TEXT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "αριθμός",
          detail: "Παράμετρος `αριθμός` της συνάρτησης TEXT.",
          example: "1.23",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "μορφή",
          detail: "Παράμετρος `μορφή` της συνάρτησης TEXT.",
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
      d: "Περιγραφή της συνάρτησης TRIM.",
      a: "Σύνοψη της συνάρτησης TRIM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "κείμενο",
          detail: "Παράμετρος `κείμενο` της συνάρτησης TRIM.",
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
      d: "Περιγραφή της συνάρτησης VALUE.",
      a: "Σύνοψη της συνάρτησης VALUE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "κείμενο",
          detail: "Παράμετρος `κείμενο` της συνάρτησης VALUE.",
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
      d: "Περιγραφή της συνάρτησης PROPER.",
      a: "Σύνοψη της συνάρτησης PROPER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "κείμενο_προς_κεφαλαιοποίηση",
          detail: "Παράμετρος `κείμενο_προς_κεφαλαιοποίηση` της συνάρτησης PROPER.",
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
      d: "Περιγραφή της συνάρτησης CONVERT.",
      a: "Σύνοψη της συνάρτησης CONVERT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης CONVERT.",
          example: "5.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αρχική_μονάδα",
          detail: "Παράμετρος `αρχική_μονάδα` της συνάρτησης CONVERT.",
          example: "\"g\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "τελική_μονάδα",
          detail: "Παράμετρος `τελική_μονάδα` της συνάρτησης CONVERT.",
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
      d: "Περιγραφή της συνάρτησης SUMX2MY2.",
      a: "Σύνοψη της συνάρτησης SUMX2MY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "πίνακας_x",
          detail: "Παράμετρος `πίνακας_x` της συνάρτησης SUMX2MY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "πίνακας_y",
          detail: "Παράμετρος `πίνακας_y` της συνάρτησης SUMX2MY2.",
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
      d: "Περιγραφή της συνάρτησης SUMX2PY2.",
      a: "Σύνοψη της συνάρτησης SUMX2PY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "πίνακας_x",
          detail: "Παράμετρος `πίνακας_x` της συνάρτησης SUMX2PY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "πίνακας_y",
          detail: "Παράμετρος `πίνακας_y` της συνάρτησης SUMX2PY2.",
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
      d: "Περιγραφή της συνάρτησης SUMXMY2.",
      a: "Σύνοψη της συνάρτησης SUMXMY2.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "πίνακας_x",
          detail: "Παράμετρος `πίνακας_x` της συνάρτησης SUMXMY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "πίνακας_y",
          detail: "Παράμετρος `πίνακας_y` της συνάρτησης SUMXMY2.",
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
      d: "Περιγραφή της συνάρτησης TRANSPOSE.",
      a: "Σύνοψη της συνάρτησης TRANSPOSE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "πίνακας_ή_εύρος",
          detail: "Παράμετρος `πίνακας_ή_εύρος` της συνάρτησης TRANSPOSE.",
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
      d: "Περιγραφή της συνάρτησης TREND.",
      a: "Σύνοψη της συνάρτησης TREND.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "γνωστά_δεδομένα_y",
          detail: "Παράμετρος `γνωστά_δεδομένα_y` της συνάρτησης TREND.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "γνωστά_δεδομένα_x",
          detail: "Παράμετρος `γνωστά_δεδομένα_x` της συνάρτησης TREND.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "νέα_δεδομένα_x",
          detail: "Παράμετρος `νέα_δεδομένα_x` της συνάρτησης TREND.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Παράμετρος `b` της συνάρτησης TREND.",
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
      d: "Περιγραφή της συνάρτησης FREQUENCY.",
      a: "Σύνοψη της συνάρτησης FREQUENCY.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "δεδομένα",
          detail: "Παράμετρος `δεδομένα` της συνάρτησης FREQUENCY.",
          example: "A2:A40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "κλάσεις",
          detail: "Παράμετρος `κλάσεις` της συνάρτησης FREQUENCY.",
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
      d: "Περιγραφή της συνάρτησης GROWTH.",
      a: "Σύνοψη της συνάρτησης GROWTH.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "γνωστά_δεδομένα_y",
          detail: "Παράμετρος `γνωστά_δεδομένα_y` της συνάρτησης GROWTH.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "γνωστά_δεδομένα_x",
          detail: "Παράμετρος `γνωστά_δεδομένα_x` της συνάρτησης GROWTH.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "νέα_δεδομένα_x",
          detail: "Παράμετρος `νέα_δεδομένα_x` της συνάρτησης GROWTH.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Παράμετρος `b` της συνάρτησης GROWTH.",
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
      d: "Περιγραφή της συνάρτησης LINEST.",
      a: "Σύνοψη της συνάρτησης LINEST.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "γνωστά_δεδομένα_y",
          detail: "Παράμετρος `γνωστά_δεδομένα_y` της συνάρτησης LINEST.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "γνωστά_δεδομένα_x",
          detail: "Παράμετρος `γνωστά_δεδομένα_x` της συνάρτησης LINEST.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "υπολογισμός_b",
          detail: "Παράμετρος `υπολογισμός_b` της συνάρτησης LINEST.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αναλυτικό",
          detail: "Παράμετρος `αναλυτικό` της συνάρτησης LINEST.",
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
      d: "Περιγραφή της συνάρτησης LOGEST.",
      a: "Σύνοψη της συνάρτησης LOGEST.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "γνωστά_δεδομένα_y",
          detail: "Παράμετρος `γνωστά_δεδομένα_y` της συνάρτησης LOGEST.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "γνωστά_δεδομένα_x",
          detail: "Παράμετρος `γνωστά_δεδομένα_x` της συνάρτησης LOGEST.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Παράμετρος `b` της συνάρτησης LOGEST.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αναλυτικό",
          detail: "Παράμετρος `αναλυτικό` της συνάρτησης LOGEST.",
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
      d: "Περιγραφή της συνάρτησης MDETERM.",
      a: "Σύνοψη της συνάρτησης MDETERM.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τετράγωνος_πίνακας",
          detail: "Παράμετρος `τετράγωνος_πίνακας` της συνάρτησης MDETERM.",
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
      d: "Περιγραφή της συνάρτησης MINVERSE.",
      a: "Σύνοψη της συνάρτησης MINVERSE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τετράγωνος_πίνακας",
          detail: "Παράμετρος `τετράγωνος_πίνακας` της συνάρτησης MINVERSE.",
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
      d: "Περιγραφή της συνάρτησης MMULT.",
      a: "Σύνοψη της συνάρτησης MMULT.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "πίνακας1",
          detail: "Παράμετρος `πίνακας1` της συνάρτησης MMULT.",
          example: "A1:B3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "πίνακας2",
          detail: "Παράμετρος `πίνακας2` της συνάρτησης MMULT.",
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
      d: "Περιγραφή της συνάρτησης SUMPRODUCT.",
      a: "Σύνοψη της συνάρτησης SUMPRODUCT.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "πίνακας1",
          detail: "Παράμετρος `πίνακας1` της συνάρτησης SUMPRODUCT.",
          example: "A2:C5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "πίνακας2",
          detail: "Παράμετρος `πίνακας2` της συνάρτησης SUMPRODUCT.",
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
      d: "Περιγραφή της συνάρτησης ISFORMULA.",
      a: "Σύνοψη της συνάρτησης ISFORMULA.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "κελί",
          detail: "Παράμετρος `κελί` της συνάρτησης ISFORMULA.",
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
      d: "Περιγραφή της συνάρτησης CELL.",
      a: "Σύνοψη της συνάρτησης CELL.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "τύπος_πληροφορίας",
          detail: "Παράμετρος `τύπος_πληροφορίας` της συνάρτησης CELL.",
          example: "\"type\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "αναφορά",
          detail: "Παράμετρος `αναφορά` της συνάρτησης CELL.",
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
      d: "Περιγραφή της συνάρτησης NA.",
      a: "Σύνοψη της συνάρτησης NA.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "ERROR_TYPE",
      t: 15,
      d: "Περιγραφή της συνάρτησης ERROR_TYPE.",
      a: "Σύνοψη της συνάρτησης ERROR_TYPE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "αναφορά",
          detail: "Παράμετρος `αναφορά` της συνάρτησης ERROR_TYPE.",
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
      d: "Περιγραφή της συνάρτησης ISBLANK.",
      a: "Σύνοψη της συνάρτησης ISBLANK.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ISBLANK.",
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
      d: "Περιγραφή της συνάρτησης ISERR.",
      a: "Σύνοψη της συνάρτησης ISERR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ISERR.",
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
      d: "Περιγραφή της συνάρτησης ISERROR.",
      a: "Σύνοψη της συνάρτησης ISERROR.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ISERROR.",
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
      d: "Περιγραφή της συνάρτησης ISLOGICAL.",
      a: "Σύνοψη της συνάρτησης ISLOGICAL.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ISLOGICAL.",
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
      d: "Περιγραφή της συνάρτησης ISNA.",
      a: "Σύνοψη της συνάρτησης ISNA.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ISNA.",
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
      d: "Περιγραφή της συνάρτησης ISNONTEXT.",
      a: "Σύνοψη της συνάρτησης ISNONTEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ISNONTEXT.",
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
      d: "Περιγραφή της συνάρτησης ISNUMBER.",
      a: "Σύνοψη της συνάρτησης ISNUMBER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ISNUMBER.",
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
      d: "Περιγραφή της συνάρτησης ISREF.",
      a: "Σύνοψη της συνάρτησης ISREF.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ISREF.",
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
      d: "Περιγραφή της συνάρτησης ISTEXT.",
      a: "Σύνοψη της συνάρτησης ISTEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης ISTEXT.",
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
      d: "Περιγραφή της συνάρτησης TYPE.",
      a: "Σύνοψη της συνάρτησης TYPE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης TYPE.",
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
      d: "Περιγραφή της συνάρτησης N.",
      a: "Σύνοψη της συνάρτησης N.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης N.",
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
      d: "Περιγραφή της συνάρτησης TO_DATE.",
      a: "Σύνοψη της συνάρτησης TO_DATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης TO_DATE.",
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
      d: "Περιγραφή της συνάρτησης TO_PURE_NUMBER.",
      a: "Σύνοψη της συνάρτησης TO_PURE_NUMBER.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης TO_PURE_NUMBER.",
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
      d: "Περιγραφή της συνάρτησης TO_TEXT.",
      a: "Σύνοψη της συνάρτησης TO_TEXT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης TO_TEXT.",
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
      d: "Περιγραφή της συνάρτησης TO_DOLLARS.",
      a: "Σύνοψη της συνάρτησης TO_DOLLARS.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης TO_DOLLARS.",
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
      d: "Περιγραφή της συνάρτησης TO_PERCENT.",
      a: "Σύνοψη της συνάρτησης TO_PERCENT.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          detail: "Παράμετρος `τιμή` της συνάρτησης TO_PERCENT.",
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
      d: "Περιγραφή της συνάρτησης DGET.",
      a: "Σύνοψη της συνάρτησης DGET.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "βάση_δεδομένων",
          detail: "Παράμετρος `βάση_δεδομένων` της συνάρτησης DGET.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "πεδίο",
          detail: "Παράμετρος `πεδίο` της συνάρτησης DGET.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κριτήρια",
          detail: "Παράμετρος `κριτήρια` της συνάρτησης DGET.",
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
      d: "Περιγραφή της συνάρτησης DMAX.",
      a: "Σύνοψη της συνάρτησης DMAX.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "βάση_δεδομένων",
          detail: "Παράμετρος `βάση_δεδομένων` της συνάρτησης DMAX.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "πεδίο",
          detail: "Παράμετρος `πεδίο` της συνάρτησης DMAX.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κριτήρια",
          detail: "Παράμετρος `κριτήρια` της συνάρτησης DMAX.",
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
      d: "Περιγραφή της συνάρτησης DMIN.",
      a: "Σύνοψη της συνάρτησης DMIN.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "βάση_δεδομένων",
          detail: "Παράμετρος `βάση_δεδομένων` της συνάρτησης DMIN.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "πεδίο",
          detail: "Παράμετρος `πεδίο` της συνάρτησης DMIN.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κριτήρια",
          detail: "Παράμετρος `κριτήρια` της συνάρτησης DMIN.",
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
      d: "Περιγραφή της συνάρτησης DAVERAGE.",
      a: "Σύνοψη της συνάρτησης DAVERAGE.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "βάση_δεδομένων",
          detail: "Παράμετρος `βάση_δεδομένων` της συνάρτησης DAVERAGE.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "πεδίο",
          detail: "Παράμετρος `πεδίο` της συνάρτησης DAVERAGE.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κριτήρια",
          detail: "Παράμετρος `κριτήρια` της συνάρτησης DAVERAGE.",
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
      d: "Περιγραφή της συνάρτησης DCOUNT.",
      a: "Σύνοψη της συνάρτησης DCOUNT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "βάση_δεδομένων",
          detail: "Παράμετρος `βάση_δεδομένων` της συνάρτησης DCOUNT.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "πεδίο",
          detail: "Παράμετρος `πεδίο` της συνάρτησης DCOUNT.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κριτήρια",
          detail: "Παράμετρος `κριτήρια` της συνάρτησης DCOUNT.",
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
      d: "Περιγραφή της συνάρτησης DCOUNTA.",
      a: "Σύνοψη της συνάρτησης DCOUNTA.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "βάση_δεδομένων",
          detail: "Παράμετρος `βάση_δεδομένων` της συνάρτησης DCOUNTA.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "πεδίο",
          detail: "Παράμετρος `πεδίο` της συνάρτησης DCOUNTA.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κριτήρια",
          detail: "Παράμετρος `κριτήρια` της συνάρτησης DCOUNTA.",
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
      d: "Περιγραφή της συνάρτησης DPRODUCT.",
      a: "Σύνοψη της συνάρτησης DPRODUCT.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "βάση_δεδομένων",
          detail: "Παράμετρος `βάση_δεδομένων` της συνάρτησης DPRODUCT.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "πεδίο",
          detail: "Παράμετρος `πεδίο` της συνάρτησης DPRODUCT.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κριτήρια",
          detail: "Παράμετρος `κριτήρια` της συνάρτησης DPRODUCT.",
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
      d: "Περιγραφή της συνάρτησης DSTDEV.",
      a: "Σύνοψη της συνάρτησης DSTDEV.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "βάση_δεδομένων",
          detail: "Παράμετρος `βάση_δεδομένων` της συνάρτησης DSTDEV.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "πεδίο",
          detail: "Παράμετρος `πεδίο` της συνάρτησης DSTDEV.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κριτήρια",
          detail: "Παράμετρος `κριτήρια` της συνάρτησης DSTDEV.",
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
      d: "Περιγραφή της συνάρτησης DSTDEVP.",
      a: "Σύνοψη της συνάρτησης DSTDEVP.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "βάση_δεδομένων",
          detail: "Παράμετρος `βάση_δεδομένων` της συνάρτησης DSTDEVP.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "πεδίο",
          detail: "Παράμετρος `πεδίο` της συνάρτησης DSTDEVP.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κριτήρια",
          detail: "Παράμετρος `κριτήρια` της συνάρτησης DSTDEVP.",
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
      d: "Περιγραφή της συνάρτησης DSUM.",
      a: "Σύνοψη της συνάρτησης DSUM.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "βάση_δεδομένων",
          detail: "Παράμετρος `βάση_δεδομένων` της συνάρτησης DSUM.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "πεδίο",
          detail: "Παράμετρος `πεδίο` της συνάρτησης DSUM.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κριτήρια",
          detail: "Παράμετρος `κριτήρια` της συνάρτησης DSUM.",
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
      d: "Περιγραφή της συνάρτησης DVAR.",
      a: "Σύνοψη της συνάρτησης DVAR.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "βάση_δεδομένων",
          detail: "Παράμετρος `βάση_δεδομένων` της συνάρτησης DVAR.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "πεδίο",
          detail: "Παράμετρος `πεδίο` της συνάρτησης DVAR.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κριτήρια",
          detail: "Παράμετρος `κριτήρια` της συνάρτησης DVAR.",
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
      d: "Περιγραφή της συνάρτησης DVARP.",
      a: "Σύνοψη της συνάρτησης DVARP.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "βάση_δεδομένων",
          detail: "Παράμετρος `βάση_δεδομένων` της συνάρτησης DVARP.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "πεδίο",
          detail: "Παράμετρος `πεδίο` της συνάρτησης DVARP.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "κριτήρια",
          detail: "Παράμετρος `κριτήρια` της συνάρτησης DVARP.",
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
      d: "Περιγραφή της συνάρτησης AGE_BY_IDCARD.",
      a: "Σύνοψη της συνάρτησης AGE_BY_IDCARD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Αριθμός ταυτότητας",
          example: "A1",
          detail: "Παράμετρος `Αριθμός ταυτότητας` της συνάρτησης AGE_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Προθεσμία",
          example: "\"2017-10-01\"",
          detail: "Παράμετρος `Προθεσμία` της συνάρτησης AGE_BY_IDCARD.",
          require: "o",
          repeat: "n",
          type: "rangedatetime"
        }
      ]
    },
    {
      n: "SEX_BY_IDCARD",
      t: "3",
      d: "Περιγραφή της συνάρτησης SEX_BY_IDCARD.",
      a: "Σύνοψη της συνάρτησης SEX_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Αριθμός ταυτότητας",
          example: "\"31033519900101XXXX\"",
          detail: "Παράμετρος `Αριθμός ταυτότητας` της συνάρτησης SEX_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BIRTHDAY_BY_IDCARD",
      t: "3",
      d: "Περιγραφή της συνάρτησης BIRTHDAY_BY_IDCARD.",
      a: "Σύνοψη της συνάρτησης BIRTHDAY_BY_IDCARD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Αριθμός ταυτότητας",
          example: "\"31033519900101XXXX\"",
          detail: "Παράμετρος `Αριθμός ταυτότητας` της συνάρτησης BIRTHDAY_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Μορφή ημερομηνίας γέννησης",
          example: "0",
          detail: "Παράμετρος `Μορφή ημερομηνίας γέννησης` της συνάρτησης BIRTHDAY_BY_IDCARD.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PROVINCE_BY_IDCARD",
      t: "3",
      d: "Περιγραφή της συνάρτησης PROVINCE_BY_IDCARD.",
      a: "Σύνοψη της συνάρτησης PROVINCE_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Αριθμός ταυτότητας",
          example: "\"31033519900101XXXX\"",
          detail: "Παράμετρος `Αριθμός ταυτότητας` της συνάρτησης PROVINCE_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "CITY_BY_IDCARD",
      t: "3",
      d: "Περιγραφή της συνάρτησης CITY_BY_IDCARD.",
      a: "Σύνοψη της συνάρτησης CITY_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Αριθμός ταυτότητας",
          example: "\"31033519900101XXXX\"",
          detail: "Παράμετρος `Αριθμός ταυτότητας` της συνάρτησης CITY_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STAR_BY_IDCARD",
      t: "3",
      d: "Περιγραφή της συνάρτησης STAR_BY_IDCARD.",
      a: "Σύνοψη της συνάρτησης STAR_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Αριθμός ταυτότητας",
          example: "\"31033519900101XXXX\"",
          detail: "Παράμετρος `Αριθμός ταυτότητας` της συνάρτησης STAR_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ANIMAL_BY_IDCARD",
      t: "3",
      d: "Περιγραφή της συνάρτησης ANIMAL_BY_IDCARD.",
      a: "Σύνοψη της συνάρτησης ANIMAL_BY_IDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Αριθμός ταυτότητας",
          example: "\"31033519900101XXXX\"",
          detail: "Παράμετρος `Αριθμός ταυτότητας` της συνάρτησης ANIMAL_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISIDCARD",
      t: "3",
      d: "Περιγραφή της συνάρτησης ISIDCARD.",
      a: "Σύνοψη της συνάρτησης ISIDCARD.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Αριθμός ταυτότητας",
          example: "\"31033519900101XXXX\"",
          detail: "Παράμετρος `Αριθμός ταυτότητας` της συνάρτησης ISIDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DM_TEXT_CUTWORD",
      t: "4",
      d: "Περιγραφή της συνάρτησης DM_TEXT_CUTWORD.",
      a: "Σύνοψη της συνάρτησης DM_TEXT_CUTWORD.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Κείμενο",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Παράμετρος `Κείμενο` της συνάρτησης DM_TEXT_CUTWORD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Λειτουργία κατάτμησης λέξεων",
          example: "0",
          detail: "Παράμετρος `Λειτουργία κατάτμησης λέξεων` της συνάρτησης DM_TEXT_CUTWORD.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DM_TEXT_TFIDF",
      t: "4",
      d: "Περιγραφή της συνάρτησης DM_TEXT_TFIDF.",
      a: "Σύνοψη της συνάρτησης DM_TEXT_TFIDF.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Κείμενο",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Παράμετρος `Κείμενο` της συνάρτησης DM_TEXT_TFIDF.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Αριθμός λέξεων-κλειδιών",
          example: "20",
          detail: "Παράμετρος `Αριθμός λέξεων-κλειδιών` της συνάρτησης DM_TEXT_TFIDF.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "Σώμα κειμένων",
          example: "1",
          detail: "Παράμετρος `Σώμα κειμένων` της συνάρτησης DM_TEXT_TFIDF.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DM_TEXT_TEXTRANK",
      t: "4",
      d: "Περιγραφή της συνάρτησης DM_TEXT_TEXTRANK.",
      a: "Σύνοψη της συνάρτησης DM_TEXT_TEXTRANK.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Κείμενο",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Παράμετρος `Κείμενο` της συνάρτησης DM_TEXT_TEXTRANK.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Αριθμός λέξεων-κλειδιών",
          example: "20",
          detail: "Παράμετρος `Αριθμός λέξεων-κλειδιών` της συνάρτησης DM_TEXT_TEXTRANK.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "Σώμα κειμένων",
          example: "1",
          detail: "Παράμετρος `Σώμα κειμένων` της συνάρτησης DM_TEXT_TEXTRANK.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_CLOSE",
      t: "5",
      d: "Περιγραφή της συνάρτησης DATA_CN_STOCK_CLOSE.",
      a: "Σύνοψη της συνάρτησης DATA_CN_STOCK_CLOSE.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Κωδικός μετοχής",
          example: "\"000001\"",
          detail: "Παράμετρος `Κωδικός μετοχής` της συνάρτησης DATA_CN_STOCK_CLOSE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Ημερομηνία",
          example: "2015-01-08",
          detail: "Παράμετρος `Ημερομηνία` της συνάρτησης DATA_CN_STOCK_CLOSE.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Τύπος αναπροσαρμογής μετοχής",
          example: "0",
          detail: "Παράμετρος `Τύπος αναπροσαρμογής μετοχής` της συνάρτησης DATA_CN_STOCK_CLOSE.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_OPEN",
      t: "5",
      d: "Περιγραφή της συνάρτησης DATA_CN_STOCK_OPEN.",
      a: "Σύνοψη της συνάρτησης DATA_CN_STOCK_OPEN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Κωδικός μετοχής",
          example: "\"000001\"",
          detail: "Παράμετρος `Κωδικός μετοχής` της συνάρτησης DATA_CN_STOCK_OPEN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Ημερομηνία",
          example: "2015-01-08",
          detail: "Παράμετρος `Ημερομηνία` της συνάρτησης DATA_CN_STOCK_OPEN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Τύπος αναπροσαρμογής μετοχής",
          example: "0",
          detail: "Παράμετρος `Τύπος αναπροσαρμογής μετοχής` της συνάρτησης DATA_CN_STOCK_OPEN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_MAX",
      t: "5",
      d: "Περιγραφή της συνάρτησης DATA_CN_STOCK_MAX.",
      a: "Σύνοψη της συνάρτησης DATA_CN_STOCK_MAX.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Κωδικός μετοχής",
          example: "\"000001\"",
          detail: "Παράμετρος `Κωδικός μετοχής` της συνάρτησης DATA_CN_STOCK_MAX.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Ημερομηνία",
          example: "2015-01-08",
          detail: "Παράμετρος `Ημερομηνία` της συνάρτησης DATA_CN_STOCK_MAX.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Τύπος αναπροσαρμογής μετοχής",
          example: "0",
          detail: "Παράμετρος `Τύπος αναπροσαρμογής μετοχής` της συνάρτησης DATA_CN_STOCK_MAX.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_MIN",
      t: "5",
      d: "Περιγραφή της συνάρτησης DATA_CN_STOCK_MIN.",
      a: "Σύνοψη της συνάρτησης DATA_CN_STOCK_MIN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Κωδικός μετοχής",
          example: "\"000001\"",
          detail: "Παράμετρος `Κωδικός μετοχής` της συνάρτησης DATA_CN_STOCK_MIN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Ημερομηνία",
          example: "2015-01-08",
          detail: "Παράμετρος `Ημερομηνία` της συνάρτησης DATA_CN_STOCK_MIN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Τύπος αναπροσαρμογής μετοχής",
          example: "0",
          detail: "Παράμετρος `Τύπος αναπροσαρμογής μετοχής` της συνάρτησης DATA_CN_STOCK_MIN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_VOLUMN",
      t: "5",
      d: "Περιγραφή της συνάρτησης DATA_CN_STOCK_VOLUMN.",
      a: "Σύνοψη της συνάρτησης DATA_CN_STOCK_VOLUMN.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Κωδικός μετοχής",
          example: "\"000001\"",
          detail: "Παράμετρος `Κωδικός μετοχής` της συνάρτησης DATA_CN_STOCK_VOLUMN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Ημερομηνία",
          example: "2015-01-08",
          detail: "Παράμετρος `Ημερομηνία` της συνάρτησης DATA_CN_STOCK_VOLUMN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Τύπος αναπροσαρμογής μετοχής",
          example: "0",
          detail: "Παράμετρος `Τύπος αναπροσαρμογής μετοχής` της συνάρτησης DATA_CN_STOCK_VOLUMN.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_AMOUNT",
      t: "5",
      d: "Περιγραφή της συνάρτησης DATA_CN_STOCK_AMOUNT.",
      a: "Σύνοψη της συνάρτησης DATA_CN_STOCK_AMOUNT.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Κωδικός μετοχής",
          example: "\"000001\"",
          detail: "Παράμετρος `Κωδικός μετοχής` της συνάρτησης DATA_CN_STOCK_AMOUNT.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Ημερομηνία",
          example: "2015-01-08",
          detail: "Παράμετρος `Ημερομηνία` της συνάρτησης DATA_CN_STOCK_AMOUNT.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Τύπος αναπροσαρμογής μετοχής",
          example: "0",
          detail: "Παράμετρος `Τύπος αναπροσαρμογής μετοχής` της συνάρτησης DATA_CN_STOCK_AMOUNT.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ISDATE",
      t: "6",
      d: "Περιγραφή της συνάρτησης ISDATE.",
      a: "Σύνοψη της συνάρτησης ISDATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "τιμή",
          example: "\"1990-01-01\"",
          detail: "Παράμετρος `τιμή` της συνάρτησης ISDATE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LINESPLINES",
      t: "3",
      d: "Περιγραφή της συνάρτησης LINESPLINES.",
      a: "Σύνοψη της συνάρτησης LINESPLINES.",
      m: [
        1,
        8
      ],
      p: [
        {
          name: "Εύρος",
          example: "A1:A20",
          detail: "Παράμετρος `Εύρος` της συνάρτησης LINESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα γραμμής",
          example: "#2ec7c9",
          detail: "Παράμετρος `Χρώμα γραμμής` της συνάρτησης LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Πάχος γραμμής",
          example: "1",
          detail: "Παράμετρος `Πάχος γραμμής` της συνάρτησης LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Βοηθητική γραμμή",
          example: "avg",
          detail: "Παράμετρος `Βοηθητική γραμμή` της συνάρτησης LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα βοηθητικής γραμμής",
          example: "#000",
          detail: "Παράμετρος `Χρώμα βοηθητικής γραμμής` της συνάρτησης LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Μέγιστος δείκτης",
          example: "#fc5c5c",
          detail: "Παράμετρος `Μέγιστος δείκτης` της συνάρτησης LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Ελάχιστος δείκτης",
          example: "#fc5c5c",
          detail: "Παράμετρος `Ελάχιστος δείκτης` της συνάρτησης LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Μέγεθος δείκτη",
          example: "1.5",
          detail: "Παράμετρος `Μέγεθος δείκτη` της συνάρτησης LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "AREASPLINES",
      t: "3",
      d: "Περιγραφή της συνάρτησης AREASPLINES.",
      a: "Σύνοψη της συνάρτησης AREASPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Εύρος",
          example: "A1:A20",
          detail: "Παράμετρος `Εύρος` της συνάρτησης AREASPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα γραμμής",
          example: "#2ec7c9",
          detail: "Παράμετρος `Χρώμα γραμμής` της συνάρτησης AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα γεμίσματος",
          example: "#CCF3F4",
          detail: "Παράμετρος `Χρώμα γεμίσματος` της συνάρτησης AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Πάχος γραμμής",
          example: "1",
          detail: "Παράμετρος `Πάχος γραμμής` της συνάρτησης AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Βοηθητική γραμμή",
          example: "avg",
          detail: "Παράμετρος `Βοηθητική γραμμή` της συνάρτησης AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα βοηθητικής γραμμής",
          example: "#000",
          detail: "Παράμετρος `Χρώμα βοηθητικής γραμμής` της συνάρτησης AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COLUMNSPLINES",
      t: "3",
      d: "Περιγραφή της συνάρτησης COLUMNSPLINES.",
      a: "Σύνοψη της συνάρτησης COLUMNSPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Εύρος",
          example: "A1:A20",
          detail: "Παράμετρος `Εύρος` της συνάρτησης COLUMNSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Διάστημα ράβδων",
          example: "1",
          detail: "Παράμετρος `Διάστημα ράβδων` της συνάρτησης COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα ράβδου",
          example: "#fc5c5c",
          detail: "Παράμετρος `Χρώμα ράβδου` της συνάρτησης COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα αρνητικών ράβδων",
          example: "#97b552",
          detail: "Παράμετρος `Χρώμα αρνητικών ράβδων` της συνάρτησης COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Μέγιστο",
          example: "100",
          detail: "Παράμετρος `Μέγιστο` της συνάρτησης COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Παλέτα χρωμάτων",
          example: "#97b552",
          detail: "Παράμετρος `Παλέτα χρωμάτων` της συνάρτησης COLUMNSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STACKCOLUMNSPLINES",
      t: "3",
      d: "Περιγραφή της συνάρτησης STACKCOLUMNSPLINES.",
      a: "Σύνοψη της συνάρτησης STACKCOLUMNSPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Εύρος",
          example: "A1:A20",
          detail: "Παράμετρος `Εύρος` της συνάρτησης STACKCOLUMNSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Στοίβαξη ανά στήλη",
          example: "1",
          detail: "Παράμετρος `Στοίβαξη ανά στήλη` της συνάρτησης STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Διάστημα ράβδων",
          example: "1",
          detail: "Παράμετρος `Διάστημα ράβδων` της συνάρτησης STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Μέγιστο",
          example: "100",
          detail: "Παράμετρος `Μέγιστο` της συνάρτησης STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Παλέτα χρωμάτων",
          example: "#97b552",
          detail: "Παράμετρος `Παλέτα χρωμάτων` της συνάρτησης STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BARSPLINES",
      t: "3",
      d: "Περιγραφή της συνάρτησης BARSPLINES.",
      a: "Σύνοψη της συνάρτησης BARSPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Εύρος",
          example: "A1:A20",
          detail: "Παράμετρος `Εύρος` της συνάρτησης BARSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Διάστημα ράβδων",
          example: "1",
          detail: "Παράμετρος `Διάστημα ράβδων` της συνάρτησης BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα ράβδου",
          example: "#fc5c5c",
          detail: "Παράμετρος `Χρώμα ράβδου` της συνάρτησης BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα αρνητικών ράβδων",
          example: "#97b552",
          detail: "Παράμετρος `Χρώμα αρνητικών ράβδων` της συνάρτησης BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Μέγιστο",
          example: "100",
          detail: "Παράμετρος `Μέγιστο` της συνάρτησης BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Παλέτα χρωμάτων",
          example: "#97b552",
          detail: "Παράμετρος `Παλέτα χρωμάτων` της συνάρτησης BARSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STACKBARSPLINES",
      t: "3",
      d: "Περιγραφή της συνάρτησης STACKBARSPLINES.",
      a: "Σύνοψη της συνάρτησης STACKBARSPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Εύρος",
          example: "A1:A20",
          detail: "Παράμετρος `Εύρος` της συνάρτησης STACKBARSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Στοίβαξη ανά στήλη",
          example: "1",
          detail: "Παράμετρος `Στοίβαξη ανά στήλη` της συνάρτησης STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Διάστημα ράβδων",
          example: "1",
          detail: "Παράμετρος `Διάστημα ράβδων` της συνάρτησης STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Μέγιστο",
          example: "100",
          detail: "Παράμετρος `Μέγιστο` της συνάρτησης STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Παλέτα χρωμάτων",
          example: "#97b552",
          detail: "Παράμετρος `Παλέτα χρωμάτων` της συνάρτησης STACKBARSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DISCRETESPLINES",
      t: "3",
      d: "Περιγραφή της συνάρτησης DISCRETESPLINES.",
      a: "Σύνοψη της συνάρτησης DISCRETESPLINES.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "Εύρος",
          example: "A1:A20",
          detail: "Παράμετρος `Εύρος` της συνάρτησης DISCRETESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Όριο κατάτμησης",
          example: "1",
          detail: "Παράμετρος `Όριο κατάτμησης` της συνάρτησης DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα πάνω από το όριο",
          example: "#2ec7c9",
          detail: "Παράμετρος `Χρώμα πάνω από το όριο` της συνάρτησης DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα κάτω από το όριο",
          example: "#fc5c5c",
          detail: "Παράμετρος `Χρώμα κάτω από το όριο` της συνάρτησης DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TRISTATESPLINES",
      t: "3",
      d: "Περιγραφή της συνάρτησης TRISTATESPLINES.",
      a: "Σύνοψη της συνάρτησης TRISTATESPLINES.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Εύρος",
          example: "A1:A20",
          detail: "Παράμετρος `Εύρος` της συνάρτησης TRISTATESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Διάστημα ράβδων",
          example: "1",
          detail: "Παράμετρος `Διάστημα ράβδων` της συνάρτησης TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα ράβδου",
          example: "#fc5c5c",
          detail: "Παράμετρος `Χρώμα ράβδου` της συνάρτησης TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα αρνητικών ράβδων",
          example: "#97b552",
          detail: "Παράμετρος `Χρώμα αρνητικών ράβδων` της συνάρτησης TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα ράβδων μηδενικής τιμής",
          example: "#999",
          detail: "Παράμετρος `Χρώμα ράβδων μηδενικής τιμής` της συνάρτησης TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Παλέτα χρωμάτων",
          example: "#97b552",
          detail: "Παράμετρος `Παλέτα χρωμάτων` της συνάρτησης TRISTATESPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PIESPLINES",
      t: "3",
      d: "Περιγραφή της συνάρτησης PIESPLINES.",
      a: "Σύνοψη της συνάρτησης PIESPLINES.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Εύρος",
          example: "A1:A20",
          detail: "Παράμετρος `Εύρος` της συνάρτησης PIESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Γωνία περιστροφής",
          example: "0",
          detail: "Παράμετρος `Γωνία περιστροφής` της συνάρτησης PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "περίγραμμα",
          example: "0",
          detail: "Παράμετρος `περίγραμμα` της συνάρτησης PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Χρώμα περιγράμματος",
          example: "#000",
          detail: "Παράμετρος `Χρώμα περιγράμματος` της συνάρτησης PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Παλέτα χρωμάτων",
          example: "#97b552",
          detail: "Παράμετρος `Παλέτα χρωμάτων` της συνάρτησης PIESPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BOXSPLINES",
      t: "3",
      d: "Περιγραφή της συνάρτησης BOXSPLINES.",
      a: "Σύνοψη της συνάρτησης BOXSPLINES.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "Εύρος",
          example: "A1:A20",
          detail: "Παράμετρος `Εύρος` της συνάρτησης BOXSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Λόγος ακραίων τιμών",
          example: "1.5",
          detail: "Παράμετρος `Λόγος ακραίων τιμών` της συνάρτησης BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Τιμή στόχου",
          example: "10",
          detail: "Παράμετρος `Τιμή στόχου` της συνάρτησης BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Μέγεθος σημείων",
          example: "1.5",
          detail: "Παράμετρος `Μέγεθος σημείων` της συνάρτησης BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BULLETSPLINES",
      t: "3",
      d: "Περιγραφή της συνάρτησης BULLETSPLINES.",
      a: "Σύνοψη της συνάρτησης BULLETSPLINES.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "Στόχος",
          example: "10",
          detail: "Παράμετρος `Στόχος` της συνάρτησης BULLETSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "επιτεύχθηκε",
          example: "8",
          detail: "Παράμετρος `επιτεύχθηκε` της συνάρτησης BULLETSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Τιμή σύγκρισης",
          example: "12",
          detail: "Παράμετρος `Τιμή σύγκρισης` της συνάρτησης BULLETSPLINES.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COMPOSESPLINES",
      t: "3",
      d: "Περιγραφή της συνάρτησης COMPOSESPLINES.",
      a: "Σύνοψη της συνάρτησης COMPOSESPLINES.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "διαμόρφωση",
          example: "PIESPLINES(A1:A20)",
          detail: "Παράμετρος `διαμόρφωση` της συνάρτησης COMPOSESPLINES.",
          require: "m",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "SORT",
      t: "14",
      d: "Περιγραφή της συνάρτησης SORT.",
      a: "Σύνοψη της συνάρτησης SORT.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "εύρος",
          detail: "Παράμετρος `εύρος` της συνάρτησης SORT.",
          example: "A2:A17",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "στήλη_ταξινόμησης",
          detail: "Παράμετρος `στήλη_ταξινόμησης` της συνάρτησης SORT.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "είναι_αύξουσα",
          detail: "Παράμετρος `είναι_αύξουσα` της συνάρτησης SORT.",
          example: "-1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "στήλη_ταξινόμησης2",
          detail: "Παράμετρος `στήλη_ταξινόμησης2` της συνάρτησης SORT.",
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
      d: "Περιγραφή της συνάρτησης FILTER.",
      a: "Σύνοψη της συνάρτησης FILTER.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "εύρος",
          detail: "Παράμετρος `εύρος` της συνάρτησης FILTER.",
          example: "A5:D20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "συνθήκη1",
          detail: "Παράμετρος `συνθήκη1` της συνάρτησης FILTER.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "συνθήκη2",
          detail: "Παράμετρος `συνθήκη2` της συνάρτησης FILTER.",
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
      d: "Περιγραφή της συνάρτησης UNIQUE.",
      a: "Σύνοψη της συνάρτησης UNIQUE.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "εύρος",
          detail: "Παράμετρος `εύρος` της συνάρτησης UNIQUE.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ανά_στήλη",
          detail: "Παράμετρος `ανά_στήλη` της συνάρτησης UNIQUE.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "μία_φορά",
          detail: "Παράμετρος `μία_φορά` της συνάρτησης UNIQUE.",
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
      d: "Περιγραφή της συνάρτησης RANDARRAY.",
      a: "Σύνοψη της συνάρτησης RANDARRAY.",
      m: [
        0,
        2
      ],
      p: [
        {
          name: "γραμμές",
          detail: "Παράμετρος `γραμμές` της συνάρτησης RANDARRAY.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "στήλες",
          detail: "Παράμετρος `στήλες` της συνάρτησης RANDARRAY.",
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
      d: "Περιγραφή της συνάρτησης SEQUENCE.",
      a: "Σύνοψη της συνάρτησης SEQUENCE.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "γραμμές",
          detail: "Παράμετρος `γραμμές` της συνάρτησης SEQUENCE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "στήλες",
          detail: "Παράμετρος `στήλες` της συνάρτησης SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "αρχή",
          detail: "Παράμετρος `αρχή` της συνάρτησης SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "βήμα",
          detail: "Παράμετρος `βήμα` της συνάρτησης SEQUENCE.",
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
      d: "Περιγραφή της συνάρτησης EVALUATE.",
      a: "Σύνοψη της συνάρτησης EVALUATE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "έκφραση",
          example: "\"A1+5*2^2\"",
          detail: "Παράμετρος `έκφραση` της συνάρτησης EVALUATE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "REMOTE",
      t: "5",
      d: "Περιγραφή της συνάρτησης REMOTE.",
      a: "Σύνοψη της συνάρτησης REMOTE.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "απομακρυσμένη_έκφραση",
          example: "SUM(A1:A10000000)",
          detail: "Παράμετρος `απομακρυσμένη_έκφραση` της συνάρτησης REMOTE.",
          require: "m",
          repeat: "n",
          type: "string"
        }
      ]
    }
  ],
  toolbar: {  "toolbar": "Γραμμή εργαλείων",
  "clear-format": "Απαλοιφή μορφοποίησης",
  "format-painter": "Αντιγραφή μορφοποίησης",
  "currency-format": "Μορφή νομίσματος",
  "percentage-format": "Μορφή ποσοστού",
  "number-decrease": "Μείωση δεκαδικών ψηφίων",
  "number-increase": "Αύξηση δεκαδικών ψηφίων",
  "border-all": "Όλα τα περιγράμματα",
  "merge-all": "Συγχώνευση όλων των κελιών",
  "format": "Μορφή",
  "font-size": "Μέγεθος γραμματοσειράς",
  "strike-through": "Διακριτική διαγραφή (Alt+Shift+5)",
  "font-color": "Χρώμα γραμματοσειράς",
  "align-left": "Στοίχιση αριστερά",
  "align-center": "Οριζόντια στοίχιση στο κέντρο",
  "align-right": "Στοίχιση δεξιά",
  "align-top": "Στοίχιση επάνω",
  "align-mid": "Κατακόρυφη στοίχιση στο κέντρο",
  "align-bottom": "Στοίχιση κάτω",
  "background": "Χρώμα γεμίσματος",
  "borderStyle": "Στυλ περιγράμματος",
  "merge-cell": "Συγχώνευση κελιών",
  "chooseMergeType": "Επιλογή τύπου συγχώνευσης",
  "horizontalAlign": "Οριζόντια στοίχιση",
  "verticalAlign": "Κατακόρυφη στοίχιση",
  "alignment": "Στοίχιση",
  "textWrap": "Αναδίπλωση κειμένου",
  "textRotate": "Περιστροφή κειμένου",
  "freeze": "Πάγωμα",
  "sort": "Ταξινόμηση",
  "filter": "Φίλτρο",
  "formula-sum": "SUM",
  "autoSum": "Αυτόματο άθροισμα",
  "moreFunction": "Περισσότερες συναρτήσεις",
  "comment": "Σχόλιο",
  "insertImage": "Εισαγωγή εικόνας",
  "insertLink": "Εισαγωγή συνδέσμου",
  "clearText": "Απαλοιφή χρώματος",
  "noColorSelectedText": "Δεν έχει επιλεγεί χρώμα",
  "toolMore": "Περισσότερα",
  "toolLess": "Λιγότερα",
  "toolClose": "Κλείσιμο",
  "toolMoreTip": "Περισσότερες λειτουργίες",
  "moreOptions": "Περισσότερες επιλογές",
  "cellFormat": "Ρύθμιση μορφής κελιού",

    undo: "Αναίρεση",
    redo: "Επανάληψη",
    paintFormat: "Αντιγραφή μορφοποίησης",
    currencyFormat: "Μορφή νομίσματος",
    percentageFormat: "Μορφή ποσοστού",
    numberDecrease: "Μείωση δεκαδικών",
    numberIncrease: "Αύξηση δεκαδικών",
    moreFormats: "Περισσότερες μορφές",
    font: "Γραμματοσειρά",
    fontSize: "Μέγεθος γραμματοσειράς",
    bold: "Έντονα",
    italic: "Πλάγια",
    strikethrough: "Διακριτή διαγραφή",
    underline: "Υπογράμμιση",
    textColor: "Χρώμα κειμένου",
    chooseColor: "Επιλογή χρώματος",
    resetColor: "Επαναφορά",
    customColor: "Προσαρμοσμένο",
    alternatingColors: "Εναλλασσόμενα χρώματα",
    confirmColor: "Επιβεβαίωση",
    cancelColor: "Ακύρωση",
    collapse: "Σύμπτυξη",
    fillColor: "Χρώμα γεμίσματος",
    border: "Περίγραμμα",
    mergeCell: "Συγχώνευση κελιών",
    horizontalAlignMode: "Οριζόντια στοίχιση",
    verticalAlignMode: "Κατακόρυφη στοίχιση",
    textWrapMode: "Αναδίπλωση κειμένου",
    textRotateMode: "Περιστροφή κειμένου",
    image: "Εικόνα",
    link: "Σύνδεσμος",
    chart: "Γράφημα",
    postil: "Σχόλιο",
    pivotTable: "Συγκεντρωτικός πίνακας",
    function: "Συνάρτηση",
    frozenMode: "Πάγωμα",
    sortAndFilter: "Ταξινόμηση και φίλτρο",
    conditionalFormat: "Μορφοποίηση υπό όρους",
    dataVerification: "Επικύρωση δεδομένων",
    splitColumn: "Κείμενο σε στήλες",
    screenshot: "Στιγμιότυπο",
    findAndReplace: "Εύρεση και αντικατάσταση",
    protection: "Προστασία",
    print: "Εκτύπωση",
    edit: "Επεξεργασία",
    save: "Αποθήκευση",
    preview: "Προεπισκόπηση",
    clear: "Εκκαθάριση",
    formatPainter: "Αντιγραφή μορφοποίησης",
    more: "Περισσότερα",
    formula: "Τύπος",
    insert: "Εισαγωγή",
    delete: "Διαγραφή",
    hide: "Απόκρυψη",
    show: "Εμφάνιση",
    data: "Δεδομένα",
    view: "Προβολή",
    share: "Κοινή χρήση",
    history: "Ιστορικό",
    copy: "Αντιγραφή",
    paste: "Επικόλληση",
    cut: "Αποκοπή",
    import: "Εισαγωγή",
    export: "Εξαγωγή",
    download: "Λήψη",
    upload: "Μεταφόρτωση",
    refresh: "Ανανέωση",
    zoom: "Ζουμ",
    help: "Βοήθεια",
    close: "Κλείσιμο",
    settings: "Ρυθμίσεις",
    fullscreen: "Πλήρης οθόνη",
    exitFullscreen: "Έξοδος από πλήρη οθόνη",
    gridlines: "Γραμμές πλέγματος",
    lock: "Κλείδωμα",
    unlock: "Ξεκλείδωμα"
  },
  alternatingColors: {
    applyRange: "Apply to range",
    selectRange: "Επιλογή περιοχής δεδομένων",
    header: "Header",
    footer: "Footer",
    errorInfo: "Αυτή η ενέργεια δεν μπορεί να εκτελεστεί σε πολλαπλές περιοχές επιλογής. Επιλέξτε μία περιοχή και δοκιμάστε ξανά.",
    textTitle: "Format style",
    custom: "CUSTOM",
    close: "Κλείσιμο",
    selectionTextColor: "Κάντε κλικ για επιλογή χρώματος κειμένου",
    selectionCellColor: "Κάντε κλικ για επιλογή χρώματος κελιού",
    removeColor: "Κατάργηση εναλλασσόμενων χρωμάτων",
    colorShow: "χρώμα",
    currentColor: "Current",
    tipSelectRange: "Επιλέξτε την περιοχή εναλλασσόμενων χρωμάτων",
    errorNoRange: "Δεν έχει επιλεγεί περιοχή",
    errorExistColors: "Τα εναλλασσόμενα χρώματα υπάρχουν ήδη και δεν μπορούν να τροποποιηθούν"
  },
  button: {
    confirm: "OK",
    cancel: "Ακύρωση",
    close: "Κλείσιμο",
    update: "Ενημέρωση",
    delete: "Διαγραφή",
    insert: "Εισαγωγή",
    prevPage: "Προηγούμενο",
    nextPage: "Επόμενο",
    total: "Σύνολο:",
    edit: "Επεξεργασία",
    add: "Προσθήκη",
    clear: "Εκκαθάριση",
    save: "Αποθήκευση",
    ok: "OK",
    yes: "Ναι",
    no: "Όχι",
    reset: "Επαναφορά",
    apply: "Εφαρμογή",
    search: "Αναζήτηση",
    replace: "Αντικατάσταση",
    done: "Τέλος"
  },
  paint: {  "tipNotMulti": "Αυτή η ενέργεια δεν είναι δυνατή σε πολλαπλές επιλεγμένες περιοχές",

    start: "Έναρξη αντιγραφής μορφοποίησης",
    end: "Λήξη αντιγραφής μορφοποίησης",
    tipSelectRange: "Επιλέξτε την περιοχή όπου θα εφαρμοστεί η μορφοποίηση"
  },
  format: {  "tipDecimalPlaces": "Τα δεκαδικά ψηφία πρέπει να είναι μεταξύ 0 και 9!",
  "select": "Επιλογή",
  "format": "Μορφή",

    moreCurrency: "Περισσότερες μορφές νομίσματος",
    moreDateTime: "Περισσότερες μορφές ημερομηνίας και ώρας",
    moreNumber: "Περισσότερες μορφές αριθμών",
    titleCurrency: "Μορφές νομίσματος",
    decimalPlaces: "Δεκαδικά ψηφία",
    titleDateTime: "Μορφές ημερομηνίας και ώρας",
    titleNumber: "Μορφές αριθμών",
    titleNumberFormat: "Μορφή αριθμού",
    formatError: "Σφάλμα μορφοποίησης",
    customFormat: "Προσαρμοσμένη μορφή",
    preview: "Προεπισκόπηση",
    tips: "Συμβουλή",
    example: "Παράδειγμα",
    type: "Τύπος",
    symbol: "Σύμβολο",
    currency: "Νόμισμα",
    date: "Ημερομηνία",
    time: "Ώρα",
    number: "Αριθμός",
    percent: "Ποσοστό",
    text: "Κείμενο",
    automatic: "Αυτόματο",
    accounting: "Λογιστική",
    scientific: "Επιστημονική",
    fraction: "Κλάσμα",
    duration: "Διάρκεια",
    normal: "Κανονικό",
    plainText: "Απλό κείμενο"
  },
  info: {  "noName": "Άτιτλο υπολογιστικό φύλλο",
  "add": "Προσθήκη",
  "addLast": "περισσότερες γραμμές στο κάτω μέρος",
  "backTop": "Επιστροφή στην κορυφή",
  "pageInfo": "Σύνολο ${total}, ${totalPage} σελίδες, τρέχουσα ${currentPage}",
  "nextPage": "Επόμενο",
  "tipInputNumber": "Εισαγάγετε τον αριθμό",
  "tipInputNumberLimit": "Το εύρος αύξησης περιορίζεται σε 1-100",
  "tipRowHeightLimit": "Το ύψος γραμμής πρέπει να είναι μεταξύ 0 και 545",
  "tipColumnWidthLimit": "Το πλάτος στήλης πρέπει να είναι μεταξύ 0 και 2038",
  "pageInfoFull": "Σύνολο ${total}, ${totalPage} σελίδες, όλα τα δεδομένα εμφανίζονται",
  "sheetIsFocused": "Το κλείδωμα εστίασης φύλλου ενεργοποιήθηκε.",
  "sheetNotFocused": "Το κλείδωμα εστίασης φύλλου απενεργοποιήθηκε.",
  "sheetSrIntro": "Για εναλλαγή εστίασης φύλλου ώστε να βοηθήσει στην πλοήγηση στη γραμμή εργαλείων, χρησιμοποιήστε Shift, Control, F.",
  "currentCellInput": "Εισαγωγή τρέχοντος κελιού",
  "newSheet": "Νέο φύλλο",
  "sheetOptions": "Επιλογές φύλλου",
  "Dropdown": "Αναπτυσσόμενη λίστα",
  "zoomIn": "Μεγέθυνση",
  "zoomOut": "Σμίκρυνση",
  "toggleSheetFocusShortcut": "Εναλλαγή κλειδώματος εστίασης φύλλου: Shift, Control, F.",
  "selectRangeShortcut": "Επιλογή περιοχής: Shift, πλήκτρα βέλους.",
  "autoFillDownShortcut": "Αυτόματη συμπλήρωση προς τα κάτω από το πρώτο κελί: Control ή Meta, D.",
  "autoFillRightShortcut": "Αυτόματη συμπλήρωση προς τα δεξιά από το πρώτο κελί: Control ή Meta, R.",
  "boldTextShortcut": "Έντονο κείμενο: Control ή Meta, B.",
  "copyShortcut": "Αντιγραφή: Control ή Meta, C.",
  "pasteShortcut": "Επικόλληση: Control ή Meta, V.",
  "undoShortcut": "Αναίρεση: Control ή Meta, Z.",
  "redoShortcut": "Επανάληψη: Control ή Meta, Shift, Z.",
  "deleteCellContentShortcut": "Διαγραφή περιεχομένου κελιού: Delete ή Backspace.",
  "confirmCellEditShortcut": "Επιβεβαίωση επεξεργασίας κελιού και μετακίνηση κάτω: Enter.",
  "moveRightShortcut": "Μετακίνηση δεξιά: Tab.",
  "moveLeftShortcut": "Μετακίνηση αριστερά: Shift, Tab.",
  "shortcuts": "Συντομεύσεις πληκτρολογίου",

    detailUpdate: "Η ενημέρωση ολοκληρώθηκε",
    detailSave: "Η αποθήκευση ολοκληρώθηκε",
    row: "Γραμμή",
    column: "Στήλη",
    loading: "Φόρτωση...",
    copy: "Αντιγράφηκε",
    return: "Επιστροφή",
    rename: "Μετονομασία",
    tips: "Συμβουλές",
    noData: "Δεν υπάρχουν δεδομένα",
    wait: "Παρακαλώ περιμένετε...",
    success: "Επιτυχία",
    error: "Σφάλμα",
    warning: "Προειδοποίηση"
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
    return [{ text: 'Αυτόματο', value: 'General', example: '' }, { text: 'Απλό κείμενο', value: '@', example: '' }, { text: '', value: 'split', example: '' }, { text: 'Αριθμός', value: '##0.00', example: '1000.12' }, { text: 'Ποσοστό', value: '#0.00%', example: '12.21%' }, { text: 'Επιστημονική', value: '0.00E+00', example: '1.01E+5' }, { text: '', value: 'split', example: '' }, { text: 'Λογιστική', value: ''.concat(currency, '(0.00)'), example: ''.concat(currency, '(1200.09)') }, { text: 'Νόμισμα', value: ''.concat(currency, '0.00'), example: ''.concat(currency, '1200.09') }, { text: '', value: 'split', example: '' }, { text: 'Ημερομηνία', value: 'yyyy-MM-dd', example: '2017-11-29' }, { text: 'Ώρα', value: 'hh:mm AM/PM', example: '3:00 PM' }, { text: 'Ώρα 24ωρη', value: 'hh:mm', example: '15:00' }, { text: 'Ημερομηνία και ώρα', value: 'yyyy-MM-dd hh:mm AM/PM', example: '2017-11-29 3:00 PM' }, { text: 'Ημερομηνία και ώρα 24ωρη', value: 'yyyy-MM-dd hh:mm', example: '2017-11-29 15:00' }, { text: '', value: 'split', example: '' }, { text: 'Προσαρμοσμένες μορφές', value: 'fmtOtherSelf', example: '', icon: 'rightArrow' }];
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
  border: {  "borderSlash": "Διαγώνιο περίγραμμα",
  "borderDefault": "Προεπιλογή",
  "borderStyle": "Στυλ περιγράμματος",

    borderTop: "Επάνω περίγραμμα",
    borderBottom: "Κάτω περίγραμμα",
    borderLeft: "Αριστερό περίγραμμα",
    borderRight: "Δεξί περίγραμμα",
    borderNone: "Χωρίς περίγραμμα",
    borderAll: "Όλα τα περιγράμματα",
    borderOutside: "Εξωτερικό περίγραμμα",
    borderInside: "Εσωτερικά περιγράμματα",
    borderHorizontal: "Εσωτερικά οριζόντια περιγράμματα",
    borderVertical: "Εσωτερικά κατακόρυφα περιγράμματα",
    borderColor: "Χρώμα περιγράμματος",
    borderSize: "Πάχος περιγράμματος",
    borderType: "Τύπος περιγράμματος",
    borderDiagonal: "Διαγώνιο περίγραμμα",
    borderDiagonalDown: "Διαγώνιο κάτω",
    borderDiagonalUp: "Διαγώνιο πάνω",
    borderDouble: "Διπλή γραμμή",
    borderDotted: "Διάστικτη γραμμή",
    borderDashed: "Διακεκομμένη γραμμή",
    borderSolid: "Συνεχής γραμμή",
    borderMedium: "Μεσαία γραμμή",
    borderThick: "Παχιά γραμμή",
    borderThin: "Λεπτή γραμμή",
    borderHair: "Πολύ λεπτή γραμμή"
  },
  merge: {
    mergeAll: "Συγχώνευση όλων",
    mergeV: "Κατακόρυφη συγχώνευση",
    mergeH: "Οριζόντια συγχώνευση",
    mergeCancel: "Κατάργηση συγχώνευσης",
    overlappingError: "Οι συγχωνευμένες περιοχές δεν μπορούν να επικαλύπτονται",
    partiallyError: "Αυτή η ενέργεια δεν μπορεί να εφαρμοστεί σε μερικώς συγχωνευμένα κελιά",
    confirm: "Κατά τη συγχώνευση διατηρείται μόνο η τιμή του επάνω αριστερού κελιού. Συνέχεια;",
    confirmTitle: "Συγχώνευση κελιών"
  },
  align: {
    left: "Αριστερά",
    center: "Κέντρο",
    right: "Δεξιά",
    top: "Επάνω",
    middle: "Μέση",
    bottom: "Κάτω",
    justify: "Πλήρης στοίχιση",
    general: "Γενικά"
  },
  textWrap: {
    overflow: "Υπερχείλιση",
    wrap: "Αναδίπλωση",
    clip: "Περικοπή"
  },
  rotation: {
    none: "Χωρίς περιστροφή",
    angleup: "Κλίση προς τα πάνω",
    angledown: "Κλίση προς τα κάτω",
    vertical: "Κατακόρυφο κείμενο",
    rotationUp: "Περιστροφή προς τα πάνω",
    rotationDown: "Περιστροφή προς τα κάτω"
  },
  freezen: {  "freezenRow": "Πρώτη γραμμή",
  "freezenColumn": "Πρώτη στήλη",
  "freezenRC": "Και τα δύο",
  "freezenRowRange": "Πάγωμα έως την τρέχουσα γραμμή",
  "freezenColumnRange": "Πάγωμα έως την τρέχουσα στήλη",
  "freezenRCRange": "Πάγωμα έως το τρέχον κελί",
  "freezenCancel": "Ακύρωση παγώματος",
  "noSeletionError": "Δεν έχει επιλεγεί περιοχή",
  "rangeRCOverErrorTitle": "Υπενθύμιση παγώματος",
  "rangeRCOverError": "Η παγωμένη περιοχή υπερβαίνει το ορατό εύρος, κάτι που μπορεί να προκαλέσει μη αναμενόμενη συμπεριφορά. Επαναφέρετε την παγωμένη περιοχή.",

    default: "Χωρίς πάγωμα",
    row: "Πάγωμα πρώτης γραμμής",
    column: "Πάγωμα πρώτης στήλης",
    both: "Πάγωμα γραμμών και στηλών",
    rangeRow: "Πάγωμα έως την τρέχουσα γραμμή",
    rangeColumn: "Πάγωμα έως την τρέχουσα στήλη",
    rangeBoth: "Πάγωμα έως την τρέχουσα περιοχή",
    cancel: "Κατάργηση παγώματος"
  },
  sort: {  "columnOperation": "Στήλη",
  "secondaryTitle": "στη συνέχεια κατά",
  "sortTitle": "Ταξινόμηση περιοχής",
  "sortRangeTitle": "Ταξινόμηση περιοχής από",
  "sortRangeTitleTo": "έως",
  "noRangeError": "Αυτή η ενέργεια δεν είναι δυνατή σε πολλαπλές επιλεγμένες περιοχές, επιλέξτε μία μόνο περιοχή και δοκιμάστε ξανά",

    asc: "Ταξινόμηση Α έως Ω",
    desc: "Ταξινόμηση Ω έως Α",
    custom: "Προσαρμοσμένη ταξινόμηση",
    hasTitle: "Τα δεδομένα έχουν κεφαλίδα",
    sortBy: "Ταξινόμηση κατά",
    addOthers: "Προσθήκη στήλης ταξινόμησης",
    close: "Κλείσιμο",
    confirm: "Ταξινόμηση",
    column: "Στήλη",
    order: "Σειρά",
    value: "Τιμές",
    color: "Χρώμα",
    ascTitle: "Αύξουσα",
    descTitle: "Φθίνουσα",
    sortRange: "Ταξινόμηση περιοχής",
    sortWarning: "Επιλέξτε περιοχή για ταξινόμηση.",
    singleRangeError: "Αυτή η ενέργεια δεν είναι διαθέσιμη για πολλαπλή επιλογή.",
    mergeError: "Για ταξινόμηση, όλα τα συγχωνευμένα κελιά πρέπει να έχουν το ίδιο μέγεθος."
  },
  filter: {  "filterByValues": "Φιλτράρισμα κατά τιμές",
  "filiterInputNone": "Καμία",
  "filiterInputTip": "Εισαγάγετε τιμή φίλτρου",
  "filiterRangeStartTip": "Τιμή για τύπο",
  "filiterRangeEndTip": "Τιμή για τύπο",
  "filterValueByAllBtn": "Επιλογή όλων",
  "filterValueByClearBtn": "Απαλοιφή",
  "filterValueByInverseBtn": "Αντιστροφή",
  "filterValueByTip": "Φιλτράρισμα κατά τιμές",
  "filterConform": "Επιβεβαίωση",
  "filterCancel": "Ακύρωση",
  "conditionCellGreater": "Μεγαλύτερο από",
  "conditionCellGreaterEqual": "Μεγαλύτερο ή ίσο με",
  "conditionCellLess": "Μικρότερο από",
  "conditionCellLessEqual": "Μικρότερο ή ίσο με",
  "conditionCellEqual": "Είναι ίσο με",
  "conditionCellNotEqual": "Δεν είναι ίσο με",
  "conditionCellBetween": "Είναι μεταξύ",
  "conditionCellNotBetween": "Δεν είναι μεταξύ",
  "filiterMoreDataTip": "Μεγάλος όγκος δεδομένων! Παρακαλώ περιμένετε",
  "filiterMonthText": "Μήνας",
  "filiterYearText": "Έτος",
  "filiterByColorTip": "Φιλτράρισμα κατά χρώμα κελιού",
  "filiterByTextColorTip": "Φιλτράρισμα κατά χρώμα γραμματοσειράς",
  "filterContainerOneColorTip": "Αυτή η στήλη περιέχει μόνο ένα χρώμα",
  "filterDateFormatTip": "Μορφή ημερομηνίας",
  "valueBlank": "(Κενό)",
  "mergeError": "Υπάρχουν συγχωνευμένα κελιά στην επιλογή φίλτρου, αυτή η ενέργεια δεν μπορεί να εκτελεστεί!",

    filter: "Δημιουργία φίλτρου",
    clearFilter: "Εκκαθάριση φίλτρου",
    sortByAsc: "Αύξουσα ταξινόμηση",
    sortByDesc: "Φθίνουσα ταξινόμηση",
    filterByColor: "Φιλτράρισμα κατά χρώμα",
    filterByCondition: "Φιλτράρισμα κατά συνθήκη",
    filterByValue: "Φιλτράρισμα κατά τιμή",
    search: "Αναζήτηση",
    selectAll: "Επιλογή όλων",
    empty: "(Κενό)",
    confirm: "OK",
    cancel: "Ακύρωση",
    conditionNone: "Καμία",
    conditionCellIsNull: "Το κελί είναι κενό",
    conditionCellNotNull: "Το κελί δεν είναι κενό",
    conditionCellTextContain: "Το κείμενο περιέχει",
    conditionCellTextNotContain: "Το κείμενο δεν περιέχει",
    conditionCellTextStart: "Το κείμενο αρχίζει με",
    conditionCellTextEnd: "Το κείμενο τελειώνει με",
    conditionCellTextEqual: "Το κείμενο είναι ίσο με",
    conditionCellDateEqual: "Η ημερομηνία είναι ίση με",
    conditionCellDateBefore: "Η ημερομηνία είναι πριν από",
    conditionCellDateAfter: "Η ημερομηνία είναι μετά από",
    conditionGreater: "Μεγαλύτερο από",
    conditionGreaterEqual: "Μεγαλύτερο ή ίσο με",
    conditionLess: "Μικρότερο από",
    conditionLessEqual: "Μικρότερο ή ίσο με",
    conditionEqual: "Ίσο με",
    conditionNotEqual: "Διαφορετικό από",
    conditionBetween: "Μεταξύ",
    conditionNotBetween: "Όχι μεταξύ",
    conditionCustom: "Προσαρμοσμένος τύπος",
    chooseColor: "Επιλογή χρώματος",
    textColor: "Χρώμα κειμένου",
    backgroundColor: "Χρώμα φόντου",
    clear: "Εκκαθάριση",
    noResult: "Δεν βρέθηκαν αποτελέσματα"
  },
  rightclick: {  "diagonal": "Διαγώνιος",
  "antiDiagonal": "Αντίστροφη διαγώνιος",
  "diagonalOffset": "Διαγώνια μετατόπιση",
  "offset": "Μετατόπιση",
  "boolean": "Δυαδική τιμή",
  "flip": "Αναστροφή",
  "upAndDown": "Πάνω και κάτω",
  "leftAndRight": "Αριστερά και δεξιά",
  "clockwise": "Δεξιόστροφα",
  "counterclockwise": "Αριστερόστροφα",
  "transpose": "Αντιμετάθεση",
  "matrixCalculation": "Υπολογισμός πίνακα",
  "plus": "Πρόσθεση",
  "minus": "Αφαίρεση",
  "multiply": "Πολλαπλασιασμός",
  "divided": "Διαίρεση",
  "power": "Δύναμη",
  "root": "Ρίζα",
  "log": "Λογάριθμος",
  "delete0": "Διαγραφή μηδενικών τιμών και στα δύο άκρα",
  "removeDuplicate": "Αφαίρεση διπλότυπων τιμών",
  "byRow": "Ανά γραμμή",
  "byCol": "Ανά στήλη",
  "generateNewMatrix": "Δημιουργία νέου πίνακα",
  "noMulti": "Αυτή η ενέργεια δεν είναι δυνατή σε πολλαπλές επιλεγμένες περιοχές, επιλέξτε μία μόνο περιοχή",
  "cannotDeleteAllRow": "Δεν είναι δυνατή η διαγραφή όλων των γραμμών",
  "cannotDeleteAllColumn": "Δεν είναι δυνατή η διαγραφή όλων των στηλών",
  "cannotDeleteRowReadOnly": "Δεν είναι δυνατή η διαγραφή γραμμής μόνο για ανάγνωση",
  "cannotDeleteColumnReadOnly": "Δεν είναι δυνατή η διαγραφή στήλης μόνο για ανάγνωση",
  "cannotInsertOnRowReadOnly": "Δεν είναι δυνατή η εισαγωγή σε γραμμή μόνο για ανάγνωση",
  "cannotInsertOnColumnReadOnly": "Δεν είναι δυνατή η εισαγωγή σε στήλη μόνο για ανάγνωση",
  "rowOverLimit": "Υπέρβαση ορίου 10.000 γραμμών",
  "columnOverLimit": "Υπέρβαση ορίου 1.000 στηλών",

    copy: "Αντιγραφή",
    copyAs: "Αντιγραφή ως",
    paste: "Επικόλληση",
    insert: "Εισαγωγή",
    delete: "Διαγραφή",
    deleteCell: "Διαγραφή κελιών",
    deleteSelected: "Διαγραφή επιλεγμένων",
    hide: "Απόκρυψη",
    hideSelected: "Απόκρυψη επιλεγμένων",
    showHide: "Εμφάνιση",
    to: "έως",
    left: "αριστερά",
    right: "δεξιά",
    top: "επάνω",
    bottom: "κάτω",
    moveLeft: "Μετακίνηση αριστερά",
    moveUp: "Μετακίνηση πάνω",
    add: "Προσθήκη",
    row: "Γραμμή",
    column: "Στήλη",
    width: "Πλάτος στήλης",
    height: "Ύψος γραμμής",
    number: "Αριθμός",
    confirm: "OK",
    orderAZ: "Ταξινόμηση Α έως Ω",
    orderZA: "Ταξινόμηση Ω έως Α",
    clearContent: "Εκκαθάριση περιεχομένων",
    matrix: "Λειτουργία πίνακα",
    sortSelection: "Ταξινόμηση επιλογής",
    filterSelection: "Φιλτράρισμα επιλογής",
    chartGeneration: "Δημιουργία γραφήματος",
    firstLineTitle: "Πρώτη γραμμή ως τίτλος",
    untitled: "Χωρίς τίτλο",
    array1: "Πίνακας 1",
    array2: "Πίνακας 2",
    array3: "Πίνακας 3",
    array4: "Πίνακας 4",
    array5: "Πίνακας 5",
    array6: "Πίνακας 6",
    leftTop: "Επάνω αριστερά",
    rightTop: "Επάνω δεξιά",
    leftBottom: "Κάτω αριστερά",
    rightBottom: "Κάτω δεξιά",
    dropCell: "Μετακίνηση κελιών προς τα κάτω",
    rightCell: "Μετακίνηση κελιών προς τα δεξιά",
    image: "Εισαγωγή εικόνας",
    link: "Εισαγωγή συνδέσμου",
    data: "Δεδομένα",
    cellFormat: "Μορφοποίηση κελιών",
    rowHeight: "Ύψος γραμμής",
    columnWidth: "Πλάτος στήλης",
    insertRow: "Εισαγωγή γραμμής",
    insertColumn: "Εισαγωγή στήλης",
    deleteRow: "Διαγραφή γραμμής",
    deleteColumn: "Διαγραφή στήλης"
  },
  comment: {  "showOne": "Εμφάνιση/Απόκρυψη",
  "showAll": "Εμφάνιση/Απόκρυψη όλων",

    insert: "Εισαγωγή σχολίου",
    edit: "Επεξεργασία σχολίου",
    delete: "Διαγραφή σχολίου",
    show: "Εμφάνιση σχολίου",
    hide: "Απόκρυψη σχολίου",
    reply: "Απάντηση",
    resolve: "Επίλυση",
    cancel: "Ακύρωση",
    save: "Αποθήκευση",
    placeholder: "Πληκτρολογήστε σχόλιο",
    commented: "Με σχόλιο"
  },
  screenshot: {  "screenshotImageName": "Στιγμιότυπο οθόνης",
  "downLoadClose": "Κλείσιμο",
  "downLoadCopy": "Αντιγραφή στο πρόχειρο",
  "downLoadBtn": "Λήψη",
  "browserNotTip": "δεν υποστηρίζεται από τον Internet Explorer!",
  "rightclickTip": "Κάντε δεξί κλικ στην εικόνα και επιλέξτε \"Αντιγραφή\"",
  "successTip": "Επιτυχία (αν η επικόλληση αποτύχει, κάντε δεξί κλικ στην εικόνα και επιλέξτε \"αντιγραφή εικόνας\")",

    screenshotTipNoSelection: "Επιλέξτε μια περιοχή",
    screenshotTipTitle: "Στιγμιότυπο",
    screenshotTipHasMerge: "Η επιλεγμένη περιοχή περιέχει συγχωνευμένα κελιά και δεν μπορεί να εξαχθεί ως εικόνα",
    screenshotTipHasMulti: "Επιλέξτε μόνο μία περιοχή",
    screenshotTipSuccess: "Το στιγμιότυπο δημιουργήθηκε",
    screenshotTipError: "Η δημιουργία στιγμιότυπου απέτυχε"
  },
  splitText: {  "splitSymbols": [
    {
      "name": "Tab",
      "value": "Tab"
    },
    {
      "name": "Ερωτηματικό",
      "value": "semicolon"
    },
    {
      "name": "Κόμμα",
      "value": "comma"
    },
    {
      "name": "Κενό διάστημα",
      "value": "space"
    }
  ],
  "tipNoMulti": "Αυτή η ενέργεια δεν είναι δυνατή σε πολλαπλές επιλεγμένες περιοχές, επιλέξτε μία μόνο περιοχή και δοκιμάστε ξανά",
  "tipNoMultiColumn": "Μπορεί να μετατραπεί μόνο μία στήλη δεδομένων κάθε φορά. Η επιλεγμένη περιοχή μπορεί να έχει πολλές γραμμές αλλά όχι πολλές στήλες. Δοκιμάστε ξανά αφού επιλέξετε μία μόνο στήλη",
  "tipNoSelect": "Δεν μπορείτε να διαχωρίσετε ένα κελί χωρίς να το επιλέξετε",

    splitDelimiters: "Οριοθέτες",
    splitOther: "Άλλο",
    splitContinueSymbol: "Αντιμετώπιση διαδοχικών οριοθετών ως ενός",
    splitDataPreview: "Προεπισκόπηση δεδομένων",
    splitTextTitle: "Κείμενο σε στήλες",
    splitConfirmToExe: "Εκτέλεση",
    splitCancel: "Ακύρωση",
    splitEmptyTip: "Επιλέξτε μια περιοχή",
    splitHasMergeTip: "Η επιλεγμένη περιοχή περιέχει συγχωνευμένα κελιά",
    splitColumnTip: "Επιλέξτε μία μόνο στήλη",
    splitType: "Τύπος",
    splitByDelimiters: "Με οριοθέτες",
    splitByFixedWidth: "Σταθερό πλάτος",
    splitSemicolon: "Ερωτηματικό",
    splitComma: "Κόμμα",
    splitSpace: "Κενό",
    splitTab: "Στηλοθέτης"
  },
  imageText: {  "moveCell1": "Μετακίνηση και αλλαγή μεγέθους κελιών",
  "moveCell2": "Μετακίνηση χωρίς αλλαγή μεγέθους κελιού",
  "moveCell3": "Χωρίς μετακίνηση ή αλλαγή μεγέθους κελιού",
  "fixedPos": "Σταθερή θέση",
  "border": "Περίγραμμα",
  "width": "Πλάτος",
  "radius": "Ακτίνα",
  "style": "Στυλ",
  "solid": "Συμπαγές",
  "dashed": "Διακεκομμένο",
  "dotted": "Διάστικτο",
  "double": "Διπλό",
  "color": "Χρώμα",

    imageSetting: "Ρυθμίσεις εικόνας",
    close: "Κλείσιμο",
    conventional: "Τυπικό",
    moveCell: "Μετακίνηση και αλλαγή μεγέθους με τα κελιά",
    moveNoSizeCell: "Μετακίνηση με τα κελιά χωρίς αλλαγή μεγέθους",
    noMoveSizeCell: "Χωρίς μετακίνηση ή αλλαγή μεγέθους με τα κελιά",
    title: "Τίτλος εικόνας",
    description: "Περιγραφή",
    upload: "Μεταφόρτωση εικόνας",
    position: "Θέση",
    crop: "Περικοπή",
    reset: "Επαναφορά",
    replace: "Αντικατάσταση",
    delete: "Διαγραφή",
    lockAspectRatio: "Κλείδωμα αναλογιών"
  },
  punctuation: {
    tab: "Στηλοθέτης",
    semicolon: "Ερωτηματικό",
    comma: "Κόμμα",
    space: "Κενό"
  },
  findAndReplace: {  "number": "Αριθμός",
  "string": "Κείμενο",
  "error": "Σφάλμα",
  "condition": "Συνθήκη",
  "rowSpan": "Συγχώνευση γραμμών",
  "columnSpan": "Συγχώνευση στηλών",
  "locationExample": "Θέση",
  "lessTwoRowTip": "Επιλέξτε τουλάχιστον δύο γραμμές",
  "lessTwoColumnTip": "Επιλέξτε τουλάχιστον δύο στήλες",
  "findTextbox": "Εύρεση περιεχομένου",
  "replaceTextbox": "Αντικατάσταση περιεχομένου",
  "regexTextbox": "Κανονική έκφραση",
  "wholeTextbox": "Ολόκληρη λέξη",
  "distinguishTextbox": "Διάκριση πεζών-κεφαλαίων",
  "allReplaceBtn": "Αντικατάσταση όλων",
  "replaceBtn": "Αντικατάσταση",
  "allFindBtn": "Εύρεση όλων",
  "findBtn": "Εύρεση επόμενου",
  "noFindTip": "Το περιεχόμενο δεν βρέθηκε",
  "modeTip": "Αυτή η ενέργεια δεν είναι διαθέσιμη σε αυτήν τη λειτουργία",
  "searchTargetSheet": "Φύλλο",
  "searchTargetCell": "Κελί",
  "searchTargetValue": "Τιμή",
  "searchInputTip": "Εισαγάγετε το περιεχόμενο αναζήτησης",
  "noReplceTip": "Δεν υπάρχει τίποτα προς αντικατάσταση",
  "noMatchTip": "Δεν βρέθηκε αντιστοιχία",
  "successTip": "Βρέθηκαν ${xlength} στοιχεία",
  "locationConstant": "Σταθερά",
  "locationFormula": "Τύπος",
  "locationDate": "Ημερομηνία",
  "locationDigital": "Αριθμός",
  "locationString": "Κείμενο",
  "locationBool": "Λογική τιμή",
  "locationError": "Σφάλμα",
  "locationNull": "Κενό",
  "locationCondition": "Μορφοποίηση υπό όρους",
  "locationRowSpan": "Συγχώνευση γραμμών",
  "locationColumnSpan": "Συγχώνευση στηλών",
  "locationTiplessTwoRow": "Επιλέξτε τουλάχιστον δύο γραμμές",
  "locationTiplessTwoColumn": "Επιλέξτε τουλάχιστον δύο στήλες",
  "locationTipNotFindCell": "Το κελί δεν βρέθηκε",

    find: "Εύρεση",
    replace: "Αντικατάσταση",
    goto: "Μετάβαση σε",
    location: "Αναζήτηση σε",
    formula: "Τύπος",
    date: "Ημερομηνία",
    value: "Τιμή",
    all: "Όλα",
    sheet: "Φύλλο",
    cell: "Κελί",
    row: "Γραμμή",
    column: "Στήλη",
    findContent: "Κείμενο αναζήτησης",
    replaceContent: "Αντικατάσταση με",
    caseSensitive: "Διάκριση πεζών/κεφαλαίων",
    matchEntireCell: "Ταίριασμα ολόκληρου κελιού",
    searchByRow: "Αναζήτηση κατά γραμμές",
    searchByColumn: "Αναζήτηση κατά στήλες",
    next: "Επόμενο",
    previous: "Προηγούμενο",
    replaceAll: "Αντικατάσταση όλων",
    replaceTip: "Η αντικατάσταση ολοκληρώθηκε",
    noResult: "Δεν βρέθηκαν αντιστοιχίες",
    mode: "Λειτουργία",
    range: "Περιοχή",
    workbook: "Βιβλίο εργασίας",
    worksheet: "Φύλλο εργασίας"
  },
  sheetconfig: {  "changeColor": "Αλλαγή χρώματος",
  "moveLeft": "Μετακίνηση αριστερά",
  "moveRight": "Μετακίνηση δεξιά",
  "resetColor": "Επαναφορά χρώματος",
  "cancelText": "Ακύρωση",
  "chooseText": "Επιβεβαίωση χρώματος",
  "focus": "Εστίαση",
  "tipNameRepeat": "Το όνομα του φύλλου δεν μπορεί να επαναλαμβάνεται! Παρακαλώ αλλάξτε το",
  "noMoreSheet": "Το βιβλίο εργασίας πρέπει να περιέχει τουλάχιστον ένα ορατό φύλλο εργασίας. Για να διαγράψετε το επιλεγμένο φύλλο, εισαγάγετε ένα νέο φύλλο ή εμφανίστε ένα κρυφό φύλλο.",
  "redoDelete": "Μπορεί να αναιρεθεί με Ctrl+Z",
  "noHide": "Δεν μπορεί να αποκρυφτεί, πρέπει να παραμείνει τουλάχιστον μία καρτέλα φύλλου",
  "chartEditNoOpt": "Αυτή η ενέργεια δεν επιτρέπεται σε λειτουργία επεξεργασίας γραφήματος!",
  "sheetNameSpecCharError": "Το όνομα δεν μπορεί να περιέχει: [ ] : ? * / ' \"",
  "sheetNamecannotIsEmptyError": "Το όνομα του φύλλου δεν μπορεί να είναι κενό",

    delete: "Διαγραφή",
    copy: "Αντιγραφή",
    rename: "Μετονομασία",
    color: "Αλλαγή χρώματος",
    hide: "Απόκρυψη",
    unhide: "Εμφάνιση",
    move: "Μετακίνηση",
    order: "Αλλαγή σειράς",
    protect: "Προστασία φύλλου",
    unprotect: "Κατάργηση προστασίας φύλλου",
    new: "Νέο φύλλο",
    tooltip: "Μενού φύλλου",
    name: "Όνομα",
    changeSheetName: "Αλλαγή ονόματος φύλλου",
    oldName: "Παλαιό όνομα",
    newName: "Νέο όνομα",
    errorNameRepeat: "Το όνομα φύλλου υπάρχει ήδη",
    errorNameNull: "Το όνομα φύλλου δεν μπορεί να είναι κενό",
    errorNameTooLong: "Το όνομα φύλλου δεν μπορεί να υπερβαίνει τους 31 χαρακτήρες",
    errorNameSpecChar: "Το όνομα φύλλου δεν μπορεί να περιέχει: [ ] : \\ ? * /",
    errorDelete: "Το βιβλίο εργασίας πρέπει να περιέχει τουλάχιστον ένα φύλλο",
    confirmDelete: "Διαγραφή αυτού του φύλλου;",
    confirmCopy: "Αντιγραφή αυτού του φύλλου;",
    success: "Επιτυχία",
    failed: "Αποτυχία"
  },
  conditionformat: {
    conditionformat_greaterThan: "Μεγαλύτερο από",
    conditionformat_greaterThan_title: "Μορφοποίηση κελιών που είναι μεγαλύτερα από",
    conditionformat_lessThan: "Μικρότερο από",
    conditionformat_lessThan_title: "Μορφοποίηση κελιών που είναι μικρότερα από",
    conditionformat_between: "Μεταξύ",
    conditionformat_between_title: "Μορφοποίηση κελιών που είναι μεταξύ των ακόλουθων τιμών",
    conditionformat_equal: "Ίσο με",
    conditionformat_equal_title: "Μορφοποίηση κελιών που είναι ίσα με",
    conditionformat_textContains: "Το κείμενο περιέχει",
    conditionformat_textContains_title: "Μορφοποίηση κελιών που περιέχουν το ακόλουθο κείμενο",
    conditionformat_occurrenceDate: "Ημερομηνία",
    conditionformat_occurrenceDate_title: "Μορφοποίηση κελιών που περιέχουν ημερομηνία",
    conditionformat_duplicateValue: "Διπλότυπες τιμές",
    conditionformat_duplicateValue_title: "Μορφοποίηση διπλότυπων τιμών",
    conditionformat_top10: "Κορυφαία 10",
    conditionformat_top10_percent: "Κορυφαίο 10%",
    conditionformat_last10: "Κατώτερα 10",
    conditionformat_last10_percent: "Κατώτερο 10%",
    conditionformat_aboveAverage: "Πάνω από τον μέσο όρο",
    conditionformat_belowAverage: "Κάτω από τον μέσο όρο",
    conditionformat_rule: "Κανόνας",
    conditionformat_newRule: "Νέος κανόνας",
    conditionformat_clearRules: "Εκκαθάριση κανόνων",
    conditionformat_manageRules: "Διαχείριση κανόνων",
    conditionformat_formatOnlyCells: "Μορφοποίηση μόνο κελιών με",
    conditionformat_cellValue: "Τιμή κελιού",
    conditionformat_specificText: "Συγκεκριμένο κείμενο",
    conditionformat_dateOccurring: "Ημερομηνία που εμφανίζεται",
    conditionformat_blanks: "Κενά",
    conditionformat_noBlanks: "Μη κενά",
    conditionformat_errors: "Σφάλματα",
    conditionformat_noErrors: "Χωρίς σφάλματα",
    conditionformat_formula: "Τύπος",
    conditionformat_operator: "Τελεστής",
    conditionformat_format: "Μορφή",
    conditionformat_preview: "Προεπισκόπηση",
    conditionformat_ok: "OK",
    conditionformat_cancel: "Ακύρωση",
    conditionformat_delete: "Διαγραφή",
    conditionformat_add: "Προσθήκη",
    conditionformat_colorScale: "Κλίμακα χρωμάτων",
    conditionformat_dataBar: "Γραμμή δεδομένων",
    conditionformat_iconSet: "Σύνολο εικονιδίων"
  },
  insertLink: {  "linkText": "Εμφανιζόμενο κείμενο",
  "linkType": "Τύπος συνδέσμου",
  "linkAddress": "Διεύθυνση συνδέσμου",
  "linkSheet": "Φύλλο εργασίας",
  "linkCell": "Περιοχή κελιών",
  "linkTooltip": "Επεξήγηση εργαλείου",
  "selectCellRange": "Επιλογή περιοχής κελιών",
  "cellRangePlaceholder": "Επιλέξτε κελιά με τον δρομέα ή εισαγάγετε απευθείας",
  "placeholder1": "Εισαγάγετε τη διεύθυνση συνδέσμου ιστού",
  "placeholder2": "Εισαγάγετε το κελί προς παραπομπή, π.χ. A1",
  "placeholder3": "Εισαγάγετε το κείμενο της επεξήγησης εργαλείου",
  "tooltipInfo1": "Εισαγάγετε έναν έγκυρο σύνδεσμο",
  "invalidCellRangeTip": "Εισαγάγετε τη σωστή περιοχή κελιών, π.χ. Φύλλο1!A1:C8",
  "openLink": "Άνοιγμα συνδέσμου",
  "goTo": "Μετάβαση στο ${linkAddress}",

    title: "Εισαγωγή συνδέσμου",
    text: "Κείμενο",
    link: "Σύνδεσμος",
    placeholder: "Εισαγάγετε σύνδεσμο",
    confirm: "OK",
    cancel: "Ακύρωση",
    edit: "Επεξεργασία συνδέσμου",
    open: "Άνοιγμα συνδέσμου",
    remove: "Κατάργηση συνδέσμου",
    invalid: "Μη έγκυρος σύνδεσμος",
    url: "Διεύθυνση web",
    sheet: "Φύλλο",
    cell: "Κελί",
    range: "Περιοχή"
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
  dataVerification: {  "selectCellRange2": "Επιλέξτε μια περιοχή κελιών",
  "number_integer": "Αριθμός - ακέραιος",
  "number_decimal": "Αριθμός - δεκαδικός",
  "text_content": "Κείμενο - περιεχόμενο",
  "text_length": "Κείμενο - μήκος",
  "validity": "Εγκυρότητα",
  "placeholder1": "Εισαγάγετε τις επιλογές, χωρισμένες με κόμμα, π.χ. 1,2,3,4,5",
  "placeholder2": "Εισαγάγετε περιεχόμενο",
  "placeholder3": "Αριθμητική τιμή, π.χ. 10",
  "placeholder4": "Εισαγάγετε το καθορισμένο κείμενο",
  "placeholder5": "Εισαγάγετε το μήνυμα που εμφανίζεται όταν επιλέγεται το κελί",
  "selected": "Επιλεγμένο",
  "notSelected": "Μη επιλεγμένο",
  "notEqualTo": "Διάφορο από",
  "moreThanThe": "Μεγαλύτερο από",
  "greaterOrEqualTo": "Μεγαλύτερο ή ίσο με",
  "lessThanOrEqualTo": "Μικρότερο ή ίσο με",
  "include": "Περιλαμβάνει",
  "exclude": "Αποκλείει",
  "earlierThan": "Νωρίτερα από",
  "noEarlierThan": "Όχι νωρίτερα από",
  "laterThan": "Αργότερα από",
  "noLaterThan": "Όχι αργότερα από",
  "identificationNumber": "Αριθμός ταυτότητας",
  "phoneNumber": "Αριθμός τηλεφώνου",
  "remote": "Επιλογή αυτόματης απομακρυσμένης λήψης",
  "prohibitInput": "Απαγόρευση εισαγωγής όταν τα δεδομένα δεν είναι έγκυρα",
  "hintShow": "Εμφάνιση υπόδειξης όταν επιλέγεται το κελί",
  "deleteVerification": "Διαγραφή επικύρωσης",
  "tooltipInfo1": "Η επιλογή της αναπτυσσόμενης λίστας δεν μπορεί να είναι κενή",
  "tooltipInfo2": "Το περιεχόμενο του πλαισίου ελέγχου δεν μπορεί να είναι κενό",
  "tooltipInfo3": "Η τιμή που εισαγάγατε δεν είναι αριθμητικού τύπου",
  "tooltipInfo4": "Η τιμή 2 δεν μπορεί να είναι μικρότερη από την τιμή 1",
  "tooltipInfo5": "Το περιεχόμενο κειμένου δεν μπορεί να είναι κενό",
  "tooltipInfo6": "Η τιμή που εισαγάγατε δεν είναι τύπου ημερομηνίας",
  "tooltipInfo7": "Η ημερομηνία 2 δεν μπορεί να είναι πριν από την ημερομηνία 1",
  "textlengthInteger": "Το μήκος κειμένου πρέπει να είναι ακέραιος μεγαλύτερος ή ίσος με 0",

    cellRange: "Περιοχή κελιών",
    selectCellRange: "Επιλογή περιοχής κελιών",
    selectRange: "Επιλογή περιοχής",
    verificationCondition: "Συνθήκη επικύρωσης",
    allowMultiSelect: "Να επιτρέπεται πολλαπλή επιλογή",
    dropdown: "Αναπτυσσόμενη λίστα",
    checkbox: "Πλαίσιο ελέγχου",
    number: "Αριθμός",
    integer: "Ακέραιος",
    decimal: "Δεκαδικός",
    text: "Κείμενο",
    date: "Ημερομηνία",
    list: "Λίστα",
    listItem: "Στοιχείο λίστας",
    custom: "Προσαρμοσμένος τύπος",
    between: "μεταξύ",
    notBetween: "όχι μεταξύ",
    equal: "ίσο με",
    notEqual: "διαφορετικό από",
    greaterThan: "μεγαλύτερο από",
    lessThan: "μικρότερο από",
    greaterThanOrEqual: "μεγαλύτερο ή ίσο με",
    lessThanOrEqual: "μικρότερο ή ίσο με",
    value: "Τιμή",
    minimum: "Ελάχιστο",
    maximum: "Μέγιστο",
    source: "Πηγή",
    ignoreBlank: "Παράβλεψη κενών",
    showDropdown: "Εμφάνιση αναπτυσσόμενης λίστας στο κελί",
    inputMessage: "Μήνυμα εισαγωγής",
    showInputMessage: "Εμφάνιση μηνύματος εισαγωγής",
    errorAlert: "Ειδοποίηση σφάλματος",
    showErrorAlert: "Εμφάνιση ειδοποίησης σφάλματος",
    errorTitle: "Τίτλος",
    errorMessage: "Μήνυμα",
    rejectInput: "Απόρριψη εισαγωγής",
    warning: "Προειδοποίηση",
    information: "Πληροφορία",
    stop: "Διακοπή",
    confirm: "OK",
    cancel: "Ακύρωση",
    removeVerification: "Κατάργηση επικύρωσης δεδομένων",
    addRule: "Προσθήκη κανόνα",
    editRule: "Επεξεργασία κανόνα",
    deleteRule: "Διαγραφή κανόνα",
    saveRule: "Αποθήκευση κανόνα",
    pleaseInput: "Παρακαλώ εισαγάγετε",
    rule: "Κανόνας"
  },
  formula: {  "find": "Μάθετε περισσότερα",
  "ifGenCompareValueTitle": "Τιμή σύγκρισης",
  "ifGenSelectCellTitle": "Κάντε κλικ για να επιλέξετε κελί",
  "ifGenRangeTitle": "Εύρος",
  "ifGenRangeTo": "έως",
  "ifGenRangeEvaluate": "Αξιολόγηση εύρους",
  "ifGenSelectRangeTitle": "Κάντε κλικ για να επιλέξετε εύρος",
  "ifGenCutWay": "Μέθοδος διαχωρισμού",
  "ifGenCutSame": "Ίδια τιμή διαχωρισμού",
  "ifGenCutNpiece": "Διαχωρισμός σε N",
  "ifGenCutCustom": "Προσαρμοσμένο",
  "ifGenCutConfirm": "Επιβεβαίωση",
  "ifGenTipSelectCell": "Επιλογή κελιών",
  "ifGenTipSelectCellPlace": "Επιλέξτε κελιά",
  "ifGenTipSelectRange": "Επιλογή εύρους",
  "ifGenTipSelectRangePlace": "Επιλέξτε εύρος",
  "ifGenTipNotNullValue": "Η τιμή σύγκρισης δεν μπορεί να είναι κενή!",
  "ifGenTipLableTitile": "Ετικέτα",
  "ifGenTipRangeNotforNull": "Το εύρος δεν μπορεί να είναι κενό!",
  "ifGenTipCutValueNotforNull": "Η τιμή διαχωρισμού δεν μπορεί να είναι κενή!",
  "ifGenTipNotGenCondition": "Δεν υπάρχουν διαθέσιμες συνθήκες για δημιουργία!",

    sum: "Άθροισμα",
    average: "Μέσος όρος",
    count: "Πλήθος",
    max: "Μέγιστο",
    min: "Ελάχιστο",
    ifGenerate: "Εισαγωγή συνάρτησης",
    findFunction: "Αναζήτηση συνάρτησης",
    tipNotBelongToIf: "Αυτή η συνάρτηση δεν ανήκει σε αυτή την κατηγορία",
    tipSelectCell: "Επιλέξτε ένα κελί ή μια περιοχή",
    help: "Βοήθεια",
    example: "Παράδειγμα",
    functionName: "Όνομα συνάρτησης",
    functionType: "Κατηγορία συνάρτησης",
    functionDescription: "Περιγραφή συνάρτησης",
    functionParameter: "Παράμετρος συνάρτησης",
    parameter: "Παράμετρος",
    parameterDescription: "Περιγραφή παραμέτρου",
    required: "Υποχρεωτικό",
    optional: "Προαιρετικό",
    repeat: "Επαναλαμβανόμενο",
    formulaError: "Σφάλμα τύπου",
    formulaTip: "Εισαγάγετε τύπο"
  },
  formulaMore: {
    valueTitle: "Τιμή",
    tipSelectDataRange: "Επιλογή περιοχής δεδομένων",
    tipDataRangeTile: "Περιοχή δεδομένων",
    findFunctionTitle: "Αναζήτηση συνάρτησης",
    tipInputFunctionName: "Εισαγάγετε όνομα συνάρτησης",
    Array: "Πίνακας",
    Database: "Βάση δεδομένων",
    Date: "Ημερομηνία",
    Engineering: "Μηχανική",
    Filter: "Φίλτρο",
    Financial: "Οικονομικά",
    luckysheet: "Luckysheet",
    other: "Άλλα",
    Logical: "Λογικές",
    Lookup: "Αναζήτηση",
    Math: "Μαθηματικά",
    Operator: "Τελεστής",
    Parser: "Αναλυτής",
    Statistical: "Στατιστική",
    Text: "Κείμενο",
    dataMining: "Εξόρυξη δεδομένων",
    selectFunctionTitle: "Επιλογή συνάρτησης",
    calculationResult: "Αποτέλεσμα",
    tipSuccessText: "Επιτυχία",
    tipParamErrorText: "Σφάλμα τύπου παραμέτρου",
    helpClose: "Κλείσιμο",
    helpCollapse: "Σύμπτυξη",
    helpExample: "Παράδειγμα",
    helpAbstract: "Περίληψη",
    execfunctionError: "Σφάλμα στον τύπο",
    execfunctionSelfError: "Ο τύπος δεν μπορεί να αναφέρεται στο δικό του κελί",
    execfunctionSelfErrorResult: "Ο τύπος δεν μπορεί να αναφέρεται στο δικό του κελί, κάτι που θα οδηγούσε σε ανακριβή αποτελέσματα υπολογισμού",
    allowRepeatText: "Επαναλαμβανόμενο",
    allowOptionText: "Προαιρετικό",
    selectCategory: "Ή επιλέξτε μια κατηγορία"
  },
  drag: {
    noMerge: "Αυτή η ενέργεια δεν μπορεί να εκτελεστεί σε συγχωνευμένα κελιά",
    affectPivot: "Αυτή η αλλαγή δεν μπορεί να γίνει στο επιλεγμένο κελί επειδή θα επηρεάσει τον συγκεντρωτικό πίνακα.",
    noMulti: "Αυτή η ενέργεια δεν μπορεί να εκτελεστεί σε πολλαπλές περιοχές επιλογής. Επιλέξτε μία περιοχή.",
    noPaste: "Δεν είναι δυνατή η επικόλληση αυτού του περιεχομένου εδώ. Επιλέξτε ένα κελί στην περιοχή επικόλλησης και δοκιμάστε ξανά.",
    noPartMerge: "Αυτή η ενέργεια δεν μπορεί να εκτελεστεί σε μερικώς συγχωνευμένα κελιά",
    inputCorrect: "Εισαγάγετε τη σωστή τιμή",
    notLessOne: "Ο αριθμός γραμμών και στηλών δεν μπορεί να είναι μικρότερος από 1",
    offsetColumnLessZero: "Η μετατόπιση στήλης δεν μπορεί να είναι αρνητική.",
    pasteMustKeybordAlert: "Αντιγραφή και επικόλληση στον πίνακα: Ctrl + C για αντιγραφή, Ctrl + V για επικόλληση, Ctrl + X για αποκοπή",
    pasteMustKeybordAlertHTMLTitle: "在表格中进行复制粘贴",
    pasteMustKeybordAlertHTML: "<span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + C</span>&nbsp;&nbsp;για αντιγραφή<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + V</span>&nbsp;&nbsp;για επικόλληση<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + X</span>&nbsp;&nbsp;για αποκοπή"
  },
  pivotTable: {
    title: "Pivot Table",
    closePannel: "Close",
    editRange: "Range",
    tipPivotFieldSelected: "Επιλέξτε τα πεδία",
    tipClearSelectedField: "Clear all fields",
    btnClearSelectedField: "Clear",
    btnFilter: "Filter",
    titleRow: "Row",
    titleColumn: "Column",
    titleValue: "Value",
    tipShowColumn: "Τα στατιστικά πεδία εμφανίζονται ως στήλες",
    tipShowRow: "Τα στατιστικά πεδία εμφανίζονται ως γραμμές",
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
    errorNotAllowEdit: "Αυτή η ενέργεια απαγορεύεται σε λειτουργία χωρίς επεξεργασία.",
    errorNotAllowMulti: "Αυτή η ενέργεια δεν μπορεί να εκτελεστεί σε πολλαπλές περιοχές επιλογής. Επιλέξτε μία περιοχή και δοκιμάστε ξανά.",
    errorSelectRange: "Επιλέξτε την περιοχή του νέου συγκεντρωτικού πίνακα",
    errorIsDamage: "Τα δεδομένα προέλευσης αυτού του συγκεντρωτικού πίνακα είναι κατεστραμμένα.",
    errorNotAllowPivotData: "Δεν είναι δυνατή η επιλογή συγκεντρωτικού πίνακα ως δεδομένων προέλευσης.",
    errorSelectionRange: "Η επιλογή απέτυχε, λανθασμένη περιοχή εισαγωγής.",
    errorIncreaseRange: "Επεκτείνετε την επιλεγμένη περιοχή.",
    titleAddColumn: "Προσθήκη στήλης στον συγκεντρωτικό πίνακα",
    titleMoveColumn: "Μετακίνηση της στήλης στο παρακάτω λευκό πλαίσιο",
    titleClearColumnFilter: "Εκκαθάριση φίλτρου για αυτή τη στήλη",
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
    borderTile: "Χρώμα περιγράμματος εικόνας",
    borderCur: "Color"
  },
  protection: {
    protectiontTitle: "Protection",
    enterPassword: "Εισαγωγή κωδικού πρόσβασης (προαιρετικά)",
    enterHintTitle: "Υπόδειξη όταν απαγορεύεται η επεξεργασία (προαιρετικά)",
    enterHint: "Το κελί ή το γράφημα που προσπαθείτε να αλλάξετε βρίσκεται σε προστατευμένο φύλλο εργασίας. Για να το αλλάξετε, καταργήστε την προστασία του φύλλου. Ίσως χρειαστεί να εισαγάγετε κωδικό πρόσβασης.",
    swichProtectionTip: "Προστασία του φύλλου και των περιεχομένων των κλειδωμένων κελιών",
    authorityTitle: "Να επιτρέπεται στους χρήστες αυτού του φύλλου:",
    selectLockedCells: "Επιλογή κλειδωμένων κελιών",
    selectunLockedCells: "Επιλογή ξεκλείδωτων κελιών",
    formatCells: "Format cells",
    formatColumns: "Format columns",
    formatRows: "Format rows",
    insertColumns: "Insert columns",
    insertRows: "Insert rows",
    insertHyperlinks: "Εισαγωγή υπερσυνδέσμων",
    deleteColumns: "Delete columns",
    deleteRows: "Delete rows",
    sort: "Sort",
    filter: "Filter",
    usePivotTablereports: "Χρήση αναφορών συγκεντρωτικού πίνακα",
    editObjects: "Edit objects",
    editScenarios: "Edit scenarios",
    allowRangeTitle: "Να επιτρέπεται στους χρήστες της περιοχής:",
    allowRangeAdd: "New...",
    allowRangeAddTitle: "Title",
    allowRangeAddSqrf: "Reference",
    selectCellRange: "Κάντε κλικ για επιλογή περιοχής κελιών",
    selectCellRangeHolder: "Cell range",
    allowRangeAddTitlePassword: "Password",
    allowRangeAddTitleHint: "Prompt",
    allowRangeAddTitleHintTitle: "Υπόδειξη όταν έχει οριστεί κωδικός πρόσβασης (προαιρετικά)",
    allowRangeAddtitleDefault: "Input range name",
    rangeItemDblclick: "Διπλό κλικ για επεξεργασία",
    rangeItemHasPassword: "Has password",
    rangeItemErrorTitleNull: "Title is null",
    rangeItemErrorRangeNull: "Η αναφορά είναι κενή",
    rangeItemErrorRange: "Η αναφορά έχει σφάλμα",
    validationTitle: "Επικύρωση κωδικού πρόσβασης",
    validationTips: "Πρέπει να εισαγάγετε κωδικό πρόσβασης για να ξεκλειδώσετε την προστασία του φύλλου εργασίας",
    validationInputHint: "Enter a password",
    checkPasswordNullalert: "Απαιτείται κωδικός πρόσβασης.",
    checkPasswordWrongalert: "Λανθασμένος κωδικός πρόσβασης, δοκιμάστε ξανά.",
    checkPasswordSucceedalert: "Unlock Succeed!",
    defaultRangeHintText: "Το κελί προστατεύεται με κωδικό πρόσβασης.",
    defaultSheetHintText: "Το κελί ή το γράφημα βρίσκεται σε προστατευμένο φύλλο εργασίας. Για αλλαγές, καταργήστε την προστασία του φύλλου. Ίσως χρειαστεί να εισαγάγετε κωδικό πρόσβασης."
  },
  cellFormat: {
    cellFormatTitle: "Format cells",
    protection: "Protection",
    locked: "Locked",
    hidden: "Hidden",
    protectionTips: "Για να κλειδώσετε κελιά ή να αποκρύψετε τύπους, προστατεύστε το φύλλο εργασίας. Στη γραμμή εργαλείων, κάντε κλικ στο κουμπί προστασίας φύλλου.",
    tipsPart: "Partial checked",
    tipsAll: "All checked",
    selectionIsNullAlert: "Απαιτείται επιλογή.",
    sheetDataIsNullAlert: "Σφάλμα: δεν υπάρχουν δεδομένα."
  },
  print: {
    normalBtn: "Normal",
    layoutBtn: "Page Layout",
    pageBtn: "Προεπισκόπηση αλλαγών σελίδας",
    menuItemPrint: "Print (Ctrl+P)",
    menuItemAreas: "Print areas",
    menuItemRows: "Print title rows",
    menuItemColumns: "Εκτύπωση στηλών τίτλου"
  },
  edit: {
    typing: "πληκτρολόγηση"
  },
  websocket: {
    success: "Η σύνδεση WebSocket ολοκληρώθηκε με επιτυχία",
    refresh: "Παρουσιάστηκε σφάλμα στη σύνδεση WebSocket. Ανανεώστε τη σελίδα.",
    wait: "Παρουσιάστηκε σφάλμα στη σύνδεση WebSocket. Περιμένετε λίγο.",
    close: "Η σύνδεση WebSocket έκλεισε",
    contact: "Παρουσιάστηκε σφάλμα επικοινωνίας με τον διακομιστή. Ανανεώστε τη σελίδα και δοκιμάστε ξανά. Αν δεν λυθεί, επικοινωνήστε με τον διαχειριστή.",
    support: "Το τρέχον πρόγραμμα περιήγησης δεν υποστηρίζει WebSocket"
  },
  custom: {
    lockCells: "Κλείδωμα κελιών",
    unlockCells: "Ξεκλείδωμα κελιών",
    toggleSheetProtection: "Προστασία / κατάργηση προστασίας βιβλίου εργασίας",
    toggleGridLines: "Εμφάνιση / απόκρυψη γραμμών πλέγματος",
    customNumberFormat: {
      menuItem: "Προσαρμοσμένη μορφή αριθμού…",
      title: "Προσαρμοσμένες μορφές αριθμών",
      formatLabel: "Κωδικός μορφής",
      inputPlaceholder: "Για παράδειγμα: #.##0,00",
      apply: "Εφαρμογή",
      cancel: "Ακύρωση",
      close: "Κλείσιμο",
      preview: "Προεπισκόπηση",
      presets: "Προτεινόμενες μορφές",
      standardFormats: "Αριθμοί",
      currencyFormats: "Νόμισμα",
      unitFormats: "Μονάδες",
      selection: "Επιλογή",
      help: "Οδηγός μορφών",
      helpTitle: "Πώς λειτουργούν οι κωδικοί μορφής",
      helpZero: "Το 0 εμφανίζει πάντα ένα ψηφίο, συμπεριλαμβανομένου ενός αρχικού ή τελικού μηδενικού.",
      helpHash: "Το # εμφανίζει ένα ψηφίο μόνο όταν είναι σημαντικό.",
      helpDecimal: "Το {separator} υποδεικνύει τη δεκαδική θέση στον κωδικό μορφής.",
      helpGrouping: "Το {separator} προσθέτει ομαδοποίηση ψηφίων.",
      groupingSpace: "Ένα διάστημα προσθέτει ομαδοποίηση ψηφίων.",
      helpSections: "Το ; διαχωρίζει τις ενότητες θετικών, αρνητικών, μηδενικών και κειμένου.",
      normalizedHint: "Η μορφή θα αποθηκευτεί ως {format}.",
      errors: {
        required: "Εισαγάγετε έναν κωδικό μορφής.",
        tooLong: "Ο κωδικός μορφής είναι πολύ μεγάλος.",
        tooManySections: "Μια μορφή μπορεί να περιέχει έως τέσσερις ενότητες.",
        missingPlaceholder: "Προσθέστε τουλάχιστον ένα αριθμητικό σύμβολο κράτησης θέσης: 0, # ή ?.",
        invalid: "Αυτός ο κωδικός μορφής δεν είναι έγκυρος."
      }
    },
    charts: {
      toolbar: "Εισαγωγή γραφήματος",
      title: "Γραφήματα",
      defaultTitle: "Γράφημα",
      activeSheet: "Ενεργό φύλλο",
      existingCharts: "Γραφήματα φύλλου",
      noCharts: "Δεν υπάρχουν γραφήματα για αυτό το φύλλο.",
      newChart: "Νέο γράφημα",
      editChart: "Επεξεργασία γραφήματος",
      chartTitle: "Τίτλος",
      type: "Τύπος",
      range: "Δεδομένα",
      labels: "Ετικέτες",
      labelReference: "Αναφορά",
      labelColumnReference: "Γράμμα στήλης",
      labelRowReference: "Αριθμός γραμμής",
      values: "Εμφάνιση τιμών",
      legend: "Εμφάνιση υπομνήματος",
      color: "Χρώμα",
      xAxis: "Εμφάνιση ετικετών άξονα X",
      yAxis: "Εμφάνιση ετικετών άξονα Y",
      gridlines: "Εμφάνιση πλέγματος",
      displayOptions: "Προβολή",
      preview: "Προεπισκόπηση",
      close: "Κλείσιμο",
      reset: "Νέο",
      add: "Προσθήκη",
      save: "Αποθήκευση",
      edit: "Επεξεργασία",
      delete: "Διαγραφή",
      types: {
        bar: "Ράβδοι",
        line: "Γραμμή",
        scatter: "Διασπορά",
        pie: "Πίτα"
      },
      labelTypes: {
        none: "Χωρίς ετικέτες",
        sameRowColumn: "Στήλη της ίδιας γραμμής",
        sameColumnRow: "Γραμμή των ίδιων στηλών",
        range: "Προσαρμοσμένη περιοχή"
      },
      errors: {
        range: "Η περιοχή πρέπει να μοιάζει με A1:B5.",
        dataColumn: "Η περιοχή δεδομένων πρέπει να είναι μία μόνο γραμμή ή μία μόνο στήλη τιμών.",
        labelColumn: "Η στήλη ετικετών πρέπει να μοιάζει με B.",
        labelRow: "Η γραμμή ετικετών πρέπει να μοιάζει με 2.",
        labelRange: "Η περιοχή ετικετών πρέπει να μοιάζει με B3:B24.",
        labelRangeSize: "Η περιοχή ετικετών πρέπει να έχει τον ίδιο αριθμό τιμών με τα δεδομένα.",
        title: "Προσθέστε έναν σύντομο τίτλο στο γράφημα."
      }
    },
    standaloneMenu: {  "menuBarLabel": "Μενού DocCells",
  "open": "Άνοιγμα",
  "export": "Εξαγωγή",
  "show": "Εμφάνιση",
  "gridlines": "Γραμμές πλέγματος",

      file: "Αρχείο",
      edit: "Επεξεργασία",
      view: "Προβολή",
      insert: "Εισαγωγή",
      data: "Δεδομένα",
      tools: "Εργαλεία",
      lockCells: "Κλείδωμα κελιών",
      unlockCells: "Ξεκλείδωμα κελιών",
      toggleSheetProtection: "Προστασία / κατάργηση προστασίας βιβλίου εργασίας",
      toggleGridLines: "Εμφάνιση / απόκρυψη γραμμών πλέγματος",
      uploadExcel: "Εισαγωγή αρχείου Excel",
      exportExcel: "Εξαγωγή αρχείου Excel",
      undo: "Αναίρεση",
      redo: "Επανάληψη",
      copy: "Αντιγραφή",
      paste: "Επικόλληση",
      cut: "Αποκοπή",
      chart: "Γράφημα",
      conditionalFormatting: "Μορφοποίηση υπό όρους",
      frozen: "Πάγωμα",
      sort: "Ταξινόμηση",
      filter: "Φίλτρο",
      findReplace: "Εύρεση και αντικατάσταση",
      dataValidation: "Επικύρωση δεδομένων",
      screenshot: "Στιγμιότυπο",
      splitText: "Κείμενο σε στήλες",
      print: "Εκτύπωση"
    },
    conditionalFormatting: {  "activeSheet": "Ενεργό φύλλο",
  "appliedRules": "Εφαρμοσμένοι κανόνες",
  "newRule": "Νέος κανόνας",
  "applyTo": "Εφαρμογή σε",
  "condition": "Συνθήκη",
  "compareTo": "Σύγκριση με",
  "cell": "Κελί",
  "sameRowColumn": "Στήλη της ίδιας γραμμής",
  "backgroundColor": "Γέμισμα",
  "close": "Κλείσιμο",
  "reset": "Νέος",
  "save": "Αποθήκευση",
  "add": "Προσθήκη",
  "edit": "Επεξεργασία",
  "none": "Κανένα",
  "sample": "Aa",
  "textPlaceholder": "καθυστέρηση",
  "conditions": {
    "lessThan": "είναι μικρότερο από",
    "greaterThan": "είναι μεγαλύτερο από",
    "equal": "είναι ίσο με",
    "notEqual": "είναι διαφορετικό από",
    "between": "είναι μεταξύ",
    "textContains": "περιέχει το κείμενο"
  },
  "compareTypes": {
    "value": "μια σταθερή τιμή",
    "cell": "ένα σταθερό κελί",
    "sameRowColumn": "μια στήλη της ίδιας γραμμής"
  },
  "descriptions": {
    "cell": "κελί",
    "between": "κελί μεταξύ {value1} και {value2}",
    "textContains": "το κείμενο περιέχει \"{value}\"",
    "sameRowColumn": "στήλη {reference} της ίδιας γραμμής",
    "fixedCell": "κελί {reference}",
    "comparison": "κελί {operator} {target}"
  },
  "errors": {
    "range": "Το εύρος πρέπει να μοιάζει με A2:A100.",
    "between": "Εισαγάγετε δύο τιμές για τη συνθήκη μεταξύ.",
    "text": "Εισαγάγετε το κείμενο προς αναζήτηση.",
    "compareCell": "Το κελί σύγκρισης πρέπει να μοιάζει με B1.",
    "compareColumn": "Η στήλη σύγκρισης πρέπει να μοιάζει με B.",
    "compareValue": "Εισαγάγετε μια τιμή σύγκρισης.",
    "style": "Επιλέξτε τουλάχιστον ένα χρώμα ή στυλ."
  },
  "styleLabels": {
    "bold": "Έντονα",
    "italic": "Πλάγια",
    "underline": "Υπογράμμιση"
  },

      toolbar: "Μορφοποίηση υπό όρους",
      title: "Μορφοποίηση υπό όρους",
      range: "Περιοχή",
      rangePlaceholder: "A1:A10",
      selectRange: "Επιλογή περιοχής",
      ruleType: "Τύπος κανόνα",
      greaterThan: "Μεγαλύτερο από",
      lessThan: "Μικρότερο από",
      between: "Μεταξύ",
      equals: "Ίσο με",
      textContains: "Το κείμενο περιέχει",
      duplicateValues: "Διπλότυπες τιμές",
      colorScale: "Κλίμακα χρωμάτων",
      dataBar: "Γραμμή δεδομένων",
      iconSet: "Σύνολο εικονιδίων",
      value: "Τιμή",
      minValue: "Ελάχιστη τιμή",
      maxValue: "Μέγιστη τιμή",
      text: "Κείμενο",
      style: "Στυλ",
      fillColor: "Χρώμα γεμίσματος",
      textColor: "Χρώμα κειμένου",
      bold: "Έντονα",
      italic: "Πλάγια",
      preview: "Προεπισκόπηση",
      apply: "Εφαρμογή",
      update: "Ενημέρωση",
      cancel: "Ακύρωση",
      delete: "Διαγραφή",
      noRules: "Δεν υπάρχει κανόνας για αυτό το φύλλο.",
      addRule: "Προσθήκη κανόνα",
      editRule: "Επεξεργασία κανόνα",
      invalidRange: "Η περιοχή δεν είναι έγκυρη.",
      invalidValue: "Εισαγάγετε έγκυρη τιμή.",
      invalidBetween: "Εισαγάγετε δύο έγκυρες τιμές.",
      duplicate: "Διπλότυπο",
      unique: "Μοναδικό",
      low: "Χαμηλό",
      mid: "Μεσαίο",
      high: "Υψηλό",
      positive: "Θετικό",
      negative: "Αρνητικό",
      neutral: "Ουδέτερο"
    }
  },
  matrix: {
    title: "Λειτουργία πίνακα",
    transpose: "Αντιστροφή γραμμών/στηλών",
    rotateLeft: "Περιστροφή 90° αριστερά",
    rotateRight: "Περιστροφή 90° δεξιά",
    flipHorizontal: "Οριζόντια αναστροφή",
    flipVertical: "Κατακόρυφη αναστροφή",
    confirm: "OK",
    cancel: "Ακύρωση"
  },
  sheetbar: {
    add: "Προσθήκη φύλλου",
    menu: "Όλα τα φύλλα",
    sheet: "Φύλλο",
    hidden: "Κρυφό",
    rename: "Μετονομασία",
    delete: "Διαγραφή",
    copy: "Αντιγραφή",
    color: "Χρώμα",
    hide: "Απόκρυψη",
    unhide: "Εμφάνιση",
    moveLeft: "Μετακίνηση αριστερά",
    moveRight: "Μετακίνηση δεξιά",
    first: "Πρώτο φύλλο",
    last: "Τελευταίο φύλλο",
    previous: "Προηγούμενο φύλλο",
    next: "Επόμενο φύλλο"
  },
  statistics: {
    total: "Σύνολο",
    sum: "Άθροισμα",
    average: "Μέσος όρος",
    count: "Πλήθος",
    max: "Μέγιστο",
    min: "Ελάχιστο",
    range: "Περιοχή",
    selected: "Επιλεγμένα",
    numericalCount: "Πλήθος αριθμών"
  },
  tabs: {
    sheet: "Φύλλο",
    data: "Δεδομένα",
    chart: "Γράφημα",
    pivot: "Συγκεντρωτικό",
    image: "Εικόνα",
    link: "Σύνδεσμος",
    comment: "Σχόλιο"
  }
};
