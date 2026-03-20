//  Q. To accept & display student details

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Student {
    constructor(name, roll, marks) {
        this.name = name;
        this.roll = roll;
        this.marks = marks;
    }

    display() {
        console.log("\nStudent Details:");
        console.log("Name: " + this.name);
        console.log("Roll No: " + this.roll);
        console.log("Marks: " + this.marks);
    }
}

let students = [];

rl.question("Enter Student Name: ", function(name) {
    rl.question("Enter Roll Number: ", function(roll) {
        rl.question("Enter Marks: ", function(marks) {

            let student = new Student(name, roll, marks);
            students.push(student);

            console.log("\nAll Student Records:");
            students.forEach(std => std.display());

            rl.close();
        });
    });
});
