function slidingWindoe(arr, size) {
    let arr1 = [];
    let start = 0;
    let end = size;
    let sum = 0;

    for (let i = 0; i < size; i++) {
        sum += arr[i];
    }
    arr1.push(sum);

    while (end < arr.length) {
        sum = sum - arr[start] + arr[end];
        start++;
        end++;
        arr1.push(sum);
    }
    return arr1;
}

let arr = [5, 2, 9, 0, 7]
let target = 2;
console.log(slidingWindoe(arr, target));
