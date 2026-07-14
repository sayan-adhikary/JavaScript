function greet(name) {
    console.log("Work done", name);
}

function debounce(fn, delay) {
    let timerId;
    return function (...arg) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            fn(...arg);
        }, delay);
    }
}

const debounceGreet = debounce(greet, 3000);

let input = document.querySelector('input');
input.addEventListener('input', () => {
    // greet();
    debounceGreet();
})