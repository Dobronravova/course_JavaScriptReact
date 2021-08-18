"use strict";


// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
// }

// showFirstMessage("Hello");
// console.log(num);

// Замыкание функции - сама функция вместе со всеми внешними переменными, которые ей знакомы


// function calc (a, b){
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(8, 9));


// Вывод return из функции
//Func decloration, можно вызвать и до объявления
function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//Func expression, вызов только после объявления

const logger = function() {
    console.log('Hello')
}

logger();


//Стрелочная

const calc = (a, b) => {
    return a + b;
};

console.log(calc(10, 20));