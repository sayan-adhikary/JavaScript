const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeNum");

let count = 0;

likeBtn.addEventListener("click", function () {
    count++;
    likeCount.textContent = count;
});

const shareBtn = document.getElementById("shareBtn");
const shareCount = document.getElementById("shareNum");

let countShare = 0;

shareBtn.addEventListener("click", function () {
    countShare++;
    shareCount.textContent = countShare;
});