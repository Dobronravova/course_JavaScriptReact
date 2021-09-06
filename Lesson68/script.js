'use strict';

//Getter, setter

// Свойства объекта делятся на два типа: свойста-данные и свойства-акцессоры (геттеры и сеттеры, позволяют получать и присваивать данные)

const persone = {
    name: 'Alex', 
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge (num) {
        this.age = num;
    }
};


console.log(persone.userAge = 30);
console.log(persone.userAge);
