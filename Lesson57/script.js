'use strict';

//Методы перебора массива (forEach - перебор массива, не возвращение нового)


//filter - создает новый отфильтрованный массив

const names = ['Ivan', 'Ann', 'Ksenia', 'Valdemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);

//map - изменяет каждый элемент массива

let answers = ['IvAn', 'AnnA', 'Hello'];
answers = answers.map(item => item.toLowerCase());
console.log(answers);

//every/some - возвращает bool; some если хотя бы один элемент прошел проверку; every - все

const some = [4, 'kuio', 'ookoko'];

// console.log(some.some(item => typeof(item) === 'number'));
console.log(some.every(item => typeof(item) === 'number'));


//reduce - для сбора массива в единое целое

// const arr = [4, 5, 1, 3, 2, 6];
//                         // 0 3     4
//                         // 4       5
//                         // 9       1
//                         // 10      3
// const res = arr.reduce((sum, current) => sum + current, 3); // 3 - начальное значение
// console.log(res);

const arr = ['apple', 'pear', 'plum'];

const res = arr.reduce((sum, current) => `${sum}, ${current}`, 6);
console.log(res);



const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};


//вытащить имена

//entries - трансформация объекта в массив
//chaning - запись операций в цепочку
const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone') //[ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]
.map(item => item[0]);

// [
//     [ 'ivan', 'persone' ],
//     [ 'ann', 'persone' ],
//     [ 'dog', 'animal' ],
//     [ 'cat', 'animal' ]
//   ]

console.log(newArr); 












