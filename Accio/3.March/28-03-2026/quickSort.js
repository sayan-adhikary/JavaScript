function quickSort(arr, start, end) {
    if (start === end - 1) {
        return;
    }

    let position = partition(arr, start, end);
    quickSort(arr, start, position - 1);
    quickSort(arr, position + 1, end);
}

function partition(arr, s, e) {
    let count = 0;
    let elem = arr[s];
    for (let i = 0; i <= e; i++) {
        if (elem < arr[i]) {
            count++;
        }
    }

    let pos = s + count;
    let temp = arr[count];
    arr[count] = elem;
    arr[0] = temp;

    let low = s, high = e;
    while (low < pos && high > pos) {
        if (arr[s] >= elem && arr[e] <= elem) {
            let t = arr[s];
            arr[s] = arr[e];
            arr[e] = t;

            s++;
            e--;
        } else if (arr[s] > elem && arr[e] > elem) {
            e--;
        } else if (arr[s] < elem && arr[e] < elem) {
            s++;
        } else if (arr[s] < elem && arr[e] > elem) {
            s++;
            e--;
        }
    }
    return pos;
}

let arr = [3, 2, 4, 1];
console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);
