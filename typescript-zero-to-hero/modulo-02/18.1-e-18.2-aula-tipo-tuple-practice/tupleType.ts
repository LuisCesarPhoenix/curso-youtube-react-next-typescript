/**
 * arquivo: tupleType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 28/03/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript

let pessoa: [string, string, number];
pessoa = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
// pessoa = [34, 'Cloud Advocate JavaScript', 'Glaucia Lemos']; // ERRO
console.log("\n");
console.log(pessoa); // saída: ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34]

// ==> Exemplo 02 - Acessando o valor da Tupla

let pessoa1: [string, string, number];
pessoa1 = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];

console.log("\n");
console.log(pessoa1[1]); // saída: 'Cloud Advocate JavaScript'

// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)

let pessoa2: [nome: string, posicao: string, idade: number] = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];

console.log("\n");
console.log(pessoa2); // saída: ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34]


// ==> Exemplo 04 - Usando Tuplas com Spread Operator

let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];

console.log("\n");
console.log(...listaFrutas); // saída: '🍍' '🍊' '🍎' '🍉' '🥭'

//==> Exemplo 05 - Lista Heterogênea de Tupla:

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];

console.log("\n");
console.log(listaFrutas2); // saída: [5, true, '🍍', '🍊', '🍎', '🍉', '🥭']

// ==> Exemplo 06 - Uso de função com Tuplas

function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}

let resultado = listarPessoas(['Glaucia', 'Jurema'], [34, 68]);

console.log("\n");
console.log(resultado) // saída: ['Glaucia', 'Jurema', 34, 68]

// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função

type Nome =
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome];
}

console.log("\n");
console.log(criarPessoa('Glaucia', 'Lemos')); // saída: ['Glaucia', 'Lemos']
console.log("\n");
console.log(criarPessoa('Glaucia', 'de Souza', 'Lemos')); // saída: ['Glaucia', 'de Souza', 'Lemos']
