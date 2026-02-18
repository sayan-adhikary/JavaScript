function print(nums) {
    let count = 0;
    for (let ele of nums) {
        if (ele === " ") {
            count++;
        }
    }
    return (count + 1);
}

console.log(print("this is a sample string"));
