function subarraySumLongestLength(nums, target) {
    let preFixArr = [];
    let sum = 0;
    let count = 0;
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        preFixArr[i] += nums[i + 1];
        target = k - preFixArr[i];
        if (target === preFixArr[i]) {
            count++;
        }
        else if (map.has(target)) {
            count += map.get(target);
        } else {
            let frequency = map.get(target)
            map.set(target, frequency + 1);
        }
    }
    return count;
}

function longestSubArraySumWithK

let arr = [7, 2, 5, 3, -8, 4]
console.log(subarraySumLongestLength(arr, 4));
