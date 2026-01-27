const arr3 = [4, 5, 6, 7, 8];

const safeReverse = [].concat(arr3).reverse();

console.log(safeReverse); // reversed copy
console.log(arr3);        // original intact
