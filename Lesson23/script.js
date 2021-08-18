"use strict";

//ООП

let str = "some";
let strObj = new String(str); //JS оборачивает строку в объект, производит манипуляции и возвращает строку

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]); //Все прототипы первоначально идут от объектов


const solder = { //Прототип стандартного солдата
    health: 400,
    armor: 100, 
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = { //Конкретный рядовой
    health: 100
};

//Устареший способ прототипного наследования

jonh.__proto__ = solder;

console.log(jonh);
console.log(jonh.armor);
jonh.sayHello();


//Object.setPrototypeOf - в динамике

Object.setPrototypeOf(jonh, solder); //чему, откуда
jonh.sayHello();

//Object.create в момент создания

const join = Object.create(solder);
jonh.sayHello();