function multiplier(x) {
    return function (a) {
        console.log(a * x);
    }
}

const two = multiplier(2);
const three = multiplier(3);
console.log(two);

two(5);
three(5);