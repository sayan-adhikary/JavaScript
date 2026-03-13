const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Solution {
    solve(matrix, x) {

        let arr = [];
        for (let i = 0; i < matrix.length; i++) {       // Flatten the matrix into a single array
            for (let j = 0; j < matrix[i].length; j++) {
                arr.push(matrix[i][j]);
            }
        }

        arr.sort((a, b) => a - b);       // Sort the array to find the median

        let target = 0;
        let mid = Math.floor(arr.length / 2);
        if (arr.length % 2 !== 0) {
            target = arr[mid]; // odd length
        } else {
            target = arr[mid]; // even length (either middle works for minimizing absolute differences)
        }

        let count = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                const diff = Math.abs(matrix[i][j] - target);
                if (diff % x !== 0) {
                    return -1;
                }
                count += diff / x; // Increment count by the number of operations needed
            }
        }
        return count;
    }
}

const input = [];

rl.on("line", (line) => {
    input.push(line.trim());
});

rl.on("close", () => {
    let index = 0;

    // First line: m n
    const [m, n] = input[index++].split(" ").map(Number);

    // Next m lines: matrix
    const matrix = [];
    for (let i = 0; i < m; i++) {
        matrix.push(input[index++].split(" ").map(Number));
    }

    // Last line: x
    const x = Number(input[index++]);

    const solution = new Solution();
    console.log(solution.solve(matrix, x));
});