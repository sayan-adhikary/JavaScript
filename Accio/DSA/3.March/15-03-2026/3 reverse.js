function arr(arr){
    printRiv(arr,arr.length - 1);
}
function printRiv(arr,n){
    if(n < 0){
        return;
    }
    console.log(arr[n]);
    printRiv(arr, n - 1);
}

arr([1,2,3,4])