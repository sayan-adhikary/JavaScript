const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    let t = Number(input.shift());
    while (t--) {
        let [n, m] = input.shift().split(' ').map(Number);
        let matrix = [];
        for (let i = 0; i < n; i++) {
            matrix.push(input.shift().split(' ').map(Number));
        }
        printMatrixColumnwise(matrix, n, m);
        // console.log();
    }
});

function printMatrixColumnwise(mat, n, m) {
    // Write code here and print output
    let a = "";
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            a += mat[j][i] + " "
        }
    }
    console.log(a);
}