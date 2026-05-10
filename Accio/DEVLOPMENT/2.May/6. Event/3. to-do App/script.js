let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click", () => {
    if (input.value === "") {
        return;
    }

    let li = document.createElement("li");

    li.innerText = input.value + " ";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    li.appendChild(deleteBtn);
    ul.appendChild(li);

    input.value = "";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
});