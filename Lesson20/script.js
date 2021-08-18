"use strict";

//Объекты - ассоциативные массивы

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test")
    } //Созданный метод массива
};

// console.log(options.name);
// console.log(options.colors);
// console.log(options.colors.border);
// console.log(options["colors"]['border']);
// delete options.name;

// console.log(options);

//Перебор по свойствам объекта
//+ Счетчик свойств примитивно

// let counter = 0;
// for (let key in options){
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key}, имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

//Встроенные методы https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects

// Метод Object keys, создание массива на основнии объекта
console.log(Object.keys(options));
console.log(Object.keys(options).length); //кол-во элементов

options.makeTest(); //Запуск созданного метода массива

//Деструктуризация массива в ES6 - вытаскиваем свойства за объект для дальнейшего использования как переменные

// console.log(options["colors"]['border']);

const {border, bg} = options.colors; //Что и откуда
console.log(bg);