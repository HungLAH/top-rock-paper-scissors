const ROCK_STR = "rock";
const PAPER_STR = "paper";
const SCISSORS_STR = "scissors"
const DEFAULT_PROMPT = "Enter either Rock, Paper or Scissors to begin playing.";
const ERROR_PROMPT = "Invalid input, please enter only Rock, Paper or Scissors."

function getUserSelection() {
    let userSel = prompt(DEFAULT_PROMPT);
    while (!isSelectionValid(userSel)) {
        userSel = prompt(ERROR_PROMPT);
    }
    return userSel;
}

function isSelectionValid(userSel) {
    return userSel == ROCK_STR || userSel == PAPER_STR || userSel == SCISSORS_STR;
}

function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return ROCK_STR;
    }
    else if (randomNum == 1) {
        return PAPER_STR;
    }
    else {
        return SCISSORS_STR;
    }
}

function playRound(playerSelection, computerSelection) {
    console.log("Player selects " + playerSelection);
    console.log("Computer selects " + computerSelection);
    if (playerSelection == computerSelection) {
        return "It's a draw baby!"
    }
    else {
        switch (playerSelection) {
            case ROCK_STR:
                return (    
                    (computerSelection == SCISSORS_STR) ? `You Won! ${playerSelection} beats ${computerSelection}` : 
                    `You Lose! ${computerSelection} beats ${playerSelection}`
                );
            case PAPER_STR:
                return (
                    (computerSelection == ROCK_STR) ? `You Won! ${playerSelection} beats ${computerSelection}` : 
                    `You Lose! ${computerSelection} beats ${playerSelection}` 
                )
            case SCISSORS_STR:
                return (
                    (computerSelection == PAPER_STR) ? `You Won! ${playerSelection} beats ${computerSelection}` : 
                    `You Lose! ${computerSelection} beats ${playerSelection}`
                )
            default:
                return null;
        }
    }
    
}

console.log(playRound(getUserSelection(), computerPlay()));