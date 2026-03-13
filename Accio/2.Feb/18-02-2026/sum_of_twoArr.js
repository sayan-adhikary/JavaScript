const arr = [[1, 2, 3], [3, 4, 2, 5], [1, 2, 3, 4, 5]];

function sum(arr) {         //tc
    let sum_stored = []
    for (let i = 0; i < arr.length; i++) {
        let sum_arr = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum_arr += arr[i][j];
        }
        sum_stored.push(sum_arr);
    }
    return sum_stored;
}

console.log(sum(arr));