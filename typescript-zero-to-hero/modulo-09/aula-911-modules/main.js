"use strict";
/**
 * arquivo: main.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Modules'
 * data: 05/08/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("./validators");
let email = 'glaucia.lemos@email.com';
let validator = new validators_1.EmailValidator();
let result = validator.isValid(email);
console.log(`O e-mail ${email} é válido? ${result}`);
let validator2 = new validators_1.ZipCodeValidator();
let result2 = validator2.isValid('12345');
console.log(`O CEP 12345 é válido? ${result2}`);
