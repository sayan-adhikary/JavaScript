const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sayan"
tinderUser.isLoggedin = false

//console.log(tinderUser);

const regularUser = {
    email : "sayan@gmail.com",
    fullName : {
        userFullname : {
            firstName : "Sayan",
            lastName : "Adhikary"
            }
    }
}

// console.log(regularUser.fullName);

const object1 = {1: "a", 2: "b", 3: "c", 4: "d"};
const object2 = {4: "a", 5: "b", 6: "c"};

// const object3 = {object1,object2};
// const object3 = Object.assign({}, object1, object2);       //Object.assign use for: merge two object

// const object3 = {...object1, ...object2};                       //Spread operator use for: merge two object, but it is more modern and cleaner than Object.assign
// console.log(object3);


const users = [
    {
        id : 1,
        email : "Sayan@gmail.com",
    },
    {
        id : 1,
        email : "Sayan@gmail.com",
    },
    {
        id : 1,
        email : "Sayan@gmail.com",
    }
]

// users[1].email
// console.log(users);

// console.log(tinderUser);


console.log(Object.keys(tinderUser));        //Object.keys use for: convert object to array
console.log(Object.values(tinderUser));      //Object.values use for: convert object to array
console.log(Object.entries(tinderUser));     //Object.entries use for: convert object to array
console.log(tinderUser.hasOwnProperty("name"));        //hasOwnProperty use for: check the property is exist or not