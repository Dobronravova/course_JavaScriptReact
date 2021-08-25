"use strict";

//Date

// const now = new Date();
// const now = new Date('2020-05-01');
// const now = new Date(-999999999);


//получение компонентов даты

// const now = new Date();
// // new Date.parse('2021-05-01');
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());

// console.log(now.getDay()); //номер дня недели

// console.log(now.getHours());
// console.log(now.getUTCHours());


// console.log(now.getTimezoneOffset()); //разница между часовым поясом и UTC в минутах

// console.log(now.getTime()); //дата в милисекундах


// //установка - setters

// console.log(now.setHours(10, 30));

let start = new Date();

for (let i = 0; i < 100000; i++){
    let some = i ** 3; //** - возведение в степень
}

let end = new Date();

alert(`Цикл откработал за ${end - start} милилсекунд`)