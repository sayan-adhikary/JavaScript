function hourglassSum(arr) {
    let rows = arr.length;
    let cols = arr[0].length;
    let maxSum = -Infinity;

    for (let i = 0; i <= rows - 3; i++) {
        for (let j = 0; j <= cols - 3; j++) {

            let sum =
                arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}
/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;

    //Exit Condition
    if (lineNumber == 0) {
        logic("s");
        readline.close();
    }
}

function logic(input) {
    let str = JSON.parse(inputArr[0].trim());
    console.log(hourglassSum(str));
}
