const arr = [1,2,3,4,5,6]   //sorted order always
let target = 4
function binarySearch(arr,target){
    let left = 0
    let right = arr.length - 1
    while(left <= right){               //[4,5,6,1,2,3][1,2,3,4,5,6]
        let mid = Math.floor((left + right)/2)
        if(arr[mid] == target){
            return mid;
        } else if(arr[mid] >= arr[left]){         //finding the (1st arr) and (2nd arr)
            if(arr[left] <= target && target < arr[mid]){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else{
            if(arr[mid] < target && target <= arr[right]){
                left = mid + 1;
            } else{
                right = mid - 1;
            }
        }
    }
}
console.log(binarySearch(arr,target))