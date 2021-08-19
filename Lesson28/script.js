"use strict";

//Получение элементов со страницы


//DOM - объектная модель документа

const box = document.getElementById('box');
console.log(box);

// const btns = document.getElementsByTagName('button')[1];
// console.log(btns);

const btns = document.getElementsByTagName('button');
console.log(btns[2]);


const circles = document.getElementsByClassName('circle');
console.log(circles);


//Современные методы


//только у querySelectorAll есть метод forEach

const hearts = document.querySelectorAll('.wrapper > .heart');
console.log(hearts);

hearts.forEach (item => {
        console.log(item)
    }
)

//querySelectorAll берет только первый элемент

const oneHeart = document.querySelector('.wrapper > .heart');
console.log(oneHeart);