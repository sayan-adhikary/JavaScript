const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let inputLines = [];

rl.on("line", (line) => {
    if (line.trim()) {
        inputLines.push(line.trim());
    }
});

rl.on("close", () => {
    const solution = new Solution();
    solution.solve(inputLines);
});

class Solution {
    solve(lines) {
        let currentLine = 0;

        // 1. Get Number of Test Cases
        const testCases = parseInt(lines[currentLine++]);

        for (let t = 0; t < testCases; t++) {
            // 2. Get Matrix Dimensions (Rows R and Columns C)
            const [R, C] = lines[currentLine++].split(" ").map(Number);

            // 3. Extract the Matrix
            const matrix = [];
            for (let i = 0; i < R; i++) {
                const row = lines[currentLine++].split(" ").map(Number);
                matrix.push(row);
            }
            // Logic goes here
            let fr = 0, fc = 0, lr = R - 1, lc = C - 1, s = "";
            while (fr <= lr && fc <= lc) {
                for (let i = fr; i <= lr; i++) {
                    s += matrix[i][fc] + " ";
                }
                fc++;
                for (let j = fc; j <= lc; j++) {
                    s += matrix[lr][j] + " ";
                }
                lr--;
                if (fc <= lc) {
                    for (let i = lr; i >= fr; i--) {
                        s += matrix[i][lc] + " ";
                    }
                }
                lc--;
                if (fr <= lr) {
                    for (let j = lc; j >= fc; j--) {
                        s += matrix[fr][j] + " ";
                    }
                }
                fr++;
            }
            console.log(s);
        }
    }
}