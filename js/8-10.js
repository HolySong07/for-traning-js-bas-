"use strict";

	let number = 1234;
	const leftBorderWidth = 333;

	number = 10;

	// переменную ВАР можно доставать с других блоков, остальные нельзя
	{
		var eee = "www";
	}

	console.log(eee);

	let widthCar = 1234;
	let lengthCar = 333;

	console.log("Ширина кузова авто " + widthCar + " Длинна кузова " + lengthCar);


//

let persone = "Alex";

let bool = false;

const obj = {
	name: "Max",
	age: 37,
	isMerried: false
};

console.log(obj.name);
console.log(obj["name"]);

// obj[name] = "123" - так делаем если там есть переменная name и мы в объект хотм добавить ключ с значения этой переменной

//

let arr = ["plum.png", "orange.png", {}, []];
console.log(arr[0]);


