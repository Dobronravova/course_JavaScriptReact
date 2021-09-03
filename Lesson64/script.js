'use strict';

//LocalStorage - встроенный в браузер объект, способный хранить различные данные до 5 мб (свойство window)

// localStorage.setItem('number', 5); //запись нового ключа

// localStorage.getItem('number'); //получить данные из localStorage
// console.log(localStorage.getItem('number'));


// localStorage.removeItem('number');//удалить данные из localStorage
// localStorage.clear(); //очистка localStorage

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

//для хранения массивов, объектов и прочего нужно сделать сериализацию, например в json

const persone = {
    name: 'Alex', 
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));
