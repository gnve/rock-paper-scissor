// - getComputerChoice by using Math.random
function getComputerChoice() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

// - getHumanChoice through prompt
// - humanChoice needs to be case-sensitive e.g. "RoCk", "rock", "ROCK"
let promptAnswer = "";
function getHumanChoice() {
    return promptAnswer.toUpperCase();
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
    promptAnswer = prompt("Rock, paper, scissor?")
    console.log("You select: " + getHumanChoice());
    if (humanChoice == "ROCK" && computerChoice == 1) {
        console.log("It's a tie!")
    }
    else if (humanChoice == "PAPER" && computerChoice == 1) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats ROCK.")
    }            
    else if (humanChoice == "SCISSOR" && computerChoice == 1){
        computerScore++;
        console.log("You lose! ROCK beats " + humanChoice)
    }
    else if (humanChoice == "PAPER" && computerChoice == 2) {
        console.log("It's a tie!")
    }
    else if (humanChoice == "SCISSOR" && computerChoice == 2) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats PAPER.")
    }            
    else if (humanChoice == "ROCK" && computerChoice == 2){
        computerScore++;
        console.log("You lose! PAPER beats " + humanChoice)
    }        
    else if (humanChoice == "SCISSOR" && computerChoice == 3) {
        console.log("It's a tie!")
    }
    else if (humanChoice == "ROCK" && computerChoice == 3) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats SCISSOR.")
    }            
    else if (humanChoice == "PAPER" && computerChoice == 3){
        computerScore++;
        console.log("You lose! PAPER beats " + humanChoice)
    }
}

// playGame function starts the game
// - move playRound into playGame to keep track of score
// - declares a winner after 5 rounds
function playGame(rounds) {
    let i = 0;
    while (i < rounds) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++;
    }

console.log("FINAL SCORE! Human: " + humanScore + ", Robot: " + computerScore);
if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    }
    else {
        console.log("You lose. Try again next time.");
    }
}

playGame(3);

// todo
// scoring is wonky DONE
// prompt each round, not just keep one answer DONE
// playRound function does not output the first time