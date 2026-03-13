/*Two function to count the number of subarrays with a given sum k.
Both functions use a similar approach with a hash map to store the 
cumulative sums and their frequencies. The first function, countSubarrays, 
is more concise, while the second function, countSubarraysTwo, 
includes additional steps to handle the cumulative sums and their counts 
more explicitly. Both functions return the count of subarrays that sum 
up to k, or -1 if no such subarray exists.*/

function countSubarraysOne(arr, k) {   //tc: O(n) sc: O(n)
    let map = new Map();
    let sum = 0;
    let count = 0;

    map.set(0, 1); // base case

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        let target = sum - k;
        if (map.has(target)) {
            count += map.get(target);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count === 0 ? -1 : count;
}

function countSubarraysTwo(nums, k) {   //tc: O(n) sc: O(n)
    let n = nums.length;
    let mp = new Map();
    let pre = [];
    let sum = 0;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        pre[i] = sum;
        if (pre[i] === k) {
            cnt++;
        }
        let target = pre[i] - k;
        if (mp.has(target)) {
            cnt += mp.get(target);
        }
        if (mp.has(pre[i])) {
            mp.set(pre[i], mp.get(pre[i]) + 1);
        }
        else {
            mp.set(pre[i], 1);
        }
    }
    return cnt;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    if (lineNumber == 0) {
        size = parseInt(inputArr[0]);
    }

    if (lineNumber == 2 * size) {
        logic("s");
        readline.close();
    }
}

function logic(input) {
    const T = size;
    for (let i = 1; i <= T * 2; i = i = i + 2) {

        let N = parseInt(inputArr[i].split(" ")[0]);
        let X = parseInt(inputArr[i].split(" ")[1]);
        let Arr = inputArr[i + 1].split(" ").map((x) => parseInt(x));

        console.log(countSubarraysOne(Arr, X));
    }
}
