function boobleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++)
        for (let j = 0; j < n - 1; j++) {
            let curr = arr[j];
            let next = arr[j + 1];
            if (curr > next) {
                let temp = curr;
                arr[j] = next;
                arr[j + 1] = temp;
            }   
        }
    return arr;
}

let arr = [60, 42, 31, 7, 12, 15]
console.log(boobleSort(arr));
