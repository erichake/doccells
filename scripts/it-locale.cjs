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
      d: "Restituisce una somma condizionale su un intervallo.",
      a: "Somma condizionale su un intervallo.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "intervallo",
          detail: "L'intervallo da confrontare con `criterio`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterio",
          detail: "Il modello o il test da applicare a `intervallo`.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo_somma",
          detail: "L'intervallo da sommare, se diverso da `intervallo`.",
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
      d: "Restituisce la tangente di un angolo espresso in radianti.",
      a: "Tangente di un angolo espresso in radianti.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angolo",
          detail: "L'angolo di cui trovare la tangente, in radianti.",
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
      d: "Restituisce la tangente iperbolica di un numero reale qualsiasi.",
      a: "Tangente iperbolica di un numero reale qualsiasi.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Qualsiasi valore reale di cui calcolare la tangente iperbolica.",
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
      d: "Arrotonda un numero per eccesso al multiplo intero più vicino del `fattore` di significatività specificato.",
      a: "Arrotonda un numero per eccesso al multiplo più vicino di un fattore.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da arrotondare per eccesso al multiplo intero più vicino di `fattore`.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fattore",
          detail: "Il numero ai cui multipli verrà arrotondato `valore`.",
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
      d: "Restituisce l'arcotangente di un valore, in radianti.",
      a: "Arcotangente di un valore, in radianti.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore per cui calcolare l'arcotangente.",
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
      d: "Restituisce il seno iperbolico inverso di un numero.",
      a: "Seno iperbolico inverso di un numero.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore per cui calcolare il seno iperbolico inverso.",
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
      d: "Restituisce il valore assoluto di un numero.",
      a: "Valore assoluto di un numero.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il numero di cui restituire il valore assoluto.",
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
      d: "Restituisce l'arcocoseno di un valore, in radianti.",
      a: "Arcocoseno di un valore, in radianti.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore per cui calcolare l'arcocoseno. Deve essere compreso tra `-1` e `1`, inclusi.",
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
      d: "Restituisce il coseno iperbolico inverso di un numero.",
      a: "Coseno iperbolico inverso di un numero.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore per cui calcolare il coseno iperbolico inverso. Deve essere maggiore o uguale a `1`.",
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
      d: "Restituisce il fattoriale della somma dei valori diviso per il prodotto dei fattoriali dei valori.",
      a: "Funzione di distribuzione multinomiale.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo da considerare.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da considerare.",
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
      d: "Restituisce la tangente iperbolica inversa di un numero.",
      a: "Tangente iperbolica inversa di un numero.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore per cui calcolare la tangente iperbolica inversa. Deve essere compreso tra -1 e 1, esclusi.",
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
      d: "Restituisce l'angolo tra l'asse x e un segmento di retta dall'origine (0,0) alla coppia di coordinate specificata (`x`,`y`), in radianti.",
      a: "Arcotangente di un valore.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "La coordinata x del punto finale del segmento di retta per cui calcolare l'angolo rispetto all'asse x.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "y",
          detail: "La coordinata y del punto finale del segmento di retta per cui calcolare l'angolo rispetto all'asse x.",
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
      d: "Restituisce il numero di valori vuoti in un elenco di valori e intervalli.",
      a: "Numero di valori vuoti.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo in cui contare il numero di celle vuote.",
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
      d: "Restituisce il coseno iperbolico di un numero reale qualsiasi.",
      a: "Coseno iperbolico di un numero reale qualsiasi.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Qualsiasi valore reale di cui calcolare il coseno iperbolico.",
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
      d: "Arrotonda un numero per difetto al numero intero più vicino minore o uguale ad esso.",
      a: "Arrotonda un numero per difetto al numero intero più vicino.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da arrotondare per difetto al numero intero più vicino.",
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
      d: "Verifica se il valore fornito è pari.",
      a: "Verifica se il valore fornito è pari.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da verificare come pari.",
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
      d: "Verifica se il valore fornito è dispari.",
      a: "Verifica se il valore fornito è dispari.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da verificare come dispari.",
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
      d: "Restituisce il minimo comune multiplo di uno o più numeri interi.",
      a: "Minimo comune multiplo di uno o più numeri interi.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo i cui fattori considerare nel calcolo del minimo comune multiplo.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi i cui fattori considerare per trovare il minimo comune multiplo.",
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
      d: "Restituisce il logaritmo di un numero in base e (il numero di Eulero).",
      a: "Il logaritmo di un numero in base e (il numero di Eulero).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore per cui calcolare il logaritmo in base e.",
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
      d: "Restituisce il logaritmo di un numero rispetto a una base.",
      a: "Il logaritmo di un numero rispetto a una base.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore per cui calcolare il logaritmo.",
          example: "128",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "base",
          detail: "La base da usare per il calcolo del logaritmo.",
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
      d: "Restituisce il logaritmo di un numero in base 10.",
      a: "Il logaritmo di un numero in base 10.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore per cui calcolare il logaritmo in base 10.",
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
      d: "Restituisce il risultato dell'operatore modulo, ovvero il resto di un'operazione di divisione.",
      a: "Operatore modulo (resto).",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividendo",
          detail: "Il numero da dividere per trovare il resto.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisore",
          detail: "Il numero per cui dividere.",
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
      d: "Arrotonda un numero al multiplo intero più vicino di un altro.",
      a: "Arrotonda un numero al multiplo intero più vicino.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore",
          detail: "Il numero da arrotondare al multiplo intero più vicino di un altro.",
          example: "21",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fattore",
          detail: "Il numero ai cui multipli verrà arrotondato `valore`.",
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
      d: "Arrotonda un numero per eccesso al numero dispari più vicino.",
      a: "Arrotonda un numero per eccesso al numero dispari più vicino.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da arrotondare al successivo numero dispari maggiore.",
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
      d: "Restituisce la somma dei quadrati di una serie di numeri e/o celle.",
      a: "Somma dei quadrati.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo numero o intervallo i cui quadrati sommare insieme.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Numeri o intervalli aggiuntivi i cui quadrati sommare al quadrato di `valore1`.",
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
      d: "Restituisce il numero di modi per scegliere un certo numero di oggetti da un insieme di dimensioni date.",
      a: "Numero di combinazioni da un insieme di oggetti.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "La dimensione dell'insieme di oggetti da cui scegliere.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Il numero di oggetti da scegliere.",
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
      d: "Restituisce la somma di una serie di numeri e/o celle.",
      a: "Somma di una serie di numeri e/o celle.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo numero o intervallo da sommare.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Numeri o intervalli aggiuntivi da sommare a `valore1`.",
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
      d: "Restituisce un subtotale per un intervallo verticale di celle utilizzando una funzione di aggregazione specificata.",
      a: "Subtotale per un intervallo usando una funzione specifica.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "codice_funzione",
          detail: "La funzione da usare nell'aggregazione del subtotale.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "intervallo1",
          detail: "Il primo intervallo su cui calcolare un subtotale.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "intervallo2",
          detail: "Intervalli aggiuntivi su cui calcolare i subtotali.",
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
      d: "Restituisce l'arcoseno di un valore, in radianti.",
      a: "Arcoseno di un valore, in radianti.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore per cui calcolare l'arcoseno. Deve essere compreso tra `-1` e `1`, inclusi.",
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
      d: "Restituisce un conteggio condizionale su un intervallo.",
      a: "Conteggio condizionale su un intervallo.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "intervallo",
          detail: "L'intervallo da confrontare con `criterio`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterio",
          detail: "Il modello o il test da applicare a `intervallo`.",
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
      d: "Converte un valore di angolo in gradi in radianti.",
      a: "Converte un valore di angolo in gradi in radianti.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angolo",
          detail: "L'angolo da convertire da gradi a radianti.",
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
      d: "Restituisce un numero casuale compreso tra 0 incluso e 1 escluso.",
      a: "Un numero casuale compreso tra 0 incluso e 1 escluso.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "COUNTUNIQUE",
      t: 0,
      d: "Conta il numero di valori univoci in un elenco di valori e intervalli specificati.",
      a: "Conta il numero di valori univoci in un intervallo.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo da considerare per l'univocità.",
          example: "A1:C100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da considerare per l'univocità.",
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
      d: "Converte un valore di angolo in radianti in gradi.",
      a: "Converte un valore di angolo in radianti in gradi.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angolo",
          detail: "L'angolo da convertire da radianti a gradi.",
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
      d: "Restituisce la funzione degli errori complementare di Gauss di un valore.",
      a: "Funzione degli errori complementare di Gauss di un valore.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "z",
          detail: "Il numero per cui calcolare la funzione degli errori complementare di Gauss.",
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
      d: "Arrotonda un numero per eccesso al numero pari più vicino.",
      a: "Arrotonda un numero per eccesso al numero pari più vicino.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da arrotondare al successivo numero pari maggiore.",
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
      d: "Restituisce il numero di Eulero, e (~2,718), elevato a una potenza.",
      a: "Il numero di Eulero, e (~2,718), elevato a una potenza.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "esponente",
          detail: "L'esponente a cui elevare e.",
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
      d: "Restituisce il fattoriale di un numero.",
      a: "Fattoriale di un numero.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il numero o il riferimento a un numero di cui verrà calcolato e restituito il fattoriale.",
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
      d: "Restituisce il \"doppio fattoriale\" di un numero.",
      a: "\"Doppio fattoriale\" di un numero.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il numero o il riferimento a un numero di cui verrà calcolato e restituito il doppio fattoriale.",
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
      d: "Restituisce il valore di Pi Greco con 14 cifre decimali.",
      a: "Il numero Pi Greco.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FLOOR",
      t: 0,
      d: "Arrotonda un numero per difetto al multiplo intero più vicino del `fattore` di significatività specificato.",
      a: "Arrotonda un numero per difetto al multiplo più vicino di un fattore.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da arrotondare per difetto al multiplo intero più vicino di `fattore`.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fattore",
          detail: "Il numero ai cui multipli verrà arrotondato `valore`.",
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
      d: "Restituisce il massimo comune divisore di uno o più numeri interi.",
      a: "Massimo comune divisore di uno o più numeri interi.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo i cui fattori considerare nel calcolo del massimo comune divisore.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi i cui fattori considerare per trovare il massimo comune divisore.",
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
      d: "Restituisce un numero intero casuale uniforme compreso tra due valori, inclusi.",
      a: "Numero intero casuale compreso tra due valori, inclusi.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "limite_inferiore",
          detail: "L'estremo inferiore dell'intervallo casuale.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "limite_superiore",
          detail: "L'estremo superiore dell'intervallo casuale.",
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
      d: "Arrotonda un numero a un certo numero di cifre decimali secondo le regole standard.",
      a: "Arrotonda un numero secondo le regole standard.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da arrotondare al numero di `posizioni` specificato.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimali",
          detail: "Il numero di posizioni decimali a cui arrotondare.",
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
      d: "Arrotonda un numero a un certo numero di cifre decimali, arrotondando sempre per difetto al successivo incremento valido.",
      a: "Arrotonda per difetto un numero.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da arrotondare al numero di `posizioni` specificato, sempre per difetto.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimali",
          detail: "Il numero di posizioni decimali a cui arrotondare.",
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
      d: "Arrotonda un numero a un certo numero di cifre decimali, arrotondando sempre per eccesso al successivo incremento valido.",
      a: "Arrotonda per eccesso un numero.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da arrotondare al numero di `posizioni` specificato, sempre per eccesso.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimali",
          detail: "Il numero di posizioni decimali a cui arrotondare.",
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
      d: "Dati i parametri `x`, `n`, `m` e `a`, restituisce la somma della serie di potenze a1*x^n + a2*x^(n+m) + ... + ai*x^(n+(i-1)*m).",
      a: "Somma di una serie di potenze.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "L'input della serie di potenze. Varia in base al tipo di approssimazione: può essere un angolo, un esponente o un altro valore.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "La potenza iniziale a cui elevare `x` nella serie di potenze.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "m",
          detail: "L'incremento additivo con cui aumentare `x`.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a",
          detail: "L'array o l'intervallo contenente i coefficienti della serie di potenze.",
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
      d: "Dato un numero in ingresso, restituisce `-1` se è negativo, `1` se è positivo e `0` se è zero.",
      a: "Segno di un numero fornito (+/-/0).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore di cui verrà valutato il segno.",
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
      d: "Restituisce il seno di un angolo espresso in radianti.",
      a: "Seno di un angolo espresso in radianti.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angolo",
          detail: "L'angolo di cui trovare il seno, in radianti.",
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
      d: "Restituisce il seno iperbolico di un numero reale qualsiasi.",
      a: "Seno iperbolico di un numero reale qualsiasi.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Qualsiasi valore reale di cui calcolare il seno iperbolico.",
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
      d: "Restituisce la radice quadrata positiva di un numero positivo.",
      a: "Radice quadrata positiva di un numero positivo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il numero per cui calcolare la radice quadrata positiva.",
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
      d: "Restituisce la radice quadrata positiva del prodotto di Pi Greco e del numero positivo fornito.",
      a: "Radice quadrata del prodotto di pi greco e di un numero.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il numero che verrà moltiplicato per Pi Greco, di cui verrà restituita la radice quadrata del prodotto.",
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
      d: "Restituisce il logaritmo di una funzione Gamma specificata, in base e (il numero di Eulero).",
      a: "Logaritmo della funzione gamma.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "L'input della funzione Gamma. Verrà restituito il logaritmo naturale di Gamma(`valore`).",
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
      d: "Restituisce il coseno di un angolo espresso in radianti.",
      a: "Coseno di un angolo espresso in radianti.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angolo",
          detail: "L'angolo di cui trovare il coseno, in radianti.",
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
      d: "Tronca un numero a un certo numero di cifre significative omettendo le cifre meno significative.",
      a: "Tronca un numero.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da troncare.",
          example: "3.141592654",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimali",
          detail: "Il numero di cifre significative a destra della virgola decimale da mantenere.",
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
      d: "Restituisce un numero diviso per un altro.",
      a: "Un numero diviso per un altro.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividendo",
          detail: "Il numero da dividere.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisore",
          detail: "Il numero per cui dividere.",
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
      d: "Restituisce un numero elevato a una potenza.",
      a: "Un numero elevato a una potenza.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "base",
          detail: "Il numero da elevare alla potenza `esponente`.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "esponente",
          detail: "L'esponente a cui elevare `base`.",
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
      d: "Restituisce la somma di un intervallo in base a più criteri.",
      a: "Somma un intervallo in base a più criteri.",
      m: [
        3,
        257
      ],
      p: [
        {
          name: "intervallo_somma",
          detail: "L'intervallo da sommare.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "intervallo_criteri1",
          detail: "L'intervallo da confrontare con criterio1.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterio1",
          detail: "Il modello o il test da applicare a intervallo_criteri1.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo_criteri2",
          detail: "Intervalli aggiuntivi da verificare.",
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
      d: "Restituisce il conteggio di un intervallo in base a più criteri.",
      a: "Conta i valori in base a più criteri.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "intervallo_criteri1",
          detail: "L'intervallo da confrontare con `criterio1`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterio1",
          detail: "Il modello o il test da applicare a `intervallo_criteri1`.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo_criteri2",
          detail: "Intervalli aggiuntivi da verificare.",
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
      d: "Restituisce il risultato della moltiplicazione di una serie di numeri tra loro.",
      a: "Risultato della moltiplicazione di una serie di numeri tra loro.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "fattore1",
          detail: "Il primo numero o intervallo da considerare per il prodotto.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fattore2",
          detail: "Altri numeri o intervalli da considerare per il prodotto.",
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
      d: "Calcola la media armonica di un insieme di dati.",
      a: "La media armonica di un insieme di dati.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo della popolazione.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da includere nella popolazione.",
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
      d: "Calcola la probabilità di ottenere un certo numero di successi in un certo numero di tentativi, data una popolazione di dimensione definita contenente un certo numero di successi, senza reintroduzione delle estrazioni.",
      a: "Probabilità di distribuzione ipergeometrica.",
      m: [
        5,
        5
      ],
      p: [
        {
          name: "numero_successi",
          detail: "Il numero di successi desiderato.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_estrazioni",
          detail: "Il numero di estrazioni consentite.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "successi_nella_popolazione",
          detail: "Il numero totale di successi nella popolazione.",
          example: "20",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dimensione_popolazione",
          detail: "La dimensione totale della popolazione.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Determina il valore logico della forma della funzione. \n\nSe cumulativo è VERO(), HYPGEOM.DIST restituisce la funzione di distribuzione cumulativa;\n\nse è FALSO(), restituisce la funzione di densità di probabilità.",
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
      d: "Calcola il valore y in cui la retta risultante dalla regressione lineare di un insieme di dati intersecherà l'asse y (x=0).",
      a: "Intercetta y di una retta ottenuta tramite regressione lineare.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati_y",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati dipendenti.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati indipendenti.",
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
      d: "Calcola la curtosi di un insieme di dati, che ne descrive la forma e in particolare l'\"appuntimento\".",
      a: "Curtosi di un insieme di dati.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo dell'insieme di dati.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da includere nell'insieme di dati.",
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
      d: "Restituisce l'n-esimo elemento più grande da un insieme di dati, dove n è definito dall'utente.",
      a: "N-esimo elemento più grande di un insieme di dati.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati",
          detail: "Array o intervallo contenente l'insieme di dati da considerare.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "La posizione, dal più grande al più piccolo, dell'elemento da restituire.",
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
      d: "Calcola la deviazione standard basata su un campione, impostando il testo al valore `0`.",
      a: "Deviazione standard di un campione (testo come 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo del campione.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da includere nel campione.",
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
      d: "Calcola la deviazione standard basata su un'intera popolazione.",
      a: "Deviazione standard di un'intera popolazione.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo della popolazione.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da includere nella popolazione.",
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
      d: "Calcola la media geometrica di un insieme di dati.",
      a: "La media geometrica di un insieme di dati.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo della popolazione.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da includere nella popolazione.",
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
      d: "Restituisce la posizione di un valore specificato in un insieme di dati. Se nell'insieme di dati sono presenti più voci con lo stesso valore, verrà restituita la posizione più alta tra queste voci.",
      a: "Posizione più alta di un valore specificato in un insieme di dati.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore di cui verrà determinata la posizione.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati",
          detail: "L'array o l'intervallo contenente l'insieme di dati da considerare.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "è_crescente",
          detail: "Se considerare i valori in `dati` in ordine decrescente o crescente. Se omesso, il valore predefinito è decrescente (FALSO).",
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
      d: "Restituisce la posizione di un valore specificato in un insieme di dati. Se nell'insieme di dati sono presenti più voci con lo stesso valore, verrà restituita la posizione media tra queste voci.",
      a: "Posizione media di un valore specificato in un insieme di dati.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore di cui verrà determinata la posizione.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati",
          detail: "L'array o l'intervallo contenente l'insieme di dati da considerare.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "è_crescente",
          detail: "Se considerare i valori in `dati` in ordine decrescente o crescente. Se omesso, il valore predefinito è decrescente (FALSO).",
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
      d: "Restituisce la posizione percentuale (percentile) da 0 a 1 esclusi di un valore specificato in un insieme di dati.",
      a: "Posizione percentuale (percentile) da 0 a 1 esclusi.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "dati",
          detail: "L'array o l'intervallo contenente l'insieme di dati da considerare.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore",
          detail: "Il valore di cui verrà determinata la posizione percentuale.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cifre_significative",
          detail: "Il numero di cifre significative da usare nel calcolo. Il valore predefinito è 3.",
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
      d: "Restituisce la posizione percentuale (percentile) da 0 a 1 inclusi di un valore specificato in un insieme di dati.",
      a: "Posizione percentuale (percentile) da 0 a 1 inclusi.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "dati",
          detail: "L'array o l'intervallo contenente l'insieme di dati da considerare.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore",
          detail: "Il valore di cui verrà determinata la posizione percentuale.",
          example: " A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cifre_significative",
          detail: "Il numero di cifre significative da usare nel calcolo. Il valore predefinito è 3.",
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
      d: "Calcola il valore y previsto per una x specificata, basandosi su una regressione lineare di un insieme di dati.",
      a: "Valore y previsto tramite regressione lineare.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "Il valore sull'asse x da prevedere.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_y",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati dipendenti.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati indipendenti.",
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
      d: "Restituisce la trasformazione inversa di Fisher di un valore specificato.",
      a: "Trasformazione inversa di fisher di un valore specificato.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore per cui calcolare la trasformazione inversa di Fisher.",
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
      d: "Restituisce la trasformazione di Fisher di un valore specificato.",
      a: "Trasformazione di fisher di un valore specificato.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore per cui calcolare la trasformazione di Fisher.",
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
      d: "Restituisce il valore che ricorre più frequentemente in un insieme di dati.",
      a: "Valore più ricorrente in un insieme di dati.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo da considerare nel calcolo della moda.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da considerare nel calcolo della moda.",
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
      d: "Restituisce il valore della funzione di distribuzione di Weibull (o della funzione di distribuzione cumulativa di Weibull) per una forma e una scala specificate.",
      a: "Funzione di distribuzione di weibull.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "L'input della funzione di distribuzione di Weibull.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "forma",
          detail: "Il parametro di forma della funzione di distribuzione di Weibull.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "scala",
          detail: "Il parametro di scala della funzione di distribuzione di Weibull.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Se utilizzare la funzione di distribuzione cumulativa.",
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
      d: "Restituisce il numero di valori numerici in un insieme di dati.",
      a: "Il numero di valori numerici in un insieme di dati.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo da considerare nel conteggio.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da considerare nel conteggio.",
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
      d: "Restituisce il numero di valori in un insieme di dati.",
      a: "Il numero di valori in un insieme di dati.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo da considerare nel conteggio.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da considerare nel conteggio.",
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
      d: "Calcola la media delle grandezze degli scostamenti dei dati rispetto alla media di un insieme di dati.",
      a: "Grandezza media degli scostamenti dalla media.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo del campione.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da includere nel campione.",
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
      d: "Restituisce il valore medio numerico in un insieme di dati, ignorando il testo.",
      a: "Valore medio numerico in un insieme di dati, ignorando il testo.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo da considerare nel calcolo del valore medio.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da considerare nel calcolo del valore medio.",
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
      d: "Restituisce il valore medio numerico in un insieme di dati.",
      a: "Valore medio numerico in un insieme di dati.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo da considerare nel calcolo del valore medio.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da considerare nel calcolo del valore medio.",
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
      d: "Calcola la probabilità di ottenere un certo numero di successi (o un numero massimo di successi) in un certo numero di tentativi, data una popolazione di dimensione definita contenente un certo numero di successi, con reintroduzione delle estrazioni.",
      a: "Probabilità di distribuzione binomiale.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "numero_successi",
          detail: "Il numero di successi per cui calcolare la probabilità in `numero_tentativi` tentativi.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_prove",
          detail: "Il numero di tentativi indipendenti.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilità_successo",
          detail: "La probabilità di successo in un dato tentativo.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Se utilizzare la distribuzione binomiale cumulativa.",
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
      d: "Calcola il valore più piccolo per cui la distribuzione binomiale cumulativa è maggiore o uguale a un criterio specificato.",
      a: "Funzione di distribuzione binomiale cumulativa inversa.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "numero_prove",
          detail: "Il numero di tentativi indipendenti.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilità_successo",
          detail: "La probabilità di successo in un dato tentativo.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilità_obiettivo",
          detail: "La soglia di probabilità desiderata.",
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
      d: "Calcola l'ampiezza di metà dell'intervallo di confidenza per una distribuzione normale.",
      a: "Intervallo di confidenza per una distribuzione normale.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "alfa",
          detail: "Uno meno il livello di confidenza desiderato. Ad es. `0,1` per un livello di confidenza `0,9`, ossia il 90%.",
          example: "0.05",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "deviazione_standard",
          detail: "La deviazione standard della popolazione.",
          example: "1.6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dimensione_popolazione",
          detail: "La dimensione della popolazione.",
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
      d: "Calcola r, il coefficiente di correlazione del momento prodotto di Pearson di un insieme di dati.",
      a: "Coefficiente di correlazione del momento prodotto di Pearson.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati_y",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati dipendenti.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati indipendenti.",
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
      d: "Calcola la covarianza di un insieme di dati.",
      a: "La covarianza di un insieme di dati.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati_y",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati dipendenti.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati indipendenti.",
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
      d: "Calcola la covarianza campionaria di un insieme di dati.",
      a: "La covarianza campionaria di un insieme di dati.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati_y",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati dipendenti.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati indipendenti.",
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
      d: "Calcola la somma dei quadrati degli scostamenti basata su un campione.",
      a: "La somma dei quadrati degli scostamenti basata su un campione.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo del campione.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da includere nel campione.",
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
      d: "Restituisce il valore della funzione di distribuzione esponenziale con un lambda specificato per un valore specificato.",
      a: "Funzione di distribuzione esponenziale.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "L'input della funzione di distribuzione esponenziale.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lambda",
          detail: "Il lambda che specifica la funzione di distribuzione esponenziale.",
          example: "0.5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Se utilizzare la distribuzione cumulativa esponenziale.",
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
      d: "Restituisce la media di un intervallo in base a un criterio.",
      a: "Media dei valori in base a un criterio.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "intervallo_criteri",
          detail: "L'intervallo da confrontare con `criterio`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterio",
          detail: "Il modello o il test da applicare a `intervallo_criteri`.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo_media",
          detail: "L'intervallo su cui calcolare la media. Se non incluso, viene invece utilizzato `intervallo_criteri` per la media.",
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
      d: "Restituisce la media di un intervallo in base a più criteri.",
      a: "Media dei valori in base a più criteri.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "intervallo_media",
          detail: "L'intervallo su cui calcolare la media.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo_criteri1",
          detail: "L'intervallo da confrontare con `criterio1`.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterio1",
          detail: "Il modello o il test da applicare a `intervallo_criteri1`.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo_criteri2",
          detail: "Intervalli aggiuntivi da verificare.",
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
      d: "Restituisce il numero di modi per scegliere un certo numero di oggetti da un insieme di dimensioni date, considerando l'ordine.",
      a: "Numero di permutazioni da un numero di oggetti.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "La dimensione dell'insieme di oggetti da cui scegliere.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Il numero di oggetti da scegliere.",
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
      d: "Calcola la media di un insieme di dati escludendo una certa proporzione di dati dagli estremi superiore e inferiore dell'insieme.",
      a: "Media di un insieme di dati escludendo gli estremi.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati",
          detail: "Array o intervallo contenente l'insieme di dati da considerare.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "proporzione_esclusa",
          detail: "La proporzione dell'insieme di dati da escludere, dagli estremi dell'insieme.",
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
      d: "Restituisce il valore a un dato percentile di un insieme di dati, esclusi 0 e 1.",
      a: "Valore a un dato percentile di un insieme di dati, esclusi 0 e 1.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati",
          detail: "L'array o l'intervallo contenente l'insieme di dati da considerare.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "percentile",
          detail: "Il percentile, escluso tra 0 e 1, il cui valore in `dati` verrà calcolato e restituito.",
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
      d: "Restituisce il valore a un dato percentile di un insieme di dati.",
      a: "Valore a un dato percentile di un insieme di dati.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati",
          detail: "L'array o l'intervallo contenente l'insieme di dati da considerare.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "percentile",
          detail: "Il percentile il cui valore in `dati` verrà calcolato e restituito.",
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
      d: "Calcola r, il coefficiente di correlazione del momento prodotto di Pearson di un insieme di dati.",
      a: "Coefficiente di correlazione del momento prodotto di Pearson.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati_y",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati dipendenti.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati indipendenti.",
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
      d: "Restituisce il valore della funzione di distribuzione normale standard inversa per un valore specificato.",
      a: "Funzione di distribuzione normale standard inversa.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "x",
          detail: "L'input della funzione di distribuzione normale standard inversa.",
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
      d: "Restituisce il valore della funzione di distribuzione cumulativa normale standard per un valore specificato.",
      a: "Funzione di distribuzione cumulativa normale standard.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "L'input della funzione di distribuzione cumulativa normale standard.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Determina il valore logico della forma della funzione. \n\nSe è VERO(), restituisce la funzione di distribuzione cumulativa;\n\nse è FALSO(), restituisce la funzione di densità di probabilità.",
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
      d: "Restituisce il valore della funzione di distribuzione normale inversa per un valore, una media e una deviazione standard specificati.",
      a: "Funzione di distribuzione normale inversa.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "L'input della funzione di distribuzione normale inversa.",
          example: "0.75",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "media",
          detail: "La media (mu) della funzione di distribuzione normale.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "deviazione_standard",
          detail: "La deviazione standard (sigma) della funzione di distribuzione normale.",
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
      d: "Restituisce il valore della funzione di distribuzione normale (o della funzione di distribuzione cumulativa normale) per un valore, una media e una deviazione standard specificati.",
      a: "Funzione di distribuzione normale.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "L'input della funzione di distribuzione normale.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "media",
          detail: "La media (mu) della funzione di distribuzione normale.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "deviazione_standard",
          detail: "La deviazione standard (sigma) della funzione di distribuzione normale.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Se utilizzare la funzione di distribuzione cumulativa normale anziché la funzione di distribuzione.",
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
      d: "Calcola la probabilità di ottenere un certo numero di insuccessi prima di un certo numero di successi, data una probabilità di successo in tentativi indipendenti.",
      a: "Probabilità di distribuzione binomiale negativa.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "numero_insuccessi",
          detail: "Il numero di insuccessi da modellare.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_successi",
          detail: "Il numero di successi da modellare.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilità_successo",
          detail: "La probabilità di successo in un dato tentativo.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Determina il valore logico della forma della funzione. \n\nSe è VERO(), restituisce la funzione di distribuzione cumulativa;\n\nse è FALSO(), restituisce la funzione di densità di probabilità.",
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
      d: "Restituisce il valore numerico minimo in un insieme di dati.",
      a: "Valore numerico minimo in un insieme di dati.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo da considerare nel calcolo del valore minimo.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da considerare nel calcolo del valore minimo.",
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
      d: "Restituisce il valore minimo in un insieme di dati numerico.",
      a: "Valore minimo in un insieme di dati numerico.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo da considerare nel calcolo del valore minimo.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da considerare nel calcolo del valore minimo.",
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
      d: "Restituisce il valore mediano in un insieme di dati numerico.",
      a: "Valore mediano in un insieme di dati numerico.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo da considerare nel calcolo del valore mediano.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da considerare nel calcolo del valore mediano.",
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
      d: "Restituisce il valore numerico massimo in un insieme di dati.",
      a: "Valore numerico massimo in un insieme di dati.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo da considerare nel calcolo del valore massimo.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da considerare nel calcolo del valore massimo.",
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
      d: "Restituisce il valore massimo in un insieme di dati numerico.",
      a: "Valore massimo in un insieme di dati numerico.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo da considerare nel calcolo del valore massimo.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da considerare nel calcolo del valore massimo.",
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
      d: "Restituisce il valore della distribuzione cumulativa log-normale inversa con media e deviazione standard date, per un valore specificato.",
      a: "Funzione di distribuzione cumulativa log-normale inversa.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "L'input della funzione di distribuzione cumulativa log-normale inversa.",
          example: "0.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "media",
          detail: "La media (mu) della funzione di distribuzione cumulativa log-normale inversa.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "deviazione_standard",
          detail: "La deviazione standard (sigma) della funzione di distribuzione cumulativa log-normale inversa.",
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
      d: "Restituisce il valore della distribuzione cumulativa log-normale con media e deviazione standard date, per un valore specificato.",
      a: "Probabilità di distribuzione cumulativa log-normale.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "L'input della funzione di distribuzione cumulativa log-normale.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "media",
          detail: "La media (mu) della funzione di distribuzione cumulativa log-normale.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "deviazione_standard",
          detail: "La deviazione standard (sigma) della funzione di distribuzione cumulativa log-normale.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Determina il valore logico della forma della funzione. \n\nSe è VERO(), restituisce la funzione di distribuzione cumulativa;\n\nse è FALSO(), restituisce la funzione di densità di probabilità.",
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
      d: "Restituisce il valore p a una coda di un test Z con distribuzione standard.",
      a: "Valore p a una coda di un test z.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "dati",
          detail: "L'array o l'intervallo contenente l'insieme di dati da considerare.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "valore",
          detail: "La statistica del test da usare nel test Z.",
          example: "B2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "deviazione_standard",
          detail: "La deviazione standard da assumere per il test Z. Se non fornita, verrà usata la deviazione standard dei dati.",
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
      d: "Dato un insieme di valori e le probabilità corrispondenti, calcola la probabilità che un valore scelto a caso ricada tra due limiti.",
      a: "Probabilità che i valori si trovino in un intervallo.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "dati",
          detail: "Array o intervallo contenente l'insieme di dati da considerare.",
          example: "A3:A6",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "probabilità",
          detail: "Array o intervallo contenente le probabilità corrispondenti a `dati`.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "limite_inferiore",
          detail: "Il limite inferiore dell'intervallo di valori per cui calcolare la probabilità.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "limite_superiore",
          detail: "Il limite superiore dell'intervallo di valori per cui calcolare la probabilità.",
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
      d: "Restituisce un valore vicino a un quartile specificato di un insieme di dati, esclusi 0 e 4.",
      a: "Valore vicino a un quartile specifico di un insieme di dati, esclusi 0 e 4.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati",
          detail: "L'array o l'intervallo contenente l'insieme di dati da considerare.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_quartile",
          detail: "Quale quartile restituire.",
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
      d: "Restituisce un valore vicino a un quartile specificato di un insieme di dati.",
      a: "Valore vicino a un quartile specifico di un insieme di dati.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati",
          detail: "L'array o l'intervallo contenente l'insieme di dati da considerare.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_quartile",
          detail: "Quale valore di quartile restituire.",
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
      d: "Restituisce il valore della funzione di distribuzione di Poisson (o della funzione di distribuzione cumulativa di Poisson) per un valore e una media specificati.",
      a: "Funzione di distribuzione di poisson.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "L'input della funzione di distribuzione di Poisson.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "media",
          detail: "La media (mu) della funzione di distribuzione di Poisson.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Se utilizzare la funzione di distribuzione cumulativa di Poisson anziché la funzione di distribuzione.",
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
      d: "Calcola il quadrato di r, il coefficiente di correlazione del momento prodotto di Pearson di un insieme di dati.",
      a: "Quadrato del coefficiente di correlazione.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati_y",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati dipendenti.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati indipendenti.",
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
      d: "Calcola la probabilità a coda sinistra per una distribuzione t di Student con un input dato (x).",
      a: "Distribuzione t di Student a coda sinistra.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "L'input della funzione di distribuzione t.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gradi_libertà",
          detail: "Il numero di gradi di libertà.",
          example: "30",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Se cumulativo è VERO, T.DIST restituisce la funzione di distribuzione cumulativa; se è FALSO, restituisce la funzione di densità di probabilità.",
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
      d: "Calcola la probabilità a due code per una distribuzione t di Student con un input dato (x).",
      a: "Distribuzione t di Student a due code.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "L'input della funzione di distribuzione t.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gradi_libertà",
          detail: "Il numero di gradi di libertà.",
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
      d: "Calcola la probabilità a coda destra per una distribuzione t di Student con un input dato (x).",
      a: "Distribuzione t di Student a coda destra.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "L'input della funzione di distribuzione t.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gradi_libertà",
          detail: "Il numero di gradi di libertà.",
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
      d: "Calcola l'inversa negativa della funzione TDIST a una coda.",
      a: "T.INV",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "probabilità",
          detail: "La probabilità associata alla distribuzione t a due code.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gradi_libertà",
          detail: "Il numero di gradi di libertà.",
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
      d: "Calcola l'inversa della funzione TDIST a due code.",
      a: "T.INV.2T",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "probabilità",
          detail: "La probabilità associata alla distribuzione t a due code.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gradi_libertà",
          detail: "Il numero di gradi di libertà.",
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
      d: "Test t. Restituisce la probabilità associata al test t di Student. Determina se è probabile che due campioni provengano dalle stesse due popolazioni sottostanti che hanno la stessa media.",
      a: "Restituisce la probabilità associata al test t.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "intervallo1",
          detail: "Il primo campione di dati o gruppo di celle da considerare per il test t.",
          example: "A1:A4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "intervallo2",
          detail: "Il secondo campione di dati o gruppo di celle da considerare per il test t.",
          example: "B1:B4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "code",
          detail: "Specifica il numero di code della distribuzione.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tipo",
          detail: "Specifica il tipo di test t.",
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
      d: "Calcola la distribuzione di probabilità F a coda sinistra (grado di diversità) per due insiemi di dati con un input x dato. Chiamata anche distribuzione di Fisher-Snedecor o distribuzione F di Snedecor.",
      a: "Distribuzione di probabilità F (a coda sinistra).",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "L'input della funzione di distribuzione di probabilità F. Il valore per cui valutare la funzione.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gradi_libertà1",
          detail: "Il numeratore del numero di gradi di libertà.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gradi_libertà2",
          detail: "Il denominatore del numero di gradi di libertà.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Valore logico che determina la forma della funzione.",
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
      d: "Calcola la distribuzione di probabilità F a coda destra (grado di diversità) per due insiemi di dati con un input x dato. Chiamata anche distribuzione di Fisher-Snedecor o distribuzione F di Snedecor.",
      a: "Distribuzione di probabilità F.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "L'input della funzione di distribuzione di probabilità F. Il valore per cui valutare la funzione.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gradi_libertà1",
          detail: "Il numeratore del numero di gradi di libertà.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gradi_libertà2",
          detail: "Il denominatore del numero di gradi di libertà.",
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
      d: "Calcola la varianza basata su un'intera popolazione.",
      a: "Varianza dell'intera popolazione.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo della popolazione.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da includere nella popolazione.",
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
      d: "Calcola la varianza basata su un campione.",
      a: "Varianza.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo del campione.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da includere nel campione.",
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
      d: "Calcola la varianza basata su un campione, impostando il testo al valore `0`.",
      a: "Varianza di un campione (testo come 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo del campione.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da includere nel campione.",
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
      d: "Calcola la varianza basata su un'intera popolazione, impostando il testo al valore `0`.",
      a: "Varianza dell'intera popolazione (testo come 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo della popolazione.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da includere nella popolazione.",
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
      d: "Calcola l'errore standard del valore y previsto per ogni x nella regressione di un insieme di dati.",
      a: "Errore standard dei valori y previsti nella regressione.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati_y",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati dipendenti.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati indipendenti.",
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
      d: "Calcola l'equivalente normalizzato di una variabile casuale, data la media e la deviazione standard della distribuzione.",
      a: "Equivalente normalizzato di una variabile casuale.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore della variabile casuale da normalizzare.",
          example: "96",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "media",
          detail: "La media della distribuzione.",
          example: "80",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "deviazione_standard",
          detail: "La deviazione standard della distribuzione.",
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
      d: "Restituisce l'n-esimo elemento più piccolo da un insieme di dati, dove n è definito dall'utente.",
      a: "N-esimo elemento più piccolo di un insieme di dati.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati",
          detail: "L'array o l'intervallo contenente l'insieme di dati da considerare.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "n",
          detail: "La posizione, dal più piccolo al più grande, dell'elemento da restituire.",
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
      d: "Calcola la pendenza della retta risultante dalla regressione lineare di un insieme di dati.",
      a: "Pendenza della retta dalla regressione lineare dei dati.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati_y",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati dipendenti.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x",
          detail: "L'intervallo che rappresenta l'array o la matrice dei dati indipendenti.",
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
      d: "Calcola l'asimmetria di un insieme di dati, che ne descrive la simmetria rispetto alla media.",
      a: "Asimmetria di un insieme di dati.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo dell'insieme di dati.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da includere nell'insieme di dati.",
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
      d: "Calcola l'asimmetria di un insieme di dati, che ne descrive la simmetria rispetto alla media. Presuppone che l'insieme di dati riguardi l'intera popolazione.",
      a: "Asimmetria dell'insieme di dati di una popolazione.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore o intervallo dell'insieme di dati.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Valori o intervalli aggiuntivi da includere nell'insieme di dati.",
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
      d: "Ricerca verticale. Cerca nella prima colonna di un intervallo una chiave e restituisce il valore di una cella specificata nella riga trovata.",
      a: "Ricerca verticale.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "chiave_ricerca",
          detail: "Il valore da cercare. Ad esempio, `42`, `\"Gatti\"` o `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo",
          detail: "L'intervallo da considerare per la ricerca. La prima colonna dell'intervallo viene esaminata alla ricerca della chiave specificata in `chiave_ricerca`.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "indice",
          detail: "L'indice della colonna del valore da restituire, dove la prima colonna in `intervallo` è numerata 1.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "è_ordinato",
          detail: "Indica se la colonna da esaminare (la prima colonna dell'intervallo specificato) è ordinata; in tal caso verrà restituita la corrispondenza più vicina a `chiave_ricerca`.",
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
      d: "Ricerca orizzontale. Cerca nella prima riga di un intervallo una chiave e restituisce il valore di una cella specificata nella colonna trovata.",
      a: "Ricerca orizzontale.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "chiave_ricerca",
          detail: "Il valore da cercare. Ad esempio, `42`, `\"Gatti\"` o `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo",
          detail: "L'intervallo da considerare per la ricerca. La prima riga dell'intervallo viene esaminata alla ricerca della chiave specificata in `chiave_ricerca`.",
          example: "A2:Z6",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "indice",
          detail: "L'indice della riga del valore da restituire, dove la prima riga in `intervallo` è numerata 1.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "è_ordinato",
          detail: "Indica se la riga da esaminare (la prima riga dell'intervallo specificato) è ordinata.",
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
      d: "Cerca in una riga o colonna ordinata una chiave e restituisce il valore della cella in un intervallo di risultati situato nella stessa posizione della riga o colonna di ricerca.",
      a: "Cerca un valore.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "chiave_ricerca",
          detail: "Il valore da cercare nella riga o colonna. Ad esempio, `42`, `\"Gatti\"` o `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo_ricerca|matrice_risultato_ricerca",
          detail: "Un metodo per usare questa funzione consiste nel fornire una singola riga o colonna ordinata `intervallo_ricerca` in cui cercare `chiave_ricerca`, con un secondo argomento `intervallo_risultato`. L'altro modo è combinare questi due argomenti in un unico `matrice_risultato_ricerca`, in cui viene esaminata la prima riga o colonna e viene restituito un valore dall'ultima riga o colonna della matrice. Se `chiave_ricerca` non viene trovata, può essere restituita una corrispondenza non esatta.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo_risultato",
          detail: "L'intervallo da cui restituire un risultato. Il valore restituito corrisponde alla posizione in cui `chiave_ricerca` viene trovata in `intervallo_ricerca`. Questo intervallo deve essere costituito da una sola riga o colonna e non deve essere usato se si utilizza il metodo `matrice_risultato_ricerca`.",
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
      d: "Restituisce un riferimento di cella come stringa.",
      a: "Riferimento di cella come stringa.",
      m: [
        2,
        5
      ],
      p: [
        {
          name: "riga",
          detail: "Il numero di riga del riferimento di cella.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonna",
          detail: "Il numero di colonna (non il nome) del riferimento di cella. `A` è la colonna numero `1`.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "modo_relativo_assoluto",
          detail: "Un indicatore che specifica se il riferimento è assoluto per riga/colonna. `1` indica riga e colonna assolute (es. $A$1), `2` riga assoluta e colonna relativa (es. A$1), `3` riga relativa e colonna assoluta (es. $A1), e `4` riga e colonna relative (es. A1).",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "usare_notazione_a1",
          detail: "Un valore booleano che indica se usare la notazione stile `A1` (VERO) o la notazione stile `R1C1` (FALSO).",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "foglio",
          detail: "Testo che indica il nome del foglio a cui punta l'indirizzo.",
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
      d: "Restituisce un riferimento di cella specificato da una stringa.",
      a: "Un riferimento di cella specificato da una stringa.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "riferimento_cella_come_stringa",
          detail: "Un riferimento di cella, scritto come stringa tra virgolette.",
          example: "\"Sheet2!\"&B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "è_notazione_a1",
          detail: "Indica se il riferimento di cella è in notazione A1 (VERO) o in notazione R1C1 (FALSO).",
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
      d: "Restituisce il numero di riga di una cella specificata.",
      a: "Numero di riga di una cella specificata.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "riferimento_cella",
          detail: "La cella di cui verrà restituito il numero di riga.",
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
      d: "Restituisce il numero di righe in un array o intervallo specificato.",
      a: "Numero di righe in un array o intervallo specificato.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "intervallo",
          detail: "L'intervallo di cui verrà restituito il conteggio delle righe.",
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
      d: "Restituisce il numero di colonna di una cella specificata, con `A=1`.",
      a: "Numero di colonna di una cella specificata.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "riferimento_cella",
          detail: "La cella di cui verrà restituito il numero di colonna. La colonna `A` corrisponde a `1`.",
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
      d: "Restituisce il numero di colonne in un array o intervallo specificato.",
      a: "Numero di colonne in un array o intervallo specificato.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "intervallo",
          detail: "L'intervallo di cui verrà restituito il conteggio delle colonne.",
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
      d: "Restituisce un riferimento di intervallo spostato di un numero specificato di righe e colonne rispetto a un riferimento di cella iniziale.",
      a: "Un riferimento di intervallo spostato rispetto a una cella.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "riferimento_cella",
          detail: "Il punto di partenza da cui contare le righe e le colonne di spostamento.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "righe_spostamento",
          detail: "Il numero di righe di cui effettuare lo spostamento.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonne_spostamento",
          detail: "Il numero di colonne di cui effettuare lo spostamento.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "altezza",
          detail: "L'altezza dell'intervallo da restituire a partire dalla destinazione dello spostamento.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "larghezza",
          detail: "La larghezza dell'intervallo da restituire a partire dalla destinazione dello spostamento.",
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
      d: "Restituisce la posizione relativa di un elemento in un intervallo che corrisponde a un valore specificato.",
      a: "Posizione di un elemento nell'intervallo che corrisponde al valore.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "chiave_ricerca",
          detail: "Il valore da cercare. Ad esempio, `42`, `\"Gatti\"` o `I24`.",
          example: "\"Sunday\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo",
          detail: "L'array unidimensionale in cui effettuare la ricerca.",
          example: "A2:A9",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "tipo_ricerca",
          detail: "Il metodo di ricerca. `1` (predefinito) trova il valore più grande minore o uguale a `chiave_ricerca` quando `intervallo` è ordinato in ordine crescente. `0` trova il valore esatto quando `intervallo` non è ordinato. `-1` trova il valore più piccolo maggiore o uguale a `chiave_ricerca` quando `intervallo` è ordinato in ordine decrescente.",
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
      d: "Restituisce il contenuto di una cella, specificato tramite scostamento di riga e colonna.",
      a: "Contenuto di una cella specificato tramite scostamento di riga e colonna.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "riferimento",
          detail: "L'array di celle in cui effettuare lo scostamento.",
          example: "A1:C20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "riga",
          detail: "Il numero di righe di scostamento.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonna",
          detail: "Il numero di colonne di scostamento.",
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
      d: "Estrae un valore aggregato da una tabella pivot corrispondente alle intestazioni di riga e colonna specificate.",
      a: "Estrae un valore aggregato da una tabella pivot corrispondente alle intestazioni di riga e colonna specificate.",
      m: [
        2,
        254
      ],
      p: [
        {
          name: "nome_valore",
          detail: "Il nome del valore nella tabella pivot per cui si desidera ottenere i dati.",
          example: "\"SUM of number of units\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cella_tabella_pivot",
          detail: "Qualsiasi riferimento a una cella nella tabella pivot desiderata (si consiglia l'angolo superiore).",
          example: "'Pivot table'!A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "colonna_originale",
          detail: "Il nome della colonna nell'insieme di dati originale (non nella tabella pivot).",
          example: "\"division\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        },
        {
          name: "elemento_tabella_pivot",
          detail: "Il nome della riga o colonna mostrata nella tabella pivot corrispondente a *colonna_originale* che si desidera recuperare.",
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
      d: "Restituisce un elemento da un elenco di scelte in base a un indice.",
      a: "Un elemento da un elenco di scelte in base a un indice.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "indice",
          detail: "Quale scelta (tra le 30 fornibili) restituire.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "scelta1",
          detail: "Un valore potenziale da restituire. Obbligatorio. Può essere un riferimento a una cella o un singolo valore.",
          example: "\"A\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scelta2",
          detail: "Valori aggiuntivi tra cui scegliere.",
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
      d: "Crea un collegamento ipertestuale all'interno di una cella.",
      a: "Crea un collegamento ipertestuale all'interno di una cella.",
      p: [
        {
          name: "url",
          detail: "L'URL completo della posizione del collegamento racchiuso tra virgolette, oppure un riferimento a una cella contenente tale URL.",
          example: "\"http://www.luckysheet.com/\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "etichetta_link",
          detail: "Il testo da visualizzare nella cella come collegamento, racchiuso tra virgolette, oppure un riferimento a una cella contenente tale etichetta.",
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
      d: "Converte un'ora, un minuto e un secondo forniti in un orario.",
      a: "Converte ora/minuto/secondo in un orario.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "ora",
          detail: "La componente ora dell'orario.",
          example: "11",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "minuto",
          detail: "La componente minuto dell'orario.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "secondo",
          detail: "La componente secondo dell'orario.",
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
      d: "Restituisce la frazione di un giorno di 24 ore rappresentata dall'orario.",
      a: "Converte una stringa di orario nella sua rappresentazione numerica seriale.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "stringa_ora",
          detail: "La stringa che contiene la rappresentazione dell'orario.",
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
      d: "Restituisce una data corrispondente all'ultimo giorno di un mese che cade un numero specificato di mesi prima o dopo un'altra data.",
      a: "Ultimo giorno di un mese prima o dopo una data.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_inizio",
          detail: "La data da cui calcolare il risultato.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_mesi",
          detail: "Il numero di mesi prima (negativo) o dopo (positivo) 'data_inizio' da considerare.",
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
      d: "Restituisce una data che precede o segue di un numero specificato di mesi un'altra data.",
      a: "Data un certo numero di mesi prima/dopo un'altra data.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_inizio",
          detail: "La data da cui calcolare il risultato.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_mesi",
          detail: "Il numero di mesi prima (negativo) o dopo (positivo) 'data_inizio' da calcolare.",
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
      d: "Restituisce la componente secondi di un orario specifico, in formato numerico.",
      a: "Componente secondi di un orario specifico.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ora",
          detail: "L'orario da cui calcolare la componente secondi.",
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
      d: "Restituisce la componente minuti di un orario specifico, in formato numerico.",
      a: "Componente minuti di un orario specifico.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ora",
          detail: "L'orario da cui calcolare la componente minuti.",
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
      d: "Restituisce la componente ore di un orario specifico, in formato numerico.",
      a: "Componente ore di un orario specifico.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ora",
          detail: "L'orario da cui calcolare la componente ore.",
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
      d: "Restituisce la data e l'ora correnti come valore data.",
      a: "Data e ora correnti come valore data.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "NETWORKDAYS",
      t: 6,
      d: "Restituisce il numero di giorni lavorativi netti tra due giorni forniti.",
      a: "Giorni lavorativi netti tra due giorni forniti.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "data_inizio",
          detail: "La data di inizio del periodo da cui calcolare il numero di giorni lavorativi netti.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_fine",
          detail: "La data di fine del periodo da cui calcolare il numero di giorni lavorativi netti.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "giorni_festivi",
          detail: "Un intervallo o una costante array contenente i numeri seriali delle date da considerare come festività.",
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
      d: "Restituisce il numero di giorni lavorativi netti tra due giorni forniti, escludendo i giorni del fine settimana e le festività specificati.",
      a: "Giorni lavorativi netti tra due date (specificando i fine settimana).",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "data_inizio",
          detail: "La data di inizio del periodo da cui calcolare il numero di giorni lavorativi netti.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_fine",
          detail: "La data di fine del periodo da cui calcolare il numero di giorni lavorativi netti.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fine_settimana",
          detail: "Un numero o una stringa che rappresenta quali giorni della settimana sono considerati fine settimana.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "giorni_festivi",
          detail: "Un intervallo o una costante array contenente le date da considerare come festività.",
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
      d: "Restituisce un numero che rappresenta la settimana ISO dell'anno in cui cade la data fornita.",
      a: "Numero della settimana ISO dell'anno.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "data",
          detail: "La data per cui determinare il numero della settimana ISO. Deve essere un riferimento a una cella contenente una data, una funzione che restituisce un tipo data o un numero.",
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
      d: "Restituisce un numero che rappresenta la settimana dell'anno in cui cade la data fornita.",
      a: "Numero della settimana dell'anno.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "data",
          detail: "La data per cui determinare il numero della settimana. Deve essere un riferimento a una cella contenente una data, una funzione che restituisce un tipo data o un numero.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tipo",
          detail: "Un numero che rappresenta il giorno in cui inizia una settimana. Domenica = 1.",
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
      d: "Restituisce un numero che rappresenta il giorno della settimana della data fornita.",
      a: "Giorno della settimana della data fornita (come numero).",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "data",
          detail: "La data per cui determinare il giorno della settimana. Deve essere un riferimento a una cella contenente una data, una funzione che restituisce un tipo data o un numero.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tipo",
          detail: "Un numero che indica quale sistema di numerazione usare per rappresentare i giorni della settimana. Per impostazione predefinita, il conteggio inizia con Domenica = 1.",
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
      d: "Restituisce il giorno del mese in cui cade una data specifica, in formato numerico.",
      a: "Giorno del mese in cui cade una data specifica.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "data",
          detail: "La data da cui estrarre il giorno.",
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
      d: "Restituisce il numero di giorni tra due date.",
      a: "Numero di giorni tra due date.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_fine",
          detail: "La fine dell'intervallo di date.",
          example: "2011-3-15",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_inizio",
          detail: "L'inizio dell'intervallo di date.",
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
      d: "Restituisce la differenza tra due giorni basata sull'anno di 360 giorni utilizzato in alcuni calcoli di interesse finanziario.",
      a: "Giorni tra due date su un anno di 360 giorni.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "data_inizio",
          detail: "La data di inizio da considerare nel calcolo. Deve essere un riferimento a una cella contenente una data, una funzione che restituisce un tipo data o un numero.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_fine",
          detail: "La data di fine da considerare nel calcolo. Deve essere un riferimento a una cella contenente una data, una funzione che restituisce un tipo data o un numero.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "metodo",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Converte un anno, un mese e un giorno forniti in una data.",
      a: "Converte anno/mese/giorno in una data.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "anno",
          detail: "La componente anno della data.",
          example: "1969",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mese",
          detail: "La componente mese della data.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "giorno",
          detail: "La componente giorno della data.",
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
      d: "Converte una stringa di data fornita in un formato noto in un valore data.",
      a: "Converte una stringa di data in un valore data.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "stringa_data",
          detail: "La stringa che rappresenta la data.",
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
      d: "Calcola il numero di giorni, mesi o anni tra due date.",
      a: "Differenza tra date.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "data_inizio",
          detail: "La data di inizio da considerare nel calcolo. Deve essere un riferimento a una cella contenente una data, una funzione che restituisce un tipo data o un numero.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_fine",
          detail: "La data di fine da considerare nel calcolo. Deve essere un riferimento a una cella contenente una data, una funzione che restituisce un tipo data o un numero.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "unità",
          detail: "Un'abbreviazione stringa per l'unità di tempo. Ad esempio, \"M\" per mese. I valori accettati sono \"Y\",\"M\",\"D\",\"MD\",\"YM\",\"YD\".",
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
      d: "Calcola la data dopo un numero di giorni lavorativi da una data di inizio specificata.",
      a: "Numero di giorni lavorativi dalla data di inizio.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "data_inizio",
          detail: "La data da cui iniziare il conteggio.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_giorni",
          detail: "Il numero di giorni lavorativi di cui avanzare rispetto a `data_inizio`. Se negativo, conta all'indietro.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "giorni_festivi",
          detail: "Un intervallo o una costante array contenente le date da considerare come festività.",
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
      d: "Calcola la data dopo un numero specificato di giorni lavorativi, escludendo i giorni del fine settimana e le festività specificati.",
      a: "Data dopo un numero di giorni lavorativi (specificando i fine settimana).",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "data_inizio",
          detail: "La data da cui iniziare il conteggio.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_giorni",
          detail: "Il numero di giorni lavorativi di cui avanzare rispetto a `data_inizio`. Se negativo, conta all'indietro.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_settimana",
          detail: "Un numero o una stringa che rappresenta quali giorni della settimana sono considerati fine settimana.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "giorni_festivi",
          detail: "Un intervallo o una costante array contenente le date da considerare come festività.",
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
      d: "Restituisce l'anno specificato da una data fornita.",
      a: "Anno specificato da una data fornita.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "data",
          detail: "La data da cui estrarre l'anno.",
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
      d: "Restituisce il numero di anni, comprese le frazioni di anno, tra due date usando una convenzione di conteggio dei giorni specificata.",
      a: "Numero esatto di anni tra due date.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "data_inizio",
          detail: "La data di inizio da considerare nel calcolo. Deve essere un riferimento a una cella contenente una data, una funzione che restituisce un tipo data o un numero.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_fine",
          detail: "La data di fine da considerare nel calcolo. Deve essere un riferimento a una cella contenente una data, una funzione che restituisce un tipo data o un numero.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Restituisce la data corrente come valore data.",
      a: "Data corrente come valore data.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "MONTH",
      t: 6,
      d: "Restituisce il mese dell'anno in cui cade una data specifica, in formato numerico.",
      a: "Mese dell'anno in cui cade una data specifica.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "data",
          detail: "La data da cui estrarre il mese.",
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
      d: "Calcola il tasso di interesse effettivo annuo dato il tasso nominale e il numero di periodi di capitalizzazione all'anno.",
      a: "Tasso di interesse effettivo annuo.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tasso_nominale",
          detail: "Il tasso di interesse nominale annuo.",
          example: "0.99",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodi_per_anno",
          detail: "Il numero di periodi di capitalizzazione all'anno.",
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
      d: "Formatta un numero nella valuta specifica delle impostazioni internazionali del foglio di calcolo.",
      a: "Formatta un numero come valuta specifica delle impostazioni internazionali del foglio di calcolo.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "numero",
          detail: "Il valore da formattare.",
          example: "1.2351",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_decimali",
          detail: "Il numero di posizioni decimali da visualizzare.",
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
      d: "Converte una quotazione di prezzo espressa come frazione decimale in un valore decimale.",
      a: "Converte una frazione decimale in un valore decimale.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "prezzo_frazionario",
          detail: "La quotazione di prezzo fornita usando convenzioni decimali frazionarie.",
          example: "100.10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unità",
          detail: "Le unità della frazione, ad es. `8` per ottavi o `32` per trentaduesimi.",
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
      d: "Converte una quotazione di prezzo espressa come valore decimale in una frazione decimale.",
      a: "Converte un valore decimale in una frazione decimale.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "prezzo_decimale",
          detail: "La quotazione di prezzo fornita come valore decimale.",
          example: "100.125",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unità",
          detail: "Le unità della frazione desiderata, ad es. `8` per ottavi o `32` per trentaduesimi.",
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
      d: "Calcola l'ammortamento di un bene per un periodo specificato usando il metodo del saldo decrescente aritmetico.",
      a: "Ammortamento tramite il metodo del saldo decrescente.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "costo",
          detail: "Il costo iniziale del bene.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_residuo",
          detail: "Il valore del bene al termine dell'ammortamento.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vita_utile",
          detail: "Il numero di periodi durante i quali il bene viene ammortizzato.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodo",
          detail: "Il singolo periodo all'interno di `durata` per cui calcolare l'ammortamento.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mese",
          detail: "Il numero di mesi nel primo anno di ammortamento.",
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
      d: "Calcola l'ammortamento di un bene per un periodo specificato usando il metodo del doppio saldo decrescente.",
      a: "Ammortamento tramite il metodo del doppio saldo decrescente.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "costo",
          detail: "Il costo iniziale del bene.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_residuo",
          detail: "Il valore del bene al termine dell'ammortamento.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vita_utile",
          detail: "Il numero di periodi durante i quali il bene viene ammortizzato.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodo",
          detail: "Il singolo periodo all'interno di `durata` per cui calcolare l'ammortamento.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fattore",
          detail: "Il fattore in base al quale diminuisce l'ammortamento.",
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
      d: "Calcola il tasso di interesse di un investimento a rendita basato su pagamenti periodici di importo costante e sull'ipotesi di un tasso di interesse costante.",
      a: "Tasso di interesse di un investimento a rendita.",
      m: [
        3,
        6
      ],
      p: [
        {
          name: "numero_periodi",
          detail: "Il numero di pagamenti da effettuare.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "pagamento_per_periodo",
          detail: "L'importo per periodo da pagare.",
          example: "-100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Il valore attuale della rendita.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_futuro",
          detail: "Il valore futuro rimanente dopo che è stato effettuato l'ultimo pagamento.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Se i pagamenti sono dovuti alla fine (`0`) o all'inizio (`1`) di ogni periodo.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "stima_tasso",
          detail: "Una stima di quale sarà il tasso di interesse.",
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
      d: "Calcola il capitale cumulativo pagato in un intervallo di periodi di pagamento per un investimento basato su pagamenti periodici di importo costante e un tasso di interesse costante.",
      a: "Capitale cumulativo pagato in un insieme di periodi.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "tasso",
          detail: "Il tasso di interesse.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_periodi",
          detail: "Il numero di pagamenti da effettuare.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Il valore attuale della rendita.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "primo_periodo",
          detail: "Il numero del periodo di pagamento in cui iniziare il calcolo cumulativo.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ultimo_periodo",
          detail: "Il numero del periodo di pagamento in cui terminare il calcolo cumulativo.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Se i pagamenti sono dovuti alla fine (`0`) o all'inizio (`1`) di ogni periodo.",
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
      d: "Calcola il numero di cedole, o pagamenti di interessi, tra la data di regolamento e la data di scadenza dell'investimento.",
      a: "Numero di cedole tra regolamento e scadenza.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "02",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequenza",
          detail: "Il numero di pagamenti di interessi o cedole all'anno (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola l'ammortamento di un bene per un periodo specificato usando il metodo della somma delle cifre degli anni.",
      a: "Ammortamento tramite il metodo della somma delle cifre degli anni.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "costo",
          detail: "Il costo iniziale del bene.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_residuo",
          detail: "Il valore del bene al termine dell'ammortamento.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vita_utile",
          detail: "Il numero di periodi durante i quali il bene viene ammortizzato.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodo",
          detail: "Il singolo periodo all'interno di `durata` per cui calcolare l'ammortamento.",
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
      d: "Calcola il tasso di rendimento annualizzato equivalente di un buono del Tesoro USA in base al tasso di sconto.",
      a: "Tasso di rendimento equivalente per un buono del Tesoro.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso_sconto",
          detail: "Il tasso di sconto del buono al momento dell'acquisto.",
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
      d: "Calcola il rendimento di un buono del Tesoro USA in base al prezzo.",
      a: "Il rendimento di un buono del tesoro USA in base al prezzo.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prezzo",
          detail: "Il prezzo a cui viene acquistato il titolo per 100 di valore nominale.",
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
      d: "Calcola il prezzo di un buono del Tesoro USA in base al tasso di sconto.",
      a: "Prezzo di un buono del Tesoro USA.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso_sconto",
          detail: "Il tasso di sconto del buono al momento dell'acquisto.",
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
      d: "Calcola il valore attuale di un investimento a rendita basato su pagamenti periodici di importo costante e un tasso di interesse costante.",
      a: "Valore attuale di un investimento a rendita.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "tasso",
          detail: "Il tasso di interesse.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_periodi",
          detail: "Il numero di pagamenti da effettuare.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "importo_pagamento",
          detail: "L'importo per periodo da pagare.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_futuro",
          detail: "Il valore futuro rimanente dopo che è stato effettuato l'ultimo pagamento.",
          example: "D2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Se i pagamenti sono dovuti alla fine (`0`) o all'inizio (`1`) di ogni periodo.",
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
      d: "Calcola l'interesse maturato di un titolo con pagamenti periodici.",
      a: "Interesse maturato di un titolo con pagamenti periodici.",
      m: [
        6,
        8
      ],
      p: [
        {
          name: "data_emissione",
          detail: "La data in cui il titolo è stato inizialmente emesso.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "primo_pagamento",
          detail: "La prima data in cui verrà pagato l'interesse.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso",
          detail: "Il tasso di interesse annualizzato.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_rimborso",
          detail: "L'importo di rimborso per 100 di valore nominale, o alla pari.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequenza",
          detail: "Il numero di pagamenti di interessi o cedole all'anno (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "metodo_calcolo",
          detail: "[Facoltativo, predefinito VERO()] - Un valore logico che specifica il metodo usato per calcolare l'interesse maturato totale quando la data di regolamento è successiva alla prima data di maturazione degli interessi. \n\nSe il valore è VERO, viene restituito l'interesse maturato totale dalla data di emissione alla data di regolamento. \n\nSe il valore è FALSO, viene restituito l'interesse maturato dalla prima data di maturazione degli interessi alla data di regolamento.",
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
      d: "Calcola l'interesse maturato di un titolo che paga interessi alla scadenza.",
      a: "Interesse maturato di un titolo che paga alla scadenza.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "data_emissione",
          detail: "La data in cui il titolo è stato inizialmente emesso.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza del titolo.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso",
          detail: "Il tasso di interesse annualizzato.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_rimborso",
          detail: "L'importo di rimborso per 100 di valore nominale, o alla pari.",
          example: "1000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola il numero di giorni dalla prima cedola, o pagamento di interessi, fino al regolamento.",
      a: "Numero di giorni dalla prima cedola al regolamento.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequenza",
          detail: "Il numero di pagamenti di interessi o cedole all'anno (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola il numero di giorni nel periodo della cedola, o pagamento di interessi, che contiene la data di regolamento specificata.",
      a: "Giorni nel periodo della cedola che contiene la data di regolamento.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequenza",
          detail: "Il numero di pagamenti di interessi o cedole all'anno (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola il numero di giorni dalla data di regolamento fino alla prossima cedola, o pagamento di interessi.",
      a: "Giorni dal regolamento alla prossima cedola.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequenza",
          detail: "Il numero di pagamenti di interessi o cedole all'anno (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola la prossima data della cedola, o pagamento di interessi, dopo la data di regolamento.",
      a: "Prossima data della cedola dopo la data di regolamento.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequenza",
          detail: "Il numero di pagamenti di interessi o cedole all'anno (1, 2 o 4).",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola l'ultima data della cedola, o pagamento di interessi, prima della data di regolamento.",
      a: "Ultima data della cedola prima della data di regolamento.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequenza",
          detail: "Il numero di pagamenti di interessi o cedole all'anno (1, 2 o 4).",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola il valore futuro di un investimento a rendita basato su pagamenti periodici di importo costante e un tasso di interesse costante.",
      a: "Valore futuro di un investimento a rendita.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "tasso",
          detail: "Il tasso di interesse.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_periodi",
          detail: "Il numero di pagamenti da effettuare.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "importo_pagamento",
          detail: "L'importo per periodo da pagare.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Il valore attuale della rendita.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Se i pagamenti sono dovuti alla fine (`0`) o all'inizio (`1`) di ogni periodo.",
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
      d: "Calcola il valore futuro di un capitale basato su una serie specificata di tassi di interesse potenzialmente variabili.",
      a: "Valore futuro del capitale da una serie di tassi.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "capitale",
          detail: "L'importo del capitale iniziale o del valore su cui calcolare la capitalizzazione.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "piano_tassi",
          detail: "Una serie di tassi di interesse da capitalizzare rispetto a `capitale`.",
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
      d: "Calcola il rendimento annuo di un titolo che paga interessi periodici, come un titolo di Stato USA, in base al prezzo.",
      a: "Rendimento annuo di un titolo che paga interessi periodici.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso",
          detail: "Il tasso di interesse annualizzato.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "prezzo",
          detail: "Il prezzo a cui viene acquistato il titolo per 100 di valore nominale.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_rimborso",
          detail: "L'importo di rimborso per 100 di valore nominale, o alla pari.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequenza",
          detail: "Il numero di pagamenti di interessi o cedole all'anno (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola il rendimento annuo di un titolo di sconto (senza interessi), in base al prezzo.",
      a: "Rendimento annuo di un titolo di sconto.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prezzo",
          detail: "Il prezzo a cui viene acquistato il titolo per 100 di valore nominale.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_rimborso",
          detail: "L'importo di rimborso per 100 di valore nominale, o alla pari.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola il tasso di interesse nominale annuo dato il tasso effettivo e il numero di periodi di capitalizzazione all'anno.",
      a: "Tasso di interesse nominale annuo.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tasso_effettivo",
          detail: "Il tasso di interesse effettivo annuo.",
          example: "0.85",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodi_per_anno",
          detail: "Il numero di periodi di capitalizzazione all'anno.",
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
      d: "Calcola il tasso di rendimento interno di un investimento basato su una serie specificata di flussi di cassa potenzialmente irregolarmente distanziati.",
      a: "Tasso di rendimento interno dati flussi di cassa non periodici.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "importi_flusso_cassa",
          detail: "Un array o intervallo contenente gli incassi o i pagamenti associati all'investimento.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "date_flusso_cassa",
          detail: "Un array o intervallo con le date corrispondenti ai flussi di cassa in `importi_flusso_cassa`.",
          example: "C2:C25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "stima_tasso",
          detail: "Una stima di quale sarà il tasso di rendimento interno.",
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
      d: "Calcola il tasso di rendimento interno modificato di un investimento basato su una serie di flussi di cassa periodici e sulla differenza tra il tasso di interesse pagato sul finanziamento e il rendimento ottenuto sul reddito reinvestito.",
      a: "Tasso di rendimento interno modificato.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "importi_flusso_cassa",
          detail: "Un array o intervallo contenente gli incassi o i pagamenti associati all'investimento.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "tasso_finanziamento",
          detail: "Il tasso di interesse pagato sui fondi investiti.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tasso_rendimento_reinvestimento",
          detail: "Il rendimento (in percentuale) ottenuto dal reinvestimento del reddito ricevuto dall'investimento.",
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
      d: "Calcola il tasso di rendimento interno di un investimento basato su una serie di flussi di cassa periodici.",
      a: "Tasso di rendimento interno dati flussi di cassa periodici.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "importi_flusso_cassa",
          detail: "Un array o intervallo contenente gli incassi o i pagamenti associati all'investimento.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "stima_tasso",
          detail: "Una stima di quale sarà il tasso di rendimento interno.",
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
      d: "Calcola il valore attuale netto di un investimento basato su una serie di flussi di cassa periodici e un tasso di sconto.",
      a: "Il valore attuale netto di un investimento basato su una serie di flussi di cassa periodici e un tasso di sconto.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "tasso_sconto",
          detail: "Il tasso di sconto dell'investimento in un periodo.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "flusso_cassa1",
          detail: "Il primo flusso di cassa futuro.",
          example: "200",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "flusso_cassa2",
          detail: "Flussi di cassa futuri aggiuntivi.",
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
      d: "Calcola il valore attuale netto di un investimento basato su una serie specificata di flussi di cassa potenzialmente irregolarmente distanziati e un tasso di sconto.",
      a: "Valore attuale netto dati flussi di cassa non periodici.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "tasso_sconto",
          detail: "Il tasso di sconto dell'investimento in un periodo.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "importi_flusso_cassa",
          detail: "Un intervallo di celle contenente gli incassi o i pagamenti associati all'investimento.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "date_flusso_cassa",
          detail: "Un intervallo di celle con le date corrispondenti ai flussi di cassa in `importi_flusso_cassa`.",
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
      d: "Calcola l'interesse cumulativo in un intervallo di periodi di pagamento per un investimento basato su pagamenti periodici di importo costante e un tasso di interesse costante.",
      a: "Interesse cumulativo pagato in un insieme di periodi.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "tasso",
          detail: "Il tasso di interesse.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_periodi",
          detail: "Il numero di pagamenti da effettuare.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Il valore attuale della rendita.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "primo_periodo",
          detail: "Il numero del periodo di pagamento in cui iniziare il calcolo cumulativo.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ultimo_periodo",
          detail: "Il numero del periodo di pagamento in cui terminare il calcolo cumulativo.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Se i pagamenti sono dovuti alla fine (`0`) o all'inizio (`1`) di ogni periodo.",
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
      d: "Calcola il pagamento periodico per un investimento a rendita basato su pagamenti periodici di importo costante e un tasso di interesse costante.",
      a: "Pagamento periodico per un investimento a rendita.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "tasso",
          detail: "Il tasso di interesse.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_periodi",
          detail: "Il numero di pagamenti da effettuare.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Il valore attuale della rendita.",
          example: " 100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_futuro",
          detail: "Il valore futuro rimanente dopo che è stato effettuato l'ultimo pagamento.",
          example: "D2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Se i pagamenti sono dovuti alla fine (`0`) o all'inizio (`1`) di ogni periodo.",
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
      d: "Calcola il pagamento sugli interessi per un investimento basato su pagamenti periodici di importo costante e un tasso di interesse costante.",
      a: "Pagamento sugli interessi per un investimento.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "tasso",
          detail: "Il tasso di interesse.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodo",
          detail: "Il periodo di ammortamento, in termini di numero di periodi.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_periodi",
          detail: "Il numero di pagamenti da effettuare.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Il valore attuale della rendita.",
          example: "80000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_futuro",
          detail: "Il valore futuro rimanente dopo che è stato effettuato l'ultimo pagamento.",
          example: "E2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Se i pagamenti sono dovuti alla fine (`0`) o all'inizio (`1`) di ogni periodo.",
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
      d: "Calcola il pagamento sul capitale di un investimento basato su pagamenti periodici di importo costante e un tasso di interesse costante.",
      a: "Pagamento sul capitale di un investimento.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "tasso",
          detail: "Il tasso di interesse.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodo",
          detail: "Il periodo di ammortamento, in termini di numero di periodi.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_periodi",
          detail: "Il numero di pagamenti da effettuare.",
          example: "3*12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Il valore attuale della rendita.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_futuro",
          detail: "Il valore futuro rimanente dopo che è stato effettuato l'ultimo pagamento.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Se i pagamenti sono dovuti alla fine (`0`) o all'inizio (`1`) di ogni periodo.",
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
      d: "Calcola il tasso di interesse effettivo generato quando un investimento viene acquistato a un prezzo e venduto a un altro, senza interessi o dividendi generati dall'investimento stesso.",
      a: "Calcola il tasso di interesse effettivo.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "data_acquisto",
          detail: "La data di acquisto dell'investimento.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_vendita",
          detail: "La data di vendita dell'investimento.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prezzo_acquisto",
          detail: "Il prezzo a cui è stato acquistato l'investimento.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "prezzo_vendita",
          detail: "Il prezzo a cui è stato venduto l'investimento.",
          example: "101200",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola il prezzo di un titolo che paga interessi periodici, come un titolo di Stato USA, in base al rendimento atteso.",
      a: "Prezzo di un titolo che paga interessi periodici.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso",
          detail: "Il tasso di interesse annualizzato.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "Il rendimento annuo atteso del titolo.",
          example: "0.065",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_rimborso",
          detail: "L'importo di rimborso per 100 di valore nominale, o alla pari.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequenza",
          detail: "Il numero di pagamenti di interessi o cedole all'anno (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola il prezzo di un titolo di sconto (senza interessi), in base al rendimento atteso.",
      a: "Prezzo di un titolo di sconto.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso_sconto",
          detail: "Il tasso di sconto del titolo al momento dell'acquisto.",
          example: "0.0525",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_rimborso",
          detail: "L'importo di rimborso per 100 di valore nominale, o alla pari.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola il prezzo di un titolo che paga interessi alla scadenza, in base al rendimento atteso.",
      a: "Prezzo di un titolo che paga interessi alla scadenza.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_emissione",
          detail: "La data in cui il titolo è stato inizialmente emesso.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso",
          detail: "Il tasso di interesse annualizzato.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "Il rendimento annuo atteso del titolo.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola l'importo ricevuto alla scadenza per un investimento in titoli a reddito fisso acquistati in una data specifica.",
      a: "Importo ricevuto alla scadenza per un titolo.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "investimento",
          detail: "L'importo investito (indipendentemente dal valore nominale di ciascun titolo).",
          example: "10000000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tasso_sconto",
          detail: "Il tasso di sconto del titolo in cui si investe.",
          example: "0.0575",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola il tasso di sconto di un titolo in base al prezzo.",
      a: "Il tasso di sconto di un titolo in base al prezzo.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prezzo",
          detail: "Il prezzo a cui viene acquistato il titolo per 100 di valore nominale.",
          example: "97.975",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_rimborso",
          detail: "L'importo di rimborso per 100 di valore nominale, o alla pari.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola il numero di periodi di pagamento per un investimento basato su pagamenti periodici di importo costante e un tasso di interesse costante.",
      a: "Numero di periodi di pagamento per un investimento.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "tasso",
          detail: "Il tasso di interesse.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "importo_pagamento",
          detail: "L'importo di ciascun pagamento effettuato.",
          example: "500",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Il valore attuale della rendita.",
          example: "40000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_futuro",
          detail: "Il valore futuro rimanente dopo che è stato effettuato l'ultimo pagamento.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Se i pagamenti sono dovuti alla fine (`0`) o all'inizio (`1`) di ogni periodo.",
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
      d: "Calcola l'ammortamento di un bene per un periodo usando il metodo a quote costanti.",
      a: "Ammortamento di un bene usando il metodo a quote costanti.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "costo",
          detail: "Il costo iniziale del bene.",
          example: "300000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_residuo",
          detail: "Il valore del bene al termine dell'ammortamento.",
          example: "75000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vita_utile",
          detail: "Il numero di periodi durante i quali il bene viene ammortizzato.",
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
      d: "Calcola il numero di periodi di capitalizzazione richiesti affinché un investimento di un dato valore attuale, capitalizzando a un tasso specificato, raggiunga un valore obiettivo.",
      a: "Numero di periodi affinché un investimento raggiunga un valore.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso",
          detail: "Il tasso di interesse annualizzato.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "Il rendimento annuo atteso del titolo.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequenza",
          detail: "Il numero di pagamenti di interessi o cedole all'anno (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Calcola la durata di Macaulay modificata di un titolo che paga interessi periodici, come un titolo di Stato USA, in base al rendimento atteso.",
      a: "Durata di Macaulay modificata.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "data_liquidazione",
          detail: "La data di regolamento del titolo, la data successiva all'emissione in cui il titolo viene consegnato all'acquirente.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "La data di scadenza o fine del titolo, quando può essere rimborsato al valore nominale, o alla pari.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso",
          detail: "Il tasso di interesse annualizzato.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "Il rendimento annuo atteso del titolo.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequenza",
          detail: "Il numero di pagamenti di interessi o cedole all'anno (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Un indicatore del metodo di conteggio dei giorni da usare.",
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
      d: "Converte un numero binario con segno in formato decimale.",
      a: "Converte un numero binario con segno in formato decimale.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "numero_binario_con_segno",
          detail: "Il valore binario con segno a 10 bit da convertire in decimale, fornito come stringa.",
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
      d: "Converte un numero binario con segno in formato esadecimale con segno.",
      a: "Converte un numero binario in esadecimale.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "numero_binario_con_segno",
          detail: "Il valore binario con segno a 10 bit da convertire in esadecimale con segno, fornito come stringa.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifre_significative",
          detail: "Il numero di cifre significative da garantire nel risultato.",
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
      d: "Converte un numero binario con segno in formato ottale con segno.",
      a: "Converte un numero binario in ottale.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "numero_binario_con_segno",
          detail: "Il valore binario con segno a 10 bit da convertire in ottale con segno, fornito come stringa.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifre_significative",
          detail: "Il numero di cifre significative da garantire nel risultato.",
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
      d: "Converte un numero decimale in formato binario con segno.",
      a: "Converte un numero decimale in formato binario con segno.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "numero_decimale",
          detail: "Il valore decimale da convertire in binario con segno, fornito come stringa.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cifre_significative",
          detail: "Il numero di cifre significative da garantire nel risultato.",
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
      d: "Converte un numero decimale in formato esadecimale con segno.",
      a: "Converte un numero decimale in esadecimale.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "numero_decimale",
          detail: "Il valore decimale da convertire in esadecimale con segno, fornito come stringa.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cifre_significative",
          detail: "Il numero di cifre significative da garantire nel risultato.",
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
      d: "Converte un numero decimale in formato ottale con segno.",
      a: "Converte un numero decimale in formato ottale con segno.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "numero_decimale",
          detail: "Il valore decimale da convertire in ottale con segno, fornito come stringa.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cifre_significative",
          detail: "Il numero di cifre significative da garantire nel risultato.",
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
      d: "Converte un numero esadecimale con segno in formato binario con segno.",
      a: "Converte un numero esadecimale in binario.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "numero_esadecimale_con_segno",
          detail: "Il valore esadecimale con segno a 40 bit da convertire in binario con segno, fornito come stringa.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifre_significative",
          detail: "Il numero di cifre significative da garantire nel risultato.",
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
      d: "Converte un numero esadecimale con segno in formato decimale.",
      a: "Converte un numero esadecimale in decimale.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "numero_esadecimale_con_segno",
          detail: "Il valore esadecimale con segno a 40 bit da convertire in decimale, fornito come stringa.",
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
      d: "Converte un numero esadecimale con segno in formato ottale con segno.",
      a: "Converte un numero esadecimale in ottale.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "numero_esadecimale_con_segno",
          detail: "Il valore esadecimale con segno a 40 bit da convertire in ottale con segno, fornito come stringa.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifre_significative",
          detail: "Il numero di cifre significative da garantire nel risultato.",
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
      d: "Converte un numero ottale con segno in formato binario con segno.",
      a: "Converte un numero ottale in binario.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "numero_ottale_con_segno",
          detail: "Il valore ottale con segno a 30 bit da convertire in binario con segno, fornito come stringa.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifre_significative",
          detail: "Il numero di cifre significative da garantire nel risultato.",
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
      d: "Converte un numero ottale con segno in formato decimale.",
      a: "Converte un numero ottale con segno in formato decimale.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "numero_ottale_con_segno",
          detail: "Il valore ottale con segno a 30 bit da convertire in decimale, fornito come stringa.",
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
      d: "Converte un numero ottale con segno in formato esadecimale con segno.",
      a: "Converte un numero ottale in esadecimale.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "numero_ottale_con_segno",
          detail: "Il valore ottale con segno a 30 bit da convertire in esadecimale con segno, fornito come stringa.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifre_significative",
          detail: "Il numero di cifre significative da garantire nel risultato.",
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
      d: "Crea un numero complesso dati i coefficienti reale e immaginario.",
      a: "Crea un numero complesso.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "parte_reale",
          detail: "Il coefficiente reale.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "parte_immaginaria",
          detail: "Il coefficiente immaginario.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "suffisso",
          detail: "Il suffisso per il coefficiente immaginario, può essere solo 'i' o 'j'. Se omesso, verrà usato 'i'.",
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
      d: "Restituisce il coefficiente reale di un numero complesso.",
      a: "Il coefficiente reale di un numero complesso.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "numero_complesso",
          detail: "Il numero complesso, nel formato a+bi o a+bj.",
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
      d: "Restituisce il coefficiente immaginario di un numero complesso.",
      a: "Il coefficiente immaginario di un numero complesso.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "numero_complesso",
          detail: "Il numero complesso, nel formato a+bi o a+bj.",
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
      d: "Restituisce il coniugato complesso di un numero.",
      a: "Il coniugato complesso di un numero.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "numero",
          detail: "Il numero complesso di cui calcolare il coniugato.",
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
      d: "Restituisce il valore assoluto (o modulo) di un numero complesso.",
      a: "Il valore assoluto di un numero complesso.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "numero",
          detail: "Il numero complesso di cui calcolare il valore assoluto.",
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
      d: "Confronta due valori numerici, restituendo 1 se sono uguali.",
      a: "Confronta due valori numerici.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "numero1",
          detail: "Il primo numero da confrontare.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero2",
          detail: "Il secondo numero da confrontare.",
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
      d: "Restituisce la somma di una serie di numeri complessi.",
      a: "Somma di una serie di numeri complessi.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo numero complesso o intervallo da sommare.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Numeri complessi o intervalli aggiuntivi da sommare a `valore1`.",
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
      d: "Restituisce la differenza tra due numeri complessi.",
      a: "La differenza tra due numeri complessi.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "primo_numero",
          detail: "Il numero complesso da cui sottrarre secondo_numero.",
          example: "\"6+5i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "secondo_numero",
          detail: "Il numero complesso da sottrarre da primo_numero.",
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
      d: "Restituisce il risultato della moltiplicazione di una serie di numeri complessi tra loro.",
      a: "Risultato della moltiplicazione di una serie di numeri complessi tra loro.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "fattore1",
          detail: "Il primo numero o intervallo da considerare per il prodotto.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fattore2",
          detail: "Numeri complessi o intervalli aggiuntivi da considerare per il prodotto.",
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
      d: "Restituisce un numero complesso diviso per un altro.",
      a: "Un numero complesso diviso per un altro.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividendo",
          detail: "Il numero complesso da dividere.",
          example: "\"11+16i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "divisore",
          detail: "Il numero complesso per cui dividere.",
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
      d: "Restituisce l'opposto di un valore logico - `NOT(VERO)` restituisce `FALSO`; `NOT(FALSO)` restituisce `VERO`.",
      a: "Restituisce l'opposto del valore logico fornito.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "espressione_logica",
          detail: "Un'espressione o un riferimento a una cella contenente un'espressione che rappresenta un valore logico.",
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
      d: "Restituisce il valore logico `VERO`.",
      a: "Valore logico `vero`.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FALSE",
      t: 10,
      d: "Restituisce il valore logico `FALSO`.",
      a: "Valore logico `falso`.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "AND",
      t: 10,
      d: "Restituisce vero se tutti gli argomenti forniti sono logicamente veri, e falso se uno qualsiasi degli argomenti forniti è logicamente falso.",
      a: "Operatore logico `e`.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "espressione_logica1",
          detail: "Un'espressione o un riferimento a una cella contenente un'espressione che rappresenta un valore logico, ossia `VERO` o `FALSO`, oppure un'espressione che può essere convertita in un valore logico.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "espressione_logica2",
          detail: "Altre espressioni che rappresentano valori logici.",
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
      d: "Restituisce il primo argomento se non è un valore di errore, altrimenti restituisce il secondo argomento se presente, o un valore vuoto se il secondo argomento è assente.",
      a: "Il valore se non è un errore, altrimenti il secondo argomento.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da restituire se `valore` stesso non è un errore.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore_se_errore",
          detail: "Il valore restituito dalla funzione se `valore` è un errore.",
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
      d: "Restituisce un valore se un'espressione logica è `VERO` e un altro se è `FALSO`.",
      a: "Restituisce un valore in base a un'espressione logica.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "espressione_logica",
          detail: "Un'espressione o un riferimento a una cella contenente un'espressione che rappresenta un valore logico, ossia `VERO` o `FALSO`.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore_se_vero",
          detail: "Il valore restituito dalla funzione se `espressione_logica` è `VERO`.",
          example: "\"A2 is foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore_se_falso",
          detail: "Il valore restituito dalla funzione se `espressione_logica` è `FALSO`.",
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
      d: "Restituisce vero se uno qualsiasi degli argomenti forniti è logicamente vero, e falso se tutti gli argomenti forniti sono logicamente falsi.",
      a: "Operatore logico `o`.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "espressione_logica1",
          detail: "Un'espressione o un riferimento a una cella contenente un'espressione che rappresenta un valore logico, ossia `VERO` o `FALSO`, oppure un'espressione che può essere convertita in un valore logico.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "espressione_logica2",
          detail: "Altre espressioni che restituiscono valori logici.",
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
      d: "Restituisce `VERO` se due valori specificati non sono uguali e `FALSO` altrimenti. Equivale all'operatore `!=`.",
      a: "Diverso.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Il valore da verificare rispetto a `valore1` per la disuguaglianza.",
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
      d: "Restituisce `VERO` se due valori specificati sono uguali e `FALSO` altrimenti. Equivale all'operatore `==`.",
      a: "Uguale.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo valore.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Il valore da verificare rispetto a `valore1` per l'uguaglianza.",
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
      d: "Restituisce `VERO` se il primo argomento è strettamente maggiore del secondo, e `FALSO` altrimenti. Equivale all'operatore `>`.",
      a: "Strettamente maggiore di.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore1",
          detail: "Il valore da verificare come maggiore di `valore2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Il secondo valore.",
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
      d: "Restituisce `VERO` se il primo argomento è maggiore o uguale al secondo, e `FALSO` altrimenti. Equivale all'operatore `>=`.",
      a: "Maggiore o uguale a.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore1",
          detail: "Il valore da verificare come maggiore o uguale a `valore2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Il secondo valore.",
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
      d: "Restituisce `VERO` se il primo argomento è strettamente minore del secondo, e `FALSO` altrimenti. Equivale all'operatore `<`.",
      a: "Minore di.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore1",
          detail: "Il valore da verificare come minore di `valore2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Il secondo valore.",
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
      d: "Restituisce `VERO` se il primo argomento è minore o uguale al secondo, e `FALSO` altrimenti. Equivale all'operatore `<=`.",
      a: "Minore o uguale a.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore1",
          detail: "Il valore da verificare come minore o uguale a `valore2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Il secondo valore.",
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
      d: "Restituisce la somma di due numeri. Equivale all'operatore `+`.",
      a: "Somma di due numeri",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore1",
          detail: "Il primo addendo.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Il secondo addendo.",
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
      d: "Restituisce la differenza tra due numeri. Equivale all'operatore `-`.",
      a: "Differenza tra due numeri",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore1",
          detail: "Il minuendo, ovvero il numero da cui sottrarre.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Il sottraendo, ovvero il numero da sottrarre da `valore1`.",
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
      d: "Restituisce il prodotto di due numeri. Equivale all'operatore `*`.",
      a: "Prodotto di due numeri",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "fattore1",
          detail: "Il primo moltiplicando.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fattore2",
          detail: "Il secondo moltiplicando.",
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
      d: "Restituisce un numero diviso per un altro. Equivale all'operatore `/`.",
      a: "Un numero diviso per un altro",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividendo",
          detail: "Il numero da dividere.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisore",
          detail: "Il numero per cui dividere.",
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
      d: "Restituisce la concatenazione di due valori. Equivale all'operatore `&`.",
      a: "Concatenazione di due valori",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valore1",
          detail: "Il valore a cui verrà aggiunto `valore2`.",
          example: "\"de\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Il valore da aggiungere a `valore1`.",
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
      d: "Restituisce un valore interpretato come percentuale; ossia, `UNARY_PERCENT(100)` equivale a `1`.",
      a: "Valore interpretato come percentuale.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "percentuale",
          detail: "Il valore da interpretare come percentuale.",
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
      d: "Concatena stringhe tra loro.",
      a: "Concatena stringhe tra loro.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "stringa1",
          detail: "La stringa iniziale.",
          example: "\"Super\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "stringa2",
          detail: "Altre stringhe da aggiungere in sequenza.",
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
      d: "Restituisce il valore numerico Unicode del primo carattere nella stringa fornita.",
      a: "Valore numerico unicode di un carattere.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "stringa",
          detail: "La stringa il cui valore Unicode del primo carattere verrà restituito.",
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
      d: "Converte un numero in un carattere secondo la tabella Unicode corrente.",
      a: "Ottiene il carattere associato a un numero.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "numero_tabella",
          detail: "Il numero del carattere da cercare nella tabella Unicode corrente, in formato decimale.",
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
      d: "Calcola il valore di un numero romano.",
      a: "Calcola il valore di un numero romano.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "numero_romano",
          detail: "Il numero romano da formattare, il cui valore deve essere compreso tra 1 e 3999, inclusi.",
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
      d: "Formatta un numero in numeri romani.",
      a: "Formatta un numero in numeri romani.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "numero",
          detail: "Il numero da formattare, compreso tra 1 e 3999, inclusi.",
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
      d: "Estrae le sottostringhe corrispondenti secondo un'espressione regolare.",
      a: "Estrae sottostringhe corrispondenti con un'espressione regolare.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "testo",
          detail: "Il testo di input.",
          example: "\"Needle in a haystack\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "espressione_regolare",
          detail: "Verrà restituita la prima parte di `testo` che corrisponde a questa espressione.",
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
      d: "Se un testo corrisponde a un'espressione regolare.",
      a: "Se un testo corrisponde a un'espressione regolare.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "testo",
          detail: "Il testo da verificare rispetto all'espressione regolare.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "espressione_regolare",
          detail: "L'espressione regolare rispetto a cui verificare il testo.",
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
      d: "Sostituisce parte di una stringa di testo con una stringa di testo diversa usando espressioni regolari.",
      a: "Sostituisce testo con espressioni regolari.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "testo",
          detail: "Il testo, una parte del quale verrà sostituita.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "espressione_regolare",
          detail: "L'espressione regolare. Tutte le occorrenze corrispondenti in `testo` verranno sostituite.",
          example: "\"S.*d\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "sostituzione",
          detail: "Il testo che verrà inserito nel testo originale.",
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
      d: "Restituisce gli argomenti stringa come testo, o una stringa vuota se il valore non è testo.",
      a: "Argomenti stringa come testo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "L'argomento da convertire in testo.",
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
      d: "Formatta un numero con un numero fisso di posizioni decimali.",
      a: "Formatta un numero con un numero fisso di posizioni decimali.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "numero",
          detail: "Il numero da formattare.",
          example: "3.141592653",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_decimali",
          detail: "Il numero di posizioni decimali da visualizzare nel risultato.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sopprimere_separatore",
          detail: "Se sopprimere o meno il separatore delle migliaia usato in alcune impostazioni internazionali (ad es. `1.000` diventa `1000`). I separatori saranno presenti se questo valore è 0 o omesso, assenti altrimenti.",
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
      d: "Restituisce la posizione in cui una stringa viene trovata per la prima volta all'interno di un testo, tenendo conto delle maiuscole e minuscole. Restituisce `#VALORE!` se la stringa non viene trovata.",
      a: "Prima posizione di una stringa trovata nel testo, con distinzione tra maiuscole e minuscole.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "da_cercare",
          detail: "La stringa da cercare all'interno di `testo_da_cercare`.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "testo_da_cercare",
          detail: "Il testo in cui cercare la prima occorrenza di `cerca`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partire_da",
          detail: "Il carattere all'interno di `testo_da_cercare` da cui iniziare la ricerca.",
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
      d: "Restituisce la posizione in cui una stringa viene trovata per la prima volta all'interno di un testo, contando ogni doppio carattere come 2.",
      a: "Posizione in cui una stringa viene trovata per la prima volta nel testo (binaria).",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "da_cercare",
          detail: "La stringa da cercare all'interno di `testo_da_cercare`.",
          example: "\"new\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "testo_da_cercare",
          detail: "Il testo in cui cercare la prima occorrenza di `cerca`.",
          example: "\"new year\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partire_da",
          detail: "Il carattere all'interno di `testo_da_cercare` da cui iniziare la ricerca.",
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
      d: "Concatena gli elementi di uno o più array unidimensionali usando un delimitatore specificato.",
      a: "Concatena elementi di array con un delimitatore.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "delimitatore",
          detail: "Il carattere o la stringa da inserire tra ogni valore concatenato.",
          example: "\" and-a \"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore_o_matrice1",
          detail: "Il valore o i valori da aggiungere usando `delimitatore`.",
          example: "{1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore_o_matrice2",
          detail: "Altri valori da aggiungere usando `delimitatore`.",
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
      d: "Restituisce una sottostringa dall'inizio di una stringa specificata.",
      a: "Sottostringa dall'inizio di una stringa specificata.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "stringa",
          detail: "La stringa da cui verrà restituita la parte sinistra.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_caratteri",
          detail: "Il numero di caratteri da restituire dal lato sinistro di `stringa`.",
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
      d: "Restituisce una sottostringa dalla fine di una stringa specificata.",
      a: "Una sottostringa dalla fine di una stringa specificata.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "stringa",
          detail: "La stringa da cui verrà restituita la parte destra.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_caratteri",
          detail: "Il numero di caratteri da restituire dal lato destro di `stringa`.",
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
      d: "Restituisce un segmento di una stringa.",
      a: "Un segmento di una stringa.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "stringa",
          detail: "La stringa da cui estrarre un segmento.",
          example: "\"get this\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partire_da",
          detail: "L'indice, da sinistra, di `stringa` da cui iniziare l'estrazione. Il primo carattere in `stringa` ha indice 1.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lunghezza_estrazione",
          detail: "La lunghezza del segmento da estrarre.",
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
      d: "Restituisce la lunghezza di una stringa.",
      a: "Lunghezza di una stringa.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "testo",
          detail: "La stringa di cui verrà restituita la lunghezza.",
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
      d: "Restituisce la lunghezza di una stringa in byte.",
      a: "Lunghezza di una stringa in byte.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "testo",
          detail: "La stringa di cui verrà restituita la lunghezza.",
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
      d: "Converte una stringa specificata in minuscolo.",
      a: "Converte una stringa specificata in minuscolo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "testo",
          detail: "La stringa da convertire in minuscolo.",
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
      d: "Converte una stringa specificata in maiuscolo.",
      a: "Converte una stringa specificata in maiuscolo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "testo",
          detail: "La stringa da convertire in maiuscolo.",
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
      d: "Verifica se due stringhe sono identiche.",
      a: "Verifica se due stringhe sono identiche.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "stringa1",
          detail: "La prima stringa da confrontare.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "stringa2",
          detail: "La seconda stringa da confrontare.",
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
      d: "Sostituisce parte di una stringa di testo con una stringa di testo diversa.",
      a: "Sostituisce parte di una stringa di testo con un testo diverso.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "testo",
          detail: "Il testo, una parte del quale verrà sostituita.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "posizione",
          detail: "La posizione in cui inizierà la sostituzione (a partire da 1).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lunghezza",
          detail: "Il numero di caratteri del testo da sostituire.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nuovo_testo",
          detail: "Il testo che verrà inserito nel testo originale.",
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
      d: "Restituisce il testo specificato ripetuto un numero di volte.",
      a: "Testo specificato ripetuto un numero di volte.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "testo_da_ripetere",
          detail: "Il carattere o la stringa da ripetere.",
          example: "\"ha\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_ripetizioni",
          detail: "Il numero di volte in cui `testo_da_ripetere` deve apparire nel valore restituito.",
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
      d: "Restituisce la posizione in cui una stringa viene trovata per la prima volta all'interno di un testo, ignorando le maiuscole e minuscole. Restituisce `#VALORE!` se la stringa non viene trovata.",
      a: "Prima posizione di una stringa trovata nel testo, ignorando le maiuscole.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "da_cercare",
          detail: "La stringa da cercare all'interno di `testo_da_cercare`.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "testo_da_cercare",
          detail: "Il testo in cui cercare la prima occorrenza di `cerca`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partire_da",
          detail: "Il carattere all'interno di `testo_da_cercare` da cui iniziare la ricerca.",
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
      d: "Sostituisce il testo esistente con un nuovo testo in una stringa.",
      a: "Sostituisce il testo esistente con un nuovo testo in una stringa.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "testo_da_cercare",
          detail: "Il testo all'interno del quale cercare e sostituire.",
          example: "\"search for it\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "da_cercare",
          detail: "La stringa da cercare all'interno di `testo_da_cercare`.",
          example: "\"search for\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "sostituire_con",
          detail: "La stringa che sostituirà `cerca`.",
          example: "\"Google\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_occorrenza",
          detail: "L'occorrenza di `cerca` all'interno di `testo_da_cercare` da sostituire con `sostituisci_con`. Per impostazione predefinita, vengono sostituite tutte le occorrenze di `cerca`; tuttavia, se `numero_occorrenza` è specificato, viene sostituita solo l'occorrenza indicata di `cerca`.",
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
      d: "Restituisce il testo con i caratteri ASCII non stampabili rimossi.",
      a: "Rimuove i caratteri non stampabili da un testo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "testo",
          detail: "Il testo di cui verranno rimossi i caratteri non stampabili.",
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
      d: "Converte un numero in testo secondo un formato specificato.",
      a: "Formatta un numero in testo.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "numero",
          detail: "Il numero, la data o l'ora da formattare.",
          example: "1.23",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "formato",
          detail: "Il modello secondo cui formattare il numero, racchiuso tra virgolette.",
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
      d: "Rimuove gli spazi iniziali, finali e ripetuti nel testo.",
      a: "Rimuove i caratteri spazio.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "testo",
          detail: "Il testo o il riferimento a una cella contenente il testo da ripulire.",
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
      d: "Converte in un numero una stringa in uno qualsiasi dei formati di data, ora o numero riconosciuti da Google Sheets.",
      a: "Converte una stringa di data/ora/numero in un numero.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "testo",
          detail: "La stringa contenente il valore da convertire.",
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
      d: "Rende maiuscola la prima lettera di ogni parola in una stringa specificata.",
      a: "Rende maiuscola la prima lettera di ogni parola in una stringa specificata.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "testo_da_capitalizzare",
          detail: "Il testo che verrà restituito con la prima lettera di ogni parola maiuscola e tutte le altre lettere minuscole.",
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
      d: "Converte un valore numerico in un'altra unità di misura.",
      a: "Conversione di unità per i numeri.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore numerico in `unità_iniziale` da convertire in `unità_finale`.",
          example: "5.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unità_iniziale",
          detail: "L'unità di partenza, l'unità attualmente assegnata a `valore`.",
          example: "\"g\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "unità_finale",
          detail: "L'unità di misura in cui convertire l'argomento `valore`.",
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
      d: "Calcola la somma delle differenze dei quadrati dei valori in due array.",
      a: "Somma delle differenze dei quadrati.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrice_x",
          detail: "L'array o l'intervallo di valori i cui quadrati verranno ridotti dai quadrati delle voci corrispondenti in `array_y` e sommati insieme.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrice_y",
          detail: "L'array o l'intervallo di valori i cui quadrati verranno sottratti dai quadrati delle voci corrispondenti in `array_x` e sommati insieme.",
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
      d: "Calcola la somma delle somme dei quadrati dei valori in due array.",
      a: "Somma delle somme dei quadrati.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrice_x",
          detail: "L'array o l'intervallo di valori i cui quadrati verranno sommati ai quadrati delle voci corrispondenti in `array_y` e sommati insieme.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrice_y",
          detail: "L'array o l'intervallo di valori i cui quadrati verranno sommati ai quadrati delle voci corrispondenti in `array_x` e sommati insieme.",
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
      d: "Calcola la somma dei quadrati delle differenze dei valori in due array.",
      a: "Somma dei quadrati delle differenze.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrice_x",
          detail: "L'array o l'intervallo di valori che verranno ridotti dalle voci corrispondenti in `array_y`, elevati al quadrato e sommati insieme.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrice_y",
          detail: "L'array o l'intervallo di valori che verranno sottratti dalle voci corrispondenti in `array_x`, il risultato elevato al quadrato e tutti questi risultati sommati insieme.",
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
      d: "Traspone le righe e le colonne di un array o intervallo di celle.",
      a: "Traspone le righe e le colonne di un array.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "matrice_o_intervallo",
          detail: "L'array o l'intervallo le cui righe e colonne verranno scambiate.",
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
      d: "Dati dati parziali su una tendenza lineare, adatta una tendenza lineare ideale usando il metodo dei minimi quadrati e/o prevede ulteriori valori.",
      a: "Adatta i punti a una tendenza lineare tramite minimi quadrati.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "dati_y_noti",
          detail: "L'array o l'intervallo contenente i valori dipendenti (y) già noti, usati per adattare una tendenza lineare ideale.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x_noti",
          detail: "I valori della o delle variabili indipendenti corrispondenti a `dati_y_noti`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nuovi_dati_x",
          detail: "I punti dati per cui restituire i valori `y` sulla curva ideale adattata.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Data una forma lineare generale `y = m*x+b` per un adattamento della curva, calcola `b` se `VERO` oppure impone che `b` sia `0` e calcola solo i valori `m` se `FALSO`, ossia impone che la curva adattata passi per l'origine.",
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
      d: "Calcola la distribuzione di frequenza di un array a una colonna in classi specificate.",
      a: "La distribuzione di frequenza di un array.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dati",
          detail: "L'array o l'intervallo contenente i valori da contare.",
          example: "A2:A40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "classi",
          detail: "L'array o l'intervallo contenente l'insieme delle classi.",
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
      d: "Dati dati parziali su una tendenza di crescita esponenziale, adatta una tendenza di crescita esponenziale ideale e/o prevede ulteriori valori.",
      a: "Adatta i punti a una tendenza di crescita esponenziale.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "dati_y_noti",
          detail: "L'array o l'intervallo contenente i valori dipendenti (y) già noti, usati per adattare una curva di crescita esponenziale ideale.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x_noti",
          detail: "I valori della o delle variabili indipendenti corrispondenti a `dati_y_noti`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nuovi_dati_x",
          detail: "I punti dati per cui restituire i valori `y` sulla curva ideale adattata.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Data una forma esponenziale generale `y = b*m^x` per un adattamento della curva, calcola `b` se `VERO` oppure impone che `b` sia `1` e calcola solo i valori `m` se `FALSO`.",
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
      d: "Dati dati parziali su una tendenza lineare, calcola vari parametri sulla tendenza lineare ideale usando il metodo dei minimi quadrati.",
      a: "Tendenza lineare di adattamento ottimale tramite minimi quadrati.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "dati_y_noti",
          detail: "L'array o l'intervallo contenente i valori dipendenti (y) già noti, usati per adattare una tendenza lineare ideale.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x_noti",
          detail: "I valori della o delle variabili indipendenti corrispondenti a `dati_y_noti`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "calcolare_b",
          detail: "Data una forma lineare `y = m*x+b`, calcola l'intercetta y (`b`) se `VERO`. Altrimenti, impone che `b` sia `0` e calcola solo i valori `m` se `FALSO`, ossia impone che la curva adattata passi per l'origine.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "dettagliato",
          detail: "Un flag che specifica se restituire statistiche di regressione aggiuntive oppure solo i coefficienti lineari e l'intercetta y (predefinito).",
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
      d: "Dati dati parziali su una curva di crescita esponenziale, calcola vari parametri sulla curva di crescita esponenziale ideale di adattamento ottimale.",
      a: "Curva di crescita esponenziale di adattamento ottimale.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "dati_y_noti",
          detail: "L'array o l'intervallo contenente i valori dipendenti (y) già noti, usati per adattare una curva di crescita esponenziale ideale.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x_noti",
          detail: "I valori della o delle variabili indipendenti corrispondenti a `dati_y_noti`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Data una forma esponenziale generale `y = b*m^x` per un adattamento della curva, calcola `b` se `VERO` oppure impone che `b` sia `1` e calcola solo i valori `m` se `FALSO`.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "dettagliato",
          detail: "Un flag che specifica se restituire statistiche di regressione aggiuntive oppure solo il coefficiente e gli esponenti calcolati.",
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
      d: "Restituisce il determinante di matrice di una matrice quadrata specificata come array o intervallo.",
      a: "Determinante di matrice di una matrice quadrata.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "matrice_quadrata",
          detail: "Un array o intervallo con un numero uguale di righe e colonne che rappresenta una matrice di cui verrà calcolato il determinante.",
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
      d: "Restituisce l'inversa moltiplicativa di una matrice quadrata specificata come array o intervallo.",
      a: "Inversa moltiplicativa di una matrice quadrata.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "matrice_quadrata",
          detail: "Un array o intervallo con un numero uguale di righe e colonne che rappresenta una matrice di cui verrà calcolata l'inversa moltiplicativa.",
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
      d: "Calcola il prodotto matriciale di due matrici specificate come array o intervalli.",
      a: "Il prodotto matriciale di due matrici.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrice1",
          detail: "La prima matrice nell'operazione di moltiplicazione di matrici, rappresentata come array o intervallo.",
          example: "A1:B3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrice2",
          detail: "La seconda matrice nell'operazione di moltiplicazione di matrici, rappresentata come array o intervallo.",
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
      d: "Calcola la somma dei prodotti delle voci corrispondenti in due array o intervalli di uguale dimensione.",
      a: "Somma dei prodotti degli elementi in due array.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "matrice1",
          detail: "Il primo array o intervallo le cui voci verranno moltiplicate per le voci corrispondenti nel secondo array o intervallo.",
          example: "A2:C5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrice2",
          detail: "Il secondo array o intervallo le cui voci verranno moltiplicate per le voci corrispondenti nel primo array o intervallo.",
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
      d: "Verifica se un valore è una formula.",
      a: "Se un valore è una formula.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "cella",
          detail: "La cella da verificare come contenente una formula.",
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
      d: "Restituisce le informazioni richieste sulla cella specificata.",
      a: "Ottiene informazioni su una cella.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tipo_informazione",
          detail: "Il tipo di informazione richiesta (vedere l'articolo per i tipi disponibili).",
          example: "\"type\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "riferimento",
          detail: "Il riferimento alla cella.",
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
      d: "Restituisce l'errore \"valore non disponibile\", `#N/D`.",
      a: "L'errore `#N/D`.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "ERROR_TYPE",
      t: 15,
      d: "Restituisce un numero corrispondente al valore di errore in una cella diversa.",
      a: "Valore di errore di una cella (come numero).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "riferimento",
          detail: "La cella per cui trovare il numero di errore, sebbene sia possibile fornire anche direttamente il valore di errore.",
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
      d: "Verifica se la cella a cui si fa riferimento è vuota.",
      a: "Se la cella a cui si fa riferimento è vuota.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Riferimento alla cella che verrà verificata per la vacuità.",
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
      d: "Verifica se un valore è un errore diverso da `#N/D`.",
      a: "Se un valore è un errore diverso da `#n/d`.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da verificare come tipo di errore diverso da `#N/D`.",
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
      d: "Verifica se un valore è un errore.",
      a: "Se un valore è un errore.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da verificare come tipo di errore.",
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
      d: "Verifica se un valore è `VERO` o `FALSO`.",
      a: "Se un valore è `vero` o `falso`.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da verificare come logico `VERO` o `FALSO`.",
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
      d: "Verifica se un valore è l'errore `#N/D`.",
      a: "Se un valore è l'errore `#n/d`.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da confrontare con il valore di errore `#N/D`.",
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
      d: "Verifica se un valore non è testuale.",
      a: "Se un valore non è testuale.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da verificare.",
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
      d: "Verifica se un valore è un numero.",
      a: "Se un valore è un numero.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da verificare come numero.",
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
      d: "Verifica se un valore è un riferimento di cella valido.",
      a: "Se un valore è un riferimento di cella valido.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da verificare come riferimento di cella.",
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
      d: "Verifica se un valore è testo.",
      a: "Se un valore è testo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore da verificare come testo.",
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
      d: "Restituisce un numero associato al tipo di dati passato alla funzione.",
      a: "Ottiene il tipo di un valore.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "Il valore di cui determinare il tipo.",
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
      d: "Restituisce l'argomento fornito come numero. Il testo viene convertito in 0 e gli errori vengono restituiti così come sono.",
      a: "Argomento fornito come numero.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "L'argomento da convertire in numero.",
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
      d: "Converte un numero fornito in una data.",
      a: "Converte un numero fornito in una data.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "L'argomento o il riferimento a una cella da convertire in data.",
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
      d: "Converte una data/ora, percentuale, valuta o altro valore numerico formattato fornito in un numero puro senza formattazione.",
      a: "Converte qualsiasi valore numerico in un numero puro.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valore",
          detail: "L'argomento o il riferimento a una cella da convertire in un numero puro.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione TO_TEXT.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione TO_DOLLARS.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione TO_PERCENT.",
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
          name: "campo",
          detail: "Parametro `campo` della funzione DGET.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteri",
          detail: "Parametro `criteri` della funzione DGET.",
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
          name: "campo",
          detail: "Parametro `campo` della funzione DMAX.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteri",
          detail: "Parametro `criteri` della funzione DMAX.",
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
          name: "campo",
          detail: "Parametro `campo` della funzione DMIN.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteri",
          detail: "Parametro `criteri` della funzione DMIN.",
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
          name: "campo",
          detail: "Parametro `campo` della funzione DAVERAGE.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteri",
          detail: "Parametro `criteri` della funzione DAVERAGE.",
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
          name: "campo",
          detail: "Parametro `campo` della funzione DCOUNT.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteri",
          detail: "Parametro `criteri` della funzione DCOUNT.",
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
          name: "campo",
          detail: "Parametro `campo` della funzione DCOUNTA.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteri",
          detail: "Parametro `criteri` della funzione DCOUNTA.",
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
          name: "campo",
          detail: "Parametro `campo` della funzione DPRODUCT.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteri",
          detail: "Parametro `criteri` della funzione DPRODUCT.",
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
          name: "campo",
          detail: "Parametro `campo` della funzione DSTDEV.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteri",
          detail: "Parametro `criteri` della funzione DSTDEV.",
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
          name: "campo",
          detail: "Parametro `campo` della funzione DSTDEVP.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteri",
          detail: "Parametro `criteri` della funzione DSTDEVP.",
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
          name: "campo",
          detail: "Parametro `campo` della funzione DSUM.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteri",
          detail: "Parametro `criteri` della funzione DSUM.",
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
          name: "campo",
          detail: "Parametro `campo` della funzione DVAR.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteri",
          detail: "Parametro `criteri` della funzione DVAR.",
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
          name: "campo",
          detail: "Parametro `campo` della funzione DVARP.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criteri",
          detail: "Parametro `criteri` della funzione DVARP.",
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
          name: "Numero identificativo",
          example: "A1",
          detail: "Parametro `Numero identificativo` della funzione AGE_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Scadenza",
          example: "\"2017-10-01\"",
          detail: "Parametro `Scadenza` della funzione AGE_BY_IDCARD.",
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
          name: "Numero identificativo",
          example: "\"31033519900101XXXX\"",
          detail: "Parametro `Numero identificativo` della funzione SEX_BY_IDCARD.",
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
          name: "Numero identificativo",
          example: "\"31033519900101XXXX\"",
          detail: "Parametro `Numero identificativo` della funzione BIRTHDAY_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Formato data di nascita",
          example: "0",
          detail: "Parametro `Formato data di nascita` della funzione BIRTHDAY_BY_IDCARD.",
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
          name: "Numero identificativo",
          example: "\"31033519900101XXXX\"",
          detail: "Parametro `Numero identificativo` della funzione PROVINCE_BY_IDCARD.",
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
          name: "Numero identificativo",
          example: "\"31033519900101XXXX\"",
          detail: "Parametro `Numero identificativo` della funzione CITY_BY_IDCARD.",
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
          name: "Numero identificativo",
          example: "\"31033519900101XXXX\"",
          detail: "Parametro `Numero identificativo` della funzione STAR_BY_IDCARD.",
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
          name: "Numero identificativo",
          example: "\"31033519900101XXXX\"",
          detail: "Parametro `Numero identificativo` della funzione ANIMAL_BY_IDCARD.",
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
          name: "Numero identificativo",
          example: "\"31033519900101XXXX\"",
          detail: "Parametro `Numero identificativo` della funzione ISIDCARD.",
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
          name: "Testo",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parametro `Testo` della funzione DM_TEXT_CUTWORD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Modalità di segmentazione parole",
          example: "0",
          detail: "Parametro `Modalità di segmentazione parole` della funzione DM_TEXT_CUTWORD.",
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
          name: "Testo",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parametro `Testo` della funzione DM_TEXT_TFIDF.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Numero di parole chiave",
          example: "20",
          detail: "Parametro `Numero di parole chiave` della funzione DM_TEXT_TFIDF.",
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
          name: "Testo",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parametro `Testo` della funzione DM_TEXT_TEXTRANK.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Numero di parole chiave",
          example: "20",
          detail: "Parametro `Numero di parole chiave` della funzione DM_TEXT_TEXTRANK.",
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
          name: "Codice azionario",
          example: "\"000001\"",
          detail: "Parametro `Codice azionario` della funzione DATA_CN_STOCK_CLOSE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Data",
          example: "2015-01-08",
          detail: "Parametro `Data` della funzione DATA_CN_STOCK_CLOSE.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo di rettifica ex diritti",
          example: "0",
          detail: "Parametro `Tipo di rettifica ex diritti` della funzione DATA_CN_STOCK_CLOSE.",
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
          name: "Codice azionario",
          example: "\"000001\"",
          detail: "Parametro `Codice azionario` della funzione DATA_CN_STOCK_OPEN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Data",
          example: "2015-01-08",
          detail: "Parametro `Data` della funzione DATA_CN_STOCK_OPEN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo di rettifica ex diritti",
          example: "0",
          detail: "Parametro `Tipo di rettifica ex diritti` della funzione DATA_CN_STOCK_OPEN.",
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
          name: "Codice azionario",
          example: "\"000001\"",
          detail: "Parametro `Codice azionario` della funzione DATA_CN_STOCK_MAX.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Data",
          example: "2015-01-08",
          detail: "Parametro `Data` della funzione DATA_CN_STOCK_MAX.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo di rettifica ex diritti",
          example: "0",
          detail: "Parametro `Tipo di rettifica ex diritti` della funzione DATA_CN_STOCK_MAX.",
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
          name: "Codice azionario",
          example: "\"000001\"",
          detail: "Parametro `Codice azionario` della funzione DATA_CN_STOCK_MIN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Data",
          example: "2015-01-08",
          detail: "Parametro `Data` della funzione DATA_CN_STOCK_MIN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo di rettifica ex diritti",
          example: "0",
          detail: "Parametro `Tipo di rettifica ex diritti` della funzione DATA_CN_STOCK_MIN.",
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
          name: "Codice azionario",
          example: "\"000001\"",
          detail: "Parametro `Codice azionario` della funzione DATA_CN_STOCK_VOLUMN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Data",
          example: "2015-01-08",
          detail: "Parametro `Data` della funzione DATA_CN_STOCK_VOLUMN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo di rettifica ex diritti",
          example: "0",
          detail: "Parametro `Tipo di rettifica ex diritti` della funzione DATA_CN_STOCK_VOLUMN.",
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
          name: "Codice azionario",
          example: "\"000001\"",
          detail: "Parametro `Codice azionario` della funzione DATA_CN_STOCK_AMOUNT.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Data",
          example: "2015-01-08",
          detail: "Parametro `Data` della funzione DATA_CN_STOCK_AMOUNT.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo di rettifica ex diritti",
          example: "0",
          detail: "Parametro `Tipo di rettifica ex diritti` della funzione DATA_CN_STOCK_AMOUNT.",
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
          name: "valore",
          example: "\"1990-01-01\"",
          detail: "Parametro `valore` della funzione ISDATE.",
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
          name: "Intervallo",
          example: "A1:A20",
          detail: "Parametro `Intervallo` della funzione LINESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore della linea",
          example: "#2ec7c9",
          detail: "Parametro `Colore della linea` della funzione LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Spessore linea",
          example: "1",
          detail: "Parametro `Spessore linea` della funzione LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Linea ausiliaria",
          example: "avg",
          detail: "Parametro `Linea ausiliaria` della funzione LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore della linea ausiliaria",
          example: "#000",
          detail: "Parametro `Colore della linea ausiliaria` della funzione LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Indicatore massimo",
          example: "#fc5c5c",
          detail: "Parametro `Indicatore massimo` della funzione LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Indicatore minimo",
          example: "#fc5c5c",
          detail: "Parametro `Indicatore minimo` della funzione LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Dimensione indicatore",
          example: "1.5",
          detail: "Parametro `Dimensione indicatore` della funzione LINESPLINES.",
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
          name: "Intervallo",
          example: "A1:A20",
          detail: "Parametro `Intervallo` della funzione AREASPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore della linea",
          example: "#2ec7c9",
          detail: "Parametro `Colore della linea` della funzione AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore di riempimento",
          example: "#CCF3F4",
          detail: "Parametro `Colore di riempimento` della funzione AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Spessore linea",
          example: "1",
          detail: "Parametro `Spessore linea` della funzione AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Linea ausiliaria",
          example: "avg",
          detail: "Parametro `Linea ausiliaria` della funzione AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore della linea ausiliaria",
          example: "#000",
          detail: "Parametro `Colore della linea ausiliaria` della funzione AREASPLINES.",
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
          name: "Intervallo",
          example: "A1:A20",
          detail: "Parametro `Intervallo` della funzione COLUMNSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervallo barre",
          example: "1",
          detail: "Parametro `Intervallo barre` della funzione COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore della barra",
          example: "#fc5c5c",
          detail: "Parametro `Colore della barra` della funzione COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore barre negative",
          example: "#97b552",
          detail: "Parametro `Colore barre negative` della funzione COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Massimo",
          example: "100",
          detail: "Parametro `Massimo` della funzione COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Tavolozza colori",
          example: "#97b552",
          detail: "Parametro `Tavolozza colori` della funzione COLUMNSPLINES.",
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
          name: "Intervallo",
          example: "A1:A20",
          detail: "Parametro `Intervallo` della funzione STACKCOLUMNSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Impila per colonna",
          example: "1",
          detail: "Parametro `Impila per colonna` della funzione STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervallo barre",
          example: "1",
          detail: "Parametro `Intervallo barre` della funzione STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Massimo",
          example: "100",
          detail: "Parametro `Massimo` della funzione STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Tavolozza colori",
          example: "#97b552",
          detail: "Parametro `Tavolozza colori` della funzione STACKCOLUMNSPLINES.",
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
          name: "Intervallo",
          example: "A1:A20",
          detail: "Parametro `Intervallo` della funzione BARSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervallo barre",
          example: "1",
          detail: "Parametro `Intervallo barre` della funzione BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore della barra",
          example: "#fc5c5c",
          detail: "Parametro `Colore della barra` della funzione BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore barre negative",
          example: "#97b552",
          detail: "Parametro `Colore barre negative` della funzione BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Massimo",
          example: "100",
          detail: "Parametro `Massimo` della funzione BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Tavolozza colori",
          example: "#97b552",
          detail: "Parametro `Tavolozza colori` della funzione BARSPLINES.",
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
          name: "Intervallo",
          example: "A1:A20",
          detail: "Parametro `Intervallo` della funzione STACKBARSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Impila per colonna",
          example: "1",
          detail: "Parametro `Impila per colonna` della funzione STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervallo barre",
          example: "1",
          detail: "Parametro `Intervallo barre` della funzione STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Massimo",
          example: "100",
          detail: "Parametro `Massimo` della funzione STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Tavolozza colori",
          example: "#97b552",
          detail: "Parametro `Tavolozza colori` della funzione STACKBARSPLINES.",
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
          name: "Intervallo",
          example: "A1:A20",
          detail: "Parametro `Intervallo` della funzione DISCRETESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Soglia di segmentazione",
          example: "1",
          detail: "Parametro `Soglia di segmentazione` della funzione DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore sopra soglia",
          example: "#2ec7c9",
          detail: "Parametro `Colore sopra soglia` della funzione DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore sotto soglia",
          example: "#fc5c5c",
          detail: "Parametro `Colore sotto soglia` della funzione DISCRETESPLINES.",
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
          name: "Intervallo",
          example: "A1:A20",
          detail: "Parametro `Intervallo` della funzione TRISTATESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervallo barre",
          example: "1",
          detail: "Parametro `Intervallo barre` della funzione TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore della barra",
          example: "#fc5c5c",
          detail: "Parametro `Colore della barra` della funzione TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore barre negative",
          example: "#97b552",
          detail: "Parametro `Colore barre negative` della funzione TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore barre valore zero",
          example: "#999",
          detail: "Parametro `Colore barre valore zero` della funzione TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Tavolozza colori",
          example: "#97b552",
          detail: "Parametro `Tavolozza colori` della funzione TRISTATESPLINES.",
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
          name: "Intervallo",
          example: "A1:A20",
          detail: "Parametro `Intervallo` della funzione PIESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Angolo di rotazione",
          example: "0",
          detail: "Parametro `Angolo di rotazione` della funzione PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bordo",
          example: "0",
          detail: "Parametro `bordo` della funzione PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Colore del bordo",
          example: "#000",
          detail: "Parametro `Colore del bordo` della funzione PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Tavolozza colori",
          example: "#97b552",
          detail: "Parametro `Tavolozza colori` della funzione PIESPLINES.",
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
          name: "Intervallo",
          example: "A1:A20",
          detail: "Parametro `Intervallo` della funzione BOXSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Coefficiente valori anomali",
          example: "1.5",
          detail: "Parametro `Coefficiente valori anomali` della funzione BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Valore obiettivo",
          example: "10",
          detail: "Parametro `Valore obiettivo` della funzione BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Dimensione punti",
          example: "1.5",
          detail: "Parametro `Dimensione punti` della funzione BOXSPLINES.",
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
          name: "Obiettivo",
          example: "10",
          detail: "Parametro `Obiettivo` della funzione BULLETSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "raggiunto",
          example: "8",
          detail: "Parametro `raggiunto` della funzione BULLETSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Valore di confronto",
          example: "12",
          detail: "Parametro `Valore di confronto` della funzione BULLETSPLINES.",
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
          name: "configurazione",
          example: "PIESPLINES(A1:A20)",
          detail: "Parametro `configurazione` della funzione COMPOSESPLINES.",
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
          name: "intervallo",
          detail: "Parametro `intervallo` della funzione SORT.",
          example: "A2:A17",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonna_ordinamento",
          detail: "Parametro `colonna_ordinamento` della funzione SORT.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "è_crescente",
          detail: "Parametro `è_crescente` della funzione SORT.",
          example: "-1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonna_ordinamento2",
          detail: "Parametro `colonna_ordinamento2` della funzione SORT.",
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
          name: "intervallo",
          detail: "Parametro `intervallo` della funzione FILTER.",
          example: "A5:D20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "condizione1",
          detail: "Parametro `condizione1` della funzione FILTER.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "condizione2",
          detail: "Parametro `condizione2` della funzione FILTER.",
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
          name: "intervallo",
          detail: "Parametro `intervallo` della funzione UNIQUE.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "per_colonna",
          detail: "Parametro `per_colonna` della funzione UNIQUE.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "una_sola_volta",
          detail: "Parametro `una_sola_volta` della funzione UNIQUE.",
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
          name: "righe",
          detail: "Parametro `righe` della funzione RANDARRAY.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonne",
          detail: "Parametro `colonne` della funzione RANDARRAY.",
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
          name: "righe",
          detail: "Parametro `righe` della funzione SEQUENCE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonne",
          detail: "Parametro `colonne` della funzione SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "inizio",
          detail: "Parametro `inizio` della funzione SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "passo",
          detail: "Parametro `passo` della funzione SEQUENCE.",
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
          name: "espressione",
          example: "\"A1+5*2^2\"",
          detail: "Parametro `espressione` della funzione EVALUATE.",
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
          name: "espressione_remota",
          example: "SUM(A1:A10000000)",
          detail: "Parametro `espressione_remota` della funzione REMOTE.",
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
    customNumberFormat: {
      menuItem: "Formato numerico personalizzato…",
      title: "Formati numerici personalizzati",
      formatLabel: "Codice formato",
      inputPlaceholder: "Ad esempio: #.##0,00",
      apply: "Applica",
      cancel: "Annulla",
      close: "Chiudi",
      preview: "Anteprima",
      presets: "Formati suggeriti",
      standardFormats: "Numeri",
      currencyFormats: "Valuta",
      unitFormats: "Unità",
      selection: "Selezione",
      help: "Guida ai formati",
      helpTitle: "Come funzionano i codici formato",
      helpZero: "0 mostra sempre una cifra, incluso uno zero iniziale o finale.",
      helpHash: "# mostra una cifra solo quando è significativa.",
      helpDecimal: "{separator} indica la posizione decimale nel codice formato.",
      helpGrouping: "{separator} aggiunge il raggruppamento delle cifre.",
      groupingSpace: "Uno spazio aggiunge il raggruppamento delle cifre.",
      helpSections: "; separa le sezioni dei valori positivi, negativi, zero e testo.",
      normalizedHint: "Il formato verrà salvato come {format}.",
      errors: {
        required: "Inserisci un codice formato.",
        tooLong: "Il codice formato è troppo lungo.",
        tooManySections: "Un formato può contenere al massimo quattro sezioni.",
        missingPlaceholder: "Aggiungi almeno un segnaposto numerico: 0, # o ?.",
        invalid: "Questo codice formato non è valido."
      }
    },
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
