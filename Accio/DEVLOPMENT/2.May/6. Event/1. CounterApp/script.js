let count = 0;

const counter = document.getElementById("counter");
const inputBox = document.getElementById("inputBox");

const setBtn = document.getElementById("setBtn");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateCounter() {
    counter.innerText = count;
}

setBtn.addEventListener("click", () => {
    count = Number(inputBox.value);
    updateCounter();
});

increaseBtn.addEventListener("click", () => {
    count++;
    updateCounter();
});

decreaseBtn.addEventListener("click", () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener("click", () => {  //check letter
    count = inputBox.value;
    updateCounter();
});