let btn = document.createElement("button");
btn.textContent = "Total Price";

let body = document.querySelector("body");
body.insertBefore(btn, body.children[1]);

btn.addEventListener('click', () => {
    let sum = 0;
    let price = document.querySelectorAll(".price");

    for (let i = 0; i < price.length; i++) {
        let temp = price[i].textContent;
        sum += Number(temp);
    }

    let body = document.createElement("p");
    body.textContent = 
})
