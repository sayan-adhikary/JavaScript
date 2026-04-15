function sumOfNnaturalNumbers(n) {
    if (n === 1) {
        return 1;
    }

    let ans = n + sumOfNnaturalNumbers(n - 1);
    return ans;
}

console.log(sumOfNnaturalNumbers(7));

