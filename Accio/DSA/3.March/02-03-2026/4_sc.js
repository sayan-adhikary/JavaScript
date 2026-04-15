let arr = new Array(3);
console.log(arr);


function solve(arr) {    //sc = O(n^2)
    let a = arr.length;
    let b = new Array(a * a);
}
/*
new Array(n) → O(n)
new Array(n*n) → O(n²)
new Array(n*n*n) → O(n³) 
*/