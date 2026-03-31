//String Preparation

//String creation
// let str = newString("Sayan");   -> not recomended
let str = "Sayan";
// console.log(str);

//Accescing element
/* console.log(str[1]);
console.log(str.charAt(1));
console.log(str.charCodeAt(1)); */

//Methods
//1.upperCase() & lowerCase()
/* console.log("Sayan".toUpperCase());
console.log("Sayan".toLowerCase());  */

//2.trim()
/* console.log("  sayan Adhikary  ".trim());*/

//3.slice(start, end) & substring(start, end)
let programLang = "JavaScript";
/* console.log(programLang.slice(0, 4));
console.log(programLang.slice(4));
console.log(programLang.slice(-6)); //(4 - 10) -> (idx - length)
console.log(programLang.substring(0,4));    //not support (-ve)
console.log(programLang.slice(0, - 6)); */

//4.replace() & split() & includes() & indexOf() & 
let essay = "Netaji Subhas Chandra Bose is true freedom fighter";
/* console.log(essay.replace("is", "was"));
console.log(essay.split(" "));
console.log(essay.includes("Subhas"));
 */

//problem practise
//1. sum of 2D matrix
function sum() {
    function sum(arr) {
        let sum = 0;
        for (let row = 0; row < arr.length; row++) {
            for (let col = 0; col < arr[row].length; col++) {
                sum += arr[row][col];
            }
        }
        return sum;
    }

    let matrix = [[1, 2, 3], [4, 3, 2]];
    console.log(sum(matrix));
}
// sum();

//2.Transfer Matrix
function transpose() {
    function transfar(arr) {
        for(let row = 0; row < arr.length; row++){
            for(let col = row + 1 ; col < arr[row].length; col++){
                let temp = arr[row][col];
                arr[row][col] = arr[col][row];
                arr[col][row] = temp;
            }
        }
        return arr;
    }

    let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    console.log(transfar(matrix));
}
// transpose()

//3.