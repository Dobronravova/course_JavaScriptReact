'use strict';

//Функции-генераторы выдают последовательный результат

function* generator(){
    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}

const str = generator();

console.log(str.next()); //{ value: 'S', done: false }
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next()); //{ value: undefined, done: true }


console.log(str.next().value); //только значение


function* count(n) {
    for (let i = 0; i < n; i++){
        yield i;
    }
}

// const counter = count(7);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

for (let k of count(7)){
    console.log(k);
}


