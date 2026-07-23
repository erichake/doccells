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
      d: "Retorna uma soma condicional em um intervalo.",
      a: "Uma soma condicional em um intervalo.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "intervalo",
          detail: "O intervalo que é testado em relação a `critério`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "critério",
          detail: "O padrão ou teste a aplicar a `intervalo`.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo_soma",
          detail: "O intervalo a ser somado, se diferente de `intervalo`.",
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
      d: "Retorna a tangente de um ângulo fornecido em radianos.",
      a: "Tangente de um ângulo fornecido em radianos.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ângulo",
          detail: "O ângulo para o qual encontrar a tangente, em radianos.",
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
      d: "Retorna a tangente hiperbólica de qualquer número real.",
      a: "Tangente hiperbólica de qualquer número real.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "Qualquer valor real para calcular a tangente hiperbólica.",
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
      d: "Arredonda um número para cima até o múltiplo inteiro mais próximo do `fator` de significância especificado.",
      a: "Arredonda um número para cima até o múltiplo mais próximo de um fator.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "O valor a ser arredondado para cima até o múltiplo inteiro mais próximo de `fator`.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fator",
          detail: "O número cujos múltiplos serão usados para arredondar `valor`.",
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
      d: "Retorna o arco tangente de um valor, em radianos.",
      a: "Arco tangente de um valor, em radianos.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor para o qual calcular o arco tangente.",
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
      d: "Retorna o seno hiperbólico inverso de um número.",
      a: "Seno hiperbólico inverso de um número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor para o qual calcular o seno hiperbólico inverso.",
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
      d: "Retorna o valor absoluto de um número.",
      a: "Valor absoluto de um número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O número do qual retornar o valor absoluto.",
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
      d: "Retorna o arco cosseno de um valor, em radianos.",
      a: "Arco cosseno de um valor, em radianos.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor para o qual calcular o arco cosseno. Deve estar entre `-1` e `1`, inclusive.",
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
      d: "Retorna o cosseno hiperbólico inverso de um número.",
      a: "Cosseno hiperbólico inverso de um número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor para o qual calcular o cosseno hiperbólico inverso. Deve ser maior ou igual a `1`.",
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
      d: "Retorna o fatorial da soma de valores dividido pelo produto dos fatoriais dos valores.",
      a: "Função de distribuição multinomial.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo a considerar.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a considerar.",
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
      d: "Retorna a tangente hiperbólica inversa de um número.",
      a: "Tangente hiperbólica inversa de um número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor para o qual calcular a tangente hiperbólica inversa. Deve estar entre -1 e 1, exclusive.",
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
      d: "Retorna o ângulo entre o eixo x e um segmento de reta desde a origem (0,0) até o par de coordenadas especificado (`x`,`y`), em radianos.",
      a: "Arco tangente de um valor.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "A coordenada x do ponto final do segmento de reta para o qual calcular o ângulo em relação ao eixo x.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "y",
          detail: "A coordenada y do ponto final do segmento de reta para o qual calcular o ângulo em relação ao eixo x.",
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
      d: "Retorna o número de valores vazios em uma lista de valores e intervalos.",
      a: "Número de valores vazios.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo no qual contar o número de células vazias.",
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
      d: "Retorna o cosseno hiperbólico de qualquer número real.",
      a: "Cosseno hiperbólico de qualquer número real.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "Qualquer valor real para calcular o cosseno hiperbólico.",
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
      d: "Arredonda um número para baixo até o número inteiro mais próximo que seja menor ou igual a ele.",
      a: "Arredonda um número para baixo até o número inteiro mais próximo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor a ser arredondado para baixo até o número inteiro mais próximo.",
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
      d: "Verifica se o valor fornecido é par.",
      a: "Se o valor fornecido é par.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor a ser verificado como par.",
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
      d: "Verifica se o valor fornecido é ímpar.",
      a: "Se o valor fornecido é ímpar.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor a ser verificado como ímpar.",
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
      d: "Retorna o mínimo múltiplo comum de um ou mais números inteiros.",
      a: "Mínimo múltiplo comum de um ou mais números inteiros.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo cujos fatores considerar no cálculo do mínimo múltiplo comum.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais cujos fatores considerar para encontrar o mínimo múltiplo comum.",
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
      d: "Retorna o logaritmo de um número, na base e (o número de Euler).",
      a: "O logaritmo de um número, na base e (o número de euler).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor para o qual calcular o logaritmo, na base e.",
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
      d: "Retorna o logaritmo de um número em relação a uma base.",
      a: "O logaritmo de um número em relação a uma base.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "O valor para o qual calcular o logaritmo.",
          example: "128",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "base",
          detail: "A base a usar para o cálculo do logaritmo.",
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
      d: "Retorna o logaritmo de um número, na base 10.",
      a: "O logaritmo de um número, na base 10.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor para o qual calcular o logaritmo, na base 10.",
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
      d: "Retorna o resultado do operador módulo, o resto após uma operação de divisão.",
      a: "Operador módulo (resto).",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividendo",
          detail: "O número a ser dividido para encontrar o resto.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "O número pelo qual dividir.",
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
      d: "Arredonda um número para o múltiplo inteiro mais próximo de outro.",
      a: "Arredonda um número para o múltiplo inteiro mais próximo.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "O número a ser arredondado para o múltiplo inteiro mais próximo de outro.",
          example: "21",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fator",
          detail: "O número cujos múltiplos serão usados para arredondar `valor`.",
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
      d: "Arredonda um número para cima até o número ímpar mais próximo.",
      a: "Arredonda um número para cima até o número ímpar mais próximo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor a ser arredondado para o próximo número ímpar maior.",
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
      d: "Retorna a soma dos quadrados de uma série de números e/ou células.",
      a: "Soma dos quadrados.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro número ou intervalo cujos quadrados somar.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Números ou intervalos adicionais cujos quadrados somar ao(s) quadrado(s) de `valor1`.",
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
      d: "Retorna o número de maneiras de escolher determinado número de objetos de um conjunto de objetos de determinado tamanho.",
      a: "Número de combinações de um conjunto de objetos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "O tamanho do conjunto de objetos do qual escolher.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "O número de objetos a escolher.",
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
      d: "Retorna a soma de uma série de números e/ou células.",
      a: "Soma de uma série de números e/ou células.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro número ou intervalo a somar.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Números ou intervalos adicionais a somar a `valor1`.",
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
      d: "Retorna um subtotal para um intervalo vertical de células usando uma função de agregação especificada.",
      a: "Subtotal para um intervalo usando uma função específica.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "código_função",
          detail: "A função a usar na agregação do subtotal.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "intervalo1",
          detail: "O primeiro intervalo sobre o qual calcular um subtotal.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "intervalo2",
          detail: "Intervalos adicionais sobre os quais calcular subtotais.",
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
      d: "Retorna o arco seno de um valor, em radianos.",
      a: "Arco seno de um valor, em radianos.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor para o qual calcular o arco seno. Deve estar entre `-1` e `1`, inclusive.",
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
      d: "Retorna uma contagem condicional em um intervalo.",
      a: "Uma contagem condicional em um intervalo.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "intervalo",
          detail: "O intervalo que é testado em relação a `critério`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "critério",
          detail: "O padrão ou teste a aplicar a `intervalo`.",
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
      d: "Converte um valor de ângulo em graus para radianos.",
      a: "Converte um valor de ângulo em graus para radianos.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ângulo",
          detail: "O ângulo a converter de graus para radianos.",
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
      d: "Retorna um número aleatório entre 0 inclusive e 1 exclusive.",
      a: "Um número aleatório entre 0 inclusive e 1 exclusive.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "COUNTUNIQUE",
      t: 0,
      d: "Conta o número de valores únicos em uma lista de valores e intervalos especificados.",
      a: "Conta o número de valores únicos em um intervalo.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo a considerar para exclusividade.",
          example: "A1:C100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a considerar para exclusividade.",
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
      d: "Converte um valor de ângulo em radianos para graus.",
      a: "Converte um valor de ângulo em radianos para graus.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ângulo",
          detail: "O ângulo a converter de radianos para graus.",
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
      d: "Retorna a função de erro complementar de Gauss de um valor.",
      a: "Função de erro complementar de gauss de um valor.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "z",
          detail: "O número para o qual calcular a função de erro complementar de Gauss.",
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
      d: "Arredonda um número para cima até o número par mais próximo.",
      a: "Arredonda um número para cima até o número par mais próximo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor a ser arredondado para o próximo número par maior.",
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
      d: "Retorna o número de Euler, e (~2,718), elevado a uma potência.",
      a: "O número de euler, e (~2,718), elevado a uma potência.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "expoente",
          detail: "O expoente ao qual elevar e.",
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
      d: "Retorna o fatorial de um número.",
      a: "Fatorial de um número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O número ou referência a um número cujo fatorial será calculado e retornado.",
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
      d: "Retorna o \"fatorial duplo\" de um número.",
      a: "\"Fatorial duplo\" de um número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O número ou referência a um número cujo fatorial duplo será calculado e retornado.",
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
      d: "Retorna o valor de Pi com 14 casas decimais.",
      a: "O número pi.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FLOOR",
      t: 0,
      d: "Arredonda um número para baixo até o múltiplo inteiro mais próximo do `fator` de significância especificado.",
      a: "Arredonda um número para baixo até o múltiplo mais próximo de um fator.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "O valor a ser arredondado para baixo até o múltiplo inteiro mais próximo de `fator`.",
          example: "23.25",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fator",
          detail: "O número cujos múltiplos serão usados para arredondar `valor`.",
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
      d: "Retorna o máximo divisor comum de um ou mais números inteiros.",
      a: "Máximo divisor comum de um ou mais números inteiros.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo cujos fatores considerar no cálculo do máximo divisor comum.",
          example: "A2:A5",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais cujos fatores considerar para encontrar o máximo divisor comum.",
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
      d: "Retorna um número inteiro aleatório uniforme entre dois valores, inclusive.",
      a: "Número inteiro aleatório entre dois valores, inclusive.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "limite_inferior",
          detail: "O limite inferior do intervalo aleatório.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "limite_superior",
          detail: "O limite superior do intervalo aleatório.",
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
      d: "Arredonda um número para um determinado número de casas decimais de acordo com as regras padrão.",
      a: "Arredonda um número de acordo com as regras padrão.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "O valor a ser arredondado para o número de `posições` especificado.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "casas_decimais",
          detail: "O número de casas decimais para as quais arredondar.",
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
      d: "Arredonda um número para um determinado número de casas decimais, sempre arredondando para baixo até o próximo incremento válido.",
      a: "Arredonda um número para baixo.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "O valor a ser arredondado para o número de `posições` especificado, sempre para baixo.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "casas_decimais",
          detail: "O número de casas decimais para as quais arredondar.",
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
      d: "Arredonda um número para um determinado número de casas decimais, sempre arredondando para cima até o próximo incremento válido.",
      a: "Arredonda um número para cima.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "O valor a ser arredondado para o número de `posições` especificado, sempre para cima.",
          example: "99.44",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "casas_decimais",
          detail: "O número de casas decimais para as quais arredondar.",
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
      d: "Dados os parâmetros `x`, `n`, `m` e `a`, retorna a soma da série de potências a1*x^n + a2*x^(n+m) + ... + ai*x^(n+(i-1)*m).",
      a: "Soma de uma série de potências.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da série de potências. Varia conforme o tipo de aproximação, pode ser ângulo, expoente ou outro valor.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "A potência inicial à qual elevar `x` na série de potências.",
          example: "0",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "m",
          detail: "O incremento aditivo pelo qual aumentar `x`.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "a",
          detail: "A matriz ou intervalo contendo os coeficientes da série de potências.",
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
      d: "Dado um número de entrada, retorna `-1` se for negativo, `1` se for positivo e `0` se for zero.",
      a: "Sinal de um número fornecido (+/-/0).",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor cujo sinal será avaliado.",
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
      d: "Retorna o seno de um ângulo fornecido em radianos.",
      a: "Seno de um ângulo fornecido em radianos.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ângulo",
          detail: "O ângulo para o qual encontrar o seno, em radianos.",
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
      d: "Retorna o seno hiperbólico de qualquer número real.",
      a: "Seno hiperbólico de qualquer número real.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "Qualquer valor real para calcular o seno hiperbólico.",
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
      d: "Retorna a raiz quadrada positiva de um número positivo.",
      a: "Raiz quadrada positiva de um número positivo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O número para o qual calcular a raiz quadrada positiva.",
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
      d: "Retorna a raiz quadrada positiva do produto de Pi e do número positivo fornecido.",
      a: "Raiz quadrada do produto de pi e um número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O número que será multiplicado por Pi e cuja raiz quadrada do produto será retornada.",
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
      d: "Retorna o logaritmo de uma função Gama especificada, na base e (o número de Euler).",
      a: "Logaritmo da função gama.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "A entrada da função Gama. Será retornado o logaritmo natural de Gama(`valor`).",
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
      d: "Retorna o cosseno de um ângulo fornecido em radianos.",
      a: "Cosseno de um ângulo fornecido em radianos.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "ângulo",
          detail: "O ângulo para o qual encontrar o cosseno, em radianos.",
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
      d: "Trunca um número para um determinado número de dígitos significativos, omitindo os dígitos menos significativos.",
      a: "Trunca um número.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "O valor a ser truncado.",
          example: "3.141592654",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "casas_decimais",
          detail: "O número de dígitos significativos à direita do ponto decimal a manter.",
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
      d: "Retorna um número dividido por outro.",
      a: "Um número dividido por outro.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividendo",
          detail: "O número a ser dividido.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "O número pelo qual dividir.",
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
      d: "Retorna um número elevado a uma potência.",
      a: "Um número elevado a uma potência.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "base",
          detail: "O número a elevar à potência `expoente`.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "expoente",
          detail: "O expoente ao qual elevar `base`.",
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
      d: "Retorna a soma de um intervalo dependendo de múltiplos critérios.",
      a: "Soma um intervalo dependendo de múltiplos critérios.",
      m: [
        3,
        257
      ],
      p: [
        {
          name: "intervalo_soma",
          detail: "O intervalo a somar.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "intervalo_critérios1",
          detail: "O intervalo a verificar em relação a critério1.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "critério1",
          detail: "O padrão ou teste a aplicar a intervalo_critérios1.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo_critérios2",
          detail: "Intervalos adicionais a verificar.",
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
      d: "Retorna a contagem de um intervalo dependendo de múltiplos critérios.",
      a: "Conta valores dependendo de múltiplos critérios.",
      m: [
        2,
        256
      ],
      p: [
        {
          name: "intervalo_critérios1",
          detail: "O intervalo a verificar em relação a `critério1`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "critério1",
          detail: "O padrão ou teste a aplicar a `intervalo_critérios1`.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo_critérios2",
          detail: "Intervalos adicionais a verificar.",
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
      d: "Retorna o resultado de multiplicar uma série de números entre si.",
      a: "Resultado de multiplicar uma série de números entre si.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "fator1",
          detail: "O primeiro número ou intervalo a calcular para o produto.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fator2",
          detail: "Mais números ou intervalos a calcular para o produto.",
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
      d: "Calcula a média harmônica de um conjunto de dados.",
      a: "A média harmônica de um conjunto de dados.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo da população.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a incluir na população.",
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
      d: "Calcula a probabilidade de obter determinado número de sucessos em determinado número de tentativas, dada uma população de determinado tamanho contendo determinado número de sucessos, sem reposição das extrações.",
      a: "Probabilidade de distribuição hipergeométrica.",
      m: [
        5,
        5
      ],
      p: [
        {
          name: "número_sucessos",
          detail: "O número desejado de sucessos.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_sorteios",
          detail: "O número de extrações permitidas.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sucessos_na_população",
          detail: "O número total de sucessos na população.",
          example: "20",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tamanho_população",
          detail: "O tamanho total da população.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Determina o valor lógico da forma da função. \n\nSe cumulativo for VERDADEIRO(), HYPGEOM.DIST retorna a função de distribuição cumulativa;\n\nse for FALSO(), retorna a função de densidade de probabilidade.",
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
      d: "Calcula o valor de y no qual a reta resultante da regressão linear de um conjunto de dados intersectará o eixo y (x=0).",
      a: "Interseção com o eixo y de uma reta derivada por regressão linear.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados_y",
          detail: "O intervalo que representa a matriz ou matriz de dados dependentes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x",
          detail: "O intervalo que representa a matriz ou matriz de dados independentes.",
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
      d: "Calcula a curtose de um conjunto de dados, que descreve a forma, e em particular a \"pontiagudez\", desse conjunto de dados.",
      a: "Curtose de um conjunto de dados.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo do conjunto de dados.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a incluir no conjunto de dados.",
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
      d: "Retorna o n-ésimo maior elemento de um conjunto de dados, onde n é definido pelo usuário.",
      a: "N-ésimo maior elemento de um conjunto de dados.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados",
          detail: "Matriz ou intervalo contendo o conjunto de dados a considerar.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "n",
          detail: "A posição, do maior ao menor, do elemento a retornar.",
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
      d: "Calcula o desvio padrão com base em uma amostra, definindo o texto como o valor `0`.",
      a: "Desvio padrão da amostra (texto como 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo da amostra.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a incluir na amostra.",
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
      d: "Calcula o desvio padrão com base em uma população inteira.",
      a: "Desvio padrão de uma população inteira.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo da população.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a incluir na população.",
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
      d: "Calcula a média geométrica de um conjunto de dados.",
      a: "A média geométrica de um conjunto de dados.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo da população.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a incluir na população.",
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
      d: "Retorna a classificação de um valor especificado em um conjunto de dados. Se houver mais de uma entrada com o mesmo valor no conjunto de dados, será retornada a classificação mais alta das entradas.",
      a: "Classificação mais alta de um valor especificado em um conjunto de dados.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "valor",
          detail: "O valor cuja classificação será determinada.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados",
          detail: "A matriz ou intervalo contendo o conjunto de dados a considerar.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "é_crescente",
          detail: "Se considerar os valores em `dados` em ordem decrescente ou crescente. Se omitido, o padrão é decrescente (FALSO).",
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
      d: "Retorna a classificação de um valor especificado em um conjunto de dados. Se houver mais de uma entrada com o mesmo valor no conjunto de dados, será retornada a classificação média das entradas.",
      a: "Classificação média de um valor especificado em um conjunto de dados.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "valor",
          detail: "O valor cuja classificação será determinada.",
          example: "A10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados",
          detail: "A matriz ou intervalo contendo o conjunto de dados a considerar.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "é_crescente",
          detail: "Se considerar os valores em `dados` em ordem decrescente ou crescente. Se omitido, o padrão é decrescente (FALSO).",
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
      d: "Retorna a classificação percentual (percentil) de 0 a 1 exclusive de um valor especificado em um conjunto de dados.",
      a: "Classificação percentual (percentil) de 0 a 1 exclusive.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "dados",
          detail: "A matriz ou intervalo contendo o conjunto de dados a considerar.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor",
          detail: "O valor cuja classificação percentual será determinada.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "algarismos_significativos",
          detail: "O número de algarismos significativos a usar no cálculo. O padrão é 3.",
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
      d: "Retorna a classificação percentual (percentil) de 0 a 1 inclusive de um valor especificado em um conjunto de dados.",
      a: "Classificação percentual (percentil) de 0 a 1 inclusive.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "dados",
          detail: "A matriz ou intervalo contendo o conjunto de dados a considerar.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor",
          detail: "O valor cuja classificação percentual será determinada.",
          example: " A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "algarismos_significativos",
          detail: "O número de algarismos significativos a usar no cálculo. O padrão é 3.",
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
      d: "Calcula o valor de y esperado para um x especificado com base em uma regressão linear de um conjunto de dados.",
      a: "Valor y esperado com base em regressão linear.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "O valor no eixo x a prever.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_y",
          detail: "O intervalo que representa a matriz ou matriz de dados dependentes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x",
          detail: "O intervalo que representa a matriz ou matriz de dados independentes.",
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
      d: "Retorna a transformação inversa de Fisher de um valor especificado.",
      a: "Transformação inversa de fisher de um valor especificado.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor para o qual calcular a transformação inversa de Fisher.",
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
      d: "Retorna a transformação de Fisher de um valor especificado.",
      a: "Transformação de fisher de um valor especificado.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O valor para o qual calcular a transformação de Fisher.",
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
      d: "Retorna o valor que ocorre com mais frequência em um conjunto de dados.",
      a: "Valor mais frequente em um conjunto de dados.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo a considerar no cálculo da moda.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a considerar no cálculo da moda.",
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
      d: "Retorna o valor da função de distribuição de Weibull (ou função de distribuição cumulativa de Weibull) para uma forma e escala especificadas.",
      a: "Função de distribuição de weibull.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da função de distribuição de Weibull.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "forma",
          detail: "O parâmetro de forma da função de distribuição de Weibull.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "escala",
          detail: "O parâmetro de escala da função de distribuição de Weibull.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Se usar a função de distribuição cumulativa.",
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
      d: "Retorna o número de valores numéricos em um conjunto de dados.",
      a: "O número de valores numéricos em um conjunto de dados.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo a considerar na contagem.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a considerar na contagem.",
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
      d: "Retorna o número de valores em um conjunto de dados.",
      a: "O número de valores em um conjunto de dados.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo a considerar na contagem.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a considerar na contagem.",
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
      d: "Calcula a média das magnitudes dos desvios dos dados em relação à média de um conjunto de dados.",
      a: "Magnitude média dos desvios em relação à média.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo da amostra.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a incluir na amostra.",
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
      d: "Retorna o valor médio numérico em um conjunto de dados, ignorando texto.",
      a: "Valor médio numérico em um conjunto de dados, ignorando texto.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo a considerar no cálculo do valor médio.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a considerar no cálculo do valor médio.",
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
      d: "Retorna o valor médio numérico em um conjunto de dados.",
      a: "Valor médio numérico em um conjunto de dados.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo a considerar no cálculo do valor médio.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a considerar no cálculo do valor médio.",
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
      d: "Calcula a probabilidade de obter determinado número de sucessos (ou um número máximo de sucessos) em determinado número de tentativas, dada uma população de determinado tamanho contendo determinado número de sucessos, com reposição das extrações.",
      a: "Probabilidade de distribuição binomial.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "número_sucessos",
          detail: "O número de sucessos para o qual calcular a probabilidade em `número_tentativas` tentativas.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_tentativas",
          detail: "O número de tentativas independentes.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilidade_sucesso",
          detail: "A probabilidade de sucesso em determinada tentativa.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Se usar a distribuição binomial cumulativa.",
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
      d: "Calcula o menor valor para o qual a distribuição binomial cumulativa é maior ou igual a um critério especificado.",
      a: "Função de distribuição binomial cumulativa inversa.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "número_tentativas",
          detail: "O número de tentativas independentes.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilidade_sucesso",
          detail: "A probabilidade de sucesso em determinada tentativa.",
          example: "0.005",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilidade_meta",
          detail: "O limite de probabilidade desejado.",
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
      d: "Calcula a largura de metade do intervalo de confiança para uma distribuição normal.",
      a: "Intervalo de confiança para uma distribuição normal.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "alfa",
          detail: "Um menos o nível de confiança desejado. Por exemplo, `0,1` para uma confiança de `0,9`, ou 90%.",
          example: "0.05",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desvio_padrão",
          detail: "O desvio padrão da população.",
          example: "1.6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tamanho_população",
          detail: "O tamanho da população.",
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
      d: "Calcula r, o coeficiente de correlação momento-produto de Pearson de um conjunto de dados.",
      a: "Coeficiente de correlação momento-produto de Pearson.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados_y",
          detail: "O intervalo que representa a matriz ou matriz de dados dependentes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x",
          detail: "O intervalo que representa a matriz ou matriz de dados independentes.",
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
      d: "Calcula a covariância de um conjunto de dados.",
      a: "A covariância de um conjunto de dados.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados_y",
          detail: "O intervalo que representa a matriz ou matriz de dados dependentes.",
          example: "B2:B100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x",
          detail: "O intervalo que representa a matriz ou matriz de dados independentes.",
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
      d: "Calcula a covariância amostral de um conjunto de dados.",
      a: "A covariância amostral de um conjunto de dados.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados_y",
          detail: "O intervalo que representa a matriz ou matriz de dados dependentes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x",
          detail: "O intervalo que representa a matriz ou matriz de dados independentes.",
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
      d: "Calcula a soma dos quadrados dos desvios com base em uma amostra.",
      a: "A soma dos quadrados dos desvios com base em uma amostra.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo da amostra.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a incluir na amostra.",
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
      d: "Retorna o valor da função de distribuição exponencial com um lambda especificado em um valor especificado.",
      a: "Função de distribuição exponencial.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da função de distribuição exponencial.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "lambda",
          detail: "O lambda para especificar a função de distribuição exponencial.",
          example: "0.5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Se usar a distribuição cumulativa exponencial.",
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
      d: "Retorna a média de um intervalo dependendo de critérios.",
      a: "Média de valores dependendo de critérios.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "intervalo_critérios",
          detail: "O intervalo a verificar em relação a `critério`.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critério",
          detail: "O padrão ou teste a aplicar a `intervalo_critérios`.",
          example: "\">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo_média",
          detail: "O intervalo a calcular a média. Se não incluído, `intervalo_critérios` é usado para a média em seu lugar.",
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
      d: "Retorna a média de um intervalo dependendo de múltiplos critérios.",
      a: "Média de valores dependendo de múltiplos critérios.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "intervalo_média",
          detail: "O intervalo a calcular a média.",
          example: "A1:A10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo_critérios1",
          detail: "O intervalo a verificar em relação a `critério1`.",
          example: " B1:B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critério1",
          detail: "O padrão ou teste a aplicar a `intervalo_critérios1`.",
          example: " \">20\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo_critérios2",
          detail: "Intervalos adicionais a verificar.",
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
      d: "Retorna o número de maneiras de escolher determinado número de objetos de um conjunto de objetos de determinado tamanho, considerando a ordem.",
      a: "Número de permutações de um número de objetos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "n",
          detail: "O tamanho do conjunto de objetos do qual escolher.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "k",
          detail: "O número de objetos a escolher.",
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
      d: "Calcula a média de um conjunto de dados excluindo uma proporção dos dados dos extremos superior e inferior do conjunto de dados.",
      a: "Média de um conjunto de dados excluindo extremos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados",
          detail: "Matriz ou intervalo contendo o conjunto de dados a considerar.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "proporção_excluída",
          detail: "A proporção do conjunto de dados a excluir, dos extremos do conjunto.",
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
      d: "Retorna o valor em um determinado percentil de um conjunto de dados, exclusive 0 e 1.",
      a: "Valor em um determinado percentil de um conjunto de dados, exclusive 0 e 1.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados",
          detail: "A matriz ou intervalo contendo o conjunto de dados a considerar.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "percentil",
          detail: "O percentil, exclusive 0 e 1, cujo valor dentro de 'dados' será calculado e retornado.",
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
      d: "Retorna o valor em um determinado percentil de um conjunto de dados.",
      a: "Valor em um determinado percentil de um conjunto de dados.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados",
          detail: "A matriz ou intervalo contendo o conjunto de dados a considerar.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "percentil",
          detail: "O percentil cujo valor dentro de `dados` será calculado e retornado.",
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
      d: "Calcula r, o coeficiente de correlação momento-produto de Pearson de um conjunto de dados.",
      a: "Coeficiente de correlação momento-produto de Pearson.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados_y",
          detail: "O intervalo que representa a matriz ou matriz de dados dependentes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x",
          detail: "O intervalo que representa a matriz ou matriz de dados independentes.",
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
      d: "Retorna o valor da função de distribuição normal padrão inversa para um valor especificado.",
      a: "Função de distribuição normal padrão inversa.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da função de distribuição normal padrão inversa.",
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
      d: "Retorna o valor da função de distribuição cumulativa normal padrão para um valor especificado.",
      a: "Função de distribuição cumulativa normal padrão.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da função de distribuição cumulativa normal padrão.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Determina o valor lógico da forma da função. \n\nSe for VERDADEIRO(), retorna a função de distribuição cumulativa;\n\nSe for FALSO(), retorna a função de densidade de probabilidade.",
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
      d: "Retorna o valor da função de distribuição normal inversa para um valor, média e desvio padrão especificados.",
      a: "Função de distribuição normal inversa.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da função de distribuição normal inversa.",
          example: "0.75",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "média",
          detail: "A média (mu) da função de distribuição normal.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desvio_padrão",
          detail: "O desvio padrão (sigma) da função de distribuição normal.",
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
      d: "Retorna o valor da função de distribuição normal (ou função de distribuição cumulativa normal) para um valor, média e desvio padrão especificados.",
      a: "Função de distribuição normal.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da função de distribuição normal.",
          example: "2.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "média",
          detail: "A média (mu) da função de distribuição normal.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desvio_padrão",
          detail: "O desvio padrão (sigma) da função de distribuição normal.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Se usar a função de distribuição cumulativa normal em vez da função de distribuição.",
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
      d: "Calcula a probabilidade de obter determinado número de falhas antes de determinado número de sucessos, dada uma probabilidade de sucesso em tentativas independentes.",
      a: "Probabilidade de distribuição binomial negativa.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "número_falhas",
          detail: "O número de falhas a modelar.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_sucessos",
          detail: "O número de sucessos a modelar.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "probabilidade_sucesso",
          detail: "A probabilidade de sucesso em determinada tentativa.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Determina o valor lógico da forma da função. \n\nSe for VERDADEIRO(), retorna a função de distribuição cumulativa;\n\nSe for FALSO(), retorna a função de densidade de probabilidade.",
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
      d: "Retorna o valor numérico mínimo em um conjunto de dados.",
      a: "Valor numérico mínimo em um conjunto de dados.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo a considerar no cálculo do valor mínimo.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a considerar no cálculo do valor mínimo.",
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
      d: "Retorna o valor mínimo em um conjunto de dados numérico.",
      a: "Valor mínimo em um conjunto de dados numérico.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo a considerar no cálculo do valor mínimo.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a considerar no cálculo do valor mínimo.",
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
      d: "Retorna o valor mediano em um conjunto de dados numérico.",
      a: "Valor mediano em um conjunto de dados numérico.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo a considerar no cálculo do valor mediano.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a considerar no cálculo do valor mediano.",
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
      d: "Retorna o valor numérico máximo em um conjunto de dados.",
      a: "Valor numérico máximo em um conjunto de dados.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo a considerar no cálculo do valor máximo.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a considerar no cálculo do valor máximo.",
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
      d: "Retorna o valor máximo em um conjunto de dados numérico.",
      a: "Valor máximo em um conjunto de dados numérico.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo a considerar no cálculo do valor máximo.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a considerar no cálculo do valor máximo.",
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
      d: "Retorna o valor da distribuição cumulativa log-normal inversa com a média e o desvio padrão fornecidos em um valor especificado.",
      a: "Função de distribuição cumulativa log-normal inversa.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da função de distribuição cumulativa log-normal inversa.",
          example: "0.4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "média",
          detail: "A média (mu) da função de distribuição cumulativa log-normal inversa.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desvio_padrão",
          detail: "O desvio padrão (sigma) da função de distribuição cumulativa log-normal inversa.",
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
      d: "Retorna o valor da distribuição cumulativa log-normal com a média e o desvio padrão fornecidos em um valor especificado.",
      a: "Probabilidade de distribuição cumulativa log-normal.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da função de distribuição cumulativa log-normal.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "média",
          detail: "A média (mu) da função de distribuição cumulativa log-normal.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desvio_padrão",
          detail: "O desvio padrão (sigma) da função de distribuição cumulativa log-normal.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Determina o valor lógico da forma da função. \n\nSe for VERDADEIRO(), retorna a função de distribuição cumulativa;\n\nSe for FALSO(), retorna a função de densidade de probabilidade.",
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
      d: "Retorna o valor-p unilateral de um teste Z com distribuição padrão.",
      a: "Valor-p unilateral de um teste z.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "dados",
          detail: "A matriz ou intervalo contendo o conjunto de dados a considerar.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "valor",
          detail: "A estatística de teste a usar no teste Z.",
          example: "B2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desvio_padrão",
          detail: "O desvio padrão a assumir para o teste Z. Se não fornecido, será usado o desvio padrão dos dados.",
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
      d: "Dado um conjunto de valores e probabilidades correspondentes, calcula a probabilidade de um valor escolhido aleatoriamente estar entre dois limites.",
      a: "Probabilidade de valores estarem em um intervalo.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "dados",
          detail: "Matriz ou intervalo contendo o conjunto de dados a considerar.",
          example: "A3:A6",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "probabilidades",
          detail: "Matriz ou intervalo contendo as probabilidades correspondentes a `dados`.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "limite_inferior",
          detail: "O limite inferior do intervalo de valores para o qual calcular a probabilidade.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "limite_superior",
          detail: "O limite superior do intervalo de valores para o qual calcular a probabilidade.",
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
      d: "Retorna um valor mais próximo de um quartil especificado de um conjunto de dados, exclusive 0 e 4.",
      a: "Valor mais próximo de um quartil específico de um conjunto de dados, exclusive 0 e 4.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados",
          detail: "A matriz ou intervalo contendo o conjunto de dados a considerar.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_quartil",
          detail: "Qual quartil retornar.",
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
      d: "Retorna um valor mais próximo de um quartil especificado de um conjunto de dados.",
      a: "Valor mais próximo de um quartil específico de um conjunto de dados.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados",
          detail: "A matriz ou intervalo contendo o conjunto de dados a considerar.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_quartil",
          detail: "Qual valor de quartil retornar.",
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
      d: "Retorna o valor da função de distribuição de Poisson (ou função de distribuição cumulativa de Poisson) para um valor e média especificados.",
      a: "Função de distribuição de poisson.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da função de distribuição de Poisson.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "média",
          detail: "A média (mu) da função de distribuição de Poisson.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Se usar a função de distribuição cumulativa de Poisson em vez da função de distribuição.",
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
      d: "Calcula o quadrado de r, o coeficiente de correlação momento-produto de Pearson de um conjunto de dados.",
      a: "Quadrado do coeficiente de correlação.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados_y",
          detail: "O intervalo que representa a matriz ou matriz de dados dependentes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x",
          detail: "O intervalo que representa a matriz ou matriz de dados independentes.",
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
      d: "Calcula a probabilidade de cauda esquerda para uma distribuição t de Student com uma entrada dada (x).",
      a: "A distribuição t de Student de cauda esquerda.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da função de distribuição t.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "graus_liberdade",
          detail: "O número de graus de liberdade.",
          example: "30",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Se cumulativo for VERDADEIRO, T.DIST retorna a função de distribuição cumulativa; se for FALSO, retorna a função de densidade de probabilidade.",
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
      d: "Calcula a probabilidade para uma distribuição t de Student bicaudal com uma entrada dada (x).",
      a: "A distribuição t de Student bicaudal.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da função de distribuição t.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "graus_liberdade",
          detail: "O número de graus de liberdade.",
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
      d: "Calcula a probabilidade de cauda direita para uma distribuição t de Student com uma entrada dada (x).",
      a: "A distribuição t de Student de cauda direita.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da função de distribuição t.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "graus_liberdade",
          detail: "O número de graus de liberdade.",
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
      d: "Calcula a inversa negativa da função TDIST unilateral.",
      a: "T.INV",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "probabilidade",
          detail: "A probabilidade associada à distribuição t bicaudal.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "graus_liberdade",
          detail: "O número de graus de liberdade.",
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
      d: "Calcula a inversa da função TDIST bicaudal.",
      a: "T.INV.2T",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "probabilidade",
          detail: "A probabilidade associada à distribuição t bicaudal.",
          example: "0.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "graus_liberdade",
          detail: "O número de graus de liberdade.",
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
      d: "Teste t. Retorna a probabilidade associada ao teste t de Student. Determina se é provável que duas amostras venham das mesmas duas populações subjacentes que têm a mesma média.",
      a: "Retorna a probabilidade associada ao teste t.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "intervalo1",
          detail: "A primeira amostra de dados ou grupo de células a considerar para o teste t.",
          example: "A1:A4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "intervalo2",
          detail: "A segunda amostra de dados ou grupo de células a considerar para o teste t.",
          example: "B1:B4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "caudas",
          detail: "Especifica o número de caudas da distribuição.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tipo",
          detail: "Especifica o tipo de teste t.",
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
      d: "Calcula a distribuição de probabilidade F de cauda esquerda (grau de diversidade) para dois conjuntos de dados com uma entrada x dada. Também chamada de distribuição de Fisher-Snedecor ou distribuição F de Snedecor.",
      a: "Distribuição de probabilidade F (cauda esquerda).",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da função de distribuição de probabilidade F. O valor no qual avaliar a função.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "graus_liberdade1",
          detail: "O numerador do número de graus de liberdade.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "graus_liberdade2",
          detail: "O denominador do número de graus de liberdade.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Valor lógico que determina a forma da função.",
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
      d: "Calcula a distribuição de probabilidade F de cauda direita (grau de diversidade) para dois conjuntos de dados com uma entrada x dada. Também chamada de distribuição de Fisher-Snedecor ou distribuição F de Snedecor.",
      a: "Distribuição de probabilidade F.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "x",
          detail: "A entrada da função de distribuição de probabilidade F. O valor no qual avaliar a função.",
          example: "15.35",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "graus_liberdade1",
          detail: "O numerador do número de graus de liberdade.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "graus_liberdade2",
          detail: "O denominador do número de graus de liberdade.",
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
      d: "Calcula a variância com base em uma população inteira.",
      a: "Variância de toda a população.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo da população.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a incluir na população.",
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
      d: "Calcula a variância com base em uma amostra.",
      a: "Variância.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo da amostra.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a incluir na amostra.",
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
      d: "Calcula a variância com base em uma amostra, definindo o texto como o valor `0`.",
      a: "Variância da amostra (texto como 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo da amostra.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a incluir na amostra.",
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
      d: "Calcula a variância com base em uma população inteira, definindo o texto como o valor `0`.",
      a: "Variância de toda a população (texto como 0).",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo da população.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a incluir na população.",
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
      d: "Calcula o erro padrão do valor y previsto para cada x na regressão de um conjunto de dados.",
      a: "Erro padrão de valores y previstos na regressão.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados_y",
          detail: "O intervalo que representa a matriz ou matriz de dados dependentes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x",
          detail: "O intervalo que representa a matriz ou matriz de dados independentes.",
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
      d: "Calcula o equivalente normalizado de uma variável aleatória, dados a média e o desvio padrão da distribuição.",
      a: "Equivalente normalizado de uma variável aleatória.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "valor",
          detail: "O valor da variável aleatória a normalizar.",
          example: "96",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "média",
          detail: "A média da distribuição.",
          example: "80",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desvio_padrão",
          detail: "O desvio padrão da distribuição.",
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
      d: "Retorna o n-ésimo menor elemento de um conjunto de dados, onde n é definido pelo usuário.",
      a: "N-ésimo menor elemento em um conjunto de dados.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados",
          detail: "A matriz ou intervalo contendo o conjunto de dados a considerar.",
          example: "A2:B100",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "n",
          detail: "A posição, do menor ao maior, do elemento a retornar.",
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
      d: "Calcula a inclinação da reta resultante da regressão linear de um conjunto de dados.",
      a: "Inclinação da reta a partir da regressão linear dos dados.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dados_y",
          detail: "O intervalo que representa a matriz ou matriz de dados dependentes.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x",
          detail: "O intervalo que representa a matriz ou matriz de dados independentes.",
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
      d: "Calcula a assimetria de um conjunto de dados, que descreve a simetria desse conjunto de dados em relação à média.",
      a: "Assimetria de um conjunto de dados.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo do conjunto de dados.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a incluir no conjunto de dados.",
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
      d: "Calcula a assimetria de um conjunto de dados, que descreve a simetria desse conjunto de dados em relação à média. Isso presume que o conjunto de dados é para a população.",
      a: "Assimetria do conjunto de dados de uma população.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor ou intervalo do conjunto de dados.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Valores ou intervalos adicionais a incluir no conjunto de dados.",
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
      d: "Pesquisa vertical. Pesquisa pela primeira coluna de um intervalo por uma chave e retorna o valor de uma célula especificada na linha encontrada.",
      a: "Pesquisa vertical.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "chave_pesquisa",
          detail: "O valor a pesquisar. Por exemplo, `42`, `\"Gatos\"` ou `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo",
          detail: "O intervalo a considerar para a pesquisa. A primeira coluna do intervalo é pesquisada pela chave especificada em `chave_pesquisa`.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "índice",
          detail: "O índice da coluna do valor a retornar, onde a primeira coluna em `intervalo` é numerada como 1.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "está_ordenado",
          detail: "Indica se a coluna a ser pesquisada (a primeira coluna do intervalo especificado) está ordenada; nesse caso, a correspondência mais próxima de `chave_pesquisa` será retornada.",
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
      d: "Pesquisa horizontal. Pesquisa pela primeira linha de um intervalo por uma chave e retorna o valor de uma célula especificada na coluna encontrada.",
      a: "Pesquisa horizontal.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "chave_pesquisa",
          detail: "O valor a pesquisar. Por exemplo, `42`, `\"Gatos\"` ou `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo",
          detail: "O intervalo a considerar para a pesquisa. A primeira linha do intervalo é pesquisada pela chave especificada em `chave_pesquisa`.",
          example: "A2:Z6",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "índice",
          detail: "O índice da linha do valor a retornar, onde a primeira linha em `intervalo` é numerada como 1.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "está_ordenado",
          detail: "Indica se a linha a ser pesquisada (a primeira linha do intervalo especificado) está ordenada.",
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
      d: "Pesquisa em uma linha ou coluna ordenada por uma chave e retorna o valor da célula em um intervalo de resultados localizado na mesma posição da linha ou coluna de pesquisa.",
      a: "Pesquisar um valor.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "chave_pesquisa",
          detail: "O valor a pesquisar na linha ou coluna. Por exemplo, `42`, `\"Gatos\"` ou `I24`.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo_pesquisa|matriz_resultado_pesquisa",
          detail: "Uma forma de usar esta função é fornecer uma única linha ou coluna ordenada `intervalo_pesquisa` na qual pesquisar `chave_pesquisa`, com um segundo argumento `intervalo_resultado`. A outra forma é combinar esses dois argumentos em uma única `matriz_resultado_pesquisa`, onde a primeira linha ou coluna é pesquisada e um valor é retornado da última linha ou coluna da matriz. Se `chave_pesquisa` não for encontrada, uma correspondência não exata pode ser retornada.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo_resultado",
          detail: "O intervalo do qual retornar um resultado. O valor retornado corresponde à localização onde `chave_pesquisa` é encontrada em `intervalo_pesquisa`. Este intervalo deve conter apenas uma linha ou coluna e não deve ser usado se estiver usando o método `matriz_resultado_pesquisa`.",
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
      d: "Retorna uma referência de célula como uma string.",
      a: "Referência de célula como uma string.",
      m: [
        2,
        5
      ],
      p: [
        {
          name: "linha",
          detail: "O número da linha da referência de célula.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "coluna",
          detail: "O número da coluna (não o nome) da referência de célula. `A` é a coluna número `1`.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "modo_relativo_absoluto",
          detail: "Um indicador de se a referência é absoluta de linha/coluna. `1` é linha e coluna absolutas (ex. $A$1), `2` é linha absoluta e coluna relativa (ex. A$1), `3` é linha relativa e coluna absoluta (ex. $A1), e `4` é linha e coluna relativas (ex. A1).",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "usar_notação_a1",
          detail: "Um booleano indicando se deve usar a notação estilo `A1` (VERDADEIRO) ou notação estilo `R1C1` (FALSO).",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "planilha",
          detail: "Texto indicando o nome da planilha para a qual o endereço aponta.",
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
      d: "Retorna uma referência de célula especificada por uma string.",
      a: "Uma referência de célula especificada por uma string.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "referência_célula_como_texto",
          detail: "Uma referência de célula, escrita como uma string entre aspas.",
          example: "\"Sheet2!\"&B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "é_notação_a1",
          detail: "Indica se a referência de célula está na notação A1 (VERDADEIRO) ou notação R1C1 (FALSO).",
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
      d: "Retorna o número da linha de uma célula especificada.",
      a: "Número da linha de uma célula especificada.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "referência_célula",
          detail: "A célula cujo número de linha será retornado.",
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
      d: "Retorna o número de linhas em uma matriz ou intervalo especificado.",
      a: "Número de linhas em uma matriz ou intervalo especificado.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "intervalo",
          detail: "O intervalo cuja contagem de linhas será retornada.",
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
      d: "Retorna o número da coluna de uma célula especificada, com `A=1`.",
      a: "Número da coluna de uma célula especificada.",
      m: [
        0,
        1
      ],
      p: [
        {
          name: "referência_célula",
          detail: "A célula cujo número de coluna será retornado. A coluna `A` corresponde a `1`.",
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
      d: "Retorna o número de colunas em uma matriz ou intervalo especificado.",
      a: "Número de colunas em uma matriz ou intervalo especificado.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "intervalo",
          detail: "O intervalo cuja contagem de colunas será retornada.",
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
      d: "Retorna uma referência de intervalo deslocada por um número especificado de linhas e colunas a partir de uma referência de célula inicial.",
      a: "Uma referência de intervalo deslocada em relação a uma célula.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "referência_célula",
          detail: "O ponto de partida a partir do qual contar as linhas e colunas de deslocamento.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "linhas_deslocamento",
          detail: "O número de linhas para deslocar.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colunas_deslocamento",
          detail: "O número de colunas para deslocar.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "altura",
          detail: "A altura do intervalo a retornar, começando no destino do deslocamento.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "largura",
          detail: "A largura do intervalo a retornar, começando no destino do deslocamento.",
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
      d: "Retorna a posição relativa de um item em um intervalo que corresponde a um valor especificado.",
      a: "Posição de item em intervalo que corresponde a valor.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "chave_pesquisa",
          detail: "O valor a pesquisar. Por exemplo, `42`, `\"Gatos\"` ou `I24`.",
          example: "\"Sunday\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo",
          detail: "A matriz unidimensional a ser pesquisada.",
          example: "A2:A9",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "tipo_pesquisa",
          detail: "O método de pesquisa. `1` (padrão) encontra o maior valor menor ou igual a `chave_pesquisa` quando `intervalo` está ordenado em ordem crescente. `0` encontra o valor exato quando `intervalo` não está ordenado. `-1` encontra o menor valor maior ou igual a `chave_pesquisa` quando `intervalo` está ordenado em ordem decrescente.",
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
      d: "Retorna o conteúdo de uma célula, especificado por deslocamento de linha e coluna.",
      a: "Conteúdo de célula especificado por deslocamento de linha e coluna.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "referência",
          detail: "A matriz de células na qual o deslocamento será aplicado.",
          example: "A1:C20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "linha",
          detail: "O número de linhas de deslocamento.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "coluna",
          detail: "O número de colunas de deslocamento.",
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
      d: "Extrai um valor agregado de uma tabela dinâmica correspondente aos cabeçalhos de linha e coluna especificados.",
      a: "Extrai um valor agregado de uma tabela dinâmica correspondente aos cabeçalhos de linha e coluna especificados.",
      m: [
        2,
        254
      ],
      p: [
        {
          name: "nome_valor",
          detail: "O nome do valor na tabela dinâmica para o qual você deseja obter dados.",
          example: "\"SUM of number of units\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "célula_tabela_dinâmica",
          detail: "Qualquer referência a uma célula na tabela dinâmica desejada (o canto superior é recomendado).",
          example: "'Pivot table'!A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "coluna_original",
          detail: "O nome da coluna no conjunto de dados original (não a tabela dinâmica).",
          example: "\"division\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        },
        {
          name: "item_tabela_dinâmica",
          detail: "O nome da linha ou coluna mostrada na tabela dinâmica correspondente a *coluna_original* que você deseja recuperar.",
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
      d: "Retorna um elemento de uma lista de escolhas com base no índice.",
      a: "Um elemento de uma lista de escolhas com base no índice.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "índice",
          detail: "Qual escolha (das até 30 fornecidas) retornar.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "escolha1",
          detail: "Um valor potencial a retornar. Obrigatório. Pode ser uma referência a uma célula ou um valor individual.",
          example: "\"A\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "escolha2",
          detail: "Valores adicionais entre os quais escolher.",
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
      d: "Cria um hiperlink dentro de uma célula.",
      a: "Cria um hiperlink dentro de uma célula.",
      p: [
        {
          name: "url",
          detail: "A URL completa do local do link entre aspas, ou uma referência a uma célula contendo tal URL.",
          example: "\"http://www.luckysheet.com/\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texto_link",
          detail: "O texto a exibir na célula como o link, entre aspas, ou uma referência a uma célula contendo tal rótulo.",
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
      d: "Converte uma hora, minuto e segundo fornecidos em um horário.",
      a: "Converte hora/minuto/segundo em um horário.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "hora",
          detail: "O componente de hora do horário.",
          example: "11",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "minuto",
          detail: "O componente de minuto do horário.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "segundo",
          detail: "O componente de segundo do horário.",
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
      d: "Retorna a fração de um dia de 24 horas que o horário representa.",
      a: "Converte uma string de horário em sua representação numérica de série.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto_hora",
          detail: "A string que contém a representação do horário.",
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
      d: "Retorna uma data no último dia de um mês que ocorre um número especificado de meses antes ou depois de outra data.",
      a: "Último dia de um mês antes ou depois de uma data.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_início",
          detail: "A data a partir da qual calcular o resultado.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_de_meses",
          detail: "O número de meses antes (negativo) ou depois (positivo) de 'data_inicial' a considerar.",
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
      d: "Retorna uma data um número especificado de meses antes ou depois de outra data.",
      a: "Data um número de meses antes/depois de outra data.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_início",
          detail: "A data a partir da qual calcular o resultado.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_de_meses",
          detail: "O número de meses antes (negativo) ou depois (positivo) de 'data_inicial' a calcular.",
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
      d: "Retorna o componente de segundos de um horário específico, em formato numérico.",
      a: "Componente de segundos de um horário específico.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hora",
          detail: "O horário a partir do qual calcular o componente de segundos.",
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
      d: "Retorna o componente de minutos de um horário específico, em formato numérico.",
      a: "Componente de minutos de um horário específico.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hora",
          detail: "O horário a partir do qual calcular o componente de minutos.",
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
      d: "Retorna o componente de horas de um horário específico, em formato numérico.",
      a: "Componente de horas de um horário específico.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "hora",
          detail: "O horário a partir do qual calcular o componente de horas.",
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
      d: "Retorna a data e hora atuais como um valor de data.",
      a: "Data e hora atuais como um valor de data.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "NETWORKDAYS",
      t: 6,
      d: "Retorna o número de dias úteis líquidos entre dois dias fornecidos.",
      a: "Dias úteis líquidos entre dois dias fornecidos.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "data_início",
          detail: "A data de início do período a partir do qual calcular o número de dias úteis líquidos.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_final",
          detail: "A data de término do período a partir do qual calcular o número de dias úteis líquidos.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feriados",
          detail: "Um intervalo ou constante de matriz contendo os números de série de datas a considerar como feriados.",
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
      d: "Retorna o número de dias úteis líquidos entre dois dias fornecidos, excluindo dias de fim de semana e feriados especificados.",
      a: "Dias úteis líquidos entre duas datas (especificando fins de semana).",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "data_início",
          detail: "A data de início do período a partir do qual calcular o número de dias úteis líquidos.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_final",
          detail: "A data de término do período a partir do qual calcular o número de dias úteis líquidos.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fim_de_semana",
          detail: "Um número ou string representando quais dias da semana são considerados fim de semana.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feriados",
          detail: "Um intervalo ou constante de matriz contendo as datas a considerar como feriados.",
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
      d: "Retorna um número representando a semana ISO do ano em que a data fornecida cai.",
      a: "Número da semana ISO do ano.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "data",
          detail: "A data para a qual determinar o número da semana ISO. Deve ser uma referência a uma célula contendo uma data, uma função retornando um tipo de data, ou um número.",
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
      d: "Retorna um número representando a semana do ano em que a data fornecida cai.",
      a: "Número da semana do ano.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "data",
          detail: "A data para a qual determinar o número da semana. Deve ser uma referência a uma célula contendo uma data, uma função retornando um tipo de data, ou um número.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tipo",
          detail: "Um número representando o dia em que uma semana começa. Domingo = 1.",
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
      d: "Retorna um número representando o dia da semana da data fornecida.",
      a: "Dia da semana da data fornecida (como número).",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "data",
          detail: "A data para a qual determinar o dia da semana. Deve ser uma referência a uma célula contendo uma data, uma função retornando um tipo de data, ou um número.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tipo",
          detail: "Um número indicando qual sistema de numeração usar para representar os dias da semana. Por padrão, a contagem começa com domingo = 1.",
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
      d: "Retorna o dia do mês em que uma data específica cai, em formato numérico.",
      a: "Dia do mês em que uma data específica cai.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "data",
          detail: "A data da qual extrair o dia.",
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
      d: "Retorna o número de dias entre duas datas.",
      a: "Número de dias entre duas datas.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "data_final",
          detail: "O fim do intervalo de datas.",
          example: "2011-3-15",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_início",
          detail: "O início do intervalo de datas.",
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
      d: "Retorna a diferença entre dois dias com base no ano de 360 dias usado em alguns cálculos de juros financeiros.",
      a: "Dias entre duas datas em um ano de 360 dias.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "data_início",
          detail: "A data inicial a considerar no cálculo. Deve ser uma referência a uma célula contendo uma data, uma função retornando um tipo de data, ou um número.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_final",
          detail: "A data final a considerar no cálculo. Deve ser uma referência a uma célula contendo uma data, uma função retornando um tipo de data, ou um número.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "método",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Converte um ano, mês e dia fornecidos em uma data.",
      a: "Converte ano/mês/dia em uma data.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "ano",
          detail: "O componente de ano da data.",
          example: "1969",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mês",
          detail: "O componente de mês da data.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dia",
          detail: "O componente de dia da data.",
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
      d: "Converte uma string de data fornecida em um formato conhecido em um valor de data.",
      a: "Converte uma string de data em um valor de data.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto_data",
          detail: "A string representando a data.",
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
      d: "Calcula o número de dias, meses ou anos entre duas datas.",
      a: "Diferença de datas.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "data_início",
          detail: "A data inicial a considerar no cálculo. Deve ser uma referência a uma célula contendo uma data, uma função retornando um tipo de data, ou um número.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_final",
          detail: "A data final a considerar no cálculo. Deve ser uma referência a uma célula contendo uma data, uma função retornando um tipo de data, ou um número.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "unidade",
          detail: "Uma abreviação de string para unidade de tempo. Por exemplo, \"M\" para mês. Os valores aceitos são \"Y\",\"M\",\"D\",\"MD\",\"YM\",\"YD\".",
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
      d: "Calcula a data após um número de dias úteis a partir de uma data inicial especificada.",
      a: "Número de dias úteis a partir da data inicial.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "data_início",
          detail: "A data a partir da qual começar a contagem.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_dias",
          detail: "O número de dias úteis a avançar a partir de `data_inicial`. Se negativo, conta para trás.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "feriados",
          detail: "Um intervalo ou constante de matriz contendo as datas a considerar como feriados.",
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
      d: "Calcula a data após um número especificado de dias úteis, excluindo dias de fim de semana e feriados especificados.",
      a: "Data após um número de dias úteis (especificando fins de semana).",
      m: [
        2,
        4
      ],
      p: [
        {
          name: "data_início",
          detail: "A data a partir da qual começar a contagem.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_dias",
          detail: "O número de dias úteis a avançar a partir de `data_inicial`. Se negativo, conta para trás.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_de_semana",
          detail: "Um número ou string representando quais dias da semana são considerados fim de semana.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feriados",
          detail: "Um intervalo ou constante de matriz contendo as datas a considerar como feriados.",
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
      d: "Retorna o ano especificado por uma data fornecida.",
      a: "Ano especificado por uma data fornecida.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "data",
          detail: "A data da qual extrair o ano.",
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
      d: "Retorna o número de anos, incluindo frações de anos, entre duas datas usando uma convenção de contagem de dias especificada.",
      a: "Número exato de anos entre duas datas.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "data_início",
          detail: "A data inicial a considerar no cálculo. Deve ser uma referência a uma célula contendo uma data, uma função retornando um tipo de data, ou um número.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_final",
          detail: "A data final a considerar no cálculo. Deve ser uma referência a uma célula contendo uma data, uma função retornando um tipo de data, ou um número.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Retorna a data atual como um valor de data.",
      a: "Data atual como um valor de data.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "MONTH",
      t: 6,
      d: "Retorna o mês do ano em que uma data específica cai, em formato numérico.",
      a: "Mês do ano em que uma data específica cai.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "data",
          detail: "A data da qual extrair o mês.",
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
      d: "Calcula a taxa de juros efetiva anual dadas a taxa nominal e o número de períodos de capitalização por ano.",
      a: "Taxa de juros efetiva anual.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "taxa_nominal",
          detail: "A taxa de juros nominal por ano.",
          example: "0.99",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "períodos_por_ano",
          detail: "O número de períodos de capitalização por ano.",
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
      d: "Formata um número na moeda específica da localidade da sua planilha.",
      a: "Formata um número como moeda específica da localidade da sua planilha.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número",
          detail: "O valor a formatar.",
          example: "1.2351",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_casas_decimais",
          detail: "O número de casas decimais a exibir.",
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
      d: "Converte uma cotação de preço fornecida como fração decimal em um valor decimal.",
      a: "Converte uma fração decimal em um valor decimal.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "preço_fracionário",
          detail: "A cotação de preço fornecida usando convenções decimais fracionárias.",
          example: "100.10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unidade",
          detail: "As unidades da fração, ex. `8` para oitavos ou `32` para trinta e dois avos.",
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
      d: "Converte uma cotação de preço fornecida como valor decimal em uma fração decimal.",
      a: "Converte um valor decimal em uma fração decimal.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "preço_decimal",
          detail: "A cotação de preço fornecida como valor decimal.",
          example: "100.125",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unidade",
          detail: "As unidades da fração desejada, ex. `8` para oitavos ou `32` para trinta e dois avos.",
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
      d: "Calcula a depreciação de um ativo para um período especificado usando o método do saldo decrescente aritmético.",
      a: "Depreciação via método do saldo decrescente.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "custo",
          detail: "O custo inicial do ativo.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_residual",
          detail: "O valor do ativo ao final da depreciação.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vida_útil",
          detail: "O número de períodos ao longo dos quais o ativo é depreciado.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "O período único dentro de `vida_útil` para o qual calcular a depreciação.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mês",
          detail: "O número de meses no primeiro ano de depreciação.",
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
      d: "Calcula a depreciação de um ativo para um período especificado usando o método do saldo duplamente decrescente.",
      a: "Depreciação via método do saldo duplamente decrescente.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "custo",
          detail: "O custo inicial do ativo.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_residual",
          detail: "O valor do ativo ao final da depreciação.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vida_útil",
          detail: "O número de períodos ao longo dos quais o ativo é depreciado.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "O período único dentro de `vida_útil` para o qual calcular a depreciação.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fator",
          detail: "O fator pelo qual a depreciação diminui.",
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
      d: "Calcula a taxa de juros de um investimento de anuidade com base em pagamentos periódicos de valor constante e a suposição de uma taxa de juros constante.",
      a: "Taxa de juros de um investimento de anuidade.",
      m: [
        3,
        6
      ],
      p: [
        {
          name: "número_períodos",
          detail: "O número de pagamentos a serem feitos.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "pagamento_por_período",
          detail: "O valor por período a ser pago.",
          example: "-100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "O valor atual da anuidade.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "O valor futuro restante após o último pagamento ter sido feito.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Se os pagamentos são devidos no final (`0`) ou no início (`1`) de cada período.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "estimativa_taxa",
          detail: "Uma estimativa de qual será a taxa de juros.",
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
      d: "Calcula o principal cumulativo pago em um intervalo de períodos de pagamento para um investimento com base em pagamentos periódicos de valor constante e uma taxa de juros constante.",
      a: "Principal cumulativo pago em um conjunto de períodos.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "taxa",
          detail: "A taxa de juros.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "O número de pagamentos a serem feitos.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "O valor atual da anuidade.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "primeiro_período",
          detail: "O número do período de pagamento para iniciar o cálculo cumulativo.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "último_período",
          detail: "O número do período de pagamento para terminar o cálculo cumulativo.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Se os pagamentos são devidos no final (`0`) ou no início (`1`) de cada período.",
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
      d: "Calcula o número de cupons, ou pagamentos de juros, entre a data de liquidação e a data de vencimento do investimento.",
      a: "Número de cupons entre liquidação e vencimento.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "02",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequência",
          detail: "O número de pagamentos de juros ou cupons por ano (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula a depreciação de um ativo para um período especificado usando o método da soma dos dígitos dos anos.",
      a: "Depreciação via método da soma dos dígitos dos anos.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "custo",
          detail: "O custo inicial do ativo.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_residual",
          detail: "O valor do ativo ao final da depreciação.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vida_útil",
          detail: "O número de períodos ao longo dos quais o ativo é depreciado.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "O período único dentro de `vida_útil` para o qual calcular a depreciação.",
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
      d: "Calcula a taxa de retorno anualizada equivalente de uma Letra do Tesouro dos EUA com base na taxa de desconto.",
      a: "Taxa de retorno equivalente para uma letra do tesouro.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa_desconto",
          detail: "A taxa de desconto da letra no momento da compra.",
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
      d: "Calcula o rendimento de uma Letra do Tesouro dos EUA com base no preço.",
      a: "O rendimento de uma letra do tesouro dos EUA com base no preço.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "preço",
          detail: "O preço pelo qual o título é comprado por 100 do valor de face.",
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
      d: "Calcula o preço de uma Letra do Tesouro dos EUA com base na taxa de desconto.",
      a: "Preço de uma letra do tesouro dos EUA.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa_desconto",
          detail: "A taxa de desconto da letra no momento da compra.",
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
      d: "Calcula o valor presente de um investimento de anuidade com base em pagamentos periódicos de valor constante e uma taxa de juros constante.",
      a: "Valor presente de um investimento de anuidade.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "taxa",
          detail: "A taxa de juros.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "O número de pagamentos a serem feitos.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_pagamento",
          detail: "O valor por período a ser pago.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "O valor futuro restante após o último pagamento ter sido feito.",
          example: "D2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Se os pagamentos são devidos no final (`0`) ou no início (`1`) de cada período.",
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
      d: "Calcula os juros acumulados de um título com pagamentos periódicos.",
      a: "Juros acumulados de título com pagamentos periódicos.",
      m: [
        6,
        8
      ],
      p: [
        {
          name: "data_emissão",
          detail: "A data em que o título foi originalmente emitido.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "primeiro_pagamento",
          detail: "A primeira data em que os juros serão pagos.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa",
          detail: "A taxa de juros anualizada.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_resgate",
          detail: "O valor de resgate por 100 do valor de face, ou nominal.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequência",
          detail: "O número de pagamentos de juros ou cupons por ano (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "método_cálculo",
          detail: "[Opcional - padrão VERDADEIRO()] - Um valor lógico que especifica o método usado para calcular o total de juros acumulados quando a data de liquidação é posterior à primeira data de acumulação de juros. \n\nSe o valor for VERDADEIRO, o total de juros acumulados desde a data de emissão até a data de liquidação é retornado. \n\nSe o valor for FALSO, retorna os juros acumulados desde a primeira data de acumulação de juros até a data de liquidação.",
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
      d: "Calcula os juros acumulados de um título que paga juros no vencimento.",
      a: "Juros acumulados de título pagando no vencimento.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "data_emissão",
          detail: "A data em que o título foi originalmente emitido.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento do título.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa",
          detail: "A taxa de juros anualizada.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_resgate",
          detail: "O valor de resgate por 100 do valor de face, ou nominal.",
          example: "1000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula o número de dias desde o primeiro cupom, ou pagamento de juros, até a liquidação.",
      a: "Número de dias do primeiro cupom até a liquidação.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequência",
          detail: "O número de pagamentos de juros ou cupons por ano (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula o número de dias no período do cupom, ou pagamento de juros, que contém a data de liquidação especificada.",
      a: "Dias no período do cupom que contém a data de liquidação.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequência",
          detail: "O número de pagamentos de juros ou cupons por ano (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula o número de dias desde a data de liquidação até o próximo cupom, ou pagamento de juros.",
      a: "Dias da liquidação até o próximo cupom.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequência",
          detail: "O número de pagamentos de juros ou cupons por ano (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula a próxima data de cupom, ou pagamento de juros, após a data de liquidação.",
      a: "Próxima data de cupom após a data de liquidação.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequência",
          detail: "O número de pagamentos de juros ou cupons por ano (1, 2 ou 4).",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula a última data de cupom, ou pagamento de juros, antes da data de liquidação.",
      a: "Última data de cupom antes da data de liquidação.",
      m: [
        3,
        4
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequência",
          detail: "O número de pagamentos de juros ou cupons por ano (1, 2 ou 4).",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula o valor futuro de um investimento de anuidade com base em pagamentos periódicos de valor constante e uma taxa de juros constante.",
      a: "Valor futuro de um investimento de anuidade.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "taxa",
          detail: "A taxa de juros.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "O número de pagamentos a serem feitos.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_pagamento",
          detail: "O valor por período a ser pago.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "O valor atual da anuidade.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Se os pagamentos são devidos no final (`0`) ou no início (`1`) de cada período.",
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
      d: "Calcula o valor futuro de um principal com base em uma série especificada de taxas de juros potencialmente variáveis.",
      a: "Valor futuro do principal a partir de uma série de taxas.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "capital",
          detail: "O montante do capital inicial ou valor sobre o qual capitalizar.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cronograma_taxas",
          detail: "Uma série de taxas de juros a capitalizar sobre o `principal`.",
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
      d: "Calcula o rendimento anual de um título que paga juros periódicos, como um Título do Tesouro dos EUA, com base no preço.",
      a: "Rendimento anual de um título que paga juros periódicos.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa",
          detail: "A taxa de juros anualizada.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "preço",
          detail: "O preço pelo qual o título é comprado por 100 do valor de face.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_resgate",
          detail: "O valor de resgate por 100 do valor de face, ou nominal.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequência",
          detail: "O número de pagamentos de juros ou cupons por ano (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula o rendimento anual de um título de desconto (sem juros), com base no preço.",
      a: "Rendimento anual de um título de desconto.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "preço",
          detail: "O preço pelo qual o título é comprado por 100 do valor de face.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_resgate",
          detail: "O valor de resgate por 100 do valor de face, ou nominal.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula a taxa de juros nominal anual dadas a taxa efetiva e o número de períodos de capitalização por ano.",
      a: "Taxa de juros nominal anual.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "taxa_efetiva",
          detail: "A taxa de juros efetiva por ano.",
          example: "0.85",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "períodos_por_ano",
          detail: "O número de períodos de capitalização por ano.",
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
      d: "Calcula a taxa interna de retorno de um investimento com base em uma série especificada de fluxos de caixa potencialmente espaçados de forma irregular.",
      a: "Taxa interna de retorno dados fluxos de caixa não periódicos.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "valores_fluxo_caixa",
          detail: "Uma matriz ou intervalo contendo a receita ou pagamentos associados ao investimento.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "datas_fluxo_caixa",
          detail: "Uma matriz ou intervalo com datas correspondentes aos fluxos de caixa em `valores_fluxo_caixa`.",
          example: "C2:C25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "estimativa_taxa",
          detail: "Uma estimativa de qual será a taxa interna de retorno.",
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
      d: "Calcula a taxa interna de retorno modificada de um investimento com base em uma série de fluxos de caixa periódicos e na diferença entre a taxa de juros paga sobre o financiamento e o retorno recebido sobre a renda reinvestida.",
      a: "Taxa interna de retorno modificada.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "valores_fluxo_caixa",
          detail: "Uma matriz ou intervalo contendo a receita ou pagamentos associados ao investimento.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "taxa_financiamento",
          detail: "A taxa de juros paga sobre os fundos investidos.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "taxa_retorno_reinvestimento",
          detail: "O retorno (como percentual) obtido no reinvestimento da renda recebida do investimento.",
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
      d: "Calcula a taxa interna de retorno de um investimento com base em uma série de fluxos de caixa periódicos.",
      a: "Taxa interna de retorno dados fluxos de caixa periódicos.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "valores_fluxo_caixa",
          detail: "Uma matriz ou intervalo contendo a receita ou pagamentos associados ao investimento.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "estimativa_taxa",
          detail: "Uma estimativa de qual será a taxa interna de retorno.",
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
      d: "Calcula o valor presente líquido de um investimento com base em uma série de fluxos de caixa periódicos e uma taxa de desconto.",
      a: "O valor presente líquido de um investimento com base em uma série de fluxos de caixa periódicos e uma taxa de desconto.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "taxa_desconto",
          detail: "A taxa de desconto do investimento em um período.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fluxo_caixa1",
          detail: "O primeiro fluxo de caixa futuro.",
          example: "200",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fluxo_caixa2",
          detail: "Fluxos de caixa futuros adicionais.",
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
      d: "Calcula o valor presente líquido de um investimento com base em uma série especificada de fluxos de caixa potencialmente espaçados de forma irregular e uma taxa de desconto.",
      a: "Valor presente líquido dados fluxos de caixa não periódicos.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "taxa_desconto",
          detail: "A taxa de desconto do investimento em um período.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valores_fluxo_caixa",
          detail: "Um intervalo de células contendo a receita ou pagamentos associados ao investimento.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "datas_fluxo_caixa",
          detail: "Um intervalo de células com datas correspondentes aos fluxos de caixa em `valores_fluxo_caixa`.",
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
      d: "Calcula os juros cumulativos em um intervalo de períodos de pagamento para um investimento com base em pagamentos periódicos de valor constante e uma taxa de juros constante.",
      a: "Juros cumulativos pagos em um conjunto de períodos.",
      m: [
        6,
        6
      ],
      p: [
        {
          name: "taxa",
          detail: "A taxa de juros.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "O número de pagamentos a serem feitos.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "O valor atual da anuidade.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "primeiro_período",
          detail: "O número do período de pagamento para iniciar o cálculo cumulativo.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "último_período",
          detail: "O número do período de pagamento para terminar o cálculo cumulativo.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Se os pagamentos são devidos no final (`0`) ou no início (`1`) de cada período.",
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
      d: "Calcula o pagamento periódico para um investimento de anuidade com base em pagamentos periódicos de valor constante e uma taxa de juros constante.",
      a: "Pagamento periódico para um investimento de anuidade.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "taxa",
          detail: "A taxa de juros.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "O número de pagamentos a serem feitos.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "O valor atual da anuidade.",
          example: " 100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "O valor futuro restante após o último pagamento ter sido feito.",
          example: "D2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Se os pagamentos são devidos no final (`0`) ou no início (`1`) de cada período.",
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
      d: "Calcula o pagamento de juros para um investimento com base em pagamentos periódicos de valor constante e uma taxa de juros constante.",
      a: "Pagamento de juros para um investimento.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "taxa",
          detail: "A taxa de juros.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "O período de amortização, em termos de número de períodos.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "O número de pagamentos a serem feitos.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "O valor atual da anuidade.",
          example: "80000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "O valor futuro restante após o último pagamento ter sido feito.",
          example: "E2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Se os pagamentos são devidos no final (`0`) ou no início (`1`) de cada período.",
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
      d: "Calcula o pagamento sobre o principal de um investimento com base em pagamentos periódicos de valor constante e uma taxa de juros constante.",
      a: "Pagamento sobre o principal de um investimento.",
      m: [
        4,
        6
      ],
      p: [
        {
          name: "taxa",
          detail: "A taxa de juros.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "O período de amortização, em termos de número de períodos.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "O número de pagamentos a serem feitos.",
          example: "3*12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "O valor atual da anuidade.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "O valor futuro restante após o último pagamento ter sido feito.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Se os pagamentos são devidos no final (`0`) ou no início (`1`) de cada período.",
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
      d: "Calcula a taxa de juros efetiva gerada quando um investimento é comprado a um preço e vendido a outro, sem juros ou dividendos gerados pelo próprio investimento.",
      a: "Calcula a taxa de juros efetiva.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "data_compra",
          detail: "A data de compra do investimento.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_venda",
          detail: "A data de venda do investimento.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "preço_compra",
          detail: "O preço pelo qual o investimento foi comprado.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "preço_venda",
          detail: "O preço pelo qual o investimento foi vendido.",
          example: "101200",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula o preço de um título que paga juros periódicos, como um Título do Tesouro dos EUA, com base no rendimento esperado.",
      a: "Preço de um título que paga juros periódicos.",
      m: [
        6,
        7
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa",
          detail: "A taxa de juros anualizada.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "O rendimento anual esperado do título.",
          example: "0.065",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_resgate",
          detail: "O valor de resgate por 100 do valor de face, ou nominal.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequência",
          detail: "O número de pagamentos de juros ou cupons por ano (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula o preço de um título de desconto (sem juros), com base no rendimento esperado.",
      a: "Preço de um título de desconto.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa_desconto",
          detail: "A taxa de desconto do título no momento da compra.",
          example: "0.0525",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_resgate",
          detail: "O valor de resgate por 100 do valor de face, ou nominal.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula o preço de um título que paga juros no vencimento, com base no rendimento esperado.",
      a: "Preço de título que paga juros no vencimento.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_emissão",
          detail: "A data em que o título foi originalmente emitido.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa",
          detail: "A taxa de juros anualizada.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "O rendimento anual esperado do título.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula o valor recebido no vencimento para um investimento em títulos de renda fixa comprados em uma data específica.",
      a: "Valor recebido no vencimento para um título.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "investimento",
          detail: "O valor investido (independentemente do valor de face de cada título).",
          example: "10000000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "taxa_desconto",
          detail: "A taxa de desconto do título em que se investe.",
          example: "0.0575",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula a taxa de desconto de um título com base no preço.",
      a: "A taxa de desconto de um título com base no preço.",
      m: [
        4,
        5
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "preço",
          detail: "O preço pelo qual o título é comprado por 100 do valor de face.",
          example: "97.975",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_resgate",
          detail: "O valor de resgate por 100 do valor de face, ou nominal.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula o número de períodos de pagamento para um investimento com base em pagamentos periódicos de valor constante e uma taxa de juros constante.",
      a: "Número de períodos de pagamento para um investimento.",
      m: [
        3,
        5
      ],
      p: [
        {
          name: "taxa",
          detail: "A taxa de juros.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_pagamento",
          detail: "O valor de cada pagamento feito.",
          example: "500",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "O valor atual da anuidade.",
          example: "40000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "O valor futuro restante após o último pagamento ter sido feito.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Se os pagamentos são devidos no final (`0`) ou no início (`1`) de cada período.",
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
      d: "Calcula a depreciação de um ativo para um período usando o método linear.",
      a: "Depreciação de um ativo usando o método linear.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "custo",
          detail: "O custo inicial do ativo.",
          example: "300000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_residual",
          detail: "O valor do ativo ao final da depreciação.",
          example: "75000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vida_útil",
          detail: "O número de períodos ao longo dos quais o ativo é depreciado.",
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
      d: "Calcula o número de períodos de capitalização necessários para um investimento de um valor presente especificado, valorizando-se a uma taxa dada, atingir um valor-alvo.",
      a: "Número de períodos para um investimento atingir um valor.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa",
          detail: "A taxa de juros anualizada.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "O rendimento anual esperado do título.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequência",
          detail: "O número de pagamentos de juros ou cupons por ano (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Calcula a duração de Macaulay modificada de um título que paga juros periódicos, como um Título do Tesouro dos EUA, com base no rendimento esperado.",
      a: "Duração de Macaulay modificada.",
      m: [
        5,
        6
      ],
      p: [
        {
          name: "data_liquidação",
          detail: "A data de liquidação do título, a data após a emissão em que o título é entregue ao comprador.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "A data de vencimento ou término do título, quando pode ser resgatado pelo valor de face, ou nominal.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa",
          detail: "A taxa de juros anualizada.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "O rendimento anual esperado do título.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequência",
          detail: "O número de pagamentos de juros ou cupons por ano (1, 2 ou 4).",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Um indicador de qual método de contagem de dias usar.",
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
      d: "Converte um número binário com sinal para o formato decimal.",
      a: "Converte um número binário com sinal para o formato decimal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número_binário_com_sinal",
          detail: "O valor binário com sinal de 10 bits a converter para decimal, fornecido como uma string.",
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
      d: "Converte um número binário com sinal para o formato hexadecimal com sinal.",
      a: "Converte um número binário para hexadecimal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_binário_com_sinal",
          detail: "O valor binário com sinal de 10 bits a converter para hexadecimal com sinal, fornecido como uma string.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "algarismos_significativos",
          detail: "O número de dígitos significativos a garantir no resultado.",
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
      d: "Converte um número binário com sinal para o formato octal com sinal.",
      a: "Converte um número binário para octal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_binário_com_sinal",
          detail: "O valor binário com sinal de 10 bits a converter para octal com sinal, fornecido como uma string.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "algarismos_significativos",
          detail: "O número de dígitos significativos a garantir no resultado.",
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
      d: "Converte um número decimal para o formato binário com sinal.",
      a: "Converte um número decimal para o formato binário com sinal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_decimal",
          detail: "O valor decimal a converter para binário com sinal, fornecido como uma string.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "algarismos_significativos",
          detail: "O número de dígitos significativos a garantir no resultado.",
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
      d: "Converte um número decimal para o formato hexadecimal com sinal.",
      a: "Converte um número decimal para hexadecimal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_decimal",
          detail: "O valor decimal a converter para hexadecimal com sinal, fornecido como uma string.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "algarismos_significativos",
          detail: "O número de dígitos significativos a garantir no resultado.",
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
      d: "Converte um número decimal para o formato octal com sinal.",
      a: "Converte um número decimal para o formato octal com sinal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_decimal",
          detail: "O valor decimal a converter para octal com sinal, fornecido como uma string.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "algarismos_significativos",
          detail: "O número de dígitos significativos a garantir no resultado.",
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
      d: "Converte um número hexadecimal com sinal para o formato binário com sinal.",
      a: "Converte um número hexadecimal para binário.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_hexadecimal_com_sinal",
          detail: "O valor hexadecimal com sinal de 40 bits a converter para binário com sinal, fornecido como uma string.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "algarismos_significativos",
          detail: "O número de dígitos significativos a garantir no resultado.",
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
      d: "Converte um número hexadecimal com sinal para o formato decimal.",
      a: "Converte um número hexadecimal para decimal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número_hexadecimal_com_sinal",
          detail: "O valor hexadecimal com sinal de 40 bits a converter para decimal, fornecido como uma string.",
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
      d: "Converte um número hexadecimal com sinal para o formato octal com sinal.",
      a: "Converte um número hexadecimal para octal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_hexadecimal_com_sinal",
          detail: "O valor hexadecimal com sinal de 40 bits a converter para octal com sinal, fornecido como uma string.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "algarismos_significativos",
          detail: "O número de dígitos significativos a garantir no resultado.",
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
      d: "Converte um número octal com sinal para o formato binário com sinal.",
      a: "Converte um número octal para binário.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_octal_com_sinal",
          detail: "O valor octal com sinal de 30 bits a converter para binário com sinal, fornecido como uma string.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "algarismos_significativos",
          detail: "O número de dígitos significativos a garantir no resultado.",
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
      d: "Converte um número octal com sinal para o formato decimal.",
      a: "Converte um número octal com sinal para o formato decimal.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número_octal_com_sinal",
          detail: "O valor octal com sinal de 30 bits a converter para decimal, fornecido como uma string.",
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
      d: "Converte um número octal com sinal para o formato hexadecimal com sinal.",
      a: "Converte um número octal para hexadecimal.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número_octal_com_sinal",
          detail: "O valor octal com sinal de 30 bits a converter para hexadecimal com sinal, fornecido como uma string.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "algarismos_significativos",
          detail: "O número de dígitos significativos a garantir no resultado.",
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
      d: "Cria um número complexo dados os coeficientes real e imaginário.",
      a: "Cria um número complexo.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "parte_real",
          detail: "O coeficiente real.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "parte_imaginária",
          detail: "O coeficiente imaginário.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sufixo",
          detail: "O sufixo do coeficiente imaginário, pode ser apenas 'i' ou 'j'. Se omitido, será usado 'i'.",
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
      d: "Retorna o coeficiente real de um número complexo.",
      a: "O coeficiente real de um número complexo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número_complexo",
          detail: "O número complexo, no formato a+bi ou a+bj.",
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
      d: "Retorna o coeficiente imaginário de um número complexo.",
      a: "O coeficiente imaginário de um número complexo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número_complexo",
          detail: "O número complexo, no formato a+bi ou a+bj.",
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
      d: "Retorna o conjugado complexo de um número.",
      a: "O conjugado complexo de um número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número",
          detail: "O número complexo para o qual calcular o conjugado.",
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
      d: "Retorna o valor absoluto (ou módulo) de um número complexo.",
      a: "O valor absoluto de um número complexo.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número",
          detail: "O número complexo do qual calcular o valor absoluto.",
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
      d: "Compara dois valores numéricos, retornando 1 se forem iguais.",
      a: "Compara dois valores numéricos.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "número1",
          detail: "O primeiro número a comparar.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número2",
          detail: "O segundo número a comparar.",
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
      d: "Retorna a soma de uma série de números complexos.",
      a: "Soma de uma série de números complexos.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro número complexo ou intervalo a somar.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Números complexos ou intervalos adicionais a somar a `valor1`.",
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
      d: "Retorna a diferença entre dois números complexos.",
      a: "A diferença entre dois números complexos.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "primeiro_número",
          detail: "O número complexo do qual subtrair segundo_número.",
          example: "\"6+5i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "segundo_número",
          detail: "O número complexo a subtrair de primeiro_número.",
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
      d: "Retorna o resultado de multiplicar uma série de números complexos entre si.",
      a: "Resultado de multiplicar uma série de números complexos entre si.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "fator1",
          detail: "O primeiro número ou intervalo a calcular para o produto.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fator2",
          detail: "Números complexos ou intervalos adicionais a calcular para o produto.",
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
      d: "Retorna um número complexo dividido por outro.",
      a: "Um número complexo dividido por outro.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividendo",
          detail: "O número complexo a ser dividido.",
          example: "\"11+16i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "divisor",
          detail: "O número complexo pelo qual dividir.",
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
      d: "Retorna o oposto de um valor lógico - `NOT(VERDADEIRO)` retorna `FALSO`; `NOT(FALSO)` retorna `VERDADEIRO`.",
      a: "Retorna o oposto do valor lógico fornecido.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "expressão_lógica",
          detail: "Uma expressão ou referência a uma célula contendo uma expressão que representa algum valor lógico.",
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
      d: "Retorna o valor lógico `VERDADEIRO`.",
      a: "Valor lógico `verdadeiro`.",
      m: [
        0,
        0
      ],
      p: []
    },
    {
      n: "FALSE",
      t: 10,
      d: "Retorna o valor lógico `FALSO`.",
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
      d: "Retorna verdadeiro se todos os argumentos fornecidos forem logicamente verdadeiros, e falso se qualquer um dos argumentos fornecidos for logicamente falso.",
      a: "Operador lógico `e`.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "expressão_lógica1",
          detail: "Uma expressão ou referência a uma célula contendo uma expressão que representa algum valor lógico, ou seja, `VERDADEIRO` ou `FALSO`, ou uma expressão que pode ser convertida em um valor lógico.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expressão_lógica2",
          detail: "Mais expressões que representam valores lógicos.",
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
      d: "Retorna o primeiro argumento se não for um valor de erro, caso contrário retorna o segundo argumento se presente, ou vazio se o segundo argumento estiver ausente.",
      a: "Valor se não for um erro, caso contrário o 2º argumento.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor",
          detail: "O valor a retornar se `valor` em si não for um erro.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_se_erro",
          detail: "O valor que a função retorna se `valor` for um erro.",
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
      d: "Retorna um valor se uma expressão lógica for `VERDADEIRO` e outro se for `FALSO`.",
      a: "Retorna valor dependendo de expressão lógica.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "expressão_lógica",
          detail: "Uma expressão ou referência a uma célula contendo uma expressão que representa algum valor lógico, ou seja, `VERDADEIRO` ou `FALSO`.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_se_verdadeiro",
          detail: "O valor que a função retorna se `expressão_lógica` for `VERDADEIRO`.",
          example: "\"A2 is foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_se_falso",
          detail: "O valor que a função retorna se `expressão_lógica` for `FALSO`.",
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
      d: "Retorna verdadeiro se qualquer um dos argumentos fornecidos for logicamente verdadeiro, e falso se todos os argumentos fornecidos forem logicamente falsos.",
      a: "Operador lógico `ou`.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "expressão_lógica1",
          detail: "Uma expressão ou referência a uma célula contendo uma expressão que representa algum valor lógico, ou seja, `VERDADEIRO` ou `FALSO`, ou uma expressão que pode ser convertida em um valor lógico.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expressão_lógica2",
          detail: "Mais expressões que são avaliadas como valores lógicos.",
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
      d: "Retorna `VERDADEIRO` se dois valores especificados não forem iguais e `FALSO` caso contrário. Equivalente ao operador `!=`.",
      a: "Diferente.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "O valor a testar em relação a `valor1` para desigualdade.",
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
      d: "Retorna `VERDADEIRO` se dois valores especificados forem iguais e `FALSO` caso contrário. Equivalente ao operador `==`.",
      a: "Igual.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "O primeiro valor.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "O valor a testar em relação a `valor1` para igualdade.",
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
      d: "Retorna `VERDADEIRO` se o primeiro argumento for estritamente maior que o segundo, e `FALSO` caso contrário. Equivalente ao operador `>`.",
      a: "Estritamente maior que.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "O valor a testar como maior que `valor2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "O segundo valor.",
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
      d: "Retorna `VERDADEIRO` se o primeiro argumento for maior ou igual ao segundo, e `FALSO` caso contrário. Equivalente ao operador `>=`.",
      a: "Maior ou igual a.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "O valor a testar como maior ou igual a `valor2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "O segundo valor.",
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
      d: "Retorna `VERDADEIRO` se o primeiro argumento for estritamente menor que o segundo, e `FALSO` caso contrário. Equivalente ao operador `<`.",
      a: "Menor que.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "O valor a testar como menor que `valor2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "O segundo valor.",
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
      d: "Retorna `VERDADEIRO` se o primeiro argumento for menor ou igual ao segundo, e `FALSO` caso contrário. Equivalente ao operador `<=`.",
      a: "Menor ou igual a.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "O valor a testar como menor ou igual a `valor2`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "O segundo valor.",
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
      d: "Retorna a soma de dois números. Equivalente ao operador `+`.",
      a: "Soma de dois números",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "A primeira parcela.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "A segunda parcela.",
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
      d: "Retorna a diferença de dois números. Equivalente ao operador `-`.",
      a: "Diferença de dois números",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "O minuendo, ou número do qual subtrair.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "O subtraendo, ou número a subtrair de `valor1`.",
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
      d: "Retorna o produto de dois números. Equivalente ao operador `*`.",
      a: "Produto de dois números",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "fator1",
          detail: "O primeiro fator.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fator2",
          detail: "O segundo fator.",
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
      d: "Retorna um número dividido por outro. Equivalente ao operador `/`.",
      a: "Um número dividido por outro",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "dividendo",
          detail: "O número a ser dividido.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "divisor",
          detail: "O número pelo qual dividir.",
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
      d: "Retorna a concatenação de dois valores. Equivalente ao operador `&`.",
      a: "Concatenação de dois valores",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "valor1",
          detail: "O valor ao qual `valor2` será anexado.",
          example: "\"de\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "O valor a ser anexado a `valor1`.",
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
      d: "Retorna um valor interpretado como porcentagem; isto é, `UNARY_PERCENT(100)` é igual a `1`.",
      a: "Valor interpretado como porcentagem.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "porcentagem",
          detail: "O valor a interpretar como porcentagem.",
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
      d: "Anexa strings umas às outras.",
      a: "Anexa strings umas às outras.",
      m: [
        1,
        255
      ],
      p: [
        {
          name: "texto1",
          detail: "A string inicial.",
          example: "\"Super\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texto2",
          detail: "Mais strings a anexar em sequência.",
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
      d: "Retorna o valor numérico de mapa Unicode do primeiro caractere na string fornecida.",
      a: "Valor numérico de mapa unicode de um caractere.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto",
          detail: "A string cujo valor de mapa Unicode do primeiro caractere será retornado.",
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
      d: "Converte um número em um caractere de acordo com a tabela Unicode atual.",
      a: "Obtém o caractere associado a um número.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número_tabela",
          detail: "O número do caractere a procurar na tabela Unicode atual, em formato decimal.",
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
      d: "Calcula o valor de um algarismo romano.",
      a: "Calcula o valor de um algarismo romano.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "numeral_romano",
          detail: "O algarismo romano a formatar, cujo valor deve estar entre 1 e 3999, inclusive.",
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
      d: "Formata um número em algarismos romanos.",
      a: "Formata um número em algarismos romanos.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "número",
          detail: "O número a formatar, entre 1 e 3999, inclusive.",
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
      d: "Extrai substrings correspondentes de acordo com uma expressão regular.",
      a: "Extrai substrings correspondentes com expressão regular.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "texto",
          detail: "O texto de entrada.",
          example: "\"Needle in a haystack\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expressão_regular",
          detail: "A primeira parte de `texto` que corresponder a esta expressão será retornada.",
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
      d: "Se um texto corresponde a uma expressão regular.",
      a: "Se um texto corresponde a uma expressão regular.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "texto",
          detail: "O texto a ser testado em relação à expressão regular.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expressão_regular",
          detail: "A expressão regular em relação à qual testar o texto.",
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
      d: "Substitui parte de uma string de texto por uma string de texto diferente usando expressões regulares.",
      a: "Substitui texto com expressões regulares.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "texto",
          detail: "O texto, uma parte do qual será substituída.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expressão_regular",
          detail: "A expressão regular. Todas as instâncias correspondentes em `texto` serão substituídas.",
          example: "\"S.*d\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "substituição",
          detail: "O texto que será inserido no texto original.",
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
      d: "Retorna argumentos de string como texto, ou a string vazia se o valor não for texto.",
      a: "Argumentos de string como texto.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "valor",
          detail: "O argumento a ser convertido em texto.",
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
      d: "Formata um número com um número fixo de casas decimais.",
      a: "Formata número com número fixo de casas decimais.",
      m: [
        1,
        3
      ],
      p: [
        {
          name: "número",
          detail: "O número a formatar.",
          example: "3.141592653",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_casas_decimais",
          detail: "O número de casas decimais a exibir no resultado.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "suprimir_separador",
          detail: "Se deve suprimir ou não o separador de milhares usado em algumas localidades (ex. `1.000` torna-se `1000`). Os separadores estarão presentes se este valor for 0 ou omitido, e ausentes caso contrário.",
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
      d: "Retorna a posição em que uma string é encontrada pela primeira vez dentro do texto, em que a capitalização das letras importa. Retorna `#VALOR!` se a string não for encontrada.",
      a: "Primeira posição de string encontrada no texto, com distinção entre maiúsculas e minúsculas.",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "texto_procurado",
          detail: "A string a procurar dentro de `texto_a_pesquisar`.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texto_a_pesquisar",
          detail: "O texto no qual procurar a primeira ocorrência de `procurar_por`.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partir_de",
          detail: "O caractere dentro de `texto_a_pesquisar` no qual iniciar a pesquisa.",
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
      d: "Retorna a posição em que uma string é encontrada pela primeira vez dentro do texto, contando cada caractere duplo como 2.",
      a: "Posição em que uma string é encontrada pela primeira vez dentro do texto (binário).",
      m: [
        2,
        3
      ],
      p: [
        {
          name: "texto_procurado",
          detail: "A string a procurar dentro de `texto_a_pesquisar`.",
          example: "\"new\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texto_a_pesquisar",
          detail: "O texto no qual procurar a primeira ocorrência de `procurar_por`.",
          example: "\"new year\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partir_de",
          detail: "O caractere dentro de `texto_a_pesquisar` no qual iniciar a pesquisa.",
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
      d: "Concatena os elementos de uma ou mais matrizes unidimensionais usando um delimitador especificado.",
      a: "Concatena elementos de matrizes com delimitador.",
      m: [
        2,
        255
      ],
      p: [
        {
          name: "delimitador",
          detail: "O caractere ou string a colocar entre cada valor concatenado.",
          example: "\" and-a \"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_ou_matriz1",
          detail: "O valor ou valores a serem anexados usando `delimitador`.",
          example: "{1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_ou_matriz2",
          detail: "Mais valores a serem anexados usando `delimitador`.",
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
      d: "Retorna uma substring do início de uma string especificada.",
      a: "Substring do início de uma string especificada.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "texto",
          detail: "A string da qual a parte esquerda será retornada.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_caracteres",
          detail: "O número de caracteres a retornar do lado esquerdo de `string`.",
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
      d: "Retorna uma substring do final de uma string especificada.",
      a: "Uma substring do final de uma string especificada.",
      m: [
        1,
        2
      ],
      p: [
        {
          name: "texto",
          detail: "A string da qual a parte direita será retornada.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_caracteres",
          detail: "O número de caracteres a retornar do lado direito de `string`.",
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
      d: "Retorna um segmento de uma string.",
      a: "Um segmento de uma string.",
      m: [
        3,
        3
      ],
      p: [
        {
          name: "texto",
          detail: "A string da qual extrair um segmento.",
          example: "\"get this\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partir_de",
          detail: "O índice a partir da esquerda de `string` a partir do qual iniciar a extração. O primeiro caractere em `string` tem o índice 1.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "comprimento_extração",
          detail: "O comprimento do segmento a extrair.",
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
      d: "Retorna o comprimento de uma string.",
      a: "Comprimento de uma string.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto",
          detail: "A string cujo comprimento será retornado.",
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
      d: "Retorna o comprimento de uma string em bytes.",
      a: "Comprimento de uma string em bytes.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto",
          detail: "A string cujo comprimento será retornado.",
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
      d: "Converte uma string especificada em minúsculas.",
      a: "Converte uma string especificada em minúsculas.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto",
          detail: "A string a converter em minúsculas.",
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
      d: "Converte uma string especificada em maiúsculas.",
      a: "Converte uma string especificada em maiúsculas.",
      m: [
        1,
        1
      ],
      p: [
        {
          name: "texto",
          detail: "A string a converter em maiúsculas.",
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
      d: "Testa se duas strings são idênticas.",
      a: "Testa se duas strings são idênticas.",
      m: [
        2,
        2
      ],
      p: [
        {
          name: "texto1",
          detail: "A primeira string a comparar.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texto2",
          detail: "A segunda string a comparar.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função REPLACE.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "posição",
          detail: "Parâmetro `posição` da função REPLACE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "comprimento",
          detail: "Parâmetro `comprimento` da função REPLACE.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "novo_texto",
          detail: "Parâmetro `novo_texto` da função REPLACE.",
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
          name: "texto_a_repetir",
          detail: "Parâmetro `texto_a_repetir` da função REPT.",
          example: "\"ha\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_repetições",
          detail: "Parâmetro `número_repetições` da função REPT.",
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
          name: "texto_procurado",
          detail: "Parâmetro `texto_procurado` da função SEARCH.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texto_a_pesquisar",
          detail: "Parâmetro `texto_a_pesquisar` da função SEARCH.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partir_de",
          detail: "Parâmetro `a_partir_de` da função SEARCH.",
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
          name: "texto_a_pesquisar",
          detail: "Parâmetro `texto_a_pesquisar` da função SUBSTITUTE.",
          example: "\"search for it\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texto_procurado",
          detail: "Parâmetro `texto_procurado` da função SUBSTITUTE.",
          example: "\"search for\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "substituir_por",
          detail: "Parâmetro `substituir_por` da função SUBSTITUTE.",
          example: "\"Google\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_ocorrência",
          detail: "Parâmetro `número_ocorrência` da função SUBSTITUTE.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função CLEAN.",
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
          name: "número",
          detail: "Parâmetro `número` da função TEXT.",
          example: "1.23",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "formato",
          detail: "Parâmetro `formato` da função TEXT.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função TRIM.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função VALUE.",
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
          name: "texto_a_capitalizar",
          detail: "Parâmetro `texto_a_capitalizar` da função PROPER.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função CONVERT.",
          example: "5.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unidade_inicial",
          detail: "Parâmetro `unidade_inicial` da função CONVERT.",
          example: "\"g\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "unidade_final",
          detail: "Parâmetro `unidade_final` da função CONVERT.",
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
          name: "matriz_x",
          detail: "Parâmetro `matriz_x` da função SUMX2MY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matriz_y",
          detail: "Parâmetro `matriz_y` da função SUMX2MY2.",
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
          name: "matriz_x",
          detail: "Parâmetro `matriz_x` da função SUMX2PY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matriz_y",
          detail: "Parâmetro `matriz_y` da função SUMX2PY2.",
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
          name: "matriz_x",
          detail: "Parâmetro `matriz_x` da função SUMXMY2.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matriz_y",
          detail: "Parâmetro `matriz_y` da função SUMXMY2.",
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
          name: "matriz_ou_intervalo",
          detail: "Parâmetro `matriz_ou_intervalo` da função TRANSPOSE.",
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
          name: "dados_y_conhecidos",
          detail: "Parâmetro `dados_y_conhecidos` da função TREND.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x_conhecidos",
          detail: "Parâmetro `dados_x_conhecidos` da função TREND.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "novos_dados_x",
          detail: "Parâmetro `novos_dados_x` da função TREND.",
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
          name: "dados",
          detail: "Parâmetro `dados` da função FREQUENCY.",
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
          name: "dados_y_conhecidos",
          detail: "Parâmetro `dados_y_conhecidos` da função GROWTH.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x_conhecidos",
          detail: "Parâmetro `dados_x_conhecidos` da função GROWTH.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "novos_dados_x",
          detail: "Parâmetro `novos_dados_x` da função GROWTH.",
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
          name: "dados_y_conhecidos",
          detail: "Parâmetro `dados_y_conhecidos` da função LINEST.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x_conhecidos",
          detail: "Parâmetro `dados_x_conhecidos` da função LINEST.",
          example: "A2:A10",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "calcular_b",
          detail: "Parâmetro `calcular_b` da função LINEST.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "detalhado",
          detail: "Parâmetro `detalhado` da função LINEST.",
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
          name: "dados_y_conhecidos",
          detail: "Parâmetro `dados_y_conhecidos` da função LOGEST.",
          example: "B2:B10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x_conhecidos",
          detail: "Parâmetro `dados_x_conhecidos` da função LOGEST.",
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
          name: "detalhado",
          detail: "Parâmetro `detalhado` da função LOGEST.",
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
          name: "matriz_quadrada",
          detail: "Parâmetro `matriz_quadrada` da função MDETERM.",
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
          name: "matriz_quadrada",
          detail: "Parâmetro `matriz_quadrada` da função MINVERSE.",
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
          name: "matriz1",
          detail: "Parâmetro `matriz1` da função MMULT.",
          example: "A1:B3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matriz2",
          detail: "Parâmetro `matriz2` da função MMULT.",
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
          name: "matriz1",
          detail: "Parâmetro `matriz1` da função SUMPRODUCT.",
          example: "A2:C5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "matriz2",
          detail: "Parâmetro `matriz2` da função SUMPRODUCT.",
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
          name: "célula",
          detail: "Parâmetro `célula` da função ISFORMULA.",
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
          name: "tipo_informação",
          detail: "Parâmetro `tipo_informação` da função CELL.",
          example: "\"type\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "referência",
          detail: "Parâmetro `referência` da função CELL.",
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
          name: "referência",
          detail: "Parâmetro `referência` da função ERROR_TYPE.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função ISBLANK.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função ISERR.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função ISERROR.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função ISLOGICAL.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função ISNA.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função ISNONTEXT.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função ISNUMBER.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função ISREF.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função ISTEXT.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função TYPE.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função N.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função TO_DATE.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função TO_PURE_NUMBER.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função TO_TEXT.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função TO_DOLLARS.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função TO_PERCENT.",
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
          name: "banco_de_dados",
          detail: "Parâmetro `banco_de_dados` da função DGET.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Parâmetro `campo` da função DGET.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critérios",
          detail: "Parâmetro `critérios` da função DGET.",
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
          name: "banco_de_dados",
          detail: "Parâmetro `banco_de_dados` da função DMAX.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Parâmetro `campo` da função DMAX.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critérios",
          detail: "Parâmetro `critérios` da função DMAX.",
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
          name: "banco_de_dados",
          detail: "Parâmetro `banco_de_dados` da função DMIN.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Parâmetro `campo` da função DMIN.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critérios",
          detail: "Parâmetro `critérios` da função DMIN.",
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
          name: "banco_de_dados",
          detail: "Parâmetro `banco_de_dados` da função DAVERAGE.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Parâmetro `campo` da função DAVERAGE.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critérios",
          detail: "Parâmetro `critérios` da função DAVERAGE.",
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
          name: "banco_de_dados",
          detail: "Parâmetro `banco_de_dados` da função DCOUNT.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Parâmetro `campo` da função DCOUNT.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critérios",
          detail: "Parâmetro `critérios` da função DCOUNT.",
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
          name: "banco_de_dados",
          detail: "Parâmetro `banco_de_dados` da função DCOUNTA.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Parâmetro `campo` da função DCOUNTA.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critérios",
          detail: "Parâmetro `critérios` da função DCOUNTA.",
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
          name: "banco_de_dados",
          detail: "Parâmetro `banco_de_dados` da função DPRODUCT.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Parâmetro `campo` da função DPRODUCT.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critérios",
          detail: "Parâmetro `critérios` da função DPRODUCT.",
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
          name: "banco_de_dados",
          detail: "Parâmetro `banco_de_dados` da função DSTDEV.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Parâmetro `campo` da função DSTDEV.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critérios",
          detail: "Parâmetro `critérios` da função DSTDEV.",
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
          name: "banco_de_dados",
          detail: "Parâmetro `banco_de_dados` da função DSTDEVP.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Parâmetro `campo` da função DSTDEVP.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critérios",
          detail: "Parâmetro `critérios` da função DSTDEVP.",
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
          name: "banco_de_dados",
          detail: "Parâmetro `banco_de_dados` da função DSUM.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Parâmetro `campo` da função DSUM.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critérios",
          detail: "Parâmetro `critérios` da função DSUM.",
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
          name: "banco_de_dados",
          detail: "Parâmetro `banco_de_dados` da função DVAR.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Parâmetro `campo` da função DVAR.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critérios",
          detail: "Parâmetro `critérios` da função DVAR.",
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
          name: "banco_de_dados",
          detail: "Parâmetro `banco_de_dados` da função DVARP.",
          example: "A2:F20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "campo",
          detail: "Parâmetro `campo` da função DVARP.",
          example: "G2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "critérios",
          detail: "Parâmetro `critérios` da função DVARP.",
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
          name: "Número de identificação",
          example: "A1",
          detail: "Parâmetro `Número de identificação` da função AGE_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Prazo",
          example: "\"2017-10-01\"",
          detail: "Parâmetro `Prazo` da função AGE_BY_IDCARD.",
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
          name: "Número de identificação",
          example: "\"31033519900101XXXX\"",
          detail: "Parâmetro `Número de identificação` da função SEX_BY_IDCARD.",
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
          name: "Número de identificação",
          example: "\"31033519900101XXXX\"",
          detail: "Parâmetro `Número de identificação` da função BIRTHDAY_BY_IDCARD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Formato da data de nascimento",
          example: "0",
          detail: "Parâmetro `Formato da data de nascimento` da função BIRTHDAY_BY_IDCARD.",
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
          name: "Número de identificação",
          example: "\"31033519900101XXXX\"",
          detail: "Parâmetro `Número de identificação` da função PROVINCE_BY_IDCARD.",
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
          name: "Número de identificação",
          example: "\"31033519900101XXXX\"",
          detail: "Parâmetro `Número de identificação` da função CITY_BY_IDCARD.",
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
          name: "Número de identificação",
          example: "\"31033519900101XXXX\"",
          detail: "Parâmetro `Número de identificação` da função STAR_BY_IDCARD.",
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
          name: "Número de identificação",
          example: "\"31033519900101XXXX\"",
          detail: "Parâmetro `Número de identificação` da função ANIMAL_BY_IDCARD.",
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
          name: "Número de identificação",
          example: "\"31033519900101XXXX\"",
          detail: "Parâmetro `Número de identificação` da função ISIDCARD.",
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
          name: "Texto",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parâmetro `Texto` da função DM_TEXT_CUTWORD.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Modo de segmentação de palavras",
          example: "0",
          detail: "Parâmetro `Modo de segmentação de palavras` da função DM_TEXT_CUTWORD.",
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
          name: "Texto",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parâmetro `Texto` da função DM_TEXT_TFIDF.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Número de palavras-chave",
          example: "20",
          detail: "Parâmetro `Número de palavras-chave` da função DM_TEXT_TFIDF.",
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
          name: "Texto",
          example: "\"I came to Beijing Tsinghua University\"",
          detail: "Parâmetro `Texto` da função DM_TEXT_TEXTRANK.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Número de palavras-chave",
          example: "20",
          detail: "Parâmetro `Número de palavras-chave` da função DM_TEXT_TEXTRANK.",
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
          name: "Código da ação",
          example: "\"000001\"",
          detail: "Parâmetro `Código da ação` da função DATA_CN_STOCK_CLOSE.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Data",
          example: "2015-01-08",
          detail: "Parâmetro `Data` da função DATA_CN_STOCK_CLOSE.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo de restituição de direitos",
          example: "0",
          detail: "Parâmetro `Tipo de restituição de direitos` da função DATA_CN_STOCK_CLOSE.",
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
          name: "Código da ação",
          example: "\"000001\"",
          detail: "Parâmetro `Código da ação` da função DATA_CN_STOCK_OPEN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Data",
          example: "2015-01-08",
          detail: "Parâmetro `Data` da função DATA_CN_STOCK_OPEN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo de restituição de direitos",
          example: "0",
          detail: "Parâmetro `Tipo de restituição de direitos` da função DATA_CN_STOCK_OPEN.",
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
          name: "Código da ação",
          example: "\"000001\"",
          detail: "Parâmetro `Código da ação` da função DATA_CN_STOCK_MAX.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Data",
          example: "2015-01-08",
          detail: "Parâmetro `Data` da função DATA_CN_STOCK_MAX.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo de restituição de direitos",
          example: "0",
          detail: "Parâmetro `Tipo de restituição de direitos` da função DATA_CN_STOCK_MAX.",
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
          name: "Código da ação",
          example: "\"000001\"",
          detail: "Parâmetro `Código da ação` da função DATA_CN_STOCK_MIN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Data",
          example: "2015-01-08",
          detail: "Parâmetro `Data` da função DATA_CN_STOCK_MIN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo de restituição de direitos",
          example: "0",
          detail: "Parâmetro `Tipo de restituição de direitos` da função DATA_CN_STOCK_MIN.",
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
          name: "Código da ação",
          example: "\"000001\"",
          detail: "Parâmetro `Código da ação` da função DATA_CN_STOCK_VOLUMN.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Data",
          example: "2015-01-08",
          detail: "Parâmetro `Data` da função DATA_CN_STOCK_VOLUMN.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo de restituição de direitos",
          example: "0",
          detail: "Parâmetro `Tipo de restituição de direitos` da função DATA_CN_STOCK_VOLUMN.",
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
          name: "Código da ação",
          example: "\"000001\"",
          detail: "Parâmetro `Código da ação` da função DATA_CN_STOCK_AMOUNT.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Data",
          example: "2015-01-08",
          detail: "Parâmetro `Data` da função DATA_CN_STOCK_AMOUNT.",
          require: "o",
          repeat: "n",
          type: "rangedate"
        },
        {
          name: "Tipo de restituição de direitos",
          example: "0",
          detail: "Parâmetro `Tipo de restituição de direitos` da função DATA_CN_STOCK_AMOUNT.",
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
          name: "valor",
          example: "\"1990-01-01\"",
          detail: "Parâmetro `valor` da função ISDATE.",
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
          name: "Intervalo",
          example: "A1:A20",
          detail: "Parâmetro `Intervalo` da função LINESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor da linha",
          example: "#2ec7c9",
          detail: "Parâmetro `Cor da linha` da função LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Espessura da linha",
          example: "1",
          detail: "Parâmetro `Espessura da linha` da função LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Linha auxiliar",
          example: "avg",
          detail: "Parâmetro `Linha auxiliar` da função LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor da linha auxiliar",
          example: "#000",
          detail: "Parâmetro `Cor da linha auxiliar` da função LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Marca máxima",
          example: "#fc5c5c",
          detail: "Parâmetro `Marca máxima` da função LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Marca mínima",
          example: "#fc5c5c",
          detail: "Parâmetro `Marca mínima` da função LINESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Tamanho da marca",
          example: "1.5",
          detail: "Parâmetro `Tamanho da marca` da função LINESPLINES.",
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
          name: "Intervalo",
          example: "A1:A20",
          detail: "Parâmetro `Intervalo` da função AREASPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor da linha",
          example: "#2ec7c9",
          detail: "Parâmetro `Cor da linha` da função AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor de preenchimento",
          example: "#CCF3F4",
          detail: "Parâmetro `Cor de preenchimento` da função AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Espessura da linha",
          example: "1",
          detail: "Parâmetro `Espessura da linha` da função AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Linha auxiliar",
          example: "avg",
          detail: "Parâmetro `Linha auxiliar` da função AREASPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor da linha auxiliar",
          example: "#000",
          detail: "Parâmetro `Cor da linha auxiliar` da função AREASPLINES.",
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
          name: "Intervalo",
          example: "A1:A20",
          detail: "Parâmetro `Intervalo` da função COLUMNSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalo entre barras",
          example: "1",
          detail: "Parâmetro `Intervalo entre barras` da função COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor da barra",
          example: "#fc5c5c",
          detail: "Parâmetro `Cor da barra` da função COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor das barras negativas",
          example: "#97b552",
          detail: "Parâmetro `Cor das barras negativas` da função COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Máximo",
          example: "100",
          detail: "Parâmetro `Máximo` da função COLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Paleta de cores",
          example: "#97b552",
          detail: "Parâmetro `Paleta de cores` da função COLUMNSPLINES.",
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
          name: "Intervalo",
          example: "A1:A20",
          detail: "Parâmetro `Intervalo` da função STACKCOLUMNSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Empilhar por coluna",
          example: "1",
          detail: "Parâmetro `Empilhar por coluna` da função STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalo entre barras",
          example: "1",
          detail: "Parâmetro `Intervalo entre barras` da função STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Máximo",
          example: "100",
          detail: "Parâmetro `Máximo` da função STACKCOLUMNSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Paleta de cores",
          example: "#97b552",
          detail: "Parâmetro `Paleta de cores` da função STACKCOLUMNSPLINES.",
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
          name: "Intervalo",
          example: "A1:A20",
          detail: "Parâmetro `Intervalo` da função BARSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalo entre barras",
          example: "1",
          detail: "Parâmetro `Intervalo entre barras` da função BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor da barra",
          example: "#fc5c5c",
          detail: "Parâmetro `Cor da barra` da função BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor das barras negativas",
          example: "#97b552",
          detail: "Parâmetro `Cor das barras negativas` da função BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Máximo",
          example: "100",
          detail: "Parâmetro `Máximo` da função BARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Paleta de cores",
          example: "#97b552",
          detail: "Parâmetro `Paleta de cores` da função BARSPLINES.",
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
          name: "Intervalo",
          example: "A1:A20",
          detail: "Parâmetro `Intervalo` da função STACKBARSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Empilhar por coluna",
          example: "1",
          detail: "Parâmetro `Empilhar por coluna` da função STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalo entre barras",
          example: "1",
          detail: "Parâmetro `Intervalo entre barras` da função STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Máximo",
          example: "100",
          detail: "Parâmetro `Máximo` da função STACKBARSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Paleta de cores",
          example: "#97b552",
          detail: "Parâmetro `Paleta de cores` da função STACKBARSPLINES.",
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
          name: "Intervalo",
          example: "A1:A20",
          detail: "Parâmetro `Intervalo` da função DISCRETESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Limite de segmentação",
          example: "1",
          detail: "Parâmetro `Limite de segmentação` da função DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor acima do limite",
          example: "#2ec7c9",
          detail: "Parâmetro `Cor acima do limite` da função DISCRETESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor abaixo do limite",
          example: "#fc5c5c",
          detail: "Parâmetro `Cor abaixo do limite` da função DISCRETESPLINES.",
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
          name: "Intervalo",
          example: "A1:A20",
          detail: "Parâmetro `Intervalo` da função TRISTATESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Intervalo entre barras",
          example: "1",
          detail: "Parâmetro `Intervalo entre barras` da função TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor da barra",
          example: "#fc5c5c",
          detail: "Parâmetro `Cor da barra` da função TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor das barras negativas",
          example: "#97b552",
          detail: "Parâmetro `Cor das barras negativas` da função TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor das barras de valor zero",
          example: "#999",
          detail: "Parâmetro `Cor das barras de valor zero` da função TRISTATESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Paleta de cores",
          example: "#97b552",
          detail: "Parâmetro `Paleta de cores` da função TRISTATESPLINES.",
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
          name: "Intervalo",
          example: "A1:A20",
          detail: "Parâmetro `Intervalo` da função PIESPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Ângulo de rotação",
          example: "0",
          detail: "Parâmetro `Ângulo de rotação` da função PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "borda",
          example: "0",
          detail: "Parâmetro `borda` da função PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Cor da borda",
          example: "#000",
          detail: "Parâmetro `Cor da borda` da função PIESPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Paleta de cores",
          example: "#97b552",
          detail: "Parâmetro `Paleta de cores` da função PIESPLINES.",
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
          name: "Intervalo",
          example: "A1:A20",
          detail: "Parâmetro `Intervalo` da função BOXSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Proporção de valores atípicos",
          example: "1.5",
          detail: "Parâmetro `Proporção de valores atípicos` da função BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Valor da meta",
          example: "10",
          detail: "Parâmetro `Valor da meta` da função BOXSPLINES.",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Tamanho dos pontos",
          example: "1.5",
          detail: "Parâmetro `Tamanho dos pontos` da função BOXSPLINES.",
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
          name: "Meta",
          example: "10",
          detail: "Parâmetro `Meta` da função BULLETSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "alcançado",
          example: "8",
          detail: "Parâmetro `alcançado` da função BULLETSPLINES.",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "Valor de comparação",
          example: "12",
          detail: "Parâmetro `Valor de comparação` da função BULLETSPLINES.",
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
          name: "configuração",
          example: "PIESPLINES(A1:A20)",
          detail: "Parâmetro `configuração` da função COMPOSESPLINES.",
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
          name: "intervalo",
          detail: "Parâmetro `intervalo` da função SORT.",
          example: "A2:A17",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "coluna_ordenação",
          detail: "Parâmetro `coluna_ordenação` da função SORT.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "é_crescente",
          detail: "Parâmetro `é_crescente` da função SORT.",
          example: "-1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "coluna_ordenação2",
          detail: "Parâmetro `coluna_ordenação2` da função SORT.",
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
          name: "intervalo",
          detail: "Parâmetro `intervalo` da função FILTER.",
          example: "A5:D20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "condição1",
          detail: "Parâmetro `condição1` da função FILTER.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "condição2",
          detail: "Parâmetro `condição2` da função FILTER.",
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
          name: "intervalo",
          detail: "Parâmetro `intervalo` da função UNIQUE.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "por_coluna",
          detail: "Parâmetro `por_coluna` da função UNIQUE.",
          example: "TRUE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "apenas_uma_vez",
          detail: "Parâmetro `apenas_uma_vez` da função UNIQUE.",
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
          name: "linhas",
          detail: "Parâmetro `linhas` da função RANDARRAY.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colunas",
          detail: "Parâmetro `colunas` da função RANDARRAY.",
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
          name: "linhas",
          detail: "Parâmetro `linhas` da função SEQUENCE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colunas",
          detail: "Parâmetro `colunas` da função SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "início",
          detail: "Parâmetro `início` da função SEQUENCE.",
          example: "1",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "passo",
          detail: "Parâmetro `passo` da função SEQUENCE.",
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
          name: "expressão",
          example: "\"A1+5*2^2\"",
          detail: "Parâmetro `expressão` da função EVALUATE.",
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
          name: "expressão_remota",
          example: "SUM(A1:A10000000)",
          detail: "Parâmetro `expressão_remota` da função REMOTE.",
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
      standardFormats: "Números",
      currencyFormats: "Moeda",
      unitFormats: "Unidades",
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
