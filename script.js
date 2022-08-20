const ROCK_STR = "Rock";
const PAPER_STR = "Paper";
const SCISSORS_STR = "Scissors"
const WIN_OUTCOME = "win";
const LOSE_OUTCOME = "lose";
const DRAW_OUTCOME = "draw";
let playerScore = 0, computerScore = 0;

const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener("click", playRound));
const resultDiv = document.querySelector("#result");
const selections = document.querySelector("#selection");

function genComputerSel() {
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

function playRound(e) {
  let computerSelection = genComputerSel();
  let playerSelection = e.target.value;
  selections.textContent = `Player chooses ${playerSelection}, Computer chooses ${computerSelection}`;
  let outcome;
  switch (playerSelection) {
    case ROCK_STR:
      if (computerSelection == ROCK_STR) {
        outcome = DRAW_OUTCOME;
      }
      else if (computerSelection == PAPER_STR) {
        outcome = LOSE_OUTCOME;
      }
      else {
        outcome = WIN_OUTCOME;
      }
      break;
      
    case PAPER_STR:
      if (computerSelection == PAPER_STR) {
        outcome = DRAW_OUTCOME;
      }
      else if (computerSelection == SCISSORS_STR) {
        outcome = LOSE_OUTCOME;
      }
      else {
        outcome = WIN_OUTCOME;
      }
      break;
    
    case SCISSORS_STR:
      if (computerSelection == SCISSORS_STR) {
        outcome = DRAW_OUTCOME;
      }
      else if (computerSelection == ROCK_STR) {
        outcome = LOSE_OUTCOME;
      }
      else {
        outcome = WIN_OUTCOME;
      }
      break;

    default:
      break;
  }
  updateResult(outcome);
}

function updateResult(outcome) {
  updateScore(outcome);
  if (outcome == DRAW_OUTCOME) {
    resultDiv.textContent = `It's a draw (Player: ${playerScore} - Computer: ${computerScore})`
  }
  else {
    resultDiv.textContent = `Player ${outcome}s! (Player: ${playerScore} - Computer: ${computerScore})`
  }

  if (playerScore == 5 || computerScore == 5) {
    alert(`Player ${outcome}s the game (First to 5 points)!!`);
    playerScore = 0;
    computerScore = 0;
  }
}

function updateScore(outcome) {
  if (!outcome || outcome == DRAW_OUTCOME) return;
  if (outcome == WIN_OUTCOME) {
    playerScore++;
  } 
  else {
    computerScore++;
  }
}
