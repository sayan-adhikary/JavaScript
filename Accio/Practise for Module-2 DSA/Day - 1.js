//28-02-2026(2D array)
//create 2D
function arrCreation() {
    let arr = [];
    let a = [1, 2, 3];
    let b = [4, 5, 6];
    arr.push(a);
    arr.push(b);
    arr.push(b, a);
    console.log(arr);
}

// arrCreation();

//printing elements
function arrPrint() {
    let arr = [[1, 2, 3],
    [4, 5, 6],
    [4, 5, 6],
    [1, 2, 3]];

    // console.log(arr[1][1]); //[row][col] -> format always
    // process.stdout.write(arr[1][1]); -> it will work in web only
    for (let row = 0; row < arr.length; row++) {
        let newArr = [];
        let str = "";
        for (let col = 0; col < arr[row].length; col++) {
            newArr.push(arr[row][col]);
            str += arr[row][col] + " ";
        }
        console.log(newArr.join(' '));
        console.log(str.trim().split(" "));
    }
}
arrPrint();