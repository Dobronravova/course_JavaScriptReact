
"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    }
}

start();

const personalMobieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
              if (a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMobieDB.movies[a] = b;
                console.log('Done');
              } else {
                console.log('Error');
                i--;
        }
    }
}

rememberMyFilms();

function selectPersonalLevel() {
    if (personalMobieDB.count < 10 ){
        alert ('Просмотрено довольно мало фильмов');
    } else if (personalMobieDB.count >= 10 && personalMobieDB.count < 30){
        alert ('Вы классический зритель');
    } else if (personalMobieDB.count >= 30 ){
        alert ('Вы киноман');
    } else {
        alert ('Произошла ошибка');
    }
}

selectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden){
        console.log(personalMobieDB);
    }
}

showMyDB(personalMobieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMobieDB.genres[i - 1] = prompt(` Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();