let doc = document.querySelector('body');
let bl = document.querySelector("#bl");
let wh = document.querySelector("#wh");

doc.addEventListener('click', (e) => {
    let ele = e.target;
    console.log(ele);

    if (ele.tagName === 'BUTTON') {

        let type = ele.id;

        if (type === "bl") {
            doc.style.backgroundColor = "black";
            doc.style.color = "white";
        }

        if (type === "wh") {
            doc.style.backgroundColor = "white";
            doc.style.color = "black";
        }
    }
});