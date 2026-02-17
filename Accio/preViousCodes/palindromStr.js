function isPailondrom(str){
    let reverse = "";
    for(let i = str.length - 1; i >= 0; i--){
        reverse += str[i];
    }
    if(str === reverse){
        return true;
    } else{
        return false;
    }
}

function twoSum(arr,target){
    for(let i = 0; i < arr.length; i++){
        let targetArr = arr.slice(i + 1)
        for(let j = 0; j < targetArr.length; i++){
            if(targetArr[j] + arr[i] === target) return [arr[i], targetArr[j]];
        }
    }
}
console.log(twoSum([5,4,2,1],6))


// console.log(isPailondrom("madam"));
// console.log(isPailondrom("sayan"));
