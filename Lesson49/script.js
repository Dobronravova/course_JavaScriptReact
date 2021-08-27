'use strict';

//Rest(...) - противоположный spread, отдельные элементы объединяет в массив
//собирает все оставшееся и формирует из этого массив

const log = function(a, b, ...rest) { // необязательные аргументы 
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage'); //basic rest (2) ["operator", "usage"]


//Параметр по-умолчанию

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);