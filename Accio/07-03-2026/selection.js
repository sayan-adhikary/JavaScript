function selectionsort(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = minFind(arr, start);
        let temp2 = arr[start];
        arr[start] = arr[temp];
        arr[temp] = temp2;
        start++;
    }
    return arr;
}

function minFind(arr, start) {
    let minIdx = start;
    for (let i = start; i < arr.length; i++) {
        if (arr[i] < minIdx) {
            minIdx = i;
        }
    }
    return minIdx;
}

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let idx = i;
        let minIdx = i;
        for (let j = i; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        // swap idx - minIdx
        let temp = arr[idx];
        arr[idx] = arr[minIdx];
        arr[minIdx] = temp;
    }
}

let arr = [60, 42, 31, 7, 12, 15]
console.log(selectionSort(arr));
