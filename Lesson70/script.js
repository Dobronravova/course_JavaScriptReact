'use strict';

//Прием модуль - изоляция внутренних деталей реализации скрипта
// Модуль - самодостаточный и независимый
// Избежание конфликтных ситуаций с одинаковыми именами, переменные существуют только в его собстенной области видимости

const app = '123';

// Анонимная самовызывающаяся функция ()-вызов функции

const number = 1;

// Отдельный модуль со своей областью видимости
(function(){
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

// Использование объектоного интерфейса - записываем модуль в переменную и в нем возвращаем методы, доступные снаружи

const user = (function(){
    const privat = function() {
        console.log('I am privat!');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();