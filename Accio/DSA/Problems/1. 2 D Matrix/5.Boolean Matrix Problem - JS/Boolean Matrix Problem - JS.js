const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', m_n => {
    const [m, n] = m_n.split(' ').map(Number);
    let mat = [];
    let count = 0;
    readline.on('line', line => {
        mat.push(line.split(' ').map(Number));
        count++;
        if (count === m) {
            let ans = BooleanMatrixProblem(m, n, mat);
            for (let i = 0; i < m; ++i) {
                console.log(ans[i].join(' '));
            }
            readline.close();
        }
    });
});

function BooleanMatrixProblem(m, n, mat) {
    // Write your code here
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                zerosToOne(mat[i]);
                break;
            }
        }
    }
    return mat;
}

function zerosToOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 1;
    }
}