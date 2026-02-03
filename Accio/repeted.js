arr1 = [2,3,4,5,6,4]

function repeted(arr){
    frq = {}
    for (const ele of arr) {
        frq[ele] = (frq[ele] || 0) + 1
    }
}