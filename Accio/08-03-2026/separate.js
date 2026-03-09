let arr = [7, 5, 3, 2, 10, 0, 4, 5];
let arr1 = [5, 10, 7, 1, 8, 5];
function intersection(arr, arr1) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!map.has(arr1[i])) {
            map.set(arr1[i], 1);
        } else {
            map.set(arr1[i], map.get(arr1[i]) + 1);
        }
    }

    console.log(map);

    let newArr = [];
    for (let [key, val] of map) {
        if (val >= 2) {
            newArr.push(key);
        } else if (val > 2) {
            newArr.push(key);
        }
    }

    console.log(newArr);
}
function union(arr, arr1) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!map.has(arr1[i])) {
            map.set(arr1[i], 1);
        } else {
            map.set(arr1[i], map.get(arr1[i]) + 1);
        }
    }

    let newArr = [];
    for (let [key, val] of map) {
        newArr.push(key);
    }

    console.log(newArr);
}
// intersection(arr, arr1)
function intersection1st(arr1, arr2) {
    let st1 = new Set(arr1);
    let st2 = new Set(arr2);

    let ans = [];
    for (let x of st1) {
        if (st2.has(x)) {
            ans.push(x);
        }
    }

    return ans;
}30
let arr2 = [5, 7, 2, -3, 5];
function prefixSum(arr) {
    let newArray = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        newArray.push(sum);
    }
    return newArray;
}

console.log(prefixSum(arr2));