'use strict';

//JSON - набор пар ключ-значение в ""
//с помощью JSON создаются глубокие копии

const persone = {
    name: 'Alex',
    tel: '+79998887766',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.stringify(persone)); //{"name":"Alex","tel":"+79998887766"}

console.log(JSON.parse(JSON.stringify(persone)));


const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);
