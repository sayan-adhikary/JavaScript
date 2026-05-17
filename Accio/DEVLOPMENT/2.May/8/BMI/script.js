let form = document.querySelector('form');

// form.addEventListener("keydown", (e) => {
//     if (e.key >= '0' && e.key <= '9') {
//         continue;
//     } else {
//         alert(e.key);
//         form.reset();
//     }
// })

data = [];
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let userName = document.getElementById('name')
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let userAge = document.getElementById('age');

    let h = height.value;
    let w = weight.value;
    if (isNaN(h) || isNaN(w)) {
        alert("Invalid input");
        return;
    }

    h = parseInt(height.value);
    w = parseInt(weight.value);

    // console.log(h, w);

    h /= 100;
    let bmi = w / (h ** 2)

    let obj = {
        name: userName.value,
        age: Number(userAge.value),
        height: h,
        weight: w,
        bmi: bmi.toFixed(2)
    }
    // console.log("obj", obj);
    data.push(obj);

    // console.log(data);

    // tr 5TextDecoder
    let row = document.createElement('tr');
    for (let x in obj) {
        let td = document.createElement('td');
        td.textContent = `${obj[x]}`;
        row.appendChild(td);
    }

    // console.log(row);

    let tbody = document.querySelector('tbody');
    tbody.appendChild(row);

    form.reset();
});


let btn = document.querySelectorAll('.btn');
for (let i = 0; i < btn.length; i++) {
    let srt = document.querySelector('')
}
//sort
