//print the ceil value of a number
// [3,6,7,9,15]
// (val >= target) return val
// ceil(15) = 15
// ceil(18) = -1
// ceil(14) = 15
// ceil(3) = 3
// ceil(2) = 3

function ceilVal(arr, target) {
    let start = 0, end = arr.length - 1;
    let result = -1;    
    if (target > arr[arr.length - 1]) {
        return result;
    }   
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return arr[mid];
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            result = arr[mid];
            end = mid - 1;
        }
    }
    return result;
}

let arr = [3,6,7,9,15];
console.log(ceilVal(arr, 15)); // 15
console.log(ceilVal(arr, 18)); // -1