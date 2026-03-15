function arr(arr) {
    // return helper(arr, 0);
    return helperSecond(arr,1)
}

function helper(arr, n) {
    if (n > arr.length - 1) {
        return 0;
    } else if (n % 2 != 0) {
        let ans = arr[n] + helper(arr, n + 1);
        return ans;
    } else {
        return helper(arr, n + 1);
    }
}

function helperSecond(arr, n) {
    if (n >= arr.length) {
        return 0;
    }
    return arr[n] + helperSecond(arr, n + 2);
}

console.log(arr([1, 2, 3, 4, 5]));
