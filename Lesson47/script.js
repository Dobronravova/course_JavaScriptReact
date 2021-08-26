'use strict';

//ES6, classes - красивая обертка функций-конструкторов, cинтаксический сахар

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    calcArea () {
        return this.height * this.width;
    }
}

class ColoredRectangleWhithText extends Rectangle{ //наследование
    constructor(height, width, text, bgColor){
        super(height, width); //наследование свойств
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWhithText(25, 10, 'Hello', 'blue');

div.showMyProps(div.calcArea());

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());


