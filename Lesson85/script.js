//контекст вызова

let obj = {
    number: 5,
    sayNumber: function() {
        say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

//метод filter

let names = ['Ivan', 'Ann', 'Ksenia', 'Vladlen'];

let shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);

//метод map

let answers = ['IvAn', 'AnnA', 'HeLLo'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);

// конкатинация

console.log(`Поьзователь ${name}, ${age} лет`)

//значение по-умолчанию

function fetchData(data, count = 5) {
    console.log(`Данные: ${data} в количестве ${count}`);
}

fetchData('something');

//rest параметр

function max (a, b, ...numbers) {
    console.log(numbers);
}

max(3, 4, 67);

//spred - разворачиваение массива

const arr1 = [1, 3, 4],
      arr2 = [43, 2, 6];

const res = Math.max(5, ...arr1, 300, ...arr2);

console.log(res);


//object spred, объединение с перезаписью свойств

const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
};

const avatar = 'Photo';

// const result = Object.assign(user, admin);
const result = {...user, ...admin, avatar};
console.log(result);


const x = 35, y = 10;
const coords = {
    // x: x, тоже самое, что x
    // y: y, тоже самое, что y
    x,
    y,
    calcSq() {
        console.log(this.x*this.y);
    }
};
coords.calcSq();
console.log(coords);


//деструктуризация
//для использования свойства объекта вне самого объекта


const user = {
    name: {
        first: 'Sam', 
        second: 'Smith'
    },
    pass: 'qwerty',
    rights: 'user'
};

// const userName = user.name;

const {name:{first, second}, pass, rights} = user; //присваиваение свойств к одноименным переменным

console.log(rights, first, second);

//параметры объекта по-умолчанию
function connect({
    host = 'localhost', 
    port = 3000,
    user = 'default'} = {}){
        console.log(`host: ${host}, user ${user}, port ${port}`);
}
connect();
// connect({
//     port: 4000
// });


//деструктуризация массивов

const numbers = [3, 5, 6, 6];

const [ ,  , c, d] = numbers;

console.log(c, d);



const numbers = [[3, 5], [6, 6]];

const [[a, b], [c, d]] = numbers;

console.log(a, b, c, d);


const country = {
    name: 'England', 
    population: 20000000,
    gender: {
        male: ['15%', '40%'], 
        female: ['16%', '29%']
    }
};

const {gender: {male: [maleUnder18, maleAdult], female: [femUnder18, femAdult]}} = country;

console.log(maleUnder18, femAdult);