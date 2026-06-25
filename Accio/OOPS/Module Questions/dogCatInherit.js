//complete this code
class Animal {
    constructor(species) {
        this.species = species;
    }
    get() {
        return this.species;
    }
    makeSound() {
        return `The ${this.species} makes a sound`;
    }
}

class Dog extends Animal {
    constructor(abc) {
        super(abc);
    }
    bark() {
        return `woof`;
    }
}

class Cat extends Animal {
    constructor(abc) {
        super(abc);
    }
    purr() {
        return `purr`;
    }
}

let cat = new Cat("sayan");
console.log(cat.makeSound());
let dog = new Dog("papu");
console.log(dog.makeSound());

console.log(dog.bark());
console.log(cat.purr());
