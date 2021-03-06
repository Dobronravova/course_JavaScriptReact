/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        this.count = +prompt('Сколько фильмов вы просмотрели за последний месяц?', '');
        if (!this.count) {
            return this.count;
        }
    },
    rememberMyFilms: function () {
        if (!this.count) {
            return this.count;
        }
        for (let i = 0; i < this.count; i++){
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            if (!a && !b && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
        }
    }, 
    selectPersonalLevel: function () {
        if (personalMovieDB.count < 10 ){
            alert ('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert ('Вы классический зритель');
        } else if (personalMovieDB.count >= 30 ){
            alert ('Вы киноман');
        } else {
            alert ('Произошла ошибка');
        }
    },
//  3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
//  Если он это сделал - возвращать его к этому же вопросу.
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++){
            let genre = prompt(` Ваш любимый жанр под номером ${i + 1}`);

            if (genre == '' ||  genre == null) {
                console.log('Введите корректные данные');
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }
        // После того, как все жанры введены -  
        // при помощи метода forEach вывести в консоль сообщения в таком виде:
        // "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },    
//   2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB. 
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function () {
        if (this.privat) {
            console.log(personalMovieDB);
        }
    },
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.selectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();





// const store = {
//     answer: null,
// };

// function ask() {
//     store.answer = prompt('???');
//     if (!store.answer) ask();
// }

// ask();