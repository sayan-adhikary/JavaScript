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
// console.log(Person.getDetails());

function arrToObject(arr) {
    const obj = {};
    let idx = 0;
    for (let ele of arr) {
        obj[idx] = ele;
        idx++;
    }
    return obj;
}

let arr = [8, 7, 9, 11, 15, 20];
// console.log(arrToObject(arr));



const user = {
    name: "Alex",
    age: 28,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
        building: {
            block: "A",
            roomNo: undefined,
            joined: "12-03-2003",
            floor: null,
            // getDetails: function () {
            //     return "sayan"
            // }
        }
    }
};
const user1 = { ...user };     //Shallow Coppy
// console.log(user1);          

// const user2 = JSON.parse(JSON.stringify(user));      //Deep copy
const user2 = structuredClone(user);
console.log(user2);

