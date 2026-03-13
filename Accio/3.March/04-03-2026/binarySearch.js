function binarySearch(arr, target) { //ascending order
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1; // Target not found
}

function binarySearchDescending(arr, target) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

function binaryySearchFirstOccurrence(arr, target) {
    let start = 0, end = arr.length - 1;
    let result = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            result = mid;
            end = mid - 1; // Continue searching for the first occurrence
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return result;
}

function binarySearchLastOccurrence(arr, target) {
    let start = 0, end = arr.length - 1;
    let result = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            result = mid;
            start = mid + 1; // Continue searching for the last occurrence
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return result;
}

function targetCountUsingBinarySearch(arr, target) {
    let firstOccurrence = binaryySearchFirstOccurrence(arr, target);
    let lastOccurrence = binarySearchLastOccurrence(arr, target);

    if (firstOccurrence === -1) {
        return 0;
    }

    return lastOccurrence - firstOccurrence + 1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 9;
// console.log(binarySearch(arr, target)); // Output: 8 (index of target in the array)

let arrDesc = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let targetDesc = 1;
// console.log(binarySearchDescending(arrDesc, targetDesc)); // Output: 8 (index of target in the array)

let arrWithDuplicates = [1, 2, 2, 3, 4, 5];
let targetDuplicate = 2;
// console.log(binaryySearchFirstOccurrence(arrWithDuplicates, targetDuplicate));
console.log(targetCountUsingBinarySearch(arrWithDuplicates, targetDuplicate));

