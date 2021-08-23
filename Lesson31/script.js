"use strict";

//События 

//Обработчик события - функция, которая срабатывает как только событие произошло

// Через атрибут html onclick - не рекомендуется использовать

// Через свойство DOM дерева для события, не рекомендуется т.к при переназначении предыдущие пропадут

const btn = document.querySelector('button'),
      btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//     alert('Click');
// }

//addEventListener, removeEventListener - можно назначить несколько действий на одно событие

btn.addEventListener('click', () => {
    alert('Click');
});

btn.addEventListener('click', () => {
    alert('Second click');
});

btn.addEventListener('mouseenter', () => {
    console.log('Hover');
});

//e - event - объект события, передается в аргумент функции

btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target); //элемент на котором произодится событие
    e.target.remove();//удаление элменета
});

//удаление обработчика события, чтобы удалить обработчик, нужно вывести функцию в переменную

// let i = 0;
// const deleteElement = (e) => {
//     console.log('e.target');
//     i++;
//     if (i == 1 ){
//         btn.removeEventListener('click', deleteElement); //удалить обработчик, если событие произошло один раз
//     }
// };

const deleteElement = (e) => {
    console.log('e.currentTarget'); //определяет элемент, в котором в данный момент обрабатывается событие
    console.log('e.type'); //тип события
};


//Всплытие событий - действие сначала срабатывает на вложенном элементе, затем на родителе
btn.addEventListener('click', deleteElement); //назначаем обработчик
overlay.addEventListener('click', deleteElement);


//Отменить действие по-умолчанию

const link = document.querySelector('a');

link.addEventListener('click', function(event){
    event.preventDefault();

    console.log(event.target);
});

//Повесить обработчик события на несколько элементов

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); //Опция события - once (единожды)
});

