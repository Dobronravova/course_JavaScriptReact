'use strict';

//Асинхронные операции - setTimeout, setInterval, запросы на сервер, все callback-и

// console.log(1);

// setTimeout(() => {
//     console.log('Timeout');
// }, 4000);

// setTimeout(() => {
//     console.log('Timeout_4000');
// }, 4000);

// console.log(2);

// let k = 0;

// function count(){
//     for (let i = 0; i < 1e9; i++){
//         k++; 
//     }
//     alert('Done');
// }

// count();

setTimeout(() => {
    console.log(1);
}, 0); // 0 = 4ms

console.log(2);

