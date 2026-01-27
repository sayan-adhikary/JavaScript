//Array
const myArray = [1, 2, 3, 4, 5];
const myHeros = ["Batman", "Superman"];

const myArray2 = new Array(2, 3, 4, 5);
// console.log(myArray2[1]);
// console.log(myHeros);

//Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(5));
// console.log(myArray.indexOf(5));

// const newArray = myArray.join();
// console.log(myArray);
// console.log(typeof newArray);


//slice, splice, concat, reverse, sort, map, filter, reduce, forEach
console.log("A:- Main array ", myArray);
const myn1 = myArray.slice(1, 3);
console.log("After Slice ", myn1);
console.log("B:- Main array ", myArray);

const myn2 = myArray.splice(1, 3);
console.log("After splice ", myn2);
console.log("C:- Main array ", myArray);


/*A:- Main array  [ 1, 2, 3, 4, 5 ]
After Slice  [ 2, 3 ]
B:- Main array  [ 1, 2, 3, 4, 5 ]
After splice  [ 2, 3, 4 ]
C:- Main array  [ 1, 5 ]*/