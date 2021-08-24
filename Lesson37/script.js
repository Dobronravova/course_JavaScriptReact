"use strict";

//ClassList и делегирование событий

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

console.log(btns[0].classList.length);  //количество классов у элемента

//методы

// console.log(btns[0].classList.item(0)); //класс под индексом
// console.log(btns[1].classList.add('red', 'white')); //добавить класс
// console.log(btns[0].classList.remove('blue')); //удалить
// console.log(btns[0].classList.toggle('white')); //если нет, добавить, если есть - удалить

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

//устаревшее свойство
// console.log(btns[0].className);

//делигирование, обращение через родителя

wrapper.addEventListener('click', (event) => {
    // if(event.target && event.target.tagName == "BUTTON"){
    if(event.target && event.target.matches("button.red")){ //matches - совпадение
        console.log('Hello');
    }
    // if(event.target && event.target.classList.contains == "blue"){
    //     console.log('blue');
    // }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);