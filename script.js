const ROCK_STR = "rock";
const PAPER_STR = "paper";
const SCISSORS_STR = "scissors"

function getUserSelection(promptMsg) {
    return prompt(promptMsg).toLowerCase();
}

function isSelectionValid(userSel) {
    return userSel == ROCK_STR || userSel == PAPER_STR || userSel == SCISSORS_STR;
}

function game() {
    let userSel = getUserSelection("Enter either Rock, Paper or Scissors to begin playing.");
    while(!isSelectionValid(userSel)) {
        userSel = getUserSelection("Invalid input, please enter either Rock, Paper or Scissors.");
    }
    return userSel;
}

function computerPlay() {
    const randomNum = Math.floor(Math.random()*3)
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


// console.log(game());
console.log(computerPlay());