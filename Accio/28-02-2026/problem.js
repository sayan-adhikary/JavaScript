// 1. print an array with maximum element in each row
// 2. print an array with maximum element in each col

/*
[3, 7, 5],
[2, 8, 4],
[1, 6, 9]
*/

let a = [
    [3, 7, 5],
    [2, 8, 4],
    [1, 6, 9],
];

let maxRow = [];
let maxCol = [];
for (let i = 0; i < a.length; i++) {
    let element = -Infinity;
    for (let j = 0; j < a[i].length; j++) {
        if (element < a[i][j]) {
            element = a[i][j];
        }
    }
    maxRow.push(element);
    let colElement = -Infinity;
    for (let j = 0; j < a[i].length; j++) {
        if (colElement < a[j][i]) {
            colElement = a[j][i];
        }
    }
    maxCol.push(colElement);
}
console.log(maxRow);
console.log(maxCol);