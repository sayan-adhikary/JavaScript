function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }

    let position = partitionFront(arr, start, end);
    quickSort(arr, start, position - 1);
    quickSort(arr, position + 1, end);
}

function partitionFront(arr, s, e) {
    let count = 0;
    let elem = arr[s];
    for (let i = s; i <= e; i++) {
        if (elem > arr[i]) {
            count++;
        }
    }

    let pos = s + count;

    let temp = arr[count];
    arr[count] = elem;
    arr[s] = temp;

    let low = s, high = e;
    while (low < pos && high > pos) {
        if (arr[low] >= elem && arr[high] <= elem) {
            let t = arr[low];
            arr[low] = arr[high];
            arr[high] = t;

            low++;
            high--;
        } else if (arr[low] > elem && arr[high] > elem) {
            high--;
        } else if (arr[low] < elem && arr[high] < elem) {
            low++;
        } else if (arr[low] < elem && arr[high] > elem) {
            low++;
            high--;
        }
    }
    return pos;
}

function partitionBack(arr, s, e) {
    let count = 0;
    let elem = arr[e];
    for (let i = s; i <= e; i++) {
        if (elem > arr[i]) {
            count++;
        }
    }

    let pos = s + count;

    let temp = arr[count];
    arr[count] = elem;
    arr[e] = temp;

    let low = s, high = e;
    while (low < pos && high > pos) {
        if (arr[low] >= elem && arr[high] <= elem) {
            let t = arr[low];
            arr[low] = arr[high];
            arr[high] = t;

            low++;
            high--;
        } else if (arr[low] > elem && arr[high] > elem) {
            high--;
        } else if (arr[low] < elem && arr[high] < elem) {
            low++;
        } else if (arr[low] < elem && arr[high] > elem) {
            low++;
            high--;
        }
    }
    return pos;
}

let arr = [3, 2, 4, 1];
console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);
