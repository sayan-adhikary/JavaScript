function fact(n) {
    if (n == 1 || n == 0) {
        return 1;
    }
    return n * fact(n - 1);
}

let n = 10;
let ans = fact(n);
console.log(ans);