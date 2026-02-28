function matrixProb(m, n, mat) {
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

let arr = [[1, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]]
console.log(matrixProb(5,4,arr));