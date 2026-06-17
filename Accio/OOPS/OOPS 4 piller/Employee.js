class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateBonus() {
        return this.salary * (1 / 10);
    }
}

class Managaer extends Employee {
    calculateBonus() {
        return this.salary * (2 / 10);
    }
}
class Developer extends Employee {
    calculateBonus() {
        return this.salary * (15 / 100);
    }
} 

let mng = new Employee("sayan", 100);
console.log(mng);
