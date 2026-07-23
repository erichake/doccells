module.exports = {
  generalDialog: {
    partiallyError: "Cannot perform this operation on partially merged cells",
    readOnlyError: "Cannot perform this operation in read-only mode",
    dataNullError: "Cannot perform this operation on data that does not exist",
    noSeletionError: "The selection operation has not been performed yet",
    cannotSelectMultiple: "Cannot select multiple selections"
  },
  functionlist: [
    {
      n: "SUMIF",
      t: 0,
      d: "Renvoie une somme conditionnelle sur une plage.",
      a: "Une somme conditionnelle sur une plage.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "plage",
          detail: "La plage qui est testée par rapport au `critère`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "critère",
          detail: "Le modèle ou le test à appliquer à `plage`.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "plage_somme",
          detail: "La plage à additionner, si elle est différente de `plage`.",
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
      d: "Renvoie la tangente d'un angle fourni en radians.",
      a: "Tangente d'un angle exprimé en radians.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "L'angle dont on veut trouver la tangente, en radians.",
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
      d: "Renvoie la tangente hyperbolique de n'importe quel nombre réel.",
      a: "Tangente hyperbolique de tout nombre réel.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "Toute valeur réelle pour calculer la tangente hyperbolique.",
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
      d: "Arrondit un nombre au multiple entier le plus proche du `facteur` de signification spécifié.",
      a: "Arrondit le nombre au multiple d'un facteur le plus proche.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à arrondir au multiple entier le plus proche de `facteur`.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "facteur",
          detail: "Le nombre auquel les multiples de la `valeur` seront arrondis.",
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
      d: "Renvoie la tangente inverse d'une valeur, en radians.",
      a: "Tangente inverse d'une valeur, en radians.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur pour laquelle calculer la tangente inverse.",
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
      d: "Renvoie le sinus hyperbolique inverse d'un nombre.",
      a: "Sinus hyperbolique inverse d'un nombre.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur pour laquelle calculer le sinus hyperbolique inverse.",
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
      d: "Renvoie la valeur absolue d'un nombre.",
      a: "Valeur absolue d'un nombre.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "Le nombre dont renvoyer la valeur absolue.",
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
      d: "Renvoie le cosinus inverse d'une valeur, en radians.",
      a: "Cosinus inverse d'une valeur, en radians.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur pour laquelle calculer le cosinus inverse. Doit être compris entre ` -1 ` et ` 1 ` inclus.",
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
      d: "Renvoie le cosinus hyperbolique inverse d'un nombre.",
      a: "Cosinus hyperbolique inverse d'un nombre.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "Valeur pour laquelle calculer le cosinus hyperbolique inverse. Doit être supérieur ou égal à `1`.",
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
      d: "Renvoie la factorielle de la somme des valeurs divisée par le produit des factorielles des valeurs.",
      a: "Fonction de distribution multinomiale.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage à prendre en compte.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à prendre en compte.",
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
      d: "Renvoie la tangente hyperbolique inverse d'un nombre.",
      a: "Tangente hyperbolique inverse d'un nombre.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "Valeur pour laquelle calculer la tangente hyperbolique inverse. Doit être compris entre -1 et 1, exclusif.",
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
      d: "Renvoie l'angle entre l'axe des x et un segment de ligne depuis l'origine (0,0) jusqu'à la paire de coordonnées spécifiée (`x`,`y`), en radians.",
      a: "Arctangente d'une valeur.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "Coordonnée x du point d'extrémité du segment de ligne pour lequel calculer l'angle par rapport à l'axe des x.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "y",
          detail: "Coordonnée y de l'extrémité du segment de ligne pour lequel calculer l'angle par rapport à l'axe des x.",
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
      d: "Renvoie le nombre de valeurs vides dans une liste de valeurs et de plages.",
      a: "Nombre de valeurs vides.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage dans laquelle compter le nombre de blancs.",
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
      d: "Renvoie le cosinus hyperbolique de n'importe quel nombre réel.",
      a: "Cosinus hyperbolique de tout nombre réel.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "Toute valeur réelle pour calculer le cosinus hyperbolique.",
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
      d: "Arrondit un nombre à l'entier le plus proche qui lui est inférieur ou égal.",
      a: "Arrondit le nombre à l’entier le plus proche.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à arrondir à l’entier le plus proche.",
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
      d: "Vérifie si la valeur fournie est paire.",
      a: "Si la valeur fournie est paire.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur doit être vérifiée comme étant paire.",
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
      d: "Vérifie si la valeur fournie est impaire.",
      a: "Si la valeur fournie est impaire.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à vérifier comme impaire.",
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
      d: "Renvoie le plus petit commun multiple d'un ou plusieurs entiers.",
      a: "Plus petit commun multiple d’un ou plusieurs entiers.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage dont les facteurs doivent être pris en compte dans un calcul pour trouver le plus petit commun multiple.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires dont les facteurs doivent être pris en compte pour trouver le multiple le plus commun.",
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
      d: "Renvoie le logarithme d'un nombre, en base e (nombre d'Euler).",
      a: "Le logarithme d'un nombre, base e (nombre d'Euler).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur pour laquelle calculer le logarithme, base e.",
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
      d: "Renvoie le logarithme d'un nombre par rapport à une base.",
      a: "Le logarithme d'un nombre par rapport à une base.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur pour laquelle calculer le logarithme.",
          example: "128",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "base",
          detail: "La base à utiliser pour le calcul du logarithme.",
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
      d: "Renvoie le logarithme d'un nombre, base 10.",
      a: "Le logarithme d'un nombre, base 10.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur pour laquelle calculer le logarithme, base 10.",
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
      d: "Renvoie le résultat de l'opérateur modulo, le reste après une opération de division.",
      a: "Opérateur Modulo (reste).",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividende",
          detail: "Le nombre à diviser pour trouver le reste.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "diviseur",
          detail: "Le nombre par lequel diviser.",
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
      d: "Arrondit un nombre au multiple entier le plus proche d'un autre.",
      a: "Arrondit un nombre au multiple entier le plus proche.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur",
          detail: "Le nombre à arrondir au multiple entier le plus proche d’un autre.",
          example: "21",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "facteur",
          detail: "Le nombre auquel les multiples de la `valeur` seront arrondis.",
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
      d: "Arrondit un nombre à l’entier impair le plus proche.",
      a: "Arrondit un nombre à l’entier impair le plus proche.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à arrondir au nombre impair supérieur suivant.",
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
      d: "Renvoie la somme des carrés d'une série de nombres et/ou de cellules.",
      a: "Somme des carrés.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Le premier nombre ou plage dont les carrés doivent être additionnés.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "Nombres ou plages supplémentaires dont les carrés doivent être ajoutés au(x) carré(s) de ` valeur1 `.",
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
      d: "Renvoie le nombre de façons de choisir un certain nombre d'objets dans un pool d'objets d'une taille donnée.",
      a: "Nombre de combinaisons à partir d'un ensemble d'objets.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "La taille du pool d’objets parmi lesquels choisir.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Le nombre d'objets à choisir.",
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
      d: "Renvoie la somme d'une série de nombres et/ou de cellules.",
      a: "Somme d'une série de nombres et/ou de cellules.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Le premier nombre ou plage à additionner.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "Nombres ou plages supplémentaires à ajouter à ` valeur1 `.",
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
      d: "Renvoie un sous-total pour une plage verticale de cellules à l'aide d'une fonction d'agrégation spécifiée.",
      a: "Sous-total pour une plage utilisant une fonction spécifique.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "code_fonction",
          detail: "Fonction à utiliser dans l'agrégation de sous-totaux.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "plage1",
          detail: "Première plage sur laquelle calculer un sous-total.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "plage2",
          detail: "Plages supplémentaires sur lesquelles calculer les sous-totaux.",
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
      d: "Renvoie le sinus inverse d'une valeur, en radians.",
      a: "Sinus inverse d'une valeur, en radians.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur pour laquelle calculer le sinus inverse. Doit être compris entre ` -1 ` et ` 1 ` inclus.",
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
      d: "Renvoie un nombre conditionnel sur une plage.",
      a: "Un nombre conditionnel sur une plage.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "plage",
          detail: "La plage qui est testée par rapport au `critère`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "critère",
          detail: "Le modèle ou le test à appliquer à `plage`.",
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
      d: "Convertit une valeur d'angle en degrés en radians.",
      a: "Convertit une valeur d'angle en degrés en radians.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "L'angle à convertir de degrés en radians.",
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
      d: "Renvoie un nombre aléatoire compris entre 0 inclus et 1 exclusif.",
      a: "Un nombre aléatoire compris entre 0 inclus et 1 exclusif.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "COUNTUNIQUE",
      t: 0,
      d: "Compte le nombre de valeurs uniques dans une liste de valeurs et de plages spécifiées.",
      a: "Compte le nombre de valeurs uniques dans une plage.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage à prendre en compte pour l'unicité.",
          example: "A1:C100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à prendre en compte pour l'unicité.",
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
      d: "Convertit une valeur d'angle en radians en degrés.",
      a: "Convertit une valeur d'angle en radians en degrés.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "L'angle à convertir des radians en degrés.",
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
      d: "Renvoie la fonction d'erreur de Gauss complémentaire d'une valeur.",
      a: "Fonction d'erreur de Gauss complémentaire d'une valeur.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "z",
          detail: "Nombre pour lequel calculer la fonction d'erreur de Gauss complémentaire.",
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
      d: "Arrondit un nombre à l’entier pair le plus proche.",
      a: "Arrondit un nombre à l’entier pair le plus proche.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à arrondir au nombre pair le plus élevé.",
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
      d: "Renvoie le nombre d'Euler, e (~2,718) élevé à une puissance.",
      a: "Le nombre d'Euler, e (~2,718) élevé à une puissance.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "exposant",
          detail: "L'exposant auquel élever e.",
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
      d: "Renvoie la factorielle d'un nombre.",
      a: "Factorielle d'un nombre.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "Le nombre ou la référence à un nombre dont la factorielle sera calculée et renvoyée.",
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
      d: "Renvoie la ` factorielle double ` d'un nombre.",
      a: "factorielle double d'un nombre.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "Le nombre ou la référence à un nombre dont la factorielle double sera calculée et renvoyée.",
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
      d: "Renvoie la valeur de Pi à 14 décimales.",
      a: "Le nombre pi.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FLOOR",
      t: 0,
      d: "Arrondit un nombre au multiple entier le plus proche du `facteur` de signification spécifié.",
      a: "Arrondit le nombre au multiple le plus proche d'un facteur.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à arrondir au multiple entier le plus proche de `facteur`.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "facteur",
          detail: "Le nombre auquel les multiples de la `valeur` seront arrondis.",
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
      d: "Renvoie le plus grand diviseur commun d'un ou plusieurs entiers.",
      a: "Plus grand diviseur commun d’un ou plusieurs entiers.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage dont les facteurs doivent être pris en compte dans un calcul pour trouver le plus grand diviseur commun.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires dont les facteurs doivent être pris en compte pour trouver le plus grand diviseur commun.",
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
      d: "Renvoie un entier uniformément aléatoire entre deux valeurs incluses.",
      a: "Entier aléatoire entre deux valeurs, inclusivement.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "bas",
          detail: "L’extrémité inférieure de la plage aléatoire.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "haut",
          detail: "Le haut de gamme de la plage aléatoire.",
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
      d: "Arrondit un nombre à un certain nombre de décimales selon les règles standard.",
      a: "Arrondit un nombre selon les règles standard.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à arrondir au nombre de places `décimales`.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "décimales",
          detail: "Le nombre de décimales auxquelles arrondir.",
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
      d: "Arrondit un nombre à un certain nombre de décimales, en arrondissant toujours à l'incrément valide suivant.",
      a: "Arrondit un nombre.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à arrondir au nombre de places `décimales`, toujours en arrondissant à l'inférieur.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "décimales",
          detail: "Le nombre de décimales auxquelles arrondir.",
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
      d: "Arrondit un nombre à un certain nombre de décimales, en arrondissant toujours à l'incrément valide suivant.",
      a: "Arrondit un nombre.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à arrondir au nombre de places `décimales`, toujours en arrondissant au supérieur.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "décimales",
          detail: "Le nombre de décimales auxquelles arrondir.",
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
      d: "Étant donné les paramètres `x`, `n`, `m` et `a`, renvoie la somme de la série entière a",
      a: "Somme d'une série de puissances.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "L'entrée de la série de puissances. Varie en fonction du type d'approximation, peut être un angle, un exposant ou une autre valeur.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "La puissance initiale à laquelle élever ` x ` dans la série entière.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "m",
          detail: "L'incrément additif par lequel augmenter `x`.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a",
          detail: "Tableau ou plage contenant les coefficients de la série entière.",
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
      d: "Étant donné un nombre d'entrée, renvoie ` -1 ` s'il est négatif, ` 1 ` s'il est positif et ` 0 ` s'il est zéro.",
      a: "Signe d'un numéro fourni (+/-/0).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur dont le signe sera évalué.",
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
      d: "Renvoie le sinus d'un angle exprimé en radians.",
      a: "Sinus d'un angle exprimé en radians.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "L'angle pour trouver le sinus, en radians.",
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
      d: "Renvoie le sinus hyperbolique de n'importe quel nombre réel.",
      a: "Sinus hyperbolique de tout nombre réel.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "Toute valeur réelle pour calculer le sinus hyperbolique.",
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
      d: "Renvoie la racine carrée positive d'un nombre positif.",
      a: "Racine carrée positive d'un nombre positif.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "Le nombre pour lequel calculer la racine carrée positive.",
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
      d: "Renvoie la racine carrée positive du produit de Pi et le nombre positif donné.",
      a: "Racine carrée du produit de pi et du nombre.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "Le nombre qui sera multiplié par Pi et dont la racine carrée du produit sera renvoyée",
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
      d: "Renvoie le logarithme d'une fonction Gamma spécifiée, base e (nombre d'Euler).",
      a: "Logarithme de la fonction gamma.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "L'entrée de la fonction Gamma. Le logarithme népérien de Gamma(`valeur`) sera renvoyé.",
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
      d: "Renvoie le cosinus d'un angle fourni en radians.",
      a: "Cosinus d'un angle exprimé en radians.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "angle",
          detail: "L'angle dont il faut trouver le cosinus, en radians.",
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
      d: "Tronque un nombre à un certain nombre de chiffres significatifs en omettant les chiffres moins significatifs.",
      a: "Tronque un nombre.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à tronquer.",
          example: "3.141592654",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "décimales",
          detail: "Nombre de chiffres significatifs à droite du point décimal à conserver.",
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
      d: "Renvoie un nombre divisé par un autre.",
      a: "Un nombre divisé par un autre.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividende",
          detail: "Le nombre à diviser.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "diviseur",
          detail: "Le nombre par lequel diviser.",
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
      d: "Renvoie un nombre élevé à une puissance.",
      a: "Un nombre élevé à une puissance.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "base",
          detail: "Le nombre à élever à la puissance `exposant`.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "exposant",
          detail: "L'exposant auquel élever la ` base `.",
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
      d: "Renvoie la somme d'une plage en fonction de plusieurs critères.",
      a: "Additionne une plage en fonction de plusieurs critères.",
      m: [
        3,
        257
      ],
      p: [
        {
          name: "plage_somme",
          detail: "La plage à additionner.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "plage_critères1",
          detail: "La plage à vérifier par rapport au critère 1.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "critère1",
          detail: "Le modèle ou le test à appliquer à la plage_critères1.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "plage_critères2",
          detail: "Plages supplémentaires à vérifier.",
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
      d: "Renvoie le nombre d'une plage en fonction de plusieurs critères.",
      a: "Comptez les valeurs en fonction de plusieurs critères.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "plage_critères1",
          detail: "La plage à vérifier par rapport à `critère 1`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "critère1",
          detail: "Le modèle ou le test à appliquer à `plage_critères1`.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "plage_critères2",
          detail: "Plages supplémentaires à vérifier.",
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
      d: "Renvoie le résultat de la multiplication d'une série de nombres ensemble.",
      a: "Résultat de la multiplication d’une série de nombres ensemble.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "facteur1",
          detail: "Premier nombre ou plage à calculer pour le produit.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "facteur2",
          detail: "Plus de nombres ou de plages à calculer pour le produit.",
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
      d: "Calcule la moyenne harmonique d'un ensemble de données.",
      a: "La moyenne harmonique d'un ensemble de données.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage de la population.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à inclure dans la population.",
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
      d: "Calcule la probabilité de tirer un certain nombre de réussites sur un certain nombre d'essais étant donné une population d'une certaine taille contenant un certain nombre de réussites, sans remplacement de nuls.",
      a: "Probabilité de distribution hypergéométrique.",
      m: [
        5,
        5
      ],
      p: [
        {
          name: "nombre_réussites",
          detail: "Le nombre de réussites souhaité.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nombre_tirages",
          detail: "Le nombre de tirages autorisés.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "réussites_population",
          detail: "Le nombre total de réussites dans la population.",
          example: "20",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "taille_population",
          detail: "La taille totale de la population",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatif",
          detail: "Déterminez la valeur logique de la forme fonction. Si cumulative est TRUE(), HYPGEOM.DIST renvoie la fonction de distribution cumulative ; si FALSE(), elle renvoie la fonction de densité de probabilité.",
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
      d: "Calcule la valeur y à laquelle la ligne résultant de la régression linéaire d'un ensemble de données coupe l'axe y (x=0).",
      a: "Interception Y de la ligne dérivée par régression linéaire.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données_y",
          detail: "Plage représentant le tableau ou la matrice de données dépendantes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données_x",
          detail: "Plage représentant le tableau ou la matrice de données indépendantes.",
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
      d: "Calcule l'aplatissement d'un ensemble de données, qui décrit la forme, et en particulier le ` pic ` de cet ensemble de données.",
      a: "Aplatissement d'un ensemble de données.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "La première valeur ou plage de l’ensemble de données.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à inclure dans l’ensemble de données.",
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
      d: "Renvoie le nième plus grand élément d'un ensemble de données, où n est défini par l'utilisateur.",
      a: "Nième plus grand élément d’un ensemble de données.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données",
          detail: "Tableau ou plage contenant l’ensemble de données à prendre en compte.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "Le rang du plus grand au plus petit de l’élément à renvoyer.",
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
      d: "Calcule l'écart type sur la base d'un échantillon, en définissant le texte sur la valeur `0`.",
      a: "Écart type de l'échantillon (texte comme 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "La première valeur ou plage de l’échantillon.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à inclure dans l’échantillon.",
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
      d: "Calcule l'écart type sur la base d'une population entière.",
      a: "Écart type d'une population entière.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage de la population.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à inclure dans la population.",
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
      d: "Calcule la moyenne géométrique d'un ensemble de données.",
      a: "La moyenne géométrique d'un ensemble de données.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage de la population.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à inclure dans la population.",
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
      d: "Renvoie le rang d'une valeur spécifiée dans un ensemble de données. S'il y a plus d'une entrée de la même valeur dans l'ensemble de données, le premier rang des entrées sera renvoyé.",
      a: "Premier rang d'une valeur spécifiée dans un ensemble de données.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur dont le rang sera déterminé.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données",
          detail: "Tableau ou plage contenant l'ensemble de données à prendre en compte.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "est_croissant",
          detail: "S'il faut considérer les valeurs dans ` données ` par ordre décroissant ou croissant. En cas d'omission, la valeur par défaut est décroissante (FALSE).",
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
      d: "Renvoie le rang d'une valeur spécifiée dans un ensemble de données. S'il y a plus d'une entrée de la même valeur dans l'ensemble de données, le classement moyen des entrées sera renvoyé.",
      a: "Classement moyen d'une valeur spécifiée dans un ensemble de données.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur dont le rang sera déterminé.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données",
          detail: "Tableau ou plage contenant l'ensemble de données à prendre en compte.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "est_croissant",
          detail: "S'il faut considérer les valeurs dans ` données ` par ordre décroissant ou croissant. En cas d'omission, la valeur par défaut est décroissante (FALSE).",
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
      d: "Renvoie le rang en pourcentage (centile) de 0 à 1, à l'exclusion d'une valeur spécifiée dans un ensemble de données.",
      a: "Rang en pourcentage (centile) de 0 à 1 exclusif.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "données",
          detail: "Tableau ou plage contenant l'ensemble de données à prendre en compte.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur",
          detail: "La valeur dont le rang en pourcentage sera déterminé.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "chiffres_significatifs",
          detail: "Le nombre de chiffres significatifs à utiliser dans le calcul. La valeur par défaut est 3.",
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
      d: "Renvoie le rang en pourcentage (centile) de 0 à 1, y compris une valeur spécifiée dans un ensemble de données.",
      a: "Rang en pourcentage (centile) de 0 à 1 inclus.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "données",
          detail: "Tableau ou plage contenant l'ensemble de données à prendre en compte.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur",
          detail: "La valeur dont le rang en pourcentage sera déterminé.",
          example: " A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "chiffres_significatifs",
          detail: "Le nombre de chiffres significatifs à utiliser dans le calcul. La valeur par défaut est 3.",
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
      d: "Calcule la valeur y attendue pour un x spécifié sur la base d'une régression linéaire d'un ensemble de données.",
      a: "Valeur y attendue basée sur la régression linéaire.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "La valeur sur l’axe des X à prévoir.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données_y",
          detail: "Plage représentant le tableau ou la matrice de données dépendantes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données_x",
          detail: "Plage représentant le tableau ou la matrice de données indépendantes.",
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
      d: "Renvoie la transformation de Fisher inverse d'une valeur spécifiée.",
      a: "Transformation de Fisher inverse d'une valeur spécifiée.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "Valeur pour laquelle calculer la transformation de Fisher inverse.",
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
      d: "Renvoie la transformation de Fisher d'une valeur spécifiée.",
      a: "Transformation de Fisher d'une valeur spécifiée.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur pour laquelle calculer la transformation de Fisher.",
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
      d: "Renvoie la valeur la plus courante dans un ensemble de données.",
      a: "Valeur la plus courante dans un ensemble de données.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "La première valeur ou plage à prendre en compte lors du mode de calcul.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à prendre en compte lors du mode de calcul.",
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
      d: "Renvoie la valeur de la fonction de distribution Weibull (ou fonction de distribution cumulative Weibull) pour une forme et une échelle spécifiées.",
      a: "Fonction de distribution de Weibull.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "L'entrée de la fonction de distribution de Weibull.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "forme",
          detail: "Le paramètre de forme de la fonction de distribution de Weibull.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "échelle",
          detail: "Le paramètre d'échelle de la fonction de distribution de Weibull.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatif",
          detail: "S'il faut utiliser la fonction de distribution cumulative.",
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
      d: "Renvoie le nombre de valeurs numériques dans un ensemble de données.",
      a: "Le nombre de valeurs numériques dans l'ensemble de données.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "La première valeur ou plage à prendre en compte lors du comptage.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à prendre en compte lors du comptage.",
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
      d: "Renvoie le nombre de valeurs dans un ensemble de données.",
      a: "Le nombre de valeurs dans un ensemble de données.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "La première valeur ou plage à prendre en compte lors du comptage.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à prendre en compte lors du comptage.",
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
      d: "Calcule la moyenne des ampleurs des écarts des données par rapport à la moyenne d'un ensemble de données.",
      a: "Ampleur moyenne des écarts par rapport à la moyenne.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "La première valeur ou plage de l’échantillon.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à inclure dans l’échantillon.",
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
      d: "Renvoie la valeur moyenne numérique dans un ensemble de données, en ignorant le texte.",
      a: "Valeur moyenne numérique dans un ensemble de données, en ignorant le texte.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage à prendre en compte lors du calcul de la valeur moyenne.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à prendre en compte lors du calcul de la valeur moyenne.",
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
      d: "Renvoie la valeur moyenne numérique dans un ensemble de données.",
      a: "Valeur moyenne numérique dans un ensemble de données.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage à prendre en compte lors du calcul de la valeur moyenne.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à prendre en compte lors du calcul de la valeur moyenne.",
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
      d: "Calcule la probabilité de tirer un certain nombre de réussites (ou un nombre maximum de réussites) en un certain nombre d'essais étant donné une population d'une certaine taille contenant un certain nombre de réussites, avec remplacement des nuls.",
      a: "Probabilité de distribution binomiale.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "nombre_réussites",
          detail: "Le nombre de réussites pour lesquelles calculer la probabilité dans les essais `nombre_essais`.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nombre_essais",
          detail: "Le nombre d'essais indépendants.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilité_succès",
          detail: "La probabilité de succès dans un essai donné.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatif",
          detail: "S'il faut utiliser la distribution cumulée binomiale.",
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
      d: "Calcule la plus petite valeur pour laquelle la distribution binomiale cumulée est supérieure ou égale à un critère spécifié.",
      a: "Fonction de distribution binomiale cumulative inverse.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "nombre_essais",
          detail: "Le nombre d'essais indépendants.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilité_succès",
          detail: "La probabilité de succès dans un essai donné.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilité_cible",
          detail: "La probabilité seuil souhaitée.",
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
      d: "Calcule la largeur de la moitié de l'intervalle de confiance pour une distribution normale.",
      a: "Intervalle de confiance pour une distribution normale.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "alpha",
          detail: "Un moins le niveau de confiance souhaité. Par ex. `0,1` pour `0,9`, ou 90 % de confiance.",
          example: "0.05",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "écart_type",
          detail: "L'écart type de la population.",
          example: "1.6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "taille_population",
          detail: "La taille de la population.",
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
      d: "Calcule r, le coefficient de corrélation produit-moment de Pearson d'un ensemble de données.",
      a: "Coefficient de corrélation produit-moment de Pearson.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données_y",
          detail: "Plage représentant le tableau ou la matrice de données dépendantes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données_x",
          detail: "Plage représentant le tableau ou la matrice de données indépendantes.",
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
      d: "Calcule la covariance d'un ensemble de données.",
      a: "La covariance d'un ensemble de données.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données_y",
          detail: "Plage représentant le tableau ou la matrice de données dépendantes.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données_x",
          detail: "Plage représentant le tableau ou la matrice de données indépendantes.",
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
      d: "Calcule la covariance de l'échantillon d'un ensemble de données.",
      a: "L'échantillon de covariance d'un ensemble de données.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données_y",
          detail: "Plage représentant le tableau ou la matrice de données dépendantes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données_x",
          detail: "Plage représentant le tableau ou la matrice de données indépendantes.",
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
      d: "Calcule la somme des carrés des écarts sur la base d'un échantillon.",
      a: "La somme des carrés des écarts basée sur un échantillon.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "La première valeur ou plage de l’échantillon.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à inclure dans l’échantillon.",
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
      d: "Renvoie la valeur de la fonction de distribution exponentielle avec un lambda spécifié à une valeur spécifiée.",
      a: "Fonction de distribution exponentielle.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "L'entrée de la fonction de distribution exponentielle.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lambda",
          detail: "Le lambda pour spécifier la fonction de distribution exponentielle.",
          example: "0.5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatif",
          detail: "S'il faut utiliser la distribution cumulative exponentielle.",
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
      d: "Renvoie la moyenne d'une plage en fonction de critères.",
      a: "Moyenne des valeurs selon critères.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "plage_critères",
          detail: "La plage à vérifier par rapport au `critère`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critère",
          detail: "Le modèle ou le test à appliquer à `plage_critères`.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "plage_moyenne",
          detail: "La plage à la moyenne. S'il n'est pas inclus, ` plage_critères ` est utilisé à la place pour la moyenne.",
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
      d: "Renvoie la moyenne d'une plage en fonction de plusieurs critères.",
      a: "Moyenne des valeurs en fonction de plusieurs critères.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "plage_moyenne",
          detail: "La plage à la moyenne.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "plage_critères1",
          detail: "La plage à vérifier par rapport à `critère 1`.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critère1",
          detail: "Le modèle ou le test à appliquer à `plage_critères1`.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "plage_critères2",
          detail: "Plages supplémentaires à vérifier.",
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
      d: "Renvoie le nombre de façons de choisir un certain nombre d'objets dans un pool d'objets d'une taille donnée, en tenant compte de l'ordre.",
      a: "Nombre de permutations à partir d'un certain nombre d'objets.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "La taille du pool d’objets parmi lesquels choisir.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "Le nombre d'objets à choisir.",
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
      d: "Calcule la moyenne d'un ensemble de données en excluant une certaine proportion de données des extrémités haute et basse de l'ensemble de données.",
      a: "Moyenne d'un ensemble de données excluant les extrémités haut/bas.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données",
          detail: "Tableau ou plage contenant l’ensemble de données à prendre en compte.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "proportion_exclue",
          detail: "Proportion de l'ensemble de données à exclure, des extrémités de l'ensemble.",
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
      d: "Renvoie la valeur à un centile donné d'un ensemble de données à l'exclusion de 0 et 1.",
      a: "Valeur à un centile donné d'un ensemble de données à l'exclusion de 0 et 1.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données",
          detail: "Tableau ou plage contenant l'ensemble de données à prendre en compte.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "centile",
          detail: "Le centile, à l'exclusion de 0 et 1, dont la valeur dans `données` sera calculée et renvoyée.",
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
      d: "Renvoie la valeur à un centile donné d'un ensemble de données.",
      a: "Valeur à un centile donné d'un ensemble de données.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données",
          detail: "Tableau ou plage contenant l'ensemble de données à prendre en compte.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "centile",
          detail: "Le percentile dont la valeur dans ` données ` sera calculée et renvoyée.",
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
      d: "Calcule r, le coefficient de corrélation produit-moment de Pearson d'un ensemble de données.",
      a: "Coefficient de corrélation produit-moment de Pearson.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données_y",
          detail: "Plage représentant le tableau ou la matrice de données dépendantes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données_x",
          detail: "Plage représentant le tableau ou la matrice de données indépendantes.",
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
      d: "Renvoie la valeur de la fonction de distribution normale standard inverse pour une valeur spécifiée.",
      a: "Fonction de distribution normale standard inverse.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "x",
          detail: "L'entrée de la fonction de distribution normale standard inverse.",
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
      d: "Renvoie la valeur de la fonction de distribution cumulative normale standard pour une valeur spécifiée.",
      a: "Fonction de distribution cumulative normale standard.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "L’entrée de la fonction de distribution cumulative normale standard.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatif",
          detail: "Déterminez la valeur logique de la forme fonction. Si TRUE(), il renvoie la fonction de distribution cumulative ; s'il est FALSE(), il renvoie la fonction de densité de probabilité.",
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
      d: "Renvoie la valeur de la fonction de distribution normale inverse pour une valeur, une moyenne et un écart type spécifiés.",
      a: "Fonction de distribution normale inverse.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "L'entrée de la fonction de distribution normale inverse.",
          example: "0.75",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "moyenne",
          detail: "La moyenne (mu) de la fonction de distribution normale.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "écart_type",
          detail: "L'écart type (sigma) de la fonction de distribution normale.",
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
      d: "Renvoie la valeur de la fonction de distribution normale (ou de la fonction de distribution cumulative normale) pour une valeur, une moyenne et un écart type spécifiés.",
      a: "Fonction de distribution normale.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "L'entrée de la fonction de distribution normale.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "moyenne",
          detail: "La moyenne (mu) de la fonction de distribution normale.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "écart_type",
          detail: "L'écart type (sigma) de la fonction de distribution normale.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatif",
          detail: "S'il faut utiliser la fonction de distribution cumulative normale plutôt que la fonction de distribution.",
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
      d: "Calcule la probabilité d'obtenir un certain nombre d'échecs avant un certain nombre de réussites étant donné une probabilité de réussite dans des essais indépendants.",
      a: "Probabilité de distribution binomiale négative.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "nombre_échecs",
          detail: "Le nombre d’échecs de modélisation.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nombre_réussites",
          detail: "Le nombre de réussites à modéliser.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilité_succès",
          detail: "La probabilité de succès dans un essai donné.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatif",
          detail: "Déterminez la valeur logique de la forme fonction. Si TRUE(), il renvoie la fonction de distribution cumulative ; s'il est FALSE(), il renvoie la fonction de densité de probabilité.",
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
      d: "Renvoie la valeur numérique minimale dans un ensemble de données.",
      a: "Valeur numérique minimale dans un ensemble de données.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage à prendre en compte lors du calcul de la valeur minimale.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à prendre en compte lors du calcul de la valeur minimale.",
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
      d: "Renvoie la valeur minimale dans un ensemble de données numériques.",
      a: "Valeur minimale dans un ensemble de données numériques.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage à prendre en compte lors du calcul de la valeur minimale.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à prendre en compte lors du calcul de la valeur minimale.",
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
      d: "Renvoie la valeur médiane dans un ensemble de données numériques.",
      a: "Valeur médiane dans un ensemble de données numériques.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage à prendre en compte lors du calcul de la valeur médiane.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à prendre en compte lors du calcul de la valeur médiane.",
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
      d: "Renvoie la valeur numérique maximale dans un ensemble de données.",
      a: "Valeur numérique maximale dans un ensemble de données.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage à prendre en compte lors du calcul de la valeur maximale.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à prendre en compte lors du calcul de la valeur maximale.",
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
      d: "Renvoie la valeur maximale dans un ensemble de données numériques.",
      a: "Valeur maximale dans un ensemble de données numériques.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage à prendre en compte lors du calcul de la valeur maximale.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à prendre en compte lors du calcul de la valeur maximale.",
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
      d: "Renvoie la valeur de la distribution cumulative log-normale inverse avec une moyenne et un écart type donnés à une valeur spécifiée.",
      a: "Fonction de distribution cumulative log-normale inverse.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "L'entrée de la fonction de distribution cumulative log-normale inverse.",
          example: "0.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "moyenne",
          detail: "La moyenne (mu) de la fonction de distribution cumulative log-normale inverse.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "écart_type",
          detail: "L'écart type (sigma) de la fonction de distribution cumulative log-normale inverse.",
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
      d: "Renvoie la valeur de la distribution cumulative log-normale avec une moyenne et un écart type donnés à une valeur spécifiée.",
      a: "Probabilité de distribution cumulative log-normale.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "L'entrée de la fonction de distribution cumulative log-normale.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "moyenne",
          detail: "La moyenne (mu) de la fonction de distribution cumulative log-normale.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "écart_type",
          detail: "L'écart type (sigma) de la fonction de distribution cumulative log-normale.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatif",
          detail: "Déterminez la valeur logique de la forme fonction. Si TRUE(), il renvoie la fonction de distribution cumulative ; s'il est FALSE(), il renvoie la fonction de densité de probabilité.",
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
      d: "Renvoie la valeur p unilatérale d'un test Z avec une distribution standard.",
      a: "Valeur p unilatérale d'un test z.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "données",
          detail: "Tableau ou plage contenant l'ensemble de données à prendre en compte.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "valeur",
          detail: "La statistique de test à utiliser dans le test Z.",
          example: "B2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "écart_type",
          detail: "L'écart type à prendre en compte pour le test Z. Si cela n’est pas fourni, l’écart type des données sera utilisé.",
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
      d: "Étant donné un ensemble de valeurs et les probabilités correspondantes, calcule la probabilité qu'une valeur choisie au hasard se situe entre deux limites.",
      a: "Les valeurs de probabilité se situent dans une plage.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "données",
          detail: "Tableau ou plage contenant l’ensemble de données à prendre en compte.",
          example: "A3:A6",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "probabilités",
          detail: "Tableau ou plage contenant des probabilités correspondant aux `données`.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "limite_inférieure",
          detail: "Limite inférieure de la plage de valeurs pour laquelle calculer la probabilité.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "limite_supérieure",
          detail: "Limite supérieure de la plage de valeurs pour laquelle calculer la probabilité.",
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
      d: "Renvoie une valeur la plus proche d'un quartile spécifié d'un ensemble de données à l'exclusion de 0 et 4.",
      a: "Valeur la plus proche d'un quartile spécifique d'un ensemble de données à l'exclusion de 0 et 4.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données",
          detail: "Tableau ou plage contenant l'ensemble de données à prendre en compte.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numéro_quartile",
          detail: "Quel quartile retourner.",
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
      d: "Renvoie une valeur la plus proche d'un quartile spécifié d'un ensemble de données.",
      a: "Valeur la plus proche d'un quartile spécifique d'un ensemble de données.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données",
          detail: "Tableau ou plage contenant l'ensemble de données à prendre en compte.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "numéro_quartile",
          detail: "Quelle valeur de quartile renvoyer.",
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
      d: "Renvoie la valeur de la fonction de distribution de Poisson (ou fonction de distribution cumulative de Poisson) pour une valeur et une moyenne spécifiées.",
      a: "Fonction de distribution de Poisson.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "L'entrée de la fonction de distribution de Poisson.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "moyenne",
          detail: "La moyenne (mu) de la fonction de distribution de Poisson.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatif",
          detail: "S'il faut utiliser la fonction de distribution cumulative de Poisson plutôt que la fonction de distribution.",
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
      d: "Calcule le carré de r, le coefficient de corrélation produit-moment de Pearson d'un ensemble de données.",
      a: "Carré du coefficient de corrélation.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données_y",
          detail: "Plage représentant le tableau ou la matrice de données dépendantes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données_x",
          detail: "Plage représentant le tableau ou la matrice de données indépendantes.",
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
      d: "Calcule la probabilité de la queue gauche pour une distribution t de Student avec une entrée donnée (x).",
      a: "La distribution t de Student à gauche",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "L'entrée de la fonction de distribution t.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrés_liberté",
          detail: "Le nombre de degrés de liberté.",
          example: "30",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatif",
          detail: "Si cumulative est TRUE, T.DIST renvoie la fonction de distribution cumulative ; si FALSE, il renvoie la fonction de densité de probabilité.",
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
      d: "Calcule la probabilité d'une distribution t de Student bilatéral avec une entrée donnée (x).",
      a: "La distribution t de Student à deux queues",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "L'entrée de la fonction de distribution t.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrés_liberté",
          detail: "Le nombre de degrés de liberté.",
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
      d: "Calcule la probabilité de la queue droite pour une distribution t de Student avec une entrée donnée (x).",
      a: "La distribution t de Student à queue droite",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "L'entrée de la fonction de distribution t.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrés_liberté",
          detail: "Le nombre de degrés de liberté.",
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
      d: "Calcule l'inverse négatif de la fonction TDIST unilatérale.",
      a: "T.INV",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "probabilité",
          detail: "La probabilité associée à la distribution t bilatérale.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrés_liberté",
          detail: "Le nombre de degrés de liberté.",
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
      d: "Calcule l'inverse de la fonction TDIST bilatérale.",
      a: "T.INV.2T",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "probabilité",
          detail: "La probabilité associée à la distribution t bilatérale.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrés_liberté",
          detail: "Le nombre de degrés de liberté.",
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
      d: "test t. Renvoie la probabilité associée au test t de Student. Détermine si deux échantillons sont susceptibles de provenir des deux mêmes populations sous-jacentes ayant la même moyenne.",
      a: "Renvoie la probabilité associée au test t.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "plage1",
          detail: "Premier échantillon de données ou groupe de cellules à prendre en compte pour le test t.",
          example: "A1:A4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "plage2",
          detail: "Deuxième échantillon de données ou groupe de cellules à prendre en compte pour le test t.",
          example: "B1:B4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "queues",
          detail: "Spécifie le nombre de queues de distribution.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "type",
          detail: "Spécifie le type de test t.",
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
      d: "Calcule la distribution de probabilité F gauche (degré de diversité) pour deux ensembles de données avec une entrée x donnée. Alternativement appelée distribution de Fisher-Snedecor ou distribution F de Snedecor.",
      a: "Distribution de probabilité F (à gauche).",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "L'entrée de la fonction de distribution de probabilité F. La valeur à laquelle évaluer la fonction.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrés_liberté1",
          detail: "Le numérateur du nombre de degrés de liberté.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrés_liberté2",
          detail: "Le dénominateur du nombre de degrés de liberté.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulatif",
          detail: "Valeur logique qui détermine la forme de la fonction.",
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
      d: "Calcule la distribution de probabilité F droite (degré de diversité) pour deux ensembles de données avec une entrée x donnée. Alternativement appelée distribution de Fisher-Snedecor ou distribution F de Snedecor.",
      a: "Distribution de probabilité F.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "L'entrée de la fonction de distribution de probabilité F. La valeur à laquelle évaluer la fonction.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrés_liberté1",
          detail: "Le numérateur du nombre de degrés de liberté.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "degrés_liberté2",
          detail: "Le dénominateur du nombre de degrés de liberté.",
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
      d: "Calcule la variance en fonction d'une population entière.",
      a: "Variation de la population entière.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage de la population.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à inclure dans la population.",
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
      d: "Calcule la variance en fonction d'un échantillon.",
      a: "Variance.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "La première valeur ou plage de l’échantillon.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à inclure dans l’échantillon.",
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
      d: "Calcule la variance en fonction d'un échantillon, en définissant le texte sur la valeur `0`.",
      a: "Variance de l'échantillon (texte comme 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "La première valeur ou plage de l’échantillon.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à inclure dans l’échantillon.",
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
      d: "Calcule la variance en fonction d'une population entière, en définissant le texte sur la valeur `0`.",
      a: "Variance de la population entière (texte 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Première valeur ou plage de la population.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à inclure dans la population.",
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
      d: "Calcule l'erreur type de la valeur y prévue pour chaque x dans la régression d'un ensemble de données.",
      a: "Erreur type des valeurs y prévues dans la régression.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données_y",
          detail: "Plage représentant le tableau ou la matrice de données dépendantes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données_x",
          detail: "Plage représentant le tableau ou la matrice de données indépendantes.",
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
      d: "Calcule l'équivalent normalisé d'une variable aléatoire étant donné la moyenne et l'écart type de la distribution.",
      a: "Equivalent normalisé d'une variable aléatoire.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur de la variable aléatoire à normaliser.",
          example: "96",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "moyenne",
          detail: "La moyenne de la distribution.",
          example: "80",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "écart_type",
          detail: "L'écart type de la distribution.",
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
      d: "Renvoie le nième plus petit élément d'un ensemble de données, où n est défini par l'utilisateur.",
      a: "Nième plus petit élément d’un ensemble de données.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données",
          detail: "Tableau ou plage contenant l'ensemble de données à prendre en compte.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "n",
          detail: "Le rang du plus petit au plus grand de l’élément à renvoyer.",
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
      d: "Calcule la pente de la droite résultant de la régression linéaire d'un ensemble de données.",
      a: "Pente de la ligne issue de la régression linéaire des données.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données_y",
          detail: "Plage représentant le tableau ou la matrice de données dépendantes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données_x",
          detail: "Plage représentant le tableau ou la matrice de données indépendantes.",
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
      d: "Calcule l'asymétrie d'un ensemble de données, qui décrit la symétrie de cet ensemble de données par rapport à la moyenne.",
      a: "Asymétrie d'un ensemble de données.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "La première valeur ou plage de l’ensemble de données.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à inclure dans l’ensemble de données.",
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
      d: "Calcule l'asymétrie d'un ensemble de données, qui décrit la symétrie de cet ensemble de données par rapport à la moyenne. Cela suppose que l'ensemble de données concerne la population.",
      a: "Asymétrie de l'ensemble de données d'une population.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "La première valeur ou plage de l’ensemble de données.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "Valeurs ou plages supplémentaires à inclure dans l’ensemble de données.",
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
      d: "Recherche verticale. Recherche une clé dans la première colonne d'une plage et renvoie la valeur d'une cellule spécifiée dans la ligne trouvée.",
      a: "Recherche verticale.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "clé_recherche",
          detail: "La valeur à rechercher. Par exemple, ` 42 `, ` ` Chats ` ` ou ` I24 `.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "plage",
          detail: "La plage à prendre en compte pour la recherche. La première colonne de la plage est recherchée pour la clé spécifiée dans `clé_recherche`.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "index",
          detail: "L'index de colonne de la valeur à renvoyer, où la première colonne de ` plage ` est numérotée 1.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "est_trié",
          detail: "Indique si la colonne à rechercher (la première colonne de la plage spécifiée) est triée, auquel cas la correspondance la plus proche pour `clé_recherche` sera renvoyée.",
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
      d: "Recherche horizontale. Recherche une clé dans la première ligne d'une plage et renvoie la valeur d'une cellule spécifiée dans la colonne trouvée.",
      a: "Recherche horizontale",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "clé_recherche",
          detail: "La valeur à rechercher. Par exemple, ` 42 `, ` ` Chats ` ` ou ` I24 `.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "plage",
          detail: "La plage à prendre en compte pour la recherche. La première ligne de la plage est recherchée pour la clé spécifiée dans `clé_recherche`.",
          example: "A2:Z6",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "index",
          detail: "L'index de ligne de la valeur à renvoyer, où la première ligne de ` plage ` est numérotée 1.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "est_trié",
          detail: "Indique si la ligne à rechercher (la première ligne de la plage spécifiée) est triée.",
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
      d: "Recherche une clé dans une ligne ou une colonne triée et renvoie la valeur de la cellule dans une plage de résultats située à la même position que la ligne ou la colonne de recherche.",
      a: "Recherchez une valeur.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "clé_recherche",
          detail: "La valeur à rechercher dans la ligne ou la colonne. Par exemple, ` 42 `, ` ` Chats ` ` ou ` I24 `.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "plage_recherche|tableau_résultat_recherche",
          detail: "Une méthode d'utilisation de cette fonction consiste à fournir une seule ligne ou colonne triée `plage_recherche` pour rechercher la `clé_recherche` avec un deuxième argument `plage_résultat`. L'autre façon consiste à combiner ces deux arguments en un seul ` tableau_résultat_recherche ` où la première ligne ou colonne est recherchée et une valeur est renvoyée à partir de la dernière ligne ou colonne du tableau. Si `clé_recherche` n'est pas trouvé, une correspondance non exacte peut être renvoyée.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "plage_résultat",
          detail: "Plage à partir de laquelle renvoyer un résultat. La valeur renvoyée correspond à l'emplacement où `clé_recherche` se trouve dans `plage_recherche`. Cette plage ne doit comporter qu'une seule ligne ou colonne et ne doit pas être utilisée si vous utilisez la méthode `tableau_résultat_recherche`.",
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
      d: "Renvoie une référence de cellule sous forme de chaîne.",
      a: "Référence de cellule sous forme de chaîne.",
      m: [
        2,
        5
      ],
      p: [
        {
          name: "ligne",
          detail: "Le numéro de ligne de la référence de cellule",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonne",
          detail: "Le numéro de colonne (pas le nom) de la référence de cellule. `A` est le numéro de colonne `1`.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mode_relatif_absolu",
          detail: "Un indicateur indiquant si la référence est absolue en ligne/colonne. `1` est la ligne et la colonne absolues (par exemple $A$1), `2` est la ligne absolue et la colonne relative (par exemple A$1), `3` est la ligne relative et la colonne absolue (par exemple $A1) et `4` est la ligne et la colonne relative (par exemple A1).",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "utiliser_notation_a1",
          detail: "Un booléen indiquant s'il faut utiliser la notation de style ` A1 ` (TRUE) ou la notation de style ` R1C1 ` (FALSE).",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feuille",
          detail: "Texte indiquant le nom de la feuille vers laquelle pointe l'adresse.",
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
      d: "Renvoie une référence de cellule spécifiée par une chaîne.",
      a: "Une référence de cellule spécifiée par une chaîne.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "référence_cellule_sous_forme_chaîne",
          detail: "Une référence de cellule, écrite sous forme de chaîne entourée de guillemets.",
          example: "\"Sheet2!\"&B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "est_notation_a1",
          detail: "Indique si la référence de cellule est en notation A1 (TRUE) ou R1C1 (FALSE).",
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
      d: "Renvoie le numéro de ligne d'une cellule spécifiée.",
      a: "Numéro de ligne d'une cellule spécifiée.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "référence_cellule",
          detail: "Cellule dont le numéro de ligne sera renvoyé.",
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
      d: "Renvoie le nombre de lignes dans un tableau ou une plage spécifié.",
      a: "Nombre de lignes dans un tableau ou une plage spécifiée.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "plage",
          detail: "Plage dont le nombre de lignes sera renvoyé.",
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
      d: "Renvoie le numéro de colonne d'une cellule spécifiée, avec `A=1`.",
      a: "Numéro de colonne d'une cellule spécifiée.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "référence_cellule",
          detail: "Cellule dont le numéro de colonne sera renvoyé. La colonne `A` correspond à `1`.",
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
      d: "Renvoie le nombre de colonnes dans un tableau ou une plage spécifiée.",
      a: "Nombre de colonnes dans un tableau ou une plage spécifiée.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "plage",
          detail: "Plage dont le nombre de colonnes sera renvoyé.",
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
      d: "Renvoie une référence de plage décalée d’un nombre spécifié de lignes et de colonnes par rapport à une référence de cellule de départ.",
      a: "Un décalage de référence de plage par rapport à une cellule.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "référence_cellule",
          detail: "Point de départ à partir duquel compter les lignes et colonnes décalées.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "décalage_lignes",
          detail: "Le nombre de lignes à décaler.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "décalage_colonnes",
          detail: "Le nombre de colonnes à décaler.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "hauteur",
          detail: "Hauteur de la plage à renvoyer en commençant à la cible de décalage.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "largeur",
          detail: "La largeur de la plage à renvoyer en commençant à la cible de décalage.",
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
      d: "Renvoie la position relative d'un élément dans une plage qui correspond à une valeur spécifiée.",
      a: "Position de l'élément dans la plage qui correspond à la valeur.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "clé_recherche",
          detail: "La valeur à rechercher. Par exemple, ` 42 `, ` ` Chats ` ` ou ` I24 `.",
          example: "\"Sunday\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "plage",
          detail: "Le tableau unidimensionnel à rechercher.",
          example: "A2:A9",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "type_recherche",
          detail: "La méthode de recherche. `1` (par défaut) trouve la plus grande valeur inférieure ou égale à `clé_recherche` lorsque `plage` est triée par ordre croissant. `0` trouve la valeur exacte lorsque `plage` n'est pas trié. `-1` trouve la plus petite valeur supérieure ou égale à `clé_recherche` lorsque `plage` est trié par ordre décroissant.",
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
      d: "Renvoie le contenu d'une cellule, spécifié par le décalage de ligne et de colonne.",
      a: "Contenu de la cellule spécifié par décalage de ligne et de colonne.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "référence",
          detail: "Tableau de cellules dans lequel le décalage est effectué.",
          example: "A1:C20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "ligne",
          detail: "Le nombre de lignes décalées.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonne",
          detail: "Le nombre de colonnes décalées.",
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
      d: "Extrait une valeur agrégée d'un tableau croisé dynamique qui correspond aux en-têtes de ligne et de colonne spécifiés.",
      a: "Extrait une valeur agrégée d'un tableau croisé dynamique qui correspond aux en-têtes de ligne et de colonne spécifiés.",
      m: [
        2,
        254
      ],
      p: [
        {
          name: "nom_valeur",
          detail: "Le nom de la valeur du tableau croisé dynamique pour laquelle vous souhaitez obtenir des données.",
          example: "\"SOMME du nombre d'unités\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cellule_tableau_croisé",
          detail: "Toute référence à une cellule du tableau croisé dynamique souhaité (coin supérieur recommandé).",
          example: "'Pivot table'!A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "colonne_origine",
          detail: "Le nom de la colonne dans l'ensemble de données d'origine (pas le tableau croisé dynamique).",
          example: "\"division\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        },
        {
          name: "élément_tcd",
          detail: "Le nom de la ligne ou de la colonne affichée dans le tableau croisé dynamique correspondant à *original_column* que vous souhaitez récupérer.",
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
      d: "Renvoie un élément d'une liste de choix basée sur l'index.",
      a: "Un élément d'une liste de choix basée sur l'index.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "index",
          detail: "Quel choix (parmi les 30 proposés) retourner.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "choix1",
          detail: "Une valeur potentielle à restituer. Requis. Peut être une référence à une cellule ou à une valeur individuelle.",
          example: "\"A\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "choix2",
          detail: "Valeurs supplémentaires parmi lesquelles choisir.",
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
      d: "Crée un lien hypertexte à l'intérieur d'une cellule.",
      a: "Crée un lien hypertexte à l'intérieur d'une cellule.",
      p: [
        {
          name: "url",
          detail: "L'URL complète de l'emplacement du lien entre guillemets ou une référence à une cellule contenant une telle URL.",
          example: "\"http://www.luckysheet.com/\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "étiquette_lien",
          detail: "Le texte à afficher dans la cellule sous forme de lien, entre guillemets, ou une référence à une cellule contenant une telle étiquette.",
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
      d: "Convertit une heure, une minute et une seconde fournies en une heure.",
      a: "Convertit heure/minute/seconde en heure.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "heure",
          detail: "La composante horaire du temps.",
          example: "11",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "minute",
          detail: "La composante infime du temps.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "seconde",
          detail: "La deuxième composante du temps.",
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
      d: "Renvoie la fraction d'une journée de 24 heures représentée par l'heure.",
      a: "Convertit une chaîne d'heure en sa représentation de numéro de série.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "chaîne_heure",
          detail: "La chaîne qui contient la représentation temporelle.",
          example: "\"14:15:00\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "EOMONTH",
      t: 6,
      d: "Renvoie une date du dernier jour d'un mois qui tombe un nombre spécifié de mois avant ou après une autre date.",
      a: "Dernier jour du mois avant ou après une date.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "date_début",
          detail: "La date à partir de laquelle calculer le résultat.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "nombre_de_mois",
          detail: "Le nombre de mois avant (négatif) ou après (positif) 'start_date' à prendre en compte.",
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
      d: "Renvoie une date un nombre spécifié de mois avant ou après une autre date.",
      a: "Date plusieurs mois avant/après une autre date.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "date_début",
          detail: "La date à partir de laquelle calculer le résultat.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "nombre_de_mois",
          detail: "Le nombre de mois avant (négatif) ou après (positif) 'start_date' à calculer.",
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
      d: "Renvoie la deuxième composante d'une heure spécifique, au format numérique.",
      a: "Deuxième composante d'un temps précis.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "heure",
          detail: "Le moment à partir duquel calculer la deuxième composante",
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
      d: "Renvoie la composante minute d’une heure spécifique, au format numérique.",
      a: "Composante infime d’une heure spécifique.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "heure",
          detail: "Heure à partir de laquelle calculer la composante minute.",
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
      d: "Renvoie la composante horaire d’une heure spécifique, au format numérique.",
      a: "Composant horaire d’une heure spécifique.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "heure",
          detail: "Heure à partir de laquelle calculer la composante horaire.",
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
      d: "Renvoie la date et l'heure actuelles sous forme de valeur de date.",
      a: "Date et heure actuelles comme valeur de date.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "NETWORKDAYS",
      t: 6,
      d: "Renvoie le nombre de jours ouvrés nets entre deux jours fournis.",
      a: "Jours ouvrés nets entre deux jours prévus.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "date_début",
          detail: "Date de début de la période à partir de laquelle calculer le nombre de jours ouvrés nets.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "date_fin",
          detail: "Date de fin de période à partir de laquelle calculer le nombre de jours ouvrés nets.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "jours_fériés",
          detail: "Constante de plage ou de tableau contenant les numéros de série de date à prendre en compte les jours fériés.",
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
      d: "Renvoie le nombre de jours ouvrables nets entre deux jours fournis, à l'exclusion des jours de week-end et des jours fériés spécifiés.",
      a: "Jours ouvrés nets entre deux dates (en précisant les week-ends).",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "date_début",
          detail: "Date de début de la période à partir de laquelle calculer le nombre de jours ouvrés nets.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "date_fin",
          detail: "Date de fin de période à partir de laquelle calculer le nombre de jours ouvrés nets.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "week_end",
          detail: "Un nombre ou une chaîne représentant les jours de la semaine qui sont considérés comme des week-ends.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "jours_fériés",
          detail: "Constante de plage ou de tableau contenant les dates à considérer comme jours fériés.",
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
      d: "Renvoie un nombre représentant la semaine ISO de l'année où se situe la date fournie.",
      a: "Numéro de semaine ISO de l’année.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "date",
          detail: "Date pour laquelle déterminer le numéro de semaine ISO. Doit être une référence à une cellule contenant une date, une fonction renvoyant un type de date ou un nombre.",
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
      d: "Renvoie un nombre représentant la semaine de l'année où se situe la date fournie.",
      a: "Numéro de semaine de l'année.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "date",
          detail: "La date pour laquelle déterminer le numéro de semaine. Doit être une référence à une cellule contenant une date, une fonction renvoyant un type de date ou un nombre.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "type",
          detail: "Un nombre représentant le jour où commence une semaine. Dimanche = 1.",
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
      d: "Renvoie un nombre représentant le jour de la semaine de la date fournie.",
      a: "Jour de la semaine de la date fournie (sous forme de numéro).",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "date",
          detail: "La date pour laquelle déterminer le jour de la semaine. Doit être une référence à une cellule contenant une date, une fonction renvoyant un type de date ou un nombre.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "type",
          detail: "Un nombre indiquant le système de numérotation à utiliser pour représenter les jours de la semaine. Par défaut, compte commençant par dimanche = 1.",
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
      d: "Renvoie le jour du mois correspondant à une date spécifique, au format numérique.",
      a: "Jour du mois correspondant à une date spécifique.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "date",
          detail: "La date à partir de laquelle extraire le jour.",
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
      d: "Renvoie le nombre de jours entre deux dates.",
      a: "Nombre de jours entre deux dates.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "date_fin",
          detail: "La fin de la plage de dates.",
          example: "2011-3-15",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "date_début",
          detail: "Le début de la plage de dates.",
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
      d: "Renvoie la différence entre deux jours sur la base de l'année de 360 ​​jours utilisée dans certains calculs d'intérêts financiers.",
      a: "Jours entre deux dates sur une année de 360 ​​jours.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "date_début",
          detail: "La date de début à prendre en compte dans le calcul. Doit être une référence à une cellule contenant une date, une fonction renvoyant un type de date ou un nombre.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "date_fin",
          detail: "La date de fin à prendre en compte dans le calcul. Doit être une référence à une cellule contenant une date, une fonction renvoyant un type de date ou un nombre.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "méthode",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Convertit une année, un mois et un jour fournis en date.",
      a: "Convertit l'année/mois/jour en date.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "année",
          detail: "Composant année de la date.",
          example: "1969",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mois",
          detail: "Le composant mois de la date.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "jour",
          detail: "Composant jour de la date.",
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
      d: "Convertit une chaîne de date fournie dans un format connu en une valeur de date.",
      a: "Convertit une chaîne de date en valeur de date.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "chaîne_date",
          detail: "La chaîne représentant la date.",
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
      d: "Calcule le nombre de jours, de mois ou d'années entre deux dates.",
      a: "Différence de dates.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "date_début",
          detail: "La date de début à prendre en compte dans le calcul. Doit être une référence à une cellule contenant une date, une fonction renvoyant un type de date ou un nombre.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "date_fin",
          detail: "La date de fin à prendre en compte dans le calcul. Doit être une référence à une cellule contenant une date, une fonction renvoyant un type de date ou un nombre.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "unité",
          detail: "Abréviation de chaîne pour unité de temps. Par exemple, ` M ` pour mois. Les valeurs acceptées sont `Y`, `M`, `D`, `MD`, `YM`, `YD`.",
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
      d: "Calcule la date après un certain nombre de jours ouvrables à compter d'une date de début spécifiée.",
      a: "Nombre de jours ouvrables à compter de la date de début.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "date_début",
          detail: "La date à partir de laquelle commencer à compter.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "nombre_jours",
          detail: "Le nombre de jours ouvrables à avancer à partir de `date_début`. Si négatif, compte à rebours.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "jours_fériés",
          detail: "Constante de plage ou de tableau contenant les dates à prendre en compte les jours fériés.",
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
      d: "Calcule la date après un nombre spécifié de jours ouvrables, à l'exclusion des jours de week-end et des jours fériés spécifiés.",
      a: "Date après un certain nombre de jours ouvrables (en précisant le week-end).",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "date_début",
          detail: "La date à partir de laquelle commencer à compter.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "nombre_jours",
          detail: "Le nombre de jours ouvrables à avancer à partir de `date_début`. Si négatif, compte à rebours.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "week_end",
          detail: "Un nombre ou une chaîne représentant les jours de la semaine qui sont considérés comme des week-ends.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "jours_fériés",
          detail: "Constante de plage ou de tableau contenant les dates à prendre en compte les jours fériés.",
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
      d: "Renvoie l'année spécifiée par une date donnée.",
      a: "Année spécifiée par une date donnée.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "date",
          detail: "La date à partir de laquelle extraire l’année.",
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
      d: "Renvoie le nombre d'années, y compris les années fractionnaires, entre deux dates en utilisant une convention de décompte de jours spécifiée.",
      a: "Nombre exact d'années entre deux dates.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "date_début",
          detail: "La date de début à prendre en compte dans le calcul. Doit être une référence à une cellule contenant une date, une fonction renvoyant un type de date ou un nombre.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "date_fin",
          detail: "La date de fin à prendre en compte dans le calcul. Doit être une référence à une cellule contenant une date, une fonction renvoyant un type de date ou un nombre.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Renvoie la date actuelle sous forme de valeur de date.",
      a: "Date actuelle comme valeur de date.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "MONTH",
      t: 6,
      d: "Renvoie le mois de l'année dans lequel se situe une date spécifique, au format numérique.",
      a: "Mois de l'année correspondant à une date spécifique.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "date",
          detail: "La date à partir de laquelle extraire le mois.",
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
      d: "Calcule le taux d'intérêt effectif annuel en fonction du taux nominal et du nombre de périodes de composition par an.",
      a: "Taux d’intérêt effectif annuel.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "taux_nominal",
          detail: "Le taux d'intérêt nominal par an.",
          example: "0.99",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "périodes_par_an",
          detail: "Le nombre de périodes de composition par an.",
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
      d: "Formate un nombre dans la devise spécifique aux paramètres régionaux de votre feuille de calcul.",
      a: "Formate un nombre en tant que devise spécifique aux paramètres régionaux de votre feuille de calcul.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "nombre",
          detail: "La valeur à formater.",
          example: "1.2351",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nombre_décimales",
          detail: "Le nombre de décimales à afficher.",
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
      d: "Convertit une offre de prix donnée sous forme de fraction décimale en valeur décimale.",
      a: "Convertit une fraction décimale en valeur décimale.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "prix_fractionnaire",
          detail: "Le devis donné en utilisant des conventions décimales fractionnaires.",
          example: "100.10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unité",
          detail: "Les unités de la fraction, par ex. ` 8 ` pour 1/8ème ou ` 32 ` pour 1/32ème.",
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
      d: "Convertit une offre de prix donnée sous forme de valeur décimale en fraction décimale.",
      a: "Convertit une valeur décimale en fraction décimale.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "prix_décimal",
          detail: "L'offre de prix donnée sous forme de valeur décimale.",
          example: "100.125",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unité",
          detail: "Les unités de la fraction souhaitée, par ex. ` 8 ` pour 1/8ème ou ` 32 ` pour 1/32ème.",
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
      d: "Calcule l'amortissement d'un actif pour une période spécifiée à l'aide de la méthode arithmétique dégressive.",
      a: "Amortissement selon la méthode de l'amortissement dégressif.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "coût",
          detail: "Le coût initial de l'actif.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_résiduelle",
          detail: "La valeur du bien à la fin de l'amortissement.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "durée_vie",
          detail: "Le nombre de périodes sur lesquelles l'actif est amorti.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "période",
          detail: "La seule période de la `vie` pour laquelle calculer l'amortissement.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mois",
          detail: "Le nombre de mois au cours de la première année d'amortissement.",
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
      d: "Calcule l'amortissement d'un actif pour une période spécifiée à l'aide de la méthode du double solde dégressif.",
      a: "Amortissement selon la méthode du solde double dégressif.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "coût",
          detail: "Le coût initial de l'actif.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_résiduelle",
          detail: "La valeur du bien à la fin de l'amortissement.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "durée_vie",
          detail: "Le nombre de périodes sur lesquelles l'actif est amorti.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "période",
          detail: "La seule période de la `vie` pour laquelle calculer l'amortissement.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "facteur",
          detail: "Le facteur par lequel la dépréciation diminue.",
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
      d: "Calcule le taux d'intérêt d'un investissement de rente sur la base de versements périodiques de montant constant et de l'hypothèse d'un taux d'intérêt constant.",
      a: "Taux d'intérêt d'un investissement de rente.",
      m: [
        3,
        6
      ],
      p: [
        {
          name: "nombre_périodes",
          detail: "Le nombre de paiements à effectuer.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "paiement_par_période",
          detail: "Le montant par période à payer.",
          example: "-100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_actuelle",
          detail: "La valeur actuelle de la rente.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_future",
          detail: "La valeur future restant après le paiement final.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_ou_début",
          detail: "Si les paiements sont dus à la fin (`0`) ou au début (`1`) de chaque période.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "estimation_taux",
          detail: "Une estimation du taux d’intérêt.",
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
      d: "Calcule le capital cumulé payé sur une plage de périodes de paiement pour un investissement sur la base de paiements périodiques à montant constant et d'un taux d'intérêt constant.",
      a: "Capital cumulatif payé sur une série de périodes.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "taux",
          detail: "Le taux d'intérêt.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nombre_périodes",
          detail: "Le nombre de paiements à effectuer.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_actuelle",
          detail: "La valeur actuelle de la rente.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "première_période",
          detail: "Le numéro de la période de paiement pour commencer le calcul cumulé.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dernière_période",
          detail: "Le numéro de la période de paiement pour terminer le calcul cumulé.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_ou_début",
          detail: "Si les paiements sont dus à la fin (`0`) ou au début (`1`) de chaque période.",
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
      d: "Calcule le nombre de coupons, ou paiements d'intérêts, entre la date de règlement et la date d'échéance de l'investissement.",
      a: "Nombre de coupons entre règlement et échéance.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "02",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fréquence",
          detail: "Le nombre de paiements d’intérêts ou de coupons par an (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule l'amortissement d'un actif pour une période spécifiée en utilisant la méthode de la somme des années.",
      a: "Amortissement via la méthode de la somme des années.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "coût",
          detail: "Le coût initial de l'actif.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_résiduelle",
          detail: "La valeur du bien à la fin de l'amortissement.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "durée_vie",
          detail: "Le nombre de périodes sur lesquelles l'actif est amorti.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "période",
          detail: "La seule période de la `vie` pour laquelle calculer l'amortissement.",
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
      d: "Calcule le taux de rendement annualisé équivalent d'un bon du Trésor américain en fonction du taux d'actualisation.",
      a: "Taux de rendement équivalent pour un bon du Trésor.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taux_escompte",
          detail: "Le taux d'escompte de la facture au moment de l'achat.",
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
      d: "Calcule le rendement d'un bon du Trésor américain en fonction du prix.",
      a: "Le rendement d'un bon du Trésor américain en fonction du prix.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prix",
          detail: "Le prix auquel le titre est acheté pour 100 de sa valeur nominale.",
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
      d: "Calcule le prix d'un bon du Trésor américain en fonction du taux d'actualisation.",
      a: "Prix ​​des bons du Trésor américain.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taux_escompte",
          detail: "Le taux d'escompte de la facture au moment de l'achat.",
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
      d: "Calcule la valeur actuelle d'un investissement de rente sur la base de versements périodiques à montant constant et d'un taux d'intérêt constant.",
      a: "Valeur actuelle d'un investissement de rente.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "taux",
          detail: "Le taux d'intérêt.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nombre_périodes",
          detail: "Le nombre de paiements à effectuer.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "montant_paiement",
          detail: "Le montant par période à payer.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_future",
          detail: "La valeur future restant après le paiement final.",
          example: "D2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_ou_début",
          detail: "Si les paiements sont dus à la fin (`0`) ou au début (`1`) de chaque période.",
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
      d: "Calcule les intérêts courus d'un titre qui a des paiements périodiques.",
      a: "Intérêts de garantie courus avec paiements périodiques.",
      m: [
        6,
        8
      ],
      p: [
        {
          name: "date_émission",
          detail: "La date à laquelle le titre a été initialement émis.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "premier_paiement",
          detail: "Les intérêts de première date seront payés.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taux",
          detail: "Le taux d’intérêt annualisé.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_remboursement",
          detail: "Le montant du rachat par 100 de valeur nominale, ou pair.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fréquence",
          detail: "Le nombre de paiements d’intérêts ou de coupons par an (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "méthode_calcul",
          detail: "[Facultatif par défaut : TRUE()] - Une valeur logique qui spécifie la méthode utilisée pour calculer le total des intérêts courus lorsque la date de règlement est postérieure à la première date d'accumulation des intérêts. Si la valeur est VRAI, le total des intérêts courus depuis la date d'émission jusqu'à la date de règlement est renvoyé. Si la valeur est FAUX, renvoyez les intérêts courus depuis la première date d’accumulation des intérêts jusqu’à la date de règlement.",
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
      d: "Calcule les intérêts courus d'un titre qui paie des intérêts à l'échéance.",
      a: "Intérêts courus du titre payables à l’échéance.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "date_émission",
          detail: "La date à laquelle le titre a été initialement émis.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "La date d'échéance du titre.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taux",
          detail: "Le taux d’intérêt annualisé.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_remboursement",
          detail: "Le montant du rachat par 100 de valeur nominale, ou pair.",
          example: "1000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule le nombre de jours entre le premier coupon ou paiement d'intérêts et le règlement.",
      a: "Nombre de jours entre le premier coupon et le règlement.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fréquence",
          detail: "Le nombre de paiements d’intérêts ou de coupons par an (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule le nombre de jours dans la période de coupon ou de paiement des intérêts qui contient la date de règlement spécifiée.",
      a: "Jours de la période du coupon contenant la date de règlement.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fréquence",
          detail: "Le nombre de paiements d’intérêts ou de coupons par an (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule le nombre de jours entre la date de règlement et le prochain coupon ou paiement d'intérêts.",
      a: "Jours entre le règlement et le prochain coupon.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fréquence",
          detail: "Le nombre de paiements d’intérêts ou de coupons par an (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule la date du prochain coupon ou paiement des intérêts après la date de règlement.",
      a: "Date du prochain coupon après la date de règlement.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fréquence",
          detail: "Le nombre de paiements d’intérêts ou de coupons par an (1, 2 ou 4).",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule la date du dernier coupon ou paiement des intérêts avant la date de règlement.",
      a: "Date du dernier coupon avant la date de règlement.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fréquence",
          detail: "Le nombre de paiements d’intérêts ou de coupons par an (1, 2 ou 4).",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule la valeur future d'un investissement de rente sur la base de versements périodiques d'un montant constant et d'un taux d'intérêt constant.",
      a: "Valeur future d'un investissement de rente.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "taux",
          detail: "Le taux d'intérêt.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nombre_périodes",
          detail: "Le nombre de paiements à effectuer.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "montant_paiement",
          detail: "Le montant par période à payer.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_actuelle",
          detail: "La valeur actuelle de la rente.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_ou_début",
          detail: "Si les paiements sont dus à la fin (`0`) ou au début (`1`) de chaque période.",
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
      d: "Calcule la valeur future d'un capital en fonction d'une série spécifiée de taux d'intérêt potentiellement variables.",
      a: "Valeur future du principal issue d'une série de taux.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "capital",
          detail: "Le montant du capital initial ou de la valeur sur laquelle composer.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "barème_taux",
          detail: "Une série de taux d'intérêt à composer par rapport au `capital`.",
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
      d: "Calcule le rendement annuel d'un titre payant des intérêts périodiques, tel qu'un bon du Trésor américain, en fonction du prix.",
      a: "Rendement annuel d'un titre payant des intérêts périodiques.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taux",
          detail: "Le taux d’intérêt annualisé.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "prix",
          detail: "Le prix auquel le titre est acheté pour 100 de sa valeur nominale.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_remboursement",
          detail: "Le montant du rachat par 100 de valeur nominale, ou pair.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fréquence",
          detail: "Le nombre de paiements d’intérêts ou de coupons par an (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule le rendement annuel d'un titre à escompte (ne portant pas intérêt), en fonction du prix.",
      a: "Rendement annuel d'un titre à escompte.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prix",
          detail: "Le prix auquel le titre est acheté pour 100 de sa valeur nominale.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_remboursement",
          detail: "Le montant du rachat par 100 de valeur nominale, ou pair.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule le taux d'intérêt nominal annuel en fonction du taux effectif et du nombre de périodes de composition par an.",
      a: "Taux d’intérêt nominal annuel.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "taux_effectif",
          detail: "Le taux d’intérêt effectif par an.",
          example: "0.85",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "périodes_par_an",
          detail: "Le nombre de périodes de composition par an.",
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
      d: "Calcule le taux de rendement interne d'un investissement sur la base d'une série spécifiée de flux de trésorerie potentiellement espacés de manière irrégulière.",
      a: "Taux de rendement interne compte tenu des flux de trésorerie non périodiques.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "montants_flux_trésorerie",
          detail: "Tableau ou plage contenant les revenus ou les paiements associés à l'investissement.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "dates_flux_trésorerie",
          detail: "Un tableau ou une plage avec des dates correspondant aux flux de trésorerie dans `montants_flux_trésorerie`.",
          example: "C2:C25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "estimation_taux",
          detail: "Une estimation du taux de rendement interne.",
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
      d: "Calcule le taux de rendement interne modifié d'un investissement en fonction d'une série de flux de trésorerie périodiques et de la différence entre le taux d'intérêt payé sur le financement et le rendement reçu sur les revenus réinvestis.",
      a: "Taux de rentabilité interne modifié.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "montants_flux_trésorerie",
          detail: "Tableau ou plage contenant les revenus ou les paiements associés à l'investissement.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "taux_financement",
          detail: "Le taux d'intérêt payé sur les fonds investis.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "taux_rendement_réinvestissement",
          detail: "Le rendement (en pourcentage) obtenu sur le réinvestissement des revenus reçus de l'investissement.",
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
      d: "Calcule le taux de rendement interne d'un investissement sur la base d'une série de flux de trésorerie périodiques.",
      a: "Taux de rendement interne compte tenu des flux de trésorerie périodiques.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "montants_flux_trésorerie",
          detail: "Tableau ou plage contenant les revenus ou les paiements associés à l'investissement.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "estimation_taux",
          detail: "Une estimation du taux de rendement interne.",
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
      d: "Calcule la valeur actuelle nette d'un investissement sur la base d'une série de flux de trésorerie périodiques et d'un taux d'actualisation.",
      a: "La valeur actuelle nette d'un investissement basée sur une série de flux de trésorerie périodiques et un taux d'actualisation.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "taux_escompte",
          detail: "Le taux d'actualisation de l'investissement sur une période.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "flux_trésorerie1",
          detail: "Le premier flux de trésorerie futur.",
          example: "200",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "flux_trésorerie2",
          detail: "Flux de trésorerie futurs supplémentaires.",
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
      d: "Calcule la valeur actuelle nette d'un investissement sur la base d'une série spécifiée de flux de trésorerie potentiellement espacés de manière irrégulière et d'un taux d'actualisation.",
      a: "Valeur actuelle nette compte tenu des flux de trésorerie non périodiques.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "taux_escompte",
          detail: "Le taux d'actualisation de l'investissement sur une période.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "montants_flux_trésorerie",
          detail: "Plage de cellules contenant les revenus ou les paiements associés à l'investissement.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "dates_flux_trésorerie",
          detail: "Une plage de cellules avec des dates correspondant aux flux de trésorerie dans `montants_flux_trésorerie`.",
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
      d: "Calcule les intérêts cumulés sur une plage de périodes de paiement pour un investissement sur la base de paiements périodiques à montant constant et d'un taux d'intérêt constant.",
      a: "Intérêts cumulatifs payés sur une série de périodes.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "taux",
          detail: "Le taux d'intérêt.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nombre_périodes",
          detail: "Le nombre de paiements à effectuer.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_actuelle",
          detail: "La valeur actuelle de la rente.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "première_période",
          detail: "Le numéro de la période de paiement pour commencer le calcul cumulé.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dernière_période",
          detail: "Le numéro de la période de paiement pour terminer le calcul cumulé.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_ou_début",
          detail: "Si les paiements sont dus à la fin (`0`) ou au début (`1`) de chaque période.",
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
      d: "Calcule le paiement périodique pour un investissement de rente sur la base de paiements périodiques à montant constant et d'un taux d'intérêt constant.",
      a: "Paiement périodique pour un investissement en rente.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "taux",
          detail: "Le taux d'intérêt.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nombre_périodes",
          detail: "Le nombre de paiements à effectuer.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_actuelle",
          detail: "La valeur actuelle de la rente.",
          example: " 100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_future",
          detail: "La valeur future restant après le paiement final.",
          example: "D2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_ou_début",
          detail: "Si les paiements sont dus à la fin (`0`) ou au début (`1`) de chaque période.",
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
      d: "Calcule le paiement des intérêts pour un investissement sur la base de paiements périodiques à montant constant et d'un taux d'intérêt constant.",
      a: "Paiement des intérêts pour un investissement.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "taux",
          detail: "Le taux d'intérêt.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "période",
          detail: "La durée d'amortissement, en nombre de périodes.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nombre_périodes",
          detail: "Le nombre de paiements à effectuer.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_actuelle",
          detail: "La valeur actuelle de la rente.",
          example: "80000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_future",
          detail: "La valeur future restant après le paiement final.",
          example: "E2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_ou_début",
          detail: "Si les paiements sont dus à la fin (`0`) ou au début (`1`) de chaque période.",
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
      d: "Calcule le paiement du principal d'un investissement sur la base de paiements périodiques à montant constant et d'un taux d'intérêt constant.",
      a: "Paiement du principal d'un investissement.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "taux",
          detail: "Le taux d'intérêt.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "période",
          detail: "La durée d'amortissement, en nombre de périodes.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nombre_périodes",
          detail: "Le nombre de paiements à effectuer.",
          example: "3*12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_actuelle",
          detail: "La valeur actuelle de la rente.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_future",
          detail: "La valeur future restant après le paiement final.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_ou_début",
          detail: "Si les paiements sont dus à la fin (`0`) ou au début (`1`) de chaque période.",
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
      d: "Calcule le taux d'intérêt effectif généré lorsqu'un investissement est acheté à un prix et vendu à un autre sans intérêts ni dividendes générés par l'investissement lui-même.",
      a: "Calcule le taux d'intérêt effectif.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "date_achat",
          detail: "La date d'achat de l'investissement.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "date_vente",
          detail: "La date de vente de l'investissement.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prix_achat",
          detail: "Le prix auquel l'investissement a été acheté.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "prix_vente",
          detail: "Le prix auquel l'investissement a été vendu.",
          example: "101200",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule le prix d'un titre payant des intérêts périodiques, tel qu'un bon du Trésor américain, en fonction du rendement attendu.",
      a: "Prix ​​d'un titre payant des intérêts périodiques.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taux",
          detail: "Le taux d’intérêt annualisé.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendement",
          detail: "Le rendement annuel attendu du titre.",
          example: "0.065",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_remboursement",
          detail: "Le montant du rachat par 100 de valeur nominale, ou pair.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fréquence",
          detail: "Le nombre de paiements d’intérêts ou de coupons par an (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule le prix d'un titre à escompte (ne portant pas intérêt), en fonction du rendement attendu.",
      a: "Prix ​​d'un titre à rabais.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taux_escompte",
          detail: "Le taux d'actualisation du titre au moment de l'achat.",
          example: "0.0525",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_remboursement",
          detail: "Le montant du rachat par 100 de valeur nominale, ou pair.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule le prix d'un titre payant des intérêts à l'échéance, en fonction du rendement attendu.",
      a: "Prix ​​d’un titre payant des intérêts à l’échéance.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "date_émission",
          detail: "La date à laquelle le titre a été initialement émis.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taux",
          detail: "Le taux d’intérêt annualisé.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendement",
          detail: "Le rendement annuel attendu du titre.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule le montant reçu à l'échéance pour un placement dans des titres à revenu fixe achetés à une date donnée.",
      a: "Montant reçu à l'échéance pour un titre.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "investissement",
          detail: "Le montant investi (indépendamment de la valeur nominale de chaque titre).",
          example: "10000000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "taux_escompte",
          detail: "Le taux d'actualisation du titre dans lequel vous investissez.",
          example: "0.0575",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule le taux d'actualisation d'un titre en fonction du prix.",
      a: "Le taux d'actualisation d'un titre basé sur le prix.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "prix",
          detail: "Le prix auquel le titre est acheté pour 100 de sa valeur nominale.",
          example: "97.975",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_remboursement",
          detail: "Le montant du rachat par 100 de valeur nominale, ou pair.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule le nombre de périodes de paiement pour un investissement sur la base de paiements périodiques à montant constant et d'un taux d'intérêt constant.",
      a: "Nombre de délais de paiement pour un investissement.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "taux",
          detail: "Le taux d'intérêt.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "montant_paiement",
          detail: "Le montant de chaque paiement effectué.",
          example: "500",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_actuelle",
          detail: "La valeur actuelle de la rente.",
          example: "40000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_future",
          detail: "La valeur future restant après le paiement final.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_ou_début",
          detail: "Si les paiements sont dus à la fin (`0`) ou au début (`1`) de chaque période.",
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
      d: "Calcule l'amortissement d'un actif pour une période en utilisant la méthode linéaire.",
      a: "Amortissement du bien selon la méthode linéaire.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "coût",
          detail: "Le coût initial de l'actif.",
          example: "300000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur_résiduelle",
          detail: "La valeur du bien à la fin de l'amortissement.",
          example: "75000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "durée_vie",
          detail: "Le nombre de périodes sur lesquelles l'actif est amorti.",
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
      d: "Calcule le nombre de périodes de composition nécessaires pour qu'un investissement d'une valeur actuelle spécifiée s'apprécie à un taux donné pour atteindre une valeur cible.",
      a: "Nombre de périodes pendant lesquelles un investissement atteint une valeur.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taux",
          detail: "Le taux d’intérêt annualisé.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendement",
          detail: "Le rendement annuel attendu du titre.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fréquence",
          detail: "Le nombre de paiements d’intérêts ou de coupons par an (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Calcule la durée Macaulay modifiée d'un titre payant des intérêts périodiques, tel qu'un bon du Trésor américain, en fonction du rendement attendu.",
      a: "Durée Macaulay modifiée.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "règlement",
          detail: "La date de règlement du titre, la date après émission à laquelle le titre est livré à l'acheteur.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "échéance",
          detail: "L'échéance ou la date de fin du titre, à laquelle il peut être racheté à sa valeur nominale ou à sa valeur nominale.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taux",
          detail: "Le taux d’intérêt annualisé.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendement",
          detail: "Le rendement annuel attendu du titre.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fréquence",
          detail: "Le nombre de paiements d’intérêts ou de coupons par an (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convention_décompte_jours",
          detail: "Un indicateur de la méthode de décompte des jours à utiliser.",
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
      d: "Convertit un nombre binaire signé au format décimal.",
      a: "Convertit un nombre binaire signé au format décimal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "nombre_binaire_signé",
          detail: "Valeur binaire signée de 10 bits à convertir en décimal, fournie sous forme de chaîne.",
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
      d: "Convertit un nombre binaire signé au format hexadécimal signé.",
      a: "Convertit un nombre binaire en hexadécimal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "nombre_binaire_signé",
          detail: "Valeur binaire signée de 10 bits à convertir en valeur hexadémique signée, fournie sous forme de chaîne.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "chiffres_significatifs",
          detail: "Le nombre de chiffres significatifs à garantir dans le résultat.",
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
      d: "Convertit un nombre binaire signé au format octal signé.",
      a: "Convertit un nombre binaire en octal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "nombre_binaire_signé",
          detail: "Valeur binaire signée de 10 bits à convertir en octal signé, fournie sous forme de chaîne.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "chiffres_significatifs",
          detail: "Le nombre de chiffres significatifs à garantir dans le résultat.",
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
      d: "Convertit un nombre décimal au format binaire signé.",
      a: "Convertit un nombre décimal au format binaire signé.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "nombre_décimal",
          detail: "La valeur décimale à convertir en binaire signé, fournie sous forme de chaîne.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "chiffres_significatifs",
          detail: "Le nombre de chiffres significatifs à garantir dans le résultat.",
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
      d: "Convertit un nombre décimal au format hexadécimal signé.",
      a: "Convertit un nombre décimal en hexadécimal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "nombre_décimal",
          detail: "La valeur décimale à convertir en hexadécimal signé, fournie sous forme de chaîne.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "chiffres_significatifs",
          detail: "Le nombre de chiffres significatifs à garantir dans le résultat.",
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
      d: "Convertit un nombre décimal au format octal signé.",
      a: "Convertit un nombre décimal au format octal signé.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "nombre_décimal",
          detail: "La valeur décimale à convertir en octal signé, fournie sous forme de chaîne.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "chiffres_significatifs",
          detail: "Le nombre de chiffres significatifs à garantir dans le résultat.",
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
      d: "Convertit un nombre hexadécimal signé au format binaire signé.",
      a: "Convertit un nombre hexadécimal en binaire.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "nombre_hexadécimal_signé",
          detail: "Valeur hexadécimale signée de 40 bits à convertir en binaire signé, fournie sous forme de chaîne.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "chiffres_significatifs",
          detail: "Le nombre de chiffres significatifs à garantir dans le résultat.",
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
      d: "Convertit un nombre hexadécimal signé au format décimal.",
      a: "Convertit un nombre hexadécimal en nombre décimal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "nombre_hexadécimal_signé",
          detail: "Valeur hexadécimale signée de 40 bits à convertir en décimale, fournie sous forme de chaîne.",
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
      d: "Convertit un nombre hexadécimal signé au format octal signé.",
      a: "Convertit un nombre hexadécimal en octal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "nombre_hexadécimal_signé",
          detail: "Valeur hexadécimale signée de 40 bits à convertir en octal signé, fournie sous forme de chaîne.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "chiffres_significatifs",
          detail: "Le nombre de chiffres significatifs à garantir dans le résultat.",
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
      d: "Convertit un nombre octal signé au format binaire signé.",
      a: "Convertit un nombre octal en binaire.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "nombre_octal_signé",
          detail: "Valeur octale signée de 30 bits à convertir en binaire signé, fournie sous forme de chaîne.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "chiffres_significatifs",
          detail: "Le nombre de chiffres significatifs à garantir dans le résultat.",
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
      d: "Convertit un nombre octal signé au format décimal.",
      a: "Convertit un nombre octal signé au format décimal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "nombre_octal_signé",
          detail: "Valeur octale signée de 30 bits à convertir en décimale, fournie sous forme de chaîne.",
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
      d: "Convertit un nombre octal signé au format hexadécimal signé.",
      a: "Convertit un nombre octal en hexadécimal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "nombre_octal_signé",
          detail: "Valeur octale signée de 30 bits à convertir en hexadécimal signé, fournie sous forme de chaîne.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "chiffres_significatifs",
          detail: "Le nombre de chiffres significatifs à garantir dans le résultat.",
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
      d: "Crée un nombre complexe à partir de coefficients réels et imaginaires.",
      a: "Crée un nombre complexe.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "partie_réelle",
          detail: "Le vrai coefficient.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "partie_imaginaire",
          detail: "Le coefficient imaginaire.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "suffixe",
          detail: "Le suffixe du coefficient imaginaire ne peut être que ` i ` ou ` j `. En cas d'omission, `i` sera utilisé.",
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
      d: "Renvoie le coefficient réel d'un nombre complexe.",
      a: "Le coefficient réel d'un nombre complexe.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "nombre_complexe",
          detail: "Le nombre complexe, au format a+bi ou a+bj.",
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
      d: "Renvoie le coefficient imaginaire d'un nombre complexe.",
      a: "Le coefficient imaginaire d'un nombre complexe.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "nombre_complexe",
          detail: "Le nombre complexe, au format a+bi ou a+bj.",
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
      d: "Renvoie le conjugué complexe d'un nombre.",
      a: "Le conjugué complexe d’un nombre.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "nombre",
          detail: "Le nombre complexe pour lequel calculer le conjugué.",
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
      d: "Renvoie la valeur absolue (ou module) d'un nombre complexe.",
      a: "La valeur absolue d'un nombre complexe.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "nombre",
          detail: "Le nombre complexe dont on calcule la valeur absolue.",
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
      d: "Comparez deux valeurs numériques, en renvoyant 1 si elles sont égales.",
      a: "Comparez deux valeurs numériques.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "nombre1",
          detail: "Le premier numéro à comparer.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nombre2",
          detail: "Le deuxième numéro à comparer.",
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
      d: "Renvoie la somme d'une série de nombres complexes.",
      a: "Somme d'une série de nombres complexes.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valeur1",
          detail: "Le premier nombre ou plage complexe à additionner.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "Nombres ou plages complexes supplémentaires à ajouter à ` valeur1 `.",
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
      d: "Renvoie la différence entre deux nombres complexes.",
      a: "La différence entre deux nombres complexes.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "premier_nombre",
          detail: "Le nombre complexe duquel soustraire second_number.",
          example: "\"6+5i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "deuxième_nombre",
          detail: "Le nombre complexe à soustraire de first_number.",
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
      d: "Renvoie le résultat de la multiplication d’une série de nombres complexes entre eux.",
      a: "Résultat de la multiplication d’une série de nombres complexes entre eux.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "facteur1",
          detail: "Premier nombre ou plage à calculer pour le produit.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "facteur2",
          detail: "Nombres complexes ou plages supplémentaires à calculer pour le produit.",
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
      d: "Renvoie un nombre complexe divisé par un autre.",
      a: "Un nombre complexe divisé par un autre.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividende",
          detail: "Le nombre complexe à diviser.",
          example: "\"11+16i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "diviseur",
          detail: "Le nombre complexe par lequel diviser.",
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
      d: "Renvoie l'opposé d'une valeur logique - `NOT(TRUE)` renvoie `FAUX`; `NOT(FALSE)` renvoie `VRAI`.",
      a: "Renvoie l'opposé de la valeur logique fournie.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "expression_logique",
          detail: "Une expression ou une référence à une cellule contenant une expression qui représente une valeur logique.",
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
      d: "Renvoie la valeur logique `VRAI`.",
      a: "Valeur logique`vrai`.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FALSE",
      t: 10,
      d: "Renvoie la valeur logique ` FAUX `.",
      a: "Valeur logique` faux `.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "AND",
      t: 10,
      d: "Renvoie vrai si tous les arguments fournis sont logiquement vrais et faux si l'un des arguments fournis est logiquement faux.",
      a: "Opérateur logique`et`.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "expression_logique1",
          detail: "Une expression ou une référence à une cellule contenant une expression qui représente une valeur logique, c'est-à-dire `VRAI` ou `FAUX`, ou une expression qui peut être contrainte à une valeur logique.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expression_logique2",
          detail: "Plus d'expressions qui représentent des valeurs logiques.",
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
      d: "Renvoie le premier argument s'il ne s'agit pas d'une valeur d'erreur, sinon renvoie le deuxième argument s'il est présent, ou un blanc si le deuxième argument est absent.",
      a: "Valeur si ce n'est pas une erreur, sinon 2ème argument.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à renvoyer si la `valeur` elle-même n'est pas une erreur.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur_si_erreur",
          detail: "La valeur que la fonction renvoie si ` valeur ` est une erreur.",
          example: "\"Erreur dans la cellule A1\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "IF",
      t: 10,
      d: "Renvoie une valeur si une expression logique est `VRAI` et une autre si elle est `FAUX`.",
      a: "Renvoie la valeur en fonction de l'expression logique.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "expression_logique",
          detail: "Une expression ou une référence à une cellule contenant une expression qui représente une valeur logique, c'est-à-dire `VRAI` ou `FAUX`.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur_si_vrai",
          detail: "La valeur que la fonction renvoie si ` expression_logique ` est ` VRAI `.",
          example: "\"A2 est foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur_si_faux",
          detail: "La valeur que la fonction renvoie si ` expression_logique ` est ` FAUX `.",
          example: "\"A2 est faux\"",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "OR",
      t: 10,
      d: "Renvoie vrai si l'un des arguments fournis est logiquement vrai, et faux si tous les arguments fournis sont logiquement faux.",
      a: "Opérateur logique` ou `.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "expression_logique1",
          detail: "Une expression ou une référence à une cellule contenant une expression qui représente une valeur logique, c'est-à-dire `VRAI` ou `FAUX`, ou une expression qui peut être contrainte à une valeur logique.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expression_logique2",
          detail: "Plus d'expressions qui évaluent des valeurs logiques.",
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
      d: "Renvoie `VRAI` si deux valeurs spécifiées ne sont pas égales et `FAUX` sinon. Équivalent à l'opérateur `!=`.",
      a: "Pas égal.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur1",
          detail: "La première valeur.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "La valeur à tester par rapport à `valeur1` pour l'inégalité.",
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
      d: "Renvoie `VRAI` si deux valeurs spécifiées sont égales et `FAUX` sinon. Équivalent à l'opérateur `==`.",
      a: "Égal.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur1",
          detail: "La première valeur.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "La valeur à tester par rapport à ` valeur1 ` pour l'égalité.",
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
      d: "Renvoie `VRAI` si le premier argument est strictement supérieur au second, et `FAUX` sinon. Équivalent à l'opérateur `>`.",
      a: "Strictement supérieur à.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur1",
          detail: "La valeur à tester comme étant supérieure à ` valeur2 `.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "La deuxième valeur.",
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
      d: "Renvoie `VRAI` si le premier argument est supérieur ou égal au second, et `FAUX` sinon. Équivalent à l'opérateur `>=`.",
      a: "Supérieur ou égal à.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur1",
          detail: "La valeur à tester comme étant supérieure ou égale à ` valeur2 `.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "La deuxième valeur.",
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
      d: "Renvoie `VRAI` si le premier argument est strictement inférieur au second, et `FAUX` sinon. Équivalent à l'opérateur `<`.",
      a: "Moins que.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur1",
          detail: "La valeur à tester comme étant inférieure à ` valeur2 `.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "La deuxième valeur.",
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
      d: "Renvoie `VRAI` si le premier argument est inférieur ou égal au second, et `FAUX` sinon. Équivalent à l'opérateur `<=`.",
      a: "Inférieur ou égal à.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur1",
          detail: "La valeur à tester comme étant inférieure ou égale à ` valeur2 `.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "La deuxième valeur.",
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
      d: "Renvoie la somme de deux nombres. Équivalent à l'opérateur `+`.",
      a: "Somme de deux nombres",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur1",
          detail: "Le premier ajout.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Le deuxième ajout.",
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
      d: "Renvoie la différence de deux nombres. Équivalent à l'opérateur `-`.",
      a: "Différence de deux nombres",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur1",
          detail: "Le menuend, ou le nombre à soustraire.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valeur2",
          detail: "Le soustrahend, ou le nombre à soustraire de ` valeur1 `.",
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
      d: "Renvoie le produit de deux nombres. Équivalent à l'opérateur `*`.",
      a: "Produit de deux nombres",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "facteur1",
          detail: "Le premier multiplicande.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "facteur2",
          detail: "Le deuxième multiplicande.",
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
      d: "Renvoie un nombre divisé par un autre. Équivalent à l'opérateur `/`.",
      a: "Un nombre divisé par un autre",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividende",
          detail: "Le nombre à diviser.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "diviseur",
          detail: "Le nombre par lequel diviser.",
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
      d: "Renvoie la concaténation de deux valeurs. Équivalent à l'opérateur `&`.",
      a: "Concaténation de deux valeurs",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valeur1",
          detail: "La valeur à laquelle `valeur2` sera ajouté.",
          example: "\"de\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur2",
          detail: "La valeur à ajouter à ` valeur1 `.",
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
      d: "Renvoie une valeur interprétée sous forme de pourcentage ; c'est-à-dire que ` UNARY_PERCENT(100) ` est égal à ` 1 `.",
      a: "Valeur interprétée en pourcentage.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "pourcentage",
          detail: "La valeur à interpréter sous forme de pourcentage.",
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
      d: "Ajoute des chaînes les unes aux autres.",
      a: "Ajoute des chaînes les unes aux autres.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "chaîne1",
          detail: "La chaîne initiale.",
          example: "\"Super\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "chaîne2",
          detail: "Plus de chaînes à ajouter dans l'ordre.",
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
      d: "Renvoie la valeur numérique du mappage Unicode du premier caractère de la chaîne fournie.",
      a: "Valeur de mappage Unicode numérique du caractère.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "chaîne",
          detail: "Chaîne dont la valeur de mappage Unicode du premier caractère sera renvoyée.",
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
      d: "Convertissez un nombre en caractère selon la table Unicode actuelle.",
      a: "Obtient le caractère associé au numéro.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "numéro_table",
          detail: "Numéro du caractère à rechercher dans la table Unicode actuelle au format décimal.",
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
      d: "Calcule la valeur d'un chiffre romain.",
      a: "Calcule la valeur d'un chiffre romain.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "chiffre_romain",
          detail: "Le chiffre romain à formater, dont la valeur doit être comprise entre 1 et 3999 inclus.",
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
      d: "Formate un nombre en chiffres romains.",
      a: "Formate un nombre en chiffres romains.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "nombre",
          detail: "Le nombre à formater, entre 1 et 3999 inclus.",
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
      d: "Extrait les sous-chaînes correspondantes selon une expression régulière.",
      a: "Extrait les sous-chaînes correspondantes avec une expression régulière.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "texte",
          detail: "Le texte saisi.",
          example: "\"Une aiguille dans une botte de foin\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expression_régulière",
          detail: "La première partie du ` texte ` qui correspond à cette expression sera renvoyée.",
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
      d: "Si un morceau de texte correspond à une expression régulière.",
      a: "Si un morceau de texte correspond à une expression régulière.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "texte",
          detail: "Le texte à tester par rapport à l'expression régulière.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expression_régulière",
          detail: "L'expression régulière avec laquelle tester le texte.",
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
      d: "Remplace une partie d'une chaîne de texte par une chaîne de texte différente à l'aide d'expressions régulières.",
      a: "Remplace le texte par des expressions régulières.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "texte",
          detail: "Le texte dont une partie sera remplacée.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expression_régulière",
          detail: "L'expression régulière.  Toutes les instances correspondantes dans `texte` seront remplacées.",
          example: "\"S.*d\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "remplacement",
          detail: "Le texte qui sera inséré dans le texte original.",
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
      d: "Renvoie les arguments de chaîne sous forme de texte, ou la chaîne vide si la valeur n'est pas du texte.",
      a: "Arguments de chaîne sous forme de texte.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "L'argument à convertir en texte.",
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
      d: "Formate un nombre avec un nombre fixe de décimales.",
      a: "Formate le nombre avec un nombre fixe de décimales.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "nombre",
          detail: "Le numéro à formater.",
          example: "3.141592653",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nombre_décimales",
          detail: "Le nombre de décimales à afficher dans le résultat.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "supprimer_séparateur",
          detail: "S'il faut ou non supprimer le séparateur de milliers utilisé dans certains paramètres régionaux (par exemple, ` 1 000 ` devient ` 1 000 `). Les séparateurs seront présents si cette valeur est 0 ou omise, et absents sinon.",
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
      d: "Renvoie la position à laquelle une chaîne est trouvée pour la première fois dans le texte où la majuscule des lettres est importante. Renvoie `#VALUE!` si la chaîne n'est pas trouvée.",
      a: "Première position de la chaîne trouvée dans le texte, sensible à la casse.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "à_rechercher",
          detail: "La chaîne à rechercher dans `texte_à_rechercher`.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texte_à_rechercher",
          detail: "Le texte pour rechercher la première occurrence de `à_rechercher`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "à_partir_de",
          detail: "Le caractère dans `texte_à_rechercher` à partir duquel démarrer la recherche.",
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
      d: "Renvoie la position à laquelle une chaîne est trouvée pour la première fois dans le texte en comptant chaque double caractère pour 2.",
      a: "Position à laquelle une chaîne est trouvée pour la première fois dans le texte (binaire).",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "à_rechercher",
          detail: "La chaîne à rechercher dans `texte_à_rechercher`.",
          example: "\"new\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texte_à_rechercher",
          detail: "Le texte pour rechercher la première occurrence de `à_rechercher`.",
          example: "\"nouvel an\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "à_partir_de",
          detail: "Le caractère dans `texte_à_rechercher` à partir duquel démarrer la recherche.",
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
      d: "Concatène les éléments d'un ou plusieurs tableaux unidimensionnels à l'aide d'un délimiteur spécifié.",
      a: "Concatène les éléments des tableaux avec un délimiteur.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "délimiteur",
          detail: "Caractère ou chaîne à placer entre chaque valeur concaténée.",
          example: "\" and-a \"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur_ou_tableau1",
          detail: "La ou les valeurs à ajouter à l'aide du ` délimiteur `.",
          example: "{1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valeur_ou_tableau2",
          detail: "Plus de valeurs à ajouter à l'aide du ` délimiteur `.",
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
      d: "Renvoie une sous-chaîne à partir du début d'une chaîne spécifiée.",
      a: "Sous-chaîne à partir du début de la chaîne spécifiée.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "chaîne",
          detail: "Chaîne à partir de laquelle la partie gauche sera renvoyée.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "nombre_caractères",
          detail: "Le nombre de caractères à renvoyer depuis le côté gauche de `chaîne`.",
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
      d: "Renvoie une sous-chaîne à partir de la fin d'une chaîne spécifiée.",
      a: "Une sous-chaîne à partir de la fin d'une chaîne spécifiée.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "chaîne",
          detail: "La chaîne à partir de laquelle la partie droite sera renvoyée.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "nombre_caractères",
          detail: "Le nombre de caractères à renvoyer depuis le côté droit de `chaîne`.",
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
      d: "Renvoie un segment d'une chaîne.",
      a: "Un segment d'une chaîne.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "chaîne",
          detail: "Chaîne à partir de laquelle extraire un segment.",
          example: "\"récupère ceci\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "à_partir_de",
          detail: "L'index à gauche de la ` chaîne ` à partir duquel commencer l'extraction. Le premier caractère de `chaîne` a l'index 1.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "longueur_extraction",
          detail: "La longueur du segment à extraire.",
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
      d: "Renvoie la longueur d'une chaîne.",
      a: "Longueur d'une chaîne.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texte",
          detail: "La chaîne dont la longueur sera renvoyée.",
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
      d: "Renvoie la longueur d'une chaîne en octets.",
      a: "Longueur d'une chaîne en octets.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texte",
          detail: "La chaîne dont la longueur sera renvoyée.",
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
      d: "Convertit une chaîne spécifiée en minuscules.",
      a: "Convertit une chaîne spécifiée en minuscules.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texte",
          detail: "La chaîne à convertir en minuscules.",
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
      d: "Convertit une chaîne spécifiée en majuscule.",
      a: "Convertit une chaîne spécifiée en majuscule.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texte",
          detail: "La chaîne à convertir en majuscule.",
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
      d: "Teste si deux chaînes sont identiques.",
      a: "Teste si deux chaînes sont identiques.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "chaîne1",
          detail: "La première chaîne à comparer",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "chaîne2",
          detail: "La deuxième chaîne à comparer",
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
      d: "Remplace une partie d'une chaîne de texte par une chaîne de texte différente.",
      a: "Remplace une partie d'une chaîne de texte par un texte différent.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "texte",
          detail: "Le texte dont une partie sera remplacée.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "position",
          detail: "La position où le remplacement commencera (en commençant à 1).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "longueur",
          detail: "Le nombre de caractères dans le texte à remplacer.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nouveau_texte",
          detail: "Le texte qui sera inséré dans le texte original.",
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
      d: "Renvoie le texte spécifié répété plusieurs fois.",
      a: "Texte spécifié répété plusieurs fois.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "texte_à_répéter",
          detail: "Le caractère ou la chaîne à répéter.",
          example: "\"ha\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "nombre_répétitions",
          detail: "Le nombre de fois que ` texte_à_répéter ` doit apparaître dans la valeur renvoyée.",
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
      d: "Renvoie la position à laquelle une chaîne est trouvée pour la première fois dans le texte et ignore la majuscule des lettres. Renvoie `#VALUE!` si la chaîne n'est pas trouvée.",
      a: "Première position de chaîne trouvée dans le texte, en ignorant la casse.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "à_rechercher",
          detail: "La chaîne à rechercher dans `texte_à_rechercher`.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texte_à_rechercher",
          detail: "Le texte pour rechercher la première occurrence de `à_rechercher`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "à_partir_de",
          detail: "Le caractère dans `texte_à_rechercher` à partir duquel démarrer la recherche.",
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
      d: "Remplace le texte existant par un nouveau texte dans une chaîne.",
      a: "Remplace le texte existant par un nouveau texte dans une chaîne.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "texte_à_rechercher",
          detail: "Le texte dans lequel rechercher et remplacer.",
          example: "\"cherche ça\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "à_rechercher",
          detail: "La chaîne à rechercher dans `texte_à_rechercher`.",
          example: "\"cherche\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "remplacer_par",
          detail: "La chaîne qui remplacera `à_rechercher`.",
          example: "\"Google\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "numéro_occurrence",
          detail: "L'instance de `à_rechercher` dans `texte_à_rechercher` à remplacer par `remplacer_par`. Par défaut, toutes les occurrences de ` à_rechercher ` sont remplacées ; cependant, si `numéro_occurrence` est spécifié, seule l'instance indiquée de `à_rechercher` est remplacée.",
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
      d: "Renvoie le texte avec les caractères ASCII non imprimables supprimés.",
      a: "Supprime les caractères non imprimables d'un morceau de texte.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texte",
          detail: "Le texte dont les caractères non imprimables doivent être supprimés.",
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
      d: "Convertit un nombre en texte selon un format spécifié.",
      a: "Formate un nombre en texte.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "nombre",
          detail: "Le nombre, la date ou l'heure à formater.",
          example: "1.23",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "format",
          detail: "Le modèle selon lequel formater le nombre, entre guillemets.",
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
      d: "Supprime les espaces de début, de fin et répétés dans le texte.",
      a: "Supprime les caractères d'espacement.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texte",
          detail: "Le texte ou la référence à une cellule contenant du texte à découper.",
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
      d: "Convertit une chaîne dans l'un des formats de date, d'heure ou de nombre compris par Google Sheets en nombre.",
      a: "Convertit une chaîne date/heure/numéro en un nombre.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texte",
          detail: "Chaîne contenant la valeur à convertir.",
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
      d: "Met en majuscule chaque mot dans une chaîne spécifiée.",
      a: "Met en majuscule chaque mot dans une chaîne spécifiée.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texte_à_capitaliser",
          detail: "Le texte qui sera renvoyé avec la première lettre de chaque mot en majuscule et toutes les autres lettres en minuscules.",
          example: "\"états unis\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "CONVERT",
      t: 13,
      d: "Convertit une valeur numérique en une autre unité de mesure.",
      a: "Conversion d'unités pour les nombres.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur numérique dans `unité_début` à convertir en `unité_fin`.",
          example: "5.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unité_début",
          detail: "L'unité de départ, l'unité actuellement affectée à la `valeur`.",
          example: "\"g\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "unité_fin",
          detail: "L'unité de mesure dans laquelle convertir l'argument, `valeur`.",
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
      d: "Calcule la somme des différences des carrés de valeurs dans deux tableaux.",
      a: "Somme des différences de carrés.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tableau_x",
          detail: "Le tableau ou la plage de valeurs dont les carrés seront réduits par les carrés des entrées correspondantes dans `tableau_y` et additionnés.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tableau_y",
          detail: "Le tableau ou la plage de valeurs dont les carrés seront soustraits des carrés des entrées correspondantes dans `tableau_x` et additionnés.",
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
      d: "Calcule la somme des sommes des carrés des valeurs dans deux tableaux.",
      a: "Somme des sommes des carrés.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tableau_x",
          detail: "Le tableau ou la plage de valeurs dont les carrés seront ajoutés aux carrés des entrées correspondantes dans `tableau_y` et additionnés ensemble.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tableau_y",
          detail: "Le tableau ou la plage de valeurs dont les carrés seront ajoutés aux carrés des entrées correspondantes dans `tableau_x` et additionnés ensemble.",
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
      d: "Calcule la somme des carrés des différences de valeurs dans deux tableaux.",
      a: "Somme des carrés des différences.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tableau_x",
          detail: "Le tableau ou la plage de valeurs qui sera réduit par les entrées correspondantes dans `tableau_y`, mis au carré et additionné.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tableau_y",
          detail: "Le tableau ou la plage de valeurs qui seront soustraites des entrées correspondantes dans `tableau_x`, le résultat au carré et tous ces résultats additionnés.",
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
      d: "Transpose les lignes et les colonnes d'un tableau ou d'une plage de cellules.",
      a: "Transpose les lignes et les colonnes d'un tableau.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "tableau_ou_plage",
          detail: "Le tableau ou la plage dont les lignes et les colonnes seront permutées.",
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
      d: "À partir de données partielles sur une tendance linéaire, ajuste une tendance linéaire idéale à l'aide de la méthode des moindres carrés et/ou prédit d'autres valeurs.",
      a: "Ajuste les points à la tendance linéaire dérivée via les moindres carrés.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "données_y_connues",
          detail: "Tableau ou plage contenant des valeurs dépendantes (y) déjà connues, utilisé pour ajuster une courbe à une tendance linéaire idéale.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données_x_connues",
          detail: "Les valeurs de la ou des variables indépendantes correspondant à `données_y_connues`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nouvelles_données_x",
          detail: "Les points de données pour lesquels renvoyer les valeurs ` y ` correspondent à l'ajustement idéal de la courbe.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Étant donné une forme linéaire générale de ` y = m*x+b ` pour un ajustement de courbe, calcule ` b ` si ` VRAI ` ou force ` b ` à être ` 0 ` et calcule uniquement les valeurs ` m ` si ` FAUX `, c'est-à-dire force l'ajustement de courbe à passer par l'origine.",
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
      d: "Calcule la distribution de fréquence d'un tableau à une colonne dans les classes spécifiées.",
      a: "La distribution de fréquence du tableau.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "données",
          detail: "Tableau ou plage contenant les valeurs à compter.",
          example: "A2:A40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "classes",
          detail: "Le tableau ou la plage contenant l’ensemble des classes.",
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
      d: "Compte tenu de données partielles sur une tendance de croissance exponentielle, correspond à une tendance de croissance exponentielle idéale et/ou prédit d'autres valeurs.",
      a: "Correspond aux points à la tendance de croissance exponentielle.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "données_y_connues",
          detail: "Tableau ou plage contenant des valeurs dépendantes (y) déjà connues, utilisé pour ajuster une courbe de croissance exponentielle idéale.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données_x_connues",
          detail: "Les valeurs de la ou des variables indépendantes correspondant à `données_y_connues`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nouvelles_données_x",
          detail: "Les points de données pour lesquels renvoyer les valeurs ` y ` correspondent à l'ajustement idéal de la courbe.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Étant donné une forme exponentielle générale de ` y = b*m^x ` pour un ajustement de courbe, calcule ` b ` si ` VRAI ` ou force ` b ` à être ` 1 ` et calcule les valeurs ` m ` uniquement si ` FAUX `.",
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
      d: "À partir de données partielles sur une tendance linéaire, calcule divers paramètres sur la tendance linéaire idéale à l'aide de la méthode des moindres carrés.",
      a: "Tendance linéaire la mieux ajustée via les moindres carrés.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "données_y_connues",
          detail: "Tableau ou plage contenant des valeurs dépendantes (y) déjà connues, utilisé pour ajuster une courbe à une tendance linéaire idéale.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données_x_connues",
          detail: "Les valeurs de la ou des variables indépendantes correspondant à `données_y_connues`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "calculer_b",
          detail: "Étant donné une forme linéaire de `y = m*x+b`, calcule l'ordonnée à l'origine (`b`) si `VRAI`. Sinon, force ` b ` à être ` 0 ` et calcule les valeurs ` m ` uniquement si ` FAUX `, c'est-à-dire force l'ajustement de la courbe à passer par l'origine.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "détaillé",
          detail: "Un indicateur spécifiant s'il faut renvoyer des statistiques de régression supplémentaires ou uniquement les coefficients linéaires et l'ordonnée à l'origine (par défaut).",
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
      d: "À partir de données partielles sur une courbe de croissance exponentielle, calcule divers paramètres sur la courbe de croissance exponentielle idéale la mieux adaptée.",
      a: "Courbe de croissance exponentielle la mieux adaptée.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "données_y_connues",
          detail: "Tableau ou plage contenant des valeurs dépendantes (y) déjà connues, utilisé pour ajuster une courbe de croissance exponentielle idéale.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "données_x_connues",
          detail: "Les valeurs de la ou des variables indépendantes correspondant à `données_y_connues`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Étant donné une forme exponentielle générale de ` y = b*m^x ` pour un ajustement de courbe, calcule ` b ` si ` VRAI ` ou force ` b ` à être ` 1 ` et calcule les valeurs ` m ` uniquement si ` FAUX `.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "détaillé",
          detail: "Un indicateur spécifiant s'il faut renvoyer des statistiques de régression supplémentaires ou uniquement le coefficient et les exposants calculés.",
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
      d: "Renvoie le déterminant matriciel d’une matrice carrée spécifiée sous forme de tableau ou de plage.",
      a: "Déterminant matriciel d’une matrice carrée.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "matrice_carrée",
          detail: "Un tableau ou une plage avec un nombre égal de lignes et de colonnes représentant une matrice dont le déterminant sera calculé.",
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
      d: "Renvoie l'inverse multiplicatif d'une matrice carrée spécifiée sous forme de tableau ou de plage.",
      a: "Inverse multiplicatif de la matrice carrée.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "matrice_carrée",
          detail: "Un tableau ou une plage avec un nombre égal de lignes et de colonnes représentant une matrice dont l'inverse multiplicatif sera calculé.",
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
      d: "Calcule le produit matriciel de deux matrices spécifiées sous forme de tableaux ou de plages.",
      a: "Le produit matriciel de deux matrices.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matrice1",
          detail: "Première matrice de l'opération de multiplication matricielle, représentée sous forme de tableau ou de plage.",
          example: "A1:B3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matrice2",
          detail: "Deuxième matrice de l'opération de multiplication matricielle, représentée sous forme de tableau ou de plage.",
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
      d: "Calcule la somme des produits des entrées correspondantes dans deux tableaux ou plages de taille égale.",
      a: "Somme des produits d'éléments dans deux tableaux.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "tableau1",
          detail: "Le premier tableau ou plage dont les entrées seront multipliées par les entrées correspondantes dans le deuxième tableau ou plage de ce type.",
          example: "A2:C5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tableau2",
          detail: "Deuxième tableau ou plage dont les entrées seront multipliées par les entrées correspondantes dans le premier tableau ou plage de ce type.",
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
      d: "Vérifie si une valeur est une formule.",
      a: "Si une valeur est une formule.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "cellule",
          detail: "Cellule à vérifier comme contenant une formule.",
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
      d: "Renvoie les informations demandées sur la cellule spécifiée.",
      a: "Obtient des informations sur une cellule.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "type_info",
          detail: "Le type d’informations demandées (voir l’article pour les types disponibles)",
          example: "\"type\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "référence",
          detail: "La référence à la cellule.",
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
      d: "Renvoie l'erreur `valeur non disponible`, `#N/A`.",
      a: "L'erreur`#N/A`.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "ERROR_TYPE",
      t: 15,
      d: "Renvoie un nombre correspondant à la valeur d'erreur dans une autre cellule.",
      a: "Valeur d'erreur de la cellule (sous forme de nombre).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "référence",
          detail: "La cellule pour laquelle trouver le numéro d’erreur, bien que vous puissiez également fournir directement la valeur de l’erreur.",
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
      d: "Vérifie si la cellule référencée est vide.",
      a: "Si la cellule référencée est vide.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "Référence à la cellule dont le vide sera vérifié.",
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
      d: "Vérifie si une valeur est une erreur autre que `#N/A`.",
      a: "Si une valeur est une erreur autre que` #n/a `.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à vérifier comme un type d'erreur autre que `#N/A`.",
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
      d: "Vérifie si une valeur est une erreur.",
      a: "Si une valeur est une erreur.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à vérifier en tant que type d'erreur.",
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
      d: "Vérifie si une valeur est ` VRAI ` ou ` FAUX `.",
      a: "Si une valeur est`vraie`ou`fausse`.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à vérifier comme étant un ` VRAI ` ou un ` FAUX ` logique.",
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
      d: "Vérifie si une valeur correspond à l'erreur `#N/A`.",
      a: "Si une valeur est l'erreur` #n/a `.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à comparer avec la valeur d'erreur `#N/A`.",
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
      d: "Vérifie si une valeur est non textuelle.",
      a: "Si une valeur est non textuelle.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à vérifier.",
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
      d: "Vérifie si une valeur est un nombre.",
      a: "Si une valeur est un nombre.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à vérifier sous forme de nombre.",
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
      d: "Vérifie si une valeur est une référence de cellule valide.",
      a: "Si une valeur est une référence de cellule valide.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à vérifier comme référence de cellule.",
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
      d: "Vérifie si une valeur est du texte.",
      a: "Si une valeur est du texte.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur à vérifier sous forme de texte.",
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
      d: "Renvoie un nombre associé au type de données transmises à la fonction.",
      a: "Obtenez le type d'une valeur.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "La valeur dont le type doit être déterminé.",
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
      d: "Renvoie l'argument fourni sous forme de nombre. Le texte est converti en 0 et les erreurs sont renvoyées telles quelles.",
      a: "Argument fourni sous forme de nombre.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "L'argument à convertir en nombre.",
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
      d: "Convertit un numéro fourni en date.",
      a: "Convertit un numéro fourni en date.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "L'argument ou la référence à une cellule à convertir en date.",
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
      d: "Convertit une date/heure, un pourcentage, une devise ou toute autre valeur numérique formatée fournie en un nombre pur sans formatage.",
      a: "Convertit n'importe quelle valeur numérique en nombre pur.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "L'argument ou la référence à une cellule à convertir en nombre pur.",
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
      d: "Convertit une valeur numérique fournie en valeur texte.",
      a: "Convertit une valeur numérique fournie en valeur texte.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "L'argument ou la référence à une cellule à convertir en texte.",
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
      d: "Convertit un nombre fourni en valeur monétaire.",
      a: "Convertit un nombre fourni en valeur monétaire.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "L'argument ou la référence à une cellule à convertir en valeur monétaire.",
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
      d: "Convertit un nombre fourni en pourcentage.",
      a: "Convertit un nombre fourni en pourcentage.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          detail: "L'argument ou la référence à une cellule à convertir en pourcentage.",
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
      d: "Renvoie une valeur unique à partir d’un tableau ou d’une plage de type table de base de données à l’aide d’une requête de type SQL.",
      a: "Valeur unique provenant d’une plage de type tableau.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_données",
          detail: "Tableau ou plage contenant les données à prendre en compte, structuré de telle manière que la première ligne contient les étiquettes des valeurs de chaque colonne.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "champ",
          detail: "Indique quelle colonne de la ` base de données ` contient les valeurs à extraire et sur lesquelles opérer.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critères",
          detail: "Un tableau ou une plage contenant zéro ou plusieurs critères pour filtrer les valeurs de la ` base de données ` avant de fonctionner.",
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
      d: "Renvoie la valeur maximale sélectionnée dans un tableau ou une plage de type table de base de données à l'aide d'une requête de type SQL.",
      a: "Maximum de valeurs dans une plage de type tableau.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_données",
          detail: "Tableau ou plage contenant les données à prendre en compte, structuré de telle manière que la première ligne contient les étiquettes des valeurs de chaque colonne.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "champ",
          detail: "Indique quelle colonne de la ` base de données ` contient les valeurs à extraire et sur lesquelles opérer.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critères",
          detail: "Un tableau ou une plage contenant zéro ou plusieurs critères pour filtrer les valeurs de la ` base de données ` avant de fonctionner.",
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
      d: "Renvoie la valeur minimale sélectionnée dans un tableau ou une plage de type table de base de données à l'aide d'une requête de type SQL.",
      a: "Minimum de valeurs dans une plage de type tableau.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_données",
          detail: "Tableau ou plage contenant les données à prendre en compte, structuré de telle manière que la première ligne contient les étiquettes des valeurs de chaque colonne.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "champ",
          detail: "Indique quelle colonne de la ` base de données ` contient les valeurs à extraire et sur lesquelles opérer.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critères",
          detail: "Un tableau ou une plage contenant zéro ou plusieurs critères pour filtrer les valeurs de la ` base de données ` avant de fonctionner.",
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
      d: "Renvoie la moyenne d'un ensemble de valeurs sélectionnées dans un tableau ou une plage de type table de base de données à l'aide d'une requête de type SQL.",
      a: "Moyenne d’un ensemble de valeurs provenant d’une plage de type tableau.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_données",
          detail: "Tableau ou plage contenant les données à prendre en compte, structuré de telle manière que la première ligne contient les étiquettes des valeurs de chaque colonne.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "champ",
          detail: "Indique quelle colonne de la ` base de données ` contient les valeurs à extraire et sur lesquelles opérer.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critères",
          detail: "Un tableau ou une plage contenant zéro ou plusieurs critères pour filtrer les valeurs de la ` base de données ` avant de fonctionner.",
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
      d: "Compte les valeurs numériques sélectionnées dans un tableau ou une plage de type table de base de données à l'aide d'une requête de type SQL.",
      a: "Compte les valeurs d'une plage de type tableau.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_données",
          detail: "Tableau ou plage contenant les données à prendre en compte, structuré de telle manière que la première ligne contient les étiquettes des valeurs de chaque colonne.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "champ",
          detail: "Indique quelle colonne de la ` base de données ` contient les valeurs à extraire et sur lesquelles opérer.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critères",
          detail: "Un tableau ou une plage contenant zéro ou plusieurs critères pour filtrer les valeurs de la ` base de données ` avant de fonctionner.",
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
      d: "Compte les valeurs, y compris le texte, sélectionnées dans un tableau ou une plage de type table de base de données à l'aide d'une requête de type SQL.",
      a: "Compte les valeurs et le texte d'une plage semblable à un tableau.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_données",
          detail: "Tableau ou plage contenant les données à prendre en compte, structuré de telle manière que la première ligne contient les étiquettes des valeurs de chaque colonne.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "champ",
          detail: "Indique quelle colonne de la ` base de données ` contient les valeurs à extraire et sur lesquelles opérer.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critères",
          detail: "Un tableau ou une plage contenant zéro ou plusieurs critères pour filtrer les valeurs de la ` base de données ` avant de fonctionner.",
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
      d: "Renvoie le produit des valeurs sélectionnées dans un tableau ou une plage de type table de base de données à l'aide d'une requête de type SQL.",
      a: "Produit de valeurs provenant d’une plage de type tableau.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_données",
          detail: "Tableau ou plage contenant les données à prendre en compte, structuré de telle manière que la première ligne contient les étiquettes des valeurs de chaque colonne.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "champ",
          detail: "Indique quelle colonne de la ` base de données ` contient les valeurs à extraire et sur lesquelles opérer.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critères",
          detail: "Un tableau ou une plage contenant zéro ou plusieurs critères pour filtrer les valeurs de la ` base de données ` avant de fonctionner.",
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
      d: "Renvoie l'écart type d'un échantillon de population sélectionné à partir d'un tableau ou d'une plage de type table de base de données à l'aide d'une requête de type SQL.",
      a: "Écart type de l’échantillon de population par rapport au tableau.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_données",
          detail: "Tableau ou plage contenant les données à prendre en compte, structuré de telle manière que la première ligne contient les étiquettes des valeurs de chaque colonne.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "champ",
          detail: "Indique quelle colonne de la ` base de données ` contient les valeurs à extraire et sur lesquelles opérer.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critères",
          detail: "Un tableau ou une plage contenant zéro ou plusieurs critères pour filtrer les valeurs de la ` base de données ` avant de fonctionner.",
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
      d: "Renvoie l'écart type d'une population entière sélectionnée à partir d'un tableau ou d'une plage de type table de base de données à l'aide d'une requête de type SQL.",
      a: "Écart type de la population entière par rapport au tableau.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_données",
          detail: "Tableau ou plage contenant les données à prendre en compte, structuré de telle manière que la première ligne contient les étiquettes des valeurs de chaque colonne.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "champ",
          detail: "Indique quelle colonne de la ` base de données ` contient les valeurs à extraire et sur lesquelles opérer.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critères",
          detail: "Un tableau ou une plage contenant zéro ou plusieurs critères pour filtrer les valeurs de la ` base de données ` avant de fonctionner.",
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
      d: "Renvoie la somme des valeurs sélectionnées dans un tableau ou une plage de type table de base de données à l'aide d'une requête de type SQL.",
      a: "Somme des valeurs d'une plage de type tableau.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_données",
          detail: "Tableau ou plage contenant les données à prendre en compte, structuré de telle manière que la première ligne contient les étiquettes des valeurs de chaque colonne.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "champ",
          detail: "Indique quelle colonne de la ` base de données ` contient les valeurs à extraire et sur lesquelles opérer.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critères",
          detail: "Un tableau ou une plage contenant zéro ou plusieurs critères pour filtrer les valeurs de la ` base de données ` avant de fonctionner.",
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
      d: "Renvoie la variance d'un échantillon de population sélectionné à partir d'un tableau ou d'une plage de type table de base de données à l'aide d'une requête de type SQL.",
      a: "Variation de l'échantillon de population par rapport à une plage semblable à un tableau.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_données",
          detail: "Tableau ou plage contenant les données à prendre en compte, structuré de telle manière que la première ligne contient les étiquettes des valeurs de chaque colonne.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "champ",
          detail: "Indique quelle colonne de la ` base de données ` contient les valeurs à extraire et sur lesquelles opérer.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critères",
          detail: "Un tableau ou une plage contenant zéro ou plusieurs critères pour filtrer les valeurs de la ` base de données ` avant de fonctionner.",
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
      d: "Renvoie la variance d'une population entière sélectionnée à partir d'un tableau ou d'une plage de type table de base de données à l'aide d'une requête de type SQL.",
      a: "Variance d'une population à partir d'une plage semblable à un tableau.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_données",
          detail: "Tableau ou plage contenant les données à prendre en compte, structuré de telle manière que la première ligne contient les étiquettes des valeurs de chaque colonne.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "champ",
          detail: "Indique quelle colonne de la ` base de données ` contient les valeurs à extraire et sur lesquelles opérer.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critères",
          detail: "Un tableau ou une plage contenant zéro ou plusieurs critères pour filtrer les valeurs de la ` base de données ` avant de fonctionner.",
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
      d: "Calculez l'âge en fonction du numéro d'identification chinois. Prise en charge 15 ou 18",
      a: "Obtenez l'âge en fonction du numéro d'identification.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Numéro d'identification",
          example: "A1",
          detail: "Numéro ou plage d'identification à 15 ou 18 chiffres.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date limite",
          example: "\"2017-10-01\"",
          detail: "La date limite ou la tranche d’âge pour le calcul. La valeur par défaut est le jour en cours.",
          require: "o",
          repeat: "n",
          type: "rangedatetime"
        }
      ]
    },
    {
      n: "SEX_BY_IDCARD",
      t: "3",
      d: "Calculez le sexe en fonction du numéro d'identification chinois. Prise en charge 15 ou 18",
      a: "Obtenez le sexe en fonction du numéro d'identification.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Numéro d'identification",
          example: "\"31033519900101XXXX\"",
          detail: "Numéro ou plage d'identification à 15 ou 18 chiffres.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BIRTHDAY_BY_IDCARD",
      t: "3",
      d: "Calculez l'anniversaire en fonction du numéro d'identification chinois. Prise en charge 15 ou 18",
      a: "Obtenez l'anniversaire en fonction du numéro d'identification.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Numéro d'identification",
          example: "\"31033519900101XXXX\"",
          detail: "Numéro ou plage d'identification à 15 ou 18 chiffres.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Format de date de naissance",
          example: "0",
          detail: "Type de date, par défaut :0 :[1900/01/01], 1 :[1900-01-01], 2 :[1er janvier 1900]",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PROVINCE_BY_IDCARD",
      t: "3",
      d: "Calculez la province de lieu de naissance en fonction du numéro d'identification chinois. Prise en charge 15 ou 18",
      a: "Obtenez la province de lieu de naissance en fonction du numéro d'identification.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Numéro d'identification",
          example: "\"31033519900101XXXX\"",
          detail: "Numéro ou plage d'identification à 15 ou 18 chiffres.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "CITY_BY_IDCARD",
      t: "3",
      d: "Calculez la ville de naissance en fonction du numéro d'identification chinois. Prise en charge 15 ou 18",
      a: "Obtenez la ville de naissance en fonction du numéro d'identification.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Numéro d'identification",
          example: "\"31033519900101XXXX\"",
          detail: "Numéro ou plage d'identification à 15 ou 18 chiffres.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STAR_BY_IDCARD",
      t: "3",
      d: "Calculez la constellation en fonction du numéro d'identification chinois. Prise en charge 15 ou 18",
      a: "Obtenez la constellation en fonction du numéro d'identification.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Numéro d'identification",
          example: "\"31033519900101XXXX\"",
          detail: "Numéro ou plage d'identification à 15 ou 18 chiffres.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ANIMAL_BY_IDCARD",
      t: "3",
      d: "Calculez le zodiaque (rat, bœuf, tigre, lapin...) à partir du numéro d'identification chinois. Prise en charge 15 ou 18",
      a: "Obtenez le zodiaque en fonction du numéro d'identification.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Numéro d'identification",
          example: "\"31033519900101XXXX\"",
          detail: "Numéro ou plage d'identification à 15 ou 18 chiffres.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISIDCARD",
      t: "3",
      d: "Vérifiez que le format de la carte d'identité est correct. Prise en charge 15 ou 18",
      a: "Vérifiez l'exactitude du format de la carte d'identité.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Numéro d'identification",
          example: "\"31033519900101XXXX\"",
          detail: "Numéro ou plage d'identification à 15 ou 18 chiffres.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DM_TEXT_CUTWORD",
      t: "4",
      d: "Segmentation du texte. Diviser une série de mots en une série de mots individuels",
      a: "Segmentation de texte chinois.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Texte",
          example: "\"Je suis allé à l'université Tsinghua de Pékin\"",
          detail: "Tout texte nécessitant une segmentation de mots.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Mode de segmentation des mots",
          example: "0",
          detail: "La valeur par défaut est 0[mode précision], 1[mode complet], 2[mode moteur de recherche].",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DM_TEXT_TFIDF",
      t: "4",
      d: "Utilisez l'algorithme tf-idf pour l'extraction de mots clés. Identifier des mots-clés à partir d'une série de texte",
      a: "reconnaissance de mots clés tf-idf.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Texte",
          example: "\"Je suis allé à l'université Tsinghua de Pékin\"",
          detail: "Tout texte nécessitant une segmentation de mots.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Nombre de mots-clés",
          example: "20",
          detail: "Le nombre de mots-clés renvoyés par l'algorithme, la valeur par défaut est 20",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "Corpus",
          example: "1",
          detail: "Sélectionnez un corpus dans un champ spécifique, la valeur par défaut est 0[Général], 1[Finance], 2[Médical]",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DM_TEXT_TEXTRANK",
      t: "4",
      d: "Utilisez l'algorithme TextRank pour extraire des mots-clés. Identifier des mots-clés à partir d'une série de texte",
      a: "Reconnaissance des mots clés TextRank.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Texte",
          example: "\"Je suis allé à l'université Tsinghua de Pékin\"",
          detail: "Tout texte nécessitant une segmentation de mots.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Nombre de mots-clés",
          example: "20",
          detail: "Le nombre de mots-clés renvoyés par l'algorithme, la valeur par défaut est 20",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "Corpus",
          example: "1",
          detail: "Sélectionnez un corpus dans un champ spécifique, la valeur par défaut est 0[Général], 1[Finance], 2[Médical]",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_CLOSE",
      t: "5",
      d: "Selon le code boursier et la date, renvoyez le cours de clôture correspondant des actions A.",
      a: "Renvoie le cours de clôture de l'action.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Code boursier",
          example: "\"000001\"",
          detail: "Code de stock à 6 chiffres, requis.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Le jour de bourse de l'action, la valeur par défaut est le dernier jour de bourse",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Type de restauration ex-droit",
          example: "0",
          detail: "Sélectionnez le type de restauration ex-droit du stock, par défaut 0 [ancienne réversion], 1 [prix d'origine], 2 [post réversion]",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_OPEN",
      t: "5",
      d: "Selon le code du stock et la date, renvoyez le prix d'ouverture du stock.",
      a: "Renvoie le prix d'ouverture d'une action.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Code boursier",
          example: "\"000001\"",
          detail: "Code de stock à 6 chiffres, requis.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Le jour de bourse de l'action, la valeur par défaut est le dernier jour de bourse",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Type de restauration ex-droit",
          example: "0",
          detail: "Sélectionnez le type de restauration ex-droit du stock, par défaut 0 [ancienne réversion], 1 [prix d'origine], 2 [post réversion]",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_MAX",
      t: "5",
      d: "Selon le code du stock et la date, renvoie le prix du stock le plus élevé.",
      a: "Renvoie le prix le plus élevé de l'action.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Code boursier",
          example: "\"000001\"",
          detail: "Code de stock à 6 chiffres, requis.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Le jour de bourse de l'action, la valeur par défaut est le dernier jour de bourse",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Type de restauration ex-droit",
          example: "0",
          detail: "Sélectionnez le type de restauration ex-droit du stock, par défaut 0 [ancienne réversion], 1 [prix d'origine], 2 [post réversion]",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_MIN",
      t: "5",
      d: "Selon le code du stock et la date, renvoie le prix du stock le plus bas.",
      a: "Renvoie le prix le plus bas de l’action.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Code boursier",
          example: "\"000001\"",
          detail: "Code de stock à 6 chiffres, requis.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Le jour de bourse de l'action, la valeur par défaut est le dernier jour de bourse",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Type de restauration ex-droit",
          example: "0",
          detail: "Sélectionnez le type de restauration ex-droit du stock, par défaut 0 [ancienne réversion], 1 [prix d'origine], 2 [post réversion]",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_VOLUMN",
      t: "5",
      d: "Selon le code boursier et la date, renvoyez le volume de négociation d'actions A correspondant.",
      a: "Renvoie le volume de négociation d’actions A correspondant.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Code boursier",
          example: "\"000001\"",
          detail: "Code de stock à 6 chiffres, requis.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Le jour de bourse de l'action, la valeur par défaut est le dernier jour de bourse",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Type de restauration ex-droit",
          example: "0",
          detail: "Sélectionnez le type de restauration ex-droit du stock, par défaut 0 [ancienne réversion], 1 [prix d'origine], 2 [post réversion]",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_AMOUNT",
      t: "5",
      d: "Selon le code boursier et la date, renvoyez le chiffre d'affaires correspondant des actions A.",
      a: "Renvoie la rotation des actions correspondante des actions A.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Code boursier",
          example: "\"000001\"",
          detail: "Code de stock à 6 chiffres, requis.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Date",
          example: "2015-01-08",
          detail: "Le jour de bourse de l'action, la valeur par défaut est le dernier jour de bourse",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Type de restauration ex-droit",
          example: "0",
          detail: "Sélectionnez le type de restauration ex-droit du stock, par défaut 0 [ancienne réversion], 1 [prix d'origine], 2 [post réversion]",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ISDATE",
      t: "6",
      d: "Renvoie si une valeur est une date.",
      a: "Si une valeur est une date.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valeur",
          example: "\"1990-01-01\"",
          detail: "La valeur à vérifier sous forme de date.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LINESPLINES",
      t: "3",
      d: "Générez des sparklines intégrées dans la cellule pour décrire la tendance continue des données",
      a: "Générer un graphique linéaire sparklines",
      m: [
        1,
        8
      ],
      p: [
        {
          name: "Plage",
          example: "A1:A20",
          detail: "Plage ， Les valeurs peuvent être calculées efficacement, telles que A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur de la ligne",
          example: "#2ec7c9",
          detail: "La couleur de la ligne du graphique linéaire peut être la plage A1, la valeur d'index de la table des couleurs ou une valeur de couleur spécifique. Réglez-le sur 0 ou false pour ne pas l'afficher. Il prend en charge regx, rgb, rgba, etc. Par défaut #2ec7c9",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Épaisseur de ligne",
          example: "1",
          detail: "Épaisseur de ligne du graphique linéaire, la valeur par défaut est 1px",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Ligne auxiliaire",
          example: "avg",
          detail: "Une ligne horizontale, qui peut être min, max, moy, médiane, plage ou valeur personnalisée, par défaut 0 aucun",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur de la ligne auxiliaire",
          example: "#000",
          detail: "Paramètre de couleur de la ligne auxiliaire, identique à la configuration de la couleur de la ligne, par défaut #000",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Repère maximum",
          example: "#fc5c5c",
          detail: "Identifie la valeur maximale du graphique linéaire, la même configuration de couleur de ligne, la valeur par défaut 0 ne s'affiche pas",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Repère minimum",
          example: "#fc5c5c",
          detail: "Identifiez la valeur minimale du graphique linéaire, la même configuration de couleur de ligne, la valeur par défaut 0 ne s'affiche pas",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Taille du repère",
          example: "1.5",
          detail: "Les paramètres de taille de marque maximale et minimale, la valeur par défaut est 1,5",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "AREASPLINES",
      t: "3",
      d: "Générez des lignes sparkline intégrées dans le graphique en zones de cellules, généralement utilisées pour décrire la tendance continue de la valeur cumulée des données.",
      a: "Générer un graphique en aires sparklines",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Plage",
          example: "A1:A20",
          detail: "Plage ， Les valeurs peuvent être calculées efficacement, telles que A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur de la ligne",
          example: "#2ec7c9",
          detail: "La couleur de la ligne du graphique linéaire peut être la plage A1, la valeur d'index de la table des couleurs ou une valeur de couleur spécifique. Réglez-le sur 0 ou false pour ne pas l'afficher. Il prend en charge regx, rgb, rgba, etc. Par défaut #2ec7c9",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur de remplissage",
          example: "#CCF3F4",
          detail: "Formez un graphique en aires, la même configuration de couleur de ligne, la valeur par défaut 0 ne s'affiche pas",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Épaisseur de ligne",
          example: "1",
          detail: "Épaisseur de ligne du graphique linéaire, la valeur par défaut est 1px",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Ligne auxiliaire",
          example: "avg",
          detail: "Une ligne horizontale, qui peut être min, max, moy, médiane, plage ou valeur personnalisée, par défaut 0 aucun",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur de la ligne auxiliaire",
          example: "#000",
          detail: "Paramètre de couleur de la ligne auxiliaire, identique à la configuration de la couleur de la ligne, par défaut #000",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COLUMNSPLINES",
      t: "3",
      d: "Générer des lignes sparkline intégrées dans l'histogramme vertical des cellules, généralement utilisées pour décrire la taille des données discrètes",
      a: "Générer un histogramme vertical de sparklines",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Plage",
          example: "A1:A20",
          detail: "Plage ， Les valeurs peuvent être calculées efficacement, telles que A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalle des barres",
          example: "1",
          detail: "La distance entre les barres, la valeur par défaut est 1",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur de la barre",
          example: "#fc5c5c",
          detail: "La couleur de la ligne du graphique linéaire peut être la plage A1, la valeur d'index de la table des couleurs ou une valeur de couleur spécifique. Réglez-le sur 0 ou false pour ne pas l'afficher. Il prend en charge regx, rgb, rgba, etc. Par défaut #fc5c5c",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur des barres négatives",
          example: "#97b552",
          detail: "Paramètre de couleur de la barre négative, représentant la couleur de la valeur négative, identique à la configuration de la couleur de la barre, par défaut #97b552",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximum",
          example: "100",
          detail: "La valeur maximale du graphique à barres, utilisée pour standardiser la longueur du graphique à barres, la valeur par défaut est de calculer automatiquement false, auto, null",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Palette de couleurs",
          example: "#97b552",
          detail: "La palette de couleurs peut définir la couleur de chaque barre individuellement, plusieurs paramètres peuvent être définis et deux formats sont pris en charge : 1 couleur telle que #000, ce qui signifie que la couleur de la première barre est noire ; 2 plages de valeurs : la couleur, telle que -2 :# 000 indique que la barre avec une valeur de -2 est noire, 0:5 :#000 indique que la barre avec une valeur de 0 à 5 est noire et la valeur par défaut est vide",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STACKCOLUMNSPLINES",
      t: "3",
      d: "Générer des sparklines, un histogramme vertical cumulatif intégré dans une cellule, généralement utilisé pour décrire la taille numérique de plusieurs dimensions de données discrètes",
      a: "Générer un histogramme vertical cumulatif de sparklines",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Plage",
          example: "A1:A20",
          detail: "Plage ， Les valeurs peuvent être calculées efficacement, telles que A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Empiler par colonne",
          example: "1",
          detail: "Si vous devez empiler par ligne, définissez cet élément sur false ou 0, la valeur par défaut est 1",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalle des barres",
          example: "1",
          detail: "La distance entre les barres, la valeur par défaut est 1",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximum",
          example: "100",
          detail: "La valeur maximale de la barre cumulée, utilisée pour réguler la longueur de la barre, la valeur par défaut est de calculer automatiquement false, auto, null",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Palette de couleurs",
          example: "#97b552",
          detail: "La palette de couleurs peut définir individuellement la couleur de la barre de chaque dimension, qui peut être définie sur la plage A1:A10, etc. La valeur par défaut est #2ec7c9, #fc5c5c, #5ab1ef, #ffb980...",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BARSPLINES",
      t: "3",
      d: "Générer des sparklines intégrées dans la cellule, généralement utilisées pour décrire la taille des données discrètes",
      a: "Générer un graphique à barres horizontales sparklines",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Plage",
          example: "A1:A20",
          detail: "Plage ， Les valeurs peuvent être calculées efficacement, telles que A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalle des barres",
          example: "1",
          detail: "La distance entre les barres, la valeur par défaut est 1",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur de la barre",
          example: "#fc5c5c",
          detail: "La couleur de la ligne du graphique linéaire peut être la plage A1, la valeur d'index de la table des couleurs ou une valeur de couleur spécifique. Réglez-le sur 0 ou false pour ne pas l'afficher. Il prend en charge regx, rgb, rgba, etc. Par défaut #fc5c5c",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur des barres négatives",
          example: "#97b552",
          detail: "Paramètre de couleur de la barre négative, représentant la couleur de la valeur négative, identique à la configuration de la couleur de la barre, par défaut #97b552",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximum",
          example: "100",
          detail: "La valeur maximale du graphique à barres, utilisée pour standardiser la longueur du graphique à barres, la valeur par défaut est de calculer automatiquement false, auto, null",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Palette de couleurs",
          example: "#97b552",
          detail: "La palette de couleurs peut définir la couleur de chaque barre individuellement, plusieurs paramètres peuvent être définis et deux formats sont pris en charge : 1 couleur telle que #000, ce qui signifie que la couleur de la première barre est noire ; 2 plages de valeurs : la couleur, telle que -2 :# 000 indique que la barre avec une valeur de -2 est noire, 0:5 :#000 indique que la barre avec une valeur de 0 à 5 est noire et la valeur par défaut est vide",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STACKBARSPLINES",
      t: "3",
      d: "Générez des sparklines, un graphique à barres horizontales cumulatif intégré dans une cellule, qui est généralement utilisé pour décrire la taille numérique de plusieurs dimensions de données discrètes.",
      a: "Générer un graphique à barres horizontales cumulées de sparklines",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Plage",
          example: "A1:A20",
          detail: "Plage ， Les valeurs peuvent être calculées efficacement, telles que A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Empiler par colonne",
          example: "1",
          detail: "Si vous devez empiler par ligne, définissez cet élément sur false ou 0, la valeur par défaut est 1",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalle des barres",
          example: "1",
          detail: "La distance entre les barres, la valeur par défaut est 1",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Maximum",
          example: "100",
          detail: "La valeur maximale de la barre cumulée, utilisée pour réguler la longueur de la barre, la valeur par défaut est de calculer automatiquement false, auto, null",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Palette de couleurs",
          example: "#97b552",
          detail: "La palette de couleurs peut définir individuellement la couleur de la barre de chaque dimension, qui peut être définie sur la plage A1:A10, etc. La valeur par défaut est #2ec7c9, #fc5c5c, #5ab1ef, #ffb980...",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DISCRETESPLINES",
      t: "3",
      d: "Générer des sparklines intégrées dans la cellule, généralement utilisées pour décrire la tendance des données discrètes",
      a: "Générer un graphique discret de sparklines",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "Plage",
          example: "A1:A20",
          detail: "Plage ， Les valeurs peuvent être calculées efficacement, telles que A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Seuil de segmentation",
          example: "1",
          detail: "Distinction des couleurs des colonnes de graphiques discrets, par exemple : si la valeur est 0, le bleu est supérieur à 0, le rouge est inférieur à 0 et la valeur par défaut est 0.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur au-dessus du seuil",
          example: "#2ec7c9",
          detail: "La couleur de la ligne du graphique linéaire peut être la plage A1, la valeur d'index de la table des couleurs ou une valeur de couleur spécifique. Réglez-le sur 0 ou false pour ne pas l'afficher. Il prend en charge regx, rgb, rgba, etc. Par défaut #2ec7c9",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur en dessous du seuil",
          example: "#fc5c5c",
          detail: "Le réglage de la couleur de la barre en dessous du seuil, identique à la couleur au dessus du seuil, par défaut #fc5c5c",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TRISTATESPLINES",
      t: "3",
      d: "Générez des sparklines, un graphique à trois états intégré dans la cellule, qui est généralement utilisé pour décrire la tendance de trois situations, telles que gagner, perdre ou faire match nul.",
      a: "Générer un graphique à trois états de sparklines",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Plage",
          example: "A1:A20",
          detail: "Plage ， Les valeurs peuvent être calculées efficacement, telles que A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalle des barres",
          example: "1",
          detail: "La distance entre les barres, la valeur par défaut est 1",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur de la barre",
          example: "#fc5c5c",
          detail: "La couleur de la ligne du graphique linéaire peut être la plage A1, la valeur d'index de la table des couleurs ou une valeur de couleur spécifique. Réglez-le sur 0 ou false pour ne pas l'afficher. Il prend en charge regx, rgb, rgba, etc. Par défaut #fc5c5c",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur des barres négatives",
          example: "#97b552",
          detail: "Paramètre de couleur de la barre négative, représentant la couleur de la valeur négative, identique à la configuration de la couleur de la barre, par défaut #97b552",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur des barres de valeur zéro",
          example: "#999",
          detail: "Paramètre de couleur de la barre de valeur zéro, représentant une couleur de valeur 0, la même configuration de couleur de la barre, par défaut #999",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Palette de couleurs",
          example: "#97b552",
          detail: "La palette de couleurs peut définir la couleur de chaque barre individuellement, plusieurs paramètres peuvent être définis et deux formats sont pris en charge : 1 couleur telle que #000, ce qui signifie que la couleur de la première barre est noire ; 2 plages de valeurs : la couleur, telle que -2 :# 000 indique que la barre avec une valeur de -2 est noire, 0:5 :#000 indique que la barre avec une valeur de 0 à 5 est noire et la valeur par défaut est vide",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PIESPLINES",
      t: "3",
      d: "Générer un diagramme circulaire sparklines intégré dans la cellule, généralement utilisé pour décrire la proportion de données",
      a: "Générer un diagramme circulaire sparklines",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Plage",
          example: "A1:A20",
          detail: "Plage ， Les valeurs peuvent être calculées efficacement, telles que A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Angle de rotation",
          example: "0",
          detail: "L'angle de rotation du graphique à secteurs, la valeur par défaut est 0",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "bordure",
          example: "0",
          detail: "Taille de la bordure du graphique à secteurs, la valeur par défaut est aucune 0",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Couleur de la bordure",
          example: "#000",
          detail: "La couleur de la bordure du graphique à secteurs, la valeur par défaut est #000",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Palette de couleurs",
          example: "#97b552",
          detail: "La couleur de la tranche peut être définie dans la palette, qui peut être définie sur la plage A1:A10, etc. La valeur par défaut est #2ec7c9, #fc5c5c, #5ab1ef, #ffb980...",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BOXSPLINES",
      t: "3",
      d: "Générer des lignes sparklines intégrées dans le diagramme en boîte de cellules, généralement utilisées pour décrire la distribution statistique de l'ensemble de données",
      a: "Générer un diagramme en boîte sparklines",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "Plage",
          example: "A1:A20",
          detail: "Plage ， Les valeurs peuvent être calculées efficacement, telles que A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Coefficient des valeurs aberrantes",
          example: "1.5",
          detail: "La plage de seuil des valeurs aberrantes, si elle est 0 ou fausse, elle ne sera pas affichée, la valeur par défaut est 1,5 fois",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Valeur cible",
          example: "10",
          detail: "Le paramètre de valeur cible sur la boîte à moustaches, la valeur par défaut est false et ne s'affiche pas",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Taille des points",
          example: "1.5",
          detail: "Le rayon du point cible et de la valeur aberrante est défini, la valeur par défaut est 1,5",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BULLETSPLINES",
      t: "3",
      d: "Générer des sparklines intégrées dans la cellule, généralement utilisées pour décrire le taux de réalisation des tâches",
      a: "Générer des puces sparklines",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "Cible",
          example: "10",
          detail: "La valeur numérique peut être calculée efficacement pour la valeur cible atteinte, telle que A1, 100, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "atteint",
          example: "8",
          detail: "Ce n'est que lorsque la valeur est complétée que la valeur peut être calculée efficacement, comme A1, 100, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Valeur de comparaison",
          example: "12",
          detail: "Les valeurs comparatives, telles que l'excédent, le minimum et le résultat net des récompenses, peuvent être calculées efficacement, telles que A1, 100, etc. Vous pouvez définir jusqu'à 9 valeurs de comparaison",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COMPOSESPLINES",
      t: "3",
      d: "Prend en charge plusieurs types d'images dans la même cellule, chaque paramètre représente un diagramme sparklines",
      a: "Combinez des graphiques sparklines dans une seule cellule",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "configuration",
          example: "PIESPLINES(A1:A20)",
          detail: "Paramètres du graphique Sparklines, tels que A1: A20, un diagramme circulaire terminé, les paramètres du graphique linéaire, etc.",
          require: "m",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "SORT",
      t: "14",
      d: "Trie les lignes d'un tableau ou d'une plage donnée en fonction des valeurs d'une ou plusieurs colonnes.",
      a: "Trie les lignes de la plage par colonne spécifiée.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "plage",
          detail: "Les données à trier.",
          example: "A2:A17",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonne_tri",
          detail: "L'index de la colonne dans `plage` ou une plage en dehors de `plage` contenant les valeurs selon lesquelles trier.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "est_croissant",
          detail: "`VRAI` ou `FAUX` indiquant s'il faut trier `colonne_tri` par ordre croissant. `FAUX` trie par ordre décroissant.",
          example: "-1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonne_tri2",
          detail: "Colonnes supplémentaires.",
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
      d: "Renvoie une version filtrée de la plage source, renvoyant uniquement les lignes ou colonnes qui répondent aux conditions spécifiées.",
      a: "Filtre une plage en fonction des conditions fournies.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "plage",
          detail: "Les données à filtrer.",
          example: "A5:D20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "condition1",
          detail: "Une colonne ou une ligne contenant des valeurs vraies ou fausses correspondant à la première colonne ou ligne de `plage`, ou une formule matricielle évaluée comme étant vraie ou fausse.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "condition2",
          detail: "Lignes ou colonnes supplémentaires contenant des valeurs booléennes ` VRAI ` ou ` FAUX ` indiquant si la ligne ou la colonne correspondante dans ` plage ` doit passer par ` FILTER `. Peut également contenir des expressions de formule matricielle qui correspondent à de telles lignes ou colonnes. Toutes les conditions doivent être du même type (ligne ou colonne). Il est interdit de mélanger des conditions de ligne et des conditions de colonne.",
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
      d: "Renvoie les lignes uniques dans la plage source fournie, en supprimant les doublons. Les lignes sont renvoyées dans l'ordre dans lequel elles apparaissent pour la première fois dans la plage source.",
      a: "Lignes uniques dans la plage source fournie.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "plage",
          detail: "Les données à filtrer par entrées uniques.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "par_colonne",
          detail: "[Option] - Valeur logique, indiquant comment comparer ; by row = FALSE() ou omis ; par colonne = VRAI().",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "une_seule_fois",
          detail: "[Option] - Valeur logique, une seule occurrence dans la valeur unique est renvoyée = TRUE(); incluant toutes les valeurs uniques = FALSE() ou omis.",
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
      d: "Renvoie une grille de nombres aléatoires compris entre 0 inclus et 1 exclusif. La taille de la grille correspondra aux arguments de lignes et de colonnes fournis. Si ni les lignes ni les colonnes ne sont fournies, la grille sera de taille 1 x 1.",
      a: "Renvoie une grille de nombres aléatoires.",
      m: [
        0,
        2
      ],
      p: [
        {
          name: "lignes",
          detail: "Le nombre de lignes à remplir avec un nombre aléatoire.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonnes",
          detail: "Le nombre de colonnes à remplir avec un nombre aléatoire.",
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
      d: "Renvoie une grille de nombres séquentiels commençant à une valeur de départ spécifiée et augmentant d'une taille de pas spécifiée. Par défaut, la séquence commence à et augmente de 1.",
      a: "Renvoie une grille de nombres séquentiels.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "lignes",
          detail: "Le nombre de lignes dans la grille résultante de la fonction.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colonnes",
          detail: "Le nombre de colonnes dans la grille résultante de la fonction. En cas d'omission, la grille de résultats aura 1 colonne.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "début",
          detail: "Le numéro auquel démarrer la séquence. En cas d'omission, la séquence commencera à 1.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "pas",
          detail: "Le montant de chaque valeur de la séquence différera. En cas d'omission, chaque valeur différera de 1.",
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
      d: "Évaluer une formule ou une expression exprimée en mots et renvoyer le résultat",
      a: "Évaluez selon une formule ou une expression littérale.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "expression",
          example: "\"A1+5*2^2\"",
          detail: "Formule ou expression",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "REMOTE",
      t: "5",
      d: "Appelle une fonction sur un serveur distant",
      a: "Appelle une fonction sur un serveur principal/API distant.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "expression_distante",
          example: "SUM(A1:A10000000)",
          detail: "Formule",
          require: "m",
          repeat: "n",
          type: "string"
        }
      ]
    }
  ],
  toolbar: {
    toolbar: "Barre d'outils",
    undo: "Annuler",
    redo: "Refaire",
    "clear-format": "Effacer le format",
    "format-painter": "Reproduire la mise en forme",
    paintFormat: "Reproduire la mise en forme",
    "currency-format": "Format monétaire",
    "percentage-format": "Format en pourcentage",
    "number-decrease": "Moins de décimales",
    "number-increase": "Plus de décimales",
    moreFormats: "Plus de formats",
    "border-all": "Tout encadrer",
    "merge-all": "Fusionner toutes les cellules",
    format: "Format",
    font: "Police",
    "font-size": "Taille de police",
    bold: "Gras (Ctrl+B)",
    italic: "Italique (Ctrl+I)",
    "strike-through": "Barré (Alt+Shift+5)",
    underline: "Souligné",
    "font-color": "Couleur de la police",
    "align-left": "Aligné à gauche",
    "align-center": "Centré horizontalement",
    "align-right": "Aligné à droite",
    "align-top": "Aligné en haut",
    "align-mid": "Centré verticalement",
    "align-bottom": "Aligné en bas",
    chooseColor: "Choisir une couleur",
    resetColor: "Réinitialiser",
    customColor: "Personnalisé",
    alternatingColors: "Couleurs alternées",
    confirmColor: "OK",
    cancelColor: "Annuler",
    collapse: "Réduire",
    background: "Couleur de remplissage",
    border: "Bordure",
    borderStyle: "Style de bordure",
    "merge-cell": "Fusionner les cellules",
    chooseMergeType: "Choisir le type de fusion",
    horizontalAlign: "Alignement horizontal",
    verticalAlign: "Alignement vertical",
    alignment: "Alignement",
    textWrap: "Renvoi à la ligne",
    textWrapMode: "Mode de renvoi à la ligne",
    textRotate: "Rotation du texte",
    textRotateMode: "Mode de rotation du texte",
    freeze: "Figer",
    sort: "Trier",
    filter: "Filtrer",
    sortAndFilter: "Trier et filtrer",
    findAndReplace: "Rechercher et remplacer",
    "formula-sum": "SOMME",
    autoSum: "Somme automatique",
    moreFunction: "Plus de fonctions",
    conditionalFormat: "Mise en forme conditionnelle",
    comment: "Commentaire",
    pivotTable: "Tableau croisé dynamique",
    chart: "Graphique",
    screenshot: "Capture d'écran",
    splitColumn: "Fractionner le texte",
    insertImage: "Insérer une image",
    insertLink: "Insérer un lien",
    dataVerification: "Validation des données",
    protection: "Protéger la feuille",
    clearText: "Effacer la couleur",
    noColorSelectedText: "Aucune couleur sélectionnée",
    toolMore: "Plus",
    toolLess: "Moins",
    toolClose: "Fermer",
    toolMoreTip: "Plus de fonctionnalités",
    moreOptions: "Plus d'options",
    cellFormat: "Configuration du format de cellule",
    print: "Imprimer"
  },
  alternatingColors: {
    applyRange: "Apply to range",
    selectRange: "Select a data range",
    header: "Header",
    footer: "Footer",
    errorInfo: "Cannot perform this operation on multiple selection areas, please select a single area and try again",
    textTitle: "Format style",
    custom: "CUSTOM",
    close: "close",
    selectionTextColor: "Click to select text color",
    selectionCellColor: "Click to select cell color",
    removeColor: "Remove alternating colors",
    colorShow: "color",
    currentColor: "Current",
    tipSelectRange: "Please select the range of alternating colors",
    errorNoRange: "No range is selected",
    errorExistColors: "Alternating colors already exist and cannot be edited"
  },
  button: {
    confirm: "OK",
    cancel: "Annuler",
    close: "Fermer",
    update: "Mettre à jour",
    delete: "Supprimer",
    insert: "Insérer",
    prevPage: "Précédent",
    nextPage: "Suivant",
    total: "total:"
  },
  paint: {
    start: "Paint format start",
    end: "ESC",
    tipSelectRange: "Please select the range to be copied",
    tipNotMulti: "Cannot perform this operation on multiple selection ranges"
  },
  format: {
    moreCurrency: "More currency formats",
    moreDateTime: "More date and time formats",
    moreNumber: "More number formats",
    titleCurrency: "Currency formats",
    decimalPlaces: "Decimal places",
    titleDateTime: "Date and time formats",
    titleNumber: "Number formats",
    tipDecimalPlaces: "The decimal places must be between 0-9!",
    select: "Select",
    format: "format",
    currency: "currency"
  },
  info: {
    detailUpdate: "New opened",
    detailSave: "Local cache restored",
    row: "",
    column: "",
    loading: "Loading...",
    copy: "Copy",
    return: "Exit",
    rename: "Rename",
    tips: "WorkBook rename",
    noName: "Untitled spreadsheet",
    wait: "waiting for update",
    add: "Add",
    addLast: "more rows at bottom",
    backTop: "Back to the top",
    pageInfo: "Total ${total}，${totalPage} page，current ${currentPage}",
    nextPage: "Next",
    tipInputNumber: "Please enter the number",
    tipInputNumberLimit: "The increase range is limited to 1-100",
    tipRowHeightLimit: "Row height must be between 0 ~ 545",
    tipColumnWidthLimit: "The column width must be between 0 ~ 2038",
    pageInfoFull: "Total ${total}，${totalPage} page，All data displayed",
    sheetIsFocused: "Sheet focus lock enabled.",
    sheetNotFocused: "Sheet focus lock disabled.",
    sheetSrIntro: "To toggle sheet focus to assist with toolbar and other non-sheet navigation, use Shift, Control, F.",
    currentCellInput: "Current cell input",
    newSheet: "New sheet",
    sheetOptions: "Sheet options",
    Dropdown: "Dropdown",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    toggleSheetFocusShortcut: "Toggle sheet focus lock: Shift, Control, F.",
    selectRangeShortcut: "Select range: Shift, arrow keys.",
    autoFillDownShortcut: "Auto-fill selection down from first cell: Control or Meta key, D.",
    autoFillRightShortcut: "Auto-fill selection right from first cell: Control or Meta key, R.",
    boldTextShortcut: "Bold text: Control or Meta key, B.",
    copyShortcut: "Copy: Control or Meta key, C.",
    pasteShortcut: "Paste: Control or Meta key, V.",
    undoShortcut: "Undo: Control or Meta key, Z.",
    redoShortcut: "Redo: Control or Meta key, Shift, Z.",
    deleteCellContentShortcut: "Delete cell content: Delete or Backspace.",
    confirmCellEditShortcut: "Confirm cell edit and move down: Enter.",
    moveRightShortcut: "Move right: Tab.",
    moveLeftShortcut: "Move left: Shift, Tab.",
    shortcuts: "Keyboard Shortcuts"
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
      text: "Automatique",
      value: "General",
      example: ""
    }, {
      text: "Texte",
      value: "@",
      example: ""
    }, {
      text: "",
      value: "split",
      example: ""
    }, {
      text: "Nombre",
      value: "##0.00",
      example: "1000.12"
    }, {
      text: "Pourcentage",
      value: "#0.00%",
      example: "12.21%"
    }, {
      text: "Scienfique",
      value: "0.00E+00",
      example: "1.01E+5"
    }, {
      text: "",
      value: "split",
      example: ""
    }, {
      text: "Comptabilité",
      value: "".concat(currency, "(0.00)"),
      example: "".concat(currency, "(1200.09)")
    }, {
      text: "Monnaie",
      value: "".concat(currency, "0.00"),
      example: "".concat(currency, "1200.09")
    }, {
      text: "",
      value: "split",
      example: ""
    }, {
      text: "Date",
      value: "yyyy-MM-dd",
      example: "2017-11-29"
    }, {
      text: "Heure",
      value: "hh:mm AM/PM",
      example: "3:00 PM"
    }, {
      text: "Heure 24H",
      value: "hh:mm",
      example: "15:00"
    }, {
      text: "Date heure",
      value: "yyyy-MM-dd hh:mm AM/PM",
      example: "2017-11-29 3:00 PM"
    }, {
      text: "Date heure 24 H",
      value: "yyyy-MM-dd hh:mm",
      example: "2017-11-29 15:00"
    }, {
      text: "",
      value: "split",
      example: ""
    }, {
      text: "Formats personnalisés",
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
    "Tahoma",
    "Verdana",
    "Helvetica",
    "Trebuchet MS",
    "Times New Roman",
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
    tahoma: 1,
    verdana: 2,
    helvetica: 3,
    "trebuchet ms": 4,
    "times new roman": 5,
    georgia: 6,
    garamond: 7,
    "courier new": 8,
    "lucida console": 9,
    impact: 10,
    "comic sans ms": 11,
    "segoe ui": 12
  },
  border: {
    borderTop: "Bordure supérieure",
    borderBottom: "Bordure inférieure",
    borderLeft: "Bordure gauche",
    borderRight: "Bordure droite",
    borderNone: "Aucune bordure",
    borderAll: "Toutes les bordures",
    borderOutside: "Bordure extérieure",
    borderInside: "Bordure intérieure",
    borderHorizontal: "Bordures horizontales",
    borderVertical: "Bordures verticales",
    borderColor: "Couleur de la bordure",
    borderSize: "Taille de la bordure",
    borderSlash: "Bordure en diagonale",
    borderDefault: "Défaut",
    borderStyle: "Style de bordure"
  },
  merge: {
    mergeAll: "Fusionner tout",
    mergeV: "Fusionner verticalement",
    mergeH: "Fusionner horizontalement",
    mergeCancel: "Annuler la fusion",
    overlappingError: "Impossible de fusionner des zones qui se chevauchent",
    partiallyError: "Impossible d'effectuer cette opération "
  },
  align: {
    left: "Gauche",
    center: "Centre",
    right: "Droite",
    top: "Haut",
    middle: "Milieu",
    bottom: "Bas"
  },
  textWrap: {
    overflow: "Débordement",
    wrap: "Renvoi à la ligne",
    clip: "Rogner"
  },
  rotation: {
    none: "Aucune",
    angleup: "Incliné vers le haut",
    angledown: "Incliné vers le bas",
    vertical: "Empilé verticalement",
    rotationUp: "Rotation vers le haut",
    rotationDown: "Rotation vers le bas"
  },
  freezen: {
    default: "Figer",
    freezenRow: "Première ligne",
    freezenColumn: "Première colonne",
    freezenRC: "Les deux",
    freezenRowRange: "Figer jusqu'à la ligne actuelle",
    freezenColumnRange: "Figer jusqu'à la colonne actuelle",
    freezenRCRange: "Figer jusqu'à la cellule actuelle",
    freezenCancel: "Annuler le figement",
    noSeletionError: "Aucune plage sélectionnée",
    rangeRCOverErrorTitle: "Rappel de figement",
    rangeRCOverError: "La zone figée dépasse la plage visible, ce qui peut entraîner un comportement anormal. Veuillez réinitialiser la zone figée."
  },
  sort: {
    asc: "Croissant",
    desc: "Décroissant",
    custom: "Tri personnalisé",
    hasTitle: "Les données ont une ligne d'en-tête",
    sortBy: "Trier par",
    addOthers: "Ajouter une autre colonne de tri",
    close: "Fermer",
    confirm: "Trier",
    columnOperation: "Colonne",
    secondaryTitle: "Puis par",
    sortTitle: "Trier la plage",
    sortRangeTitle: "Trier la plage de",
    sortRangeTitleTo: "à",
    noRangeError: "Impossible d'effectuer cette opération sur plusieurs zones sélectionnées, veuillez sélectionner une seule plage et réessayer",
    mergeError: "Il y a des cellules fusionnées dans la sélection, cette opération ne peut pas être effectuée !"
  },
  filter: {
    filter: "Créer un filtre",
    sortByAsc: "Tri croissant",
    sortByDesc: "Tri décroissant",
    filterByColor: "Filtrer par couleur",
    filterByCondition: "Filtrer par condition",
    filterByValues: "Filtrer par valeurs",
    filiterInputNone: "Aucune",
    filiterInputTip: "Entrer une valeur de filtre",
    filiterRangeStartTip: "Valeur pour la formule",
    filiterRangeEndTip: "Valeur pour la formule",
    filterValueByAllBtn: "Tout cocher",
    filterValueByClearBtn: "Effacer",
    filterValueByInverseBtn: "Inverser",
    filterValueByTip: "Filtrer par valeurs",
    filterConform: "Confirmer",
    filterCancel: "Annuler",
    clearFilter: "Effacer le filtre",
    conditionNone: "Aucune",
    conditionCellIsNull: "Est vide",
    conditionCellNotNull: "N'est pas vide",
    conditionCellTextContain: "Le texte contient",
    conditionCellTextNotContain: "Le texte ne contient pas",
    conditionCellTextStart: "Le texte commence par",
    conditionCellTextEnd: "Le texte se termine par",
    conditionCellTextEqual: "Le texte est exactement",
    conditionCellDateEqual: "La date est",
    conditionCellDateBefore: "La date est avant",
    conditionCellDateAfter: "La date est après",
    conditionCellGreater: "Supérieur à",
    conditionCellGreaterEqual: "Supérieur ou égal à",
    conditionCellLess: "Inférieur à",
    conditionCellLessEqual: "Inférieur ou égal à",
    conditionCellEqual: "Est égal à",
    conditionCellNotEqual: "N'est pas égal à",
    conditionCellBetween: "Est entre",
    conditionCellNotBetween: "N'est pas entre",
    filiterMoreDataTip: "Grande quantité de données ! Veuillez patienter",
    filiterMonthText: "Mois",
    filiterYearText: "Année",
    filiterByColorTip: "Filtrer par couleur de cellule",
    filiterByTextColorTip: "Filtrer par couleur de police",
    filterContainerOneColorTip: "La colonne ne contient qu'une couleur",
    filterDateFormatTip: "Format de date",
    valueBlank: "(Vide)",
    mergeError: "Il y a des cellules fusionnées dans la sélection du filtre, cette opération ne peut pas être effectuée !"
  },
  rightclick: {
    copy: "Copier",
    copyAs: "Copier sous",
    paste: "Coller",
    insert: "Insérer",
    image: "Insérer une image",
    link: "Insérer un lien",
    delete: "Supprimer",
    deleteCell: "Supprimer la cellule",
    deleteSelected: "Supprimer ",
    hide: "Masquer",
    hideSelected: "Masquer ",
    showHide: "Afficher les éléments masqués",
    to: "Vers",
    left: "Gauche",
    right: "Droite",
    top: "Au-dessus",
    bottom: "En dessous",
    moveLeft: "Déplacer à gauche",
    moveUp: "Déplacer vers le haut",
    add: "Ajouter",
    row: "Ligne",
    column: "Colonne",
    width: "Largeur",
    height: "Hauteur",
    number: "Nombre",
    confirm: "Confirmer",
    orderAZ: "Tri croissant",
    orderZA: "Tri décroissant",
    clearContent: "Effacer le contenu",
    matrix: "Opération matricielle",
    sortSelection: "Trier",
    filterSelection: "Filtrer",
    chartGeneration: "Créer un graphique",
    firstLineTitle: "Titre de la première ligne",
    untitled: "Sans titre",
    array1: "Tableau unidimensionnel",
    array2: "Tableau bidimensionnel",
    array3: "Tableau multidimensionnel",
    diagonal: "Diagonale",
    antiDiagonal: "Diagonale inverse",
    diagonalOffset: "Décalage diagonal",
    offset: "Décalage",
    boolean: "Booléen",
    flip: "Inverser",
    upAndDown: "De haut en bas",
    leftAndRight: "De gauche à droite",
    clockwise: "Sens horaire",
    counterclockwise: "Sens antihoraire",
    transpose: "Transposer",
    matrixCalculation: "Calcul matriciel",
    plus: "Addition",
    minus: "Soustraction",
    multiply: "Multiplication",
    divided: "Division",
    power: "Puissance",
    root: "Racine",
    log: "Logarithme",
    delete0: "Supprimer les valeurs 0 aux extrémités",
    removeDuplicate: "Supprimer les doublons",
    byRow: "Par ligne",
    byCol: "Par colonne",
    generateNewMatrix: "Générer une nouvelle matrice",
    noMulti: "Action impossible sur plusieurs sélections",
    cannotDeleteAllRow: "Impossible de supprimer toutes les lignes",
    cannotDeleteAllColumn: "Impossible de supprimer toutes les colonnes",
    cannotDeleteRowReadOnly: "Impossible (ligne en lecture seule)",
    cannotDeleteColumnReadOnly: "Impossible (colonne en lecture seule)",
    cannotInsertOnRowReadOnly: "Impossible (ligne en lecture seule)",
    cannotInsertOnColumnReadOnly: "Impossible (colonne en lecture seule)",
    rowOverLimit: "Limite de 10 000 lignes dépassée",
    columnOverLimit: "Limite de 1 000 colonnes dépassée"
  },
  comment: {
    insert: "Insérer",
    edit: "Modifier",
    delete: "Supprimer",
    showOne: "Afficher/Masquer",
    showAll: "Afficher/Masquer tout"
  },
  screenshot: {
    screenshotTipNoSelection: "Please select the scope of the screenshot",
    screenshotTipTitle: "Warning！",
    screenshotTipHasMerge: "This operation cannot be performed on merged cells",
    screenshotTipHasMulti: "This operation cannot be performed on multiple selection regions",
    screenshotTipSuccess: "Successful",
    screenshotImageName: "Screenshot",
    downLoadClose: "Close",
    downLoadCopy: "Copy to clipboard",
    downLoadBtn: "Download",
    browserNotTip: "not supported by IE browser!",
    rightclickTip: "Please right-click \"copy\" on the picture",
    successTip: "Successfully (if pasting fails, please right-click on the image to \"copy image\")"
  },
  splitText: {
    splitDelimiters: "Delimiters",
    splitOther: "Other",
    splitContinueSymbol: "Consecutive separators are treated as a single",
    splitDataPreview: "Preview",
    splitTextTitle: "Split text",
    splitConfirmToExe: "There is already data here, do you want to replace it?",
    splitSymbols: [
      {
        name: "Tab",
        value: "Tab"
      },
      {
        name: "semicolon",
        value: "semicolon"
      },
      {
        name: "comma",
        value: "comma"
      },
      {
        name: "space",
        value: "space"
      }
    ],
    tipNoMulti: "Cannot perform this operation on multiple selection areas, please select a single area and try again",
    tipNoMultiColumn: "Only one column of data can be converted at a time. The selected area can have multiple rows but not multiple columns. Please try again after selecting a single column range",
    tipNoSelect: "You cannot separate a cell without selecting it"
  },
  imageText: {
    imageSetting: "Paramètres de l'image",
    close: "Fermer",
    conventional: "Conventionnel",
    moveCell1: "Déplacer et redimensionner les cellules",
    moveCell2: "Déplacer sans redimensionner la cellule",
    moveCell3: "Ne pas déplacer et redimensionner la cellule",
    fixedPos: "Position fixe",
    border: "Bordure",
    width: "Largeur",
    radius: "Rayon",
    style: "Style",
    solid: "Plein",
    dashed: "Tirets",
    dotted: "Pointillés",
    double: "Double",
    color: "Couleur"
  },
  punctuation: {
    tab: "Tabulation",
    semicolon: "Point-virgule",
    comma: "Virgule",
    space: "Espace"
  },
  findAndReplace: {
    find: "Rechercher",
    replace: "Remplacer",
    goto: "Aller à",
    location: "Emplacement",
    formula: "Formule",
    date: "Date",
    number: "Nombre",
    string: "Texte",
    error: "Erreur",
    condition: "Condition",
    rowSpan: "Fusion de lignes",
    columnSpan: "Fusion de colonnes",
    locationExample: "Emplacement",
    lessTwoRowTip: "Veuillez sélectionner au moins deux lignes",
    lessTwoColumnTip: "Veuillez sélectionner au moins deux colonnes",
    findTextbox: "Rechercher du contenu",
    replaceTextbox: "Remplacer le contenu",
    regexTextbox: "Expression régulière",
    wholeTextbox: "Mot entier",
    distinguishTextbox: "Sensible à la casse",
    allReplaceBtn: "Tout remplacer",
    replaceBtn: "Remplacer",
    allFindBtn: "Tout rechercher",
    findBtn: "Rechercher suivant",
    noFindTip: "Le contenu n'a pas été trouvé",
    modeTip: "Cette opération n'est pas disponible dans ce mode",
    searchTargetSheet: "Feuille",
    searchTargetCell: "Cellule",
    searchTargetValue: "Valeur",
    searchInputTip: "Veuillez entrer le contenu à rechercher",
    noReplceTip: "Il n'y a rien à remplacer",
    noMatchTip: "Aucune correspondance trouvée",
    successTip: "${xlength} éléments trouvés",
    locationConstant: "Constante",
    locationFormula: "Formule",
    locationDate: "Date",
    locationDigital: "Nombre",
    locationString: "Texte",
    locationBool: "Logique",
    locationError: "Erreur",
    locationNull: "Vide",
    locationCondition: "Mise en forme conditionnelle",
    locationRowSpan: "Fusion de lignes",
    locationColumnSpan: "Fusion de colonnes",
    locationTiplessTwoRow: "Veuillez sélectionner au moins deux lignes",
    locationTiplessTwoColumn: "Veuillez sélectionner au moins deux colonnes",
    locationTipNotFindCell: "Cellule non trouvée"
  },
  sheetconfig: {
    delete: "Supprimer",
    copy: "Copier",
    rename: "Renommer",
    changeColor: "Changer la couleur",
    hide: "Masquer",
    unhide: "Afficher",
    moveLeft: "Déplacer à gauche",
    moveRight: "Déplacer à droite",
    resetColor: "Réinitialiser la couleur",
    cancelText: "Annuler",
    chooseText: "Confirmer la couleur",
    focus: "Focus",
    tipNameRepeat: "Le nom de l'onglet ne peut pas être dupliqué ! Veuillez le modifier",
    noMoreSheet: "Le classeur contient au moins une feuille visible. Pour supprimer la feuille sélectionnée, veuillez insérer une nouvelle feuille ou afficher une feuille masquée.",
    confirmDelete: "Êtes-vous sûr de vouloir supprimer",
    redoDelete: "Annulable avec Ctrl+Z",
    noHide: "Impossible de masquer, il doit rester au moins un onglet de feuille",
    chartEditNoOpt: "Cette opération n'est pas autorisée en mode d'édition de graphique !",
    sheetNameSpecCharError: "Le nom ne peut pas contenir : [ ] : ? * / ' \"",
    sheetNamecannotIsEmptyError: "Le nom de la feuille ne peut pas être vide",
    text: "Feuille"
  },
  conditionformat: {
    conditionformat_greaterThan: "Format conditionnel - Supérieur à",
    conditionformat_greaterThan_title: "Formater les cellules supérieures à",
    conditionformat_lessThan: "Format conditionnel - Inférieur à",
    conditionformat_lessThan_title: "Formater les cellules inférieures à",
    conditionformat_between: "Format conditionnel - Entre",
    conditionformat_between_title: "Formater les cellules avec des valeurs entre",
    conditionformat_equal: "Format conditionnel - Égal",
    conditionformat_equal_title: "Formater les cellules égales à",
    conditionformat_textContains: "Format conditionnel - Contient du texte",
    conditionformat_textContains_title: "Formater les cellules contenant le texte suivant",
    conditionformat_occurrenceDate: "Format conditionnel - Date d'occurrence",
    conditionformat_occurrenceDate_title: "Formater les cellules contenant les dates suivantes",
    conditionformat_duplicateValue: "Format conditionnel - Valeur en double",
    conditionformat_duplicateValue_title: "Formater les cellules contenant les valeurs suivantes",
    conditionformat_top10: "Format conditionnel - Top 10",
    conditionformat_top10_percent: "Format conditionnel - Top 10%",
    conditionformat_top10_title: "Formater les cellules avec les valeurs les plus élevées",
    conditionformat_last10: "Format conditionnel - Derniers 10",
    conditionformat_last10_percent: "Format conditionnel - Derniers 10%",
    conditionformat_last10_title: "Formater les cellules avec les valeurs les plus basses",
    conditionformat_aboveAverage: "Format conditionnel - Supérieur à la moyenne",
    conditionformat_aboveAverage_title: "Formater les cellules supérieures à la moyenne",
    conditionformat_belowAverage: "Format conditionnel - Inférieur à la moyenne",
    conditionformat_belowAverage_title: "Formater les cellules inférieures à la moyenne",
    rule: "Règle",
    newRule: "Nouvelle règle",
    editRule: "Modifier la règle",
    deleteRule: "Supprimer la règle",
    deleteCellRule: "Supprimer la règle de cellule",
    deleteSheetRule: "Supprimer la règle de feuille",
    manageRules: "Gérer les règles",
    showRules: "Afficher ses règles de mise en forme",
    highlightCellRules: "Règles de mise en surbrillance des cellules",
    itemSelectionRules: "Règles de sélection d'éléments",
    conditionformatManageRules: "Gestion des règles de mise en forme conditionnelle",
    format: "Format",
    setFormat: "Définir le format",
    setAs: "Définir comme",
    setAsByArea: "Pour la zone sélectionnée, définir sur",
    applyRange: "Appliquer à la plage",
    selectRange: "Sélectionner la plage d'application",
    selectRange_percent: "Pourcentage de la plage sélectionnée",
    selectRange_average: "Valeur moyenne de la plage sélectionnée",
    selectRange_value: "Valeur dans la plage sélectionnée",
    pleaseSelectRange: "Veuillez sélectionner la plage d'application",
    selectDataRange: "Sélectionner la plage de données",
    selectCell: "Sélectionner une cellule",
    pleaseSelectCell: "Veuillez sélectionner une cellule",
    pleaseSelectADate: "Veuillez sélectionner une date",
    pleaseEnterInteger: "Veuillez entrer un entier entre 1 et 1000",
    onlySingleCell: "Une seule cellule peut être référencée",
    conditionValueCanOnly: "La valeur de condition ne peut être qu'un nombre ou une seule cellule",
    confirm: "Confirmer",
    confirmColor: "Confirmer la couleur",
    cancel: "Annuler",
    close: "Fermer",
    clearColorSelect: "Effacer la sélection de couleur",
    sheet: "Feuille",
    currentSheet: "Feuille actuelle",
    colorGradation: "Dégradé de couleur",
    greaterThan: "Supérieur à",
    lessThan: "Inférieur à",
    between: "Entre",
    equal: "Égal",
    textContains: "Contient du texte",
    duplicateValue: "Valeur en double",
    uniqueValue: "Valeur unique",
    top: "Haut",
    top10: "Top 10",
    top10_percent: "Top 10%",
    last: "Dernier",
    last10: "Derniers 10",
    last10_percent: "Derniers 10%",
    above: "Au-dessus",
    aboveAverage: "Au-dessus de la moyenne",
    below: "En dessous",
    belowAverage: "En dessous de la moyenne",
    yesterday: "Hier",
    today: "Aujourd'hui",
    tomorrow: "Demain",
    lastWeek: "La semaine dernière",
    thisWeek: "Cette semaine",
    lastMonth: "Le mois dernier",
    thisMonth: "Ce mois-ci",
    lastYear: "L'année dernière",
    thisYear: "Cette année",
    last7days: "Les 7 derniers jours",
    last30days: "Les 30 derniers jours",
    next7days: "Les 7 prochains jours",
    next30days: "Les 30 prochains jours",
    next60days: "Les 60 prochains jours",
    chooseRuleType: "Choisir le type de règle",
    editRuleDescription: "Modifier la description de la règle",
    newFormatRule: "Nouvelle règle de formatage",
    editFormatRule: "Modifier la règle de formatage",
    formatStyle: "Style",
    fillType: "Remplissage",
    color: "Couleur"
  },
  insertLink: {
    linkText: "Texte affiché",
    linkType: "Type de lien",
    linkAddress: "Adresse du lien",
    linkSheet: "Feuille de calcul",
    linkCell: "Plage de cellules",
    linkTooltip: "Infobulle",
    selectCellRange: "Sélectionner une plage de cellules",
    cellRangePlaceholder: "Sélectionner les cellules avec le curseur ou entrer directement",
    placeholder1: "Veuillez entrer l'adresse du lien Web",
    placeholder2: "Veuillez entrer la cellule à citer, exemple A1",
    placeholder3: "Veuillez entrer le texte de l'infobulle",
    tooltipInfo1: "Veuillez entrer un lien valide",
    invalidCellRangeTip: "Veuillez entrer une plage de cellules correcte, par ex. Feuille1!A1:C8",
    openLink: "Ouvrir le lien",
    goTo: "Aller à ${linkAddress}"
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
      text: "Feuille",
      value: "sheet"
    }
  ],
  dataVerification: {
    cellRange: "Plage de cellules",
    selectCellRange: "Cliquer pour sélectionner une plage de cellules",
    selectCellRange2: "Veuillez sélectionner une plage de cellules",
    verificationCondition: "Condition de validation",
    allowMultiSelect: "Autoriser la sélection multiple",
    dropdown: "Liste déroulante",
    checkbox: "Case à cocher",
    number: "Nombre",
    number_integer: "Nombre entier",
    number_decimal: "Nombre décimal",
    text_content: "Texte",
    text_length: "Longueur du texte",
    date: "Date",
    validity: "Validité",
    placeholder1: "Veuillez entrer les options, séparées par des virgules, par ex. 1,2,3,4,5",
    placeholder2: "Veuillez entrer du contenu",
    placeholder3: "Valeur numérique, par ex. 10",
    placeholder4: "Veuillez entrer le texte spécifié",
    placeholder5: "Veuillez entrer l'invite affichée lors de la sélection de la cellule",
    selected: "Sélectionné",
    notSelected: "Non sélectionné",
    between: "Entre",
    notBetween: "Pas entre",
    equal: "Égal",
    notEqualTo: "Différent de",
    moreThanThe: "Supérieur à",
    lessThan: "Inférieur à",
    greaterOrEqualTo: "Supérieur ou égal à",
    lessThanOrEqualTo: "Inférieur ou égal à",
    include: "Inclure",
    exclude: "Exclure",
    earlierThan: "Antérieur à",
    noEarlierThan: "Pas antérieur à",
    laterThan: "Postérieur à",
    noLaterThan: "Pas postérieur à",
    identificationNumber: "Numéro d'identification",
    phoneNumber: "Numéro de téléphone",
    remote: "Acquisition automatique à distance",
    prohibitInput: "Interdire la saisie si les données ne sont pas valides",
    hintShow: "Afficher une invite lorsque la cellule est sélectionnée",
    deleteVerification: "Supprimer la validation",
    tooltipInfo1: "L'option de la liste déroulante ne peut pas être vide",
    tooltipInfo2: "Le contenu de la case à cocher ne peut pas être vide",
    tooltipInfo3: "La valeur saisie n'est pas de type numérique",
    tooltipInfo4: "La valeur 2 ne peut pas être inférieure à la valeur 1",
    tooltipInfo5: "Le contenu du texte ne peut pas être vide",
    tooltipInfo6: "La valeur saisie n'est pas de type date",
    tooltipInfo7: "La date 2 ne peut pas être antérieure à la date 1",
    textlengthInteger: "La longueur du texte doit être un entier supérieur ou égal à 0"
  },
  formula: {
    sum: "Somme",
    average: "Moyenne",
    count: "Nombre",
    max: "Max",
    min: "Min",
    ifGenerate: "Générateur de formules SI",
    find: "Toutes les formules",
    tipNotBelongToIf: "Cette fonction ne fait pas partie de la formule SI !",
    tipSelectCell: "Veuillez sélectionner la cellule où insérer la fonction",
    ifGenCompareValueTitle: "Valeur de comparaison",
    ifGenSelectCellTitle: "Cliquer pour sélectionner une cellule",
    ifGenRangeTitle: "Plage",
    ifGenRangeTo: "à",
    ifGenRangeEvaluate: "Évaluation de la plage",
    ifGenSelectRangeTitle: "Cliquer pour sélectionner une plage",
    ifGenCutWay: "Méthode de découpage",
    ifGenCutSame: "Valeur de découpage identique",
    ifGenCutNpiece: "Découper en N",
    ifGenCutCustom: "Personnalisé",
    ifGenCutConfirm: "Confirmer",
    ifGenTipSelectCell: "Sélectionner des cellules",
    ifGenTipSelectCellPlace: "Veuillez sélectionner des cellules",
    ifGenTipSelectRange: "Sélectionner une plage",
    ifGenTipSelectRangePlace: "Veuillez sélectionner une plage",
    ifGenTipNotNullValue: "La valeur de comparaison ne peut pas être vide !",
    ifGenTipLableTitile: "Étiquette",
    ifGenTipRangeNotforNull: "La plage ne peut pas être vide !",
    ifGenTipCutValueNotforNull: "La valeur de découpage ne peut pas être vide !",
    ifGenTipNotGenCondition: "Aucune condition disponible pour la génération !"
  },
  formulaMore: {
    valueTitle: "Valeur",
    tipSelectDataRange: "Sélectionner une plage de données",
    tipDataRangeTile: "Plage de données",
    findFunctionTitle: "Rechercher une fonction",
    tipInputFunctionName: "Nom de la fonction ou brève description",
    Array: "Tableau",
    Database: "Base de données",
    Date: "Date",
    Engineering: "Ingénierie",
    Filter: "Filtrer",
    Financial: "Financier",
    luckysheet: "Luckysheet",
    other: "Autre",
    Logical: "Logique",
    Lookup: "Recherche",
    Math: "Mathématiques",
    Operator: "Opérateur",
    Parser: "Analyseur",
    Statistical: "Statistique",
    Text: "Texte",
    dataMining: "Exploration de données",
    selectFunctionTitle: "Sélectionner une fonction",
    calculationResult: "Résultat",
    tipSuccessText: "Succès",
    tipParamErrorText: "Erreur de type de paramètre",
    helpClose: "Fermer",
    helpCollapse: "Réduire",
    helpExample: "Exemple",
    helpAbstract: "Résumé",
    execfunctionError: "Erreur dans la formule",
    execfunctionSelfError: "La formule ne peut pas se référer à sa propre cellule",
    execfunctionSelfErrorResult: "La formule ne peut pas se référer à sa propre cellule, ce qui entraînerait des résultats de calcul inexacts",
    allowRepeatText: "Répétable",
    allowOptionText: "Optionnel",
    selectCategory: "Ou sélectionner une catégorie"
  },
  drag: {
    noMerge: "Impossible d'effectuer cette opération sur des cellules fusionnées",
    affectPivot: "Cette modification ne peut pas être effectuée sur la cellule sélectionnée car elle affecterait le tableau croisé dynamique !",
    noMulti: "Impossible d'effectuer cette opération sur plusieurs zones sélectionnées, veuillez sélectionner une seule zone",
    noPaste: "Impossible de coller ce contenu ici, veuillez sélectionner une cellule dans la zone de collage et réessayer",
    noPartMerge: "Impossible d'effectuer cette opération sur des cellules partiellement fusionnées",
    inputCorrect: "Veuillez entrer une valeur correcte",
    notLessOne: "Le nombre de lignes et de colonnes ne peut pas être inférieur à 1",
    offsetColumnLessZero: "La colonne de décalage ne peut pas être négative !",
    pasteMustKeybordAlert: "Pour copier-coller dans le tableau : Ctrl + C pour copier, Ctrl + V pour coller, Ctrl + X pour couper",
    pasteMustKeybordAlertHTMLTitle: "Copier-Coller dans le tableau",
    pasteMustKeybordAlertHTML: "<span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + C</span>&nbsp;&nbsp;pour copier<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + V</span>&nbsp;&nbsp;pour coller<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + X</span>&nbsp;&nbsp;pour couper"
  },
  pivotTable: {
    title: "Tableau croisé dynamique",
    closePannel: "Fermer",
    editRange: "Plage",
    tipPivotFieldSelected: "Sélectionner les champs",
    tipClearSelectedField: "Effacer tous les champs",
    btnClearSelectedField: "Effacer",
    btnFilter: "Filtrer",
    titleRow: "Ligne",
    titleColumn: "Colonne",
    titleValue: "Valeur",
    tipShowColumn: "Les champs statistiques sont affichés sous forme de colonnes",
    tipShowRow: "Les champs statistiques sont affichés sous forme de lignes",
    titleSelectionDataRange: "Sélectionner la plage",
    titleDataRange: "Plage de données",
    valueSum: "SOMME",
    valueStatisticsSUM: "Somme",
    valueStatisticsCOUNT: "Nombre",
    valueStatisticsCOUNTA: "Nombre A",
    valueStatisticsCOUNTUNIQUE: "Nombre unique",
    valueStatisticsAVERAGE: "Moyenne",
    valueStatisticsMAX: "Max",
    valueStatisticsMIN: "Min",
    valueStatisticsMEDIAN: "Médiane",
    valueStatisticsPRODUCT: "Produit",
    valueStatisticsSTDEV: "Écart type",
    valueStatisticsSTDEVP: "Écart type (population)",
    valueStatisticslet: "Variance",
    valueStatisticsVARP: "Variance (population)",
    errorNotAllowEdit: "Cette opération est interdite en mode non-édition !",
    errorNotAllowMulti: "Impossible d'effectuer cette opération sur plusieurs zones sélectionnées, veuillez sélectionner une seule plage et réessayer",
    errorSelectRange: "Veuillez sélectionner la plage du nouveau tableau croisé dynamique",
    errorIsDamage: "Les données sources de ce tableau croisé dynamique sont corrompues !",
    errorNotAllowPivotData: "Impossible de sélectionner un tableau croisé dynamique comme source de données !",
    errorSelectionRange: "Échec de la sélection, plage saisie incorrecte !",
    errorIncreaseRange: "Veuillez étendre la plage sélectionnée !",
    titleAddColumn: "Ajouter une colonne au tableau croisé dynamique",
    titleMoveColumn: "Déplacer la colonne vers la boîte blanche ci-dessous",
    titleClearColumnFilter: "Effacer le filtre de cette colonne",
    titleFilterColumn: "Filtrer",
    titleSort: "Trier",
    titleNoSort: "Pas de tri",
    titleSortAsc: "Croissant",
    titleSortDesc: "Décroissant",
    titleSortBy: "Trier par",
    titleShowSum: "Afficher le total",
    titleStasticTrue: "Oui",
    titleStasticFalse: "Non"
  },
  dropCell: {
    copyCell: "Copier",
    sequence: "Séquence",
    onlyFormat: "Seulement le format",
    noFormat: "Sans format",
    day: "Jour",
    workDay: "Jour ouvré",
    month: "Mois",
    year: "Année",
    chineseNumber: "Nombres chinois"
  },
  imageCtrl: {
    borderTile: "Couleur de la bordure de l'image",
    borderCur: "Couleur"
  },
  protection: {
    protectiontTitle: "Protection",
    enterPassword: "Entrer un mot de passe (optionnel)",
    enterHintTitle: "Message lorsque la modification est interdite (optionnel)",
    enterHint: "La cellule ou le graphique que vous essayez de modifier se trouve dans une feuille protégée. Pour la modifier, veuillez déprotéger la feuille. Vous devrez peut-être entrer un mot de passe",
    swichProtectionTip: "Protéger la feuille et le contenu des cellules verrouillées",
    authorityTitle: "Autoriser les utilisateurs de cette feuille à :",
    selectLockedCells: "Sélectionner les cellules verrouillées",
    selectunLockedCells: "Sélectionner les cellules déverrouillées",
    formatCells: "Formater les cellules",
    formatColumns: "Formater les colonnes",
    formatRows: "Formater les lignes",
    insertColumns: "Insérer des colonnes",
    insertRows: "Insérer des lignes",
    insertHyperlinks: "Insérer des hyperliens",
    deleteColumns: "Supprimer des colonnes",
    deleteRows: "Supprimer des lignes",
    sort: "Trier",
    filter: "Filtrer",
    usePivotTablereports: "Utiliser les tableaux croisés dynamiques",
    editObjects: "Modifier les objets",
    editScenarios: "Modifier les scénarios",
    allowRangeTitle: "Autoriser les utilisateurs de la plage à :",
    allowRangeAdd: "Nouveau...",
    allowRangeAddTitle: "Titre",
    allowRangeAddSqrf: "Référence",
    selectCellRange: "Cliquer pour sélectionner une plage de cellules",
    selectCellRangeHolder: "Plage de cellules",
    allowRangeAddTitlePassword: "Mot de passe",
    allowRangeAddTitleHint: "Message",
    allowRangeAddTitleHintTitle: "Message affiché lorsque le mot de passe est défini (optionnel)",
    allowRangeAddtitleDefault: "Nom de la plage saisie",
    rangeItemDblclick: "Double-cliquer pour modifier",
    rangeItemHasPassword: "Mot de passe défini",
    rangeItemErrorTitleNull: "Le titre est vide",
    rangeItemErrorRangeNull: "La référence est vide",
    rangeItemErrorRange: "Référence invalide",
    validationTitle: "Validation du mot de passe",
    validationTips: "Vous devez entrer un mot de passe pour déverrouiller la protection de la feuille",
    validationInputHint: "Entrer un mot de passe",
    checkPasswordNullalert: "Le mot de passe est requis !",
    checkPasswordWrongalert: "Mot de passe incorrect, veuillez réessayer !",
    checkPasswordSucceedalert: "Déverrouillage réussi !",
    defaultRangeHintText: "La cellule est protégée par un mot de passe.",
    defaultSheetHintText: "La cellule ou le graphique est dans une feuille protégée. Pour apporter des modifications, veuillez déprotéger la feuille. Vous devrez peut-être entrer un mot de passe"
  },
  cellFormat: {
    cellFormatTitle: "Format des cellules",
    protection: "Protection",
    locked: "Verrouillé",
    hidden: "Masqué",
    protectionTips: "Pour verrouiller les cellules ou masquer les formules, protégez la feuille. Dans la barre d'outils, cliquez sur le bouton Protéger la feuille",
    tipsPart: "Partiellement sélectionné",
    tipsAll: "Tout sélectionné",
    selectionIsNullAlert: "Une sélection est requise !",
    sheetDataIsNullAlert: "Erreur, aucune donnée disponible !"
  },
  print: {
    normalBtn: "Normal",
    layoutBtn: "Mise en page",
    pageBtn: "Aperçu des sauts de page",
    menuItemPrint: "Imprimer (Ctrl+P)",
    menuItemAreas: "Zones d'impression",
    menuItemRows: "Lignes de titre",
    menuItemColumns: "Colonnes de titre"
  },
  edit: {
    typing: "Saisie en cours"
  },
  websocket: {
    success: "Connexion WebSocket réussie",
    refresh: "Une erreur s'est produite dans la connexion WebSocket, veuillez actualiser la page !",
    wait: "Une erreur s'est produite dans la connexion WebSocket, veuillez patienter !",
    close: "Connexion WebSocket fermée",
    contact: "Une erreur de communication avec le serveur est survenue, veuillez actualiser la page et réessayer. Si le problème persiste, contactez l'administrateur !",
    support: "Le navigateur actuel ne prend pas en charge WebSocket"
  },
  custom: {
    lockCells: "Verrouiller les cellules",
    unlockCells: "Déverrouiller les cellules",
    toggleSheetProtection: "Protéger / Déprotéger le classeur",
    toggleGridLines: "Afficher / masquer le quadrillage",
    customNumberFormat: {
      menuItem: "Format numérique personnalisé…",
      title: "Formats de nombre personnalisés",
      formatLabel: "Code de format",
      inputPlaceholder: "Par exemple : #,##0.00",
      apply: "Appliquer",
      cancel: "Annuler",
      close: "Fermer",
      preview: "Aperçu",
      presets: "Formats suggérés",
      standardFormats: "Nombres",
      currencyFormats: "Devise",
      unitFormats: "Unités",
      selection: "Sélection",
      help: "Guide des formats",
      helpTitle: "Comprendre les codes de format",
      helpZero: "0 affiche toujours un chiffre, y compris un zéro avant ou après la virgule.",
      helpHash: "# affiche un chiffre uniquement lorsqu’il est significatif.",
      helpDecimal: "{separator} indique la position décimale dans le code de format.",
      helpGrouping: "{separator} ajoute le groupement des chiffres.",
      groupingSpace: "Une espace ajoute le groupement des chiffres.",
      helpSections: "; sépare les sections positif, négatif, zéro et texte.",
      normalizedHint: "Le format sera enregistré sous la forme {format}.",
      errors: {
        required: "Saisissez un code de format.",
        tooLong: "Le code de format est trop long.",
        tooManySections: "Un format peut contenir au maximum quatre sections.",
        missingPlaceholder: "Ajoutez au moins un emplacement numérique : 0, # ou ?.",
        invalid: "Ce code de format n’est pas valide."
      }
    },
    standaloneMenu: {
      menuBarLabel: "Menus DocCells",
      file: "Fichier",
      edit: "Édition",
      view: "Affichage",
      insert: "Insertion",
      data: "Données",
      tools: "Outils",
      open: "Ouvrir",
      export: "Exporter",
      show: "Afficher",
      gridlines: "Quadrillage"
    },
    conditionalFormatting: {
      toolbar: "Formatage conditionnel",
      title: "Formatage conditionnel",
      activeSheet: "Feuille active",
      appliedRules: "Règles appliquées",
      noRules: "Aucune règle pour cette feuille.",
      editRule: "Modifier la règle",
      newRule: "Nouvelle règle",
      applyTo: "Appliquer à",
      condition: "Condition",
      compareTo: "Comparer à",
      minValue: "Valeur min",
      maxValue: "Valeur max",
      cell: "Cellule",
      sameRowColumn: "Colonne même ligne",
      text: "Texte",
      value: "Valeur",
      textColor: "Texte",
      backgroundColor: "Fond",
      style: "Style",
      preview: "Aperçu de cellule",
      close: "Fermer",
      reset: "Nouvelle",
      save: "Enregistrer",
      add: "Ajouter",
      edit: "Modifier",
      delete: "Supprimer",
      none: "Aucun",
      sample: "Aa",
      textPlaceholder: "retard",
      conditions: {
        lessThan: "est inférieure à",
        greaterThan: "est supérieure à",
        equal: "est égale à",
        notEqual: "est différente de",
        between: "est comprise entre",
        textContains: "contient le texte"
      },
      compareTypes: {
        value: "une valeur fixe",
        cell: "une cellule fixe",
        sameRowColumn: "une colonne même ligne"
      },
      descriptions: {
        cell: "cellule",
        between: "cellule entre {value1} et {value2}",
        textContains: "texte contient \"{value}\"",
        sameRowColumn: "colonne {reference} même ligne",
        fixedCell: "cellule {reference}",
        comparison: "cellule {operator} {target}"
      },
      errors: {
        range: "La plage doit ressembler à A2:A100.",
        between: "Indique deux valeurs pour la condition entre.",
        text: "Indique le texte à rechercher.",
        compareCell: "La cellule de comparaison doit ressembler à B1.",
        compareColumn: "La colonne de comparaison doit ressembler à B.",
        compareValue: "Indique une valeur de comparaison.",
        style: "Choisis au moins une couleur ou un style."
      },
      styleLabels: {
        bold: "Gras",
        italic: "Italique",
        underline: "Souligné"
      }
    },
    charts: {
      toolbar: "Insérer un graphique",
      title: "Graphiques",
      defaultTitle: "Graphique",
      activeSheet: "Feuille active",
      existingCharts: "Graphiques de la feuille",
      noCharts: "Aucun graphique pour cette feuille.",
      newChart: "Nouveau graphique",
      editChart: "Modifier le graphique",
      chartTitle: "Titre",
      type: "Type",
      range: "Données",
      labels: "Étiquettes",
      labelReference: "Référence",
      labelColumnReference: "Lettre de la colonne",
      labelRowReference: "Numéro de la ligne",
      values: "Afficher les valeurs",
      legend: "Afficher la légende",
      color: "Couleur",
      xAxis: "Afficher les abscisses",
      yAxis: "Afficher les ordonnées",
      gridlines: "Afficher la grille",
      displayOptions: "Affichage",
      preview: "Aperçu",
      close: "Fermer",
      reset: "Nouveau",
      add: "Ajouter",
      save: "Enregistrer",
      edit: "Modifier",
      delete: "Supprimer",
      types: {
        bar: "Barres",
        line: "Courbe",
        scatter: "Nuage de points",
        pie: "Secteurs"
      },
      labelTypes: {
        none: "Sans",
        sameRowColumn: "Colonne d'une même ligne",
        sameColumnRow: "Ligne d'une même colonne",
        range: "Plage personnalisée"
      },
      errors: {
        range: "La plage doit ressembler à A1:B5.",
        dataColumn: "La plage de données doit être une seule ligne ou une seule colonne de valeurs.",
        labelColumn: "La colonne d'étiquettes doit ressembler à B.",
        labelRow: "La ligne d'étiquettes doit ressembler à 2.",
        labelRange: "La plage d'étiquettes doit ressembler à B3:B24.",
        labelRangeSize: "La plage d'étiquettes doit avoir le même nombre de valeurs que les données.",
        title: "Ajoute un titre court au graphique."
      }
    }
  }
};
