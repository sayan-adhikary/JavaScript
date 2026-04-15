function arrSum(arr) {
    return arrTravers(arr, 0);
}

function arrTravers(arr, n) {
    if (n > arr.length - 1) {
        return 0;
    }
    let ans = arr[n] + arrTravers(arr,n + 1);
    return ans;
}

console.log(arrSum([1, 2, 3, 4, 5]));