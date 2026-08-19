function cale(a, b, op) {
    return op(a, b);
}

function op(a, b) {
    return a + b;
}

let ans = cale(2, 3, op);
console.log(ans);
