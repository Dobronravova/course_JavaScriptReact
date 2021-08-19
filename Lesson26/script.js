"use strict";

//Динамическая типизация - возможность динамически изменить тип

//To String - старый способ

console.log(typeof(String(null)));
console.log(typeof(String(4)));

//Конкатинация

console.log(typeof(4 + ''));

const num = 5;
console.log("vk.com/catalog/" + num);

const fontSize = 26 + 'px';

//To Number
console.log(typeof(Number(null)));
console.log(typeof(Number('3')));


//Унарный плюс
console.log(typeof(+'5'));

//parseInt
console.log(typeof(parseInt("14px", 10)));

let answ = +prompt("Hello", "");

//To boolean

// Все, кроме 0, '', null, undefined, NaN является true

//Нативный способ логического преобразования

let switcher = null;

if (switcher) {
    console.log('Working...-');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}


console.log(typeof(Boolean('3')));

console.log(typeof(!!('3'))); //Boolean через двойное орицание