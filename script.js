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

console.log(getUserSelection());