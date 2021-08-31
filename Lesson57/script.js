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

const arr = [4, 5, 1, 3, 2, 6];

                        // 0       4
                        // 4       5
                        // 9       1
                        // 10      3
const res = arr.reduce((sum, current) => sum + current);











