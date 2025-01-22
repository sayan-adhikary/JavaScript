const score = 100
// console.log(score);
// 
const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(typeof balance);
// console.log(balance.toFixed(2));
// 
const otherNumber = 100.553456 
// console.log(otherNumber.toPrecision(3));
// 
const hundred = 1000000
// console.log(hundred.toLocaleString('en-US'));

// +++++++++++++++++++++++++++++++++++++++++ Math Object +++++++++++++++++++++++++++++++++++++++++
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(2.4));
console.log(Math.ceil(2.4));
console.log(Math.floor(2.4));
console.log(Math.sqrt(16));
console.log(Math.abs(-3));
console.log(Math.pow(2, 3));
console.log(Math.min(2, 3, 4, 5));
console.log(Math.max(2, 3, 4, 5));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));

const min = 1
const max = 10
console.log(Math.floor(Math.random() * (max - min + 1) + min));