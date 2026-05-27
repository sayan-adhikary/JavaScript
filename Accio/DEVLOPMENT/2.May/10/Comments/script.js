let likes = 0;
let dislikes = 0;
let share = 0;
let commentId = 0;

let arr = [];

let prop = document.querySelector('#image-div');

prop.addEventListener('click', (e) => {

    let ele = e.target;

    if (ele.tagName == 'BUTTON') {

        let type = ele.id;

        if (type == "like") {
            likes++;
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

            let input = document.querySelector('input');
            let msg = input.value;

            if (msg == "") return;

            input.value = "";

            commentId++;

            let obj = {
                id: commentId,
                text: msg,
                like: 0
            };

            arr.push(obj);

            sortComments();
        }
    }
});


// SORT COMMENTS BASED ON LIKES
function sortComments() {

    arr.sort((a, b) => b.like - a.like);

    let comments = document.getElementById('comments');

    comments.innerHTML = "";

    for (let obj of arr) {

        let newDiv = document.createElement('div');

        newDiv.style.display = "flex";
        newDiv.style.gap = "1rem";

        newDiv.id = obj.id;

        let p = document.createElement('p');
        p.textContent = obj.text;

        let likeBtn = document.createElement('button');
        likeBtn.textContent = "like";
        likeBtn.classList.add('like');

        let span = document.createElement('span');
        span.textContent = obj.like;

        let delBtn = document.createElement('button');
        delBtn.textContent = "DEL";
        delBtn.classList.add('del-comment');

        newDiv.appendChild(p);
        newDiv.appendChild(likeBtn);
        newDiv.appendChild(span);
        newDiv.appendChild(delBtn);

        comments.appendChild(newDiv);
    }
}


// COMMENT EVENTS
let comments = document.querySelector('#comments');

comments.addEventListener('click', (e) => {

    let ele = e.target;

    if (ele.tagName == "BUTTON") {

        // LIKE COMMENT
        if (ele.matches('.like')) {

            let par = ele.parentElement;

            let parId = Number(par.id);

            for (let x of arr) {

                if (x.id == parId) {

                    x.like++;

                    break;
                }
            }

            // RE-SORT COMMENTS
            sortComments();
        }

        // DELETE COMMENT
        else if (ele.matches('.del-comment')) {

            let par = ele.parentElement;

            for (let i = 0; i < arr.length; i++) {

                if (arr[i].id == Number(par.id)) {

                    arr.splice(i, 1);

                    break;
                }
            }

            sortComments();
        }
    }
});