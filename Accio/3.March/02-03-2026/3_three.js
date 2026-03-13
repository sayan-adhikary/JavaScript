//you have to change the letter "a" to "z"
let people = ["rahul", "sayan", "rahul", "sayan", "rahul", "sayan"];

function replaceAWithZ(str) {
    let strArr = [];
    for (let i = 0; i < str.length; i++) {
        let result = "";
        for (let j = 0; j < str[i].length; j++) {
            result += (str[i][j] === "a" ? "z" : str[i][j]);
        }
        strArr.push(result);
    }
    return strArr;
}
console.log(replaceAWithZ(people));