function twopoiterSorted(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let sum = arr[start] + arr[end];
        if (target === sum) {
            return [start, end];
        } else if (target < sum) {
            end--;
        } else {
            start++;
        }
    }
    return [0, 0];
}

let arr = [2, 7, 11, 15];
console.log(twopoiterSorted(arr,18));
