const arr = [4, 5, 6, 7, 8, 7];
const copiedArray = [].concat(arr);

copiedArray[0] = 999;

console.log(copiedArray); // changed
console.log(arr);         // original unchanged 



console.log([3, 4].concat([7, 8]));
console.log([3, 4].concat([7, 8, [5, 6, 7]]));
