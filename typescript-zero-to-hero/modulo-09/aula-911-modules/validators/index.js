"use strict";
/**
 * arquivo: validators/index.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Modules'
 * data: 05/08/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeValidator = exports.EmailValidator = void 0;
const email_validator_1 = __importDefault(require("./email-validator"));
exports.EmailValidator = email_validator_1.default;
const zipcode_validator_1 = require("./zipcode-validator");
Object.defineProperty(exports, "ZipCodeValidator", { enumerable: true, get: function () { return zipcode_validator_1.ZipCodeValidator; } });
