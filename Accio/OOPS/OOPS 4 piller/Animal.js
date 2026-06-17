class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name, "Eating");
    }
}

class Dog extends Animal {
    bread;
    constructor(bread, name) {
        super(name);
        this.bread = bread;
    }
}

class Cat extends Animal {
    bread;
    constructor(bread, name) {
        super(name);
        this.bread = bread;
    }
}

let a = new Cat("a", "sayan");
a.eat()