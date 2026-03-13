const arr = [1,4,3,5,9];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <arr.length; j++) {
        console.log(arr[j], j);
    }
    console.log("break", i);
    
}