// computer random choices
function computerPlay() {
  let computerChoice = ["rock", "paper", "scissors"];
  let randomChoice =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  return randomChoice;
}
// To store computer and player scores
let computerScore = 0;
let playerScore = 0;

function play(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay();
  if (playerSelection == computerSelection) {
    console.log(computerSelection);
    return "Tie Game!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(computerSelection);
    playerScore++;

    console.log(playerScore);
    return `${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log(computerSelection);
    playerScore++;

    console.log(playerScore);
    return `${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log(computerSelection);
    playerScore++;

    console.log(playerScore);
    return `${playerSelection} cuts ${computerSelection}`;
  } else {
    console.log(computerSelection);
    computerScore++;

    console.log(computerScore);
    return "Computer Wins round";
  }
}

// Start game
function startGame() {
  for (i = 0; i < 5; i++) {
    let user = prompt("Enter Paper, Rock or Scissors: ");
    let comp = computerPlay();
    if (user == "") {
      prompt("Enter Paper, Rock or Scissors: ");
    } else console.log(play(user, comp));
  }

  //   To report a winner or loser at the end of game
  if (computerScore > playerScore) {
    console.log("Computer is Champion! Player loses");
  } else if (computerScore == playerScore) {
    console.log("Play again");
  } else {
    console.log("Player is Champion! Computer loses");
  }
}
startGame();

