function arrayRecursion(arr) {
    printArr0toN(arr,0)
    console.log("Moderator");
    printArrNto0(arr, 0);
}

function printArr0toN(arr, n) {     //front to end
    if (n  === arr.length) {
        return;
    }
    console.log(arr[n] + " ");
    printArr0toN(arr, n + 1);
}

function printArrNto0(arr, n) {     //reverse
    if (n  === arr.length) {
        return;
    }
    printArrNto0(arr, n + 1);
    console.log(arr[n] + " ");
}
arrayRecursion([1, 2, 3, 4]);