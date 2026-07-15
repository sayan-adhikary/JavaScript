let x = 10;

function outer(x) {
    return function () {
        console.log(x);
    };
}

const fn = outer(90);   //function
console.log(fn);

x = 50;

fn();
console.log("x", x);