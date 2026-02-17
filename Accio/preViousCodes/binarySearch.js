const arr = [2,3,22,34,55,57,123,230]   //sorted order always
let target = 230
function binarySearch(arr,target){
    let left = 0
    let right = arr.length - 1
    while(left <= right){
        let mid = Math.floor((left + right)/2)
        if(arr[mid] === target){
            return mid
        } else if(arr[mid] > target){
            right = mid - 1
        } else{
            left = mid + 1
        }
    }
}
console.log(binarySearch(arr, target))