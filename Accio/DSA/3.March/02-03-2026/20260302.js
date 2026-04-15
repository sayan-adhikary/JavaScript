// Date 2nd March 2026

// let a = 5;

// console.log("Hello", a);
// console.log(`Hello ${a}`);

// let s = "Hello";
// console.log(s[0]);


// console.log(s);
// s[0] = 'Z';
// console.log(s);

// console.log(s.length);

// let t = s.toUpperCase();
// console.log(s.toUpperCase());
// console.log(s);

// s = "Rahul";
// console.log(s.slice(1,3));

// Problem 
// you are given a string, you have to return 
// a new string where vowels are replaced by its successive consonant

let s = "rohan";
let z = s.split('');
let t = [];

for (let i = 0; i < s.length; i++) {
    t[i] = s[i];
    if (t[i] === 'a') {
        t[i] = 'b';
    }
    else if (t[i] === 'o') {
        t[i] = 'p';
    }
}


let ans = t.join('');
console.log(ans);


let arr = ["raj", "sayan", "rohit"];

console.log(arr);
console.log(arr[2]);

// Problem
// you have to return the count of a given name in list of people

let cnt = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "raj") {
        cnt++;
    }
}
console.log(cnt);

// Problem 
// you have to change the letter 'a' to 'z', 
// in the list of people name and return the array of strings


ans = [];
for (let i = 0; i < arr.length; i++) {
    let str = arr[i].split('');
    for (let j = 0; j < str.length; j++) {
        if (str[j] === 'a') {
            str[j] = 'z';
        }
    }
    str = str.join('');
    ans.push(str);
}
console.log(ans);


let str = "rahul";
let result = "";
for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch === 'a') result += 'b';
    else if (ch === 'e') result += 'f';
    else if (ch === 'i') result += 'j';
    else if (ch === 'o') result += 'p';
    else if (ch === 'u') result += 'v';
    else result += ch;
}
console.log(result);
