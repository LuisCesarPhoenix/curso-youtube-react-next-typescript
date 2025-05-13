/**
 * arquivo: stringType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo String'
 * data: 14/03/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01 - Usando o single quotes (aspas simples)

let nomeCompleto: string = 'Luis Cesar Gonçalves';
console.log("\n" + nomeCompleto);


// ==> Exemplo 02 - Usando o double quotes (aspas duplas)

let funcaoEmpresa: string = "Desenolvolvedor Backend Júnior";
console.log("\n" + funcaoEmpresa);


// ==> Exemplo 03 - Usando back ticks (crase) para recuperar os valores das variáveis

let nomeEmpresa: string = 'Unnel';

let dadosFuncionario: string = `\nSeja bem-vindo ${nomeCompleto}! Você será ${funcaoEmpresa} \nna empresa ${nomeEmpresa}\n`;

console.log(dadosFuncionario);
