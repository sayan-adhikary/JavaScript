function array_index_of(arr, search_ele, search_from = 0) {
    for (let i = search_from; i < arr.length; i++) {
        if (arr[i] === search_ele) {
            return i;
        }
    }
    return -1;
}

// Usage
console.log(array_index_of([4,5,6,7,8,7], 7));
