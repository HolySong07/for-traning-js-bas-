'use strict';

if (4 == 9) {
	console.log("ok");
} else {
	console.log("no");
}

if (1) {
	console.log("ok");
} 



var num = 50;

if (num < 49) {
	console.log("error");
} else if (num > 100) {
	console.log("много");
} else {
	console.log("ok");
}

(num == 50) ? console.log("ok") : console.log("no");

//
var num2 = "50";

switch (num2 ) {
	case "49":
		console.log("49");
		break;
	case "100":
		console.log("100");
		break;
	case "50":
		console.log("правда");
		break;
	default:
		console.log("все не подошли");
		break;
};

console.log("20");




//
const hamburger = true;
const fries = true;

if (hamburger && fries) {
	console.log("tru tru");
}

console.log((hamburger && fries)); // true
//
const hamburger2 = true;
const fries2 = false;

if (hamburger && fries) { // если хотябы 1 не верный 
	console.log("false");
}
//
const hamburger3 = 3;
const fries3 = 1;
const cola = 0;

console.log(hamburger == 3 && cola && fries); // 0 - отдаст первое ложное
console.log(1 && 0); 
console.log(1 && 5); // получим последнюю правду
console.log(null && 5); 
console.log(0 && "sfsdf");

if (hamburger == 3 && cola === 1 && fries) {
	console.log("все сыты");
} else {
	console.log("уходим");
}

//

const hamburger4 = 3;
const fries5 = 0;
const col5 = 0;

if (hamburger || col5 || fries) { // если хоть что-то тру, перестает работать
	console.log("все довольны");
} else {
	console.log("уходим");
}

console.log(hamburger || col5 || fries); // последнее ложное отдаст

//

let John, alex, maria = "done";

console.log(John || alex || maria); // done - первая правда

//
// комбинация

const hamburger6 = 3;
const fries6 = 3;
const cola6 = 0;
const nuggets = 2;

// в начале работает == потом && потом ||
if (hamburger6 == 3 && cola6 == 2 || fries6 == 3 && nuggets) {
	 // правая сторона ТРУ, получаем ан выходе тру

}

if (hamburger6 == 3 && (cola6 == 2 || fries6 == 3) && nuggets) {
	// в средине скобки, выполнится первое

}

console.log(!0); // тру