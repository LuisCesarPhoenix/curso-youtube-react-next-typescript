"use strict";
/**
 * arquivo: zipcode-validator.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Modules'
 * data: 05/08/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeValidator = void 0;
class ZipCodeValidator {
    isValid(s) {
        const zipCodeRegex = /^[0-9]{5}(?:-[0-9]{3})?$/;
        return zipCodeRegex.test(s);
    }
}
exports.ZipCodeValidator = ZipCodeValidator;
