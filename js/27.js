'use strict';
// строка
const str = "test";

// length
console.log(str.length);
console.log(str[3]); // получить букву с строки, изменить нельзя
console.log(str.toUpperCase()); // все большие буквы
console.log(str.toLowerCase()); // все маленькие буквы

let fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); //5 - начинает с 5 позиции

let logg = "Hello world";
console.log(logg.slice(6, 11)); // world logg.slice(6,) - c начал и до конца
console.log(logg.slice(-5, -1)); // с конца
console.log(logg.substring(6, 11)); // как верхний но е подд отрицательные значения
console.log(logg.substr(6, 3)); // сколько символов надо вырезать

// числа
let num = 12.2;
console.log(Math.round(num)); // округляем

const test = "12.2px";
console.log(parseInt(test)); // только число, целое
console.log(parseFloat(test)); // 12.2 , без букв