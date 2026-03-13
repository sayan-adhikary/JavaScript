function largestString(strings) {
    return strings.sort((a, b) => (b,a));
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
let strs = [];
readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    if (lineNumber == 0) {
        size = parseInt(inputArr[0]);
    }

    if (lineNumber > 0) strs.push(line);

    if (lineNumber == size) {
        logic("s");
        readline.close();
    }
}

function logic(input) {
    console.log(largestString(strs));

}