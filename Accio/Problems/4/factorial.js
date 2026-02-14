function factorial(number) {
    // if (number === 0) {
    //     return 1;
    // }
    let mult = 1;
    while(number > 0){
        mult *= number;
        number--;
    }
    return mult;
}

let  a = 0;
console.log(factorial(a));
