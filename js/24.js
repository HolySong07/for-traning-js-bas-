'use strict';

// 1 обычная функция Declaration - можно вызывать перед тем как объявили

let num = 20; // глобальная переменная

function showFirstMsg(text) {
	console.log(text);
	num = 10; // если есть 
	let num2 = 1.1;
	return num2;
}

showFirstMsg("111");
const num22 = showFirstMsg();
console.log(num22);

//

function calk(a, b) {
	return console.log(a + b);
}
calk(3, 3);

//  1

//  2 Expression - в начале объявить нужно, потом вызывать

const secont = function() {
	console.log(222);
}

secont();
//  2


/// Стрелочная, нет свое контекста this

const showThree = (a, b) => {
	console.log(a + b);
};

showThree(9, 9);

//// Аргументы
// 1
const usdtCours = 28;
const discount = 0.9;

function convert(amount, cur) {
	return cur * amount;
}

function promotion(result) {
	console.log(result * discount)
}

const res = convert(500, usdtCours); // поместили результат работы функции

promotion(res); 
// 1
// 2
function test() {
	
}