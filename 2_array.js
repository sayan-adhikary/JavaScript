const marvel_heros = ["thor", "ironman", "captain america", "black widow", "hulk"];
const dc_heros = ["batman", "superman", "flash"]; 

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[5][1]);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros];   //spread operator(We can use this operator to merge two & more arrays)
// console.log(all_new_heros);

const another_array = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];
const real_array = another_array.flat(Infinity);  //flat method is used to convert nested array into single array
// console.log(real_array);

// console.log(Array.isArray("Sayan"));
console.log(Array.from("Sayan"));
console.log(Array.from({name: "Sayan"})); //**It will return an empty array

let myArray = 100;
let myArray2 = 200;
let myArray3 = 300;
let myArray4 = 400;
console.log(Array.of(myArray, myArray2, myArray3, myArray4));  //Array.of() method is used to convert multiple values into array    
