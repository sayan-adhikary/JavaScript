function largestString(strings) {
    let mp = new Map();
    for (let ele of strings) {
        mp.set(ele, (mp.get(ele) || 0) + 1);
    }

    let maxFq = 0;
    let maxFqEle = "";
    for (let [key, value] of mp) {
        if (value > maxFq) {
            maxFq = value;
            maxFqEle = key;
        } else if (value === maxFq && key > maxFqEle) {
            maxFqEle = key;
        }
    }
    return maxFqEle;
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