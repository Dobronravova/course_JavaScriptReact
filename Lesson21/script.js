"use strict";

//Массивы - упорядоченые структуры данных

const arr = [13, 2, 35, 16, 8];

//Удаление последнего элемента массива pop()
arr.pop();

//Добавление элемента в конец массива push( )
arr.push(9);


console.log(arr);

//Перебор элементов внутри массива через обычный цикл

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//через for of, можно использовать break и continue

for (let value of arr){
    console.log(value);
}

// arr[99] = 0;
// console.log(arr.length); //length не подсчитывает элементы, а возвращает индекс последнего элемента +1
// console.log(arr);


//Метод forEach (callback функция) 

arr.forEach(function(item, i, arr){ //элемент перебора, номер по порядку, ссылка на нужный нам массив
    console.log(`${i}: ${item} внутри массива ${arr}`)
})


//Метод map - перебор массива с модификацией, создает новый массив
//Метод filter

//Метод split - формирование массива на основании строки

const str = prompt("", "");
const products = str.split(", ");
console.log(products);

//Метод join - обратный split, преобразует массив в строку
console.log(products.join('; '));

//Метод sort - сортирует посимвольно

products.sort();
console.log(products.join('; '));

arr.sort();
console.log(arr);

//Функция для сравнения чисел
function compareNum(a, b) {
    return a - b;
}

arr.sort(compareNum);
console.log(arr);

//Псевдомассив - объект, структура которого совпадает с массивом, но для них не работают стандартные методы