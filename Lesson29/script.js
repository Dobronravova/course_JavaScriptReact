"use strict";

//Действия с элементами на странице

const box = document.getElementById('box'), 
      btns = document.getElementsByTagName('button'), 
      circles = document.getElementsByClassName('circle'), 
      hearts = document.querySelectorAll('.heart'), 
      wrapper = document.querySelector('.wrapper'),
      //получение элемента в блоке
      oneHeart = wrapper.querySelector('.heart'),
      screenWidth = window.screen.width;

// console.dir(box);

box.style.backgroundColor = 'red';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = `background-color: green; width: ${screenWidth}px`;

//Применение на всех элементах через цикл
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

//Применение на всех элементах через forEach - самый частый вариант
hearts.forEach(item => {
    item.style.backgroundColor = 'pink';
});

//Создание элементов

const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

//className - устаревший метод, лучше использовать classList(удаление, добавление, переключение)

div.classList.add('black');

//Вставка

//append - вставка в конец
// document.querySelector('.wrapper').append(div);
document.body.append(div);

//prepend - вставка в начало
wrapper.prepend(div);

//before, after

hearts[0].before(div);

hearts[0].after(div);

circles[0].remove();

// hearts[0].replaseWith(circles[0]);

//appendChild

wrapper.appendChild(div);

div.innerHTML = '<h1>Yello</h1>';

// div.textContent = 'Hello';

//вставить кусочек кода перед или после определенного кода

div.insertAdjacentHTML('afterend', '<h2>black</h2>');



