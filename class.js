"use strict";
class Employee {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    getIdwithName() {
        return this.id.toString() + ' ' + this.name;
    }
}
let john = new Employee(1, 'John');
let stuff = john.getIdwithName();
// john.id = 1;
// john.name = 'John'
console.log(stuff);
class manager extends Employee {
    constructor(id, name) {
        super(id, name);
    }
}
