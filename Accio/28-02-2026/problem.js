// 1. print an array with maximum element in each row
// 2. print an array with maximum element in each col

/*
[3, 7, 5],
[2, 8, 4],
[1, 6, 9]
*/

let a = [
    [-3, 7, 9],
    [2, 290, -3,4]
];

//rowMax
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
}
//colmnMax

for (let col = 0; col < a[col].length; col++) {
    let colElement = -Infinity;

    for (let row = 0; row < a.length; row++) {
        if (a[row][col] > colElement) {
            colElement = a[row][col];
        }
    }

    maxCol.push(colElement);
}

console.log(maxRow);
console.log(maxCol);