'use strict';

//Инкапсуляция - отделение и скрытие от внешнего мира внутренности программы, 
//Хранение объекта в приватном состоянии, только методы имеют доступ для изменения

// Создание инкапсуляции на функции конструкторе
// Сохранение свойства объекта как переменную для невозможности внесения изменений
// Создание методов объекта для работы вне конструтора


// function User(name, age){
//     this.name = name;
//     let userAge = age;
//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     };
//     this.getAge = function() {
//         return userAge;
//     };
//     this.setAge = function(age){
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     };
// }

// const ivan = new User ('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge()); //получение свойства

// ivan.setAge(30); //уставновка свойства
// ivan.setAge(300);
// ivan.name = 'Alex';

// console.log(ivan.getAge()); //получение свойства

// ivan.say();

// Создание инкапсуляции в классе, _

class User {
    constructor (name, age) {
        this.name = name;
        this._age = age;
    }
    say() {
        console.log(`Имя пользователя: ${this.name}, возраст ${this._age}`);
    }
    get age() {
        return this._age;
    }
    set age (age){
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const ivan = new User ('Ivan', 27);
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);
ivan.say();

//поля классов, работает только в chrome

class User {
    constructor (name, age) {
        this.name = name;
        this._age = age;
    }
    // можно создавать свойства вне конструктора и для приватности добалять #
    #surname = 'Petrov';

    //задание - написать геттер и сеттер для surname
    get surname() {
        return this.#surname; 
    }
    set surname (surname){
        this.#surname = surname;
    } 

    // и использовать стрелочные функции во избежание потери контекста 
    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }
    get age() {
        return this._age;
    }
    set age (age){
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const ivan = new User ('Ivan', 27);
console.log(ivan.surname);
ivan.surname = ('Ivanov');
console.log(ivan.surname);
ivan.say();