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

function arrToObject(arr){
    const obj = {};
    let idx = 0;
    for(let ele of arr){
        obj[idx] = ele;
        idx++;
    }
    return obj;
}

let arr = [8,7,9,11,15,20];
console.log(arrToObject(arr));
