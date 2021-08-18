"use strict";

const str = "teSt";
const arr = [1, 2, 4];

console.log(str.length);
console.log(arr.length);

console.log(str[2]);

// Изменение регистра

console.log(str.toUpperCase());
console.log(str.toLowerCase());


//Поиск части строки и его начальное место, поиск подстроки

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q")); //-1 (не найдено)

//Извлечение подстроки и возврат новой

const logg = "Hello World";
console.log(logg.slice(6, 11)); //Начальная позиция, конечная
console.log(logg.slice(6)); //С начальной позиции и до конца
console.log(logg.slice(-7, -1)); //С конца

console.log(logg.substring(6, 11)); //Аналогично, но не поддерживает отрицательные значения

console.log(logg.substr(6, 5)); //Начальная позиция и кол-во символов для взятия

//Числа
const num = 12.2;
console.log(Math.round(num)); //Округление до ближайшего целого

const test = "14.4px";
console.log(parseInt(test)); //Преобразование числа в строку
console.log(parseFloat(test)); //Преобразование числа в строку с плавающей точкой