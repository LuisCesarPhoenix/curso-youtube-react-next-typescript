"use strict";
/**
 * arquivo: email-validator.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Modules'
 * data: 05/08/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
Object.defineProperty(exports, "__esModule", { value: true });
class EmailValidator {
    isValid(s) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(s);
    }
}
exports.default = EmailValidator;
