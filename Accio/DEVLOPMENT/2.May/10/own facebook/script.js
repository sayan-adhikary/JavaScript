let like = 0;
let Like = 0;
let dislike = 0;
let share = 0;
let newDivID = 0;
let commentId = 0;

let data = [];

let leftPart = document.getElementById("left-part");
let rightPart = document.getElementById("right-part");

//addingEventListiner
leftPart.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.innerText === "like") {
        like++;
        e.target.nextElementSibling.innerText = like;
    }

    if (e.target.innerText === "dislike") {
        dislike++;
        e.target.nextElementSibling.innerText = dislike;
    }

    if (e.target.innerText === "share") {
        share++;
        e.target.nextElementSibling.innerText = share;
    }

    if (e.target.id === "add-comm") {

        let a = document.querySelector("#comment");
        let comm = a.value;

        //empty string
        if (comm === "") {
            // return;
        }

        // parent div
        let div = document.querySelector(".newComm");
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", ++newDivID);

        // paragraph
        let p = document.createElement("p");
        p.innerText = comm;

        // like button
        let likeBtn = document.createElement("button");
        likeBtn.innerText = "Like";
        let likeCount = document.createElement("span");
        likeCount.innerText = "0";

        // delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        //adding style
        newDiv.style.display = "flex";
        newDiv.style.gap = "10px";

        // append inside div
        newDiv.appendChild(p);
        newDiv.appendChild(likeBtn);
        newDiv.appendChild(likeCount);
        newDiv.appendChild(deleteBtn);

        div.appendChild(newDiv);

        //store into a obj and push it into arr and (update with commentId)
        commentId++;
        let obj = {
                id: commentId,
                text: comm,
                like: 0
            };

            data.push(obj);
            console.log(data);
            

        // a.value = "";
    }
});


rightPart.addEventListener('click', (e) => {
    if (e.target.innerText === "Like") {
        Like++;
        e.target.nextElementSibling.innerText = Like;
    }
    if (e.target.innerText === "Delete") {
        e.target.closest("div").remove();
    }
});

//sort function
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