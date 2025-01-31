const mySum = Symbol("key1");

const jsUser = {
    name: "Sayan",
    "full name" : "Sayan Adhikary",
    mySum : "mykey1",
    age: 18,
    email: "Sayan@mail.com",
    isLoggedIn: true,
    lastLoginDay: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser.mySum);

jsUser.email = "papu@gmail.com";
// Object.freeze(jsUser);
jsUser.email = "Spapu@gmail.com";
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello, I am " + this.name);
}
jsUser.greetingtwo = function(){
    console.log(`Hello, I am ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
