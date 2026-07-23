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
      d: "Descrizione della funzione T_TEST.",
      a: "Sintesi della funzione T_TEST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "intervallo1",
          detail: "Parametro `intervallo1` della funzione T_TEST.",
          example: "A1:A4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "intervallo2",
          detail: "Parametro `intervallo2` della funzione T_TEST.",
          example: "B1:B4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "code",
          detail: "Parametro `code` della funzione T_TEST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tipo",
          detail: "Parametro `tipo` della funzione T_TEST.",
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
          name: "gradi_libertà1",
          detail: "Parametro `gradi_libertà1` della funzione F_DIST.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gradi_libertà2",
          detail: "Parametro `gradi_libertà2` della funzione F_DIST.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Parametro `cumulativo` della funzione F_DIST.",
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
          name: "gradi_libertà1",
          detail: "Parametro `gradi_libertà1` della funzione F_DIST_RT.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "gradi_libertà2",
          detail: "Parametro `gradi_libertà2` della funzione F_DIST_RT.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione VAR_P.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione VAR_P.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione VAR_S.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione VAR_S.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione VARA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione VARA.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione VARPA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione VARPA.",
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
          name: "dati_y",
          detail: "Parametro `dati_y` della funzione STEYX.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x",
          detail: "Parametro `dati_x` della funzione STEYX.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione STANDARDIZE.",
          example: "96",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "media",
          detail: "Parametro `media` della funzione STANDARDIZE.",
          example: "80",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "deviazione_standard",
          detail: "Parametro `deviazione_standard` della funzione STANDARDIZE.",
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
          name: "dati",
          detail: "Parametro `dati` della funzione SMALL.",
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
          name: "dati_y",
          detail: "Parametro `dati_y` della funzione SLOPE.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x",
          detail: "Parametro `dati_x` della funzione SLOPE.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione SKEW.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione SKEW.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione SKEW_P.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione SKEW_P.",
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
          name: "chiave_ricerca",
          detail: "Parametro `chiave_ricerca` della funzione VLOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo",
          detail: "Parametro `intervallo` della funzione VLOOKUP.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "indice",
          detail: "Parametro `indice` della funzione VLOOKUP.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "è_ordinato",
          detail: "Parametro `è_ordinato` della funzione VLOOKUP.",
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
          name: "chiave_ricerca",
          detail: "Parametro `chiave_ricerca` della funzione HLOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo",
          detail: "Parametro `intervallo` della funzione HLOOKUP.",
          example: "A2:Z6",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "indice",
          detail: "Parametro `indice` della funzione HLOOKUP.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "è_ordinato",
          detail: "Parametro `è_ordinato` della funzione HLOOKUP.",
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
          name: "chiave_ricerca",
          detail: "Parametro `chiave_ricerca` della funzione LOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo_ricerca|matrice_risultato_ricerca",
          detail: "Parametro `search_range|search_result_array` della funzione LOOKUP.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo_risultato",
          detail: "Parametro `intervallo_risultato` della funzione LOOKUP.",
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
          name: "riga",
          detail: "Parametro `riga` della funzione ADDRESS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonna",
          detail: "Parametro `colonna` della funzione ADDRESS.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "modo_relativo_assoluto",
          detail: "Parametro `modo_relativo_assoluto` della funzione ADDRESS.",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "usare_notazione_a1",
          detail: "Parametro `usare_notazione_a1` della funzione ADDRESS.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "foglio",
          detail: "Parametro `foglio` della funzione ADDRESS.",
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
          name: "riferimento_cella_come_stringa",
          detail: "Parametro `riferimento_cella_come_stringa` della funzione INDIRECT.",
          example: "\"Sheet2!\"&B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "è_notazione_a1",
          detail: "Parametro `è_notazione_a1` della funzione INDIRECT.",
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
          name: "riferimento_cella",
          detail: "Parametro `riferimento_cella` della funzione ROW.",
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
          name: "intervallo",
          detail: "Parametro `intervallo` della funzione ROWS.",
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
          name: "riferimento_cella",
          detail: "Parametro `riferimento_cella` della funzione COLUMN.",
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
          name: "intervallo",
          detail: "Parametro `intervallo` della funzione COLUMNS.",
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
          name: "riferimento_cella",
          detail: "Parametro `riferimento_cella` della funzione OFFSET.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "righe_spostamento",
          detail: "Parametro `righe_spostamento` della funzione OFFSET.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonne_spostamento",
          detail: "Parametro `colonne_spostamento` della funzione OFFSET.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "altezza",
          detail: "Parametro `altezza` della funzione OFFSET.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "larghezza",
          detail: "Parametro `larghezza` della funzione OFFSET.",
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
          name: "chiave_ricerca",
          detail: "Parametro `chiave_ricerca` della funzione MATCH.",
          example: "\"Sunday\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervallo",
          detail: "Parametro `intervallo` della funzione MATCH.",
          example: "A2:A9",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "tipo_ricerca",
          detail: "Parametro `tipo_ricerca` della funzione MATCH.",
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
          name: "riferimento",
          detail: "Parametro `riferimento` della funzione INDEX.",
          example: "A1:C20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "riga",
          detail: "Parametro `riga` della funzione INDEX.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonna",
          detail: "Parametro `colonna` della funzione INDEX.",
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
          name: "nome_valore",
          detail: "Parametro `nome_valore` della funzione GETPIVOTDATA.",
          example: "\"SUM of number of units\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cella_tabella_pivot",
          detail: "Parametro `cella_tabella_pivot` della funzione GETPIVOTDATA.",
          example: "'Pivot table'!A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "colonna_originale",
          detail: "Parametro `colonna_originale` della funzione GETPIVOTDATA.",
          example: "\"division\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        },
        {
          name: "elemento_tabella_pivot",
          detail: "Parametro `elemento_tabella_pivot` della funzione GETPIVOTDATA.",
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
          name: "indice",
          detail: "Parametro `indice` della funzione CHOOSE.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "scelta1",
          detail: "Parametro `scelta1` della funzione CHOOSE.",
          example: "\"A\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scelta2",
          detail: "Parametro `scelta2` della funzione CHOOSE.",
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
          name: "etichetta_link",
          detail: "Parametro `etichetta_link` della funzione HYPERLINK.",
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
          name: "ora",
          detail: "Parametro `ora` della funzione TIME.",
          example: "11",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "minuto",
          detail: "Parametro `minuto` della funzione TIME.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "secondo",
          detail: "Parametro `secondo` della funzione TIME.",
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
          name: "stringa_ora",
          detail: "Parametro `stringa_ora` della funzione TIMEVALUE.",
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
          name: "data_inizio",
          detail: "Parametro `data_inizio` della funzione EOMONTH.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_mesi",
          detail: "Parametro `numero_mesi` della funzione EOMONTH.",
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
          name: "data_inizio",
          detail: "Parametro `data_inizio` della funzione EDATE.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_mesi",
          detail: "Parametro `numero_mesi` della funzione EDATE.",
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
          name: "ora",
          detail: "Parametro `ora` della funzione SECOND.",
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
          name: "ora",
          detail: "Parametro `ora` della funzione MINUTE.",
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
          name: "ora",
          detail: "Parametro `ora` della funzione HOUR.",
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
          name: "data_inizio",
          detail: "Parametro `data_inizio` della funzione NETWORKDAYS.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_fine",
          detail: "Parametro `data_fine` della funzione NETWORKDAYS.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "giorni_festivi",
          detail: "Parametro `giorni_festivi` della funzione NETWORKDAYS.",
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
          name: "data_inizio",
          detail: "Parametro `data_inizio` della funzione NETWORKDAYS_INTL.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_fine",
          detail: "Parametro `data_fine` della funzione NETWORKDAYS_INTL.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fine_settimana",
          detail: "Parametro `fine_settimana` della funzione NETWORKDAYS_INTL.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "giorni_festivi",
          detail: "Parametro `giorni_festivi` della funzione NETWORKDAYS_INTL.",
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
          name: "data",
          detail: "Parametro `data` della funzione ISOWEEKNUM.",
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
          name: "data",
          detail: "Parametro `data` della funzione WEEKNUM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tipo",
          detail: "Parametro `tipo` della funzione WEEKNUM.",
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
          name: "data",
          detail: "Parametro `data` della funzione WEEKDAY.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tipo",
          detail: "Parametro `tipo` della funzione WEEKDAY.",
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
          name: "data",
          detail: "Parametro `data` della funzione DAY.",
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
          name: "data_fine",
          detail: "Parametro `data_fine` della funzione DAYS.",
          example: "2011-3-15",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_inizio",
          detail: "Parametro `data_inizio` della funzione DAYS.",
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
          name: "data_inizio",
          detail: "Parametro `data_inizio` della funzione DAYS360.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_fine",
          detail: "Parametro `data_fine` della funzione DAYS360.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "metodo",
          detail: "Parametro `metodo` della funzione DAYS360.",
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
          name: "anno",
          detail: "Parametro `anno` della funzione DATE.",
          example: "1969",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mese",
          detail: "Parametro `mese` della funzione DATE.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "giorno",
          detail: "Parametro `giorno` della funzione DATE.",
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
          name: "stringa_data",
          detail: "Parametro `stringa_data` della funzione DATEVALUE.",
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
          name: "data_inizio",
          detail: "Parametro `data_inizio` della funzione DATEDIF.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_fine",
          detail: "Parametro `data_fine` della funzione DATEDIF.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "unità",
          detail: "Parametro `unità` della funzione DATEDIF.",
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
          name: "data_inizio",
          detail: "Parametro `data_inizio` della funzione WORKDAY.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_giorni",
          detail: "Parametro `numero_giorni` della funzione WORKDAY.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "giorni_festivi",
          detail: "Parametro `giorni_festivi` della funzione WORKDAY.",
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
          name: "data_inizio",
          detail: "Parametro `data_inizio` della funzione WORKDAY_INTL.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_giorni",
          detail: "Parametro `numero_giorni` della funzione WORKDAY_INTL.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_settimana",
          detail: "Parametro `fine_settimana` della funzione WORKDAY_INTL.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "giorni_festivi",
          detail: "Parametro `giorni_festivi` della funzione WORKDAY_INTL.",
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
          name: "data",
          detail: "Parametro `data` della funzione YEAR.",
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
          name: "data_inizio",
          detail: "Parametro `data_inizio` della funzione YEARFRAC.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_fine",
          detail: "Parametro `data_fine` della funzione YEARFRAC.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione YEARFRAC.",
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
          name: "data",
          detail: "Parametro `data` della funzione MONTH.",
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
          name: "tasso_nominale",
          detail: "Parametro `tasso_nominale` della funzione EFFECT.",
          example: "0.99",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodi_per_anno",
          detail: "Parametro `periodi_per_anno` della funzione EFFECT.",
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
          name: "numero",
          detail: "Parametro `numero` della funzione DOLLAR.",
          example: "1.2351",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_decimali",
          detail: "Parametro `numero_decimali` della funzione DOLLAR.",
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
          name: "prezzo_frazionario",
          detail: "Parametro `prezzo_frazionario` della funzione DOLLARDE.",
          example: "100.10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unità",
          detail: "Parametro `unità` della funzione DOLLARDE.",
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
          name: "prezzo_decimale",
          detail: "Parametro `prezzo_decimale` della funzione DOLLARFR.",
          example: "100.125",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unità",
          detail: "Parametro `unità` della funzione DOLLARFR.",
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
          name: "costo",
          detail: "Parametro `costo` della funzione DB.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_residuo",
          detail: "Parametro `valore_residuo` della funzione DB.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vita_utile",
          detail: "Parametro `vita_utile` della funzione DB.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodo",
          detail: "Parametro `periodo` della funzione DB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mese",
          detail: "Parametro `mese` della funzione DB.",
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
          name: "costo",
          detail: "Parametro `costo` della funzione DDB.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_residuo",
          detail: "Parametro `valore_residuo` della funzione DDB.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vita_utile",
          detail: "Parametro `vita_utile` della funzione DDB.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodo",
          detail: "Parametro `periodo` della funzione DDB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fattore",
          detail: "Parametro `fattore` della funzione DDB.",
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
          name: "numero_periodi",
          detail: "Parametro `numero_periodi` della funzione RATE.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "pagamento_per_periodo",
          detail: "Parametro `pagamento_per_periodo` della funzione RATE.",
          example: "-100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Parametro `valore_attuale` della funzione RATE.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_futuro",
          detail: "Parametro `valore_futuro` della funzione RATE.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Parametro `fine_o_inizio` della funzione RATE.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "stima_tasso",
          detail: "Parametro `stima_tasso` della funzione RATE.",
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
          name: "tasso",
          detail: "Parametro `tasso` della funzione CUMPRINC.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_periodi",
          detail: "Parametro `numero_periodi` della funzione CUMPRINC.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Parametro `valore_attuale` della funzione CUMPRINC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "primo_periodo",
          detail: "Parametro `primo_periodo` della funzione CUMPRINC.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ultimo_periodo",
          detail: "Parametro `ultimo_periodo` della funzione CUMPRINC.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Parametro `fine_o_inizio` della funzione CUMPRINC.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione COUPNUM.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione COUPNUM.",
          example: "02",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequenza",
          detail: "Parametro `frequenza` della funzione COUPNUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione COUPNUM.",
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
          name: "costo",
          detail: "Parametro `costo` della funzione SYD.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_residuo",
          detail: "Parametro `valore_residuo` della funzione SYD.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vita_utile",
          detail: "Parametro `vita_utile` della funzione SYD.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodo",
          detail: "Parametro `periodo` della funzione SYD.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione TBILLEQ.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione TBILLEQ.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso_sconto",
          detail: "Parametro `tasso_sconto` della funzione TBILLEQ.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione TBILLYIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione TBILLYIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prezzo",
          detail: "Parametro `prezzo` della funzione TBILLYIELD.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione TBILLPRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione TBILLPRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso_sconto",
          detail: "Parametro `tasso_sconto` della funzione TBILLPRICE.",
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
          name: "tasso",
          detail: "Parametro `tasso` della funzione PV.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_periodi",
          detail: "Parametro `numero_periodi` della funzione PV.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "importo_pagamento",
          detail: "Parametro `importo_pagamento` della funzione PV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_futuro",
          detail: "Parametro `valore_futuro` della funzione PV.",
          example: "D2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Parametro `fine_o_inizio` della funzione PV.",
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
          name: "data_emissione",
          detail: "Parametro `data_emissione` della funzione ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "primo_pagamento",
          detail: "Parametro `primo_pagamento` della funzione ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso",
          detail: "Parametro `tasso` della funzione ACCRINT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_rimborso",
          detail: "Parametro `valore_rimborso` della funzione ACCRINT.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequenza",
          detail: "Parametro `frequenza` della funzione ACCRINT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione ACCRINT.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "metodo_calcolo",
          detail: "Parametro `metodo_calcolo` della funzione ACCRINT.",
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
          name: "data_emissione",
          detail: "Parametro `data_emissione` della funzione ACCRINTM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione ACCRINTM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso",
          detail: "Parametro `tasso` della funzione ACCRINTM.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_rimborso",
          detail: "Parametro `valore_rimborso` della funzione ACCRINTM.",
          example: "1000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione ACCRINTM.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione COUPDAYBS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione COUPDAYBS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequenza",
          detail: "Parametro `frequenza` della funzione COUPDAYBS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione COUPDAYBS.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione COUPDAYS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione COUPDAYS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequenza",
          detail: "Parametro `frequenza` della funzione COUPDAYS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione COUPDAYS.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione COUPDAYSNC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione COUPDAYSNC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequenza",
          detail: "Parametro `frequenza` della funzione COUPDAYSNC.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione COUPDAYSNC.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione COUPNCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione COUPNCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequenza",
          detail: "Parametro `frequenza` della funzione COUPNCD.",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione COUPNCD.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione COUPPCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione COUPPCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequenza",
          detail: "Parametro `frequenza` della funzione COUPPCD.",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione COUPPCD.",
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
          name: "tasso",
          detail: "Parametro `tasso` della funzione FV.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_periodi",
          detail: "Parametro `numero_periodi` della funzione FV.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "importo_pagamento",
          detail: "Parametro `importo_pagamento` della funzione FV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Parametro `valore_attuale` della funzione FV.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Parametro `fine_o_inizio` della funzione FV.",
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
          name: "capitale",
          detail: "Parametro `capitale` della funzione FVSCHEDULE.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "piano_tassi",
          detail: "Parametro `piano_tassi` della funzione FVSCHEDULE.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione YIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione YIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso",
          detail: "Parametro `tasso` della funzione YIELD.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "prezzo",
          detail: "Parametro `prezzo` della funzione YIELD.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_rimborso",
          detail: "Parametro `valore_rimborso` della funzione YIELD.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequenza",
          detail: "Parametro `frequenza` della funzione YIELD.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione YIELD.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione YIELDDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione YIELDDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prezzo",
          detail: "Parametro `prezzo` della funzione YIELDDISC.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_rimborso",
          detail: "Parametro `valore_rimborso` della funzione YIELDDISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione YIELDDISC.",
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
          name: "tasso_effettivo",
          detail: "Parametro `tasso_effettivo` della funzione NOMINAL.",
          example: "0.85",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodi_per_anno",
          detail: "Parametro `periodi_per_anno` della funzione NOMINAL.",
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
          name: "importi_flusso_cassa",
          detail: "Parametro `importi_flusso_cassa` della funzione XIRR.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "date_flusso_cassa",
          detail: "Parametro `date_flusso_cassa` della funzione XIRR.",
          example: "C2:C25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "stima_tasso",
          detail: "Parametro `stima_tasso` della funzione XIRR.",
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
          name: "importi_flusso_cassa",
          detail: "Parametro `importi_flusso_cassa` della funzione MIRR.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "tasso_finanziamento",
          detail: "Parametro `tasso_finanziamento` della funzione MIRR.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tasso_rendimento_reinvestimento",
          detail: "Parametro `tasso_rendimento_reinvestimento` della funzione MIRR.",
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
          name: "importi_flusso_cassa",
          detail: "Parametro `importi_flusso_cassa` della funzione IRR.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "stima_tasso",
          detail: "Parametro `stima_tasso` della funzione IRR.",
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
          name: "tasso_sconto",
          detail: "Parametro `tasso_sconto` della funzione NPV.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "flusso_cassa1",
          detail: "Parametro `flusso_cassa1` della funzione NPV.",
          example: "200",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "flusso_cassa2",
          detail: "Parametro `flusso_cassa2` della funzione NPV.",
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
          name: "tasso_sconto",
          detail: "Parametro `tasso_sconto` della funzione XNPV.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "importi_flusso_cassa",
          detail: "Parametro `importi_flusso_cassa` della funzione XNPV.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "date_flusso_cassa",
          detail: "Parametro `date_flusso_cassa` della funzione XNPV.",
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
          name: "tasso",
          detail: "Parametro `tasso` della funzione CUMIPMT.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_periodi",
          detail: "Parametro `numero_periodi` della funzione CUMIPMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Parametro `valore_attuale` della funzione CUMIPMT.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "primo_periodo",
          detail: "Parametro `primo_periodo` della funzione CUMIPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ultimo_periodo",
          detail: "Parametro `ultimo_periodo` della funzione CUMIPMT.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Parametro `fine_o_inizio` della funzione CUMIPMT.",
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
          name: "tasso",
          detail: "Parametro `tasso` della funzione PMT.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_periodi",
          detail: "Parametro `numero_periodi` della funzione PMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Parametro `valore_attuale` della funzione PMT.",
          example: " 100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_futuro",
          detail: "Parametro `valore_futuro` della funzione PMT.",
          example: "D2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Parametro `fine_o_inizio` della funzione PMT.",
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
          name: "tasso",
          detail: "Parametro `tasso` della funzione IPMT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodo",
          detail: "Parametro `periodo` della funzione IPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_periodi",
          detail: "Parametro `numero_periodi` della funzione IPMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Parametro `valore_attuale` della funzione IPMT.",
          example: "80000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_futuro",
          detail: "Parametro `valore_futuro` della funzione IPMT.",
          example: "E2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Parametro `fine_o_inizio` della funzione IPMT.",
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
          name: "tasso",
          detail: "Parametro `tasso` della funzione PPMT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "periodo",
          detail: "Parametro `periodo` della funzione PPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_periodi",
          detail: "Parametro `numero_periodi` della funzione PPMT.",
          example: "3*12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Parametro `valore_attuale` della funzione PPMT.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_futuro",
          detail: "Parametro `valore_futuro` della funzione PPMT.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Parametro `fine_o_inizio` della funzione PPMT.",
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
          name: "data_acquisto",
          detail: "Parametro `data_acquisto` della funzione INTRATE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_vendita",
          detail: "Parametro `data_vendita` della funzione INTRATE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prezzo_acquisto",
          detail: "Parametro `prezzo_acquisto` della funzione INTRATE.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "prezzo_vendita",
          detail: "Parametro `prezzo_vendita` della funzione INTRATE.",
          example: "101200",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione INTRATE.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione PRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione PRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso",
          detail: "Parametro `tasso` della funzione PRICE.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "Parametro `rendimento` della funzione PRICE.",
          example: "0.065",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_rimborso",
          detail: "Parametro `valore_rimborso` della funzione PRICE.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequenza",
          detail: "Parametro `frequenza` della funzione PRICE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione PRICE.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione PRICEDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione PRICEDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso_sconto",
          detail: "Parametro `tasso_sconto` della funzione PRICEDISC.",
          example: "0.0525",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_rimborso",
          detail: "Parametro `valore_rimborso` della funzione PRICEDISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione PRICEDISC.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_emissione",
          detail: "Parametro `data_emissione` della funzione PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso",
          detail: "Parametro `tasso` della funzione PRICEMAT.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "Parametro `rendimento` della funzione PRICEMAT.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione PRICEMAT.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione RECEIVED.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione RECEIVED.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "investimento",
          detail: "Parametro `investimento` della funzione RECEIVED.",
          example: "10000000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tasso_sconto",
          detail: "Parametro `tasso_sconto` della funzione RECEIVED.",
          example: "0.0575",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione RECEIVED.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione DISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione DISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prezzo",
          detail: "Parametro `prezzo` della funzione DISC.",
          example: "97.975",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_rimborso",
          detail: "Parametro `valore_rimborso` della funzione DISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione DISC.",
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
          name: "tasso",
          detail: "Parametro `tasso` della funzione NPER.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "importo_pagamento",
          detail: "Parametro `importo_pagamento` della funzione NPER.",
          example: "500",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_attuale",
          detail: "Parametro `valore_attuale` della funzione NPER.",
          example: "40000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_futuro",
          detail: "Parametro `valore_futuro` della funzione NPER.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fine_o_inizio",
          detail: "Parametro `fine_o_inizio` della funzione NPER.",
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
          name: "costo",
          detail: "Parametro `costo` della funzione SLN.",
          example: "300000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore_residuo",
          detail: "Parametro `valore_residuo` della funzione SLN.",
          example: "75000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vita_utile",
          detail: "Parametro `vita_utile` della funzione SLN.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione DURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione DURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso",
          detail: "Parametro `tasso` della funzione DURATION.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "Parametro `rendimento` della funzione DURATION.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequenza",
          detail: "Parametro `frequenza` della funzione DURATION.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione DURATION.",
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
          name: "data_liquidazione",
          detail: "Parametro `data_liquidazione` della funzione MDURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "scadenza",
          detail: "Parametro `scadenza` della funzione MDURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasso",
          detail: "Parametro `tasso` della funzione MDURATION.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "Parametro `rendimento` della funzione MDURATION.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequenza",
          detail: "Parametro `frequenza` della funzione MDURATION.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenzione_conteggio_giorni",
          detail: "Parametro `convenzione_conteggio_giorni` della funzione MDURATION.",
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
          name: "numero_binario_con_segno",
          detail: "Parametro `numero_binario_con_segno` della funzione BIN2DEC.",
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
          name: "numero_binario_con_segno",
          detail: "Parametro `numero_binario_con_segno` della funzione BIN2HEX.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifre_significative",
          detail: "Parametro `cifre_significative` della funzione BIN2HEX.",
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
          name: "numero_binario_con_segno",
          detail: "Parametro `numero_binario_con_segno` della funzione BIN2OCT.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifre_significative",
          detail: "Parametro `cifre_significative` della funzione BIN2OCT.",
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
          name: "numero_decimale",
          detail: "Parametro `numero_decimale` della funzione DEC2BIN.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cifre_significative",
          detail: "Parametro `cifre_significative` della funzione DEC2BIN.",
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
          name: "numero_decimale",
          detail: "Parametro `numero_decimale` della funzione DEC2HEX.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cifre_significative",
          detail: "Parametro `cifre_significative` della funzione DEC2HEX.",
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
          name: "numero_decimale",
          detail: "Parametro `numero_decimale` della funzione DEC2OCT.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cifre_significative",
          detail: "Parametro `cifre_significative` della funzione DEC2OCT.",
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
          name: "numero_esadecimale_con_segno",
          detail: "Parametro `numero_esadecimale_con_segno` della funzione HEX2BIN.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifre_significative",
          detail: "Parametro `cifre_significative` della funzione HEX2BIN.",
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
          name: "numero_esadecimale_con_segno",
          detail: "Parametro `numero_esadecimale_con_segno` della funzione HEX2DEC.",
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
          name: "numero_esadecimale_con_segno",
          detail: "Parametro `numero_esadecimale_con_segno` della funzione HEX2OCT.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifre_significative",
          detail: "Parametro `cifre_significative` della funzione HEX2OCT.",
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
          name: "numero_ottale_con_segno",
          detail: "Parametro `numero_ottale_con_segno` della funzione OCT2BIN.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifre_significative",
          detail: "Parametro `cifre_significative` della funzione OCT2BIN.",
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
          name: "numero_ottale_con_segno",
          detail: "Parametro `numero_ottale_con_segno` della funzione OCT2DEC.",
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
          name: "numero_ottale_con_segno",
          detail: "Parametro `numero_ottale_con_segno` della funzione OCT2HEX.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifre_significative",
          detail: "Parametro `cifre_significative` della funzione OCT2HEX.",
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
          name: "parte_reale",
          detail: "Parametro `parte_reale` della funzione COMPLEX.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "parte_immaginaria",
          detail: "Parametro `parte_immaginaria` della funzione COMPLEX.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "suffisso",
          detail: "Parametro `suffisso` della funzione COMPLEX.",
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
          name: "numero_complesso",
          detail: "Parametro `numero_complesso` della funzione IMREAL.",
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
          name: "numero_complesso",
          detail: "Parametro `numero_complesso` della funzione IMAGINARY.",
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
          name: "numero",
          detail: "Parametro `numero` della funzione IMCONJUGATE.",
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
          name: "numero",
          detail: "Parametro `numero` della funzione IMABS.",
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
          name: "numero1",
          detail: "Parametro `numero1` della funzione DELTA.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero2",
          detail: "Parametro `numero2` della funzione DELTA.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione IMSUM.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione IMSUM.",
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
          name: "primo_numero",
          detail: "Parametro `primo_numero` della funzione IMSUB.",
          example: "\"6+5i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "secondo_numero",
          detail: "Parametro `secondo_numero` della funzione IMSUB.",
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
          name: "fattore1",
          detail: "Parametro `fattore1` della funzione IMPRODUCT.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fattore2",
          detail: "Parametro `fattore2` della funzione IMPRODUCT.",
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
          name: "dividendo",
          detail: "Parametro `dividendo` della funzione IMDIV.",
          example: "\"11+16i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "divisore",
          detail: "Parametro `divisore` della funzione IMDIV.",
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
          name: "espressione_logica",
          detail: "Parametro `espressione_logica` della funzione NOT.",
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
          name: "espressione_logica1",
          detail: "Parametro `espressione_logica1` della funzione AND.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "espressione_logica2",
          detail: "Parametro `espressione_logica2` della funzione AND.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione IFERROR.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore_se_errore",
          detail: "Parametro `valore_se_errore` della funzione IFERROR.",
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
          name: "espressione_logica",
          detail: "Parametro `espressione_logica` della funzione IF.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore_se_vero",
          detail: "Parametro `valore_se_vero` della funzione IF.",
          example: "\"A2 is foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore_se_falso",
          detail: "Parametro `valore_se_falso` della funzione IF.",
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
          name: "espressione_logica1",
          detail: "Parametro `espressione_logica1` della funzione OR.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "espressione_logica2",
          detail: "Parametro `espressione_logica2` della funzione OR.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione NE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione NE.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione EQ.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione EQ.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione GT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione GT.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione GTE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione GTE.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione LT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione LT.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione LTE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione LTE.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione ADD.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione ADD.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione MINUS.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione MINUS.",
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
          name: "fattore1",
          detail: "Parametro `fattore1` della funzione MULTIPLY.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fattore2",
          detail: "Parametro `fattore2` della funzione MULTIPLY.",
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
          name: "dividendo",
          detail: "Parametro `dividendo` della funzione DIVIDE.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisore",
          detail: "Parametro `divisore` della funzione DIVIDE.",
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
          name: "valore1",
          detail: "Parametro `valore1` della funzione CONCAT.",
          example: "\"de\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore2",
          detail: "Parametro `valore2` della funzione CONCAT.",
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
          name: "percentuale",
          detail: "Parametro `percentuale` della funzione UNARY_PERCENT.",
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
          name: "stringa1",
          detail: "Parametro `stringa1` della funzione CONCATENATE.",
          example: "\"Super\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "stringa2",
          detail: "Parametro `stringa2` della funzione CONCATENATE.",
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
          name: "stringa",
          detail: "Parametro `stringa` della funzione CODE.",
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
          name: "numero_tabella",
          detail: "Parametro `numero_tabella` della funzione CHAR.",
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
          name: "numero_romano",
          detail: "Parametro `numero_romano` della funzione ARABIC.",
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
          name: "numero",
          detail: "Parametro `numero` della funzione ROMAN.",
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
          name: "testo",
          detail: "Parametro `testo` della funzione REGEXEXTRACT.",
          example: "\"Needle in a haystack\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "espressione_regolare",
          detail: "Parametro `espressione_regolare` della funzione REGEXEXTRACT.",
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
          name: "testo",
          detail: "Parametro `testo` della funzione REGEXMATCH.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "espressione_regolare",
          detail: "Parametro `espressione_regolare` della funzione REGEXMATCH.",
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
          name: "testo",
          detail: "Parametro `testo` della funzione REGEXREPLACE.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "espressione_regolare",
          detail: "Parametro `espressione_regolare` della funzione REGEXREPLACE.",
          example: "\"S.*d\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "sostituzione",
          detail: "Parametro `sostituzione` della funzione REGEXREPLACE.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione T.",
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
          name: "numero",
          detail: "Parametro `numero` della funzione FIXED.",
          example: "3.141592653",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numero_decimali",
          detail: "Parametro `numero_decimali` della funzione FIXED.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sopprimere_separatore",
          detail: "Parametro `sopprimere_separatore` della funzione FIXED.",
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
          name: "da_cercare",
          detail: "Parametro `da_cercare` della funzione FIND.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "testo_da_cercare",
          detail: "Parametro `testo_da_cercare` della funzione FIND.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partire_da",
          detail: "Parametro `a_partire_da` della funzione FIND.",
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
          name: "da_cercare",
          detail: "Parametro `da_cercare` della funzione FINDB.",
          example: "\"new\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "testo_da_cercare",
          detail: "Parametro `testo_da_cercare` della funzione FINDB.",
          example: "\"new year\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partire_da",
          detail: "Parametro `a_partire_da` della funzione FINDB.",
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
          name: "delimitatore",
          detail: "Parametro `delimitatore` della funzione JOIN.",
          example: "\" and-a \"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore_o_matrice1",
          detail: "Parametro `valore_o_matrice1` della funzione JOIN.",
          example: "{1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valore_o_matrice2",
          detail: "Parametro `valore_o_matrice2` della funzione JOIN.",
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
          name: "stringa",
          detail: "Parametro `stringa` della funzione LEFT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_caratteri",
          detail: "Parametro `numero_caratteri` della funzione LEFT.",
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
          name: "stringa",
          detail: "Parametro `stringa` della funzione RIGHT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_caratteri",
          detail: "Parametro `numero_caratteri` della funzione RIGHT.",
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
          name: "stringa",
          detail: "Parametro `stringa` della funzione MID.",
          example: "\"get this\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partire_da",
          detail: "Parametro `a_partire_da` della funzione MID.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lunghezza_estrazione",
          detail: "Parametro `lunghezza_estrazione` della funzione MID.",
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
          name: "testo",
          detail: "Parametro `testo` della funzione LEN.",
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
          name: "testo",
          detail: "Parametro `testo` della funzione LENB.",
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
          name: "testo",
          detail: "Parametro `testo` della funzione LOWER.",
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
          name: "testo",
          detail: "Parametro `testo` della funzione UPPER.",
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
          name: "stringa1",
          detail: "Parametro `stringa1` della funzione EXACT.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "stringa2",
          detail: "Parametro `stringa2` della funzione EXACT.",
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
          name: "testo",
          detail: "Parametro `testo` della funzione REPLACE.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "posizione",
          detail: "Parametro `posizione` della funzione REPLACE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lunghezza",
          detail: "Parametro `lunghezza` della funzione REPLACE.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nuovo_testo",
          detail: "Parametro `nuovo_testo` della funzione REPLACE.",
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
          name: "testo_da_ripetere",
          detail: "Parametro `testo_da_ripetere` della funzione REPT.",
          example: "\"ha\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_ripetizioni",
          detail: "Parametro `numero_ripetizioni` della funzione REPT.",
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
          name: "da_cercare",
          detail: "Parametro `da_cercare` della funzione SEARCH.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "testo_da_cercare",
          detail: "Parametro `testo_da_cercare` della funzione SEARCH.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partire_da",
          detail: "Parametro `a_partire_da` della funzione SEARCH.",
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
          name: "testo_da_cercare",
          detail: "Parametro `testo_da_cercare` della funzione SUBSTITUTE.",
          example: "\"search for it\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "da_cercare",
          detail: "Parametro `da_cercare` della funzione SUBSTITUTE.",
          example: "\"search for\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "sostituire_con",
          detail: "Parametro `sostituire_con` della funzione SUBSTITUTE.",
          example: "\"Google\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numero_occorrenza",
          detail: "Parametro `numero_occorrenza` della funzione SUBSTITUTE.",
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
          name: "testo",
          detail: "Parametro `testo` della funzione CLEAN.",
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
          name: "numero",
          detail: "Parametro `numero` della funzione TEXT.",
          example: "1.23",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "formato",
          detail: "Parametro `formato` della funzione TEXT.",
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
          name: "testo",
          detail: "Parametro `testo` della funzione TRIM.",
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
          name: "testo",
          detail: "Parametro `testo` della funzione VALUE.",
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
          name: "testo_da_capitalizzare",
          detail: "Parametro `testo_da_capitalizzare` della funzione PROPER.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione CONVERT.",
          example: "5.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unità_iniziale",
          detail: "Parametro `unità_iniziale` della funzione CONVERT.",
          example: "\"g\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "unità_finale",
          detail: "Parametro `unità_finale` della funzione CONVERT.",
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
          name: "matrice_x",
          detail: "Parametro `matrice_x` della funzione SUMX2MY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrice_y",
          detail: "Parametro `matrice_y` della funzione SUMX2MY2.",
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
          name: "matrice_x",
          detail: "Parametro `matrice_x` della funzione SUMX2PY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrice_y",
          detail: "Parametro `matrice_y` della funzione SUMX2PY2.",
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
          name: "matrice_x",
          detail: "Parametro `matrice_x` della funzione SUMXMY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrice_y",
          detail: "Parametro `matrice_y` della funzione SUMXMY2.",
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
          name: "matrice_o_intervallo",
          detail: "Parametro `matrice_o_intervallo` della funzione TRANSPOSE.",
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
          name: "dati_y_noti",
          detail: "Parametro `dati_y_noti` della funzione TREND.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x_noti",
          detail: "Parametro `dati_x_noti` della funzione TREND.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nuovi_dati_x",
          detail: "Parametro `nuovi_dati_x` della funzione TREND.",
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
          name: "dati",
          detail: "Parametro `dati` della funzione FREQUENCY.",
          example: "A2:A40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "classi",
          detail: "Parametro `classi` della funzione FREQUENCY.",
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
          name: "dati_y_noti",
          detail: "Parametro `dati_y_noti` della funzione GROWTH.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x_noti",
          detail: "Parametro `dati_x_noti` della funzione GROWTH.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nuovi_dati_x",
          detail: "Parametro `nuovi_dati_x` della funzione GROWTH.",
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
          name: "dati_y_noti",
          detail: "Parametro `dati_y_noti` della funzione LINEST.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x_noti",
          detail: "Parametro `dati_x_noti` della funzione LINEST.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "calcolare_b",
          detail: "Parametro `calcolare_b` della funzione LINEST.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "dettagliato",
          detail: "Parametro `dettagliato` della funzione LINEST.",
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
          name: "dati_y_noti",
          detail: "Parametro `dati_y_noti` della funzione LOGEST.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dati_x_noti",
          detail: "Parametro `dati_x_noti` della funzione LOGEST.",
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
          name: "dettagliato",
          detail: "Parametro `dettagliato` della funzione LOGEST.",
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
          name: "matrice_quadrata",
          detail: "Parametro `matrice_quadrata` della funzione MDETERM.",
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
          name: "matrice_quadrata",
          detail: "Parametro `matrice_quadrata` della funzione MINVERSE.",
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
          name: "matrice1",
          detail: "Parametro `matrice1` della funzione MMULT.",
          example: "A1:B3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrice2",
          detail: "Parametro `matrice2` della funzione MMULT.",
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
          name: "matrice1",
          detail: "Parametro `matrice1` della funzione SUMPRODUCT.",
          example: "A2:C5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrice2",
          detail: "Parametro `matrice2` della funzione SUMPRODUCT.",
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
          name: "cella",
          detail: "Parametro `cella` della funzione ISFORMULA.",
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
          name: "tipo_informazione",
          detail: "Parametro `tipo_informazione` della funzione CELL.",
          example: "\"type\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "riferimento",
          detail: "Parametro `riferimento` della funzione CELL.",
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
          name: "riferimento",
          detail: "Parametro `riferimento` della funzione ERROR_TYPE.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione ISBLANK.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione ISERR.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione ISERROR.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione ISLOGICAL.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione ISNA.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione ISNONTEXT.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione ISNUMBER.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione ISREF.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione ISTEXT.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione TYPE.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione N.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione TO_DATE.",
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
          name: "valore",
          detail: "Parametro `valore` della funzione TO_PURE_NUMBER.",
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
