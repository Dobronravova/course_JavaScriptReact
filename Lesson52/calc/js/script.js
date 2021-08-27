"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const inputRub = document.querySelector("#rub"),
        inputUsd = document.querySelector("#usd");


    inputRub.addEventListener('input', () => {
        const request = new XMLHttpRequest();

        // методы

        // request.open(method, url, async, login, pass); //метод open собирает настройки, которые помогают сделать запрос. async, login, pass не обязательны
        request.open('GET', 'js/current.json'); 
        //прописываем HTTP заголовки
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        //отправляем
        request.send();

        // свойства

        // status - код ответа 200, 400, 500....
        // statusText - описание кода
        // response ответ от back-а
        // readyState - текущее состояние запроса 0-4


        //события
        // readystatechange - событие отслеживает статус готовности запроса в текущий момент
        // load - когда запрос полностью загрузился и получен ответ

        // readystatechange

        // request.addEventListener('readystatechange', () => {
        //     if(request.readyState === 4 && request.status === 200) {
        //         console.log(request.response);
        //         const data = JSON.parse(request.response);
        //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        //     } else {
        //         inputUsd.value = "Что-то пошло не так";
        //     }
        // });

        // load


        request.addEventListener('load', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.response);
                inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            } else {
                inputUsd.value = "Что-то пошло не так";
            }
        });
    });
});