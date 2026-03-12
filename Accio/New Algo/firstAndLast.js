function firstAndLast(arr, k) {
    let arr1 = [];
    let start = 0;
    let end = 1;
    while (start <= end && end < arr.length && start < arr.length) {
        let sum = arr[start] + arr[end];
        if (sum === k) {
            let temp = [start, end];
            arr1.push(temp);
            start++;
            end++
        } else {
            end++;
        }
    }
    return arr1;
}

let nums = [1,2,3];
console.log(firstAndLast(nums, 3));
