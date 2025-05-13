/**
 * arquivo: tupleType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 28/03/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
var pessoa;
pessoa = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
// pessoa = [34, 'Cloud Advocate JavaScript', 'Glaucia Lemos']; // ERRO
console.log("\n");
console.log(pessoa); // saída: ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34]
// ==> Exemplo 02 - Acessando o valor da Tupla
var pessoa1;
pessoa1 = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
console.log("\n");
console.log(pessoa1[1]); // saída: 'Cloud Advocate JavaScript'
// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
var pessoa2 = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
console.log("\n");
console.log(pessoa2); // saída: ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34]
// ==> Exemplo 04 - Usando Tuplas com Spread Operator
var listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log("\n");
console.log.apply(console, listaFrutas); // saída: '🍍' '🍊' '🍎' '🍉' '🥭'
//==> Exemplo 05 - Lista Heterogênea de Tupla:
var listaFrutas2 = __spreadArray([5, true], listaFrutas, true);
console.log("\n");
console.log(listaFrutas2); // saída: [5, true, '🍍', '🍊', '🍎', '🍉', '🥭']
// ==> Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    return __spreadArray(__spreadArray([], nomes, true), idades, true);
}
var resultado = listarPessoas(['Glaucia', 'Jurema'], [34, 68]);
console.log("\n");
console.log(resultado); // saída: ['Glaucia', 'Jurema', 34, 68]
function criarPessoa() {
    var nome = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nome[_i] = arguments[_i];
    }
    return __spreadArray([], nome, true);
}
console.log("\n");
console.log(criarPessoa('Glaucia', 'Lemos')); // saída: ['Glaucia', 'Lemos']
console.log("\n");
console.log(criarPessoa('Glaucia', 'de Souza', 'Lemos')); // saída: ['Glaucia', 'de Souza', 'Lemos']
