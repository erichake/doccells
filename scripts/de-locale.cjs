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
      d: "Gibt eine bedingte Summe über einen Bereich zurück.",
      a: "Eine bedingte Summe über einen Bereich.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "bereich",
          detail: "Der Bereich, der gegen `kriterium` geprüft wird.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kriterium",
          detail: "Das Muster oder der Test, der auf `bereich` angewendet wird.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "summenbereich",
          detail: "Der zu summierende Bereich, falls abweichend von `bereich`.",
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
      d: "Gibt den Tangens eines im Bogenmaß angegebenen Winkels zurück.",
      a: "Tangens eines im Bogenmaß angegebenen Winkels.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "winkel",
          detail: "Der Winkel, dessen Tangens berechnet werden soll, im Bogenmaß.",
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
      d: "Gibt den hyperbolischen Tangens einer beliebigen reellen Zahl zurück.",
      a: "Hyperbolischer Tangens einer beliebigen reellen Zahl.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Ein beliebiger reeller Wert, dessen hyperbolischer Tangens berechnet werden soll.",
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
      d: "Rundet eine Zahl auf das nächste ganzzahlige Vielfache des angegebenen `faktor` auf.",
      a: "Rundet eine Zahl auf das nächste Vielfache eines Faktors auf.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, der auf das nächste ganzzahlige Vielfache von `faktor` aufgerundet werden soll.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "faktor",
          detail: "Die Zahl, auf deren Vielfache `wert` gerundet wird.",
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
      d: "Gibt den Arkustangens eines Werts im Bogenmaß zurück.",
      a: "Arkustangens eines Werts im Bogenmaß.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, für den der Arkustangens berechnet werden soll.",
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
      d: "Gibt den Areasinus hyperbolicus einer Zahl zurück.",
      a: "Areasinus hyperbolicus einer Zahl.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, für den der Areasinus hyperbolicus berechnet werden soll.",
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
      d: "Gibt den Absolutwert einer Zahl zurück.",
      a: "Absolutwert einer Zahl.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Die Zahl, deren Absolutwert zurückgegeben werden soll.",
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
      d: "Gibt den Arkuskosinus eines Werts im Bogenmaß zurück.",
      a: "Arkuskosinus eines Werts im Bogenmaß.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, für den der Arkuskosinus berechnet werden soll. Muss zwischen `-1` und `1` liegen (einschließlich).",
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
      d: "Gibt den Areakosinus hyperbolicus einer Zahl zurück.",
      a: "Areakosinus hyperbolicus einer Zahl.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, für den der Areakosinus hyperbolicus berechnet werden soll. Muss größer oder gleich `1` sein.",
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
      d: "Gibt die Fakultät der Summe der Werte geteilt durch das Produkt der Fakultäten der einzelnen Werte zurück.",
      a: "Multinomialverteilungsfunktion.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, der berücksichtigt werden soll.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die berücksichtigt werden sollen.",
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
      d: "Gibt den Areatangens hyperbolicus einer Zahl zurück.",
      a: "Areatangens hyperbolicus einer Zahl.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, für den der Areatangens hyperbolicus berechnet werden soll. Muss zwischen -1 und 1 liegen (ausschließlich).",
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
      d: "Gibt den Winkel zwischen der x-Achse und einer Strecke vom Ursprung (0,0) zum angegebenen Koordinatenpaar (`x`,`y`) im Bogenmaß zurück.",
      a: "Arkustangens eines Werts.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Die x-Koordinate des Endpunkts der Strecke, für die der Winkel zur x-Achse berechnet werden soll.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "y",
          detail: "Die y-Koordinate des Endpunkts der Strecke, für die der Winkel zur x-Achse berechnet werden soll.",
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
      d: "Gibt die Anzahl der leeren Werte in einer Liste von Werten und Bereichen zurück.",
      a: "Anzahl der leeren Werte.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, in dem die Anzahl der leeren Zellen gezählt werden soll.",
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
      d: "Gibt den hyperbolischen Kosinus einer beliebigen reellen Zahl zurück.",
      a: "Hyperbolischer Kosinus einer beliebigen reellen Zahl.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Ein beliebiger reeller Wert, dessen hyperbolischer Kosinus berechnet werden soll.",
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
      d: "Rundet eine Zahl auf die nächste ganze Zahl ab, die kleiner oder gleich ist.",
      a: "Rundet eine Zahl auf die nächste ganze Zahl ab.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, der auf die nächste ganze Zahl abgerundet werden soll.",
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
      d: "Prüft, ob der angegebene Wert gerade ist.",
      a: "Ob der angegebene Wert gerade ist.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, der als gerade überprüft werden soll.",
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
      d: "Prüft, ob der angegebene Wert ungerade ist.",
      a: "Ob der angegebene Wert ungerade ist.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, der als ungerade überprüft werden soll.",
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
      d: "Gibt das kleinste gemeinsame Vielfache einer oder mehrerer ganzer Zahlen zurück.",
      a: "Kleinstes gemeinsames Vielfaches einer oder mehrerer ganzer Zahlen.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, dessen Faktoren zur Berechnung des kleinsten gemeinsamen Vielfachen berücksichtigt werden sollen.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, deren Faktoren zur Berechnung des kleinsten gemeinsamen Vielfachen berücksichtigt werden sollen.",
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
      d: "Gibt den Logarithmus einer Zahl zur Basis e (Eulersche Zahl) zurück.",
      a: "Logarithmus einer Zahl zur Basis e (Eulersche Zahl).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, für den der Logarithmus zur Basis e berechnet werden soll.",
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
      d: "Gibt den Logarithmus einer Zahl zu einer bestimmten Basis zurück.",
      a: "Logarithmus einer Zahl zu einer bestimmten Basis.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, für den der Logarithmus berechnet werden soll.",
          example: "128",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "basis",
          detail: "Die Basis, die für die Berechnung des Logarithmus verwendet werden soll.",
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
      d: "Gibt den Logarithmus einer Zahl zur Basis 10 zurück.",
      a: "Logarithmus einer Zahl zur Basis 10.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, für den der Logarithmus zur Basis 10 berechnet werden soll.",
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
      d: "Gibt das Ergebnis des Modulo-Operators zurück, den Rest einer Divisionsoperation.",
      a: "Modulo-Operator (Rest).",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividend",
          detail: "Die Zahl, die geteilt werden soll, um den Rest zu ermitteln.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "Die Zahl, durch die geteilt werden soll.",
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
      d: "Rundet eine Zahl auf das nächste ganzzahlige Vielfache einer anderen Zahl.",
      a: "Rundet eine Zahl auf das nächste ganzzahlige Vielfache.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Die Zahl, die auf das nächste ganzzahlige Vielfache einer anderen Zahl gerundet werden soll.",
          example: "21",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "faktor",
          detail: "Die Zahl, auf deren Vielfache `wert` gerundet wird.",
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
      d: "Rundet eine Zahl auf die nächste ungerade ganze Zahl auf.",
      a: "Rundet eine Zahl auf die nächste ungerade ganze Zahl auf.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, der auf die nächstgrößere ungerade Zahl gerundet werden soll.",
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
      d: "Gibt die Summe der Quadrate einer Reihe von Zahlen und/oder Zellen zurück.",
      a: "Summe der Quadrate.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Die erste Zahl oder der erste Bereich, deren Quadrate addiert werden sollen.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Weitere Zahlen oder Bereiche, deren Quadrate zum Quadrat/den Quadraten von `wert1` addiert werden sollen.",
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
      d: "Gibt die Anzahl der Möglichkeiten zurück, eine bestimmte Anzahl von Objekten aus einer Gruppe von Objekten einer bestimmten Größe auszuwählen.",
      a: "Anzahl der Kombinationen aus einer Menge von Objekten.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "Die Größe der Objektgruppe, aus der ausgewählt werden soll.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Die Anzahl der auszuwählenden Objekte.",
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
      d: "Gibt die Summe einer Reihe von Zahlen und/oder Zellen zurück.",
      a: "Summe einer Reihe von Zahlen und/oder Zellen.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Die erste Zahl oder der erste Bereich, die/der addiert werden soll.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Weitere Zahlen oder Bereiche, die zu `wert1` addiert werden sollen.",
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
      d: "Gibt eine Teilsumme für einen vertikalen Zellbereich mithilfe einer angegebenen Aggregationsfunktion zurück.",
      a: "Teilsumme für einen Bereich mit einer bestimmten Funktion.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "funktionscode",
          detail: "Die Funktion, die bei der Teilsummen-Aggregation verwendet werden soll.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bereich1",
          detail: "Der erste Bereich, für den eine Teilsumme berechnet werden soll.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "bereich2",
          detail: "Weitere Bereiche, für die Teilsummen berechnet werden sollen.",
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
      d: "Gibt den Arkussinus eines Werts im Bogenmaß zurück.",
      a: "Arkussinus eines Werts im Bogenmaß.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, für den der Arkussinus berechnet werden soll. Muss zwischen `-1` und `1` liegen (einschließlich).",
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
      d: "Gibt eine bedingte Anzahl über einen Bereich zurück.",
      a: "Eine bedingte Anzahl über einen Bereich.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "bereich",
          detail: "Der Bereich, der gegen `kriterium` geprüft wird.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kriterium",
          detail: "Das Muster oder der Test, der auf `bereich` angewendet wird.",
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
      d: "Wandelt einen Winkelwert von Grad in Bogenmaß um.",
      a: "Wandelt einen Winkelwert von Grad in Bogenmaß um.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "winkel",
          detail: "Der Winkel, der von Grad in Bogenmaß umgewandelt werden soll.",
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
      d: "Gibt eine Zufallszahl zwischen 0 (einschließlich) und 1 (ausschließlich) zurück.",
      a: "Eine Zufallszahl zwischen 0 (einschließlich) und 1 (ausschließlich).",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "COUNTUNIQUE",
      t: 0,
      d: "Zählt die Anzahl eindeutiger Werte in einer Liste angegebener Werte und Bereiche.",
      a: "Zählt die Anzahl eindeutiger Werte in einem Bereich.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, der auf Eindeutigkeit geprüft werden soll.",
          example: "A1:C100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die auf Eindeutigkeit geprüft werden sollen.",
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
      d: "Wandelt einen Winkelwert von Bogenmaß in Grad um.",
      a: "Wandelt einen Winkelwert von Bogenmaß in Grad um.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "winkel",
          detail: "Der Winkel, der von Bogenmaß in Grad umgewandelt werden soll.",
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
      d: "Gibt die komplementäre Gauß'sche Fehlerfunktion eines Werts zurück.",
      a: "Komplementäre Gauß'sche Fehlerfunktion eines Werts.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "z",
          detail: "Die Zahl, für die die komplementäre Gauß'sche Fehlerfunktion berechnet werden soll.",
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
      d: "Rundet eine Zahl auf die nächste gerade ganze Zahl auf.",
      a: "Rundet eine Zahl auf die nächste gerade ganze Zahl auf.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, der auf die nächstgrößere gerade Zahl gerundet werden soll.",
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
      d: "Gibt die Eulersche Zahl e (~2,718) potenziert mit einem Exponenten zurück.",
      a: "Die Eulersche Zahl e (~2,718), potenziert mit einem Exponenten.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "exponent",
          detail: "Der Exponent, mit dem e potenziert werden soll.",
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
      d: "Gibt die Fakultät einer Zahl zurück.",
      a: "Fakultät einer Zahl.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Die Zahl oder der Verweis auf eine Zahl, deren Fakultät berechnet und zurückgegeben werden soll.",
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
      d: "Gibt die \"doppelte Fakultät\" einer Zahl zurück.",
      a: "\"Doppelte Fakultät\" einer Zahl.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Die Zahl oder der Verweis auf eine Zahl, deren doppelte Fakultät berechnet und zurückgegeben werden soll.",
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
      d: "Gibt den Wert von Pi mit 14 Dezimalstellen zurück.",
      a: "Die Zahl Pi.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FLOOR",
      t: 0,
      d: "Rundet eine Zahl auf das nächste ganzzahlige Vielfache des angegebenen `faktor` ab.",
      a: "Rundet eine Zahl auf das nächste Vielfache eines Faktors ab.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, der auf das nächste ganzzahlige Vielfache von `faktor` abgerundet werden soll.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "faktor",
          detail: "Die Zahl, auf deren Vielfache `wert` gerundet wird.",
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
      d: "Gibt den größten gemeinsamen Teiler einer oder mehrerer ganzer Zahlen zurück.",
      a: "Größter gemeinsamer Teiler einer oder mehrerer ganzer Zahlen.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, dessen Faktoren zur Berechnung des größten gemeinsamen Teilers berücksichtigt werden sollen.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, deren Faktoren zur Berechnung des größten gemeinsamen Teilers berücksichtigt werden sollen.",
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
      d: "Gibt eine gleichmäßig verteilte Zufallszahl zwischen zwei Werten zurück (einschließlich).",
      a: "Zufällige ganze Zahl zwischen zwei Werten (einschließlich).",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "untergrenze",
          detail: "Die Untergrenze des Zufallsbereichs.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "obergrenze",
          detail: "Die Obergrenze des Zufallsbereichs.",
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
      d: "Rundet eine Zahl nach den Standardregeln auf eine bestimmte Anzahl von Dezimalstellen.",
      a: "Rundet eine Zahl nach den Standardregeln.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, der auf `stellen` Dezimalstellen gerundet werden soll.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dezimalstellen",
          detail: "Die Anzahl der Dezimalstellen, auf die gerundet werden soll.",
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
      d: "Rundet eine Zahl auf eine bestimmte Anzahl von Dezimalstellen und dabei immer zur nächsten gültigen Stufe ab.",
      a: "Rundet eine Zahl ab.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, der auf `stellen` Dezimalstellen gerundet werden soll, dabei immer abgerundet.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dezimalstellen",
          detail: "Die Anzahl der Dezimalstellen, auf die gerundet werden soll.",
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
      d: "Rundet eine Zahl auf eine bestimmte Anzahl von Dezimalstellen und dabei immer zur nächsten gültigen Stufe auf.",
      a: "Rundet eine Zahl auf.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, der auf `stellen` Dezimalstellen gerundet werden soll, dabei immer aufgerundet.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dezimalstellen",
          detail: "Die Anzahl der Dezimalstellen, auf die gerundet werden soll.",
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
      d: "Gibt bei den Parametern `x`, `n`, `m` und `a` die Potenzreihensumme a1*x^n + a2*x^(n+m) + a3*x^(n+2m) + ... + ai*x^(n+(i-1)m) zurück.",
      a: "Summe einer Potenzreihe.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die Potenzreihe. Variiert je nach Art der Näherung; kann ein Winkel, ein Exponent oder ein anderer Wert sein.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "Die anfängliche Potenz, mit der `x` in der Potenzreihe potenziert wird.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "m",
          detail: "Der additive Zuwachs, um den `x` erhöht wird.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a",
          detail: "Das Array oder der Bereich mit den Koeffizienten der Potenzreihe.",
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
      d: "Gibt bei einer Eingabezahl `-1` zurück, wenn sie negativ ist, `1`, wenn sie positiv ist, und `0`, wenn sie null ist.",
      a: "Vorzeichen einer angegebenen Zahl (+/-/0).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, dessen Vorzeichen ausgewertet werden soll.",
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
      d: "Gibt den Sinus eines im Bogenmaß angegebenen Winkels zurück.",
      a: "Sinus eines im Bogenmaß angegebenen Winkels.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "winkel",
          detail: "Der Winkel, dessen Sinus berechnet werden soll, im Bogenmaß.",
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
      d: "Gibt den hyperbolischen Sinus einer beliebigen reellen Zahl zurück.",
      a: "Hyperbolischer Sinus einer beliebigen reellen Zahl.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Ein beliebiger reeller Wert, dessen hyperbolischer Sinus berechnet werden soll.",
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
      d: "Gibt die positive Quadratwurzel einer positiven Zahl zurück.",
      a: "Positive Quadratwurzel einer positiven Zahl.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Die Zahl, für die die positive Quadratwurzel berechnet werden soll.",
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
      d: "Gibt die positive Quadratwurzel des Produkts aus Pi und der angegebenen positiven Zahl zurück.",
      a: "Quadratwurzel des Produkts aus Pi und einer Zahl.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Die Zahl, die mit Pi multipliziert wird, wonach die Quadratwurzel des Produkts zurückgegeben wird.",
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
      d: "Gibt den Logarithmus einer angegebenen Gammafunktion zur Basis e (Eulersche Zahl) zurück.",
      a: "Logarithmus der Gammafunktion.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Die Eingabe für die Gammafunktion. Der natürliche Logarithmus von Gamma(`wert`) wird zurückgegeben.",
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
      d: "Gibt den Kosinus eines im Bogenmaß angegebenen Winkels zurück.",
      a: "Kosinus eines im Bogenmaß angegebenen Winkels.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "winkel",
          detail: "Der Winkel, dessen Kosinus berechnet werden soll, im Bogenmaß.",
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
      d: "Kürzt eine Zahl auf eine bestimmte Anzahl signifikanter Stellen, indem weniger signifikante Stellen weggelassen werden.",
      a: "Kürzt eine Zahl.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, der gekürzt werden soll.",
          example: "3.141592654",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dezimalstellen",
          detail: "Die Anzahl der signifikanten Stellen rechts vom Dezimalpunkt, die beibehalten werden sollen.",
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
      d: "Gibt eine Zahl geteilt durch eine andere zurück.",
      a: "Eine Zahl geteilt durch eine andere.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividend",
          detail: "Die Zahl, die geteilt werden soll.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "Die Zahl, durch die geteilt werden soll.",
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
      d: "Gibt eine mit einem Exponenten potenzierte Zahl zurück.",
      a: "Eine mit einem Exponenten potenzierte Zahl.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "basis",
          detail: "Die Zahl, die mit `exponent` potenziert werden soll.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "exponent",
          detail: "Der Exponent, mit dem `basis` potenziert werden soll.",
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
      d: "Gibt die Summe eines Bereichs abhängig von mehreren Kriterien zurück.",
      a: "Summiert einen Bereich abhängig von mehreren Kriterien.",
      m: [
        3,
        257
      ],
      p: [
        {
          name: "summenbereich",
          detail: "Der zu summierende Bereich.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kriterienbereich1",
          detail: "Der Bereich, der gegen kriterium1 geprüft wird.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kriterium1",
          detail: "Das Muster oder der Test, der auf kriterienbereich1 angewendet wird.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterienbereich2",
          detail: "Weitere zu prüfende Bereiche.",
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
      d: "Gibt die Anzahl eines Bereichs abhängig von mehreren Kriterien zurück.",
      a: "Zählt Werte abhängig von mehreren Kriterien.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "kriterienbereich1",
          detail: "Der Bereich, der gegen `kriterium1` geprüft wird.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "kriterium1",
          detail: "Das Muster oder der Test, der auf `kriterienbereich1` angewendet wird.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterienbereich2",
          detail: "Weitere zu prüfende Bereiche.",
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
      d: "Gibt das Ergebnis der Multiplikation einer Reihe von Zahlen zurück.",
      a: "Ergebnis der Multiplikation einer Reihe von Zahlen.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "faktor1",
          detail: "Die erste Zahl oder der erste Bereich, die/der für das Produkt berechnet werden soll.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "faktor2",
          detail: "Weitere Zahlen oder Bereiche, die für das Produkt berechnet werden sollen.",
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
      d: "Berechnet den harmonischen Mittelwert eines Datensatzes.",
      a: "Der harmonische Mittelwert eines Datensatzes.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich der Grundgesamtheit.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die in die Grundgesamtheit einbezogen werden sollen.",
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
      d: "Berechnet die Wahrscheinlichkeit, bei einer bestimmten Anzahl von Versuchen eine bestimmte Anzahl von Erfolgen zu ziehen, gegeben eine Grundgesamtheit einer bestimmten Größe mit einer bestimmten Anzahl von Erfolgen, ohne Zurücklegen.",
      a: "Wahrscheinlichkeit der hypergeometrischen Verteilung.",
      m: [
        5,
        5
      ],
      p: [
        {
          name: "anzahl_erfolge",
          detail: "Die gewünschte Anzahl von Erfolgen.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_ziehungen",
          detail: "Die Anzahl der zulässigen Ziehungen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "erfolge_in_population",
          detail: "Die Gesamtzahl der Erfolge in der Grundgesamtheit.",
          example: "20",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "populationsgröße",
          detail: "Die Gesamtgröße der Grundgesamtheit.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Bestimmt die Form der Funktion. \n\nWenn cumulative TRUE() ist, gibt HYPGEOM.DIST die kumulative Verteilungsfunktion zurück;\n\nwenn FALSE(), gibt sie die Wahrscheinlichkeitsdichtefunktion zurück.",
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
      d: "Berechnet den y-Wert, an dem die aus der linearen Regression eines Datensatzes resultierende Gerade die y-Achse (x=0) schneidet.",
      a: "y-Achsenabschnitt einer durch lineare Regression ermittelten Geraden.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Der Bereich, der das Array oder die Matrix der abhängigen Daten darstellt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Der Bereich, der das Array oder die Matrix der unabhängigen Daten darstellt.",
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
      d: "Berechnet die Kurtosis (Wölbung) eines Datensatzes, die die Form und insbesondere die \"Spitzigkeit\" dieses Datensatzes beschreibt.",
      a: "Kurtosis (Wölbung) eines Datensatzes.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich des Datensatzes.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die in den Datensatz einbezogen werden sollen.",
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
      d: "Gibt das n-te größte Element eines Datensatzes zurück, wobei n benutzerdefiniert ist.",
      a: "n-tes größtes Element eines Datensatzes.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Array oder Bereich mit dem zu berücksichtigenden Datensatz.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "Die Rangfolge des zurückzugebenden Elements, von größtem zu kleinstem.",
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
      d: "Berechnet die Standardabweichung auf Basis einer Stichprobe, wobei Text auf den Wert `0` gesetzt wird.",
      a: "Standardabweichung einer Stichprobe (Text als 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich der Stichprobe.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die in die Stichprobe einbezogen werden sollen.",
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
      d: "Berechnet die Standardabweichung auf Basis einer gesamten Grundgesamtheit.",
      a: "Standardabweichung einer gesamten Grundgesamtheit.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich der Grundgesamtheit.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die in die Grundgesamtheit einbezogen werden sollen.",
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
      d: "Berechnet das geometrische Mittel eines Datensatzes.",
      a: "Das geometrische Mittel eines Datensatzes.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich der Grundgesamtheit.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die in die Grundgesamtheit einbezogen werden sollen.",
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
      d: "Gibt den Rang eines angegebenen Werts in einem Datensatz zurück. Gibt es mehr als einen Eintrag desselben Werts, wird der höchste Rang der Einträge zurückgegeben.",
      a: "Höchster Rang eines angegebenen Werts in einem Datensatz.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, dessen Rang bestimmt werden soll.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten",
          detail: "Das Array oder der Bereich mit dem zu berücksichtigenden Datensatz.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "ist_aufsteigend",
          detail: "Ob die Werte in `daten` in absteigender oder aufsteigender Reihenfolge betrachtet werden sollen. Falls weggelassen, ist der Standardwert absteigend (FALSE).",
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
      d: "Gibt den Rang eines angegebenen Werts in einem Datensatz zurück. Gibt es mehr als einen Eintrag desselben Werts, wird der durchschnittliche Rang der Einträge zurückgegeben.",
      a: "Durchschnittlicher Rang eines angegebenen Werts in einem Datensatz.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, dessen Rang bestimmt werden soll.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten",
          detail: "Das Array oder der Bereich mit dem zu berücksichtigenden Datensatz.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "ist_aufsteigend",
          detail: "Ob die Werte in `daten` in absteigender oder aufsteigender Reihenfolge betrachtet werden sollen. Falls weggelassen, ist der Standardwert absteigend (FALSE).",
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
      d: "Gibt den prozentualen Rang (Perzentil) von 0 bis 1 (ausschließlich) eines angegebenen Werts in einem Datensatz zurück.",
      a: "Prozentualer Rang (Perzentil) von 0 bis 1 (ausschließlich).",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "daten",
          detail: "Das Array oder der Bereich mit dem zu berücksichtigenden Datensatz.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert",
          detail: "Der Wert, dessen prozentualer Rang bestimmt werden soll.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "signifikante_stellen",
          detail: "Die Anzahl der signifikanten Stellen, die für die Berechnung verwendet werden sollen. Standard ist 3.",
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
      d: "Gibt den prozentualen Rang (Perzentil) von 0 bis 1 (einschließlich) eines angegebenen Werts in einem Datensatz zurück.",
      a: "Prozentualer Rang (Perzentil) von 0 bis 1 (einschließlich).",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "daten",
          detail: "Das Array oder der Bereich mit dem zu berücksichtigenden Datensatz.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert",
          detail: "Der Wert, dessen prozentualer Rang bestimmt werden soll.",
          example: " A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "signifikante_stellen",
          detail: "Die Anzahl der signifikanten Stellen, die für die Berechnung verwendet werden sollen. Standard ist 3.",
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
      d: "Berechnet den erwarteten y-Wert für ein angegebenes x auf Basis einer linearen Regression eines Datensatzes.",
      a: "Erwarteter y-Wert basierend auf linearer Regression.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Der Wert auf der x-Achse, für den eine Prognose erstellt werden soll.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_y",
          detail: "Der Bereich, der das Array oder die Matrix der abhängigen Daten darstellt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Der Bereich, der das Array oder die Matrix der unabhängigen Daten darstellt.",
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
      d: "Gibt die inverse Fisher-Transformation eines angegebenen Werts zurück.",
      a: "Inverse Fisher-Transformation eines angegebenen Werts.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, für den die inverse Fisher-Transformation berechnet werden soll.",
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
      d: "Gibt die Fisher-Transformation eines angegebenen Werts zurück.",
      a: "Fisher-Transformation eines angegebenen Werts.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert, für den die Fisher-Transformation berechnet werden soll.",
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
      d: "Gibt den am häufigsten vorkommenden Wert in einem Datensatz zurück.",
      a: "Am häufigsten vorkommender Wert in einem Datensatz.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, der bei der Berechnung des Modus berücksichtigt werden soll.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die bei der Berechnung des Modus berücksichtigt werden sollen.",
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
      d: "Gibt den Wert der Weibull-Verteilungsfunktion (oder der kumulativen Weibull-Verteilungsfunktion) für eine angegebene Form und Skalierung zurück.",
      a: "Weibull-Verteilungsfunktion.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die Weibull-Verteilungsfunktion.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "form",
          detail: "Der Formparameter der Weibull-Verteilungsfunktion.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "skalierung",
          detail: "Der Skalierungsparameter der Weibull-Verteilungsfunktion.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Ob die kumulative Verteilungsfunktion verwendet werden soll.",
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
      d: "Gibt die Anzahl der numerischen Werte in einem Datensatz zurück.",
      a: "Die Anzahl der numerischen Werte in einem Datensatz.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, der bei der Zählung berücksichtigt werden soll.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die bei der Zählung berücksichtigt werden sollen.",
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
      d: "Gibt die Anzahl der Werte in einem Datensatz zurück.",
      a: "Die Anzahl der Werte in einem Datensatz.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, der bei der Zählung berücksichtigt werden soll.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die bei der Zählung berücksichtigt werden sollen.",
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
      d: "Berechnet den Durchschnitt der absoluten Abweichungen der Daten vom Mittelwert eines Datensatzes.",
      a: "Durchschnittliche absolute Abweichung vom Mittelwert.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich der Stichprobe.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die in die Stichprobe einbezogen werden sollen.",
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
      d: "Gibt den numerischen Durchschnittswert in einem Datensatz zurück, wobei Text ignoriert wird.",
      a: "Numerischer Durchschnittswert in einem Datensatz, wobei Text ignoriert wird.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, der bei der Berechnung des Durchschnittswerts berücksichtigt werden soll.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die bei der Berechnung des Durchschnittswerts berücksichtigt werden sollen.",
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
      d: "Gibt den numerischen Durchschnittswert in einem Datensatz zurück.",
      a: "Numerischer Durchschnittswert in einem Datensatz.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, der bei der Berechnung des Durchschnittswerts berücksichtigt werden soll.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die bei der Berechnung des Durchschnittswerts berücksichtigt werden sollen.",
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
      d: "Berechnet die Wahrscheinlichkeit, bei einer bestimmten Anzahl von Versuchen eine bestimmte Anzahl (oder eine Höchstzahl) von Erfolgen zu ziehen, gegeben eine Grundgesamtheit einer bestimmten Größe mit einer bestimmten Anzahl von Erfolgen, mit Zurücklegen.",
      a: "Wahrscheinlichkeit der Binomialverteilung.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "anzahl_erfolge",
          detail: "Die Anzahl der Erfolge, für die die Wahrscheinlichkeit bei `anzahl_versuche` Versuchen berechnet werden soll.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_versuche",
          detail: "Die Anzahl der unabhängigen Versuche.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "erfolgswahrscheinlichkeit",
          detail: "Die Erfolgswahrscheinlichkeit bei einem einzelnen Versuch.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Ob die kumulative Binomialverteilung verwendet werden soll.",
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
      d: "Berechnet den kleinsten Wert, für den die kumulative Binomialverteilung größer oder gleich einem angegebenen Kriterium ist.",
      a: "Inverse kumulative Binomialverteilungsfunktion.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "anzahl_versuche",
          detail: "Die Anzahl der unabhängigen Versuche.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "erfolgswahrscheinlichkeit",
          detail: "Die Erfolgswahrscheinlichkeit bei einem einzelnen Versuch.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zielwahrscheinlichkeit",
          detail: "Die gewünschte Schwellenwahrscheinlichkeit.",
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
      d: "Berechnet die Breite der Hälfte des Konfidenzintervalls für eine Normalverteilung.",
      a: "Konfidenzintervall für eine Normalverteilung.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "alpha",
          detail: "Eins minus dem gewünschten Konfidenzniveau. Z. B. `0,1` für eine Konfidenz von `0,9` bzw. 90 %.",
          example: "0.05",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standardabweichung",
          detail: "Die Standardabweichung der Grundgesamtheit.",
          example: "1.6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "populationsgröße",
          detail: "Die Größe der Grundgesamtheit.",
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
      d: "Berechnet r, den Pearson-Produkt-Moment-Korrelationskoeffizienten eines Datensatzes.",
      a: "Pearson-Produkt-Moment-Korrelationskoeffizient.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Der Bereich, der das Array oder die Matrix der abhängigen Daten darstellt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Der Bereich, der das Array oder die Matrix der unabhängigen Daten darstellt.",
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
      d: "Berechnet die Kovarianz eines Datensatzes.",
      a: "Die Kovarianz eines Datensatzes.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Der Bereich, der das Array oder die Matrix der abhängigen Daten darstellt.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Der Bereich, der das Array oder die Matrix der unabhängigen Daten darstellt.",
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
      d: "Berechnet die Stichprobenkovarianz eines Datensatzes.",
      a: "Die Stichprobenkovarianz eines Datensatzes.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Der Bereich, der das Array oder die Matrix der abhängigen Daten darstellt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Der Bereich, der das Array oder die Matrix der unabhängigen Daten darstellt.",
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
      d: "Berechnet die Summe der quadrierten Abweichungen auf Basis einer Stichprobe.",
      a: "Die Summe der quadrierten Abweichungen auf Basis einer Stichprobe.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich der Stichprobe.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die in die Stichprobe einbezogen werden sollen.",
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
      d: "Gibt den Wert der Exponentialverteilungsfunktion mit einem angegebenen Lambda bei einem angegebenen Wert zurück.",
      a: "Exponentialverteilungsfunktion.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die Exponentialverteilungsfunktion.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lambda",
          detail: "Der Lambda-Wert, der die Exponentialverteilungsfunktion angibt.",
          example: "0.5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Ob die kumulative Exponentialverteilung verwendet werden soll.",
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
      d: "Gibt den Durchschnitt eines Bereichs abhängig von einem Kriterium zurück.",
      a: "Durchschnitt von Werten abhängig von einem Kriterium.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "kriterienbereich",
          detail: "Der Bereich, der gegen `kriterium` geprüft wird.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterium",
          detail: "Das Muster oder der Test, der auf `kriterienbereich` angewendet wird.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "mittelwertbereich",
          detail: "Der Bereich, aus dem der Durchschnitt berechnet wird. Falls nicht angegeben, wird stattdessen `kriterienbereich` für den Durchschnitt verwendet.",
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
      d: "Gibt den Durchschnitt eines Bereichs abhängig von mehreren Kriterien zurück.",
      a: "Durchschnitt von Werten abhängig von mehreren Kriterien.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "mittelwertbereich",
          detail: "Der Bereich, aus dem der Durchschnitt berechnet wird.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterienbereich1",
          detail: "Der Bereich, der gegen `kriterium1` geprüft wird.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterium1",
          detail: "Das Muster oder der Test, der auf `kriterienbereich1` angewendet wird.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "kriterienbereich2",
          detail: "Weitere zu prüfende Bereiche.",
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
      d: "Gibt die Anzahl der Möglichkeiten zurück, eine bestimmte Anzahl von Objekten aus einer Gruppe von Objekten einer bestimmten Größe unter Berücksichtigung der Reihenfolge auszuwählen.",
      a: "Anzahl der Permutationen aus einer Anzahl von Objekten.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "Die Größe der Objektgruppe, aus der ausgewählt werden soll.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Die Anzahl der auszuwählenden Objekte.",
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
      d: "Berechnet den Mittelwert eines Datensatzes unter Ausschluss eines bestimmten Anteils der Daten an den oberen und unteren Enden des Datensatzes.",
      a: "Mittelwert eines Datensatzes unter Ausschluss der Extremwerte.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Array oder Bereich mit dem zu berücksichtigenden Datensatz.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "ausgeschlossener_anteil",
          detail: "Der Anteil des Datensatzes, der von den Extremwerten des Datensatzes ausgeschlossen werden soll.",
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
      d: "Gibt den Wert bei einem gegebenen Perzentil eines Datensatzes zurück, ausgenommen 0 und 1.",
      a: "Wert bei einem gegebenen Perzentil eines Datensatzes, ausgenommen 0 und 1.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Das Array oder der Bereich mit dem zu berücksichtigenden Datensatz.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "perzentil",
          detail: "Das Perzentil, ausgenommen 0 und 1, dessen Wert innerhalb von 'daten' berechnet und zurückgegeben wird.",
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
      d: "Gibt den Wert bei einem gegebenen Perzentil eines Datensatzes zurück.",
      a: "Wert bei einem gegebenen Perzentil eines Datensatzes.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Das Array oder der Bereich mit dem zu berücksichtigenden Datensatz.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "perzentil",
          detail: "Das Perzentil, dessen Wert innerhalb von `daten` berechnet und zurückgegeben wird.",
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
      d: "Berechnet r, den Pearson-Produkt-Moment-Korrelationskoeffizienten eines Datensatzes.",
      a: "Pearson-Produkt-Moment-Korrelationskoeffizient.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Der Bereich, der das Array oder die Matrix der abhängigen Daten darstellt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Der Bereich, der das Array oder die Matrix der unabhängigen Daten darstellt.",
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
      d: "Gibt den Wert der inversen Standardnormalverteilungsfunktion für einen angegebenen Wert zurück.",
      a: "Inverse Standardnormalverteilungsfunktion.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die inverse Standardnormalverteilungsfunktion.",
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
      d: "Gibt den Wert der kumulativen Standardnormalverteilungsfunktion für einen angegebenen Wert zurück.",
      a: "Kumulative Standardnormalverteilungsfunktion.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die kumulative Standardnormalverteilungsfunktion.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Bestimmt die Form der Funktion. \n\nWenn TRUE(), gibt sie die kumulative Verteilungsfunktion zurück;\n\nwenn FALSE(), gibt sie die Wahrscheinlichkeitsdichtefunktion zurück.",
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
      d: "Gibt den Wert der inversen Normalverteilungsfunktion für einen angegebenen Wert, Mittelwert und Standardabweichung zurück.",
      a: "Inverse Normalverteilungsfunktion.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die inverse Normalverteilungsfunktion.",
          example: "0.75",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mittelwert",
          detail: "Der Mittelwert (mu) der Normalverteilungsfunktion.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standardabweichung",
          detail: "Die Standardabweichung (sigma) der Normalverteilungsfunktion.",
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
      d: "Gibt den Wert der Normalverteilungsfunktion (oder der kumulativen Normalverteilungsfunktion) für einen angegebenen Wert, Mittelwert und Standardabweichung zurück.",
      a: "Normalverteilungsfunktion.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die Normalverteilungsfunktion.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mittelwert",
          detail: "Der Mittelwert (mu) der Normalverteilungsfunktion.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standardabweichung",
          detail: "Die Standardabweichung (sigma) der Normalverteilungsfunktion.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Ob die kumulative Normalverteilungsfunktion anstelle der Verteilungsfunktion verwendet werden soll.",
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
      d: "Berechnet die Wahrscheinlichkeit, bei einer gegebenen Erfolgswahrscheinlichkeit in unabhängigen Versuchen eine bestimmte Anzahl von Misserfolgen vor einer bestimmten Anzahl von Erfolgen zu ziehen.",
      a: "Wahrscheinlichkeit der negativen Binomialverteilung.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "anzahl_fehlschläge",
          detail: "Die Anzahl der zu modellierenden Misserfolge.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_erfolge",
          detail: "Die Anzahl der zu modellierenden Erfolge.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "erfolgswahrscheinlichkeit",
          detail: "Die Erfolgswahrscheinlichkeit bei einem einzelnen Versuch.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Bestimmt die Form der Funktion. \n\nWenn TRUE(), gibt sie die kumulative Verteilungsfunktion zurück;\n\nwenn FALSE(), gibt sie die Wahrscheinlichkeitsdichtefunktion zurück.",
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
      d: "Gibt den kleinsten numerischen Wert in einem Datensatz zurück.",
      a: "Kleinster numerischer Wert in einem Datensatz.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, der bei der Berechnung des Minimalwerts berücksichtigt werden soll.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die bei der Berechnung des Minimalwerts berücksichtigt werden sollen.",
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
      d: "Gibt den kleinsten Wert in einem numerischen Datensatz zurück.",
      a: "Kleinster Wert in einem numerischen Datensatz.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, der bei der Berechnung des Minimalwerts berücksichtigt werden soll.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die bei der Berechnung des Minimalwerts berücksichtigt werden sollen.",
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
      d: "Gibt den Medianwert in einem numerischen Datensatz zurück.",
      a: "Medianwert in einem numerischen Datensatz.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, der bei der Berechnung des Medianwerts berücksichtigt werden soll.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die bei der Berechnung des Medianwerts berücksichtigt werden sollen.",
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
      d: "Gibt den größten numerischen Wert in einem Datensatz zurück.",
      a: "Größter numerischer Wert in einem Datensatz.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, der bei der Berechnung des Maximalwerts berücksichtigt werden soll.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die bei der Berechnung des Maximalwerts berücksichtigt werden sollen.",
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
      d: "Gibt den größten Wert in einem numerischen Datensatz zurück.",
      a: "Größter Wert in einem numerischen Datensatz.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich, der bei der Berechnung des Maximalwerts berücksichtigt werden soll.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die bei der Berechnung des Maximalwerts berücksichtigt werden sollen.",
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
      d: "Gibt den Wert der inversen kumulativen Lognormalverteilung mit angegebenem Mittelwert und angegebener Standardabweichung bei einem angegebenen Wert zurück.",
      a: "Inverse kumulative Lognormalverteilungsfunktion.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die inverse kumulative Lognormalverteilungsfunktion.",
          example: "0.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mittelwert",
          detail: "Der Mittelwert (mu) der inversen kumulativen Lognormalverteilungsfunktion.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standardabweichung",
          detail: "Die Standardabweichung (sigma) der inversen kumulativen Lognormalverteilungsfunktion.",
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
      d: "Gibt den Wert der kumulativen Lognormalverteilung mit angegebenem Mittelwert und angegebener Standardabweichung bei einem angegebenen Wert zurück.",
      a: "Wahrscheinlichkeit der kumulativen Lognormalverteilung.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die kumulative Lognormalverteilungsfunktion.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mittelwert",
          detail: "Der Mittelwert (mu) der kumulativen Lognormalverteilungsfunktion.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standardabweichung",
          detail: "Die Standardabweichung (sigma) der kumulativen Lognormalverteilungsfunktion.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Bestimmt die Form der Funktion. \n\nWenn TRUE(), gibt sie die kumulative Verteilungsfunktion zurück;\n\nwenn FALSE(), gibt sie die Wahrscheinlichkeitsdichtefunktion zurück.",
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
      d: "Gibt den einseitigen p-Wert eines Z-Tests mit Standardverteilung zurück.",
      a: "Einseitiger p-Wert eines Z-Tests.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "daten",
          detail: "Das Array oder der Bereich mit dem zu berücksichtigenden Datensatz.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "wert",
          detail: "Die Testgröße, die im Z-Test verwendet werden soll.",
          example: "B2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standardabweichung",
          detail: "Die für den Z-Test anzunehmende Standardabweichung. Wird sie nicht angegeben, wird die Standardabweichung der Daten verwendet.",
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
      d: "Berechnet bei einer Menge von Werten und zugehörigen Wahrscheinlichkeiten die Wahrscheinlichkeit, dass ein zufällig ausgewählter Wert zwischen zwei Grenzen liegt.",
      a: "Wahrscheinlichkeit, dass Werte in einem Bereich liegen.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "daten",
          detail: "Array oder Bereich mit dem zu berücksichtigenden Datensatz.",
          example: "A3:A6",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "wahrscheinlichkeiten",
          detail: "Array oder Bereich mit Wahrscheinlichkeiten, die `daten` entsprechen.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "untergrenze",
          detail: "Die Untergrenze des Wertebereichs, für den die Wahrscheinlichkeit berechnet werden soll.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "obergrenze",
          detail: "Die Obergrenze des Wertebereichs, für den die Wahrscheinlichkeit berechnet werden soll.",
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
      d: "Gibt einen Wert zurück, der einem angegebenen Quartil eines Datensatzes am nächsten liegt, ausgenommen 0 und 4.",
      a: "Wert, der einem bestimmten Quartil eines Datensatzes am nächsten liegt, ausgenommen 0 und 4.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Das Array oder der Bereich mit dem zu berücksichtigenden Datensatz.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "quartilnummer",
          detail: "Welches Quartil zurückgegeben werden soll.",
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
      d: "Gibt einen Wert zurück, der einem angegebenen Quartil eines Datensatzes am nächsten liegt.",
      a: "Wert, der einem bestimmten Quartil eines Datensatzes am nächsten liegt.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Das Array oder der Bereich mit dem zu berücksichtigenden Datensatz.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "quartilnummer",
          detail: "Welcher Quartilwert zurückgegeben werden soll.",
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
      d: "Gibt den Wert der Poisson-Verteilungsfunktion (oder der kumulativen Poisson-Verteilungsfunktion) für einen angegebenen Wert und Mittelwert zurück.",
      a: "Poisson-Verteilungsfunktion.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die Poisson-Verteilungsfunktion.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mittelwert",
          detail: "Der Mittelwert (mu) der Poisson-Verteilungsfunktion.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Ob die kumulative Poisson-Verteilungsfunktion anstelle der Verteilungsfunktion verwendet werden soll.",
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
      d: "Berechnet das Quadrat von r, dem Pearson-Produkt-Moment-Korrelationskoeffizienten eines Datensatzes.",
      a: "Quadrat des Korrelationskoeffizienten.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Der Bereich, der das Array oder die Matrix der abhängigen Daten darstellt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Der Bereich, der das Array oder die Matrix der unabhängigen Daten darstellt.",
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
      d: "Berechnet die linksseitige Wahrscheinlichkeit für eine Student'sche t-Verteilung bei einer gegebenen Eingabe (x).",
      a: "Linksseitige Student'sche t-Verteilung.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die t-Verteilungsfunktion.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade",
          detail: "Die Anzahl der Freiheitsgrade.",
          example: "30",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Wenn cumulative TRUE ist, gibt T.DIST die kumulative Verteilungsfunktion zurück; wenn FALSE, gibt sie die Wahrscheinlichkeitsdichtefunktion zurück.",
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
      d: "Berechnet die Wahrscheinlichkeit für eine zweiseitige Student'sche t-Verteilung bei einer gegebenen Eingabe (x).",
      a: "Zweiseitige Student'sche t-Verteilung.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die t-Verteilungsfunktion.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade",
          detail: "Die Anzahl der Freiheitsgrade.",
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
      d: "Berechnet die rechtsseitige Wahrscheinlichkeit für eine Student'sche t-Verteilung bei einer gegebenen Eingabe (x).",
      a: "Rechtsseitige Student'sche t-Verteilung.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die t-Verteilungsfunktion.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade",
          detail: "Die Anzahl der Freiheitsgrade.",
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
      d: "Berechnet den negativen Kehrwert der einseitigen TDIST-Funktion.",
      a: "T.INV",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wahrscheinlichkeit",
          detail: "Die Wahrscheinlichkeit, die der zweiseitigen t-Verteilung zugeordnet ist.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade",
          detail: "Die Anzahl der Freiheitsgrade.",
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
      d: "Berechnet den Kehrwert der zweiseitigen TDIST-Funktion.",
      a: "T.INV.2T",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "wahrscheinlichkeit",
          detail: "Die Wahrscheinlichkeit, die der zweiseitigen t-Verteilung zugeordnet ist.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade",
          detail: "Die Anzahl der Freiheitsgrade.",
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
      d: "t-Test. Gibt die Wahrscheinlichkeit zurück, die dem t-Test nach Student zugeordnet ist. Bestimmt, ob zwei Stichproben wahrscheinlich aus denselben zwei zugrunde liegenden Grundgesamtheiten mit demselben Mittelwert stammen.",
      a: "Gibt die dem t-Test zugeordnete Wahrscheinlichkeit zurück.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "bereich1",
          detail: "Die erste Datenstichprobe oder Zellgruppe, die für den t-Test berücksichtigt werden soll.",
          example: "A1:A4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "bereich2",
          detail: "Die zweite Datenstichprobe oder Zellgruppe, die für den t-Test berücksichtigt werden soll.",
          example: "B1:B4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "seiten",
          detail: "Gibt die Anzahl der Verteilungsseiten an.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "typ",
          detail: "Gibt die Art des t-Tests an.",
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
      d: "Berechnet die linksseitige F-Wahrscheinlichkeitsverteilung (Diversitätsgrad) für zwei Datensätze bei gegebener Eingabe x. Auch als Fisher-Snedecor-Verteilung oder Snedecors F-Verteilung bezeichnet.",
      a: "F-Wahrscheinlichkeitsverteilung (linksseitig).",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die F-Wahrscheinlichkeitsverteilungsfunktion. Der Wert, an dem die Funktion ausgewertet werden soll.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade1",
          detail: "Der Zähler der Anzahl der Freiheitsgrade.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade2",
          detail: "Der Nenner der Anzahl der Freiheitsgrade.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "kumuliert",
          detail: "Logischer Wert, der die Form der Funktion bestimmt.",
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
      d: "Berechnet die rechtsseitige F-Wahrscheinlichkeitsverteilung (Diversitätsgrad) für zwei Datensätze bei gegebener Eingabe x. Auch als Fisher-Snedecor-Verteilung oder Snedecors F-Verteilung bezeichnet.",
      a: "F-Wahrscheinlichkeitsverteilung.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Die Eingabe für die F-Wahrscheinlichkeitsverteilungsfunktion. Der Wert, an dem die Funktion ausgewertet werden soll.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade1",
          detail: "Der Zähler der Anzahl der Freiheitsgrade.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "freiheitsgrade2",
          detail: "Der Nenner der Anzahl der Freiheitsgrade.",
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
      d: "Berechnet die Varianz auf Basis einer gesamten Grundgesamtheit.",
      a: "Varianz einer gesamten Grundgesamtheit.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich der Grundgesamtheit.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die in die Grundgesamtheit einbezogen werden sollen.",
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
      d: "Berechnet die Varianz auf Basis einer Stichprobe.",
      a: "Varianz.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich der Stichprobe.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die in die Stichprobe einbezogen werden sollen.",
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
      d: "Berechnet die Varianz auf Basis einer Stichprobe, wobei Text auf den Wert `0` gesetzt wird.",
      a: "Varianz einer Stichprobe (Text als 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich der Stichprobe.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die in die Stichprobe einbezogen werden sollen.",
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
      d: "Berechnet die Varianz auf Basis einer gesamten Grundgesamtheit, wobei Text auf den Wert `0` gesetzt wird.",
      a: "Varianz einer gesamten Grundgesamtheit (Text als 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich der Grundgesamtheit.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die in die Grundgesamtheit einbezogen werden sollen.",
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
      d: "Berechnet den Standardfehler des vorhergesagten y-Werts für jedes x in der Regression eines Datensatzes.",
      a: "Standardfehler vorhergesagter y-Werte in einer Regression.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Der Bereich, der das Array oder die Matrix der abhängigen Daten darstellt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Der Bereich, der das Array oder die Matrix der unabhängigen Daten darstellt.",
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
      d: "Berechnet das normalisierte Äquivalent einer Zufallsvariablen bei gegebenem Mittelwert und gegebener Standardabweichung der Verteilung.",
      a: "Normalisiertes Äquivalent einer Zufallsvariablen.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "wert",
          detail: "Der Wert der zu normalisierenden Zufallsvariablen.",
          example: "96",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mittelwert",
          detail: "Der Mittelwert der Verteilung.",
          example: "80",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "standardabweichung",
          detail: "Die Standardabweichung der Verteilung.",
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
      d: "Gibt das n-te kleinste Element eines Datensatzes zurück, wobei n benutzerdefiniert ist.",
      a: "n-tes kleinstes Element in einem Datensatz.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten",
          detail: "Das Array oder der Bereich mit dem zu berücksichtigenden Datensatz.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "n",
          detail: "Die Rangfolge des zurückzugebenden Elements, von kleinstem zu größtem.",
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
      d: "Berechnet die Steigung der aus der linearen Regression eines Datensatzes resultierenden Geraden.",
      a: "Steigung der Geraden aus der linearen Regression von Daten.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "daten_y",
          detail: "Der Bereich, der das Array oder die Matrix der abhängigen Daten darstellt.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "daten_x",
          detail: "Der Bereich, der das Array oder die Matrix der unabhängigen Daten darstellt.",
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
      d: "Berechnet die Schiefe eines Datensatzes, die die Symmetrie dieses Datensatzes um den Mittelwert beschreibt.",
      a: "Schiefe eines Datensatzes.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich des Datensatzes.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die in den Datensatz einbezogen werden sollen.",
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
      d: "Berechnet die Schiefe eines Datensatzes, die die Symmetrie dieses Datensatzes um den Mittelwert beschreibt. Dabei wird angenommen, dass der Datensatz die Grundgesamtheit darstellt.",
      a: "Schiefe des Datensatzes einer Grundgesamtheit.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "wert1",
          detail: "Der erste Wert oder Bereich des Datensatzes.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wert2",
          detail: "Weitere Werte oder Bereiche, die in den Datensatz einbezogen werden sollen.",
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
      d: "Vertikale Suche. Durchsucht die erste Spalte eines Bereichs nach einem Schlüssel und gibt den Wert einer angegebenen Zelle in der gefundenen Zeile zurück.",
      a: "Vertikale Suche.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "suchschlüssel",
          detail: "Der zu suchende Wert. Zum Beispiel `42`, `\"Katzen\"` oder `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bereich",
          detail: "Der für die Suche zu berücksichtigende Bereich. Die erste Spalte des Bereichs wird nach dem in `suchkriterium` angegebenen Schlüssel durchsucht.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "index",
          detail: "Der Spaltenindex des zurückzugebenden Werts, wobei die erste Spalte in `bereich` mit 1 nummeriert ist.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ist_sortiert",
          detail: "Gibt an, ob die zu durchsuchende Spalte (die erste Spalte des angegebenen Bereichs) sortiert ist; in diesem Fall wird die nächstliegende Übereinstimmung für `suchkriterium` zurückgegeben.",
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
      d: "Horizontale Suche. Durchsucht die erste Zeile eines Bereichs nach einem Schlüssel und gibt den Wert einer angegebenen Zelle in der gefundenen Spalte zurück.",
      a: "Horizontale Suche.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "suchschlüssel",
          detail: "Der zu suchende Wert. Zum Beispiel `42`, `\"Katzen\"` oder `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bereich",
          detail: "Der für die Suche zu berücksichtigende Bereich. Die erste Zeile des Bereichs wird nach dem in `suchkriterium` angegebenen Schlüssel durchsucht.",
          example: "A2:Z6",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "index",
          detail: "Der Zeilenindex des zurückzugebenden Werts, wobei die erste Zeile in `bereich` mit 1 nummeriert ist.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ist_sortiert",
          detail: "Gibt an, ob die zu durchsuchende Zeile (die erste Zeile des angegebenen Bereichs) sortiert ist.",
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
      d: "Durchsucht eine sortierte Zeile oder Spalte nach einem Schlüssel und gibt den Wert der Zelle in einem Ergebnisbereich zurück, der sich an derselben Position wie die Suchzeile oder -spalte befindet.",
      a: "Einen Wert nachschlagen.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "suchschlüssel",
          detail: "Der in der Zeile oder Spalte zu suchende Wert. Zum Beispiel `42`, `\"Katzen\"` oder `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "suchbereich|ergebnismatrix",
          detail: "Eine Möglichkeit, diese Funktion zu verwenden, besteht darin, eine einzelne sortierte Zeile oder Spalte `suchbereich` anzugeben, in der nach `suchkriterium` gesucht wird, zusammen mit einem zweiten Argument `ergebnisbereich`. Die andere Möglichkeit besteht darin, diese beiden Argumente in einem `tabelle_ergebnis_suche` zu kombinieren, wobei die erste Zeile oder Spalte durchsucht wird und ein Wert aus der letzten Zeile oder Spalte des Arrays zurückgegeben wird. Wird `suchkriterium` nicht gefunden, kann eine nicht exakte Übereinstimmung zurückgegeben werden.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ergebnisbereich",
          detail: "Der Bereich, aus dem ein Ergebnis zurückgegeben werden soll. Der zurückgegebene Wert entspricht der Position, an der `suchkriterium` in `suchbereich` gefunden wird. Dieser Bereich darf nur eine einzelne Zeile oder Spalte umfassen und sollte nicht verwendet werden, wenn die Methode `tabelle_ergebnis_suche` verwendet wird.",
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
      d: "Gibt einen Zellbezug als Text zurück.",
      a: "Zellbezug als Text.",
      m: [
        2,
        5
      ],
      p: [
        {
          name: "zeile",
          detail: "Die Zeilennummer des Zellbezugs.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "spalte",
          detail: "Die Spaltennummer (nicht der Name) des Zellbezugs. `A` ist Spaltennummer `1`.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "modus_absolut_relativ",
          detail: "Ein Hinweis darauf, ob der Bezug in Zeile/Spalte absolut ist. `1` bedeutet Zeile und Spalte absolut (z. B. $A$1), `2` bedeutet Zeile absolut und Spalte relativ (z. B. A$1), `3` bedeutet Zeile relativ und Spalte absolut (z. B. $A1) und `4` bedeutet Zeile und Spalte relativ (z. B. A1).",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a1_notation_verwenden",
          detail: "Ein boolescher Wert, der angibt, ob die Notation im Stil `A1` (TRUE) oder im Stil `R1C1` (FALSE) verwendet werden soll.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tabellenblatt",
          detail: "Text, der den Namen des Tabellenblatts angibt, auf das die Adresse verweist.",
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
      d: "Gibt einen durch eine Zeichenfolge angegebenen Zellbezug zurück.",
      a: "Ein durch eine Zeichenfolge angegebener Zellbezug.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "zellbezug_als_zeichenfolge",
          detail: "Ein Zellbezug, geschrieben als Zeichenfolge in Anführungszeichen.",
          example: "\"Sheet2!\"&B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ist_a1_notation",
          detail: "Gibt an, ob der Zellbezug in A1-Notation (TRUE) oder R1C1-Notation (FALSE) vorliegt.",
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
      d: "Gibt die Zeilennummer einer angegebenen Zelle zurück.",
      a: "Zeilennummer einer angegebenen Zelle.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "zellbezug",
          detail: "Die Zelle, deren Zeilennummer zurückgegeben werden soll.",
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
      d: "Gibt die Anzahl der Zeilen in einem angegebenen Array oder Bereich zurück.",
      a: "Anzahl der Zeilen in einem angegebenen Array oder Bereich.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "bereich",
          detail: "Der Bereich, dessen Zeilenanzahl zurückgegeben werden soll.",
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
      d: "Gibt die Spaltennummer einer angegebenen Zelle zurück, wobei `A=1` gilt.",
      a: "Spaltennummer einer angegebenen Zelle.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "zellbezug",
          detail: "Die Zelle, deren Spaltennummer zurückgegeben werden soll. Spalte `A` entspricht `1`.",
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
      d: "Gibt die Anzahl der Spalten in einem angegebenen Array oder Bereich zurück.",
      a: "Anzahl der Spalten in einem angegebenen Array oder Bereich.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "bereich",
          detail: "Der Bereich, dessen Spaltenanzahl zurückgegeben werden soll.",
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
      d: "Gibt einen Bereichsbezug zurück, der um eine angegebene Anzahl von Zeilen und Spalten von einem Ausgangszellbezug verschoben ist.",
      a: "Ein relativ zu einer Zelle verschobener Bereichsbezug.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "zellbezug",
          detail: "Der Ausgangspunkt, von dem aus die Verschiebung von Zeilen und Spalten gezählt wird.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "zeilen_verschieben",
          detail: "Die Anzahl der zu verschiebenden Zeilen.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "spalten_verschieben",
          detail: "Die Anzahl der zu verschiebenden Spalten.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "höhe",
          detail: "Die Höhe des zurückzugebenden Bereichs, beginnend am Verschiebungsziel.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "breite",
          detail: "Die Breite des zurückzugebenden Bereichs, beginnend am Verschiebungsziel.",
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
      d: "Gibt die relative Position eines Elements in einem Bereich zurück, das einem angegebenen Wert entspricht.",
      a: "Position eines Elements in einem Bereich, das einem Wert entspricht.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "suchschlüssel",
          detail: "Der zu suchende Wert. Zum Beispiel `42`, `\"Katzen\"` oder `I24`.",
          example: "\"Sunday\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bereich",
          detail: "Das eindimensionale Array, das durchsucht werden soll.",
          example: "A2:A9",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "suchtyp",
          detail: "Die Suchmethode. `1` (Standard) findet den größten Wert, der kleiner oder gleich `suchkriterium` ist, wenn `bereich` aufsteigend sortiert ist. `0` findet den exakten Wert, wenn `bereich` unsortiert ist. `-1` findet den kleinsten Wert, der größer oder gleich `suchkriterium` ist, wenn `bereich` absteigend sortiert ist.",
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
      d: "Gibt den Inhalt einer durch Zeilen- und Spaltenversatz angegebenen Zelle zurück.",
      a: "Inhalt einer durch Zeilen- und Spaltenversatz angegebenen Zelle.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "bezug",
          detail: "Das Array von Zellen, in das versetzt werden soll.",
          example: "A1:C20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "zeile",
          detail: "Die Anzahl der versetzten Zeilen.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "spalte",
          detail: "Die Anzahl der versetzten Spalten.",
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
      d: "Extrahiert einen aggregierten Wert aus einer Pivot-Tabelle, der den angegebenen Zeilen- und Spaltenüberschriften entspricht.",
      a: "Extrahiert einen aggregierten Wert aus einer Pivot-Tabelle, der den angegebenen Zeilen- und Spaltenüberschriften entspricht.",
      m: [
        2,
        254
      ],
      p: [
        {
          name: "wertname",
          detail: "Der Name des Werts in der Pivot-Tabelle, für den Sie Daten abrufen möchten.",
          example: "\"SUM of number of units\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zelle_pivot_tabelle",
          detail: "Ein beliebiger Bezug auf eine Zelle in der gewünschten Pivot-Tabelle (obere Ecke empfohlen).",
          example: "'Pivot table'!A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "ursprüngliche_spalte",
          detail: "Der Name der Spalte im ursprünglichen Datensatz (nicht in der Pivot-Tabelle).",
          example: "\"division\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        },
        {
          name: "element_pivot_tabelle",
          detail: "Der Name der Zeile oder Spalte, die in der Pivot-Tabelle entsprechend *original_column* angezeigt wird und die Sie abrufen möchten.",
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
      d: "Gibt ein Element aus einer Liste von Auswahlmöglichkeiten basierend auf einem Index zurück.",
      a: "Ein Element aus einer Liste von Auswahlmöglichkeiten basierend auf einem Index.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "index",
          detail: "Welche Auswahl (von bis zu 30 angegebenen) zurückgegeben werden soll.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "auswahl1",
          detail: "Ein möglicher zurückzugebender Wert. Erforderlich. Kann ein Bezug auf eine Zelle oder ein einzelner Wert sein.",
          example: "\"A\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "auswahl2",
          detail: "Weitere Werte, aus denen ausgewählt werden kann.",
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
      d: "Erstellt einen Hyperlink innerhalb einer Zelle.",
      a: "Erstellt einen Hyperlink innerhalb einer Zelle.",
      p: [
        {
          name: "url",
          detail: "Die vollständige URL des Linkziels in Anführungszeichen oder ein Bezug auf eine Zelle mit einer solchen URL.",
          example: "\"http://www.luckysheet.com/\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "linktext",
          detail: "Der Text, der in der Zelle als Link angezeigt werden soll, in Anführungszeichen, oder ein Bezug auf eine Zelle mit einer solchen Beschriftung.",
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
      d: "Wandelt eine angegebene Stunde, Minute und Sekunde in eine Uhrzeit um.",
      a: "Wandelt Stunde/Minute/Sekunde in eine Uhrzeit um.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "stunde",
          detail: "Der Stundenanteil der Uhrzeit.",
          example: "11",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "minute",
          detail: "Der Minutenanteil der Uhrzeit.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sekunde",
          detail: "Der Sekundenanteil der Uhrzeit.",
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
      d: "Gibt den Bruchteil eines 24-Stunden-Tages zurück, den die Uhrzeit darstellt.",
      a: "Wandelt eine Zeichenfolge mit einer Uhrzeit in ihre serielle Zahlendarstellung um.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "uhrzeitzeichenfolge",
          detail: "Die Zeichenfolge, die die Uhrzeitdarstellung enthält.",
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
      d: "Gibt ein Datum am letzten Tag eines Monats zurück, der eine angegebene Anzahl von Monaten vor oder nach einem anderen Datum liegt.",
      a: "Letzter Tag eines Monats vor oder nach einem Datum.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "startdatum",
          detail: "Das Datum, von dem aus das Ergebnis berechnet werden soll.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "anzahl_monate",
          detail: "Die Anzahl der vor (negativ) oder nach (positiv) 'startdatum' zu berücksichtigenden Monate.",
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
      d: "Gibt ein Datum zurück, das eine angegebene Anzahl von Monaten vor oder nach einem anderen Datum liegt.",
      a: "Datum eine Anzahl von Monaten vor/nach einem anderen Datum.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "startdatum",
          detail: "Das Datum, von dem aus das Ergebnis berechnet werden soll.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "anzahl_monate",
          detail: "Die Anzahl der vor (negativ) oder nach (positiv) 'startdatum' zu berechnenden Monate.",
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
      d: "Gibt den Sekundenanteil einer bestimmten Uhrzeit im numerischen Format zurück.",
      a: "Sekundenanteil einer bestimmten Uhrzeit.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "uhrzeit",
          detail: "Die Uhrzeit, aus der der Sekundenanteil berechnet werden soll.",
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
      d: "Gibt den Minutenanteil einer bestimmten Uhrzeit im numerischen Format zurück.",
      a: "Minutenanteil einer bestimmten Uhrzeit.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "uhrzeit",
          detail: "Die Uhrzeit, aus der der Minutenanteil berechnet werden soll.",
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
      d: "Gibt den Stundenanteil einer bestimmten Uhrzeit im numerischen Format zurück.",
      a: "Stundenanteil einer bestimmten Uhrzeit.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "uhrzeit",
          detail: "Die Uhrzeit, aus der der Stundenanteil berechnet werden soll.",
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
      d: "Gibt das aktuelle Datum und die aktuelle Uhrzeit als Datumswert zurück.",
      a: "Aktuelles Datum und aktuelle Uhrzeit als Datumswert.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "NETWORKDAYS",
      t: 6,
      d: "Gibt die Anzahl der Nettoarbeitstage zwischen zwei angegebenen Tagen zurück.",
      a: "Nettoarbeitstage zwischen zwei angegebenen Tagen.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Das Startdatum des Zeitraums, für den die Anzahl der Nettoarbeitstage berechnet werden soll.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "enddatum",
          detail: "Das Enddatum des Zeitraums, für den die Anzahl der Nettoarbeitstage berechnet werden soll.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feiertage",
          detail: "Ein Bereich oder eine Array-Konstante mit den Datumsseriennummern, die als Feiertage betrachtet werden sollen.",
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
      d: "Gibt die Anzahl der Nettoarbeitstage zwischen zwei angegebenen Tagen zurück, ausgenommen die angegebenen Wochenendtage und Feiertage.",
      a: "Nettoarbeitstage zwischen zwei Daten (mit Angabe der Wochenenden).",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "startdatum",
          detail: "Das Startdatum des Zeitraums, für den die Anzahl der Nettoarbeitstage berechnet werden soll.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "enddatum",
          detail: "Das Enddatum des Zeitraums, für den die Anzahl der Nettoarbeitstage berechnet werden soll.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "wochenende",
          detail: "Eine Zahl oder Zeichenfolge, die angibt, welche Wochentage als Wochenende gelten.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feiertage",
          detail: "Ein Bereich oder eine Array-Konstante mit den als Feiertage zu betrachtenden Daten.",
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
      d: "Gibt eine Zahl zurück, die die ISO-Woche des Jahres darstellt, in die das angegebene Datum fällt.",
      a: "ISO-Wochennummer des Jahres.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "Das Datum, für das die ISO-Wochennummer bestimmt werden soll. Muss ein Bezug auf eine Zelle mit einem Datum, eine Funktion, die einen Datumstyp zurückgibt, oder eine Zahl sein.",
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
      d: "Gibt eine Zahl zurück, die die Woche des Jahres darstellt, in die das angegebene Datum fällt.",
      a: "Wochennummer des Jahres.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "datum",
          detail: "Das Datum, für das die Wochennummer bestimmt werden soll. Muss ein Bezug auf eine Zelle mit einem Datum, eine Funktion, die einen Datumstyp zurückgibt, oder eine Zahl sein.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "typ",
          detail: "Eine Zahl, die den Tag darstellt, mit dem die Woche beginnt. Sonntag = 1.",
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
      d: "Gibt eine Zahl zurück, die den Wochentag des angegebenen Datums darstellt.",
      a: "Wochentag des angegebenen Datums (als Zahl).",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "datum",
          detail: "Das Datum, für das der Wochentag bestimmt werden soll. Muss ein Bezug auf eine Zelle mit einem Datum, eine Funktion, die einen Datumstyp zurückgibt, oder eine Zahl sein.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "typ",
          detail: "Eine Zahl, die angibt, welches Zählsystem zur Darstellung der Wochentage verwendet werden soll. Standardmäßig beginnt die Zählung mit Sonntag = 1.",
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
      d: "Gibt den Tag des Monats, auf den ein bestimmtes Datum fällt, im numerischen Format zurück.",
      a: "Tag des Monats, auf den ein bestimmtes Datum fällt.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "Das Datum, aus dem der Tag extrahiert werden soll.",
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
      d: "Gibt die Anzahl der Tage zwischen zwei Daten zurück.",
      a: "Anzahl der Tage zwischen zwei Daten.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "enddatum",
          detail: "Das Ende des Datumsbereichs.",
          example: "2011-3-15",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "startdatum",
          detail: "Der Beginn des Datumsbereichs.",
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
      d: "Gibt die Differenz zwischen zwei Tagen zurück, basierend auf dem in einigen finanzmathematischen Zinsberechnungen verwendeten 360-Tage-Jahr.",
      a: "Tage zwischen zwei Daten bei einem 360-Tage-Jahr.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Das bei der Berechnung zu berücksichtigende Startdatum. Muss ein Bezug auf eine Zelle mit einem Datum, eine Funktion, die einen Datumstyp zurückgibt, oder eine Zahl sein.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "enddatum",
          detail: "Das bei der Berechnung zu berücksichtigende Enddatum. Muss ein Bezug auf eine Zelle mit einem Datum, eine Funktion, die einen Datumstyp zurückgibt, oder eine Zahl sein.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "methode",
          detail: "Ein Hinweis auf die zu verwendende Tageszählmethode.",
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
      d: "Wandelt ein angegebenes Jahr, einen Monat und einen Tag in ein Datum um.",
      a: "Wandelt Jahr/Monat/Tag in ein Datum um.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "jahr",
          detail: "Der Jahresanteil des Datums.",
          example: "1969",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "monat",
          detail: "Der Monatsanteil des Datums.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tag",
          detail: "Der Tagesanteil des Datums.",
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
      d: "Wandelt eine angegebene Datumszeichenfolge in einem bekannten Format in einen Datumswert um.",
      a: "Wandelt eine Datumszeichenfolge in einen Datumswert um.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datumszeichenfolge",
          detail: "Die Zeichenfolge, die das Datum darstellt.",
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
      d: "Berechnet die Anzahl der Tage, Monate oder Jahre zwischen zwei Daten.",
      a: "Datumsdifferenz.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Das bei der Berechnung zu berücksichtigende Startdatum. Muss ein Bezug auf eine Zelle mit einem Datum, eine Funktion, die einen Datumstyp zurückgibt, oder eine Zahl sein.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "enddatum",
          detail: "Das bei der Berechnung zu berücksichtigende Enddatum. Muss ein Bezug auf eine Zelle mit einem Datum, eine Funktion, die einen Datumstyp zurückgibt, oder eine Zahl sein.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "einheit",
          detail: "Eine Zeichenfolgenabkürzung für die Zeiteinheit. Zum Beispiel \"M\" für Monat. Zulässige Werte sind \"Y\", \"M\", \"D\", \"MD\", \"YM\", \"YD\".",
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
      d: "Berechnet das Datum nach einer Anzahl von Arbeitstagen ab einem angegebenen Startdatum.",
      a: "Anzahl der Arbeitstage ab Startdatum.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Das Datum, ab dem gezählt werden soll.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "anzahl_tage",
          detail: "Die Anzahl der Arbeitstage, um die ab `startdatum` vorgerückt werden soll. Bei einem negativen Wert wird rückwärts gezählt.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "feiertage",
          detail: "Ein Bereich oder eine Array-Konstante mit den als Feiertage zu betrachtenden Daten.",
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
      d: "Berechnet das Datum nach einer angegebenen Anzahl von Arbeitstagen, ausgenommen die angegebenen Wochenendtage und Feiertage.",
      a: "Datum nach einer Anzahl von Arbeitstagen (mit Angabe der Wochenenden).",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "startdatum",
          detail: "Das Datum, ab dem gezählt werden soll.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "anzahl_tage",
          detail: "Die Anzahl der Arbeitstage, um die ab `startdatum` vorgerückt werden soll. Bei einem negativen Wert wird rückwärts gezählt.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "wochenende",
          detail: "Eine Zahl oder Zeichenfolge, die angibt, welche Wochentage als Wochenende gelten.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feiertage",
          detail: "Ein Bereich oder eine Array-Konstante mit den als Feiertage zu betrachtenden Daten.",
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
      d: "Gibt das durch ein angegebenes Datum bestimmte Jahr zurück.",
      a: "Durch ein angegebenes Datum bestimmtes Jahr.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "Das Datum, aus dem das Jahr extrahiert werden soll.",
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
      d: "Gibt die Anzahl der Jahre, einschließlich Bruchteilen von Jahren, zwischen zwei Daten unter Verwendung einer angegebenen Tageszählkonvention zurück.",
      a: "Exakte Anzahl der Jahre zwischen zwei Daten.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "startdatum",
          detail: "Das bei der Berechnung zu berücksichtigende Startdatum. Muss ein Bezug auf eine Zelle mit einem Datum, eine Funktion, die einen Datumstyp zurückgibt, oder eine Zahl sein.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "enddatum",
          detail: "Das bei der Berechnung zu berücksichtigende Enddatum. Muss ein Bezug auf eine Zelle mit einem Datum, eine Funktion, die einen Datumstyp zurückgibt, oder eine Zahl sein.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tageszählmethode",
          detail: "Ein Hinweis auf die zu verwendende Tageszählmethode.",
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
      d: "Gibt das aktuelle Datum als Datumswert zurück.",
      a: "Aktuelles Datum als Datumswert.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "MONTH",
      t: 6,
      d: "Gibt den Monat des Jahres, in den ein bestimmtes Datum fällt, im numerischen Format zurück.",
      a: "Monat des Jahres, in den ein bestimmtes Datum fällt.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "datum",
          detail: "Das Datum, aus dem der Monat extrahiert werden soll.",
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
      d: "Berechnet den effektiven Jahreszinssatz bei gegebenem Nominalzinssatz und gegebener Anzahl von Zinsperioden pro Jahr.",
      a: "Effektiver Jahreszinssatz.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "nominalzins",
          detail: "Der jährliche Nominalzinssatz.",
          example: "0.99",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "perioden_pro_jahr",
          detail: "Die Anzahl der Zinsperioden pro Jahr.",
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
      d: "Formatiert eine Zahl in die für die Gebietsschema-Einstellung Ihrer Tabelle spezifische Währung.",
      a: "Formatiert eine Zahl als Währung entsprechend Ihrer Gebietsschema-Einstellung.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "zahl",
          detail: "Der zu formatierende Wert.",
          example: "1.2351",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_dezimalstellen",
          detail: "Die Anzahl der anzuzeigenden Dezimalstellen.",
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
      d: "Wandelt eine als Dezimalbruch angegebene Preisnotierung in einen Dezimalwert um.",
      a: "Wandelt einen Dezimalbruch in einen Dezimalwert um.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "bruchpreis",
          detail: "Die unter Verwendung von Bruchdezimal-Konventionen angegebene Preisnotierung.",
          example: "100.10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einheit",
          detail: "Die Einheiten des Bruchs, z. B. `8` für Achtel oder `32` für Zweiunddreißigstel.",
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
      d: "Wandelt eine als Dezimalwert angegebene Preisnotierung in einen Dezimalbruch um.",
      a: "Wandelt einen Dezimalwert in einen Dezimalbruch um.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dezimalpreis",
          detail: "Die als Dezimalwert angegebene Preisnotierung.",
          example: "100.125",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "einheit",
          detail: "Die Einheiten des gewünschten Bruchs, z. B. `8` für Achtel oder `32` für Zweiunddreißigstel.",
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
      d: "Berechnet die Abschreibung eines Vermögenswerts für eine angegebene Periode nach der geometrisch-degressiven Methode.",
      a: "Abschreibung nach der geometrisch-degressiven Methode.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "anschaffungskosten",
          detail: "Die Anschaffungskosten des Vermögenswerts.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwert",
          detail: "Der Restwert des Vermögenswerts am Ende der Abschreibung.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nutzungsdauer",
          detail: "Die Anzahl der Perioden, über die der Vermögenswert abgeschrieben wird.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "Die einzelne Periode innerhalb von `nutzungsdauer`, für die die Abschreibung berechnet werden soll.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "monat",
          detail: "Die Anzahl der Monate im ersten Abschreibungsjahr.",
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
      d: "Berechnet die Abschreibung eines Vermögenswerts für eine angegebene Periode nach der doppelt-degressiven Methode.",
      a: "Abschreibung nach der doppelt-degressiven Methode.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "anschaffungskosten",
          detail: "Die Anschaffungskosten des Vermögenswerts.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwert",
          detail: "Der Restwert des Vermögenswerts am Ende der Abschreibung.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nutzungsdauer",
          detail: "Die Anzahl der Perioden, über die der Vermögenswert abgeschrieben wird.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "Die einzelne Periode innerhalb von `nutzungsdauer`, für die die Abschreibung berechnet werden soll.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "faktor",
          detail: "Der Faktor, um den die Abschreibung abnimmt.",
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
      d: "Berechnet den Zinssatz einer Rentenanlage auf Basis konstanter periodischer Zahlungen und der Annahme eines konstanten Zinssatzes.",
      a: "Zinssatz einer Rentenanlage.",
      m: [
        3,
        6
      ],
      p: [
        {
          name: "anzahl_perioden",
          detail: "Die Anzahl der zu leistenden Zahlungen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zahlung_pro_periode",
          detail: "Der pro Periode zu zahlende Betrag.",
          example: "-100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "barwert",
          detail: "Der aktuelle Wert der Rente.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zukunftswert",
          detail: "Der nach der letzten Zahlung verbleibende zukünftige Wert.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ende_oder_anfang",
          detail: "Ob Zahlungen am Ende (`0`) oder am Anfang (`1`) jeder Periode fällig sind.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zinsschätzung",
          detail: "Eine Schätzung, wie hoch der Zinssatz sein wird.",
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
      d: "Berechnet die kumulierte Tilgung über einen Bereich von Zahlungsperioden für eine Anlage auf Basis konstanter periodischer Zahlungen und eines konstanten Zinssatzes.",
      a: "Kumulierte Tilgung über einen Satz von Perioden.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "zinssatz",
          detail: "Der Zinssatz.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_perioden",
          detail: "Die Anzahl der zu leistenden Zahlungen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "barwert",
          detail: "Der aktuelle Wert der Rente.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "erste_periode",
          detail: "Die Nummer der Zahlungsperiode, mit der die kumulierte Berechnung beginnen soll.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "letzte_periode",
          detail: "Die Nummer der Zahlungsperiode, mit der die kumulierte Berechnung enden soll.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ende_oder_anfang",
          detail: "Ob Zahlungen am Ende (`0`) oder am Anfang (`1`) jeder Periode fällig sind.",
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
      d: "Berechnet die Anzahl der Kupons bzw. Zinszahlungen zwischen dem Abrechnungsdatum und dem Fälligkeitsdatum der Anlage.",
      a: "Anzahl der Kupons zwischen Abrechnung und Fälligkeit.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Das Abrechnungsdatum des Wertpapiers, das Datum nach der Emission, an dem das Wertpapier an den Käufer geliefert wird.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Das Fälligkeitsdatum des Wertpapiers, an dem es zum Nennwert eingelöst werden kann.",
          example: "02",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "häufigkeit",
          detail: "Die Anzahl der Zins- oder Kuponzahlungen pro Jahr (1, 2 oder 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Ein Hinweis auf die zu verwendende Tageszählmethode.",
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
      d: "Berechnet die Abschreibung eines Vermögenswerts für eine angegebene Periode nach der digitalen Abschreibungsmethode (Jahressummenmethode).",
      a: "Abschreibung nach der digitalen Abschreibungsmethode.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "anschaffungskosten",
          detail: "Die Anschaffungskosten des Vermögenswerts.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "restwert",
          detail: "Der Restwert des Vermögenswerts am Ende der Abschreibung.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nutzungsdauer",
          detail: "Die Anzahl der Perioden, über die der Vermögenswert abgeschrieben wird.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periode",
          detail: "Die einzelne Periode innerhalb von `nutzungsdauer`, für die die Abschreibung berechnet werden soll.",
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
      d: "Berechnet die äquivalente annualisierte Rendite eines US-Schatzwechsels basierend auf dem Diskontsatz.",
      a: "Äquivalente Rendite eines Schatzwechsels.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Das Abrechnungsdatum des Wertpapiers, das Datum nach der Emission, an dem das Wertpapier an den Käufer geliefert wird.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Das Fälligkeitsdatum des Wertpapiers, an dem es zum Nennwert eingelöst werden kann.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "diskontsatz",
          detail: "Der Diskontsatz des Wechsels zum Zeitpunkt des Kaufs.",
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
      d: "Berechnet die Rendite eines US-Schatzwechsels basierend auf dem Kurs.",
      a: "Rendite eines US-Schatzwechsels basierend auf dem Kurs.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Das Abrechnungsdatum des Wertpapiers, das Datum nach der Emission, an dem das Wertpapier an den Käufer geliefert wird.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Das Fälligkeitsdatum des Wertpapiers, an dem es zum Nennwert eingelöst werden kann.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "preis",
          detail: "Der Kurs, zu dem das Wertpapier je 100 Nennwert gekauft wird.",
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
      d: "Berechnet den Kurs eines US-Schatzwechsels basierend auf dem Diskontsatz.",
      a: "Kurs eines US-Schatzwechsels.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Das Abrechnungsdatum des Wertpapiers, das Datum nach der Emission, an dem das Wertpapier an den Käufer geliefert wird.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Das Fälligkeitsdatum des Wertpapiers, an dem es zum Nennwert eingelöst werden kann.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "diskontsatz",
          detail: "Der Diskontsatz des Wechsels zum Zeitpunkt des Kaufs.",
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
      d: "Berechnet den Barwert einer Rentenanlage auf Basis konstanter periodischer Zahlungen und eines konstanten Zinssatzes.",
      a: "Barwert einer Rentenanlage.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "zinssatz",
          detail: "Der Zinssatz.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_perioden",
          detail: "Die Anzahl der zu leistenden Zahlungen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zahlungsbetrag",
          detail: "Der pro Periode zu zahlende Betrag.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zukunftswert",
          detail: "Der nach der letzten Zahlung verbleibende zukünftige Wert.",
          example: "D2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ende_oder_anfang",
          detail: "Ob Zahlungen am Ende (`0`) oder am Anfang (`1`) jeder Periode fällig sind.",
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
      d: "Berechnet die aufgelaufenen Zinsen eines Wertpapiers mit periodischen Zahlungen.",
      a: "Aufgelaufene Zinsen eines Wertpapiers mit periodischen Zahlungen.",
      m: [
        6,
        8
      ],
      p: [
        {
          name: "ausgabedatum",
          detail: "Das Datum, an dem das Wertpapier ursprünglich ausgegeben wurde.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "erste_zahlung",
          detail: "Das erste Datum, an dem Zinsen gezahlt werden.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "abrechnungstermin",
          detail: "Das Abrechnungsdatum des Wertpapiers, das Datum nach der Emission, an dem das Wertpapier an den Käufer geliefert wird.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zinssatz",
          detail: "Der annualisierte Zinssatz.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rückzahlungswert",
          detail: "Der Rückzahlungsbetrag je 100 Nennwert.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "häufigkeit",
          detail: "Die Anzahl der Zins- oder Kuponzahlungen pro Jahr (1, 2 oder 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Ein Hinweis auf die zu verwendende Tageszählmethode.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "berechnungsmethode",
          detail: "[Optional, Standard TRUE()] - Ein logischer Wert, der die Methode angibt, die zur Berechnung der gesamten aufgelaufenen Zinsen verwendet wird, wenn das Abrechnungsdatum nach dem ersten Zinsauflaufdatum liegt. \n\nWenn der Wert TRUE ist, werden die gesamten aufgelaufenen Zinsen vom Emissionsdatum bis zum Abrechnungsdatum zurückgegeben. \n\nWenn der Wert FALSE ist, werden die aufgelaufenen Zinsen vom ersten Zinsauflaufdatum bis zum Abrechnungsdatum zurückgegeben.",
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
      d: "Berechnet die aufgelaufenen Zinsen eines Wertpapiers, das Zinsen bei Fälligkeit zahlt.",
      a: "Aufgelaufene Zinsen eines bei Fälligkeit zahlenden Wertpapiers.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "ausgabedatum",
          detail: "Das Datum, an dem das Wertpapier ursprünglich ausgegeben wurde.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Das Fälligkeitsdatum des Wertpapiers.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zinssatz",
          detail: "Der annualisierte Zinssatz.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rückzahlungswert",
          detail: "Der Rückzahlungsbetrag je 100 Nennwert.",
          example: "1000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Ein Hinweis auf die zu verwendende Tageszählmethode.",
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
      d: "Berechnet die Anzahl der Tage vom ersten Kupon bzw. der ersten Zinszahlung bis zur Abrechnung.",
      a: "Anzahl der Tage vom ersten Kupon bis zur Abrechnung.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Das Abrechnungsdatum des Wertpapiers, das Datum nach der Emission, an dem das Wertpapier an den Käufer geliefert wird.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Das Fälligkeitsdatum des Wertpapiers, an dem es zum Nennwert eingelöst werden kann.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "häufigkeit",
          detail: "Die Anzahl der Zins- oder Kuponzahlungen pro Jahr (1, 2 oder 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Ein Hinweis auf die zu verwendende Tageszählmethode.",
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
      d: "Berechnet die Anzahl der Tage in der Kupon- bzw. Zinsperiode, die das angegebene Abrechnungsdatum enthält.",
      a: "Tage in der Kuponperiode, die das Abrechnungsdatum enthält.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Das Abrechnungsdatum des Wertpapiers, das Datum nach der Emission, an dem das Wertpapier an den Käufer geliefert wird.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Das Fälligkeitsdatum des Wertpapiers, an dem es zum Nennwert eingelöst werden kann.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "häufigkeit",
          detail: "Die Anzahl der Zins- oder Kuponzahlungen pro Jahr (1, 2 oder 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Ein Hinweis auf die zu verwendende Tageszählmethode.",
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
      d: "Berechnet die Anzahl der Tage vom Abrechnungsdatum bis zum nächsten Kupon bzw. zur nächsten Zinszahlung.",
      a: "Tage von der Abrechnung bis zum nächsten Kupon.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Das Abrechnungsdatum des Wertpapiers, das Datum nach der Emission, an dem das Wertpapier an den Käufer geliefert wird.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Das Fälligkeitsdatum des Wertpapiers, an dem es zum Nennwert eingelöst werden kann.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "häufigkeit",
          detail: "Die Anzahl der Zins- oder Kuponzahlungen pro Jahr (1, 2 oder 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Ein Hinweis auf die zu verwendende Tageszählmethode.",
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
      d: "Berechnet das nächste Kupon- bzw. Zinszahlungsdatum nach dem Abrechnungsdatum.",
      a: "Nächstes Kupondatum nach dem Abrechnungsdatum.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Das Abrechnungsdatum des Wertpapiers, das Datum nach der Emission, an dem das Wertpapier an den Käufer geliefert wird.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Das Fälligkeitsdatum des Wertpapiers, an dem es zum Nennwert eingelöst werden kann.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "häufigkeit",
          detail: "Die Anzahl der Zins- oder Kuponzahlungen pro Jahr (1, 2 oder 4).",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Ein Hinweis auf die zu verwendende Tageszählmethode.",
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
      d: "Berechnet das letzte Kupon- bzw. Zinszahlungsdatum vor dem Abrechnungsdatum.",
      a: "Letztes Kupondatum vor dem Abrechnungsdatum.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Das Abrechnungsdatum des Wertpapiers, das Datum nach der Emission, an dem das Wertpapier an den Käufer geliefert wird.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Das Fälligkeitsdatum des Wertpapiers, an dem es zum Nennwert eingelöst werden kann.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "häufigkeit",
          detail: "Die Anzahl der Zins- oder Kuponzahlungen pro Jahr (1, 2 oder 4).",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Ein Hinweis auf die zu verwendende Tageszählmethode.",
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
      d: "Berechnet den zukünftigen Wert einer Rentenanlage auf Basis konstanter periodischer Zahlungen und eines konstanten Zinssatzes.",
      a: "Zukünftiger Wert einer Rentenanlage.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "zinssatz",
          detail: "Der Zinssatz.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "anzahl_perioden",
          detail: "Die Anzahl der zu leistenden Zahlungen.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zahlungsbetrag",
          detail: "Der pro Periode zu zahlende Betrag.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "barwert",
          detail: "Der aktuelle Wert der Rente.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ende_oder_anfang",
          detail: "Ob Zahlungen am Ende (`0`) oder am Anfang (`1`) jeder Periode fällig sind.",
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
      d: "Berechnet den zukünftigen Wert eines Kapitals auf Basis einer angegebenen Reihe potenziell variierender Zinssätze.",
      a: "Zukünftiger Wert eines Kapitals aus einer Reihe von Zinssätzen.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "kapital",
          detail: "Der Betrag des Anfangskapitals oder des Werts, auf den aufgezinst werden soll.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "zinsplan",
          detail: "Eine Reihe von Zinssätzen, die auf das `kapital` aufgezinst werden sollen.",
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
      d: "Berechnet die jährliche Rendite eines Wertpapiers mit periodischer Zinszahlung, wie z. B. einer US-Staatsanleihe, basierend auf dem Kurs.",
      a: "Jährliche Rendite eines Wertpapiers mit periodischer Zinszahlung.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Das Abrechnungsdatum des Wertpapiers, das Datum nach der Emission, an dem das Wertpapier an den Käufer geliefert wird.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Das Fälligkeitsdatum des Wertpapiers, an dem es zum Nennwert eingelöst werden kann.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "zinssatz",
          detail: "Der annualisierte Zinssatz.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "preis",
          detail: "Der Kurs, zu dem das Wertpapier je 100 Nennwert gekauft wird.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rückzahlungswert",
          detail: "Der Rückzahlungsbetrag je 100 Nennwert.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "häufigkeit",
          detail: "Die Anzahl der Zins- oder Kuponzahlungen pro Jahr (1, 2 oder 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Ein Hinweis auf die zu verwendende Tageszählmethode.",
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
      d: "Berechnet die jährliche Rendite eines Diskontpapiers (ohne Zinszahlung) basierend auf dem Kurs.",
      a: "Jährliche Rendite eines Diskontpapiers.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "abrechnungstermin",
          detail: "Das Abrechnungsdatum des Wertpapiers, das Datum nach der Emission, an dem das Wertpapier an den Käufer geliefert wird.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fälligkeit",
          detail: "Das Fälligkeitsdatum des Wertpapiers, an dem es zum Nennwert eingelöst werden kann.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "preis",
          detail: "Der Kurs, zu dem das Wertpapier je 100 Nennwert gekauft wird.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rückzahlungswert",
          detail: "Der Rückzahlungsbetrag je 100 Nennwert.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tageszählmethode",
          detail: "Ein Hinweis auf die zu verwendende Tageszählmethode.",
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
      d: "Berechnet den nominalen Jahreszinssatz bei gegebenem effektiven Zinssatz und gegebener Anzahl von Zinsperioden pro Jahr.",
      a: "Nominaler Jahreszinssatz.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "effektiver_zinssatz",
          detail: "Der jährliche effektive Zinssatz.",
          example: "0.85",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "perioden_pro_jahr",
          detail: "Die Anzahl der Zinsperioden pro Jahr.",
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
      d: "Berechnet den internen Zinsfuß einer Anlage auf Basis einer angegebenen Reihe potenziell unregelmäßig verteilter Zahlungsströme.",
      a: "Interner Zinsfuß bei unregelmäßigen Zahlungsströmen.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "zahlungsstrombeträge",
          detail: "Ein Array oder Bereich mit den Einnahmen oder Zahlungen, die der Anlage zugeordnet sind.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "zahlungsstromdaten",
          detail: "Ein Array oder Bereich mit Daten, die den Zahlungsströmen in `zahlungsstrombeträge` entsprechen.",
          example: "C2:C25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "zinsschätzung",
          detail: "Eine Schätzung, wie hoch der interne Zinsfuß sein wird.",
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
