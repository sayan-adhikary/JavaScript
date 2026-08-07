var x = 10;
var x = 20; // No error, re-declaration allowed
// x = 30;     // Update allowed

function test() {
    var y = 5;
    if (true) {
        var y = 10; // Same variable, function-scoped
        console.log(y); // 10
    }
    console.log(y); // 10
    console.log(x);

}
// console.log(y);  //ReferenceError:
// test();

// -- let
let a = 10;
// let a = 20; // Error: cannot re-declare
a = 30; // Update allowed

if (true) {
    let b = 5;
    console.log(b); // 5
}
// console.log(b); // Error: b is not defined

// -- const
const PI = 3.14;
// PI = 3.15; // Error: cannot reassign

const obj = { name: 'John' };
obj.name = 'Jane'; // Allowed, modifying content
// obj = {}; // Error: cannot reassign reference

const arr = [1, 2, 3];
arr.push(4); // Allowed
// arr = []; // Error

console.log(obj, arr);
