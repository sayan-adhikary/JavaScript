const arr = [1, 2, 3, 4, 5];//5
let k = 2;

function rotation(arr, k) {
    const nums = [];
    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[(arr.length - k + i) % arr.length];
    }
    return nums;
}

console.log(rotation(arr, k));
