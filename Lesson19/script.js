"use strict";

//Callback - функция, которая должна выполнится после того, как другая завершит свое выполнение

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу; ${lang}`);
    callback();
}

//Через анонимную функцию, сразу ее описывая

// learnJS('JavaScript', function(){
//     console.log('Я прошел этот урок!')
// });

//Через callback функцию

function done() {
    console.log('Я прошел этот урок!')
}

learnJS('JavaScript', done);
