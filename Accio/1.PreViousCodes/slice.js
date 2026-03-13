function slice_array(arr, start_ind, end_index) {
    const res = [];
    let n = arr.length;

    for (let i = start_ind; i < end_index && i < arr.length; i++) {
        res.push(arr[(i + n) % n]);
    }

    return res;
}

// Usage
console.log(slice_array([4,5,6,7,8], 1, 4));
