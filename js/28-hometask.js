/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';



let personalMovieDB = {
	count: 2,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		let gener = prompt(`Ваш любимый жанр под номером ${i+1}`);

		if (gener !== "" && gener.length > 5 && gener !== undefined ) {
			personalMovieDB.genres[i] = gener;
		} else {
			i--;
		}
	}
}

writeYourGenres();

/* showMyDB(personalMovieDB.privat);
start();
rememberMyFilms();
detectPersonalLevel(); */

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

let numberOfFilms;

function start() {
	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}


function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		var a = prompt("Один из последних просмотренных фильмов?", "");
		var b = prompt("На сколько оцените его?", "");
	
		if (a == "" || a.length > 50 || b == "" || b.length > 50) {
			i--;
		} else {
			personalMovieDB.movies[a] = b;
		}
	}
}

function detectPersonalLevel() {
	if (personalMovieDB.count > 30) {
		alert("Вы киноман");
	} else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10  ) {
		alert("Вы классический зритель");
	} else if (personalMovieDB.count < 10)  {
		alert("Просмотрено довольно мало фильмов");
	} else {
		alert("Произошла ошибка");
	}
}






