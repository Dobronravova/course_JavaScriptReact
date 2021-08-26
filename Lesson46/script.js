'use strict';

//This

// function showThis() {
//     console.log(this);
// }

// showThis(); //this этой функции - глобальный объект window 

// function showThis() {
//     console.log(this);
// }

// function showThis(a, b) {
//     console.log(this);
//     function sum(){
//         console.log(this); 
//         return a + b
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20, 
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();


// function User (name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function (){
//         console.log(`Hello ${this.name}`);
//     };
// }


function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: "John"
};

//call и apply передают контекст фунциии, ручное присвоение контекста

sayName.call(user, 'Smidth'); //в call просто передаем параметр
sayName.apply(user, ['Smidth']); //в apply передаем параметр в массиве

function count(num) {
    return this*num; 
}

// const double = count.bind(2); //создает новую функцию связанную с определенным контекстом

// console.log(double(3));
// console.log(double(10));

// 1) Обычная функция: this = window, но если есть use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - новый экземпляр объекта
// 4) ручная привязка this: call, apply и bind


// -------- //


const btn = document.querySelector('button');

// btn.addEventListener('click', function(){ 
//     this.style.background = 'red'; 
//     console.log(this); //контекст - сам элемент вызова event target
// });

// чтобы контекст в стелочной функции не терялся, добавляем event в параметр

btn.addEventListener('click', (e) => { 
    e.target.style.background = 'red'; 
    console.log(this); //контекст - сам элемент вызова event target
});

// у стрелочной функции нет своего контекста, она берет его у родителя

const obj = {
    num: 5,
    sayNumber: function(){
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();

// const double = (a) => {
//     return a * 2;
// }; //если тело функции состоит из одной строки, то можно ее можно сократить, убрав скобки и return

const double = (a, b) => a * b * 2;

console.log(double(5, 5));