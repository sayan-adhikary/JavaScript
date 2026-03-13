function threeSum(nums) {
    let arr = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let target = 0 - nums[i];

        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {

            if (nums[i] != nums[start] && nums[start] != nums[end] && nums[i] != nums[end]) {       //no duplicates
                let sum = nums[start] + nums[end];
                if (sum === target) {
                    let temp = [nums[i], nums[start], nums[end]];
                    arr.push(temp);
                    start++;
                    end--;
                } else if (target < sum) {
                    start++;
                } else {
                    end--;
                }
            } else{
                return [0, 0, 0];
            }
        }
    }
    return arr;
}

let nums = [-1, 0, 1, 2, -1, -4, -3, 4];
console.log(threeSum(nums));
