/**
 * arquivo: arrayType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Array'
 * data: 28/03/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#array
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
// ==> Exemplo 01 - Uso de Colchetes:
var frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log("\nA saída vai ser " + frutas[2]); // A saída vai ser 🍎
// ==> Exemplo 02 - Array Object (Objeto Array):
var frutas1 = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log("\nA saída vai ser " + frutas1[3]); // A saída vai ser 🍉
// ==> Exemplo 03 - Adicionando mais strings com o método 'push'
var idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log("\nA saída vai ser " + idiomas); // A saída vai ser ['Português', 'Inglês', 'Espanhol', 'Francês']
idiomas.push('Mandarim');
console.log("A saída vai ser " + idiomas); // A saída vai ser ['Português', 'Inglês', 'Espanhol', 'Francês', 'Mandarim']
idiomas.push('Italiano');
console.log("A saída vai ser " + idiomas); // A saída vai ser ['Português', 'Inglês', 'Espanhol', 'Francês', 'Mandarim', 'Italiano']
// ==> Exemplo 04 - Identificar o tamanho do array com o método 'length'
var idiomas1 = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log("\nA saída vai ser " + idiomas1.length); // A saída vai ser 4
// ==> Exemplo 05 - Exemplo de Array com Spread Operator
var listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = __spreadArray(__spreadArray([], listaNumeros, true), [6, 7, 8, 9, 10], false);
console.log("\nA saída vai ser " + listaNumeros); // A saída vai ser [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ==> Exemplo 06 - Exemplo de Array com laço de iteração
var linguagensArray = new Array('JavaScript', 'Python', 'PHP', 'C#');
// Aqui é criado um array de strings chamado linguagensArray usando o construtor new Array(...)
function funcaoLinguagens(linguagens) {
    for (var i = 0; i < linguagens.length; i++) {
        console.log("\nA saída vai ser " + linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray); // A saída vai ser ['JavaScript', 'Python', 'PHP', 'C#']
