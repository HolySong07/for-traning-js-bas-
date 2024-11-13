"use strict";

// alert(123);

/* const result = confirm("qwww");
console.log(result); */

/* const result = +prompt("Сколько лет?", "18");
console.log(typeof(result)); */

const result = [];
// const answer = +prompt("Сколько лет?", "18");
// result.push(answer);

console.log(result);

// интерполяция

const category = "toys";
console.log(`asdas/${category}/dfdgd`);

// операторы

console.log("arr" + "arr2" + +"4");

let incr = 10;
let decr = 10;

/* incr++;
decr--; */

console.log(incr++); // не сработает
console.log(++incr); // ++

console.log(5%2); // остаток от деления
console.log(2*5 === "10"); // folse
console.log(2*5 == "10"); // true

//
let isChecked = true,
	isClose = true;

	// тру если оба правдивые
	console.log(isChecked && isClose); // true

	let isChecked2 = true,
	isClose2 = false;

	// тру если оба правдивые
	console.log(isChecked || isClose); // true // если хотябы 1 тру из аргументов

	// !var - отрицание с тру в фолс превращает

	console.log(2 + 2 * 2 != 8); // тру, так как одно второму не равно
	console.log(2 + 2 * 2 !== "6"); // тру, тут строгое равенство, а тут строка и цифра (первое не равно второму)