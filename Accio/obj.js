const Person = {
    firstName: "Sankar",
    age: 24,
    job: "sde",
    native: "ap",
    arr: [4, 5, "56"],
    getDetails() {
        return this.job;
    }
};
console.log(Person.getDetails());

