let result = document.getElementById("result");

let userChoiceBox = document.getElementById("user-choice");
let computerChoiceBox = document.getElementById("computer-choice");

let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let choices = [
    {
        name: "Stone",
        image: "rock.png"
    },
    {
        name: "Paper",
        image: "paper.png"
    },
    {
        name: "Scissor",
        image: "scissors.png"
    }
];

// Button Click Events
stone.addEventListener("click", function () {
    playGame(choices[0]);
});

paper.addEventListener("click", function () {
    playGame(choices[1]);
});

scissor.addEventListener("click", function () {
    playGame(choices[2]);
});

function playGame(userChoice) {

    // Random Computer Choice
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];

    // Show User Choice Image
    userChoiceBox.innerHTML = `
        <h3>My Choice</h3>
        <img src="${userChoice.image}" width="120">
    `;

    // Show Computer Choice Image
    computerChoiceBox.innerHTML = `
        <h3>Computer Choice</h3>
        <img src="${computerChoice.image}" width="120">
    `;

    // Result Logic
    if (userChoice.name === computerChoice.name) {
        result.innerText = "Match Draw";
    }

    else if (
        (userChoice.name === "Stone" && computerChoice.name === "Scissor") ||
        (userChoice.name === "Paper" && computerChoice.name === "Stone") ||
        (userChoice.name === "Scissor" && computerChoice.name === "Paper")
    ) {
        result.innerText = "You Win";
    }

    else {
        result.innerText = "Computer Wins";
    }
}