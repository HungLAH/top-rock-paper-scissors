const ROCK_STR = "rock";
const PAPER_STR = "paper";
const SCISSORS_STR = "scissors"

function getUserSelection(promptMsg) {
    return prompt(promptMsg).toLowerCase();
}

function isSelectionValid(hand) {
    return hand == ROCK_STR || hand == PAPER_STR || hand == SCISSORS_STR;
}

function game() {
    let hand = getUserSelection("Enter either Rock, Paper or Scissors to begin playing.");
    while(!isSelectionValid(hand)) {
        hand = getUserSelection("Invalid input, please enter either Rock, Paper or Scissors.");
    }
    return hand;
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