let a = [];
let b = [1, 2, 3];
let c = [4, 5, 6];

a.push(b);
a.push(c);
// console.log(a.length);  // Output: 2
// console.log(a); // Output: [[1, 2, 3], [4, 5, 6]]

let arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];
// console.log(arr[2][2]); // Output: 90
// console.log(arr[1][0]); // Output: 40
// console.log(arr[0][1]); // Output: 20

//how to find the number of rows and columns in a 2D array
// console.log(arr.length); // Output: 3 (number of rows)
// console.log(arr[0].length); // Output: 3 (number of columns in each row)

//itrating through a 1D array
let nums = [1, 2, 3, 4, 5];
//PRINT ELEMENTS IN THE ARRAY
for (let i = 0; i < nums.length; i++) {
  // console.log(nums[i]);
}

//make a 2D array of row = 5 and column = 3, with values
//a[i][j] = i + j;
const arrw = [];
for (let i = 0; i < 5; i++) {
  arrw[i] = [];
  for (let j = 0; j < 3; j++) {
    arrw[i][j] = 2 * i + 3 * j;
  }
}
// console.log(arrw);

/*
let arr = [[10,20,30], 
           [40,50,60], 
           [70,80,90]];
*/
//col mejor access
for (let j = 0; j < arr.length; j++) {
  for (let i = 0; i < arr[j].length; i++) {
    console.log(arr[i][j]);
  }
  console.log("next");
}
