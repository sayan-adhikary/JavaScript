function includes_value(arr, target) {
    for (let value of arr) {
        if (Number.isNaN(target) && Number.isNaN(value)) {
            return true;
        }
        if (value === target) {
            return true;
        }
    }
    return false;
}

// Usage
console.log(includes_value([4,5,NaN,6], 6));
