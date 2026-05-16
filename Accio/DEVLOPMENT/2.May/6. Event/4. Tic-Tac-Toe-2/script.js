let arr = [];

let row0 = document.querySelectorAll('.row0 button');
let row1 = document.querySelectorAll('.row1 button');
let row2 = document.querySelectorAll('.row2 button');

arr[0] = row0;
arr[1] = row1;
arr[2] = row2;

// 0 = empty
// 1 = X
// 2 = O
let vis = new Array(3);
vis[0] = new Array(3).fill(0);
vis[1] = new Array(3).fill(0);
vis[2] = new Array(3).fill(0);

let turnX = true;
let cnt = 0;
let finished = false;

// message element
let result = document.getElementById('display');
result.style.textAlign = "center";
result.style.margin = "1rem";

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        arr[i][j].addEventListener('click', () => {
            
            // game already finished
            if (finished) {
                alert("Game finished");
                return;
            }

            // already filled
            if (vis[i][j] !== 0) {
                alert("Already filled. Choose another block.");
                return;
            }

            cnt++;

            let img = document.createElement('img');
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';

            if (turnX) {

                vis[i][j] = 1;
                img.src = './cross.png';

                arr[i][j].appendChild(img);

                if (won(vis, i, j, 1)) {
                    finished = true;
                    result.textContent = "Player 1 Won!";
                    return;
                }

            } else {

                vis[i][j] = 2;
                img.src = './zero.png';

                arr[i][j].appendChild(img);

                if (won(vis, i, j, 2)) {
                    finished = true;
                    result.textContent = "Player 2 Won!";
                    return;
                }
            }

            // draw condition
            if (cnt === 9) {
                finished = true;
                result.textContent = "Match Draw!";
                return;
            }

            // change turn
            turnX = !turnX;
        });
    }
}

const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', resetGame);

function won(vis, x, y, val) {

    // horizontal
    if (
        vis[x][0] === val &&
        vis[x][1] === val &&
        vis[x][2] === val
    ) {
        return true;
    }

    // vertical
    if (
        vis[0][y] === val &&
        vis[1][y] === val &&
        vis[2][y] === val
    ) {
        return true;
    }

    // main diagonal
    if (x === y) {
        if (
            vis[0][0] === val &&
            vis[1][1] === val &&
            vis[2][2] === val
        ) {
            return true;
        }
    }

    // anti-diagonal
    if (x + y === 2) {
        if (
            vis[0][2] === val &&
            vis[1][1] === val &&
            vis[2][0] === val
        ) {
            return true;
        }
    }
    return false;
}

function resetGame() {

    // reset variables
    turnX = true;
    cnt = 0;
    finished = false;

    // clear result text
    result.textContent = "";

    // reset board
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            // reset matrix
            vis[i][j] = 0;

            // remove image from button
            arr[i][j].innerHTML = "";
        }
    }
}