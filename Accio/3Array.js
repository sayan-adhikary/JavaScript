arr1 = [3,4,5,6,7,8]
arr2 = [3,4,12,13,14,15]
arr3 = [1,4,22,2,24,25,27]

function returnFrequency(arr) {
    frequency = {}
    for (const ele of arr) {
        frequency[ele] = (frequency[ele] || 0 ) + 1;
    }
    return frequency;
}

const freq1 = returnFrequency(arr1), freq2 = returnFrequency(arr2), freq3 = returnFrequency(arr3)   //frequency storing

for (const [key,val] in Object.entries(freq1)) {
    if(freq2[key] && freq3[key]){
        let minArr = [val, freq2[key], freq3[key]];
        let min = Math.min(...minArr);
        for(let i = 0; i < min; i++){
            console.log(key);
        }
    }
}

// console.log(returnFrequency(arr1));
// console.log(returnFrequency(arr2));
// console.log(returnFrequency(arr3));
