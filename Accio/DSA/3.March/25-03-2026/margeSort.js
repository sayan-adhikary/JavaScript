function margeSort(arr, i, j) {
    if (i > j) {
        return [];
    }
    if (i >= j) {
        return [arr[i]];
    }
    let mid = Math.floor((i + j) / 2);
    return marge(margeSort(arr, i, mid), margeSort(arr, mid + 1, j));

}

function marge(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;
    let ans = [];
    let i = 0, j = 0;
    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        }
        else {
            ans.push(arr2[j]);
            j++;
        }
    }

    while (i < n) {
        ans.push(arr1[i]);
        i++;
    }

    while (j < m) {
        ans.push(arr2[j]);
        j++;
    }
    return ans;
}

console.log(margeSort([2, 3, 1, 4, 5], 0, 4));
