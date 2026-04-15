const arr = [8, 7, 9, 11, 15, 20];
const arr1 = [1,1,1,1];
const arr2 = [1,5,3];
const arr3 = [-1,-3,-5];
const arr4 = [-1,-9,-5];
function third(arr) {
    let largestOdd = - Infinity, secondOdd = - Infinity, thirdOdd = -Infinity;
    for (let ele of arr) {      //[1,2,3]
        if (ele % 2 != 0) {     //1,
            if (ele > largestOdd) {
                thirdOdd = secondOdd;
                secondOdd = largestOdd;
                largestOdd = ele;
            } else if (ele < largestOdd && ele > secondOdd) {
                thirdOdd = secondOdd;
                secondOdd = ele;
            } else if (ele < secondOdd && ele > thirdOdd) {
                thirdOdd = ele;
            }
        }
    }
    return thirdOdd < secondOdd && thirdOdd != - Infinity ? thirdOdd : -1;
}

console.log(third(arr4));
