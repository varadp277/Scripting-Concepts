// Q. Create a JS program an class & object to calculate area of rectangle using user input

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    calculateArea() {
        return this.length * this.width;
    }
}

rl.question("Enter the length of rectangle: ", function(length) {
    rl.question("Enter the width of rectangle: ", function(width) {

        let rect = new Rectangle(parseFloat(length), parseFloat(width));

        console.log("Area of Rectangle = " + rect.calculateArea());

        rl.close();
    });
});

