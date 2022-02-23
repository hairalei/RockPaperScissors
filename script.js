"use strict";

const gameStatus = document.querySelector(".status");
const gameDetails = document.querySelector(".status-details");
const playerChoiceTxt = document.querySelector(".players-choice");
const playerScoreTxt = document.querySelector(".player-score");
const computerScoreTxt = document.querySelector(".computer-score");
const computerChoiceTxt = document.querySelector(".computers-choice");
const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnScissors = document.querySelector(".btnScissors");
const btnNewGame = document.querySelector(".new-game");
const playerBG = document.querySelector(".player");
const computerBG = document.querySelector(".computer");

const choices = ["Rock", "Paper", "Scissors"];
const emojis = ["✊", "🖐", "✌"];
let playerScore = 0;
let playerChoice;
let computerScore = 0;
let computerChoice;
let compEmoji;

function makeChoice() {
  let idx = Math.trunc(Math.random() * 3);
  compEmoji = emojis[idx];
  return choices[idx];
}

function btnClick() {
  computerChoice = makeChoice();
  computerChoiceTxt.textContent = compEmoji;
}

function playGame() {
  if (playerChoice === computerChoice) {
    gameStatus.textContent = "It's a tie!";
    gameDetails.textContent = `You both picked ${computerChoice}!`;
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore++;
    playerScoreTxt.textContent = playerScore;
    gameStatus.textContent = "You win!";
    gameDetails.textContent = `${playerChoice} beats ${computerChoice}!`;
  } else {
    computerScore++;
    computerScoreTxt.textContent = computerScore;
    gameStatus.textContent = "You lose!";
    gameDetails.textContent = `${computerChoice} beats ${playerChoice}!`;
  }

  if (playerScore === 5) {
    gameStatus.textContent = "YOU WON!";
    gameDetails.textContent = "Congratulations!";
    playerBG.style.backgroundColor = "#edede9";
    computerBG.style.backgroundColor = "#0b090a";
    computerBG.style.color = "#aaa";

    gameOver();
  } else if (computerScore === 5) {
    gameStatus.textContent = "YOU LOST!";
    gameDetails.textContent = "Better luck next time!";
    computerBG.style.backgroundColor = "#edede9";
    playerBG.style.backgroundColor = "#0b090a";
    playerBG.style.color = "#aaa";

    gameOver();
  }
}

function gameOver() {
  document.querySelector(".new-game").style.visibility = "visible";
  gameStatus.style.fontSize = "7rem";

  for (let i of document.querySelectorAll(".btn")) {
    i.disabled = true;
    i.classList.add("disabled");
  }
}

btnRock.addEventListener("click", function () {
  btnClick();
  playerChoice = "Rock";
  playerChoiceTxt.textContent = "✊";
  playGame();
});

btnPaper.addEventListener("click", function () {
  btnClick();
  playerChoice = "Paper";
  playerChoiceTxt.textContent = "🖐";
  playGame();
});

btnScissors.addEventListener("click", function () {
  btnClick();
  playerChoice = "Scissors";
  playerChoiceTxt.textContent = "✌";
  playGame();
});

btnNewGame.addEventListener("click", function () {
  location.reload();
});
