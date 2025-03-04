// - getComputerChoice by using Math.random
function getComputerChoice() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

// - getHumanChoice through prompt
// - humanChoice needs to be case-sensitive e.g. "RoCk", "rock", "ROCK"
let btnChoice = "";
function getHumanChoice() {
    return btnChoice;
}

// console.log("You select: " + getHumanChoice());

// - scoring module with humanScore and computerScore
//     - init with 0
let humanScore = 0;
let computerScore = 0;

// - playRound function which tracks score
//     - a function with two args humanChoice and computerChoice
//      - console.log of playRound with a string value e.g. "You lose! x beats y"

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "ROCK" && computerChoice === 1) {
        console.log("It's a tie!");
    }
    else if (humanChoice === "PAPER" && computerChoice === 1) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats ROCK.");
    }            
    else if (humanChoice === "SCISSOR" && computerChoice === 1){
        computerScore++;
        console.log("You lose! ROCK beats " + humanChoice + ".");
    }
    else if (humanChoice === "PAPER" && computerChoice === 2) {
        console.log("It's a tie!");
    }
    else if (humanChoice === "SCISSOR" && computerChoice === 2) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats PAPER.");
    }            
    else if (humanChoice === "ROCK" && computerChoice === 2){
        computerScore++;
        console.log("You lose! PAPER beats " + humanChoice + ".");
    }        
    else if (humanChoice === "SCISSOR" && computerChoice === 3) {
        console.log("It's a tie!");
    }
    else if (humanChoice === "ROCK" && computerChoice === 3) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats SCISSOR.");
    }            
    else if (humanChoice === "PAPER" && computerChoice === 3){
        computerScore++;
        console.log("You lose! SCISSOR beats " + humanChoice + ".");
    }
}

function playGame(rounds) {
    let i = 0;
    while (i < rounds) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++;
    }
    // final score message
    console.log("Running Score: Human: " + humanScore + ", Robot: " + computerScore);

    // game over message
    if (humanScore === 5) {
            console.log("Congratulations! You win the game!");
    }
    else if (computerScore === 5) {
        console.log("You lose the game. Try again next time.");
    }
}

// event listeners for button clicks
document.getElementById("rock").addEventListener("click", () => {
    btnChoice = "ROCK";
    playGame(1);
})

document.getElementById("paper").addEventListener("click", () => {
    btnChoice = "PAPER";
    playGame(1);
})

document.getElementById("scissor").addEventListener("click", () => {
    btnChoice = "SCISSOR";
    playGame(1);
})

