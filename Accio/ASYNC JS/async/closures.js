function hello(){
    let name = "Ramesh";
    setTimeout(()=>{
        console.log("Hello",name);
    }, 1000);
}

hello();



function outter(){
    let cnt = 0;

    function inner(){
        cnt++;
        console.log("cnt", cnt);
    }
    inner();
}

outter();





let x = 10;
function greet(){
    x++;
    console.log("x", x);
}

greet();
greet();
x = 20;
greet();



function outter(){
    let x = 10;

    return function inner(){
        x++;
        console.log("x", x);
    }
}

const y = outter();
console.log("y", y);

y();
y();
y();







function outer() {
    let count = 1;

    return function inner() {
        console.log(++count);
    };
}

const x = outer();
const y = outer();

console.log(x);
console.log(y);

x();
x();
y();
x();




// Applications of Closures

//1. Currying

function multiplier(x){
    return function(a){
        console.log(a*x);
    }
}

const two = multiplier(2);
const three = multiplier(3);
console.log(two);

two(5);
three(5);







let name = "Global";

function outer() {
    let name = "Local";

    return function () {
        console.log(name);
    };
}

const fn = outer();

fn();





let a = 10;
{
    let a = 20;
    if(true){
        let a = 30;
        console.log("1", a);
    }
    console.log("2", a);
}
console.log("3", a);






let x = 10;

function outer(x) {
    return function () {
        console.log(x);
    };
}

const fn = outer(90);

x = 50;

fn();
console.log("x", x);



// What is Closures
// Lexical Scope
// Lexical Environment
// Applications of Closures
// 1. Throttling
// 2. Debouncing
