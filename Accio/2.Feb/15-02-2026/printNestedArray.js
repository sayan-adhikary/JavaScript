const arr = [[1, 2, 3], [3, 4], [5, 6]];
const arr2 = [["name", "Sayan"], ["role", "freshers"], ["age", 23]]

function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

function arrToObj(arr) {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i][0]] = arr[i][1];
    }
    console.log(obj);
}

printArr(arr)
// arrToObj(arr2)