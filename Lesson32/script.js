"use strict";

//DOM


// console.log(document.body);

// console.log(document.documentElement); //тег HTML

console.log(document.body.childNodes); // все дочерние элементы родителя

//node-узел - конечное содержимое элемента, текст, перенос строки

console.log(document.body.firstChild);
console.log(document.body.lastChild);

console.log(document.body.firstElementChild);

//получить родителя, соседей и детей

console.log(document.querySelector('#current').parentNode.parentNode); //прародитель
console.log(document.querySelector('#current').parentNodeElement); //прародитель

//data-атрибуты

console.log(document.querySelector('[data-current="3').nextSibling); //правый сосед элемента с дата атрибутом (нода или элемент)
console.log(document.querySelector('[data-current="3').previousSibling); //левый сосед элемента с дата атрибутом (нода или элемент)

//только элемент

console.log(document.querySelector('[data-current="3').previousElementSibling); //левый элемент-сосед
console.log(document.querySelector('[data-current="3').nextElementSibling); //левый элемент-сосед

//childNodes не имеет аналога, но можно его создать вручную с исключением текстовых нод


for (let node of document.body.childNodes) {
    if(node.nodeName == '#text'){
        continue;
    }
    console.log(node)
}
