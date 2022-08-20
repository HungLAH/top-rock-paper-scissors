const ROCK_STR = "rock";
const PAPER_STR = "paper";
const SCISSORS_STR = "scissors"
const DEFAULT_PROMPT = "Enter either Rock, Paper or Scissors to begin playing.";
const ERROR_PROMPT = "Invalid input, please enter only Rock, Paper or Scissors."
const WIN_OUTCOME = "Win"
const LOSE_OUTCOME = "Lose"

function getUserSelection(roundNum = 1) {
  let userSel = prompt(`${DEFAULT_PROMPT} (Round ${roundNum})`).toLowerCase();
  while (userSel && !isSelectionValid(userSel)) {
    userSel = prompt(`${ERROR_PROMPT} (Round ${roundNum}`);
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
  console.log(`Player selects ${playerSelection}, Computer selects ${computerSelection}`);
  if (playerSelection == computerSelection) {
    return "It's a draw baby!"
  }
  else {
    let playerOutcome;
    switch (playerSelection) {
      case ROCK_STR:
        playerOutcome = (computerSelection == SCISSORS_STR) ? WIN_OUTCOME : LOSE_OUTCOME;
        break;
      case PAPER_STR:
        playerOutcome = (computerSelection == ROCK_STR) ? WIN_OUTCOME : LOSE_OUTCOME;
        break;
      case SCISSORS_STR:
        playerOutcome = (computerSelection == PAPER_STR) ? WIN_OUTCOME : LOSE_OUTCOME;
        break;
      default:
        break;
    }
    return playerOutcome == WIN_OUTCOME ? `You ${WIN_OUTCOME}! ${playerSelection} beats ${computerSelection}` :
      `You ${LOSE_OUTCOME}! ${computerSelection} beats ${playerSelection}`
  }
}

function game() {
  let playerScore = 0, computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    let userSelection = getUserSelection(i);
    if (!userSelection) {
      // User cancels
      break;
    }
    let computerSelection = computerPlay();
    let playerOutcome = playRound(userSelection, computerSelection);
    if (playerOutcome.indexOf(WIN_OUTCOME) != -1) {
      playerScore += 1;
    }
    else if (playerOutcome.indexOf(LOSE_OUTCOME) != -1) {
      computerScore += 1;
    }
    else {
      // do nothing
    }
    console.log(playerOutcome);
    console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`);
  }
  return playerScore == computerScore ? alert("It's a draw") : playerScore > computerScore ? alert("Player wins!") : alert("Player loses!");
}

console.log(game());