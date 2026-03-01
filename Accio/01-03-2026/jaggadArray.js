let arr = [[1,2,3,4,5],[2,3,4],[1],[3,2]];

//jagged arr
function printArr(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
           console.log((arr[i][j]));
        }
    }
}

// printArr(arr);

//problem
//you are given a matrix where data of few student is mention
//you have to return an array with the avarage value of each row
let arr1 = [[1,2,3,4,5],[2,3,4],[1],[3,2]];

function avg(arr){
    let avg = [];
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = 0; j < arr[i].length; j++){
            sum += arr[i][j];
        }
        avg.push(sum/arr[i].length);
    }
    return avg;
}

console.log(avg(arr1));

