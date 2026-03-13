function checkReflection(points) {
    let xmin = Infinity;
    let xmax = -Infinity;

    // Step 1: Find xmin and xmax
    for (let [x, y] of points) {
        xmin = Math.min(xmin, x);
        xmax = Math.max(xmax, x);
    }

    // Step 2: Store all points in a set
    let set = new Set();
    for (let [x, y] of points) {
        set.add(x + "#" + y);
    }

    // Step 3: Check mirror points
    for (let [x, y] of points) {
        let mirrorX = xmin + xmax - x;
        if (!set.has(mirrorX + "#" + y)) {
            return "NO";
        }
    }

    return "YES";
}


/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    if (lineNumber == 0) {
        size = parseInt(inputArr[0].trim());
    }
    //Exit Condition
    if (lineNumber == size) {
        logic("s");
        readline.close();
    }
}

function logic(input) {
    let testcase = parseInt(inputArr[0]);
    inputArr.shift();
    let Arr = [];
    for (let i = 0; i < testcase; i++) {
        Arr.push(inputArr[i].split(" ").map((x) => parseInt(x)));
    }
    console.log(checkReflection(Arr));
}
