// Импортируется объект, из которого мы вытаскиваем определенные переменные
// import {one, two} from "./main";
// console.log(`${one} and ${two}`);

// import {one as first} from "./main"; // переименование
// console.log(first);

import * as data from "./main.js"; //импортировать все и назвать

import sayHello from "./main.js"; //импорт по-умолчанию, напрямую

// если подключаем в html type="module", то дописываем расширение файла

console.log(`${data.one} and ${data.two}`);
data.sayHi();
sayHello();






