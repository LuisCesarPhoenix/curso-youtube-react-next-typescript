/**
 * arquivo: numberBigint.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo number e bigint'
 * data: 17/02/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: <number> https://www.typescriptlang.org/docs/handbook/basic-types.html#number
 * doc referência: <bigint> https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplos: number
var num1 = 23.0; // numeral
var num2 = 0x78CF; // hexadecimal
var num3 = 383; // octal
var num4 = 49; // binário
console.log('Number - Ponto Flutuante...: ', num1);
console.log('Number - Hexadecimal...: ', num2);
console.log(typeof (num2)); // O typeof está dizendo que o hexadecimal é do tipo number
console.log('Number - Octal...: ', num3);
console.log('Number - Binário...: ', num4);
console.log(typeof (num4)); // O typeof está dizendo que o binário é do tipo number
console.log("\n");
// ==> Exemplos: bigint

var big1 = 9007199254740991n; // numeral
var big2 = 9007199254740995n; // binário
var big3 = 0x20000000000003n; // hexadecimal
var big4 = 9007199254740995n; // octal

console.log('Bigint...: ', big1);
console.log('Bigint - Binário...: ', big2);
console.log('Bigint - Hexadecimal...: ', big3);
console.log('Bigint - Octal...: ', big4);

/*
O bigint é diferente do number.
São tipos primitivos que lidam com números, porémcom própositos diferentes.
*/
/*
Certifique-se de que o TypeScript está pegando o tsconfig.json correto.
o comando "tsc .\numberBigint.ts" ignora o tsconfig.json e transpila apenas o arquivo diretamente com as opções padrão.

Opção 1 - Compile usando o tsconfig.json com este comando:
curso-typescript-zero-to-hero> tsc
Ou:
curso-typescript-zero-to-hero> tsc --project tsconfig.json
Assim o TypeScript vai usar as opções corretas (como target: "ESNext") e vai compilar com suporte a BigInt.

Para executar o arquivo app.js, execute o comando abaixo:
curso-typescript-zero-to-hero\modulo-01\helloworld> node .\nome-do-arquivo.js

Opção 2 - que é a recomendada, porém o arquivo tsconfig.json precisa ser criado na raiz do projeto:
a.  curso-typescript-zero-to-hero> tsc --init (cria o arquivo tsconfig.json na raizi do projeto)
b.  CTRL + SHIFT + B
c.  Escolha a opção tsc: watch - tsconfig.json (ele vai transpilar os documentos em tempo de execução)
d. 	Execute o comando: node .\nome-do-arquivo.js
*/
