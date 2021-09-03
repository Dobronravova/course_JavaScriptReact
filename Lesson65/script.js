'use strict';

//Регулярки
// создание с помощью конструктора - устаревший способ

// new RegExp('pattern', 'flags');

// Паттерн, флаги
// /pattern/f

// search

// const ans = prompt('Введите ваше имя');

// // const reg = /n/i;
// const reg = /n/ig; //все вхождения

// // i - вне зависимости от регистра
// // g - несколько вхождений
// // m - многострочный режим


// // console.log(ans.search(reg)); //Ann - 1
// console.log(ans.match(reg)); //Ann - получаем массив ["n", index: 1, input: "Ann", groups: undefined]
// console.log(ans.match(reg)); //nnn - ["n", "n", "n"]


// replace замена текста; то, на что 

// const pass = prompt('Password');
// console.log(pass.replace(/./g, '*')); // . -все эелементы попадающие в строку, заменяем на звездочку
// console.log(pass.replace(/\./g, '*')); // . -все точки попадающие в строку, заменяем на звездочку


// console.log('12-34-56'.replace(/-/g, ':'));


// test
// const ans = prompt('Введите ваше имя');
// const reg = /n/ig;
// console.log(reg.test(ans)); //есть ли совпадение; true/false

//Классы

// \d - числа
// \w - слова
// \s - символы

// const ans = prompt('Введите число');
// const reg = /\d/ig;
// console.log(ans.match(reg)); //выведет только числа

// Комбинирование

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));

// Обратные классы (не числа, не буквы...)

// \D - числа
// \W - слова
// \S - символы