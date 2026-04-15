function pattern_print_oneToEnd(nums) {
    let count = 1;
    for (let i = 1; i < nums; i++) {
        let print = "";
        for (let j = i; j <= nums; j++) {
            print += count + " ";
            count++;
        }
        console.log(print);
    }
}
// pattern_print_oneToEnd(5);
// console.log("A".charCodeAt());

function pattern_print_oneEnd(nums) {
    for (let i = 1; i <= nums; i++) {
        let count = i;
        let number = "";
        for (let j = i; j >= 1; j--) {
            number += count + " ";
            count++;
        }
        console.log(number);
    }
}
// pattern_print_oneEnd(5)

function patterPrintAtoB(nums) {
    for (let i = 1; i <= nums; i++) {
        let printAlphabet = "";
        let startChar = 97 + i - 1;   
        
        for (let j = 0; j < i; j++) {
            printAlphabet += String.fromCharCode(startChar + j) + " ";
        }
        console.log(printAlphabet);
    }
}

patterPrintAtoB(5);