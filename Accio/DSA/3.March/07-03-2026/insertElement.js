let arr = [3, 2, 4, 5, 6, 8, 9, 7]
function insertElement(arr, m, n) {
    for (let i = arr.length - 1; i >= n; i--) {
        arr[i + 1] = arr[i];
    }
    arr[n] = m;
    return arr;
}

// console.log(insertElement(arr, 123, 4));

