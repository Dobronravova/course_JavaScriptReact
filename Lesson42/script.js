'use strict';

//clientWidth и clientHeight ширина или высота элемента c padding, но без border, margin и прокрутки

const box = document.querySelector('.box'),
      btn = document.querySelector('button');
// const width = box.clientWidth;
// const height = box.clientHeight;


//offsetWidth и offsetHeight ширина или высота элемента c padding, border, margin и прокрутки (видимая часть)

// const width = box.offsetWidth;
// const height = box.offsetHeight;

//scroll, без полосы прокрутки

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);


//scrollTop - размер пролистанного контента, скрытого текста

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect()); //координаты объекта, положение относительно сторон
console.log(box.getBoundingClientRect().top);


//определить примененные значения из свойств css

// const style = window.getComputedStyle(box);
const style = window.getComputedStyle(box).display;

console.log(style);


//для window и document

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

// document.documentElement.scrollTop = 0;

window.scrollBy(0, 500); //проскролить относительно текущего положения
window.scrollTo(0, 50); //проскролить относительно страницы






