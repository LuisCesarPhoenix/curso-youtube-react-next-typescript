/*
Tipos de dados Number e BigInt em typescript:

- Number: representa um ponto flutuante (float)
- BigInt: representa um número muito grande (long)

Em typescript todos os conjuntos de números (sejam eles inteiros, flutuantes, positivos, negativos, infinitos, reais, NaN, etc) são do tipo primitivo ou seja number.

Dentro do typescript existem dois tipos de number:
Number que é do tipo object e number que é do tipo primitivo

O bigint permite trabalhar com números inteiros grandes sem que haja erro de arredondamento.

let nomeVariavel: number = valor;
let nomeVariavel: bigint = valorn (seguido com n);

Exemplos de number:

let num1: number = 23.0;      // numeral
let num2: number = 0x78CF;    // hexadecimal
let num3: number = 0o577;     // octal
let num4: number = 0b110001;  // binário

Exemplos de bigint:

// Precisamos alterar no tsconfig.json o target para es2020, superior ou para ESnext para conseguir usar o bigint

// numeral
let big1: bigint = 9007199254740991n;

// binário
let big2: bigint = 0b100000000000000000000000000000000000000000000000000011n;

// hexadecimal
let big3: bigint = 0x20000000000003n;

// octal
let big4: bigint = 0o400000000000000003n;
*/
