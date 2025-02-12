// - getComputerChoice by using Math.random
let getComputerChoice = Math.floor(Math.random() * (4 - 1) + 1);

if (getComputerChoice < 2) {
    getComputerChoice='ROCK';
}
else if (getComputerChoice > 2) {
    getComputerChoice="PAPER";
}
else {
    getComputerChoice="SCISSOR";
}

// - getHumanChoice through prompt
let getHumanChoice = prompt("Rock, paper, scissor?")

// - humanChoice needs to be case-sensitive e.g. "RoCk", "rock", "ROCK"
getHumanChoice = getHumanChoice.toUpperCase();

console.log("The computer has chosen: " + getComputerChoice);
console.log("You have chosen: " + getHumanChoice);

// - scoring module with humanScore and computerScore
//     - init with 0
let humanScore = 0;
let computerScore = 0;

// - playRound function which tracks score
//     - a function with two args humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {
        if (humanChoice == "ROCK" && computerChoice == "ROCK") {
            console.log("It's a tie!")
        }
        else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
            return humanScore + 1;
            console.log("You win! " + humanChoice + " beats " + computerChoice)
        }            
        else if (humanChoice == "SCISSOR" && computerChoice == "ROCK"){
            return computerScore + 1;
            console.log("You lose! " + computerChoice + " beats " + humanChoice)
        }
        else if (humanChoice == "PAPER" && computerChoice == "PAPER") {
            console.log("It's a tie!")
        }
        else if (humanChoice == "SCISSOR" && computerChoice == "PAPER") {
            return humanScore + 1;
            console.log("You win! " + humanChoice + " beats " + computerChoice)
        }            
        else if (humanChoice == "ROCK" && computerChoice == "PAPER"){
            return computerScore + 1;
            console.log("You lose! " + computerChoice + " beats " + humanChoice)
        }        
        else if (humanChoice == "SCISSOR" && computerChoice == "SCISSOR") {
            console.log("It's a tie!")
        }
        else if (humanChoice == "ROCK" && computerChoice == "SCISSOR") {
            return humanScore + 1;
            console.log("You win! " + humanChoice + " beats " + computerChoice)
        }            
        else if (humanChoice == "PAPER" && computerChoice == "SCISSOR"){
            return computerScore + 1;
            console.log("You lose! " + computerChoice + " beats " + humanChoice)
        }
    }
console.log("Score is: Human: " + humanScore + ", Computer: " + computerScore);


const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;

playRound(humanSelection, computerSelection);
  


//     - console.log of playRound with a string value e.g. "You lose! x beats y"

// - playGame function starts the game

//     - move playRound into playGame to keep track of score

//     - declares a winner after 5 rounds