//print the floor value of a number
//[3,6,7,9,15]
//(val <= target) return val
// floor(15) = 15
// floor(18) = 15
//floor(14) = 9
//floor(3) = 3
//floor(2) = -1

function floorVal(arr, target) {
    let start = 0, end = arr.length - 1;
    let result = -1;
    if (target < arr[0]) {
        return result;
    }

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return arr[mid];
        }

    return result;
}