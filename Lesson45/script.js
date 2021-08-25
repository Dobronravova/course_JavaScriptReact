'use strict';

//Функции-конструкторы

//длиный синтаксис для создания типа данных через new

// const num = new Number(3);
// const num = new Function(3);
// console.log(num)

//ES5

function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function (){
        console.log(`Hello ${this.name}`);
    };
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел`);
};

ivan.exit();


console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();


//ES6 - classes