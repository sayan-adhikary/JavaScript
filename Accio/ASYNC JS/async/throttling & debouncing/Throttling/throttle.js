function greet(name){
    // heavy work => fetch calls which will increase the cost
    console.log("Work Done", name);
}


function throttle(fn, delay){
    let timer = 0;

    return function(...arg) {
        let curr = Date.now();
        // console.log("curr", curr);
        // console.log("timer", timer);
        // console.log("diff", curr - timer);
        if(curr - timer >= delay){
            fn(...arg);
            timer = curr;
        }
    }
}

const throttleGreet =  throttle(greet, 500);

throttleGreet(1);
setTimeout(()=>{
    throttleGreet(2);
}, 100);
setTimeout(()=>{
    throttleGreet(3);
}, 200);
setTimeout(()=>{
    throttleGreet(4);
}, 300);
setTimeout(()=>{
    throttleGreet(5);
}, 400);
setTimeout(()=>{
    throttleGreet(6);
}, 500);
setTimeout(()=>{
    throttleGreet(7);
}, 600);
setTimeout(()=>{
    throttleGreet(8);
}, 700);
setTimeout(()=>{
    throttleGreet(9);
}, 800);
setTimeout(()=>{
    throttleGreet(10);
}, 900);
setTimeout(()=>{
    throttleGreet(11);
}, 1000);



let btn = document.querySelector('button');

btn.addEventListener(('click'), ()=>{
    // greet();
    throttleGreet();
})

// window.addEventListener('scroll', ()=>{
//     // throttled function
// })