let likes = 0;
let dislikes = 0;
let share = 0;
let commentId = 0;

let arr = [];

let prop = document.querySelector('#image-div');

prop.addEventListener('click', (e) => {
    let ele = e.target;
    console.log("cliked", ele);
    if (ele.tagName == 'BUTTON') {
        let type = ele.id;
        // console.log("cliked in button type", type);
        if (type == "like") {
            // console.log("cliked like");
            likes++;
            // console.log(ele.parentElement.children[1].textContent, likes);
            ele.parentElement.children[1].textContent = likes;
        }
        else if (type == "dislike") {
            dislikes++;
            ele.parentElement.children[1].textContent = dislikes;
        }
        else if (type == "share") {
            share++;
            ele.parentElement.children[1].textContent = share;
        }
        else if (type == "add-comment") {
            console.log("Comment btn");
            let input = document.querySelector('input');
            let msg = input.value;

            if (msg == "") {
                return;
            }

            input.value = "";

            commentId++;

            let newDiv = document.createElement('div');
            // let divId = "comment" + "-" + commentId;
            let divId = commentId;
            newDiv.style.display = "flex";
            newDiv.style.gap = "1rem"
            newDiv.id = divId;

            let p = document.createElement('p');
            p.textContent = msg;

            let likeBtn = document.createElement('button');
            likeBtn.textContent = "like";
            likeBtn.classList.add('like');

            let span = document.createElement('span');
            span.textContent = 0;

            let delBtn = document.createElement('button');
            delBtn.textContent = "DEL";
            delBtn.classList.add('del-comment');

            newDiv.appendChild(p);
            newDiv.appendChild(likeBtn);
            newDiv.appendChild(span);
            newDiv.appendChild(delBtn);

            console.log("Heelo");
            console.log(newDiv);

            let comments = document.getElementById('comments');
            comments.appendChild(newDiv);

            let obj = {
                id: commentId,
                text: msg,
                like: 0,
            }

            arr.push(obj);
            console.log(arr);
        }
    }
})

let comments = document.querySelector('#comments');
comments.addEventListener('click', (e) => {
    let ele = e.target;
    if (ele.tagName == "BUTTON") {
        if (ele.matches('.like')) {
            let par = ele.parentElement;
            let parId = Number(par.id);

            for (let x of arr) {
                if (x.id == parId) {
                    x.like++;
                    par.children[2].textContent = x.like;
                }
            }

            // sort arr on the basis of likes
            // inner html to ""
            // insert comments on the basis of arr

        }
        else if (ele.matches('.del-comment')) {
            let par = ele.parentElement;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id == Number(par.id)) {
                    arr.splice(i, 1);
                    break;
                }
            }
            par.remove();
            console.log(arr);
        }
    }
})
