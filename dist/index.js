const btn = Array.from(document.querySelectorAll("button"));
const rockEl = document.querySelector("#score");
const replayEl = document.querySelector("#play-again");

// To store computer and player scores
playerScore = 0;
computerScore = 0;
let value = "";

let playAgain = document.createElement("button");
playAgain.setAttribute("class", "border p-5 bg-green-600");
playAgain.innerText = "Play Again?";
playAgain.addEventListener("click", () => {
  location.reload();
});

// computer random choices
function computerPlay() {
  let computerChoice = ["rock", "paper", "scissors"];
  let randomChoice =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  return randomChoice;
}

function play(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    value = `Tie! Computer played: ${computerSelection}, Play again`;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      value = `Computer plays: ${computerSelection}`;
      computerScore++;
    } else {
      value = `Computer plays: ${computerSelection}`;
      playerScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      value = `Computer plays: ${computerSelection}`;
      computerScore++;
    } else {
      value = `Computer plays: ${computerSelection}`;
      playerScore++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      value = `Computer plays: ${computerSelection}`;
      computerScore++;
    } else {
      value = `Computer plays: ${computerSelection}`;
      playerScore++;
    }
  }
  rockEl.innerHTML = `${value} <br> Player: ${playerScore} point <br> Computer: ${computerScore} point`;
  console.log(`player score ${playerScore} computer score ${computerScore}`);
  scores();
}

// To report a winner or loser at the end of game
function scores(rounds = 5) {
  if (playerScore === rounds) {
    console.log("player champ");
    rockEl.innerHTML = `${value} <br> You Won!: ${playerScore} Points`;
    btn.forEach((button) => button.setAttribute("disabled", ""));
    replayEl.appendChild(playAgain);
  } else if (computerScore === rounds) {
    console.log("comp champ");
    rockEl.innerHTML = `${value} <br> Computer Won!: ${computerScore} Points`;
    btn.forEach((button) => button.setAttribute("disabled", ""));
    replayEl.appendChild(playAgain);
  }
}

// Start game
function startGame(user, comp) {
  btn.map((button) =>
    button.addEventListener("click", (e) => {
      play((user = e.target.value), (comp = computerPlay()));

      console.log(`user: ${user}`);
      console.log(`computer: ${comp}`);
    })
  );
}
startGame();
