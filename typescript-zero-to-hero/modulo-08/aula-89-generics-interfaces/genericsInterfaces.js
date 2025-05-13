"use strict";
/**
 * arquivo: genericsInterface.ts
 * descrição: arquivo responsável por ensinar sobre 'Generic Interfaces'
 * data: 19/04/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const myPair = {
    first: 36,
    second: 'Glaucia Lemos'
};
console.log(myPair); // Saída: { first: 36, second: 'Glaucia Lemos' }
function fetchJson(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const headers = {};
        response.headers.forEach((value, key) => {
            headers[key] = value;
        });
        const data = yield response.json();
        return {
            data: data,
            status: response.status,
            statusText: response.statusText,
            headers
        };
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetchJson("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response.data.completed);
}))();
