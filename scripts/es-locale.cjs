module.exports = {  "insertLink": {
    "linkText": "Texto para mostrar",
    "linkType": "Tipo de enlace",
    "linkAddress": "Dirección del enlace",
    "linkSheet": "Hoja de cálculo",
    "linkCell": "Rango de celdas",
    "linkTooltip": "Información sobre herramientas",
    "selectCellRange": "Seleccionar rango de celdas",
    "cellRangePlaceholder": "Seleccione celdas con el cursor o escríbalas directamente",
    "placeholder1": "Introduzca la dirección del enlace web",
    "placeholder2": "Introduzca la celda a la que hacer referencia, por ejemplo A1",
    "placeholder3": "Introduzca el texto de la información sobre herramientas",
    "tooltipInfo1": "Introduzca un enlace válido",
    "invalidCellRangeTip": "Introduzca un rango de celdas correcto, por ejemplo Hoja1!A1:C8",
    "openLink": "Abrir enlace",
    "goTo": "Ir a ${linkAddress}"
  },
  "linkTypeList": [
    {
      "text": "Páginas web",
      "value": "webpage"
    },
    {
      "text": "Rango de celdas",
      "value": "cellrange"
    },
    {
      "text": "Hoja",
      "value": "sheet"
    }
  ],

  generalDialog: {
    partiallyError: "No se puede realizar esta operación en celdas parcialmente unidas",
    readOnlyError: "No se puede realizar esto en modo de solo lectura",
    dataNullError: "No se puede hacer esto con datos que no existen",
    noSeletionError: "The selection operation has not been performed yetLa operación de selección aún no se ha realizado",
    cannotSelectMultiple: "No se puede seleccionar la zona de selección múltiple"
  },
  functionlist: [
    {
      n: "SUMIF",
      t: 0,
      d: "Devuelve una suma condicional en un rango.",
      a: "Una suma condicional en un rango.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "rango",
          detail: "El rango que se comprueba con respecto a `criterio`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterio",
          detail: "El patrón o prueba que se aplica a `rango`.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rango_suma",
          detail: "El rango que se sumará, si es distinto de `rango`.",
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
      d: "Devuelve la tangente de un ángulo proporcionado en radianes.",
      a: "Tangente de un ángulo en radianes.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ángulo",
          detail: "El ángulo cuya tangente se desea calcular, en radianes.",
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
      d: "Devuelve la tangente hiperbólica de cualquier número real.",
      a: "Tangente hiperbólica de cualquier número real.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "Cualquier valor real cuya tangente hiperbólica se desea calcular.",
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
      d: "Redondea un número hacia arriba al múltiplo entero más cercano del `factor` de significación especificado.",
      a: "Redondea un número hacia arriba al múltiplo más cercano de un factor.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se redondeará hacia arriba al múltiplo entero más cercano de `factor`.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "El número a cuyos múltiplos se redondeará `valor`.",
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
      d: "Devuelve el arcotangente de un valor, en radianes.",
      a: "Arcotangente de un valor, en radianes.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor para el que se calculará el arcotangente.",
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
      d: "Devuelve el seno hiperbólico inverso de un número.",
      a: "Seno hiperbólico inverso de un número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor para el que se calculará el seno hiperbólico inverso.",
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
      d: "Devuelve el valor absoluto de un número.",
      a: "Valor absoluto de un número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El número cuyo valor absoluto se devolverá.",
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
      d: "Devuelve el arcocoseno de un valor, en radianes.",
      a: "Arcocoseno de un valor, en radianes.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor para el que se calculará el arcocoseno. Debe estar entre `-1` y `1`, ambos inclusive.",
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
      d: "Devuelve el coseno hiperbólico inverso de un número.",
      a: "Coseno hiperbólico inverso de un número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor para el que se calculará el coseno hiperbólico inverso. Debe ser mayor o igual que `1`.",
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
      d: "Devuelve el factorial de la suma de los valores dividido entre el producto de los factoriales de dichos valores.",
      a: "Función de distribución multinomial.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango que se tendrá en cuenta.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se tendrán en cuenta.",
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
      d: "Devuelve la tangente hiperbólica inversa de un número.",
      a: "Tangente hiperbólica inversa de un número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor para el que se calculará la tangente hiperbólica inversa. Debe estar entre -1 y 1, sin incluirlos.",
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
      d: "Devuelve el ángulo entre el eje X y un segmento de recta desde el origen (0,0) hasta el par de coordenadas especificado (`x`,`y`), en radianes.",
      a: "Arcotangente de un valor.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "La coordenada X del extremo del segmento de recta para el que se calculará el ángulo respecto al eje X.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "y",
          detail: "La coordenada Y del extremo del segmento de recta para el que se calculará el ángulo respecto al eje X.",
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
      d: "Devuelve el número de valores vacíos en una lista de valores y rangos.",
      a: "Número de valores vacíos.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango en el que se contará el número de celdas en blanco.",
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
      d: "Devuelve el coseno hiperbólico de cualquier número real.",
      a: "Coseno hiperbólico de cualquier número real.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "Cualquier valor real cuyo coseno hiperbólico se desea calcular.",
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
      d: "Redondea un número hacia abajo al entero más cercano que sea menor o igual que él.",
      a: "Redondea un número hacia abajo al entero más cercano.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se redondeará hacia abajo al entero más cercano.",
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
      d: "Comprueba si el valor proporcionado es par.",
      a: "Indica si el valor proporcionado es par.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se comprobará como par.",
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
      d: "Comprueba si el valor proporcionado es impar.",
      a: "Indica si el valor proporcionado es impar.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se comprobará como impar.",
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
      d: "Devuelve el mínimo común múltiplo de uno o varios números enteros.",
      a: "Mínimo común múltiplo de uno o varios números enteros.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango cuyos factores se tendrán en cuenta para calcular el mínimo común múltiplo.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales cuyos factores se tendrán en cuenta para calcular el mínimo común múltiplo.",
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
      d: "Devuelve el logaritmo de un número en base e (el número de Euler).",
      a: "Logaritmo de un número en base e (el número de Euler).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor para el que se calculará el logaritmo en base e.",
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
      d: "Devuelve el logaritmo de un número respecto a una base.",
      a: "Logaritmo de un número respecto a una base.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "El valor para el que se calculará el logaritmo.",
          example: "128",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "base",
          detail: "La base que se usará para calcular el logaritmo.",
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
      d: "Devuelve el logaritmo de un número en base 10.",
      a: "Logaritmo de un número en base 10.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor para el que se calculará el logaritmo en base 10.",
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
      d: "Devuelve el resultado del operador módulo, el resto tras una operación de división.",
      a: "Operador módulo (resto).",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividendo",
          detail: "El número que se dividirá para hallar el resto.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "El número por el que se dividirá.",
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
      d: "Redondea un número al múltiplo entero más cercano de otro.",
      a: "Redondea un número al múltiplo entero más cercano.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "El número que se redondeará al múltiplo entero más cercano de otro.",
          example: "21",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "El número a cuyos múltiplos se redondeará `valor`.",
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
      d: "Redondea un número hacia arriba al entero impar más cercano.",
      a: "Redondea un número hacia arriba al entero impar más cercano.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se redondeará al siguiente número impar mayor.",
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
      d: "Devuelve la suma de los cuadrados de una serie de números o celdas.",
      a: "Suma de cuadrados.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer número o rango cuyos cuadrados se sumarán.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Números o rangos adicionales cuyos cuadrados se sumarán al de `valor1`.",
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
      d: "Devuelve el número de formas de elegir cierto número de objetos de un conjunto de un tamaño dado.",
      a: "Número de combinaciones de un conjunto de objetos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "El tamaño del conjunto de objetos del que se elegirá.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "El número de objetos que se elegirán.",
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
      d: "Devuelve la suma de una serie de números o celdas.",
      a: "Suma de una serie de números o celdas.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer número o rango que se sumará.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Números o rangos adicionales que se sumarán a `valor1`.",
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
      d: "Devuelve un subtotal para un rango vertical de celdas mediante una función de agregación especificada.",
      a: "Subtotal de un rango usando una función específica.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "código_función",
          detail: "La función que se usará en la agregación del subtotal.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rango1",
          detail: "El primer rango para el que se calculará un subtotal.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "rango2",
          detail: "Rangos adicionales para los que se calcularán subtotales.",
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
      d: "Devuelve el arcoseno de un valor, en radianes.",
      a: "Arcoseno de un valor, en radianes.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor para el que se calculará el arcoseno. Debe estar entre `-1` y `1`, ambos inclusive.",
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
      d: "Devuelve un recuento condicional en un rango.",
      a: "Un recuento condicional en un rango.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "rango",
          detail: "El rango que se comprueba con respecto a `criterio`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterio",
          detail: "El patrón o prueba que se aplica a `rango`.",
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
      d: "Convierte un valor de ángulo en grados a radianes.",
      a: "Convierte un valor de ángulo en grados a radianes.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ángulo",
          detail: "El ángulo que se convertirá de grados a radianes.",
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
      d: "Devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusive).",
      a: "Un número aleatorio entre 0 inclusive y 1 exclusive.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "COUNTUNIQUE",
      t: 0,
      d: "Cuenta el número de valores únicos en una lista de valores y rangos especificados.",
      a: "Cuenta el número de valores únicos en un rango.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango que se tendrá en cuenta para la unicidad.",
          example: "A1:C100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se tendrán en cuenta para la unicidad.",
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
      d: "Convierte un valor de ángulo en radianes a grados.",
      a: "Convierte un valor de ángulo en radianes a grados.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ángulo",
          detail: "El ángulo que se convertirá de radianes a grados.",
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
      d: "Devuelve la función de error de Gauss complementaria de un valor.",
      a: "Función de error de Gauss complementaria de un valor.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "z",
          detail: "El número para el que se calculará la función de error de Gauss complementaria.",
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
      d: "Redondea un número hacia arriba al entero par más cercano.",
      a: "Redondea un número hacia arriba al entero par más cercano.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se redondeará al siguiente número par mayor.",
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
      d: "Devuelve el número de Euler, e (~2,718), elevado a una potencia.",
      a: "El número de Euler, e (~2,718), elevado a una potencia.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "exponente",
          detail: "El exponente al que se elevará e.",
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
      d: "Devuelve el factorial de un número.",
      a: "Factorial de un número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El número, o referencia a un número, cuyo factorial se calculará y devolverá.",
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
      d: "Devuelve el \"factorial doble\" de un número.",
      a: "\"Factorial doble\" de un número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El número, o referencia a un número, cuyo factorial doble se calculará y devolverá.",
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
      d: "Devuelve el valor de Pi con 14 decimales.",
      a: "El número pi.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FLOOR",
      t: 0,
      d: "Redondea un número hacia abajo al múltiplo entero más cercano del `factor` de significación especificado.",
      a: "Redondea un número hacia abajo al múltiplo más cercano de un factor.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se redondeará hacia abajo al múltiplo entero más cercano de `factor`.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "El número a cuyos múltiplos se redondeará `valor`.",
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
      d: "Devuelve el máximo común divisor de uno o varios números enteros.",
      a: "Máximo común divisor de uno o varios números enteros.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango cuyos factores se tendrán en cuenta para calcular el máximo común divisor.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales cuyos factores se tendrán en cuenta para calcular el máximo común divisor.",
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
      d: "Devuelve un entero aleatorio uniforme entre dos valores, ambos inclusive.",
      a: "Entero aleatorio entre dos valores, ambos inclusive.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "límite_inferior",
          detail: "El extremo inferior del rango aleatorio.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "límite_superior",
          detail: "El extremo superior del rango aleatorio.",
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
      d: "Redondea un número a un número determinado de decimales según las reglas estándar.",
      a: "Redondea un número según las reglas estándar.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se redondeará a `posiciones` decimales.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimales",
          detail: "El número de decimales al que se redondeará.",
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
      d: "Redondea un número a un número determinado de decimales, redondeando siempre hacia abajo al siguiente incremento válido.",
      a: "Redondea un número hacia abajo.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se redondeará a `posiciones` decimales, siempre hacia abajo.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimales",
          detail: "El número de decimales al que se redondeará.",
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
      d: "Redondea un número a un número determinado de decimales, redondeando siempre hacia arriba al siguiente incremento válido.",
      a: "Redondea un número hacia arriba.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se redondeará a `posiciones` decimales, siempre hacia arriba.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimales",
          detail: "El número de decimales al que se redondeará.",
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
      d: "Dados los parámetros `x`, `n`, `m` y `a`, devuelve la suma de la serie de potencias a1*x^n + a2*x^(n+m) + a3*x^(n+2m) + ... + ai*x^(n+(i-1)m).",
      a: "Suma de una serie de potencias.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la serie de potencias. Varía según el tipo de aproximación; puede ser un ángulo, un exponente u otro valor.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "La potencia inicial a la que se elevará `x` en la serie de potencias.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "m",
          detail: "El incremento aditivo con el que aumentará `x`.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a",
          detail: "La matriz o rango que contiene los coeficientes de la serie de potencias.",
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
      d: "Dado un número, devuelve `-1` si es negativo, `1` si es positivo y `0` si es cero.",
      a: "Signo de un número (+/-/0).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor cuyo signo se evaluará.",
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
      d: "Devuelve el seno de un ángulo proporcionado en radianes.",
      a: "Seno de un ángulo en radianes.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ángulo",
          detail: "El ángulo cuyo seno se desea calcular, en radianes.",
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
      d: "Devuelve el seno hiperbólico de cualquier número real.",
      a: "Seno hiperbólico de cualquier número real.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "Cualquier valor real cuyo seno hiperbólico se desea calcular.",
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
      d: "Devuelve la raíz cuadrada positiva de un número positivo.",
      a: "Raíz cuadrada positiva de un número positivo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El número para el que se calculará la raíz cuadrada positiva.",
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
      d: "Devuelve la raíz cuadrada positiva del producto de Pi por el número positivo dado.",
      a: "Raíz cuadrada del producto de pi por un número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El número que se multiplicará por Pi, devolviendo la raíz cuadrada del producto.",
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
      d: "Devuelve el logaritmo, en base e (el número de Euler), de una función Gamma especificada.",
      a: "Logaritmo de la función gamma.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "La entrada de la función Gamma. Se devolverá el logaritmo natural de Gamma(`valor`).",
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
      d: "Devuelve el coseno de un ángulo proporcionado en radianes.",
      a: "Coseno de un ángulo en radianes.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ángulo",
          detail: "El ángulo cuyo coseno se desea calcular, en radianes.",
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
      d: "Trunca un número a un número determinado de cifras significativas, omitiendo las cifras menos significativas.",
      a: "Trunca un número.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se truncará.",
          example: "3.141592654",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "decimales",
          detail: "El número de cifras significativas a la derecha del punto decimal que se conservarán.",
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
      d: "Devuelve un número dividido entre otro.",
      a: "Un número dividido entre otro.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividendo",
          detail: "El número que se dividirá.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "El número por el que se dividirá.",
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
      d: "Devuelve un número elevado a una potencia.",
      a: "Un número elevado a una potencia.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "base",
          detail: "El número que se elevará a la potencia `exponente`.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "exponente",
          detail: "El exponente al que se elevará `base`.",
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
      d: "Devuelve la suma de un rango en función de varios criterios.",
      a: "Suma un rango en función de varios criterios.",
      m: [
        3,
        257
      ],
      p: [
        {
          name: "rango_suma",
          detail: "El rango que se sumará.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "rango_criterios1",
          detail: "El rango que se comprobará con respecto a criterio1.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterio1",
          detail: "El patrón o prueba que se aplica a rango_criterios1.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rango_criterios2",
          detail: "Rangos adicionales que se comprobarán.",
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
      d: "Devuelve el recuento de un rango en función de varios criterios.",
      a: "Cuenta valores en función de varios criterios.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "rango_criterios1",
          detail: "El rango que se comprobará con respecto a `criterio1`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "criterio1",
          detail: "El patrón o prueba que se aplica a `rango_criterios1`.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rango_criterios2",
          detail: "Rangos adicionales que se comprobarán.",
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
      d: "Devuelve el resultado de multiplicar entre sí una serie de números.",
      a: "Resultado de multiplicar entre sí una serie de números.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "factor1",
          detail: "El primer número o rango que se usará para calcular el producto.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor2",
          detail: "Más números o rangos que se usarán para calcular el producto.",
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
      d: "Calcula la media armónica de un conjunto de datos.",
      a: "La media armónica de un conjunto de datos.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango de la población.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se incluirán en la población.",
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
      d: "Calcula la probabilidad de obtener un determinado número de éxitos en un determinado número de intentos, dada una población de un tamaño determinado que contiene un determinado número de éxitos, sin reposición de las extracciones.",
      a: "Probabilidad de la distribución hipergeométrica.",
      m: [
        5,
        5
      ],
      p: [
        {
          name: "número_éxitos",
          detail: "El número deseado de éxitos.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_extracciones",
          detail: "El número de extracciones permitidas.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "éxitos_en_población",
          detail: "El número total de éxitos en la población.",
          example: "20",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tamaño_población",
          detail: "El tamaño total de la población.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "acumulado",
          detail: "Determina la forma de la función. \n\nSi cumulative es TRUE(), HYPGEOM.DIST devuelve la función de distribución acumulada;\n\nsi es FALSE(), devuelve la función de densidad de probabilidad.",
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
      d: "Calcula el valor de y en el que la recta resultante de la regresión lineal de un conjunto de datos cruzará el eje y (x=0).",
      a: "Ordenada en el origen de una recta obtenida mediante regresión lineal.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos_y",
          detail: "El rango que representa la matriz o el vector de datos dependientes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos_x",
          detail: "El rango que representa la matriz o el vector de datos independientes.",
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
      d: "Calcula la curtosis de un conjunto de datos, que describe la forma, y en particular el \"apuntamiento\", de dicho conjunto.",
      a: "Curtosis de un conjunto de datos.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango del conjunto de datos.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se incluirán en el conjunto de datos.",
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
      d: "Devuelve el enésimo elemento más grande de un conjunto de datos, donde n lo define el usuario.",
      a: "Enésimo elemento más grande de un conjunto de datos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos",
          detail: "Matriz o rango que contiene el conjunto de datos que se tendrá en cuenta.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "La posición, de mayor a menor, del elemento que se devolverá.",
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
      d: "Calcula la desviación estándar a partir de una muestra, asignando al texto el valor `0`.",
      a: "Desviación estándar de una muestra (texto como 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango de la muestra.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se incluirán en la muestra.",
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
      d: "Calcula la desviación estándar a partir de una población completa.",
      a: "Desviación estándar de una población completa.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango de la población.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se incluirán en la población.",
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
      d: "Calcula la media geométrica de un conjunto de datos.",
      a: "La media geométrica de un conjunto de datos.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango de la población.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se incluirán en la población.",
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
      d: "Devuelve la posición de un valor especificado en un conjunto de datos. Si hay más de una entrada con el mismo valor, se devolverá la posición más alta entre esas entradas.",
      a: "Posición más alta de un valor especificado en un conjunto de datos.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "valor",
          detail: "El valor cuya posición se determinará.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos",
          detail: "La matriz o el rango que contiene el conjunto de datos que se tendrá en cuenta.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "es_ascendente",
          detail: "Si se deben considerar los valores de `datos` en orden descendente o ascendente. Si se omite, el valor predeterminado es descendente (FALSE).",
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
      d: "Devuelve la posición de un valor especificado en un conjunto de datos. Si hay más de una entrada con el mismo valor, se devolverá la posición promedio entre esas entradas.",
      a: "Posición promedio de un valor especificado en un conjunto de datos.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "valor",
          detail: "El valor cuya posición se determinará.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos",
          detail: "La matriz o el rango que contiene el conjunto de datos que se tendrá en cuenta.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "es_ascendente",
          detail: "Si se deben considerar los valores de `datos` en orden descendente o ascendente. Si se omite, el valor predeterminado es descendente (FALSE).",
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
      d: "Devuelve la posición porcentual (percentil), de 0 a 1 exclusive, de un valor especificado en un conjunto de datos.",
      a: "Posición porcentual (percentil) de 0 a 1 exclusive.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "datos",
          detail: "La matriz o el rango que contiene el conjunto de datos que se tendrá en cuenta.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor",
          detail: "El valor cuya posición porcentual se determinará.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cifras_significativas",
          detail: "El número de cifras significativas que se usarán en el cálculo. El valor predeterminado es 3.",
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
      d: "Devuelve la posición porcentual (percentil), de 0 a 1 inclusive, de un valor especificado en un conjunto de datos.",
      a: "Posición porcentual (percentil) de 0 a 1 inclusive.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "datos",
          detail: "La matriz o el rango que contiene el conjunto de datos que se tendrá en cuenta.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor",
          detail: "El valor cuya posición porcentual se determinará.",
          example: " A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cifras_significativas",
          detail: "El número de cifras significativas que se usarán en el cálculo. El valor predeterminado es 3.",
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
      d: "Calcula el valor y esperado para un valor x especificado, basándose en la regresión lineal de un conjunto de datos.",
      a: "Valor y esperado basado en una regresión lineal.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "El valor del eje x que se pronosticará.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos_y",
          detail: "El rango que representa la matriz o el vector de datos dependientes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos_x",
          detail: "El rango que representa la matriz o el vector de datos independientes.",
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
      d: "Devuelve la transformación de Fisher inversa de un valor especificado.",
      a: "Transformación de Fisher inversa de un valor especificado.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor para el que se calculará la transformación de Fisher inversa.",
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
      d: "Devuelve la transformación de Fisher de un valor especificado.",
      a: "Transformación de Fisher de un valor especificado.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor para el que se calculará la transformación de Fisher.",
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
      d: "Devuelve el valor que aparece con más frecuencia en un conjunto de datos.",
      a: "Valor más frecuente en un conjunto de datos.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango que se tendrá en cuenta al calcular la moda.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se tendrán en cuenta al calcular la moda.",
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
      d: "Devuelve el valor de la función de distribución de Weibull (o de la función de distribución acumulada de Weibull) para una forma y una escala especificadas.",
      a: "Función de distribución de Weibull.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la función de distribución de Weibull.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "forma",
          detail: "El parámetro de forma de la función de distribución de Weibull.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "escala",
          detail: "El parámetro de escala de la función de distribución de Weibull.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "acumulado",
          detail: "Si se debe usar la función de distribución acumulada.",
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
      d: "Devuelve el número de valores numéricos en un conjunto de datos.",
      a: "El número de valores numéricos en un conjunto de datos.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango que se tendrá en cuenta al contar.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se tendrán en cuenta al contar.",
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
      d: "Devuelve el número de valores en un conjunto de datos.",
      a: "El número de valores en un conjunto de datos.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango que se tendrá en cuenta al contar.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se tendrán en cuenta al contar.",
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
      d: "Calcula el promedio de las magnitudes de las desviaciones de los datos respecto a la media de un conjunto de datos.",
      a: "Magnitud promedio de las desviaciones respecto a la media.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango de la muestra.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se incluirán en la muestra.",
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
      d: "Devuelve el promedio numérico de un conjunto de datos, ignorando el texto.",
      a: "Promedio numérico de un conjunto de datos, ignorando el texto.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango que se tendrá en cuenta al calcular el promedio.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se tendrán en cuenta al calcular el promedio.",
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
      d: "Devuelve el promedio numérico de un conjunto de datos.",
      a: "Promedio numérico de un conjunto de datos.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango que se tendrá en cuenta al calcular el promedio.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se tendrán en cuenta al calcular el promedio.",
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
      d: "Calcula la probabilidad de obtener un determinado número de éxitos (o un número máximo de éxitos) en un determinado número de intentos, dada una población de un tamaño determinado que contiene un determinado número de éxitos, con reposición de las extracciones.",
      a: "Probabilidad de la distribución binomial.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "número_éxitos",
          detail: "El número de éxitos para el que se calculará la probabilidad en `número_de_pruebas` pruebas.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_pruebas",
          detail: "El número de pruebas independientes.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilidad_éxito",
          detail: "La probabilidad de éxito en una prueba cualquiera.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "acumulado",
          detail: "Si se debe usar la distribución binomial acumulada.",
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
      d: "Calcula el valor más pequeño para el cual la distribución binomial acumulada es mayor o igual que un criterio especificado.",
      a: "Función de distribución binomial acumulada inversa.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "número_pruebas",
          detail: "El número de pruebas independientes.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilidad_éxito",
          detail: "La probabilidad de éxito en una prueba cualquiera.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilidad_objetivo",
          detail: "El umbral de probabilidad deseado.",
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
      d: "Calcula el ancho de la mitad del intervalo de confianza para una distribución normal.",
      a: "Intervalo de confianza para una distribución normal.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "alfa",
          detail: "Uno menos el nivel de confianza deseado. Por ejemplo, `0,1` para una confianza del `0,9`, o del 90 %.",
          example: "0.05",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desviación_estándar",
          detail: "La desviación estándar de la población.",
          example: "1.6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tamaño_población",
          detail: "El tamaño de la población.",
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
      d: "Calcula r, el coeficiente de correlación de Pearson (momento-producto) de un conjunto de datos.",
      a: "Coeficiente de correlación de Pearson.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos_y",
          detail: "El rango que representa la matriz o el vector de datos dependientes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos_x",
          detail: "El rango que representa la matriz o el vector de datos independientes.",
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
      d: "Calcula la covarianza de un conjunto de datos.",
      a: "La covarianza de un conjunto de datos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos_y",
          detail: "El rango que representa la matriz o el vector de datos dependientes.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos_x",
          detail: "El rango que representa la matriz o el vector de datos independientes.",
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
      d: "Calcula la covarianza muestral de un conjunto de datos.",
      a: "La covarianza muestral de un conjunto de datos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos_y",
          detail: "El rango que representa la matriz o el vector de datos dependientes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos_x",
          detail: "El rango que representa la matriz o el vector de datos independientes.",
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
      d: "Calcula la suma de los cuadrados de las desviaciones a partir de una muestra.",
      a: "La suma de los cuadrados de las desviaciones a partir de una muestra.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango de la muestra.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se incluirán en la muestra.",
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
      d: "Devuelve el valor de la función de distribución exponencial con un lambda especificado en un valor dado.",
      a: "Función de distribución exponencial.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la función de distribución exponencial.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lambda",
          detail: "El lambda que especifica la función de distribución exponencial.",
          example: "0.5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "acumulado",
          detail: "Si se debe usar la distribución acumulada exponencial.",
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
      d: "Devuelve el promedio de un rango en función de un criterio.",
      a: "Promedio de valores en función de un criterio.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "rango_criterios",
          detail: "El rango que se comprobará con respecto a `criterio`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterio",
          detail: "El patrón o prueba que se aplica a `rango_criterios`.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rango_promedio",
          detail: "El rango del que se calculará el promedio. Si no se incluye, se usará `rango_criterios` para el promedio.",
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
      d: "Devuelve el promedio de un rango en función de varios criterios.",
      a: "Promedio de valores en función de varios criterios.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "rango_promedio",
          detail: "El rango del que se calculará el promedio.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rango_criterios1",
          detail: "El rango que se comprobará con respecto a `criterio1`.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterio1",
          detail: "El patrón o prueba que se aplica a `rango_criterios1`.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rango_criterios2",
          detail: "Rangos adicionales que se comprobarán.",
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
      d: "Devuelve el número de formas de elegir cierto número de objetos de un conjunto de un tamaño dado, teniendo en cuenta el orden.",
      a: "Número de permutaciones a partir de un número de objetos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "El tamaño del conjunto de objetos del que se elegirá.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "El número de objetos que se elegirán.",
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
      d: "Calcula la media de un conjunto de datos excluyendo cierta proporción de datos de los extremos superior e inferior del conjunto.",
      a: "Media de un conjunto de datos excluyendo los extremos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos",
          detail: "Matriz o rango que contiene el conjunto de datos que se tendrá en cuenta.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "proporción_excluida",
          detail: "La proporción del conjunto de datos que se excluirá, a partir de los extremos del conjunto.",
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
      d: "Devuelve el valor correspondiente a un percentil determinado de un conjunto de datos, excluyendo 0 y 1.",
      a: "Valor correspondiente a un percentil de un conjunto de datos, excluyendo 0 y 1.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos",
          detail: "La matriz o el rango que contiene el conjunto de datos que se tendrá en cuenta.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "percentil",
          detail: "El percentil, excluyendo 0 y 1, cuyo valor dentro de \"datos\" se calculará y devolverá.",
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
      d: "Devuelve el valor correspondiente a un percentil determinado de un conjunto de datos.",
      a: "Valor correspondiente a un percentil de un conjunto de datos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos",
          detail: "La matriz o el rango que contiene el conjunto de datos que se tendrá en cuenta.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "percentil",
          detail: "El percentil cuyo valor dentro de `datos` se calculará y devolverá.",
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
      d: "Calcula r, el coeficiente de correlación de Pearson (momento-producto) de un conjunto de datos.",
      a: "Coeficiente de correlación de Pearson.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos_y",
          detail: "El rango que representa la matriz o el vector de datos dependientes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos_x",
          detail: "El rango que representa la matriz o el vector de datos independientes.",
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
      d: "Devuelve el valor de la función de distribución normal estándar inversa para un valor especificado.",
      a: "Función de distribución normal estándar inversa.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la función de distribución normal estándar inversa.",
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
      d: "Devuelve el valor de la función de distribución acumulada normal estándar para un valor especificado.",
      a: "Función de distribución acumulada normal estándar.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la función de distribución acumulada normal estándar.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "acumulado",
          detail: "Determina la forma de la función. \n\nSi es TRUE(), devuelve la función de distribución acumulada;\n\nsi es FALSE(), devuelve la función de densidad de probabilidad.",
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
      d: "Devuelve el valor de la función de distribución normal inversa para un valor, una media y una desviación estándar especificados.",
      a: "Función de distribución normal inversa.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la función de distribución normal inversa.",
          example: "0.75",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "media",
          detail: "La media (mu) de la función de distribución normal.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desviación_estándar",
          detail: "La desviación estándar (sigma) de la función de distribución normal.",
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
      d: "Devuelve el valor de la función de distribución normal (o de la función de distribución acumulada normal) para un valor, una media y una desviación estándar especificados.",
      a: "Función de distribución normal.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la función de distribución normal.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "media",
          detail: "La media (mu) de la función de distribución normal.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desviación_estándar",
          detail: "La desviación estándar (sigma) de la función de distribución normal.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "acumulado",
          detail: "Si se debe usar la función de distribución acumulada normal en lugar de la función de distribución.",
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
      d: "Calcula la probabilidad de obtener un determinado número de fracasos antes de un determinado número de éxitos, dada una probabilidad de éxito en pruebas independientes.",
      a: "Probabilidad de la distribución binomial negativa.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "número_fracasos",
          detail: "El número de fracasos que se modelará.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_éxitos",
          detail: "El número de éxitos que se modelará.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilidad_éxito",
          detail: "La probabilidad de éxito en una prueba cualquiera.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "acumulado",
          detail: "Determina la forma de la función. \n\nSi es TRUE(), devuelve la función de distribución acumulada;\n\nsi es FALSE(), devuelve la función de densidad de probabilidad.",
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
      d: "Devuelve el valor numérico mínimo de un conjunto de datos.",
      a: "Valor numérico mínimo de un conjunto de datos.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango que se tendrá en cuenta al calcular el valor mínimo.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se tendrán en cuenta al calcular el valor mínimo.",
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
      d: "Devuelve el valor mínimo de un conjunto de datos numérico.",
      a: "Valor mínimo de un conjunto de datos numérico.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango que se tendrá en cuenta al calcular el valor mínimo.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se tendrán en cuenta al calcular el valor mínimo.",
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
      d: "Devuelve el valor mediano de un conjunto de datos numérico.",
      a: "Valor mediano de un conjunto de datos numérico.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango que se tendrá en cuenta al calcular la mediana.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se tendrán en cuenta al calcular la mediana.",
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
      d: "Devuelve el valor numérico máximo de un conjunto de datos.",
      a: "Valor numérico máximo de un conjunto de datos.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango que se tendrá en cuenta al calcular el valor máximo.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se tendrán en cuenta al calcular el valor máximo.",
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
      d: "Devuelve el valor máximo de un conjunto de datos numérico.",
      a: "Valor máximo de un conjunto de datos numérico.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango que se tendrá en cuenta al calcular el valor máximo.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se tendrán en cuenta al calcular el valor máximo.",
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
      d: "Devuelve el valor de la distribución acumulada log-normal inversa con la media y la desviación estándar dadas, para un valor especificado.",
      a: "Función de distribución acumulada log-normal inversa.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la función de distribución acumulada log-normal inversa.",
          example: "0.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "media",
          detail: "La media (mu) de la función de distribución acumulada log-normal inversa.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desviación_estándar",
          detail: "La desviación estándar (sigma) de la función de distribución acumulada log-normal inversa.",
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
      d: "Devuelve el valor de la distribución acumulada log-normal con la media y la desviación estándar dadas, para un valor especificado.",
      a: "Probabilidad de la distribución acumulada log-normal.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la función de distribución acumulada log-normal.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "media",
          detail: "La media (mu) de la función de distribución acumulada log-normal.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desviación_estándar",
          detail: "La desviación estándar (sigma) de la función de distribución acumulada log-normal.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "acumulado",
          detail: "Determina la forma de la función. \n\nSi es TRUE(), devuelve la función de distribución acumulada;\n\nsi es FALSE(), devuelve la función de densidad de probabilidad.",
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
      d: "Devuelve el valor p de una cola de una prueba Z con distribución estándar.",
      a: "Valor p de una cola de una prueba Z.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "datos",
          detail: "La matriz o el rango que contiene el conjunto de datos que se tendrá en cuenta.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "valor",
          detail: "El estadístico de prueba que se usará en la prueba Z.",
          example: "B2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desviación_estándar",
          detail: "La desviación estándar que se asumirá para la prueba Z. Si no se proporciona, se usará la desviación estándar de los datos.",
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
      d: "Dado un conjunto de valores y sus probabilidades correspondientes, calcula la probabilidad de que un valor elegido al azar se encuentre entre dos límites.",
      a: "Probabilidad de que los valores estén en un rango.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "datos",
          detail: "Matriz o rango que contiene el conjunto de datos que se tendrá en cuenta.",
          example: "A3:A6",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "probabilidades",
          detail: "Matriz o rango que contiene las probabilidades correspondientes a `datos`.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "límite_inferior",
          detail: "El límite inferior del rango de valores para el que se calculará la probabilidad.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "límite_superior",
          detail: "El límite superior del rango de valores para el que se calculará la probabilidad.",
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
      d: "Devuelve el valor más cercano a un cuartil especificado de un conjunto de datos, excluyendo 0 y 4.",
      a: "Valor más cercano a un cuartil de un conjunto de datos, excluyendo 0 y 4.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos",
          detail: "La matriz o el rango que contiene el conjunto de datos que se tendrá en cuenta.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_cuartil",
          detail: "Qué cuartil se devolverá.",
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
      d: "Devuelve el valor más cercano a un cuartil especificado de un conjunto de datos.",
      a: "Valor más cercano a un cuartil de un conjunto de datos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos",
          detail: "La matriz o el rango que contiene el conjunto de datos que se tendrá en cuenta.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_cuartil",
          detail: "Qué valor de cuartil se devolverá.",
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
      d: "Devuelve el valor de la función de distribución de Poisson (o de la función de distribución acumulada de Poisson) para un valor y una media especificados.",
      a: "Función de distribución de Poisson.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la función de distribución de Poisson.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "media",
          detail: "La media (mu) de la función de distribución de Poisson.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "acumulado",
          detail: "Si se debe usar la función de distribución acumulada de Poisson en lugar de la función de distribución.",
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
      d: "Calcula el cuadrado de r, el coeficiente de correlación de Pearson (momento-producto) de un conjunto de datos.",
      a: "Cuadrado del coeficiente de correlación.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos_y",
          detail: "El rango que representa la matriz o el vector de datos dependientes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos_x",
          detail: "El rango que representa la matriz o el vector de datos independientes.",
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
      d: "Calcula la probabilidad de cola izquierda para una distribución t de Student con una entrada (x) dada.",
      a: "Distribución t de Student de cola izquierda.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la función de distribución t.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "grados_libertad",
          detail: "El número de grados de libertad.",
          example: "30",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "acumulado",
          detail: "Si cumulative es TRUE, T.DIST devuelve la función de distribución acumulada; si es FALSE, devuelve la función de densidad de probabilidad.",
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
      d: "Calcula la probabilidad de dos colas para una distribución t de Student con una entrada (x) dada.",
      a: "Distribución t de Student de dos colas.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la función de distribución t.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "grados_libertad",
          detail: "El número de grados de libertad.",
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
      d: "Calcula la probabilidad de cola derecha para una distribución t de Student con una entrada (x) dada.",
      a: "Distribución t de Student de cola derecha.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la función de distribución t.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "grados_libertad",
          detail: "El número de grados de libertad.",
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
      d: "Calcula el inverso negativo de la función TDIST de una cola.",
      a: "T.INV",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "probabilidad",
          detail: "La probabilidad asociada a la distribución t de dos colas.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "grados_libertad",
          detail: "El número de grados de libertad.",
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
      d: "Calcula el inverso de la función TDIST de dos colas.",
      a: "T.INV.2T",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "probabilidad",
          detail: "La probabilidad asociada a la distribución t de dos colas.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "grados_libertad",
          detail: "El número de grados de libertad.",
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
      d: "Prueba t. Devuelve la probabilidad asociada a la prueba t de Student. Determina si dos muestras probablemente procedan de las mismas dos poblaciones subyacentes que tienen la misma media.",
      a: "Devuelve la probabilidad asociada a la prueba t.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "rango1",
          detail: "La primera muestra de datos o grupo de celdas que se tendrá en cuenta para la prueba t.",
          example: "A1:A4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rango2",
          detail: "La segunda muestra de datos o grupo de celdas que se tendrá en cuenta para la prueba t.",
          example: "B1:B4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colas",
          detail: "Especifica el número de colas de la distribución.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tipo",
          detail: "Especifica el tipo de prueba t.",
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
      d: "Calcula la distribución de probabilidad F de cola izquierda (grado de diversidad) para dos conjuntos de datos con una entrada x dada. También se conoce como distribución de Fisher-Snedecor o distribución F de Snedecor.",
      a: "Distribución de probabilidad F (cola izquierda).",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la función de distribución de probabilidad F. El valor en el que se evaluará la función.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "grados_libertad1",
          detail: "El numerador del número de grados de libertad.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "grados_libertad2",
          detail: "El denominador del número de grados de libertad.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "acumulado",
          detail: "Valor lógico que determina la forma de la función.",
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
      d: "Calcula la distribución de probabilidad F de cola derecha (grado de diversidad) para dos conjuntos de datos con una entrada x dada. También se conoce como distribución de Fisher-Snedecor o distribución F de Snedecor.",
      a: "Distribución de probabilidad F.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "La entrada de la función de distribución de probabilidad F. El valor en el que se evaluará la función.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "grados_libertad1",
          detail: "El numerador del número de grados de libertad.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "grados_libertad2",
          detail: "El denominador del número de grados de libertad.",
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
      d: "Calcula la varianza a partir de una población completa.",
      a: "Varianza de una población completa.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango de la población.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se incluirán en la población.",
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
      d: "Calcula la varianza a partir de una muestra.",
      a: "Varianza.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango de la muestra.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se incluirán en la muestra.",
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
      d: "Calcula la varianza a partir de una muestra, asignando al texto el valor `0`.",
      a: "Varianza de una muestra (texto como 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango de la muestra.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se incluirán en la muestra.",
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
      d: "Calcula la varianza a partir de una población completa, asignando al texto el valor `0`.",
      a: "Varianza de una población completa (texto como 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango de la población.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se incluirán en la población.",
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
      d: "Calcula el error estándar del valor y previsto para cada x en la regresión de un conjunto de datos.",
      a: "Error estándar de los valores y previstos en una regresión.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos_y",
          detail: "El rango que representa la matriz o el vector de datos dependientes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos_x",
          detail: "El rango que representa la matriz o el vector de datos independientes.",
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
      d: "Calcula el equivalente normalizado de una variable aleatoria, dadas la media y la desviación estándar de la distribución.",
      a: "Equivalente normalizado de una variable aleatoria.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "valor",
          detail: "El valor de la variable aleatoria que se normalizará.",
          example: "96",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "media",
          detail: "La media de la distribución.",
          example: "80",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desviación_estándar",
          detail: "La desviación estándar de la distribución.",
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
      d: "Devuelve el enésimo elemento más pequeño de un conjunto de datos, donde n lo define el usuario.",
      a: "Enésimo elemento más pequeño de un conjunto de datos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos",
          detail: "La matriz o el rango que contiene el conjunto de datos que se tendrá en cuenta.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "n",
          detail: "La posición, de menor a mayor, del elemento que se devolverá.",
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
      d: "Calcula la pendiente de la recta resultante de la regresión lineal de un conjunto de datos.",
      a: "Pendiente de la recta de regresión lineal de los datos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos_y",
          detail: "El rango que representa la matriz o el vector de datos dependientes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos_x",
          detail: "El rango que representa la matriz o el vector de datos independientes.",
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
      d: "Calcula la asimetría de un conjunto de datos, que describe la simetría de dicho conjunto respecto a la media.",
      a: "Asimetría de un conjunto de datos.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango del conjunto de datos.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se incluirán en el conjunto de datos.",
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
      d: "Calcula la asimetría de un conjunto de datos, que describe la simetría de dicho conjunto respecto a la media. Se asume que el conjunto de datos corresponde a la población.",
      a: "Asimetría del conjunto de datos de una población.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor o rango del conjunto de datos.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores o rangos adicionales que se incluirán en el conjunto de datos.",
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
      d: "Búsqueda vertical. Busca en la primera columna de un rango una clave y devuelve el valor de una celda especificada en la fila encontrada.",
      a: "Búsqueda vertical.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "clave_búsqueda",
          detail: "El valor que se buscará. Por ejemplo, `42`, `\"Gatos\"` o `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rango",
          detail: "El rango que se tendrá en cuenta para la búsqueda. Se buscará en la primera columna del rango la clave especificada en `clave_de_búsqueda`.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "índice",
          detail: "El índice de columna del valor que se devolverá; la primera columna de `rango` se numera como 1.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "está_ordenado",
          detail: "Indica si la columna en la que se busca (la primera columna del rango especificado) está ordenada, en cuyo caso se devolverá la coincidencia más aproximada de `clave_de_búsqueda`.",
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
      d: "Búsqueda horizontal. Busca en la primera fila de un rango una clave y devuelve el valor de una celda especificada en la columna encontrada.",
      a: "Búsqueda horizontal.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "clave_búsqueda",
          detail: "El valor que se buscará. Por ejemplo, `42`, `\"Gatos\"` o `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rango",
          detail: "El rango que se tendrá en cuenta para la búsqueda. Se buscará en la primera fila del rango la clave especificada en `clave_de_búsqueda`.",
          example: "A2:Z6",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "índice",
          detail: "El índice de fila del valor que se devolverá; la primera fila de `rango` se numera como 1.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "está_ordenado",
          detail: "Indica si la fila en la que se busca (la primera fila del rango especificado) está ordenada.",
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
      d: "Recorre una fila o columna ordenada en busca de una clave y devuelve el valor de la celda de un rango de resultados situada en la misma posición que la fila o columna de búsqueda.",
      a: "Busca un valor.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "clave_búsqueda",
          detail: "El valor que se buscará en la fila o columna. Por ejemplo, `42`, `\"Gatos\"` o `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rango_búsqueda|matriz_resultado_búsqueda",
          detail: "Una forma de usar esta función consiste en proporcionar una única fila o columna ordenada `rango_de_búsqueda` en la que buscar `clave_de_búsqueda`, junto con un segundo argumento `rango_resultado`. La otra forma consiste en combinar estos dos argumentos en uno solo, `tabla_resultado_búsqueda`, en el que se busca en la primera fila o columna y se devuelve un valor de la última fila o columna de la matriz. Si no se encuentra `clave_de_búsqueda`, puede devolverse una coincidencia no exacta.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rango_resultado",
          detail: "El rango del que se devolverá un resultado. El valor devuelto corresponde a la ubicación en la que se encuentra `clave_de_búsqueda` dentro de `rango_de_búsqueda`. Este rango debe ser una única fila o columna y no debe usarse si se emplea el método `tabla_resultado_búsqueda`.",
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
      d: "Devuelve una referencia de celda en forma de texto.",
      a: "Referencia de celda en forma de texto.",
      m: [
        2,
        5
      ],
      p: [
        {
          name: "fila",
          detail: "El número de fila de la referencia de celda.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "columna",
          detail: "El número de columna (no el nombre) de la referencia de celda. `A` es la columna número `1`.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "modo_relativo_absoluto",
          detail: "Un indicador de si la referencia es absoluta en fila/columna. `1` es fila y columna absolutas (p. ej. $A$1), `2` es fila absoluta y columna relativa (p. ej. A$1), `3` es fila relativa y columna absoluta (p. ej. $A1), y `4` es fila y columna relativas (p. ej. A1).",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "usar_notación_a1",
          detail: "Un valor booleano que indica si se usará la notación de estilo `A1` (TRUE) o la notación de estilo `R1C1` (FALSE).",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "hoja",
          detail: "Texto que indica el nombre de la hoja a la que apunta la dirección.",
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
      d: "Devuelve una referencia de celda especificada mediante una cadena de texto.",
      a: "Una referencia de celda especificada mediante una cadena de texto.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "referencia_celda_como_cadena",
          detail: "Una referencia de celda, escrita como una cadena entre comillas.",
          example: "\"Sheet2!\"&B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "es_notación_a1",
          detail: "Indica si la referencia de celda está en notación A1 (TRUE) o en notación R1C1 (FALSE).",
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
      d: "Devuelve el número de fila de una celda especificada.",
      a: "Número de fila de una celda especificada.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "referencia_celda",
          detail: "La celda cuyo número de fila se devolverá.",
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
      d: "Devuelve el número de filas de una matriz o rango especificado.",
      a: "Número de filas de una matriz o rango especificado.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "rango",
          detail: "El rango cuyo número de filas se devolverá.",
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
      d: "Devuelve el número de columna de una celda especificada, donde `A=1`.",
      a: "Número de columna de una celda especificada.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "referencia_celda",
          detail: "La celda cuyo número de columna se devolverá. La columna `A` corresponde a `1`.",
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
      d: "Devuelve el número de columnas de una matriz o rango especificado.",
      a: "Número de columnas de una matriz o rango especificado.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "rango",
          detail: "El rango cuyo número de columnas se devolverá.",
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
      d: "Devuelve una referencia de rango desplazada un número especificado de filas y columnas desde una referencia de celda inicial.",
      a: "Una referencia de rango desplazada respecto a una celda.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "referencia_celda",
          detail: "El punto de partida desde el que se contarán las filas y columnas de desplazamiento.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "filas_desplazamiento",
          detail: "El número de filas que se desplazará.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "columnas_desplazamiento",
          detail: "El número de columnas que se desplazará.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "altura",
          detail: "La altura del rango que se devolverá, comenzando en el destino del desplazamiento.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "ancho",
          detail: "El ancho del rango que se devolverá, comenzando en el destino del desplazamiento.",
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
      d: "Devuelve la posición relativa de un elemento en un rango que coincide con un valor especificado.",
      a: "Posición de un elemento en un rango que coincide con un valor.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "clave_búsqueda",
          detail: "El valor que se buscará. Por ejemplo, `42`, `\"Gatos\"` o `I24`.",
          example: "\"Sunday\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "rango",
          detail: "La matriz unidimensional en la que se buscará.",
          example: "A2:A9",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "tipo_búsqueda",
          detail: "El método de búsqueda. `1` (predeterminado) encuentra el valor mayor menor o igual que `clave_de_búsqueda` cuando `rango` está ordenado de forma ascendente. `0` encuentra el valor exacto cuando `rango` no está ordenado. `-1` encuentra el valor menor mayor o igual que `clave_de_búsqueda` cuando `rango` está ordenado de forma descendente.",
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
      d: "Devuelve el contenido de una celda, especificada mediante un desplazamiento de fila y columna.",
      a: "Contenido de una celda especificada mediante un desplazamiento de fila y columna.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "referencia",
          detail: "La matriz de celdas en la que se realizará el desplazamiento.",
          example: "A1:C20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "fila",
          detail: "El número de filas de desplazamiento.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "columna",
          detail: "El número de columnas de desplazamiento.",
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
      d: "Extrae un valor agregado de una tabla dinámica que corresponde a los encabezados de fila y columna especificados.",
      a: "Extrae un valor agregado de una tabla dinámica que corresponde a los encabezados de fila y columna especificados.",
      m: [
        2,
        254
      ],
      p: [
        {
          name: "nombre_valor",
          detail: "El nombre del valor de la tabla dinámica del que se desean obtener datos.",
          example: "\"SUM of number of units\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "celda_tabla_dinámica",
          detail: "Cualquier referencia a una celda de la tabla dinámica deseada (se recomienda la esquina superior).",
          example: "'Pivot table'!A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "columna_original",
          detail: "El nombre de la columna en el conjunto de datos original (no en la tabla dinámica).",
          example: "\"division\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        },
        {
          name: "elemento_tabla_dinámica",
          detail: "El nombre de la fila o columna mostrada en la tabla dinámica correspondiente a *columna_original* que se desea recuperar.",
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
      d: "Devuelve un elemento de una lista de opciones según un índice.",
      a: "Un elemento de una lista de opciones según un índice.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "índice",
          detail: "Qué opción (de hasta 30 proporcionadas) se devolverá.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "opción1",
          detail: "Un valor potencial que se devolverá. Obligatorio. Puede ser una referencia a una celda o un valor individual.",
          example: "\"A\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "opción2",
          detail: "Valores adicionales entre los que elegir.",
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
      d: "Crea un hipervínculo dentro de una celda.",
      a: "Crea un hipervínculo dentro de una celda.",
      p: [
        {
          name: "url",
          detail: "La URL completa de la ubicación del enlace, entre comillas, o una referencia a una celda que contenga dicha URL.",
          example: "\"http://www.luckysheet.com/\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "etiqueta_enlace",
          detail: "El texto que se mostrará en la celda como enlace, entre comillas, o una referencia a una celda que contenga dicha etiqueta.",
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
      d: "Convierte una hora, un minuto y un segundo proporcionados en una hora.",
      a: "Convierte hora/minuto/segundo en una hora.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "hora",
          detail: "El componente de hora.",
          example: "11",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "minuto",
          detail: "El componente de minuto.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "segundo",
          detail: "El componente de segundo.",
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
      d: "Devuelve la fracción de un día de 24 horas que representa la hora indicada.",
      a: "Convierte una cadena de hora en su representación numérica de serie.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "cadena_hora",
          detail: "La cadena que contiene la representación de la hora.",
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
      d: "Devuelve una fecha correspondiente al último día de un mes que cae un número especificado de meses antes o después de otra fecha.",
      a: "Último día de un mes antes o después de una fecha.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "fecha_inicio",
          detail: "La fecha a partir de la cual se calculará el resultado.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_de_meses",
          detail: "El número de meses antes (negativo) o después (positivo) de 'fecha_inicio' que se tendrá en cuenta.",
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
      d: "Devuelve una fecha situada un número especificado de meses antes o después de otra fecha.",
      a: "Fecha situada cierto número de meses antes/después de otra fecha.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "fecha_inicio",
          detail: "La fecha a partir de la cual se calculará el resultado.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_de_meses",
          detail: "El número de meses antes (negativo) o después (positivo) de 'fecha_inicio' que se calculará.",
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
      d: "Devuelve el componente de segundos de una hora determinada, en formato numérico.",
      a: "Componente de segundos de una hora determinada.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hora",
          detail: "La hora a partir de la cual se calculará el componente de segundos.",
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
      d: "Devuelve el componente de minutos de una hora determinada, en formato numérico.",
      a: "Componente de minutos de una hora determinada.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hora",
          detail: "La hora a partir de la cual se calculará el componente de minutos.",
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
      d: "Devuelve el componente de horas de una hora determinada, en formato numérico.",
      a: "Componente de horas de una hora determinada.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hora",
          detail: "La hora a partir de la cual se calculará el componente de horas.",
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
      d: "Devuelve la fecha y hora actuales como un valor de fecha.",
      a: "Fecha y hora actuales como valor de fecha.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "NETWORKDAYS",
      t: 6,
      d: "Devuelve el número de días laborables netos entre dos días proporcionados.",
      a: "Días laborables netos entre dos días proporcionados.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "fecha_inicio",
          detail: "La fecha de inicio del período para el que se calculará el número de días laborables netos.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fecha_fin",
          detail: "La fecha de fin del período para el que se calculará el número de días laborables netos.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "días_festivos",
          detail: "Un rango o matriz constante que contiene los números de serie de fecha que se considerarán festivos.",
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
      d: "Devuelve el número de días laborables netos entre dos días proporcionados, excluyendo los días de fin de semana y festivos especificados.",
      a: "Días laborables netos entre dos fechas (especificando fines de semana).",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "fecha_inicio",
          detail: "La fecha de inicio del período para el que se calculará el número de días laborables netos.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fecha_fin",
          detail: "La fecha de fin del período para el que se calculará el número de días laborables netos.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fin_de_semana",
          detail: "Un número o cadena que representa qué días de la semana se consideran fin de semana.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "días_festivos",
          detail: "Un rango o matriz constante que contiene las fechas que se considerarán festivos.",
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
      d: "Devuelve un número que representa la semana ISO del año en la que cae la fecha proporcionada.",
      a: "Número de semana ISO del año.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "fecha",
          detail: "La fecha para la que se determinará el número de semana ISO. Debe ser una referencia a una celda que contenga una fecha, una función que devuelva un tipo de fecha, o un número.",
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
      d: "Devuelve un número que representa la semana del año en la que cae la fecha proporcionada.",
      a: "Número de semana del año.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "fecha",
          detail: "La fecha para la que se determinará el número de semana. Debe ser una referencia a una celda que contenga una fecha, una función que devuelva un tipo de fecha, o un número.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tipo",
          detail: "Un número que representa el día en el que comienza la semana. Domingo = 1.",
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
      d: "Devuelve un número que representa el día de la semana de la fecha proporcionada.",
      a: "Día de la semana de la fecha proporcionada (como número).",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "fecha",
          detail: "La fecha para la que se determinará el día de la semana. Debe ser una referencia a una celda que contenga una fecha, una función que devuelva un tipo de fecha, o un número.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tipo",
          detail: "Un número que indica qué sistema de numeración se usará para representar los días de la semana. De forma predeterminada, la numeración comienza en domingo = 1.",
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
      d: "Devuelve el día del mes en el que cae una fecha determinada, en formato numérico.",
      a: "Día del mes en el que cae una fecha determinada.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "fecha",
          detail: "La fecha de la que se extraerá el día.",
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
      d: "Devuelve el número de días entre dos fechas.",
      a: "Número de días entre dos fechas.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "fecha_fin",
          detail: "El final del rango de fechas.",
          example: "2011-3-15",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fecha_inicio",
          detail: "El inicio del rango de fechas.",
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
      d: "Devuelve la diferencia entre dos fechas basándose en el año de 360 días usado en algunos cálculos de interés financiero.",
      a: "Días entre dos fechas según un año de 360 días.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "fecha_inicio",
          detail: "La fecha de inicio que se tendrá en cuenta en el cálculo. Debe ser una referencia a una celda que contenga una fecha, una función que devuelva un tipo de fecha, o un número.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fecha_fin",
          detail: "La fecha de fin que se tendrá en cuenta en el cálculo. Debe ser una referencia a una celda que contenga una fecha, una función que devuelva un tipo de fecha, o un número.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "método",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Convierte un año, un mes y un día proporcionados en una fecha.",
      a: "Convierte año/mes/día en una fecha.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "año",
          detail: "El componente de año de la fecha.",
          example: "1969",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mes",
          detail: "El componente de mes de la fecha.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "día",
          detail: "El componente de día de la fecha.",
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
      d: "Convierte una cadena de fecha proporcionada en un formato conocido a un valor de fecha.",
      a: "Convierte una cadena de fecha en un valor de fecha.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "cadena_fecha",
          detail: "La cadena que representa la fecha.",
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
      d: "Calcula el número de días, meses o años entre dos fechas.",
      a: "Diferencia de fechas.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "fecha_inicio",
          detail: "La fecha de inicio que se tendrá en cuenta en el cálculo. Debe ser una referencia a una celda que contenga una fecha, una función que devuelva un tipo de fecha, o un número.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fecha_fin",
          detail: "La fecha de fin que se tendrá en cuenta en el cálculo. Debe ser una referencia a una celda que contenga una fecha, una función que devuelva un tipo de fecha, o un número.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "unidad",
          detail: "Una abreviatura de texto para la unidad de tiempo. Por ejemplo, \"M\" para mes. Los valores aceptados son \"Y\", \"M\", \"D\", \"MD\", \"YM\", \"YD\".",
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
      d: "Calcula la fecha resultante tras un número de días laborables a partir de una fecha de inicio especificada.",
      a: "Número de días laborables a partir de una fecha de inicio.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "fecha_inicio",
          detail: "La fecha a partir de la cual se comenzará a contar.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_días",
          detail: "El número de días laborables que se avanzará desde `fecha_inicio`. Si es negativo, cuenta hacia atrás.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "días_festivos",
          detail: "Un rango o matriz constante que contiene las fechas que se considerarán festivos.",
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
      d: "Calcula la fecha resultante tras un número especificado de días laborables, excluyendo los días de fin de semana y festivos especificados.",
      a: "Fecha tras un número de días laborables (especificando fines de semana).",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "fecha_inicio",
          detail: "La fecha a partir de la cual se comenzará a contar.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_días",
          detail: "El número de días laborables que se avanzará desde `fecha_inicio`. Si es negativo, cuenta hacia atrás.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_de_semana",
          detail: "Un número o cadena que representa qué días de la semana se consideran fin de semana.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "días_festivos",
          detail: "Un rango o matriz constante que contiene las fechas que se considerarán festivos.",
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
      d: "Devuelve el año especificado por una fecha determinada.",
      a: "Año especificado por una fecha determinada.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "fecha",
          detail: "La fecha de la que se extraerá el año.",
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
      d: "Devuelve el número de años, incluyendo fracciones de año, entre dos fechas, usando una convención de recuento de días especificada.",
      a: "Número exacto de años entre dos fechas.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "fecha_inicio",
          detail: "La fecha de inicio que se tendrá en cuenta en el cálculo. Debe ser una referencia a una celda que contenga una fecha, una función que devuelva un tipo de fecha, o un número.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fecha_fin",
          detail: "La fecha de fin que se tendrá en cuenta en el cálculo. Debe ser una referencia a una celda que contenga una fecha, una función que devuelva un tipo de fecha, o un número.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Devuelve la fecha actual como un valor de fecha.",
      a: "Fecha actual como valor de fecha.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "MONTH",
      t: 6,
      d: "Devuelve el mes del año en el que cae una fecha determinada, en formato numérico.",
      a: "Mes del año en el que cae una fecha determinada.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "fecha",
          detail: "La fecha de la que se extraerá el mes.",
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
      d: "Calcula la tasa de interés anual efectiva dados la tasa nominal y el número de períodos de capitalización por año.",
      a: "Tasa de interés anual efectiva.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tasa_nominal",
          detail: "La tasa de interés nominal anual.",
          example: "0.99",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "períodos_por_año",
          detail: "El número de períodos de capitalización por año.",
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
      d: "Da formato a un número según la moneda específica de la configuración regional de tu hoja de cálculo.",
      a: "Da formato a un número como moneda específica de tu configuración regional.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número",
          detail: "El valor al que se dará formato.",
          example: "1.2351",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_decimales",
          detail: "El número de decimales que se mostrarán.",
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
      d: "Convierte una cotización de precio expresada como fracción decimal en un valor decimal.",
      a: "Convierte una fracción decimal en un valor decimal.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "precio_fraccionario",
          detail: "La cotización de precio expresada mediante convenciones decimales fraccionarias.",
          example: "100.10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unidad",
          detail: "Las unidades de la fracción; por ejemplo, `8` para octavos o `32` para treintaidosavos.",
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
      d: "Convierte una cotización de precio expresada como valor decimal en una fracción decimal.",
      a: "Convierte un valor decimal en una fracción decimal.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "precio_decimal",
          detail: "La cotización de precio expresada como valor decimal.",
          example: "100.125",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unidad",
          detail: "Las unidades de la fracción deseada; por ejemplo, `8` para octavos o `32` para treintaidosavos.",
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
      d: "Calcula la depreciación de un activo para un período especificado usando el método de saldo decreciente aritmético.",
      a: "Depreciación mediante el método de saldo decreciente.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "costo",
          detail: "El costo inicial del activo.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_residual",
          detail: "El valor del activo al final de la depreciación.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vida_útil",
          detail: "El número de períodos durante los cuales se deprecia el activo.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "El período concreto dentro de `vida` para el que se calculará la depreciación.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mes",
          detail: "El número de meses del primer año de depreciación.",
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
      d: "Calcula la depreciación de un activo para un período especificado usando el método de doble saldo decreciente.",
      a: "Depreciación mediante el método de doble saldo decreciente.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "costo",
          detail: "El costo inicial del activo.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_residual",
          detail: "El valor del activo al final de la depreciación.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vida_útil",
          detail: "El número de períodos durante los cuales se deprecia el activo.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "El período concreto dentro de `vida` para el que se calculará la depreciación.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor",
          detail: "El factor por el que disminuye la depreciación.",
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
      d: "Calcula la tasa de interés de una inversión de anualidad basándose en pagos periódicos de importe constante y suponiendo una tasa de interés constante.",
      a: "Tasa de interés de una inversión de anualidad.",
      m: [
        3,
        6
      ],
      p: [
        {
          name: "número_períodos",
          detail: "El número de pagos que se realizarán.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "pago_por_período",
          detail: "El importe que se pagará por período.",
          example: "-100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_actual",
          detail: "El valor actual de la anualidad.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "El valor futuro que quedará tras realizar el último pago.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_o_inicio",
          detail: "Si los pagos vencen al final (`0`) o al principio (`1`) de cada período.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "estimación_tasa",
          detail: "Una estimación de cuál será la tasa de interés.",
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
      d: "Calcula el capital acumulado pagado durante un rango de períodos de pago para una inversión basada en pagos periódicos de importe constante y una tasa de interés constante.",
      a: "Capital acumulado pagado durante un conjunto de períodos.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "tasa",
          detail: "La tasa de interés.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "El número de pagos que se realizarán.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_actual",
          detail: "El valor actual de la anualidad.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "primer_período",
          detail: "El número del período de pago en el que comenzará el cálculo acumulado.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "último_período",
          detail: "El número del período de pago en el que terminará el cálculo acumulado.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_o_inicio",
          detail: "Si los pagos vencen al final (`0`) o al principio (`1`) de cada período.",
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
      d: "Calcula el número de cupones, o pagos de intereses, entre la fecha de liquidación y la fecha de vencimiento de la inversión.",
      a: "Número de cupones entre la liquidación y el vencimiento.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "02",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frecuencia",
          detail: "El número de pagos de intereses o cupones por año (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula la depreciación de un activo para un período especificado usando el método de suma de dígitos de los años.",
      a: "Depreciación mediante el método de suma de dígitos de los años.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "costo",
          detail: "El costo inicial del activo.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_residual",
          detail: "El valor del activo al final de la depreciación.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vida_útil",
          detail: "El número de períodos durante los cuales se deprecia el activo.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "El período concreto dentro de `vida` para el que se calculará la depreciación.",
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
      d: "Calcula la tasa de rendimiento anualizada equivalente de una letra del Tesoro de EE. UU. a partir de la tasa de descuento.",
      a: "Tasa de rendimiento equivalente de una letra del Tesoro.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasa_descuento",
          detail: "La tasa de descuento de la letra en el momento de la compra.",
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
      d: "Calcula el rendimiento de una letra del Tesoro de EE. UU. a partir de su precio.",
      a: "Rendimiento de una letra del Tesoro de EE. UU. a partir del precio.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "precio",
          detail: "El precio al que se compra el valor por cada 100 de valor nominal.",
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
      d: "Calcula el precio de una letra del Tesoro de EE. UU. a partir de la tasa de descuento.",
      a: "Precio de una letra del Tesoro de EE. UU.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasa_descuento",
          detail: "La tasa de descuento de la letra en el momento de la compra.",
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
      d: "Calcula el valor actual de una inversión de anualidad basándose en pagos periódicos de importe constante y una tasa de interés constante.",
      a: "Valor actual de una inversión de anualidad.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "tasa",
          detail: "La tasa de interés.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "El número de pagos que se realizarán.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "importe_pago",
          detail: "El importe que se pagará por período.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "El valor futuro que quedará tras realizar el último pago.",
          example: "D2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_o_inicio",
          detail: "Si los pagos vencen al final (`0`) o al principio (`1`) de cada período.",
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
      d: "Calcula el interés acumulado de un valor que realiza pagos periódicos.",
      a: "Interés acumulado de un valor con pagos periódicos.",
      m: [
        6,
        8
      ],
      p: [
        {
          name: "fecha_emisión",
          detail: "La fecha en la que se emitió inicialmente el valor.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "primer_pago",
          detail: "La primera fecha en la que se pagarán intereses.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasa",
          detail: "La tasa de interés anualizada.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_reembolso",
          detail: "El importe de reembolso por cada 100 de valor nominal.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frecuencia",
          detail: "El número de pagos de intereses o cupones por año (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "método_cálculo",
          detail: "[Opcional; el valor predeterminado es TRUE()] - Un valor lógico que especifica el método usado para calcular el total de intereses acumulados cuando la fecha de liquidación es posterior a la primera fecha de acumulación de intereses. \n\nSi el valor es TRUE, se devuelve el total de intereses acumulados desde la fecha de emisión hasta la fecha de liquidación. \n\nSi el valor es FALSE, se devuelve el interés acumulado desde la primera fecha de acumulación de intereses hasta la fecha de liquidación.",
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
      d: "Calcula el interés acumulado de un valor que paga intereses al vencimiento.",
      a: "Interés acumulado de un valor que paga al vencimiento.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "fecha_emisión",
          detail: "La fecha en la que se emitió inicialmente el valor.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasa",
          detail: "La tasa de interés anualizada.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_reembolso",
          detail: "El importe de reembolso por cada 100 de valor nominal.",
          example: "1000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula el número de días desde el primer cupón, o pago de intereses, hasta la liquidación.",
      a: "Número de días desde el primer cupón hasta la liquidación.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frecuencia",
          detail: "El número de pagos de intereses o cupones por año (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula el número de días en el período del cupón, o de pago de intereses, que contiene la fecha de liquidación especificada.",
      a: "Días del período del cupón que contiene la fecha de liquidación.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frecuencia",
          detail: "El número de pagos de intereses o cupones por año (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula el número de días desde la fecha de liquidación hasta el siguiente cupón, o pago de intereses.",
      a: "Días desde la liquidación hasta el siguiente cupón.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frecuencia",
          detail: "El número de pagos de intereses o cupones por año (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula la fecha del siguiente cupón, o pago de intereses, posterior a la fecha de liquidación.",
      a: "Fecha del siguiente cupón tras la fecha de liquidación.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frecuencia",
          detail: "El número de pagos de intereses o cupones por año (1, 2 o 4).",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula la fecha del último cupón, o pago de intereses, anterior a la fecha de liquidación.",
      a: "Fecha del último cupón antes de la fecha de liquidación.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frecuencia",
          detail: "El número de pagos de intereses o cupones por año (1, 2 o 4).",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula el valor futuro de una inversión de anualidad basándose en pagos periódicos de importe constante y una tasa de interés constante.",
      a: "Valor futuro de una inversión de anualidad.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "tasa",
          detail: "La tasa de interés.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "El número de pagos que se realizarán.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "importe_pago",
          detail: "El importe que se pagará por período.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_actual",
          detail: "El valor actual de la anualidad.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_o_inicio",
          detail: "Si los pagos vencen al final (`0`) o al principio (`1`) de cada período.",
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
      d: "Calcula el valor futuro de un capital basándose en una serie especificada de tasas de interés potencialmente variables.",
      a: "Valor futuro de un capital a partir de una serie de tasas.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "capital",
          detail: "El importe del capital inicial o valor sobre el que se capitalizará.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "calendario_tasas",
          detail: "Una serie de tasas de interés que se capitalizarán sobre el `capital`.",
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
      d: "Calcula el rendimiento anual de un valor que paga intereses periódicos, como un bono del Tesoro de EE. UU., a partir de su precio.",
      a: "Rendimiento anual de un valor con pago periódico de intereses.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasa",
          detail: "La tasa de interés anualizada.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "precio",
          detail: "El precio al que se compra el valor por cada 100 de valor nominal.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_reembolso",
          detail: "El importe de reembolso por cada 100 de valor nominal.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frecuencia",
          detail: "El número de pagos de intereses o cupones por año (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula el rendimiento anual de un valor de descuento (que no paga intereses), a partir de su precio.",
      a: "Rendimiento anual de un valor de descuento.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "precio",
          detail: "El precio al que se compra el valor por cada 100 de valor nominal.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_reembolso",
          detail: "El importe de reembolso por cada 100 de valor nominal.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula la tasa de interés nominal anual dados la tasa efectiva y el número de períodos de capitalización por año.",
      a: "Tasa de interés nominal anual.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tasa_efectiva",
          detail: "La tasa de interés efectiva anual.",
          example: "0.85",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "períodos_por_año",
          detail: "El número de períodos de capitalización por año.",
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
      d: "Calcula la tasa interna de retorno de una inversión basándose en una serie especificada de flujos de caja potencialmente irregulares en el tiempo.",
      a: "Tasa interna de retorno con flujos de caja no periódicos.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "importes_flujo_caja",
          detail: "Una matriz o rango que contiene los ingresos o pagos asociados a la inversión.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "fechas_flujo_caja",
          detail: "Una matriz o rango con fechas correspondientes a los flujos de caja de `importes_flujo_caja`.",
          example: "C2:C25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "estimación_tasa",
          detail: "Una estimación de cuál será la tasa interna de retorno.",
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
      d: "Calcula la tasa interna de retorno modificada de una inversión basándose en una serie de flujos de caja periódicos y en la diferencia entre la tasa de interés pagada por la financiación y el rendimiento obtenido de los ingresos reinvertidos.",
      a: "Tasa interna de retorno modificada.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "importes_flujo_caja",
          detail: "Una matriz o rango que contiene los ingresos o pagos asociados a la inversión.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "tasa_financiación",
          detail: "La tasa de interés pagada por los fondos invertidos.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tasa_rendimiento_reinversión",
          detail: "El rendimiento (en porcentaje) obtenido al reinvertir los ingresos recibidos de la inversión.",
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
      d: "Calcula la tasa interna de retorno de una inversión basándose en una serie de flujos de caja periódicos.",
      a: "Tasa interna de retorno con flujos de caja periódicos.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "importes_flujo_caja",
          detail: "Una matriz o rango que contiene los ingresos o pagos asociados a la inversión.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "estimación_tasa",
          detail: "Una estimación de cuál será la tasa interna de retorno.",
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
      d: "Calcula el valor actual neto de una inversión basándose en una serie de flujos de caja periódicos y una tasa de descuento.",
      a: "Valor actual neto de una inversión a partir de flujos de caja periódicos y una tasa de descuento.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "tasa_descuento",
          detail: "La tasa de descuento de la inversión durante un período.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "flujo_caja1",
          detail: "El primer flujo de caja futuro.",
          example: "200",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "flujo_caja2",
          detail: "Flujos de caja futuros adicionales.",
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
      d: "Calcula el valor actual neto de una inversión basándose en una serie especificada de flujos de caja potencialmente irregulares en el tiempo y una tasa de descuento.",
      a: "Valor actual neto con flujos de caja no periódicos.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "tasa_descuento",
          detail: "La tasa de descuento de la inversión durante un período.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "importes_flujo_caja",
          detail: "Un rango de celdas que contiene los ingresos o pagos asociados a la inversión.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "fechas_flujo_caja",
          detail: "Un rango de celdas con fechas correspondientes a los flujos de caja de `importes_flujo_caja`.",
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
      d: "Calcula el interés acumulado durante un rango de períodos de pago para una inversión basada en pagos periódicos de importe constante y una tasa de interés constante.",
      a: "Interés acumulado pagado durante un conjunto de períodos.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "tasa",
          detail: "La tasa de interés.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "El número de pagos que se realizarán.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_actual",
          detail: "El valor actual de la anualidad.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "primer_período",
          detail: "El número del período de pago en el que comenzará el cálculo acumulado.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "último_período",
          detail: "El número del período de pago en el que terminará el cálculo acumulado.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_o_inicio",
          detail: "Si los pagos vencen al final (`0`) o al principio (`1`) de cada período.",
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
      d: "Calcula el pago periódico de una inversión de anualidad basándose en pagos periódicos de importe constante y una tasa de interés constante.",
      a: "Pago periódico de una inversión de anualidad.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "tasa",
          detail: "La tasa de interés.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "El número de pagos que se realizarán.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_actual",
          detail: "El valor actual de la anualidad.",
          example: " 100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "El valor futuro que quedará tras realizar el último pago.",
          example: "D2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_o_inicio",
          detail: "Si los pagos vencen al final (`0`) o al principio (`1`) de cada período.",
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
      d: "Calcula el pago de intereses de una inversión basándose en pagos periódicos de importe constante y una tasa de interés constante.",
      a: "Pago de intereses de una inversión.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "tasa",
          detail: "La tasa de interés.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "El período de amortización, expresado en número de períodos.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "El número de pagos que se realizarán.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_actual",
          detail: "El valor actual de la anualidad.",
          example: "80000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "El valor futuro que quedará tras realizar el último pago.",
          example: "E2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_o_inicio",
          detail: "Si los pagos vencen al final (`0`) o al principio (`1`) de cada período.",
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
      d: "Calcula el pago del capital de una inversión basándose en pagos periódicos de importe constante y una tasa de interés constante.",
      a: "Pago del capital de una inversión.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "tasa",
          detail: "La tasa de interés.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "El período de amortización, expresado en número de períodos.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "El número de pagos que se realizarán.",
          example: "3*12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_actual",
          detail: "El valor actual de la anualidad.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "El valor futuro que quedará tras realizar el último pago.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_o_inicio",
          detail: "Si los pagos vencen al final (`0`) o al principio (`1`) de cada período.",
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
      d: "Calcula la tasa de interés efectiva generada cuando se compra una inversión a un precio y se vende a otro, sin que la propia inversión genere intereses ni dividendos.",
      a: "Calcula la tasa de interés efectiva.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "fecha_compra",
          detail: "La fecha de compra de la inversión.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fecha_venta",
          detail: "La fecha de venta de la inversión.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "precio_compra",
          detail: "El precio al que se compró la inversión.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "precio_venta",
          detail: "El precio al que se vendió la inversión.",
          example: "101200",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula el precio de un valor que paga intereses periódicos, como un bono del Tesoro de EE. UU., a partir del rendimiento esperado.",
      a: "Precio de un valor con pago periódico de intereses.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasa",
          detail: "La tasa de interés anualizada.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimiento",
          detail: "El rendimiento anual esperado del valor.",
          example: "0.065",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_reembolso",
          detail: "El importe de reembolso por cada 100 de valor nominal.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frecuencia",
          detail: "El número de pagos de intereses o cupones por año (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula el precio de un valor de descuento (que no paga intereses), a partir del rendimiento esperado.",
      a: "Precio de un valor de descuento.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasa_descuento",
          detail: "La tasa de descuento del valor en el momento de la compra.",
          example: "0.0525",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_reembolso",
          detail: "El importe de reembolso por cada 100 de valor nominal.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula el precio de un valor que paga intereses al vencimiento, a partir del rendimiento esperado.",
      a: "Precio de un valor que paga intereses al vencimiento.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fecha_emisión",
          detail: "La fecha en la que se emitió inicialmente el valor.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasa",
          detail: "La tasa de interés anualizada.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimiento",
          detail: "El rendimiento anual esperado del valor.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula el importe recibido al vencimiento por una inversión en valores de renta fija comprados en una fecha determinada.",
      a: "Importe recibido al vencimiento de un valor.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "inversión",
          detail: "El importe invertido (con independencia del valor nominal de cada valor).",
          example: "10000000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tasa_descuento",
          detail: "La tasa de descuento del valor en el que se invierte.",
          example: "0.0575",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula la tasa de descuento de un valor a partir de su precio.",
      a: "La tasa de descuento de un valor a partir de su precio.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "precio",
          detail: "El precio al que se compra el valor por cada 100 de valor nominal.",
          example: "97.975",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_reembolso",
          detail: "El importe de reembolso por cada 100 de valor nominal.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula el número de períodos de pago de una inversión basándose en pagos periódicos de importe constante y una tasa de interés constante.",
      a: "Número de períodos de pago de una inversión.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "tasa",
          detail: "La tasa de interés.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "importe_pago",
          detail: "El importe de cada pago realizado.",
          example: "500",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_actual",
          detail: "El valor actual de la anualidad.",
          example: "40000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "El valor futuro que quedará tras realizar el último pago.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fin_o_inicio",
          detail: "Si los pagos vencen al final (`0`) o al principio (`1`) de cada período.",
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
      d: "Calcula la depreciación de un activo durante un período usando el método lineal.",
      a: "Depreciación de un activo mediante el método lineal.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "costo",
          detail: "El costo inicial del activo.",
          example: "300000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_residual",
          detail: "El valor del activo al final de la depreciación.",
          example: "75000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vida_útil",
          detail: "El número de períodos durante los cuales se deprecia el activo.",
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
      d: "Calcula el número de períodos de capitalización necesarios para que una inversión de un valor actual especificado, que se revaloriza a una tasa dada, alcance un valor objetivo.",
      a: "Número de períodos para que una inversión alcance un valor.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasa",
          detail: "La tasa de interés anualizada.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimiento",
          detail: "El rendimiento anual esperado del valor.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frecuencia",
          detail: "El número de pagos de intereses o cupones por año (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Calcula la duración de Macaulay modificada de un valor que paga intereses periódicos, como un bono del Tesoro de EE. UU., a partir del rendimiento esperado.",
      a: "Duración de Macaulay modificada.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "liquidación",
          detail: "La fecha de liquidación del valor, la fecha posterior a la emisión en la que el valor se entrega al comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimiento",
          detail: "La fecha de vencimiento del valor, cuando puede canjearse a su valor nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tasa",
          detail: "La tasa de interés anualizada.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimiento",
          detail: "El rendimiento anual esperado del valor.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frecuencia",
          detail: "El número de pagos de intereses o cupones por año (1, 2 o 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convención_recuento_días",
          detail: "Un indicador del método de recuento de días que se usará.",
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
      d: "Convierte un número binario con signo a formato decimal.",
      a: "Convierte un número binario con signo a formato decimal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número_binario_con_signo",
          detail: "El valor binario con signo de 10 bits que se convertirá a decimal, proporcionado como una cadena.",
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
      d: "Convierte un número binario con signo a formato hexadecimal con signo.",
      a: "Convierte un número binario a hexadecimal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_binario_con_signo",
          detail: "El valor binario con signo de 10 bits que se convertirá a hexadecimal con signo, proporcionado como una cadena.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifras_significativas",
          detail: "El número de cifras significativas que deberá tener el resultado.",
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
      d: "Convierte un número binario con signo a formato octal con signo.",
      a: "Convierte un número binario a octal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_binario_con_signo",
          detail: "El valor binario con signo de 10 bits que se convertirá a octal con signo, proporcionado como una cadena.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifras_significativas",
          detail: "El número de cifras significativas que deberá tener el resultado.",
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
      d: "Convierte un número decimal a formato binario con signo.",
      a: "Convierte un número decimal a formato binario con signo.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_decimal",
          detail: "El valor decimal que se convertirá a binario con signo, proporcionado como una cadena.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cifras_significativas",
          detail: "El número de cifras significativas que deberá tener el resultado.",
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
      d: "Convierte un número decimal a formato hexadecimal con signo.",
      a: "Convierte un número decimal a hexadecimal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_decimal",
          detail: "El valor decimal que se convertirá a hexadecimal con signo, proporcionado como una cadena.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cifras_significativas",
          detail: "El número de cifras significativas que deberá tener el resultado.",
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
      d: "Convierte un número decimal a formato octal con signo.",
      a: "Convierte un número decimal a formato octal con signo.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_decimal",
          detail: "El valor decimal que se convertirá a octal con signo, proporcionado como una cadena.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cifras_significativas",
          detail: "El número de cifras significativas que deberá tener el resultado.",
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
      d: "Convierte un número hexadecimal con signo a formato binario con signo.",
      a: "Convierte un número hexadecimal a binario.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_hexadecimal_con_signo",
          detail: "El valor hexadecimal con signo de 40 bits que se convertirá a binario con signo, proporcionado como una cadena.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifras_significativas",
          detail: "El número de cifras significativas que deberá tener el resultado.",
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
      d: "Convierte un número hexadecimal con signo a formato decimal.",
      a: "Convierte un número hexadecimal a decimal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número_hexadecimal_con_signo",
          detail: "El valor hexadecimal con signo de 40 bits que se convertirá a decimal, proporcionado como una cadena.",
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
      d: "Convierte un número hexadecimal con signo a formato octal con signo.",
      a: "Convierte un número hexadecimal a octal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_hexadecimal_con_signo",
          detail: "El valor hexadecimal con signo de 40 bits que se convertirá a octal con signo, proporcionado como una cadena.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifras_significativas",
          detail: "El número de cifras significativas que deberá tener el resultado.",
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
      d: "Convierte un número octal con signo a formato binario con signo.",
      a: "Convierte un número octal a binario.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_octal_con_signo",
          detail: "El valor octal con signo de 30 bits que se convertirá a binario con signo, proporcionado como una cadena.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifras_significativas",
          detail: "El número de cifras significativas que deberá tener el resultado.",
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
      d: "Convierte un número octal con signo a formato decimal.",
      a: "Convierte un número octal con signo a formato decimal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número_octal_con_signo",
          detail: "El valor octal con signo de 30 bits que se convertirá a decimal, proporcionado como una cadena.",
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
      d: "Convierte un número octal con signo a formato hexadecimal con signo.",
      a: "Convierte un número octal a hexadecimal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_octal_con_signo",
          detail: "El valor octal con signo de 30 bits que se convertirá a hexadecimal con signo, proporcionado como una cadena.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cifras_significativas",
          detail: "El número de cifras significativas que deberá tener el resultado.",
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
      d: "Crea un número complejo a partir de los coeficientes real e imaginario dados.",
      a: "Crea un número complejo.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "parte_real",
          detail: "El coeficiente real.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "parte_imaginaria",
          detail: "El coeficiente imaginario.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sufijo",
          detail: "El sufijo del coeficiente imaginario; solo puede ser 'i' o 'j'. Si se omite, se usará 'i'.",
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
      d: "Devuelve el coeficiente real de un número complejo.",
      a: "El coeficiente real de un número complejo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número_complejo",
          detail: "El número complejo, en formato a+bi o a+bj.",
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
      d: "Devuelve el coeficiente imaginario de un número complejo.",
      a: "El coeficiente imaginario de un número complejo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número_complejo",
          detail: "El número complejo, en formato a+bi o a+bj.",
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
      d: "Devuelve el conjugado complejo de un número.",
      a: "El conjugado complejo de un número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número",
          detail: "El número complejo para el que se calculará el conjugado.",
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
      d: "Devuelve el valor absoluto (o módulo) de un número complejo.",
      a: "El valor absoluto de un número complejo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número",
          detail: "El número complejo cuyo valor absoluto se calculará.",
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
      d: "Compara dos valores numéricos y devuelve 1 si son iguales.",
      a: "Compara dos valores numéricos.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número1",
          detail: "El primer número que se comparará.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número2",
          detail: "El segundo número que se comparará.",
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
      d: "Devuelve la suma de una serie de números complejos.",
      a: "Suma de una serie de números complejos.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer número complejo o rango que se sumará.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Números complejos o rangos adicionales que se sumarán a `valor1`.",
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
      d: "Devuelve la diferencia entre dos números complejos.",
      a: "La diferencia entre dos números complejos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "primer_número",
          detail: "El número complejo del que se restará segundo_número.",
          example: "\"6+5i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "segundo_número",
          detail: "El número complejo que se restará de primer_número.",
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
      d: "Devuelve el resultado de multiplicar entre sí una serie de números complejos.",
      a: "Resultado de multiplicar entre sí una serie de números complejos.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "factor1",
          detail: "El primer número o rango que se usará para calcular el producto.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "factor2",
          detail: "Números complejos o rangos adicionales que se usarán para calcular el producto.",
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
      d: "Devuelve un número complejo dividido entre otro.",
      a: "Un número complejo dividido entre otro.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividendo",
          detail: "El número complejo que se dividirá.",
          example: "\"11+16i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "divisor",
          detail: "El número complejo por el que se dividirá.",
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
      d: "Devuelve lo contrario de un valor lógico: `NOT(TRUE)` devuelve `FALSO`; `NOT(FALSE)` devuelve `VERDADERO`.",
      a: "Devuelve lo contrario del valor lógico proporcionado.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "expresión_lógica",
          detail: "Una expresión o referencia a una celda que contenga una expresión que represente un valor lógico.",
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
      d: "Devuelve el valor lógico `VERDADERO`.",
      a: "Valor lógico `verdadero`.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FALSE",
      t: 10,
      d: "Devuelve el valor lógico `FALSO`.",
      a: "Valor lógico `falso`.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "AND",
      t: 10,
      d: "Devuelve verdadero si todos los argumentos proporcionados son lógicamente verdaderos, y falso si alguno de los argumentos proporcionados es lógicamente falso.",
      a: "Operador lógico «y».",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "expresión_lógica1",
          detail: "Una expresión o referencia a una celda que contenga una expresión que represente un valor lógico, es decir, `VERDADERO` o `FALSO`, o una expresión que pueda convertirse en un valor lógico.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expresión_lógica2",
          detail: "Más expresiones que representan valores lógicos.",
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
      d: "Devuelve el primer argumento si no es un valor de error; en caso contrario, devuelve el segundo argumento si está presente, o un valor en blanco si el segundo argumento está ausente.",
      a: "Valor si no es un error; en caso contrario, el segundo argumento.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se devolverá si `valor` no es un error.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_si_error",
          detail: "El valor que devuelve la función si `valor` es un error.",
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
      d: "Devuelve un valor si una expresión lógica es `VERDADERO` y otro si es `FALSO`.",
      a: "Devuelve un valor en función de una expresión lógica.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "expresión_lógica",
          detail: "Una expresión o referencia a una celda que contenga una expresión que represente un valor lógico, es decir, `VERDADERO` o `FALSO`.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_si_verdadero",
          detail: "El valor que devuelve la función si `expresión_lógica` es `VERDADERO`.",
          example: "\"A2 is foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_si_falso",
          detail: "El valor que devuelve la función si `expresión_lógica` es `FALSO`.",
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
      d: "Devuelve verdadero si alguno de los argumentos proporcionados es lógicamente verdadero, y falso si todos los argumentos proporcionados son lógicamente falsos.",
      a: "Operador lógico «o».",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "expresión_lógica1",
          detail: "Una expresión o referencia a una celda que contenga una expresión que represente un valor lógico, es decir, `VERDADERO` o `FALSO`, o una expresión que pueda convertirse en un valor lógico.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expresión_lógica2",
          detail: "Más expresiones que se evalúan como valores lógicos.",
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
      d: "Devuelve `VERDADERO` si dos valores especificados no son iguales, y `FALSO` en caso contrario. Equivale al operador `!=`.",
      a: "Distinto de.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "El valor que se comparará con `valor1` para comprobar la desigualdad.",
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
      d: "Devuelve `VERDADERO` si dos valores especificados son iguales, y `FALSO` en caso contrario. Equivale al operador `==`.",
      a: "Igual a.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer valor.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "El valor que se comparará con `valor1` para comprobar la igualdad.",
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
      d: "Devuelve `VERDADERO` si el primer argumento es estrictamente mayor que el segundo, y `FALSO` en caso contrario. Equivale al operador `>`.",
      a: "Estrictamente mayor que.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "El valor que se comprobará si es mayor que `valor2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "El segundo valor.",
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
      d: "Devuelve `VERDADERO` si el primer argumento es mayor o igual que el segundo, y `FALSO` en caso contrario. Equivale al operador `>=`.",
      a: "Mayor o igual que.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "El valor que se comprobará si es mayor o igual que `valor2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "El segundo valor.",
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
      d: "Devuelve `VERDADERO` si el primer argumento es estrictamente menor que el segundo, y `FALSO` en caso contrario. Equivale al operador `<`.",
      a: "Menor que.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "El valor que se comprobará si es menor que `valor2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "El segundo valor.",
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
      d: "Devuelve `VERDADERO` si el primer argumento es menor o igual que el segundo, y `FALSO` en caso contrario. Equivale al operador `<=`.",
      a: "Menor o igual que.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "El valor que se comprobará si es menor o igual que `valor2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "El segundo valor.",
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
      d: "Devuelve la suma de dos números. Equivale al operador `+`.",
      a: "Suma de dos números.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "El primer sumando.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "El segundo sumando.",
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
      d: "Devuelve la diferencia entre dos números. Equivale al operador `-`.",
      a: "Diferencia entre dos números.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "El minuendo, o número del que se restará.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "El sustraendo, o número que se restará de `valor1`.",
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
      d: "Devuelve el producto de dos números. Equivale al operador `*`.",
      a: "Producto de dos números.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "factor1",
          detail: "El primer factor.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "factor2",
          detail: "El segundo factor.",
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
      d: "Devuelve un número dividido entre otro. Equivale al operador `/`.",
      a: "Un número dividido entre otro.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividendo",
          detail: "El número que se dividirá.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "El número por el que se dividirá.",
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
      d: "Devuelve la concatenación de dos valores. Equivale al operador `&`.",
      a: "Concatenación de dos valores.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "El valor al que se añadirá `valor2`.",
          example: "\"de\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "El valor que se añadirá a `valor1`.",
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
      d: "Devuelve un valor interpretado como porcentaje; es decir, `UNARY_PERCENT(100)` es igual a `1`.",
      a: "Valor interpretado como porcentaje.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "porcentaje",
          detail: "El valor que se interpretará como porcentaje.",
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
      d: "Une varias cadenas de texto entre sí.",
      a: "Une varias cadenas de texto entre sí.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "cadena1",
          detail: "La cadena inicial.",
          example: "\"Super\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cadena2",
          detail: "Más cadenas que se añadirán en orden.",
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
      d: "Devuelve el valor numérico Unicode del primer carácter de la cadena proporcionada.",
      a: "Valor numérico Unicode de un carácter.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "cadena",
          detail: "La cadena cuyo primer carácter se usará para devolver su valor Unicode.",
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
      d: "Convierte un número en un carácter según la tabla Unicode actual.",
      a: "Obtiene el carácter asociado a un número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número_tabla",
          detail: "El número del carácter que se buscará en la tabla Unicode actual, en formato decimal.",
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
      d: "Calcula el valor de un número romano.",
      a: "Calcula el valor de un número romano.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número_romano",
          detail: "El número romano que se convertirá, cuyo valor debe estar entre 1 y 3999, ambos inclusive.",
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
      d: "Da formato a un número en números romanos.",
      a: "Da formato a un número en números romanos.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número",
          detail: "El número al que se dará formato, entre 1 y 3999, ambos inclusive.",
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
      d: "Extrae subcadenas que coincidan con una expresión regular.",
      a: "Extrae subcadenas que coinciden con una expresión regular.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "texto",
          detail: "El texto de entrada.",
          example: "\"Needle in a haystack\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expresión_regular",
          detail: "La primera parte de `texto` que coincida con esta expresión se devolverá.",
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
      d: "Indica si un fragmento de texto coincide con una expresión regular.",
      a: "Indica si un fragmento de texto coincide con una expresión regular.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "texto",
          detail: "El texto que se comparará con la expresión regular.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expresión_regular",
          detail: "La expresión regular con la que se comparará el texto.",
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
      d: "Reemplaza parte de una cadena de texto por otra cadena de texto usando expresiones regulares.",
      a: "Reemplaza texto mediante expresiones regulares.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "texto",
          detail: "El texto, una parte del cual se reemplazará.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expresión_regular",
          detail: "La expresión regular. Se reemplazarán todas las instancias coincidentes en `texto`.",
          example: "\"S.*d\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "reemplazo",
          detail: "El texto que se insertará en el texto original.",
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
      d: "Devuelve los argumentos de cadena como texto, o una cadena vacía si el valor no es texto.",
      a: "Argumentos de cadena como texto.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El argumento que se convertirá a texto.",
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
      d: "Da formato a un número con un número fijo de decimales.",
      a: "Da formato a un número con un número fijo de decimales.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "número",
          detail: "El número al que se dará formato.",
          example: "3.141592653",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_decimales",
          detail: "El número de decimales que se mostrarán en el resultado.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "suprimir_separador",
          detail: "Si se debe suprimir o no el separador de miles usado en algunas configuraciones regionales (por ejemplo, `1.000` pasa a ser `1000`). Los separadores estarán presentes si este valor es 0 o se omite, y ausentes en caso contrario.",
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
      d: "Devuelve la posición en la que se encuentra por primera vez una cadena dentro de un texto, teniendo en cuenta las mayúsculas y minúsculas. Devuelve `#VALUE!` si no se encuentra la cadena.",
      a: "Primera posición de una cadena encontrada en un texto, distinguiendo mayúsculas y minúsculas.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "buscar",
          detail: "La cadena que se buscará dentro de `texto_a_buscar`.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texto_a_buscar",
          detail: "El texto en el que se buscará la primera aparición de `buscar`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partir_de",
          detail: "El carácter de `texto_a_buscar` a partir del cual comenzará la búsqueda.",
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
      d: "Devuelve la posición en la que se encuentra por primera vez una cadena dentro de un texto, contando cada carácter de doble byte como 2.",
      a: "Posición en la que se encuentra por primera vez una cadena dentro de un texto (binario).",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "buscar",
          detail: "La cadena que se buscará dentro de `texto_a_buscar`.",
          example: "\"new\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texto_a_buscar",
          detail: "El texto en el que se buscará la primera aparición de `buscar`.",
          example: "\"new year\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partir_de",
          detail: "El carácter de `texto_a_buscar` a partir del cual comenzará la búsqueda.",
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
      d: "Concatena los elementos de una o varias matrices unidimensionales usando un delimitador especificado.",
      a: "Concatena elementos de matrices con un delimitador.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "delimitador",
          detail: "El carácter o cadena que se colocará entre cada valor concatenado.",
          example: "\" and-a \"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_o_matriz1",
          detail: "El valor o los valores que se añadirán usando `delimitador`.",
          example: "{1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_o_matriz2",
          detail: "Más valores que se añadirán usando `delimitador`.",
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
      d: "Devuelve una subcadena a partir del comienzo de una cadena especificada.",
      a: "Subcadena a partir del comienzo de una cadena especificada.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "cadena",
          detail: "La cadena de la que se devolverá la parte izquierda.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_caracteres",
          detail: "El número de caracteres que se devolverán desde el lado izquierdo de `cadena`.",
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
      d: "Devuelve una subcadena a partir del final de una cadena especificada.",
      a: "Subcadena a partir del final de una cadena especificada.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "cadena",
          detail: "La cadena de la que se devolverá la parte derecha.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_caracteres",
          detail: "El número de caracteres que se devolverán desde el lado derecho de `cadena`.",
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
      d: "Devuelve un segmento de una cadena.",
      a: "Un segmento de una cadena.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "cadena",
          detail: "La cadena de la que se extraerá un segmento.",
          example: "\"get this\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partir_de",
          detail: "El índice, desde la izquierda de `cadena`, a partir del cual se comenzará a extraer. El primer carácter de `cadena` tiene el índice 1.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "longitud_extracción",
          detail: "La longitud del segmento que se extraerá.",
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
      d: "Devuelve la longitud de una cadena.",
      a: "Longitud de una cadena.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto",
          detail: "La cadena cuya longitud se devolverá.",
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
      d: "Devuelve la longitud de una cadena en bytes.",
      a: "Longitud de una cadena en bytes.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto",
          detail: "La cadena cuya longitud se devolverá.",
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
      d: "Convierte una cadena especificada a minúsculas.",
      a: "Convierte una cadena especificada a minúsculas.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto",
          detail: "La cadena que se convertirá a minúsculas.",
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
      d: "Convierte una cadena especificada a mayúsculas.",
      a: "Convierte una cadena especificada a mayúsculas.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto",
          detail: "La cadena que se convertirá a mayúsculas.",
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
      d: "Comprueba si dos cadenas son idénticas.",
      a: "Comprueba si dos cadenas son idénticas.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "cadena1",
          detail: "La primera cadena que se comparará.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "cadena2",
          detail: "La segunda cadena que se comparará.",
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
      d: "Reemplaza parte de una cadena de texto por otra cadena de texto distinta.",
      a: "Reemplaza parte de una cadena de texto por otro texto.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "texto",
          detail: "El texto, una parte del cual se reemplazará.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "posición",
          detail: "La posición en la que comenzará el reemplazo (empezando por 1).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "longitud",
          detail: "El número de caracteres del texto que se reemplazarán.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nuevo_texto",
          detail: "El texto que se insertará en el texto original.",
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
      d: "Devuelve un texto especificado repetido un número de veces.",
      a: "Texto especificado repetido un número de veces.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "texto_a_repetir",
          detail: "El carácter o cadena que se repetirá.",
          example: "\"ha\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_repeticiones",
          detail: "El número de veces que `texto_a_repetir` debe aparecer en el valor devuelto.",
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
      d: "Devuelve la posición en la que se encuentra por primera vez una cadena dentro de un texto, sin tener en cuenta las mayúsculas y minúsculas. Devuelve `#VALUE!` si no se encuentra la cadena.",
      a: "Primera posición de una cadena encontrada en un texto, sin distinguir mayúsculas y minúsculas.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "buscar",
          detail: "La cadena que se buscará dentro de `texto_a_buscar`.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texto_a_buscar",
          detail: "El texto en el que se buscará la primera aparición de `buscar`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partir_de",
          detail: "El carácter de `texto_a_buscar` a partir del cual comenzará la búsqueda.",
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
      d: "Reemplaza texto existente por texto nuevo en una cadena.",
      a: "Reemplaza texto existente por texto nuevo en una cadena.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "texto_a_buscar",
          detail: "El texto en el que se buscará y reemplazará.",
          example: "\"search for it\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "buscar",
          detail: "La cadena que se buscará dentro de `texto_a_buscar`.",
          example: "\"search for\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "reemplazar_con",
          detail: "La cadena que reemplazará a `buscar`.",
          example: "\"Google\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_aparición",
          detail: "La instancia de `buscar` dentro de `texto_a_buscar` que se reemplazará por `reemplazar_con`. De forma predeterminada, se reemplazan todas las apariciones de `buscar`; sin embargo, si se especifica `número_de_aparición`, solo se reemplaza la instancia indicada de `buscar`.",
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
      d: "Devuelve el texto sin los caracteres ASCII no imprimibles.",
      a: "Elimina los caracteres no imprimibles de un texto.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto",
          detail: "El texto cuyos caracteres no imprimibles se eliminarán.",
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
      d: "Convierte un número en texto según un formato especificado.",
      a: "Da formato a un número convirtiéndolo en texto.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "número",
          detail: "El número, fecha u hora al que se dará formato.",
          example: "1.23",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "formato",
          detail: "El patrón según el cual se dará formato al número, entre comillas.",
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
      d: "Elimina los espacios al principio, al final y repetidos en un texto.",
      a: "Elimina caracteres de espacio.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto",
          detail: "El texto, o referencia a una celda que contenga texto, que se recortará.",
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
      d: "Convierte en número una cadena expresada en cualquiera de los formatos de fecha, hora o número que Hojas de cálculo de Google reconoce.",
      a: "Convierte una cadena de fecha/hora/número en un número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto",
          detail: "La cadena que contiene el valor que se convertirá.",
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
      d: "Pone en mayúscula la primera letra de cada palabra de una cadena especificada.",
      a: "Pone en mayúscula la primera letra de cada palabra de una cadena especificada.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto_a_capitalizar",
          detail: "El texto que se devolverá con la primera letra de cada palabra en mayúscula y el resto de letras en minúscula.",
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
      d: "Convierte un valor numérico a una unidad de medida distinta.",
      a: "Conversión de unidades para números.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "valor",
          detail: "El valor numérico en `unidad_inicio` que se convertirá a `unidad_fin`.",
          example: "5.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unidad_inicio",
          detail: "La unidad de origen, la unidad actualmente asignada a `valor`.",
          example: "\"g\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "unidad_fin",
          detail: "La unidad de medida a la que se convertirá el argumento `valor`.",
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
      d: "Calcula la suma de las diferencias de los cuadrados de los valores de dos matrices.",
      a: "Suma de las diferencias de cuadrados.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matriz_x",
          detail: "La matriz o rango de valores cuyos cuadrados se reducirán con los cuadrados de las entradas correspondientes de `matriz_y` y se sumarán.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matriz_y",
          detail: "La matriz o rango de valores cuyos cuadrados se restarán de los cuadrados de las entradas correspondientes de `matriz_x` y se sumarán.",
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
      d: "Calcula la suma de las sumas de los cuadrados de los valores de dos matrices.",
      a: "Suma de las sumas de cuadrados.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matriz_x",
          detail: "La matriz o rango de valores cuyos cuadrados se sumarán a los cuadrados de las entradas correspondientes de `matriz_y`.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matriz_y",
          detail: "La matriz o rango de valores cuyos cuadrados se sumarán a los cuadrados de las entradas correspondientes de `matriz_x`.",
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
      d: "Calcula la suma de los cuadrados de las diferencias de los valores de dos matrices.",
      a: "Suma de los cuadrados de las diferencias.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matriz_x",
          detail: "La matriz o rango de valores a los que se restarán las entradas correspondientes de `matriz_y`, se elevará el resultado al cuadrado y se sumará.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matriz_y",
          detail: "La matriz o rango de valores que se restarán de las entradas correspondientes de `matriz_x`, elevando el resultado al cuadrado y sumando todos esos resultados.",
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
      d: "Transpone las filas y columnas de una matriz o rango de celdas.",
      a: "Transpone las filas y columnas de una matriz.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "matriz_o_rango",
          detail: "La matriz o rango cuyas filas y columnas se intercambiarán.",
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
      d: "Dados datos parciales sobre una tendencia lineal, ajusta una tendencia lineal ideal mediante el método de mínimos cuadrados o predice valores adicionales.",
      a: "Ajusta puntos a una tendencia lineal obtenida por mínimos cuadrados.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "datos_y_conocidos",
          detail: "La matriz o rango que contiene los valores dependientes (y) ya conocidos, usados para ajustar una tendencia lineal ideal.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos_x_conocidos",
          detail: "Los valores de la o las variables independientes correspondientes a `datos_y_conocidos`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nuevos_datos_x",
          detail: "Los puntos de datos para los que se devolverán los valores `y` en el ajuste de curva ideal.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Dada una forma lineal general `y = m*x+b` para un ajuste de curva, calcula `b` si es `TRUE`, o fuerza `b` a `0` y solo calcula los valores `m` si es `FALSE`, es decir, obliga al ajuste de curva a pasar por el origen.",
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
      d: "Calcula la distribución de frecuencias de una matriz de una sola columna en clases especificadas.",
      a: "Distribución de frecuencias de una matriz.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "datos",
          detail: "La matriz o rango que contiene los valores que se contarán.",
          example: "A2:A40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "clases",
          detail: "La matriz o rango que contiene el conjunto de clases.",
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
      d: "Dados datos parciales sobre una tendencia de crecimiento exponencial, ajusta una tendencia de crecimiento exponencial ideal o predice valores adicionales.",
      a: "Ajusta puntos a una tendencia de crecimiento exponencial.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "datos_y_conocidos",
          detail: "La matriz o rango que contiene los valores dependientes (y) ya conocidos, usados para ajustar una curva de crecimiento exponencial ideal.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos_x_conocidos",
          detail: "Los valores de la o las variables independientes correspondientes a `datos_y_conocidos`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "nuevos_datos_x",
          detail: "Los puntos de datos para los que se devolverán los valores `y` en el ajuste de curva ideal.",
          example: "A11:A13",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Dada una forma exponencial general `y = b*m^x` para un ajuste de curva, calcula `b` si es `TRUE`, o fuerza `b` a `1` y solo calcula los valores `m` si es `FALSE`.",
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
      d: "Dados datos parciales sobre una tendencia lineal, calcula varios parámetros de la tendencia lineal ideal mediante el método de mínimos cuadrados.",
      a: "Tendencia lineal de mejor ajuste mediante mínimos cuadrados.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "datos_y_conocidos",
          detail: "La matriz o rango que contiene los valores dependientes (y) ya conocidos, usados para ajustar una tendencia lineal ideal.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos_x_conocidos",
          detail: "Los valores de la o las variables independientes correspondientes a `datos_y_conocidos`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "calcular_b",
          detail: "Dada una forma lineal `y = m*x+b`, calcula la ordenada en el origen (`b`) si es `TRUE`. En caso contrario, fuerza `b` a `0` y solo calcula los valores `m` si es `FALSE`, es decir, obliga al ajuste de curva a pasar por el origen.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "detallado",
          detail: "Un indicador que especifica si se devolverán estadísticas de regresión adicionales o solo los coeficientes lineales y la ordenada en el origen (opción predeterminada).",
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
      d: "Dados datos parciales sobre una curva de crecimiento exponencial, calcula varios parámetros de la curva de crecimiento exponencial ideal de mejor ajuste.",
      a: "Curva de crecimiento exponencial de mejor ajuste.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "datos_y_conocidos",
          detail: "La matriz o rango que contiene los valores dependientes (y) ya conocidos, usados para ajustar una curva de crecimiento exponencial ideal.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "datos_x_conocidos",
          detail: "Los valores de la o las variables independientes correspondientes a `datos_y_conocidos`.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "b",
          detail: "Dada una forma exponencial general `y = b*m^x` para un ajuste de curva, calcula `b` si es `TRUE`, o fuerza `b` a `1` y solo calcula los valores `m` si es `FALSE`.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "detallado",
          detail: "Un indicador que especifica si se devolverán estadísticas de regresión adicionales o solo el coeficiente y los exponentes calculados.",
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
      d: "Devuelve el determinante de una matriz cuadrada especificada como matriz o rango.",
      a: "Determinante de una matriz cuadrada.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "matriz_cuadrada",
          detail: "Una matriz o rango con el mismo número de filas que de columnas que representa una matriz cuyo determinante se calculará.",
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
      d: "Devuelve la matriz inversa multiplicativa de una matriz cuadrada especificada como matriz o rango.",
      a: "Inversa multiplicativa de una matriz cuadrada.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "matriz_cuadrada",
          detail: "Una matriz o rango con el mismo número de filas que de columnas que representa una matriz cuya inversa multiplicativa se calculará.",
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
      d: "Calcula el producto matricial de dos matrices especificadas como matrices o rangos.",
      a: "Producto matricial de dos matrices.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "matriz1",
          detail: "La primera matriz de la operación de multiplicación de matrices, representada como matriz o rango.",
          example: "A1:B3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matriz2",
          detail: "La segunda matriz de la operación de multiplicación de matrices, representada como matriz o rango.",
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
      d: "Calcula la suma de los productos de las entradas correspondientes en dos matrices o rangos del mismo tamaño.",
      a: "Suma de los productos de los elementos de dos matrices.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "matriz1",
          detail: "La primera matriz o rango cuyas entradas se multiplicarán por las entradas correspondientes de la segunda matriz o rango.",
          example: "A2:C5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matriz2",
          detail: "La segunda matriz o rango cuyas entradas se multiplicarán por las entradas correspondientes de la primera matriz o rango.",
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
      d: "Comprueba si un valor es una fórmula.",
      a: "Indica si un valor es una fórmula.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "celda",
          detail: "La celda que se comprobará para verificar si contiene una fórmula.",
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
      d: "Devuelve la información solicitada sobre la celda especificada.",
      a: "Obtiene información sobre una celda.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "tipo_información",
          detail: "El tipo de información solicitada (consulta el artículo para ver los tipos disponibles).",
          example: "\"type\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "referencia",
          detail: "La referencia a la celda.",
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
      d: "Devuelve el error \"valor no disponible\", `#N/A`.",
      a: "El error `#N/A`.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "ERROR_TYPE",
      t: 15,
      d: "Devuelve un número correspondiente al valor de error de otra celda.",
      a: "Valor de error de una celda (como número).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "referencia",
          detail: "La celda de la que se obtendrá el número de error, aunque también se puede proporcionar directamente el valor de error.",
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
      d: "Comprueba si la celda referenciada está vacía.",
      a: "Indica si la celda referenciada está vacía.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "Referencia a la celda que se comprobará para verificar si está vacía.",
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
      d: "Comprueba si un valor es un error distinto de `#N/A`.",
      a: "Indica si un valor es un error distinto de `#N/A`.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se comprobará como un tipo de error distinto de `#N/A`.",
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
      d: "Comprueba si un valor es un error.",
      a: "Indica si un valor es un error.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se comprobará como un tipo de error.",
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
      d: "Comprueba si un valor es `VERDADERO` o `FALSO`.",
      a: "Indica si un valor es `verdadero` o `falso`.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se comprobará como lógico `VERDADERO` o `FALSO`.",
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
      d: "Comprueba si un valor es el error `#N/A`.",
      a: "Indica si un valor es el error `#N/A`.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se comparará con el valor de error `#N/A`.",
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
      d: "Comprueba si un valor no es de tipo texto.",
      a: "Indica si un valor no es de tipo texto.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se comprobará.",
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
      d: "Comprueba si un valor es un número.",
      a: "Indica si un valor es un número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se comprobará como número.",
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
      d: "Comprueba si un valor es una referencia de celda válida.",
      a: "Indica si un valor es una referencia de celda válida.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se comprobará como referencia de celda.",
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
      d: "Comprueba si un valor es texto.",
      a: "Indica si un valor es texto.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor que se comprobará como texto.",
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
      d: "Devuelve un número asociado al tipo de datos pasado a la función.",
      a: "Obtiene el tipo de un valor.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El valor cuyo tipo se determinará.",
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
      d: "Devuelve el argumento proporcionado como número. El texto se convierte en 0 y los errores se devuelven tal cual.",
      a: "Argumento proporcionado como número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El argumento que se convertirá en número.",
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
      d: "Convierte un número proporcionado en una fecha.",
      a: "Convierte un número proporcionado en una fecha.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El argumento, o referencia a una celda, que se convertirá en fecha.",
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
      d: "Convierte una fecha/hora, porcentaje, moneda u otro valor numérico con formato proporcionado en un número puro sin formato.",
      a: "Convierte cualquier valor numérico en un número puro.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El argumento, o referencia a una celda, que se convertirá en un número puro.",
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
      d: "Convierte un valor numérico proporcionado en un valor de texto.",
      a: "Convierte un valor numérico proporcionado en un valor de texto.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El argumento, o referencia a una celda, que se convertirá en texto.",
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
      d: "Convierte un número proporcionado en un valor en dólares.",
      a: "Convierte un número proporcionado en un valor en dólares.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El argumento, o referencia a una celda, que se convertirá en un valor en dólares.",
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
      d: "Convierte un número proporcionado en un porcentaje.",
      a: "Convierte un número proporcionado en un porcentaje.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "El argumento, o referencia a una celda, que se convertirá en porcentaje.",
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
      d: "Devuelve un único valor de una matriz o rango con estructura de base de datos, usando una consulta similar a SQL.",
      a: "Un único valor de un rango con estructura de tabla.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_datos",
          detail: "La matriz o rango que contiene los datos que se tendrán en cuenta, estructurada de tal forma que la primera fila contenga las etiquetas de los valores de cada columna.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Indica qué columna de `base_de_datos` contiene los valores que se extraerán y sobre los que se operará.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterios",
          detail: "Una matriz o rango que contiene cero o más criterios con los que filtrar los valores de `base_de_datos` antes de operar.",
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
      d: "Devuelve el valor máximo seleccionado de una matriz o rango con estructura de base de datos, usando una consulta similar a SQL.",
      a: "Máximo de los valores de un rango con estructura de tabla.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_datos",
          detail: "La matriz o rango que contiene los datos que se tendrán en cuenta, estructurada de tal forma que la primera fila contenga las etiquetas de los valores de cada columna.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Indica qué columna de `base_de_datos` contiene los valores que se extraerán y sobre los que se operará.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterios",
          detail: "Una matriz o rango que contiene cero o más criterios con los que filtrar los valores de `base_de_datos` antes de operar.",
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
      d: "Devuelve el valor mínimo seleccionado de una matriz o rango con estructura de base de datos, usando una consulta similar a SQL.",
      a: "Mínimo de los valores de un rango con estructura de tabla.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_datos",
          detail: "La matriz o rango que contiene los datos que se tendrán en cuenta, estructurada de tal forma que la primera fila contenga las etiquetas de los valores de cada columna.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Indica qué columna de `base_de_datos` contiene los valores que se extraerán y sobre los que se operará.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterios",
          detail: "Una matriz o rango que contiene cero o más criterios con los que filtrar los valores de `base_de_datos` antes de operar.",
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
      d: "Devuelve el promedio de un conjunto de valores seleccionados de una matriz o rango con estructura de base de datos, usando una consulta similar a SQL.",
      a: "Promedio de un conjunto de valores de un rango con estructura de tabla.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_datos",
          detail: "La matriz o rango que contiene los datos que se tendrán en cuenta, estructurada de tal forma que la primera fila contenga las etiquetas de los valores de cada columna.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Indica qué columna de `base_de_datos` contiene los valores que se extraerán y sobre los que se operará.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterios",
          detail: "Una matriz o rango que contiene cero o más criterios con los que filtrar los valores de `base_de_datos` antes de operar.",
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
      d: "Cuenta los valores numéricos seleccionados de una matriz o rango con estructura de base de datos, usando una consulta similar a SQL.",
      a: "Cuenta los valores de un rango con estructura de tabla.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_datos",
          detail: "La matriz o rango que contiene los datos que se tendrán en cuenta, estructurada de tal forma que la primera fila contenga las etiquetas de los valores de cada columna.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Indica qué columna de `base_de_datos` contiene los valores que se extraerán y sobre los que se operará.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterios",
          detail: "Una matriz o rango que contiene cero o más criterios con los que filtrar los valores de `base_de_datos` antes de operar.",
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
      d: "Cuenta los valores, incluido el texto, seleccionados de una matriz o rango con estructura de base de datos, usando una consulta similar a SQL.",
      a: "Cuenta valores y texto de un rango con estructura de tabla.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_datos",
          detail: "La matriz o rango que contiene los datos que se tendrán en cuenta, estructurada de tal forma que la primera fila contenga las etiquetas de los valores de cada columna.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Indica qué columna de `base_de_datos` contiene los valores que se extraerán y sobre los que se operará.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterios",
          detail: "Una matriz o rango que contiene cero o más criterios con los que filtrar los valores de `base_de_datos` antes de operar.",
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
      d: "Devuelve el producto de los valores seleccionados de una matriz o rango con estructura de base de datos, usando una consulta similar a SQL.",
      a: "Producto de los valores de un rango con estructura de tabla.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_datos",
          detail: "La matriz o rango que contiene los datos que se tendrán en cuenta, estructurada de tal forma que la primera fila contenga las etiquetas de los valores de cada columna.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Indica qué columna de `base_de_datos` contiene los valores que se extraerán y sobre los que se operará.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterios",
          detail: "Una matriz o rango que contiene cero o más criterios con los que filtrar los valores de `base_de_datos` antes de operar.",
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
      d: "Devuelve la desviación estándar de una muestra de población seleccionada de una matriz o rango con estructura de base de datos, usando una consulta similar a SQL.",
      a: "Desviación estándar de una muestra de población de una tabla.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_datos",
          detail: "La matriz o rango que contiene los datos que se tendrán en cuenta, estructurada de tal forma que la primera fila contenga las etiquetas de los valores de cada columna.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Indica qué columna de `base_de_datos` contiene los valores que se extraerán y sobre los que se operará.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterios",
          detail: "Una matriz o rango que contiene cero o más criterios con los que filtrar los valores de `base_de_datos` antes de operar.",
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
      d: "Devuelve la desviación estándar de una población completa seleccionada de una matriz o rango con estructura de base de datos, usando una consulta similar a SQL.",
      a: "Desviación estándar de una población completa de una tabla.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_datos",
          detail: "La matriz o rango que contiene los datos que se tendrán en cuenta, estructurada de tal forma que la primera fila contenga las etiquetas de los valores de cada columna.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Indica qué columna de `base_de_datos` contiene los valores que se extraerán y sobre los que se operará.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterios",
          detail: "Una matriz o rango que contiene cero o más criterios con los que filtrar los valores de `base_de_datos` antes de operar.",
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
      d: "Devuelve la suma de los valores seleccionados de una matriz o rango con estructura de base de datos, usando una consulta similar a SQL.",
      a: "Suma de los valores de un rango con estructura de tabla.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_datos",
          detail: "La matriz o rango que contiene los datos que se tendrán en cuenta, estructurada de tal forma que la primera fila contenga las etiquetas de los valores de cada columna.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Indica qué columna de `base_de_datos` contiene los valores que se extraerán y sobre los que se operará.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterios",
          detail: "Una matriz o rango que contiene cero o más criterios con los que filtrar los valores de `base_de_datos` antes de operar.",
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
      d: "Devuelve la varianza de una muestra de población seleccionada de una matriz o rango con estructura de base de datos, usando una consulta similar a SQL.",
      a: "Varianza de una muestra de población de un rango con estructura de tabla.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_datos",
          detail: "La matriz o rango que contiene los datos que se tendrán en cuenta, estructurada de tal forma que la primera fila contenga las etiquetas de los valores de cada columna.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Indica qué columna de `base_de_datos` contiene los valores que se extraerán y sobre los que se operará.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterios",
          detail: "Una matriz o rango que contiene cero o más criterios con los que filtrar los valores de `base_de_datos` antes de operar.",
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
      d: "Devuelve la varianza de una población completa seleccionada de una matriz o rango con estructura de base de datos, usando una consulta similar a SQL.",
      a: "Varianza de una población de un rango con estructura de tabla.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "base_de_datos",
          detail: "La matriz o rango que contiene los datos que se tendrán en cuenta, estructurada de tal forma que la primera fila contenga las etiquetas de los valores de cada columna.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Indica qué columna de `base_de_datos` contiene los valores que se extraerán y sobre los que se operará.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "criterios",
          detail: "Una matriz o rango que contiene cero o más criterios con los que filtrar los valores de `base_de_datos` antes de operar.",
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
      d: "Calcula la edad a partir del número de identificación chino. Admite 15 o 18 dígitos.",
      a: "Obtiene la edad a partir del número de identificación.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Número de identificación",
          example: "A1",
          detail: "Número o rango de identificación de 15 o 18 dígitos.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Fecha límite",
          example: "\"2017-10-01\"",
          detail: "La fecha límite o rango para el cálculo de la edad. El valor predeterminado es el día actual.",
          require: "o",
          repeat: "n",
          type: "rangedatetime"
        }
      ]
    },
    {
      n: "SEX_BY_IDCARD",
      t: "3",
      d: "Calcula el sexo a partir del número de identificación chino. Admite 15 o 18 dígitos.",
      a: "Obtiene el sexo a partir del número de identificación.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Número de identificación",
          example: "\"31033519900101XXXX\"",
          detail: "Número o rango de identificación de 15 o 18 dígitos.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BIRTHDAY_BY_IDCARD",
      t: "3",
      d: "Calcula la fecha de nacimiento a partir del número de identificación chino. Admite 15 o 18 dígitos.",
      a: "Obtiene la fecha de nacimiento a partir del número de identificación.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Número de identificación",
          example: "\"31033519900101XXXX\"",
          detail: "Número o rango de identificación de 15 o 18 dígitos.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Formato de fecha de nacimiento",
          example: "0",
          detail: "Tipo de fecha; por defecto: 0:[1900/01/01], 1:[1900-01-01], 2:[1 de enero de 1900].",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PROVINCE_BY_IDCARD",
      t: "3",
      d: "Calcula la provincia de nacimiento a partir del número de identificación chino. Admite 15 o 18 dígitos.",
      a: "Obtiene la provincia de nacimiento a partir del número de identificación.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Número de identificación",
          example: "\"31033519900101XXXX\"",
          detail: "Número o rango de identificación de 15 o 18 dígitos.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "CITY_BY_IDCARD",
      t: "3",
      d: "Calcula la ciudad de nacimiento a partir del número de identificación chino. Admite 15 o 18 dígitos.",
      a: "Obtiene la ciudad de nacimiento a partir del número de identificación.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Número de identificación",
          example: "\"31033519900101XXXX\"",
          detail: "Número o rango de identificación de 15 o 18 dígitos.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STAR_BY_IDCARD",
      t: "3",
      d: "Calcula el signo zodiacal a partir del número de identificación chino. Admite 15 o 18 dígitos.",
      a: "Obtiene el signo zodiacal a partir del número de identificación.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Número de identificación",
          example: "\"31033519900101XXXX\"",
          detail: "Número o rango de identificación de 15 o 18 dígitos.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ANIMAL_BY_IDCARD",
      t: "3",
      d: "Calcula el animal del zodiaco chino (rata, buey, tigre, conejo...) a partir del número de identificación chino. Admite 15 o 18 dígitos.",
      a: "Obtiene el animal del zodiaco a partir del número de identificación.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Número de identificación",
          example: "\"31033519900101XXXX\"",
          detail: "Número o rango de identificación de 15 o 18 dígitos.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "ISIDCARD",
      t: "3",
      d: "Comprueba que el formato del número de identificación es correcto. Admite 15 o 18 dígitos.",
      a: "Comprueba la corrección del formato del número de identificación.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "Número de identificación",
          example: "\"31033519900101XXXX\"",
          detail: "Número o rango de identificación de 15 o 18 dígitos.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DM_TEXT_CUTWORD",
      t: "4",
      d: "Segmentación de texto. Divide una serie de palabras en una serie de palabras individuales.",
      a: "Segmentación de texto en chino.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "Texto",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Cualquier texto que requiera segmentación de palabras.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Modo de segmentación de palabras",
          example: "0",
          detail: "El valor predeterminado es 0 [modo de precisión], 1 [modo completo], 2 [modo motor de búsqueda].",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DM_TEXT_TFIDF",
      t: "4",
      d: "Usa el algoritmo TF-IDF para la extracción de palabras clave. Identifica palabras clave a partir de un texto.",
      a: "Reconocimiento de palabras clave mediante TF-IDF.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Texto",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Cualquier texto que requiera segmentación de palabras.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Número de palabras clave",
          example: "20",
          detail: "El número de palabras clave devueltas por el algoritmo; el valor predeterminado es 20.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "Corpus",
          example: "1",
          detail: "Selecciona un corpus de un ámbito específico; el valor predeterminado es 0 [General], 1 [Finanzas], 2 [Medicina].",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DM_TEXT_TEXTRANK",
      t: "4",
      d: "Usa el algoritmo TextRank para extraer palabras clave. Identifica palabras clave a partir de un texto.",
      a: "Reconocimiento de palabras clave mediante TextRank.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Texto",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Cualquier texto que requiera segmentación de palabras.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Número de palabras clave",
          example: "20",
          detail: "El número de palabras clave devueltas por el algoritmo; el valor predeterminado es 20.",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "Corpus",
          example: "1",
          detail: "Selecciona un corpus de un ámbito específico; el valor predeterminado es 0 [General], 1 [Finanzas], 2 [Medicina].",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_CLOSE",
      t: "5",
      d: "Según el código bursátil y la fecha, devuelve el precio de cierre correspondiente de las acciones A.",
      a: "Devuelve el precio de cierre de una acción.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Código bursátil",
          example: "\"000001\"",
          detail: "Código bursátil de 6 dígitos, obligatorio.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Fecha",
          example: "2015-01-08",
          detail: "El día de negociación de la acción; el valor predeterminado es el último día de negociación.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo de restitución de derechos",
          example: "0",
          detail: "Selecciona el tipo de restitución de derechos de la acción; por defecto 0 [restitución anterior], 1 [precio original], 2 [restitución posterior].",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_OPEN",
      t: "5",
      d: "Según el código bursátil y la fecha, devuelve el precio de apertura de la acción.",
      a: "Devuelve el precio de apertura de una acción A.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Código bursátil",
          example: "\"000001\"",
          detail: "Código bursátil de 6 dígitos, obligatorio.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Fecha",
          example: "2015-01-08",
          detail: "El día de negociación de la acción; el valor predeterminado es el último día de negociación.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo de restitución de derechos",
          example: "0",
          detail: "Selecciona el tipo de restitución de derechos de la acción; por defecto 0 [restitución anterior], 1 [precio original], 2 [restitución posterior].",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_MAX",
      t: "5",
      d: "Según el código bursátil y la fecha, devuelve el precio más alto de la acción.",
      a: "Devuelve el precio más alto de una acción.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Código bursátil",
          example: "\"000001\"",
          detail: "Código bursátil de 6 dígitos, obligatorio.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Fecha",
          example: "2015-01-08",
          detail: "El día de negociación de la acción; el valor predeterminado es el último día de negociación.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo de restitución de derechos",
          example: "0",
          detail: "Selecciona el tipo de restitución de derechos de la acción; por defecto 0 [restitución anterior], 1 [precio original], 2 [restitución posterior].",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_MIN",
      t: "5",
      d: "Según el código bursátil y la fecha, devuelve el precio más bajo de la acción.",
      a: "Devuelve el precio más bajo de una acción.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Código bursátil",
          example: "\"000001\"",
          detail: "Código bursátil de 6 dígitos, obligatorio.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Fecha",
          example: "2015-01-08",
          detail: "El día de negociación de la acción; el valor predeterminado es el último día de negociación.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo de restitución de derechos",
          example: "0",
          detail: "Selecciona el tipo de restitución de derechos de la acción; por defecto 0 [restitución anterior], 1 [precio original], 2 [restitución posterior].",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_VOLUMN",
      t: "5",
      d: "Según el código bursátil y la fecha, devuelve el volumen de negociación correspondiente de las acciones A.",
      a: "Devuelve el volumen de negociación correspondiente de las acciones A.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Código bursátil",
          example: "\"000001\"",
          detail: "Código bursátil de 6 dígitos, obligatorio.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Fecha",
          example: "2015-01-08",
          detail: "El día de negociación de la acción; el valor predeterminado es el último día de negociación.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo de restitución de derechos",
          example: "0",
          detail: "Selecciona el tipo de restitución de derechos de la acción; por defecto 0 [restitución anterior], 1 [precio original], 2 [restitución posterior].",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "DATA_CN_STOCK_AMOUNT",
      t: "5",
      d: "Según el código bursátil y la fecha, devuelve el importe negociado correspondiente de las acciones A.",
      a: "Devuelve el importe negociado correspondiente de las acciones A.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "Código bursátil",
          example: "\"000001\"",
          detail: "Código bursátil de 6 dígitos, obligatorio.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Fecha",
          example: "2015-01-08",
          detail: "El día de negociación de la acción; el valor predeterminado es el último día de negociación.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo de restitución de derechos",
          example: "0",
          detail: "Selecciona el tipo de restitución de derechos de la acción; por defecto 0 [restitución anterior], 1 [precio original], 2 [restitución posterior].",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        }
      ]
    },
    {
      n: "ISDATE",
      t: "6",
      d: "Comprueba si un valor es una fecha.",
      a: "Indica si un valor es una fecha.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          example: "\"1990-01-01\"",
          detail: "El valor que se comprobará como fecha.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "LINESPLINES",
      t: "3",
      d: "Genera un minigráfico integrado en la celda para describir la tendencia continua de los datos.",
      a: "Genera un minigráfico de líneas.",
      m: [
        1,
        8
      ],
      p: [
        {
          name: "Rango",
          example: "A1:A20",
          detail: "Rango. Los valores pueden calcularse de forma efectiva, como A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color de la línea",
          example: "#2ec7c9",
          detail: "El color de la línea del gráfico puede ser el rango A1, el valor de índice de la tabla de colores o un valor de color específico. Se establece en 0 o false para no mostrarlo. Admite regx, rgb, rgba, etc. Por defecto #2ec7c9.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Grosor de línea",
          example: "1",
          detail: "Grosor de la línea del gráfico; por defecto 1px.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Línea auxiliar",
          example: "avg",
          detail: "Una línea horizontal que puede ser mín, máx, promedio, mediana, rango o un valor personalizado; por defecto 0, ninguna.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color de la línea auxiliar",
          example: "#000",
          detail: "Configuración del color de la línea auxiliar, igual que la configuración del color de línea; por defecto #000.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Marca máxima",
          example: "#fc5c5c",
          detail: "Marca el valor máximo del gráfico de líneas, misma configuración de color de línea; por defecto 0, no se muestra.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Marca mínima",
          example: "#fc5c5c",
          detail: "Marca el valor mínimo del gráfico de líneas, misma configuración de color de línea; por defecto 0, no se muestra.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Tamaño de la marca",
          example: "1.5",
          detail: "Configuración del tamaño de las marcas máxima y mínima; por defecto 1,5.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "AREASPLINES",
      t: "3",
      d: "Genera un gráfico de área en miniatura integrado en la celda, generalmente usado para describir la tendencia de valores acumulados continuos de los datos.",
      a: "Genera un minigráfico de área.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Rango",
          example: "A1:A20",
          detail: "Rango. Los valores pueden calcularse de forma efectiva, como A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color de la línea",
          example: "#2ec7c9",
          detail: "El color de la línea del gráfico puede ser el rango A1, el valor de índice de la tabla de colores o un valor de color específico. Se establece en 0 o false para no mostrarlo. Admite regx, rgb, rgba, etc. Por defecto #2ec7c9.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color de relleno",
          example: "#CCF3F4",
          detail: "Forma un gráfico de área, misma configuración de color de línea; por defecto 0, no se muestra.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Grosor de línea",
          example: "1",
          detail: "Grosor de la línea del gráfico; por defecto 1px.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Línea auxiliar",
          example: "avg",
          detail: "Una línea horizontal que puede ser mín, máx, promedio, mediana, rango o un valor personalizado; por defecto 0, ninguna.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color de la línea auxiliar",
          example: "#000",
          detail: "Configuración del color de la línea auxiliar, igual que la configuración del color de línea; por defecto #000.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COLUMNSPLINES",
      t: "3",
      d: "Genera un histograma vertical en miniatura integrado en la celda, generalmente usado para describir la magnitud de datos discretos.",
      a: "Genera un histograma vertical en miniatura.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Rango",
          example: "A1:A20",
          detail: "Rango. Los valores pueden calcularse de forma efectiva, como A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalo de barras",
          example: "1",
          detail: "La distancia entre barras; por defecto 1.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color de la barra",
          example: "#fc5c5c",
          detail: "El color de la línea del gráfico puede ser el rango A1, el valor de índice de la tabla de colores o un valor de color específico. Se establece en 0 o false para no mostrarlo. Admite regx, rgb, rgba, etc. Por defecto #fc5c5c.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color de barras negativas",
          example: "#97b552",
          detail: "Configuración del color de las barras negativas, representando el color de los valores negativos, igual que la configuración de color de barra; por defecto #97b552.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Máximo",
          example: "100",
          detail: "El valor máximo del gráfico de barras, usado para estandarizar la longitud del gráfico de barras; por defecto se calcula automáticamente (false, auto, null).",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Paleta de colores",
          example: "#97b552",
          detail: "La paleta de colores permite establecer el color de cada barra individualmente; se admiten varias configuraciones y dos formatos: 1 color, como #000, que indica que la primera barra es negra; 2 rango de valores: color, como -2:#000 indica que la barra con valor -2 es negra, 0:5:#000 indica que las barras con valores entre 0 y 5 son negras; por defecto vacío.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STACKCOLUMNSPLINES",
      t: "3",
      d: "Genera un histograma vertical acumulado en miniatura integrado en la celda, generalmente usado para describir la magnitud de varias dimensiones de datos discretos.",
      a: "Genera un histograma vertical acumulado en miniatura.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Rango",
          example: "A1:A20",
          detail: "Rango. Los valores pueden calcularse de forma efectiva, como A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Apilar por columna",
          example: "1",
          detail: "Si necesitas apilar por fila, establece este valor en false o 0; por defecto 1.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalo de barras",
          example: "1",
          detail: "La distancia entre barras; por defecto 1.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Máximo",
          example: "100",
          detail: "El valor máximo de la barra acumulada, usado para regular la longitud de la barra; por defecto se calcula automáticamente (false, auto, null).",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Paleta de colores",
          example: "#97b552",
          detail: "La paleta de colores permite establecer individualmente el color de barra de cada dimensión; puede establecerse como el rango A1:A10, etc. Por defecto #2ec7c9, #fc5c5c, #5ab1ef, #ffb980...",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BARSPLINES",
      t: "3",
      d: "Genera un gráfico de barras horizontal en miniatura integrado en la celda, generalmente usado para describir la magnitud de datos discretos.",
      a: "Genera un gráfico de barras horizontal en miniatura.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Rango",
          example: "A1:A20",
          detail: "Rango. Los valores pueden calcularse de forma efectiva, como A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalo de barras",
          example: "1",
          detail: "La distancia entre barras; por defecto 1.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color de la barra",
          example: "#fc5c5c",
          detail: "El color de la línea del gráfico puede ser el rango A1, el valor de índice de la tabla de colores o un valor de color específico. Se establece en 0 o false para no mostrarlo. Admite regx, rgb, rgba, etc. Por defecto #fc5c5c.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color de barras negativas",
          example: "#97b552",
          detail: "Configuración del color de las barras negativas, representando el color de los valores negativos, igual que la configuración de color de barra; por defecto #97b552.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Máximo",
          example: "100",
          detail: "El valor máximo del gráfico de barras, usado para estandarizar la longitud del gráfico de barras; por defecto se calcula automáticamente (false, auto, null).",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Paleta de colores",
          example: "#97b552",
          detail: "La paleta de colores permite establecer el color de cada barra individualmente; se admiten varias configuraciones y dos formatos: 1 color, como #000, que indica que la primera barra es negra; 2 rango de valores: color, como -2:#000 indica que la barra con valor -2 es negra, 0:5:#000 indica que las barras con valores entre 0 y 5 son negras; por defecto vacío.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "STACKBARSPLINES",
      t: "3",
      d: "Genera un gráfico de barras horizontal acumulado en miniatura integrado en la celda, generalmente usado para describir la magnitud de varias dimensiones de datos discretos.",
      a: "Genera un gráfico de barras horizontal acumulado en miniatura.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Rango",
          example: "A1:A20",
          detail: "Rango. Los valores pueden calcularse de forma efectiva, como A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Apilar por columna",
          example: "1",
          detail: "Si necesitas apilar por fila, establece este valor en false o 0; por defecto 1.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalo de barras",
          example: "1",
          detail: "La distancia entre barras; por defecto 1.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Máximo",
          example: "100",
          detail: "El valor máximo de la barra acumulada, usado para regular la longitud de la barra; por defecto se calcula automáticamente (false, auto, null).",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Paleta de colores",
          example: "#97b552",
          detail: "La paleta de colores permite establecer individualmente el color de barra de cada dimensión; puede establecerse como el rango A1:A10, etc. Por defecto #2ec7c9, #fc5c5c, #5ab1ef, #ffb980...",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "DISCRETESPLINES",
      t: "3",
      d: "Genera un gráfico discreto en miniatura integrado en la celda, generalmente usado para describir la tendencia de datos discretos.",
      a: "Genera un gráfico discreto en miniatura.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "Rango",
          example: "A1:A20",
          detail: "Rango. Los valores pueden calcularse de forma efectiva, como A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Umbral de segmentación",
          example: "1",
          detail: "Distinción de color de las columnas del gráfico discreto; por ejemplo: si el valor es 0, azul indica mayor que 0, rojo indica menor que 0; por defecto 0.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color por encima del umbral",
          example: "#2ec7c9",
          detail: "El color de la línea del gráfico puede ser el rango A1, el valor de índice de la tabla de colores o un valor de color específico. Se establece en 0 o false para no mostrarlo. Admite regx, rgb, rgba, etc. Por defecto #2ec7c9.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color por debajo del umbral",
          example: "#fc5c5c",
          detail: "Configuración del color de la barra por debajo del umbral, igual que el color por encima del umbral; por defecto #fc5c5c.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "TRISTATESPLINES",
      t: "3",
      d: "Genera un gráfico de tres estados en miniatura integrado en la celda, generalmente usado para describir la tendencia de tres situaciones, como ganar, perder o empatar.",
      a: "Genera un gráfico de tres estados en miniatura.",
      m: [
        1,
        6
      ],
      p: [
        {
          name: "Rango",
          example: "A1:A20",
          detail: "Rango. Los valores pueden calcularse de forma efectiva, como A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalo de barras",
          example: "1",
          detail: "La distancia entre barras; por defecto 1.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color de la barra",
          example: "#fc5c5c",
          detail: "El color de la línea del gráfico puede ser el rango A1, el valor de índice de la tabla de colores o un valor de color específico. Se establece en 0 o false para no mostrarlo. Admite regx, rgb, rgba, etc. Por defecto #fc5c5c.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color de barras negativas",
          example: "#97b552",
          detail: "Configuración del color de las barras negativas, representando el color de los valores negativos, igual que la configuración de color de barra; por defecto #97b552.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color de barras de valor cero",
          example: "#999",
          detail: "Configuración del color de la barra de valor cero, representando el color del valor 0, misma configuración de color de barra; por defecto #999.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Paleta de colores",
          example: "#97b552",
          detail: "La paleta de colores permite establecer el color de cada barra individualmente; se admiten varias configuraciones y dos formatos: 1 color, como #000, que indica que la primera barra es negra; 2 rango de valores: color, como -2:#000 indica que la barra con valor -2 es negra, 0:5:#000 indica que las barras con valores entre 0 y 5 son negras; por defecto vacío.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "PIESPLINES",
      t: "3",
      d: "Genera un gráfico circular en miniatura integrado en la celda, generalmente usado para describir la proporción de los datos.",
      a: "Genera un gráfico circular en miniatura.",
      m: [
        1,
        5
      ],
      p: [
        {
          name: "Rango",
          example: "A1:A20",
          detail: "Rango. Los valores pueden calcularse de forma efectiva, como A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Ángulo de rotación",
          example: "0",
          detail: "El ángulo de rotación del gráfico circular; por defecto 0.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "borde",
          example: "0",
          detail: "Tamaño del borde del gráfico circular; por defecto ninguno (0).",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Color del borde",
          example: "#000",
          detail: "El color del borde del gráfico circular; por defecto #000.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Paleta de colores",
          example: "#97b552",
          detail: "El color de cada sector puede establecerse en la paleta; puede definirse como el rango A1:A10, etc. Por defecto #2ec7c9, #fc5c5c, #5ab1ef, #ffb980...",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BOXSPLINES",
      t: "3",
      d: "Genera un diagrama de caja en miniatura integrado en la celda, generalmente usado para describir la distribución estadística del conjunto de datos.",
      a: "Genera un diagrama de caja en miniatura.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "Rango",
          example: "A1:A20",
          detail: "Rango. Los valores pueden calcularse de forma efectiva, como A1:A20, {1,2,3,4,5}, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Coeficiente de valores atípicos",
          example: "1.5",
          detail: "El rango umbral de los valores atípicos; si es 0 o false, no se mostrará; por defecto 1,5 veces.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Valor objetivo",
          example: "10",
          detail: "Configuración del valor objetivo en el diagrama de caja; por defecto false y no se muestra.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Tamaño de los puntos",
          example: "1.5",
          detail: "Se establece el radio del punto objetivo y de los valores atípicos; por defecto 1,5.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        }
      ]
    },
    {
      n: "BULLETSPLINES",
      t: "3",
      d: "Genera un gráfico de indicador en miniatura integrado en la celda, generalmente usado para describir la tasa de cumplimiento de una tarea.",
      a: "Genera un gráfico de indicador en miniatura.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "Objetivo",
          example: "10",
          detail: "El valor numérico puede calcularse de forma efectiva para el valor objetivo alcanzado, como A1, 100, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "logrado",
          example: "8",
          detail: "El valor solo puede calcularse de forma efectiva cuando se ha completado, como A1, 100, etc.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Valor de comparación",
          example: "12",
          detail: "Valores de comparación, como el excedente, el mínimo y el límite inferior para premios, pueden calcularse de forma efectiva, como A1, 100, etc. Se pueden establecer hasta 9 valores de comparación.",
          require: "o",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "COMPOSESPLINES",
      t: "3",
      d: "Admite varios tipos de imágenes en la misma celda; cada parámetro representa un minigráfico.",
      a: "Combina minigráficos en una sola celda.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "configuración",
          example: "PIESPLINES(A1:A20)",
          detail: "Configuración del gráfico de minigráficos, como A1:A20, un gráfico circular completo, configuración de gráfico de líneas, etc.",
          require: "m",
          repeat: "y",
          type: "rangeall"
        }
      ]
    },
    {
      n: "SORT",
      t: "14",
      d: "Ordena las filas de una matriz o rango dado según los valores de una o más columnas.",
      a: "Ordena las filas de un rango según la columna especificada.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "rango",
          detail: "Los datos que se ordenarán.",
          example: "A2:A17",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "columna_orden",
          detail: "El índice de la columna en `rango`, o un rango fuera de `rango` que contiene los valores según los que se ordenará.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "es_ascendente",
          detail: "`TRUE` o `FALSE` que indica si `columna_tri` se ordenará en orden ascendente. `FALSE` ordena en orden descendente.",
          example: "-1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "columna_orden2",
          detail: "Columnas adicionales.",
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
      d: "Devuelve una versión filtrada del rango de origen, mostrando solo las filas o columnas que cumplen las condiciones especificadas.",
      a: "Filtra un rango según las condiciones proporcionadas.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "rango",
          detail: "Los datos que se filtrarán.",
          example: "A5:D20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "condición1",
          detail: "Una columna o fila que contiene valores verdadero o falso correspondientes a la primera columna o fila de `rango`, o una fórmula matricial que se evalúa como verdadero o falso.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "condición2",
          detail: "Filas o columnas adicionales que contienen valores booleanos `TRUE` o `FALSE`, indicando si la fila o columna correspondiente de `rango` debe pasar el filtro. También pueden contener expresiones de fórmula matricial que se evalúen como dichas filas o columnas. Todas las condiciones deben ser del mismo tipo (fila o columna). No se permite mezclar condiciones de fila y de columna.",
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
      d: "Devuelve las filas únicas del rango de origen proporcionado, descartando los duplicados. Las filas se devuelven en el orden en que aparecen por primera vez en el rango de origen.",
      a: "Filas únicas del rango de origen proporcionado.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "rango",
          detail: "[Opcional] - Los datos que se filtrarán por entradas únicas.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "por_columna",
          detail: "[Opcional] - Valor lógico que indica cómo comparar; por fila = FALSE() u omitido; por columna = TRUE().",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "una_sola_vez",
          detail: "[Opcional] - Valor lógico; solo se devuelve una aparición del valor único = TRUE(); se incluyen todos los valores únicos = FALSE() u omitido.",
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
      d: "Devuelve una cuadrícula de números aleatorios entre 0 (inclusive) y 1 (exclusive). El tamaño de la cuadrícula coincidirá con los argumentos de filas y columnas proporcionados. Si no se proporcionan ni filas ni columnas, la cuadrícula será de tamaño 1x1.",
      a: "Devuelve una cuadrícula de números aleatorios.",
      m: [
        0,
        2
      ],
      p: [
        {
          name: "filas",
          detail: "El número de filas que se rellenarán con un número aleatorio.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "columnas",
          detail: "El número de columnas que se rellenarán con un número aleatorio.",
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
      d: "Devuelve una cuadrícula de números secuenciales que comienza en un valor de inicio especificado y aumenta según un tamaño de paso especificado. De forma predeterminada, la secuencia comienza en 1 y aumenta de 1 en 1.",
      a: "Devuelve una cuadrícula de números secuenciales.",
      m: [
        1,
        4
      ],
      p: [
        {
          name: "filas",
          detail: "El número de filas en la cuadrícula resultante de la función.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "columnas",
          detail: "El número de columnas en la cuadrícula resultante de la función. Si se omite, la cuadrícula resultante tendrá 1 columna.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "inicio",
          detail: "El número en el que comenzará la secuencia. Si se omite, la secuencia comenzará en 1.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "paso",
          detail: "La cantidad en la que se diferenciará cada valor de la secuencia. Si se omite, cada valor se diferenciará en 1.",
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
      d: "Evalúa una fórmula o expresión escrita en palabras y devuelve el resultado.",
      a: "Evalúa según una fórmula o expresión literal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "expresión",
          example: "\"A1+5*2^2\"",
          detail: "Fórmula o expresión.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        }
      ]
    }
  ],
  toolbar: {  "clear-format": "Borrar formato",
  "format-painter": "Copiar formato",
  "currency-format": "Formato de moneda",
  "percentage-format": "Formato de porcentaje",
  "number-decrease": "Reducir decimales",
  "number-increase": "Aumentar decimales",
  "border-all": "Todos los bordes",
  "merge-all": "Combinar todas las celdas",
  "strike-through": "Tachado (Alt+Shift+5)",
  "align-left": "Alineado a la izquierda",
  "align-center": "Centrado horizontal",
  "align-right": "Alineado a la derecha",
  "align-top": "Alineado arriba",
  "align-mid": "Centrado vertical",
  "align-bottom": "Alineado abajo",
  "sortAndFilter": "Ordenar y filtrar",
  "insertLink": "Insertar enlace",

    toolbar: "Barra de herramientas",
    undo: "Deshacer",
    redo: "Rehacer",
    paintFormat: "Clonar formato",
    currencyFormat: "Formato de moneda",
    percentageFormat: "Formato de porcentaje",
    numberDecrease: "Menos decimales",
    numberIncrease: "Más decimales",
    moreFormats: "Más formatos",
    format: "Formato",
    font: "Fuente",
    "font-size": "Tamaño Fuente",
    bold: "Negrita (Ctrl+B)",
    italic: "Itálica (Ctrl+I)",
    strikethrough: "Tachar (Alt+Shift+5)",
    underline: "Guion bajo",
    "font-color": "Color texto",
    chooseColor: "elegir color",
    resetColor: "Reinicializar",
    customColor: "PERSONALIZADO",
    alternatingColors: "Colores alternos",
    confirmColor: "Vale",
    cancelColor: "Cancelar",
    collapse: "Recoger",
    background: "Color de relleno",
    border: "Borde",
    borderStyle: "Estilo Borde",
    "merge-cell": "Juntar celdas",
    chooseMergeType: "Elegir tipo de unión",
    horizontalAlign: "Alineación Horizontal",
    verticalAlign: "Alineación Vertical",
    alignment: "Alineación",
    textWrap: "Ajuste de texto",
    textWrapMode: "Modo de ajuste de texto",
    textRotate: "Rotar texto",
    textRotateMode: "Modo de rotar texto",
    freeze: "Fijar fila superior",
    sort: "Ordenar",
    filter: "Filtrar",
    findAndReplace: "Buscar y reemplazar",
    "formula-sum": "SUMA",
    autoSum: "SUMA automática",
    moreFunction: "Más funciones",
    conditionalFormat: "Formato condicional",
    comment: "Comentario",
    pivotTable: "Tabla Dinámica",
    chart: "Gráfica",
    screenshot: "Captura de pantalla",
    splitColumn: "Separar texto",
    insertImage: "Insertar imagen",
    dataVerification: "Verificación de datos",
    protection: "Proteger la hoja",
    clearText: "Limpiar color",
    noColorSelectedText: "Ningún color seleccionado",
    toolMore: "Más",
    toolLess: "Menos",
    toolClose: "Cerrar",
    toolMoreTip: "Más funcionalidades",
    moreOptions: "Más opciones",
    cellFormat: "Configuración formato de celda",
    print: "Imprimir"
  },
  alternatingColors: {
    applyRange: "Aplicar a rango",
    selectRange: "Seleccionar un rango de datos",
    header: "Cabecera",
    footer: "Pie",
    errorInfo: "No se puede realizar esta operación en varias áreas de selección, selecciona una sola área y vuelve a intentarlo",
    textTitle: "Estilo Formato",
    custom: "PERSONALIZADO",
    close: "cerrar",
    selectionTextColor: "Haz clic para seleccionar el color del texto",
    selectionCellColor: "Haz clic para seleccionar el color de la celda",
    removeColor: "Eliminar colores alternos",
    colorShow: "color",
    currentColor: "Actual",
    tipSelectRange: "Selecciona la gama de colores alternos",
    errorNoRange: "No hay ningún rango seleccionado",
    errorExistColors: "Los colores alternos ya existen y no se pueden editar"
  },
  button: {
    confirm: "Vale",
    cancel: "Cancelar",
    close: "Cerrar",
    update: "Actualizar",
    delete: "Eliminar",
    insert: "Insertar",
    prevPage: "Previous",
    nextPage: "Next",
    total: "total:"
  },
  paint: {
    start: "Inicio clonar formato",
    end: "ESC",
    tipSelectRange: "Selecciona el rango que quieres copiar",
    tipNotMulti: "No se puede realizar esta operación en un rango de selección múltiple"
  },
  format: {  "tipDecimalPlaces": "¡Los decimales deben estar entre 0 y 9!",
  "select": "Seleccionar",
  "format": "formato",
  "currency": "moneda",

    moreCurrency: "Más formatos de moneda",
    moreDateTime: "Más formatos de fecha y hora",
    moreNumber: "Más formatos de número",
    titleCurrency: "Formatos de moneda",
    decimalPlaces: "Decimales",
    titleDateTime: "Formatos de fecha y hora",
    titleNumber: "Formatos de números"
  },
  info: {
    detailUpdate: "Nuevo abierto",
    detailSave: "Cache local restaurado",
    row: "",
    column: "",
    loading: "Cargando...",
    copy: "Copiar",
    return: "Salir",
    rename: "Renombrar",
    tips: "Renombrar Libro",
    noName: "Hoja sin título",
    wait: "esperando actualización",
    add: "Añadir",
    addLast: "más filas al final",
    backTop: "Volver arriba",
    pageInfo: "Total ${total}，página ${totalPage}，actual ${currentPage}",
    nextPage: "Siguiente",
    tipInputNumber: "Introduce el número",
    tipInputNumberLimit: "El rango de aumento está limitado a 1-100",
    tipRowHeightLimit: "La altura de la fila debe estar entre 0 ~ 545",
    tipColumnWidthLimit: "El ancho de la columna debe estar entre 0 ~ 2038",
    pageInfoFull: "Total ${total}，página ${totalPage}，Se muestran todos los datos",
    sheetIsFocused: "Bloqueo de enfoque de hoja habilitado.",
    sheetNotFocused: "Bloqueo de enfoque de hoja desactivado.",
    sheetSrIntro: "Para alternar el foco de la hoja para ayudar con la barra de herramientas y otra navegación que no sea de hoja, use Mayús, Control, F.",
    currentCellInput: "Entrada de celda actual",
    newSheet: "Nueva hoja",
    sheetOptions: "Opciones de hoja",
    Dropdown: "Menú desplegable",
    zoomIn: "Dar un golpe de zoom",
    zoomOut: "alejar",
    toggleSheetFocusShortcut: "Alternar bloqueo de enfoque de hoja: Shift, Control, F.",
    selectRangeShortcut: "Seleccionar rango: Shift, teclas de flecha.",
    autoFillDownShortcut: "Autocompletar selección hacia abajo desde la primera celda: Control o Meta, D.",
    autoFillRightShortcut: "Autocompletar selección hacia la derecha desde la primera celda: Control o Meta, R.",
    boldTextShortcut: "Texto en negrita: Control o Meta, B.",
    copyShortcut: "Copiar: Control o Meta, C.",
    pasteShortcut: "Pegar: Control o Meta, V.",
    undoShortcut: "Deshacer: Control o Meta, Z.",
    redoShortcut: "Rehacer: Control o Meta, Shift, Z.",
    deleteCellContentShortcut: "Eliminar contenido de celda: Delete o Backspace.",
    confirmCellEditShortcut: "Confirmar edición de celda y mover hacia abajo: Enter.",
    moveRightShortcut: "Mover a la derecha: Tab.",
    moveLeftShortcut: "Mover a la izquierda: Shift, Tab.",
    shortcuts: "Atajos de teclado"
  },
  currencyDetail: {
    RMB: "RMB",
    USdollar: "Dólar US",
    EUR: "EUR",
    GBP: "GBP",
    HK: "HK",
    JPY: "JPY",
    AlbanianLek: "Albanian Lek",
    AlgerianDinar: "Algerian Dinar",
    Afghani: "Afghani",
    ArgentinePeso: "Argentine Peso",
    UnitedArabEmiratesDirham: "United Arab Emirates Dirham",
    ArubanFlorin: "Aruban Florin",
    OmaniRial: "Omani Rial",
    Azerbaijanimanat: "Azerbaijani manat",
    EgyptianPound: "Egyptian Pound",
    EthiopianBirr: "Ethiopian Birr",
    AngolaKwanza: "Angola Kwanza",
    AustralianDollar: "Australian Dollar",
    Patacas: "Patacas",
    BarbadosDollar: "Barbados Dollar",
    PapuaNewGuineaKina: "Papua New Guinea Kina",
    BahamianDollar: "Bahamian Dollar",
    PakistanRupee: "Pakistan Rupee",
    ParaguayanGuarani: "Paraguayan Guarani",
    BahrainiDinar: "Bahraini Dinar",
    PanamanianBalboa: "Panamanian Balboa",
    Brazilianreal: "Brazilian real",
    Belarusianruble: "Belarusian ruble",
    BermudianDollar: "Bermudian Dollar",
    BulgarianLev: "Bulgarian Lev",
    IcelandKrona: "Iceland Krona",
    BosniaHerzegovinaConvertibleMark: "Bosnia-Herzegovina Convertible Mark",
    PolishZloty: "Polish Zloty",
    Boliviano: "Boliviano",
    BelizeDollar: "Belize Dollar",
    BotswanaPula: "Botswana Pula",
    NotDannuzhamu: "Not Dannuzhamu",
    BurundiFranc: "Burundi Franc",
    NorthKoreanWon: "North Korean Won",
    DanishKrone: "Danish Krone",
    EastCaribbeanDollar: "East Caribbean Dollar",
    DominicaPeso: "Dominica Peso",
    RussianRuble: "Russian Ruble",
    EritreanNakfa: "Eritrean Nakfa",
    CFAfranc: "CFA franc",
    PhilippinePeso: "Philippine Peso",
    FijiDollar: "Fiji Dollar",
    CapeVerdeEscudo: "Cape Verde Escudo",
    FalklandIslandsPound: "Falkland Islands Pound",
    GambianDalasi: "Gambian Dalasi",
    Congolesefranc: "Congolese franc",
    ColombianPeso: "Colombian Peso",
    CostaRicanColon: "Costa Rican Colon",
    CubanPeso: "Cuban Peso",
    Cubanconvertiblepeso: "Cuban convertible peso",
    GuyanaDollar: "Guyana Dollar",
    KazakhstanTenge: "Kazakhstan Tenge",
    Haitiangourde: "Haitian gourde",
    won: "won",
    NetherlandsAntillesGuilder: "Netherlands Antilles Guilder",
    Honduraslempiras: "Honduras lempiras",
    DjiboutiFranc: "Djibouti Franc",
    KyrgyzstanSom: "Kyrgyzstan Som",
    GuineaFranc: "Guinea Franc",
    CanadianDollar: "Canadian Dollar",
    GhanaianCedi: "Ghanaian Cedi",
    Cambodianriel: "Cambodian riel",
    CzechKoruna: "Czech Koruna",
    ZimbabweDollar: "Zimbabwe Dollar",
    QatariRiyal: "Qatari Riyal",
    CaymanIslandsDollar: "Cayman Islands Dollar",
    Comorianfranc: "Comorian franc",
    KuwaitiDinar: "Kuwaiti Dinar",
    CroatianKuna: "Croatian Kuna",
    KenyanShilling: "Kenyan Shilling",
    LesothoLoti: "Lesotho Loti",
    LaoKip: "Lao Kip",
    LebanesePound: "Lebanese Pound",
    Lithuanianlitas: "Lithuanian litas",
    LibyanDinar: "Libyan Dinar",
    LiberianDollar: "Liberian Dollar",
    RwandaFranc: "Rwanda Franc",
    RomanianLeu: "Romanian Leu",
    MalagasyAriary: "Malagasy Ariary",
    MaldivianRufiyaa: "Maldivian Rufiyaa",
    MalawiKwacha: "Malawi Kwacha",
    MalaysianRinggit: "Malaysian Ringgit",
    MacedoniawearingDinar: "Macedonia wearing Dinar",
    MauritiusRupee: "Mauritius Rupee",
    MauritanianOuguiya: "Mauritanian Ouguiya",
    MongolianTugrik: "Mongolian Tugrik",
    BangladeshiTaka: "Bangladeshi Taka",
    PeruvianNuevoSol: "Peruvian Nuevo Sol",
    MyanmarKyat: "Myanmar Kyat",
    MoldovanLeu: "Moldovan Leu",
    MoroccanDirham: "Moroccan Dirham",
    MozambiqueMetical: "Mozambique Metical",
    MexicanPeso: "Mexican Peso",
    NamibianDollar: "Namibian Dollar",
    SouthAfricanRand: "South African Rand",
    SouthSudanesePound: "South Sudanese Pound",
    NicaraguaCordoba: "Nicaragua Cordoba",
    NepaleseRupee: "Nepalese Rupee",
    NigerianNaira: "Nigerian Naira",
    NorwegianKrone: "Norwegian Krone",
    GeorgianLari: "Georgian Lari",
    RMBOffshore: "RMB (Offshore)",
    SwedishKrona: "Swedish Krona",
    SwissFranc: "Swiss Franc",
    SerbianDinar: "Serbian Dinar",
    SierraLeone: "Sierra Leone",
    SeychellesRupee: "Seychelles Rupee",
    SaudiRiyal: "Saudi Riyal",
    SaoTomeDobra: "Sao Tome Dobra",
    SaintHelenapound: "Saint Helena pound",
    SriLankaRupee: "Sri Lanka Rupee",
    SwazilandLilangeni: "Swaziland Lilangeni",
    SudanesePound: "Sudanese Pound",
    Surinamesedollar: "Surinamese dollar",
    SolomonIslandsDollar: "Solomon Islands Dollar",
    SomaliShilling: "Somali Shilling",
    TajikistanSomoni: "Tajikistan Somoni",
    PacificFranc: "Pacific Franc",
    ThaiBaht: "Thai Baht",
    TanzanianShilling: "Tanzanian Shilling",
    TonganPaanga: "Tongan Pa'anga",
    TrinidadandTobagoDollar: "Trinidad and Tobago Dollar",
    TunisianDinar: "Tunisian Dinar",
    TurkishLira: "Turkish Lira",
    VanuatuVatu: "Vanuatu Vatu",
    GuatemalanQuetzal: "Guatemalan Quetzal",
    CommissionBolivar: "Commission Bolivar",
    BruneiDollar: "Brunei Dollar",
    UgandanShilling: "Ugandan Shilling",
    UkrainianHryvnia: "Ukrainian Hryvnia",
    UruguayanPeso: "Uruguayan Peso",
    Uzbekistansom: "Uzbekistan som",
    WesternSamoaTala: "Western Samoa Tala",
    SingaporeDollar: "Singapore Dollar",
    NT: "NT",
    NewZealandDollar: "New Zealand Dollar",
    HungarianForint: "Hungarian Forint",
    SyrianPound: "Syrian Pound",
    JamaicanDollar: "Jamaican Dollar",
    ArmenianDram: "Armenian Dram",
    YemeniRial: "Yemeni Rial",
    IraqiDinar: "Iraqi Dinar",
    IranianRial: "Iranian Rial",
    NewIsraeliShekel: "New Israeli Shekel",
    IndianRupee: "Indian Rupee",
    IndonesianRupiah: "Indonesian Rupiah",
    JordanianDinar: "Jordanian Dinar",
    VND: "VND",
    ZambianKwacha: "Zambian Kwacha",
    GibraltarPound: "Gibraltar Pound",
    ChileanPeso: "Chilean Peso",
    CFAFrancBEAC: "CFA Franc BEAC"
  },
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
      text: "Texto",
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
      text: "Porcentaje",
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
      text: "Contabilidad",
      value: "".concat(currency, "(0.00)"),
      example: "".concat(currency, "(1200.09)")
    }, {
      text: "Moneda",
      value: "".concat(currency, "0.00"),
      example: "".concat(currency, "1200.09")
    }, {
      text: "",
      value: "split",
      example: ""
    }, {
      text: "Fecha",
      value: "yyyy-MM-dd",
      example: "2017-11-29"
    }, {
      text: "Hora",
      value: "hh:mm AM/PM",
      example: "3:00 PM"
    }, {
      text: "Hora 24H",
      value: "hh:mm",
      example: "15:00"
    }, {
      text: "Fecha Hora",
      value: "yyyy-MM-dd hh:mm AM/PM",
      example: "2017-11-29 3:00 PM"
    }, {
      text: "Fecha Hora 24 H",
      value: "yyyy-MM-dd hh:mm",
      example: "2017-11-29 15:00"
    }, {
      text: "",
      value: "split",
      example: ""
    }, {
      text: "Formatos personalizados",
      value: "fmtOtherSelf",
      example: "más"
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
  border: {  "borderDefault": "Predeterminado",
  "borderStyle": "Estilo de borde",

    borderTop: "borderTop",
    borderBottom: "borderBottom",
    borderLeft: "borderLeft",
    borderRight: "borderRight",
    borderNone: "borderNone",
    borderAll: "borderAll",
    borderOutside: "borderOutside",
    borderInside: "borderInside",
    borderHorizontal: "borderHorizontal",
    borderVertical: "borderVertical",
    borderColor: "borderColor",
    borderSize: "borderSize",
    borderSlash: "borderSlash"
  },
  merge: {
    mergeAll: "Unir todo",
    mergeV: "Verticalmente",
    mergeH: "Horizontalmente",
    mergeCancel: "Separar",
    overlappingError: "No se pueden fusionar áreas superpuestas",
    partiallyError: "No se puede realizar esta operación en celdas parcialmente unidas"
  },
  align: {
    left: "izquierda",
    center: "centro",
    right: "derecha",
    top: "Arriba",
    middle: "Centro",
    bottom: "Abajo"
  },
  textWrap: {
    overflow: "Desbordar",
    wrap: "Ajustar",
    clip: "Cortar"
  },
  rotation: {
    none: "Ninguno",
    angleup: "Ladear Arriba",
    angledown: "Ladear Abajo",
    vertical: "Apilar Verticalmente",
    rotationUp: "Rotar Arriba",
    rotationDown: "Rotar Abajo"
  },
  freezen: {
    default: "Fijar",
    freezenRow: "Primera Fila",
    freezenColumn: "Primera Columna",
    freezenRC: "Ambas",
    freezenRowRange: "Fijar rango filas",
    freezenColumnRange: "Fijar rango columnas",
    freezenRCRange: "Fijar ambos rangos",
    freezenCancel: "Cancelar",
    noSeletionError: "No hay rango para seleccionar",
    rangeRCOverErrorTitle: "Recordatorio de congelación",
    rangeRCOverError: "El panel de congelación excede el rango visible y puede causar que no funcione correctamente. Reinicie el área de congelación."
  },
  sort: {
    asc: "Ascendente ",
    desc: "Descendente ",
    custom: "Ordenación personalizada",
    hasTitle: "Los datos tienen una fila de encabezado",
    sortBy: "Ordenar por",
    addOthers: "Añadir otra columna de ordenación",
    close: "cerrar",
    confirm: "ordenar",
    columnOperation: "Columna",
    secondaryTitle: "y después por",
    sortTitle: "Ordenar rango",
    sortRangeTitle: "Ordenar rango de",
    sortRangeTitleTo: "a",
    noRangeError: "No se puede realizar esta operación en múltiples áreas de selección, selecciona un solo rango e intenta nuevamente",
    mergeError: "Hay celdas combinadas en la selección, ¡esta operación no se puede realizar!"
  },
  filter: {
    filter: "crear filtro",
    sortByAsc: "Ordenar A-Z",
    sortByDesc: "Ordenar Z-A",
    filterByColor: "Filtrar por color",
    filterByCondition: "Filtrar por condición",
    filterByValues: "Filtrar por valores",
    filiterInputNone: "Ninguno",
    filiterInputTip: "Introduce valor de filtro",
    filiterRangeStartTip: "Valor para fórmula",
    filiterRangeEndTip: "Valor para fórmula",
    filterValueByAllBtn: "Seleccionar todos",
    filterValueByClearBtn: "Limpiar",
    filterValueByInverseBtn: "Invertir",
    filterValueByTip: "filtrar por valores",
    filterConform: "Confirmar",
    filterCancel: "Cancelar",
    clearFilter: "Quitar filtro",
    conditionNone: "Ninguno",
    conditionCellIsNull: "Está vacío",
    conditionCellNotNull: "No está vacío",
    conditionCellTextContain: "El texto contiene",
    conditionCellTextNotContain: "El texto no contiene",
    conditionCellTextStart: "El texto empieza con",
    conditionCellTextEnd: "El texto termina con",
    conditionCellTextEqual: "El texto es exactamente",
    conditionCellDateEqual: "La fecha es",
    conditionCellDateBefore: "La fecha es anterior",
    conditionCellDateAfter: "La fecha es posterior",
    conditionCellGreater: "Mayor que",
    conditionCellGreaterEqual: "Mayor o igual que",
    conditionCellLess: "Menor que",
    conditionCellLessEqual: "Menor o igual que",
    conditionCellEqual: "Es igual a",
    conditionCellNotEqual: "No es igual a",
    conditionCellBetween: "Está entre",
    conditionCellNotBetween: "No está entre",
    filiterMoreDataTip: "¡Gran cantidad de datos! por favor espera",
    filiterMonthText: "Mes",
    filiterYearText: "Año",
    filiterByColorTip: "Filtrar por color de celda",
    filiterByTextColorTip: "Filtrar por color de fuente",
    filterContainerOneColorTip: "Esta columna contiene solo un color",
    filterDateFormatTip: "Format fecha",
    valueBlank: "(Nulo)",
    mergeError: "Hay celdas combinadas en la selección del filtro, ¡esta operación no se puede realizar!"
  },
  rightclick: {
    copy: "Copiar",
    copyAs: "Copiar como",
    paste: "Pegar",
    insert: "Insertar",
    image: "Insertar imágenes",
    link: "Insertar enlace",
    delete: "Eliminar",
    deleteCell: "Eliminar celda",
    deleteSelected: "Eliminar seleccionado ",
    hide: "Esconder",
    hideSelected: "Esconder seleccionado ",
    showHide: "Mostrar ocultos ",
    to: "Hacia",
    left: "Izquierda",
    right: "Derecha",
    top: "Arriba",
    bottom: "Abajo",
    moveLeft: "Mover izquierda",
    moveUp: "Mover arriba",
    add: "Añadir",
    row: "Fila",
    column: "Columna",
    width: "Ancho",
    height: "Alto",
    number: "Número",
    confirm: "Confirmar",
    orderAZ: "Ordenar A-Z",
    orderZA: "Ordenar Z-A",
    clearContent: "Limpiar contenido",
    matrix: "Operación de Matriz",
    sortSelection: "Ordenar",
    filterSelection: "Filtrar",
    chartGeneration: "Crear gráfico",
    firstLineTitle: "título primera línea",
    untitled: "sin título",
    array1: "Matriz unidimensional",
    array2: "Matriz bidimensional",
    array3: "Matrices multidimensionales",
    diagonal: "Diagonal",
    antiDiagonal: "Anti-diagonal",
    diagonalOffset: "Desplazamiento Diagonal",
    offset: "Desplazamiento",
    boolean: "Booleana",
    flip: "Voltear",
    upAndDown: "Arriba y abajo",
    leftAndRight: "Izquierda y derecha",
    clockwise: "Sentido horario",
    counterclockwise: "Sentido anti-horario",
    transpose: "Transponer",
    matrixCalculation: "Cálculo de matrices",
    plus: "Suma",
    minus: "Resta",
    multiply: "Multiplicación",
    divided: "División",
    power: "Exponenciación",
    root: "Raíz Cuadrada",
    log: "Logaritmo",
    delete0: "Eliminar valores nulos en ambos extremos",
    removeDuplicate: "Eliminar valores duplicados",
    byRow: "Por fila",
    byCol: "Por columna",
    generateNewMatrix: "Generar nueva matriz",
    noMulti: "No se puede realizar esta operación en varias áreas de selección, selecciona una sola área",
    cannotDeleteAllRow: "No se pueden eliminar todas las filas",
    cannotDeleteAllColumn: "No se pueden eliminar todas las columnas",
    cannotDeleteRowReadOnly: "No se puede eliminar la fila de solo lectura",
    cannotDeleteColumnReadOnly: "No se puede eliminar la columna de solo lectura",
    cannotInsertOnRowReadOnly: "No se puede insertar en una fila de solo lectura",
    cannotInsertOnColumnReadOnly: "No se puede insertar en la columna de solo lectura",
    rowOverLimit: "Límite de 10000 filas excedido",
    columnOverLimit: "Límite de 1000 columnas excedido"
  },
  comment: {
    insert: "Insertar",
    edit: "Editar",
    delete: "Elimiar",
    showOne: "Mostrar/Ocular",
    showAll: "Mostrar/Ocular Todo"
  },
  screenshot: {
    screenshotTipNoSelection: "Selecciona el alcance de la captura de pantalla",
    screenshotTipTitle: "¡Advertencia!",
    screenshotTipHasMerge: "Esta operación no se puede realizar en celdas combinadas",
    screenshotTipHasMulti: "Esta operación no se puede realizar en varios rangos de selección",
    screenshotTipSuccess: "Exitoso",
    screenshotImageName: "Captura de pantalla",
    downLoadClose: "Cerrar",
    downLoadCopy: "Copiar al portapapeles",
    downLoadBtn: "Descargar",
    browserNotTip: "no es compatible con el navegador IE.",
    rightclickTip: "Haz clic con el botón derecho en la imagen y selecciona \"copiar\"",
    successTip: "Con éxito (si falla el pegado, haz clic con el botón derecho en la imagen para \"copiar imagen\")"
  },
  splitText: {  "splitSymbols": [
    {
      "name": "Tabulación",
      "value": "Tab"
    },
    {
      "name": "punto y coma",
      "value": "semicolon"
    },
    {
      "name": "coma",
      "value": "comma"
    },
    {
      "name": "espacio",
      "value": "space"
    }
  ],
  "tipNoSelect": "No puede separar una celda sin seleccionarla",

    splitDelimiters: "Delimitadores",
    splitOther: "Otros",
    splitContinueSymbol: "Los separadores consecutivos se tratan como uno solo",
    splitDataPreview: "Previsualizar",
    splitTextTitle: "Partir texto",
    splitConfirmToExe: "Ya hay datos aquí, ¿quieres reemplazarlos?",
    tipNoMulti: "No se puede realizar esta operación en varias áreas de selección, selecciona una única área y vuelve a intentarlo",
    tipNoMultiColumn: "Solo se puede convertir una columna de datos a la vez. El área seleccionado puede tener varias filas, pero no varias columnas. Vuelve a intentarlo después de seleccionar un solo rango de columnas"
  },
  imageText: {
    imageSetting: "Configuración de imagen",
    close: "Cerrar",
    conventional: "Convencional",
    moveCell1: "Mover y cambiar el tamaño de las celdas",
    moveCell2: "Mover y no cambiar el tamaño de la celda",
    moveCell3: "No mover ni cambiar el tamaño de la celda",
    fixedPos: "Posición fija",
    border: "Borde",
    width: "Ancho",
    radius: "Radio",
    style: "Estilo",
    solid: "Sólido",
    dashed: "Discontinua",
    dotted: "Punteado",
    double: "Doble",
    color: "Color"
  },
  punctuation: {
    tab: "Tabulación",
    semicolon: "punto y coma",
    comma: "coma",
    space: "espacio"
  },
  findAndReplace: {
    find: "Encontrar",
    replace: "Reemplazar",
    goto: "Ir a",
    location: "Ubicación",
    formula: "Fórmula",
    date: "Fecha",
    number: "Número",
    string: "Texto",
    error: "Error",
    condition: "Condición",
    rowSpan: "Intervalo de filas",
    columnSpan: "Intervalo de columnas",
    locationExample: "Ubicación",
    lessTwoRowTip: "Selecciona al menos dos filas",
    lessTwoColumnTip: "Selecciona al menos dos columnas",
    findTextbox: "Encontrar Contenido",
    replaceTextbox: "Reemplazar Contenido",
    regexTextbox: "Expresión Regular",
    wholeTextbox: "Palabra entera",
    distinguishTextbox: "Distingue mayúsculas y minúsculas",
    allReplaceBtn: "Reemplazar Todo",
    replaceBtn: "Reemplazar",
    allFindBtn: "Encontrar Todo",
    findBtn: "Encontrar siguiente",
    noFindTip: "No se encontró el contenido",
    modeTip: "Esta operación no está disponible en este modo",
    searchTargetSheet: "Hoja",
    searchTargetCell: "Celda",
    searchTargetValue: "Valor",
    searchInputTip: "Introduce el contenido de la búsqueda",
    noReplceTip: "No hay nada que reemplazar",
    noMatchTip: "No se encontraron coincidencias",
    successTip: "${xlength} elementos encontrados",
    locationConstant: "Constante",
    locationFormula: "Fórmula",
    locationDate: "Fecha",
    locationDigital: "Número",
    locationString: "Texto",
    locationBool: "Lógicos",
    locationError: "Error",
    locationNull: "Nulo",
    locationCondition: "Formato condicional",
    locationRowSpan: "Intervalo fila",
    locationColumnSpan: "Intervalo columna",
    locationTiplessTwoRow: "Selecciona al menos dos filas",
    locationTiplessTwoColumn: "Selecciona al menos dos columnas",
    locationTipNotFindCell: "Celda no encontrada"
  },
  sheetconfig: {
    delete: "Eliminar",
    copy: "Copiar",
    rename: "Renombrar",
    changeColor: "Cambiar color",
    hide: "Ocultar",
    unhide: "Mostrar",
    moveLeft: "Mover izquierda",
    moveRight: "Mover derecja",
    resetColor: "Reiniciar color",
    cancelText: "Cancelar",
    chooseText: "Confirmar color",
    focus: "Enfocar",
    tipNameRepeat: "¡El nombre de la página de la pestaña no se puede repetir! Revísalo",
    noMoreSheet: "El libro de trabajo contiene al menos una hoja de trabajo visual. Para eliminar la hoja de trabajo seleccionada, inserta una nueva hoja de trabajo o muestra una hoja de trabajo oculta",
    confirmDelete: "¿Estás seguro de eliminar",
    redoDelete: "Se puede deshacer con Ctrl+Z",
    noHide: "No se puede ocultar, al menos conserva una etiqueta de hoja",
    chartEditNoOpt: "¡Esta operación no está permitida en el modo de edición de gráficos!",
    sheetNameSpecCharError: "El nombre no puede contener:[ ] :  ? * / ' \"",
    sheetNamecannotIsEmptyError: "El nombre de la hoja no puede estar vacío"
  },
  conditionformat: {
    conditionformat_greaterThan: "Conditionformat-GreaterThan",
    conditionformat_greaterThan_title: "Dar formato a celdas mayores que",
    conditionformat_lessThan: "Conditionformat-LessThan",
    conditionformat_lessThan_title: "Dar formato a celdas más pequeñas que",
    conditionformat_between: "Conditionformat-Betweenness",
    conditionformat_between_title: "Dar formato a celdas con valores entre",
    conditionformat_equal: "Conditionformat-Equal",
    conditionformat_equal_title: "Dar formato a celdas iguales a",
    conditionformat_textContains: "Conditionformat-TextContains",
    conditionformat_textContains_title: "Dar formato a las celdas que contienen el siguiente texto",
    conditionformat_occurrenceDate: "Conditionformat-OccurrenceDate",
    conditionformat_occurrenceDate_title: "Dar formato a celdas que contienen las siguientes fechas",
    conditionformat_duplicateValue: "Conditionformat-DuplicateValue",
    conditionformat_duplicateValue_title: "Dar formato a celdas que contienen los siguientes tipos de valores",
    conditionformat_top10: "Conditionformat-Top10",
    conditionformat_top10_percent: "Conditionformat-Top10%",
    conditionformat_top10_title: "Formatea las celdas con el valor más alto",
    conditionformat_last10: "Conditionformat-Last10",
    conditionformat_last10_percent: "Conditionformat-Last10%",
    conditionformat_last10_title: "Formatea las celdas con el valor más pequeño",
    conditionformat_aboveAverage: "Conditionformat-AboveAverage",
    conditionformat_aboveAverage_title: "Dar formato a celdas por encima del promedio",
    conditionformat_belowAverage: "Conditionformat-SubAverage",
    conditionformat_belowAverage_title: "Dar formato a celdas por debajo del promedio",
    rule: "Regla",
    newRule: "Nueva regla",
    editRule: "Editar regla",
    deleteRule: "Eliminar regla",
    deleteCellRule: "Eliminar regla de celda",
    deleteSheetRule: "Eliminar regla de hoja",
    manageRules: "Reglas administración",
    showRules: "Muestra sus reglas de formato",
    highlightCellRules: "Resaltar reglas de celda",
    itemSelectionRules: "Reglas de selección de elementos",
    conditionformatManageRules: "Administrador de reglas de formato condicional",
    format: "Formatear",
    setFormat: "Establecer formato",
    setAs: "Establecer como",
    setAsByArea: "Para el área seleccionada, establecer",
    applyRange: "Aplicar rango",
    selectRange: "Seleccionar rango de aplicación",
    selectRange_percent: "Porcentaje del rango seleccionado",
    selectRange_average: "Valor promedio del rango seleccionado",
    selectRange_value: "Valor en el rango seleccionado",
    pleaseSelectRange: "Selecciona el rango de aplicación",
    selectDataRange: "Seleccionar rango de datos",
    selectCell: "seleccionar celda",
    pleaseSelectCell: "Selecciona una celda",
    pleaseSelectADate: "Selecciona una fecha",
    pleaseEnterInteger: "Introduzca un número entero entre 1 y 1000",
    onlySingleCell: "Solo se puede hacer referencia a una sola celda",
    conditionValueCanOnly: "El valor de la condición solo puede ser un número o una sola celda",
    ruleTypeItem1: "Aplicar formato a todas las celdas según sus valores respectivos",
    ruleTypeItem2: "Solo formatear celdas que contengan",
    ruleTypeItem2_title: "Solo para celdas que cumplan las siguientes condiciones",
    ruleTypeItem3: "Aplicar formato solo a los números superiores o inferiores",
    ruleTypeItem3_title: "Es el valor en la siguiente clasificación",
    ruleTypeItem4: "Aplicar formato solo a los valores superiores o inferiores al promedio",
    ruleTypeItem4_title: "Es un valor que cumple las siguientes condiciones",
    ruleTypeItem5: "Aplicar formato solo a valores únicos o repetidos",
    ruleTypeItem6: "Use fórmulas para determinar qué celdas formatear",
    formula: "fórmula",
    textColor: "Color Texto",
    cellColor: "Color Celda",
    confirm: "Confirma",
    confirmColor: "Confirma color",
    cancel: "Cancela",
    close: "Cierra",
    clearColorSelect: "Limpiar selección de color",
    sheet: "Hoja",
    currentSheet: "Hoja actual",
    dataBar: "Barra de datos",
    dataBarColor: "Color barra de datos",
    gradientDataBar_1: "Barra de datos de degradado azul-blanco",
    gradientDataBar_2: "Barra de datos de degradado verde-blanco",
    gradientDataBar_3: "Barra de datos de degradado rojo-blanco",
    gradientDataBar_4: "Rayas de degradado de color naranja-blanco",
    gradientDataBar_5: "Rayas de degradado azul claro-blancas",
    gradientDataBar_6: "Barra de datos de degradado púrpura-blanco",
    solidColorDataBar_1: "Barra de datos azul",
    solidColorDataBar_2: "Barra de datos verde",
    solidColorDataBar_3: "Barra de datos roja",
    solidColorDataBar_4: "Barra de datos naranja",
    solidColorDataBar_5: "Barra de datos azul claro",
    solidColorDataBar_6: "Barra de datos púrpura",
    colorGradation: "Degradado de color",
    colorGradation_1: "Gradación de color verde-amarillo-rojo",
    colorGradation_2: "Gradación de color rojo-amarillo-verde",
    colorGradation_3: "Gradación de color verde-blanco-rojo",
    colorGradation_4: "Gradación de color rojo-blanco-verde",
    colorGradation_5: "Gradación de color azul-blanco-rojo",
    colorGradation_6: "Gradación de color rojo-blanco-azul",
    colorGradation_7: "Gradación de color blanco-rojo",
    colorGradation_8: "Gradación de color rojo-blanco",
    colorGradation_9: "Gradación de color verde-blanco",
    colorGradation_10: "Gradación de color blanco-verde",
    colorGradation_11: "Gradación de color verde-amarillo",
    colorGradation_12: "Gradación de color amarillo-verde",
    icons: "iconos",
    pleaseSelectIcon: "Haz clic para seleccionar un grupo de iconos:",
    cellValue: "Valor de celda",
    specificText: "Texto específico",
    occurrenceDate: "Fecha",
    greaterThan: "Mayor que",
    lessThan: "Menor que",
    between: "Entre",
    equal: "Igual",
    in: "En",
    between2: "",
    contain: "Contiene",
    textContains: "Texto contiene",
    duplicateValue: "Valor duplicado",
    uniqueValue: "Valor Unico",
    top: "Mejor",
    top10: "10 mejores",
    top10_percent: "10% mejores",
    last: "Ultimo",
    last10: "Ultimos 10",
    last10_percent: "Ultimos 10%",
    oneself: "",
    above: "Encima",
    aboveAverage: "Encima media",
    below: "Debajo",
    belowAverage: "Debajo media",
    all: "Todos",
    yesterday: "Año a fecha",
    today: "Hoy",
    tomorrow: "Mañana",
    lastWeek: "Ultima semana",
    thisWeek: "Esta semana",
    lastMonth: "Ultimo mes",
    thisMonth: "Este mes",
    lastYear: "Ultimo año",
    thisYear: "Este año",
    last7days: "Ultimos 7 días",
    last30days: "Ultimos 30 días",
    next7days: "Siguientes 7 días",
    next30days: "Siguientes 30 días",
    next60days: "Siguientes 60 días",
    chooseRuleType: "Elige el tipo de regla",
    editRuleDescription: "Editar descripción de regla",
    newFormatRule: "Nueva regla de formato",
    editFormatRule: "Editar regla de formato",
    formatStyle: "Estilo",
    fillType: "Rellenar",
    color: "Color",
    twocolor: "Dos colores",
    tricolor: "Tricolor",
    multicolor: "Multi color",
    grayColor: "Color gris",
    gradient: "Gradiente",
    solid: "Sólido",
    maxValue: "Valor máximo",
    medianValue: "Valor mediano",
    minValue: "Valor mínimo",
    direction: "Dirección",
    threeWayArrow: "Flecha de tres direcciones",
    fourWayArrow: "Flecha de cuatro direcciones",
    fiveWayArrow: "Flecha de cinco direcciones",
    threeTriangles: "Tres triángulos",
    shape: "Forma",
    threeColorTrafficLight: "Semáforo de tres colores",
    fourColorTrafficLight: "Semáforo de cuatro colores",
    threeSigns: "Tres signos",
    greenRedBlackGradient: "Gradiente verde-rojo-negro",
    rimless: "Sin aros",
    bordered: "Bordeado",
    mark: "Marcar",
    threeSymbols: "Tres símbolos",
    tricolorFlag: "Bandera tricolor",
    circled: "Rodeado",
    noCircle: "Sin círculo",
    grade: "Grado",
    grade4: "4 Grado",
    grade5: "5 Grado",
    threeStars: "3 Estrellas",
    fiveQuadrantDiagram: "Diagrama de cinco cuadrantes",
    fiveBoxes: "5 Cajas"
  },
  dataVerification: {
    cellRange: "Rango celdas",
    selectCellRange: "Haz clic para seleccionar un rango de celdas",
    selectCellRange2: "Selecciona un rango de celdas",
    verificationCondition: "Condición de verificación",
    allowMultiSelect: "Permitir selección múltiple",
    dropdown: "lista desplegable",
    checkbox: "Casilla de verificación",
    number: "Número",
    number_integer: "Número entero",
    number_decimal: "Número decimal",
    text_content: "Contenido texto",
    text_length: "Longitud texto",
    date: "Fecha",
    validity: "Eficacia",
    placeholder1: "Introduce las opciones, separadas por comas, como 1,2,3,4,5",
    placeholder2: "Introduce contenido",
    placeholder3: "Valor numérico, como 10",
    placeholder4: "Introduce el texto especificado",
    placeholder5: "Introduce el mensaje que se muestra cuando se selecciona la celda",
    selected: "Seleccionado",
    notSelected: "No seleccionado",
    between: "Entre",
    notBetween: "No entre",
    equal: "Iqual",
    notEqualTo: "No iqual a",
    moreThanThe: "Más que el",
    lessThan: "Menos que",
    greaterOrEqualTo: "Mayor o igual a",
    lessThanOrEqualTo: "Menor o igual a",
    include: "Incluir",
    exclude: "Excluir",
    earlierThan: "Antes de",
    noEarlierThan: "No antes de",
    laterThan: "Después de",
    noLaterThan: "No después de",
    identificationNumber: "Número de identificación",
    phoneNumber: "Número de teléfono",
    remote: "Opción de adquisición remota automática",
    prohibitInput: "Prohibir la entrada cuando los datos de entrada no son válidos",
    hintShow: "Mostrar mensaje cuando se selecciona la celda",
    deleteVerification: "Eliminar verificación",
    tooltipInfo1: "La opción de la lista desplegable no puede estar vacía",
    tooltipInfo2: "El contenido de la casilla de verificación no puede estar vacío",
    tooltipInfo3: "El valor ingresado no es un tipo numérico",
    tooltipInfo4: "El segundo valor no puede ser menor que el primero",
    tooltipInfo5: "El contenido del texto no puede estar vacío",
    tooltipInfo6: "El valor ingresado no es una fecha",
    tooltipInfo7: "La segunda fecha no puede ser menor que la primera",
    textlengthInteger: "La longitud del texto debe ser un entero mayor o igual a 0"
  },
  formula: {
    sum: "Suma",
    average: "Media",
    count: "Contar",
    max: "Máx",
    min: "Mín",
    ifGenerate: "Generador de fórmula SI",
    find: "Aprender más",
    tipNotBelongToIf: "¡Esta función de celda no pertenece a la fórmula SI!",
    tipSelectCell: "Selecciona la celda para insertar la función",
    ifGenCompareValueTitle: "Valor de comparación",
    ifGenSelectCellTitle: "Haz click para seleccionar una celda",
    ifGenRangeTitle: "Rango",
    ifGenRangeTo: "a",
    ifGenRangeEvaluate: "Evaluar rango",
    ifGenSelectRangeTitle: "Haz click para seleccionar rango",
    ifGenCutWay: "Forma particionado",
    ifGenCutSame: "Mismo valor de particionado",
    ifGenCutNpiece: "Particionar por N",
    ifGenCutCustom: "Personalizado",
    ifGenCutConfirm: "Confirma",
    ifGenTipSelectCell: "Selecciona celdas",
    ifGenTipSelectCellPlace: "Por favor selecciona celdas",
    ifGenTipSelectRange: "Selecciona rango",
    ifGenTipSelectRangePlace: "Por favor selecciona rango",
    ifGenTipNotNullValue: "El valor de comparación no puede ser vacío!",
    ifGenTipLableTitile: "Etiqueta",
    ifGenTipRangeNotforNull: "El rango no puede quedar vacío!",
    ifGenTipCutValueNotforNull: "El valor de partición no puede ser vacío!",
    ifGenTipNotGenCondition: "No hay condiciones disponibles para la generación!"
  },
  formulaMore: {
    valueTitle: "Valor",
    tipSelectDataRange: "Selecciona rango de datos",
    tipDataRangeTile: "Rango de datos",
    findFunctionTitle: "Función de búsqueda",
    tipInputFunctionName: "Nombre o breve descripción de la función",
    Array: "Vector",
    Database: "Base de datos",
    Date: "Fecha",
    Engineering: "Ingeniería",
    Filter: "Filtro",
    Financial: "Financiero",
    luckysheet: "Luckysheet",
    other: "Otro",
    Logical: "Lógica",
    Lookup: "Búsqueda",
    Math: "Matemático",
    Operator: "Operadores",
    Parser: "Compilador",
    Statistical: "Estadístico",
    Text: "Texto",
    dataMining: "Minería de datos",
    selectFunctionTitle: "Selecciona una función",
    calculationResult: "Resultado",
    tipSuccessText: "Exito",
    tipParamErrorText: "Parámetro erróneo",
    helpClose: "Cerrar",
    helpCollapse: "Recoger",
    helpExample: "Ejemplo",
    helpAbstract: "Resumen",
    execfunctionError: "Error en la fórmula",
    execfunctionSelfError: "La fórmula no puede hacer referencia a su propia celda",
    execfunctionSelfErrorResult: "La fórmula no puede hacer referencia a su propia celda, lo que dará lugar a resultados de cálculo inexactos",
    allowRepeatText: "Repetir",
    allowOptionText: "Opción",
    selectCategory: "O selecciona una categoría"
  },
  drag: {  "affectPivot": "Este cambio no se puede realizar en la celda seleccionada porque afectaría a la tabla dinámica.",

    noMerge: "No se puede realizar esta operación en celdas combinadas",
    afectarPivot: "¡Este cambio no se puede realizar en la celda seleccionada porque afectará a la tabla dinámica!",
    noMulti: "No se puede realizar esta operación en varias áreas de selección, selecciona una sola área",
    noPaste: "No se puede pegar este contenido aquí, selecciona una celda en el área de pegado e intenta pegar nuevamente",
    noPartMerge: "No se puede realizar esta operación en celdas parcialmente fusionadas",
    inputCorrect: "Introduce el valor correcto",
    notLessOne: "El número de filas y columnas no puede ser inferior a 1",
    offsetColumnLessZero: "¡La columna de desplazamiento no puede ser negativa!",
    pasteMustKeybordAlert: "在表格中进行复制粘贴: Ctrl + C 进行复制, Ctrl + V 进行粘贴, Ctrl + X 进行剪切",
    pasteMustKeybordAlertHTMLTitle: "在表格中进行复制粘贴",
    pasteMustKeybordAlertHTML: "<span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + C</span>&nbsp;&nbsp;进行复制<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + V</span>&nbsp;&nbsp;进行粘贴<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + X</span>&nbsp;&nbsp;进行剪切"
  },
  pivotTable: {
    title: "Tabla Dinámica",
    closePannel: "Cerrar",
    editRange: "Rango",
    tipPivotFieldSelected: "Selecciona los campos",
    tipClearSelectedField: "Limpiar todos los campos",
    btnClearSelectedField: "Limpiar",
    btnFilter: "Filtrar",
    titleRow: "Fila",
    titleColumn: "Columna",
    titleValue: "Valor",
    tipShowColumn: "Los campos de estadísticas se muestran como columnas",
    tipShowRow: "Los campos de estadísticas se muestran como filas",
    titleSelectionDataRange: "Selecciona rango",
    titleDataRange: "Rango de datos",
    valueSum: "SUMA",
    valueStatisticsSUM: "Suma",
    valueStatisticsCOUNT: "Contar",
    valueStatisticsCOUNTA: "Contar A",
    valueStatisticsCOUNTUNIQUE: "Contar Distintos",
    valueStatisticsAVERAGE: "Media",
    valueStatisticsMAX: "Máx",
    valueStatisticsMIN: "Mín",
    valueStatisticsMEDIAN: "Mediana",
    valueStatisticsPRODUCT: "Producto",
    valueStatisticsSTDEV: "Desviación Estándar",
    valueStatisticsSTDEVP: "Stdevp",
    valueStatisticslet: "Varianza",
    valueStatisticsVARP: "VarP",
    errorNotAllowEdit: "¡Esta operación está prohibida en el modo sin edición!",
    errorNotAllowMulti: "No se puede realizar esta operación en varias áreas de selección, selecciona un solo rango y vuelve a intentarlo",
    errorSelectRange: "Seleccione el rango de la nueva tabla dinámica",
    errorIsDamage: "¡Los datos de origen de esta tabla dinámica están dañados!",
    errorNotAllowPivotData: "¡No se puede seleccionar la tabla dinámica como datos de origen!",
    errorSelectionRange: "¡La selección falló, rango de entrada incorrecto!",
    errorIncreaseRange: "¡Por favor, expande el rango seleccionado!",
    titleAddColumn: "Añadir columna a la tabla dinámica",
    titleMoveColumn: "Muever la columna a la celda en blanco de abajo",
    titleClearColumnFilter: "Quitar el filtro de esta columna",
    titleFilterColumn: "Filtro",
    titleSort: "Ordenar",
    titleNoSort: "No Ordenar",
    titleSortAsc: "ASC",
    titleSortDesc: "DESC",
    titleSortBy: "Ordenar por",
    titleShowSum: "Mostrar total",
    titleStasticTrue: "Sí",
    titleStasticFalse: "No"
  },
  dropCell: {
    copyCell: "Copiar",
    sequence: "Secuencia",
    onlyFormat: "Solo formato",
    noFormat: "Sin formato",
    day: "Día",
    workDay: "Día Laborable",
    month: "Mes",
    year: "Año",
    chineseNumber: "Números Chinos"
  },
  imageCtrl: {
    borderTile: "Color de borde de imagen",
    borderCur: "Color"
  },
  protection: {
    protectiontTitle: "Protección",
    enterPassword: "Introduce una contraseña (opcional)",
    enterHintTitle: "Preguntar cuando la edición está prohibida (opcional)",
    enterHint: "La celda o el gráfico que estás intentando cambiar se encuentra en una hoja de trabajo protegida. Si quieres cambiarlo, desprotege la hoja de trabajo. Es posible que tengas que ingresar una contraseña",
    swichProtectionTip: "Protege la hoja y el contenido de las celdas bloqueadas",
    authorityTitle: "Permitir a los usuarios de esta hoja:",
    selectLockedCells: "Selecciona celdas bloqueadas",
    selectunLockedCells: "Selecciona celdas desbloqueadas",
    formatCells: "Formatear celdas",
    formatColumns: "Formatear columnas",
    formatRows: "Formatear filas",
    insertColumns: "Insertar columnas",
    insertRows: "Insertar filas",
    insertHyperlinks: "Insertar enlaces",
    deleteColumns: "Eliminar columnas",
    deleteRows: "Eliminar filas",
    sort: "Ordenar",
    filter: "Filtrar",
    usePivotTablereports: "Usar informes de tabla dinámica",
    editObjects: "Editar objetos",
    editScenarios: "Editar escenarios",
    allowRangeTitle: "Permitir a los usuarios del rango:",
    allowRangeAdd: "Nuevo...",
    allowRangeAddTitle: "Título",
    allowRangeAddSqrf: "Referencia",
    selectCellRange: "Haz clic para seleccionar un rango de celdas",
    selectCellRangeHolder: "Rango de celdas",
    allowRangeAddTitlePassword: "Contraseña",
    allowRangeAddTitleHint: "Pregunta",
    allowRangeAddTitleHintTitle: "Preguntar cuando hay una contraseña (opcional)",
    allowRangeAddtitleDefault: "Nombre del rango de entrada",
    rangeItemDblclick: "Haz doble clic para editar",
    rangeItemHasPassword: "Tiene contraseña",
    rangeItemErrorTitleNull: "El título es nulo",
    rangeItemErrorRangeNull: "La referencia es nula",
    rangeItemErrorRange: "La reference tiene un error",
    validationTitle: "Validación de contraseña",
    validationTips: "Hay que ingresar una contraseña para desbloquear la protección de la hoja de trabajo",
    validationInputHint: "Introduce una contraseña",
    checkPasswordNullalert: "Contraseña requerida!",
    checkPasswordWrongalert: "¡Contraseña incorrecta. Por favor, prueba de nuevo!",
    checkPasswordSucceedalert: "Desbloqueo conseguido!",
    defaultRangeHintText: "La celda está protegida con contraseña.",
    defaultSheetHintText: "La celda o el gráfico están en una hoja de trabajo protegida. Para realizar cambios, desprotege la hoja de trabajo. Es posible que tengas que ingresar una contraseña"
  },
  cellFormat: {
    cellFormatTitle: "Formatear celdas",
    protection: "Protección",
    locked: "Bloqueado",
    hidden: "Escondido",
    protectionTips: "Para bloquear celdas u ocultar fórmulas, protege la hoja de trabajo. En la barra de herramientas, haz clic en el botón Proteger hoja",
    tipsPart: "Comprobado parcial",
    tipsAll: "Todo seleccionado",
    selectionIsNullAlert: "Se requiere una selección!",
    sheetDataIsNullAlert: "error, no hay datos!"
  },
  print: {
    normalBtn: "Normal",
    layoutBtn: "Disposición de página",
    pageBtn: "Previsualización de saltos de página",
    menuItemPrint: "Imprimir (Ctrl+P)",
    menuItemAreas: "Imprimir áreas",
    menuItemRows: "Imprimir títulos de filas",
    menuItemColumns: "Imprimir títulos de columnas"
  },
  edit: {
    typing: "mecanografía"
  },
  websocket: {
    success: "Éxito de la conexión de WebSocket",
    refresh: "Se produjo un error en la conexión de WebSocket, ¡actualice la página!",
    wait: "Se produjo un error en la conexión de WebSocket, ¡tenga paciencia!",
    close: "Conexión WebSocket cerrada",
    contact: "Ocurrió un error de comunicación con el servidor, actualice la página y vuelva a intentarlo; de lo contrario, comuníquese con el administrador.",
    support: "El navegador actual no es compatible con WebSocket"
  },
  custom: {
    lockCells: "Bloquear celdas",
    unlockCells: "Desbloquear celdas",
    toggleSheetProtection: "Proteger / Desproteger libro",
    toggleGridLines: "Mostrar / ocultar cuadrícula",
    customNumberFormat: {
      menuItem: "Formato numérico personalizado…",
      title: "Formatos numéricos personalizados",
      formatLabel: "Código de formato",
      inputPlaceholder: "Por ejemplo: #.##0,00",
      apply: "Aplicar",
      cancel: "Cancelar",
      close: "Cerrar",
      preview: "Vista previa",
      presets: "Formatos sugeridos",
      standardFormats: "Números",
      currencyFormats: "Moneda",
      unitFormats: "Unidades",
      selection: "Selección",
      help: "Guía de formatos",
      helpTitle: "Cómo funcionan los códigos de formato",
      helpZero: "0 siempre muestra un dígito, incluido un cero inicial o final.",
      helpHash: "# muestra un dígito solo cuando es significativo.",
      helpDecimal: "{separator} indica la posición decimal en el código de formato.",
      helpGrouping: "{separator} añade la agrupación de dígitos.",
      groupingSpace: "Un espacio añade la agrupación de dígitos.",
      helpSections: "; separa las secciones de positivos, negativos, ceros y texto.",
      normalizedHint: "El formato se guardará como {format}.",
      errors: {
        required: "Introduce un código de formato.",
        tooLong: "El código de formato es demasiado largo.",
        tooManySections: "Un formato puede contener como máximo cuatro secciones.",
        missingPlaceholder: "Añade al menos un marcador numérico: 0, # o ?.",
        invalid: "Este código de formato no es válido."
      }
    },
    standaloneMenu: {
      menuBarLabel: "Menús de DocCells",
      file: "Archivo",
      edit: "Edición",
      view: "Ver",
      insert: "Insertar",
      data: "Datos",
      tools: "Herramientas",
      open: "Abrir",
      export: "Exportar",
      show: "Mostrar",
      gridlines: "Cuadrícula"
    },
    conditionalFormatting: {
      toolbar: "Formato condicional",
      title: "Formato condicional",
      activeSheet: "Hoja activa",
      appliedRules: "Reglas aplicadas",
      noRules: "No hay reglas para esta hoja.",
      editRule: "Editar regla",
      newRule: "Nueva regla",
      applyTo: "Aplicar a",
      condition: "Condición",
      compareTo: "Comparar con",
      minValue: "Valor mínimo",
      maxValue: "Valor máximo",
      cell: "Celda",
      sameRowColumn: "Columna de la misma fila",
      text: "Texto",
      value: "Valor",
      textColor: "Texto",
      backgroundColor: "Fondo",
      style: "Estilo",
      preview: "Vista previa de celda",
      close: "Cerrar",
      reset: "Nueva",
      save: "Guardar",
      add: "Agregar",
      edit: "Editar",
      delete: "Eliminar",
      none: "Ninguno",
      sample: "Aa",
      textPlaceholder: "tarde",
      conditions: {
        lessThan: "es menor que",
        greaterThan: "es mayor que",
        equal: "es igual a",
        notEqual: "es diferente de",
        between: "está entre",
        textContains: "contiene texto"
      },
      compareTypes: {
        value: "un valor fijo",
        cell: "una celda fija",
        sameRowColumn: "una columna de la misma fila"
      },
      descriptions: {
        cell: "celda",
        between: "celda entre {value1} y {value2}",
        textContains: "texto contiene \"{value}\"",
        sameRowColumn: "columna {reference} misma fila",
        fixedCell: "celda {reference}",
        comparison: "celda {operator} {target}"
      },
      errors: {
        range: "El rango debe parecerse a A2:A100.",
        between: "Indica dos valores para la condición entre.",
        text: "Indica el texto que se debe buscar.",
        compareCell: "La celda de comparación debe parecerse a B1.",
        compareColumn: "La columna de comparación debe parecerse a B.",
        compareValue: "Indica un valor de comparación.",
        style: "Elige al menos un color o un estilo."
      },
      styleLabels: {
        bold: "Negrita",
        italic: "Cursiva",
        underline: "Subrayado"
      }
    },
    charts: {
      toolbar: "Insertar gráfico",
      title: "Gráficos",
      defaultTitle: "Gráfico",
      activeSheet: "Hoja activa",
      existingCharts: "Gráficos de la hoja",
      noCharts: "No hay gráficos para esta hoja.",
      newChart: "Nuevo gráfico",
      editChart: "Editar gráfico",
      chartTitle: "Título",
      type: "Tipo",
      range: "Datos",
      labels: "Etiquetas",
      labelReference: "Referencia",
      labelColumnReference: "Letra de columna",
      labelRowReference: "Número de fila",
      values: "Mostrar valores",
      legend: "Mostrar leyenda",
      color: "Color",
      xAxis: "Mostrar abscisas",
      yAxis: "Mostrar ordenadas",
      gridlines: "Mostrar cuadrícula",
      displayOptions: "Visualización",
      preview: "Vista previa",
      close: "Cerrar",
      reset: "Nuevo",
      add: "Agregar",
      save: "Guardar",
      edit: "Editar",
      delete: "Eliminar",
      types: {
        bar: "Barras",
        line: "Línea",
        scatter: "Dispersión",
        pie: "Sectores"
      },
      labelTypes: {
        none: "Sin etiquetas",
        sameRowColumn: "Columna de la misma fila",
        sameColumnRow: "Fila de las mismas columnas",
        range: "Rango personalizado"
      },
      errors: {
        range: "El rango debe parecerse a A1:B5.",
        dataColumn: "El rango de datos debe ser una sola fila o una sola columna de valores.",
        labelColumn: "La columna de etiquetas debe parecerse a B.",
        labelRow: "La fila de etiquetas debe parecerse a 2.",
        labelRange: "El rango de etiquetas debe parecerse a B3:B24.",
        labelRangeSize: "El rango de etiquetas debe tener el mismo número de valores que los datos.",
        title: "Agrega un título corto al gráfico."
      }
    }
  }
};
