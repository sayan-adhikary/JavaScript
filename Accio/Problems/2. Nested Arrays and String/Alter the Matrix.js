const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Solution {
    solve(m, n, input, x) {
        // write your code here
        console.log(input);
        let arr = [];
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                arr.push(input[i][j]);
            }
        }
        let target = arr[Math.floor(arr.length / 2)];
        let count = 0;
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input[i].length; j++) {
                count += (Math.abs(arr[i][j] - target)) / x;
            }
        }
        console.log(count);
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
    solution.solve(m, n, matrix, x);
});