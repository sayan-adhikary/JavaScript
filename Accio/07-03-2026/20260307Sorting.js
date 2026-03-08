console.log("Starting Sorting");

// Implement Selection Sort

function selectionSort(arr){
    let n = arr.length;
    for(let i=0; i<n-1; i++){
        let idx = i;
        let minIdx = i;
        for(let j=i; j<n; j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j;
            }
        }

        // swap idx - minIdx
        let temp = arr[idx];
        arr[idx] = arr[minIdx];
        arr[minIdx] = temp;
    }
}

function bubbleSort(arr){
    let n = arr.length;

    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-1; j++){
            let curr = arr[j];
            let next = arr[j+1];
            if(curr > next){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

}

// Given an array, you have to insert 
// an element at given index

let arr = [4,7,2,0,9];
// key -> idx
let key = 13, idx = 2;

// for(let i=arr.length-1; i>=idx; i--){
//     arr[i+1] = arr[i];
// }
// arr[idx] = key;

function insertionSort(arr){
    let n = arr.length;
    for(let i=1; i<n; i++){
        let key = arr[i];
        let idx = i-1;
        
        // Using For loop
        // =i-1;
        // for(idx=i-1; idx>=0; idx--){
        //     if(arr[idx] > key){
        //         arr[idx+1] = arr[idx];
        //     }
        //     else{
        //         break;
        //     }
        // }
        // arr[idx+1] = key;

        // using while loop
        while(idx>=0 && arr[idx]>key){
            arr[idx+1] = arr[idx];
            idx--;
        }
        arr[idx+1] = key;
    }
}

// selectionSort(arr);
// bubbleSort(arr);
insertionSort(arr);
console.log(arr);