"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let playing = true;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const outputScreen = function (color) {
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".number").style.width = "30rem";
};

const game = function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess || guess < 1 || guess > 20) {
    displayMessage("⛔️ Number is between 1-20!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    outputScreen("#60b347");
    playing = false;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
      outputScreen("rgb(227, 86, 86)");
    }
  }
};

document.querySelector(".check").addEventListener("click", function () {
  if (playing) {
    game();
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  playing = true;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
