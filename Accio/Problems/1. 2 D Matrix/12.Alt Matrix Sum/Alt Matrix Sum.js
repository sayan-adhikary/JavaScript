const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', n => {
    let mat = [];
    let count = 0;
    readline.on('line', (line) => {
        mat.push(line.split(' ').map(Number));
        count++;
        if (count == n) {
            alternateMatrixSum(mat, n);
            readline.close();
        }
    });
});

function alternateMatrixSum(mat, n) {
    let diagonalSum = 0, nonDiaSum = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if ((i + j) % 2 === 0) {
                diagonalSum += mat[i][j];
            } else {
                nonDiaSum += mat[i][j];
            }
        }
    }
    console.log(diagonalSum);
    console.log(nonDiaSum);
}