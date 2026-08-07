const PI = 3.14;
// PI = 3.15; // Error: cannot reassign

const obj = { name: 'John' };
obj.name = 'Jane'; // Allowed, modifying content
// obj = {}; // Error: cannot reassign reference

const arr = [1, 2, 3];
arr.push(4); // Allowed
// arr = []; // Error