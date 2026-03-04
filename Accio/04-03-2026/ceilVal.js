//print the ceil value of a number
//[3,6,7,9,15]
//(val <= target) return val
//floor(15) = 15
//floor(18) = -1
//floor(14) = 15
//floor(3) = 3
//floor(2) = 3

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