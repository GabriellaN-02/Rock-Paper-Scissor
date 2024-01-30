//icon containers for both PC and player
const questionMarkPC = document.querySelector("#questionMarkPC");
const questionMarkPlayer = document.querySelector("#questionMarkPlayer");

// icons
const rockIcon = document.querySelector("#rock");
const paperIcon = document.querySelector("#paper");
const scissorsIcon = document.querySelector("#scissors");
const gameIcons = document.querySelectorAll("#gameIcons i");

const mainResult = document.querySelector("#mainResult");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  questionMarkPC.innerHTML = "";

  switch (randomNumber) {
    case 0:
      questionMarkPC.appendChild(rockIcon.cloneNode(true));
      return "rock";
    case 1:
      questionMarkPC.appendChild(paperIcon.cloneNode(true));
      return "paper";
    case 2:
      questionMarkPC.appendChild(scissorsIcon.cloneNode(true));
      return "scissors";
  }
}

// Add click events to all game icons for the player

function playerMove() {
  questionMarkPlayer.innerHTML = "";
  rockIcon.addEventListener("click", () => questionMarkPlayer.appendChild(rockIcon.cloneNode(true)));
  paperIcon.addEventListener("click", () => questionMarkPlayer.appendChild(paperIcon.cloneNode(true)));
  scissorsIcon.addEventListener("click", () => questionMarkPlayer.appendChild(scissorsIcon.cloneNode(true)));
}

playerMove();
