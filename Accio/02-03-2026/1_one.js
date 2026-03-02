//problem
//you have a given a string, you have to return a new string where vowels are replaced by its successesive consonants.
//a -> b
//e -> f
//i -> j
//o -> p
//u -> v
let string = "rahul";
function replaceVowels(str) {
    let strArr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            strArr.push('b');
        } else if (str[i] === 'e') {
            strArr.push('f');
        } else if (str[i] === 'i') {
            strArr.push('j');
        } else if (str[i] === 'o') {
            strArr.push('p');
        } else if (str[i] === 'u') {
            strArr.push('v');
        } else {
            strArr.push(str[i]);
        }
    }
    return strArr.join('');
}
console.log(replaceVowels(string));