function QuickSort(arr, start, end) {
    if (start >= end) {
        return;
    }

    let idx = Partition(arr, start, end); //-> using 1st element as pivot
    // let idx = Partition2(arr, start, end); // using last element as pivot

    QuickSort(arr, start, idx - 1); // left part
    QuickSort(arr, idx + 1, end);   // right part
}

function Partition(arr, start, end) {
    // Uses 1st element as Pivot element
    let x = arr[start];
    let cnt = 0;
    for (let i = start; i <= end; i++) {
        if (arr[i] < x) {
            cnt++;
        }
    }
    let pos = start + cnt;
    // swap - pivot elemnt(arr[start]) - pos element(arr[pos])
    let temp = arr[start];
    arr[start] = arr[pos];
    arr[pos] = temp;

    let low = start;
    let high = end;

    while (low < pos && high > pos) {
        if (arr[low] >= x && arr[high] < x) {
            let t = arr[low];
            arr[low] = arr[high];
            arr[high] = t;

            low++;
            high--;
        }
        else if (arr[low] >= x && arr[high] >= x) {
            high--;
        }
        else if (arr[low] < x && arr[high] < x) {
            low++;
        }
        else if (arr[low] < x && arr[high] >= x) {
            low++;
            high--;
        }
    }

    return pos;
}

function Partition2(arr, start, end) {
    let x = arr[end];
    let cnt = 0;
    for (let i = start; i <= end; i++) {
        if (arr[i] < x) {
            cnt++;
        }
    }

    let pos = start + cnt;

    // let temp = arr[end];
    // arr[end] = arr[pos];
    // arr[pos] = temp;

    // swapping
    [arr[end], arr[pos]] = [arr[pos], arr[end]];

    let low = start;
    let high = end;
    while (low < pos && high > pos) {
        if (arr[low] >= x && arr[high] < x) {
            let t = arr[low];
            arr[low] = arr[high];
            arr[high] = t;
            low++;
            high--;
        }
        else if (arr[low] >= x && arr[high] >= x) {
            high--;
        }
        else if (arr[low] < x && arr[high] < x) {
            low++;
        }
        else if (arr[low] < x && arr[high] >= x) {
            low++;
            high--;
        }
    }

    return pos;
}

let arr = [5, 2, 5, 10, 4, 9];
console.log(arr);
QuickSort(arr, 0, arr.length - 1);
console.log(arr);