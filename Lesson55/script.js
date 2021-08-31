'use strict';

//Promice для четко последовательных действий

console.log('Запрос данных...');

const req = new Promise(function(resolve, reject){ // аргументы вместо которых будут функции; resolve - обещаение выполнилось; reject - что-то пошло не так
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
        
        resolve(product); //все ок, обещаение выполнилось
        
    
    }, 2000);
});


req.then((product) => { //аргумент resolve, в случае положительного исхода
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data); 
}).catch(() =>{
    console.error('Произошла ошибка');
}).finally(() =>{
    console.log('Finally');
});

//finaly - в конце, действие произойдет независимо от успешности

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {  //Ждет окончания всех промисов, переданных в массив
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => {  //Ждет выполнения первого промиса
    console.log('All');
});


//callback hell
// setTimeout(() => {
//     console.log('Подготовка данных...');

//     const product = {
//         name: 'TV',
//         price: 2000
//     };

//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);

// }, 2000);
