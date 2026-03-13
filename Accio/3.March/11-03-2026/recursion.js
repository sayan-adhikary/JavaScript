function f(n) {
    //base case
    if (n === 1) {
        return 3;
    }
    //resursive case
    let ans = f(n - 1) + 7;
    return ans;
}

// console.log(f(3));


function f2(b, n) {
    if (n === 0) {
        return 1;
    }
    let ans = b * f2(b, n - 1);
    return ans;
}

// console.log(f2(5, 2));

function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let ans = fib(n - 1) + fib(n - 2);
    return ans;
}

// console.log(fib(0));
