'use strict';

let num = 50;


 // 1

/*  while (num <= 55) {
	console.log(num);
	num++;
}  */


//2 
// 
/*  do {
	console.log(num);
	num++;
} while (num <= 55);  */

// 3 популярный

/* for (let i = 1; i < 10; i++) {
	if (i = 6) { 
		brake; // полностью остановит цикл
	//	continue; // пропускает этот шаг
	}

	console.log(i);
} */

	///////////////////

	/* for (let i = 0; i < 3; i++ ) {
		console.log(i);

		for (let j = 0; j < 3; j++ ) { 
			console.log(j);
		}
	} */


	// Рисуем такой астерикс

	/*
	* 
	**
	***
	****
	*****
	****** */

/* 	let result = "";
	let legtht = 7;

	for (let i = 1; i < legtht; i++) {

		for (let j = 0; j < i; j++ ) { // чем больше i, тем больше выполняется
			result += "*";
		}
		result += "\n"; // в переменную накидываем перенос выходит 6 раз
	}

	console.log(result); */


	///

	// first - метка
	first: for (let i = 0; i < 3; i++ ) {
		console.log(`First level ${i}`);

		for (let j = 0; j < 3; j++ ) { 
			console.log(`Second level ${j}`);

			for (let k = 0; k < 3; k++ ) { 
				// if (k == 2) continue first // пропускает шаг в этой метке
				if (k == 2) break first

				console.log(`Third level ${k}`);
			}
		}
	}
	

