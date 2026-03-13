let arr = [1, 7, 20, 21, 30, 40, 62, 70];

function BinarySearch(arr, target) {
    // ascending array
    let n = arr.length; // internally this O(1)
    let l = 0, h = n - 1;

    // Entry inside the while loop is dependent on the size of the array
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);  // Mathematical functions are O(1)
        let key = arr[mid];
        // comparing with target
        if (key === target) {
            return mid;
        }
        else if (key < target) {
            l = mid + 1;
        }
        else {
            h = mid - 1;
        }
    }
    return -1;
}

let idx = BinarySearch(arr, 0);
// console.log(idx);


// Problem
// Implement Binary Search for descending array all elements are unique and positive

function BinarySearchDesc(arr, target) {
    // ascending array
    let n = arr.length; // internally this O(1)
    let l = 0, h = n - 1;

    // Entry inside the while loop is dependent on the size of the array
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);  // Mathematical functions are O(1)
        let key = arr[mid];
        // comparing with target
        if (key === target) {
            return mid;
        }
        else if (key > target) {
            l = mid + 1;
        }
        else {
            h = mid - 1;
        }
    }
    return -1;
}


// Duplicate elements in sorted array
arr = [1, 1, 1, 4, 4, 6, 8, 9, 9, 9, 15, 15];
// Problem 
// First occurence/index for a target, if target is not present return -1

function firstOccurence(arr, target) {
    let n = arr.length;
    let l = 0, h = n - 1;
    let ans = -1;

    while (l <= h) {
        let mid = Math.floor((l + h) / 2);

        if (arr[mid] === target) {
            ans = mid;
            h = mid - 1;
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else {
            h = mid - 1;
        }
    }
    return ans;
}

idx = firstOccurence(arr, 17);
console.log(idx);

// Problem
// Last occurence/index for a target, if target is not present return -1

function lastOccurence(arr, n) {
    let n = arr.length;
    let l = 0, h = n - 1;
    let ans = -1;

    while (l <= h) {
        let mid = Math.floor((l + h) / 2);

        if (arr[mid] === target) {
            ans = mid;
            l = mid + 1;
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else {
            h = mid - 1;
        }
    }
    return ans;
}

// Problem
// In sorted array find no. of frequency/occurences of a target

let idx1 = firstOccurence(arr, 9);
let idx2 = lastOccurence(arr, 9);

let ans = (idx === -1) ? 0 : (idx2 - idx1 + 1);
console.log(ans);

// Problem
// Print the floor of target
// [3,6,7,9,15]
// (val <= target) return val
// floor(15) - 15
// floor(18) - 15
// floor(14) - 9
// floor(2)  - -1
// floor(3)  - 3

function floor(arr, target) {
    let n = arr.length;
    let l = 0, h = n - 1;
    let ans = -1;
    if (target < arr[0]) {
        return -1;
    }

    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        let key = arr[mid];
        if (key === target) {
            ans = key;
            return ans;
        }
        else if (key < target) {
            ans = key;
            l = mid + 1;
        }
        else {
            h = mid - 1;
        }
    }

    return ans;
}


// Problem - ceil

