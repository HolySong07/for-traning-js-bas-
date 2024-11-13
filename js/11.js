"use strict";

// arr
const arr = [1, 2, 3];

console.log(arr[0]); // показать первый элемент




// obj 

const obj = {
	a: 22,
	b: 33
};

const obj2 = {
	Anna: 500,
	1: 2000, // number
	"Alice": 800,
	abc: {
		df: [],
		asd: 134
	}
};

// получаем значение с ключа
console.log(obj2);
console.log(obj2.Anna);
console.log(obj2[1]);

// в объект добавляем новое
obj2.newVar = "1234"
obj2["newVar"] = "777"

// (!) а можно в переменную

var b = "b2";

obj2[b] = "Test2"; // использовали переменную как ключ

console.log(obj2);
console.log(obj2.b2);
// (!) а можно в переменную



console.log(obj2["newVar"]);
console.log(obj2.newVar);