// Class Example
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.display = function () {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    };
    return person;
}());
var p1 = new person("Varad", 20);
p1.display();
