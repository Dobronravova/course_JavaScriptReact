"use strict";

//Передача данных по ссылке и значению

//Примитивные типы данных (строки, числа, логические значения) передаются по значению

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);


//Объекты передаются по ссылке 

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; //Ссылка на объект

// copy.a = 10;

// console.log(copy);
// console.log(obj);


//Создание копии через цикл

function copy(mainObject) {
    let objCopy = {};
    let key;
    for (key in mainObject) {
        objCopy[key] = mainObject[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; //не сработает, т.к копия поверхностная


console.log(newNumbers);
console.log(numbers);

//Создание независимой копии через объединение массивов - метод assign

const add = {
    d: 17,
    i: 20
};

console.log(Object.assign(numbers, add));

//Метод assign с первым параметром пустого объекта

console.log(Object.assign({}, add));

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);


//Копия массива - метод slice

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'iuiuiui';
console.log(newArray);
console.log(oldArray);

//ES6 оператор spread (...) - оператор разворота

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); //выведет каждое свойство по отдельности


const array = ["a", "b"];

const newnewArray = [...array, 'c', 'd'];

console.log(array);
console.log(newnewArray);


//ES8 оператор spread (...) работает и для объектов


const q = {
    one: 1,
    two: 2
};

const newObj = {...q, four: 4};

console.log(q);
console.log(newObj);