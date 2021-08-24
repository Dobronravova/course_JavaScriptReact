"use strict";

//Events on mobile

// toushstart 
// touchmove - смещение
// touchenter
// touchleave
// touchcancel - выход за пределы


document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
        console.log(e.touches);
        console.log(e.targetTouches); //список со всеми точками касания
        console.log(e.changedTouches);  //список пальцев, участвующих в событии
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        // console.log('move');
        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('end');
    // });

});

