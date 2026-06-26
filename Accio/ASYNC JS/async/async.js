console.log("Start");

// any heavy task
// let cnt = 0;
// for(let i=0; i<1e10; i++){
//     cnt++;
// }

function cb() {
    console.log("Hello");
}
setTimeout(cb, 2000);


console.log("End");




let data = fetch('https://dog.ceo/api/breeds/image/random')
console.log(data);


async function fetchUserData() {
    try {
        // Execution pauses here until the network request completes
        const response = await fetch("https://dog.ceo/api/breeds/image/random");

        // Execution pauses here until the body is parsed into JSON
        const data = await response.json();

        console.log(data);
    } catch (error) {
        // Catches network errors or issues parsing JSON
        console.error("Error:", error);
    }
}

fetchUserData();



// setTimeout(callback , delay);

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout")
}, 3000);

console.log("ENd");




console.log("Start");

setTimeout(() => {
    console.log("A");
}, 2000);

setTimeout(() => {
    console.log("B");
}, 4000);

setTimeout(() => {
    console.log("C");
}, 1000);

console.log("End");

// start - end - C - A - B

console.log("Start");

setTimeout(() => {
    console.log("A");
}, 3000);

console.log("End");

//start - B - End - A
// start - End - B - A



console.log("Start");

setTimeout(function a() {
    console.log("A");
}, 2000);

setTimeout(function b() {
    console.log("B");
}, 0);

setTimeout(function c() {
    console.log("C");
}, 1000);

console.log("End");








console.log("Start");

setTimeout(function a() {
    console.log("A");
}, 2000);

setTimeout(function b() {
    console.log("B 1");

    setTimeout(function c() {
        console.log("C")
    }, 3000);

    console.log("B 2");
}, 0);

console.log("End");





// clearTimeout

console.log("Start");

let id = setTimeout(function a() {
    console.log("A");
}, 4000);

console.log("id:", id);

clearTimeout(id);

console.log("End");






console.log("Start");

function cb() {
    console.log("Hello");
}

let id = setTimeout(cb, 1000);

setTimeout(() => {
    console.log("Clear")
    clearTimeout(id);
}, 4000);

console.log("End");



console.log("Start");

function cb() {
    console.log("Hello");
}

let id = setInterval(cb, 2000);

setTimeout(() => {
    console.log("Stopping the interval");
    clearInterval(id);
}, 10100);

console.log("End");


setTimeout(() => {
    console.log("Hello");
}, 5000);





for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log("Hello");
    }, 1000);
}




for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log("Hello");
    }, 1000 * i);
}


// implement setInterval using setTimeout


let flag = 1;
function cb() {
    if (flag == 0) {
        return;
    }
    console.log("Hello");
    setTimeout(cb, 2000);
}
cb();
setTimeout(() => {
    // flag = 0;
}, 10000);

// setTimeout(()=>{
//     console.log("Cleared");
//     clearTimeout(id);
// }, 10000);