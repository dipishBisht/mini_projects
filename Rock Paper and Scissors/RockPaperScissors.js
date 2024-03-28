let score = 0;
let p = document.querySelector("p");
let sec = document.querySelector("section");
p.innerText = `Score: ${score}`

function rand1() {
    let random = Math.random();
    let computerChoice = "";
    let userChoice = "Rock";
    if (random >= 0 && random < 1 / 3)
        computerChoice = "Rock";

    else if (random >= 1 / 3 && random < 2 / 3)
        computerChoice = "Paper";
    else if (random >= 2 / 3 && random < 1)
        computerChoice = "Scissor";

    if (computerChoice === "Rock") {
        sec.innerText = `Computer Choice is Rock
It means Tie`;
        sec.style.color = "black";
    }

    else if (computerChoice === "Paper") {
        sec.innerText = `Computer Choice is Paper
It means Computer Wins`;
        sec.style.color = "red";
        score--;
        p.innerText = `Score:${score}`
    }
    else {
        sec.innerText = `Computer Choice is Scissors
It means You Win`;
        sec.style.color = "green";
        score++;
        p.innerText = `Score:${score}`
    }
}

function rand2() {
    let random = Math.random();
    let computerChoice = "";
    let userChoice = "Paper";
    if (random >= 0 && random < 1 / 3)
        computerChoice = "Paper";

    else if (random >= 1 / 3 && random < 2 / 3)
        computerChoice = "Scissors";
    else if (random >= 2 / 3 && random < 1)
        computerChoice = "Rock";

    if (computerChoice === "Paper") {
        sec.innerText = `Computer Choice is Paper
It means Tie`;
        sec.style.color = "black";
    }
    else if (computerChoice === "Scissors") {
        sec.innerText = `Computer Choice is Scissors 
     It means Computer Wins`;
        sec.style.color = "red";
        score--
        p.innerText = `Score:${score}`
    }
    else {
        sec.innerText = `Computer Choice is Rock
It means You Win`;
        sec.style.color = "green";
        score++
        p.innerText = `Score:${score}`
    }
}

function rand3() {
    let random = Math.random();
    let computerChoice;
    let userChoice = "Scissors";
    if (random >= 0 && random < 1 / 3)
        computerChoice = "Scissors";

    else if (random >= 1 / 3 && random < 2 / 3)
        computerChoice = "Rock";
    else if (random >= 2 / 3 && random < 1)
        computerChoice = "Paper";

    if (computerChoice === "Scissors") {
        sec.innerText = `Computer Choice is Scissors
It means Tie`;
        sec.style.color = "black";
    }

    else if (computerChoice === "Paper") {
        sec.innerText = `Computer Choice is Paper
It means You Win`;
        sec.style.color = "green";
        score++;
        p.innerText = `Score:${score}`
    }

    else {
        sec.innerText = `Computer Choice is Rock
It means Computer Win`;
        sec.style.color = "red";
        score--
        p.innerText = `Score:${score}`
    }
}