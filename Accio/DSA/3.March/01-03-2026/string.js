let str = "Hello World";

// console.log(str);
// console.log(str[2]);

str[0] = 'y'
// console.log(str);


// string interpolaiton

//you are given a string you have to find the vowles in its indicies(a,e,i,o,u)

function vowles(string) {
    for (let i = 0; i < string.length; i++) {
        let ele = string[i];
        if (ele === "a" || ele === "e" || ele === "i" || ele === "o" || ele === "u") {
            console.log(i + " " + ele);
        }
    }
}
// vowles(str);

//convert string into arr of charactor
function copyOfChar(str) {
    let s = str.split("");
    console.log(s);
}

// copyOfChar(str);


function copyOfCharAt(str){
    let s = [];
    let i = 0;
    for (const ele of str) {
        s[i] = ele;
        i++;
    }
    return s;
}
// console.log(copyOfCharAt(str));



//array of string (2D)

