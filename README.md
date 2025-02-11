# rock-paper-scissor
console rock-paper-scissor

## pseudocode
- getComputerChoice by using Math.random
- getHuman choice through prompt
- scoring module with humanScore and computerScore
    - init with 0
- playRound function which tracks score
    - a function with two args humanChoice and computerChoice
    - humanChoice needs to be case-sensitive e.g. "RoCk", "rock", "ROCK"
    - console.log of playRound with a string value e.g. "You lose! x beats y"
- playGame function starts the game
    - move playRound into playGame to keep track of score
    - declares a winner after 5 rounds