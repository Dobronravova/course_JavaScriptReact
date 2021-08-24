"use strict";

//setTimeout и setInterval

//Вариации использования

//  const timerId = setTimeout(function() {
//     console.log('Hello');
// }, 2000);

//  const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');

// const timerId = setTimeout(logger, 2000);


// сброс таймаута
// clearInterval(timerId);


//для clearInterval внутри функции

let timerId;
let i = 0;

// setTimeout(logger, 2000);


// function logger () {
//     if (i === 3){
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

//вызов clear после определенного действия

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
// });

//рекурсивный вызов setTimeout, строгая последовательность и временной промежуток

// let id = setTimeout(function log (){
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

const btn = document.querySelector('.btn');

function myAnimation () {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos === 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);

