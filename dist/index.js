const btn = Array.from(document.querySelectorAll("button"));
const rockEl = document.querySelector("#score");
const replayEl = document.querySelector("#play-again");
const message = document.querySelector("#message");

// To store computer and player scores
playerScore = 0;
computerScore = 0;
let computerChoice = "";
let playerChoice = "";

// To play again
let playAgain = document.createElement("button");
playAgain.setAttribute("class", "border p-5 bg-white text-white");
playAgain.innerText = "Play Again?";
playAgain.addEventListener("click", () => {
  location.reload();
});

// computer random choices
function computerPlay() {
  let computerChoices = ["rock", "paper", "scissors"];
  let randomChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return randomChoice;
}

// player and computer choices
function play(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    message.innerHTML = `It's a tie! ${computerSelection} ties with ${playerSelection}`;
    computerChoice = `${computerSelection}`;
    playerChoice = ` ${playerSelection}`;
    console.log(playerSelection);
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      message.innerHTML = `Computer ${computerSelection} beats your ${playerSelection}🤦‍♂️`;
      computerChoice = `${computerSelection}`;
      playerChoice = ` ${playerSelection}`;
      computerScore++;
    } else {
      message.innerHTML = `Your ${playerSelection} smashes Computer's ${computerSelection} 😁`;
      computerChoice = `${computerSelection}`;
      playerScore++;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      message.innerHTML = `Computer ${computerSelection} cuts your ${playerSelection}🤦‍♂️`;
      computerChoice = `${computerSelection}`;
      playerChoice = ` ${playerSelection}`;
      computerScore++;
    } else {
      message.innerHTML = `Your ${playerSelection} beats ${computerSelection} 😁`;
      computerChoice = `${computerSelection}`;
      playerChoice = ` ${playerSelection}`;
      playerScore++;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      message.innerHTML = `${computerSelection} smashes ${playerSelection}🤦‍♂️`;
      computerChoice = `${computerSelection}`;
      playerChoice = ` ${playerSelection}`;
      computerScore++;
    } else {
      message.innerHTML = `Your ${playerSelection} cuts ${computerSelection} 😁`;
      computerChoice = `${computerSelection}`;
      playerChoice = ` ${playerSelection}`;
      playerScore++;
    }
  }

  rockEl.innerHTML = ` <div class="flex flex-col text-center space-y-6">
  <div id="player-choice">${playerChoice}</div>
  <div id="player-score">Player: ${playerScore}</div>
</div>
<div class="flex flex-col text-center space-y-6">
  <div id="computer-choice">${computerChoice}</div>
  <div id="computer-score">computer: ${computerScore}</div>
</div>`;

  getScores();
}

// To report a winner or loser at the end of game
function getScores(rounds = 5) {
  if (playerScore === rounds) {
    console.log("player champ");
    rockEl.innerHTML = `You Won! ${playerScore} Points 😎`;
    btn.forEach((button) => button.setAttribute("disabled", ""));
    replayEl.appendChild(playAgain);
  } else if (computerScore === rounds) {
    console.log("comp champ");
    rockEl.innerHTML = `Computer Won! ${computerScore} Points ☹`;
    btn.forEach((button) => button.setAttribute("disabled", ""));
    replayEl.appendChild(playAgain);
  }
}

// Start game
function startGame(user, comp) {
  btn.map((button) =>
    button.addEventListener("click", (e) => {
      let player = e.target.value;
      user = player.slice(0, 1).toUpperCase() + player.slice(1);
      let computer = computerPlay();
      comp = computer.slice(0, 1).toUpperCase() + computer.slice(1);
      play(user, comp);

      console.log(`user: ${user}`);
      console.log(`computer: ${comp}`);
    })
  );
}
startGame();
