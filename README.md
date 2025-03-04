# rock-paper-scissor
console rock-paper-scissor game
a basic js and dom manipulation exercise through the odin project curriculum

## pseudocode (console version)
- getComputerChoice by using Math.random
- getHumanChoice through prompt
- scoring module with humanScore and computerScore
    - init with 0
- playRound function which tracks score
    - a function with two args humanChoice and computerChoice
    - humanChoice needs to be case-sensitive e.g. "RoCk", "rock", "ROCK"
    - console.log of playRound with a string value e.g. "You lose! x beats y"
- playGame function starts the game
    - move playRound into playGame to keep track of score
    - declares a winner after 5 rounds

## results (console)
![Console screenshot](/final.png)

## pseudocode (ui version)
- assign btnChoice value with button event listener for each choice
- call playGame function within event listener
    - modify scoring logic to announce winner once 5 points have been reached by either
- playGame updated logic
    - while either score is less than 5, don't print message
- append a scoring and results div

## adding a ui results

