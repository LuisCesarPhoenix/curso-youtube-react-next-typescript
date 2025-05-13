"use strict";
/* eslint-disable prettier/prettier */
/**
 * arquivo: typeAnnotation.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Type Annotation'
 * data: 16/02/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

Object.defineProperty(exports, "__esModule", { value: true });

// ==> Variables [Type Annotations]
var name = 'Luis Cesar Gonçalves';
console.log(name);

// ==> Arrays [Type Annotations]
var animals = ['Elephant', 'Dog', 'Cat', 'Panda', 'Giraffe'];
console.log(animals);

// ==> Objects [Type Annotations]
var car;
car = { name: 'Toyota Yaris Sedan XS', year: 2019, price: 80000 };
console.log(car);

// ==> Functions [Type Annotation]
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
console.log(multiplyNumbers(2, 5));
