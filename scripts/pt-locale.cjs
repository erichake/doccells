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
      d: "Descrição da função T_TEST.",
      a: "Resumo da função T_TEST.",
      m: [
        4,
        4
      ],
      p: [
        {
          name: "intervalo1",
          detail: "Parâmetro `intervalo1` da função T_TEST.",
          example: "A1:A4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "intervalo2",
          detail: "Parâmetro `intervalo2` da função T_TEST.",
          example: "B1:B4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "caudas",
          detail: "Parâmetro `caudas` da função T_TEST.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "tipo",
          detail: "Parâmetro `tipo` da função T_TEST.",
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
          name: "graus_liberdade1",
          detail: "Parâmetro `graus_liberdade1` da função F_DIST.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "graus_liberdade2",
          detail: "Parâmetro `graus_liberdade2` da função F_DIST.",
          example: "6",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cumulativo",
          detail: "Parâmetro `cumulativo` da função F_DIST.",
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
          name: "graus_liberdade1",
          detail: "Parâmetro `graus_liberdade1` da função F_DIST_RT.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "graus_liberdade2",
          detail: "Parâmetro `graus_liberdade2` da função F_DIST_RT.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função VAR_P.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função VAR_P.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função VAR_S.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função VAR_S.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função VARA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função VARA.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função VARPA.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função VARPA.",
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
          name: "dados_y",
          detail: "Parâmetro `dados_y` da função STEYX.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x",
          detail: "Parâmetro `dados_x` da função STEYX.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função STANDARDIZE.",
          example: "96",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "média",
          detail: "Parâmetro `média` da função STANDARDIZE.",
          example: "80",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "desvio_padrão",
          detail: "Parâmetro `desvio_padrão` da função STANDARDIZE.",
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
          name: "dados",
          detail: "Parâmetro `dados` da função SMALL.",
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
          name: "dados_y",
          detail: "Parâmetro `dados_y` da função SLOPE.",
          example: "A2:A100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dados_x",
          detail: "Parâmetro `dados_x` da função SLOPE.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função SKEW.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função SKEW.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função SKEW_P.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função SKEW_P.",
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
          name: "chave_pesquisa",
          detail: "Parâmetro `chave_pesquisa` da função VLOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo",
          detail: "Parâmetro `intervalo` da função VLOOKUP.",
          example: "A2:B26",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "índice",
          detail: "Parâmetro `índice` da função VLOOKUP.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "está_ordenado",
          detail: "Parâmetro `está_ordenado` da função VLOOKUP.",
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
          name: "chave_pesquisa",
          detail: "Parâmetro `chave_pesquisa` da função HLOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo",
          detail: "Parâmetro `intervalo` da função HLOOKUP.",
          example: "A2:Z6",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "índice",
          detail: "Parâmetro `índice` da função HLOOKUP.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "está_ordenado",
          detail: "Parâmetro `está_ordenado` da função HLOOKUP.",
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
          name: "chave_pesquisa",
          detail: "Parâmetro `chave_pesquisa` da função LOOKUP.",
          example: "10003",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo_pesquisa|matriz_resultado_pesquisa",
          detail: "Parâmetro `search_range|search_result_array` da função LOOKUP.",
          example: "A1:A100",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo_resultado",
          detail: "Parâmetro `intervalo_resultado` da função LOOKUP.",
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
          name: "linha",
          detail: "Parâmetro `linha` da função ADDRESS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "coluna",
          detail: "Parâmetro `coluna` da função ADDRESS.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "modo_relativo_absoluto",
          detail: "Parâmetro `modo_relativo_absoluto` da função ADDRESS.",
          example: "4",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "usar_notação_a1",
          detail: "Parâmetro `usar_notação_a1` da função ADDRESS.",
          example: "FALSE()",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "planilha",
          detail: "Parâmetro `planilha` da função ADDRESS.",
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
          name: "referência_célula_como_texto",
          detail: "Parâmetro `referência_célula_como_texto` da função INDIRECT.",
          example: "\"Sheet2!\"&B10",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "é_notação_a1",
          detail: "Parâmetro `é_notação_a1` da função INDIRECT.",
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
          name: "referência_célula",
          detail: "Parâmetro `referência_célula` da função ROW.",
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
          name: "intervalo",
          detail: "Parâmetro `intervalo` da função ROWS.",
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
          name: "referência_célula",
          detail: "Parâmetro `referência_célula` da função COLUMN.",
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
          name: "intervalo",
          detail: "Parâmetro `intervalo` da função COLUMNS.",
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
          name: "referência_célula",
          detail: "Parâmetro `referência_célula` da função OFFSET.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "linhas_deslocamento",
          detail: "Parâmetro `linhas_deslocamento` da função OFFSET.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "colunas_deslocamento",
          detail: "Parâmetro `colunas_deslocamento` da função OFFSET.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "altura",
          detail: "Parâmetro `altura` da função OFFSET.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "largura",
          detail: "Parâmetro `largura` da função OFFSET.",
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
          name: "chave_pesquisa",
          detail: "Parâmetro `chave_pesquisa` da função MATCH.",
          example: "\"Sunday\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "intervalo",
          detail: "Parâmetro `intervalo` da função MATCH.",
          example: "A2:A9",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "tipo_pesquisa",
          detail: "Parâmetro `tipo_pesquisa` da função MATCH.",
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
          name: "referência",
          detail: "Parâmetro `referência` da função INDEX.",
          example: "A1:C20",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "linha",
          detail: "Parâmetro `linha` da função INDEX.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "coluna",
          detail: "Parâmetro `coluna` da função INDEX.",
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
          name: "nome_valor",
          detail: "Parâmetro `nome_valor` da função GETPIVOTDATA.",
          example: "\"SUM of number of units\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "célula_tabela_dinâmica",
          detail: "Parâmetro `célula_tabela_dinâmica` da função GETPIVOTDATA.",
          example: "'Pivot table'!A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "coluna_original",
          detail: "Parâmetro `coluna_original` da função GETPIVOTDATA.",
          example: "\"division\"",
          require: "o",
          repeat: "y",
          type: "rangeall"
        },
        {
          name: "item_tabela_dinâmica",
          detail: "Parâmetro `item_tabela_dinâmica` da função GETPIVOTDATA.",
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
          name: "índice",
          detail: "Parâmetro `índice` da função CHOOSE.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "escolha1",
          detail: "Parâmetro `escolha1` da função CHOOSE.",
          example: "\"A\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "escolha2",
          detail: "Parâmetro `escolha2` da função CHOOSE.",
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
          name: "texto_link",
          detail: "Parâmetro `texto_link` da função HYPERLINK.",
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
          name: "hora",
          detail: "Parâmetro `hora` da função TIME.",
          example: "11",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "minuto",
          detail: "Parâmetro `minuto` da função TIME.",
          example: "40",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "segundo",
          detail: "Parâmetro `segundo` da função TIME.",
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
          name: "texto_hora",
          detail: "Parâmetro `texto_hora` da função TIMEVALUE.",
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
          name: "data_início",
          detail: "Parâmetro `data_início` da função EOMONTH.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_de_meses",
          detail: "Parâmetro `número_de_meses` da função EOMONTH.",
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
          name: "data_início",
          detail: "Parâmetro `data_início` da função EDATE.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_de_meses",
          detail: "Parâmetro `número_de_meses` da função EDATE.",
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
          name: "hora",
          detail: "Parâmetro `hora` da função SECOND.",
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
          name: "hora",
          detail: "Parâmetro `hora` da função MINUTE.",
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
          name: "hora",
          detail: "Parâmetro `hora` da função HOUR.",
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
          name: "data_início",
          detail: "Parâmetro `data_início` da função NETWORKDAYS.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_final",
          detail: "Parâmetro `data_final` da função NETWORKDAYS.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feriados",
          detail: "Parâmetro `feriados` da função NETWORKDAYS.",
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
          name: "data_início",
          detail: "Parâmetro `data_início` da função NETWORKDAYS_INTL.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_final",
          detail: "Parâmetro `data_final` da função NETWORKDAYS_INTL.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fim_de_semana",
          detail: "Parâmetro `fim_de_semana` da função NETWORKDAYS_INTL.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feriados",
          detail: "Parâmetro `feriados` da função NETWORKDAYS_INTL.",
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
          name: "data",
          detail: "Parâmetro `data` da função ISOWEEKNUM.",
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
          name: "data",
          detail: "Parâmetro `data` da função WEEKNUM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tipo",
          detail: "Parâmetro `tipo` da função WEEKNUM.",
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
          name: "data",
          detail: "Parâmetro `data` da função WEEKDAY.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "tipo",
          detail: "Parâmetro `tipo` da função WEEKDAY.",
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
          name: "data",
          detail: "Parâmetro `data` da função DAY.",
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
          name: "data_final",
          detail: "Parâmetro `data_final` da função DAYS.",
          example: "2011-3-15",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_início",
          detail: "Parâmetro `data_início` da função DAYS.",
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
          name: "data_início",
          detail: "Parâmetro `data_início` da função DAYS360.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_final",
          detail: "Parâmetro `data_final` da função DAYS360.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "método",
          detail: "Parâmetro `método` da função DAYS360.",
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
          name: "ano",
          detail: "Parâmetro `ano` da função DATE.",
          example: "1969",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mês",
          detail: "Parâmetro `mês` da função DATE.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "dia",
          detail: "Parâmetro `dia` da função DATE.",
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
          name: "texto_data",
          detail: "Parâmetro `texto_data` da função DATEVALUE.",
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
          name: "data_início",
          detail: "Parâmetro `data_início` da função DATEDIF.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_final",
          detail: "Parâmetro `data_final` da função DATEDIF.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "unidade",
          detail: "Parâmetro `unidade` da função DATEDIF.",
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
          name: "data_início",
          detail: "Parâmetro `data_início` da função WORKDAY.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_dias",
          detail: "Parâmetro `número_dias` da função WORKDAY.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "feriados",
          detail: "Parâmetro `feriados` da função WORKDAY.",
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
          name: "data_início",
          detail: "Parâmetro `data_início` da função WORKDAY_INTL.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_dias",
          detail: "Parâmetro `número_dias` da função WORKDAY_INTL.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_de_semana",
          detail: "Parâmetro `fim_de_semana` da função WORKDAY_INTL.",
          example: "16)",
          require: "o",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "feriados",
          detail: "Parâmetro `feriados` da função WORKDAY_INTL.",
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
          name: "data",
          detail: "Parâmetro `data` da função YEAR.",
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
          name: "data_início",
          detail: "Parâmetro `data_início` da função YEARFRAC.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_final",
          detail: "Parâmetro `data_final` da função YEARFRAC.",
          example: "7",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função YEARFRAC.",
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
          name: "data",
          detail: "Parâmetro `data` da função MONTH.",
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
          name: "taxa_nominal",
          detail: "Parâmetro `taxa_nominal` da função EFFECT.",
          example: "0.99",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "períodos_por_ano",
          detail: "Parâmetro `períodos_por_ano` da função EFFECT.",
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
          name: "número",
          detail: "Parâmetro `número` da função DOLLAR.",
          example: "1.2351",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_casas_decimais",
          detail: "Parâmetro `número_casas_decimais` da função DOLLAR.",
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
          name: "preço_fracionário",
          detail: "Parâmetro `preço_fracionário` da função DOLLARDE.",
          example: "100.10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unidade",
          detail: "Parâmetro `unidade` da função DOLLARDE.",
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
          name: "preço_decimal",
          detail: "Parâmetro `preço_decimal` da função DOLLARFR.",
          example: "100.125",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "unidade",
          detail: "Parâmetro `unidade` da função DOLLARFR.",
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
          name: "custo",
          detail: "Parâmetro `custo` da função DB.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_residual",
          detail: "Parâmetro `valor_residual` da função DB.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vida_útil",
          detail: "Parâmetro `vida_útil` da função DB.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "Parâmetro `período` da função DB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "mês",
          detail: "Parâmetro `mês` da função DB.",
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
          name: "custo",
          detail: "Parâmetro `custo` da função DDB.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_residual",
          detail: "Parâmetro `valor_residual` da função DDB.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vida_útil",
          detail: "Parâmetro `vida_útil` da função DDB.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "Parâmetro `período` da função DDB.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fator",
          detail: "Parâmetro `fator` da função DDB.",
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
          name: "número_períodos",
          detail: "Parâmetro `número_períodos` da função RATE.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "pagamento_por_período",
          detail: "Parâmetro `pagamento_por_período` da função RATE.",
          example: "-100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "Parâmetro `valor_presente` da função RATE.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "Parâmetro `valor_futuro` da função RATE.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Parâmetro `fim_ou_início` da função RATE.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "estimativa_taxa",
          detail: "Parâmetro `estimativa_taxa` da função RATE.",
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
          name: "taxa",
          detail: "Parâmetro `taxa` da função CUMPRINC.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "Parâmetro `número_períodos` da função CUMPRINC.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "Parâmetro `valor_presente` da função CUMPRINC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "primeiro_período",
          detail: "Parâmetro `primeiro_período` da função CUMPRINC.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "último_período",
          detail: "Parâmetro `último_período` da função CUMPRINC.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Parâmetro `fim_ou_início` da função CUMPRINC.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função COUPNUM.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função COUPNUM.",
          example: "02",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequência",
          detail: "Parâmetro `frequência` da função COUPNUM.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função COUPNUM.",
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
          name: "custo",
          detail: "Parâmetro `custo` da função SYD.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_residual",
          detail: "Parâmetro `valor_residual` da função SYD.",
          example: "50",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vida_útil",
          detail: "Parâmetro `vida_útil` da função SYD.",
          example: "10",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "Parâmetro `período` da função SYD.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função TBILLEQ.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função TBILLEQ.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa_desconto",
          detail: "Parâmetro `taxa_desconto` da função TBILLEQ.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função TBILLYIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função TBILLYIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "preço",
          detail: "Parâmetro `preço` da função TBILLYIELD.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função TBILLPRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função TBILLPRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa_desconto",
          detail: "Parâmetro `taxa_desconto` da função TBILLPRICE.",
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
          name: "taxa",
          detail: "Parâmetro `taxa` da função PV.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "Parâmetro `número_períodos` da função PV.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_pagamento",
          detail: "Parâmetro `valor_pagamento` da função PV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "Parâmetro `valor_futuro` da função PV.",
          example: "D2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Parâmetro `fim_ou_início` da função PV.",
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
          name: "data_emissão",
          detail: "Parâmetro `data_emissão` da função ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "primeiro_pagamento",
          detail: "Parâmetro `primeiro_pagamento` da função ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função ACCRINT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa",
          detail: "Parâmetro `taxa` da função ACCRINT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_resgate",
          detail: "Parâmetro `valor_resgate` da função ACCRINT.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequência",
          detail: "Parâmetro `frequência` da função ACCRINT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função ACCRINT.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "método_cálculo",
          detail: "Parâmetro `método_cálculo` da função ACCRINT.",
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
          name: "data_emissão",
          detail: "Parâmetro `data_emissão` da função ACCRINTM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função ACCRINTM.",
          example: "DATE(1969",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa",
          detail: "Parâmetro `taxa` da função ACCRINTM.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_resgate",
          detail: "Parâmetro `valor_resgate` da função ACCRINTM.",
          example: "1000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função ACCRINTM.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função COUPDAYBS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função COUPDAYBS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequência",
          detail: "Parâmetro `frequência` da função COUPDAYBS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função COUPDAYBS.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função COUPDAYS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função COUPDAYS.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequência",
          detail: "Parâmetro `frequência` da função COUPDAYS.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função COUPDAYS.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função COUPDAYSNC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função COUPDAYSNC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequência",
          detail: "Parâmetro `frequência` da função COUPDAYSNC.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função COUPDAYSNC.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função COUPNCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função COUPNCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequência",
          detail: "Parâmetro `frequência` da função COUPNCD.",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função COUPNCD.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função COUPPCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função COUPPCD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "frequência",
          detail: "Parâmetro `frequência` da função COUPPCD.",
          example: "01)",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função COUPPCD.",
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
          name: "taxa",
          detail: "Parâmetro `taxa` da função FV.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "Parâmetro `número_períodos` da função FV.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_pagamento",
          detail: "Parâmetro `valor_pagamento` da função FV.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "Parâmetro `valor_presente` da função FV.",
          example: "400",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Parâmetro `fim_ou_início` da função FV.",
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
          name: "capital",
          detail: "Parâmetro `capital` da função FVSCHEDULE.",
          example: "10000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "cronograma_taxas",
          detail: "Parâmetro `cronograma_taxas` da função FVSCHEDULE.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função YIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função YIELD.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa",
          detail: "Parâmetro `taxa` da função YIELD.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "preço",
          detail: "Parâmetro `preço` da função YIELD.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_resgate",
          detail: "Parâmetro `valor_resgate` da função YIELD.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequência",
          detail: "Parâmetro `frequência` da função YIELD.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função YIELD.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função YIELDDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função YIELDDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "preço",
          detail: "Parâmetro `preço` da função YIELDDISC.",
          example: "95",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_resgate",
          detail: "Parâmetro `valor_resgate` da função YIELDDISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função YIELDDISC.",
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
          name: "taxa_efetiva",
          detail: "Parâmetro `taxa_efetiva` da função NOMINAL.",
          example: "0.85",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "períodos_por_ano",
          detail: "Parâmetro `períodos_por_ano` da função NOMINAL.",
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
          name: "valores_fluxo_caixa",
          detail: "Parâmetro `valores_fluxo_caixa` da função XIRR.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "datas_fluxo_caixa",
          detail: "Parâmetro `datas_fluxo_caixa` da função XIRR.",
          example: "C2:C25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "estimativa_taxa",
          detail: "Parâmetro `estimativa_taxa` da função XIRR.",
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
          name: "valores_fluxo_caixa",
          detail: "Parâmetro `valores_fluxo_caixa` da função MIRR.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "taxa_financiamento",
          detail: "Parâmetro `taxa_financiamento` da função MIRR.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "taxa_retorno_reinvestimento",
          detail: "Parâmetro `taxa_retorno_reinvestimento` da função MIRR.",
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
          name: "valores_fluxo_caixa",
          detail: "Parâmetro `valores_fluxo_caixa` da função IRR.",
          example: "A2:A25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "estimativa_taxa",
          detail: "Parâmetro `estimativa_taxa` da função IRR.",
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
          name: "taxa_desconto",
          detail: "Parâmetro `taxa_desconto` da função NPV.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fluxo_caixa1",
          detail: "Parâmetro `fluxo_caixa1` da função NPV.",
          example: "200",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fluxo_caixa2",
          detail: "Parâmetro `fluxo_caixa2` da função NPV.",
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
          name: "taxa_desconto",
          detail: "Parâmetro `taxa_desconto` da função XNPV.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valores_fluxo_caixa",
          detail: "Parâmetro `valores_fluxo_caixa` da função XNPV.",
          example: "B2:B25",
          require: "m",
          repeat: "n",
          type: "range"
        },
        {
          name: "datas_fluxo_caixa",
          detail: "Parâmetro `datas_fluxo_caixa` da função XNPV.",
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
          name: "taxa",
          detail: "Parâmetro `taxa` da função CUMIPMT.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "Parâmetro `número_períodos` da função CUMIPMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "Parâmetro `valor_presente` da função CUMIPMT.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "primeiro_período",
          detail: "Parâmetro `primeiro_período` da função CUMIPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "último_período",
          detail: "Parâmetro `último_período` da função CUMIPMT.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Parâmetro `fim_ou_início` da função CUMIPMT.",
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
          name: "taxa",
          detail: "Parâmetro `taxa` da função PMT.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "Parâmetro `número_períodos` da função PMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "Parâmetro `valor_presente` da função PMT.",
          example: " 100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "Parâmetro `valor_futuro` da função PMT.",
          example: "D2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Parâmetro `fim_ou_início` da função PMT.",
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
          name: "taxa",
          detail: "Parâmetro `taxa` da função IPMT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "Parâmetro `período` da função IPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "Parâmetro `número_períodos` da função IPMT.",
          example: "12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "Parâmetro `valor_presente` da função IPMT.",
          example: "80000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "Parâmetro `valor_futuro` da função IPMT.",
          example: "E2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Parâmetro `fim_ou_início` da função IPMT.",
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
          name: "taxa",
          detail: "Parâmetro `taxa` da função PPMT.",
          example: "0.1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "período",
          detail: "Parâmetro `período` da função PPMT.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_períodos",
          detail: "Parâmetro `número_períodos` da função PPMT.",
          example: "3*12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "Parâmetro `valor_presente` da função PPMT.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "Parâmetro `valor_futuro` da função PPMT.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Parâmetro `fim_ou_início` da função PPMT.",
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
          name: "data_compra",
          detail: "Parâmetro `data_compra` da função INTRATE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_venda",
          detail: "Parâmetro `data_venda` da função INTRATE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "preço_compra",
          detail: "Parâmetro `preço_compra` da função INTRATE.",
          example: "100000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "preço_venda",
          detail: "Parâmetro `preço_venda` da função INTRATE.",
          example: "101200",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função INTRATE.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função PRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função PRICE.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa",
          detail: "Parâmetro `taxa` da função PRICE.",
          example: "0.057",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "Parâmetro `rendimento` da função PRICE.",
          example: "0.065",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_resgate",
          detail: "Parâmetro `valor_resgate` da função PRICE.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequência",
          detail: "Parâmetro `frequência` da função PRICE.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função PRICE.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função PRICEDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função PRICEDISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa_desconto",
          detail: "Parâmetro `taxa_desconto` da função PRICEDISC.",
          example: "0.0525",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_resgate",
          detail: "Parâmetro `valor_resgate` da função PRICEDISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função PRICEDISC.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "data_emissão",
          detail: "Parâmetro `data_emissão` da função PRICEMAT.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa",
          detail: "Parâmetro `taxa` da função PRICEMAT.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "Parâmetro `rendimento` da função PRICEMAT.",
          example: "0.061",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função PRICEMAT.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função RECEIVED.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função RECEIVED.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "investimento",
          detail: "Parâmetro `investimento` da função RECEIVED.",
          example: "10000000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "taxa_desconto",
          detail: "Parâmetro `taxa_desconto` da função RECEIVED.",
          example: "0.0575",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função RECEIVED.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função DISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função DISC.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "preço",
          detail: "Parâmetro `preço` da função DISC.",
          example: "97.975",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_resgate",
          detail: "Parâmetro `valor_resgate` da função DISC.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função DISC.",
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
          name: "taxa",
          detail: "Parâmetro `taxa` da função NPER.",
          example: "0.12",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_pagamento",
          detail: "Parâmetro `valor_pagamento` da função NPER.",
          example: "500",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_presente",
          detail: "Parâmetro `valor_presente` da função NPER.",
          example: "40000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_futuro",
          detail: "Parâmetro `valor_futuro` da função NPER.",
          example: "0",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fim_ou_início",
          detail: "Parâmetro `fim_ou_início` da função NPER.",
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
          name: "custo",
          detail: "Parâmetro `custo` da função SLN.",
          example: "300000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor_residual",
          detail: "Parâmetro `valor_residual` da função SLN.",
          example: "75000",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "vida_útil",
          detail: "Parâmetro `vida_útil` da função SLN.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função DURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função DURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa",
          detail: "Parâmetro `taxa` da função DURATION.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "Parâmetro `rendimento` da função DURATION.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequência",
          detail: "Parâmetro `frequência` da função DURATION.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função DURATION.",
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
          name: "data_liquidação",
          detail: "Parâmetro `data_liquidação` da função MDURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "vencimento",
          detail: "Parâmetro `vencimento` da função MDURATION.",
          example: "DATE(2010",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "taxa",
          detail: "Parâmetro `taxa` da função MDURATION.",
          example: "0.08",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "rendimento",
          detail: "Parâmetro `rendimento` da função MDURATION.",
          example: "0.09",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "frequência",
          detail: "Parâmetro `frequência` da função MDURATION.",
          example: "1",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "convenção_contagem_dias",
          detail: "Parâmetro `convenção_contagem_dias` da função MDURATION.",
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
          name: "número_binário_com_sinal",
          detail: "Parâmetro `número_binário_com_sinal` da função BIN2DEC.",
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
          name: "número_binário_com_sinal",
          detail: "Parâmetro `número_binário_com_sinal` da função BIN2HEX.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "algarismos_significativos",
          detail: "Parâmetro `algarismos_significativos` da função BIN2HEX.",
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
          name: "número_binário_com_sinal",
          detail: "Parâmetro `número_binário_com_sinal` da função BIN2OCT.",
          example: "101",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "algarismos_significativos",
          detail: "Parâmetro `algarismos_significativos` da função BIN2OCT.",
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
          name: "número_decimal",
          detail: "Parâmetro `número_decimal` da função DEC2BIN.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "algarismos_significativos",
          detail: "Parâmetro `algarismos_significativos` da função DEC2BIN.",
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
          name: "número_decimal",
          detail: "Parâmetro `número_decimal` da função DEC2HEX.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "algarismos_significativos",
          detail: "Parâmetro `algarismos_significativos` da função DEC2HEX.",
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
          name: "número_decimal",
          detail: "Parâmetro `número_decimal` da função DEC2OCT.",
          example: "100",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "algarismos_significativos",
          detail: "Parâmetro `algarismos_significativos` da função DEC2OCT.",
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
          name: "número_hexadecimal_com_sinal",
          detail: "Parâmetro `número_hexadecimal_com_sinal` da função HEX2BIN.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "algarismos_significativos",
          detail: "Parâmetro `algarismos_significativos` da função HEX2BIN.",
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
          name: "número_hexadecimal_com_sinal",
          detail: "Parâmetro `número_hexadecimal_com_sinal` da função HEX2DEC.",
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
          name: "número_hexadecimal_com_sinal",
          detail: "Parâmetro `número_hexadecimal_com_sinal` da função HEX2OCT.",
          example: "\"f3\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "algarismos_significativos",
          detail: "Parâmetro `algarismos_significativos` da função HEX2OCT.",
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
          name: "número_octal_com_sinal",
          detail: "Parâmetro `número_octal_com_sinal` da função OCT2BIN.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "algarismos_significativos",
          detail: "Parâmetro `algarismos_significativos` da função OCT2BIN.",
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
          name: "número_octal_com_sinal",
          detail: "Parâmetro `número_octal_com_sinal` da função OCT2DEC.",
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
          name: "número_octal_com_sinal",
          detail: "Parâmetro `número_octal_com_sinal` da função OCT2HEX.",
          example: "37",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "algarismos_significativos",
          detail: "Parâmetro `algarismos_significativos` da função OCT2HEX.",
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
          name: "parte_real",
          detail: "Parâmetro `parte_real` da função COMPLEX.",
          example: "3",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "parte_imaginária",
          detail: "Parâmetro `parte_imaginária` da função COMPLEX.",
          example: "4",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "sufixo",
          detail: "Parâmetro `sufixo` da função COMPLEX.",
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
          name: "número_complexo",
          detail: "Parâmetro `número_complexo` da função IMREAL.",
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
          name: "número_complexo",
          detail: "Parâmetro `número_complexo` da função IMAGINARY.",
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
          name: "número",
          detail: "Parâmetro `número` da função IMCONJUGATE.",
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
          name: "número",
          detail: "Parâmetro `número` da função IMABS.",
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
          name: "número1",
          detail: "Parâmetro `número1` da função DELTA.",
          example: "2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número2",
          detail: "Parâmetro `número2` da função DELTA.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função IMSUM.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função IMSUM.",
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
          name: "primeiro_número",
          detail: "Parâmetro `primeiro_número` da função IMSUB.",
          example: "\"6+5i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "segundo_número",
          detail: "Parâmetro `segundo_número` da função IMSUB.",
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
          name: "fator1",
          detail: "Parâmetro `fator1` da função IMPRODUCT.",
          example: "\"3+4i\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "fator2",
          detail: "Parâmetro `fator2` da função IMPRODUCT.",
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
          name: "dividendo",
          detail: "Parâmetro `dividendo` da função IMDIV.",
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
          name: "expressão_lógica",
          detail: "Parâmetro `expressão_lógica` da função NOT.",
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
          name: "expressão_lógica1",
          detail: "Parâmetro `expressão_lógica1` da função AND.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expressão_lógica2",
          detail: "Parâmetro `expressão_lógica2` da função AND.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função IFERROR.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_se_erro",
          detail: "Parâmetro `valor_se_erro` da função IFERROR.",
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
          name: "expressão_lógica",
          detail: "Parâmetro `expressão_lógica` da função IF.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_se_verdadeiro",
          detail: "Parâmetro `valor_se_verdadeiro` da função IF.",
          example: "\"A2 is foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_se_falso",
          detail: "Parâmetro `valor_se_falso` da função IF.",
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
          name: "expressão_lógica1",
          detail: "Parâmetro `expressão_lógica1` da função OR.",
          example: "A2 = \"foo\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expressão_lógica2",
          detail: "Parâmetro `expressão_lógica2` da função OR.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função NE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função NE.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função EQ.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função EQ.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função GT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função GT.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função GTE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função GTE.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função LT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função LT.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função LTE.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função LTE.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função ADD.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função ADD.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função MINUS.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função MINUS.",
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
          name: "fator1",
          detail: "Parâmetro `fator1` da função MULTIPLY.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "fator2",
          detail: "Parâmetro `fator2` da função MULTIPLY.",
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
          name: "dividendo",
          detail: "Parâmetro `dividendo` da função DIVIDE.",
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
          name: "valor1",
          detail: "Parâmetro `valor1` da função CONCAT.",
          example: "\"de\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor2",
          detail: "Parâmetro `valor2` da função CONCAT.",
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
          name: "porcentagem",
          detail: "Parâmetro `porcentagem` da função UNARY_PERCENT.",
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
          name: "texto1",
          detail: "Parâmetro `texto1` da função CONCATENATE.",
          example: "\"Super\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texto2",
          detail: "Parâmetro `texto2` da função CONCATENATE.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função CODE.",
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
          name: "número_tabela",
          detail: "Parâmetro `número_tabela` da função CHAR.",
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
          name: "numeral_romano",
          detail: "Parâmetro `numeral_romano` da função ARABIC.",
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
          name: "número",
          detail: "Parâmetro `número` da função ROMAN.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função REGEXEXTRACT.",
          example: "\"Needle in a haystack\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expressão_regular",
          detail: "Parâmetro `expressão_regular` da função REGEXEXTRACT.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função REGEXMATCH.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expressão_regular",
          detail: "Parâmetro `expressão_regular` da função REGEXMATCH.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função REGEXREPLACE.",
          example: "\"Spreadsheets\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "expressão_regular",
          detail: "Parâmetro `expressão_regular` da função REGEXREPLACE.",
          example: "\"S.*d\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "substituição",
          detail: "Parâmetro `substituição` da função REGEXREPLACE.",
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
          name: "valor",
          detail: "Parâmetro `valor` da função T.",
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
          name: "número",
          detail: "Parâmetro `número` da função FIXED.",
          example: "3.141592653",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "número_casas_decimais",
          detail: "Parâmetro `número_casas_decimais` da função FIXED.",
          example: "2",
          require: "o",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "suprimir_separador",
          detail: "Parâmetro `suprimir_separador` da função FIXED.",
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
          name: "texto_procurado",
          detail: "Parâmetro `texto_procurado` da função FIND.",
          example: "\"n\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texto_a_pesquisar",
          detail: "Parâmetro `texto_a_pesquisar` da função FIND.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partir_de",
          detail: "Parâmetro `a_partir_de` da função FIND.",
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
          name: "texto_procurado",
          detail: "Parâmetro `texto_procurado` da função FINDB.",
          example: "\"new\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texto_a_pesquisar",
          detail: "Parâmetro `texto_a_pesquisar` da função FINDB.",
          example: "\"new year\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partir_de",
          detail: "Parâmetro `a_partir_de` da função FINDB.",
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
          name: "delimitador",
          detail: "Parâmetro `delimitador` da função JOIN.",
          example: "\" and-a \"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_ou_matriz1",
          detail: "Parâmetro `valor_ou_matriz1` da função JOIN.",
          example: "{1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "valor_ou_matriz2",
          detail: "Parâmetro `valor_ou_matriz2` da função JOIN.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função LEFT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_caracteres",
          detail: "Parâmetro `número_caracteres` da função LEFT.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função RIGHT.",
          example: "A2",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "número_caracteres",
          detail: "Parâmetro `número_caracteres` da função RIGHT.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função MID.",
          example: "\"get this\"",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "a_partir_de",
          detail: "Parâmetro `a_partir_de` da função MID.",
          example: "5",
          require: "m",
          repeat: "n",
          type: "rangenumber"
        },
        {
          name: "comprimento_extração",
          detail: "Parâmetro `comprimento_extração` da função MID.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função LEN.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função LENB.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função LOWER.",
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
          name: "texto",
          detail: "Parâmetro `texto` da função UPPER.",
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
          name: "texto1",
          detail: "Parâmetro `texto1` da função EXACT.",
          example: "A1",
          require: "m",
          repeat: "n",
          type: "rangeall"
        },
        {
          name: "texto2",
          detail: "Parâmetro `texto2` da função EXACT.",
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
