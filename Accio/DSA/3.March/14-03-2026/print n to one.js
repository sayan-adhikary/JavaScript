function oneToN(n) {
    if (n === 0) {
        return;
    }
    console.log(n);
    oneToN(n - 1);
}

// oneToN(7);

function oneToN2(n) {
    if (n === 1) {
        return 1;
    }
    console.log(n);
    return oneToN2(n - 1);

}

// console.log(oneToN2(7));

function printXY(x, y) {
    //Write your code here
    if (x === y + 1) return;
    console.log(x);
    printXY(x + 1,y);
}

printXY(5,8)
