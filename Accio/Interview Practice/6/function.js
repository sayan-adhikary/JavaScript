//function Declaration

// console.log(dic(2, 3));

function dic(a, b) {
  return a * b;
}
// console.log(dic(3, 4));

//function expression
//1
// console.log(fn(2 * 5)); //can not execute

const fn = (a, b) => {
  if (a < b) {
    return a * b;
  }
};

// console.log(fn(4, 5));

//2
const add = (a, b) => a + b;
// console.log(add(2, 3));

var alx = (a, b) => a + b;
console.log(alx(2, 3));