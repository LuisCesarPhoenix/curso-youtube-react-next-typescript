/**
 * arquivo: helloworld/app.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre TypeScript
 * data: 16/02/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B
 */

let mensagem: string = 'Hello World, Luis Cesar Gonçalves!';
console.log(mensagem);

/*
Para transpilar o código do arquivo app.ts para JavaScript há duas opções:

Opção 1 - basta executar o comando abaixo:
curso-typescript-zero-to-hero\modulo-01\helloworld> tsc .\app.ts

Para executar o arquivo app.js, execute o comando abaixo:
curso-typescript-zero-to-hero\modulo-01\helloworld> node .\app.js

Opção 2 - que é a recomendada, porém o arquivo tsconfig.json precisa ser criado na raiz do projeto:
a.  curso-typescript-zero-to-hero> tsc --init (cria o arquivo tsconfig.json na raiz do projeto)
b.  CTRL + SHIFT + B
c.  Escolha a opção tsc: watch - tsconfig.json (ele vai transpilar todos os arquivos.ts para arquivos.js)
d. 	Execute o comando: node .\nomeDoArquivo.js
*/
