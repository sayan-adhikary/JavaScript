document.addEventListener("DOMContentLoaded", function () {
    const likeCountEl = document.getElementById("likeCount");
    const shareCountEl = document.getElementById("shareCount");
    const commentInput = document.getElementById("commentInput");
    const commentsList = document.getElementById("commentsList");

    let postLike = 0;
    let postShare = 0;

    // "desc" = highest likes first
    // "asc"  = lowest likes first
    let sortOrder = "desc";

    function sortComments() {
        const comments = Array.from(commentsList.querySelectorAll(".comment-item"));

        comments.sort(function (a, b) {
            const likeA = Number(a.dataset.like) || 0;
            const likeB = Number(b.dataset.like) || 0;

            if (sortOrder === "asc") {
                return likeA - likeB;
            } else {
                return likeB - likeA;
            }
        });

        comments.forEach(function (comment) {
            commentsList.appendChild(comment);
        });
    }

    function createCommentItem(commentText) {
        const commentItem = document.createElement("div");
        commentItem.className = "comment-item";
        commentItem.dataset.like = "0";

        const text = document.createElement("p");
        text.className = "comment-text";
        text.textContent = commentText;

        const buttonWrap = document.createElement("div");
        buttonWrap.className = "comment-buttons";

        const likeButton = document.createElement("button");
        likeButton.type = "button";
        likeButton.className = "comment-like-btn";
        likeButton.textContent = "Like 0";

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "comment-delete-btn";
        deleteButton.textContent = "Delete";

        buttonWrap.appendChild(likeButton);
        buttonWrap.appendChild(deleteButton);

        commentItem.appendChild(text);
        commentItem.appendChild(buttonWrap);

        return commentItem;
    }

    function addComment() {
        const commentText = commentInput.value.trim();

        if (commentText === "") return;

        const commentItem = createCommentItem(commentText);
        commentsList.appendChild(commentItem);

        commentInput.value = "";
        commentInput.focus();
    }

    document.addEventListener("click", function (event) {
        const target = event.target;

        if (target.id === "likeBtn") {
            postLike++;
            likeCountEl.textContent = postLike;
            return;
        }

        if (target.id === "shareBtn") {
            postShare++;
            shareCountEl.textContent = postShare;
            return;
        }

        if (target.id === "addCommentBtn") {
            addComment();
            return;
        }

        if (target.id === "deleteAllBtn") {
            commentsList.innerHTML = "";
            return;
        }

        if (target.classList.contains("comment-like-btn")) {
            const commentItem = target.closest(".comment-item");
            const currentLike = Number(commentItem.dataset.like) || 0;

            commentItem.dataset.like = String(currentLike + 1);
            target.textContent = `Like ${currentLike + 1}`;
            return;
        }

        if (target.classList.contains("comment-delete-btn")) {
            const commentItem = target.closest(".comment-item");
            commentItem.remove();
            return;
        }
    });

    commentInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addComment();
        }
    });

    commentInput.addEventListener("blur", function () {
        sortComments();
    });
});