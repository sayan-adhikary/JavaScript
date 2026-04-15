function fibo(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 0) {
        return 0;
    }
    
    if (dp[n] !== -1) {
        return dp[n];
    }

    let a = fibo(n - 1);
    let b = fibo(n - 2);
    dp[n] = a + b;
    return a + b;
}

let n = 3;
let dp = new Array(n + 1).fill(-1);

console.log(fibo(n));