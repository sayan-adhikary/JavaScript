//4-4-2026
//Bubble Sort
function boobleSort(arr) {
    let n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
        let didSort = 0;
        for (let j = 0; j <= i - 1; j++) {
            let curr = arr[j];
            let next = arr[j + 1];
            if (curr > next) {
                let temp = curr;
                arr[j] = next;
                arr[j + 1] = temp;
                didSort = 1;
            }
        }
        if (didSort === 0) {
            break;
        }
    }
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
let arr2 = [1,2,3,4,5];
console.log(boobleSort(arr2));

//insertion sort
