function insertionSort(arr){
    let n = arr.length;
    for(let i=1; i<n; i++){
        let key = arr[i];
        let idx = i-1;
        while(idx>=0 && arr[idx]>key){
            arr[idx+1] = arr[idx];
            idx--;
        }
        arr[idx+1] = key;
    }
}

let arr = [60, 42, 31, 7, 12, 15]
console.log(insertionSort(arr));