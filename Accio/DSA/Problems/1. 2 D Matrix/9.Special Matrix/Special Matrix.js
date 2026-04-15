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
    while (t-- > 0) {
        let n = Number(input.shift());
        let matrix = [];
        for (let i = 0; i < n; i++) {
            matrix.push(input.shift().split(' ').map(Number));
        }
        console.log(special(matrix, n));
    }
});

function special(matrix, n) {
    //Write code here
    for (let i = 0; i < n; i++) { //diagonal i==j
        for (let j = 0; j < n; j++) {
            if (i === j || i + j === n - 1) {
                if (matrix[i][j] === 0) {
                    return false;
                }
            } else {
                if (matrix[i][j] !== 0) {
                    return false;
                }
            }
        }
    }
    return true;
}