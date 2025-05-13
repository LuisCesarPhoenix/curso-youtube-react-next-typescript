/* eslint-disable prettier/prettier */
/**
 * arquivo: typeAnnotation.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Type Annotation'
 * data: 16/02/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

export { };

// ==> Variables [Type Annotations]
let name: string = 'Luis Cesar Gonçalves';
console.log(name);

// ==> Arrays [Type Annotations]
let animals: string[] = ['Elephant', 'Dog', 'Cat', 'Panda', 'Giraffe'];
console.log(animals);

// ==> Objects [Type Annotations]
let car: {
  name: string;
  year: number;
  price: number;
};

car = { name: 'Toyota Yaris Sedan XS', year: 2019, price: 80000 };
console.log(car);

// ==> Functions [Type Annotation]
function multiplyNumbers(num1: number, num2: number): number {
  return num1 * num2;
}

console.log(multiplyNumbers(2, 5));

