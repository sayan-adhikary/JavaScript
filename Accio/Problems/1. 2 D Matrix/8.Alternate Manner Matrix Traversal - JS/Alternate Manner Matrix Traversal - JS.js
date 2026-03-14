const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function printElementsAlternately(mat, m, n) {
    //Write code here and print output
    let start = 0; //trsckig m
    let left = 0, right = n;  //tracking n
    let nums = "";
    while (start < m) {
        for (let i = left; i < right; i++) {
            nums += mat[start][i] + " ";
        }
        start++;
        if (start >= m) {
            break;
        }

        for (let i = right - 1; i >= left; i--) {
            nums += mat[start][i] + " ";
        }
        start++;
    }
    console.log(nums);
}

readline.question('', (input) => {
    let [m, n] = input.split(' ').map(Number);
    let mat = [];
    let count = 0;
    readline.on('line', (line) => {
        mat.push(line.split(' ').map(Number));
        count++;
        if (count === m) {
            printElementsAlternately(mat, m, n);
            readline.close();
        }
    });
});