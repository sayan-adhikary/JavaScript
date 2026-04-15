const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let matrix = [];

rl.on('line', (input) => {
    if (!n) {
        n = Number(input);
    } else {
        matrix.push(input.split(' ').map(Number));
        if (matrix.length === n) {
            let ans = matrixTransposeOne(matrix, n);
            for (let i = 0; i < n; i++) {
                console.log(ans[i].join(' '));
            }
            rl.close();
        }
    }
});

function matrixTransposeOne(mat, n) {
    //Write your code here
    let transpose = [];
    for (let i = 0; i < n; i++) {
        transpose[i] = [];
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            transpose[i][j] = mat[j][i];
        }
    }
    return transpose;
}
function matrixTransposeTwo(mat, n) {
    //Write your code here
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Swap elements
            let temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }

    return mat;
}