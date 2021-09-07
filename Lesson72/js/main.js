export let one = 1;

let two = 2;

export {two};

export function sayHi() {
    console.log('Hi');
}

// экспорт по-умолчанию

export default function sayHello() {
    console.log('Hello');
}