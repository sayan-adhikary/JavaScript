function print(n) {
    helper(1, n);
}

function helper(i, n) {
    if (i > n) return;
    console.log(i);
    helper(i + 1, n);
}

print(7);