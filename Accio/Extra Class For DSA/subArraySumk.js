function sub(nums, k) {
    //https://leetcode.com/problems/subarray-sum-equals-k/description/
    let map = new Map();
    let preFixArr = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        preFixArr.push(sum);    //[1,3,6]
    }
    let target = 0;
    let count = 0;
    for (let i = 0; i < preFixArr.length; i++) {
        target = k - preFixArr[i];
        if (map.get(target)) {
            count += map.get(target);
        } else {
            map.set(target, 1);
        }
    }
    return count;
}

let arr = [1, 2, 3];
console.log(sub(arr,3));
