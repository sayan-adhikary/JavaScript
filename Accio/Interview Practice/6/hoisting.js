const x = 20;

function check() {
  console.log(x);
  let x = 50;
}

// check();

console.log(typeof notDeclared);    //undefined
console.log(typeof declaredWithLet);    //refrenceError

let declaredWithLet = 5;
